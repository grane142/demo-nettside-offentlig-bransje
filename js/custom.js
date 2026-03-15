/* ============================================
   GOVITY - Custom JavaScript
   ============================================ */

(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    $(".preloader").addClass("loaded");
    setTimeout(function () {
      $(".preloader").hide();
    }, 600);
  });

  // Custom Cursor
  if ($(".custom-cursor").length) {
    var cursor = $(".custom-cursor__cursor");
    var cursorTwo = $(".custom-cursor__cursor-two");

    $(document).on("mousemove", function (e) {
      cursor.css({ left: e.clientX, top: e.clientY });
      cursorTwo.css({ left: e.clientX, top: e.clientY });
    });

    $("a, button, .thm-btn, input, select, textarea").on("mouseenter", function () {
      cursor.css({ width: "0px", height: "0px" });
      cursorTwo.css({ width: "55px", height: "55px", borderColor: "var(--primary)" });
    });

    $("a, button, .thm-btn, input, select, textarea").on("mouseleave", function () {
      cursor.css({ width: "10px", height: "10px" });
      cursorTwo.css({ width: "36px", height: "36px" });
    });
  }

  // Main Slider
  if ($(".main-slider__carousel").length) {
    $(".main-slider__carousel").owlCarousel({
      loop: true,
      items: 1,
      margin: 0,
      dots: true,
      nav: true,
      navText: [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>'
      ],
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplayHoverPause: false
    });
  }

  // Testimonial Carousel
  if ($(".testimonial-one__carousel").length) {
    $(".testimonial-one__carousel").owlCarousel({
      items: 2,
      margin: 30,
      smartSpeed: 700,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 2 }
      }
    });
  }

  // Portfolio Carousel
  if ($(".portfolio-one__carousel").length) {
    $(".portfolio-one__carousel").owlCarousel({
      items: 3,
      margin: 30,
      smartSpeed: 700,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  // Brand Carousel
  if ($(".brand-one__carousel").length) {
    $(".brand-one__carousel").owlCarousel({
      items: 5,
      margin: 30,
      smartSpeed: 700,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 2 },
        768: { items: 3 },
        992: { items: 5 }
      }
    });
  }

  // Sticky Header
  var stickyHeader = $(".stricky-header");
  if (stickyHeader.length) {
    var stickyContent = $(".main-menu__bottom").clone();
    stickyHeader.find(".sticky-header__content").html(stickyContent);

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 130) {
        stickyHeader.addClass("stricky-fixed");
      } else {
        stickyHeader.removeClass("stricky-fixed");
      }
    });
  }

  // Scroll to Top
  var scrollBtn = $(".scroll-to-top");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 400) {
      scrollBtn.addClass("show");
    } else {
      scrollBtn.removeClass("show");
    }
  });

  scrollBtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // Mobile Nav
  $(".mobile-nav__toggler").on("click", function (e) {
    e.preventDefault();
    $(".mobile-nav__wrapper").toggleClass("expanded");
    $("body").toggleClass("locked");
  });

  // Clone main menu for mobile
  if ($(".mobile-nav__container").length && $(".main-menu__list").length) {
    var mobileNavContent = $(".main-menu__list").clone();
    $(".mobile-nav__container").html(mobileNavContent);
    // Remove megamenu and show simple links
    $(".mobile-nav__container .megamenu > ul").remove();
  }

  // Search Popup
  $(".search-toggler").on("click", function (e) {
    e.preventDefault();
    $(".search-popup").toggleClass("active");
  });

  // Counter / Odometer
  if ($(".odometer").length) {
    var odometerTriggered = false;

    function triggerOdometer() {
      if (odometerTriggered) return;

      var el = $(".odometer").first();
      if (!el.length) return;

      var elTop = el.offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > elTop) {
        odometerTriggered = true;
        $(".odometer").each(function () {
          var $this = $(this);
          var count = $this.data("count");
          $this.text(count);
        });
      }
    }

    $(window).on("scroll", triggerOdometer);
    triggerOdometer();
  }

  // WOW.js init
  if (typeof WOW !== "undefined") {
    new WOW({
      mobile: false
    }).init();
  }

  // Video Popup (using Magnific Popup if available)
  if ($.fn.magnificPopup) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      preloader: true
    });
  }

})(jQuery);
