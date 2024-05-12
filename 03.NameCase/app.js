var personalName = "Mohsin Nadeem";
console.log(personalName);
//UpperCase
console.log(personalName.toUpperCase());
//LowerCase
console.log(personalName.toLowerCase());
//TileCase
console.log(personalName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
