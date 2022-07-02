function myfunction(){
    let a =(document.getElementById("q1").value);
let x = (parseInt(document.getElementById("q2").value) + 50);
let y= (document.getElementById("q3").value * 2600);
let z=(document.getElementById("q4").value);
let age="age";
let often="often";
let brand="brand";
    let name="name";


document.getElementById("age").innerHTML = "By the time you are "+x;
    document.getElementById("often").innerHTML = "you would have drank "+y;
    document.getElementById("name").innerHTML = ". . . Way to go "+a;
    document.getElementById("brand").innerHTML = "of "+z;

}

$("#submit").click(function(){
    $(".fortune").show();
        $(".qs").hide();

});
$(".reset").click(function(){
    $(".fortune").hide();
    $(".qs").show();
});



    