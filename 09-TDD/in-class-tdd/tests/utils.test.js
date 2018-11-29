const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

it("should return the area of a 5 by 6 rectangle", function() {
  const area = utils.area(5, 6);
  expect(area).to.be.a("number");
  expect(area).to.be.equal(30);
});

it("should return the area of a circle of radius 5", function() {
  const area = utils.circleArea(5);
  expect(area).to.be.a('number');
  expect(area).to.be.equal(Math.PI * 5 * 5);
});

// ========================================================
// Challenges
// ========================================================

// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.

it("Should create a new (object) Item with name and price", function() {
  const object = {name: "Car", price: 4000};
  expect(object).to.be.a('object');
  expect(object.name).to.be.a("string");
  expect(object.name).to.be.equal("Car");
  expect(object.price).to.be.a("number");
  expect(object.price).to.be.equal(4000);
});

it("Should return an array containing all items in cart", function() {
  const cart = {items: [{name: "Pizza", price: 10}, {name: "Flowers", price: 10}, {name: "More Pizza", price: 10}]};
  expect(cart).to.be.a('object');
  expect(cart.items).to.be.a('array');
  expect(cart.items.length).to.be.equal(3);
});

it("Should add a new item to the shopping cart", function() {
  const cart = {items: [{name: "Pizza", price: 10}, {name: "Flowers", price: 10}, {name: "More Pizza", price: 10}]};
  expect(cart).to.be.a('object');
  expect(cart.items.length).to.be.equal(3);

  // Add new item
  cart.items.push({name: "New item!", price: 1000});
  expect(cart.items.length).to.be.equal(4);
});

it("Should return the number of items in the cart", function() {
  const cart = {items: [{name: "Pizza", price: 10}, {name: "Flowers", price: 10}, {name: "More Pizza", price: 10}]};
  expect(cart).to.be.a('object');
  expect(cart.items.length).to.be.a('number');
  expect(cart.items.length).to.be.equal(3);
});

it("Should remove items from cart", function() {
  const cart = {items: [{name: "Pizza", price: 10}, {name: "Flowers", price: 10}, {name: "More Pizza", price: 10}]};
  expect(cart).to.be.a('object');
  expect(cart.items.length).to.be.equal(3);
  cart.items.pop();
  expect(cart.items.length).to.be.equal(2);
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
  const cart = {items: [{name: "Pizza", price: 10}, {name: "Flowers", price: 10}, {name: "More Pizza", price: 10}]};
  expect(cart).to.be.a('object');
  expect(cart.items.length).to.be.equal(3);
  cart.items.push({name: "New item!", price: 10000});
  expect(cart.items.length).to.be.equal(4);
  cart.items.pop();
  expect(cart.items.length).to.be.equal(3);
});

it("Should validate that cart is empty", function() {
  const cart = {items: [{name: "Pizza", price: 10}, {name: "Flowers", price: 10}, {name: "More Pizza", price: 10}]};
  expect(cart).to.be.a('object');
  expect(cart.items.length).to.be.equal(3);

  let i;
  for (i = 0; i < 3; i++) {
    cart.items.pop();
  };
  expect(cart.items.length).to.be.equal(0);
});

it("Should return the total cost of all items in the cart", function() {
  const cart = {items: [{name: "Pizza", price: 10}, {name: "Flowers", price: 10}, {name: "More Pizza", price: 10}]};

  let price = 0;
  let i;
  for (i = 0; i < cart.items.length; i++) { 
    price += cart.items[i].price;
  };
  expect(price).to.be.a('number');
  expect(price).to.be.equal(30);
});
