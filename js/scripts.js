function trackResult(){

  var side1 = parseInt(document.getElementById('side1').value);
  var side2 = parseInt(document.getElementById('side2').value);
  var side3 = parseInt(document.getElementById('side3').value);
  var result = document.getElementById('result');
  var pass = function(side1,side2,side3){
  return side1+side2>side3 && side2+side3>side1 && side3+side1>side2
}
}
