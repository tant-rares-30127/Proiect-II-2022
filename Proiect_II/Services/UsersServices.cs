using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    public class UsersServices : UsersServicesInterface
    {
        public string VerifyUser(List<User> users, string email, string password)
        {
            string message= "Failed authentification!";
            foreach (User user in users)
            {
                if (user.Email.Equals(email) && user.Password.Equals(password))
                {
                    message = "Succesful authentification!";
                    break;
                }
            }
            return message;
        }
    }
}
