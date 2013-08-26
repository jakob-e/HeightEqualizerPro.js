/* =========================================================
*	HeightEqualizerPro.js 1.0.1
*	Credits: Jakob Eriksen / Alexander Bech
*	http://github.com/AlexanderBech/HeightEqualizerPro.js
* ========================================================== */
(function($){
	$.fn.heightoualizerPro=function(){
		var o={}; 						
	    this.each(function(){
	        var $t=$(this),k='_'+$t.offset().top;$t.height('auto'); 
	        if(!o[k])o[k]=[];o[k].push({s:$t,h:$t.outerHeight()}); 
	    })
	    for(var k in o){
	        var a=o[k].sort(function(a,b){return b.h-a.h}),l=a.length;
	        if(a[0].h!=a[l-1].h)for(var i=0;i<l;++i){ a[i].s.outerHeight(a[0].h); }
	    }
	};
})(jQuery);




/*  Use border-box-model
    *,*:before,*:after{
		  -webkit-box-sizing: border-box; 
		     -moz-box-sizing: border-box; 
		          box-sizing: border-box;
	}  

    
    // Responsive:  
    $(document).ready(function(){
 	    $(window).on('resize init',function(e){$( SELECTOR ).heightoualizerPro();}).trigger('init');
  });
 */
