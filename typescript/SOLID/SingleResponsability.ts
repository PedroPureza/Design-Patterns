class User {
  constructor(public name: string, email: string) {}
}
// A class should only have one reason to change. In this case, the User class should only change if the user properties change.

// If we want to add authentication to the User class, we should create a separate class to handle the authentication logic.
class UserAuthentication {
  constructor(public user: User) {}

  authenticate(): void {
    console.log(`User ${this.user.name} authenticated`);
  }
}

//This greatly improves testability, debugging and maintainability of the code.
