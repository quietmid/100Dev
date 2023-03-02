while (true) {
  let number = prompt("Enter a number:");

  if (number < 100 && number > 50) {
    break;
  }

  alert("Number must be between 50 and 100!");
}