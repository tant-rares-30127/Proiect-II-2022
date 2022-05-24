using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Proiect_II.Data;
using Proiect_II.Models;

namespace Proiect_II.Controllers
{
    public class OrderHistoriesController : Controller
    {
        private readonly Proiect_IIContext _context;

        public OrderHistoriesController(Proiect_IIContext context)
        {
            _context = context;
        }


    }
}
