console.log("This is main.js...");

window.addEventListener('load', function(){
	// JavaScript code goes here

	var btnNav = document.getElementById("mobile-nav-button");
	var mainNav = document.getElementById("main-nav");

	window.addEventListener('click', function(evt){
		
		if(evt.target == btnNav){

			if(mainNav.classList.contains("show")){
				mainNav.classList.remove("show");
			}else{
				mainNav.classList.add("show");
			}
		}else{
			mainNav.classList.remove("show");
		}
	});

	const btn = document.querySelector(".btn");
	const currentTheme = localStorage.getItem("theme");

	if (currentTheme == "dark") {
		document.body.classList.add("dark-theme");
	}

	btn.addEventListener("click", function() {
	document.body.classList.toggle("dark-theme");
	
	let theme = "light";

	if (document.body.classList.contains("dark-theme")) {
		theme = "dark";
	}
	localStorage.setItem("theme", theme);
	});


	const topBtn = document.querySelector("#topBtn");

	window.onscroll = ()=>{scroll()};

	const scroll = ()=>{
		if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
			topBtn.style.display = "block";
		}else{
			topBtn.style.display = "none";
		}
	};

	const toTop = ()=>{
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	};

	window.addEventListener("click", toTop);

	

	


});