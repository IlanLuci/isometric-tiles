class Block {
    constructor(x, y, playerX, playerY, halfSize) {
		const canvas = document.getElementById('canvas');
		this.ctx = canvas.getContext('2d');

		this.x = x;
		this.y = y;

		this.playerX = playerX;
		this.playerY = playerY

		let blockData = map[x][y];

		if (typeof blockData == 'string') {
			this.ctx.fillStyle = blockData;

			this.ctx.fillRect((x - playerX + 2) * 40, (y - playerY + 2) * 40, 40, 40);
		}

		else if (typeof blockData == 'object') {
			this.ctx.fillStyle = blockData[0];

			this.ctx.fillRect((x - playerX + 2) * 40, (y - playerY + 2) * 40, 40, 40);

			if (blockData[1] == 'rise') {
				this.drawCube();
			} else if (blockData[1] == 'rock') {
				this.drawRock();
			}
		}
    }

	drawCube() {
		//low to the ground cube shape
		this.ctx.beginPath();
		this.ctx.moveTo((this.x - this.playerX + 2) * 40, (this.y - this.playerY + 2) * 40);
		this.ctx.lineTo((this.x - this.playerX + 2) * 40 - 20, (this.y - this.playerY + 2) * 40 - 20);
		this.ctx.moveTo((this.x - this.playerX + 2) * 40 - 20, (this.y - this.playerY + 2) * 40 + 20);
		this.ctx.lineTo((this.x - this.playerX + 2) * 40 - 20, (this.y - this.playerY + 2) * 40 - 20);
		this.ctx.moveTo((this.x - this.playerX + 2) * 40 + 20, (this.y - this.playerY + 2) * 40 - 20);
		this.ctx.lineTo((this.x - this.playerX + 2) * 40 - 20, (this.y - this.playerY + 2) * 40 - 20);
		this.ctx.moveTo((this.x - this.playerX + 2) * 40 + 20, (this.y - this.playerY + 2) * 40 - 20);
		this.ctx.lineTo((this.x - this.playerX + 2) * 40 + 20, (this.y - this.playerY + 2) * 40 + 20);
		this.ctx.moveTo((this.x - this.playerX + 2) * 40 - 20, (this.y - this.playerY + 2) * 40 + 20);
		this.ctx.lineTo((this.x - this.playerX + 2) * 40 + 20, (this.y - this.playerY + 2) * 40 + 20);
		this.ctx.moveTo((this.x - this.playerX + 2) * 40 + 40, (this.y - this.playerY + 2) * 40 + 40);
		this.ctx.lineTo((this.x - this.playerX + 2) * 40 + 20, (this.y - this.playerY + 2) * 40 + 20);
		this.ctx.moveTo((this.x - this.playerX + 2) * 40 + 20, (this.y - this.playerY + 2) * 40 - 20);
		this.ctx.lineTo((this.x - this.playerX + 2) * 40 + 40, (this.y - this.playerY + 2) * 40);
		this.ctx.moveTo((this.x - this.playerX + 2) * 40 - 20, (this.y - this.playerY + 2) * 40 + 20);
		this.ctx.lineTo((this.x - this.playerX + 2) * 40, (this.y - this.playerY + 2) * 40 + 40);
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.fillRect((this.x - this.playerX + 2) * 40 - 20, (this.y - this.playerY + 2) * 40 - 20, 40, 40);
	}
	drawRock() {
		//pyramid rock shape
		this.ctx.beginPath();
		//this.ctx.moveTo((this.x - this.playerX + 2) * 40, (this.y - this.playerY + 2) * 40);
		//this.ctx.lineTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 - 15);
		
		
		this.ctx.stroke();

		this.ctx.fill();

		// top
		let region = new Path2D();
		region.moveTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 + 5);
		region.lineTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 + 5);
		region.lineTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 + 5);
		region.closePath();

		this.ctx.fillStyle = '#b4b8bf';
		this.ctx.fill(region, 'evenodd');

		// side 1
		region = new Path2D();
		region.moveTo((this.x - this.playerX + 2) * 40 + 40, (this.y - this.playerY + 2) * 40 + 40);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 + 5);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 + 40, (this.y - this.playerY + 2) * 40);
		region.lineTo((this.x - this.playerX + 2) * 40 + 40, (this.y - this.playerY + 2) * 40 + 40);

		this.ctx.fill(region, 'evenodd');

		// side 1
		region = new Path2D();
		region.moveTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 + 5);
		region.lineTo((this.x - this.playerX + 2) * 40, (this.y - this.playerY + 2) * 40 + 40);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 + 5);

		this.ctx.fill(region, 'evenodd');
	}
}