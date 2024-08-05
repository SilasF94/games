function showAnswer(){
  let result = Math.floor(Math.random() * 4)
  let input = document.getElementById("myInput").value;

  if (result == input) {
    document.getElementById("demo").innerHTML = `Answer is ${result} You Won!`
  }
  else {
    document.getElementById("demo").innerHTML = `Try Again`
  }
  
  
  
}