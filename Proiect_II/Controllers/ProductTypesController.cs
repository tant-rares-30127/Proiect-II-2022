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
    public class ProductTypesController : Controller
    {
        private readonly Proiect_IIContext _context;
        ProductTypeServices productTypeServices;

        public ProductTypesController(Proiect_IIContext context)
        {
            _context = context;
            this.productTypeServices = new ProductTypeServices();
        }

        [HttpGet]
        public List<ProductType> ProductsType()
        {
            List<ProductType> productTypesList = _context.ProductType.ToList();
            return productTypesList;
        }

        [HttpGet]
        public List<Product> ProductsForProductType(string text)
        {
            List<Product> productsList = _context.Product.Include(n => n.ProductType).ToList();
            return this.productTypeServices.ListOfProducts(productsList, text);
        }
    }
}
