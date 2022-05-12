using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    public class UsersServices : UsersServicesInterface
    {
        public User VerifyUser(List<User> users, string email, string password)
        {
            User user1 = new User();
            foreach (User user in users)
            {
                if (user.Email.Equals(email) && user.Password.Equals(password))
                {
                    user1 = user;
                    user1.ShoppingCart.User = null;
                    break;
                }
            }
            return user1;
        }
    }
}
