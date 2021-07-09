
	

//**************JS Start

	//preloader start
	document.addEventListener('DOMContentLoaded', function() {
		
		window.addEventListener('load', function() {
			mainBody = document.querySelector(".main-body");

			barGraphs = document.querySelectorAll(".bar-graph");
	

			body = document.querySelector("body");

			mainBanner = document.querySelector(".main-banner");
			backgroundHeader = document.querySelector(".background-header");

			// Menu Dropdown Toggle start

			menuTrigger = document.querySelectorAll('.menu-trigger');
			
			//if ($('.menu-trigger').length) {

	
			if (menuTrigger.length) {
				menuTrigger.forEach(menu => {
					menu.addEventListener('click', function() {
						//$(".menu-trigger").on('click', function () {

						this.classList.toggle('active')
						//$(this).toggleClass('active');

						//$('.header-area .nav').slideToggle(200);
						
						slideToggle('.header-area .nav') 
						

					});

				})
			
	
	
			}

			myfadeOut('preloader', 'class', 1)
			myfadeOut('preloader', 'class', 1)
			//document.querySelector('.preloader').style.transition = '1s';
			//document.querySelector('.preloader').style.opacity = '0';
			//setTimeout(function() {document.querySelector('.preloader').style.display = 'none'},1000)
		})

	})

	//preloader end

	//slide toggle  start
	slideOpen = false;
var heightChecked = false;
var initHeight = 0;
var intval = null;

function slideToggle(myElement) {
    
    window.clearInterval(intval);
    //var mdiv = document.getElementById('mdiv');
    var mdiv = document.querySelector(''+myElement+'');
    //mdiv.style.height = '100%';
      //console.log(mdiv.style.height)


    if(!heightChecked) {
        //initHeight = mdiv.offsetHeight;
	initHeight = 364;
	//initHeight = mdiv.style.height;
	//console.log(initHeight)
        heightChecked = true;
    }
    if(slideOpen) {
        var h = initHeight;
        slideOpen = false;
        intval = setInterval(function(){
            h--;
            mdiv.style.height = h + 'px';
	  
            if(h <= 0)
                window.clearInterval(intval);
		mdiv.style.display = 'hide';
            }, 1
        );
    }
    else {
        var h = 0;
        slideOpen = true;
        intval = setInterval(function(){
            h++;
            mdiv.style.height = h + 'px';
            if(h >= initHeight)
                window.clearInterval(intval);
		mdiv.style.display = 'block';
            }, 1
        );
    }
}

	//slide toggle  end

	//fadein and out function
	function myfadeIn(val, type, time) {
		if (type == 'id') {
			document.getElementById(''+val+'').style.transition = ''+time+'s';
			document.getElementById(''+val+'').style.opacity = '1';
			setTimeout(function() {document.getElementById(''+val+'').style.display = 'block'},time*1000)
			

		} else if (type== 'class') {
			document.querySelector('.'+val+'').style.transition = ''+time+'s';
			document.querySelector('.'+val+'').style.opacity = '1';
			setTimeout(function() {document.querySelector('.'+val+'').style.display = 'block'},time*1000)
			

		}
	}

	function myfadeOut(val, type, time) {
		if (type == 'id') {
			document.getElementById(''+val+'').style.transition = ''+time+'s';
			document.getElementById(''+val+'').style.opacity = '0';
			setTimeout(function() {document.getElementById(''+val+'').style.display = 'none'},time*1000)
			

		} else if (type== 'class') {
			document.querySelector('.'+val+'').style.transition = ''+time+'s';
			document.querySelector('.'+val+'').style.opacity = '0';
			setTimeout(function() {document.querySelector('.'+val+'').style.display = 'none'},time*1000)
			

		}
	}
	//contact form start

	//notification start
	function notify(type,msg) {

		if(type== 'success') {

			

			myfadeIn('mymodal-bg', 'id', 1)
			myfadeIn('success-notif', 'id', 1)

			msgBox = document.querySelector('#success-notif .message');

			msgBox.innerHTML = msg;

			setTimeout(function(){

				
				myfadeOut('mymodal-bg', 'id', 1)
				myfadeOut('success-notif', 'id', 1)
				

			},3000)

			
		} else if (type == 'error') {

			

			myfadeIn('mymodal-bg', 'id', 1)
			myfadeIn('error-notif', 'id', 1)

			msgBox = document.querySelector('#error-notif .message');

			msgBox.innerHTML = msg;

			setTimeout(function(){

				

				myfadeOut('mymodal-bg', 'id', 1)
				myfadeOut('error-notif', 'id', 1)
					
			},3000)

		}

	}

	//notification end




	formSubmit = document.getElementById('form-submit');
	if (formSubmit != undefined) {
		formSubmit.addEventListener('click', function() {
			if ((document.getElementById('name').value != '') &&  (document.getElementById('email').value != '') && (document.getElementById('subject').value != '') && (document.getElementById('message').value != '')) {

				myMessage = "Hey there, we got your message. We'll be in touch as soon as possible!";

				notify('success',myMessage)

		
			} else {
				myMessage = "Oops, something went wrong. Please try again";

				notify('error',myMessage)

		
			}
		})

	}
	
	//contact form end

	//$('.scroll-link').on('click', function(event){

	scrollLink = document.querySelectorAll('.scroll-link');
	scrollLink.forEach(scroll =>{
		scroll.addEventListener('click', function(event) {
			event.preventDefault();

			//var sectionID = $(this).attr("data-id");

			sectionID = this.getAttribute("data-id")

			//console.log(sectionID)
			scrollToID('#' +sectionID, 750);

		})
	});
	
	
	

	function scrollToID(id, speed){

		var offSet = 80;
		mID = document.getElementById(''+id+'');
		
		
		//offsetting to account for the header height, without a header the offset will be 0
		
		var targetOffset = mID.offsetHeight - offSet;

		

		var mainNav = document.getElementById("main-nav");
		var targetId = ''+id+'';
		
		//document.getElementById(''+targetId+'').scrollTo({top:targetOffset,behaviour:'smooth'})
		mID.scrollIntoView({behaviour:'smooth'})

		
	}



