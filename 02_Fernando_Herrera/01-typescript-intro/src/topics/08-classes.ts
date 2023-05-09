export class Person {
  private name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

/*
export class Hero extends Person {
constructor( public alterEgo: string, public age: number, public realName: string) {
  super(realName, 'New York');
}
}
*/

// Composition
export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}

const tony: Person = new Person("Tony Stark", "New York");
const ironman = new Hero("Ironman", 45, "Tony", tony);
console.log(ironman);
