/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$('document').ready(function(){
    $('div .details').hide();
    $('a.dot').click(function(){ 
       $('a.dot').removeClass('selected');
       $(this).addClass('selected');      
       var location = $(this).attr('location');
       $.ajax({
                url: "details/"+location+".html",
                context: document.body
            }).done(function(img){
                $('#descrption').html(img);
            });
             $('#bgPanel').addClass('bg_popup'); 
             $('#bgPanel').hide();
             $('#bgPanel').fadeIn(1000,function(){               
                $('div.details').addClass('detailsContent');   
             });
             $('div.details').fadeIn(900);
             $('#bgPanel').data('display','true');    
             
     }); 
    $('a.dot').mouseover(function(){

    });
    $('a.dot').mouseout(function(){
        $(this).html("");
    });
    $('#backgroud').click(function(){        
        if($('#bgPanel').data('display')==='false')
            {            
                $('a.dot').removeClass('selected');
                $('#bgPanel').fadeOut(1000,function(){
                      $('#bgPanel').removeClass('bg_popup');  
                 });
                $('#bgPanel').data('display','true');  
                $('div.details').fadeOut(900);
                            
      }
      else
          {
               $('#bgPanel').data('display','false');
          }
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
    $( "#map" ).draggable();
         
});

