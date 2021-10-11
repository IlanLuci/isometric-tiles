import {ctx, map} from './common.js';

export class Block {
    constructor(x, y, playerX, playerY) {
		this.x = x;
		this.y = y;

		this.playerX = playerX;
		this.playerY = playerY;

		let blockData = map[x][y];

		if (typeof blockData == 'string') {
			ctx.fillStyle = blockData;

			ctx.fillRect((x - playerX + 2) * 40, (y - playerY + 2) * 40, 40, 40);
		}

		else if (typeof blockData == 'object') {
			ctx.fillStyle = blockData[0];

			ctx.fillRect((x - playerX + 2) * 40, (y - playerY + 2) * 40, 40, 40);

			if (blockData[1] == 'rise') {
				this.drawCube();
			} else if (blockData[1] == 'rock') {
				this.drawRock();
			}
		}
    }

	drawCube() {
		//low to the ground cube shape
		ctx.beginPath();
		ctx.moveTo(this.calcOffsetX(0), this.calcOffsetY(0));
		ctx.lineTo(this.calcOffsetX(-20), this.calcOffsetY(-20));
		ctx.moveTo(this.calcOffsetX(-20), this.calcOffsetY(20));
		ctx.lineTo(this.calcOffsetX(-20), this.calcOffsetY(-20));
		ctx.moveTo(this.calcOffsetX(20), this.calcOffsetY(-20));
		ctx.lineTo(this.calcOffsetX(-20), this.calcOffsetY(-20));
		ctx.moveTo(this.calcOffsetX(20), this.calcOffsetY(-20));
		ctx.lineTo(this.calcOffsetX(20), this.calcOffsetY(20));
		ctx.moveTo(this.calcOffsetX(-20), this.calcOffsetY(20));
		ctx.lineTo(this.calcOffsetX(20), this.calcOffsetY(20));
		ctx.moveTo(this.calcOffsetX(40), this.calcOffsetY(40));
		ctx.lineTo(this.calcOffsetX(20), this.calcOffsetY(20));
		ctx.moveTo(this.calcOffsetX(20), this.calcOffsetY(-20));
		ctx.lineTo(this.calcOffsetX(40), this.calcOffsetY());
		ctx.moveTo(this.calcOffsetX(-20), this.calcOffsetY(20));
		ctx.lineTo(this.calcOffsetX(0), this.calcOffsetY(40));
		ctx.stroke();
		ctx.fill();
		ctx.fillRect(this.calcOffsetX(-20), this.calcOffsetY(-20), 40, 40);
	}
	drawRock() {
		//pyramid rock shape
		ctx.beginPath();
		//ctx.moveTo((this.x - this.playerX + 2) * 40, (this.y - this.playerY + 2) * 40);
		//ctx.lineTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 - 15);
		
		
		ctx.stroke();

		ctx.fill();

		// top
		let region = new Path2D();
		region.moveTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 + 5);
		region.lineTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 + 5);
		region.lineTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 + 5);
		region.closePath();

		ctx.fillStyle = '#b4b8bf';
		ctx.fill(region, 'evenodd');

		// side 1
		region = new Path2D();
		region.moveTo((this.x - this.playerX + 2) * 40 + 40, (this.y - this.playerY + 2) * 40 + 40);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 + 5);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 + 40, (this.y - this.playerY + 2) * 40);
		region.lineTo((this.x - this.playerX + 2) * 40 + 40, (this.y - this.playerY + 2) * 40 + 40);

		ctx.fill(region, 'evenodd');

		// side 1
		region = new Path2D();
		region.moveTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 + 5);
		region.lineTo((this.x - this.playerX + 2) * 40, (this.y - this.playerY + 2) * 40 + 40);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 + 5, (this.y - this.playerY + 2) * 40 - 15);
		region.lineTo((this.x - this.playerX + 2) * 40 - 15, (this.y - this.playerY + 2) * 40 + 5);

		ctx.fill(region, 'evenodd');
	}

	calcOffsetX(x) {
		return (this.x - this.playerX + 2) * 40 + x;
	}
	calcOffsetY(y) {
		return (this.y - this.playerY + 2) * 40 + y;
	}
}