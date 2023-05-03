const addNumer = (a: number, b: number): number => a + b;

const multiply = (
  firstNumber: number,
  _secondNumber?: number,
  base: number = 2
): number => firstNumber * base;

const result: number = addNumer(1, 2);
const result2: number = multiply(5);
console.log({ result, result2 });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 20);

strider.showHp();

export {};
