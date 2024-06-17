enum Days {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

function getActivity(day: Days): string {
    switch (day) {
        case Days.Saturday:
        case Days.Sunday:
            return "Weekend getaway";
        case Days.Monday:
            return "Planning";
        case Days.Tuesday:
            return "Working";
        case Days.Wednesday:
        case Days.Friday:
            return "Evening jogging";
        case Days.Thursday:
            return "Still working";
        default:
            return "Nothing";
    }
}

console.log(getActivity(Days.Wednesday));
console.log(getActivity(Days.Sunday));

class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }
}

const stringQueue = new Queue<string>();
stringQueue.enqueue("a");
stringQueue.enqueue("b");
console.log(stringQueue.dequeue());
console.log(stringQueue.dequeue());

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
console.log(numberQueue.dequeue());
console.log(numberQueue.dequeue());


type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber): StringOrNumber {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    } else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    } else {
        throw new Error('Both inputs must be of the same type, either string or number.');
    }
}

console.log(combine("Hello, ", "world!"));
console.log(combine(10, 20));
try {
    console.log(combine("Hello", 10)); // Error
} catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    } else {
        console.error('An unknown error occurred');
    }
}


interface IPerson {
    name: string;
    age: number;
}

interface IWorker extends IPerson {
    position: string;
    salary: number;
}

class MyWorker implements IWorker {
    constructor(
        public name: string,
        public age: number,
        public position: string,
        public salary: number
    ) {}

    getSalary(): number {
        return this.salary;
    }

    setSalary(newSalary: number): void {
        this.salary = newSalary;
    }
}

const worker = new MyWorker("John Doe", 30, "Software Developer", 50000);
console.log(worker.getSalary());
worker.setSalary(55000);
console.log(worker.getSalary());