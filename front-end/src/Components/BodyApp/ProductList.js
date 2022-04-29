import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import productIcon from "../../Images/Laptop.png";
import h2ProductsIcon from "../../Images/List.png";

export default function ProductList() {
  const [products, setProducts] = useState();

  useEffect(() => {
    let newProducts = [];
    axios
      .get("https://localhost:5001/ProductTypes/ProductsType")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {
        newProducts = data;
        let productsToDisplayNew = [];
        let i = 0;
        newProducts.map((p) => {
          const iconsNames = p.imageAdress.split("/")[3];
          //console.log(iconsNames);
          let func = (async (iconsNames) => {
            let ceva = await import(`../../Images/${iconsNames}`)
            return ceva.default;
          })
          console.log(func(iconsNames))
          // import(`../../Images/${iconsNames}`)
          //   .then((img) => {
          //     console.log("OK");
          //     console.log(i)
          //     productsToDisplayNew[i] = (
          //       <li key={uuidv4()}>
          //         <a href="../../dummy2">
          //           <img
          //             className="Product-Icon"
          //             src={img.default}
          //             alt="Icon"
          //           ></img>
          //           <span>{p.name}</span>
          //         </a>
          //       </li>
          //     );
          //     setProducts(productsToDisplayNew)
          //     i = i + 1
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //     productsToDisplayNew[i] = (
          //       <li key={uuidv4()}>
          //         <a href="../../dummy2">
          //           <img
          //             className="Product-Icon"
          //             src={productIcon}
          //             alt="Icon"
          //           ></img>
          //           <span>{p.name}</span>
          //         </a>
          //       </li>
          //     );
          //     console.log(productsToDisplayNew[i])
          //     setProducts(productsToDisplayNew)
          //     i = i + 1
          //   });
        });

        let ceva = "Laptop.png";
        import(`../../Images/${ceva}`)
          .then((img) => {
            //console.log("OK");
            const productsToDisplay = newProducts.map((p) => {
              //console.log(img.default);
              //console.log(productIcon);
              return (
                <li key={uuidv4()}>
                  <a href="../../dummy2">
                    <img
                      className="Product-Icon"
                      src={img.default}
                      alt="Icon"
                    ></img>
                    <span>{p.name}</span>
                  </a>
                </li>
              );
            });
            console.log(productsToDisplayNew[i])
            //setProducts(productsToDisplay);
          })
          .catch((error) => console.log(error));
      });
  }, []);

  return (
    <div className="Product-list-container">
      <span className="Product-title-container">
        <img
          className="Product-Menu-Icon"
          src={h2ProductsIcon}
          alt="Icon"
        ></img>
        <h2>Products</h2>
      </span>
      <ul>{products}</ul>
    </div>
  );
}
