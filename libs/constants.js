export const APP_NAME = "Ngbuka";
import {
  RiDashboardLine,
  RiUserLine,
  RiToolsLine,
  RiArrowLeftRightLine,
} from "react-icons/ri";
import { GrGooglePay, GrTrash } from "react-icons/gr";
import { BsShieldSlash } from "react-icons/bs";
import { BiUserCheck } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { GrSettingsOption, GrInbox, GrHome, GrCart, GrDocumentStore } from "react-icons/gr";
import { FaStore } from "react-icons/fa6";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { LiaClipboardListSolid } from "react-icons/lia";
import { PiWallet } from "react-icons/pi";



// transaction history data

export const TransactionHistoryData = [

  {
    id: 1,
    date: "Mar 17, 2024",
    quantity: 1,
    delivery: "Out-of-state",
    stockId: "#34567",
    status: "successful",
    amount: "₦ 45,000",
    type: "withdrawal",


  },
  {
    id: 2,
    date: "Mar 17, 2024",
    quantity: 1,
    delivery: "Out-of-state",
    stockId: "#34567",
    status: "successful",
    amount: "₦ 45,000",
    type: "withdrawal",

  },
  {
    id: 3,
    date: "Mar 17, 2024",
    quantity: 1,
    delivery: "Out-of-state",
    stockId: "#34567",
    status: "Pending",
    amount: "₦ 45,000",
    type: "withdrawal",

  },
  {
    id: 4,
    date: "Mar 17, 2024",
    quantity: 1,
    delivery: "Out-of-state",
    stockId: "#34567",
    status: "refunded",
    amount: "₦ 45,000",
    type: "withdrawal",

  },
  {
    id: 5,
    date: "Mar 17, 2024",
    quantity: 1,
    delivery: "Out-of-state",
    stockId: "#34567",
    status: "successful",
    amount: "₦ 45,000",
    type: "withdrawal",

  },
  {
    id: 6,
    date: "Mar 17, 2024",
    quantity: 1,
    delivery: "Out-of-state",
    stockId: "#34567",
    status: "successful",
    amount: "₦ 45,000",
    type: "withdrawal",

  },
  {
    id: 7,
    date: "Mar 17, 2024",
    quantity: 1,
    delivery: "Out-of-state",
    stockId: "#34567",
    status: "successful",
    amount: "₦ 45,000",
    type: "withdrawal",

  },

]


export const WithdrawalHistoryData = [

  {
    id: 1,
    date: "Mar 17, 2024",
    time: " 12:05pm",
    
    status: "successful",
    amount: "₦ 45,000",


  },
  {
    id: 2,
    date: "Mar 17, 2024",
    time: " 12:05pm",
    status: "successful",
    amount: "₦ 45,000",

  },
  {
    id: 3,
    date: "Mar 17, 2024",
    time: " 12:05pm",
    status: "Pending",
    amount: "₦ 45,000",

  },
  {
    id: 4,
    date: "Mar 17, 2024",
    time: " 12:05pm",
    status: "failed",
    amount: "₦ 45,000",

  },
  {
    id: 5,
    date: "Mar 17, 2024",
    time: " 12:05pm",
    status: "successful",
    amount: "₦ 45,000",

  },
  {
    id: 6,
    date: "Mar 17, 2024",
    time: " 12:05pm",
    status: "successful",
    amount: "₦ 45,000",

  },
  {
    id: 7,
    date: "Mar 17, 2024",
    time: " 12:05pm",
    status: "successful",
    amount: "₦ 45,000",

  },

]


// running out list 

export const RunningOutList = [

  {
    id: 1,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: "₦ 45,000",
    quantity: 2,
  },
  {
    id: 2,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: "₦ 45,000",
    quantity: 2,
  },
  {
    id: 3,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: "₦ 45,000",
    quantity: 2,
  },
  {
    id: 4,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: "₦ 45,000",
    quantity: 2,
  },

]


// best sellers list

