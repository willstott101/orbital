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