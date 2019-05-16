var selectOne = document.getElementById("selectOne");
var selectTwo = document.getElementById("selectTwo");
var selectThree = document.getElementById("selectThree");

var textOne = document.getElementById("textOne");
var textTwo = document.getElementById("textTwo");
var textThree = document.getElementById("textThree");

var check = document.getElementById("check");
var submitForm = document.getElementById("submitForm");


submitForm.addEventListener("click", function() {
    var selectOneValue = selectOne.options[selectOne.selectedIndex].value;
    var selectTwoValue = selectTwo.options[selectTwo.selectedIndex].value;
    var selectThreeValue = selectThree.options[selectThree.selectedIndex].value;
    
    var textOneValue = textOne.value;
    var textTwoValue = textTwo.value;
    var textThreeValue = textThree.value;
    
    if (check.checked == true) {
        var checkValue = "checked";
    } else {
        var checkValue = "unchecked";
    }
    
    console.log(selectOneValue);
    console.log(selectTwoValue);
    console.log(selectThreeValue);
    console.log(textOneValue);
    console.log(textTwoValue);
    console.log(textThreeValue);
    console.log(checkValue);
});