
export const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(response.status+':'+response.statusText);
        }
    
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Ошибка запроса: ', error);
    }
}

export const fetchUserById = async (id) => {
    try {   
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        if (!response.ok) {
            throw new Error(response.status+':'+response.statusText);
        }
    
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Ошибка запроса: ', error);
        return null;
    }
}

export const fetchPosts = async () => {
    try {   
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(response.status+':'+response.statusText);
        }
    
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Ошибка запроса: ', error);
    }
}

export const fetchPostsByUserId = async (userId) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
        if (!response.ok) {
            throw new Error(response.status+':'+response.statusText);
        }
    
        const userPosts = await response.json();
        return userPosts;
    } catch (error) {
        console.error('Ошибка запроса: ', error);
    }
}