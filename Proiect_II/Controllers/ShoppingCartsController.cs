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
    public class ShoppingCartsController : Controller
    {
        private readonly Proiect_IIContext _context;
        ProductsServices productServices;

        public ShoppingCartsController(Proiect_IIContext context)
        {
            _context = context;
            this.productServices = new ProductsServices();
        }

        [HttpPost]
        public void AddProductToCart(int id, [FromBody] User user)
        {
            List <ShoppingCartProduct> shoppingCartProductList = _context.ShoppingCartProduct.Include(n => n.Product).ToList();
            ShoppingCartProduct shoppingCartProductExistent = shoppingCartProductList.Where(n => n.Product.Id == id).First();
            if (shoppingCartProductExistent != null)
            {
                shoppingCartProductExistent.Quantity++;
                _context.ShoppingCartProduct.Update(shoppingCartProductExistent);
                _context.SaveChanges();
                return;
            }
            else
            {
                ShoppingCartProduct shoppingCartProduct = new ShoppingCartProduct();
                shoppingCartProduct.Id = null;
                List<Product> productsList = _context.Product.Include(n => n.ProductType).ToList();
                shoppingCartProduct.Product = productsList.Where(n => n.Id == id).First();
                shoppingCartProduct.Quantity = 1;
                shoppingCartProduct.ShoppingCartId = user.ShoppingCart.Id;
                _context.ShoppingCartProduct.Add(shoppingCartProduct);
                _context.SaveChanges();
                return;
            }
            
        }

        [HttpPost]
        public void RaiseProductQuantity([FromBody] ShoppingCartProduct product)
        {
            product.Quantity++;
            _context.ShoppingCartProduct.Update(product);
            _context.SaveChanges();
        }

        [HttpPost]
        public void DecreaseProductQuantity([FromBody] ShoppingCartProduct product)
        {
            if (product.Quantity == 1)
            {
                _context.ShoppingCartProduct.Remove(product);
                _context.SaveChanges();
            }
            else
            {
                product.Quantity--;
                _context.ShoppingCartProduct.Update(product);
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public List<ShoppingCartProduct> ProductsCart([FromBody] User user)
        {
            int? shoppingCartId = user.ShoppingCart.Id;
            List<ShoppingCartProduct> shoppingCartProducts = new List<ShoppingCartProduct>();
            shoppingCartProducts = _context.ShoppingCartProduct.Include(n => n.Product).ToList();
            shoppingCartProducts = shoppingCartProducts.Where(n => n.ShoppingCartId == shoppingCartId).ToList();
            return shoppingCartProducts;
        }
        
    }
}
