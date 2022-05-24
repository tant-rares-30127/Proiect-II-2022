using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    public class ReviewsServices : ReviewsServicesInterface
    {
        public Product RecalculateRating(List<Review> reviews, Product product)
        {
            double rating = 0;
            foreach (Review r in reviews) rating = rating + r.Rating;
            product.Rating = rating/reviews.Count;
            return product;
        }

    }
}
