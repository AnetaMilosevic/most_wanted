$(document).ready(function () {
    console.log("Hello, world!")
})

$("li:eq(0)").css('border-bottom', '2px solid red');
$("li:eq(0)").css('border-bottom', '2px solid red');


// $('li').click(function () {
//     $(this).remove();
// });

$("li").css("textTransform", "uppercase");

$("li.active").css("color", "red")

var middle = Math.ceil($("li").length / 2);
$(`li:eq(${middle})`).css("background-color", "green")


var images = ["https://via.placeholder.com/350x150/0000FF/808080",
    "https://via.placeholder.com/450x200/FF0000/FFFFFF",
    "https://via.placeholder.com/500x400/FFFF00/000000",
    "https://via.placeholder.com/700x300/000000/FFFFFF"]


var $image = $("<img></img>")

var insertImages = ""
var $gallery = $("#gallery")
for (var i = 0; i < images.length; i++) {
    insertImages += `<img src=${images[i]}/>`
}

$gallery.append(insertImages)

var $tittle = $("<H1></H1>")
var text = document.createTextNode("Amazing gallery")


$tittle.before("#galery");
