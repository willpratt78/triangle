$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var s1 = parseInt($("input#s1").val());
    var s2 = parseInt($("input#s2").val());
    var s3 = parseInt($("input#s3").val());
    
    var result;

    if (s1 + s2 <= s3 || s2 + s3 <= s1 || s1 + s3 <= s2) {
      result = 'Not a triangle'; 
    } else if (s1 === s2 && s2 === s3 && s1 === s3) {
    result = 'Equilateral';
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    result = 'isosceles'; 
  } else {
      result = 'scalene'
      }
   
    $('#output').text(result);
  });
});  




// s1 + s2 > s3 || s2 + s3 > s1 || s1 + s3 > s2