import { employeeType } from "../types/employee.type";

class Employee {
    constructor (emp:employeeType ) {
      
    }
    toString() {
        // return this.name + ', ' + this.state + ', ' + this.country;
    }
}

// Firestore data converter
const cityConverter = {
    // toFirestore: (city) => {
    //     return {
    //         name: city.name,
    //         state: city.state,
    //         country: city.country
    //         };
    // },
    // fromFirestore: (snapshot, options) => {
    //     const data = snapshot.data(options);
    //     return new City(data.name, data.state, data.country);
    // }
};