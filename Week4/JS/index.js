function togglePost1() {
  $('#post1').slideToggle()
}
$('#post1').hide();
$('#readMore1').click(togglePost1);

$('#readMore1').click(function(event){
 event.preventDefault();
 $('#article1More').slideDown();

});

function togglePost2() {
  $('#post2').slideToggle()
}
$('#post2').hide();
$('#readMore2').click(togglePost2);

$('#readMore2').click(function(event){
 event.preventDefault();
 $('#article2More').slideDown();
});