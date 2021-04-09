// 首先 指定表單的項目為變數來賦值
// returns an Element object representing the element whose id property matches the specified string.
// 回傳特定id所代表的元素物件
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  //querySelector可以抓到特定id
  small.innerText = message;
}

// Show success outline
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input){
    if(input.value.trim() === '') {

      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input,`${getFieldName(input)} must be at least ${min} characters` );
  } else if(input.value.length > max) {
    showError(input, `${getFieldName(input)}must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Check password match
function checkPasswordsMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Password do not match');
  }
}

// Get fieldname
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event listener裡面有關欄位錯誤描述的內容全部註解，用矩陣來代替
// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  //如果事件可以取消就取消，但不會影響事件的傳遞
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

  // 以下為逐欄撰寫的error message
  // 作用: 讓所key in的文字可以持續顯示在console內
  // if (username.value === ''){
  //   showError(username, 'Username is required');
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === ''){
  //   showError(email, 'Email is required');
  // } else if(!isValidEmail(email.value)) {
  //   showError(email, 'Email is not valid');
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value === ''){
  //   showError(password, 'Password is required');
  // } else {
  //   showSuccess(password);
  // }

  // if (password2.value === ''){
  //   showError(password2, 'Password 2 is required');
  // } else {
  //   showSuccess(password2);
  // }


  // 設定按下submit後，可能產生的結果