export const BestSellersList = [

  {
    id: 1,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: "₦ 45,000",
    quantity: "15 sold",
  },
  {
    id: 2,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: "₦ 45,000",
    quantity: "15 sold",
  },
  {
    id: 3,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: "₦ 45,000",
    quantity: "15 sold",
  },
  {
    id: 4,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: "₦ 45,000",
    quantity: "15 sold",
  },

]

// user order list

export const orderListData = [

  {
    id: 1,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: 45000,
    orderId: 12345666,
    time: " 12:05pm",
    date: "Mar 17, 2024",
    quantity: 1,
    deliveryfee: 5000,
    discount: 0,
    delivery: "Out-of-state",
    stockId: "#34567",
    state: "new"


  },
  {
    id: 2,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: 45000,
    orderId: 12345667,
    time: " 12:05pm",
    date: "Mar 17, 2024",
    quantity: 1,
    deliveryfee: 5000,
    discount: 0,
    delivery: "Out-of-state",
    stockId: "#34567",
    state: "pending"

  },
  {
    id: 3,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: 45000,
    orderId: 12345668,
    time: " 12:05pm",
    date: "Mar 17, 2024",
    quantity: 1,
    deliveryfee: 5000,
    discount: 0,
    delivery: "Out-of-state",
    stockId: "#34567",
    state: "shipped"

  },
  {
    id: 4,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: 45000,
    orderId: 12345666,
    time: " 12:05pm",
    date: "Mar 17, 2024",
    quantity: 3,
    deliveryfee: 5000,
    discount: 10000,
    delivery: "Out-of-state",
    stockId: "#34567",
    state: "pending"

  },
  {
    id: 5,
    message: "5 litresTechno super oil; Super HD 40; SAE 40",
    img: "/images/Motor oil image.png",
    price: 45000,
    orderId: 12345666,
    time: " 12:05pm",
    date: "Mar 17, 2024",
    quantity: 1,
    deliveryfee: 5000,
    discount: 0,
    delivery: "Out-of-state",
    stockId: "#34567",
    state: "completed"

  },

]


// overview data

export const OverviewData = [

  {
    id: 1,
    title: "total orders",
    icon: "/images/Icon_total.png",
    value: 36,

  },
  {
    id: 1,
    title: "total orders",
    icon: "/images/icon_box.png",
    value: 36,

  },
  {
    id: 1,
    title: "total orders",
    icon: "/images/Icon_box2.png",
    value: 36,

  }

]



// dashboard menulist

export const DashboardMenuList = [

  {

    id: 1,
    title: "Home/ Dashboard",
    active: true,
    url: "/Dashboard/home",
    icon: <GrHome />
  },
  {

    id: 2,
    title: "Storefront",
    active: false,
    url: "/Dashboard/storefront",
    icon: <FaStore />
  },

  {

    id: 2,
    title: "Orders",
    active: false,
    url: "/Dashboard/orders",
    icon: <GrInbox />
  },
  {

    id: 3,
    title: "Inventory",
    active: false,
    url: "/Dashboard/inventory",
    icon: <GrCart />
  }, {

    id: 4,
    title: "Wallet",
    active: false,
    url: "/Dashboard/wallet",
    icon: <MdOutlineAccountBalanceWallet />
  }


]


export const menuList = [
  {
    id: 1,
    title: "My account",
    icon: <RxPerson />,
    active: true,
    url: "/myaccount",
  },
  {
    id: 2,
    title: "My wallet",
    icon: <PiWallet />,
    active: false,
    url: "/wallet",
  },
  {
    id: 3,
    title: "My orders",
    icon: <LiaClipboardListSolid />,
    active: false,
    url: "/orders?tab=all",
  },
];

// All Reviews list

