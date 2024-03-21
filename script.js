// To Do
// - Question who the person is
// - Checks that the person exists
// - Something that (temporarly) removes person from equation
// - Array that keeps track of who is no longer available
// - Function that checks if the generated number has already been taken

// Look up
// - How to clear up screen?
// - How to prevent person from gettign their own number
// - How to prevent them from getting someone thats already been picked
// - How to assign people randomly generated numbers

'use strict';

const familyList = ['Dad', 'Mom', 'Sib 1', 'Sib 2', 'Sib 3'];

// LIST THAT WILL BE SHUFFLED
let shuffledFamilyList = ['Dad', 'Mom', 'Sib 1', 'Sib 2', 'Sib 3'];

// SHORTCUT FOR QUERIES
const familyBtn = document.querySelectorAll('.btn--family');
const overlay = document.querySelector('.overlay');
const popUp = document.querySelector('.pop-up');
const closeBtn = document.querySelector('.btn--close');

// GENERATES A RANDOM NUMBER
function randomNumber() {
  let num = Math.trunc(Math.random() * 5 + 1);
  return num;
}

// SHUFFLES LISTS USING FISHER-YATES ALGORITH
function shuffleList(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let newNum = Math.floor(Math.random() * (i + 1));
    let originalNum = arr[i];
    arr[i] = arr[newNum];
    arr[newNum] = originalNum;
  }
}

// CHECKS THAT BOTH LISTS DONT MATCH
function doNotMatch(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      //   console.log('This is FUCKING BULLSHIT YOU PIECE OF SHIT');
      return true;
    }
  }

  //   console.log('NO MATCHES');
  return false;
}

// CLOSES THE POP UP
function closePopUp() {
  popUp.classList.add('hidden');
  overlay.classList.add('hidden');
}

// MAKES SURE NO ONE GETS THEMSELVES
while (doNotMatch(familyList, shuffledFamilyList)) {
  console.log('HERE WE GO AGAIN.......');
  shuffleList(shuffledFamilyList);
}

let prsnName = '';

// TELLS YOU WHO YOU GOT FOR SECRET SANTA WHEN YOU PRESS A BUTTON
for (let i = 0; i < familyBtn.length; i++) {
  familyBtn[i].addEventListener('click', function () {
    //This specific part is usd for testing in the console
    // console.log(
    //   `Family member: ${familyBtn[i].textContent}  Target: ${shuffledFamilyList[i]}`
    // );

    popUp.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // console.log(shuffledFamilyList[i]);

    prsnName = shuffledFamilyList[i];
    // console.log(prsnName);
    document.querySelector('.heading-target').textContent = prsnName;
  });
}

// CLOSES THE POP UP WHEN YOU PRESS ON THE X
closeBtn.addEventListener('click', closePopUp);

//CLOSES THE POP UP WHEN YOU PRESS ON THE OVERLAY/OUTSIDE THE POP UP
overlay.addEventListener('click', closePopUp);

//CLOSES THE POP UP WHEN YOU PRES ESC ON THE KEYBOARD
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!popUp.classList.contains('hidden')) {
      closePopUp();
    }
  }
});
