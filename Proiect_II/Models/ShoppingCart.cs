using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Models
{
    public class ShoppingCart
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
