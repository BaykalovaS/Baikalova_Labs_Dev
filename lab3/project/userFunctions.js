import {fetchUsers, fetchUserById, fetchPostsByUserId} from "./api.js"

export const getActiveUsers = async () => {
    const users = await fetchUsers();
    const resultUsers = users.filter(user => user.id % 3 === 1);
    return resultUsers;
}

export const getUserWithPosts = async (userId) => {
    const [user, posts] = await Promise.all([
        fetchUserById(userId),
        fetchPostsByUserId(userId)
    ]);
    const result = { ...user, ...posts };
    return result;
}

export const findUserByEmail = async (email) => {
    const users = await fetchUsers();
    const user = users.filter(user => user.email === email)[0];
    return (user === undefined ? null: user);
}