export const Reviews = [
  {
    id: 1,
    title: "Chinwendu Nnamene",
    icon: "/icons/Icons.svg",
    date: "25/03/24",
    reviewText:
      "The best engine oil I’ve ever used. I buy it all the time for my car and generator. And this store delivers fast too",
    type: "SW-40",
    rate: "5.0",
  },
  {
    id: 2,
    title: "Anonymous",
    icon: "/icons/Icons.svg",
    date: "20/03/24",
    reviewText:
      "Quality oil. Also the best price when I compared with other brands. Took longer to deliver than planned though",
    type: "SW-30",
    rate: "3.9",
  },
  {
    id: 3,
    title: "Esme Weatherwax",
    icon: "/icons/Icons.svg",
    date: "20/03/24",
    reviewText:
      "My mechanic approved of it, so I will continue using this brand",
    type: "SW-30",
    rate: "5.0",
  },
  {
    id: 4,
    title: "Esme Weatherwax",
    icon: "/icons/Icons.svg",
    date: "20/03/24",
    reviewText:
      "My mechanic approved of it, so I will continue using this brand",
    type: "SW-30",
    rate: "5.0",
  },
  {
    id: 5,
    title: "Esme Weatherwax",
    icon: "/icons/Icons.svg",
    date: "20/03/24",
    reviewText:
      "My mechanic approved of it, so I will continue using this brand",
    type: "SW-30",
    rate: "5.0",
  },
  {
    id: 6,
    title: "Esme Weatherwax",
    icon: "/icons/Icons.svg",
    date: "20/03/24",
    reviewText:
      "My mechanic approved of it, so I will continue using this brand",
    type: "SW-30",
    rate: "5.0",
  },
  {
    id: 7,
    title: "Esme Weatherwax",
    icon: "/icons/Icons.svg",
    date: "20/03/24",
    reviewText:
      "My mechanic approved of it, so I will continue using this brand",
    type: "SW-30",
    rate: "5.0",
  },
  {
    id: 8,
    title: "Esme Weatherwax",
    icon: "/icons/Icons.svg",
    date: "20/03/24",
    reviewText:
      "My mechanic approved of it, so I will continue using this brand",
    type: "SW-30",
    rate: "5.0",
  },
];

export const orders = [
  {
    id: 1,
    orderId: "63567255",
    orderDate: " Mar 17, 2022",
    shop: "Star auto-shop",
    imgSrc: "/images/Motor oil image.png",
    qty: "1",
    date: "25/03/24",
    itemName: "5 litresTechno super oil; Super HD 40; SAE 40",
    type: "SW-40",
    status: "pending",
    price: "45000",
  },
  {
    id: 2,
    orderId: "63567255",
    orderDate: " Mar 17, 2022",
    shop: "Star auto-shop",
    imgSrc: "/images/Motor oil image.png",
    qty: "1",
    date: "25/03/24",
    itemName: "5 litresTechno super oil; Super HD 40; SAE 40",
    type: "SW-30",
    status: "shipped",
    price: "45000",
  },
  {
    id: 3,
    orderId: "63567255",
    orderDate: " Mar 17, 2022",
    shop: "Star auto-shop",
    imgSrc: "/images/Motor oil image.png",
    qty: "1",
    date: "25/03/24",
    itemName: "5 litresTechno super oil; Super HD 40; SAE 40",
    type: "SW-40",
    status: "pending",
    price: "45000",
  },
  {
    id: 4,
    orderId: "63567255",
    orderDate: " Mar 17, 2022",
    shop: "Star auto-shop",
    imgSrc: "/images/Motor oil image.png",
    qty: "1",
    date: "25/03/24",
    itemName: "5 litresTechno super oil; Super HD 40; SAE 40",
    type: "SW-40",
    status: "completed",
    price: "45000",
  },
  {
    id: 5,
    orderId: "63567255",
    orderDate: " Mar 17, 2022",
    shop: "Star auto-shop",
    imgSrc: "/images/Motor oil image.png",
    qty: "1",
    date: "25/03/24",
    itemName: "5 litresTechno super oil; Super HD 40; SAE 40",
    type: "SW-40",
    status: "completed",
    price: "100,000",
  },
  {
    id: 6,
    orderId: "63567255",
    orderDate: " Mar 17, 2022",
    shop: "Star auto-shop",
    imgSrc: "/images/Motor oil image.png",
    qty: "1",
    date: "25/03/24",
    itemName: "5 litresTechno super oil; Super HD 40; SAE 40",
    type: "SW-40",
    status: "shipped",
    price: "45000",
  },
  {
    id: 7,
    orderId: "63567255",
    orderDate: " Mar 17, 2022",
    shop: "Star auto-shop",
    imgSrc: "/images/Motor oil image.png",
    qty: "1",
    date: "25/03/24",
    itemName: "5 litresTechno super oil; Super HD 40; SAE 40",
    type: "SW-30",
    status: "completed",
    price: "100,000",
  },
  {
    id: 8,
    orderId: "63567255",
    orderDate: " Mar 17, 2022",
    shop: "Star auto-shop",
    imgSrc: "/images/Motor oil image.png",
    qty: "1",
    date: "25/03/24",
    itemName: "5 litresTechno super oil; Super HD 40; SAE 40",
    type: "SW-40",
    status: "pending",
    price: "45000",
  },
  {
    id: 9,
    orderId: "63567255",
    orderDate: " Mar 17, 2022",
    shop: "Star auto-shop",
    imgSrc: "/images/Motor oil image.png",
    qty: "1",
    date: "25/03/24",
    itemName: "5 litresTechno super oil; Super HD 40; SAE 40",
    type: "SW-40",
    status: "shipped",
    price: "45000",
  },
];

