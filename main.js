(function () {
	init();

	function init() {
		checkJQuery();
		addEventListeners();	
	}

	function checkJQuery() {
		if (!window.jQuery) {
			console.log("jQuery is required.");
		}
	}

	function addEventListeners() {
		// Event listener for toggling navigation visible on mobile
		$("#toggle").on("click", toggleNav);
		
	}

	function toggleNav() {
		var nav = $(".nav-menu");
		console.log(nav.css("display"));
		nav.css("display") == "none" ?
			nav.css("display", "block") :
			nav.css("display", "");
	}

	window.showIframe = function (e) {
		$(e.parentElement).removeClass("loading")
		e.style.opacity = "1";
	}

})();