//This class will house references to all entities that are contained.
Bundle = function (name, entities) {

	this.name = name;

	this.entities = entities;

	// 0 means the bundle is not yet required.
	this.id = 0;

	// This instantiates all the required entities and their assets.
	this.Added = function (id) {
		this.id = id;

		for (entity in this.entities) {
			entity.instantiated();
		}
	}

	// This removes all the required entities and their assets.
	this.Removed = function () {

		for (entity in this.entities) {
			entity.destantiate();
		}
	}

}