/*! MagicMouse.js - v1.0
* A lightweight javascript library to create some amazing effects for the mouse (cursor) on your website
* https://github.com/dshongphuc/magic-mouse-js
* Copyright (c) 2020 Phuc H. <dshongphuc@gmail.com> under MIT license; */
"use strict";
function magicMouse(e) {
    if (window.screen.width > 768) {
        if ((e = e || {}).outerWidth = e.outerWidth || 30,
        e.outerHeight = e.outerHeight || 30,
        e.cursorOuter = e.cursorOuter || "circle-basic",
        e.hoverEffect = e.hoverEffect || "circle-move",
        e.hoverItemMove = e.hoverItemMove || !1,
        e.defaultCursor = e.defaultCursor || !1,
        "disable" != e.cursorOuter) {
            var t = document.createElement("div");
            t.setAttribute("id", "magicMouseCursor"),
            document.body.appendChild(t);
            var r = document.getElementById("magicMouseCursor")
        }
        if (!e.defaultCursor) {
            document.body.style.cursor = "none";
            var s = document.createElement("div");
            s.setAttribute("id", "magicPointer"),
            document.body.appendChild(s);
            var i = document.getElementById("magicPointer")
        }
        if (r) {
            r.style.width = e.outerWidth + "px",
            r.style.height = e.outerHeight + "px";
            var o = e.outerWidth
              , a = e.outerHeight
              , n = e.outerWidth
              , c = e.outerHeight
        }
        var d = 0
          , u = 0
          , l = 0
          , m = 0
          , h = !1;
        document.addEventListener("mousemove", (function(e) {
            l = e.clientX,
            m = e.clientY,
            setTimeout(()=>{
                h || (d = e.clientX - o / 2,
                u = e.clientY - a / 2)
            }
            , 50)
        }
        )),
        document.querySelectorAll(".magic-hover").forEach((t,r)=>{
            t.addEventListener("mouseenter", r=>{
                switch (e.hoverEffect) {
                case "circle-move":
                    f(t),
                    e.hoverItemMove && b(r, t);
                    break;
                case "pointer-blur":
                    y(t, "pointer-blur");
                    break;
                case "pointer-overlay":
                    y(t, "pointer-overlay")
                }
            }
            ),
            t.addEventListener("mouseleave", r=>{
                switch (t.style.transform = "translate3d(0,0,0)",
                e.hoverEffect) {
                case "circle-move":
                    g();
                    break;
                case "pointer-blur":
                    p("pointer-blur");
                    break;
                case "pointer-overlay":
                    p("pointer-overlay")
                }
            }
            )
        }
        );
        var v = ()=>{
            r && (r.style.transform = "matrix(1, 0, 0, 1, " + d + ", " + u + ")",
            r.style.width = o + "px",
            r.style.height = a + "px"),
            i && (i.style.transform = "matrix(1, 0, 0, 1, " + l + ", " + m + ") translate3d(-50%, -50%, 0)"),
            requestAnimationFrame(v)
        }
        ;
        requestAnimationFrame(v);
        const f = e=>{
            if (h = !0,
            r) {
                r.style.transition = "transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s",
                r.classList.add("is-hover");
                var t = event.currentTarget.getBoundingClientRect();
                e.classList.contains("magic-hover__square") ? (r.classList.add("cursor-square"),
                d = t.left,
                u = t.top,
                o = t.width,
                a = t.height) : (d = t.left,
                u = t.top,
                o = t.width,
                a = t.height)
            }
            i && i.classList.add("is-hover")
        }
          , g = ()=>{
            h = !1,
            r && (o = n,
            a = c,
            r.style.transition = "transform 0.07s, width 0.3s, height 0.3s, border-radius 0.2s",
            r.classList.remove("cursor-square"),
            r.classList.remove("is-hover")),
            i && i.classList.remove("is-hover")
        }
          , y = (e,t)=>{
            i && i.classList.add(t)
        }
          , p = e=>{
            i && i.classList.remove(e)
        }
          , b = (e,t)=>{
            e.clientX,
            e.clientY,
            t.addEventListener("mousemove", e=>{
                t.style.transform = "matrix(1,0,0,1," + (e.offsetX - e.target.offsetWidth / 2) / 2 + ", " + (e.offsetY - e.target.offsetHeight / 2) / 2 + ")"
            }
            )
        }
    }
}
