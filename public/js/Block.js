import {ctx, map, tileSize} from './common.js';

export class Block {
    constructor(x, y, playerX, playerY) {
		this.x = x;
		this.y = y;

		this.playerX = playerX;
		this.playerY = playerY;

		let blockData = map[x][y];

		this.drawTile(blockData);
    }

	drawTile(color) {
		if (!color) return;

		// set fill color for tile
		ctx.fillStyle = color;

		// set width of lines
		ctx.lineWidth = 0.1;

		// fill in block with color
		ctx.fillRect(this.calcOffsetX(), this.calcOffsetY(), tileSize, tileSize);

		//add 3d effect to blocks in front (show sides)
		if (!map[this.x + 1]) {
			// right bottom side
			ctx.moveTo(this.calcOffsetX() + tileSize, this.calcOffsetY());
			ctx.lineTo(this.calcOffsetX() + tileSize + tileSize, this.calcOffsetY() + tileSize);
			ctx.lineTo(this.calcOffsetX() + tileSize + tileSize, this.calcOffsetY() + tileSize + tileSize);
			ctx.lineTo(this.calcOffsetX() + tileSize, this.calcOffsetY() + tileSize);

			ctx.stroke();
			ctx.fill();
		}

		if (!map[this.x][this.y + 1]) {
			// left bottom side
			ctx.moveTo(this.calcOffsetX(), this.calcOffsetY() + tileSize);
			ctx.lineTo(this.calcOffsetX() + tileSize, this.calcOffsetY() + tileSize + tileSize);
			ctx.lineTo(this.calcOffsetX() + tileSize + tileSize, this.calcOffsetY() + tileSize + tileSize);
			ctx.lineTo(this.calcOffsetX() + tileSize, this.calcOffsetY() + tileSize);

			ctx.stroke();
			ctx.fill();
		}
	}

	calcOffsetX() {
		return (this.x - this.playerX + 2) * tileSize;
	}
	calcOffsetY() {
		return (this.y - this.playerY + 2) * tileSize;
	}
}