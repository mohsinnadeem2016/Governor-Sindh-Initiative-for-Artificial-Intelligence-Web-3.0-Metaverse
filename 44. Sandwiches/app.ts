// Function to order sandwiches
function order_sandwich(...items: string[]): void {
    console.log("Sandwich ordered with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
}

// Call the function with different number of arguments
order_sandwich("Bread", "Ham", "Cheese");
order_sandwich("Bread", "Peanut Butter");
order_sandwich("Baguette", "Salami", "Lettuce", "Tomato", "Mayonnaise");
