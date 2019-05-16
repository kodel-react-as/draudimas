var textOne = document.getElementById("textOne");
var textTwo = document.getElementById("textTwo");
var textThree = document.getElementById("textThree");

var check = document.getElementById("check");
var radioSelect = document.getElementById("radioSelect");

var submitForm = document.getElementById("submitForm");

submitForm.addEventListener("click", function () {
    var textOneValue = textOne.value;
    var textTwoValue = textTwo.value;
    var textThreeValue = textThree.value;

    if (check.checked == true) {
        var checkValue = "checked";
    } else {
        var checkValue = "unchecked";
    }

    var selectedOption = $("input:radio[name=radio1]:checked").val();
    console.log(textOneValue);
    console.log(textTwoValue);
    console.log(textThreeValue);
    console.log(checkValue);
    console.log(selectedOption);
});
