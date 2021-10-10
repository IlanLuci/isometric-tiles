const world = new World();

onresize = () => {
	world.loadBlocks();
}
onkeypress = (e) => {
	world.player.move(e);
};