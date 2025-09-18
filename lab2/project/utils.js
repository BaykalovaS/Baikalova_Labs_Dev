function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

// скорее всего можно написать элегантнее
function formatUserInfo({ id, name, email, isActive }) {
    let result = "Пользователь " + name + "(" + email + "), Status: ";
    if (isActive) {
        result += "Active";
    } else {
        result += "InActive";
    }
}