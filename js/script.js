function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', and the price is ' + this.price + '.');
};

var SamsungGalaxyS6 = new Phone('Samsung', 2000, 'black'),
	iPhone6S = new Phone('Apple', 2400, 'white'),
	OnePlusOne = new Phone('OnePlus', 1900, 'green');

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();