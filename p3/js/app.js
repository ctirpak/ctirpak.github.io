/*
 * 		Front End Web Developer
 *		Project 3
 *			Video Game
 *		Chris Tirpak
 */

/**
 * 
 * @fileOverview app.js contains all the objects used in the game.
 * This includes the generic Entity() object which is used as the base
 * class for the Enemy(), Player(), and Item() objects. <br><br>
 * The enemy, player and item objects are also created
 * @author Chris Tirpak
 * @version 1.0
 */

/**
 * @class Entity
 * @description Generic game entity. Superclass of objects in game (enemy, player, item)
 * @param {string} s name of sprite
 * @param {number} r row number for location of sprite
 * @param {number} c column number for location of sprite
 * @param {string} i name of object
 * @property {string} sprite Path to image file for this object
 * @property {number} itemNum Item number
 * @property {number} x Horizontal position of sprite
 * @property {number} y Verticle position of sprite
 * @property {boolean} visible Identifies visibility of object
 * @property {number} xCenter Mid x coordinate. Used for collision detection.
 * @property {number} yCenter Mid y coordinate. Used for collision detection.
 * @property {number} tile Number of tile that center of sprite is in. Used for collision detection.
 * @property {string} name Type of object
 * @returns {Entity} Entity object
 */
var Entity = function (s, r, c, i) {
	/**
	 * @memberOf Entity
	 * Constructor of Entity<br><br>
	 * Initialize all properties for generic game entity
	 */
	this.sprite = s;
	this.itemNum = 0;
	this.x = c;
	this.y = r;
	this.visible = true;
	this.xCenter = 0;
	this.yCenter = 0;
	this.tile = -1;
	this.name = i;
}

/**
 * Update the entity's position. Update code resides in sub classes
 * of enemy and player
 * @param {number} dt Time delta since last update. Ensures game runs
 * at the same speed on all computers
 * 
 */
Entity.prototype.update = function (dt) {
	/** @memberOf Entity */

}

/**
 * Draws the sprite on the screen at the x and y coordinates 
 * if it should be visible
 * Uses Resources.get() method to return image object
 */
Entity.prototype.render = function () {
	/** @memberOf Entity */
	if (this.visible === true) {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
		//get the center points of the sprite
		this.xCenter = this.x + ((Resources.get(this.sprite).width) / 2);
		this.yCenter = this.y + ((Resources.get(this.sprite).height) / 2);
		// calculate which row and column the center point of the sprite is in
		if ((this.xCenter > canvas.width) ||
				(this.x < 0)) {
			this.tile = -1;
		} else {
			this.tile = Math.floor(this.xCenter / xSpacing) + Math.floor((this.yCenter - ySpacing) / ySpacing) * 5;
		}
	}
}

/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */

/**
 * @class Item
 * @description Item objct. Subclass of Entity. Holds all the items that appear in the game
 * @augments Entity
 * @param {string} s name of sprite
 * @param {number} r row number for location of sprite
 * @param {number} c column number for location of sprite
 * @property {object} dateExpires Date (time) of when sprite is no longer visible
 * @property {object} dateNext Date (time) of when new sprite can appear
 * @property {boolean} collect Indicates if item can be collected
 * @param {number} timeLeft number of seconds left before item is no longer visible
 * @returns {Item} Item object
 */
var Item = function (s, r, c) {
	/** 
	 * @memberOf Item
	 * update properties and call base class constructor
	 */
	this.dateExpires = new Date();
	this.dateNext = new Date(new Date().getTime() + 5 * 1000);  // wait before displaying the first item
	this.collect = false;
	this.timeLeft = 0;
	Entity.call(this, s, r, c, "item");
}

/** 
 * Set Prototype
 * @memberOf Item
 */
Item.prototype = Object.create(Entity.prototype);
/**
 * Set Constructor
 * @memberOf Item
 */
Item.constructor = Item;

/**
 * Update the Item position, type and visibility. Generates random numbers to
 * calculate how long an Item will be visible, and which Item will be displayed.
 * @param {number} dt Time delta since last update. Ensures game runs
 * at the same speed on all computers. Not applicable to the Item() object.
 */
