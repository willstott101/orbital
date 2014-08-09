#### This file will be populated with more useful readme stuff, when we're closer to release. For now we can use it to outline the structure of the engine.


###### This model considers the render and `Update` loop the same. With physics independent. We can change that if we feel we need to.


#### repo
###### MY proposed file structure, in order of 'compilation.' I'm not sure we need to have lots of folders. Just folders when we're using libraries. My order might be messed up, but we can change that as we become more certain about what goes in which file.
```
package.js
orbital/
	lib/
		pixi.js
		//box2d?
		//audio lib

	time.js

	assets.js
	entity.js
	bundle.js // Bundle {}, entities []
	world.js // Bundles [], Entities []

	render.js
	physics/

	core.js // Engine {}

	satellite_client.js
	satellite_server.js
```


#### client
```
Engine(Client) {
	
	// Optional modules

	Renderer { update() }
	Physics { tick() }
	Audio {}

	// Obligatory modules

	Time { // framerate, and framelength are accessible here.
			// We should also be able to edit speed of time
		}

	Network { sync() }

	World {
		Bundles [] // Where a bundle is {
						entities: [],

						// Calls onLoad in every Entity after callback from LoadBundle
						}

		Entities [] // Where a entity is {
						assets: [_id],
						onLoad: {},
						start: {},
						update: {},
						tick: {},
						sync: {}
						}
		World.loadBundle{}
		World.removeBundle{}

		//World.message(‘player_death’), calls the function player_death on every entity, as an example

	}

	BundleHandler {
		//Loads/Unloads bundle and stores loaded Assets in Assets
	}

	AssetHandler {
		// Will wrap the PIXI system for textures.
		Sounds
		Music
	}

	Globals {

	}
}
```

#### server
```
Engine(Server) {
	Synchronizer {
		//Validates incoming packets and synchronizes collections.
	}

	Entities {
		//Define entity data, permissions, etc for each entity to validate against for incoming packets. Entities can be items, monsters, players, whatever
	}
}
```