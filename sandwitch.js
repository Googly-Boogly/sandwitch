function pizzaOven(pizza) {
    var crustType = pizza[0]
    var sauceType = pizza[1]
    var cheese = pizza[2]
    var toppings = pizza[3]
    var sandwich = {
        crustType:    crustType,
        sauceType:  sauceType,
        cheese:   cheese,
        toppings: toppings
    };
        
    return sandwich
    
}
// 2nd challenge
var pizza2 = ['deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']]
console.log(pizzaOven(pizza2))

// 3rd challenge
var pizza3 = ['hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']]
console.log(pizzaOven(pizza3))

// 4th challenge
var pizza4 = ['bread', 'sauce', ['cheese'], ['toppings']]
console.log(pizzaOven(pizza4))
var pizza5 = ['cheesy bread', 'marinara sauce', ['american'], ['sausage', 'pep']]
console.log(pizzaOven(pizza5))


// bonus
function randomPizza() {
    var x = (Math.random()*3) -1
    var crust = ['bread', 'cheesy', 'plain']
    var sauce = ['marinara', 'alfredo', 'plain']
    var cheese = ['feta', 'cheese', 'plain']
    var toppings = ['sausage', 'pep', 'plain']
    var crust2 = crust[x]
    var x = (Math.random()*3) -1
    var sauce2 = sauce[x]
    var x = (Math.random()*3) -1
    var cheese2 = cheese[x]
    var x = (Math.random()*3) -1
    var toppings2 = toppings[x]
    var newpizza = [crust2, sauce2, cheese2, toppings2]
    return newpizza
}