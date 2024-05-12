// Function to store car information
function store_car(manufacturer: string, model: string, ...features: string[]): {[key: string]: string} {
    let car: {[key: string]: string} = {
        "manufacturer": manufacturer,
        "model": model
    };
    for (let feature of features) {
        let [key, value] = feature.split(":");
        car[key] = value;
    }
    return car;
}

// Call the function to store car information
console.log(store_car("Toyota", "Corolla", "color:red", "sunroof:true"));
console.log(store_car("BMW", "X5", "color:black"));
