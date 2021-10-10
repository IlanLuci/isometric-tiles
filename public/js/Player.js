class Player {
    constructor(gridSize) {
		const canvas = document.getElementById('canvas');
		this.ctx = canvas.getContext('2d');
        
        this.tokensDisplay = document.getElementById('tokens');

        // the size of the visible grid
        this.gridSize = gridSize;

        // player's location along the map
        this.x = 14;
        this.y = 15;

        // keep track of a player's tokens (currency)
        this.tokens = 0;

        // keep track of whether menu is open
        this.menuOpen = false;

        this.tokensDisplay.innerText = 'Tokens: ' + this.tokens;
    }

    drawPlayer() {
        // set appropriate offset if player is on an elevated surface
        let offset = 0;
        
        if (typeof map[this.x - 1][this.y - 1] == 'object') {
            offset = 20;
        }

        this.ctx.fillStyle = '#eb4034';
        this.ctx.strokeStyle = '#eb4034';

        this.ctx.beginPath();
        this.ctx.arc((this.gridSize / 2 - 5) * 40 + 20 - offset, (this.gridSize / 2 - 5) * 40 + 20 - offset, 5, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    }

    move(e) {
        // stop player movement when menu is open
        if (this.menuOpen) return;

        if (e.code == 'KeyW')
        {
            //W clicked
            if (this.x < world.gridSize / 2 + 1) return;
            this.x -= 1; 
        }
        else if (e.code == 'KeyA')
        {
            //A clicked
            if (this.y > map.length - world.gridSize / 2 - 1) return;
            this.y += 1;
        }
        else if (e.code == 'KeyS')
        {
            //S clicked
            if (this.x > map.length - world.gridSize / 2 - 1) return;
            this.x += 1;
        }
        else if (e.code == 'KeyD')
        {
            //D clicked
            if (this.y < world.gridSize / 2 + 1) return;
            this.y -= 1;
        }
        else return;

        world.loadBlocks();
    }
}