Item.prototype.update = function (dt) {
	/** @memberOf Item
	 */
	/** Number of seconds to wait before displaying a new Item */
	var secondsDelay = 0;
	/** Number of seconds to display Item */
	var secondsDelay2 = 0;
	/** Random number used to determine which item to display */
	var ranNum = Math.random();
	/** Random X position */
	var itemX = Math.floor((Math.random() * 5)) * 101;
	/** Random Y position */
	var itemY = Math.floor((Math.random() * 2) + 1) * 83;
	/** current date */
	var t1 = new Date();

	// check to see if the item should still be displayed
	if (this.dateExpires < new Date()) {
		this.visible = false;	  // hide item
	}

	//** update number of seconds left to display item */
	if (this.visible) {
		//update number of seconds that item will be displayed for
		this.timeLeft = Math.floor((this.dateExpires - t1) / 100);
	}


	// if no item is visible
	if (this.visible === false) {
		//check to see if a new item can be displayed
		if (this.dateNext < new Date()) {
			// get random amount of seconds
			secondsDelay = Math.floor((Math.random() * 2));
			secondsDelay2 = Math.floor((Math.random() * 2) + gameLevel / 8);

			// get time and add X seconds to determine how long the Item will be visible
			this.dateExpires = new Date(new Date().getTime() + (3 + secondsDelay2) * 1000);

			// set time to wait before a new Item can be displayed
			this.dateNext = new Date(new Date().getTime() + (10 + secondsDelay) * 1000);

			// determine Item to display based on random number and keep track of count
			// for example, item 0 is displayed ~30% of the time, while item 3 is only
			// displayed ~2% of the time
			this.collect = true;	// assume you can collect the item
			switch (true) {
				case ranNum < .28:
					this.itemNum = 0;
					break;
				case ranNum < .53:
					this.itemNum = 1;
					break;
				case ranNum < .80:
					this.itemNum = 2;
					break;
				case ranNum < .85:
					this.itemNum = 3;
					break;
				case ranNum < .90:
					this.itemNum = 4;
					break;
				case ranNum < .95:
					this.itemNum = 5;
					break;
				case ranNum < 1:
					this.itemNum = 6;
					break;
			}

			this.sprite = items[this.itemNum];	  // set sprite
			this.x = itemX;				  // set X
			this.y = itemY;				  // set Y
			this.visible = true;			  // set visibility
		}
	}
}
Item.prototype.render = function () {
	//call the entity.render() function
	Entity.prototype.render.call(this);
	if (this.visible) {
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.font = "16px Helvetica";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";

		ctx.fillText(this.timeLeft, this.xCenter - 7, this.yCenter - 12);
	}
}

/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */

var Message = function (s, r, c) {
	/** 
	 * @memberOf Message
	 * Used to display timed messages on canvas
	 * update properties and call base class constructor
	 */
	this.dateExpires = new Date();
	this.Text = ""; // message to display
	Entity.call(this, s, r, c, "message");
}

/** 
 * Set Prototype
 * @memberOf Message
 */
Message.prototype = Object.create(Entity.prototype);
/**
 * Set Constructor
 * @memberOf Message
 */
Message.constructor = Message;

/**
 * Update the Item position, type and visibility. Generates random numbers to
 * calculate how long an Item will be visible, and which Item will be displayed.
 * @param {number} dt Time delta since last update. Ensures game runs
 * at the same speed on all computers. Not applicable to the Item() object.
 */
Message.prototype.update = function (dt) {
	/** @memberOf Message
	 */
	/** Number of seconds to wait before displaying a new Item */

	// check to see if the item should still be displayed
	if ((this.dateExpires < new Date()) &&
			(!gameOver)) {
		this.visible = false;	  // hide message
	}

}
Message.prototype.render = function () {
	/**
	 * @memberOf Message
	 */
	// DO NOT call the entity.render() function
	if (this.visible) {
		ctx.fillStyle = "rgb(255, 200, 0)";
		ctx.font = "18px Helvetica";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText(this.Text, xSpacing * 2.7, (ySpacing * 6.7) - 12);
	}
}
Message.prototype.showText = function (s) {
	this.Text = s;
	this.dateExpires = new Date(new Date().getTime() + 3 * 1000);
	this.visible = true;			  // set visibility
}

