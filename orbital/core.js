// This is the object which will be exported to be global inside of the entire app.
// Right now it is only global to the package.
// Not even sure if this is right.
Orbital = {



	//Start the world.
	World: new World();
	//Load a renderer, argument is a DomElement
	Renderer: new Renderer(element);

}