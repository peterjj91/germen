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
        'tolerance': 70,
        'easing': 'cubic-bezier(.32,2,.55,.27)',
        'side' : 'right'
    });

    $('.toggle-menu').click(function () {
        slideout.toggle();
        // slideout.open();
    });


    // document.querySelector('.toggle-menu').addEventListener('click', function() {
    //     slideout.open();
    // });

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
            $('.slideout-menu').addClass('slideout-menu--fast');
            this.panel.removeEventListener('click', close);
            $('.slideout-menu').removeClass('slideout-menu--fast');
        });
});

$(document).ready(function() {
    $('.promo-tooltip').tooltip();
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
            $('.promo-order__comment').addClass("promo-order__comment--active");
        } else {
            $('.promo-order__comment').removeClass("promo-order__comment--active");
        }
    });
});
