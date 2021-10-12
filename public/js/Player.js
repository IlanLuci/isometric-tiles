import {ctx, map, gridSize} from './common.js';

export class Player {
    constructor(world) {
        this.tokensDisplay = document.getElementById('tokens');

        this.world = world;

        // player's location along the map
        this.x = 14;
        this.y = 15;

        // keep track of a player's tokens (currency)
        this.tokens = 0;

        this.tokensDisplay.innerText = 'Tokens: ' + this.tokens;
    }

    drawPlayer() {
        // set appropriate offset if player is on an elevated surface
        let offset = 0;
        
        if (typeof map[this.x - 1][this.y - 1] == 'object') {
            offset = 20;
        }

        ctx.fillStyle = '#eb4034';

        ctx.beginPath();
        ctx.arc((gridSize / 2 - 5) * 40 + 20 - offset, (gridSize / 2 - 5) * 40 + 20 - offset, 5, 0, 2 * Math.PI);
        ctx.fill();
    }

    move(e) {
        switch (e.code) {
            case 'KeyW': {
                //W clicked
                if (this.x < gridSize / 2 + 1) return;
                this.x -= 1;
                this.world.loadBlocks();
                break;
            }
            case 'KeyA': {
                //A clicked
                if (this.y > map.length - gridSize / 2 - 1) return;
                this.y += 1;
                this.world.loadBlocks();
                break;
            }
            case 'KeyS': {
                //S clicked
                if (this.x > map.length - gridSize / 2 - 1) return;
                this.x += 1;
                this.world.loadBlocks();
                break;
            }
            case 'KeyD': {
                //D clicked
                if (this.y < gridSize / 2 + 1) return;
                this.y -= 1;
                this.world.loadBlocks();
                break;  
            } 
        }
    }
}