// Function with default values
function make_shirt(size: string = "Large", message: string = "Good One"): void {
    console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Small one is prefect!");