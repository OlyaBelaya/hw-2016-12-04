;(function() {
	"use strict";

    let str = prompt("Enter the random number from 1 to 87", "");
     
	let num = Number(str);

	if (num < 1 || num > 87) {return alert("You enter the wrong number...\n Try again...");}
 
function getData(num) {
	fetch("http://swapi.co/api/people/" + num + "/")
	.then(res => res.json())
	.then(function(res) {
	//console.log(res.name);
	     let name = res.name;
	     let species = res.species;
		 let films = res.films,
	         getFilms = films.map(film => fetch(film).then(result => result.json())),
                 getSpecies = species.map(spec => fetch(spec).then(result => result.json()));
		return Promise.all(getFilms).then(res => ({name,getSpecies,films: res}));
	})
	.then(function(res) {
     console.log(res);
     let name = res.name;
     let films = res.films; 
     let species = res.getSpecies;

     return Promise.all(species).then(res => ({name,films,species: res}));

	})
	.then(function(res) {
		console.log(res);
		let name = res.name,
		films    = res.films,
		species  = res.species,
		people   = res.species[0].people,
		getPeople = people.map(peop => fetch(peop).then(result => result.json()));

        return Promise.all(getPeople).then(res => ({name,films,species, people: res}));
	})
	.then(function(res) {
		let name = res.name,
		films    = res.films,
		species  = res.species,
		people   = res.people;

              alert(`
			${name}
			films: ${films.map(film => film.title).join(", ")}
			Species: ${species.map(spec => spec.name).join(", ")}
			Language: ${species.map(spec => spec.language).join(", ")}
			Same origin: ${people.map(peop => peop.name).join(", ")}
			`);       
	})
	.catch(function(e) {
		alert("ERROR!\n You enter the wrong number...\n Try again...");
		console.log(e);
	});
}

 getData(num);

}) ();