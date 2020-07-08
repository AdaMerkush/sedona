const decrementPeopleButton = document.querySelector('#decrementPeopleButton');
const incrementPeopleButton = document.querySelector('#incrementPeopleButton');
const decrementChildButton = document.querySelector('#decrementChildButton');
const incrementChildButton = document.querySelector('#incrementChildButton');
const peopleInput = document.querySelector('#decrementPeopleInput');
const childInput = document.querySelector('#decrementChildInput');
let countPeople = 1;
let countChild = 1;

function peopleMore() {
  countPeople++;

  peopleInput.value = countPeople.toString();
}
function peopleLess() {
  if (countPeople <= 0) return;

  countPeople--;

  peopleInput.value = countPeople.toString();
}

function childMore() {
  countChild++;

  childInput.value = countChild.toString();
}

function childLess() {
  if (countChild <= 0) return;

  countChild--;

  childInput.value = countChild.toString();
}

if (decrementPeopleButton) {
  decrementPeopleButton.addEventListener('click', peopleLess);
}
if (incrementPeopleButton) {
  incrementPeopleButton.addEventListener('click', peopleMore);
}
if (decrementChildButton) {
  decrementChildButton.addEventListener('click', childLess);
}
if (incrementChildButton) {
  incrementChildButton.addEventListener('click', childMore);
}
