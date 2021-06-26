const draggable_list = document.getElementById('draggable-list')
const check = document.getElementById('check')

// Correct Orders
const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// const numbers = [1, 3, 110, 40, 302];
// console.log(
//   // ascending a-b
//   // descending b-a
//   numbers.sort(function(a, b){
//     return a- b;
//   })
// );

// Insert list items into DOM
function createList() {
  [...richestPeople]
  // prepare for randomize the order of the list
  // assign different values to the object
    .map(a => ({value: a, sort: Math.random() }))
    // sort the data by ascending
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {

      const listItem = document.createElement('li');



      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class ="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
}