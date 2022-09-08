const port = 8000;
const express = require('express')
const { faker } = require("@faker-js/faker")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const server = app.listen(port, () =>
    console.log(`Server is ready on port ${server.address().port}!`)
);

app.get("/api", (req, res) => {
    res.send("Hello from Faker API");
});

// CREATE


app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});


app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({newUser, newCompany});
});