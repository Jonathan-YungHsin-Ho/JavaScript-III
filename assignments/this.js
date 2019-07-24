/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding: If none of the other rules apply, in other words when we're in global scope, the "this" keyword defaults to the window/console object (unless you're in Strict Mode, in which case "this" returns undefined).
 * 2. Implicit Binding: Whenever a function is called by a preceding dot, the object left of the dot at call time gets "this."
 * 3. New Binding: Whenever a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.
 * 4. Explicit Binding: "this" is explicitly defined whenever the .bind, .call, or .apply methods are used in JavaScript.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const person = {
  name: "Jonathan",
  location: "Brooklyn",
  greet: function() {
    console.log(`Hi, I'm ${this.name} from ${this.location}!`);
  }
};

person.greet();

// Principle 3

// code example for New Binding
function Movie(attr) {
  this.comedy = attr.comedy;
}

const myFaveMovie = new Movie({
    comedy: '"Zoolander"',
})

console.log(`My favourite comedy is ${myFaveMovie.comedy}`);

// Principle 4

// code example for Explicit Binding
const aboutMe = {
    name: 'Jonathan',
    city: 'Brooklyn',
    favouriteFood: 'authentic Chinese cuisine'
}

const hobbies = ['Hiking', 'Movies', 'Poker'];

function intro(thing1, thing2, thing3) {
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favouriteFood}.`;
}

console.log('Using .call method:', intro.call(aboutMe, hobbies[0], hobbies[1], hobbies[2]));

console.log('Using .apply method:', intro.apply(aboutMe, hobbies));

const boundFcn = intro.bind(aboutMe, ...hobbies);

console.log('Using .bind method:', boundFcn());