/**
 * Created by Hiro on 2016/10/6.
 */

(function () {

    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

    imgLoader([
        'images/thumbnail.jpeg',
        'images/bg1.jpg',
        // 'images/letter.png',
        'images/logo3.png',
        'images/header.png',
        'images/footer.png',
        'images/music_off.png',
        'images/arrow.png',
        'images/window.png',
        'images/box.png',
        'images/picture.jpeg',
        'images/music_off.png',
        'images/arrow.png',
        // 'images/pic1.jpeg',
        // 'images/pic2.jpeg',
        // 'images/pic3.jpeg',
        'images/paper.png',
        'images/footer3.png',
        'images/music_off.png',
        'images/arrow.png',
        // 'images/pic4.jpeg',
        // 'images/pic5.jpeg',
        // 'images/pic6.jpeg',
        'images/cat.png',
        'images/music_off.png',
        'images/arrow.png',
        'images/footer2.png',
        'images/anniversary.png',
        'images/music_off.png'
    ], function (percentage) {
        var percentT = percentage * 100;
        $('#loader__info').html('Loading ' + (parseInt(percentT)) + '%');
        $('#loader__progress')[0].style.width = percentT + '%';
        if (percentage == 1) {
            $('#loader').remove();
        }
    });

    var musicBtn = $(".music_btn");
    var audio = document.getElementById("audio");

    musicBtn.on('click', function () {
        if (musicBtn.hasClass('play')) {
            audio && (audio.pause());
            musicBtn.addClass('pause').removeClass('play');
        } else {
            audio && (audio.play());
            musicBtn.addClass('play').removeClass('pause');
        }
    });

    var videoOpen = $(".picture");
    var videoContainer = $(".video_container");
    var closeBtn = $(".close_btn");
    var videoPlayer = document.getElementById("video_player");
    videoOpen.on("click", function () {
        if (musicBtn.hasClass('play')) {
            audio && (audio.pause());
            musicBtn.addClass('pause').removeClass('play');
        }
        videoPlayer.src = "https://v.qq.com/iframe/player.html?vid=e0334m0sclp&tiny=0&auto=1";
        videoContainer.show();
        closeBtn.show();
    });
    closeBtn.on("click", function () {
        videoPlayer.src = "https://v.qq.com/iframe/player.html?vid=e0334m0sclp&tiny=0&auto=0";
        videoContainer.hide();
        closeBtn.hide();
        if (musicBtn.hasClass('pause')) {
            audio && (audio.play());
            musicBtn.addClass('play').removeClass('pause');
        }
    });

    window.onload = function () {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        });
    };
})();