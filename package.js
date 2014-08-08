Package.describe({
  summary: "A HTML5 game engine, making use of both meteor, and PIXI."
});

Package.on_use(function (api, where) {
  api.add_files('orbital.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('orbital');

  api.add_files('orbital_tests.js', ['client', 'server']);
});
