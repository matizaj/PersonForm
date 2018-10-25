using PersonForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonForm.Services
{
    public interface IRepository
    {
        Person AddPerson(Person person);
        void DeletePerson(int id);
        Person UpdatePerson(int id, Person person);
        IEnumerable<Person> People { get; }
    }
}
