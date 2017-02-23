$(document).ready(function() {
  $("#tracker").submit(function(event) {
    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      $("#output").text("Please enter a value in all fields.");
    }  else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
      $("#output").text("Congratulations you've created a straight line dummy!");
      $("#dummy").show();
    }  else if (side1 === side2 && side1 === side3) {
      $("#output").text("Congratulations you've created an equilateral triangle!");
      $("#dummy").hide();
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $("#output").text("Congratulations you've created an isosceles triangle!");
      $("#dummy").hide();
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      $("#output").text("Congratulations you've created a scalene triangle!");
      $("#dummy").hide();
    }

  event.preventDefault();
  });
});
