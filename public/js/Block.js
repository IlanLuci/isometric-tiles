import {ctx, gridSize, map} from './common.js';

export class Block {
    constructor(x, y, playerX, playerY) {
		this.x = x;
		this.y = y;

		this.playerX = playerX;
		this.playerY = playerY;

		let blockData = map[x][y];

		if (typeof blockData == 'string') {
			this.drawTile((x - playerX + 2) * 40, (y - playerY + 2) * 40, 40, 40, 20, blockData);
			//ctx.fillRect((x - playerX + 2) * 40, (y - playerY + 2) * 40, 40, 40);
		}

		/*
		else if (typeof blockData == 'object') {
			ctx.fillStyle = blockData[0];

			ctx.fillRect((x - playerX + 2) * 40, (y - playerY + 2) * 40, 40, 40);

			if (blockData[1] == 'rise') {
				this.drawCube();
			} else if (blockData[1] == 'rock') {
				this.drawRock();
			}
		}
		*/
    }

	drawTile(x, y, wx, wy, h, color) {
		ctx.fillStyle = color;

		ctx.beginPath();
		ctx.moveTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.lineTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.moveTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.lineTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.moveTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.lineTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.moveTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.lineTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.moveTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.lineTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.moveTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.lineTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.moveTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.lineTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.moveTo(this.calcOffsetX(), this.calcOffsetY());
		ctx.lineTo(this.calcOffsetX(), this.calcOffsetY());

		ctx.stroke();
		ctx.fill();

		ctx.fillRect(this.calcOffsetX(), this.calcOffsetY(), wx, wy);

		let isVeryBottom = this.x == this.playerX + (gridSize / 2) - 1 && this.y == this.playerY + (gridSize / 2) - 1;
		if (this.x == this.playerX + (gridSize / 2) - 1) {
			ctx.beginPath();
			ctx.moveTo(this.calcOffsetX() + wx, this.calcOffsetY());
			ctx.lineTo(this.calcOffsetX() + wx + h, this.calcOffsetY() + h);
			ctx.lineTo(this.calcOffsetX() + wx + h, this.calcOffsetY() + wy + h);
			ctx.lineTo(this.calcOffsetX() + wx, this.calcOffsetY() + wy + h);

			ctx.stroke();
			ctx.fill();
		}
		if (this.y == this.playerY + (gridSize / 2) - 1) {
			ctx.beginPath();
			ctx.moveTo(this.calcOffsetX(), this.calcOffsetY() + wy);
			ctx.lineTo(this.calcOffsetX() + h, this.calcOffsetY() + wx + h);
			ctx.lineTo(this.calcOffsetX() + wx + h, this.calcOffsetY() + h + wy);
			ctx.lineTo(this.calcOffsetX() + wx, this.calcOffsetY() + wy);

			ctx.stroke();
			ctx.fill();
		}
	}

	//prob replace these in the future... not needed, not sure why I made these
	calcOffsetX() {
		return (this.x - this.playerX + 2) * 40;
	}
	calcOffsetY() {
		return (this.y - this.playerY + 2) * 40;
	}
}