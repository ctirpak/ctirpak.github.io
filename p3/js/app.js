// Superclass of objects in game (e.g. enemy, player)
var Entity = function (s, r, c) {
  // The image/sprite for our entity, this uses
  // a helper we've provided to easily load images
  this.sprite = s;
  this.x = c;
  this.y = r;
}

// Update the entity's position, required method for game
// Parameter: dt, a time delta between ticks
Entity.prototype.update = function (dt) {

}

// Draw the entity on the screen, required method for game
Entity.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Enemies our player must avoid
var Enemy = function (s, r, c) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.minSpeed = 50;
  this.speed = (200 - (Math.floor((Math.random() * 200) + 1))) + this.minSpeed;
  this.item = '';
  this.itemVisible = false;
  this.itemX = 0;
  this.itemY = 0;
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
var player = function (s, r, c) {
  // player is a sub class of Entity
  // It does not have any additional methods
  this.hearts = 5;
  this.keys = 0;
  this.blueGems = 0;
  this.greenGems = 0;
  this.orangeGems = 0;
  this.stars = 0;
  this.score = 0;
  Entity.call(this, s, r, c);
}

// Need to set up prototype and constructor
player.prototype = Object.create(Entity.prototype);
player.constructor = player;
// Handle input to move player
player.prototype.handleInput = function (key) {
  console.log(key);
  console.log(this.x);
  console.log(this.y);
  
  switch (key) {
	case "up":
	  this.y -= ySpacing;
	  if (this.y<0) {
		  this.y += ySpacing;
	  }
	  break;
	case "down":
	  this.y += ySpacing;
	  if (this.y>=(6*ySpacing)) {
		  this.y -= ySpacing;
	  }
	  break;
	case "left":
	  this.x -= xSpacing;
	  if (this.x<0) {
		  this.x += xSpacing;
	  }
	  break;
	case "right":
	  this.x += xSpacing;
	  if (this.x>=(5*xSpacing)) {
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

var player = new player('images/char-boy.png', 5 * ySpacing, 2 * xSpacing);
//player.setPos(5 * 83, 101 * 2);


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
