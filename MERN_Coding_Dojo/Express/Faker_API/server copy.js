import { faker } from '@faker-js/faker';
//THE LINES BELOW ARE THROWING ERRORS
// import { express } from 'express';
// const app = express();
// const port = 8000;

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

const createUser = () => {
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country(),
            zipcode: faker.address.zipCode()
        }
    }
    return newFakeCompany;

}
    
const newFakeUser = createUser();
console.log(newFakeUser);
const newFakeCompany = createCompany();
console.log(newFakeCompany);