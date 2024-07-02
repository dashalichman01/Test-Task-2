import { faker } from '@faker-js/faker';

function randomUserName() {
    return faker.internet.userName();
}

function randomPassword() {
    return faker.internet.password({length: 20});
}

module.exports = {
    randomUserName: randomUserName,
    randomPassword: randomPassword
}