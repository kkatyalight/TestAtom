import cat1 from "./assets/cat1.png"
import cat2 from "./assets/cat2.png"
import cat3 from "./assets/cat3.png"
import cat4 from "./assets/cat4.png"

export const catalog=[
    {
        title:'ТРУБНЫЙ ПРОКАТ',
        imgSrc: cat1,
        categories:[
            'Сортовой прокат',
            'Фасонный прокат',
            'Листовой прокат',
            'Лента металлическая',
            'Сортовой прокат',
            'Фасонный прокат',
            'Листовой прокат',
            'Лента металлическая',
        ]
    },
    {
        title:'ДЕТАЛИ ТРУБОПРОВОДОВ',
        imgSrc:cat2,
        categories:[
            'Металлочерепица',
            'Профнастил',
            'Доборные элементы',
            'Водосточная система',
            'Доборные элементы',
            'Водосточная система',
        ]
    },
    {
        title:'ТРУБОПРОВОДНАЯ АРМАТУРА',
        imgSrc:cat3,
        categories:[
            'Сайдинг металлический',
            'Панели',
            'Доборные элементы',
            'Элементы безопасности',
        ]
    },
    {
        title:'ЦВЕТНОЙ МЕТАЛЛОПРОКАТ',
        imgSrc:cat4,
        categories:[
            'Сортовой прокат',
            'Фасонный прокат',
            'Лента металлическая',
        ]
    },
]

import popular1 from "./assets/popular1.png"
import popular2 from "./assets/popular2.png"
import popular3 from "./assets/popular3.png"
import popular4 from "./assets/popular4.png"

export const popular=[
    {
        imgSrc:popular1,
        title:'Шваллер',
    },
    {
        imgSrc:popular2,
        title:'Балка двутаровая',
    },
    {
        imgSrc:popular3,
        title:'Арматура',
    },
    {
        imgSrc:popular4,
        title:'Уголок металлический',
    },
    {
        imgSrc:popular1,
        title:'Шваллер',
    },
    {
        imgSrc:popular2,
        title:'Балка двутаровая',
    },
    {
        imgSrc:popular3,
        title:'Арматура',
    },
    {
        imgSrc:popular4,
        title:'Уголок металлический',
    },
]

import special1 from "./assets/special1.png"
import special2 from "./assets/special2.png"
export const special=[
    {
        imgSrc:special1,
        title:'Труба котельная 377х17 мм, ту 14-3р-55-2001 сталь 12х1мф. 11 тн',
        text:'200 000 руб/тн.',
    },
    {
        imgSrc:special2,
        title:'Клапан запорный 15бн3бк, Dy 100 мм, Ру 16 - 8 шт',
        text:'180 000 руб/шт.',
    },
    {
        imgSrc:special1,
        title:'Труба котельная низкого давления 273х8 мм и 325х8 мм – сталь 20 ТУ 14-3-190-2004.',
        text:'98 000 руб/тн.',
    },
    {
        imgSrc:special1,
        title:'Труба котельная 377х17 мм, ту 14-3р-55-2001 сталь 12х1мф. 11 тн',
        text:'200 000 руб/тн.',
    },
    {
        imgSrc:special2,
        title:'Клапан запорный 15бн3бк, Dy 100 мм, Ру 16 - 8 шт',
        text:'180 000 руб/шт.',
    },
    {
        imgSrc:special1,
        title:'Труба котельная низкого давления 273х8 мм и 325х8 мм – сталь 20 ТУ 14-3-190-2004.',
        text:'98 000 руб/тн.',
    },
]

import icon_service1 from "./assets/icon_service1.svg"
import icon_service2 from "./assets/icon_service2.svg"
import icon_service3 from "./assets/icon_service3.svg"
import icon_service4 from "./assets/icon_service4.svg"
import icon_service5 from "./assets/icon_service5.svg"
import icon_service6 from "./assets/icon_service6.svg"
import icon_service7 from "./assets/icon_service7.svg"
import icon_service8 from "./assets/icon_service8.svg"
import service1 from "./assets/service1.png"
import service2 from "./assets/service2.jpg"
import service3 from "./assets/service3.jpeg"
import service4 from "./assets/service4.webp"
import service5 from "./assets/service5.webp"
import service6 from "./assets/service6.webp"
import service7 from "./assets/service7.jpg"
import service8 from "./assets/service8.jpg"

