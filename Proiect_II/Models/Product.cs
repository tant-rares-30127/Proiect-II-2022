using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Models
{
    public class Product
    {
        public int Id { get; set; }
        public ProductType ProductType { get; set; }
        public Supplier Supplier { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Stock { get; set; }
        public double Price { get; set; }
        public string ImageAdress { get; set; }
    }
}
