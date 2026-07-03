function calculateBMI(){

    let weight = document.getElementById("weight").value;

    let height = document.getElementById("height").value / 100;

    let bmi = weight / (height * height);

    document.getElementById("result").innerHTML =
    "Your BMI is : " + bmi.toFixed(2);

}
function changeTheme(){

    document.body.classList.toggle("light");

}
