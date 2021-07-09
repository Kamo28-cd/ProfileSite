
	
	document.addEventListener('DOMContentLoaded', function() {

		socialBtns = document.querySelectorAll('.social-btns');


		const facebookBtn = document.querySelector(".facebook-btn");
		const twitterBtn = document.querySelector(".twitter-btn");
		const pintrestBtn = document.querySelector(".pintrest-btn");
		const linkedinBtn = document.querySelector(".linkedin-btn");

		function init() {
			//const pinterestImg = document.querySelector('.postimg')
			let postUrl = encodeURI(document.location.href);
			let postTitle = encodeURI("Hi there, check this out: ");
			/*let postImg = encodeURI(pinterestImg.src);*/
	
			facebookBtn.setAttribute("href",`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`);
			twitterBtn.setAttribute("href",`https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
			/*pinterestBtn.setAttribute("href",`https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`);*/
			linkedinBtn.setAttribute("href",`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);
		}
		init()
		socialBtns.forEach(social =>{
			social.addEventListener('click', function() {
				if (social.getAttribute('data-social') =='instagram') {
					type = 'success';
					msg  = 'Redirecting you to my '+social.getAttribute('data-social')+' page';
					notify(type,msg)
					setTimeout(function(){
						window.location.href="https://instagram.com/kinglykamo/"
						//console.log('Lets go to instagram')

					},3000)
					
				} else if (social.getAttribute('data-social') =='facebook') {
					type = 'success';
					msg  = 'Redirecting you to my '+social.getAttribute('data-social')+' page';
					notify(type,msg)
					setTimeout(function(){
						window.location.href="https://facebook.com/molefekamogelo/"
						//console.log('Lets go to facebook')

					},3000)
					
				} else if (social.getAttribute('data-social') =='twitter') {
					type = 'success';
					msg  = 'Redirecting you to my '+social.getAttribute('data-social')+' page';
					notify(type,msg)
					setTimeout(function(){
						window.location.href="https://twitter.com/theonly_kamo/"
						//console.log('Lets go to twitter')

					},3000)
					
				}
			})	
		})
		
	})