/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */

/**
 * @class Enemy
 * @description Enemy object. Subclass of Entity. Enemies that appear in the game
 * @augments Entity
 * @param {string} s name of sprite
 * @param {number} r row number for location of sprite
 * @param {number} c column number for location of sprite
 * @property {number} minSpeed Sets the minimum speed of the enemies
 * @property {number} speed Sets teh current speed of the enemies
 * @returns {Enemy} Enemy object
 */
var Enemy = function (s, r, c) {
	/** 
	 * @memberOf Enemy
	 * Updates speed and calls base class constructor
	 */
	this.addSpeed = 20 * gameLevel;
	this.minSpeed = 50 * ((gameLevel / 8) + 1);
	this.speed = (this.addSpeed - (Math.floor((Math.random() * this.addSpeed) + 1))) + this.minSpeed;	  // generate random number for speed
	Entity.call(this, s, r, c, "enemy");
};
/**
 * Set prototype
 * @memberOf Enemy
 */
Enemy.prototype = Object.create(Entity.prototype);
/**
 * Set constructor
 * @memberOf Enemy
 */
Enemy.constructor = Enemy;

/**
 * Update the Enemy position. Generates a random number for the speed.
 * @param {number} dt Time delta since last update. Ensures game runs
 * at the same speed on all computers.
 * @memberOf Enemy
 * 
 */
Enemy.prototype.update = function (dt) {
	// Multiply movement by the dt parameter to keep speed consistent
	this.x = (this.x) + (this.speed * dt);
	// check for out of bounds
	if (this.x > canvas.width) {
		// set to left side of canvas, off screen
		this.x = 0 - Resources.get(this.sprite).width;
		this.addSpeed = 20 * gameLevel;
		this.minSpeed = 50 * ((gameLevel / 8) + 1);

		// get new speed
		this.speed = (this.addSpeed - (Math.floor((Math.random() * this.addSpeed) + 1))) + this.minSpeed;
	}
	// causes verticle movement/jitter
	// this.y = this.y + ((50 - (Math.floor((Math.random() * 100) + 1))) * dt);
};

/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */

/**
 * Player object. Subclass of Entity
 * @class Player
 * @description Player object in the game
 * @augments Entity
 * @param {string} s name of sprite
 * @param {number} r row number for location of sprite
 * @param {number} c column number for location of sprite
 * @property {number} score Player score
 * @property {number} hearts Player lives
 * @property {number} keys Keys collected
 * @property {number} blueGems Blue gems collected
 * @property {number} greenGems Green gems collected
 * @property {number} orangeGems Orange gems collected
 * @property {number} stars Stars collected
 * @property {number} stones Stones collected
 * @property {number} cross Number of times player reached water
 * @property {boolean} inPlay True if player in play area 
 * @property {object} timeInPlay Time that player first entered play area
 * @returns {Player} Player object
 * 
 */
var Player = function (s, r, c) {
	/** 
	 * @memberOf Player
	 * Updates properties and calls base class constructor
	 */
	this.score = 0;
	this.hearts = 5;
	this.keys = 0;
	this.blueGems = 0;
	this.greenGems = 0;
	this.orangeGems = 0;
	this.stars = 0;
	this.stones = 0;
	this.cross = 0;
	this.inPlay = false;
	this.timeInPlay = new Date();
	Entity.call(this, s, r, c, "player");
}

/**
 * Set prototype
 * @memberOf Player
 */
Player.prototype = Object.create(Entity.prototype);
/**
 * Set constructor
 * @memberOf Player
 */
