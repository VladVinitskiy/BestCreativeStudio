$(function(){

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	};

	$(window).bind('load resize', hf);

});

   

$(function ()
{

    $('.menu-toggle').click(function () {
       $(this).toggleClass('active');
       $('.menu').slideToggle(400)
    });

    $('.tabs a').click(function ()
    {
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        let id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false;
    });

    $('.banner-slider, .testimonial-slider').slick({
        arrows: false,
        dots: true,
    })

    $('.portfolio-slider').slick({
        dots: true,
        appendArrows: '.portfolio-slider__buttons',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive:[{
            breakpoint:767,
            settings:{
                dots: false,
            }
            }

        ]
    })

    $nav_tabs_slider = $('.nav-tab-list');
    settings={
        slidesToShow: 1,
        centerMode:true,
        centerPadding: '40px',
        variableWidth: true,
        infinite: false,
        arrows: false,
    }
    $(window).on('resize load', function () {
        if($(window).width()>767){
            if($nav_tabs_slider.hasClass('slick-initialized'))
            {
                $nav_tabs_slider.slick('unslick');
            }
            return
        }
        if(!$nav_tabs_slider.hasClass('slick-initialized'))
        {
            return $nav_tabs_slider.slick(settings);
        }
    })
});

function initMap()
{
    let coordinates = {lat:49.232848,lng:28.471915},
        markerImg='img/maps-and-flags.png',

        map = new google.maps.Map(document.getElementById('map'),{
            center:coordinates,
            zoom:17,
            disableDefaultUI:true,
            scrollwheel:false,
        });

    marker = new google.maps.Marker({
        position:coordinates,
        map:map,
        animation:google.maps.Animation.DROP,
        icon:markerImg
    })
}

google.maps.event.addDomListener(window,'load',initMap);