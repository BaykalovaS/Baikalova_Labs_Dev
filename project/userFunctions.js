import { users } from "./data.js"

export function createUser({ name, email }) {
    let maxId = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id > maxId) {
            maxId = users[i].id;
        }
    }
    const newUser = { id: maxId + 1, name: name, email: email, isActive: true };
    users.push(newUser);
    return newUser;
}

export function findUserById(id) {
    let resultUser = users.find(user => user.id === id);
    if (resultUser === undefined) {
        return null;
    }
    return resultUser;
}

export function updateUser(id, updatedFields) {
    let user = findUserById(id);
    if (user === null) {
        return null;
    }
    user = {...user, ...updatedFields};
    return user;
}