// import { Component, OnInit } from '@angular/core';
// import {Person} from './../person';
// import { Observable } from 'rxjs';
// import { PersonService} from './../services/person.service';
// import {NgForm} from '@angular/forms';

// @Component({
//   selector: 'app-person-home',
//   templateUrl: './person-home.component.html',
//   styleUrls: ['./person-home.component.css']
// })
// export class PersonHomeComponent implements OnInit {
//   name = '';
//   surname = '';
//   address = '';
//   phone = '';
//   id: number;
//   status = false;
//   FormHeader = '';
//   editCustomer = false;
//   employees: Observable<Person[]>;
//   test = [];
//   personlist: Person[];
//  mappedlist: Person[] = [];
//   Dummyperson: Person;
//   person: Person[];
//   p: Person;
//   constructor(private personService: PersonService) { }

//   ngOnInit() {
//     this.personService.getPeople().subscribe(person => this.personlist = person);
//   }
//   ShowRegForm = function(p) {
//     this.editCustomer = true;
//     if (p != null) {
//       this.SetValuesForEdit(p);
//     } else {
//       this.ResetValues();
//     }
//   };

//   ShowRegFormForDelete = function(p) {
//     this.editCustomer = true;
//     if (p != null) {
//       this.SetValuesForDelete(p);
//     }
//   };

//   SetValuesForDelete = function(p) {
//   this.name = p.name;
//   this.surname = p.surname;
//   this.address = p.address;
//   this.phone = p.phone;
//   this.id = p.id;
//   this.FormHeader = 'Delete';
//   };

// // Function to set the values for edit form

//   SetValuesForEdit = function(p) {
//   this.name = p.name;
//   this.surname = p.surname;
//   this.address = p.address;
//   this.phone = p.phone;
//   this.id = p.id;
//   this.FormHeader = 'Edit';
//   };

// // Function to reset the values
// ResetValues() {
//   this.name = '';
//   this.surname = '';
//   this.address = '';
//   this.phone = '';
//   this.id = 0;
//   this.FormHeader = 'Add';
//   }

//   // Common function for the Operation

//   Save(regForm: NgForm) {
//     this.GetDummyObject(regForm);

//     switch (this.FormHeader) {
//     case 'Add':
//            this.Add(this.Dummyperson);
//     break;
//     case 'Edit':
//           this.Update(this.Dummyperson);
//     break;
//     case 'Delete':
//           this.Delete(this.Dummyperson);
//     break;
//            default:
//     break;

//     }
//   }

//   GetDummyObject(regForm: NgForm): Person {
//   this.Dummyperson = new Person;
//   this.Dummyperson.name = regForm.value.name;
//   this.Dummyperson.surname = regForm.value.surname;
//   this.Dummyperson.address = regForm.value.address;
//   this.Dummyperson.phone = regForm.value.phone;
//   this.Dummyperson.id = regForm.value.id;
//   return this.Dummyperson;
//   }

//   Add(person: Person) {
//     this.personService.addPerson(this.Dummyperson).subscribe(res => {
//         this.personlist.push(res);
//         alert('User added successfully !! ');
//         this.editCustomer = false;
//       }, error => {
//         console.log('Error Occured' + error);
//       });
//   }


//   Update(person: Person) {
//     this.personService.editPerson(this.Dummyperson).subscribe(res => {
//           this.editCustomer = false;
//           this.personService.getPeople().subscribe(result => {
//           this.personlist = result;
//           });
//           alert('User data Updated successfully !!');
//       });
//   }

//   Delete(person: Person) {
//     this.personService.deletePerson(this.Dummyperson).subscribe(res => {
//       this.editCustomer = false;
//       this.personService.getPeople().subscribe( result => {
//                 this.personlist = result;
//         });
//         alert('User Deleted succesfully !!');
//       });
//   }

//   onDelete(p1: Person) {
//     this.personService.deletePerson(p1).subscribe(personlist => this.person = this.personlist);
//   }

// }
