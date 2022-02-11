function compute()
{
    // getting all required values 
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var year = new Date().getFullYear() + parseInt(years);
    // Validating Principle value
    if(principle > 0){
        alert("OK");

        // calculating interest
        var interest = principle * years * rate / 100 ;

        // printing the interest rate briefly
        document.getElementById("result").innerHTML = `If you deposit ${principle},
        at an interest rate of ${rate}%.
        You will receive an amount of ${interest},
        in the year ${year}` ;
    }
    else{
        alert("Enter a positive number");
        //focus on the principle field
        document.getElementById("principle").focus();
    }

}
// function to update rate value when user slides the slider
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}