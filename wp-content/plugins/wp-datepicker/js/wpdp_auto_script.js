	
	

	jQuery(document).ready(function($){


		
		if($('.wpcf7-form-control.wpcf7-repeater-add').length>0){
			$('.wpcf7-form-control.wpcf7-repeater-add').on('click', function(){
				wpdp_refresh_1820(jQuery, true);
			});
		}
		
	
});
var wpdp_refresh_first_1820 = 'yes';
var wpdp_intv_1820;
var wpdp_counter_1820 = 0;
var wpdp_month_array_1820 = [];
var wpdp_dateFormat = "mm/dd/yy";
var wpdp_defaultDate = "";
function wpdp_refresh_1820($, force){
				if(typeof $.datepicker!='undefined' && typeof $.datepicker.regional["en-GB"]!='undefined'){
					
				wpdp_month_array_1820 = $.datepicker.regional["en-GB"].monthNames;
									
				}
				
		
		
				


				if($(".datepicker").length>0){
					
				$(".datepicker").attr("autocomplete", "off");
					
				//document.title = wpdp_refresh_first=='yes';
				//force = true;
								if(wpdp_refresh_first_1820 == 'yes' || force){
					
					
					
										
					if(typeof $.datepicker!='undefined')
					$(".datepicker").datepicker( "destroy" );
					
					
					$(".datepicker").removeClass("hasDatepicker");
					wpdp_refresh_first_1820 = 'done';
					
				}
								$('body').on('mouseover, mousemove', function(){//
				
			
				
				if ($(".datepicker").length>0) {
					$.each($(".datepicker"), function(wp_si, wp_sv){
						if($(this).val()!=''){
							$(this).attr('data-default-val', $(this).val());
						}
					});
				}		
				
				
								if(wpdp_counter_1820 > 2)
				clearInterval(wpdp_intv_1820);
								
				
					
				if($(".datepicker.hasDatepicker").length!=$(".datepicker").length){

				
					
				$(".datepicker").datepicker($.extend(  
					{},  // empty object  
					$.datepicker.regional[ "en-GB" ],       // Dynamically  
					{  
 					dateFormat: wpdp_dateFormat
					}
				)).on( "change", function() {
						
				}); 
				
				
				
				
				
				$(".datepicker").datepicker( "option", "dateFormat", "mm/dd/yy" );


setTimeout(function(){ 

	 $.each($(".datepicker"), function(){

        
            $(this).prop('autocomplete', 'on');


         		 		
		var expected_default = $(this).data('default');		

		
		var expected_stamp = $(this).data('default_stamp');
		var expected_stamp_date = new Date(expected_stamp*1000);
		var expected_stamp_str = $.datepicker.formatDate('mm/dd/yy', expected_stamp_date);		 
	 
		if(expected_default != undefined && expected_default!=''){ $(this).datepicker().datepicker('setDate', expected_default); }
		if(expected_stamp != undefined && expected_stamp!=''){ $(this).datepicker().datepicker('setDate', expected_stamp_str); }		
		
	});
	
}, 100);
	






					$.each($(".datepicker"), function(){
						var this_selector = $(this);
						var parent_form = this_selector.closest('form');
						
						parent_form.on('reset', function(){
							if(this_selector.data('default-val')!= ""){
								setTimeout(function(){
									if(this_selector.val() == ''){
										this_selector.val(this_selector.data('default-val'));
									}
								});
							}
						});
						if($(this).data('default-val')!= ""){
							$(this).val($(this).data('default-val'));
						}
						
					});
						
				
				}
				
				
				
				});
				}
		


		
		$('.ui-datepicker').addClass('notranslate');
}
	wpdp_intv_1820 = setInterval(function(){
		wpdp_counter_1820++;
		wpdp_refresh_1820(jQuery, false);
		
	}, 500);

	                jQuery(document).ready(function($){

                        $(".datepicker").on('click', function(){

                            $('.ui-datepicker-div-wrapper').prop('class', 'ui-datepicker-div-wrapper wp_datepicker_option-1 ');

                        });

                        setTimeout(function () {
                                $(".datepicker").click();
                                //$("//").focusout();
                        }, 1000);



                });

            
    //wpdp_refresh_//(jQuery, false);
	
	    
