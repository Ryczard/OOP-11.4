function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', and the price is ' + this.price + '.');
};

var samsungGalaxyS6 = new Phone('Samsung', 2000, 'black'),
	iPhone6S = new Phone('Apple', 2400, 'white'),
	onePlusOne = new Phone('OnePlus', 1900, 'green');

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();

Phone.prototype.applyDiscount = function(discount) {
	this.price = this.price - discount;
};

iPhone6S.applyDiscount(200);

iPhone6S.printInfo();