import axios from "axios";
import img1 from "../../Images/products/telefon_mobil_xiaomi.png";
import img2 from "../../Images/products/telefon_mobil_apple.png";
import img3 from "../../Images/products/telefon_mobil.png";
import img4 from "../../Images/products/telefon_mobil_samsung.png";

let Recomadation_products = []

axios
  .get("https://localhost:5001/Products/RecommandatedProducts")
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  })
  .then((data) => {
    console.log(data)

    Recomadation_products = data
    
  });

  console.log(Recomadation_products)

// const Recomadation_products = [
//   {
//     id: 1,
//     product_name: "Telefon mobil Xiaomi",
//     description: "Readmi 9A, Dual SIM,32GB, 4G,Carbon Grey",
//     price: 469.0,
//     abonament_price: 29.51,
//     thumb: img1,
//     isActive: false,
//   },
//   {
//     id: 2,
//     product_name: "Telefon mobil Apple",
//     description: "iPhone 13, 128GB, 5G, Midnight",
//     price: 4029.0,
//     abonament_price: 215.82,
//     thumb: img2,
//     isActive: false,
//   },
//   {
//     id: 3,
//     product_name: "Telefon mobil Samsung",
//     description: "Galaxy A52s, Dual SIM, 128GB, 6GB RAM, 5G, Black",
//     price: 1549,
//     abonament_price: 86.07,
//     thumb: img4,
//     isActive: false,
//   },
//   {
//     id: 4,
//     product_name: "Telefon mobil Apple",
//     description: "iPhone 11, 64GB, Black",
//     price: 2689.0,
//     abonament_price: 145.66,
//     thumb: img3,
//     isActive: false,
//   },
// ];
export default Recomadation_products;
