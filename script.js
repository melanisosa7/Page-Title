$(".habichuela").click(
    function() {
        $(".galleryimage").show();
        $("h3").text("Price: $10");
        $(".galleryimage").attr("src","https://www.goya.com/media/3682/habichuelas-con-dulce-sweet-dominican-beans.jpg?quality=80");
    }
);

$(".pizza").click(function() {
    $(".galleryimage").show();
     $("h3").text("Price: $15");
       $(".galleryimage").attr("src","https://s3-media2.fl.yelpcdn.com/bphoto/ejfH5dBk4pm_PI_TnLaxWQ/ls.jpg"); 
});

$(".yaroa").click(function() {
     $("h3").text("Price: $5");
       $(".galleryimage").attr("src","https://pbs.twimg.com/media/CnagnQSWcAAI5_Q.jpg");
});

$(".empanada").click(function() {
     $("h3").text("Price: $3");
       $(".galleryimage").attr("src","https://assets.bonappetit.com/photos/58a34e1df12ac6e639bf24ae/16:9/w_1200,c_limit/argentinian-beef-empanadas.jpg");
});
$(".lasagna").click(function() {
   $("h3").text("Price: $12");
     $(".galleryimage").attr("src","https://static01.nyt.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg");
   
}); 
$(".sushi").click(function() {
     $("h3").text("Price: $20");
       $(".galleryimage").attr("src","https://www.thespruceeats.com/thmb/J6L1AOEih11jsD2og-5xo6nazYI=/4288x2848/filters:no_upscale():max_bytes(150000):strip_icc()/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg");
});
$(".sancocho").click(function() {
     $("h3").text("Price: $11");
       $(".galleryimage").attr("src","https://images-gmi-pmc.edge-generalmills.com/a32379ab-65fb-4242-9e07-28fbb087524e.jpg");
});
$(".burger").click(function() {
     $("h3").text("Price: $10");
       $(".galleryimage").attr("src","https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg");
});
