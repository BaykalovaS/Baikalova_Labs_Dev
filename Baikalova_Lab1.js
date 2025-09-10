// Задание 1
const validateUsername = (username) => {
    if (typeof username != "string") {
        return "Имя пользователя не является строкой";
    }
    let len = username.length; 
    if ((len < 5) || (len > 15)) {
        return "Имя пользователя должно содержать от 5 до 15 символов";
    }
    return null;
}
// Тесты
// console.log(validateUsername(1));
// console.log(validateUsername("1234"));
// console.log(validateUsername("1234567890123456"));
// console.log(validateUsername("1234567"));

// Задание 2
const validateEmail = (email) => {
    if (typeof email != "string") {
        return "Полученная почта не является строкой";
    }
    if (!email.includes("@")) {
        return "Почта не содержит @";
    }
    if (email.indexOf(".", email.indexOf("@")) == -1) {
        return "Почта не содержит тоски после символа @";
    }
    return null;
}
// Тесты
// console.log(validateEmail(1));
// console.log(validateEmail("1234"));
// console.log(validateEmail("1234@"));
// console.log(validateEmail("1234@mail.ru"));

// Задание 3
const validateAge = (age) => {
    if (typeof age != "number") {
        return "Полученный возраст не является числом";
    }
    if ((age < 18) || (age > 120)) {
        return "Возраст должен быть в диапазоне от 18 до 120 включительно";
    }
    return null;
}
// Тесты
// console.log(validateAge("1"));
// console.log(validateAge(17));
// console.log(validateAge(121));
// console.log(validateAge(18));

// Задание 4
const validateAgreement = (isAgreed) => {
    if (typeof isAgreed != "boolean") {
        return "Полученное согласие не является булевым типом";
    }
    if (isAgreed != true) {
        return "Согласие не подтверждено";
    }
    return null;
}
// Тесты
// console.log(validateAgreement("1"));
// console.log(validateAgreement(false));
// console.log(validateAgreement(true));

// Задание 5
const validatePhone = (phone) => {
    if ((typeof phone != "undefined") && (typeof phone != "string")) {
        return "Полученный телефон должен быть неопределённым или строкой";
    }
    if (typeof phone == "undefined") {
        return null
    }
    
    if (phone.length != 12) {
        return "Номер телефона должен иметь длину 12 символов";
    }
    if ((phone[0] != "+") || (phone[1] != "7")) {
        return "Номер телефона должен начинаться с +7";
    }
    return null;
}
// Тесты
// console.log(validatePhone(1));
// let test;
// console.log(validatePhone(test));
// console.log(validatePhone("12345678901"));
// console.log(validatePhone("+88005553535"));
// console.log(validatePhone("+78005553535"));