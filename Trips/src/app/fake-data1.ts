// export class Trip{
//     public constructor(
//         public key: any,
//         public num: number,
//         public name: string,
//         public country: string,
//         //public startDate: Date,
//         //public endDate: Date,
//         public price: number,
//         public max: number,
//         public description: string,
//         public currentStars: number,
//         public ratings: Array<number>,
//         public chosen: number,
//         public photo: string,
//         public reviews: Array<{nick: string, name: string, body: string, date: string | null}>
//     ){}
// }
// export const TRIPS: Trip[] = [
//     {
//         key: 0,
//         num: 0,
//         name: "Ciepłe wakacje",
//         country: "Hiszpania",
//        // startDate: new Date("2023-06-16"),
//        // endDate: new Date("2023-06-22"),
//         price: 600,
//         max: 20,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images5.alphacoders.com/126/thumbbig-1262642.webp",
//         reviews: []
//     },
//     {
//         key:1,
//         num: 1,
//         name: "Wakacje w górach",
//         country: "Szwajcaria",
//        // startDate: new Date("2023-04-18"),
//        // endDate: new Date("2023-04-22"),
//         price: 300,
//         max: 40,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images3.alphacoders.com/126/thumbbig-1261900.webp",
//         reviews: []
//     },]
//     {
//         num: 2,
//         name: "Poznaj kulturę Japonii",
//         country: "Japonia",
//        // startDate: new Date("2023-05-12"),
//        // endDate: new Date("2023-05-19"),
//         price: 1500,
//         max: 30,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images5.alphacoders.com/518/thumbbig-518518.webp",
//         reviews: []
//     },
//     {
//         num: 3,
//         name: "Romantyczna wycieczka",
//         country: "Francja",
//         //startDate: new Date("2023-06-01"),
//        // endDate: new Date("2023-06-04"),
//         price: 450,
//         max: 10,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images5.alphacoders.com/284/thumbbig-284379.webp",
//         reviews: []
//     },
//     {
//         num: 4,
//         name: "Przygoda życia",
//         country: "Zambia",
//         //startDate: new Date("2023-04-28"),
//         //endDate: new Date("2023-05-03"),
//         price: 1700,
//         max: 50,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images.alphacoders.com/107/thumbbig-1076928.webp",
//         reviews: []
//     },
//     {
//         num: 5,
//         name: "Tajemnice Ameryki Południowej",
//         country: "Brazylia",
//         //startDate: new Date("2023-05-10"),
//         //endDate: new Date("2023-05-18"),
//         price: 2100,
//         max: 20,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images2.alphacoders.com/536/thumbbig-536257.webp",
//         reviews: []
//     },
//     {
//         num: 6,
//         name: "Wycieczka VIP Los Angeles",
//         country: "USA",
//         //startDate: new Date("2023-06-10"),
//        // endDate: new Date("2023-06-16"),
//         price: 2500,
//         max: 25,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images6.alphacoders.com/581/thumbbig-581153.webp",
//         reviews: []
//     },
//     {
//         num: 7,
//         name: "Wyjątkowe wyspy",
//         country: "Indonezja",
//         //startDate: new Date("2023-04-24"),
//        // endDate: new Date("2023-04-29"),
//         price: 2200,
//         max: 80,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images7.alphacoders.com/542/thumbbig-542467.webp",
//         reviews: []
//     },
//     {
//         num: 8,
//         name: "Zwiedzaj Londyn",
//         country: "Wielka Brytania",
//        // startDate: new Date("2023-07-01"),
//        // endDate: new Date("2023-07-06"),
//         price: 700,
//         max: 50,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images5.alphacoders.com/404/thumbbig-404262.webp",
//         reviews: []
//     },
//     {
//         num: 8,
//         name: "Gorące wczasy",
//         country: "Turcja",
//         //startDate: new Date("2023-06-05"),
//        // endDate: new Date("2023-06-10"),
//         price: 1100,
//         max: 35,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo: "https://images6.alphacoders.com/127/thumbbig-1279674.webp",
//         reviews: []
//     },
//     {
//         num: 9,
//         name: "Wspaniałe potrawy",
//         country: "Włochy",
//         //startDate: new Date("2023-04-20"),
//        // endDate: new Date("2023-04-27"),
//         price: 550,
//         max: 60,
//         description: "Lorem ipsum dolor sit amet. Et recusandae cupnumitate est adipisci nihil num labore molestiae. Eum laborum adipisci eos laborum vero ut sunt doloribus sit officia nulla. ",
//         currentStars: 0,
//         ratings: [],
//         chosen: 0,
//         photo:"https://images4.alphacoders.com/959/thumbbig-95964.webp",
//         reviews: []
//     },

// ]