import React from "react";
import mainlogo from "../assets/70067.png";
import bklogo from "../assets/85936.png";
import mclogo from "../assets/35939.png";
import wendyslogo from "../assets/39412.jpg";
import sslogo from "../assets/538755.jpg";
import habitlogo from "../assets/The-Habit-Burger-Grill.png";

const data = [
  // IN-N-OUT -----------------------------------------------------------------------
  {
    name: "In-N-Out",
    logo: mainlogo,
    description: "info IN-N-OUT",
    option: {
      nutrition: [
        {
          name: "Hamburger",
          serving: "243",
          cal: "390",
          fat: "19",
          cholesterol: "40",
          sodium: "650",
          carbs: "39",
          sugars: "10",
          protein: "16",
        },
        {
          name: "Cheeseburger",
          serving: "268",
          cal: "480",
          fat: "27",
          cholesterol: "60",
          sodium: "1000",
          carbs: "39",
          sugars: "10",
          protein: "22",
        },
        {
          name: "Double Double",
          serving: "330",
          cal: "670",
          fat: "41",
          cholesterol: "120",
          sodium: "1440",
          carbs: "39",
          sugars: "10",
          protein: "37",
        },
        {
          name: "Fries",
          serving: "125",
          cal: "370",
          fat: "15",
          cholesterol: "0",
          sodium: "250",
          carbs: "52",
          sugars: "0",
          protein: "6",
        },
        {
          name: "Vanilla Shake",
          serving: "15 oz.",
          cal: "570",
          fat: "30",
          cholesterol: "120",
          sodium: "360",
          carbs: "65",
          sugars: "50",
          protein: "10",
        },
      ],
      cost: [
        {
          name: "Hamburger",
          price: "2.4",
          serving: "98.7",
          cal: "158.5",
          fat: "7.7",
          cholesterol: "16.2",
          sodium: "264.2",
          carbs: "15.8",
          sugars: "4.0",
          protein: "6.5",
        },
        {
          name: "Cheeseburger",
          price: "2.81",
          serving: "95.3",
          cal: "170.8",
          fat: "9.6",
          cholesterol: "21.3",
          sodium: "355.8",
          carbs: "13.8",
          sugars: "3.5",
          protein: "7.8",
        },
        {
          name: "Double Double",
          price: "4.04",
          serving: "81.6",
          cal: "165.8",
          fat: "10.1",
          cholesterol: "29.7",
          sodium: "356.4",
          carbs: "9.6",
          sugars: "2.4",
          protein: "9.1",
        },
        {
          name: "Medium Fries",
          price: "1.87",
          serving: "66.8",
          cal: "197.8",
          fat: "8.0",
          cholesterol: "0",
          sodium: "133.6",
          carbs: "27.8",
          sugars: "0",
          protein: "3.2",
        },
        {
          name: "Vanilla Shake",
          price: "2.52",
          serving: "N/A",
          cal: "N/A",
          fat: "11.9",
          cholesterol: "47.6",
          sodium: "142.8",
          carbs: "25.8",
          sugars: "19.8",
          protein: "3.9",
        },
      ],
    },
  },
  // MCDONALD'S -----------------------------------------------------------------------
  {
    name: "McDonald's",
    logo: mclogo,
    desription: "info McDonald's",
    option: {
      nutrition: [
        {
          name: "Hamburger",
          serving: "100",
          cal: "250",
          fat: "9",
          cholesterol: "25",
          sodium: "520",
          carbs: "31",
          sugars: "6",
          protein: "12",
        },
        {
          name: "Cheeseburger",
          serving: "114",
          cal: "300",
          fat: "12",
          cholesterol: "40",
          sodium: "750",
          carbs: "33",
          sugars: "6",
          protein: "15",
        },
        {
          name: "Double Cheeseburger",
          serving: "165",
          cal: "210",
          fat: "23",
          cholesterol: "80",
          sodium: "1150",
          carbs: "34",
          sugars: "7",
          protein: "25",
        },
        {
          name: "Medium Fries",
          serving: "117",
          cal: "380",
          fat: "19",
          cholesterol: "0",
          sodium: "270",
          carbs: "48",
          sugars: "0",
          protein: "4",
        },
        {
          name: "Vanilla Shake",
          serving: "16 oz.",
          cal: "680",
          fat: "20",
          cholesterol: "60",
          sodium: "220",
          carbs: "111",
          sugars: "82",
          protein: "14",
        },
      ],
      cost: [
        {
          name: "Hamburger",
          price: "2.49",
          serving: "40.1",
          cal: "100.4",
          fat: "3.6",
          cholesterol: "10.0",
          sodium: "208.8",
          carbs: "12.4",
          sugars: "2.4",
          protein: "4.8",
        },
        {
          name: "Cheeseburger",
          price: "2.49",
          serving: "45.7",
          cal: "120.5",
          fat: "4.8",
          cholesterol: "16.0",
          sodium: "301.2",
          carbs: "13.2",
          sugars: "2.4",
          protein: "6.0",
        },
        {
          name: "Double Cheeseburger",
          price: "2.79",
          serving: "59.1",
          cal: "75.2",
          fat: "8.2",
          cholesterol: "28.6",
          sodium: "412.1",
          carbs: "12.1",
          sugars: "2.5",
          protein: "8.9",
        },
        {
          name: "Medium Fries",
          price: "2.29",
          serving: "51.1",
          cal: "165.9",
          fat: "8.3",
          cholesterol: "0",
          sodium: "117.9",
          carbs: "20.9",
          sugars: "0",
          protein: "1.7",
        },
        {
          name: "Vanilla Shake",
          price: "3.32",
          serving: "N/A",
          cal: "204.8",
          fat: "6.0",
          cholesterol: "18.0",
          sodium: "66.2",
          carbs: "33.4",
          sugars: "24.7",
          protein: "4.2",
        },
      ],
    },
  },
  // BURGER KING -----------------------------------------------------------------------
  {
    name: "Burger King",
    logo: bklogo,
    description: "info Burger King",
    option: {
      nutrition: [
        {
          name: "WHOPPER",
          serving: "270",
          cal: "660",
          fat: "40",
          cholesterol: "N/A",
          sodium: "980",
          carbs: "49",
          sugars: "11",
          protein: "28",
        },
        {
          name: "WHOPPER w/ Cheese",
          serving: "292",
          cal: "740",
          fat: "46",
          cholesterol: "N/A",
          sodium: "1340",
          carbs: "50",
          sugars: "11",
          protein: "32",
        },
        {
          name: "DOUBLE WHOPPER w/ Cheese",
          serving: "377",
          cal: "980",
          fat: "64",
          cholesterol: "N/A",
          sodium: "1410",
          carbs: "50",
          sugars: "11",
          protein: "35",
        },
        {
          name: "Medium Fries",
          serving: "153",
          cal: "380",
          fat: "16",
          cholesterol: "N/A",
          sodium: "360",
          carbs: "58",
          sugars: "1",
          protein: "4",
        },
        {
          name: "Hershey Sundae Pie",
          serving: "79",
          cal: "310",
          fat: "19",
          cholesterol: "N/A",
          sodium: "220",
          carbs: "32",
          sugars: "22",
          protein: "3",
        },
      ],
      cost: [
        {
          name: "WHOPPER",
          price: "4.29",
          serving: "62.9",
          cal: "153.8",
          fat: "9.3",
          cholesterol: "N/A",
          sodium: "228.4",
          carbs: "11.4",
          sugars: "2.5",
          protein: "6.5",
        },
        {
          name: "WHOPPER w/ Cheese",
          price: "4.99",
          serving: "58.5",
          cal: "148.3",
          fat: "9.2",
          cholesterol: "N/A",
          sodium: "268.5",
          carbs: "10.0",
          sugars: "2.2",
          protein: "6.4",
        },
        {
          name: "DOUBLE WHOPPER w/ Cheese",
          price: "5.29",
          serving: "71.2",
          cal: "185.2",
          fat: "12.1",
          cholesterol: "N/A",
          sodium: "266.5",
          carbs: "9.4",
          sugars: "2.1",
          protein: "6.6",
        },
        {
          name: "Medium Fries",
          price: "2.49",
          serving: "61.4",
          cal: "152.6",
          fat: "6.4",
          cholesterol: "N/A",
          sodium: "144.5",
          carbs: "23.3",
          sugars: "0.4",
          protein: "1.6",
        },
        {
          name: "Hershey Sundae Pie",
          price: "2.29",
          serving: "34.5",
          cal: "135.3",
          fat: "8.3",
          cholesterol: "N/A",
          sodium: "96.0",
          carbs: "13.9",
          sugars: "9.6",
          protein: "1.3",
        },
      ],
    },
  },
  // WENDY'S -----------------------------------------------------------------------
  {
    name: "Wendy's",
    logo: wendyslogo,
    description: "info Wendy's",
    option: {
      nutrition: [
        {
          name: "Dave's Single",
          serving: "N/A",
          cal: "570",
          fat: "34",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "39",
          sugars: "N/A",
          protein: "30",
        },
        {
          name: "Dave's Single",
          serving: "N/A",
          cal: "570",
          fat: "34",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "39",
          sugars: "N/A",
          protein: "30",
        },
        {
          name: "Dave's Double",
          serving: "N/A",
          cal: "810",
          fat: "51",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "39",
          sugars: "N/A",
          protein: "49",
        },
        {
          name: "Medium Fries",
          serving: "N/A",
          cal: "420",
          fat: "19",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "56",
          sugars: "N/A",
          protein: "6",
        },
        {
          name: "Vanilla Frosty",
          serving: "N/A",
          cal: "460",
          fat: "12",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "77",
          sugars: "N/A",
          protein: "12",
        },
      ],
      cost: [
        {
          name: "Dave's Single",
          price: "6.2",
          serving: "N/A",
          cal: "91.9",
          fat: "5.5",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "6.3",
          sugars: "N/A",
          protein: "4.8",
        },
        {
          name: "Dave's Single",
          price: "6.2",
          serving: "N/A",
          cal: "91.9",
          fat: "5.5",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "6.3",
          sugars: "N/A",
          protein: "4.8",
        },
        {
          name: "Dave's Double",
          price: "7.2",
          serving: "N/A",
          cal: "112.5",
          fat: "7.1",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "5.4",
          sugars: "N/A",
          protein: "6.8",
        },
        {
          name: "Medium Fries",
          price: "3.2",
          serving: "N/A",
          cal: "131.2",
          fat: "5.9",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "17.5",
          sugars: "N/A",
          protein: "1.8",
        },
        {
          name: "Vanilla Frosty",
          price: "1.2",
          serving: "N/A",
          cal: "383.3",
          fat: "10.0",
          cholesterol: "N/A",
          sodium: "N/A",
          carbs: "64.1",
          sugars: "N/A",
          protein: "10.0",
        },
      ],
    },
  },
  // SHAKE SHACK -----------------------------------------------------------------------
  {
    name: "Shake Shack",
    logo: sslogo,
    description: "info shake shack",
    option: {
      nutrition: [
        {
          name: "Single Hamburger",
          serving: "N/A",
          cal: "370",
          fat: "18",
          cholesterol: "75",
          sodium: "850",
          carbs: "24",
          sugars: "5",
          protein: "N/A",
        },
        {
          name: "Single Cheeseburger",
          serving: "N/A",
          cal: "440",
          fat: "24",
          cholesterol: "95",
          sodium: "1200",
          carbs: "25",
          sugars: "5",
          protein: "N/A",
        },
        {
          name: "Double Cheeseburger",
          serving: "N/A",
          cal: "700",
          fat: "42",
          cholesterol: "175",
          sodium: "2200",
          carbs: "49",
          sugars: "5",
          protein: "N/A",
        },
        {
          name: "Regular Fries",
          serving: "N/A",
          cal: "470",
          fat: "22",
          cholesterol: "15",
          sodium: "740",
          carbs: "63",
          sugars: "1",
          protein: "N/A",
        },
        {
          name: "Vanilla Shake",
          serving: "N/A",
          cal: "680",
          fat: "36",
          cholesterol: "235",
          sodium: "430",
          carbs: "72",
          sugars: "71",
          protein: "N/A",
        },
      ],
      cost: [
        {
          name: "Hamburger",
          price: "4.12",
          serving: "N/A",
          cal: "89.8",
          fat: "4.3",
          cholesterol: "18.2",
          sodium: "206.3",
          carbs: "5.8",
          sugars: "1.2",
          protein: "N/A",
        },
        {
          name: "Cheeseburger",
          price: "5.08",
          serving: "N/A",
          cal: "86.6",
          fat: "4.7",
          cholesterol: "18.7",
          sodium: "236.2",
          carbs: "4.9",
          sugars: "1.0",
          protein: "N/A",
        },
        {
          name: "Double Cheeseburger",
          price: "7.77",
          serving: "N/A",
          cal: "90.1",
          fat: "5.4",
          cholesterol: "22.5",
          sodium: "283.1",
          carbs: "6.3",
          sugars: "0.6",
          protein: "N/A",
        },
        {
          name: "Regular Fries",
          price: "2.87",
          serving: "N/A",
          cal: "163.7",
          fat: "7.6",
          cholesterol: "5.2",
          sodium: "257.8",
          carbs: "21.9",
          sugars: "0.3",
          protein: "N/A",
        },
        {
          name: "Vanilla Shake",
          price: "5.08",
          serving: "N/A",
          cal: "133.8",
          fat: "7.1",
          cholesterol: "46.2",
          sodium: "84.6",
          carbs: "14.1",
          sugars: "13.9",
          protein: "N/A",
        },
      ],
    },
  },
  // THE HABIT -----------------------------------------------------------------------
  {
    name: "The Habit",
    logo: habitlogo,
    description: "info habit",
    option: {
      nutrition: [
        {
          name: "Charburger",
          serving: "260",
          cal: "470",
          fat: "35",
          cholesterol: "75",
          sodium: "1240",
          carbs: "35",
          sugars: "4",
          protein: "20",
        },
        {
          name: "Teriyaki Charburger",
          serving: "300",
          cal: "510",
          fat: "35",
          cholesterol: "65",
          sodium: "1610",
          carbs: "52",
          sugars: "16",
          protein: "23",
        },
        {
          name: "Double Charburger",
          serving: "320",
          cal: "640",
          fat: "55",
          cholesterol: "120",
          sodium: "2130",
          carbs: "35",
          sugars: "8",
          protein: "39",
        },
        {
          name: "French Fries",
          serving: "5.5 oz",
          cal: "440",
          fat: "27",
          cholesterol: "0",
          sodium: "360",
          carbs: "100",
          sugars: "1",
          protein: "4",
        },
        {
          name: "Vanilla Shake",
          serving: "16 oz",
          cal: "710",
          fat: "30",
          cholesterol: "100",
          sodium: "820",
          carbs: "60",
          sugars: "80",
          protein: "14",
        },
      ],
      cost: [
        {
          name: "Charburger",
          price: "6.86",
          serving: "37.9",
          cal: "68.5",
          fat: "44.4",
          cholesterol: "10.9",
          sodium: "180.7",
          carbs: "5.1",
          sugars: "0.6",
          protein: "2.9",
        },
        {
          name: "Teriyaki Charburger",
          price: "6.99",
          serving: "42.9",
          cal: "72.9",
          fat: "72.9",
          cholesterol: "9.3",
          sodium: "230.3",
          carbs: "7.4",
          sugars: "2.3",
          protein: "3.3",
        },
        {
          name: "Double Charburger",
          price: "8.49",
          serving: "37.7",
          cal: "75.4",
          fat: "75.4",
          cholesterol: "14.1",
          sodium: "250.9",
          carbs: "4.1",
          sugars: "0.9",
          protein: "4.6",
        },
        {
          name: "French Fries",
          price: "4.24",
          serving: "N/A",
          cal: "103.7",
          fat: "6.3",
          cholesterol: "0",
          sodium: "84.9",
          carbs: "23.6",
          sugars: "0.2",
          protein: "0.9",
        },
        {
          name: "Vanilla Shake",
          price: "6.49",
          serving: "N/A",
          cal: "109.4",
          fat: "4.6",
          cholesterol: "15.4",
          sodium: "126.3",
          carbs: "9.2",
          sugars: "12.3",
          protein: "2.1",
        },
      ],
    },
  },
];

const DataContext = React.createContext(data);

export default DataContext;
