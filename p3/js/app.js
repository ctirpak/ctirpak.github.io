/**
 * 
 * @fileOverview app.js contains all the objects used in the game.
 * This includes the generic Entity() object which is used as the base
 * class for the Enemy(), Player(), and Item() objects. <br><br>
 * The enemy, player and item objects are also created
 * used in the game
 * @author Chris Tirpak
 * @version 1.0
 */

/**
 * Superclass of objects in game (e.g. enemy, player, item)
 * @class Generic game entity
 * 
 * @param {string} s name of sprite
 * @param {number} r row number for location of sprite
 * @param {number} c column number for location of sprite
 * @property {string} sprite Path to image file for this object
 * @property {number} x Horizontal position of sprite
 * @property {number} y Verticle position of sprite
 * @property {boolean} visible Identifies visibility of object
 */
/** @constructor */
var Entity = function (s, r, c) {
	/**
	 * @lends Entity#
	 * Constructor of Entity<br><br>
	 * Initialize all properties for generic game entity
	 */
	this.sprite = s;
	this.x = c;
	this.y = r;
	this.visible = true;
}

/**
 * Update the entity's position. Update code resides in sub classes
 * of enemy and player
 * @param {number} dt Time delta since last update. Ensures game runs
 * at the same speed on all computers
 * 
 */
Entity.prototype.update = function (dt) {
	/** @lends Entity# */

}

/**
 * Draws the sprite on the screen at the x and y coordinates 
 * if it should be visible
 * Uses Resources.get() method to return image object
 */
Entity.prototype.render = function () {
	/** @lends Entity# */
	if (this.visible === true) {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

// holds all the items that appear
var Item = function (s, r, c) {
	this.dateExpires = new Date();
	this.dateNext = new Date(new Date().getTime() + 5 * 1000);  // wait before displaying the first item
	this.collect = false;
	Entity.call(this, s, r, c);
}

Item.prototype = Object.create(Entity.prototype);
Item.constructor = Item;

Item.prototype.update = function (dt) {
	var secondsDelay = 0;  // number of seconds to wait before displaying a new item
	var secondsDelay2 = 0;  // number of seconds to display a new item
	var itemNum = 0;
	//
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.

	// check to see if the item should still be displayed
	if (this.dateExpires < new Date()) {
		this.visible = false;
	}

	// if no item is visible, pick a random one
	if (this.visible === false) {
		//see if a new item should be displayed
		if (this.dateNext < new Date()) {
			// pick a random amount of time
			secondsDelay = Math.floor((Math.random() * 15));
			secondsDelay2 = Math.floor((Math.random() * 5));

			// get time +10 seconds to remove object
			//this.dateExpires = new Date();
			this.dateExpires = new Date(new Date().getTime() + (3 + secondsDelay2) * 1000);

			// set time to wait to be able to display a new item
			//this.dateNext = new Date();
			this.dateNext = new Date(new Date().getTime() + (10 + secondsDelay) * 1000);

			//pick a random item to display
			//itemNum = Math.floor((Math.random())*7);
			var ranNum = Math.random();
			// define frequency of each item based on random number
			switch (true) {
				case ranNum < .30:
					itemNum = 0;
					player.blueGems += 1;
					break;
				case ranNum < .60:
					itemNum = 1;
					player.greenGems += 1;
					break;
				case ranNum < .90:
					itemNum = 2;
					player.orangeGems += 1;
					break;
				case ranNum < .92:
					itemNum = 3;
					player.keys += 1;
					break;
				case ranNum < .94:
					itemNum = 4;
					player.hearts += 1;
					break;
				case ranNum < .97:
					itemNum = 5;
					player.stars += 1;
					break;
				case ranNum < 1:
					itemNum = 6;
					break;
			}

			// pick a random position
			var itemX = Math.floor((Math.random() * 5)) * 101;
			var itemY = Math.floor((Math.random() * 2) + 1) * 83;
			var items = [
				'images/Gem Blue.png',
				'images/Gem Green.png',
				'images/Gem Orange.png',
				'images/Key.png',
				'images/Heart.png',
				'images/Star.png',
				'images/Rock.png'
			];
			if (itemNum === 6) {
				this.collect = false;
			} else
				this.collect = true;
			this.sprite = items[itemNum];
			this.x = itemX;
			this.y = itemY;
			// toggle the display of the item
			this.visible = true;
		}
	}
}

// Enemies our player must avoid
var Enemy = function (s, r, c) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.minSpeed = 50;
	this.speed = (200 - (Math.floor((Math.random() * 200) + 1))) + this.minSpeed;
	Entity.call(this, s, r, c);
}
// Need to set up prototype and constructor
Enemy.prototype = Object.create(Entity.prototype);
Enemy.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x = (this.x) + (this.speed * dt);
	if (this.x > canvas.width) {
		this.x = 0 - Resources.get(this.sprite).width;
		//get new speed since
		this.speed = (200 - (Math.floor((Math.random() * 200) + 1))) + this.minSpeed;
	}
	//causes verticle movement/jitter
	//this.y = this.y + ((50 - (Math.floor((Math.random() * 100) + 1))) * dt);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// 
// Player our enemies will kill

/**
 * Player object
 * 
 * @param {String} s name of sprite
 * @param {Number} r row number of sprite
 * @param {Number} c column number of sprite
 */
var Player = function (s, r, c) {
	// player is a sub class of Entity
	// It does not have any additional methods
	this.score = 0;
	this.hearts = 5;
	this.keys = 0;
	this.blueGems = 0;
	this.greenGems = 0;
	this.orangeGems = 0;
	this.stars = 0;
	Entity.call(this, s, r, c);
}

// Need to set up prototype and constructor
Player.prototype = Object.create(Entity.prototype);
Player.constructor = player;
// Handle input to move player
Player.prototype.handleInput = function (key) {


	switch (key) {
		case "up":
			this.y -= ySpacing;
			if (this.y < 0) {
				this.y += ySpacing;
			}
			break;
		case "down":
			this.y += ySpacing;
			if (this.y >= (6 * ySpacing)) {
				this.y -= ySpacing;
			}
			break;
		case "left":
			this.x -= xSpacing;
			if (this.x < 0) {
				this.x += xSpacing;
			}
			break;
		case "right":
			this.x += xSpacing;
			if (this.x >= (5 * xSpacing)) {
				this.x -= xSpacing;
			}
			break;
	}
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var oneEnemy;
var xSpacing = 101;
var ySpacing = 83;

for (var x = 0; x < 4; x++) {
	oneEnemy = new Enemy('images/enemy-bug.png', (x + 1) * ySpacing, -101);
	allEnemies.push(oneEnemy);
}

var player = new Player('images/char-boy.png', 5 * ySpacing, 2 * xSpacing);
//player.setPos(5 * 83, 101 * 2);


var item = new Item('images/star.png', 4 * ySpacing, 2 * xSpacing);
item.visible = false;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function (e) {
	var allowedKeys = {
		37: 'left', //arrow keys
		38: 'up', //arrow keys
		39: 'right', //arrow keys
		40: 'down', //arrow keys
		87: 'up', //w
		83: 'down', //a
		65: 'left', //s
		68: 'right'	//d

	};

	player.handleInput(allowedKeys[e.keyCode]);
});
