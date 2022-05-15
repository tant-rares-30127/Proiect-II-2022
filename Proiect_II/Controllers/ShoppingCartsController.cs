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
        /*       // GET: ShoppingCarts
               public async Task<IActionResult> Index()
               {
                   return View(await _context.ShoppingCart.ToListAsync());
               }

               // GET: ShoppingCarts/Details/5
               public async Task<IActionResult> Details(int? id)
               {
                   if (id == null)
                   {
                       return NotFound();
                   }

                   var shoppingCart = await _context.ShoppingCart
                       .FirstOrDefaultAsync(m => m.Id == id);
                   if (shoppingCart == null)
                   {
                       return NotFound();
                   }

                   return View(shoppingCart);
               }

               // GET: ShoppingCarts/Create
               public IActionResult Create()
               {
                   return View();
               }

               // POST: ShoppingCarts/Create
               // To protect from overposting attacks, enable the specific properties you want to bind to.
               // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
               [HttpPost]
               [ValidateAntiForgeryToken]
               public async Task<IActionResult> Create([Bind("Id,DateTime")] ShoppingCart shoppingCart)
               {
                   if (ModelState.IsValid)
                   {
                       _context.Add(shoppingCart);
                       await _context.SaveChangesAsync();
                       return RedirectToAction(nameof(Index));
                   }
                   return View(shoppingCart);
               }

               // GET: ShoppingCarts/Edit/5
               public async Task<IActionResult> Edit(int? id)
               {
                   if (id == null)
                   {
                       return NotFound();
                   }

                   var shoppingCart = await _context.ShoppingCart.FindAsync(id);
                   if (shoppingCart == null)
                   {
                       return NotFound();
                   }
                   return View(shoppingCart);
               }

               // POST: ShoppingCarts/Edit/5
               // To protect from overposting attacks, enable the specific properties you want to bind to.
               // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
               [HttpPost]
               [ValidateAntiForgeryToken]
               public async Task<IActionResult> Edit(int id, [Bind("Id,DateTime")] ShoppingCart shoppingCart)
               {
                   if (id != shoppingCart.Id)
                   {
                       return NotFound();
                   }

                   if (ModelState.IsValid)
                   {
                       try
                       {
                           _context.Update(shoppingCart);
                           await _context.SaveChangesAsync();
                       }
                       catch (DbUpdateConcurrencyException)
                       {
                           if (!ShoppingCartExists(shoppingCart.Id))
                           {
                               return NotFound();
                           }
                           else
                           {
                               throw;
                           }
                       }
                       return RedirectToAction(nameof(Index));
                   }
                   return View(shoppingCart);
               }

               // GET: ShoppingCarts/Delete/5
               public async Task<IActionResult> Delete(int? id)
               {
                   if (id == null)
                   {
                       return NotFound();
                   }

                   var shoppingCart = await _context.ShoppingCart
                       .FirstOrDefaultAsync(m => m.Id == id);
                   if (shoppingCart == null)
                   {
                       return NotFound();
                   }

                   return View(shoppingCart);
               }

               // POST: ShoppingCarts/Delete/5
               [HttpPost, ActionName("Delete")]
               [ValidateAntiForgeryToken]
               public async Task<IActionResult> DeleteConfirmed(int id)
               {
                   var shoppingCart = await _context.ShoppingCart.FindAsync(id);
                   _context.ShoppingCart.Remove(shoppingCart);
                   await _context.SaveChangesAsync();
                   return RedirectToAction(nameof(Index));
               }

               private bool ShoppingCartExists(int id)
               {
                   return _context.ShoppingCart.Any(e => e.Id == id);
               }*/
    }
}
