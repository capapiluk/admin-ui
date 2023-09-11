export const configTheme = () => {

  var e, t, n, a;

  function d() {
    setTimeout(function () {
      var e,
        t,
        n,
        a = document.getElementById("side-menu");
      a &&
        ((e = a.querySelector(".mm-active .active")),
        300 < (t = e ? e.offsetTop : 0) &&
          ((t -= 0),
          (n = document.getElementsByClassName("vertical-menu")
            ? document.getElementsByClassName("vertical-menu")[0]
            : "") &&
            n.querySelector(".simplebar-content-wrapper") &&
            setTimeout(function () {
              n.querySelector(".simplebar-content-wrapper").scrollTop = t;
            }, 0)));
    }, 0);
  }
  function r() {
    for (
      var e = document
          .getElementById("topnav-menu-content")
          .getElementsByTagName("a"),
        t = 0,
        n = e.length;
      t < n;
      t++
    )
      "nav-item dropdown active" === e[t].parentElement.getAttribute("class") &&
        (e[t].parentElement.classList.remove("active"),
        e[t].nextElementSibling.classList.remove("show"));
  }
  function c(e) {
    var t = document.getElementById(e);
    t.style.display = "block";
    var n = setInterval(function () {
      t.style.opacity || (t.style.opacity = 1),
        0 < t.style.opacity
          ? (t.style.opacity -= 0.2)
          : (clearInterval(n), (t.style.display = "none"));
    }, 200);
  }
  function u() {
    var e, t, n;
    feather.replace(),
      window.sessionStorage &&
        ((e = sessionStorage.getItem("is_visited"))
          ? null !== (t = document.querySelector("#" + e)) &&
            ((t.checked = !0),
            (n = e),
            1 == document.getElementById("layout-direction-ltr").checked &&
            "layout-direction-ltr" === n
              ? (document
                  .getElementsByTagName("html")[0]
                  .removeAttribute("dir"),
                (document.getElementById("layout-direction-rtl").checked = !1),
                document
                  .getElementById("bootstrap-style")
                  .setAttribute("href", "assets/css/bootstrap.min.css"),
                document
                  .getElementById("app-style")
                  .setAttribute("href", "assets/css/app.min.css"),
                sessionStorage.setItem("is_visited", "layout-direction-ltr"))
              : 1 == document.getElementById("layout-direction-rtl").checked &&
                "layout-direction-rtl" === n &&
                ((document.getElementById("layout-direction-ltr").checked = !1),
                document
                  .getElementById("bootstrap-style")
                  .setAttribute("href", "assets/css/bootstrap-rtl.min.css"),
                document
                  .getElementById("app-style")
                  .setAttribute("href", "assets/css/app-rtl.min.css"),
                document
                  .getElementsByTagName("html")[0]
                  .setAttribute("dir", "rtl"),
                sessionStorage.setItem("is_visited", "layout-direction-rtl")))
          : sessionStorage.setItem("is_visited", "layout-direction-ltr"));
  }
  function m(e) {
    document.getElementById(e) && (document.getElementById(e).checked = !0);
  }
  function g() {
    document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.body.classList.remove("fullscreen-enable");
  }
  (window.onload = function () {
    document.getElementById("preloader") && (c("pre-status"), c("preloader"));
  }),
    u(),
    document.addEventListener("DOMContentLoaded", function (e) {
      document.getElementById("side-menu") && new MetisMenu("#side-menu");
    }),
    (function () {
      var t = document.body.getAttribute("data-sidebar-size");
      window.onload = function () {
        1024 <= window.innerWidth &&
          window.innerWidth <= 1366 &&
          (document.body.setAttribute("data-sidebar-size", "sm"),
          m("sidebar-size-small"));
      };
      for (
        var e = document.getElementsByClassName("vertical-menu-btn"), n = 0;
        n < e.length;
        n++
      )
        e[n] &&
          e[n].addEventListener("click", function (e) {
            e.preventDefault(),
              document.body.classList.toggle("sidebar-enable"),
              992 <= window.innerWidth
                ? null == t
                  ? null == document.body.getAttribute("data-sidebar-size") ||
                    "lg" == document.body.getAttribute("data-sidebar-size")
                    ? document.body.setAttribute("data-sidebar-size", "sm")
                    : document.body.setAttribute("data-sidebar-size", "lg")
                  : "md" == t
                  ? "md" == document.body.getAttribute("data-sidebar-size")
                    ? document.body.setAttribute("data-sidebar-size", "sm")
                    : document.body.setAttribute("data-sidebar-size", "md")
                  : "sm" == document.body.getAttribute("data-sidebar-size")
                  ? document.body.setAttribute("data-sidebar-size", "lg")
                  : document.body.setAttribute("data-sidebar-size", "sm")
                : d();
          });
    })(),
    setTimeout(function () {
      //active slide ui
     
    }, 0),
    (e = document.querySelectorAll(".navbar-nav a")) &&
      e.forEach(function (e) {
         console.log('active slide ui')
        var t,
          n,
          a,
          o,
          s,
          l,
          i = window.location.href.split(/[?#]/)[0];
        e.href == i &&
          (e.classList.add("active"),
          (t = e.parentElement) &&
            (t.classList.add("active"),
            (n = t.parentElement).classList.add("active"),
            (a = n.parentElement) &&
              (a.classList.add("active"),
              (o = a.parentElement).closest("li") &&
                o.closest("li").classList.add("active"),
              o &&
                (o.classList.add("active"),
                (s = o.parentElement) &&
                  (s.classList.add("active"),
                  (l = s.parentElement) && l.classList.add("active"))))));
      }),
    (t = document.querySelector('[data-toggle="fullscreen"]')) &&
      t.addEventListener("click", function (e) {
        e.preventDefault(),
          document.body.classList.toggle("fullscreen-enable"),
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement
            ? document.cancelFullScreen
              ? document.cancelFullScreen()
              : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.webkitCancelFullScreen &&
                document.webkitCancelFullScreen()
            : document.documentElement.requestFullscreen
            ? document.documentElement.requestFullscreen()
            : document.documentElement.mozRequestFullScreen
            ? document.documentElement.mozRequestFullScreen()
            : document.documentElement.webkitRequestFullscreen &&
              document.documentElement.webkitRequestFullscreen(
                Element.ALLOW_KEYBOARD_INPUT
              );
      }),
    document.addEventListener("fullscreenchange", g),
    document.addEventListener("webkitfullscreenchange", g),
    document.addEventListener("mozfullscreenchange", g),
    (function () {
      
      if (document.getElementById("topnav-menu-content")) {
        for (
          var e = document
              .getElementById("topnav-menu-content")
              .getElementsByTagName("a"),
            t = 0,
            n = e.length;
          t < n;
          t++
        )
          e[t].onclick = function (e) {
            "#" === e.target.getAttribute("href") &&
              (e.target.parentElement.classList.toggle("active"),
              e.target.nextElementSibling.classList.toggle("show"));
          };
        window.addEventListener("resize", r);
      }
    })(),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .map(function (e) {
        return new bootstrap.Tooltip(e);
      }),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      .map(function (e) {
        return new bootstrap.Popover(e);
      }),
    [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
      return new bootstrap.Toast(e);
    });

    return {configTheme}; 
}

