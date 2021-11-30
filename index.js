// function changeText() {
//     const element = document.getElementById('text')
//     element.textContent = 'This is really cool!'
// }
// document.addEventListener('DOMContentLoaded', changeText)

document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById('text')
    element.textContent = 'This is really cool!'
    console.log("The DOM has loaded");
  });