$(document).ready(function(){
	$('.menu-toggle, nav li a').click(function(){
		$('.menu-toggle span:first').toggleClass('hamburger1');
		$('.menu-toggle span:eq(1)').toggleClass('hamburger2');
		$('.menu-toggle span:last').toggleClass('hamburger3');
		$('nav ul').toggleClass('slide');
	});

	$('.dark-mode').click(function(){
		$('.dark-mode').toggleClass('fa-moon').toggleClass('fa-sun');
		$('.box-opening').toggleClass('boxwhite').toggleClass('boxdark');
		$('.content').toggleClass('contentwhite').toggleClass('contentdark');
		$('.kosong').not('.kosong:first').toggleClass('white').toggleClass('dark');
		$('nav').toggleClass('normal').toggleClass('darker');
		$('nav ul').toggleClass('normal').toggleClass('darker');
		$('footer').toggleClass('white').toggleClass('dark');
		$('body').toggleClass('white').toggleClass('dark');
		$('#top').toggleClass('normal').toggleClass('darker');
		$('#skills section img').toggleClass('hide');
		$('#skills article:last').toggleClass('normal').toggleClass('darker');
	});

	$('#top').hide();
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 200) {
        $('#top').fadeIn(500);
      } else {
        $('#top').fadeOut(500);
      }
    });

    $('#top, .title h4').on('click', function(e) {
      $("html, body").animate({
      	scrollTop: 0
      }, 500);
    });

    $('.popalert').click(function(){
    	alert("Email : saefulbahrie407@gmail.com");
    })
});