Package.describe({
  summary: "HTML5 game engine to streamline game development on both server and client, powered by PIXI, Meteor, and Meteor Streams."
});

//The order of this defines the order of file loading.

/*We have more control, and it allows us to structure our source in a more useful way for the engine.*/
Package.on_use(function (api, where) {

	//imports
	api.use('streams', ['client', 'server']);
	api.use('JSONfn', ['client','server']);
	api.use('accounts-base', ['client','server']);

	//client
	api.add_files('/orbital/client/lib/pixi.js', 'client');
	api.add_files('/orbital/client/orbital.js', 'client');
	api.add_files('/orbital/client/renderer.js', 'client');
	api.add_files('/orbital/client/satelite.js', 'client');
	api.add_files('/orbital/client/world.js', 'client');

	//server
	api.add_files('/orbital/server/bootstrap.js', 'server');
	api.add_files('/orbital/server/orbital.js', 'server');
	api.add_files('/orbital/server/bundler.js', 'server');
	api.add_files('/orbital/server/satelite.js', 'server');


	//both

	//export
	api.export('OrbitalClient', 'client');
	api.export('OrbitalServer', 'server');

});

Package.on_test(function (api) {
  api.use('orbital');

  api.add_files('orbital_tests.js', ['client', 'server']);
});
