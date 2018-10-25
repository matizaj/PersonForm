import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../person';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PersonService {
    personList: Person[];
    selectedPerson: Person;
  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    const apiUrl = 'api/person/GetAll';
    return this.http.get<Person[]>(apiUrl);
  }

    addPerson(person: Person): Observable<Person> {
      const apiUrl = 'api/person/addperson';
      const body = {
        name : person.name, surname : person.surname, phone : person.phone, address: person.address
      };
      return this.http.post<Person>(apiUrl, body, httpOptions);
    }

    editPerson(id: number, person: Person) {
    const apiUrl = 'api/person/';
    const body = JSON.stringify(person);
        return this.http.put<Person>(apiUrl + id, body, httpOptions);
      }

      deletePerson(id: number) {
        const apiUrl = '/api/Person/';
        return this.http.delete<Person>(apiUrl + id);
      }

  }
