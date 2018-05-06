var multiplayer = new function(){
	var modFolder = "mods/multiplayer/";
	var initialized = false;
	var pos = {};
	var faceX;
	var faceY;
	var anim;
	var timer = 0;
	var mmoConnection;
	var players = {};
	var buttons;
	var nextEID = 0;
	var host = false;
	
	var mapLoading = true;
	
	var entities = [];
	var futureEntities = [];
	
	this.update = function(){
		if(cc.ig.playerInstance() && initialized){
			var player = cc.ig.playerInstance();
			var p = cc.ig.gameMain.getEntityPosition(player);
			var faceing = player.face;
			var anim = simplify.getAnimation(player);
			var animTimer = simplify.getAnimationTimer(player);
			if(!comparePosition(p, pos)){
				copyPosition(p, pos);
				mmoConnection.updatePosition(p);
			}
			if(!compareAnimation(faceing, anim)){
				copyAnimation(player);
				mmoConnection.updateAnimation(faceing, anim);
			}
			
			if(animTimer !== timer){
				timer = animTimer;
				mmoConnection.updateTimer(timer);
			}
			
			
			for(var i = 0; i < cc.ig.gameMain.entities.length; i++){
				var entity = cc.ig.gameMain.entities[i];
				if(!entity.multiplayerId)
					continue;
				
				var position = cc.ig.gameMain.getEntityPosition(entity);
				var animation = simplify.getAnimation(entity);
				var state = simplify.getCurrentState(entity);
				var health = simplify.getCurrentHp(entity);
				
				if(entity instanceof cc.ig.entityList.Enemy){
					if(!comparePosition(position, entity.lastPosition)){
						copyPosition(position, entity.lastPosition);
						mmoConnection.updateEntityPosition(entity.multiplayerId, position);
					}
					
					if(!compareEntityAnimation(entity.lastAnimation, animation, entity.face)){
						copyEntityAnimation(entity);
						mmoConnection.updateEntityAnimation(entity.multiplayerId, entity.face, animation);
					}

					if(health !== entity.lastHealth){
						entity.lastHealth = health;
						mmoConnection.updateEntityHealth(entity.multiplayerId, health);
					}
					
					if(state !== entity.oldState){
						entity.oldState = state;
						mmoConnection.updateEntityState(entity.multiplayerId, state);
					}

					if(entity.target !== entity.lastTarget) {
						entity.lastTarget = entity.target;

						var target = entity.target ? (entity.target.multiplayerId || 0) : null; 

						mmoConnection.updateEntityTarget(entity.multiplayerId, target); //entity.multiplayerId is undefined for player
					}
				}
			}
		}
	}
	
	this.afterUpdate = function(){
		if(!mapLoading && ig.ready){
			while(futureEntities.length > 0){
				this.spawnMultiplayerEntity(futureEntities[0]);
				futureEntities.shift();
			}
		}
	}
	
	this.onMapLoaded = function(){
		console.log("loaded: " + simplify.getActiveMapName());
		if(initialized){
			players = {};
		}
	}
	
	this.onPlayerTeleport = function(map, teleportPosition, hint){
		mapLoading = true;
		
		var marker;
		
		for(var key in teleportPosition){
			if(teleportPosition[key] && teleportPosition[key].constructor === String){
				marker = teleportPosition[key];
				break;
			}
		}
		
		mmoConnection.changeMap(map, marker);
	}
	
	this.onMapEnter = function(data){
		new cc.sc.EnemyType('multiplayer').load();

		if(!host){
			var entities = data.entities;
			for(var i = 0; i < entities.length; i++){
				if(entities[i].type === "Enemy"){
					new cc.sc.EnemyType(entities[i].settings.enemyInfo.type).load();
					
					entities.splice(i, 1);
					i--;
				}
				else if(entities[i].type === "EnemySpawner"){
					if(entities[i].settings.enemyTypes){
						var types = entities[i].settings.enemyTypes;
						for(var j = 0; j < types.length; ++j){
							new cc.sc.EnemyType(types[j].info.type).load();
						}
					}
					
					entities.splice(i, 1);
					i--;
				}
			}
		}
	}
	
	this.exit = function(){
		console.log("exit");
	}
	
	this.initialize = function(config){
		//Disable focus system
		ig.system[cc.ig.varNames.systemHasFocusLost] = function(){return false;}
		
		//Intercept teleport
		cc.ig.gameMain[cc.ig.varNames.gameMainTeleport] = function(map, teleportPosition, hint){
			multiplayer.onPlayerTeleport(map, teleportPosition, hint);
			return cc.ig.gameMain.teleport.call(cc.ig.gameMain, map, teleportPosition, hint);
		}
		
		//Intercept loadMap
		var originalLoad = cc.ig.gameMain[cc.ig.varNames.gameMainLoadMap];
		cc.ig.gameMain[cc.ig.varNames.gameMainLoadMap] = function(data){
			multiplayer.onMapEnter(data);
			var result = originalLoad.apply(cc.ig.gameMain, arguments);
			//multiplayer.afterMapEnter(data);
			mapLoading = false;
			return result;
		};
		
		//Intercept kill
		var originalKill = cc.ig.baseEntity.prototype[cc.ig.varNames.entityKill];
		cc.ig.baseEntity.prototype[cc.ig.varNames.entityKill] = function(){
			if(this.multiplayerId){
				multiplayer.onEntityKilled(this.multiplayerId);
				this.multiplayerId = undefined;
				delete this.multiplayerId;
			}
			
			return originalKill.apply(this, arguments);
		}
		
		//Intercept afterUpdate
		var originalUpdate = cc.ig.gameMain.update;
		cc.ig.gameMain.update = function(){
				var result = originalUpdate.apply(cc.ig.gameMain, arguments);
				multiplayer.afterUpdate();
				return result;
			};
		
		//Intercept spawn
		cc.ig.gameMain[cc.ig.varNames.gameMainSpawnEntity] = function(type, x, y, z, settings, showAppearEffects){ 
			return multiplayer.onEntitySpawn(type, x, y, z, settings, showAppearEffects) 
		};
		
		buttons = simplify.getInnerGui(cc.ig.GUI.menues[15].children[2])[cc.ig.varNames.titleScreenButtons];
		//buttons.splice(2, 2);
		//buttons[2].a.g.y = 80;
		buttons[2][cc.ig.GUI.renameTextButton]("Connect", true);
		buttons[2].originalCallback = buttons[2][cc.ig.GUI.callbackFunction];
		buttons[2][cc.ig.GUI.callbackFunction] = multiplayer.onConnect;
		mmoConnection = new MmoConnection(this, config.finalAddress);
		
	}
	
	this.onConnect = function(){
		var name = prompt("Please enter your username:", "");
		if(!name || name === "")
			return;
		mmoConnection.identify(name);
	}
	
	this.onIdentified = function(successfull, data){
		if(successfull){
			buttons[2].originalCallback();
			initialized = true;
			console.log('Indentified as ' + data.success);
			host = data.isHost;
			if(data.isHost)
				console.log('You are the host');
		}else{
			console.log('Indentifying failed!');
			sc.To.yzb("This name is already taken!", r, "OK");
		}
	}
	
	this.onPlayerChangeMap = function(player, isEntering, pos, map, marker){
		if(isEntering){
			var interv = setInterval(function(){
				if(cc.ig.gameMain.entities.length > 0 && (typeof cc.ig.gameMain.getLoadingState() !== "string" || cc.ig.gameMain.getLoadingState().indexOf("LOADING MAP: ") == -1)){
					new cc.sc.EnemyType('multiplayer').load(function(){ //Make sure entity is loaded
						var entity = cc.ig.gameMain.spawnEntity("Enemy", pos.x, pos.y, pos.z, {
							name: player,
							enemyInfo: {
								type: "multiplayer",
								group: "",
								party: "PLAYER"
							},
							"mapId": 233
						});
						players[player] = {name: player, pos: {x: pos.x, y: pos.y, z: pos.z}, entity: entity};
						console.log(players[player]);
					});
					clearInterval(interv);
				}
			});
		}else{
			players[player] = undefined;
			
			cc.ig.gameMain.teleport(map, cc.ig.TeleportPosition.createFromJson({marker: marker}))
			mmoConnection.changeMap(map, marker);
		}
	}
	

	this.registerEntity = function(id, type, pos, settings){
		if(host || entities[id])
			return;
		
		var e = {id: id, type: type, pos: pos, settings: settings};
		
		if(mapLoading || !ig.ready)
			futureEntities.push(e);
		else
			this.spawnMultiplayerEntity(e);
	}
	
	this.spawnMultiplayerEntity = function(e){
		new cc.sc.EnemyType(e.settings.enemyInfo.type).load(function(){
			var entity = multiplayer.onEntitySpawn(e.type, e.pos.x, e.pos.y, e.pos.z, e.settings);

			entities[e.id] = entity;
			entity.multiplayerId = e.id;
			
			var protectedPos = {xProtected: e.pos.x, yProtected: e.pos.y, zProtected: e.pos.z};
			
			Object.defineProperty(protectedPos, 'x', { get: function() { return protectedPos.xProtected }, set: function(){} });
			Object.defineProperty(protectedPos, 'y', { get: function() { return protectedPos.yProtected }, set: function(){} });
			Object.defineProperty(protectedPos, 'z', { get: function() { return protectedPos.zProtected }, set: function(){} });
			Object.defineProperty(entity[cc.ig.varNames.entityData], cc.ig.varNames.entityPosition, { get: function() { return protectedPos }, set: function(){console.log("tried to maniplulate pos")} });
			
			var protectedAnim = entity[cc.ig.varNames.currentAnimation];
			
			Object.defineProperty(entity, cc.ig.varNames.currentAnimation, { 
				get: function() { return protectedAnim }, 
				set: function(data) { if(data.protected) protectedAnim = data.protected; } 
			});
			
			var protectedFace = !!entity.face ? {xProtected: entity.face.x, yProtected: entity.face.y} : {xProtected: 0, yProtected: 0};
			
			Object.defineProperty(protectedFace, 'x', { get: function() { return protectedFace.xProtected }, set: function(){} });
			Object.defineProperty(protectedFace, 'y', { get: function() { return protectedFace.yProtected }, set: function(){} });
			Object.defineProperty(entity, 'face', { get: function() { return protectedFace }, set: function(){console.log("tried to maniplulate face")} });
			
			var protectedState = simplify.getCurrentState(entity);
			
			Object.defineProperty(entity, cc.ig.varNames.currentState, { 
				get: function() { return protectedState }, 
				set: function(data) { if(data.protected) protectedState = data.protected; } 
			});
		});
		
		
		
		//entity.show();
	}
	
	this.updateEntityPosition = function(id, pos){
		if(host || !entities[id])
			return;
		
		copyEntityPosition(pos, cc.ig.gameMain.getEntityPosition(entities[id]));
	}
	
	this.updateEntityAnimation = function(id, face, anim){
		if(host || !entities[id])
			return;
		
		
		setEntityAnimation({face: face, anim: anim}, entities[id]);
	}
	
	this.updateEntityState = function(id, state){
		if(host || !entities[id])
			return;
		
		entities[id][cc.ig.varNames.currentState] = {protected: state};
		new cc.ig.events.SET_ENEMY_STATE({enemy: entities[id], enemyState: state}).start();
	}

	this.updateEntityTarget = function(id, target) {
		var entity;

		if(target === null) 
			entity = null;
		else if(target.constructor === String)
			entity = players[target].entity;
		else
			entity = entities[target];

		if(entity === undefined)
			return console.warn("Could not find entity " + target);

		simplify.setEntityTarget(entities[id], entity);
		entities[id].lastTarget = entities[id].target; // In order to avoid sending an target update
	}

	this.updateEntityHealth = function(id, health){
		if(!entities[id])
			return;

		console.log("Set " + id + "'s health to " + health);

		simplify.setCurrentHp(entities[id], health);
	}
	
	this.killEntity = function(id){
		if(!entities[id])
			return;
		
		simplify.killEntity(entities[id]);
		
		entities[id] = undefined;
		delete entities[id];
	}
	
	
	this.onPlayerMove = function(player, pos){
		if(players[player] && players[player].entity){
			cc.ig.gameMain.setEntityPosition(players[player].entity, pos);
			players[player].pos = pos;
		}
	}
	
	this.onPlayerAnimation = function(player, faceing, animation){
		if(players[player] && players[player].entity){
			players[player].entity.face.x = faceing.x;
			players[player].entity.face.y = faceing.y;
			players[player].entity.pk = animation;
			clearAnimation(players[player].entity);
			playAnimation(players[player].entity, animation);
		}
	}
	
	this.onPlayerAnimationTimer = function(player, timer){
		if(players[player] && players[player].entity){
			simplify.setAnimationTimer(players[player].entity, timer);
		}
	}
	
	this.onEntityKilled = function(multiplayerId){
		mmoConnection.killEntity(multiplayerId);

		if(!entities[multiplayerId])
			return;
		
		entities[multiplayerId] = undefined;
		delete entities[multiplayerId];
	}
	
	this.onEntitySpawn = function(type, x, y, z, settings, showAppearEffects){
		var blacklist = [
			"Marker", 
			"HiddenBlock", 
			cc.ig.entityList.Player, 
			cc.ig.entityList.Crosshair, 
			cc.ig.entityList.CrosshairDot,
			cc.ig.entityList.OffsetParticle,
			cc.ig.entityList.RhombusParticle,
			cc.ig.entityList.HiddenSkyBlock
			]
		
		if(blacklist.indexOf(type) >= 0)
			return cc.ig.gameMain.spawnEntity(type, x, y, z, settings, showAppearEffects); //Static objects that never change or objects that should never be synced
		
		if(type === cc.ig.entityList.Ball)
			console.log(settings);
		
		var realType;
		if(typeof type === "string") {
			//console.log("onEntitySpawn: ", type);
			realType = type;
			mmoConnection.spawnEntity(type, x, y, z, settings, showAppearEffects);
		} else {
			for(var t in cc.ig.entityList){
				if(cc.ig.entityList[t] === type){
					//console.log("onEntitySpawn (type): ", t);
					realType = t;
					break;
				}
			}
		}
		
		var entity = cc.ig.gameMain.spawnEntity(type, x, y, z, settings, showAppearEffects);
		
		if(entity && !entity.multiplayerId){
			entity.settings = settings;
			
			if(host) {
				entity.multiplayerId = nextEID;
				entities[nextEID] = entity;
				nextEID++;
			
				var isRecursive = false;
				try {
					JSON.stringify(settings);
				} catch (e) {
					if (e.name === 'TypeError')
						isRecursive = true;
					else
						throw e;
				}
				
				mmoConnection.registerEntity(entity.multiplayerId, realType, {x: x, y: y, z: z}, isRecursive ? {} : settings);
			}

			entity.lastPosition = {x: x, y: y, z: z};
		}
		
		return entity;
	}
	
	function copyPosition(from, to){
		to.x = from.x;
		to.y = from.y;
		to.z = from.z;
	}
	function copyEntityPosition(from, to){
		if(!to.xProtected)
			return copyPosition(from, to)
		
		to.xProtected = from.x;
		to.yProtected = from.y;
		to.zProtected = from.z;
	}
	function copyAnimation(from){
		faceX = from.face.x;
		faceY = from.face.y;
		anim = simplify.getAnimation(from);
	}
	function copyEntityAnimation(from){
		if(!from.lastAnimation)
			from.lastAnimation = {};
		from.lastAnimation.faceX = from.face.x;
		from.lastAnimation.faceY = from.face.y;
		from.lastAnimation.anim = simplify.getAnimation(from);
	}
	function setEntityAnimation(from, to){
		to.face.xProtected = from.face.x;
		to.face.yProtected = from.face.y;
		simplify.setAnimation(to, {protected: from.anim});
	}
	
	function comparePosition(position, pos){
		return pos.x === position.x && 
			pos.y === position.y &&
			pos.z === position.z
	}
	
	function compareAnimation(faceing, animation){
		return faceX === faceing.x &&
			faceY === faceing.y &&
			anim === animation;
	}
	function compareEntityAnimation(old, animation, faceing){
		return !!old && (
			old.faceX === faceing.x &&
			old.faceY === faceing.y &&
			old.anim === animation);
	}
	
	
	function clearAnimation(entity){
		new cc.ig.events.CLEAR_ANIMATION({
			entity: entity
		}).start();
	}
	
	function playAnimation(entity, animation){
		new cc.ig.events.DO_ACTION({
			entity: entity, 
			keepState: false, 
			action: [
				{
					type: "SHOW_ANIMATION", 
					anim: animation
				},
				{
					type: "WAIT", 
					time: -1 
				}
			]
		}).start({});
	}
}