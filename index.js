
// paste this code into the browser console.

//  complete the config object
var config = {
	tickets:3,
	selector: '#PriceType5_Price select',	
}

function getTickets(element)
{
	
	// check we have jquery loaded
	if(window.jQuery){
		
		// check to see if the tickets have been released yet
		if($(element)!== null && $(element).length !== 0){
			
			// Tickets Found!!
			$(config.selector).first().val(config.tickets);
			
			//  Tickets selected, submitting the form
			$(config.selector).closest('form').submit();
			
		}else{
			// not avaliable yet
			
			// reload just the content area 
			$('#content').load(window.location.href + ' #content',function(){
				// call the funciton again
				getTickets(config.selector);
			});	
		}
		
	}else{
		console.log('query not loaded');
	}
}

// run the query/
getTickets(config.selector);
