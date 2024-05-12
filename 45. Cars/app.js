// Function to store car information
function store_car(manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        "manufacturer": manufacturer,
        "model": model
    };
    for (var _a = 0, features_1 = features; _a < features_1.length; _a++) {
        var feature = features_1[_a];
        var _b = feature.split(":"), key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Call the function to store car information
console.log(store_car("Toyota", "Corolla", "color:red", "sunroof:true"));
console.log(store_car("BMW", "X5", "color:black"));
