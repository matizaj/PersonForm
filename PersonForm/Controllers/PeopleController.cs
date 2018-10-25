using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonForm.Models;
using PersonForm.Services;

namespace PersonForm.Controllers
{
    public class PeopleController : Controller
    {
        private readonly IRepository _repository;
        public PeopleController(IRepository repository) => _repository = repository;


        public ActionResult Index()
        {
            return View(_repository.People);
        }
    }
}