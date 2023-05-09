export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Juan",
};

const passenger2: Passenger = {
  name: "Bea",
  children: ["Ale", "Dani"],
};

const returnChildrenNumber = ({ name, children }: Passenger): number => {
  const howManyChildren = children?.length || 0;
  // const howManyChildren = children!.length;
  console.log(name, howManyChildren);
  return howManyChildren;
};

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);
