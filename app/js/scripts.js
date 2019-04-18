$(function() {
	
  $('.clients__slider').owlCarousel({
      nav: true,
      dots: false,
      margin: 20,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 2
        },
        768 : {
            items: 3
        },
        1024 : {
            items: 5
        }
      }
  });
  // tabs 
  // $(document).ready(function () {
  //   $(".tabs-content__item:not(:first-child)").hide();
  //   $(".tabs__container div.tabs__content-item.active-tab").show();
  //   $('ul.tabs__list > li').click(function () {
  //     if (!($(this).hasClass('active'))) {
  //       var thisLi = $(this);
  //       var numLi = thisLi.index();
  //       thisLi.addClass('active').siblings().removeClass('active');
  //       thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
  //     }
  //   });
  // });
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
  //mobile menu
  // if ( $(window).width() < 992 ) {
  //   $(".nav__hamburger").on('click',function() {
  //     $(this).toggleClass("active");
  //     $('.nav__menu').toggleClass('active');
  //     $('body').toggleClass("fixed");
  //   });
  // }
});