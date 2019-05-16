var selectOne = document.getElementById("selectOne");
var textOne = document.getElementById("textOne");

var radioSelectOne = document.getElementById("radioSelectOne");
var radioSelectTwo = document.getElementById("radioSelectTwo");

var textTwo = document.getElementById("textTwo");
var selectTwo = document.getElementById("selectTwo");
var selectThree = document.getElementById("selectThree");

var check = document.getElementById("check");
var submitForm = document.getElementById("submitForm");

submitForm.addEventListener("click", function () {
    var selectOneValue = selectOne.options[selectOne.selectedIndex].value;
    var textOneValue = textOne.value;

    var selectedOptionOne = $("input:radio[name=radio1]:checked").val();
    var selectedOptionTwo = $("input:radio[name=radio2]:checked").val();


    var textTwoValue = textTwo.value;
    var selectTwoValue = selectTwo.options[selectTwo.selectedIndex].value;
    var selectThreeValue = selectThree.options[selectThree.selectedIndex].value;

    if (check.checked == true) {
        var checkValue = "checked";
    } else {
        var checkValue = "unchecked";
    }
    
    console.log(selectOneValue);
    console.log(textOneValue);
    
    console.log(selectedOptionOne);
    console.log(selectedOptionTwo);
    
    console.log(textTwoValue);
    console.log(selectTwoValue);
    console.log(selectThreeValue);
    
    console.log(checkValue);
});
