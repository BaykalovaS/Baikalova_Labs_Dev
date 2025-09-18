import {createUser, findUserById, updateUser} from "./userFunctions.js"
import {getUserOrders, addProductToOrder, getOrderSummary} from "./orderFunctions.js"

function main() {
    const newUser = createUser({name: "Nika", email: "nika@mail.ru"});
    console.log(newUser);
    const UserNika = findUserById(newUser.id);
    console.log(newUser === UserNika);
    const updatedUser = updateUser(UserNika.id, {email: "nika@yandex.ru"})
    console.log(updatedUser);

    const userOrders = getUserOrders(1);
    console.log(userOrders);
    const updatedProducts = addProductToOrder(userOrders[0].id, ["Новый чай"]);
    console.log(updatedProducts);
    console.log(getOrderSummary(userOrders[0].id));
}

main();