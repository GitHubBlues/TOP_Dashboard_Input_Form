const word1 = document.querySelector(".word-1");
const word2 = document.querySelector(".word-2");
const word3 = document.querySelector(".word-3");


function lettersOneByOne(element, message, delay) {
    let i = 0;
    var interval = setInterval(function () {
    element.innerHTML += message.charAt(i);
    i++;
    if (i > message.length) {
      clearInterval(interval);
    }
  }, delay);
}


setTimeout(function () {
    lettersOneByOne(word1, "Happy", 120);
}, 300);


setTimeout(function () {
    lettersOneByOne(word2, "Valentines", 140);
}, 1000);


setTimeout(function () {
    lettersOneByOne(word3, "Day!", 130);
}, 2000);


setTimeout(function () {
  word1.classList.add("pulsing");
  word2.classList.add("pulsing");
  word3.classList.add("pulsing");
}, 2500);

console.log(word1);
