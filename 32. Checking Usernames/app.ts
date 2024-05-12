// List of current users
let current_users: string[] = ["John", "mary", "Mike", "jane", "Bob"];

// List of new users
let new_users: string[] = ["Jane", "Bob", "Alice", "Eve", "Mark"];

// Convert current users to lowercase
let lower_current_users: string[] = current_users.map(user => user.toLowerCase());

// Check if each new username is unique
for (let username of new_users) {
    if (lower_current_users.indexOf(username.toLowerCase())) {
        console.log(`${username} will need to enter a new username.`);
    } else {
        console.log(`${username} is available.`);
    }
}