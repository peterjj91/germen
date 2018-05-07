$(function () {
    $('.selectpicker').selectpicker();
});

$(document).ready(function() {
    $('.btn__loading').click(function () {
        $(this).toggleClass('btn__loading--active')
    });
});

$(document).ready(function() {
    $('.slider-review').slick({});
});

$(document).ready(function() {
    $('.promo-product').slick({
        dots: true
    });
});

$(document).ready(function() {
    $('#right-menu').sidr({
        name: 'sidr-right',
        side: 'right',
        source: '#header-nav',
        onOpen: function() {
            $('.mobile-menu').addClass('active');
        },
        onClose: function() {
            $('.mobile-menu').removeClass('active');
        }
    });
});

$(document).mouseup(function (e){
    var container = $("#sidr-right");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) {
        $.sidr('close', 'sidr-right');
    }
});

$(document).ready(function() {
    var slideout = new Slideout({
        'panel': document.getElementById('panel-body'),
        'menu': document.getElementById('menu-body'),
        'padding': 294,
        'tolerance': 0,
        'easing': false,
        'side' : 'right'
    });

    $('.toggle-menu').click(function () {
        slideout.open();
    });

    $('.toggle-menu--inside').click(function () {
        $('.slideout-open').removeClass('slideout-open');
        slideout.close();
    });

    function close(eve) {
        eve.preventDefault();
        slideout.close();
    }

    slideout
        .on('beforeopen', function() {
            this.panel.classList.add('panel-open');
        })
        .on('open', function() {
            this.panel.addEventListener('click', close);
        })
        .on('beforeclose', function() {
            this.panel.classList.remove('panel-open');
            this.panel.removeEventListener('click', close);
        });
});

$(document).ready(function() {
    $('.promo-tooltip').tooltip();
});

$(document).ready(function() {
    $('#revify-phone').change(function(){
        if($(this).is(":checked")) {
            $('.promo-order__social').removeClass("hidden");
        } else {
            $('.promo-order__social').addClass("hidden");
        }
    });
});

$(document).ready(function() {
    $('#add_vase').change(function(){
        if($(this).is(":checked")) {
            $('.promo-order__optional').addClass("promo-order__optional--active");
        } else {
            $('.promo-order__optional').removeClass("promo-order__optional--active");
        }
    });
});

$(document).ready(function() {
    $('#add_comment').change(function(){
        if($(this).is(":checked")) {
            $('#write_comment').removeClass("hidden");
        } else {
            $('#write_comment').addClass("hidden");
        }
    });
});

$(document).ready(function() {
    $('#check_comment').change(function(){
        if($(this).is(":checked")) {
            $('#write_note').removeClass("hidden");
        } else {
            $('#write_note').addClass("hidden");
        }
    });
});
