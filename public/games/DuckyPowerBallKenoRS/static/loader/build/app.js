! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "/build/", t(0)
}([function(e, t, n) {
    "use strict";
    
    function i(e) {
        void 0 === window.JSON_DATA ? ! function() {
            var t = e.path,
                n = "" + (t + (t.endsWith("/") ? "" : "/")) + f + "/" + e.game + ".json?t=" + (new Date).getTime(),
                i = new XMLHttpRequest;
            i.overrideMimeType("application/json"), i.open("GET", n, !0), i.onload = function() {
                r(JSON.parse(i.responseText), e)
            }, i.send(null)
        }() : r(window.JSON_DATA.applications[e.game], e)
    }
    
    function r(e, t) {
        l.init(e, t), u.isSupported() || u.disable(), window.MSInputMethodContext && document.documentMode && (p.warn("disabled PointerEvent for Internet Explorer 11"), delete window.PointerEvent);
        var n = l.params.game.html5Dir,
            i = l.params.game.html5Loader;
        if ("amatic" === l.params.game.engine) {
            var r = document.createElement("iframe");
            r.src = l.params.path + l.params.game.html5Dir + "/mobile/index.html", r.style.width = r.style.height = "100%", r.style.border = 0, r.setAttribute("allowfullscreen", "");
            var a = document.getElementById("game-content");
            a.appendChild(r), d.init(), !c.isDesktop && c.isAndroid && d.requestFullscreen()
        } else if ("aristocrat" === l.params.game.engine) {
            var r = document.createElement("iframe");
            r.src = l.params.path + l.params.game.html5Dir + "/index.html", r.style.width = r.style.height = "100%", r.style.maxWidth = "1280px", r.style.maxHeight = "720px", r.style.margin = "auto", r.style.display = "block", r.style.border = 0, r.setAttribute("allowfullscreen", "");
            var a = document.getElementById("game-content");
            a.appendChild(r), d.init(), !c.isDesktop && c.isAndroid && d.requestFullscreen()
        } else if ("netent" === l.params.game.engine) {
            var r = document.createElement("iframe");
            r.src = l.params.path + l.params.game.html5Dir + "/index.html", r.style.width = r.style.height = "100%", r.style.border = 0, r.setAttribute("allowfullscreen", ""), r.setAttribute("frameborder", "0"), r.setAttribute("allow", "autoplay;"), r.setAttribute("autoplay", "");
            var a = document.getElementById("game-content");
            a.appendChild(r)
        } else if ("html5" === l.params.loader || !s.hasPlayerVersion("11") || "undefined" != typeof l.params.game.load_only && "html5" === l.params.game.load_only || l.params.game.supportHtml5 && "slot" !== l.params.game.type)
            if (l.params.game.supportHtml5) d.init(), l.params.game.is_use_soundjs && l.loadScript(l.params.path + n + "/lib/soundjs.min.js").catch(function(e) {
                p.error("The script " + e.target.src + " is not accessible.")
            }), l.loadScript(l.params.path + n + "/" + i + "?rnd=" + Math.random()).catch(function(e) {
                p.error("The script " + e.target.src + " is not accessible.")
            }).then(function() {
                var e = document.getElementById("game-content");
                !c.isDesktop && c.isAndroid && d.requestFullscreen(), window.lime.embed("game-content", e.clientWidth, e.clientHeight, "0", l.params.path + n + "/"), window.PIXI ? (d.togglePortraitMessage(), "pixi" === l.params.game.engine && setTimeout(function() {
                    var e = document.getElementsByName("viewport")[0];
                    e.setAttribute("content", "height=device-height, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui")
                }, 3e3)) : window.onload = function() {
                    d.togglePortraitMessage()
                }
            });
            else {
                var o = document.getElementById("game-content");
                o.className = "error";
                var f = document.createElement("div");
                o.appendChild(f), f.className = "error-message", f.innerHTML = "Please, enable the flash plugin. <br />", f.innerHTML += "See instructions here: <br />";
                var h = "https://forums.adobe.com/community/flashplayer/",
                    m = {
                        chrome: "https://helpx.adobe.com/flash-player/kb/enabling-flash-player-chrome.html",
                        firefox: "https://helpx.adobe.com/flash-player/kb/enabling-flash-player-firefox.html",
                        safari: "https://helpx.adobe.com/flash-player/kb/enabling-flash-player-safari.html",
                        ie: "https://helpx.adobe.com/ru/flash-player/kb/install-flash-player-windows.html",
                        opera: "https://helpx.adobe.com/flash-player/kb/enabling-flash-player-opera.html"
                    };
                c.isDesktopChrome ? h = m.chrome : c.isDesktopFirefox ? h = m.firefox : c.isDesktopOpera ? h = m.opera : c.isDesktopSafari ? h = m.safari : c.isDesktopIE && (h = m.ie), f.innerHTML += '<a href="' + h + '" target="blank">' + h + "</a>"
            }
        else s.init("game-content", l.params.game.name, l.params.path + l.params.game.flash, window.flashvars)
    }
    
    function a(e) {
        var t = ["game", "token", "billing", "language"],
            n = !0,
            r = !1,
            a = void 0;
        try {
            for (var l, s = t[Symbol.iterator](); !(n = (l = s.next()).done); n = !0) {
                var d = l.value;
                if (!(d in e)) throw new ReferenceError('Required field "' + d + '" is not defined in "init_loader" function argument')
            }
        } catch (e) {
            r = !0, a = e
        } finally {
            try {
                !n && s.return && s.return()
            } finally {
                if (r) throw a
            }
        }
        if (!e.currency && !e.cur) throw new ReferenceError('Required field "cur"/"currency" is not defined in "init_loader" function argument');
        var c = o({
            ref: "",
            ios8bar: "resize",
            home_page: "/games/DuckyPowerBallKenoRS/",
            preloader_logo: 0,
            button: "classic",
            bgcolor: "#000",
            path: "media/",
            currency: e.currency || e.cur
        }, e);
        "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? i(c) : document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
            return i(c)
        }, !1) : window.attachEvent("onload", function() {
            return i(c)
        })
    }
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    };
    n(1);
    var l = n(5),
        s = n(9),
        d = n(11),
        c = n(6),
        u = n(14),
        p = n(13),
        f = "prod_flash_html5";
    window.postload_init = r, window.init_loader = a
}, function(e, t, n) {
    var i = n(2);
    "string" == typeof i && (i = [
        [e.id, i, ""]
    ]);
    n(4)(i, {})
}, function(e, t, n) {
    t = e.exports = n(3)(), t.push([e.id, 'body,html{-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;margin:0;padding:0;cursor:inherit;width:100%;height:100%;-webkit-tap-highlight-color:rgba(255,255,255,0)}#game-content{background:#000;width:100%;height:100%;font-family:Helvetica,Arial,sans-serif;font-size:16px;overflow:hidden;-webkit-overflow-scrolling:"touch"}#loader-wrapper{position:relative;width:100%;height:100%;display:none;overflow:hidden}#loader-wrapper:before{content:"";display:block;padding-top:110%}#portrait-message{display:none;font-size:1.6em;background-color:#000;color:#fff;text-align:center;z-index:9999;opacity:1;top:20%;position:fixed;left:0;bottom:35%;right:0}.portraitLogoDiv{background-position:50% 80%;height:43%;top:50%}.phoneOutlineDiv,.portraitLogoDiv{background-repeat:no-repeat;background-size:contain;left:0;position:absolute;width:100%}.phoneOutlineDiv{height:100%;opacity:.4;top:20%;-webkit-transform:rotate(-90deg);background-position:50%}.iphone_outline_uri{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAGjCAMAAAB9mftUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODhEM0ZDRUU5NDIwMTFFMEEzNUNGM0YxMUVGRjdCRDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODhEM0ZDRUY5NDIwMTFFMEEzNUNGM0YxMUVGRjdCRDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OEQzRkNFQzk0MjAxMUUwQTM1Q0YzRjExRUZGN0JEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4OEQzRkNFRDk0MjAxMUUwQTM1Q0YzRjExRUZGN0JEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkFV/rkAAAAGUExURf///wAAAFXC034AAAACdFJOU/8A5bcwSgAAAwpJREFUeNrs292a4iAMANDw/i+9N7NO7Z91dklN5nBp+0FOUUoAY7QtcXrx48uPaFGmvEeLYuUyLQqWS7SrX+WPGCnOYo3Du8sMhEcBR3HYSdCxe1O5V9he3LFzR8n38zb02FwuO/lYRx9dZNv4o41sI4g+srUhGslWiidag0RmS2sie4JEL9mS0p3WSLbAPGiN1kQWtOhHiwWt1VLWgxYdafGgjdGv21rToictvmhjNOw2tJK06ErrKSu6noqGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhob2Ji2qFjQ0tE+ilRwQ0dDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQPolWsqChFaP1KGhoaGhoaGhoaGhoaNOa60Y7SRtr014lxWVpFxL+orSVJqXV1AeYO6AkPr8L3nK0wwbK007qn9ryfNpp9TObTqL98Opn015UXp32L9eL06Ik7XXdpWnjN9MCrRhtFKUFmi+kYcR7De0XTrQaT49fhl44qRn3p6L3dNt02bhrcWT2RGhk0CJblkI7FCQMzTFyVt8vfPi/fwYx/Yz4dqhKGpjn08alE7XzaEkbeTk7h/GgjTs2Rmc3Nr5p0/ezk/exv2ij19mRv5oYWd2WKfumdbItzgN0p/WxLSAxWtmWjBidbE+IyJmKJ8q2tAa2lSBGG9smwcjLolImcmOfVtm2d8gtNf3NTeVf5sRlYBvKcfJRy7VzMPHOzGpuDhjvrGYU+efyGa0a7sDw9kJUDdcprQLvNPg/AgwA/dhBhXeThLkAAAAASUVORK5CYII=")}#rotateanim{-webkit-animation-name:rotateanimation;-webkit-animation-duration:2.3s;-webkit-animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite}.rotatingPhoneDiv{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;top:20%;position:absolute;width:100%}.portrait-message-text{font-size:.5em;position:absolute;top:30%;width:100%;left:0}.portrait-or{font-size:.7em;top:125%}.portrait-link,.portrait-or{position:absolute;width:100%;left:0}.portrait-link{font-size:1em;top:135%}.portrait-link a{color:#fff}#game-content.error{color:#eee;font-size:2em}#game-content .error-message{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center;height:100%}@media only screen{#overlay,.hand{visibility:visible}}@media only screen and (orientation:landscape){#loader-wrapper,#portrait-message{display:none}}body.IOS7{height:100%}#gl-overlay{height:100%;width:100%;position:absolute;top:0;left:0;z-index:10001}#gl-overlay,#gl-overlay.fullscreen{pointer-events:none}#gl-overlay.not-fullscreen{pointer-events:auto}#gl-overlay.not-fullscreen.hint>.hand{position:fixed;width:100%;height:100%;background-repeat:no-repeat;background-position:60% 50%;background-size:100px;top:0;left:0;background-color:rgba(0,0,0,.3);background-image:url("/media/loader/handhint.gif");z-index:10002}#debug{color:#eb42f4;position:fixed;top:0;left:0;height:20px;width:100%;z-index:100;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}@keyframes rotateanimation{0%{transform:rotate(0deg);opacity:0}20%{opacity:1}60%{transform:rotate(-93deg)}70%{transform:rotate(-89deg)}80%{transform:rotate(-90deg)}to{transform:rotate(-90deg)}}', ""])
}, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var i = {}, r = 0; r < this.length; r++) {
                var a = this[r][0];
                "number" == typeof a && (i[a] = !0)
            }
            for (r = 0; r < t.length; r++) {
                var o = t[r];
                "number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
            }
        }, e
    }
}, function(e, t, n) {
    function i(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
                r = u[i.id];
            if (r) {
                r.refs++;
                for (var a = 0; a < r.parts.length; a++) r.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) r.parts.push(l(i.parts[a], t))
            } else {
                for (var o = [], a = 0; a < i.parts.length; a++) o.push(l(i.parts[a], t));
                u[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }
    
    function r(e) {
        for (var t = [], n = {}, i = 0; i < e.length; i++) {
            var r = e[i],
                a = r[0],
                o = r[1],
                l = r[2],
                s = r[3],
                d = {
                    css: o,
                    media: l,
                    sourceMap: s
                };
            n[a] ? n[a].parts.push(d) : t.push(n[a] = {
                id: a,
                parts: [d]
            })
        }
        return t
    }
    
    function a() {
        var e = document.createElement("style"),
            t = h();
        return e.type = "text/css", t.appendChild(e), e
    }
    
    function o() {
        var e = document.createElement("link"),
            t = h();
        return e.rel = "stylesheet", t.appendChild(e), e
    }
    
    function l(e, t) {
        var n, i, r;
        if (t.singleton) {
            var l = b++;
            n = m || (m = a()), i = s.bind(null, n, l, !1), r = s.bind(null, n, l, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = o(), i = c.bind(null, n), r = function() {
            n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = a(), i = d.bind(null, n), r = function() {
            n.parentNode.removeChild(n)
        });
        return i(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t)
                } else r()
            }
    }
    
    function s(e, t, n, i) {
        var r = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = g(t, r);
        else {
            var a = document.createTextNode(r),
                o = e.childNodes;
            o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a)
        }
    }
    
    function d(e, t) {
        var n = t.css,
            i = t.media;
        t.sourceMap;
        if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    
    function c(e, t) {
        var n = t.css,
            i = (t.media, t.sourceMap);
        i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(i)) + " */");
        var r = new Blob([n], {
                type: "text/css"
            }),
            a = e.href;
        e.href = URL.createObjectURL(r), a && URL.revokeObjectURL(a)
    }
    var u = {},
        p = function(e) {
            var t;
            return function() {
                return "undefined" == typeof t && (t = e.apply(this, arguments)), t
            }
        },
        f = p(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }),
        h = p(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        m = null,
        b = 0;
    e.exports = function(e, t) {
        if ("object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        t = t || {}, "undefined" == typeof t.singleton && (t.singleton = f());
        var n = r(e);
        return i(n, t),
            function(e) {
                for (var a = [], o = 0; o < n.length; o++) {
                    var l = n[o],
                        s = u[l.id];
                    s.refs--, a.push(s)
                }
                if (e) {
                    var d = r(e);
                    i(d, t)
                }
                for (var o = 0; o < a.length; o++) {
                    var s = a[o];
                    if (0 === s.refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete u[s.id]
                    }
                }
            }
    };
    var g = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}, function(e, t, n) {
    "use strict";
    
    function i(e, t) {
        var n = {
            supportHtml5: !1,
            name: e.name && e.name[0] ? e.name[0].en : "",
            type: e.type,
            flash: e.app ? e.app[0] + ".swf" : "",
            loader: e.loader,
            preview: e.preview,
            position: e.position || 1,
            engine: e.engine,
            is_use_soundjs: e.is_use_soundjs || !1
        };
        e.html5 && (n.supportHtml5 = !0, n.html5Dir = e.html5.app[0], n.html5Loader = e.html5.mainjs), "undefined" != typeof e.load_only && (n.load_only = e.load_only);
        for (var i in t) u[i] = t[i];
        u.game = n, l(n.name), s(u)
    }
    
    function r(e, t) {
        return new Promise(function(n, i) {
            var r = document.head || document.getElementsByTagName("head")[0],
                a = document.createElement("script");
            a.src = e, a.async = !1, a.addEventListener ? (a.addEventListener("load", n, !1), a.addEventListener("error", i, !1)) : a.readyState && (a.onreadystatechange = t, a.onerror = i), r.appendChild(a)
        })
    }
    
    function a(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
    }
    
    function o(e) {
        for (var t = {}, n = e.replace("?", "").split("&"), i = 0, r = n.length; i < r; i++) {
            var a = n[i].split("=");
            2 === a.length && (t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]))
        }
        return t
    }
    
    function l(e) {
        document.title = e
    }
    
    function s(e) {
        var t = c.isDesktop ? 1 : 2;
        window.flashvars = {
            device_id: e.token,
            customer_id: e.billing,
            kf: e.kf,
            curr: e.currency,
            currency: e.currency,
            language: e.language,
            lang: e.language.substr(0, 2),
            device_type: t,
            bgcolor: e.bgcolor,
            home_page: e.home_page,
            button: e.button,
            preloader_logo: e.preloader_logo,
            site_jackpot_api_url: e.site_jackpot_api_url
        }, void 0 !== e.kf_list && (window.flashvars.kf_list = e.kf_list), "loader" === e.game.loader && (window.flashvars.url = e.path + e.game.flash, e.game.flash = "flash_slot_loader-201506031718.swf")
    }
    
    function d(e) {
        var t = document.getElementById("debug");
        t && (t.style.display = "block", t.innerHTML = t.innerHTML + "<span>" + e + "</span><br>")
    }
    var c = n(6),
        u = {};
    e.exports = {
        init: i,
        loadScript: r,
        addListener: a,
        parseQueryString: o,
        setTitle: l,
        setFlashvars: s,
        debug: d,
        params: u
    }
}, function(e, t, n) {
    "use strict";
    var i = n(7);
    i.isIOS = "iOS" === i.os.family, i.isiPhone = "iPhone" === i.product, i.isSafari = "Safari" === i.name, i.isChrome = "Chrome Mobile" === i.name, i.isFirefox = i.name.includes("Firefox"), i.isIOS13 = function() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return 13 === parseInt(e[1], 10)
        }
        return !1
    }, i.isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/HTC_Sensation/i)) && (i.isAndroid = !0), i.isDesktopChrome = i.name.includes("Chrome"), i.isDesktopFirefox = i.name.includes("Firefox"), i.isDesktopOpera = i.name.includes("Opera"), i.isDesktopSafari = i.name.includes("Safari"), i.isDesktopIE = i.name.includes("IE"), e.exports = i
}, function(e, t, n) {
    var i;
    (function(e, r) {
        (function() {
            "use strict";
            
            function a(e) {
                return e = String(e), e.charAt(0).toUpperCase() + e.slice(1)
            }
            
            function o(e, t, n) {
                var i = {
                    "10.0": "10",
                    6.4: "10 Technical Preview",
                    6.3: "8.1",
                    6.2: "8",
                    6.1: "Server 2008 R2 / 7",
                    "6.0": "Server 2008 / Vista",
                    5.2: "Server 2003 / XP 64-bit",
                    5.1: "XP",
                    5.01: "2000 SP1",
                    "5.0": "2000",
                    "4.0": "NT",
                    "4.90": "ME"
                };
                return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (i = i[/[\d.]+$/.exec(e)]) && (e = "Windows " + i), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = s(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
            }
            
            function l(e, t) {
                var n = -1,
                    i = e ? e.length : 0;
                if ("number" == typeof i && i > -1 && i <= S)
                    for (; ++n < i;) t(e[n], n, e);
                else d(e, t)
            }
            
            function s(e) {
                return e = h(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : a(e)
            }
            
            function d(e, t) {
                for (var n in e) O.call(e, n) && t(e[n], n, e)
            }
            
            function c(e) {
                return null == e ? a(e) : A.call(e).slice(8, -1)
            }
            
            function u(e, t) {
                var n = null != e ? typeof e[t] : "number";
                return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !e[t])
            }
            
            function p(e) {
                return String(e).replace(/([ -])(?!$)/g, "$1?")
            }
            
            function f(e, t) {
                var n = null;
                return l(e, function(i, r) {
                    n = t(n, i, r, e)
                }), n
            }
            
            function h(e) {
                return String(e).replace(/^ +| +$/g, "")
            }
            
            function m(e) {
                function t(t) {
                    return f(t, function(t, n) {
                        return t || RegExp("\\b" + (n.pattern || p(n)) + "\\b", "i").exec(e) && (n.label || n)
                    })
                }
                
                function n(t) {
                    return f(t, function(t, n, i) {
                        return t || (n[Y] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(Y)] || RegExp("\\b" + p(i) + "(?:\\b|\\w*\\d)", "i").exec(e)) && i
                    })
                }
                
                function i(t) {
                    return f(t, function(t, n) {
                        return t || RegExp("\\b" + (n.pattern || p(n)) + "\\b", "i").exec(e) && (n.label || n)
                    })
                }
                
                function r(t) {
                    return f(t, function(t, n) {
                        var i = n.pattern || p(n);
                        return !t && (t = RegExp("\\b" + i + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (t = o(t, i, n.label || n)), t
                    })
                }
                
                function a(t) {
                    return f(t, function(t, n) {
                        var i = n.pattern || p(n);
                        return !t && (t = RegExp("\\b" + i + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + i + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(n.label && !RegExp(i, "i").test(n.label) ? n.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), n = n.label || n, t = s(t[0].replace(RegExp(i, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
                    })
                }
                
                function l(t) {
                    return f(t, function(t, n) {
                        return t || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
                    })
                }
                
                function b() {
                    return this.description || ""
                }
                var y = g,
                    w = e && "object" == typeof e && "String" != c(e);
                w && (y = e, e = null);
                var x = y.navigator || {},
                    S = x.userAgent || "";
                e || (e = S);
                var k, O, D = w || N == v,
                    M = w ? !!x.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(A.toString()),
                    P = "Object",
                    I = w ? P : "ScriptBridgingProxyObject",
                    C = w ? P : "Environment",
                    R = w && y.java ? "JavaPackage" : c(y.java),
                    L = w ? P : "RuntimeObject",
                    T = /\bJava/.test(R) && y.java,
                    B = T && c(y.environment) == C,
                    F = T ? "a" : "α",
                    Q = T ? "b" : "β",
                    G = y.document || {},
                    j = y.operamini || y.opera,
                    W = E.test(W = w && j ? j["[[Class]]"] : c(j)) ? W : j = null,
                    _ = e,
                    z = [],
                    U = null,
                    X = e == S,
                    V = X && j && "function" == typeof j.version && j.version(),
                    H = t([{
                        label: "EdgeHTML",
                        pattern: "Edge"
                    }, "Trident", {
                        label: "WebKit",
                        pattern: "AppleWebKit"
                    }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                    Z = i(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                        label: "Microsoft Edge",
                        pattern: "Edge"
                    }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", {
                        label: "Silk",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Sleipnir", "SlimBrowser", {
                        label: "SRWare Iron",
                        pattern: "Iron"
                    }, "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", {
                        label: "Opera Mini",
                        pattern: "OPiOS"
                    }, "Opera", {
                        label: "Opera",
                        pattern: "OPR"
                    }, "Chrome", {
                        label: "Chrome Mobile",
                        pattern: "(?:CriOS|CrMo)"
                    }, {
                        label: "Firefox",
                        pattern: "(?:Firefox|Minefield)"
                    }, {
                        label: "Firefox for iOS",
                        pattern: "FxiOS"
                    }, {
                        label: "IE",
                        pattern: "IEMobile"
                    }, {
                        label: "IE",
                        pattern: "MSIE"
                    }, "Safari"]),
                    Y = a([{
                        label: "BlackBerry",
                        pattern: "BB10"
                    }, "BlackBerry", {
                        label: "Galaxy S",
                        pattern: "GT-I9000"
                    }, {
                        label: "Galaxy S2",
                        pattern: "GT-I9100"
                    }, {
                        label: "Galaxy S3",
                        pattern: "GT-I9300"
                    }, {
                        label: "Galaxy S4",
                        pattern: "GT-I9500"
                    }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                        label: "Kindle Fire",
                        pattern: "(?:Cloud9|Silk-Accelerated)"
                    }, "Nexus", "Nook", "PlayBook", "PlayStation 3", "PlayStation 4", "PlayStation Vita", "TouchPad", "Transformer", {
                        label: "Wii U",
                        pattern: "WiiU"
                    }, "Wii", "Xbox One", {
                        label: "Xbox 360",
                        pattern: "Xbox"
                    }, "Xoom"]),
                    J = n({
                        Apple: {
                            iPad: 1,
                            iPhone: 1,
                            iPod: 1
                        },
                        Archos: {},
                        Amazon: {
                            Kindle: 1,
                            "Kindle Fire": 1
                        },
                        Asus: {
                            Transformer: 1
                        },
                        "Barnes & Noble": {
                            Nook: 1
                        },
                        BlackBerry: {
                            PlayBook: 1
                        },
                        Google: {
                            "Google TV": 1,
                            Nexus: 1
                        },
                        HP: {
                            TouchPad: 1
                        },
                        HTC: {},
                        LG: {},
                        Microsoft: {
                            Xbox: 1,
                            "Xbox One": 1
                        },
                        Motorola: {
                            Xoom: 1
                        },
                        Nintendo: {
                            "Wii U": 1,
                            Wii: 1
                        },
                        Nokia: {
                            Lumia: 1
                        },
                        Samsung: {
                            "Galaxy S": 1,
                            "Galaxy S2": 1,
                            "Galaxy S3": 1,
                            "Galaxy S4": 1
                        },
                        Sony: {
                            "PlayStation 4": 1,
                            "PlayStation 3": 1,
                            "PlayStation Vita": 1
                        }
                    }),
                    $ = r(["Windows Phone", "Android", "CentOS", {
                        label: "Chrome OS",
                        pattern: "CrOS"
                    }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                if (H && (H = [H]), J && !Y && (Y = a([J])), (k = /\bGoogle TV\b/.exec(Y)) && (Y = k[0]), /\bSimulator\b/i.test(e) && (Y = (Y ? Y + " " : "") + "Simulator"), "Opera Mini" == Z && /\bOPiOS\b/.test(e) && z.push("running in Turbo/Uncompressed mode"), "IE" == Z && /\blike iPhone OS\b/.test(e) ? (k = m(e.replace(/like iPhone OS/, "")), J = k.manufacturer, Y = k.product) : /^iP/.test(Y) ? (Z || (Z = "Safari"), $ = "iOS" + ((k = / OS ([\d_]+)/i.exec(e)) ? " " + k[1].replace(/_/g, ".") : "")) : "Konqueror" != Z || /buntu/i.test($) ? J && "Google" != J && (/Chrome/.test(Z) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(Y)) || /\bAndroid\b/.test($) && /^Chrome/.test(Z) && /\bVersion\//i.test(e) ? (Z = "Android Browser", $ = /\bAndroid\b/.test($) ? $ : "Android") : "Silk" == Z ? (/\bMobi/i.test(e) || ($ = "Android", z.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && z.unshift("accelerated")) : "PaleMoon" == Z && (k = /\bFirefox\/([\d.]+)\b/.exec(e)) ? z.push("identifying as Firefox " + k[1]) : "Firefox" == Z && (k = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? ($ || ($ = "Firefox OS"), Y || (Y = k[1])) : Z && !(k = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(Z)) || (Z && !Y && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(k + "/") + 8)) && (Z = null), (k = Y || J || $) && (Y || J || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test($)) && (Z = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test($) ? $ : k) + " Browser")) : $ = "Kubuntu", V || (V = l(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", p(Z), "(?:Firefox|Minefield|NetFront)"])), (k = "iCab" == H && parseFloat(V) > 3 && "WebKit" || /\bOpera\b/.test(Z) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(H) && "WebKit" || !H && /\bMSIE\b/i.test(e) && ("Mac OS" == $ ? "Tasman" : "Trident") || "WebKit" == H && /\bPlayStation\b(?! Vita\b)/i.test(Z) && "NetFront") && (H = [k]), "IE" == Z && (k = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (Z += " Mobile", $ = "Windows Phone " + (/\+$/.test(k) ? k : k + ".x"), z.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (Z = "IE Mobile", $ = "Windows Phone 8.x", z.unshift("desktop mode"), V || (V = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != Z && "Trident" == H && (k = /\brv:([\d.]+)/.exec(e)) && (Z && z.push("identifying as " + Z + (V ? " " + V : "")), Z = "IE", V = k[1]), X) {
                    if (u(y, "global"))
                        if (T && (k = T.lang.System, _ = k.getProperty("os.arch"), $ = $ || k.getProperty("os.name") + " " + k.getProperty("os.version")), D && u(y, "system") && (k = [y.system])[0]) {
                            $ || ($ = k[0].os || null);
                            try {
                                k[1] = y.require("ringo/engine").version, V = k[1].join("."), Z = "RingoJS"
                            } catch (e) {
                                k[0].global.system == y.system && (Z = "Narwhal")
                            }
                        } else "object" == typeof y.process && !y.process.browser && (k = y.process) ? (Z = "Node.js", _ = k.arch, $ = k.platform, V = /[\d.]+/.exec(k.version)[0]) : B && (Z = "Rhino");
                    else c(k = y.runtime) == I ? (Z = "Adobe AIR", $ = k.flash.system.Capabilities.os) : c(k = y.phantom) == L ? (Z = "PhantomJS", V = (k = k.version || null) && k.major + "." + k.minor + "." + k.patch) : "number" == typeof G.documentMode && (k = /\bTrident\/(\d+)/i.exec(e)) && (V = [V, G.documentMode], (k = +k[1] + 4) != V[1] && (z.push("IE " + V[1] + " mode"), H && (H[1] = ""), V[1] = k), V = "IE" == Z ? String(V[1].toFixed(1)) : V[0]);
                    $ = $ && s($)
                }
                V && (k = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(V) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (X && x.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (U = /b/i.test(k) ? "beta" : "alpha", V = V.replace(RegExp(k + "\\+?$"), "") + ("beta" == U ? Q : F) + (/\d+\+?/.exec(k) || "")), "Fennec" == Z || "Firefox" == Z && /\b(?:Android|Firefox OS)\b/.test($) ? Z = "Firefox Mobile" : "Maxthon" == Z && V ? V = V.replace(/\.[\d.]+/, ".x") : /\bXbox\b/i.test(Y) ? ($ = null, "Xbox 360" == Y && /\bIEMobile\b/.test(e) && z.unshift("mobile mode")) : !/^(?:Chrome|IE|Opera)$/.test(Z) && (!Z || Y || /Browser|Mobi/.test(Z)) || "Windows CE" != $ && !/Mobi/i.test(e) ? "IE" == Z && X && null === y.external ? z.unshift("platform preview") : (/\bBlackBerry\b/.test(Y) || /\bBB10\b/.test(e)) && (k = (RegExp(Y.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || V) ? (k = [k, /BB10/.test(e)], $ = (k[1] ? (Y = null, J = "BlackBerry") : "Device Software") + " " + k[0], V = null) : this != d && "Wii" != Y && (X && j || /Opera/.test(Z) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == Z && /\bOS X (?:\d+\.){2,}/.test($) || "IE" == Z && ($ && !/^Win/.test($) && V > 5.5 || /\bWindows XP\b/.test($) && V > 8 || 8 == V && !/\bTrident\b/.test(e))) && !E.test(k = m.call(d, e.replace(E, "") + ";")) && k.name && (k = "ing as " + k.name + ((k = k.version) ? " " + k : ""), E.test(Z) ? (/\bIE\b/.test(k) && "Mac OS" == $ && ($ = null), k = "identify" + k) : (k = "mask" + k, Z = W ? s(W.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(k) && ($ = null), X || (V = null)), H = ["Presto"], z.push(k)) : Z += " Mobile", (k = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (k = [parseFloat(k.replace(/\.(\d)$/, ".0$1")), k], "Safari" == Z && "+" == k[1].slice(-1) ? (Z = "WebKit Nightly", U = "alpha", V = k[1].slice(0, -1)) : V != k[1] && V != (k[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1]) || (V = null), k[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == k[0] && 537.36 == k[2] && parseFloat(k[1]) >= 28 && "WebKit" == H && (H = ["Blink"]), X && (M || k[1]) ? (H && (H[1] = "like Chrome"), k = k[1] || (k = k[0], k < 530 ? 1 : k < 532 ? 2 : k < 532.05 ? 3 : k < 533 ? 4 : k < 534.03 ? 5 : k < 534.07 ? 6 : k < 534.1 ? 7 : k < 534.13 ? 8 : k < 534.16 ? 9 : k < 534.24 ? 10 : k < 534.3 ? 11 : k < 535.01 ? 12 : k < 535.02 ? "13+" : k < 535.07 ? 15 : k < 535.11 ? 16 : k < 535.19 ? 17 : k < 536.05 ? 18 : k < 536.1 ? 19 : k < 537.01 ? 20 : k < 537.11 ? "21+" : k < 537.13 ? 23 : k < 537.18 ? 24 : k < 537.24 ? 25 : k < 537.36 ? 26 : "Blink" != H ? "27" : "28")) : (H && (H[1] = "like Safari"), k = k[0], k = k < 400 ? 1 : k < 500 ? 2 : k < 526 ? 3 : k < 533 ? 4 : k < 534 ? "4+" : k < 535 ? 5 : k < 537 ? 6 : k < 538 ? 7 : k < 601 ? 8 : "8"), H && (H[1] += " " + (k += "number" == typeof k ? ".x" : /[.+]/.test(k) ? "" : "+")), "Safari" == Z && (!V || parseInt(V) > 45) && (V = k)), "Opera" == Z && (k = /\bzbov|zvav$/.exec($)) ? (Z += " ", z.unshift("desktop mode"), "zvav" == k ? (Z += "Mini", V = null) : Z += "Mobile", $ = $.replace(RegExp(" *" + k + "$"), "")) : "Safari" == Z && /\bChrome\b/.exec(H && H[1]) && (z.unshift("desktop mode"), Z = "Chrome Mobile", V = null, /\bOS X\b/.test($) ? (J = "Apple", $ = "iOS 4.3+") : $ = null), V && 0 == V.indexOf(k = /[\d.]+$/.exec($)) && e.indexOf("/" + k + "-") > -1 && ($ = h($.replace(k, ""))), H && !/\b(?:Avant|Nook)\b/.test(Z) && (/Browser|Lunascape|Maxthon/.test(Z) || "Safari" != Z && /^iOS/.test($) && /\bSafari\b/.test(H[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(Z) && H[1]) && (k = H[H.length - 1]) && z.push(k), z.length && (z = ["(" + z.join("; ") + ")"]), J && Y && Y.indexOf(J) < 0 && z.push("on " + J), Y && z.push((/^on /.test(z[z.length - 1]) ? "" : "on ") + Y), $ && (k = / ([\d.+]+)$/.exec($), O = k && "/" == $.charAt($.length - k[0].length - 1), $ = {
                    architecture: 32,
                    family: k && !O ? $.replace(k[0], "") : $,
                    version: k ? k[1] : null,
                    toString: function() {
                        var e = this.version;
                        return this.family + (e && !O ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                    }
                }), (k = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(_)) && !/\bi686\b/i.test(_) ? ($ && ($.architecture = 64, $.family = $.family.replace(RegExp(" *" + k), "")), Z && (/\bWOW64\b/i.test(e) || X && /\w(?:86|32)$/.test(x.cpuClass || x.platform) && !/\bWin64; x64\b/i.test(e)) && z.unshift("32-bit")) : $ && /^OS X/.test($.family) && "Chrome" == Z && parseFloat(V) >= 39 && ($.architecture = 64), e || (e = null);
                var q = {};
                return q.description = e, q.layout = H && H[0], q.manufacturer = J, q.name = Z, q.prerelease = U, q.product = Y, q.ua = e, q.version = Z && V, q.os = $ || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function() {
                        return "null"
                    }
                }, q.parse = m, q.toString = b, q.version && z.unshift(V), q.name && z.unshift(Z), $ && Z && ($ != String($).split(" ")[0] || $ != Z.split(" ")[0] && !Y) && z.push(Y ? "(" + $ + ")" : "on " + $), z.length && (q.description = z.join(" ")), q
            }
            var b = {
                    function: !0,
                    object: !0
                },
                g = b[typeof window] && window || this,
                v = g,
                y = b[typeof t] && t,
                w = b[typeof e] && e && !e.nodeType && e,
                x = y && w && "object" == typeof r && r;
            !x || x.global !== x && x.window !== x && x.self !== x || (g = x);
            var S = Math.pow(2, 53) - 1,
                E = /\bOpera/,
                N = this,
                k = Object.prototype,
                O = k.hasOwnProperty,
                A = k.toString,
                D = m();
            g.platform = D, i = function() {
                return D
            }.call(t, n, t, e), !(void 0 !== i && (e.exports = i))
        }).call(this)
    }).call(t, n(8)(e), function() {
        return this
    }())
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    "use strict";
    
    function i(e) {
        return a.hasFlashPlayerVersion(e)
    }
    
    function r(e, t, n, i) {
        var r = "11",
            o = "",
            l = {};
        l.quality = "high", l.wmode = "direct", l.bgcolor = "#000000", l.allowscriptaccess = "sameDomain", l.allowfullscreen = "true", l.scale = "exactfit";
        var s = {};
        s.id = t, s.name = t, s.align = "middle", a.embedSWF(n, e, "100%", "100%", r, o, i, l, s), a.createCSS(e, "display:block;text-align:left;")
    }
    var a = n(10),
        o = {
            hasPlayerVersion: i,
            init: r
        };
    e.exports = o
}, function(e, t) {
    "use strict";
    var n = function() {
        function e() {
            if (!z) {
                try {
                    var e = B.getElementsByTagName("body")[0].appendChild(b("span"));
                    e.parentNode.removeChild(e)
                } catch (e) {
                    return
                }
                z = !0;
                for (var t = G.length, n = 0; n < t; n++) G[n]()
            }
        }
        
        function t(e) {
            z ? e() : G[G.length] = e
        }
        
        function i(e) {
            if (typeof T.addEventListener != D) T.addEventListener("load", e, !1);
            else if (typeof B.addEventListener != D) B.addEventListener("load", e, !1);
            else if (typeof T.attachEvent != D) g(T, "onload", e);
            else if ("function" == typeof T.onload) {
                var t = T.onload;
                T.onload = function() {
                    t(), e()
                }
            } else T.onload = e
        }
        
        function r() {
            a()
        }
        
        function a() {
            var e = j.length;
            if (e > 0)
                for (var t = 0; t < e; t++) {
                    var n = j[t].id,
                        i = j[t].callbackFn,
                        r = {
                            success: !1,
                            id: n
                        };
                    if (V.pv[0] > 0) {
                        var a = m(n);
                        if (a)
                            if (!v(j[t].swfVersion) || V.wk && V.wk < 312)
                                if (j[t].expressInstall && l()) {
                                    var c = {};
                                    c.data = j[t].expressInstall, c.width = a.getAttribute("width") || "0", c.height = a.getAttribute("height") || "0", a.getAttribute("class") && (c.styleclass = a.getAttribute("class")), a.getAttribute("align") && (c.align = a.getAttribute("align"));
                                    for (var u = {}, p = a.getElementsByTagName("param"), f = p.length, h = 0; h < f; h++) "movie" != p[h].getAttribute("name").toLowerCase() && (u[p[h].getAttribute("name")] = p[h].getAttribute("value"));
                                    s(c, u, n, i)
                                } else d(a), i && i(r);
                        else w(n, !0), i && (r.success = !0, r.ref = o(n), i(r))
                    } else if (w(n, !0), i) {
                        var b = o(n);
                        b && typeof b.SetVariable != D && (r.success = !0, r.ref = b), i(r)
                    }
                }
        }
        
        function o(e) {
            var t = null,
                n = m(e);
            if (n && "OBJECT" == n.nodeName)
                if (typeof n.SetVariable != D) t = n;
                else {
                    var i = n.getElementsByTagName(M)[0];
                    i && (t = i)
                } return t
        }
        
        function l() {
            return !U && v("6.0.65") && (V.win || V.mac) && !(V.wk && V.wk < 312)
        }
        
        function s(e, t, n, i) {
            U = !0, N = i || null, k = {
                success: !1,
                id: n
            };
            var r = m(n);
            if (r) {
                "OBJECT" == r.nodeName ? (S = c(r), E = null) : (S = r, E = n), e.id = R, (typeof e.width == D || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == D || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), B.title = B.title.slice(0, 47) + " - Flash Player Installation";
                var a = V.ie && V.win ? "ActiveX" : "PlugIn",
                    o = "MMredirectURL=" + encodeURI(T.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + a + "&MMdoctitle=" + B.title;
                if (typeof t.flashvars != D ? t.flashvars += "&" + o : t.flashvars = o, V.ie && V.win && 4 != r.readyState) {
                    var l = b("div");
                    n += "SWFObjectNew", l.setAttribute("id", n), r.parentNode.insertBefore(l, r), r.style.display = "none",
                        function() {
                            4 == r.readyState ? r.parentNode.removeChild(r) : setTimeout(arguments.callee, 10)
                        }()
                }
                u(e, t, n)
            }
        }
        
        function d(e) {
            if (V.ie && V.win && 4 != e.readyState) {
                var t = b("div");
                e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(c(e), t), e.style.display = "none",
                    function() {
                        4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                    }()
            } else e.parentNode.replaceChild(c(e), e)
        }
        
        function c(e) {
            var t = b("div");
            if (V.win && V.ie) t.innerHTML = e.innerHTML;
            else {
                var n = e.getElementsByTagName(M)[0];
                if (n) {
                    var i = n.childNodes;
                    if (i)
                        for (var r = i.length, a = 0; a < r; a++) 1 == i[a].nodeType && "PARAM" == i[a].nodeName || 8 == i[a].nodeType || t.appendChild(i[a].cloneNode(!0))
                }
            }
            return t
        }
        
        function u(e, t, n) {
            var i, r = m(n);
            if (V.wk && V.wk < 312) return i;
            if (r)
                if (typeof e.id == D && (e.id = n), V.ie && V.win) {
                    var a = "";
                    for (var o in e) e[o] != Object.prototype[o] && ("data" == o.toLowerCase() ? t.movie = e[o] : "styleclass" == o.toLowerCase() ? a += ' class="' + e[o] + '"' : "classid" != o.toLowerCase() && (a += " " + o + '="' + e[o] + '"'));
                    var l = "";
                    for (var s in t) t[s] != Object.prototype[s] && (l += '<param name="' + s + '" value="' + t[s] + '" />');
                    r.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", W[W.length] = e.id, i = m(e.id)
                } else {
                    var d = b(M);
                    d.setAttribute("type", C);
                    for (var c in e) e[c] != Object.prototype[c] && ("styleclass" == c.toLowerCase() ? d.setAttribute("class", e[c]) : "classid" != c.toLowerCase() && d.setAttribute(c, e[c]));
                    for (var u in t) t[u] != Object.prototype[u] && "movie" != u.toLowerCase() && p(d, u, t[u]);
                    r.parentNode.replaceChild(d, r), i = d
                } return i
        }
        
        function p(e, t, n) {
            var i = b("param");
            i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i)
        }
        
        function f(e) {
            var t = m(e);
            t && "OBJECT" == t.nodeName && (V.ie && V.win ? (t.style.display = "none", function() {
                4 == t.readyState ? h(e) : setTimeout(arguments.callee, 10)
            }()) : t.parentNode.removeChild(t))
        }
        
        function h(e) {
            var t = m(e);
            if (t) {
                for (var n in t) "function" == typeof t[n] && (t[n] = null);
                t.parentNode.removeChild(t)
            }
        }
        
        function m(e) {
            var t = null;
            try {
                t = B.getElementById(e)
            } catch (e) {}
            return t
        }
        
        function b(e) {
            return B.createElement(e)
        }
        
        function g(e, t, n) {
            e.attachEvent(t, n), _[_.length] = [e, t, n]
        }
        
        function v(e) {
            var t = V.pv,
                n = e.split(".");
            return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2]
        }
        
        function y(e, t, n, i) {
            if (!V.ie || !V.mac) {
                var r = B.getElementsByTagName("head")[0];
                if (r) {
                    var a = n && "string" == typeof n ? n : "screen";
                    if (i && (O = null, A = null), !O || A != a) {
                        var o = b("style");
                        o.setAttribute("type", "text/css"), o.setAttribute("media", a), O = r.appendChild(o), V.ie && V.win && typeof B.styleSheets != D && B.styleSheets.length > 0 && (O = B.styleSheets[B.styleSheets.length - 1]), A = a
                    }
                    V.ie && V.win ? O && typeof O.addRule == M && O.addRule(e, t) : O && typeof B.createTextNode != D && O.appendChild(B.createTextNode(e + " {" + t + "}"))
                }
            }
        }
        
        function w(e, t) {
            if (X) {
                var n = t ? "visible" : "hidden";
                z && m(e) ? m(e).style.visibility = n : y("#" + e, "visibility:" + n)
            }
        }
        
        function x(e) {
            var t = /[\\\"<>\.;]/,
                n = null != t.exec(e);
            return n && typeof encodeURIComponent != D ? encodeURIComponent(e) : e
        }
        var S, E, N, k, O, A, D = "undefined",
            M = "object",
            P = "Shockwave Flash",
            I = "ShockwaveFlash.ShockwaveFlash",
            C = "application/x-shockwave-flash",
            R = "SWFObjectExprInst",
            L = "onreadystatechange",
            T = window,
            B = document,
            F = navigator,
            Q = !1,
            G = [r],
            j = [],
            W = [],
            _ = [],
            z = !1,
            U = !1,
            X = !0,
            V = function() {
                var e = typeof B.getElementById != D && typeof B.getElementsByTagName != D && typeof B.createElement != D,
                    t = F.userAgent.toLowerCase(),
                    n = F.platform.toLowerCase(),
                    i = n ? /win/.test(n) : /win/.test(t),
                    r = n ? /mac/.test(n) : /mac/.test(t),
                    a = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                    o = !1,
                    l = [0, 0, 0],
                    s = null;
                if (typeof F.plugins != D && typeof F.plugins[P] == M) s = F.plugins[P].description, !s || typeof F.mimeTypes != D && F.mimeTypes[C] && !F.mimeTypes[C].enabledPlugin || (Q = !0, o = !1, s = s.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), l[0] = parseInt(s.replace(/^(.*)\..*$/, "$1"), 10), l[1] = parseInt(s.replace(/^.*\.(.*)\s.*$/, "$1"), 10), l[2] = /[a-zA-Z]/.test(s) ? parseInt(s.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if (typeof T.ActiveXObject != D || "ActiveXObject" in window) try {
                    var d = new ActiveXObject(I);
                    d && (s = d.GetVariable("$version"), s && (o = !0, s = s.split(" ")[1].split(","), l = [parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10)]))
                } catch (e) {}
                return {
                    w3: e,
                    pv: l,
                    wk: a,
                    ie: o,
                    win: i,
                    mac: r
                }
            }();
        (function t() {
            V.w3 && ((typeof B.readyState != D && "complete" == B.readyState || typeof B.readyState == D && (B.getElementsByTagName("body")[0] || B.body)) && e(), z || (typeof B.addEventListener != D && B.addEventListener("DOMContentLoaded", e, !1), V.ie && V.win && (typeof B.addEventListener != D ? B.addEventListener(L, function() {
                "complete" == B.readyState && (B.addEventListener(L, t, !1), e())
            }, !1) : B.attachEvent(L, function() {
                "complete" == B.readyState && (B.detachEvent(L, t), e())
            }), T == top && ! function() {
                if (!z) {
                    try {
                        B.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(t, 0)
                    }
                    e()
                }
            }()), V.wk && ! function() {
                if (!z) return /loaded|complete/.test(B.readyState) ? void e() : void setTimeout(t, 0)
            }(), i(e)))
        })(),
        function() {
            V.ie && V.win && (typeof window.addEventListener != D ? window.addEventListener("onunload", function() {
                for (var e = _.length, t = 0; t < e; t++) _[t][0].detachEvent(_[t][1], _[t][2]);
                for (var i = W.length, r = 0; r < i; r++) f(W[r]);
                for (var a in V) V[a] = null;
                V = null;
                for (var o in n) n[o] = null;
                n = null
            }, !1) : window.attachEvent("onunload", function() {
                for (var e = _.length, t = 0; t < e; t++) _[t][0].detachEvent(_[t][1], _[t][2]);
                for (var i = W.length, r = 0; r < i; r++) f(W[r]);
                for (var a in V) V[a] = null;
                V = null;
                for (var o in n) n[o] = null;
                n = null
            }))
        }();
        return {
            registerObject: function(e, t, n, i) {
                if (V.w3 && e && t) {
                    var r = {};
                    r.id = e, r.swfVersion = t, r.expressInstall = n, r.callbackFn = i, j[j.length] = r, w(e, !1)
                } else i && i({
                    success: !1,
                    id: e
                })
            },
            getObjectById: function(e) {
                if (V.w3) return o(e)
            },
            embedSWF: function(e, n, i, r, a, o, d, c, p, f) {
                var h = {
                    success: !1,
                    id: n
                };
                V.w3 && !(V.wk && V.wk < 312) && e && n && i && r && a ? (w(n, !1), t(function() {
                    i += "", r += "";
                    var t = {};
                    if (p && typeof p === M)
                        for (var m in p) t[m] = p[m];
                    t.data = e, t.width = i, t.height = r;
                    var b = {};
                    if (c && typeof c === M)
                        for (var g in c) b[g] = c[g];
                    if (d && typeof d === M)
                        for (var y in d) typeof b.flashvars != D ? b.flashvars += "&" + y + "=" + d[y] : b.flashvars = y + "=" + d[y];
                    if (v(a)) {
                        var x = u(t, b, n);
                        t.id == n && w(n, !0), h.success = !0, h.ref = x
                    } else {
                        if (o && l()) return t.data = o, void s(t, b, n, f);
                        w(n, !0)
                    }
                    f && f(h)
                })) : f && f(h)
            },
            switchOffAutoHideShow: function() {
                X = !1
            },
            ua: V,
            getFlashPlayerVersion: function() {
                return {
                    major: V.pv[0],
                    minor: V.pv[1],
                    release: V.pv[2]
                }
            },
            hasFlashPlayerVersion: v,
            createSWF: function(e, t, n) {
                return V.w3 ? u(e, t, n) : void 0
            },
            showExpressInstall: function(e, t, n, i) {
                V.w3 && l() && s(e, t, n, i)
            },
            removeSWF: function(e) {
                V.w3 && f(e)
            },
            createCSS: function(e, t, n, i) {
                V.w3 && y(e, t, n, i)
            },
            addDomLoadEvent: t,
            addLoadEvent: i,
            getQueryParamValue: function(e) {
                var t = B.location.search || B.location.hash;
                if (t) {
                    if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return x(t);
                    for (var n = t.split("&"), i = 0; i < n.length; i++)
                        if (n[i].substring(0, n[i].indexOf("=")) == e) return x(n[i].substring(n[i].indexOf("=") + 1))
                }
                return ""
            },
            expressInstallCallback: function() {
                if (U) {
                    var e = m(R);
                    e && S && (e.parentNode.replaceChild(S, e), E && (w(E, !0), V.ie && V.win && (S.style.display = "block")), N && N(k)), U = !1
                }
            }
        }
    }();
    e.exports = n
}, function(e, t, n) {
    "use strict";
    
    function i() {
        g.isDesktop || (document.body.innerHTML = document.body.innerHTML + '<div id="gl-overlay"><div class="hand"></div></div>'), m.init("hint" === b.params.ios8bar), g.isDesktop || (a(), l()), r(), h(), y = setInterval(s, 100)
    }
    
    function r() {
        var e = "height=device-height, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui",
            t = document.getElementsByName("viewport")[0];
        if (t) t.setAttribute("content", e);
        else {
            var n = document.createElement("meta");
            n.name = "viewport", n.content = e, document.getElementsByTagName("head")[0].appendChild(n)
        }
    }
    
    function a() {
        window.addEventListener("orientationchange", o, !1), window.addEventListener("resize", l, !1), 2 === b.params.game.position && u(), g.isFirefox && window.addEventListener("deviceorientation", o)
    }
    
    function o() {
        c(), d()
    }
    
    function l() {
        c()
    }
    
    function s() {
        if (window.self === window.top) return void clearInterval(y);
        var e = document.getElementsByTagName("canvas")[0];
        e && e.style && "fixed" !== e.style.position && (e.style.position = "fixed", clearInterval(y))
    }
    
    function d() {
        if (g.isFirefox && 1 === b.params.game.position) {
            var e = m.getOrientation(),
                t = document.getElementsByTagName("canvas")[0];
            "portrait" === e ? (t.style.width = window.innerWidth + "px", t.style.height = "auto", t.style.marginLeft = 0, window.PIXI || (t.style.marginTop = window.innerHeight / 3 - 20 + "px")) : t.style.marginTop = 0
        }
    }
    
    function c() {
        if (!g.isDesktop && 2 === b.params.game.position) {
            var e = document.getElementById("portrait-message"),
                t = document.getElementById("loader-wrapper"),
                n = document.getElementById("game-content");
            "portrait" === m.getOrientation() ? (e.style.display = "block", t.style.display = "block", n.style.display = "none") : (e.style.display = "none", t.style.display = "none", n.style.display = "block")
        }
    }
    
    function u() {
        document.body.innerHTML = "" + ('<div id="loader-wrapper">   <div id="portrait-message">       <div class="portrait-game-logo portraitLogoDiv"></div>       <div class="iphone_outline_uri phoneOutlineDiv"></div>       <div id="rotateanim" class="iphone_outline_uri rotatingPhoneDiv"></div>       <div class="portrait-message-text"></div>       <div class="portrait-or">OR</div>' + ('       <div class="portrait-link"><a href=' + b.params.home_page + ">Go to the website</a></div>") + "   </div></div>\n") + document.body.innerHTML;
        var e = "url(" + b.params.path + b.params.game.preview + ")";
        document.getElementsByClassName("portrait-game-logo")[0].style.backgroundImage = e, document.getElementsByClassName("portrait-message-text")[0].innerHTML = "Please turn your device to landscape mode!"
    }
    
    function p(e) {
        e.requestFullscreen ? e.requestFullscreen({
            navigationUI: "hide"
        }) : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
    }
    
    function f() {
        document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled ? ! function() {
            var e = document.createElement("DIV");
            e.id = "full-screen-handler", e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.width = "100%", e.style.height = "100%", document.body.appendChild(e), e.addEventListener("click", function() {
                try {
                    e.parentNode.removeChild(e), p(document.getElementById("game-content"))
                } catch (e) {
                    window.scrollTo(0, 1)
                }
            })
        }() : window.scrollTo(0, 1)
    }
    
    function h() {
        g.isDesktop && document.getElementById("game-content").addEventListener("wheel", function(e) {
            e.preventDefault()
        })
    }
    var m = n(12),
        b = n(5),
        g = n(6),
        v = {
            init: i,
            requestFullscreen: f,
            togglePortraitMessage: c
        };
    e.exports = v;
    var y = void 0
}, function(e, t, n) {
    "use strict";
    
    function i() {
        var e = void 0;
        return window.matchMedia("(orientation: portrait)").matches ? e = "portrait" : window.matchMedia("(orientation: landscape)").matches && (e = "landscape"), e
    }
    
    function r() {
        for (var e = w.isIOS13() ? E : S, t = e.length; t--;) {
            var n = window.screen,
                i = n.width,
                r = n.height;
            if (window.devicePixelRatio === e[t][6] && i === e[t][4] && r === e[t][5] || i === e[t][5] && r === e[t][4]) return e[t]
        }
        return y.error("Invalid iphone detection!", window.screen.width, window.screen.height), null
    }
    
    function a() {
        if (!w.isDesktop) {
            if (w.isAndroid) {
                var e = document.getElementById("gl-overlay");
                return void(e.className = "fullscreen")
            }
            var t = o();
            t && (document.getElementById("gl-overlay").style.opacity = 0), g(), l(), window.game_resize_event = !0, d(), p(function() {
                c(d)
            }), c(function() {
                setTimeout(function() {
                    document.getElementById("game-content").style.height = window.innerHeight + "px", m()
                }, 100)
            }), b() || (l(), setInterval(function() {
                var e = !1;
                e = w.isChrome ? f() : h(), s(!e && !t);
                var n = document.getElementById("gl-overlay");
                e || (n.style.height = "1500px", window.scrollTo(0, 1))
            }, 500))
        }
    }
    
    function o() {
        for (var e = r()[7], t = 0; t < x.length; t++)
            if (x[t] === e) return !0;
        return !1
    }
    
    function l() {
        window.scrollTo(0, 0), document.getElementById("game-content").style.position = "fixed"
    }
    
    function s(e) {
        var t = document.getElementById("gl-overlay"),
            n = document.getElementsByClassName("hand")[0];
        t.className = "not-fullscreen hint", t.style.zIndex = e ? 10001 : -2, n.style.zIndex = e ? 10002 : -1
    }
    
    function d() {
        u(d), window.initial_viewport_height = window.innerHeight
    }
    
    function c(e) {
        window.addEventListener("resize", e)
    }
    
    function u(e) {
        window.removeEventListener("resize", e)
    }
    
    function p(e) {
        window.addEventListener("orientationchange", e)
    }
    
    function f() {
        return window.initial_viewport_height < window.innerHeight
    }
    
    function h() {
        return window.innerHeight >= v()
    }
    
    function m() {
        window.dispatchEvent(new Event("game_resize"))
    }
    
    function b() {
        return window.self !== window.top
    }
    
    function g() {
        document.addEventListener("gesturestart", function(e) {
            e.preventDefault()
        })
    }
    
    function v() {
        var e = 0,
            t = r(),
            n = {
                width: window.screen.width,
                height: window.screen.height
            };
        return e = "portrait" === i() ? Math.round(n.width * t[1] / t[0]) - 10 : Math.round(n.height * t[3] / t[2])
    }
    var y = n(13),
        w = n(6),
        x = ["iPhone 5/5c/5s/SE and 6/6s (Zoomed)"],
        S = [
            [1280, 1762, 1920, 1280, 320, 480, 2, "iPhone 4/4s"],
            [1280, 2114, 2272, 1280, 320, 568, 2, "iPhone 5/5c/5s/SE and 6/6s (Zoomed)"],
            [1500, 2510, 2668, 1500, 375, 667, 2, "iPhone 6/6s/7/8"],
            [1656, 2785, 2944, 1656, 414, 736, 3, "iPhone 6+/6s+/7+/8+"],
            [1500, 2509, 2668, 1500, 375, 667, 3, "iPhone 6+/6s+/7+/8+ (Zoomed)"],
            [3072, 3936, 4096, 2912, 768, 1024, 1, "iPad 2"],
            [3072, 3938, 4096, 2914, 768, 1024, 2, "iPad Air/Retina/Pro (9.7-inch)"],
            [3336, 4290, 4448, 3178, 834, 1112, 2, "iPad Pro (10.5-inch)"],
            [3336, 4602, 4776, 3162, 834, 1194, 2, "iPad Pro (11-inch)"],
            [4096, 5306, 5464, 3938, 1024, 1366, 2, "iPad Pro (12.9-inch)"],
            [4096, 5290, 5464, 3922, 1024, 1366, 2, "iPad Pro (12.9-inch) 3rd generation"],
            [1656, 3330, 3584, 1656, 414, 896, 2, "iPhone XR"],
            [1500, 2993, 3248, 1500, 375, 812, 3, "iPhone X/XS"],
            [1656, 3329, 3584, 1656, 414, 896, 3, "iPhone XS Max"]
        ],
        E = [
            [1280, 1764, 1920, 1280, 320, 480, 2, "iPhone 4/4s (iOS 13)"],
            [1280, 2116, 2272, 1280, 320, 568, 2, "iPhone 5/5c/5s/SE and 6/6s (Zoomed) (iOS 13)"],
            [1500, 2512, 2668, 1500, 375, 667, 2, "iPhone 6/6s/7/8 (iOS 13)"],
            [1656, 2788, 2944, 1656, 414, 736, 3, "iPhone 6+/6s+/7+/8+ (iOS 13)"],
            [1500, 2512, 2668, 1500, 375, 667, 3, "iPhone 6+/6s+/7+/8+ (Zoomed) (iOS 13)"],
            [3072, 3940, 4096, 3166, 768, 1024, 2, "iPad Air/Retina/Pro (9.7-inch) (iOS 13)"],
            [3336, 4276, 4448, 3164, 834, 1112, 2, "iPad Pro (10.5-inch) (iOS 13)"],
            [3336, 4604, 4776, 3164, 834, 1194, 2, "iPad Pro (11-inch) (iOS 13)"],
            [4096, 5308, 5464, 3940, 1024, 1366, 2, "iPad Pro (12.9-inch) (iOS 13)"],
            [4096, 5292, 5464, 3924, 1024, 1366, 2, "iPad Pro (12.9-inch) 3rd generation (iOS 13)"],
            [1656, 3332, 3584, 1656, 414, 896, 2, "iPhone XR (iOS 13)"],
            [1500, 2996, 3248, 1500, 375, 812, 2, "iPhone XR (iOS 13.3)"],
            [1500, 2996, 3248, 1500, 375, 812, 3, "iPhone X/XS (iOS 13)"],
            [1656, 3332, 3584, 1656, 414, 896, 3, "iPhone XS Max (iOS 13)"]
        ];
    e.exports = {
        init: a,
        getOrientation: i
    }
}, function(e, t) {
    "use strict";
    
    function n() {
        console.log.apply(console, arguments)
    }
    
    function i() {
        console.error.apply(console, arguments)
    }
    
    function r() {
        console.warn.apply(console, arguments)
    }
    e.exports = {
        log: n,
        error: i,
        warn: r
    }
}, function(e, t) {
    "use strict";
    
    function n() {
        var e = document.createElement("canvas");
        e.setAttribute("width", "1"), e.setAttribute("height", "1"), document.body.appendChild(e);
        var t = e.getContext("webgl", {
            stencil: !0,
            failIfMajorPerformanceCaveat: !0
        }) || e.getContext("experimental-webgl", {
            stencil: !0,
            failIfMajorPerformanceCaveat: !0
        });
        if (e.parentNode.removeChild(e), !t) return !1;
        var n = t.getExtension("WEBGL_debug_renderer_info");
        if (null !== n) {
            var i = t.getParameter(n.UNMASKED_RENDERER_WEBGL);
            if (i.includes("Mali-4")) return !1
        }
        return !0
    }
    
    function i() {
        var e = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(t) {
            return t.includes("webgl") ? null : e.call(this, t)
        }
    }
    e.exports = {
        isSupported: n,
        disable: i
    }
}]);
//# sourceMappingURL=app.js.map