$(document).ready(function () {
        $('.feedback-container').slick({
            autoplay: true,
            autoplaySpeed: 3500,
            arrows: false,
          pauseOnHover: true,
            dots: true,
            customPaging: function() {
                return '<a></a>';
            }
      });
    });