//scroll body start
	
	body.addEventListener("scroll", function(){
	
	
	
		var scrollTop = body.scrollTop;

	
		if (scrollTop> mainBanner.offsetHeight - 20) {

		
			
			if (mainBody.getAttribute("data-page") =="skills") {

				if (document.querySelector(".bar-container").getAttribute("data-skillId")=="html") {
					barGraphs.forEach(barGraph => {
						height = barGraph.getAttribute("data-bar");
						barGraph.style.height = ''+height+'%';
					})
				}
				
				
					
			}
		} else if (scrollTop> mainBanner.offsetHeight - 40) {


			backgroundHeader.classList.remove('new-hero');

			if (mainBody.getAttribute("data-page") =="skills") {

				if (document.querySelector(".bar-container").getAttribute("data-skillId")=="css") {
					barGraphs.forEach(barGraph => {
						height = barGraph.getAttribute("data-bar");
						barGraph.style.height = ''+height+'%';
					})
				}
				
				
					
			}

		} else if (scrollTop> mainBanner.offsetHeight - 60) {

			if (mainBody.getAttribute("data-page") =="skills") {

				if (document.querySelector(".bar-container").getAttribute("data-skillId")=="javascript") {
					barGraphs.forEach(barGraph => {
						height = barGraph.getAttribute("data-bar");
						barGraph.style.height = ''+height+'%';
					})
				}
				
				
					
			}
		} else if (scrollTop> mainBanner.offsetHeight - 80) {

			if (mainBody.getAttribute("data-page") =="skills") {

				if (document.querySelector(".bar-container").getAttribute("data-skillId")=="php") {
					barGraphs.forEach(barGraph => {
						height = barGraph.getAttribute("data-bar");
						barGraph.style.height = ''+height+'%';
					})
				}
				
				
					
			}
		
		} else {

		
			if (!backgroundHeader.classList.contains('new-hero')) {

			
				backgroundHeader.classList.add('new-hero');
			}

		}


	})



//scroll body end

	//skills bar start
	
	document.querySelector("body").addEventListener("scroll", function() {
		
	})
	//skills bar end
//**************JS  End






//open product detail end

	