let macBookImageElement = $(".macBook-image")
let m2_4 = false;
$(document).ready(function(){
    $("img").on("click", function() {
        // Change src attribute of image
        if (! m2_4) {
            $(this).attr("src", "assets/macBook_m2_4.webp");
            $(this)
                .css("width", "720px")
                .css("height", "720px");
            m2_4 = true;
        }
        else {
            $(this).attr("src", "assets/macBook_m2_1.jpeg");
            m2_4 = false;
        }
        
    });    
});