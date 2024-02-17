// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function carInfo(manufacturer: string, model: string, color?: string, year?: number) {
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    if (color !== undefined) {
        car.color = color;
    }

    if (year !== undefined) {
        car.year = year;
    }

    return car;
}


const myCar = carInfo("Toyota", "Camry", "Blue", 2022);
console.log(myCar);

