﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Models
{
    public class ShoppingCart
    {
        public int Id { get; set; }
        public User User { get; set; }
        public DateTime DateTime { get; set; }
    }
}