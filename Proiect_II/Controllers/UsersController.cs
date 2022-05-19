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
    public class UsersController : Controller
    {
        private readonly Proiect_IIContext _context;

        private UsersServices usersServices;

        public UsersController(Proiect_IIContext context)
        {
            _context = context;
            this.usersServices = new UsersServices();
        }

        [HttpGet]
        public User LoginAccess([FromBody] User user)
        {
            List<User> users = new List<User>();
            users = _context.User.Include(n => n.ShoppingCart).Include(n => n.Address).ToList();
            return usersServices.VerifyUser(users, user.Email, user.Password);
        }

        [HttpPost]
        public string RegisterUser([FromBody] User user)
        {
            user.Id = null;
            ShoppingCart shoppingCart = new ShoppingCart();
            shoppingCart.DateTime = DateTime.Now;
            user.ShoppingCart = shoppingCart;
            user.AddressId = user.Address.Id;
            user.Address = null;
            _context.User.Add(user);
            _context.SaveChanges();
            return "Use added succseful";
        }
    }
}
