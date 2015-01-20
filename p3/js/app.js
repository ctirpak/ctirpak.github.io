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
 * @property {string} sprite Path to image file for this object
 * @property {number} x Horizontal position of sprite
 * @property {number} y Verticle position of sprite
 * @property {boolean} visible Identifies visibility of object
 * @returns {Entity} Entity object
 */
var Entity = function (s, r, c) {
  /**
   * @memberOf Entity
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
  }
}

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
  Entity.call(this, s, r, c);
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
  /** Item number to display */
  var itemNum = 0;
  /** Random number used to determine which item to display */
  var ranNum = Math.random();
  /** Random X position */
  var itemX = Math.floor((Math.random() * 5)) * 101;
  /** Random Y position */
  var itemY = Math.floor((Math.random() * 2) + 1) * 83;
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

  // check to see if the item should still be displayed
  if (this.dateExpires < new Date()) {
	this.visible = false;	  // hide item
  }

  // if no item is visible
  if (this.visible === false) {
	//check to see if a new item can be displayed
	if (this.dateNext < new Date()) {
	  // get random amount of seconds
	  secondsDelay = Math.floor((Math.random() * 15));
	  secondsDelay2 = Math.floor((Math.random() * 5));

	  // get time and add X seconds to determine how long the Item will be visible
	  this.dateExpires = new Date(new Date().getTime() + (3 + secondsDelay2) * 1000);

	  // set time to wait before a new Item can be displayed
	  this.dateNext = new Date(new Date().getTime() + (10 + secondsDelay) * 1000);

	  // determine Item to display based on random number and keep track of count
	  // for example, item 0 is displayed ~30% of the time, while item 3 is only
	  // displayed ~2% of the time
	  this.collect = true;	// assume you can collect the item
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
		  this.collect = false;	  // can't collect rocks
		  break;
	  }

	  this.sprite = items[itemNum];	  // set sprite
	  this.x = itemX;				  // set X
	  this.y = itemY;				  // set Y
	  this.visible = true;			  // set visibility
	}
  }
}
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
  this.minSpeed = 50;
  this.speed = (200 - (Math.floor((Math.random() * 200) + 1))) + this.minSpeed;	  // generate random number for speed
  Entity.call(this, s, r, c);
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
	// get new speed
	this.speed = (200 - (Math.floor((Math.random() * 200) + 1))) + this.minSpeed;
  }
  // causes verticle movement/jitter
  // this.y = this.y + ((50 - (Math.floor((Math.random() * 100) + 1))) * dt);
};

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
  Entity.call(this, s, r, c);
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

/**
 * 
 * @type Array
 * @description Holds all Enemy objects
 */
var allEnemies = [];
/**
 * 
 * @type Enemy
 * @description One Enemy object. Used to load allEnemies array.
 */
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

/**
 * @type Number
 * @description Loop variable
 */
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
 * @param {type} param1
 * @param {type} param2
 * @description Event listener for keydown even. Passes keys to player.handleInput()
 */
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

