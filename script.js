//Navbar
	//Scroll
	  var prevScrollpos = window.pageYOffset;
	  window.onscroll = function() {
	  var currentScrollPos = window.pageYOffset;
	    if (prevScrollpos > currentScrollPos) {
	      document.getElementById("navbar").style.top = "0";
	      document.getElementById("menu-btn").style.color = "#fff";
	    } else {
	      document.getElementById("navbar").style.top = "-10vh";
	      document.getElementById("menu-btn").style.color = "#121212";
	    }
	    prevScrollpos = currentScrollPos;
	  }
	// adding click events
		var els = document.querySelectorAll('a');
		[].forEach.call(els, function(el) {
		  el.addEventListener('click', function() {
		    [].forEach.call(els, function(clk) {
		      clk.classList.remove('active');
		    });
		    el.classList.add('active');
		  });
		});