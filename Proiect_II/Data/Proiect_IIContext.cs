using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Proiect_II.Models;

namespace Proiect_II.Data
{
    public class Proiect_IIContext : DbContext
    {
        public Proiect_IIContext (DbContextOptions<Proiect_IIContext> options)
            : base(options)
        {
        }

        public DbSet<Proiect_II.Models.User> User { get; set; }

        public DbSet<Proiect_II.Models.Address> Address { get; set; }

        public DbSet<Proiect_II.Models.Supplier> Supplier { get; set; }

        public DbSet<Proiect_II.Models.ProductType> ProductType { get; set; }

        public DbSet<Proiect_II.Models.Product> Product { get; set; }
    }
}
