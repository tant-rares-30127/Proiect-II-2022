using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    interface ReviewsServicesInterface
    {
        public Product RecalculateRating(List<Review> reviews, Product product);
    }
}
