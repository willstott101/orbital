OrbitalServer = function() {

	var reference = null;

	this.Orbit = function() {
		if (!reference)
		{
			reference = new Orbital();
		}
		return reference;
	}
}

Orbital = function() {
	var _Bundler = new Bundler(),
		_Satelite = new Satelite();

	this.Reciever = function() {
		return _Reciever;
	}
}