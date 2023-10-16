console.log("Your index.js file is loaded correctly!");
function fade() {
    $(".preloader").fadeOut("slow");
}
setTimeout(fade, 3000)

$(".order").on("click", function(){
    $(".order").animate({height: "100px"});
});