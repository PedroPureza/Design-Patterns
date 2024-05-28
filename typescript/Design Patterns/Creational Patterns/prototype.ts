interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

let user1 = new ConcretePrototype({
  name: "John",
  age: 30,
  email: "jhon@gmail.com",
});

let user2 = user1.clone();

// Prototype is used when creating an instance of a class is expensive or complex.
// It is cheaper to clone an existing instance than to create a new one.
// Don't forget to make sure that you are cloning your object deeply, not shallowly.
