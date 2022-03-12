using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Models
{
    public class Review
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Product Product { get; set; }
        public string Comment { get; set; }
        public double Rating { get; set; }
        public DateTime Date { get; set; }
    }
}
