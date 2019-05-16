var textOne = document.getElementById("textOne");

var radioSelectOne = document.getElementById("radioSelect");

var check = document.getElementById("check");
var submitForm = document.getElementById("submitForm");

submitForm.addEventListener("click", function() {
    var textOneValue = textOne.value;
    
    var selectedOption = $("input:radio[name=radio1]:checked").val();
    
    if (check.checked == true) {
        var checkValue = "checked";
    } else {
        var checkValue = "unchecked";
    }
    
    console.log(textOneValue);
    console.log(selectedOption);
    console.log(checkValue);
});