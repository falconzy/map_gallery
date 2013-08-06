/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$('document').ready(function(){
    $('div .details').hide();
    $('a.dot').click(function(){
       $('a.dot').removeClass('selected');
       $(this).addClass('selected');
       $('#bgPanel').addClass('bg_popup');          
         var location = $(this).attr('location');
       $.ajax({
                url: "details/"+location+".html",
                context: document.body
            }).done(function(img){
                $('#descrption').html(img);
            });
             $('div.details').show();
              $('div.details').addClass('detailsContent');
         
    });    
    $('a.dot').mouseover(function(){

    });
    $('a.dot').mouseout(function(){
        $(this).html("");
    });
    $('#bgPanel').click(function(){
         $('a.dot').removeClass('selected');
         $(this).removeClass('bg_popup'); 
          $('div.details').hide();
         
     });
     
     	$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',
				closeBtn  : true,
				arrows    : false,
				nextClick : true,
                                opacity : 0.9,
				helpers : {
					thumbs : {
						width  : 50,
						height : 50          
					},
                                        overlay : {
                                             opacity    : 0.9
                                            }
				}
			});
         
});

