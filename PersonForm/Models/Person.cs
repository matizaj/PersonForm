using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PersonForm.Models
{
    public class Person
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required(ErrorMessage ="Imię jest wymagane")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Nazwisko jest wymagane")]
        public string Surname { get; set; }
        [Required(ErrorMessage = "Numer telefonu jest wymagany")]
        [MinLength(9, ErrorMessage ="Numer telefonu musi mieć 9 znaków")]
        public string Phone { get; set; }
        [Required(ErrorMessage = "Adres jest wymagany")]
        public string Address { get; set; }
    }
}
