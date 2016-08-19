// Back-End Logic
function generateList (_input){
  var input = parseInt(_input);
  var output = "";
  for (var i = 1; i <= input; i++){
    output += "<li>" + getReplacement(i) + "</li>"
  }
  return output;
}

function getReplacement(_number){
  var number = _number;
  number = replaceNumber(number, 15, "ping-pong");
  number = replaceNumber(number, 3, "ping");
  number = replaceNumber(number, 5, "pong");
  return number;
}

function replaceNumber(_number, _multiple, _replacement){
  if(_number % _multiple === 0){
    return _replacement;
  }
  return _number;
}


// Front-End Logic
$("form#input-form").submit(function(event){
  event.preventDefault();
  var input = $("input#input-field").val();
  $("ul#output-ul").text("");
  $("ul#output-ul").append(generateList(input));
});
