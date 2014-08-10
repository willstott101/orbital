//This object will house all entities which are currently loaded.
World = function () {

	// This spacer insures no bundle can have the id 0.
	this.bundles = [new Bundle ('Spacer',[])];

	this.loadBundle = function (bundle) {
		// Add the bundle to the array.
		this.bundles[this.bundles.length] = bundle;
		// Inform the bundle that it is added.
		bundle.Added(this.bundles.length - 1);

		return true;
	}

	this.removeBundle = function (bundle) {
		// Remove the bundle form the array.
		this.bundles[bundle.id] = undefined;
		// Inform the bundle that it has been removed.
		bundle.Removed();

		return true;
	}

	this.mopup = function (input) {
		// This algorithm removes any gaps in an array whilst preserving order.
		// It might not be very efficient, but we can worry about that later.
		var i = 0;
		var x = 0;
		while (i < this.input.length) {
			if (this.input[x] == undefined) {
				this.input[x] = this.input[i];
				this.input[i] = undefined;
			}
			if (this.input[x] != undefined) {
				x++:
			}
			i++;
		}
		return input;
	}

}