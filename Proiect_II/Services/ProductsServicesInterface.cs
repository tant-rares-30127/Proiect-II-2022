using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    interface ProductsServicesInterface
    {
        public List<Product> TopProducts(List<Product> productsList);

        public List<Product> SearchedProducts(List<Product> productsList, string text);

        public List<Product> RecommandatedProducts(List<Product> productsLst);

        public Product SearchedProduct(List<Product> productsList, string text);

        public List<Product> SortProducts(string order, string orderType, List<Product> productsList);
    }
}
