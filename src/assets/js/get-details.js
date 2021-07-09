function getDetails(Response, Id) {
response = Response;
id = Id;


if (response=='size') {

//id = btnId; 
//make this btnId  or $(this).attr('data-addid');

$('.ul-size').html("")
$.ajax({
	
	type:"POST",

	cache:false,

	url:"products.php?response="+response+"&id="+id,

	processData:false,
	contentType:"application/json",

	data:  '',

	success: function(r) {
								
		
		r = JSON.parse(r)
		

		$.each(r, function(index) {
			if (r[index].in_stock == 'yes') {
				sizename = r[index].size_name;
				$('.ul-size').html(
				$('.ul-size').html() + '<li><input data-sizeid="'+r[index].size_id+'" class="selectSize" style="display:none" type="radio" id="'+r[index].size_name+'" name="size" value="'+sizename+'" /><label style="" class="'+r[index].size_name+'" for="'+r[index].size_name+'">'+r[index].size_name+'</label></li>')
			}
		})

		$(document).on('click', '[data-sizeid]',function() {
		//document.addEventListener('click', function() {
			sizeId = $(this).attr('data-sizeid');
			for (k = 0; k < r.length; k++) {
				sizePrice = r[k].size_price;
				
				if (sizeId == r[k].size_id) {
					$('.product-pricing').html('<h4 data-sizeprice="'+r[k].size_price+'">R'+r[k].size_price+'</h4>')
					//console.log($('[data-sizeid="'+(k+1)+'"]').val())
				}
			}
			
		})
		//for inserting into the cart use $('.selectSize').val()
		
	},
	error: function(r) {

		//console.log(r)

		
	}
			
});
$(document).on('click', '[data-sizeid]',function() {
	mySizeId = $(this).attr('data-sizeid');
	//console.log(mySizeId)
	setTimeout(function() {mySizePrice = $('[data-sizeprice]').attr('data-sizeprice');
	//console.log(mySizePrice);
	},250);
});


} else if (response=='color') {
//id = btnId; 
//make this btnId  or $(this).attr('data-addid');

$('.ul-color').html("")
$.ajax({
	
	type:"GET",
	cache:false,
	url:"products.php?response="+response+"&id="+id,
	processData:false,
	contentType:"application/json",
	data:  '',
	success: function(r) {							
		//console.log(r)

		var r = JSON.parse(r)
		$.each(r, function(index) {
			if (r[index].in_stock == 'yes') {
				$('.ul-color').html(
				$('.ul-color').html() + '<input data-colorid="'+r[index].color_id+'" class="selectColor" style="display:none" type="radio" id="'+r[index].color_name+'" name="color" value="'+r[index].color_name+'"><label style="background-color:'+r[index].color_code+'" class="'+r[index].color_name+'" for="'+r[index].color_name+'"></label>')
			
			}
		})
		//for inserting into the cart use $('.selectColor').val()
		
	},
	error: function(r) {

		//console.log(r)
	
	}			
});
$(document).on('click', '[data-colorid]',function() {
	myColorId = $(this).attr('data-colorid');
	
});

} else if (response=='image') {
//id = btnId; 
//make this btnId  or $(this).attr('data-addid');

$('.img-select').html("")
$('.img-showcase').html("")
$.ajax({
	
	type:"GET",
	cache:false,
	url:"products.php?response="+response+"&id="+id,
	processData:false,
	contentType:"application/json",
	data:  '',
	success: function(r) {
								
		//console.log(r)

		var r = JSON.parse(r)
		$.each(r, function(index) {
			myVar = index +1;
			$('.img-select').html(
			$('.img-select').html() +'<div class="img-item"><div  class="" data-productid="'+myVar+'"><img src="./'+r[index].image_path+'"></div></div>')
	
			$('.img-showcase').html(
			$('.img-showcase').html() +'<img class="" data-cnt="'+myVar+'" src="./'+r[index].image_path+'">')
			if ($('[data-cnt="'+myVar+'"]').attr('data-cnt') == 1) {
				$('[data-cnt]').addClass('active-img')
			}
			//console.log($('[data-cnt="'+myVar+'"]').attr('data-cnt'))
		})
		for (m = 0; m < r.length; m++) {
				
				//console.log($('[data-cnt="'+m+'"]').attr('data-cnt'))
				//if (sizeId == r[m].size_id) {
					
				//}
			}
		wrap = document.querySelectorAll('.card-wrapper img');
		productCardJS();
		return wrap;
	},
	error: function(r) {

		//console.log(r)

		
	}
			
});

}

}