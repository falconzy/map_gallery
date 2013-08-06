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
         var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=091acd7b8c4d6d38686d24bb4d3a522c&privacy_filter=1&text="+location+"&sort=interestingness-desc&per_page=12&page=1&format=json&nojsoncallback=1";
         $('#descrption').html('');
          $.getJSON(url, function(data) {
			      var items = [];
            var photoDetails = data;
			       $.each(data.photos.photo, function(key, val) {
			       
                    var photoURL_b = "http://farm"+val.farm+".staticflickr.com/"+val.server+"/"+val.id+"_"+val.secret+"_b.jpg";
                    var photoURL_S = "http://farm"+val.farm+".staticflickr.com/"+val.server+"/"+val.id+"_"+val.secret+"_q.jpg";
				            items.push('<a class="fancybox-thumbs" data-fancybox-group="thumb" href='+photoURL_b+' ><img src='+photoURL_S+' width="150" height="150" alt="DSC_0009"></a>');
			        });
				        $('<div/>', {
					      html: items.join('')
					      }).appendTo('#descrption');
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

