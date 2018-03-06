var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

//jQuery user interface logic
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    debugger;
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if(!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();

    $(".reset").click(function() {
      location.reload();
    });
  });
});


//For count by
//$(document).ready(function() {
  $('#input form').submit(function(event) {
    event.preventDefault ();
    debugger;
    var bigNum = parseInt($('input#userInput').val());
    var multipleNum = parseInt($('input#countBy').val());
    var multiples = [];

    for (var i = multipleNum; i <= bigNum; i += multipleNum) {
      if (bigNum % i === 0) {
        multiples.push(i);
      };

      $("#output").text(multiples);
    }
  });
});
