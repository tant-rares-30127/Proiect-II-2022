using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    interface UsersServicesInterface
    {
        public User VerifyUser(List<User> users, string email, string password);
    }
}
