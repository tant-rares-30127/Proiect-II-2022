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
    }
}
