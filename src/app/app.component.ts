import { Component } from '@angular/core';

class City_name{
    id: number;
    name: string;
    capital: boolean;


    constructor(id: number, name: string, capital: boolean) {

        this.id = id;
        this.name = name;
        this.capital = capital;

    }
}

class City_sq{
    id_sq: number;
    ref_id: number;
    value: number;
    year: number;

    constructor(id_sq: number, ref_id: number, value: number, year: number) {

        this.id_sq = id_sq;
        this.ref_id = ref_id;
        this.value = value;
        this.year = year;
    }
}

class City_square{
  name: string;
  square: number;
  year: number;
  capital: boolean;

  constructor(  name: string, square: number, year: number, capital: boolean){

    this.name =  name;
    this.square = square;
    this.year = year;
    this.capital = capital;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'Lab1';
// }

export class AppComponent {
    cities: City_name[] =
    [
        { id: 1, name: "Київ", capital: true },
        { id: 2, name: "Харків", capital: false },
        { id: 3, name: "Одеса", capital: false },
    ];

    cities_sq: City_sq[] =
    [
        { id_sq: 1, ref_id: 1, value: 123 , year: 1890},
        { id_sq: 2, ref_id: 2, value: 456 , year: 1891},
        { id_sq: 3, ref_id: 3, value: 789 , year: 1892},
    ];

    city_square: City_square[] =
    [
      { name: "Київ", square: 123 , year: 1890 , capital: true},
      { name: "Харків", square: 456 , year: 1891, capital: false},
      { name: "Одеса", square: 789 , year: 1892, capital: false},
    ]

    addItem(text: string, boolean: boolean): void {

        if(text==null || text.trim()==""){
          console.log("One form is NULL");
          return;}
        else for (var i=0; i < this.cities.length; i++){
          if (text == this.cities[i].name){
            console.log("This city is taken");
            return;}
        }
        this.cities.push(new City_name(this.cities.length+1, text, boolean));
    }

    addItem_sq(ref_id: number, value: number, year: number): void {

        if(ref_id==null || value==null || year==null){
            console.log("One form is NULL");
            return;}
        else if (ref_id > this.cities.length){
          console.log("Have no such id in Cities");
          return
        }
        else {this.cities_sq.push(new City_sq(this.cities_sq.length+1, ref_id, value, year));}

        this.city_square.push(new City_square(this.cities[ref_id-1].name, value, year, this.cities[ref_id-1].capital));
    }
}
