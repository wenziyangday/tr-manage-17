!(function (l) {
  var h,
    a,
    c,
    z,
    v,
    t,
    i =
    o = (o = document.getElementsByTagName("script"))[
      o.length - 1
    ].getAttribute("data-injectcss");
  if (o && !l.__iconfont__svg__cssinject__) {
    l.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (l) {
      console && console.log(l);
    }
  }
  function p() {
    v || ((v = !0), c());
  }
  (h = function () {
    var l, h, a, c;
    ((c = document.createElement("div")).innerHTML = i),
      (i = null),
      (a = c.getElementsByTagName("svg")[0]) &&
        (a.setAttribute("aria-hidden", "true"),
        (a.style.position = "absolute"),
        (a.style.width = 0),
        (a.style.height = 0),
        (a.style.overflow = "hidden"),
        (l = a),
        (h = document.body).firstChild
          ? ((c = l), (a = h.firstChild).parentNode.insertBefore(c, a))
          : h.appendChild(l));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(h, 0)
        : ((a = function () {
            document.removeEventListener("DOMContentLoaded", a, !1), h();
          }),
          document.addEventListener("DOMContentLoaded", a, !1))
      : document.attachEvent &&
        ((c = h),
        (z = l.document),
        (v = !1),
        (t = function () {
          try {
            z.documentElement.doScroll("left");
          } catch (l) {
            return void setTimeout(t, 50);
          }
          p();
        })(),
        (z.onreadystatechange = function () {
          "complete" == z.readyState && ((z.onreadystatechange = null), p());
        }));
})(window);