// deposit history
export const depositHistory = [
  {
    id: 1,
    time: "12:20pm",
    nums: "₦40,000",
    date: "15 Jun 2023",
    status: "pending",
  },
  {
    id: 2,
    time: "12:20pm",
    nums: "₦100,000",
    date: "15 Jun 2023",
    status: "successful",
  },
  {
    id: 3,
    time: "12:20pm",
    nums: "₦65,000",
    date: "15 Jun 2023",
    status: "successful",
  },
  {
    id: 4,
    time: "12:20pm",
    nums: "₦3,000",
    date: "15 Jun 2023",
    status: "successful",
  },
];

// Testimonials
export const Testimonials = [
  {
    id: 1,
    img: "/images/Ellipse 12.png",
    username: "-Yinka-",
    title: "Vehicle owner",
    body: "Ngbuka is my go-to app for everything car care. Whether I need a simple oil change or a specific performance part, I can find itall here. The app is informative and user-friendly, making car maintenance a breeze",
  },
  {
    id: 2,
    img: "/images/Ellipse 12.png",
    username: "- Onyeka -",
    title: "Vehicle owner",
    body: "I never thought I'd be comfortable booking car services online, but Ngbuka made it easy! The customer support was fantastic in guiding me through the process. Now, I can get my car serviced without any hassle",
  },
  {
    id: 3,
    img: "/images/Ellipse 12.png",
    username: "-Bernard-",
    title: "Vehicle owner",
    body: "I appreciate Ngbuka's commitment to quality. They only partner with reputable mechanics and verified parts dealers. This gives me confidence that my car is in good hands.",
  },
  {
    id: 4,
    img: "/images/Ellipse 12.png",
    username: "- Chiboy -",
    title: "Vehicle owner",
    body: "Ngbuka has expanded our reach beyond our physical store. With Ngbuka, we can offer competitive prices and fast delivery options to a wider market. ",
  },
  {
    id: 5,
    img: "/images/Ellipse 12.png",
    username: "- Mathew -",
    title: "Vehicle owner",
    body: "Ngbuka allows me to offer my mechanic services to a lof of customers. I can now reach customers who need repairs at their convenience.",
  },
  {
    id: 6,
    img: "/images/Ellipse 12.png",
    username: " - Mary -",
    title: "Vehicle owner",
    body: "Ngbuka's my car care buddy! Oil changes, performance parts, they've got it all. Explains everything too, makes car stuff less scary.",
  },
  {
    id: 7,
    img: "/images/Ellipse 12.png",
    username: "- Sunday -",
    title: "Vehicle owner",
    body: "Ngbuka brought my business more customers! Easy app, fair platform, lets me show my skills and build trust. Big thumbs up from this mechanic!",
  },
]

