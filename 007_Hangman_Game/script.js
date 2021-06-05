const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application','programming','interface','wizard'];
 
let selectedWord = words[Math.floor(Math.random() * words.length)];

// 函數 Math.random() 會回傳一個偽隨機小數 (pseudo-random) 
// 介於0到1之間(包含 0，不包含1)

// .length 為Array物件的屬性
// 可供設定或回傳該陣列實體中包含的元素個數

//Math.floor() 函式會回傳小於等於所給數字的最大整數

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
// 獲取獲取或設置元素中包含的HTML或XML標記
  wordEl.innerHTML = `
  ${selectedWord
//把被選中的題目字母用split分開，然後按照次序排列成陣列 
    .split('')
    .map(
// map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合
// 陣列的內容會從key對字母陣列中索引，如果對了就會顯示字母，如果不是則會顯示''
// join方法會把字串用特定符號串起來
      letter => `
        <span class = "letter">
          ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
      )
      .join('')}
      `;
      // 如果吻合結果，則會顯示popup的視窗
      const innerWord = wordEl.innerText.replace(/\n/g,'');
      if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You won!  😃';
        popup.style.display = 'flex';
      }
}

// Update the wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if(index < errors) {
      part.style.display= 'block';
    } else {
      part.style.display = 'none';
    }
  });
// Check if lost
  if(wrongLetters.length === figureParts.length){
    finalMessage.innerText = 'Unfortunately you lost. 😰';
    popup.style.display = 'flex';
  }
}

// Show notification
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// keydown letter press
// 按下鍵盤時，會有相對應的值出現
window.addEventListener('keydown', e => {
  // console.log(e.keyCode);
  if(e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if(!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    }
   else {
    if(!wrongLetters.includes(letter)) {
      wrongLetters.push(letter);

      updateWrongLettersEl();
    } else {
      showNotification();
      }
    }
  }
});

// Restart game and play again
playAgainBtn.addEventListener('click',() => {
  // Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();

  popup.style.display = 'none';
});

displayWord();




