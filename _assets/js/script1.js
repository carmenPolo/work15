
$(document).ready(function(){  
$(".images__image").on('click',function(event){
  event.stopPropagation();
  alert($(this).attr('alt'));
});

});
