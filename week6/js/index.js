var cities = ["NYC", "SF", "LA", "ATX", "SYD"],
    select = document.getElementById( 'city-type' );

for( options in cities ) {
    
    select.add( new Option( cities[options] ) );
    var i = 0;
function backgroundChange(){
    var images = ["nyc.jpg", "sf.jpg", "la.jpg","austin.jpg","sydney.jpg"];

    $('body').css('background-image', 'url("images/'+images[i]+'")');
    if(i == images.length -1){ i= 0;}
    else{ i++;}
}  
};
