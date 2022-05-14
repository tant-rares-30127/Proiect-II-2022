using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Models
{
    public class ShoppingCart
    {
        [ForeignKey("User")]
        public int? Id { get; set; }
        public DateTime DateTime { get; set; }
        public virtual User User { get; set; }
    }
}