Player.constructor = player;
// Handle input to move player
Player.prototype.handleInput = function (key) {
	/**
	 * @memberOf Player
	 */
	if (gameOver && key === "restart") {
		gameOver = false;
		resetKeyPressed = true;
	}
	if (gameOver && key !== "restart") {
		return;
	}
	if (gamePaused && key !== "pause") {
		return;
	}

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
		case "pause":
			// toggle game paused state
			gamePaused = !gamePaused;
			break;
		case "1":
			this.sprite = 'images/char-boy.png';
			break;
		case "2":
			this.sprite = 'images/char-cat-girl.png';
			break;
		case "3":
			this.sprite = 'images/char-horn-girl.png';
			break;
		case "4":
			this.sprite = 'images/char-pink-girl.png';
			break;
		case "5":
			this.sprite = 'images/char-princess-girl.png';
			break;
	}
}
Player.prototype.update = function (dt) {
	/** @memberOf Item
	 */
	/** checks to see if player is in play area */
	if ((this.tile < 25) &&
			(this.inPlay === false)) {
		this.inPlay = true;
		this.timeInPlay = new Date();
	}
	if (this.tile >= 25) {
		this.inPlay = false;
	}
}
/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */
/** ----------------------------------------------------------------- */

/**
 * 
 * @type Array
 * @description Holds all Enemy objects
 */
var allEnemies = [];

// One Enemy object. Used to load allEnemies array.
var oneEnemy;
/**
 * 
 * @type Number
 * @description Width (spacing) between each background tile
 */
var xSpacing = 101;
/**
 * 
 * @type Number
 * @description Height (spacing) between each background tile
 */
var ySpacing = 83;
/** List of items that can be displayed */
var items = [
	'images/Gem Blue.png',
	'images/Gem Green.png',
	'images/Gem Orange.png',
	'images/Key.png',
	'images/Heart.png',
	'images/Star.png',
	'images/Rock.png'
];
/** Name of items */
var itemNames = [
	'Blue Gem',
	'Green Gem',
	'Gold Gem',
	'Key',
	'Heart',
	'Star',
	'Rock'
];
/**
 * 
 * @type Boolean
 * @description Used to indicate if the game is paused
 */
var gamePaused = false;
/**
 * 
 * @type Boolean
 * @description Used to identify if the game is over
 */
var gameOver = true;
/**
 * 
 * @type Boolean
 * @description Used to track if game needs to be reset
 */
var resetKeyPressed = false;
/**
 * 
 * @type Number
 * @description Used to control game difficulty
 */
var gameLevel = 1;

// create enemy array
for (var x = 0; x < 4; x++) {
	oneEnemy = new Enemy('images/enemy-bug.png', (x + 1) * ySpacing, -101);
	allEnemies.push(oneEnemy);
}

/**
 * 
 * @type Player
 * @description Create player object
 */
var player = new Player('images/char-boy.png', 5 * ySpacing, 2 * xSpacing);
//player.setPos(5 * 83, 101 * 2);

/**
 * 
 * @type Item
 * @description Create item object
 */
var item = new Item('images/star.png', 4 * ySpacing, 2 * xSpacing);
/**
 * Start with hidden object
 */
item.visible = false;
/**
 * 
 * @type Message
 * @description Create message object for displaying messages on the canvas
 */
var msg = new Message("Welcome!", ySpacing * 6.7 - 12, xSpacing * 3);

var keyAllowed = true; // used to prevent auto repeated key down events.
/**
 * 
 * @param {type} param1
 * @param {type} param2
 * @description Event listener for keydown even. Passes keys to player.handleInput()
 */
document.addEventListener('keydown', function (e) {
	if (keyAllowed) {
		keyAllowed = false; // set it to false until keyup event sets it to true
		var allowedKeys = {
			37: 'left', //arrow keys
			38: 'up', //arrow keys
			39: 'right', //arrow keys
			40: 'down', //arrow keys
			87: 'up', //w
			83: 'down', //a
			65: 'left', //s
			68: 'right', //d
			80: 'pause', //p
			82: 'restart', //r
			49: '1', //1
			50: '2', //2
			51: '3', //3
			52: '4', //4
			53: '5' //5

		};

		player.handleInput(allowedKeys[e.keyCode]);
	}
});
/**
 * @description Key up event listener. used to prevent auto repeating keydown events
 */
document.addEventListener('keyup', function (e) {
	keyAllowed = true; // set it to true so keydown can trigger
});

