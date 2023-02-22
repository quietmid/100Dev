document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if(day.toLocaleLowerCase() === 'Saturday'.toLocaleLowerCase() || day.toLocaleLowerCase() === 'Sunday'.toLocaleLowerCase())
  {alert ("it is the weekend")
}else if(day.toLocaleLowerCase() === 'Tuesday'.toLocaleLowerCase() || day.toLocaleLowerCase() === 'Thursday'.toLocaleLowerCase()){ 
  alert("CLASSS DAY")
}else{
alert("borrrinnnnggg")
}
}
