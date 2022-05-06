using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    interface ProductTypeServicesInterface
    {
        public List<Product> ListOfProducts(List<Product> productList, string nameOfProductType );
    }
}
