import {fetchUsers, fetchPosts} from "./api.js"

export const getRecentPosts = async (limit) => {
    const posts = await fetchPosts();
    posts.sort( (post1, post2) => { return post2.id - post1.id } );
    return posts.filter((post, index) => { return index < limit } );
}

export const getPostsByTitleSearch = async (searchTerm) => {
    const posts = await fetchPosts();
    return posts.filter( post => post.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
}

export const getPostsStats = async () => {
    const [users, posts] = await Promise.all([
        fetchUsers(),
        fetchPosts()
    ]);

    return {postCount: posts.length, userCount: users.length, postPerUser: (posts.length / users.length)}
}