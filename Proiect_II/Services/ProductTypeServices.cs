using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    public class ProductTypeServices : ProductTypeServicesInterface
    {
        public List<Product> ListOfProducts(List<Product> productList ,string nameOfProductType)
        {
            List<Product> productListByType = new List<Product>();
            foreach (Product product in productList)
            {
                if (product.ProductType.Name.Equals(nameOfProductType))
                {
                    productListByType.Add(product);
                }
            }
            return productListByType;
        }
    }
}
