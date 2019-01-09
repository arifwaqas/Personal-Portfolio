let toggleNavStatus = false;

let toggleNav = function(){
	let getSidebar = document.querySelector(".nav-sidebar");
	let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
	let getSidebarUI = document.querySelector(".nav-sidebar ul");
	let getLogo = document.querySelector(".btn-toggle-nav");

	if (toggleNavStatus === false) {
		getSidebarUI.style.visibility = "visible";
		getSidebar.style.width="272px";
		getLogo.style.opacity="0.8";
		let arLength = getSidebarLinks.length;
		for (let i = 0; i < arLength; i++){
   			getSidebarLinks[i].style.opacity="1";
		}
		toggleNavStatus = true;
	}

	
	else if (toggleNavStatus === true) {
		getSidebarUI.style.visibility = "hidden";
		getSidebar.style.width="50px";
		getLogo.style.opacity="1";
		let arLength = getSidebarLinks.length;
		for (let i = 0; i < arLength; i++){
   			getSidebarLinks[i].style.opacity="0";
		}
		toggleNavStatus = false;
	}
}