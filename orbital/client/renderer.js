Renderer = function() {
	
	var stage = new PIXI.Stage(0x66FF99),
		renderer = PIXI.autoDetectRenderer(400,300);

	document.body.appendChild(renderer.view);

	requestAnimFrame(animate);

	function animate() {
		requestAnimFrame(animate);
		renderer.render(stage);
	};
};