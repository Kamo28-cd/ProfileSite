function productCardJS() {

imgs = document.querySelectorAll('.img-select div');
imgBtns = [...imgs];
let imgId = 1;
cnt = 0;

imgBtns.forEach(imgItem => {
	imgItem.addEventListener('click', (productevent) => {
		
		productevent.stopPropagation();
		imgId = imgItem.dataset.productid;
		
		showCase = document.querySelectorAll('.img-showcase img');
		
		showCase.forEach(show => {
			
				if (show.getAttribute('data-cnt') != imgId) {
					if (show.classList.contains('active-img')) {
						show.classList.remove('active-img')
					
					}
				 } else {
					if (!show.classList.contains('active-img')) {
						$("[data-cnt='"+imgId+"']").addClass('active-img')
					}
				
				}
			
			
		
		})
		
		slideImage();
		
		
		
		
		
	})
	
})

function slideImage() {
	const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
	
	
	
	document.querySelector('.img-showcase').style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
	
}

}

//window.addEventListener('resize',slideImage);