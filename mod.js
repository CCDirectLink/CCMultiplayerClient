if(!cc)
	throw "No Modloader Found!";

console.log("Loading multiplayer...");

/*console.log("  Checking version..");

var VERSION = 1;
if(!this.multiplayer || multiplayer.version != VERSION){
	reloadTables();
	if(!this.multiplayer || multiplayer.version != VERSION)
		throw "Wrong multiplayer version!";
}*/

document.body.addEventListener('modsLoaded', function () {
	var fs = require("fs");
	var modFolder = "mods/multiplayer/";
	var initialized = false;
	var config = undefined;
	function update(){
		if(initialized){
			multiplayer.update();
		}
	}
	
	function onMapLoaded(){
		if(initialized){
			multiplayer.onMapLoaded();
		}
	}
	
	function exit(){
		if(initialized){
			multiplayer.exit();
		}
	}
	
	function initialize(){
		fs.readFile("assets/" + modFolder + "config/config.json", 'utf8', function(err, data){
			if(err)
				console.error(err);
			config = JSON.parse(data);
			config.finalAddress = config.server.type + "://" + config.server.address + "/";
			simplify.loadScript(config.finalAddress + "socket.io/socket.io.js", function(){
				simplify.loadScript(modFolder + "multiplayer.js", function(){
					simplify.loadScript(modFolder + "connection.js", function(){
						ig.root = config.finalAddress;
						multiplayer.initialize(config);
						initialized = true;
						console.log("Multiplayer loaded!");
					});
				});
			});
		});
	}
	
	simplify.registerUpdate(update);
	document.body.addEventListener('mapLoaded', onMapLoaded)
	document.body.addEventListener('returnToMenu', exit);
	initialize();
}, false);