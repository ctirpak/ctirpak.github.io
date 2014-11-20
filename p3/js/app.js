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
var enemy = function(s,r,c) {
    // enemy is a sub class of Entity
	// It does not have any additional methods
    Entity.call(this, s, r, c);
}

// Need to set up prototype and constructor
enemy.prototype = Object.create(Entity.prototype);
enemy.constructor = enemy;



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// 
// Player our enemies will kill
var plyr = function(s,r,c) {
    // player is a sub class of Entity
	// It does not have any additional methods
    Entity.call(this, s, r, c);
}

// Need to set up prototype and constructor
plyr.prototype = Object.create(Entity.prototype);
plyr.constructor = plyr;
/*
// Handle input to move player
plyr.prototype.handleInput = function() {
  
}
*/
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var oneEnemy;

for (var x =0;x<5;x++){
  oneEnemy=new enemy('images/enemy-bug.png', ((x % 3) + 1) * 83, x * 101);
  allEnemies.push(oneEnemy);
}

var player = new plyr('images/char-boy.png', 5 * 83, 101 * 2);

/*
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    plyr.handleInput(allowedKeys[e.keyCode]);
});
*/