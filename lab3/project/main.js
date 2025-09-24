import {getActiveUsers, getUserWithPosts, findUserByEmail} from "./userFunctions.js"

import {getRecentPosts, getPostsByTitleSearch, getPostsStats} from "./orderFunctions.js"

// todo
 const main = async () => {
    try {
        const [activeUsers, posts, stat] = await Promise.all([
            getActiveUsers(), // 1. Получение списка активных пользователей
            getRecentPosts(3), // 3. Получение последних постов в системе
            getPostsStats() // 4. Получение статистики по постам и пользователям
        ]);
        const detailedUserInfo = await getUserWithPosts(activeUsers[0].id); // 2. Получение детальной информации о первом пользователе (включая его посты)

        console.log('Все активные пользователи:\n', activeUsers, '\n-----------------');
        console.log('Детализация первого пользователя:\n', detailedUserInfo,  '\n-----------------');
        console.log('3 последних поста:\n', posts, '\n-----------------');
        console.log('Статистика:\n', stat, '\n----------------');
    } catch (error) {
        console.error(error);
    }
}

main();