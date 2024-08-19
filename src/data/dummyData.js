import Constraction from "../Components/Featured Services/images/constraction.avif";
import ElectricalService from "../Components/Featured Services/images/Electian.jpeg";
import LaptopService from "../Components/Featured Services/images/laptop.jpg";
import WaterService from "../Components/Featured Services/images/water.webp";

const myData = [
  {
    id: 1,
    name: "laptopService",
    price: 5000,
    image: LaptopService,
    text: [
      "ল্যাপটপ সার্ভিস চেক আপ",
      "ল্যাপটপ সার্ভিস পরিষ্কার করা",
      "ল্যাপটপ সার্ভিস মেরামত ও পরিষেবা",
      "ল্যাপটপ সার্ভিস ইনস্টলেশন",
    ],
  },
  {
    id: 2,
    name: "computer",
    price: 6000,
    text: [
      "কম্পিউটার চেক আপ",
      "কম্পিউটার পরিষ্কার করা",
      "কম্পিউটার মেরামত ও পরিষেবা",
      "কম্পিউটার আপগ্রেড",
    ],
  },
  {
    id: 3,
    name: "constraction",
    price: 6000,
    image: Constraction,
    text: [
      "নতুন ভবন নির্মাণ",
      "পুনর্নির্মাণ ও মেরামত",
      "বাড়ির সংস্কার কাজ",
      "কাঠামোগত পরিকল্পনা ও ডিজাইন",
    ],
  },
  {
    id: 4,
    name: "waterService",
    price: 7000,
    image: WaterService,
    text: [
      "পানি পরিসেবা চেক আপ",
      "পানি পরিসেবা পরিষ্কার করা",
      "পানি পরিসেবা মেরামত ও পরিষেবা",
      "পানি শোধন ও ফিল্টারেশন",
    ],
  },
  {
    id: 5,
    name: "electricalService",
    price: 5000,
    image: ElectricalService,
    text: [
      "ইলেকট্রিক্যাল চেক আপ",
      "ইলেকট্রিক্যাল পরিষ্কার করা",
      "ইলেকট্রিক্যাল মেরামত ও পরিষেবা",
      "ইলেকট্রিক্যাল নতুন ইনস্টলেশন",
    ],
  },
  {
    id: 6,
    name: "ac",
    price: 7000,
    image: ElectricalService,
    text: [
      "এসি চেক আপ",
      "এসি পরিষ্কার করা",
      "এসি মেরামত ও পরিষেবা",
      "এসি গ্যাস রিফিল",
    ],
  },
  {
    id: 7,
    name: "freaz",
    price: 7000,
    image: ElectricalService,
    text: [
      "ফ্রিজ চেক আপ",
      "ফ্রিজ পরিষ্কার করা",
      "ফ্রিজ মেরামত ও পরিষেবা",
      "ফ্রিজে নতুন গ্যাস রিফিল",
    ],
  },
  {
    id: 8,
    name: "electrical",
    price: 5000,
    image: ElectricalService,
    text: [
      "ইলেকট্রিক্যাল চেক আপ",
      "ইলেকট্রিক্যাল পরিষ্কার করা",
      "ইলেকট্রিক্যাল মেরামত ও পরিষেবা",
      "বৈদ্যুতিক যন্ত্রপাতি প্রতিস্থাপন",
    ],
  },
  {
    id: 9,
    name: "health",
    price: 5000,
    image: ElectricalService,
    text: [
      "স্বাস্থ্য পরীক্ষার সেবা",
      "স্বাস্থ্য উন্নয়নের পরামর্শ",
      "স্বাস্থ্য ব্যবস্থাপনা সেবা",
      "ফিটনেস এবং পুষ্টি নির্দেশিকা",
    ],
  },
  {
    id: 10,
    name: "airconditionar",
    price: 5000,
    image: ElectricalService,
    text: [
      "এসি চেক আপ",
      "এসি পরিষ্কার করা",
      "এসি মেরামত ও পরিষেবা",
      "এসি ইনস্টলেশন",
    ],
  },
  {
    id: 11,
    name: "acservice",
    price: 5000,
    image: ElectricalService,
    text: [
      "এসি চেক আপ",
      "এসি পরিষ্কার করা",
      "এসি মেরামত ও পরিষেবা",
      "এসি ইনস্টলেশন এবং রক্ষণাবেক্ষণ",
    ],
  },
  {
    id: 12,
    name: "computerservice",
    price: 5000,
    image: ElectricalService,
    text: [
      "কম্পিউটার সার্ভিস চেক আপ",
      "কম্পিউটার সার্ভিস পরিষ্কার করা",
      "কম্পিউটার সার্ভিস মেরামত",
      "কম্পিউটার ইনস্টলেশন",
    ],
  },
];

function getData(name) {
  console.log("Searching for service with name:", name);

  if (!name) {
    console.error("Name is undefined");
    return undefined;
  }

  return myData.find(
    (product) =>
      product.name && product.name.toLowerCase() === name.toLowerCase()
  );
}

export default getData;
