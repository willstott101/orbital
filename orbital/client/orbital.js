var reference = null;

OrbitalClient = function() {
	if (!reference)
	{
		reference = new Orbital();
	}
	return reference;
}

Orbital = function() {
	var _Renderer = new Renderer(),
		_World = new World(),
		_Satelite = new Satelite();
}