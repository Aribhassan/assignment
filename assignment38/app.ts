// Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = "USA") {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan"); // Karachi is in Pakistan
describe_city("Paris", "France"); // Paris is in France
describe_city("New York"); // New York (using the default country)
