wrap = document.querySelectorAll('.card-wrapper img');
prodImg = document.querySelector('.product-imgs');
imgShowcase = document.querySelector('.img-showcase');
chevron = document.querySelector('.icon-display i');
document.body.addEventListener('scroll', function() {
	
	prodImg.style.position = 'sticky';
	prodImg.style.top = '0px'
	prodImg.style.zIndex = '10';
	
	wrap.forEach(wrapItem => {
		wrapItem.style.position = 'sticky';
		wrapItem.style.top = '1px'
		wrapItem.style.zIndex = '10';
		width = 100- +($('body').scrollTop()/$('body').height())*100;
		opacity = 1- +($('body').scrollTop()/$('body').height()*4);
		chevron.style.opacity = opacity;
		//wrapItem.style.minWidth = 100- +($('body').scrollTop()/$('body').height())*100+'%';
		if(width>50) {
			//width = 100-($('body').scrollTop()/$('body').height())*100+'%';
			
			n = document.querySelector('.active-img').getAttribute('data-cnt');
			//mySum = width*(n-1)+'vw';
			mySum =0+'px';
			wrapItem.style.width =width+'%';
			imgShowcase.style.transform = 'translateX(-'+mySum+')';
		} else {
			wrapItem.style.width = '50%';
			rightSide = document.querySelector('.rightSide .product-price');
			rightSide.style.position = 'sticky';
			rightSide.style.top = '51vh';
			//rightSide.style.zIndex = '10';
			
			//imgShowcase.style.transform = "translateX(0px)"
		}
		
		//wrapItem.style.width = 100- +$('body').scrollTop()/12+'%';
		//console.log(document.body.pageYOffset/12)
	})
})