export const services=[
    {
        title:'Резка металлопроката',
        iconSrc:icon_service1,
        imgSrc:service1,
        info:{
            adv:{
                title:'Преимущества резки:',
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad quod ullam, cumque ex iure consequatur expedita dolor facilis commodi repudiandae natus corrupti velit quisquam molestias. Minima autem voluptatibus nisi. Itaque, fugit a officiis enim ex placeat. Impedit ad reprehenderit odio officia, esse natus nemo veritatis incidunt dignissimos suscipit optio neque. Aperiam neque, cum optio hic blanditiis voluptatem expedita vel!', 
            },
            disadv:{
                title:'Недостатки резки:',
                text:['недостаток резки №1','недостаток резки №2 длинный вариант для проверки','недостаток резки №2 еще более длинный вариант для проверки'],
            },
            price:{
                title:'Стоимость резки зависит от:',
                text:['зависимость №1','зависимость №2','зависимость №3'],
            }
        }
    },
    {
        title:'Литье деталей и заготовок',
        iconSrc:icon_service2,
        imgSrc:service2,
        info:{
            adv:{
                title:'Преимущества литья:',
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad quod ullam, cumque ex iure consequatur expedita dolor facilis commodi repudiandae natus corrupti velit quisquam molestias. Minima autem voluptatibus nisi. Itaque, fugit a officiis enim ex placeat. Impedit ad reprehenderit odio officia, esse natus nemo veritatis incidunt dignissimos suscipit optio neque. Aperiam neque, cum optio hic blanditiis voluptatem expedita vel!', 
            },
            disadv:{
                title:'Недостатки литья:',
                text:['недостаток литья №1','недостаток литья №2 длинный вариант для проверки','недостаток литья №2 еще более длинный вариант для проверки'],
            },
            price:{
                title:'Стоимость литья зависит от:',
                text:['зависимость №1','зависимость №2','зависимость №3'],
            }
        }
    }, {
        title:'Термообработка (закаливание металлоизделий)',
        iconSrc:icon_service3,
        imgSrc:service3,
        info:{
            adv:{
                title:'Преимущества термообработки:',
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad quod ullam, cumque ex iure consequatur expedita dolor facilis commodi repudiandae natus corrupti velit quisquam molestias. Minima autem voluptatibus nisi. Itaque, fugit a officiis enim ex placeat. Impedit ad reprehenderit odio officia, esse natus nemo veritatis incidunt dignissimos suscipit optio neque. Aperiam neque, cum optio hic blanditiis voluptatem expedita vel!', 
            },
            disadv:{
                title:'Недостатки термообработки:',
                text:['недостаток термообработки №1','недостаток термообработки №2 длинный вариант для проверки','недостаток термообработки №2 еще более длинный вариант для проверки'],
            },
            price:{
                title:'Стоимость термообработки зависит от:',
                text:['зависимость №1','зависимость №2','зависимость №3'],
            }
        }
    }, {
        title:'Цинкование металлоизделий',
        iconSrc:icon_service4,
        imgSrc:service4,
        info:{
            adv:{
                title:'Преимущества цинкования:',
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad quod ullam, cumque ex iure consequatur expedita dolor facilis commodi repudiandae natus corrupti velit quisquam molestias. Minima autem voluptatibus nisi. Itaque, fugit a officiis enim ex placeat. Impedit ad reprehenderit odio officia, esse natus nemo veritatis incidunt dignissimos suscipit optio neque. Aperiam neque, cum optio hic blanditiis voluptatem expedita vel!', 
            },
            disadv:{
                title:'Недостатки цинкования:',
                text:['недостаток цинкования №1','недостаток цинкования №2 длинный вариант для проверки','недостаток цинкования №2 еще более длинный вариант для проверки'],
            },
            price:{
                title:'Стоимость цинкования зависит от:',
                text:['зависимость №1','зависимость №2','зависимость №3'],
            }
        }
    }, {
        title:'Шлифовка труб и металлопроката',
        iconSrc:icon_service5,
        imgSrc:service5,
        info:{
            adv:{
                title:'Преимущества шлифовки:',
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad quod ullam, cumque ex iure consequatur expedita dolor facilis commodi repudiandae natus corrupti velit quisquam molestias. Minima autem voluptatibus nisi. Itaque, fugit a officiis enim ex placeat. Impedit ad reprehenderit odio officia, esse natus nemo veritatis incidunt dignissimos suscipit optio neque. Aperiam neque, cum optio hic blanditiis voluptatem expedita vel!', 
            },
            disadv:{
                title:'Недостатки шлифовки:',
                text:['недостаток шлифовки №1','недостаток шлифовки №2 длинный вариант для проверки','недостаток шлифовки №2 еще более длинный вариант для проверки'],
            },
            price:{
                title:'Стоимость шлифовки зависит от:',
                text:['зависимость №1','зависимость №2','зависимость №3'],
            }
        }
    }, {
        title:'Нанесение антикоррозионных покрытий',
        iconSrc:icon_service6,
        imgSrc:service6,
        info:{
            adv:{
                title:'Преимущества нанесения:',
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad quod ullam, cumque ex iure consequatur expedita dolor facilis commodi repudiandae natus corrupti velit quisquam molestias. Minima autem voluptatibus nisi. Itaque, fugit a officiis enim ex placeat. Impedit ad reprehenderit odio officia, esse natus nemo veritatis incidunt dignissimos suscipit optio neque. Aperiam neque, cum optio hic blanditiis voluptatem expedita vel!', 
            },
            disadv:{
                title:'Недостатки нанесения:',
                text:['недостаток нанесения №1','недостаток нанесения №2 длинный вариант для проверки','недостаток нанесения №2 еще более длинный вариант для проверки'],
            },
            price:{
                title:'Стоимость нанесения зависит от:',
                text:['зависимость №1','зависимость №2','зависимость №3'],
            }
        }
    }, {
        title:'Изоляция труб',
        iconSrc:icon_service7,
        imgSrc:service7,
        info:{
            adv:{
                title:'Преимущества изоляции:',
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad quod ullam, cumque ex iure consequatur expedita dolor facilis commodi repudiandae natus corrupti velit quisquam molestias. Minima autem voluptatibus nisi. Itaque, fugit a officiis enim ex placeat. Impedit ad reprehenderit odio officia, esse natus nemo veritatis incidunt dignissimos suscipit optio neque. Aperiam neque, cum optio hic blanditiis voluptatem expedita vel!', 
            },
            disadv:{
                title:'Недостатки изоляции:',
                text:['недостаток изоляции №1','недостаток изоляции №2 длинный вариант для проверки','недостаток изоляции №2 еще более длинный вариант для проверки'],
            },
            price:{
                title:'Стоимость изоляции зависит от:',
                text:['зависимость №1','зависимость №2','зависимость №3'],
            }
        }
    }, {
        title:'Токарные, фрезерные и слесарные работы по металлу',
        iconSrc:icon_service8,
        imgSrc:service8,
        info:{
            adv:{
                title:'Преимущества работ:',
                text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad quod ullam, cumque ex iure consequatur expedita dolor facilis commodi repudiandae natus corrupti velit quisquam molestias. Minima autem voluptatibus nisi. Itaque, fugit a officiis enim ex placeat. Impedit ad reprehenderit odio officia, esse natus nemo veritatis incidunt dignissimos suscipit optio neque. Aperiam neque, cum optio hic blanditiis voluptatem expedita vel!', 
            },
            disadv:{
                title:'Недостатки работ:',
                text:['недостаток работ №1','недостаток работ №2 длинный вариант для проверки','недостаток работ №2 еще более длинный вариант для проверки'],
            },
            price:{
                title:'Стоимость работ зависит от:',
                text:['зависимость №1','зависимость №2','зависимость №3'],
            }
        }
    },
]