export const currencySymbol = {
  Naira: "₦",
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const daysMin = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const nairaCurrency = (price) => {
  return parseFloat(price).toLocaleString("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const graphData = {
  entity: {
    Abia: {
      dealer: 14,
      mechanic: 106,
      client: 88,
    },
    Adamawa: {
      dealer: 14,
      mechanic: 37,
      client: 181,
    },
    "Akwa Ibom": {
      dealer: 16,
      mechanic: 180,
      client: 193,
    },
    Anambra: {
      dealer: 82,
      mechanic: 73,
      client: 97,
    },
    Bauchi: {
      dealer: 5,
      mechanic: 125,
      client: 61,
    },
    Bayelsa: {
      dealer: 5,
      mechanic: 99,
      client: 157,
    },
    Benue: {
      dealer: 7,
      mechanic: 83,
      client: 109,
    },
    Borno: {
      dealer: 2,
      mechanic: 145,
      client: 94,
    },
    "Cross River": {
      dealer: 190,
      mechanic: 196,
      client: 126,
    },
    Delta: {
      dealer: 31,
      mechanic: 100,
      client: 145,
    },
    Ebonyi: {
      dealer: 46,
      mechanic: 59,
      client: 177,
    },
    Edo: {
      dealer: 62,
      mechanic: 140,
      client: 79,
    },
    Ekiti: {
      dealer: 58,
      mechanic: 46,
      client: 31,
    },
    Enugu: {
      dealer: 193,
      mechanic: 163,
      client: 192,
    },
    Gombe: {
      dealer: 174,
      mechanic: 41,
      client: 158,
    },
    Imo: {
      dealer: 135,
      mechanic: 191,
      client: 63,
    },
    Jigawa: {
      dealer: 196,
      mechanic: 72,
      client: 90,
    },
    Kaduna: {
      dealer: 192,
      mechanic: 159,
      client: 136,
    },
    Kano: {
      dealer: 27,
      mechanic: 77,
      client: 60,
    },
    Katsina: {
      dealer: 55,
      mechanic: 20,
      client: 158,
    },
    Kebbi: {
      dealer: 23,
      mechanic: 39,
      client: 121,
    },
    Kogi: {
      dealer: 124,
      mechanic: 27,
      client: 23,
    },
    Kwara: {
      dealer: 152,
      mechanic: 109,
      client: 192,
    },
    Lagos: {
      dealer: 119,
      mechanic: 90,
      client: 25,
    },
    Nasarawa: {
      dealer: 98,
      mechanic: 32,
      client: 81,
    },
    Niger: {
      dealer: 113,
      mechanic: 129,
      client: 117,
    },
    Ogun: {
      dealer: 145,
      mechanic: 85,
      client: 156,
    },
    Ondo: {
      dealer: 191,
      mechanic: 96,
      client: 44,
    },
    Osun: {
      dealer: 86,
      mechanic: 120,
      client: 28,
    },
    Oyo: {
      dealer: 177,
      mechanic: 85,
      client: 45,
    },
    Plateau: {
      dealer: 63,
      mechanic: 21,
      client: 126,
    },
    Rivers: {
      dealer: 98,
      mechanic: 169,
      client: 158,
    },
    Sokoto: {
      dealer: 160,
      mechanic: 190,
      client: 84,
    },
    Taraba: {
      dealer: 115,
      mechanic: 28,
      client: 177,
    },
    Yobe: {
      dealer: 87,
      mechanic: 73,
      client: 144,
    },
    Zamfara: {
      dealer: 77,
      mechanic: 192,
      client: 107,
    },
    Abuja: {
      dealer: 65,
      mechanic: 134,
      client: 131,
    },
  },
};
