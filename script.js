function BMI() {
    var h=document.getElementById("height").value
    var w=document.getElementById("width").value
    var bmi=w/(h/100*h/100)
    var bmio=(bmi.toFixed(2))
    document.getElementById("out").innerHTML= bmio
}