import client1 from "./assets/client1.png"
import client2 from "./assets/client2.png"
import client3 from "./assets/client3.png"
import client4 from "./assets/client4.png"
import client5 from "./assets/client5.png"
import client6 from "./assets/client6.png"
import client7 from "./assets/client7.png"
import client8 from "./assets/client8.png"
export const clients=[
    {
        imgSrc:client1,
    },
    {
        imgSrc:client2,
    },
    {
        imgSrc:client3,
    },
    {
        imgSrc:client4,
    },
    {
        imgSrc:client5,
    },
    {
        imgSrc:client6,
    },
    {
        imgSrc:client7,
    },
    {
        imgSrc:client8,
    },
]

import icon_reason1 from "./assets/icon_reason1.svg"
import icon_reason2 from "./assets/icon_reason2.svg"
import icon_reason3 from "./assets/icon_reason3.svg"
import icon_reason4 from "./assets/icon_reason4.svg"
import icon_reason5 from "./assets/icon_reason5.svg"
import icon_reason6 from "./assets/icon_reason6.svg"
import icon_reason7 from "./assets/icon_reason7.svg"
import icon_reason8 from "./assets/icon_reason8.svg"

export const reasons=[
    {
        title:'Большой выбор качественной продукции',
        imgSrc:icon_reason1,
    },
    {
        title:'Широкий выбор металлоизделий в одном месте',
        imgSrc:icon_reason2,
    },
    {
        title:'Помощь в таможенном оформлении грузов',
        imgSrc:icon_reason3,
    },
    {
        title:'Доставим продукцию по России или в другие страны',
        imgSrc:icon_reason4,
    },
    {
        title:'Персональный подход к каждому клиенту',
        imgSrc:icon_reason5,
    },
    {
        title:'Скидки и бонусы постоянным клиентам',
        imgSrc:icon_reason6,
    },
    {
        title:'Предоставление товарного кредита и отсрочки оплаты',
        imgSrc:icon_reason7,
    },
    {
        title:'Большой выбор услуг на складе: упаковка, резка в размер и пр.',
        imgSrc:icon_reason8,
    },
]

export const news=[
    {
        title:'Название новости',
        date:'24.03.2020',
        text:'Таким образом реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
    },
    {
        title:'Название новости',
        date:'24.03.2020',
        text:'Таким образом реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
    },
    {
        title:'Название новости',
        date:'24.03.2020',
        text:'Таким образом реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
    },
    {
        title:'Название новости',
        date:'24.03.2020',
        text:'Таким образом реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
    },
    {
        title:'Название новости',
        date:'24.03.2020',
        text:'Таким образом реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
    },
    {
        title:'Название новости',
        date:'24.03.2020',
        text:'Таким образом реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
    },
]




