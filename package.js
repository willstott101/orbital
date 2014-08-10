Package.describe({
  summary: "A HTML5 game engine, making use of both meteor, and PIXI."
});

//The order of this defines the order of file loading.
//I think this is much better than using client/, lib/, etc.

/*We have more control, and it allows us to structure our source in a more useful way for the engine.*/
Package.on_use(function (api, where) {

	api.add_files('/orbital/lib/pixi.js', 'client');

	api.add_files('/orbital/time.js', ['client', 'server']);

	api.add_files('/orbital/assets.js', 'client');
	api.add_files('/orbital/entity.js', 'client');
	api.add_files('/orbital/bundle.js', 'client');
	api.add_files('/orbital/world.js', 'client');

	api.add_files('/orbital/render.js', 'client');

	api.add_files('/orbital/core.js', 'client');

	api.export('Orbital', 'client');
	api.export('Time', ['client', 'server'])
});

Package.on_test(function (api) {
  api.use('orbital');

  api.add_files('orbital_tests.js', ['client', 'server']);
});
