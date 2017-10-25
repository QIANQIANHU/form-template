


$(document).ready(function() {
  $("#reservation").submit(function(event) {
    event.preventDefault();

    var nameInput = $("#name").val();
    var timeInput = $("#time").val();
    var dateInput = $("#date").val();
    var sizeInput = $("#size").val();
    var locationInput = $("input:radio[name=location]:checked").val();
    var age = parseInt(prompt("How old are you?"));


      if (age >= 21 && locationInput === "bar" && sizeInput === "2") {
        $(alert("Make sure to check out our full drink menu!"));
      } else {
        $(alert("thank you"));
      }


    $(".name").text(nameInput);
    $(".time").text(timeInput);
    $(".date").text(dateInput);
    $(".size").text(sizeInput);
    $(".location").text(locationInput);

    // if (!nameInput || !timeInput || !dateInput || !sizeInput || !locationInput || !age);
    // {
    // alert("please fill out all information!");
    // }

    $("#letter").show();
});
});
