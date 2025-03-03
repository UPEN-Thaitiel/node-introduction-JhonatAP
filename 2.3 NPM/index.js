//Initialize NPM with npm init command
// Install sillyname package with npm install
// Use sillyname package to print a random silly name
import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

var sillyName = generateName();
console.log(sillyName);
// Install superheroes package with npm install
// Use superheroes package to print a random silly name

var superheroeName = randomSuperhero();
console.log(superheroeName);