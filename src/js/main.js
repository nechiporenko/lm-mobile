// Application Scripts:
// Дозагрузка изображений
// Маска для телефонного номера
// Кнопка скролла страницы
// Модальное окно
// Ф-ция скролла к началу элеметна
// Кнопка скролла страницы

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $body = $('body');
    //
    // Дозагрузка изображений
    //---------------------------------------------------------------------------------------
    $('img[data-src]').unveil();

    //
    // Маска для телефонного номера
    //---------------------------------------------------------------------------------------
    $('input[data-phone]').mask('+799 99 999 99 99');

    //
    // Меню
    //---------------------------------------------------------------------------------------
    var initMenu = (function () {
        var $pageMenu = $('.menu'),
            pageMenuHeight = 26,
            $menuItems = $pageMenu.find('a'),
            scrollItems = $menuItems.map(function () {
                var item = $($(this).attr('href'));
                if (item.length) { return item; }
            });

        $window.on('scroll', function () {
            var fromTop = $(this).scrollTop() + pageMenuHeight + 5,
                cur = scrollItems.map(function () {
                    if ($(this).offset().top < fromTop)
                        return this;
                });
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : '';

            $menuItems.parent().removeClass('active').end().filter('[href=#' + id + ']').parent().addClass('active');
        });

        $pageMenu.on('click', 'a', function (e) {
            e.preventDefault();
            var link = $(this).attr('href');
            smoothScroll($(link));
        });
    })();
        

    


    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $overlay,
        $modal,
        $close;

        // добавим в документ
        $overlay = $('<div id="overlay"></div>'); //оверлей
        $close = $('<a class="modal__close" href="#"><i class="icon-cancel"></i></a>'); //иконка закрыть

        $body.append($overlay);

        $close.on('click', function (e) {
            e.preventDefault();
            method.close();
        });

        // центрируем окно
        method.center = function () {
            var top, left;

            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };


        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $window.bind('resize.modal', method.center);
            $modal.fadeIn();
            $overlay.fadeIn();

            $overlay.bind('click', function () {
                method.close();
            });
        };

        // закрываем
        method.close = function () {
            $modal.fadeOut('fast');
            $overlay.fadeOut('fast', function () {
                $window.unbind('resize.modal');
            });
            
        };

        return method;
    }());

    // клик по кнопке с атрибутом data-modal - открываем модальное окно
    $('[data-modal]').on('click', function (e) {//передаем айди модального окна
        e.preventDefault();
        var link = $(this).data('modal');
        if (link) { showModal.open(link); }
    });


    //
    // Ф-ция скролла к началу элеметна
    //---------------------------------------------------------------------------------------
    function smoothScroll(el, offset) {
        if (!offset) {
            offset = 0;
        }
        var topOffset = 26 + offset; //26 - высота хидера
        
        $('html, body').animate({//после загрузки, промотаем к началу новых блоков
            scrollTop: el.offset().top - topOffset
        }, 800);
    }

    //
    // Кнопка скролла страницы
    //---------------------------------------------------------------------------------------
    var initPageScroller = (function () {
        var $scroller = $('<div class="scroll-up-btn"><i class="icon-up-open-big"></i></div>');
        $body.append($scroller);
        $window.on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $scroller.show();
            } else {
                $scroller.hide();
            }
        });
        $scroller.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    }());
    
});
