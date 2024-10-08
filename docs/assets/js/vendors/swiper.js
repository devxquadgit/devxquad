function initializeSwiperCarousels() {
    document.querySelectorAll(".swiper-container").forEach(e => {
        var t = e.getAttribute("data-speed") || 400,
            a = e.getAttribute("data-space-between") || 20,
            i = "true" === e.getAttribute("data-pagination"),
            r = "true" === e.getAttribute("data-navigation"),
            n = "true" === e.getAttribute("data-autoplay"),
            s = e.getAttribute("data-autoplay-delay") || 3e3,
            p = e.getAttribute("data-pagination-type") || "bullets",
            o = "true" === e.getAttribute("data-center-slides"),
            u = e.getAttribute("data-effect") || "slide",
            l = e.getAttribute("data-breakpoints");
        let d = {};
        if (l) try {
            d = JSON.parse(l)
        } catch (e) {
            console.error("Error parsing breakpoints data:", e)
        }
        l = {
            speed: parseInt(t),
            spaceBetween: parseInt(a),
            breakpoints: d,
            spaceBetween: 30,
            slidesPerView: "auto",
            effect: u
        };
        "fade" === u && (l.fadeEffect = {
            crossFade: !0
        }), o && (l.slidesPerView = "auto", l.centeredSlides = !0), i && (t = e.querySelector(".swiper-pagination")) && (l.pagination = {
            el: t,
            type: p,
            dynamicBullets: !0,
            clickable: !0
        }, "custom" === p) && (l.pagination.renderCustom = function(e, t, a) {
            var i = "";
            for (let e = 1; e <= a; e++) t == e ? i += `<span class="swiper-pagination-numbers swiper-pagination-numbers-active">${e}</span>` : i += `<span class="swiper-pagination-numbers">${e}</span>`;
            return i
        }), r ? l.navigation = {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        } : (a = e.querySelector(".swiper-navigation")) && a.classList.add("swiper-navigation-hidden"), n && (l.autoplay = {
            delay: parseInt(s)
        }), new Swiper(e, l)
    })
}
initializeSwiperCarousels();