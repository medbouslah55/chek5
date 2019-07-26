function bold() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.fontWeight != "bold") {

        ban.style.fontWeight = 'bold';
    } else {
        ban.style.fontWeight = 'normal';
    }
}
function ital() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.fontStyle != "italic") {

        ban.style.fontStyle = 'italic';
    } else {
        ban.style.fontStyle = 'normal';
    }
}
function under() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.textDecoration != "underline") {
        ban.style.textDecoration = 'underline';
    } else {
        ban.style.textDecoration = 'none';
    }
}
function sizee() {
    var ban = document.getElementById("txt");
    event.preventDefault();
    ban.style.fontSize = document.getElementById("sz").value;

}
function font() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    ban.style.fontFamily = document.getElementById("family").value;

}
$(".ta").mouseenter(function () {

    $(this).css("opacity", "0.5");
    $(".tt").show();
})
$(".ta").mouseleave(function () {

    $(this).css("opacity", "1");
    $(".tt").hide();
})
console.log($("viewa"))



$(".tb").mouseenter(function () {

    $(this).css("opacity", "0.5");
    $(".yy").show();
})
$(".tb").mouseleave(function () {

    $(this).css("opacity", "1");
    $(".yy").hide();
})




$(".tc").mouseenter(function () {

    $(this).css("opacity", "0.5");
    $(".uu").show();
})
$(".tc").mouseleave(function () {

    $(this).css("opacity", "1");
    $(".uu").hide();
})

setInterval(function () {
    console.log("hello");
    setTimeout(function(){
        console.log("hi");
    },1000)
},2000)
    


    



