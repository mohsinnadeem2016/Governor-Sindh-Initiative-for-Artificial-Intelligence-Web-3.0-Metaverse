// List of current users
var current_users = ["John", "mary", "Mike", "jane", "Bob"];
// List of new users
var new_users = ["Jane", "Bob", "Alice", "Eve", "Mark"];
// Convert current users to lowercase
var lower_current_users = current_users.map(function (user) { return user.toLowerCase(); });
// Check if each new username is unique
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var username = new_users_1[_i];
    if (lower_current_users.indexOf(username.toLowerCase())) {
        console.log("".concat(username, " will need to enter a new username."));
    }
    else {
        console.log("".concat(username, " is available."));
    }
}
