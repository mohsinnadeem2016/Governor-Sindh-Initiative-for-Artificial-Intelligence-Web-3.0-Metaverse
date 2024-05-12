// Function to order sandwiches
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich ordered with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
}
// Call the function with different number of arguments
order_sandwich("Bread", "Ham", "Cheese");
order_sandwich("Bread", "Peanut Butter");
order_sandwich("Baguette", "Salami", "Lettuce", "Tomato", "Mayonnaise");
