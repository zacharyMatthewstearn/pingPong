// Back-End Logic
function generateList (_input){
  var input = parseInt(_input);
  var output = "";
  for (var i = 1; i <= input; i++){
    output += "<li>" + replaceNumbers(i) + "</li>"
  }
  return output;
}

function replaceNumbers(_number){
  var number = _number;

  

  return number;
}


// Front-End Logic
$("form#input-form").submit(function(event){
  event.preventDefault();
  var input = $("input#input-field").val();
  $("ul#output-ul").text("");
  $("ul#output-ul").append(generateList(input));
});
