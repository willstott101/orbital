This file will be populated with more useful readme stuff, when we're closer to release. For now we can use it to outline the structure of the enigne.

This model considers the render and logic loop the same. With physics independent. We can change that if we feel we need to.

Engine(Client) {
	
	// Optional modules

	Renderer { update(), tock()}
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
		Icons
		Images
		Sounds
		Music
	}

	Globals {

	}
}

Engine(Server) {
	Synchronizer {
		//Validates incoming packets and synchronizes collections.
	}

	Entities {
		//Define entity data, permissions, etc for each entity to validate against for incoming packets. Entities can be items, monsters, players, whatever
	}
}