using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    public class ProductsServices : ProductsServicesInterface
    {
        public ProductsServices()
        {
        }

        public List<Product> TopProducts(List<Product> productsList)
        {
            List<Product> products = new List<Product>();
            for (int i = 0; i < 4; i++)
            {
                products.Add(productsList[i]);
            }
            return productsList;
        }
    }
}
