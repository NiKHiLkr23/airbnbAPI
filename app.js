import express, { request } from "express";

const PORT = 8000;

const app = express();

const smallCards = [
  {
    img: "https://a0.muscache.com/im/pictures/18ab1ca2-a759-48de-a55b-1cb67c25c637.jpg?im_q=medq&im_w=240",
    location: "London",
    distance: "45-minute drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/9ff017f4-1a62-4727-b83e-4087336f8c4a.jpg?im_q=medq&im_w=240",
    location: "Manchester",
    distance: "4.5-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=240",
    location: "Liverpool",
    distance: "4.5-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/da75656c-f2d5-4878-aade-f2971842365f.jpg?im_q=medq&im_w=240",
    location: "York",
    distance: "4-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240",
    location: "Cardiff",
    distance: "45-minute drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg?im_q=medq&im_w=240",
    location: "Birkenhead",
    distance: "4.5-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240",
    location: "Newquay",
    distance: "6-hour drive",
  },
  {
    img: "https://a0.muscache.com/im/pictures/3849e3f1-d275-43fb-8957-4c90f26e14db.jpg?im_q=medq&im_w=240",
    location: "Hove",
    distance: "2-hour drive",
  },
];

const mediumCards = [
  {
    img: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=1440",
    title: "Outdoor getaways",
  },
  {
    img: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=1440",
    title: "Unique stays",
  },
  {
    img: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=1440",
    title: "Entire homes",
  },
  {
    img: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=1440",
    title: "Pet allowed",
  },
];

const searchResults = [
  {
    img: "https://a0.muscache.com/im/pictures/e2e2bf3d-cb57-4ef0-9076-1571500da682.jpg?im_w=1440",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: "£30 / night",
    total: "£117 total",
    long: -0.0022275,
    lat: 51.5421655,
  },
  {
    img: "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",
    location: "Private room in center of London",
    title: "Independant luxury studio apartment",
    description:
      "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
    star: 4.3,
    price: "£40 / night",
    total: "£157 total",
    long: -0.095091,
    lat: 51.48695,
  },
  {
    img: "https://www.smartertravel.com/wp-content/uploads/2017/07/Untitled-design-8.jpg",
    location: "Private room in center of London",
    title: "London Studio Apartments",
    description:
      "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
    star: 3.8,
    price: "£35 / night",
    total: "£207 total",
    long: -0.135638,
    lat: 51.521916,
  },
  {
    img: "https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",
    location: "Private room in center of London",
    title: "30 mins to Oxford Street, Excel London",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.1,
    price: "£55 / night",
    total: "£320 total",
    long: -0.069961,
    lat: 51.472618,
  },
  {
    img: "https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",
    location: "Private room in center of London",
    title: "Spacious Peaceful Modern Bedroom",
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
    star: 5,
    price: "£60 / night",
    total: "£450 total",
    long: -0.08472,
    lat: 51.510794,
  },
  {
    img: "https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",
    location: "Private room in center of London",
    title: "The Blue Room In London",
    description:
      "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
    star: 4.23,
    price: "£65 / night",
    total: "£480 total",
    long: -0.094116,
    lat: 51.51401,
  },
  {
    img: "https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",
    location: "Private room in center of London",
    title: "5 Star Luxury Apartment",
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 3.85,
    price: "£90 / night",
    total: "£650 total",
    long: -0.109889,
    lat: 51.521245,
  },
];

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.get("/smallCards", (req, res) => {
  res.json(smallCards);
});
app.get("/mediumCards", (req, res) => {
  res.json(mediumCards);
});

app.get("/searchResults", (req, res) => {
  res.json(searchResults);
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
