using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonForm.Models;
using PersonForm.Services;

namespace PersonForm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IRepository _repository;
        public PersonController(IRepository repository) => _repository = repository;

        //GET: /Person/GetAll
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Person> GetAll()
        {
            return _repository.People;
        }

        //POST api/Person/AddPerson
        [HttpPost]
        [Route("AddPerson")]
        public ActionResult<Person> AddPerson([FromBody]Person p)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _repository.AddPerson(p);
            return Ok(p);
        }

        // DELETE: api/Person/5  
        [HttpDelete("{id}")]
        [Route("DeletePerson")]
        public ActionResult<Person> DeletePerson([FromRoute]int id)
        {
            _repository.DeletePerson(id);
            return Ok();
        }

        // PUT: api/Person/5  
        [HttpPut("{id}")]
        [Route("UpdatePerson")]
        public ActionResult<Person> UpdatePerson([FromRoute]int id, [FromBody]Person person)
        {
            if (!ModelState.IsValid)
            {
                ModelState.AddModelError("", "Niepoprawnie wypełniony formuklarz");
                return BadRequest();
            }
            _repository.UpdatePerson(id, person);
            return Ok();
        }
    }
}