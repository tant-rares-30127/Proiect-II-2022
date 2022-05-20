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
    public class ProductsController : Controller
    {
        private readonly Proiect_IIContext _context;
        ProductsServices productServices;
        public ProductsController(Proiect_IIContext context)
        {
            _context = context;
            this.productServices = new ProductsServices();
        }

        [HttpGet]
        public Product ReturnProduct(string productName)
        {
            List<Product> productsList = _context.Product.Include(n => n.ProductType ).ToList();
            return this.productServices.SearchedProduct(productsList, productName);
        }

        [HttpGet]
        public List<Product> SearchBarClick()
        {
            List<Product> productsList = _context.Product.Include(n => n.ProductType).ToList();
            return this.productServices.TopProducts(productsList);
        }

        [HttpGet]
        public List<Product> SearchBarType(string text)
        {
            List<Product> productsList = _context.Product.Include(n => n.ProductType).ToList();
            return this.productServices.SearchedProducts(productsList, text);
        }

        [HttpGet]
        public List<Product> RecommandatedProducts()
        {
            List<Product> productsList = _context.Product.Include(n => n.ProductType).ToList();
            return this.productServices.RecommandatedProducts(productsList);
        }

        [HttpGet]
        public List<Product> SortProducts(string order, string orderType, int productTypeId)
        {
            List<Product> productsList = _context.Product.Include(n => n.ProductType).Where(n => n.ProductType.Id==productTypeId).ToList();

            return this.productServices.SortProducts(order, orderType, productsList);
        }

    }
}
