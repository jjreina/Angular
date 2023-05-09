function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty: string = "New Property";
    hello: string = "overrride";
  };
}

@classDecorator
export class SuperClass {
  public muProperty: string = "Abc123";

  print() {
    console.log("Hello World");
  }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
