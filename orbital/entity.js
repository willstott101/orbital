// This class will house all assets and functions that Entity requires.
Entity = function (name, assets) {

	this.name = name;

	//This will be an array of asset names.
	this.assets = assets;

	// Called when this entity is added to the World. (Internal)
	this.instantiated = function () {

		/* Not sure that I have the namespacing right here. I'll test later.

		Asset.load (this.assets, function () {
			this.Loaded();

			// methods are added to the World's lists here.
			this.isLoaded = true;
		});
		*/

	}

	// Called when this entity has all it's assets loaded.
	this.Loaded = function () {

		// to be replaced by the user
		return false;

	}

	// Called every frame.
	this.Update = function () {

		// to be replaced by the user
		return false;

	}

	// Called every physics tick.
	this.Tick = function () {

		// to be replaced by the user
		return false;

	}

	// Called when the parent bundle is removed.
	this.destantiate = function () {

		//Asset.unload(this.assets);

	}

}

/* An example usage being:

var enemy = new Entity ("Spider", ["spider.png"]);
enemy.Loaded = function () {

	// Should be instant since this is called after loading.
	Orbital.Render.setSprite("spider.png");
}
enemy.Update = function () {

	// Ordinary evil stuff for enemies.
}

var enemyBundle = new Bundle ("1_Spider", [enemy]);

// Saves the bundle to JSON-like string in mongo db.
Orbital.saveBundle(enemyBundle);
*/