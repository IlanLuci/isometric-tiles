import {Player} from './Player.js'
import {ctx, map} from './common.js';
import {Block} from './Block.js';

export class World {
	constructor() {
        this.gridSize = 12;

        this.blocks = [];

        this.player = new Player(this);

        this.loadBlocks();
    }

    loadBlocks() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        
        if (map.length != map[0].length) console.log('big bad map messup', map.length, map[0].length);

        ctx.translate(canvas.width / 2 - this.gridSize / 2, canvas.height / 2 - this.gridSize * 35 / 2);
        ctx.scale(1, 0.5);
        ctx.rotate(45 * Math.PI / 180);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let counter = 0;

        for (var i = this.player.x - this.gridSize / 2; i < this.player.x + this.gridSize / 2; i++) {
            for (var j = this.player.y - this.gridSize / 2; j < this.player.y + this.gridSize / 2; j++) {
                if (counter == this.gridSize * this.gridSize) return;
                
                counter += 1;

                new Block(i, j, this.player.x, this.player.y);
            }
        }

        this.player.drawPlayer();
    }
}