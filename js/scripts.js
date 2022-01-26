/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

var faTags = [];
$.ajax({
	url: 'https://fontawesome.bootstrapcheatsheets.com/',
	success: function(data) {
		faTags = $(data).find('.fa-class');
		$('.anchors').html(faTags);
        // console.log(faTags);
		// anchor();
        $('.anchors').remove();
	}
});

function anchor() {
	// $('.anchors').remove();
	var rnd = Math.floor((Math.random() * 10000));
	while (rnd > faTags.length)
		rnd = Math.floor((Math.random() * 10000));
	$(".iconClass").append('<i class="fa ' + faTags[rnd - 1].innerHTML.replace(".", "") + '" aria-hidden="true"></i>');
}


document.getElementById('copy').addEventListener('copy',function(e){
    e.clipboardData.setData('text/plain', 'yeah it\'s just some JavaScript idk');
    e.preventDefault();
});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
