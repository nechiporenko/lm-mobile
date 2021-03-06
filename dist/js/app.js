// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 * Licensed under the MIT license.
 */
!function (t) { t.fn.unveil = function (i, e) { function n() { var i = a.filter(function () { var i = t(this); if (!i.is(":hidden")) { var e = o.scrollTop(), n = e + o.height(), r = i.offset().top, s = r + i.height(); return s >= e - u && n + u >= r } }); r = i.trigger("unveil"), a = a.not(r) } var r, o = t(window), u = i || 0, s = window.devicePixelRatio > 1, l = s ? "data-src-retina" : "data-src", a = this; return this.one("unveil", function () { var t = this.getAttribute(l); t = t || this.getAttribute("data-src"), t && (this.setAttribute("src", t), "function" == typeof e && e.call(this)) }), o.on("scroll.unveil resize.unveil lookup.unveil", n), n(), this } }(window.jQuery || window.Zepto);

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function (a) { var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c); a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function (a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) }, unmask: function () { return this.trigger("unmask") }, mask: function (c, g) { var h, i, j, k, l, m, n, o; if (!c && this.length > 0) { h = a(this[0]); var p = h.data(a.mask.dataName); return p ? p() : void 0 } return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) { "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null) }), this.trigger("unmask").each(function () { function h() { if (g.completed) { for (var a = l; m >= a; a++) if (j[a] && C[a] === p(a)) return; g.completed.call(B) } } function p(a) { return g.placeholder.charAt(a < g.placeholder.length ? a : 0) } function q(a) { for (; ++a < n && !j[a];); return a } function r(a) { for (; --a >= 0 && !j[a];); return a } function s(a, b) { var c, d; if (!(0 > a)) { for (c = a, d = q(b) ; n > c; c++) if (j[c]) { if (!(n > d && j[c].test(C[d]))) break; C[c] = C[d], C[d] = p(d), d = q(d) } z(), B.caret(Math.max(l, a)) } } function t(a) { var b, c, d, e; for (b = a, c = p(a) ; n > b; b++) if (j[b]) { if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break; c = e } } function u() { var a = B.val(), b = B.caret(); if (o && o.length && o.length > a.length) { for (A(!0) ; b.begin > 0 && !j[b.begin - 1];) b.begin--; if (0 === b.begin) for (; b.begin < l && !j[b.begin];) b.begin++; B.caret(b.begin, b.begin) } else { for (A(!0) ; b.begin < n && !j[b.begin];) b.begin++; B.caret(b.begin, b.begin) } h() } function v() { A(), B.val() != E && B.change() } function w(a) { if (!B.prop("readonly")) { var b, c, e, f = a.which || a.keyCode; o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault()) } } function x(b) { if (!B.prop("readonly")) { var c, d, e, g = b.which || b.keyCode, i = B.caret(); if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) { if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) { if (t(c), C[c] = d, z(), e = q(c), f) { var k = function () { a.proxy(a.fn.caret, B, e)() }; setTimeout(k, 0) } else B.caret(e); i.begin <= m && h() } b.preventDefault() } } } function y(a, b) { var c; for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c)) } function z() { B.val(C.join("")) } function A(a) { var b, c, d, e = B.val(), f = -1; for (b = 0, d = 0; n > b; b++) if (j[b]) { for (C[b] = p(b) ; d++ < e.length;) if (c = e.charAt(d - 1), j[b].test(c)) { C[b] = c, f = b; break } if (d > e.length) { y(b + 1, n); break } } else C[b] === e.charAt(d) && d++, k > b && (f = b); return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l } var B = a(this), C = a.map(c.split(""), function (a, b) { return "?" != a ? i[a] ? p(b) : a : void 0 }), D = C.join(""), E = B.val(); B.data(a.mask.dataName, function () { return a.map(C, function (a, b) { return j[b] && a != p(b) ? a : null }).join("") }), B.one("unmask", function () { B.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function () { if (!B.prop("readonly")) { clearTimeout(b); var a; E = B.val(), a = A(), b = setTimeout(function () { B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)) }, 10) } }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () { B.prop("readonly") || setTimeout(function () { var a = A(!0); B.caret(a), h() }, 0) }), e && f && B.off("input.mask").on("input.mask", u), A() }) } }) });

// Application Scripts:
// Дозагрузка изображений
// Маска для телефонного номера
// Кнопка скролла страницы
// Модальное окно
// Ф-ция скролла к началу элеметна
// Кнопка скролла страницы
// Таймер обратного отсчета

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
            $menuItems = $pageMenu.find('a');

        $pageMenu.on('click', 'a', function (e) {
            e.preventDefault();
            var link = $(this).attr('href');
            smoothScroll($(link));
        });

        //var scrollItems = $menuItems.map(function () {
        //    var item = $($(this).attr('href'));
        //    if (item.length) { return item; }
        //});

        //$window.on('scroll', function () {
        //    var fromTop = $(this).scrollTop() + pageMenuHeight + 5,
        //        cur = scrollItems.map(function () {
        //            if ($(this).offset().top < fromTop)
        //                return this;
        //        });
        //    cur = cur[cur.length - 1];
        //    var id = cur && cur.length ? cur[0].id : '';

        //    $menuItems.parent().removeClass('active').end().filter('[href=#' + id + ']').parent().addClass('active');
        //});
    })();
        

    


    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $overlay = $('#overlay'),
        $modal,
        $close;

        // добавим в документ
        $close = $('<a class="modal__close" href="#"><i class="icon-cancel"></i></a>'); //иконка закрыть


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
            $overlay.show();
            $modal.show();

            $overlay.bind('click', function () {
                method.close();
            });
        };

        // закрываем
        method.close = function () {
            $modal.hide();
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
        
        $('html, body').animate({
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


    //
    // Таймер обратного отсчета
    //---------------------------------------------------------------------------------------
    function initTimer() {
        var $counter = $('.js-countdown'),
            deadline = $counter.data('timer'),
            $days = $counter.find('.countdown__num--day'),
            $hours = $counter.find('.countdown__num--hour'),
            $minutes = $counter.find('.countdown__num--min'),
            $seconds = $counter.find('.countdown__num--sec');

        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                days = Math.floor(t / (1000 * 60 * 60 * 24));
            if (days > 99) { days = 99 };
            if (days < 10) { days = '0' + days };
            if (seconds < 10) { seconds = '0' + seconds };
            if (minutes < 10) { minutes = '0' + minutes };
            if (hours < 10) { hours = '0' + hours };
            
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function initializeTimer(endtime) {
            var timeinterval = setInterval(function () {
                var t = getTimeRemaining(endtime);
                console.log(t.total);
                if (t.total > 0) {
                    $days.text(t.days);
                    $hours.text(t.hours);
                    $minutes.text(t.minutes);
                    $seconds.text(t.seconds);
                }
                

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                    var zero = '00';
                    $days.text(zero);
                    $hours.text(zero);
                    $minutes.text(zero);
                    $seconds.text(zero);
                }
            }, 1000);
        }

        initializeTimer(deadline);
    }

    if ($('.js-countdown').length) { initTimer();}

});
