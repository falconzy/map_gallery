/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$('document').ready(function(){
    $('a.dot').click(function(){
       $('a.dot').removeClass('selected');
       $(this).addClass('selected');
       $('#bgPanel').addClass('bg_popup');
    });    
    
     $('#bgPanel').click(function(){
         $('a.dot').removeClass('selected');
         $(this).removeClass('bg_popup');     
         
     });
    
});

