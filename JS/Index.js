console.log("Your index.js file is loaded correctly!");

function fade() {
    $(".preloader").fadeOut("slow");
}
setTimeout(fade, 3000)

$(".herobutton").on({
    mouseenter: function(){
    $(".herobutton").animate({height: "100px", width: "300px"})
    },
    mouseleave: function(){
        $(".herobutton").animate({height: "77px", width: "272px"})
    }
});
$(".order").on({
    mouseenter: function(){
    $(".order").animate({height: "100px", width: "300px"})
    },
    mouseleave: function(){
        $(".order").animate({height: "77px", width: "272px"})
    }
});