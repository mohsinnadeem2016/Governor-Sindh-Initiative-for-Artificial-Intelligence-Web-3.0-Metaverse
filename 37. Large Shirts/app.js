// Function with default values
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "Good One"; }
    console.log("Size: ".concat(size, ", Message: ").concat(message));
}
// Call the function
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Small one is prefect!");
