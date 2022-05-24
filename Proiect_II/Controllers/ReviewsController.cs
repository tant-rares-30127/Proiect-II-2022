using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Proiect_II.Data;
using Proiect_II.Models;
using Proiect_II.Services;

namespace Proiect_II.Controllers
{
    public class ReviewsController : Controller
    {
        private readonly Proiect_IIContext _context;
        ReviewsServices reviewsServices;
        public ReviewsController(Proiect_IIContext context)
        {
            _context = context;
            this.reviewsServices = new ReviewsServices();
        }

        [HttpGet]
        public List<Review> ReturnReviews(int id)
        {
            List<Review> reviews = _context.Review.Include(n => n.User).Where(n => n.Product.Id == id).ToList();
            return reviews;
        }

        [HttpPost]
        public void AddReview([FromBody] Review review)
        {
            review.Id = null;
            review.Date = DateTime.Now;
            _context.Review.Add(review);
            List<Review> reviews = _context.Review.Where(n => n.ProductId == review.ProductId).ToList();
            Product product = _context.Product.Where(n => n.Id == review.ProductId).FirstOrDefault();
            product = reviewsServices.RecalculateRating(reviews, product);
            _context.Product.Update(product);
            _context.SaveChanges();
        }
    }
}
