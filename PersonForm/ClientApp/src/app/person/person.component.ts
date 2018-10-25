import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonService} from './../services/person.service';
import { Person } from './../person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person[];
  personList: Person[];
  constructor(private personService: PersonService) {
    this.populatePeople();
   }

  ngOnInit() {
    this.resetForm();
  }
  populatePeople() {
    this.personService.getPeople().subscribe(data => this.personList = data);
  }
  createPerson(p1) {
    this.personService.addPerson(p1).subscribe(data => { this.populatePeople(); });
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.personService.selectedPerson = {
      id: null,
      name: '',
      surname: '',
      phone: '',
      address: ''
    };
}

onSubmit(form: NgForm) {
  if (form.value.id == null) {
    this.personService.addPerson(form.value).subscribe(data => {
      this.resetForm(form);
      this.personService.getPeople().subscribe(person => this.personList = person);
      alert('Użytkownik dodany');
    });
  } else {
    this.personService.editPerson(form.value.id, form.value).subscribe(data => {
      this.resetForm(form);
      this.personService.getPeople().subscribe(person => this.personList = person);
      alert('Użytkownik zaktualizowany');
    });
  }
}
showForEdit(p: Person) {
  this.personService.selectedPerson = p;
  console.log(p.name + p.id);
}
onDelete(id: number) {
  if (confirm('Czy na pewno chcesz usunąźć tego użutkownika?')) {
  this.personService.deletePerson(id).subscribe(data => {
    this.personService.getPeople().subscribe(person => this.personList = person);
    alert('Użytkownik usuniety');
  });
  }
}

onEdit(form: NgForm) {
  this.personService.editPerson(form.value.id, form.value).subscribe(data => {
    this.resetForm(form);
    this.personService.getPeople().subscribe(person => this.personList = person);
    alert('Użytkownik zaktualizowany');
  });
}
}

