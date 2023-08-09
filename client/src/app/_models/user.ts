export interface User {
    username: string;
    token : string;
}

let data: number | string = 42;

data = "10";


interface Car {
    color:string;
    model: string;
    topSpeed:number;
}

const car1: Car ={
    color:'blue',
    model: 'BMW',
    topSpeed: 23
}

const car2: Car={
    color:'Red',
    model: 'Mercedes',
    topSpeed: 100
}


const multiply = (x: number,y: number) => {
    return x * y;
}