loadjs = function() {
    var a = function() {}
      , c = {}
      , u = {}
      , f = {};
    function o(e, n) {
        if (e) {
            var t = f[e];
            if (u[e] = n,
            t)
                for (; t.length; )
                    t[0](e, n),
                    t.splice(0, 1)
        }
    }
    function l(e, n) {
        e.call && (e = {
            success: e
        }),
        n.length ? (e.error || a)(n) : (e.success || a)(e)
    }
    function h(t, r, s, i) {
        var c, o, e = document, n = s.async, u = (s.numRetries || 0) + 1, f = s.before || a, l = t.replace(/^(css|img)!/, "");
        i = i || 0,
        /(^css!|\.css$)/.test(t) ? ((o = e.createElement("link")).rel = "stylesheet",
        o.href = l,
        (c = "hideFocus"in o) && o.relList && (c = 0,
        o.rel = "preload",
        o.as = "style")) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (o = e.createElement("img")).src = l : ((o = e.createElement("script")).src = t,
        o.async = void 0 === n || n),
        !(o.onload = o.onerror = o.onbeforeload = function(e) {
            var n = e.type[0];
            if (c)
                try {
                    o.sheet.cssText.length || (n = "e")
                } catch (e) {
                    18 != e.code && (n = "e")
                }
            if ("e" == n) {
                if ((i += 1) < u)
                    return h(t, r, s, i)
            } else if ("preload" == o.rel && "style" == o.as)
                return o.rel = "stylesheet";
            r(t, n, e.defaultPrevented)
        }
        ) !== f(t, o) && e.head.appendChild(o)
    }
    function t(e, n, t) {
        var r, s;
        if (n && n.trim && (r = n),
        s = (r ? t : n) || {},
        r) {
            if (r in c)
                throw "LoadJS";
            c[r] = !0
        }
        function i(n, t) {
            !function(e, r, n) {
                var t, s, i = (e = e.push ? e : [e]).length, c = i, o = [];
                for (t = function(e, n, t) {
                    if ("e" == n && o.push(e),
                    "b" == n) {
                        if (!t)
                            return;
                        o.push(e)
                    }
                    --i || r(o)
                }
                ,
                s = 0; s < c; s++)
                    h(e[s], t, n)
            }(e, function(e) {
                l(s, e),
                n && l({
                    success: n,
                    error: t
                }, e),
                o(r, e)
            }, s)
        }
        if (s.returnPromise)
            return new Promise(i);
        i()
    }
    return t.ready = function(e, n) {
        return function(e, t) {
            e = e.push ? e : [e];
            var n, r, s, i = [], c = e.length, o = c;
            for (n = function(e, n) {
                n.length && i.push(e),
                --o || t(i)
            }
            ; c--; )
                r = e[c],
                (s = u[r]) ? n(r, s) : (f[r] = f[r] || []).push(n)
        }(e, function(e) {
            l(n, e)
        }),
        t
    }
    ,
    t.done = function(e) {
        o(e, [])
    }
    ,
    t.reset = function() {
        c = {},
        u = {},
        f = {}
    }
    ,
    t.isDefined = function(e) {
        return e in c
    }
    ,
    t
}();
// Set location of game client components.
let relativeLocation = typeof gccLocation === 'undefined' ? '../../../game-client-components' : gccLocation;

// Shared and Infrastructure libraries are loaded completely
loadjs([relativeLocation + '/netent_gcc_shared/shared.js', relativeLocation + '/netent_gcc_api/gcc_api.js'], {

    success: function() {
        loadjs([relativeLocation + '/netent_gcc_websockets/websockets.js'], 'communication', {
            async: false,
            success: function() {

                // Shared and Infrastructure libraries are loaded completely
                // Now Load the implemented components like Player Notification, Player Progress etc.
                var gccComponents = [relativeLocation + '/netent_gcc_toast-notifications/toast-notifications.js', relativeLocation + '/netent_gcc_advantures_button/advantures_button.js', relativeLocation + '/netent_gcc_game_client_statistics/gcc_game_client_statistics.js'/// Other future components
                ];
                loadjs(gccComponents, 'gccComponents', {
                    async: false,
                    success: function() {
                        // All the client components are loaded now...
                        // Load NetEnt Game Adapter ( or send call back to 3rd Party Integrator for calling initialisation/configurations for the Client Components as Adapter for them is not required).
                        loadjs([relativeLocation + '/netent_gcc_toast-view/toast-view.js', relativeLocation + '/netent_gcc_fullscreen-notifications/fullscreen-notifications.js', relativeLocation + '/netent_gcc_fullscreen-view/fullscreen-view.js'], 'fullscreen', {
                            async: false,
                            success: function() {
                                loadjs([relativeLocation + '/netent_gcc-netent_game_adapter/game_adapter.js'], 'netent_game_adapter')
                            }
                        })
                    }
                });
            }
        });
    },
    async: false
});
