// Superclass of objects in game (e.g. enemy, player)
var Entity = function(s,r,c) {
    // The image/sprite for our entity, this uses
    // a helper we've provided to easily load images
    this.sprite = s;
	this.x=c;
	this.y=r;
}

// Update the entity's position, required method for game
// Parameter: dt, a time delta between ticks
Entity.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x = (this.x) + ((200  - (Math.floor((Math.random() * 200) + 1)) ) * dt);
	if(this.x > canvas.width) {
	  this.x = 0 - Resources.get(this.sprite).width;
	}
	this.y = this.y + ((50 - (Math.floor((Math.random() * 100) + 1)) ) * dt);
}

// Draw the entity on the screen, required method for game
Entity.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.x=0;
	this.y=0;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x = (this.x) + ((200  - (Math.floor((Math.random() * 200) + 1)) ) * dt);
	if(this.x > canvas.width) {
	  this.x = 0 - Resources.get(this.sprite).width;
	}
	this.y = this.y + ((50 - (Math.floor((Math.random() * 100) + 1)) ) * dt);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Set the position. This is only used to set the starting position.
// Movement is handled in the update() method
Enemy.prototype.setPos = function(r, c) {
  this.x=c;
  this.y=r;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// 
// Player our enemies will kill
var player = function() {
    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
	this.x=0;
	this.y=0;
}

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the player on the screen, required method for game
player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Handle input to move player
player.prototype.handleInput = function() {
  
}

// Set the position. This is only used to set the starting position.
// Movement is handled in the update() method
player.prototype.setPos = function(r, c) {
  this.x=c;
  this.y=r;
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var oneEnemy;

for (var x =0;x<5;x++){
  oneEnemy=new Enemy();
  oneEnemy.setPos( ((x % 3) + 1) * 83, x * 101 );
  
  allEnemies.push(oneEnemy);
}

player = new player();
player.setPos(5 * 83, 101 * 2);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
