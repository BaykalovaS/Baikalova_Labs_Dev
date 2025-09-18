export const users = [
    {id: 1, name: "Соня", email: "ogurets@mail.com", isActive: true},
    {id: 2, name: "Алиса", email: "florist@yandex.ru", isActive: true},
    {id: 3, name: "Егор", email: "c_plus_plus_master@gmail.com", isActive: false}
]

export const orders = [
    {id: 1001, userId: 1, products: ["Чай чёрный", "Кружка"], total: 15.00, status: "доставлен"},
    {id: 1002, userId: 1, products: ["Шампунь"], total: 3.99, status: "отправлен"},
    {id: 1003, userId: 2, products: ["Ручка", "Тетрадь"], total: 1.33, status: "в обработке"},
    {id: 1004, userId: 2, products: ["Лента красная"], total: 1.58, status: "доставлен"}
]