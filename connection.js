var MmoConnection = function(multiplayer, address){
	var socket = io.connect(address);
	var indentified;
	
	this.identify = function(userName){
		socket.emit('identify', userName);
	}
	
	
	this.changeMap = function(name, marker){
		if(indentified)
			socket.emit('changeMap', {name: name, marker: marker});
	}
	
	this.updatePosition = function(position){
		if(indentified)
			socket.emit('updatePosition', position);
	}
	
	this.updateAnimation = function(face, anim){
		if(indentified)
			socket.emit('updateAnimation', {face: face, anim: anim});
	}
	
	this.spawnEntity = function(type, x, y, z, settings, showAppearEffects){
		if(indentified)
			socket.emit('spawnEnity', {type: type, x: x, y: y, z: z, settings: settings, showAppearEffects: showAppearEffects});
	}
	
	this.updateTimer = function(timer){
		if(indentified)
			socket.emit('updateAnimationTimer', timer);
	}
	
	this.registerEntity = function(id, type, pos, settings){
		if(indentified)
			socket.emit('registerEntity', {id: id, type: type, pos: pos, settings: settings});
	}
	this.updateEntityPosition = function(id, pos){
		if(indentified)
			socket.emit('updateEntityPosition', {id: id, pos: pos});
	}
	this.updateEntityAnimation = function(id, face, anim){
		if(indentified)
			socket.emit('updateEntityAnimation', {id: id, face: face, anim: anim});
	}
	this.updateEntityHealth = function(id, health){
		if(indentified)
			socket.emit('updateEntityHealth', {id: id, hp: health});
	}
	this.updateEntityState = function(id, state){
		if(indentified)
			socket.emit('updateEntityState', {id: id, state: state});
	}
	this.updateEntityTarget = function(id, target){
		if(indentified)
			socket.emit('updateEntityTarget', {id: id, target: target});
	}
	this.killEntity = function(id){
		if(indentified)
			socket.emit('killEntity', {id: id});
	}
	
	socket.on('identified', function(result){
		indentified = !!result.success;
		multiplayer.onIdentified(indentified, result);
	});
	
	socket.on('changeConfig', function(name){
		(new cc.ig.events.SWITCH_PLAYER_CONFIG({name: name})).start();
	});
	
	socket.on('onPlayerChangeMap', function(data){
		multiplayer.onPlayerChangeMap(data.player, data.enters, data.position, data.map, data.marker);
	});
	
	socket.on('updatePosition', function(data){
		multiplayer.onPlayerMove(data.player, data.pos);
	});
	socket.on('updateAnimation', function(data){
		multiplayer.onPlayerAnimation(data.player, data.face, data.anim);
	});
	socket.on('updateAnimationTimer', function(data){
		multiplayer.onPlayerAnimationTimer(data.player, data.timer);
	});
	
	socket.on('registerEntity', function(data){
		multiplayer.registerEntity(data.id, data.type, data.pos, data.settings);
	});
	socket.on('updateEntityPosition', function(data){
		multiplayer.updateEntityPosition(data.id, data.pos);
	});
	socket.on('updateEntityAnimation', function(data){
		multiplayer.updateEntityAnimation(data.id, data.face, data.anim);
	});
	socket.on('updateEntityState', function(data){
		multiplayer.updateEntityState(data.id, data.state);
	});
	socket.on('updateEntityTarget', function(data){
		multiplayer.updateEntityTarget(data.id, data.target);
	});
	socket.on('updateEntityHealth', function(data){
		multiplayer.updateEntityHealth(data.id, data.hp);
	});
	socket.on('killEntity', function(data){
		multiplayer.killEntity(data.id);
	});
}