var car = function (n) {
	this.name = n;
	this.loc = 0;
	console.log("constructor: " + this.name);
}

car.prototype.move = function () {
	this.loc += 1;
	console.log(this.name + ".move: " + this.loc);
}

var truck = function (n) {
	car.call(this, n);
}
truck.prototype = Object.create(car.prototype);
truck.constructor = truck;

var van = function (n) {
	car.call(this, n);
}
van.prototype = Object.create(car.prototype);
van.constructor = van;

van.prototype.move = function () {
	car.prototype.move.call(this);
	this.loc += 2;
	console.log(this.name + ".move: " + this.loc);
}

var c = new car('car1');
var t = new truck('truck1');
var v = new van('van1');

c.move();
t.move();
v.move();
v.move();
t.move();
c.move();
