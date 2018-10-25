using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PersonForm.Data;
using PersonForm.Models;

namespace PersonForm.Services
{
    public class Repository : IRepository
    {
        private readonly AppDbContext _context;

        public Repository(AppDbContext context) => _context = context;

        public Person AddPerson(Person person)
        {
            var personToCreate = new Person()
            {
                Id = person.Id,
                Name = person.Name,
                Surname = person.Surname,
                Phone = person.Phone,
                Address=person.Address
            };
            _context.People.Add(personToCreate);
            _context.SaveChanges();
            return personToCreate;
        }

        public void DeletePerson(int id)
        {
            var personToDelete = _context.People.FirstOrDefault(x => x.Id == id);
            _context.People.Remove(personToDelete);
            _context.SaveChanges();
        }

        public Person UpdatePerson(int id, Person person)
        {
            if (PersonExists(id))
            {
                var personToUpdate = _context.People.Find(id);
                personToUpdate.Name = person.Name;
                personToUpdate.Surname = person.Surname;
                personToUpdate.Phone = person.Phone;
                personToUpdate.Address = person.Address;
                _context.SaveChanges();
                return personToUpdate;
            }
            else
                return null;
        }

        public IEnumerable<Person> People => _context.People.ToList();

        private bool PersonExists(int id)
        {
            return _context.People.Any(x => x.Id == id);
        }
    }
}
