var routine = [
  wakeDog,
  leashDog,
  walkToPark,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];
function leashDog(a, b) {
  return(`Leash ${a} the ${b}`);
}
function walkToPark(a, b) {
  return (`Walk to the park with ${a} the ${b}`);
}
function throwFrisbee(a, b) {
  return (`Throw the frisbee for ${a} the ${b}`);
}
function walkHome(a, b) {
  return (`Walk home with ${a} the ${b}`);
}
function unleashDog(a, b) {
  return (`Unleash ${a} the ${b}`);
}

function wakeDog(a, b) {
  return (`Wake ${a} the ${b}`);
}

function exerciseDog(dogName, dogBreed) {
    var a = dogName, b = dogBreed;
    routine.forEach(function (e) {
    return e(a,b);
  });
}

aaa = exerciseDog();
console.log(aaa);
