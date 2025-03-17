// Lab 3
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

const output = document.querySelector('p');
function Hamburger(bun, vegetables, cheeses, sauces, patty, qtyPatty, qtyOlives) {
    this.bun = bun;
    this.vegetables = vegetables;
    this.cheeses = cheeses;
    this.sauces = sauces;
    this.patty = patty;
    this.qtyPatty = qtyPatty;
    this.qtyOlives = qtyOlives;

    this.bio = function () {
        return `A hamburger with a ${this.bun} bun, ${this.vegetables}, ${this.cheeses} cheese, ${this.sauces} sauce, ${this.qtyPatty} ${this.patty} patty, and ${this.qtyOlives} olives.`;
    }
}
