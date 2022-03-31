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
            int i = 1;
            foreach (Product p in productsList)
            {
                if (i <= 4)
                {
                    products.Add(p);
                    i++;
                }
                else break;
            }
            return products;
        }
    }
}
