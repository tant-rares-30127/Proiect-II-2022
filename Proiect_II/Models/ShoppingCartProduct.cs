using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Models
{
    public class ShoppingCartProduct
    {
        public int? Id { get; set; }

        public int? ShoppingCartId { get; set; }
        public ShoppingCart ShoppingCart { get; set; }
        public Product Product { get; set; }
        public int Quantity { get; set; }
    }
}
