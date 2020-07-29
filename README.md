var routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];
function leashDog(a, b) {
  console.log(`Leash ${a} the ${b}`);
  return `Leash ${a} the ${b}`;
}
function walkToPark(a, b) {
  return `Walk to the park with ${a} the ${b}`;
}
function throwFrisbee(a, b) {
  return `Throw the frisbee for ${a} the ${b}`;
}
function walkHome(a, b) {
  return `Walk home with ${a} the ${b}`;
}
function unleashDog(a, b) {
  return `Unleash ${a} the ${b}`;
}

function wakeDog(a, b) {
  return `Wake ${a} the ${b}`;
}

function exerciseDog(dogName, dogBreed) {
  //   var a = dogName,
  //     b = dogBreed,
  //     arrayOfFunctions = [];
  //   routine.forEach(function (e) {
  //     arrayOfFunctions.push(e(a, b));
  //   });
  //   return arrayOfFunctions;
  return routine.map((fn) => fn(dog, breed));
}

// const executedMessages = exerciseDog("Esther", "Dalmation");
// console.log(executedMessages);
