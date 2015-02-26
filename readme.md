I created a little function to paste into the browser console when trying to get tickets on the Gigs and Tours website.

For some Gigs they will release the price list first before the select box appears to be able to make an order.

If you open the developer tools and look at the id of the row you want. It will be something like #PriceType1_Price. Add this into the config object along with the number of tickets you want and click enter.

var config = {
	tickets:3,
	selector: '#PriceType5_Price select',	
}

It will check when the tickets get released. If they have been released it will populate the number of tickets you want and submit the form. IF they still haven't need release it will just reload the pricing table. This allows it to refresh the page alot faster than manually refreshing.

I have tested this script a couple of times and it has worked perfectly. Apart from if you leave it loading too long it starts slowing down the browser. If the tickets get released at 10am I will set the script running at 9:59am.  