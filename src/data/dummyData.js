import Constraction from "../Components/Featured Services/images/constraction.avif";
const myData = [
  {
    id: 1,
    name: "laptop",
    price: 5000,
  },
  { id: 2, name: "computer", price: 6000 },
  {
    id: 2,
    name: "constraction",
    price: 6000,
    image: Constraction,
  },
  {
    id: 3,
    name: "waterService",
    price: 7000,
  },
  {
    id: 3,
    name: "waterService",
    price: 7000,
  },
  {
    id: 4,
    name: "electricalService",
    price: 5000,
  },
  {
    id: 4,
    name: "laptopService",
    price: 5000,
  },
];

function getData(name) {
  return myData.find(
    (product) => product.name.toLocaleLowerCase() === name.toLowerCase()
  );
}

export default getData;

