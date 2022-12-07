let employee1: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Adrian",
  retire: (date: Date) => {
    console.log(date);
  },
};

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 2,
  name: "Rose",
  retire: (date: Date) => {
    console.log(date);
  },
};

