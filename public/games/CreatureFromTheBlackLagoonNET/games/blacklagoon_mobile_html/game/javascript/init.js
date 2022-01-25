 var GameName='CreatureFromTheBlackLagoonNET';
window.RESOLUTIONS_CONFIG = {
    mobile: {
        landscape: {
            width: 960,
            height: 540,
            pixelFactor: 1,
            portraitTopOffset: 0
        },
        portrait: {
            width: 540,
            height: 960,
            pixelFactor: .5625,
            portraitTopOffset: 0
        }
    },
    tablet: {
        default: {
            width: 960,
            height: 540,
            pixelFactor: 1
        }
    },
    desktop: {
        portrait: {
            width: 540,
            height: 960,
            pixelFactor: .5625,
            portraitTopOffset: 0
        },
        landscape: {
            width: 1280,
            height: 720,
            pixelFactor: 1.33
        }
    }
}, window.VIRTUAL_RESOLUTIONS_CONFIG = {
    default: {
        landscape: {
            width: 1280,
            height: 720
        },
        portrait: {
            width: 720,
            height: 1280
        }
    }
};
window.Sys = {},
    function() {
        var e, i, s = navigator.userAgent;
        Sys.openBetMode = !1, /callbackurl/i.test(window.location.search) && (/integration=openbet/i.test(window.location.search) || /openbet\.user_id/i.test(window.location.search)) && (Sys.openBetMode = !0), Sys.openBetPlayForFunMode = !1, /integration=openbet/i.test(window.location.search) && !Sys.openBetMode && (Sys.openBetPlayForFunMode = !0), Sys.isGcmEnabled = !1, /openbet.gcmMode=true/i.test(window.location.search) && (Sys.isGcmEnabled = !0), Sys.isiPad = !1, Sys.isiPhone = !1, Sys.isiPhoneIOS7 = !1, Sys.isiPhoneIOS8 = !1, Sys.isiPhoneIOS9 = !1, Sys.isiPod = !1, Sys.isAndroidDevice = !1, Sys.isSamsungS = !1, Sys.isOneX = !1, Sys.isHTCOne = !1, Sys.isAndroid23Device = !1, Sys.isAndroid400 = !1, Sys.isAndroid410 = !1, Sys.isAndroidTablet = !1, Sys.isAndroid3Tablet = !1, Sys.isDesktop = !1, Sys.has3DTransforms = !1, Sys.isChrome = !1, Sys.isChrome280 = !1, Sys.isSafari = !1, Sys.isChromeForIOS = !1,
            function() {
                var e, i = document,
                    s = i.createElement("div"),
                    t = !1;
                void 0 !== s.style.webkitPerspective && (e = i.createElement("style"), e.textContent = "@media (-webkit-transform-3d){#test3d{height:3px}}", i.getElementsByTagName("head")[0].appendChild(e), s.id = "test3d", i.body && (i.body.appendChild(s), t = 3 === s.offsetHeight, e.parentNode.removeChild(e), s.parentNode.removeChild(s))), Sys.has3DTransforms = t
            }(), s.match(/Chrome/i) && (Sys.isChrome = !0, s.match(/Chrome\/28[\.\d]/i) && (Sys.isChrome280 = !0)), s.match(/CriOS/i) && (Sys.isChromeForIOS = !0), s.match(/Safari/i) && !Sys.isChromeForIOS && (Sys.isSafari = !0), null !== s.match(/iPad/i) ? Sys.isiPad = !0 : s.match(/iPod/i) ? Sys.isiPod = !0 : s.match(/iPhone/i) ? (e = "3gs,4,4s", i = "standard", e = 568 === window.screen.height ? "5" : e, e = 667 === window.screen.height ? "6" : e, i = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)").matches && "6" === e ? "zoomed" : i, e = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)").matches ? "6+" : e, Sys.isiPhone = {
                series: "iPhone",
                model: e,
                displayZoom: i
            }) : s.match(/Android/i) || s.match(/HTC_Sensation/i) ? (Sys.isAndroidDevice = !0, s.match(/Android 3[\.\d]+/i) ? (Sys.isAndroid3Tablet = !0, Sys.isAndroidTablet = !0) : s.match(/mobile/i) ? s.match(/Android 2\.3/i) ? Sys.isAndroid23Device = !0 : s.match(/Android 4\.0/i) ? Sys.isAndroid400 = !0 : s.match(/Android 4\.1/i) ? Sys.isAndroid410 = !0 : s.match(/Android 4\.2/i) ? Sys.isAndroid420 = !0 : s.match(/Android 4\.3/i) && (Sys.isAndroid430 = !0) : Sys.isAndroidTablet = !0) : Sys.isDesktop = !0, Sys.isiPhoneIOS7 = s.indexOf("IEMobile") < 0 && /(?:OS\s*[7]+_0(?:_\d+)?\s*)/i.test(s) && !window.navigator.standalone && (Sys.isiPhone || Sys.isiPod) && Sys.isSafari, Sys.isiPhoneIOS8 = /OS\s*8_/i.test(s) && !window.navigator.standalone && Sys.isiPhone && Sys.isSafari, Sys.isiPhoneIOS9 = /OS\s*9_/i.test(s) && !window.navigator.standalone && Sys.isiPhone && Sys.isSafari, Sys.isiOS9 = /OS\s*9_/i.test(s), Sys.isIphone4Or4s = Sys.isiPhone && window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches && 320 === window.screen.width && 480 === window.screen.height, Sys.isIphone5Or5sOr5c = Sys.isiPhone && 320 === window.screen.width && 568 === window.screen.height, s.match(/GT-I9100/) ? Sys.isSamsungS = {
                series: "samsungS",
                model: "s2"
            } : s.match(/GT-I9300/) ? Sys.isSamsungS = {
                series: "samsungS",
                model: "s3"
            } : (s.match(/GT-I9505/) || s.match(/GT-I9506/) || s.match(/GT-I9521/) || s.match(/GT-I9525/)) && (Sys.isSamsungS = {
                series: "samsungS",
                model: "s4"
            }), Sys.isiOSDevice = Sys.isiPad || Sys.isiPhone || Sys.isiPod, Sys.isIphone3GS = Sys.isiOSDevice && !window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches && 320 === window.screen.width && 480 === window.screen.height, Sys.isTouchDevice = Boolean("ontouchstart" in window), Sys.clickEvent = Sys.isTouchDevice ? "touchend" : "click", Sys.touchstartEvent = Sys.isTouchDevice ? "touchstart" : "mousedown", Sys.touchendEvent = Sys.isTouchDevice ? "touchend" : "mouseup", Sys.touchoutEvent = "mouseout", Sys.touchmoveEvent = Sys.isTouchDevice ? "touchmove" : "mousemove", Sys.isInIFrame = window !== window.parent
    }(), Sys.apply = function(e, i) {
        var s;
        if (e = e || {}, null === i || !Sys.isDefined(i)) return e;
        if (e && i && Sys.isObj(i))
            for (s in i) i.hasOwnProperty(s) && (e[s] = i[s]);
        return e
    }, Sys.applyProperties = function(e, i) {
        var s, t, n = Object.keys(i),
            o = n.length;
        for (s = -1; ++s < o;) t = n[s], Sys.isDefined(i[t]) && (e[t] = i[t]);
        return e
    }, Sys.applyIf = function(e, i) {
        var s;
        if (!(e && i && Sys.isObj(i))) throw new Error("Error in Sys.applyIf");
        for (s in i) i.hasOwnProperty(s) && !e.hasOwnProperty(s) && (e[s] = i[s]);
        return e
    }, Sys.applyPropertiesIf = function(e, i) {
        var s, t, n = Object.keys(i),
            o = n.length;
        for (s = -1; ++s < o;) t = n[s], !Sys.isDefined(e[t]) && Sys.isDefined(i[t]) && (e[t] = i[t]);
        return e
    }, Sys.iterate = function(e, i, s) {
        var t;
        if (!Sys.isObj(e) || "function" != typeof i) return e;
        for (t in e) e.hasOwnProperty(t) && i.call(s || e, t, e[t]);
        return e
    }, Sys.each = function(e, i, s) {
        var t, n;
        if (!Sys.isArray(e) || "function" != typeof i) return e;
        for (t = 0, n = e.length; t < n; t += 1)
            if (!1 === i.call(s || e[t], e[t], t)) return t;
        return e
    }, Sys.contains = function(e, i) {
        return Array.prototype.includes ? e.includes(i) : e.indexOf(i) > -1
    }, Sys.variadic = function(e) {
        var i = e.length - 1;
        return function() {
            var s = [].slice.call(arguments, 0, i),
                t = [].slice.call(arguments, i);
            return e.apply(this, s.concat([t]))
        }
    }, Sys.ns = function(e) {
        var i, s, t = e || "";
        for (i = t.split(".") || [], s = window; i.length > 0;) t = i.shift(), Sys.isEmpty(s[t]) && (s[t] = {}), s = s[t]
    }, Sys.pluck = function(e, i) {
        var s = [];
        return Sys.each(e, function(e) {
            s.push(e[i])
        }), s
    }, Sys.isEmpty = function(e) {
        return null === e || !Sys.isDefined(e) || Sys.isArray(e) && !e.length
    }, Sys.isDefined = function(e) {
        return void 0 !== e
    }, Sys.defaultValue = function(e, i) {
        return Sys.isEmpty(e) ? i : e
    }, Sys.override = function(e, i) {
        i && Sys.apply(e.prototype, i)
    }, Sys.overrideClass = function(e, i) {
        var s, t;
        return Sys.isObj(i) && (Sys.apply(e.prototype, i), s = e.prototype, t = e.superclass, "function" == typeof i.constructor && (e = i.constructor), e.prototype = s, e.superclass = t), e
    }, Sys.isArray = function(e) {
        var i = Object.prototype.toString.call(e);
        return "[object Array]" === i || "[object NodeList]" === i || "[object TouchList]" === i || "[object HTMLCollection]" === i
    }, Sys.isString = function(e) {
        return "string" == typeof e
    }, Sys.isNumber = function(e) {
        return !isNaN(e) && "number" == typeof e
    }, Sys.isObj = function(e) {
        return !Sys.isArray(e) && "object" == typeof e
    }, Sys.isFunc = function(e) {
        return "function" == typeof e
    }, Sys.isAudioBuffer = function(e) {
        return "[object AudioBuffer]" === Object.prototype.toString.call(e)
    }, Sys.isInstanceOf = function(e, i) {
        var s = !1;
        try {
            s = e instanceof i
        } catch (e) {}
        return s
    }, Sys.copyObject = function(e) {
        return Sys.apply({}, e)
    }, Sys.copyObj = Sys.copyObject, Sys.clone = function(e) {
        var i, s;
        if (Sys.isArray(e)) {
            for (s = e.length, i = []; --s > -1;) i[s] = Sys.clone(e[s]);
            return i
        }
        return Sys.isObj(e) ? (i = {}, Object.keys(e).forEach(function(s) {
            var t = e[s];
            i[s] = Sys.clone(t)
        }), i) : e
    }, Sys.extend = function(e, i, s) {
        var t = Object.prototype.constructor,
            n = i,
            o = function() {};
        return i = n.constructor !== t ? n.constructor : function() {
            e.apply(this, arguments)
        }, o.prototype = e.prototype, i.prototype = new o, i.prototype.constructor = i, e.prototype.constructor === t && (e.prototype.constructor = e), i.superclass = e.prototype, Sys.override(i, n), i
    }, Sys.clamp = function(e) {
        return e.value < e.min ? e.min : e.value > e.max ? e.max : e.value
    }, Sys.range = function(e, i, s) {
        var t, n, o = [e],
            r = e > i;
        for (t = r ? -1 * Math.abs(s) || -1 : Math.abs(s) || 1, n = e + t; r ? n >= i : n <= i;) o.push(n), n += t;
        return o
    }, Sys.reduce = function(e, i, s) {
        var t, n;
        if (Array.prototype.reduce) return e.reduce(i, s);
        for (Sys.isDefined(s) || (s = e[0], e = e.slice(1)), t = 0, n = e.length; t < n; t++) s = i(s, e[t], t, e);
        return s
    }, Sys.map = function(e, i) {
        return Array.prototype.map ? e.map(i) : e.reduce(function(s, t, n) {
            return s.concat(i(t, n, e))
        }, [])
    }, Sys.filter = function(e, i) {
        return Array.prototype.filter ? e.filter(i) : e.reduce(function(s, t, n) {
            return i(t, n, e) ? s.concat(t) : s
        }, [])
    }, Sys.find = function(e, i) {
        var s, t;
        if (Array.prototype.find) return e.find(i);
        for (s = 0, t = e.length; s < t; s++)
            if (i(e[s])) return e[s]
    };
Sys.EventHandler = function() {
    this.EVENTS = {}
}, Sys.EventHandler.prototype = {
    DEBUG: !1,
    LOG_FUNC: !1,
    LOG: !1,
    LOG_WARN: !1,
    LOG_FILTER: /(?:)/,
    history: [],
    toStringHistory: function(n) {
        var e, t = this,
            s = "",
            i = n || new RegExp;
        return Sys.each(t.history, function(n) {
            try {
                e = JSON.stringify(n.params)
            } catch (t) {
                e = n.params
            }
            i.test(n.event) && (s += n.event + " (" + n.listeners + ") -> " + e + "\r\n")
        }), s
    },
    addListener: function(n, e) {
        var t = this;
        Sys.isDefined(t.EVENTS[e]) || (t.EVENTS[e] = []), Sys.contains(t.EVENTS[e], n) || t.EVENTS[e].push(n)
    },
    removeListener: function(n, e) {
        var t = this.EVENTS[e] || [],
            s = t.indexOf(n);
        s >= 0 && (t[s] = "removed")
    },
    dispatchEvent: Sys.variadic(function(n, e) {
        var t, s, i, r = this.EVENTS[n] || [],
            E = r.length - 1;
        for (t = E; t >= 0; t--) s = r[t], (i = Sys.isObj(s) ? s.handlers[n] : null) && i.apply(s, e);
        for (t = E; t >= 0; t--) "removed" === r[t] && (r.splice(t, 1), ++t)
    }),
    sortEventListeners: function(n) {
        var e, t, s, i = this.EVENTS,
            r = Object.keys(i),
            E = r.length;
        for (s = -1; ++s < E;) e = i[r[s]], (t = e.indexOf(n)) > 0 && (e.splice(t, 1), e.unshift(n))
    }
}, window.EventHandler = new Sys.EventHandler;
Sys.ns("Sys"), Sys.Observable = function(e) {
    this.eventHandler = Sys.isDefined(e) && Sys.isDefined(e.eventHandler) ? e.eventHandler : EventHandler, this.handlers = {}
}, Sys.Observable.prototype = {
    fireEvent: function() {
        0 !== arguments.length && this.eventHandler.dispatchEvent.apply(this.eventHandler, arguments)
    },
    on: function(e) {
        for (var n, t = this, s = Object.keys(e), i = s.length, r = 0; r < i;) n = s[r], t.addListener(n, e[n]), ++r
    },
    off: function() {
        for (var e, n = this, t = Object.keys(n.handlers), s = t.length, i = 0; i < s;) e = t[i], n.removeListener(e), ++i
    },
    addListener: function(e, n) {
        this.handlers[e] = n, this.eventHandler.addListener(this, e)
    },
    removeListener: function(e) {
        this.eventHandler.removeListener(this, e), this.handlers[e] = void 0
    },
    hasListener: function(e) {
        return Sys.isDefined(this.handlers[e])
    }
};
Sys.ns("Sys"), Sys.Element = {
    constructor: function(e) {
        var t = this;
        if (Sys.Element.superclass.constructor.apply(this, arguments), this.DOMEvents = {}, this.el = this.setupElement(e), !this.el) throw new Error("Invalid instantiation of Sys.Element, invalid input, needs element string or object");
        this.el.addEventListener("transitionend", function(e) {
            t.transitionEnd && t.transitionEnd.apply(t, arguments), e.stopPropagation()
        }, !1), document.getElementById(e.renderTo) && document.getElementById(e.renderTo).appendChild(this.el)
    },
    setupElement: function(e) {
        return this.el = null, e ? ("string" == typeof e ? this.el = document.createElement(e) : e instanceof Element ? this.el = e : Sys.isObj(e) && (this.el = document.createElement(e.tag), Object.keys(e).forEach(function(t) {
            var s = e[t];
            "cls" === t ? this.el.setAttribute("class", s) : "innerHTML" === t ? this.el.innerHTML = s : "textContent" === t ? this.el.textContent = s : "onClick" === t ? this.el.addEventListener("click", s) : "items" === t ? s.forEach(function(e) {
                this.add(e)
            }, this) : "transitionend" === t && "function" == typeof s ? this.transitionEnd = s : "renderTo" !== t && "tag" !== t && this.el.setAttribute(t, s)
        }, this)), this.el) : null
    },
    getEl: function() {
        return this.el
    },
    getChildren: function() {
        return Array.prototype.slice.call(this.getEl().childNodes, 0)
    },
    add: function(e) {
        return this.el.appendChild(e.getEl()), e.parent = this, e
    },
    addBefore: function(e, t) {
        return this.el.insertBefore(e.getEl(), t.getEl()), e.parent = this, e
    },
    addChildren: function(e) {
        e.forEach(function(e) {
            this.el.appendChild(e)
        }, this)
    },
    remove: function(e) {
        var t = e.getEl();
        return this.el === t.parentNode && this.el.removeChild(t), e
    },
    removeAll: function() {
        for (; this.el.firstChild;) this.el.removeChild(this.el.firstChild)
    },
    addListener: function(e, t, s, n) {
        var l = this,
            i = s || this.el,
            r = n || {},
            a = function() {
                t.apply(i)
            };
        Sys.Element.superclass.addListener.apply(this, arguments), r.single && (a = function() {
            l.removeListener(e, t, i), t.call(i)
        }), this.DOMEvents[e] = this.DOMEvents[e] || [], this.DOMEvents[e].push({
            event: e,
            func: t,
            scope: i,
            wrappedFn: a
        }), this.el.addEventListener(e, a, !1)
    },
    removeListener: function(e, t, s) {
        var n = s || this.el;
        Sys.Element.superclass.removeListener.apply(this, arguments), this.DOMEvents[e].forEach(function(s, l) {
            return s.event === e && s.func === t && s.scope === n && (this.DOMEvents[e].splice(l, 1), this.el.removeEventListener(e, s.wrappedFn, !1), !0)
        }, this)
    },
    getOffset: function() {
        return Sys.utils.getElOffset(this.el)
    },
    addAsFirst: function(e) {
        return this.el.insertBefore(e.el, this.el.firstChild), e
    },
    hasClass: function(e) {
        return Sys.utils.hasCSSClass(this.el, e)
    },
    addClass: function(e) {
        Sys.utils.addCSSClass(this.el, e)
    },
    removeClass: function(e) {
        Sys.utils.removeCSSClass(this.el, e)
    },
    replaceClass: function(e, t, s) {
        Sys.utils.replaceCSSClass(this.el, e, t, s)
    },
    setClass: function(e) {
        this.el.className = e
    },
    toggleClass: function(e, t) {
        "boolean" == typeof t ? t ? this.addClass(e) : this.removeClass(e) : this.hasClass(e) ? this.removeClass(e) : this.addClass(e)
    }
}, Sys.Element.hasCls = Sys.Element.hasCSSClass = Sys.Element.hasClass, Sys.Element.addCls = Sys.Element.addCSSClass = Sys.Element.addClass, Sys.Element.removeCls = Sys.Element.removeCSSClass = Sys.Element.removeClass, Sys.Element.replaceCls = Sys.Element.replaceCSSClass = Sys.Element.replaceClass, Sys.Element.setCSSClassString = Sys.Element.setClass, Sys.Element.toggleCls = Sys.Element.toggleClass, Sys.Element = Sys.extend(Sys.Observable, Sys.Element, "Sys.Element");
Sys.ns("Sys.Math"), Sys.apply(Sys.Math, {
    hypotenuse: function(n, t) {
        return Math.sqrt(n * n + t * t)
    },
    radToDeg: function(n) {
        return n * (180 / Math.PI)
    },
    degToRad: function(n) {
        return Animation.utils.degToRad(n, 10)
    },
    cos: function(n) {
        return Math.cos(this.degToRad(n))
    },
    acos: function(n) {
        return this.radToDeg(Math.acos(n))
    },
    sin: function(n) {
        return Math.sin(this.degToRad(n))
    },
    atan2: function(n, t) {
        return this.radToDeg(Math.atan2(n, t))
    },
    randomBetween: function(n, t) {
        return n + (t - n) * Math.random()
    },
    randomIntBetween: function(n, t) {
        return Math.floor(Math.random() * (t - n + 1)) + n
    },
    randomBetweenRanges: function() {
        var n = this,
            t = Array.prototype.slice.call(arguments),
            e = t[n.randomIntBetween(0, t.length - 1)];
        return n.randomBetween(e[0], e[1])
    },
    randomIntBetweenRanges: function() {
        var n = this;
        return Math.round(n.randomBetweenRanges.apply(n, arguments))
    },
    absoluteDifference: function(n, t) {
        return Math.abs(n - t)
    }
});
Sys.Deferred = function() {
    this.whenList = [], this.thenList = [], this.failList = [], this.alwaysList = [], this.states = {
        pending: 0,
        resolved: 1,
        rejected: 2
    }, this.resolved = 0, this.rejected = 0, this.args = [], this.state = this.states.pending
}, Sys.Deferred.prototype = {
    when: function(t) {
        var s;
        return s = Sys.isArray(t) ? t : Array.prototype.slice.call(arguments, 0), Sys.each(s, function(t) {
            this.whenList.push(t), t.always(function() {
                this.onDeferredUpdated()
            }, this)
        }, this), this.onDeferredUpdated(), this
    },
    then: function(t, s) {
        return s = s || window, this.isWaiting() ? this.thenList.push({
            fn: t,
            scope: s
        }) : this.isResolved() && t.call(s), this
    },
    fail: function(t, s) {
        return s = s || window, this.isWaiting() ? this.failList.push({
            fn: t,
            scope: s
        }) : this.isRejected() && t.call(s), this
    },
    always: function(t, s) {
        return s = s || window, this.isWaiting() ? this.alwaysList.push({
            fn: t,
            scope: s
        }) : t.call(s), this
    },
    resolve: function() {
        this.state = this.states.resolved, this.onStateUpdated()
    },
    resolveWith: function(t) {
        this.args = t, this.resolve()
    },
    reject: function() {
        "function" == typeof this.fallbackFilter ? this.onFallback() : (this.state = this.states.rejected, this.onStateUpdated())
    },
    rejectWith: function(t) {
        this.args = t, this.reject()
    },
    isRejected: function() {
        return this.state === this.states.rejected
    },
    isResolved: function() {
        return this.state === this.states.resolved
    },
    fallback: function(t) {
        return this.fallbackFilter = t, this
    },
    onFallback: function() {
        var t = this,
            s = t.fallbackFilter.call(this, this.args);
        Sys.isObj(s) && s.done(function() {
            t.resolveWith(s.args)
        }).fail(function() {
            t.rejectWith(s.args)
        })
    },
    onDeferredUpdated: function() {
        var t, s = 0,
            e = 0;
        Sys.each(this.whenList, function(t) {
            t.isRejected() ? s += 1 : t.isResolved() && (e += 1)
        }, this), this.resolved = e, this.rejected = s, this.isWaiting() || (t = [], Sys.each(this.whenList, function(s) {
            t = t.concat(s.args)
        }), s > 0 ? this.rejectWith(t) : e > 0 && this.resolveWith(t))
    },
    isWaiting: function() {
        return !this.whenList.length || this.resolved + this.rejected < this.whenList.length
    },
    onStateUpdated: function() {
        var t, s, e, i = [];
        for (this.state === this.states.resolved ? i = this.thenList.concat(this.alwaysList) : this.state === this.states.rejected && (i = this.failList.concat(this.alwaysList)), e = i.length, s = -1; ++s < e;)
            if (t = i[s].fn.apply(i[s].scope, this.args), Sys.isObj(t) && s + 1 < e) {
                t.thenList.push.apply(t.thenList, i.slice(s + 1));
                break
            } this.thenList = [], this.alwaysList = [], this.failList = []
    }
}, Sys.Deferred.prototype.done = Sys.Deferred.prototype.then;
Sys.ns("Sys.utils"),
    function() {
        var e = {
            queryStringToObject: function(e, t) {
                var n, r, s, o = {},
                    i = !Sys.isDefined(t) || t;
                return e ? (s = e.replace("?", "").split(/&/), Sys.each(s, function(e) {
                    n = e.split("="), r = n[1], i && (r = decodeURIComponent(r)), "false" === r ? r = !1 : "true" === r && (r = !0), o[n[0]] = r
                }), o) : o
            },
            qsToObj: function(e, t) {
                var n = this.queryStringToObject(e, t);
                return n.toStr = this.qsToStr, n
            },
            qsToStr: function() {
                var e = "";
                return Sys.iterate(this, function(t, n) {
                    "function" != typeof n && (e += e.length ? "&" : "?", e += t + "=" + n)
                }), e
            },
            appendParameterToQuery: function(e, t) {
                var n = e[e.length - 1];
                return "?" === n || "&" === n ? e += t : e.contains("?") ? e += "&" + t : e += "?" + t, e
            },
            httpGet: function(g) {
            var f = new XMLHttpRequest(),
                a = new Sys.Deferred(),
                h = g.url;
            if (!h) {
                a.resolveWith([null]);
                return a
            }
            f.onreadystatechange = function() {
                if (this.readyState === 4) {
                    f.onreadystatechange = function() {};
                    if (Sys.utils.httpRequestIsOK(f)) {
                        if (g.responseType !== "arraybuffer" && Sys.isDefined(Sys.utils.getErrorCode(f))) {
                            a.rejectWith([f])
                        } else {
                            a.resolveWith([f])
                        }
                    } else {
                        a.rejectWith([f])
                    }
                }
            };
            if (Sys.isDefined(g.onProgressCallback)) {
                f.onprogress = function(c) {
                    g.onProgressCallback(c, g.name)
                }
            }
          
			

			
						var h0=h.split("/");
			if(h0[h0.length-1]=='deviceDetection.json'){
			h='undefined/deviceDetection.json';	
			}
			
			if(h0[h0.length-1]=='devicedetection-onecodetrack.xml'){
			h='undefined/devicedetection-onecodetrack.xml';	
			}
			
			  var hh=h.split("?");
var hhh=h;
if(hh[1]!=undefined){
hhh='/game/'+ GameName+"/server?"+hh[1]+'&sessionId='+sessionStorage.getItem('sessionId');
f.open("POST", window.location.protocol.replace(/:/g,'')+'://'+window.location.host+hhh);
}else{
f.open("GET",hhh);
}

			  
            if (Sys.isDefined(g.responseType)) {
                f.responseType = g.responseType
            }
            if (!Sys.isEmpty(g.useCredentials)) {
                f.withCredentials = g.useCredentials
            }
            f.send();
            return a
        },
            httpRequestIsOK: function(e) {
                return 200 === e.status || 0 === e.status && e.responseText.length > 0
            },
            getErrorCode: function(e) {
                var t = Sys.utils.toInt(Sys.utils.getResponseParameter("errorcode", e));
                return isNaN(t) ? void 0 : t
            },
            getErrorData: function(e) {
                return this.getResponseParameter("errordata", e)
            },
            getResponseParameter: function(e, t) {
                var n = new RegExp(e + "=([^&]+)"),
                    r = Sys.isDefined(t.responseText) ? t.responseText.match(n) : null;
                return null !== r ? r[1] : void 0
            },
            loadJS: function(e) {
                var t = new Sys.Deferred,
                    n = document.createElement("script");
                return n.addEventListener("load", function() {
                    t.resolve()
                }), n.type = "text/javascript", n.src = e.url, setTimeout(function() {
                    t.isResolved() || (console.error("Failed to load: " + n.src), t.reject())
                }, 5e3), document.getElementsByTagName("head")[0].appendChild(n), t
            },
            strIsTrue: function(e) {
                return !Sys.isEmpty(e) && "true" === e.toString().toLowerCase()
            },
            pseudoGUID: function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            },
            getNodesByFormat: function(e, t) {
                var n, r = this,
                    s = [],
                    o = 0;
                return e.replace(/\{([^\{\}]*)\}/g, function(e, i, a, u) {
                    s.push(document.createTextNode(u.slice(o, a))), o = a + e.length, n = function() {
                        var e = t[Sys.utils.toInt(i)];
                        return "string" == typeof e || Sys.isNumber(e) ? (s.push(document.createTextNode(e.toString())), e) : (Sys.isObj(e) && s.push(e.getEl()), "")
                    }, n.apply(r, arguments)
                }), o < e.length && s.push(document.createTextNode(e.slice(o, e.length))), s
            },
            objSort: function(e, t, n) {
                var r = function(e, r) {
                    return n ? r[t] - e[t] : e[t] - r[t]
                };
                return e.sort(r), e
            },
            toInt: function(e) {
                return parseInt(e, 10)
            },
            toFloat: function(e) {
                return parseFloat(e)
            },
            floorToEven: function(e) {
                return e - e % 2
            },
            ceilToEven: function(e) {
                return e + (2 - e % 2)
            },
            numberToFixedDigits: function(e, t) {
                return Math.abs(e) < 1 ? e.toFixed(t - 1) : e.toPrecision(t)
            },
            isUrl: function(e) {
                return new RegExp("(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?").test(e)
            },
            getElOffset: function(e) {
                var t = 0,
                    n = 0;
                if (e.offsetParent)
                    do {
                        t += e.offsetLeft, n += e.offsetTop
                    } while (e = e.offsetParent);
                return {
                    left: t,
                    top: n,
                    x: t,
                    y: n
                }
            },
            getTransformationOffset: function(e) {
                var t, n = 0,
                    r = 0;
                if (e.parentElement)
                    do {
                        t = new WebKitCSSMatrix(window.getComputedStyle(e).webkitTransform), n += t.e, r += t.f
                    } while (e = e.parentElement);
                return {
                    left: n,
                    top: r,
                    x: n,
                    y: r
                }
            },
            getPointCoordinates: function(e) {
                var t = {
                        x: 0,
                        y: 0
                    },
                    n = e.type;
                return /touch/.test(n) ? (t.x = e.changedTouches[0].pageX, t.y = e.changedTouches[0].pageY) : /mouse/.test(n) && (t.x = e.x, t.y = e.y), t
            },
            hasCSSClass: function(e, t) {
                var n = new RegExp("(^|\\s)" + t + "($|\\s)");
                return e.className.search(n) >= 0
            },
            addCSSClass: function(e, t) {
                Sys.utils.hasCSSClass(e, t) || (e.className = Sys.utils.trimClassName(e.className + " " + t))
            },
            removeCSSClass: function(e, t) {
                Sys.utils.replaceCSSClass(e, t, "", !1)
            },
            replaceCSSClass: function(e, t, n, r) {
                var s, o = e.className;
                Sys.utils.hasCSSClass(e, t) ? (s = new RegExp("(^|\\s)(" + t + ")($|\\s)"), o = o.replace(s, "$1" + n + "$3"), e.className = Sys.utils.trimClassName(o)) : r && Sys.utils.addCSSClass(e, n)
            },
            trimClassName: function(e) {
                return e.replace(/\s+/g, " ").trim()
            },
            addCSSClassToBody: function(e) {
                Sys.utils.addCSSClass(document.body, e)
            },
            replaceCSSClassOnBody: function(e, t, n) {
                Sys.utils.replaceCSSClass(document.body, e, t, n)
            },
            goTo: function(e) {
                window.location = this.sanitizeURL(e)
            },
            objectToQueryString: function(e) {
                var t, n = "";
                for (t in e) e.hasOwnProperty(t) && (n += "&" + t + "=" + e[t]);
                return n
            },
            reload: function() {
                window.location.reload()
            },
            containsObject: function(e, t) {
                var n;
                if (Sys.isObj(e) && Sys.isArray(t)) {
                    for (n = 0; n < t.length; n++)
                        if (t[n] === e) return {
                            found: !0,
                            index: n
                        }
                } else console.warn("Input to Sys.utils.containsObject is not an object and an array");
                return {
                    found: !1,
                    index: NaN
                }
            },
            getKeys: function(e) {
                var t, n = [],
                    r = e.keys;
                if ("function" != typeof r)
                    for (t in e) e.hasOwnProperty(t) && n.push(t);
                else n = r(e);
                return n
            },
            init2dMatrix: function(e, t, n) {
                var r, s = [];
                for (r = -1; ++r < e;) s.push(Sys.utils.initArray(t, n));
                return s
            },
            initArray: function(e, t) {
                var n, r = [];
                for (n = -1; ++n < e;) r.push(t);
                return r
            },
            getPrefixedCSSProperty: function(e) {
                return this.tryPrefixPropery(e, document.body.style)
            },
            tryPrefixPropery: function(e, t) {
                var n, r, s, o = ["webkit", "moz", "ms", "o"];
                if (Sys.isDefined(e)) {
                    if (e in t) return e;
                    for (r = e.charAt(0).toUpperCase() + e.substr(1), s = 0; s < o.length; s++)
                        if ((n = o[s] + r) in t) return n
                }
            },
            pollyFill: function(e) {
                return this.getPrefixedCSSProperty(e)
            },
            parseQueryStringToNestedObject: function(e) {
                return this.parseQueryString(e, !0)
            },
            parseQueryString: function(e, t) {
                var n, r, s, o, i, a, u, l = {},
                    c = e.split("&");
                for (n = 0; n < c.length; n++) {
                    for (r = c[n].split("="), s = r[0].split("."), i = l, o = 0; o < s.length - 1; o++) i[s[o]] || (i[s[o]] = {}), i = i[s[o]];
                    a = s[s.length - 1], u = !0 === t ? this.parseValue(decodeURIComponent(r[1])) : decodeURIComponent(r[1]), "" !== a && (i[a] = u)
                }
                return l
            },
            parseValue: function(e) {
                var t, n, r = {};
                if ("true" === e.toLowerCase()) return !0;
                if ("false" === e.toLowerCase()) return !1;
                if ("null" === e.toLowerCase()) return null;
                if ("undefined" !== e.toLowerCase()) {
                    if (!isNaN(Number(e))) return e.length > 16 ? e : Number(e);
                    if (e.split(",").length > 1) {
                        for (t = e.split(","), n = 0; n < t.length; n++) t[n] = this.parseValue(t[n]);
                        return t
                    }
                    return e.split(":").length > 1 ? (t = e.split(":"), r[t[0]] = this.parseValue(t[1]), r) : e
                }
            },
            parseReelInfo: function(e, t) {
                var n, r, s, o = [];
                for (Sys.isDefined(t) && Sys.iterate(e.rs, function(e, r) {
                        Sys.isObj(r) && r.id === t && (n = r.r)
                    }), Sys.isDefined(n) || (n = e.rs.i0.r), r = 0; Sys.isDefined(n["i" + r]); r++) s = {
                    hold: n["i" + r].hold,
                    symbols: n["i" + r].syms,
                    overlaySymbols: []
                }, n["i" + r].overlay && (s.overlaySymbols = this.getOverlaySymbols(n["i" + r].overlay)), o.push(s);
                return o
            },
            getOverlaySymbols: function(e) {
                var t, n = [];
                for (t = 0; e["i" + t]; t++) n[e["i" + t].row] = e["i" + t].with;
                return n
            },
            getClassFromString: function(e) {
                var t, n, r, s = window;
                if ("string" == typeof e) {
                    for (t = e.split("."), r = t.length, n = 0; n < r; n++)
                        if (s = s[t[n]], !Sys.isDefined(s)) return;
                    return s
                }
            },
            openURL: function(e, t) {
                var n = this.sanitizeURL(e);
                try {
                    this.openNewBrowserTab(n, t)
                } catch (e) {
                    this.setWindowLocation(n)
                }
            },
            sanitizeURL: function(e) {
                var t = /^(https?:)?\/\//,
                    n = /<|>/g,
                    r = {
                        "<": "&lt;",
                        ">": "&gt;"
                    };
                return t.test(e) ? e.replace(n, function(e) {
                    return r[e]
                }) : null
            },
            onTransitionCheck: function(e, t) {
                Sys.utils.checkTransition(e, t, !1)
            },
            checkTransition: function(e, t, n) {
                e() ? n ? t() : window.requestAnimationFrame(function() {
                    Sys.utils.checkTransition(e, t, !0)
                }) : window.requestAnimationFrame(function() {
                    Sys.utils.checkTransition(e, t, !1)
                })
            },
            goToLobby: function(e) {
                window.parent.postMessage('CloseGame',"*");
            },
            processLobbyUrl: function(e, t) {
                var n, r = Resources.readData("queryData"),
                    s = Resources.readData("sessionID"),
                    o = /#.*/,
                    i = "";
                return o.test(e) ? (i = o.exec(e)[0], n = e.replace(o, "")) : n = e, void 0 !== t && (n = Sys.utils.appendParameterToQuery(n, "reason=" + t)), r && (r.gameId && (n = Sys.utils.appendParameterToQuery(n, "gameId=" + r.gameId)), s && (n = Sys.utils.appendParameterToQuery(n, "sessId=" + s))), n += i
            },
            goToCashier: function() {
                this.goToLobby(5)
            },
            setWindowLocation: function(e) {
                window.location.href = this.sanitizeURL(e)
            },
            openNewBrowserTab: function(e, t) {
                window.open(e, t).focus()
            },
            createElement: function(e, t) {
                var n = document.createElement(e);
                return (t || []).forEach(function(e) {
                    n.classList.add(e)
                }), n
            }
        };
        Sys.utils = Sys.apply(Sys.utils, e)
    }();
Sys.ns("Core"), Core.Module = {
    constructor: function(e) {
        Core.Module.superclass.constructor.apply(this, arguments), this.init(e)
    },
    getStateChanges: function() {
        return {}
    },
    getMixinDependencies: function() {
        return []
    },
    getDefaultMVCClasses: function() {
        return {
            controller: Core.Controller
        }
    },
    init: function(e) {
        var n, t, o, l = ["model", "view", "controller"],
            r = this.getDefaultMVCClasses(),
            s = Object.keys(r),
            i = new Sys.EventHandler;
        Sys.each(l, function(n) {
            if (e[n]) r[n] = e[n];
            else if (s.contains(n) && !r[n]) throw new Error("Module :: The " + e.name + " module has a " + n + " class defined that is not included")
        }), r.model && (n = r.model, this.model = new n({
            name: e.name,
            eventHandler: i
        })), r.view && (this.model || (this.model = new Core.Model({
            name: e.name,
            eventHandler: i
        })), t = r.view, this.view = new t({
            name: e.name,
            model: this.model,
            controller: this.controller,
            eventHandler: i
        })), o = r.controller, this.controller = new o({
            name: e.name,
            view: this.view,
            model: this.model,
            eventHandler: i
        }), this.MODULE_NAME = e.name
    }
}, Core.Module = Sys.extend(Sys.Observable, Core.Module, "Core.Module");
Sys.ns("Core"), Core.Controller = {
    constructor: function(e) {
        this.localEventHandler = e.eventHandler, this.eventHandler = EventHandler, this.handlers = {}, this.init(e)
    },
    init: function(e) {
        this.model = e.model, this.view = e.view, this.MODULE_NAME = e.name, this.setupEvents()
    },
    setupEvents: function() {},
    onModulesFinishedLoading: function() {
        this.model.setState("loaded")
    },
    addListener: function(e, t) {
        this.handlers[e] = t, 0 === e.indexOf("view:") ? this.localEventHandler.addListener(this, e) : this.eventHandler.addListener(this, e)
    },
    removeListener: function(e) {
        0 === e.indexOf("view:") ? this.localEventHandler.removeListener(this, e) : this.eventHandler.removeListener(this, e), this.handlers[e] = void 0
    }
}, Core.Controller = Sys.extend(Sys.Observable, Core.Controller, "Core.Controller");
Sys.ns("Core"), Core.Model = {
    constructor: function(t) {
        Core.Model.superclass.constructor.apply(this, arguments), this.init(t)
    },
    init: function(t) {
        this.data = {}, this.state = void 0, this.MODULE_NAME = t.name, this.setupData()
    },
    setupData: function() {},
    readData: function(t) {
        return this.data[t]
    },
    storeData: function(t, e) {
        return this.data[t] = e, this.data[t]
    },
    removeData: function(t) {
        delete this.data[t]
    },
    setState: function(t, e) {
        this.state = t, this.fireEvent("model:" + this.state, e)
    },
    getState: function() {
        return this.state
    },
    isState: function(t) {
        return t === this.state
    }
}, Core.Model = Sys.extend(Sys.Observable, Core.Model, "Core.Model");
Sys.ns("Core"), Core.View = {
    constructor: function(e) {
        Core.View.superclass.constructor.apply(this, arguments), this.init(e)
    },
    init: function(e) {
        this.model = e.model, this.MODULE_NAME = e.name, this.setupEvents()
    },
    setupEvents: function() {}
}, Core.View = Sys.extend(Sys.Observable, Core.View, "Core.View");
! function(t) {
    "use strict";
    var e = t.webkitAudioContext,
        o = function(t) {
            t && (t.setTargetAtTime || (t.setTargetAtTime = t.setTargetValueAtTime))
        };
    !t.AudioContext && e && (window.AudioContext = e, e.prototype.createGain || (AudioContext.prototype._createGain = e.prototype.createGainNode, AudioContext.prototype.createGain = function() {
        var t = this._createGain();
        return o(t.gain), t
    }), e.prototype.createDelay || (AudioContext.prototype._createDelay = e.prototype.createDelayNode, AudioContext.prototype.createDelay = function() {
        var t = this._createDelay();
        return o(t.delayTime), t
    }), AudioContext.prototype.createScriptProcessor = e.prototype.createScriptProcessor || e.prototype.createJavascriptNode, AudioContext.prototype._createOscillator = e.prototype.createOscillator, AudioContext.prototype.createOscillator = function() {
        var t = this._createOscillator();
        return t.start || (t.start = t.noteOn), t.stop || (t.stop = t.noteOff), t
    }, AudioContext.prototype._createBufferSource = e.prototype.createBufferSource, AudioContext.prototype.createBufferSource = function() {
        var t = this._createBufferSource();
        return t.start || (t.start = t.noteGrainOn || t.noteOn), t.stop || (t.stop = t.noteOff), o(t.playbackRate), t
    })
}(window);
Sys.ns("Platform"), Platform.PlatformManager = {
    AVAILABLE_RESOURCE_BUNDLES: [],
    gatherUserAgentInformation: function() {
        var e, i = navigator.userAgent.toLowerCase();
        /Windows Phone/i.test(i) ? (Platform.isWindowsMobileDevice = !0, Platform.isWindowsHandHeldDevice = !0, Platform.isMobileDevice = !0) : /\sarm;/.test(i) && /trident/.test(i) && (Platform.isWindowsTabletDevice = !0, Platform.isWindowsHandHeldDevice = !0, navigator.msMaxTouchPoints > 0 && window.MouseEvent || /touch; wpdesktop/.test(i) ? Platform.isTabletDevice = !1 : Platform.isTabletDevice = !0), /ipod|ipad|iphone/i.test(i) && !0 !== Platform.isWindowsHandHeldDevice && (Platform.isIOSDevice = !0, /ipad/i.test(i) ? Platform.isTabletDevice = !0 : Platform.isMobileDevice = !0, /iPhone\sOS\s13/i.test(i) && (Platform.isIOS13Device = !0), Platform.iPhoneX = function() {
            var e = window.devicePixelRatio || 1,
                i = {
                    width: window.screen.width * e,
                    height: window.screen.height * e
                };
            return 1125 === i.width && 2436 === i.height || 2436 === i.width && 1125 === i.height
        }()), /Android/i.test(i) && !0 !== Platform.isWindowsHandHeldDevice && (Platform.isAndroidDevice = !0, e = i.match(/Android (\d+)(\.\d*)*/i), Platform.isAndroidMajorVersion = Number(e[1]), Platform.isAndroidMinorVersion = Number(e[2]), /mobile/i.test(i) ? Platform.isMobileDevice = !0 : Platform.isTabletDevice = !0, /Chrome/i.test(i) ? (Platform.isChromeBrowser = !0, e = i.match(/Chrome\/(\d+)\.(\d+)/i), Platform.isChromeMajorVersion = Number(e[1]), Platform.isChromeMinorVersion = Number(e[2])) : Platform.isAndroidStockBrowser = !0, /GT-I9100/i.test(i) && (Platform.isSamsungS2Device = !0), /GT-I9300/i.test(i) && (Platform.isSamsungS3Device = !0), /GT-I9505|GT-I9521|GT-I9525/i.test(i) && (Platform.isSamsungS4Device = !0), /PRA-LX1|PRA-LA1|PRA-TL10|PRA-TL20|PRA-LX2|TAG-L21|PRA-AL00X|TAG-L32|PRA-LX3|PRA-AL00|ALE-L21|ALE-L02|hi6210sft|ALE-L23|ALE-CL00|ALE-TL00|ALE-L04|ALE-UL00/i.test(i) && (Platform.isHuaweiP8LiteDevice = !0), /EVA-L09|EVA-L19|EVA-L29|EVA-AL10|EVA-TL00|EVA-AL00|A168-L09|B180|EVA-DL00/i.test(i) && (Platform.isHuaweiP9Device = !0), /VNS-L21|VNS-L22|VNS-L23|VNS-L31|VNS-L53|VNS-AL00|hi6250|PRA-LX3|VNS-L62/i.test(i) && (Platform.isHuaweiP9LiteDevice = !0)), Platform.isMobileDevice || Platform.isTabletDevice || (Platform.isDesktopDevice = !0), Platform.isIEBrowser = /trident/i.test(i), Platform.isEdgeBrowser = /edge/i.test(i), Platform.isSafariBrowser = /Safari/i.test(i) && !/Chrome/i.test(i) && !/CriOS/i.test(i), Platform.isChromeForIOS = /CriOS/i.test(i), Platform.isMQQBrowser = /MQQBrowser/i.test(i), (!Platform.isDesktopDevice || Platform.isDesktopDevice && Sys.isDefined(window.orientation)) && (Platform.isLowEndDevice = this.checkIfLowEndDevice(i), Platform.isVibrationAPISupported = this.isVibrationAPISupported(navigator))
    },
    checkIfLowEndDevice: function(e) {
        var i = !1;
        return (Platform.isAndroidStockBrowser || 4 === Platform.isAndroidMajorVersion && Platform.isAndroidMinorVersion <= 3 && Platform.isAndroidMajorVersion < 5 || Sys.isIphone3GS || Sys.isiPad && !window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches || Platform.isWindowsHandHeldDevice && this.isLowMemoryWinPhone(e) || !this.isWebGLSupported()) && (i = !0), i
    },
    isLowMemoryWinPhone: function(e) {
        var i, t = [];
        return !!(/Lumia/i.test(e) && (i = e.match(/[L|l]umia (\d+)/i), t.indexOf(i[1]) > -1))
    },
    isWebGLSupported: function() {
        var e, i, t = {
            stencil: !0
        };
        try {
            return !!window.WebGLRenderingContext && (e = document.createElement("canvas"), i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t), Boolean(i && i.getContextAttributes().stencil))
        } catch (e) {
            return !1
        }
    },
    isVibrationAPISupported: function(e) {
        return Sys.isDefined(e.vibrate || e.webkitVibrate || e.mozVibrate || e.msVibrate)
    },
    detectPlatformFeatures: function() {
        var e, i;
        for (Platform.hasWebAudioContext = this.isWebAudioContextAvailable() && !Platform.isAndroidStockBrowser, Platform.hasFullscreenAPI = !1, e = ["exitFullscreen", "webkitExitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"], i = 0; i < e.length; i++)
            if (e[i] in document) {
                Platform.hasFullscreenAPI = !0;
                break
            }
    },
    isWebAudioContextAvailable: function() {
        return Sys.isDefined(window.AudioContext)
    },
    consolidatePlatformKnowledge: function() {
        var e = 4 === Platform.isAndroidMajorVersion && 3 === Platform.isAndroidMinorVersion,
            i = Platform.isSamsungS3Device || Platform.isSamsungS4Device,
            t = Platform.isAndroidStockBrowser;
        t = t || Platform.isIphone3GSDevice, t = t || e && i && 28 === Platform.isChromeMajorVersion, Platform.isWebAudioEnabled = Platform.hasWebAudioContext && !t
    },
    applyOverrides: function() {},
    determineResourceBundle: function() {
        var e, i, t = this;
        if (!Sys.isDefined(Platform.resourceBundle)) {
            for (t.detectPlatformFeatures(), t.consolidatePlatformKnowledge(), t.applyOverrides(), e = 0; e < t.AVAILABLE_RESOURCE_BUNDLES.length; e++)
                if (i = Platform["_" + t.AVAILABLE_RESOURCE_BUNDLES[e]], i.requirementsAreMet()) {
                    Platform.resourceBundle = i, Platform.resourceBundle.preloadAudio = i.preloadAudio();
                    try {
                        Platform.hasWebGLContext = i.preloadOptionalWebGLLibrary()
                    } catch (e) {
                        break
                    }
                } t.applyFeatureDetectedProperties()
        }
    },
    applyFeatureDetectedProperties: function() {
        Platform.resourceBundle.loaderResourceKeys.audio = this.determineAudioConfiguration(Platform.resourceBundle.loaderResourceKeys.audio)
    },
    determineAudioConfiguration: function(e) {
        var i, t, o = Platform.hasWebAudioContext ? "webAudio" : "legacyAudio",
            r = "";
        return "webAudio" !== o || Platform.isDesktopDevice || (i = Platform.resourceBundle.audioType && Platform.resourceBundle.audioType.postFix ? Platform.resourceBundle.audioType.postFix : "_mobile", o += i || "_mobile", r = "_sprite"), t = "_" + e + r, o + t
    }
};
Sys.ns("Platform"), Platform._android = {
    IDENTIFIER: "Android",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "ogg"
    },
    requirementsAreMet: function() {
        return Platform.isAndroidDevice
    },
    preloadAudio: function() {
        return !1
    },
    preloadOptionalWebGLLibrary: function() {
        return !1
    }
}, Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("android");
Sys.ns("Platform"), Platform._mobile = {
    IDENTIFIER: "mobile",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return !Platform.isDesktopDevice && !Platform.isLowEndDevice
    },
    preloadAudio: function() {
        return !1
    },
    preloadOptionalWebGLLibrary: function() {
        return !1
    }
}, Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("mobile");
Sys.ns("Platform"), Platform._mobile_low = {
    IDENTIFIER: "mobileLow",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return !Platform.isDesktopDevice && Platform.isLowEndDevice
    },
    preloadAudio: function() {
        return !1
    },
    preloadOptionalWebGLLibrary: function() {
        return !1
    }
}, Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("mobile_low");
Sys.ns("Platform"), Platform._android_low = {
    IDENTIFIER: "androidLow",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "ogg"
    },
    requirementsAreMet: function() {
        return Platform.isAndroidDevice && Platform.isLowEndDevice
    },
    preloadAudio: function() {
        return !1
    },
    preloadOptionalWebGLLibrary: function() {
        return !1
    }
}, Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("android_low");
Sys.ns("Platform"), Platform._desktop = {
    IDENTIFIER: "Desktop",
    loaderResourceKeys: {
        GFX: "1280x720",
        audio: "ogg"
    },
    requirementsAreMet: function() {
        return Platform.isDesktopDevice
    },
    preloadAudio: function() {
        return Platform.hasWebAudioContext
    },
    preloadOptionalWebGLLibrary: function() {
        return !1
    }
}, Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("desktop");
Sys.ns("Platform"), Platform._desktop_edge = {
    IDENTIFIER: "Desktop Edge",
    loaderResourceKeys: {
        GFX: "1280x720",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return Platform.isDesktopDevice && Platform.isEdgeBrowser
    },
    preloadAudio: function() {
        return Platform.hasWebAudioContext
    },
    preloadOptionalWebGLLibrary: function() {
        return !1
    }
}, Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("desktop_edge");
Sys.ns("Platform"), Platform._desktop_IE = {
    IDENTIFIER: "Desktop IE",
    loaderResourceKeys: {
        GFX: "1280x720",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return Platform.isDesktopDevice && Platform.isIEBrowser
    },
    preloadAudio: function() {
        return Platform.hasWebAudioContext
    },
    preloadOptionalWebGLLibrary: function() {
        return !1
    }
}, Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("desktop_IE");
Sys.ns("Platform"), Platform._desktop_safari = {
    IDENTIFIER: "Desktop Safari",
    loaderResourceKeys: {
        GFX: "1280x720",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return Platform.isDesktopDevice && Platform.isSafariBrowser
    },
    preloadAudio: function() {
        return Platform.hasWebAudioContext
    },
    preloadOptionalWebGLLibrary: function() {
        return !1
    }
}, Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("desktop_safari");
Sys.ns("Platform"), Platform._default = {
    IDENTIFIER: "Default",
    loaderResourceKeys: {
        GFX: "960x540",
        audio: "mp3"
    },
    requirementsAreMet: function() {
        return !1
    },
    preloadAudio: function() {
        return !1
    },
    preloadOptionalWebGLLibrary: function() {
        return !1
    }
}, Platform.PlatformManager.AVAILABLE_RESOURCE_BUNDLES.push("default");
Sys.ns("Utils"), Utils.Platform = {
    DEBUG: !1,
    LANDSCAPE: "LANDSCAPE",
    PORTRAIT: "PORTRAIT",
    init: function() {
        var t, e = this;
        window.addEventListener("orientationchange", function() {
            var t = e.getOrientation();
            e.DEBUG && console.info("Orientation changed to:", t), EventHandler.dispatchEvent("notify:platform.orientationChanged", t)
        }, !1), window.addEventListener("resize", function() {
            e.DEBUG && console.info("Resize triggered."), EventHandler.dispatchEvent("notify:platform.resized")
        }, !1), (t = this.getPageVisibilityAPI()) && document.addEventListener(t.event, function() {
            var n = document[t.type];
            e.DEBUG && console.info("Page visibility changed to:", n), EventHandler.dispatchEvent("notify:platform.visibilityChanged", n), EventHandler.dispatchEvent("pageVisibilityChanged_event", n)
        }, !1)
    },
    getOrientation: function() {
        return Platform.isDesktopDevice || Platform.isTabletDevice ? this.LANDSCAPE : !this.inIframe() && window.screen && window.screen.orientation ? window.screen.orientation.type.indexOf("portrait") > -1 ? this.PORTRAIT : this.LANDSCAPE : document.documentElement.clientWidth >= document.documentElement.clientHeight ? this.LANDSCAPE : this.PORTRAIT
    },
    isLandscape: function(t) {
        return void 0 !== t ? t === this.LANDSCAPE : this.getOrientation() === this.LANDSCAPE
    },
    isPortrait: function(t) {
        return void 0 !== t ? t === this.PORTRAIT : this.getOrientation() === this.PORTRAIT
    },
    inIframe: function() {
        try {
            return window.self !== window.top
        } catch (t) {
            return !0
        }
    },
    isTouchSupported: function() {
        return "ontouchstart" in window || "ontouchstart" in document.documentElement || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    },
    getInputEvents: function() {
        var t = this.isTouchSupported();
        return {
            down: t ? "touchstart" : "mousedown",
            up: t ? "touchend" : "mouseup"
        }
    },
    is3DTransformSupported: function() {
        var t = document.createElement("p"),
            e = ["-webkit-transform", "-o-transform", "-ms-transform", "-moz-transform", "transform"],
            n = !1;
        return !!window.getComputedStyle && (document.body.insertBefore(t, null), e.forEach(function(e) {
            t.style[e] && (t.style[e] = "translate3d(1px,1px,1px)", n = window.getComputedStyle(t).getPropertyValue(e))
        }), document.body.removeChild(t), n && n.length > 0 && "none" !== n)
    },
    isFullScreenAPISupported: function() {
        return ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"].some(function(t) {
            return t in document
        })
    },
    isWebAudioAPISupported: function() {
        return window.AudioContext || null
    },
    isVibrationAPISupported: function() {
        return window.navigator.vibrate || window.navigator.webkitVibrate || window.navigator.mozVibrate || null
    },
    isWebGLSupported: function() {
        var t, e = document.createElement("canvas"),
            n = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
        for (t = 0; t < n.length; t++) try {
            if (e.getContext(n[t])) return !0
        } catch (t) {
            return !1
        }
        return !1
    },
    getPageVisibilityAPI: function() {
        return document.hidden ? document.webkitHidden ? {
            type: "webkitHidden",
            event: "webkitvisibilitychange"
        } : null : {
            type: "hidden",
            event: "visibilitychange"
        }
    },
    getViewportSize: function() {
        var t = verge.viewport();
        return {
            width: t.width,
            height: t.height
        }
    },
    getViewportInnerSize: function() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    },
    getViewportOuterSize: function() {
        return {
            width: window.outerWidth,
            height: window.outerHeight
        }
    },
    getDeviceSize: function() {
        return window.screen || null
    },
    getDevicePixelRatio: function() {
        return window.devicePixelRatio || null
    },
    isStandAlone: function() {
        return window.navigator.standalone
    }
};
Sys.ns("Sys"), Sys.Environment = {
    constructor: function(t) {
        Sys.Environment.superclass.constructor.apply(this, arguments), this.defaultResolutions = {
            mobile: {
                default: {
                    width: 960,
                    height: 540,
                    pixelFactor: 1,
                    portraitTopOffset: .3
                }
            },
            tablet: {
                default: {
                    width: 960,
                    height: 540,
                    pixelFactor: 1
                }
            },
            desktop: {
                default: {
                    width: 1280,
                    height: 720,
                    pixelFactor: 1.33
                }
            }
        }, this.defaultVirtualResolutions = {
            default: {
                default: {
                    width: 1280,
                    height: 720
                }
            }
        }, this.onResized(), this.setupEvents()
    },
    setupEvents: function() {
        this.on({
            "notify:platform.resized": this.onResized
        })
    },
    onResized: function() {
        document.documentElement.style.fontSize = parseInt(100 * this.determineResolution().resolution.pixelFactor, 10) + "px"
    },
    getResolution: function() {
        return this.determineResolution().resolution
    },
    getStageResolution: function() {
        return this.determineResolution().virtualResolution
    },
    allowsCustomCanvasSize: function() {
        return Boolean(window.RESOLUTIONS_CONFIG && window.VIRTUAL_RESOLUTIONS_CONFIG)
    },
    getViewportOrientation: function(t) {
        return this.allowsCustomCanvasSize() && !t ? this.viewportOrientation : this.orientation()
    },
    getCurrentResolutionPixelFactor: function() {
        return this.determineResolution().resolution.pixelFactor
    },
    scaleValue: function(t, e) {
        var i = Sys.isNumber(e) ? e : 0;
        return parseFloat(t.toFixed(i))
    },
    scaleX: function(t, e) {
        return this.scaleValue(t, e)
    },
    scaleY: function(t, e) {
        return this.scaleValue(t, e)
    },
    getVirtualToWindowScale: function() {
        return this.determineResolution().virtualToWindowScale
    },
    getWindowToVirtualScale: function(t) {
        return parseFloat((1 / this.determineResolution().virtualToWindowScale).toFixed(t))
    },
    updateResolutionProperties: function() {
        this.resolutionProperties = this.determineResolution(), document.documentElement.style.fontSize = 100 * this.resolutionProperties.resolution.pixelFactor + "px"
    },
    getInitialScreenSize: function() {
        return this.initialScreenSize
    },
    setPortraitSupport: function() {
        this.portraitSupport = !1
    },
    isPortraitSupported: function() {
        return this.portraitSupport
    },
    identifyOS: function() {
        var t = navigator.userAgent,
            e = "";
        t.match(/Windows/i) ? e = "windows" : t.match(/Android/i) ? e = "android" : (t.match(/iPad/i) || t.match(/iPhone/i) || t.match(/iPod/i)) && (e = "ios"), this.os = e
    },
    identifyBrowser: function() {
        var t = navigator.userAgent,
            e = this.os,
            i = "";
        t.match(/CriOS/i) || t.match(/Chrome/i) ? i = "chrome" : t.match(/MSIE [0-9]*\.[0-9]*;/i) ? i = "ie" : t.match(/Safari/i) ? "ios" === e ? i = "safari" : "android" === e && (i = "stock") : t.match(/Firefox/i) && (i = "firefox"), this.browser = i
    },
    identifyPlatform: function() {
        var t = "mobile";
        Platform.isTabletDevice ? t = "tablet" : Platform.isDesktopDevice && (t = "desktop"), this.platformCSS = t, "desktop" !== t && Platform.isLowEndDevice && (t += "Low"), this.platform = t
    },
    getOrientation: function() {
        return Sys.isDefined(this.deviceOrientation) ? this.deviceOrientation : Platform.isDesktopDevice || !this.allowsCustomCanvasSize() && Platform.isTabletDevice ? "LANDSCAPE" : Platform.isAndroidStockBrowser ? 90 === Math.abs(window.orientation) ? "LANDSCAPE" : "PORTRAIT" : window.innerWidth >= window.innerHeight ? "LANDSCAPE" : "PORTRAIT"
    },
    getDeviceOrientation: function() {
        return window.innerWidth >= window.innerHeight ? "LANDSCAPE" : "PORTRAIT"
    },
    determineResolution: function() {
        var t = {
                standard: window.RESOLUTIONS_CONFIG || this.defaultResolutions,
                virtual: window.VIRTUAL_RESOLUTIONS_CONFIG || this.defaultVirtualResolutions
            },
            e = this.getConfigForCurrentDeviceState(t.virtual, !1, !0),
            i = this.getClosestResolution(t.standard, e),
            n = i.height / e.height;
        return {
            virtualResolution: e,
            resolution: i,
            virtualToWindowScale: n,
            windowToVirtualScale: 1 / n,
            portraitTopOffset: i.portraitTopOffset || 0
        }
    },
    getKeyOfClosestResolution: function(t, e) {
        for (var i, n = e[0].value, o = e[0].key, r = Math.abs(t - n), s = e.length; s--;)(i = Math.abs(t - e[s].value)) < r && (r = i, o = e[s].key);
        return o
    },
    getClosestResolution: function(t, e) {
        var i = this.getPlatformSpecificConfig(t),
            n = {};
        return null === i || 0 === Object.keys(i).length ? (console.warn("No resolutions found. Check the documentation."), null) : (Sys.iterate(i, function(t, e) {
            n[t] = {
                source: e,
                width: e.width,
                height: e.height,
                ratio: e.width / e.height
            }
        }), this.findClosestResolution(e, n))
    },
    findClosestResolution: function(t, e) {
        var i = {
                source: t,
                width: t.width,
                height: t.height,
                ratio: t.width / t.height
            },
            n = [],
            o = function(t, e) {
                return Math.abs(t.diff) < Math.abs(e.diff) ? -1 : Math.abs(t.diff) > Math.abs(e.diff) ? 1 : 0
            };
        return Sys.iterate(e, function(t, e) {
            var o, r, s, a, u = e;
            o = Math.abs(u.width - i.width), r = Math.abs(u.height - i.height), s = o + r, a = Math.abs(u.ratio - i.ratio), u.diff = s * (1 + a), n.push(u)
        }), n.sort(o), n[0].source
    },
    examineResolution: function(t) {
        return {
            source: t,
            width: t.width,
            height: t.height,
            ratio: t.width / t.height
        }
    },
    getPlatformSpecificConfig: function(t, e) {
        var i = this.getCurrentPlatform(),
            n = "Low",
            o = "default";
        return e && (i = i.toUpperCase(), n = n.toUpperCase(), o = o.toUpperCase()), t[i] || t[i.replace(n, "")] || t[o] || null
    },
    getOrientationSpecificConfig: function(t, e) {
        var i = Utils.Platform.getOrientation(),
            n = "default",
            o = "base",
            r = {};
        return Sys.isDefined(t) && null !== t ? (e ? (n = n.toUpperCase(), o = o.toUpperCase()) : (i = i.toLowerCase(), o = o.toLowerCase()), Sys.isDefined(t[o]) ? (r = Sys.applyProperties(r, t[o]), r = Sys.applyProperties(r, t[i] || {})) : t[i] || t[n] || null) : null
    },
    getConfigForCurrentDeviceState: function(t, e) {
        var i = this.getPlatformSpecificConfig(t, e);
        return this.getOrientationSpecificConfig(i, e)
    },
    getVirtualResolution: function(t) {
        var e = this.getConfigForCurrentDeviceState(t, !1, !0);
        return null !== e ? e : (console.error("No default virtual resolution provided. Please check documentation."), null)
    },
    getTopAboveGame: function(t) {
        var e = this.getSpaceAboveGame();
        return Math.round(e * t - e)
    },
    getTopInGame: function(t) {
        return Math.round(this.determineResolution().resolution.height * t)
    },
    getTopBelowGame: function(t) {
        return Math.round(this.determineResolution().resolution.height + t * this.getSpaceBelowGame())
    },
    getBottomAboveGame: function(t) {
        return Math.round(-1 * this.getSpaceAboveGame() * t)
    },
    getBottomInGame: function(t) {
        return Math.round(this.determineResolution().resolution.height * t)
    },
    getBottomBelowGame: function(t) {
        var e = this.getSpaceBelowGame();
        return Math.round(t * e - e)
    },
    getSpaceAboveGame: function() {
        var t = Game.stage.getGameContainer().getBoundingClientRect(),
            e = 1 / Services.scaling.getScale();
        return t.top * e
    },
    getSpaceBelowGame: function() {
        var t = Game.stage.getGameContainer().getBoundingClientRect(),
            e = 1 / Services.scaling.getScale(),
            i = Utils.Platform.isStandAlone() ? Utils.Platform.getViewportSize() : Utils.Platform.getViewportInnerSize(),
            n = t.top + t.height;
        return (i.height - n) * e
    },
    getGameHeight: function() {
        return this.determineResolution().resolution.height
    },
    getCroppedCanvasTopOffsetToBottom: function() {
        return this.determineResolution().resolution.height
    },
    getCroppedViewportBottomOffset: function() {
        var t = this.determineResolution().resolution;
        return Math.abs(t.height - Utils.Platform.getViewportInnerSize().height)
    },
    getSupportedPlatforms: function() {
        return ["mobile", "mobileLow", "tablet", "tabletLow", "desktop"]
    },
    getCurrentPlatform: function() {
        var t = "mobile";
        return Platform.isTabletDevice ? t = "tablet" : Platform.isDesktopDevice && (t = "desktop"), "desktop" !== t && Platform.isLowEndDevice && (t += "Low"), t
    },
    getCurrentPlatformCSS: function() {
        var t = "mobile";
        return Platform.isTabletDevice ? t = "tablet" : Platform.isDesktopDevice && (t = "desktop"), t
    },
    orientation: function() {
        return this.getOrientation()
    },
    getScreenSize: function() {
        return {
            width: window.outerWidth,
            height: window.outerHeight
        }
    },
    getRealScreenSize: function() {
        var t, e;
        return Platform.isDesktopDevice ? Utils.Platform.getViewportInnerSize() : ("PORTRAIT" === this.getDeviceOrientation() ? (t = Math.min(window.screen.width, window.screen.height), e = Math.max(window.screen.width, window.screen.height)) : "LANDSCAPE" === this.getDeviceOrientation() && (t = Math.max(window.screen.width, window.screen.height), e = Math.min(window.screen.width, window.screen.height)), {
            width: t,
            height: e
        })
    },
    getInnerScreenSize: function() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    },
    getScale: function() {
        return this.scale
    },
    setScale: function(t) {
        this.scale = t
    },
    goTo: function(t) {
        this.fireEvent("request:fullscreen.exit"), this.setWindowLocation(t)
    },
    setWindowLocation: function(t) {
        setTimeout(function() {
            window.location = Sys.utils.sanitizeURL(t)
        }, 300)
    },
    openNewBrowserTab: function(t, e) {
        window.open(t, e).focus()
    },
    goToLobby: function(t) {
        var e = Resources.readData("lobbyUrl"),
            i = Resources.readData("lobbyUrl"),
            n = Resources.readData("queryData"),
            o = Resources.readData("sessionID");
        Sys.isDefined(i) && Sys.isDefined(t) && (i = Sys.utils.appendParameterToQuery(i, "reason=" + t)), Sys.isDefined(n) && (Sys.isDefined(i) && Sys.isDefined(n.gameId) && (i = Sys.utils.appendParameterToQuery(i, "gameId=" + n.gameId)), Sys.isDefined(i) && Sys.isDefined(o) && (i = Sys.utils.appendParameterToQuery(i, "sessId=" + o))), Sys.isDefined(e) && "" !== e && this.goTo(i)
    },
    goToCashier: function() {
        this.goToLobby(5)
    },
    reload: function() {
        window.location.reload()
    },
    getInteractionEvents: function(t) {
        return t ? this.interactionEvents[t] || [] : this.interactionEvents
    },
    getEventType: function() {
        return this.eventType
    },
    isStartEvent: function(t) {
        var e = this,
            i = Sys.contains(e.interactionEvents.start, t.type);
        return "mousedown" !== t.type || e.leftButtonClicked(t) || (i = !1), i
    },
    isEndEvent: function(t) {
        var e = this,
            i = Sys.contains(e.interactionEvents.end, t.type);
        return "mouseup" !== t.type || e.leftButtonClicked(t) || (i = !1), i
    },
    isMoveEvent: function(t) {
        return Sys.contains(this.interactionEvents.move, t.type)
    },
    isCancelEvent: function(t) {
        return Sys.contains(this.interactionEvents.cancel, t.type)
    },
    isScrollEvent: function(t) {
        return Sys.contains(this.interactionEvents.scroll, t.type)
    },
    isKeyUpEvent: function(t) {
        return Sys.contains(this.interactionEvents.keyUp, t.type)
    },
    isKeyDownEvent: function(t) {
        return Sys.contains(this.interactionEvents.keyDown, t.type)
    },
    isKeyPressEvent: function(t) {
        return Sys.contains(this.interactionEvents.keyPress, t.type)
    },
    isTouchCapable: function() {
        return "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0
    },
    defineInputEvents: function() {
        var t = this,
            e = [],
            i = [],
            n = [],
            o = [],
            r = [],
            s = [],
            a = [],
            u = [];
        window.navigator.pointerEnabled || window.navigator.msPointerEnabled ? (e.push(window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"), i.push(window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove"), n.push(window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"), o.push(window.navigator.pointerEnabled ? "pointerout" : "MSPointerOut"), Utils.Platform.isTouchSupported() || r.push(t.getMouseWheelEventName()), u.push("pointerEvent")) : (Utils.Platform.isTouchSupported() && (e.push("touchstart"), i.push("touchmove"), n.push("touchend"), o.push("touchcancel"), u.push("touchEvent")), Platform.isAndroidStockBrowser || (e.push("mousedown"), i.push("mousemove"), n.push("mouseup"), o.push("mouseout"), r.push(t.getMouseWheelEventName()), u.push("mouseEvent"))), "desktop" === t.platform && (s.push("keyup"), a.push("keydown")), t.interactionEvents = {
            start: e,
            move: i,
            end: n,
            cancel: o,
            keyUp: s,
            keyDown: a,
            scroll: r
        }, t.eventType = u
    },
    leftButtonClicked: function(t) {
        return "buttons" in t && 0 !== t.buttons ? 1 === t.buttons : "which" in t ? 1 === t.which : 0 === t.button
    }
}, Sys.Environment = Sys.extend(Sys.Observable, Sys.Environment, "Sys.Environment");
Sys.ns("Sys"), Sys.Resources = {
    constructor: function() {
        var t = this;
        Sys.Resources.superclass.constructor.apply(t, arguments), t.init()
    },
    init: function() {
        this.data = {}
    },
    readData: function(t) {
        return this.data[t]
    },
    storeData: function(t, e) {
        return this.data[t] = e, this.fireEvent("notify:resources.dataStored", t), this.data[t]
    },
    processAudio: function(t) {
        var e, s = this,
            o = s.readData(t),
            n = window.AudioContext,
            a = new n;
        a.decodeAudioData(o, function(o) {
            e = o, s.storeData("decoded:" + t, {
                context: a,
                buffer: e
            }), s.fireEvent("notify:resources.soundDecoded")
        }, function() {})
    },
    removeData: function(t) {
        delete this.data[t]
    }
}, Sys.Resources = Sys.extend(Sys.Observable, Sys.Resources, "Sys.Resources");
Sys.ns("Sys"), Sys.ns("Services"), Sys.Storage = {
    constructor: function() {
        Sys.Storage.superclass.constructor.apply(this, arguments), this.init()
    },
    init: function() {
        this.data = {}
    },
    readData: function(t) {
        return this.data[t]
    },
    storeData: function(t, s) {
        return this.data[t] = s, this.data[t]
    },
    removeData: function(t) {
        delete this.data[t]
    }
}, Sys.Storage = Sys.extend(Sys.Observable, Sys.Storage, "Sys.Storage");
Array.prototype.sum = function() {
        var t, r, n = 0;
        for (t = 0, r = this.length; t < r; t++) n += this[t];
        return n
    }, Array.prototype.min = function() {
        return 0 === this.length ? void 0 : Math.min.apply(Math, this)
    }, Array.prototype.max = function() {
        return 0 === this.length ? void 0 : Math.max.apply(Math, this)
    }, Array.prototype.average = function() {
        if (0 !== this.length) return this.sum() / this.length
    }, Array.prototype.indexOf = function(t) {
        var r, n = this.length;
        for (r = -1; ++r < n;)
            if (this[r] === t) return r;
        return -1
    }, Array.prototype.contains = function(t) {
        return -1 !== this.indexOf(t)
    }, Array.prototype.last = function() {
        return this[this.length - 1]
    }, Array.prototype.remove = Array.prototype.remove || function(t) {
        var r = this.indexOf(t); - 1 !== r && this.splice(r, 1)
    },
    function() {
        "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
            return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        })
    }(), String.prototype.contains = function(t) {
        return "" !== t && -1 !== this.indexOf(t)
    }, "function" != typeof Function.prototype.bind && (Function.prototype.bind = function(t) {
        var r = this,
            n = Array.prototype.slice.call(arguments, 1);
        return function() {
            r.apply(t, n.concat(Array.prototype.slice.call(arguments)))
        }
    });
Sys.UserInputUtils = {
    getDOMElementFromCoordinates: function(e) {
        var t;
        return !Sys.isObj(e) || Sys.isDefined(e.x) && Sys.isDefined(e.y) ? (t = document.elementFromPoint(e.x, e.y), Sys.isEmpty(t) || 3 !== t.nodeType || (t.target = t.parentNode), t) : null
    },
    getUserInputCoordinates: function(e) {
        return {
            x: e.changedTouches ? e.changedTouches[0].clientX : e.clientX,
            y: e.changedTouches ? e.changedTouches[0].clientY : e.clientY
        }
    },
    getDOMElementFromEvent: function(e) {
        return Sys.UserInputUtils.getDOMElementFromCoordinates(Sys.UserInputUtils.getUserInputCoordinates(e))
    },
    calculateMetrics: function(e) {
        var t = e.getBoundingClientRect();
        return {
            top: t.top,
            left: t.left,
            width: t.width,
            height: t.height,
            scale: e.offsetWidth / t.width
        }
    },
    getCoordinatesRelativeToElement: function(e, t) {
        var n = Sys.UserInputUtils.calculateMetrics(t);
        return {
            x: (e.x - n.left) * n.scale,
            y: (e.y - n.top) * n.scale
        }
    },
    isParentAndChildElements: function(e, t) {
        return e === t || !(!t || t === document.body || !t.parentElement) && this.isParentAndChildElements(e, t.parentElement)
    },
    isCoordinateTarget: function(e, t) {
        return Sys.UserInputUtils.isParentAndChildElements(e, Sys.UserInputUtils.getDOMElementFromCoordinates(t))
    },
    isEventTarget: function(e, t) {
        return Sys.UserInputUtils.isParentAndChildElements(e, Sys.UserInputUtils.getDOMElementFromEvent(t))
    },
    isUserInputInSegment: function(e, t, n) {
        var i, s, r, o, l, u, d = t,
            a = n;
        if (!Sys.isDefined(e) || !Sys.isDefined(d)) return !1;
        for (Sys.isArray(d) || (d = [d]), a = !Sys.isDefined(a) || a, s = a ? Environment.determineResolution().windowToVirtualScale : 1, r = e.x * s, o = e.y * s, u = -1, i = d.length; ++u < i;)
            if (l = d[u], r >= l.x && r <= l.x + l.width && o >= l.y && o <= l.y + l.height) return !0;
        return !1
    }
};
Sys.ns("Core"), Core.LanguageManager = {
    constructor: function() {
        Core.LanguageManager.superclass.constructor.apply(this, arguments), this.texts = {}, this.setupEvents()
    },
    setupEvents: function() {
        this.on({
            "notify:resources.dataStored": this.preload
        })
    },
    preload: function(e) {
        var n;
        "languageJSON" !== e && "languageXML" !== e || (n = Resources.readData(e), "languageJSON" === e ? this.texts = this.loadLanguage(n) : "languageXML" === e && (this.texts = this.loadLanguageXML(n)), this.fireEvent("languageLoaded_event"))
    },
    loadLanguage: function(e) {
        return e.reduce(function(e, n) {
            var t = {};
            return t[n.id] = n.text, Sys.applyProperties(e, t)
        }, {})
    },
    loadLanguageXML: function(e) {
        var n = Sys.utils.XMLHelper.findAll("ds", e.documentElement);
        return Object.keys(n).reduce(function(e, t) {
            var o = n[t],
                a = Sys.utils.XMLHelper.getAttributeValue("name", o),
                i = {};
            return i[a] = o.textContent, Sys.applyProperties(e, i)
        }, {})
    },
    getErrorText: function(e) {
        return this.hasText(e) ? this.getText(e) : "[Error ID not found]"
    },
    hasText: function(e) {
        return Sys.isDefined(this.texts[e])
    },
    getText: function(e, n) {
        var t, o;
        return this.hasText(e) ? "" === this.texts[e] ? "[" + e + " not translated]" : (o = this.texts[e].replace("%2B", "+"), n ? (t = Sys.utils.getNodesByFormat(o, n), t.reduce(function(e, n) {
            var t = e;
            return t += n.data.toString()
        }, "")) : o) : "[" + e + " not defined]"
    }
}, Core.LanguageManager = Sys.extend(Sys.Observable, Core.LanguageManager, "Core.LanguageManager"), Sys.ns("Language"), Language.Keys = {
    accountUnavailable: "OCTaccountUnavailable",
    additonalFreeSpinsWon: "OCTadditonalFreeSpinsWon",
    autoplay: "OCTautoplayPanelLabel",
    autoplay_advancedSettings: "OCTadvancedSettings",
    autoplay_numberSpins: "OCTnumberSpins",
    autoplay_panelStartText: "OCTautoplayPanelStartText",
    autoplay_setting_stopAutoPlay: "OCTstopAutoPlayColon",
    autoplay_setting_ifCashDecreasesBy: "OCTifCashDecreasesBy",
    autoplay_setting_ifCashIncreasesBy: "OCTifCashIncreasesBy",
    autoplay_setting_ifFBonusIsStarted: "OCTifFBonusIsStarted",
    autoplay_setting_ifFreeSpinsIsStarted: "OCTifFreeSpinsIsStarted",
    autoplay_setting_ifWinExeeds: "OCTifWinExeeds",
    autoplay_setting_onAnyWin: "OCTonAnyWin",
    autoplay_setting_ifCashDecreasesByInfoTouch: "OCTlossLimitInfoTouch",
    autoplay_setting_ifCashDecreasesByInfo: "OCTlossLimitInfo",
    autoplay_setting_ifCashDecreasesByWarning: "OCTlossLimitWarning",
    autoplay_setting_ifCashDecreasesByWarningTouch: "betExceedCDB",
    autoplay_stopAutoPlay: "OCTstopAutoPlay",
    autoplay_stopText: "OCTautoplayStopText",
    autoSpins: "OCTautoSpins",
    betColonVar: "OCTbetColonVar",
    betInCash: "OCTbetInCash",
    betInCoins: "OCTbetInCoins",
    betLevel: "OCTbetlevel",
    betSettings_uc: "OCTbetSettingsCaps",
    bigWin: "OCTbigWin",
    bonusAwardedTitle: "bonusAwardedTitle",
    bonusAwardedCongrats: "bonusAwardedCongrats",
    btn_autoplay: "OCTautoplayButton",
    btn_casino: "OCTcasino_btn",
    btn_checkEnd: "OCTCheckEndButton",
    btn_close: "OCTclose_btn",
    btn_continue: "OCTContinue",
    btn_deposit: "OCTdeposit_btn",
    btn_login: "OCTlogin_btn",
    btn_maxbet: "OCTmaxbetbutton",
    btn_no: "OCTbtnNo",
    btn_ok: "OCTbtnOK",
    btn_reduceBet: "OCTreduceBet_btn",
    btn_reload: "OCTreload_btn",
    btn_sessionTimeOut: "OCTreload_btnRev",
    btn_yes: "OCTbtnYes",
    btn_addValue: "addValue",
    cash: "OCTcash",
    cashColon: "OCTcashColon",
    cashColonVar: "OCTcashColonVar",
    coinsColonVar: "OCTcoinsColonVar",
    coinsWonColon: "OCTcoinsWonColon",
    coinValue: "OCTcoinValue",
    congratulations: "OCTcongratsLC",
    congratulations_uc: "OCTcongratsUC",
    connectionLost: "OCTconnectionLost",
    connectionQualityPoor: "OCTconnectionQualityPoor",
    continue: "OCTContinue",
    continue_uc: "OCTbutton_CONTINUE",
    continuePlaying: "OCTcontinuePlaying",
    deposit: "OCTdeposit",
    depositPlay: "OCTdepositPlay",
    error: "OCTerror",
    freeRounds_expired: "OCTfreerounds",
    freeRoundsFinished: "OCTfreeRoundsFinished",
    freeRoundsLeftColon: "OCTFreeRoundsLeftwithColon",
    freeRoundsOfferUsed: "16",
    freeRoundsVar: "OCTfreeRoundsVar",
    freeRoundsExtraTitle: "OCTfreeRoundsExtraTitle",
    freeRoundsExtraWon: "OCTfreeRoundsExtraWon",
    freeRoundWidgetFirstNoWin: "freeRoundWidgetFirstNoWin",
    freeRoundWidgetIntro: "freeRoundWidgetIntro",
    freeRoundWidgetPlurCongratulations: "freeRoundWidgetPlurCongratulations",
    freeRoundWidgetSingCongratulations: "freeRoundWidgetSingCongratulations",
    freeRoundWidgetSecondNoWin: "freeRoundWidgetSecondNoWin",
    freeSpins: "OCTfreeSpinsUC",
    freeSpinsLeftColonVar: "OCTfreeSpinsLeftColonVar",
    gameHistory: "OCTgameHistory",
    gameHistory_uc: "OCTgameHistoryHeadingUC",
    gameHistoryHeading: "OCTgameHistoryHeadingUC",
    gameRules_uc: "OCTgameRulesUC",
    gameSettingsPanelLabel: "OCTslidePanelLabel",
    gameUnavailable: "OCTgameUnavailable",
    haveFreeRounds: "OCThaveFreeRounds",
    historyNotAvailable: "OCThistoryNotAvailable",
    landscapeMode: "OCTlandscapeMode",
    level: "OCTlevel",
    loading: "OCTloadingText",
    loadingDots: "OCTloading",
    loadingTakesLonger: "OCTloadingTakesLonger",
    lostConnectInactivity: "OCTlostConnectInactivity",
    machinetext_bet: "OCTmachinetext_bet",
    machinetext_coins: "OCTmachinetext_coins",
    machinetext_coinvalue: "OCTmachinetext_coinvalue",
    machinetext_win: "OCTmachinetext_win",
    megaWin: "OCTmegaWin",
    messageCaption: "OCTmessagecaption",
    newHistoryWindow: "OCTnewHistoryWindow",
    outOfMoney: "OCToutOfMoney",
    paytable_betLineWinsLeftToRightOnly: "OCTbetLineWinsLeftToRightOnly",
    paytable_extraInfo: "OCTextraInfo",
    paytable_highest: "OCTpaytableHighest",
    paytable_symbolPayout: "OCTsymbolPayout",
    paytable_uc: "OCTbutton_paytableUC",
    paytable_voidAllPays: "OCTvoidAllPays",
    paytable_winningBetLinesHeading: "OCTwinningBetLinesHeading",
    playingForFun: "OCTplayingForFun",
    youPlayingForFun: "OCTyouPlayingFun",
    playLimit: "OCTplayLimit",
    quickSpin: "OCTquickSpin",
    rc_checkPlayingLost: "OCTRCheckPlayingLost",
    rc_checkPlayingWon: "OCTRCheckPlayingWon",
    rc_checkReminder: "OCTRCcheckReminder",
    reduce: "OCTreduce",
    reload: "OCTreload",
    reset: "OCTreset",
    restoredGameHeader: "OCTrestoredGameHeader",
    returnToLobby: "OCTreturnToLobby",
    roundsLeft: "OCTroundsLeft",
    roundsUseAcctMoney: "OCTroundsUseAcctMoney",
    sessionTimeOut: "OCTsessionTimeOut",
    setting_gameSound: "OCTgameSound",
    setting_gameVibration: "OCTgameVibration",
    setting_introGame: "OCTintroGameSetting",
    setting_introScreeGame: "OCTintroScreeGameSetting",
    setting_leftHandMode: "OCTleftHandMode",
    setting_quickSpinGame: "OCTquickSpinGameSetting",
    setting_spaceSpin: "OCTspaceSpin",
    skipIntro: "OCTskipIntro",
    slowConnection: "OCTslowConnection",
    soundSettings_uc: "OCTsoundSettingsCaps",
    spinSettings_uc: "OCTspinSettingsCaps",
    spinsLeftText: "OCTspinsLeftText",
    startFreespins: "OCTstartFreeSpins",
    stopIfFreeSpins: "OCTstopIfFreeSpins",
    superMegaWin: "OCTsuperMegaWin",
    totalbet: "OCTtotalbet",
    totalWin: "OCTTotalWinwithColonVar",
    totalWinColon: "OCTtotalWinWithColon",
    totalWinColon_uc: "OCTtotalWinUCnoVar",
    totalWinColonVar: "OCTtotalWinColonVar",
    totalWinColonVar_uc: "OCTTotalWinwithColonUC",
    varRetriggerFSNoSpan: "OCTvarRetriggerFSNoSpan",
    win: "OCTWin",
    winColon_uc: "OCTwinColonUC",
    winColonVar: "OCTwinColonVar",
    winUpTo: "OCTwinUpTo",
    youWin: "OCTyouWinUCNoExclamation",
    youWonCoins: "OCTyouWonCoins",
    cookiePolicy: "cookiePolicy",
    cookiePolicyPart2: "cookiePolicyPart2",
    deviceBestGameExperience: "deviceBestGameExperience",
    deviceBrowserUpdateMust: "deviceBrowserUpdateMust",
    deviceOptimizedFor: "deviceOptimizedFor",
    deviceUpdateBrowser: "deviceUpdateBrowser",
    deviceUpdateOS: "deviceUpdateOS",
    deviceUseBrowser: "deviceUseBrowser",
    gameOptimisedFor: "gameOptimisedFor",
    MGcontinueYesNo: "MGcontinueYesNo",
    MGdeviceNoSupport: "MGdeviceNoSupport",
    MGnoOSSupport: "MGnoOSSupport",
    optimisedForVersion: "optimisedForVersion",
    upgradeIn: "upgradeIn"
};
Sys.UserInput = {
    constructor: function() {
        Sys.UserInput.superclass.constructor.apply(this, arguments), this.setupData(), this.setupEvents(), this.interactionEventHandlers = {
            start: this.handleInteractionStart.bind(this),
            end: this.handleInteractionEnd.bind(this),
            cancel: this.handleInteractionEnd.bind(this),
            move: this.handleInteractionMove.bind(this),
            keyUp: this.handleInteractionKeyUp.bind(this),
            keyDown: this.handleInteractionKeyDown.bind(this),
            scroll: this.handleInteractionScroll.bind(this)
        }, this.interactionEvents = this.defineInputEvents(), this.addEventListeners()
    },
    setupData: function() {
        this.data = {}, this.storeData("standardEvents", {
            start: "notify:userInputManager.userInputStarted",
            end: "notify:userInputManager.userInputEnded",
            move: "notify:userInputManager.userInputMove",
            hover: "notify:userInputManager.userInputHover",
            cancel: "notify:userInputManager.userInputCanceled",
            keyUp: "notify:userInputManager.userInputKeyUp",
            keyDown: "notify:userInputManager.userInputKeyDown",
            scroll: "notify:userInputManager.userInputScroll"
        }), this.storeData("exclusiveEvents", {}), this.storeData("exclusiveQueue", []), this.storeData("allowPropagation", !1)
    },
    setupEvents: function() {
        this.on({
            "request:userInputManager.activateExclusivity": this.activateExclusivity,
            "request:userInputManager.deactivateExclusivity": this.deactivateExclusivity,
            "request:userInputManager.allowInteractions": this.setState.bind(this, "active"),
            "request:userInputManager.ignoreAllInteractions": this.setState.bind(this, "deactivated"),
            "request:userInputManager.allowPropagation": this.storeData.bind(this, "allowPropagation", !0),
            "request:userInputManager.disAllowPropagation": this.storeData.bind(this, "allowPropagation", !1)
        })
    },
    defineInputEvents: function() {
        var t = [],
            e = [],
            n = [],
            i = [],
            s = [],
            a = [],
            o = [];
        return Utils.Platform.isTouchSupported() && Platform.isDesktopDevice ? (t.push("mousedown"), e.push("mousemove"), n.push("mouseup"), i.push("mouseout"), t.push("touchstart"), e.push("touchmove"), n.push("touchend"), i.push("touchcancel"), s.push(this.getMouseWheelEventName())) : Utils.Platform.isTouchSupported() ? (t.push("touchstart"), e.push("touchmove"), n.push("touchend"), i.push("touchcancel")) : (t.push("mousedown"), e.push("mousemove"), n.push("mouseup"), i.push("mouseout"), s.push(this.getMouseWheelEventName())), Platform.isDesktopDevice && (a.push("keyup"), o.push("keydown")), {
            start: t,
            move: e,
            end: n,
            cancel: i,
            keyUp: a,
            keyDown: o,
            scroll: s
        }
    },
    getMouseWheelEventName: function() {
        var t = Boolean(window.MSInputMethodContext) && Boolean(document.documentMode),
            e = "onwheel" in document.createElement("div") && !navigator.userAgent.match(/Firefox/i);
        return t || e ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
    },
    isStartEvent: function(t) {
        return !("mousedown" === t.type && !this.leftButtonClicked(t)) && Sys.contains(this.interactionEvents.start, t.type)
    },
    isEndEvent: function(t) {
        return !("mouseup" === t.type && !this.leftButtonClicked(t)) && Sys.contains(this.interactionEvents.end, t.type)
    },
    isMoveEvent: function(t) {
        return Sys.contains(this.interactionEvents.move, t.type)
    },
    isCancelEvent: function(t) {
        return Sys.contains(this.interactionEvents.cancel, t.type)
    },
    isScrollEvent: function(t) {
        return Sys.contains(this.interactionEvents.scroll, t.type)
    },
    isKeyUpEvent: function(t) {
        return Sys.contains(this.interactionEvents.keyUp, t.type)
    },
    isKeyDownEvent: function(t) {
        return Sys.contains(this.interactionEvents.keyDown, t.type)
    },
    isKeyPressEvent: function(t) {
        return Sys.contains(this.interactionEvents.keyPress, t.type)
    },
    leftButtonClicked: function(t) {
        return "buttons" in t && 0 !== t.buttons ? 1 === t.buttons : "which" in t ? 1 === t.which : 0 === t.button
    },
    addEventListeners: function() {
        var t = this,
            e = this.interactionEvents;
        e.start.forEach(function(e) {
            document.body.addEventListener(e, t.interactionEventHandlers.start, !0)
        }), e.move.forEach(function(e) {
            document.body.addEventListener(e, t.interactionEventHandlers.move, {
                passive: !1
            })
        }), e.end.forEach(function(e) {
            document.body.addEventListener(e, t.interactionEventHandlers.end, !0)
        }), e.scroll.forEach(function(e) {
            document.body.addEventListener(e, t.interactionEventHandlers.scroll, !0)
        }), e.keyUp.forEach(function(e) {
            document.addEventListener(e, t.interactionEventHandlers.keyUp, !1)
        }), e.keyDown.forEach(function(e) {
            document.addEventListener(e, t.interactionEventHandlers.keyDown, !1)
        }), document.body.addEventListener("gesturestart", this.preventPropagation), document.body.addEventListener("gesturechange", this.preventPropagation), document.body.addEventListener("gestureend", this.preventPropagation)
    },
    removeListeners: function() {
        var t = this,
            e = this.interactionEvents;
        e.start.forEach(function(e) {
            document.body.removeEventListener(e, t.interactionEventHandlers.start, !0)
        }), e.move.forEach(function(e) {
            document.body.removeEventListener(e, t.interactionEventHandlers.move, !1)
        }), e.end.forEach(function(e) {
            document.body.removeEventListener(e, t.interactionEventHandlers.end, !0)
        }), e.scroll.forEach(function(e) {
            document.body.removeEventListener(e, t.interactionEventHandlers.scroll, !0)
        }), e.keyUp.forEach(function(e) {
            document.removeEventListener(e, t.interactionEventHandlers.keyUp, !1)
        }), e.keyDown.forEach(function(e) {
            document.removeEventListener(e, t.interactionEventHandlers.keyDown, !1)
        }), document.body.removeEventListener("gesturestart", this.preventPropagation), document.body.removeEventListener("gesturechange", this.preventPropagation), document.body.removeEventListener("gestureend", this.preventPropagation)
    },
    getInteractionEvents: function(t) {
        return t ? this.interactionEvents[t] || [] : this.interactionEvents
    },
    activateExclusivity: function(t) {
        var e;
        this.readData("exclusivityRequested") ? (e = this.readData("exclusiveQueue"), e.push(t), this.storeData("exclusiveQueue", e)) : (this.readData("activeInteraction") && this.sendInputEvent("end", {
            clientX: -1,
            clientY: -1
        }), this.storeData("exclusivityRequested", !0), this.setExclusiveEvents(t))
    },
    deactivateExclusivity: function(t) {
        var e, n, i = this.readData("exclusiveEvents"),
            s = this.readData("exclusiveQueue");
        "string" == typeof t && i.requester === t ? e = !0 : Sys.isObj(t) && (e = !0, Sys.iterate(t, function(t, n) {
            i[t] !== n && (e = !1)
        })), e ? s.length > 0 ? this.setExclusiveEvents(s.shift()) : this.storeData("exclusivityRequested", !1) : (n = s.indexOf(t)) >= 0 && s.splice(n, 1)
    },
    setExclusiveEvents: function(t) {
        var e;
        e = "string" == typeof t ? {
            requester: t,
            start: "notify:userInputManager." + t + "ExclusiveStart",
            end: "notify:userInputManager." + t + "ExclusiveEnd",
            keyUp: "notify:userInputManager." + t + "ExclusiveKeyUp",
            keyDown: "notify:userInputManager." + t + "ExclusiveKeyDown",
            move: "notify:userInputManager." + t + "ExclusiveMove",
            hover: "notify:userInputManager." + t + "ExclusiveHover",
            cancel: "notify:userInputManager." + t + "ExclusiveCancel",
            scroll: "notify:userInputManager." + t + "ExclusiveScroll"
        } : t, this.storeData("exclusiveEvents", e)
    },
    checkPropagation: function(t) {
        var e = t.touches ? t.touches.length : 1;
        this.readData("allowPropagation") && e < 2 || this.preventPropagation(t)
    },
    preventPropagation: function(t) {
        t.preventDefault(), t.stopPropagation()
    },
    handleInteractionStart: function(t) {
        var e = this.readData("activeInteraction");
        this.checkPropagation(t), this.isState("deactivated") || !this.isStartEvent(t) || Sys.isDefined(e) || (e = {
            target: t.target
        }, "touchstart" === t.type && (e.identifier = t.targetTouches[0].identifier), this.storeData("activeInteraction", e), Utils.Platform.inIframe() && window.focus(), this.sendInputEvent("start", t))
    },
    handleInteractionMove: function(t) {
        var e = !0,
            n = this.readData("activeInteraction");
        this.checkPropagation(t), !this.isState("deactivated") && this.isMoveEvent(t) && ("touchmove" === t.type && Sys.isObj(n) && (e = this.isTouchInList(t.changedTouches, n.identifier)), e && this.sendInputEvent(Sys.isDefined(n) ? "move" : "hover", t))
    },
    handleInteractionEnd: function(t) {
        var e = !1,
            n = this.readData("activeInteraction");
        this.checkPropagation(t), !this.isState("deactivated") && Sys.isDefined(n) && (this.isEndEvent(t) || this.isCancelEvent(t)) && this.isEndEvent(t) && ("touchend" !== t.type && "touchcancel" !== t.type || (e = this.isTouchInList(t.touches, n.identifier)), e || (this.removeData("activeInteraction"), this.sendInputEvent("end", t)))
    },
    handleInteractionScroll: function(t) {
        var e = this,
            n = e.readData("activeInteraction");
        e.checkPropagation(t), e.isState("deactivated") || Sys.isDefined(n) || !this.isScrollEvent(t) || e.sendInputEvent("scroll", t)
    },
    handleInteractionKeyDown: function(t) {
        var e = this.readData("activeInteraction");
        this.isState("deactivated") || e || !this.isKeyDownEvent(t) || (this.storeData("activeInteraction", t.keyCode), this.sendInputEvent("keyDown", t))
    },
    handleInteractionKeyUp: function(t) {
        var e = this.readData("activeInteraction");
        !this.isState("deactivated") && e === t.keyCode && this.isKeyUpEvent(t) && (this.removeData("activeInteraction"), this.sendInputEvent("keyUp", t))
    },
    isTouchInList: function(t, e) {
        return Object.keys(t).some(function(n) {
            return t[n].identifier === e
        })
    },
    sendInputEvent: function(t, e) {
        var n = this.getEvent(t);
        n && this.fireEvent(n, Sys.UserInputUtils.getUserInputCoordinates(e), e)
    },
    getEvent: function(t) {
        return this.readData("exclusivityRequested") ? this.readData("exclusiveEvents")[t] : this.readData("standardEvents")[t]
    },
    storeData: function(t, e) {
        this.data[t] = e
    },
    readData: function(t) {
        return this.data[t]
    },
    removeData: function(t) {
        delete this.data[t]
    },
    setState: function(t) {
        this.state = t
    },
    readState: function() {
        return this.state
    },
    isState: function(t) {
        return t === this.state
    }
}, Sys.UserInput = Sys.extend(Sys.Observable, Sys.UserInput, "Sys.UserInput");
Sys.ns("Interface.utils"), Interface.utils.UserInputBase = {
    CSS: {},
    constructor: function(n) {
        Interface.utils.UserInputBase.superclass.constructor.apply(this, arguments), this.init(n)
    },
    enable: function() {
        var n = this;
        n.enabled = !0, n.startListeningToUserInput(), n.container.removeCls(n.CSS.disabled)
    },
    disable: function() {
        var n = this;
        n.enabled = !1, n.stopListeningToUserInput(), n.container.addCls(n.CSS.disabled)
    },
    isEnabled: function() {
        return this.enabled
    },
    lock: function(n) {
        var e = this;
        e.locker.contains(n) || e.locker.push(n), e.disable()
    },
    unlock: function(n) {
        var e = this,
            t = e.locker.indexOf(n);
        t >= 0 && e.locker.splice(t, 1), e.isLocked() || e.enable()
    },
    isLocked: function() {
        return 0 !== this.locker.length
    },
    getContainer: function() {
        return this.container
    },
    init: function(n) {
        var e = this;
        n = n || {}, n.cls = "string" == typeof n.cls ? n.cls : "", e.id = n.id, e.locker = [], Sys.isDefined(n.CSS) && (e.CSS = Sys.applyIf(n.CSS, e.CSS)), e.setupContainer(n), n.enabled ? e.enable() : e.disable()
    },
    onUserInputStart: function() {},
    onUserInputEnd: function() {},
    onUserInputMove: function() {},
    onUserInputCanceled: function() {},
    setupContainer: function() {
        var n = this;
        n.container = new Sys.Element({
            id: n.id,
            tag: "div",
            cls: n.CSS.base
        })
    },
    startListeningToUserInput: function() {
        var n = this;
        n.on({
            "notify:userInputManager.userInputStarted": n.onUserInputStart,
            "notify:userInputManager.userInputEnded": n.onUserInputEnd,
            "notify:userInputManager.userInputMove": n.onUserInputMove,
            "notify:userInputManager.userInputCanceled": n.onUserInputCanceled
        })
    },
    stopListeningToUserInput: function() {
        var n = this;
        n.removeListener("notify:userInputManager.userInputStarted"), n.removeListener("notify:userInputManager.userInputEnded"), n.removeListener("notify:userInputManager.userInputMove"), n.removeListener("notify:userInputManager.userInputCanceled")
    },
    setValue: function() {}
}, Interface.utils.UserInputBase = Sys.extend(Sys.Observable, Interface.utils.UserInputBase, "Interface.utils.UserInputBase");
Sys.ns("Interface.utils"), Interface.utils.Button = {
    CSS: {
        base: "button",
        pressed: "button_pressed",
        disabled: "button_disabled"
    },
    DEFAULT_USER_INPUT_EVENTS: {
        started: "notify:userInputManager.userInputStarted",
        ended: "notify:userInputManager.userInputEnded",
        move: "notify:userInputManager.userInputMove",
        canceled: "notify:userInputManager.userInputCanceled"
    },
    constructor: function(e) {
        Interface.utils.Button.superclass.constructor.apply(this, arguments)
    },
    enable: function() {
        var e = this;
        e.enabled = !0, e.container.removeCls(e.CSS.disabled), e.enableInteraction && e.startListeningToUserInput()
    },
    disable: function() {
        var e = this;
        e.enabled = !1, e.container.addCls(e.CSS.disabled), e.enableInteraction && e.stopListeningToUserInput()
    },
    setText: function(e) {
        this.label = e, this.container.el.textContent = e
    },
    getText: function() {
        return this.label
    },
    show: function(e) {
        this.container.el.style.display = Sys.isDefined(e) ? e : "block"
    },
    hide: function() {
        this.container.el.style.display = "none"
    },
    init: function(e) {
        var t = this;
        Sys.isDefined(e.userInputEvents) ? t.userInputEvents = e.userInputEvents : t.userInputEvents = t.DEFAULT_USER_INPUT_EVENTS, t.clickCallback = e.clickCallback, t.enableInteraction = Sys.isDefined(t.clickCallback), Interface.utils.Button.superclass.init.call(t, e), !0 === e.hidden && t.hide(), "string" == typeof e.label && t.setText(e.label)
    },
    startListeningToUserInput: function() {
        var e = this;
        Sys.isDefined(e.userInputEvents.started) && e.addListener(e.userInputEvents.started, e.onUserInputStart), Sys.isDefined(e.userInputEvents.started) && e.addListener(e.userInputEvents.ended, e.onUserInputEnd), Sys.isDefined(e.userInputEvents.move) && e.addListener(e.userInputEvents.move, e.onUserInputMove), Sys.isDefined(e.userInputEvents.canceled) && e.addListener(e.userInputEvents.canceled, e.onUserInputCanceled)
    },
    stopListeningToUserInput: function() {
        var e = this;
        Sys.isDefined(e.userInputEvents.started) && e.removeListener(e.userInputEvents.started), Sys.isDefined(e.userInputEvents.ended) && e.removeListener(e.userInputEvents.ended), Sys.isDefined(e.userInputEvents.move) && e.removeListener(e.userInputEvents.move), Sys.isDefined(e.userInputEvents.canceled) && e.removeListener(e.userInputEvents.canceled)
    },
    onUserInputStart: function(e) {
        var t = this;
        t.enabled && Sys.UserInputUtils.isCoordinateTarget(t.container.el, e) && (t.isActiveInputTarget = !0, t.container.addCls(t.CSS.pressed))
    },
    onUserInputEnd: function(e) {
        var t = this;
        t.isActiveInputTarget && Sys.UserInputUtils.isCoordinateTarget(t.container.el, e) && t.clickCallback(), t.onUserInputCanceled()
    },
    onUserInputCanceled: function() {
        this.isActiveInputTarget = !1, this.container.removeCls(this.CSS.pressed)
    }
}, Interface.utils.Button = Sys.extend(Interface.utils.UserInputBase, Interface.utils.Button, "Interface.utils.Button");
Sys.ns("Interface.utils"), Interface.utils.InteractiveContainer = {
    DEFAULT_BUTTON_TEXT: "Add Value",
    CSS: {
        base: "interface-interactiveContainer_base",
        disabled: "interface-interactiveContainer_disabled",
        label: "interface-interactiveContainer_label",
        button_wrapper: "interface-interactiveContainer_buttonWrapper",
        button: "interface-interactiveContainer_button"
    },
    constructor: function(t) {
        Interface.utils.InteractiveContainer.superclass.constructor.apply(this, arguments)
    },
    init: function(t) {
        var e = this;
        t = t || {}, e.title = t.title, e.callback = t.callback, e.minValue = t.minValue, e.info = t.info || "", e.buttonText = t.buttonText || e.DEFAULT_BUTTON_TEXT, e.callback = t.callback || function() {}, e.keyboardResult = {}, Interface.utils.InteractiveContainer.superclass.init.apply(e, arguments)
    },
    setMinValue: function(t) {
        this.minValue = t
    },
    setupContainer: function(t) {
        var e = this;
        e.container = new Sys.Element({
            id: e.id,
            tag: "div",
            cls: t.cls + " " + e.CSS.base
        }), e.title && (e.label = e.container.add(new Sys.Element({
            id: e.id + "_title",
            tag: "div",
            cls: e.CSS.label,
            textContent: e.title
        }))), e.buttonWrapper = e.container.add(new Sys.Element({
            id: e.id + "_button_wrapper",
            tag: "div",
            cls: e.CSS.button_wrapper
        })), e.addButton = e.buttonWrapper.add(new Sys.Element({
            id: e.id + "_button",
            tag: "div",
            cls: String(e.CSS.button),
            textContent: e.buttonText
        }))
    },
    setValue: function(t, e) {
        var n, a = this;
        Sys.isNumber(t) && (n = {
            formattedInputField: Services.moneyManager.formatMoneyCurrencySign(Sys.utils.toInt(t), void 0, 0),
            input: String(Sys.utils.toInt(t / 100)),
            value: Sys.utils.toInt(t / 100),
            cents: t
        }, !0 !== e ? a.keyboardCallback(n) : (a.keyboardResult = n, a.updateButtonText()))
    },
    onUserInputStart: function(t) {
        this.wasInitialInputTarget = Sys.UserInputUtils.isCoordinateTarget(this.buttonWrapper.el, t) && this.enabled
    },
    onUserInputEnd: function(t) {
        var e = this;
        Sys.UserInputUtils.isCoordinateTarget(e.buttonWrapper.el, t) && e.wasInitialInputTarget && e.requestKeyboard(), e.wasInitialInputTarget = !1
    },
    click: function() {
        this.requestKeyboard()
    },
    requestKeyboard: function() {
        var t = this;
        t.fireEvent("request:keyboard.open", {
            info: t.info,
            label: t.title,
            okCallback: t.keyboardCallback.bind(t),
            cancelCallback: t.keyboardCallback.bind(t),
            minValue: t.minValue
        })
    },
    keyboardCallback: function(t) {
        var e = this;
        Sys.isDefined(t) && (e.keyboardResult = t), e.updateButtonText(), e.callback(e.keyboardResult.cents || 0)
    },
    updateButtonText: function() {
        var t = this,
            e = t.addButton;
        t.keyboardResult.value > 0 ? (e.el.textContent = t.keyboardResult.formattedInput, e.addCSSClass("interactive_pushed")) : (e.el.textContent = t.buttonText, e.removeCSSClass("interactive_pushed"))
    }
}, Interface.utils.InteractiveContainer = Sys.extend(Interface.utils.UserInputBase, Interface.utils.InteractiveContainer, "Interface.utils.InteractiveContainer");
Sys.ns("Core"), Core.Orientation = {
    constructor: function() {
        Core.Orientation.superclass.constructor.apply(this, arguments), this.previousResolution = Utils.Platform.getViewportInnerSize(), this.setupEvents(), this.setBodyOrientationClass()
    },
    setupEvents: function() {
        this.on({
            "notify:scaling.updated": this.onScalingUpdated
        })
    },
    isPortrait: function() {
        return "PORTRAIT" === this.getOrientation()
    },
    isLandscape: function() {
        return "LANDSCAPE" === this.getOrientation()
    },
    getOrientation: function() {
        return Utils.Platform.getOrientation()
    },
    orientationHasChanged: function() {
        var t = this.previousResolution,
            n = Utils.Platform.getViewportInnerSize();
        return Math.floor(t.width / t.height) !== Math.floor(n.width / n.height)
    },
    onScalingUpdated: function() {
        this.setBodyOrientationClass()
    },
    setBodyOrientationClass: function() {
        var t = Environment.getCurrentPlatformCSS(),
            n = this.getOrientation(),
            i = "PORTRAIT" === n ? t + "_landscape" : t + "_portrait";
        Sys.utils.replaceCSSClass(document.body, i, t + "_" + n.toLowerCase(), !0)
    }
}, Core.Orientation = Sys.extend(Sys.Observable, Core.Orientation, "Core.Orientation");
Sys.ns("Core"), Core.Scaling = {
    constructor: function() {
        Core.Scaling.superclass.constructor.apply(this, arguments), this.performiOsSpecificRoutines(), this.scalingPrefix = Sys.utils.getPrefixedCSSProperty("transform"), this.viewport = document.getElementById("viewport"), this.setElementSize(this.viewport), this.setupEvents()
    },
    performiOsSpecificRoutines: function() {
        Platform.isIOSDevice && (Utils.Platform.inIframe() || (Sys.utils.addCSSClass(document.body, "iOS_ui"), Sys.utils.addCSSClass(document.body, "iOS"), Platform.iPhoneX && Sys.utils.addCSSClass(document.body, "iPhoneX")))
    },
    setupEvents: function() {
        this.on({
            "notify:platform.resized": this.updateGameSize,
            "notify:platform.orientationChanged": this.updateGameSize,
            "notify:loader.closed": this.scaleContent
        })
    },
    onOrientationChanged: function() {
        Environment.allowsCustomCanvasSize() && this.updateGameSize()
    },
    setElementSize: function(e) {
        var t = Environment.determineResolution().resolution;
        e.style.width = t.width + "px", e.style.height = t.height + "px", e.style[this.scalingPrefix + "Origin"] = "0 0"
    },
    scaleContent: function() {
        var e = Utils.Platform.getOrientation(),
            t = this.calculateScale();
        this.setScale(t), this.scaleGame(t), this.fireEvent("notify:viewport.scaled"), this.fireEvent("notify:scaling.updated"), this.fireEvent("notify:viewport." + e)
    },
    getScale: function() {
        return this.scale
    },
    setScale: function(e) {
        this.scale = e
    },
    getScreenSize: function() {
        return Utils.Platform.isFullScreenAPISupported() ? Utils.Platform.getViewportInnerSize() : Environment.getRealScreenSize()
    },
    calculateScale: function() {
        var e, t, i, n, o = Environment.determineResolution().resolution;
        return e = Platform.isSafariBrowser && Platform.isIOS13Device ? Utils.Platform.getViewportInnerSize() : Utils.Platform.getViewportSize(), t = e.height / o.height, i = e.width / o.width, n = Math.min(i, t), parseFloat(n.toFixed(3))
    },
    scaleGame: function(e) {
        this.viewport.style[this.scalingPrefix] = "scale(" + e + ")", this.centerGame(e)
    },
    centerGame: function(e) {
        var t, i, n = Environment.determineResolution(),
            o = n.resolution;
        t = Platform.isSafariBrowser && Platform.isIOS13Device ? Utils.Platform.getViewportInnerSize() : Utils.Platform.getViewportSize(), i = Utils.Platform.isPortrait() && Platform.isMobileDevice ? Math.round(n.portraitTopOffset * o.height * e) : Math.round((t.height - o.height * e) / 2), this.viewport.style.top = i + "px", this.viewport.style.left = Math.round((t.width - o.width * e) / 2) + "px", window.scrollTo(0, 0)
    },
    setDocumentSize: function() {
        var e = document.body.style,
            t = document.documentElement.style;
        t.width = "100%", t.height = "100%", Platform.isDesktopDevice && (t.overflow = "hidden"), e.width = "100%", e.height = "100%"
    },
    updateGameSize: function() {
        this.setElementSize(this.viewport), this.scaleContent(), this.fireEvent("notify:scaling.gameSizeChanged")
    },
    setGameSize: function() {
        this.setElementSize(this.viewport)
    },
    formatScaleValue: function(e) {
        return parseFloat(e.toFixed(3))
    },
    getScaledFullscreenElementOffsetTop: function(e) {
        var t = Utils.Platform.getViewportInnerSize().height,
            i = Environment.determineResolution().resolution.height;
        return Math.round((t - i * e) / 2)
    },
    getScaledFullscreenElementOffsetLeft: function(e) {
        var t = Utils.Platform.getViewportInnerSize().width,
            i = Environment.determineResolution().resolution.width;
        return Math.round((t - i * e) / 2)
    },
    getScaledOffset: function(e, t) {
        return Math.round((e - t) / 2)
    }
}, Core.Scaling = Sys.extend(Sys.Observable, Core.Scaling, "Core.Scaling");
! function t(n, r, e) {
    function i(u, c) {
        if (!r[u]) {
            if (!n[u]) {
                var f = "function" == typeof require && require;
                if (!c && f) return f(u, !0);
                if (o) return o(u, !0);
                var a = new Error("Cannot find module '" + u + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            var s = r[u] = {
                exports: {}
            };
            n[u][0].call(s.exports, function(t) {
                var r = n[u][1][t];
                return i(r || t)
            }, s, s.exports, t, n, r, e)
        }
        return r[u].exports
    }
    for (var o = "function" == typeof require && require, u = 0; u < e.length; u++) i(e[u]);
    return i
}({
    1: [function(t, n, r) {
        (function(n) {
            "use strict";

            function r(t, n, r) {
                t[n] || Object[e](t, n, {
                    writable: !0,
                    configurable: !0,
                    value: r
                })
            }
            if (t(327), t(328), t(2), n._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
            n._babelPolyfill = !0;
            var e = "defineProperty";
            r(String.prototype, "padLeft", "".padStart), r(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t) {
                [][t] && r(Array, t, Function.call.bind([][t]))
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        2: 2,
        327: 327,
        328: 328
    }],
    2: [function(t, n, r) {
        t(130), n.exports = t(23).RegExp.escape
    }, {
        130: 130,
        23: 23
    }],
    3: [function(t, n, r) {
        n.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, {}],
    4: [function(t, n, r) {
        var e = t(18);
        n.exports = function(t, n) {
            if ("number" != typeof t && "Number" != e(t)) throw TypeError(n);
            return +t
        }
    }, {
        18: 18
    }],
    5: [function(t, n, r) {
        var e = t(128)("unscopables"),
            i = Array.prototype;
        void 0 == i[e] && t(42)(i, e, {}), n.exports = function(t) {
            i[e][t] = !0
        }
    }, {
        128: 128,
        42: 42
    }],
    6: [function(t, n, r) {
        n.exports = function(t, n, r, e) {
            if (!(t instanceof n) || void 0 !== e && e in t) throw TypeError(r + ": incorrect invocation!");
            return t
        }
    }, {}],
    7: [function(t, n, r) {
        var e = t(51);
        n.exports = function(t) {
            if (!e(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, {
        51: 51
    }],
    8: [function(t, n, r) {
        "use strict";
        var e = t(119),
            i = t(114),
            o = t(118);
        n.exports = [].copyWithin || function(t, n) {
            var r = e(this),
                u = o(r.length),
                c = i(t, u),
                f = i(n, u),
                a = arguments.length > 2 ? arguments[2] : void 0,
                s = Math.min((void 0 === a ? u : i(a, u)) - f, u - c),
                l = 1;
            for (f < c && c < f + s && (l = -1, f += s - 1, c += s - 1); s-- > 0;) f in r ? r[c] = r[f] : delete r[c], c += l, f += l;
            return r
        }
    }, {
        114: 114,
        118: 118,
        119: 119
    }],
    9: [function(t, n, r) {
        "use strict";
        var e = t(119),
            i = t(114),
            o = t(118);
        n.exports = function(t) {
            for (var n = e(this), r = o(n.length), u = arguments.length, c = i(u > 1 ? arguments[1] : void 0, r), f = u > 2 ? arguments[2] : void 0, a = void 0 === f ? r : i(f, r); a > c;) n[c++] = t;
            return n
        }
    }, {
        114: 114,
        118: 118,
        119: 119
    }],
    10: [function(t, n, r) {
        var e = t(39);
        n.exports = function(t, n) {
            var r = [];
            return e(t, !1, r.push, r, n), r
        }
    }, {
        39: 39
    }],
    11: [function(t, n, r) {
        var e = t(117),
            i = t(118),
            o = t(114);
        n.exports = function(t) {
            return function(n, r, u) {
                var c, f = e(n),
                    a = i(f.length),
                    s = o(u, a);
                if (t && r != r) {
                    for (; a > s;)
                        if ((c = f[s++]) != c) return !0
                } else
                    for (; a > s; s++)
                        if ((t || s in f) && f[s] === r) return t || s || 0;
                return !t && -1
            }
        }
    }, {
        114: 114,
        117: 117,
        118: 118
    }],
    12: [function(t, n, r) {
        var e = t(25),
            i = t(47),
            o = t(119),
            u = t(118),
            c = t(15);
        n.exports = function(t, n) {
            var r = 1 == t,
                f = 2 == t,
                a = 3 == t,
                s = 4 == t,
                l = 6 == t,
                h = 5 == t || l,
                v = n || c;
            return function(n, c, p) {
                for (var y, d, g = o(n), m = i(g), b = e(c, p, 3), S = u(m.length), w = 0, x = r ? v(n, S) : f ? v(n, 0) : void 0; S > w; w++)
                    if ((h || w in m) && (y = m[w], d = b(y, w, g), t))
                        if (r) x[w] = d;
                        else if (d) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return y;
                    case 6:
                        return w;
                    case 2:
                        x.push(y)
                } else if (s) return !1;
                return l ? -1 : a || s ? s : x
            }
        }
    }, {
        118: 118,
        119: 119,
        15: 15,
        25: 25,
        47: 47
    }],
    13: [function(t, n, r) {
        var e = t(3),
            i = t(119),
            o = t(47),
            u = t(118);
        n.exports = function(t, n, r, c, f) {
            e(n);
            var a = i(t),
                s = o(a),
                l = u(a.length),
                h = f ? l - 1 : 0,
                v = f ? -1 : 1;
            if (r < 2)
                for (;;) {
                    if (h in s) {
                        c = s[h], h += v;
                        break
                    }
                    if (h += v, f ? h < 0 : l <= h) throw TypeError("Reduce of empty array with no initial value")
                }
            for (; f ? h >= 0 : l > h; h += v) h in s && (c = n(c, s[h], h, a));
            return c
        }
    }, {
        118: 118,
        119: 119,
        3: 3,
        47: 47
    }],
    14: [function(t, n, r) {
        var e = t(51),
            i = t(49),
            o = t(128)("species");
        n.exports = function(t) {
            var n;
            return i(t) && (n = t.constructor, "function" != typeof n || n !== Array && !i(n.prototype) || (n = void 0), e(n) && null === (n = n[o]) && (n = void 0)), void 0 === n ? Array : n
        }
    }, {
        128: 128,
        49: 49,
        51: 51
    }],
    15: [function(t, n, r) {
        var e = t(14);
        n.exports = function(t, n) {
            return new(e(t))(n)
        }
    }, {
        14: 14
    }],
    16: [function(t, n, r) {
        "use strict";
        var e = t(3),
            i = t(51),
            o = t(46),
            u = [].slice,
            c = {},
            f = function(t, n, r) {
                if (!(n in c)) {
                    for (var e = [], i = 0; i < n; i++) e[i] = "a[" + i + "]";
                    c[n] = Function("F,a", "return new F(" + e.join(",") + ")")
                }
                return c[n](t, r)
            };
        n.exports = Function.bind || function(t) {
            var n = e(this),
                r = u.call(arguments, 1),
                c = function() {
                    var e = r.concat(u.call(arguments));
                    return this instanceof c ? f(n, e.length, e) : o(n, e, t)
                };
            return i(n.prototype) && (c.prototype = n.prototype), c
        }
    }, {
        3: 3,
        46: 46,
        51: 51
    }],
    17: [function(t, n, r) {
        var e = t(18),
            i = t(128)("toStringTag"),
            o = "Arguments" == e(function() {
                return arguments
            }()),
            u = function(t, n) {
                try {
                    return t[n]
                } catch (t) {}
            };
        n.exports = function(t) {
            var n, r, c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = u(n = Object(t), i)) ? r : o ? e(n) : "Object" == (c = e(n)) && "function" == typeof n.callee ? "Arguments" : c
        }
    }, {
        128: 128,
        18: 18
    }],
    18: [function(t, n, r) {
        var e = {}.toString;
        n.exports = function(t) {
            return e.call(t).slice(8, -1)
        }
    }, {}],
    19: [function(t, n, r) {
        "use strict";
        var e = t(72).f,
            i = t(71),
            o = t(93),
            u = t(25),
            c = t(6),
            f = t(39),
            a = t(55),
            s = t(57),
            l = t(100),
            h = t(29),
            v = t(66).fastKey,
            p = t(125),
            y = h ? "_s" : "size",
            d = function(t, n) {
                var r, e = v(n);
                if ("F" !== e) return t._i[e];
                for (r = t._f; r; r = r.n)
                    if (r.k == n) return r
            };
        n.exports = {
            getConstructor: function(t, n, r, a) {
                var s = t(function(t, e) {
                    c(t, s, n, "_i"), t._t = n, t._i = i(null), t._f = void 0, t._l = void 0, t[y] = 0, void 0 != e && f(e, r, t[a], t)
                });
                return o(s.prototype, {
                    clear: function() {
                        for (var t = p(this, n), r = t._i, e = t._f; e; e = e.n) e.r = !0, e.p && (e.p = e.p.n = void 0), delete r[e.i];
                        t._f = t._l = void 0, t[y] = 0
                    },
                    delete: function(t) {
                        var r = p(this, n),
                            e = d(r, t);
                        if (e) {
                            var i = e.n,
                                o = e.p;
                            delete r._i[e.i], e.r = !0, o && (o.n = i), i && (i.p = o), r._f == e && (r._f = i), r._l == e && (r._l = o), r[y]--
                        }
                        return !!e
                    },
                    forEach: function(t) {
                        p(this, n);
                        for (var r, e = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); r = r ? r.n : this._f;)
                            for (e(r.v, r.k, this); r && r.r;) r = r.p
                    },
                    has: function(t) {
                        return !!d(p(this, n), t)
                    }
                }), h && e(s.prototype, "size", {
                    get: function() {
                        return p(this, n)[y]
                    }
                }), s
            },
            def: function(t, n, r) {
                var e, i, o = d(t, n);
                return o ? o.v = r : (t._l = o = {
                    i: i = v(n, !0),
                    k: n,
                    v: r,
                    p: e = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = o), e && (e.n = o), t[y]++, "F" !== i && (t._i[i] = o)), t
            },
            getEntry: d,
            setStrong: function(t, n, r) {
                a(t, n, function(t, r) {
                    this._t = p(t, n), this._k = r, this._l = void 0
                }, function() {
                    for (var t = this, n = t._k, r = t._l; r && r.r;) r = r.p;
                    return t._t && (t._l = r = r ? r.n : t._t._f) ? "keys" == n ? s(0, r.k) : "values" == n ? s(0, r.v) : s(0, [r.k, r.v]) : (t._t = void 0, s(1))
                }, r ? "entries" : "values", !r, !0), l(n)
            }
        }
    }, {
        100: 100,
        125: 125,
        25: 25,
        29: 29,
        39: 39,
        55: 55,
        57: 57,
        6: 6,
        66: 66,
        71: 71,
        72: 72,
        93: 93
    }],
    20: [function(t, n, r) {
        var e = t(17),
            i = t(10);
        n.exports = function(t) {
            return function() {
                if (e(this) != t) throw TypeError(t + "#toJSON isn't generic");
                return i(this)
            }
        }
    }, {
        10: 10,
        17: 17
    }],
    21: [function(t, n, r) {
        "use strict";
        var e = t(93),
            i = t(66).getWeak,
            o = t(7),
            u = t(51),
            c = t(6),
            f = t(39),
            a = t(12),
            s = t(41),
            l = t(125),
            h = a(5),
            v = a(6),
            p = 0,
            y = function(t) {
                return t._l || (t._l = new d)
            },
            d = function() {
                this.a = []
            },
            g = function(t, n) {
                return h(t.a, function(t) {
                    return t[0] === n
                })
            };
        d.prototype = {
            get: function(t) {
                var n = g(this, t);
                if (n) return n[1]
            },
            has: function(t) {
                return !!g(this, t)
            },
            set: function(t, n) {
                var r = g(this, t);
                r ? r[1] = n : this.a.push([t, n])
            },
            delete: function(t) {
                var n = v(this.a, function(n) {
                    return n[0] === t
                });
                return ~n && this.a.splice(n, 1), !!~n
            }
        }, n.exports = {
            getConstructor: function(t, n, r, o) {
                var a = t(function(t, e) {
                    c(t, a, n, "_i"), t._t = n, t._i = p++, t._l = void 0, void 0 != e && f(e, r, t[o], t)
                });
                return e(a.prototype, {
                    delete: function(t) {
                        if (!u(t)) return !1;
                        var r = i(t);
                        return !0 === r ? y(l(this, n)).delete(t) : r && s(r, this._i) && delete r[this._i]
                    },
                    has: function(t) {
                        if (!u(t)) return !1;
                        var r = i(t);
                        return !0 === r ? y(l(this, n)).has(t) : r && s(r, this._i)
                    }
                }), a
            },
            def: function(t, n, r) {
                var e = i(o(n), !0);
                return !0 === e ? y(t).set(n, r) : e[t._i] = r, t
            },
            ufstore: y
        }
    }, {
        12: 12,
        125: 125,
        39: 39,
        41: 41,
        51: 51,
        6: 6,
        66: 66,
        7: 7,
        93: 93
    }],
    22: [function(t, n, r) {
        "use strict";
        var e = t(40),
            i = t(33),
            o = t(94),
            u = t(93),
            c = t(66),
            f = t(39),
            a = t(6),
            s = t(51),
            l = t(35),
            h = t(56),
            v = t(101),
            p = t(45);
        n.exports = function(t, n, r, y, d, g) {
            var m = e[t],
                b = m,
                S = d ? "set" : "add",
                w = b && b.prototype,
                x = {},
                _ = function(t) {
                    var n = w[t];
                    o(w, t, "delete" == t ? function(t) {
                        return !(g && !s(t)) && n.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function(t) {
                        return !(g && !s(t)) && n.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function(t) {
                        return g && !s(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
                    } : "add" == t ? function(t) {
                        return n.call(this, 0 === t ? 0 : t), this
                    } : function(t, r) {
                        return n.call(this, 0 === t ? 0 : t, r), this
                    })
                };
            if ("function" == typeof b && (g || w.forEach && !l(function() {
                    (new b).entries().next()
                }))) {
                var E = new b,
                    O = E[S](g ? {} : -0, 1) != E,
                    M = l(function() {
                        E.has(1)
                    }),
                    P = h(function(t) {
                        new b(t)
                    }),
                    F = !g && l(function() {
                        for (var t = new b, n = 5; n--;) t[S](n, n);
                        return !t.has(-0)
                    });
                P || (b = n(function(n, r) {
                    a(n, b, t);
                    var e = p(new m, n, b);
                    return void 0 != r && f(r, d, e[S], e), e
                }), b.prototype = w, w.constructor = b), (M || F) && (_("delete"), _("has"), d && _("get")), (F || O) && _(S), g && w.clear && delete w.clear
            } else b = y.getConstructor(n, t, d, S), u(b.prototype, r), c.NEED = !0;
            return v(b, t), x[t] = b, i(i.G + i.W + i.F * (b != m), x), g || y.setStrong(b, t, d), b
        }
    }, {
        101: 101,
        33: 33,
        35: 35,
        39: 39,
        40: 40,
        45: 45,
        51: 51,
        56: 56,
        6: 6,
        66: 66,
        93: 93,
        94: 94
    }],
    23: [function(t, n, r) {
        var e = n.exports = {
            version: "2.5.0"
        };
        "number" == typeof __e && (__e = e)
    }, {}],
    24: [function(t, n, r) {
        "use strict";
        var e = t(72),
            i = t(92);
        n.exports = function(t, n, r) {
            n in t ? e.f(t, n, i(0, r)) : t[n] = r
        }
    }, {
        72: 72,
        92: 92
    }],
    25: [function(t, n, r) {
        var e = t(3);
        n.exports = function(t, n, r) {
            if (e(t), void 0 === n) return t;
            switch (r) {
                case 1:
                    return function(r) {
                        return t.call(n, r)
                    };
                case 2:
                    return function(r, e) {
                        return t.call(n, r, e)
                    };
                case 3:
                    return function(r, e, i) {
                        return t.call(n, r, e, i)
                    }
            }
            return function() {
                return t.apply(n, arguments)
            }
        }
    }, {
        3: 3
    }],
    26: [function(t, n, r) {
        "use strict";
        var e = t(35),
            i = Date.prototype.getTime,
            o = Date.prototype.toISOString,
            u = function(t) {
                return t > 9 ? t : "0" + t
            };
        n.exports = e(function() {
            return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1))
        }) || !e(function() {
            o.call(new Date(NaN))
        }) ? function() {
            if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
            var t = this,
                n = t.getUTCFullYear(),
                r = t.getUTCMilliseconds(),
                e = n < 0 ? "-" : n > 9999 ? "+" : "";
            return e + ("00000" + Math.abs(n)).slice(e ? -6 : -4) + "-" + u(t.getUTCMonth() + 1) + "-" + u(t.getUTCDate()) + "T" + u(t.getUTCHours()) + ":" + u(t.getUTCMinutes()) + ":" + u(t.getUTCSeconds()) + "." + (r > 99 ? r : "0" + u(r)) + "Z"
        } : o
    }, {
        35: 35
    }],
    27: [function(t, n, r) {
        "use strict";
        var e = t(7),
            i = t(120);
        n.exports = function(t) {
            if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
            return i(e(this), "number" != t)
        }
    }, {
        120: 120,
        7: 7
    }],
    28: [function(t, n, r) {
        n.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, {}],
    29: [function(t, n, r) {
        n.exports = !t(35)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, {
        35: 35
    }],
    30: [function(t, n, r) {
        var e = t(51),
            i = t(40).document,
            o = e(i) && e(i.createElement);
        n.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    }, {
        40: 40,
        51: 51
    }],
    31: [function(t, n, r) {
        n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, {}],
    32: [function(t, n, r) {
        var e = t(81),
            i = t(78),
            o = t(82);
        n.exports = function(t) {
            var n = e(t),
                r = i.f;
            if (r)
                for (var u, c = r(t), f = o.f, a = 0; c.length > a;) f.call(t, u = c[a++]) && n.push(u);
            return n
        }
    }, {
        78: 78,
        81: 81,
        82: 82
    }],
    33: [function(t, n, r) {
        var e = t(40),
            i = t(23),
            o = t(42),
            u = t(94),
            c = t(25),
            f = function(t, n, r) {
                var a, s, l, h, v = t & f.F,
                    p = t & f.G,
                    y = t & f.S,
                    d = t & f.P,
                    g = t & f.B,
                    m = p ? e : y ? e[n] || (e[n] = {}) : (e[n] || {}).prototype,
                    b = p ? i : i[n] || (i[n] = {}),
                    S = b.prototype || (b.prototype = {});
                p && (r = n);
                for (a in r) s = !v && m && void 0 !== m[a], l = (s ? m : r)[a], h = g && s ? c(l, e) : d && "function" == typeof l ? c(Function.call, l) : l, m && u(m, a, l, t & f.U), b[a] != l && o(b, a, h), d && S[a] != l && (S[a] = l)
            };
        e.core = i, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, n.exports = f
    }, {
        23: 23,
        25: 25,
        40: 40,
        42: 42,
        94: 94
    }],
    34: [function(t, n, r) {
        var e = t(128)("match");
        n.exports = function(t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (r) {
                try {
                    return n[e] = !1, !"/./" [t](n)
                } catch (t) {}
            }
            return !0
        }
    }, {
        128: 128
    }],
    35: [function(t, n, r) {
        n.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, {}],
    36: [function(t, n, r) {
        "use strict";
        var e = t(42),
            i = t(94),
            o = t(35),
            u = t(28),
            c = t(128);
        n.exports = function(t, n, r) {
            var f = c(t),
                a = r(u, f, "" [t]),
                s = a[0],
                l = a[1];
            o(function() {
                var n = {};
                return n[f] = function() {
                    return 7
                }, 7 != "" [t](n)
            }) && (i(String.prototype, t, s), e(RegExp.prototype, f, 2 == n ? function(t, n) {
                return l.call(t, this, n)
            } : function(t) {
                return l.call(t, this)
            }))
        }
    }, {
        128: 128,
        28: 28,
        35: 35,
        42: 42,
        94: 94
    }],
    37: [function(t, n, r) {
        "use strict";
        var e = t(7);
        n.exports = function() {
            var t = e(this),
                n = "";
            return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
        }
    }, {
        7: 7
    }],
    38: [function(t, n, r) {
        "use strict";

        function e(t, n, r, a, s, l, h, v) {
            for (var p, y, d = s, g = 0, m = !!h && c(h, v, 3); g < a;) {
                if (g in r) {
                    if (p = m ? m(r[g], g, n) : r[g], y = !1, o(p) && (y = p[f], y = void 0 !== y ? !!y : i(p)), y && l > 0) d = e(t, n, p, u(p.length), d, l - 1) - 1;
                    else {
                        if (d >= 9007199254740991) throw TypeError();
                        t[d] = p
                    }
                    d++
                }
                g++
            }
            return d
        }
        var i = t(49),
            o = t(51),
            u = t(118),
            c = t(25),
            f = t(128)("isConcatSpreadable");
        n.exports = e
    }, {
        118: 118,
        128: 128,
        25: 25,
        49: 49,
        51: 51
    }],
    39: [function(t, n, r) {
        var e = t(25),
            i = t(53),
            o = t(48),
            u = t(7),
            c = t(118),
            f = t(129),
            a = {},
            s = {},
            r = n.exports = function(t, n, r, l, h) {
                var v, p, y, d, g = h ? function() {
                        return t
                    } : f(t),
                    m = e(r, l, n ? 2 : 1),
                    b = 0;
                if ("function" != typeof g) throw TypeError(t + " is not iterable!");
                if (o(g)) {
                    for (v = c(t.length); v > b; b++)
                        if ((d = n ? m(u(p = t[b])[0], p[1]) : m(t[b])) === a || d === s) return d
                } else
                    for (y = g.call(t); !(p = y.next()).done;)
                        if ((d = i(y, m, p.value, n)) === a || d === s) return d
            };
        r.BREAK = a, r.RETURN = s
    }, {
        118: 118,
        129: 129,
        25: 25,
        48: 48,
        53: 53,
        7: 7
    }],
    40: [function(t, n, r) {
        var e = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }, {}],
    41: [function(t, n, r) {
        var e = {}.hasOwnProperty;
        n.exports = function(t, n) {
            return e.call(t, n)
        }
    }, {}],
    42: [function(t, n, r) {
        var e = t(72),
            i = t(92);
        n.exports = t(29) ? function(t, n, r) {
            return e.f(t, n, i(1, r))
        } : function(t, n, r) {
            return t[n] = r, t
        }
    }, {
        29: 29,
        72: 72,
        92: 92
    }],
    43: [function(t, n, r) {
        var e = t(40).document;
        n.exports = e && e.documentElement
    }, {
        40: 40
    }],
    44: [function(t, n, r) {
        n.exports = !t(29) && !t(35)(function() {
            return 7 != Object.defineProperty(t(30)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, {
        29: 29,
        30: 30,
        35: 35
    }],
    45: [function(t, n, r) {
        var e = t(51),
            i = t(99).set;
        n.exports = function(t, n, r) {
            var o, u = n.constructor;
            return u !== r && "function" == typeof u && (o = u.prototype) !== r.prototype && e(o) && i && i(t, o), t
        }
    }, {
        51: 51,
        99: 99
    }],
    46: [function(t, n, r) {
        n.exports = function(t, n, r) {
            var e = void 0 === r;
            switch (n.length) {
                case 0:
                    return e ? t() : t.call(r);
                case 1:
                    return e ? t(n[0]) : t.call(r, n[0]);
                case 2:
                    return e ? t(n[0], n[1]) : t.call(r, n[0], n[1]);
                case 3:
                    return e ? t(n[0], n[1], n[2]) : t.call(r, n[0], n[1], n[2]);
                case 4:
                    return e ? t(n[0], n[1], n[2], n[3]) : t.call(r, n[0], n[1], n[2], n[3])
            }
            return t.apply(r, n)
        }
    }, {}],
    47: [function(t, n, r) {
        var e = t(18);
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == e(t) ? t.split("") : Object(t)
        }
    }, {
        18: 18
    }],
    48: [function(t, n, r) {
        var e = t(58),
            i = t(128)("iterator"),
            o = Array.prototype;
        n.exports = function(t) {
            return void 0 !== t && (e.Array === t || o[i] === t)
        }
    }, {
        128: 128,
        58: 58
    }],
    49: [function(t, n, r) {
        var e = t(18);
        n.exports = Array.isArray || function(t) {
            return "Array" == e(t)
        }
    }, {
        18: 18
    }],
    50: [function(t, n, r) {
        var e = t(51),
            i = Math.floor;
        n.exports = function(t) {
            return !e(t) && isFinite(t) && i(t) === t
        }
    }, {
        51: 51
    }],
    51: [function(t, n, r) {
        n.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, {}],
    52: [function(t, n, r) {
        var e = t(51),
            i = t(18),
            o = t(128)("match");
        n.exports = function(t) {
            var n;
            return e(t) && (void 0 !== (n = t[o]) ? !!n : "RegExp" == i(t))
        }
    }, {
        128: 128,
        18: 18,
        51: 51
    }],
    53: [function(t, n, r) {
        var e = t(7);
        n.exports = function(t, n, r, i) {
            try {
                return i ? n(e(r)[0], r[1]) : n(r)
            } catch (n) {
                var o = t.return;
                throw void 0 !== o && e(o.call(t)), n
            }
        }
    }, {
        7: 7
    }],
    54: [function(t, n, r) {
        "use strict";
        var e = t(71),
            i = t(92),
            o = t(101),
            u = {};
        t(42)(u, t(128)("iterator"), function() {
            return this
        }), n.exports = function(t, n, r) {
            t.prototype = e(u, {
                next: i(1, r)
            }), o(t, n + " Iterator")
        }
    }, {
        101: 101,
        128: 128,
        42: 42,
        71: 71,
        92: 92
    }],
    55: [function(t, n, r) {
        "use strict";
        var e = t(60),
            i = t(33),
            o = t(94),
            u = t(42),
            c = t(41),
            f = t(58),
            a = t(54),
            s = t(101),
            l = t(79),
            h = t(128)("iterator"),
            v = !([].keys && "next" in [].keys()),
            p = function() {
                return this
            };
        n.exports = function(t, n, r, y, d, g, m) {
            a(r, n, y);
            var b, S, w, x = function(t) {
                    if (!v && t in M) return M[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new r(this, t)
                            }
                    }
                    return function() {
                        return new r(this, t)
                    }
                },
                _ = n + " Iterator",
                E = "values" == d,
                O = !1,
                M = t.prototype,
                P = M[h] || M["@@iterator"] || d && M[d],
                F = P || x(d),
                A = d ? E ? x("entries") : F : void 0,
                j = "Array" == n ? M.entries || P : P;
            if (j && (w = l(j.call(new t))) !== Object.prototype && w.next && (s(w, _, !0), e || c(w, h) || u(w, h, p)), E && P && "values" !== P.name && (O = !0, F = function() {
                    return P.call(this)
                }), e && !m || !v && !O && M[h] || u(M, h, F), f[n] = F, f[_] = p, d)
                if (b = {
                        values: E ? F : x("values"),
                        keys: g ? F : x("keys"),
                        entries: A
                    }, m)
                    for (S in b) S in M || o(M, S, b[S]);
                else i(i.P + i.F * (v || O), n, b);
            return b
        }
    }, {
        101: 101,
        128: 128,
        33: 33,
        41: 41,
        42: 42,
        54: 54,
        58: 58,
        60: 60,
        79: 79,
        94: 94
    }],
    56: [function(t, n, r) {
        var e = t(128)("iterator"),
            i = !1;
        try {
            var o = [7][e]();
            o.return = function() {
                i = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (t) {}
        n.exports = function(t, n) {
            if (!n && !i) return !1;
            var r = !1;
            try {
                var o = [7],
                    u = o[e]();
                u.next = function() {
                    return {
                        done: r = !0
                    }
                }, o[e] = function() {
                    return u
                }, t(o)
            } catch (t) {}
            return r
        }
    }, {
        128: 128
    }],
    57: [function(t, n, r) {
        n.exports = function(t, n) {
            return {
                value: n,
                done: !!t
            }
        }
    }, {}],
    58: [function(t, n, r) {
        n.exports = {}
    }, {}],
    59: [function(t, n, r) {
        var e = t(81),
            i = t(117);
        n.exports = function(t, n) {
            for (var r, o = i(t), u = e(o), c = u.length, f = 0; c > f;)
                if (o[r = u[f++]] === n) return r
        }
    }, {
        117: 117,
        81: 81
    }],
    60: [function(t, n, r) {
        n.exports = !1
    }, {}],
    61: [function(t, n, r) {
        var e = Math.expm1;
        n.exports = !e || e(10) > 22025.465794806718 || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17) ? function(t) {
            return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
        } : e
    }, {}],
    62: [function(t, n, r) {
        var e = t(65),
            i = Math.pow,
            o = i(2, -52),
            u = i(2, -23),
            c = i(2, 127) * (2 - u),
            f = i(2, -126),
            a = function(t) {
                return t + 1 / o - 1 / o
            };
        n.exports = Math.fround || function(t) {
            var n, r, i = Math.abs(t),
                s = e(t);
            return i < f ? s * a(i / f / u) * f * u : (n = (1 + u / o) * i, r = n - (n - i), r > c || r != r ? s * (1 / 0) : s * r)
        }
    }, {
        65: 65
    }],
    63: [function(t, n, r) {
        n.exports = Math.log1p || function(t) {
            return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
        }
    }, {}],
    64: [function(t, n, r) {
        n.exports = Math.scale || function(t, n, r, e, i) {
            return 0 === arguments.length || t != t || n != n || r != r || e != e || i != i ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - n) * (i - e) / (r - n) + e
        }
    }, {}],
    65: [function(t, n, r) {
        n.exports = Math.sign || function(t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }, {}],
    66: [function(t, n, r) {
        var e = t(124)("meta"),
            i = t(51),
            o = t(41),
            u = t(72).f,
            c = 0,
            f = Object.isExtensible || function() {
                return !0
            },
            a = !t(35)(function() {
                return f(Object.preventExtensions({}))
            }),
            s = function(t) {
                u(t, e, {
                    value: {
                        i: "O" + ++c,
                        w: {}
                    }
                })
            },
            l = function(t, n) {
                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, e)) {
                    if (!f(t)) return "F";
                    if (!n) return "E";
                    s(t)
                }
                return t[e].i
            },
            h = function(t, n) {
                if (!o(t, e)) {
                    if (!f(t)) return !0;
                    if (!n) return !1;
                    s(t)
                }
                return t[e].w
            },
            v = function(t) {
                return a && p.NEED && f(t) && !o(t, e) && s(t), t
            },
            p = n.exports = {
                KEY: e,
                NEED: !1,
                fastKey: l,
                getWeak: h,
                onFreeze: v
            }
    }, {
        124: 124,
        35: 35,
        41: 41,
        51: 51,
        72: 72
    }],
    67: [function(t, n, r) {
        var e = t(160),
            i = t(33),
            o = t(103)("metadata"),
            u = o.store || (o.store = new(t(266))),
            c = function(t, n, r) {
                var i = u.get(t);
                if (!i) {
                    if (!r) return;
                    u.set(t, i = new e)
                }
                var o = i.get(n);
                if (!o) {
                    if (!r) return;
                    i.set(n, o = new e)
                }
                return o
            },
            f = function(t, n, r) {
                var e = c(n, r, !1);
                return void 0 !== e && e.has(t)
            },
            a = function(t, n, r) {
                var e = c(n, r, !1);
                return void 0 === e ? void 0 : e.get(t)
            },
            s = function(t, n, r, e) {
                c(r, e, !0).set(t, n)
            },
            l = function(t, n) {
                var r = c(t, n, !1),
                    e = [];
                return r && r.forEach(function(t, n) {
                    e.push(n)
                }), e
            },
            h = function(t) {
                return void 0 === t || "symbol" == typeof t ? t : String(t)
            },
            v = function(t) {
                i(i.S, "Reflect", t)
            };
        n.exports = {
            store: u,
            map: c,
            has: f,
            get: a,
            set: s,
            keys: l,
            key: h,
            exp: v
        }
    }, {
        103: 103,
        160: 160,
        266: 266,
        33: 33
    }],
    68: [function(t, n, r) {
        var e = t(40),
            i = t(113).set,
            o = e.MutationObserver || e.WebKitMutationObserver,
            u = e.process,
            c = e.Promise,
            f = "process" == t(18)(u);
        n.exports = function() {
            var t, n, r, a = function() {
                var e, i;
                for (f && (e = u.domain) && e.exit(); t;) {
                    i = t.fn, t = t.next;
                    try {
                        i()
                    } catch (e) {
                        throw t ? r() : n = void 0, e
                    }
                }
                n = void 0, e && e.enter()
            };
            if (f) r = function() {
                u.nextTick(a)
            };
            else if (o) {
                var s = !0,
                    l = document.createTextNode("");
                new o(a).observe(l, {
                    characterData: !0
                }), r = function() {
                    l.data = s = !s
                }
            } else if (c && c.resolve) {
                var h = c.resolve();
                r = function() {
                    h.then(a)
                }
            } else r = function() {
                i.call(e, a)
            };
            return function(e) {
                var i = {
                    fn: e,
                    next: void 0
                };
                n && (n.next = i), t || (t = i, r()), n = i
            }
        }
    }, {
        113: 113,
        18: 18,
        40: 40
    }],
    69: [function(t, n, r) {
        "use strict";

        function e(t) {
            var n, r;
            this.promise = new t(function(t, e) {
                if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
                n = t, r = e
            }), this.resolve = i(n), this.reject = i(r)
        }
        var i = t(3);
        n.exports.f = function(t) {
            return new e(t)
        }
    }, {
        3: 3
    }],
    70: [function(t, n, r) {
        "use strict";
        var e = t(81),
            i = t(78),
            o = t(82),
            u = t(119),
            c = t(47),
            f = Object.assign;
        n.exports = !f || t(35)(function() {
            var t = {},
                n = {},
                r = Symbol(),
                e = "abcdefghijklmnopqrst";
            return t[r] = 7, e.split("").forEach(function(t) {
                n[t] = t
            }), 7 != f({}, t)[r] || Object.keys(f({}, n)).join("") != e
        }) ? function(t, n) {
            for (var r = u(t), f = arguments.length, a = 1, s = i.f, l = o.f; f > a;)
                for (var h, v = c(arguments[a++]), p = s ? e(v).concat(s(v)) : e(v), y = p.length, d = 0; y > d;) l.call(v, h = p[d++]) && (r[h] = v[h]);
            return r
        } : f
    }, {
        119: 119,
        35: 35,
        47: 47,
        78: 78,
        81: 81,
        82: 82
    }],
    71: [function(t, n, r) {
        var e = t(7),
            i = t(73),
            o = t(31),
            u = t(102)("IE_PROTO"),
            c = function() {},
            f = function() {
                var n, r = t(30)("iframe"),
                    e = o.length;
                for (r.style.display = "none", t(43).appendChild(r), r.src = "javascript:", n = r.contentWindow.document, n.open(), n.write("<script>document.F=Object<\/script>"), n.close(), f = n.F; e--;) delete f.prototype[o[e]];
                return f()
            };
        n.exports = Object.create || function(t, n) {
            var r;
            return null !== t ? (c.prototype = e(t), r = new c, c.prototype = null, r[u] = t) : r = f(), void 0 === n ? r : i(r, n)
        }
    }, {
        102: 102,
        30: 30,
        31: 31,
        43: 43,
        7: 7,
        73: 73
    }],
    72: [function(t, n, r) {
        var e = t(7),
            i = t(44),
            o = t(120),
            u = Object.defineProperty;
        r.f = t(29) ? Object.defineProperty : function(t, n, r) {
            if (e(t), n = o(n, !0), e(r), i) try {
                return u(t, n, r)
            } catch (t) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
            return "value" in r && (t[n] = r.value), t
        }
    }, {
        120: 120,
        29: 29,
        44: 44,
        7: 7
    }],
    73: [function(t, n, r) {
        var e = t(72),
            i = t(7),
            o = t(81);
        n.exports = t(29) ? Object.defineProperties : function(t, n) {
            i(t);
            for (var r, u = o(n), c = u.length, f = 0; c > f;) e.f(t, r = u[f++], n[r]);
            return t
        }
    }, {
        29: 29,
        7: 7,
        72: 72,
        81: 81
    }],
    74: [function(t, n, r) {
        "use strict";
        n.exports = t(60) || !t(35)(function() {
            var n = Math.random();
            __defineSetter__.call(null, n, function() {}), delete t(40)[n]
        })
    }, {
        35: 35,
        40: 40,
        60: 60
    }],
    75: [function(t, n, r) {
        var e = t(82),
            i = t(92),
            o = t(117),
            u = t(120),
            c = t(41),
            f = t(44),
            a = Object.getOwnPropertyDescriptor;
        r.f = t(29) ? a : function(t, n) {
            if (t = o(t), n = u(n, !0), f) try {
                return a(t, n)
            } catch (t) {}
            if (c(t, n)) return i(!e.f.call(t, n), t[n])
        }
    }, {
        117: 117,
        120: 120,
        29: 29,
        41: 41,
        44: 44,
        82: 82,
        92: 92
    }],
    76: [function(t, n, r) {
        var e = t(117),
            i = t(77).f,
            o = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            c = function(t) {
                try {
                    return i(t)
                } catch (t) {
                    return u.slice()
                }
            };
        n.exports.f = function(t) {
            return u && "[object Window]" == o.call(t) ? c(t) : i(e(t))
        }
    }, {
        117: 117,
        77: 77
    }],
    77: [function(t, n, r) {
        var e = t(80),
            i = t(31).concat("length", "prototype");
        r.f = Object.getOwnPropertyNames || function(t) {
            return e(t, i)
        }
    }, {
        31: 31,
        80: 80
    }],
    78: [function(t, n, r) {
        r.f = Object.getOwnPropertySymbols
    }, {}],
    79: [function(t, n, r) {
        var e = t(41),
            i = t(119),
            o = t(102)("IE_PROTO"),
            u = Object.prototype;
        n.exports = Object.getPrototypeOf || function(t) {
            return t = i(t), e(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, {
        102: 102,
        119: 119,
        41: 41
    }],
    80: [function(t, n, r) {
        var e = t(41),
            i = t(117),
            o = t(11)(!1),
            u = t(102)("IE_PROTO");
        n.exports = function(t, n) {
            var r, c = i(t),
                f = 0,
                a = [];
            for (r in c) r != u && e(c, r) && a.push(r);
            for (; n.length > f;) e(c, r = n[f++]) && (~o(a, r) || a.push(r));
            return a
        }
    }, {
        102: 102,
        11: 11,
        117: 117,
        41: 41
    }],
    81: [function(t, n, r) {
        var e = t(80),
            i = t(31);
        n.exports = Object.keys || function(t) {
            return e(t, i)
        }
    }, {
        31: 31,
        80: 80
    }],
    82: [function(t, n, r) {
        r.f = {}.propertyIsEnumerable
    }, {}],
    83: [function(t, n, r) {
        var e = t(33),
            i = t(23),
            o = t(35);
        n.exports = function(t, n) {
            var r = (i.Object || {})[t] || Object[t],
                u = {};
            u[t] = n(r), e(e.S + e.F * o(function() {
                r(1)
            }), "Object", u)
        }
    }, {
        23: 23,
        33: 33,
        35: 35
    }],
    84: [function(t, n, r) {
        var e = t(81),
            i = t(117),
            o = t(82).f;
        n.exports = function(t) {
            return function(n) {
                for (var r, u = i(n), c = e(u), f = c.length, a = 0, s = []; f > a;) o.call(u, r = c[a++]) && s.push(t ? [r, u[r]] : u[r]);
                return s
            }
        }
    }, {
        117: 117,
        81: 81,
        82: 82
    }],
    85: [function(t, n, r) {
        var e = t(77),
            i = t(78),
            o = t(7),
            u = t(40).Reflect;
        n.exports = u && u.ownKeys || function(t) {
            var n = e.f(o(t)),
                r = i.f;
            return r ? n.concat(r(t)) : n
        }
    }, {
        40: 40,
        7: 7,
        77: 77,
        78: 78
    }],
    86: [function(t, n, r) {
        var e = t(40).parseFloat,
            i = t(111).trim;
        n.exports = 1 / e(t(112) + "-0") != -1 / 0 ? function(t) {
            var n = i(String(t), 3),
                r = e(n);
            return 0 === r && "-" == n.charAt(0) ? -0 : r
        } : e
    }, {
        111: 111,
        112: 112,
        40: 40
    }],
    87: [function(t, n, r) {
        var e = t(40).parseInt,
            i = t(111).trim,
            o = t(112),
            u = /^[-+]?0[xX]/;
        n.exports = 8 !== e(o + "08") || 22 !== e(o + "0x16") ? function(t, n) {
            var r = i(String(t), 3);
            return e(r, n >>> 0 || (u.test(r) ? 16 : 10))
        } : e
    }, {
        111: 111,
        112: 112,
        40: 40
    }],
    88: [function(t, n, r) {
        "use strict";
        var e = t(89),
            i = t(46),
            o = t(3);
        n.exports = function() {
            for (var t = o(this), n = arguments.length, r = Array(n), u = 0, c = e._, f = !1; n > u;)(r[u] = arguments[u++]) === c && (f = !0);
            return function() {
                var e, o = this,
                    u = arguments.length,
                    a = 0,
                    s = 0;
                if (!f && !u) return i(t, r, o);
                if (e = r.slice(), f)
                    for (; n > a; a++) e[a] === c && (e[a] = arguments[s++]);
                for (; u > s;) e.push(arguments[s++]);
                return i(t, e, o)
            }
        }
    }, {
        3: 3,
        46: 46,
        89: 89
    }],
    89: [function(t, n, r) {
        n.exports = t(40)
    }, {
        40: 40
    }],
    90: [function(t, n, r) {
        n.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }, {}],
    91: [function(t, n, r) {
        var e = t(69);
        n.exports = function(t, n) {
            var r = e.f(t);
            return (0, r.resolve)(n), r.promise
        }
    }, {
        69: 69
    }],
    92: [function(t, n, r) {
        n.exports = function(t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    }, {}],
    93: [function(t, n, r) {
        var e = t(94);
        n.exports = function(t, n, r) {
            for (var i in n) e(t, i, n[i], r);
            return t
        }
    }, {
        94: 94
    }],
    94: [function(t, n, r) {
        var e = t(40),
            i = t(42),
            o = t(41),
            u = t(124)("src"),
            c = Function.toString,
            f = ("" + c).split("toString");
        t(23).inspectSource = function(t) {
            return c.call(t)
        }, (n.exports = function(t, n, r, c) {
            var a = "function" == typeof r;
            a && (o(r, "name") || i(r, "name", n)), t[n] !== r && (a && (o(r, u) || i(r, u, t[n] ? "" + t[n] : f.join(String(n)))), t === e ? t[n] = r : c ? t[n] ? t[n] = r : i(t, n, r) : (delete t[n], i(t, n, r)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[u] || c.call(this)
        })
    }, {
        124: 124,
        23: 23,
        40: 40,
        41: 41,
        42: 42
    }],
    95: [function(t, n, r) {
        n.exports = function(t, n) {
            var r = n === Object(n) ? function(t) {
                return n[t]
            } : n;
            return function(n) {
                return String(n).replace(t, r)
            }
        }
    }, {}],
    96: [function(t, n, r) {
        n.exports = Object.is || function(t, n) {
            return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n
        }
    }, {}],
    97: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(3),
            o = t(25),
            u = t(39);
        n.exports = function(t) {
            e(e.S, t, {
                from: function(t) {
                    var n, r, e, c, f = arguments[1];
                    return i(this), n = void 0 !== f, n && i(f), void 0 == t ? new this : (r = [], n ? (e = 0, c = o(f, arguments[2], 2), u(t, !1, function(t) {
                        r.push(c(t, e++))
                    })) : u(t, !1, r.push, r), new this(r))
                }
            })
        }
    }, {
        25: 25,
        3: 3,
        33: 33,
        39: 39
    }],
    98: [function(t, n, r) {
        "use strict";
        var e = t(33);
        n.exports = function(t) {
            e(e.S, t, {
                of: function() {
                    for (var t = arguments.length, n = Array(t); t--;) n[t] = arguments[t];
                    return new this(n)
                }
            })
        }
    }, {
        33: 33
    }],
    99: [function(t, n, r) {
        var e = t(51),
            i = t(7),
            o = function(t, n) {
                if (i(t), !e(n) && null !== n) throw TypeError(n + ": can't set as prototype!")
            };
        n.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(n, r, e) {
                try {
                    e = t(25)(Function.call, t(75).f(Object.prototype, "__proto__").set, 2), e(n, []), r = !(n instanceof Array)
                } catch (t) {
                    r = !0
                }
                return function(t, n) {
                    return o(t, n), r ? t.__proto__ = n : e(t, n), t
                }
            }({}, !1) : void 0),
            check: o
        }
    }, {
        25: 25,
        51: 51,
        7: 7,
        75: 75
    }],
    100: [function(t, n, r) {
        "use strict";
        var e = t(40),
            i = t(72),
            o = t(29),
            u = t(128)("species");
        n.exports = function(t) {
            var n = e[t];
            o && n && !n[u] && i.f(n, u, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, {
        128: 128,
        29: 29,
        40: 40,
        72: 72
    }],
    101: [function(t, n, r) {
        var e = t(72).f,
            i = t(41),
            o = t(128)("toStringTag");
        n.exports = function(t, n, r) {
            t && !i(t = r ? t : t.prototype, o) && e(t, o, {
                configurable: !0,
                value: n
            })
        }
    }, {
        128: 128,
        41: 41,
        72: 72
    }],
    102: [function(t, n, r) {
        var e = t(103)("keys"),
            i = t(124);
        n.exports = function(t) {
            return e[t] || (e[t] = i(t))
        }
    }, {
        103: 103,
        124: 124
    }],
    103: [function(t, n, r) {
        var e = t(40),
            i = e["__core-js_shared__"] || (e["__core-js_shared__"] = {});
        n.exports = function(t) {
            return i[t] || (i[t] = {})
        }
    }, {
        40: 40
    }],
    104: [function(t, n, r) {
        var e = t(7),
            i = t(3),
            o = t(128)("species");
        n.exports = function(t, n) {
            var r, u = e(t).constructor;
            return void 0 === u || void 0 == (r = e(u)[o]) ? n : i(r)
        }
    }, {
        128: 128,
        3: 3,
        7: 7
    }],
    105: [function(t, n, r) {
        "use strict";
        var e = t(35);
        n.exports = function(t, n) {
            return !!t && e(function() {
                n ? t.call(null, function() {}, 1) : t.call(null)
            })
        }
    }, {
        35: 35
    }],
    106: [function(t, n, r) {
        var e = t(116),
            i = t(28);
        n.exports = function(t) {
            return function(n, r) {
                var o, u, c = String(i(n)),
                    f = e(r),
                    a = c.length;
                return f < 0 || f >= a ? t ? "" : void 0 : (o = c.charCodeAt(f), o < 55296 || o > 56319 || f + 1 === a || (u = c.charCodeAt(f + 1)) < 56320 || u > 57343 ? t ? c.charAt(f) : o : t ? c.slice(f, f + 2) : u - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    }, {
        116: 116,
        28: 28
    }],
    107: [function(t, n, r) {
        var e = t(52),
            i = t(28);
        n.exports = function(t, n, r) {
            if (e(n)) throw TypeError("String#" + r + " doesn't accept regex!");
            return String(i(t))
        }
    }, {
        28: 28,
        52: 52
    }],
    108: [function(t, n, r) {
        var e = t(33),
            i = t(35),
            o = t(28),
            u = /"/g,
            c = function(t, n, r, e) {
                var i = String(o(t)),
                    c = "<" + n;
                return "" !== r && (c += " " + r + '="' + String(e).replace(u, "&quot;") + '"'), c + ">" + i + "</" + n + ">"
            };
        n.exports = function(t, n) {
            var r = {};
            r[t] = n(c), e(e.P + e.F * i(function() {
                var n = "" [t]('"');
                return n !== n.toLowerCase() || n.split('"').length > 3
            }), "String", r)
        }
    }, {
        28: 28,
        33: 33,
        35: 35
    }],
    109: [function(t, n, r) {
        var e = t(118),
            i = t(110),
            o = t(28);
        n.exports = function(t, n, r, u) {
            var c = String(o(t)),
                f = c.length,
                a = void 0 === r ? " " : String(r),
                s = e(n);
            if (s <= f || "" == a) return c;
            var l = s - f,
                h = i.call(a, Math.ceil(l / a.length));
            return h.length > l && (h = h.slice(0, l)), u ? h + c : c + h
        }
    }, {
        110: 110,
        118: 118,
        28: 28
    }],
    110: [function(t, n, r) {
        "use strict";
        var e = t(116),
            i = t(28);
        n.exports = function(t) {
            var n = String(i(this)),
                r = "",
                o = e(t);
            if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
            for (; o > 0;
                (o >>>= 1) && (n += n)) 1 & o && (r += n);
            return r
        }
    }, {
        116: 116,
        28: 28
    }],
    111: [function(t, n, r) {
        var e = t(33),
            i = t(28),
            o = t(35),
            u = t(112),
            c = "[" + u + "]",
            f = "​",
            a = RegExp("^" + c + c + "*"),
            s = RegExp(c + c + "*$"),
            l = function(t, n, r) {
                var i = {},
                    c = o(function() {
                        return !!u[t]() || f[t]() != f
                    }),
                    a = i[t] = c ? n(h) : u[t];
                r && (i[r] = a), e(e.P + e.F * c, "String", i)
            },
            h = l.trim = function(t, n) {
                return t = String(i(t)), 1 & n && (t = t.replace(a, "")), 2 & n && (t = t.replace(s, "")), t
            };
        n.exports = l
    }, {
        112: 112,
        28: 28,
        33: 33,
        35: 35
    }],
    112: [function(t, n, r) {
        n.exports = "\t\n\v\f\r";
    }, {}],
    113: [function(t, n, r) {
        var e, i, o, u = t(25),
            c = t(46),
            f = t(43),
            a = t(30),
            s = t(40),
            l = s.process,
            h = s.setImmediate,
            v = s.clearImmediate,
            p = s.MessageChannel,
            y = s.Dispatch,
            d = 0,
            g = {},
            m = function() {
                var t = +this;
                if (g.hasOwnProperty(t)) {
                    var n = g[t];
                    delete g[t], n()
                }
            },
            b = function(t) {
                m.call(t.data)
            };
        h && v || (h = function(t) {
            for (var n = [], r = 1; arguments.length > r;) n.push(arguments[r++]);
            return g[++d] = function() {
                c("function" == typeof t ? t : Function(t), n)
            }, e(d), d
        }, v = function(t) {
            delete g[t]
        }, "process" == t(18)(l) ? e = function(t) {
            l.nextTick(u(m, t, 1))
        } : y && y.now ? e = function(t) {
            y.now(u(m, t, 1))
        } : p ? (i = new p, o = i.port2, i.port1.onmessage = b, e = u(o.postMessage, o, 1)) : s.addEventListener && "function" == typeof postMessage && !s.importScripts ? (e = function(t) {
            s.postMessage(t + "", "*")
        }, s.addEventListener("message", b, !1)) : e = "onreadystatechange" in a("script") ? function(t) {
            f.appendChild(a("script")).onreadystatechange = function() {
                f.removeChild(this), m.call(t)
            }
        } : function(t) {
            setTimeout(u(m, t, 1), 0)
        }), n.exports = {
            set: h,
            clear: v
        }
    }, {
        18: 18,
        25: 25,
        30: 30,
        40: 40,
        43: 43,
        46: 46
    }],
    114: [function(t, n, r) {
        var e = t(116),
            i = Math.max,
            o = Math.min;
        n.exports = function(t, n) {
            return t = e(t), t < 0 ? i(t + n, 0) : o(t, n)
        }
    }, {
        116: 116
    }],
    115: [function(t, n, r) {
        var e = t(116),
            i = t(118);
        n.exports = function(t) {
            if (void 0 === t) return 0;
            var n = e(t),
                r = i(n);
            if (n !== r) throw RangeError("Wrong length!");
            return r
        }
    }, {
        116: 116,
        118: 118
    }],
    116: [function(t, n, r) {
        var e = Math.ceil,
            i = Math.floor;
        n.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? i : e)(t)
        }
    }, {}],
    117: [function(t, n, r) {
        var e = t(47),
            i = t(28);
        n.exports = function(t) {
            return e(i(t))
        }
    }, {
        28: 28,
        47: 47
    }],
    118: [function(t, n, r) {
        var e = t(116),
            i = Math.min;
        n.exports = function(t) {
            return t > 0 ? i(e(t), 9007199254740991) : 0
        }
    }, {
        116: 116
    }],
    119: [function(t, n, r) {
        var e = t(28);
        n.exports = function(t) {
            return Object(e(t))
        }
    }, {
        28: 28
    }],
    120: [function(t, n, r) {
        var e = t(51);
        n.exports = function(t, n) {
            if (!e(t)) return t;
            var r, i;
            if (n && "function" == typeof(r = t.toString) && !e(i = r.call(t))) return i;
            if ("function" == typeof(r = t.valueOf) && !e(i = r.call(t))) return i;
            if (!n && "function" == typeof(r = t.toString) && !e(i = r.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, {
        51: 51
    }],
    121: [function(t, n, r) {
        "use strict";
        if (t(29)) {
            var e = t(60),
                i = t(40),
                o = t(35),
                u = t(33),
                c = t(123),
                f = t(122),
                a = t(25),
                s = t(6),
                l = t(92),
                h = t(42),
                v = t(93),
                p = t(116),
                y = t(118),
                d = t(115),
                g = t(114),
                m = t(120),
                b = t(41),
                S = t(17),
                w = t(51),
                x = t(119),
                _ = t(48),
                E = t(71),
                O = t(79),
                M = t(77).f,
                P = t(129),
                F = t(124),
                A = t(128),
                j = t(12),
                N = t(11),
                I = t(104),
                T = t(141),
                L = t(58),
                R = t(56),
                k = t(100),
                D = t(9),
                W = t(8),
                C = t(72),
                G = t(75),
                U = C.f,
                B = G.f,
                V = i.RangeError,
                z = i.TypeError,
                Y = i.Uint8Array,
                q = Array.prototype,
                J = f.ArrayBuffer,
                K = f.DataView,
                H = j(0),
                X = j(2),
                $ = j(3),
                Z = j(4),
                Q = j(5),
                tt = j(6),
                nt = N(!0),
                rt = N(!1),
                et = T.values,
                it = T.keys,
                ot = T.entries,
                ut = q.lastIndexOf,
                ct = q.reduce,
                ft = q.reduceRight,
                at = q.join,
                st = q.sort,
                lt = q.slice,
                ht = q.toString,
                vt = q.toLocaleString,
                pt = A("iterator"),
                yt = A("toStringTag"),
                dt = F("typed_constructor"),
                gt = F("def_constructor"),
                mt = c.CONSTR,
                bt = c.TYPED,
                St = c.VIEW,
                wt = j(1, function(t, n) {
                    return Mt(I(t, t[gt]), n)
                }),
                xt = o(function() {
                    return 1 === new Y(new Uint16Array([1]).buffer)[0]
                }),
                _t = !!Y && !!Y.prototype.set && o(function() {
                    new Y(1).set({})
                }),
                Et = function(t, n) {
                    var r = p(t);
                    if (r < 0 || r % n) throw V("Wrong offset!");
                    return r
                },
                Ot = function(t) {
                    if (w(t) && bt in t) return t;
                    throw z(t + " is not a typed array!")
                },
                Mt = function(t, n) {
                    if (!(w(t) && dt in t)) throw z("It is not a typed array constructor!");
                    return new t(n)
                },
                Pt = function(t, n) {
                    return Ft(I(t, t[gt]), n)
                },
                Ft = function(t, n) {
                    for (var r = 0, e = n.length, i = Mt(t, e); e > r;) i[r] = n[r++];
                    return i
                },
                At = function(t, n, r) {
                    U(t, n, {
                        get: function() {
                            return this._d[r]
                        }
                    })
                },
                jt = function(t) {
                    var n, r, e, i, o, u, c = x(t),
                        f = arguments.length,
                        s = f > 1 ? arguments[1] : void 0,
                        l = void 0 !== s,
                        h = P(c);
                    if (void 0 != h && !_(h)) {
                        for (u = h.call(c), e = [], n = 0; !(o = u.next()).done; n++) e.push(o.value);
                        c = e
                    }
                    for (l && f > 2 && (s = a(s, arguments[2], 2)), n = 0, r = y(c.length), i = Mt(this, r); r > n; n++) i[n] = l ? s(c[n], n) : c[n];
                    return i
                },
                Nt = function() {
                    for (var t = 0, n = arguments.length, r = Mt(this, n); n > t;) r[t] = arguments[t++];
                    return r
                },
                It = !!Y && o(function() {
                    vt.call(new Y(1))
                }),
                Tt = function() {
                    return vt.apply(It ? lt.call(Ot(this)) : Ot(this), arguments)
                },
                Lt = {
                    copyWithin: function(t, n) {
                        return W.call(Ot(this), t, n, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    every: function(t) {
                        return Z(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    fill: function(t) {
                        return D.apply(Ot(this), arguments)
                    },
                    filter: function(t) {
                        return Pt(this, X(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0))
                    },
                    find: function(t) {
                        return Q(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    findIndex: function(t) {
                        return tt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    forEach: function(t) {
                        H(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    indexOf: function(t) {
                        return rt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    includes: function(t) {
                        return nt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    join: function(t) {
                        return at.apply(Ot(this), arguments)
                    },
                    lastIndexOf: function(t) {
                        return ut.apply(Ot(this), arguments)
                    },
                    map: function(t) {
                        return wt(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    reduce: function(t) {
                        return ct.apply(Ot(this), arguments)
                    },
                    reduceRight: function(t) {
                        return ft.apply(Ot(this), arguments)
                    },
                    reverse: function() {
                        for (var t, n = this, r = Ot(n).length, e = Math.floor(r / 2), i = 0; i < e;) t = n[i], n[i++] = n[--r], n[r] = t;
                        return n
                    },
                    some: function(t) {
                        return $(Ot(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    sort: function(t) {
                        return st.call(Ot(this), t)
                    },
                    subarray: function(t, n) {
                        var r = Ot(this),
                            e = r.length,
                            i = g(t, e);
                        return new(I(r, r[gt]))(r.buffer, r.byteOffset + i * r.BYTES_PER_ELEMENT, y((void 0 === n ? e : g(n, e)) - i))
                    }
                },
                Rt = function(t, n) {
                    return Pt(this, lt.call(Ot(this), t, n))
                },
                kt = function(t) {
                    Ot(this);
                    var n = Et(arguments[1], 1),
                        r = this.length,
                        e = x(t),
                        i = y(e.length),
                        o = 0;
                    if (i + n > r) throw V("Wrong length!");
                    for (; o < i;) this[n + o] = e[o++]
                },
                Dt = {
                    entries: function() {
                        return ot.call(Ot(this))
                    },
                    keys: function() {
                        return it.call(Ot(this))
                    },
                    values: function() {
                        return et.call(Ot(this))
                    }
                },
                Wt = function(t, n) {
                    return w(t) && t[bt] && "symbol" != typeof n && n in t && String(+n) == String(n)
                },
                Ct = function(t, n) {
                    return Wt(t, n = m(n, !0)) ? l(2, t[n]) : B(t, n)
                },
                Gt = function(t, n, r) {
                    return !(Wt(t, n = m(n, !0)) && w(r) && b(r, "value")) || b(r, "get") || b(r, "set") || r.configurable || b(r, "writable") && !r.writable || b(r, "enumerable") && !r.enumerable ? U(t, n, r) : (t[n] = r.value, t)
                };
            mt || (G.f = Ct, C.f = Gt), u(u.S + u.F * !mt, "Object", {
                getOwnPropertyDescriptor: Ct,
                defineProperty: Gt
            }), o(function() {
                ht.call({})
            }) && (ht = vt = function() {
                return at.call(this)
            });
            var Ut = v({}, Lt);
            v(Ut, Dt), h(Ut, pt, Dt.values), v(Ut, {
                slice: Rt,
                set: kt,
                constructor: function() {},
                toString: ht,
                toLocaleString: Tt
            }), At(Ut, "buffer", "b"), At(Ut, "byteOffset", "o"), At(Ut, "byteLength", "l"), At(Ut, "length", "e"), U(Ut, yt, {
                get: function() {
                    return this[bt]
                }
            }), n.exports = function(t, n, r, f) {
                f = !!f;
                var a = t + (f ? "Clamped" : "") + "Array",
                    l = "get" + t,
                    v = "set" + t,
                    p = i[a],
                    g = p || {},
                    m = p && O(p),
                    b = !p || !c.ABV,
                    x = {},
                    _ = p && p.prototype,
                    P = function(t, r) {
                        var e = t._d;
                        return e.v[l](r * n + e.o, xt)
                    },
                    F = function(t, r, e) {
                        var i = t._d;
                        f && (e = (e = Math.round(e)) < 0 ? 0 : e > 255 ? 255 : 255 & e), i.v[v](r * n + i.o, e, xt)
                    },
                    A = function(t, n) {
                        U(t, n, {
                            get: function() {
                                return P(this, n)
                            },
                            set: function(t) {
                                return F(this, n, t)
                            },
                            enumerable: !0
                        })
                    };
                b ? (p = r(function(t, r, e, i) {
                    s(t, p, a, "_d");
                    var o, u, c, f, l = 0,
                        v = 0;
                    if (w(r)) {
                        if (!(r instanceof J || "ArrayBuffer" == (f = S(r)) || "SharedArrayBuffer" == f)) return bt in r ? Ft(p, r) : jt.call(p, r);
                        o = r, v = Et(e, n);
                        var g = r.byteLength;
                        if (void 0 === i) {
                            if (g % n) throw V("Wrong length!");
                            if ((u = g - v) < 0) throw V("Wrong length!")
                        } else if ((u = y(i) * n) + v > g) throw V("Wrong length!");
                        c = u / n
                    } else c = d(r), u = c * n, o = new J(u);
                    for (h(t, "_d", {
                            b: o,
                            o: v,
                            l: u,
                            e: c,
                            v: new K(o)
                        }); l < c;) A(t, l++)
                }), _ = p.prototype = E(Ut), h(_, "constructor", p)) : o(function() {
                    p(1)
                }) && o(function() {
                    new p(-1)
                }) && R(function(t) {
                    new p, new p(null), new p(1.5), new p(t)
                }, !0) || (p = r(function(t, r, e, i) {
                    s(t, p, a);
                    var o;
                    return w(r) ? r instanceof J || "ArrayBuffer" == (o = S(r)) || "SharedArrayBuffer" == o ? void 0 !== i ? new g(r, Et(e, n), i) : void 0 !== e ? new g(r, Et(e, n)) : new g(r) : bt in r ? Ft(p, r) : jt.call(p, r) : new g(d(r))
                }), H(m !== Function.prototype ? M(g).concat(M(m)) : M(g), function(t) {
                    t in p || h(p, t, g[t])
                }), p.prototype = _, e || (_.constructor = p));
                var j = _[pt],
                    N = !!j && ("values" == j.name || void 0 == j.name),
                    I = Dt.values;
                h(p, dt, !0), h(_, bt, a), h(_, St, !0), h(_, gt, p), (f ? new p(1)[yt] == a : yt in _) || U(_, yt, {
                    get: function() {
                        return a
                    }
                }), x[a] = p, u(u.G + u.W + u.F * (p != g), x), u(u.S, a, {
                    BYTES_PER_ELEMENT: n
                }), u(u.S + u.F * o(function() {
                    g.of.call(p, 1)
                }), a, {
                    from: jt,
                    of: Nt
                }), "BYTES_PER_ELEMENT" in _ || h(_, "BYTES_PER_ELEMENT", n), u(u.P, a, Lt), k(a), u(u.P + u.F * _t, a, {
                    set: kt
                }), u(u.P + u.F * !N, a, Dt), e || _.toString == ht || (_.toString = ht), u(u.P + u.F * o(function() {
                    new p(1).slice()
                }), a, {
                    slice: Rt
                }), u(u.P + u.F * (o(function() {
                    return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                }) || !o(function() {
                    _.toLocaleString.call([1, 2])
                })), a, {
                    toLocaleString: Tt
                }), L[a] = N ? j : I, e || N || h(_, pt, I)
            }
        } else n.exports = function() {}
    }, {
        100: 100,
        104: 104,
        11: 11,
        114: 114,
        115: 115,
        116: 116,
        118: 118,
        119: 119,
        12: 12,
        120: 120,
        122: 122,
        123: 123,
        124: 124,
        128: 128,
        129: 129,
        141: 141,
        17: 17,
        25: 25,
        29: 29,
        33: 33,
        35: 35,
        40: 40,
        41: 41,
        42: 42,
        48: 48,
        51: 51,
        56: 56,
        58: 58,
        6: 6,
        60: 60,
        71: 71,
        72: 72,
        75: 75,
        77: 77,
        79: 79,
        8: 8,
        9: 9,
        92: 92,
        93: 93
    }],
    122: [function(t, n, r) {
        "use strict";

        function e(t, n, r) {
            var e, i, o, u = Array(r),
                c = 8 * r - n - 1,
                f = (1 << c) - 1,
                a = f >> 1,
                s = 23 === n ? W(2, -24) - W(2, -77) : 0,
                l = 0,
                h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = D(t), t != t || t === R ? (i = t != t ? 1 : 0, e = f) : (e = C(G(t) / U), t * (o = W(2, -e)) < 1 && (e--, o *= 2), t += e + a >= 1 ? s / o : s * W(2, 1 - a), t * o >= 2 && (e++, o /= 2), e + a >= f ? (i = 0, e = f) : e + a >= 1 ? (i = (t * o - 1) * W(2, n), e += a) : (i = t * W(2, a - 1) * W(2, n), e = 0)); n >= 8; u[l++] = 255 & i, i /= 256, n -= 8);
            for (e = e << n | i, c += n; c > 0; u[l++] = 255 & e, e /= 256, c -= 8);
            return u[--l] |= 128 * h, u
        }

        function i(t, n, r) {
            var e, i = 8 * r - n - 1,
                o = (1 << i) - 1,
                u = o >> 1,
                c = i - 7,
                f = r - 1,
                a = t[f--],
                s = 127 & a;
            for (a >>= 7; c > 0; s = 256 * s + t[f], f--, c -= 8);
            for (e = s & (1 << -c) - 1, s >>= -c, c += n; c > 0; e = 256 * e + t[f], f--, c -= 8);
            if (0 === s) s = 1 - u;
            else {
                if (s === o) return e ? NaN : a ? -R : R;
                e += W(2, n), s -= u
            }
            return (a ? -1 : 1) * e * W(2, s - n)
        }

        function o(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }

        function u(t) {
            return [255 & t]
        }

        function c(t) {
            return [255 & t, t >> 8 & 255]
        }

        function f(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }

        function a(t) {
            return e(t, 52, 8)
        }

        function s(t) {
            return e(t, 23, 4)
        }

        function l(t, n, r) {
            M(t[A], n, {
                get: function() {
                    return this[r]
                }
            })
        }

        function h(t, n, r, e) {
            var i = +r,
                o = E(i);
            if (o + n > t[V]) throw L(j);
            var u = t[B]._b,
                c = o + t[z],
                f = u.slice(c, c + n);
            return e ? f : f.reverse()
        }

        function v(t, n, r, e, i, o) {
            var u = +r,
                c = E(u);
            if (c + n > t[V]) throw L(j);
            for (var f = t[B]._b, a = c + t[z], s = e(+i), l = 0; l < n; l++) f[a + l] = s[o ? l : n - l - 1]
        }
        var p = t(40),
            y = t(29),
            d = t(60),
            g = t(123),
            m = t(42),
            b = t(93),
            S = t(35),
            w = t(6),
            x = t(116),
            _ = t(118),
            E = t(115),
            O = t(77).f,
            M = t(72).f,
            P = t(9),
            F = t(101),
            A = "prototype",
            j = "Wrong index!",
            N = p.ArrayBuffer,
            I = p.DataView,
            T = p.Math,
            L = p.RangeError,
            R = p.Infinity,
            k = N,
            D = T.abs,
            W = T.pow,
            C = T.floor,
            G = T.log,
            U = T.LN2,
            B = y ? "_b" : "buffer",
            V = y ? "_l" : "byteLength",
            z = y ? "_o" : "byteOffset";
        if (g.ABV) {
            if (!S(function() {
                    N(1)
                }) || !S(function() {
                    new N(-1)
                }) || S(function() {
                    return new N, new N(1.5), new N(NaN), "ArrayBuffer" != N.name
                })) {
                N = function(t) {
                    return w(this, N), new k(E(t))
                };
                for (var Y, q = N[A] = k[A], J = O(k), K = 0; J.length > K;)(Y = J[K++]) in N || m(N, Y, k[Y]);
                d || (q.constructor = N)
            }
            var H = new I(new N(2)),
                X = I[A].setInt8;
            H.setInt8(0, 2147483648), H.setInt8(1, 2147483649), !H.getInt8(0) && H.getInt8(1) || b(I[A], {
                setInt8: function(t, n) {
                    X.call(this, t, n << 24 >> 24)
                },
                setUint8: function(t, n) {
                    X.call(this, t, n << 24 >> 24)
                }
            }, !0)
        } else N = function(t) {
            w(this, N, "ArrayBuffer");
            var n = E(t);
            this._b = P.call(Array(n), 0), this[V] = n
        }, I = function(t, n, r) {
            w(this, I, "DataView"), w(t, N, "DataView");
            var e = t[V],
                i = x(n);
            if (i < 0 || i > e) throw L("Wrong offset!");
            if (r = void 0 === r ? e - i : _(r), i + r > e) throw L("Wrong length!");
            this[B] = t, this[z] = i, this[V] = r
        }, y && (l(N, "byteLength", "_l"), l(I, "buffer", "_b"), l(I, "byteLength", "_l"), l(I, "byteOffset", "_o")), b(I[A], {
            getInt8: function(t) {
                return h(this, 1, t)[0] << 24 >> 24
            },
            getUint8: function(t) {
                return h(this, 1, t)[0]
            },
            getInt16: function(t) {
                var n = h(this, 2, t, arguments[1]);
                return (n[1] << 8 | n[0]) << 16 >> 16
            },
            getUint16: function(t) {
                var n = h(this, 2, t, arguments[1]);
                return n[1] << 8 | n[0]
            },
            getInt32: function(t) {
                return o(h(this, 4, t, arguments[1]))
            },
            getUint32: function(t) {
                return o(h(this, 4, t, arguments[1])) >>> 0
            },
            getFloat32: function(t) {
                return i(h(this, 4, t, arguments[1]), 23, 4)
            },
            getFloat64: function(t) {
                return i(h(this, 8, t, arguments[1]), 52, 8)
            },
            setInt8: function(t, n) {
                v(this, 1, t, u, n)
            },
            setUint8: function(t, n) {
                v(this, 1, t, u, n)
            },
            setInt16: function(t, n) {
                v(this, 2, t, c, n, arguments[2])
            },
            setUint16: function(t, n) {
                v(this, 2, t, c, n, arguments[2])
            },
            setInt32: function(t, n) {
                v(this, 4, t, f, n, arguments[2])
            },
            setUint32: function(t, n) {
                v(this, 4, t, f, n, arguments[2])
            },
            setFloat32: function(t, n) {
                v(this, 4, t, s, n, arguments[2])
            },
            setFloat64: function(t, n) {
                v(this, 8, t, a, n, arguments[2])
            }
        });
        F(N, "ArrayBuffer"), F(I, "DataView"), m(I[A], g.VIEW, !0), r.ArrayBuffer = N, r.DataView = I
    }, {
        101: 101,
        115: 115,
        116: 116,
        118: 118,
        123: 123,
        29: 29,
        35: 35,
        40: 40,
        42: 42,
        6: 6,
        60: 60,
        72: 72,
        77: 77,
        9: 9,
        93: 93
    }],
    123: [function(t, n, r) {
        for (var e, i = t(40), o = t(42), u = t(124), c = u("typed_array"), f = u("view"), a = !(!i.ArrayBuffer || !i.DataView), s = a, l = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;)(e = i[h[l++]]) ? (o(e.prototype, c, !0), o(e.prototype, f, !0)) : s = !1;
        n.exports = {
            ABV: a,
            CONSTR: s,
            TYPED: c,
            VIEW: f
        }
    }, {
        124: 124,
        40: 40,
        42: 42
    }],
    124: [function(t, n, r) {
        var e = 0,
            i = Math.random();
        n.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + i).toString(36))
        }
    }, {}],
    125: [function(t, n, r) {
        var e = t(51);
        n.exports = function(t, n) {
            if (!e(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
            return t
        }
    }, {
        51: 51
    }],
    126: [function(t, n, r) {
        var e = t(40),
            i = t(23),
            o = t(60),
            u = t(127),
            c = t(72).f;
        n.exports = function(t) {
            var n = i.Symbol || (i.Symbol = o ? {} : e.Symbol || {});
            "_" == t.charAt(0) || t in n || c(n, t, {
                value: u.f(t)
            })
        }
    }, {
        127: 127,
        23: 23,
        40: 40,
        60: 60,
        72: 72
    }],
    127: [function(t, n, r) {
        r.f = t(128)
    }, {
        128: 128
    }],
    128: [function(t, n, r) {
        var e = t(103)("wks"),
            i = t(124),
            o = t(40).Symbol,
            u = "function" == typeof o;
        (n.exports = function(t) {
            return e[t] || (e[t] = u && o[t] || (u ? o : i)("Symbol." + t))
        }).store = e
    }, {
        103: 103,
        124: 124,
        40: 40
    }],
    129: [function(t, n, r) {
        var e = t(17),
            i = t(128)("iterator"),
            o = t(58);
        n.exports = t(23).getIteratorMethod = function(t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[e(t)]
        }
    }, {
        128: 128,
        17: 17,
        23: 23,
        58: 58
    }],
    130: [function(t, n, r) {
        var e = t(33),
            i = t(95)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        e(e.S, "RegExp", {
            escape: function(t) {
                return i(t)
            }
        })
    }, {
        33: 33,
        95: 95
    }],
    131: [function(t, n, r) {
        var e = t(33);
        e(e.P, "Array", {
            copyWithin: t(8)
        }), t(5)("copyWithin")
    }, {
        33: 33,
        5: 5,
        8: 8
    }],
    132: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(12)(4);
        e(e.P + e.F * !t(105)([].every, !0), "Array", {
            every: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {
        105: 105,
        12: 12,
        33: 33
    }],
    133: [function(t, n, r) {
        var e = t(33);
        e(e.P, "Array", {
            fill: t(9)
        }), t(5)("fill")
    }, {
        33: 33,
        5: 5,
        9: 9
    }],
    134: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(12)(2);
        e(e.P + e.F * !t(105)([].filter, !0), "Array", {
            filter: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {
        105: 105,
        12: 12,
        33: 33
    }],
    135: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(12)(6),
            o = "findIndex",
            u = !0;
        o in [] && Array(1)[o](function() {
            u = !1
        }), e(e.P + e.F * u, "Array", {
            findIndex: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), t(5)(o)
    }, {
        12: 12,
        33: 33,
        5: 5
    }],
    136: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(12)(5),
            o = !0;
        "find" in [] && Array(1).find(function() {
            o = !1
        }), e(e.P + e.F * o, "Array", {
            find: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), t(5)("find")
    }, {
        12: 12,
        33: 33,
        5: 5
    }],
    137: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(12)(0),
            o = t(105)([].forEach, !0);
        e(e.P + e.F * !o, "Array", {
            forEach: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {
        105: 105,
        12: 12,
        33: 33
    }],
    138: [function(t, n, r) {
        "use strict";
        var e = t(25),
            i = t(33),
            o = t(119),
            u = t(53),
            c = t(48),
            f = t(118),
            a = t(24),
            s = t(129);
        i(i.S + i.F * !t(56)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var n, r, i, l, h = o(t),
                    v = "function" == typeof this ? this : Array,
                    p = arguments.length,
                    y = p > 1 ? arguments[1] : void 0,
                    d = void 0 !== y,
                    g = 0,
                    m = s(h);
                if (d && (y = e(y, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || v == Array && c(m))
                    for (n = f(h.length), r = new v(n); n > g; g++) a(r, g, d ? y(h[g], g) : h[g]);
                else
                    for (l = m.call(h), r = new v; !(i = l.next()).done; g++) a(r, g, d ? u(l, y, [i.value, g], !0) : i.value);
                return r.length = g, r
            }
        })
    }, {
        118: 118,
        119: 119,
        129: 129,
        24: 24,
        25: 25,
        33: 33,
        48: 48,
        53: 53,
        56: 56
    }],
    139: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(11)(!1),
            o = [].indexOf,
            u = !!o && 1 / [1].indexOf(1, -0) < 0;
        e(e.P + e.F * (u || !t(105)(o)), "Array", {
            indexOf: function(t) {
                return u ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
            }
        })
    }, {
        105: 105,
        11: 11,
        33: 33
    }],
    140: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Array", {
            isArray: t(49)
        })
    }, {
        33: 33,
        49: 49
    }],
    141: [function(t, n, r) {
        "use strict";
        var e = t(5),
            i = t(57),
            o = t(58),
            u = t(117);
        n.exports = t(55)(Array, "Array", function(t, n) {
            this._t = u(t), this._i = 0, this._k = n
        }, function() {
            var t = this._t,
                n = this._k,
                r = this._i++;
            return !t || r >= t.length ? (this._t = void 0, i(1)) : "keys" == n ? i(0, r) : "values" == n ? i(0, t[r]) : i(0, [r, t[r]])
        }, "values"), o.Arguments = o.Array, e("keys"), e("values"), e("entries")
    }, {
        117: 117,
        5: 5,
        55: 55,
        57: 57,
        58: 58
    }],
    142: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(117),
            o = [].join;
        e(e.P + e.F * (t(47) != Object || !t(105)(o)), "Array", {
            join: function(t) {
                return o.call(i(this), void 0 === t ? "," : t)
            }
        })
    }, {
        105: 105,
        117: 117,
        33: 33,
        47: 47
    }],
    143: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(117),
            o = t(116),
            u = t(118),
            c = [].lastIndexOf,
            f = !!c && 1 / [1].lastIndexOf(1, -0) < 0;
        e(e.P + e.F * (f || !t(105)(c)), "Array", {
            lastIndexOf: function(t) {
                if (f) return c.apply(this, arguments) || 0;
                var n = i(this),
                    r = u(n.length),
                    e = r - 1;
                for (arguments.length > 1 && (e = Math.min(e, o(arguments[1]))), e < 0 && (e = r + e); e >= 0; e--)
                    if (e in n && n[e] === t) return e || 0;
                return -1
            }
        })
    }, {
        105: 105,
        116: 116,
        117: 117,
        118: 118,
        33: 33
    }],
    144: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(12)(1);
        e(e.P + e.F * !t(105)([].map, !0), "Array", {
            map: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {
        105: 105,
        12: 12,
        33: 33
    }],
    145: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(24);
        e(e.S + e.F * t(35)(function() {
            function t() {}
            return !(Array.of.call(t) instanceof t)
        }), "Array", {
            of: function() {
                for (var t = 0, n = arguments.length, r = new("function" == typeof this ? this : Array)(n); n > t;) i(r, t, arguments[t++]);
                return r.length = n, r
            }
        })
    }, {
        24: 24,
        33: 33,
        35: 35
    }],
    146: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(13);
        e(e.P + e.F * !t(105)([].reduceRight, !0), "Array", {
            reduceRight: function(t) {
                return i(this, t, arguments.length, arguments[1], !0)
            }
        })
    }, {
        105: 105,
        13: 13,
        33: 33
    }],
    147: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(13);
        e(e.P + e.F * !t(105)([].reduce, !0), "Array", {
            reduce: function(t) {
                return i(this, t, arguments.length, arguments[1], !1)
            }
        })
    }, {
        105: 105,
        13: 13,
        33: 33
    }],
    148: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(43),
            o = t(18),
            u = t(114),
            c = t(118),
            f = [].slice;
        e(e.P + e.F * t(35)(function() {
            i && f.call(i)
        }), "Array", {
            slice: function(t, n) {
                var r = c(this.length),
                    e = o(this);
                if (n = void 0 === n ? r : n, "Array" == e) return f.call(this, t, n);
                for (var i = u(t, r), a = u(n, r), s = c(a - i), l = Array(s), h = 0; h < s; h++) l[h] = "String" == e ? this.charAt(i + h) : this[i + h];
                return l
            }
        })
    }, {
        114: 114,
        118: 118,
        18: 18,
        33: 33,
        35: 35,
        43: 43
    }],
    149: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(12)(3);
        e(e.P + e.F * !t(105)([].some, !0), "Array", {
            some: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, {
        105: 105,
        12: 12,
        33: 33
    }],
    150: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(3),
            o = t(119),
            u = t(35),
            c = [].sort,
            f = [1, 2, 3];
        e(e.P + e.F * (u(function() {
            f.sort(void 0)
        }) || !u(function() {
            f.sort(null)
        }) || !t(105)(c)), "Array", {
            sort: function(t) {
                return void 0 === t ? c.call(o(this)) : c.call(o(this), i(t))
            }
        })
    }, {
        105: 105,
        119: 119,
        3: 3,
        33: 33,
        35: 35
    }],
    151: [function(t, n, r) {
        t(100)("Array")
    }, {
        100: 100
    }],
    152: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Date", {
            now: function() {
                return (new Date).getTime()
            }
        })
    }, {
        33: 33
    }],
    153: [function(t, n, r) {
        var e = t(33),
            i = t(26);
        e(e.P + e.F * (Date.prototype.toISOString !== i), "Date", {
            toISOString: i
        })
    }, {
        26: 26,
        33: 33
    }],
    154: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(119),
            o = t(120);
        e(e.P + e.F * t(35)(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function() {
                    return 1
                }
            })
        }), "Date", {
            toJSON: function(t) {
                var n = i(this),
                    r = o(n);
                return "number" != typeof r || isFinite(r) ? n.toISOString() : null
            }
        })
    }, {
        119: 119,
        120: 120,
        33: 33,
        35: 35
    }],
    155: [function(t, n, r) {
        var e = t(128)("toPrimitive"),
            i = Date.prototype;
        e in i || t(42)(i, e, t(27))
    }, {
        128: 128,
        27: 27,
        42: 42
    }],
    156: [function(t, n, r) {
        var e = Date.prototype,
            i = e.toString,
            o = e.getTime;
        new Date(NaN) + "" != "Invalid Date" && t(94)(e, "toString", function() {
            var t = o.call(this);
            return t === t ? i.call(this) : "Invalid Date"
        })
    }, {
        94: 94
    }],
    157: [function(t, n, r) {
        var e = t(33);
        e(e.P, "Function", {
            bind: t(16)
        })
    }, {
        16: 16,
        33: 33
    }],
    158: [function(t, n, r) {
        "use strict";
        var e = t(51),
            i = t(79),
            o = t(128)("hasInstance"),
            u = Function.prototype;
        o in u || t(72).f(u, o, {
            value: function(t) {
                if ("function" != typeof this || !e(t)) return !1;
                if (!e(this.prototype)) return t instanceof this;
                for (; t = i(t);)
                    if (this.prototype === t) return !0;
                return !1
            }
        })
    }, {
        128: 128,
        51: 51,
        72: 72,
        79: 79
    }],
    159: [function(t, n, r) {
        var e = t(72).f,
            i = Function.prototype,
            o = /^\s*function ([^ (]*)/;
        "name" in i || t(29) && e(i, "name", {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(o)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }, {
        29: 29,
        72: 72
    }],
    160: [function(t, n, r) {
        "use strict";
        var e = t(19),
            i = t(125);
        n.exports = t(22)("Map", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function(t) {
                var n = e.getEntry(i(this, "Map"), t);
                return n && n.v
            },
            set: function(t, n) {
                return e.def(i(this, "Map"), 0 === t ? 0 : t, n)
            }
        }, e, !0)
    }, {
        125: 125,
        19: 19,
        22: 22
    }],
    161: [function(t, n, r) {
        var e = t(33),
            i = t(63),
            o = Math.sqrt,
            u = Math.acosh;
        e(e.S + e.F * !(u && 710 == Math.floor(u(Number.MAX_VALUE)) && u(1 / 0) == 1 / 0), "Math", {
            acosh: function(t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
            }
        })
    }, {
        33: 33,
        63: 63
    }],
    162: [function(t, n, r) {
        function e(t) {
            return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
        }
        var i = t(33),
            o = Math.asinh;
        i(i.S + i.F * !(o && 1 / o(0) > 0), "Math", {
            asinh: e
        })
    }, {
        33: 33
    }],
    163: [function(t, n, r) {
        var e = t(33),
            i = Math.atanh;
        e(e.S + e.F * !(i && 1 / i(-0) < 0), "Math", {
            atanh: function(t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
            }
        })
    }, {
        33: 33
    }],
    164: [function(t, n, r) {
        var e = t(33),
            i = t(65);
        e(e.S, "Math", {
            cbrt: function(t) {
                return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
            }
        })
    }, {
        33: 33,
        65: 65
    }],
    165: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            clz32: function(t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
            }
        })
    }, {
        33: 33
    }],
    166: [function(t, n, r) {
        var e = t(33),
            i = Math.exp;
        e(e.S, "Math", {
            cosh: function(t) {
                return (i(t = +t) + i(-t)) / 2
            }
        })
    }, {
        33: 33
    }],
    167: [function(t, n, r) {
        var e = t(33),
            i = t(61);
        e(e.S + e.F * (i != Math.expm1), "Math", {
            expm1: i
        })
    }, {
        33: 33,
        61: 61
    }],
    168: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            fround: t(62)
        })
    }, {
        33: 33,
        62: 62
    }],
    169: [function(t, n, r) {
        var e = t(33),
            i = Math.abs;
        e(e.S, "Math", {
            hypot: function(t, n) {
                for (var r, e, o = 0, u = 0, c = arguments.length, f = 0; u < c;) r = i(arguments[u++]), f < r ? (e = f / r, o = o * e * e + 1, f = r) : r > 0 ? (e = r / f, o += e * e) : o += r;
                return f === 1 / 0 ? 1 / 0 : f * Math.sqrt(o)
            }
        })
    }, {
        33: 33
    }],
    170: [function(t, n, r) {
        var e = t(33),
            i = Math.imul;
        e(e.S + e.F * t(35)(function() {
            return -5 != i(4294967295, 5) || 2 != i.length
        }), "Math", {
            imul: function(t, n) {
                var r = +t,
                    e = +n,
                    i = 65535 & r,
                    o = 65535 & e;
                return 0 | i * o + ((65535 & r >>> 16) * o + i * (65535 & e >>> 16) << 16 >>> 0)
            }
        })
    }, {
        33: 33,
        35: 35
    }],
    171: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            log10: function(t) {
                return Math.log(t) * Math.LOG10E
            }
        })
    }, {
        33: 33
    }],
    172: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            log1p: t(63)
        })
    }, {
        33: 33,
        63: 63
    }],
    173: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            log2: function(t) {
                return Math.log(t) / Math.LN2
            }
        })
    }, {
        33: 33
    }],
    174: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            sign: t(65)
        })
    }, {
        33: 33,
        65: 65
    }],
    175: [function(t, n, r) {
        var e = t(33),
            i = t(61),
            o = Math.exp;
        e(e.S + e.F * t(35)(function() {
            return -2e-17 != !Math.sinh(-2e-17)
        }), "Math", {
            sinh: function(t) {
                return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
            }
        })
    }, {
        33: 33,
        35: 35,
        61: 61
    }],
    176: [function(t, n, r) {
        var e = t(33),
            i = t(61),
            o = Math.exp;
        e(e.S, "Math", {
            tanh: function(t) {
                var n = i(t = +t),
                    r = i(-t);
                return n == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (n - r) / (o(t) + o(-t))
            }
        })
    }, {
        33: 33,
        61: 61
    }],
    177: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            trunc: function(t) {
                return (t > 0 ? Math.floor : Math.ceil)(t)
            }
        })
    }, {
        33: 33
    }],
    178: [function(t, n, r) {
        "use strict";
        var e = t(40),
            i = t(41),
            o = t(18),
            u = t(45),
            c = t(120),
            f = t(35),
            a = t(77).f,
            s = t(75).f,
            l = t(72).f,
            h = t(111).trim,
            v = e.Number,
            p = v,
            y = v.prototype,
            d = "Number" == o(t(71)(y)),
            g = "trim" in String.prototype,
            m = function(t) {
                var n = c(t, !1);
                if ("string" == typeof n && n.length > 2) {
                    n = g ? n.trim() : h(n, 3);
                    var r, e, i, o = n.charCodeAt(0);
                    if (43 === o || 45 === o) {
                        if (88 === (r = n.charCodeAt(2)) || 120 === r) return NaN
                    } else if (48 === o) {
                        switch (n.charCodeAt(1)) {
                            case 66:
                            case 98:
                                e = 2, i = 49;
                                break;
                            case 79:
                            case 111:
                                e = 8, i = 55;
                                break;
                            default:
                                return +n
                        }
                        for (var u, f = n.slice(2), a = 0, s = f.length; a < s; a++)
                            if ((u = f.charCodeAt(a)) < 48 || u > i) return NaN;
                        return parseInt(f, e)
                    }
                }
                return +n
            };
        if (!v(" 0o1") || !v("0b1") || v("+0x1")) {
            v = function(t) {
                var n = arguments.length < 1 ? 0 : t,
                    r = this;
                return r instanceof v && (d ? f(function() {
                    y.valueOf.call(r)
                }) : "Number" != o(r)) ? u(new p(m(n)), r, v) : m(n)
            };
            for (var b, S = t(29) ? a(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; S.length > w; w++) i(p, b = S[w]) && !i(v, b) && l(v, b, s(p, b));
            v.prototype = y, y.constructor = v, t(94)(e, "Number", v)
        }
    }, {
        111: 111,
        120: 120,
        18: 18,
        29: 29,
        35: 35,
        40: 40,
        41: 41,
        45: 45,
        71: 71,
        72: 72,
        75: 75,
        77: 77,
        94: 94
    }],
    179: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Number", {
            EPSILON: Math.pow(2, -52)
        })
    }, {
        33: 33
    }],
    180: [function(t, n, r) {
        var e = t(33),
            i = t(40).isFinite;
        e(e.S, "Number", {
            isFinite: function(t) {
                return "number" == typeof t && i(t)
            }
        })
    }, {
        33: 33,
        40: 40
    }],
    181: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Number", {
            isInteger: t(50)
        })
    }, {
        33: 33,
        50: 50
    }],
    182: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Number", {
            isNaN: function(t) {
                return t != t
            }
        })
    }, {
        33: 33
    }],
    183: [function(t, n, r) {
        var e = t(33),
            i = t(50),
            o = Math.abs;
        e(e.S, "Number", {
            isSafeInteger: function(t) {
                return i(t) && o(t) <= 9007199254740991
            }
        })
    }, {
        33: 33,
        50: 50
    }],
    184: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Number", {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }, {
        33: 33
    }],
    185: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Number", {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }, {
        33: 33
    }],
    186: [function(t, n, r) {
        var e = t(33),
            i = t(86);
        e(e.S + e.F * (Number.parseFloat != i), "Number", {
            parseFloat: i
        })
    }, {
        33: 33,
        86: 86
    }],
    187: [function(t, n, r) {
        var e = t(33),
            i = t(87);
        e(e.S + e.F * (Number.parseInt != i), "Number", {
            parseInt: i
        })
    }, {
        33: 33,
        87: 87
    }],
    188: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(116),
            o = t(4),
            u = t(110),
            c = 1..toFixed,
            f = Math.floor,
            a = [0, 0, 0, 0, 0, 0],
            s = "Number.toFixed: incorrect invocation!",
            l = function(t, n) {
                for (var r = -1, e = n; ++r < 6;) e += t * a[r], a[r] = e % 1e7, e = f(e / 1e7)
            },
            h = function(t) {
                for (var n = 6, r = 0; --n >= 0;) r += a[n], a[n] = f(r / t), r = r % t * 1e7
            },
            v = function() {
                for (var t = 6, n = ""; --t >= 0;)
                    if ("" !== n || 0 === t || 0 !== a[t]) {
                        var r = String(a[t]);
                        n = "" === n ? r : n + u.call("0", 7 - r.length) + r
                    } return n
            },
            p = function(t, n, r) {
                return 0 === n ? r : n % 2 == 1 ? p(t, n - 1, r * t) : p(t * t, n / 2, r)
            },
            y = function(t) {
                for (var n = 0, r = t; r >= 4096;) n += 12, r /= 4096;
                for (; r >= 2;) n += 1, r /= 2;
                return n
            };
        e(e.P + e.F * (!!c && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !t(35)(function() {
            c.call({})
        })), "Number", {
            toFixed: function(t) {
                var n, r, e, c, f = o(this, s),
                    a = i(t),
                    d = "",
                    g = "0";
                if (a < 0 || a > 20) throw RangeError(s);
                if (f != f) return "NaN";
                if (f <= -1e21 || f >= 1e21) return String(f);
                if (f < 0 && (d = "-", f = -f), f > 1e-21)
                    if (n = y(f * p(2, 69, 1)) - 69, r = n < 0 ? f * p(2, -n, 1) : f / p(2, n, 1), r *= 4503599627370496, (n = 52 - n) > 0) {
                        for (l(0, r), e = a; e >= 7;) l(1e7, 0), e -= 7;
                        for (l(p(10, e, 1), 0), e = n - 1; e >= 23;) h(1 << 23), e -= 23;
                        h(1 << e), l(1, 1), h(2), g = v()
                    } else l(0, r), l(1 << -n, 0), g = v() + u.call("0", a);
                return a > 0 ? (c = g.length, g = d + (c <= a ? "0." + u.call("0", a - c) + g : g.slice(0, c - a) + "." + g.slice(c - a))) : g = d + g, g
            }
        })
    }, {
        110: 110,
        116: 116,
        33: 33,
        35: 35,
        4: 4
    }],
    189: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(35),
            o = t(4),
            u = 1..toPrecision;
        e(e.P + e.F * (i(function() {
            return "1" !== u.call(1, void 0)
        }) || !i(function() {
            u.call({})
        })), "Number", {
            toPrecision: function(t) {
                var n = o(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === t ? u.call(n) : u.call(n, t)
            }
        })
    }, {
        33: 33,
        35: 35,
        4: 4
    }],
    190: [function(t, n, r) {
        var e = t(33);
        e(e.S + e.F, "Object", {
            assign: t(70)
        })
    }, {
        33: 33,
        70: 70
    }],
    191: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Object", {
            create: t(71)
        })
    }, {
        33: 33,
        71: 71
    }],
    192: [function(t, n, r) {
        var e = t(33);
        e(e.S + e.F * !t(29), "Object", {
            defineProperties: t(73)
        })
    }, {
        29: 29,
        33: 33,
        73: 73
    }],
    193: [function(t, n, r) {
        var e = t(33);
        e(e.S + e.F * !t(29), "Object", {
            defineProperty: t(72).f
        })
    }, {
        29: 29,
        33: 33,
        72: 72
    }],
    194: [function(t, n, r) {
        var e = t(51),
            i = t(66).onFreeze;
        t(83)("freeze", function(t) {
            return function(n) {
                return t && e(n) ? t(i(n)) : n
            }
        })
    }, {
        51: 51,
        66: 66,
        83: 83
    }],
    195: [function(t, n, r) {
        var e = t(117),
            i = t(75).f;
        t(83)("getOwnPropertyDescriptor", function() {
            return function(t, n) {
                return i(e(t), n)
            }
        })
    }, {
        117: 117,
        75: 75,
        83: 83
    }],
    196: [function(t, n, r) {
        t(83)("getOwnPropertyNames", function() {
            return t(76).f
        })
    }, {
        76: 76,
        83: 83
    }],
    197: [function(t, n, r) {
        var e = t(119),
            i = t(79);
        t(83)("getPrototypeOf", function() {
            return function(t) {
                return i(e(t))
            }
        })
    }, {
        119: 119,
        79: 79,
        83: 83
    }],
    198: [function(t, n, r) {
        var e = t(51);
        t(83)("isExtensible", function(t) {
            return function(n) {
                return !!e(n) && (!t || t(n))
            }
        })
    }, {
        51: 51,
        83: 83
    }],
    199: [function(t, n, r) {
        var e = t(51);
        t(83)("isFrozen", function(t) {
            return function(n) {
                return !e(n) || !!t && t(n)
            }
        })
    }, {
        51: 51,
        83: 83
    }],
    200: [function(t, n, r) {
        var e = t(51);
        t(83)("isSealed", function(t) {
            return function(n) {
                return !e(n) || !!t && t(n)
            }
        })
    }, {
        51: 51,
        83: 83
    }],
    201: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Object", {
            is: t(96)
        })
    }, {
        33: 33,
        96: 96
    }],
    202: [function(t, n, r) {
        var e = t(119),
            i = t(81);
        t(83)("keys", function() {
            return function(t) {
                return i(e(t))
            }
        })
    }, {
        119: 119,
        81: 81,
        83: 83
    }],
    203: [function(t, n, r) {
        var e = t(51),
            i = t(66).onFreeze;
        t(83)("preventExtensions", function(t) {
            return function(n) {
                return t && e(n) ? t(i(n)) : n
            }
        })
    }, {
        51: 51,
        66: 66,
        83: 83
    }],
    204: [function(t, n, r) {
        var e = t(51),
            i = t(66).onFreeze;
        t(83)("seal", function(t) {
            return function(n) {
                return t && e(n) ? t(i(n)) : n
            }
        })
    }, {
        51: 51,
        66: 66,
        83: 83
    }],
    205: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Object", {
            setPrototypeOf: t(99).set
        })
    }, {
        33: 33,
        99: 99
    }],
    206: [function(t, n, r) {
        "use strict";
        var e = t(17),
            i = {};
        i[t(128)("toStringTag")] = "z", i + "" != "[object z]" && t(94)(Object.prototype, "toString", function() {
            return "[object " + e(this) + "]"
        }, !0)
    }, {
        128: 128,
        17: 17,
        94: 94
    }],
    207: [function(t, n, r) {
        var e = t(33),
            i = t(86);
        e(e.G + e.F * (parseFloat != i), {
            parseFloat: i
        })
    }, {
        33: 33,
        86: 86
    }],
    208: [function(t, n, r) {
        var e = t(33),
            i = t(87);
        e(e.G + e.F * (parseInt != i), {
            parseInt: i
        })
    }, {
        33: 33,
        87: 87
    }],
    209: [function(t, n, r) {
        "use strict";
        var e, i, o, u, c = t(60),
            f = t(40),
            a = t(25),
            s = t(17),
            l = t(33),
            h = t(51),
            v = t(3),
            p = t(6),
            y = t(39),
            d = t(104),
            g = t(113).set,
            m = t(68)(),
            b = t(69),
            S = t(90),
            w = t(91),
            x = f.TypeError,
            _ = f.process,
            E = f.Promise,
            O = "process" == s(_),
            M = function() {},
            P = i = b.f,
            F = !! function() {
                try {
                    var n = E.resolve(1),
                        r = (n.constructor = {})[t(128)("species")] = function(t) {
                            t(M, M)
                        };
                    return (O || "function" == typeof PromiseRejectionEvent) && n.then(M) instanceof r
                } catch (t) {}
            }(),
            A = c ? function(t, n) {
                return t === n || t === E && n === u
            } : function(t, n) {
                return t === n
            },
            j = function(t) {
                var n;
                return !(!h(t) || "function" != typeof(n = t.then)) && n
            },
            N = function(t, n) {
                if (!t._n) {
                    t._n = !0;
                    var r = t._c;
                    m(function() {
                        for (var e = t._v, i = 1 == t._s, o = 0; r.length > o;) ! function(n) {
                            var r, o, u = i ? n.ok : n.fail,
                                c = n.resolve,
                                f = n.reject,
                                a = n.domain;
                            try {
                                u ? (i || (2 == t._h && L(t), t._h = 1), !0 === u ? r = e : (a && a.enter(), r = u(e), a && a.exit()), r === n.promise ? f(x("Promise-chain cycle")) : (o = j(r)) ? o.call(r, c, f) : c(r)) : f(e)
                            } catch (t) {
                                f(t)
                            }
                        }(r[o++]);
                        t._c = [], t._n = !1, n && !t._h && I(t)
                    })
                }
            },
            I = function(t) {
                g.call(f, function() {
                    var n, r, e, i = t._v,
                        o = T(t);
                    if (o && (n = S(function() {
                            O ? _.emit("unhandledRejection", i, t) : (r = f.onunhandledrejection) ? r({
                                promise: t,
                                reason: i
                            }) : (e = f.console) && e.error && e.error("Unhandled promise rejection", i)
                        }), t._h = O || T(t) ? 2 : 1), t._a = void 0, o && n.e) throw n.v
                })
            },
            T = function(t) {
                if (1 == t._h) return !1;
                for (var n, r = t._a || t._c, e = 0; r.length > e;)
                    if (n = r[e++], n.fail || !T(n.promise)) return !1;
                return !0
            },
            L = function(t) {
                g.call(f, function() {
                    var n;
                    O ? _.emit("rejectionHandled", t) : (n = f.onrejectionhandled) && n({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            R = function(t) {
                var n = this;
                n._d || (n._d = !0, n = n._w || n, n._v = t, n._s = 2, n._a || (n._a = n._c.slice()), N(n, !0))
            },
            k = function(t) {
                var n, r = this;
                if (!r._d) {
                    r._d = !0, r = r._w || r;
                    try {
                        if (r === t) throw x("Promise can't be resolved itself");
                        (n = j(t)) ? m(function() {
                            var e = {
                                _w: r,
                                _d: !1
                            };
                            try {
                                n.call(t, a(k, e, 1), a(R, e, 1))
                            } catch (t) {
                                R.call(e, t)
                            }
                        }): (r._v = t, r._s = 1, N(r, !1))
                    } catch (t) {
                        R.call({
                            _w: r,
                            _d: !1
                        }, t)
                    }
                }
            };
        F || (E = function(t) {
            p(this, E, "Promise", "_h"), v(t), e.call(this);
            try {
                t(a(k, this, 1), a(R, this, 1))
            } catch (t) {
                R.call(this, t)
            }
        }, e = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, e.prototype = t(93)(E.prototype, {
            then: function(t, n) {
                var r = P(d(this, E));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = O ? _.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && N(this, !1), r.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), o = function() {
            var t = new e;
            this.promise = t, this.resolve = a(k, t, 1), this.reject = a(R, t, 1)
        }, b.f = P = function(t) {
            return A(E, t) ? new o(t) : i(t)
        }), l(l.G + l.W + l.F * !F, {
            Promise: E
        }), t(101)(E, "Promise"), t(100)("Promise"), u = t(23).Promise, l(l.S + l.F * !F, "Promise", {
            reject: function(t) {
                var n = P(this);
                return (0, n.reject)(t), n.promise
            }
        }), l(l.S + l.F * (c || !F), "Promise", {
            resolve: function(t) {
                return t instanceof E && A(t.constructor, this) ? t : w(this, t)
            }
        }), l(l.S + l.F * !(F && t(56)(function(t) {
            E.all(t).catch(M)
        })), "Promise", {
            all: function(t) {
                var n = this,
                    r = P(n),
                    e = r.resolve,
                    i = r.reject,
                    o = S(function() {
                        var r = [],
                            o = 0,
                            u = 1;
                        y(t, !1, function(t) {
                            var c = o++,
                                f = !1;
                            r.push(void 0), u++, n.resolve(t).then(function(t) {
                                f || (f = !0, r[c] = t, --u || e(r))
                            }, i)
                        }), --u || e(r)
                    });
                return o.e && i(o.v), r.promise
            },
            race: function(t) {
                var n = this,
                    r = P(n),
                    e = r.reject,
                    i = S(function() {
                        y(t, !1, function(t) {
                            n.resolve(t).then(r.resolve, e)
                        })
                    });
                return i.e && e(i.v), r.promise
            }
        })
    }, {
        100: 100,
        101: 101,
        104: 104,
        113: 113,
        128: 128,
        17: 17,
        23: 23,
        25: 25,
        3: 3,
        33: 33,
        39: 39,
        40: 40,
        51: 51,
        56: 56,
        6: 6,
        60: 60,
        68: 68,
        69: 69,
        90: 90,
        91: 91,
        93: 93
    }],
    210: [function(t, n, r) {
        var e = t(33),
            i = t(3),
            o = t(7),
            u = (t(40).Reflect || {}).apply,
            c = Function.apply;
        e(e.S + e.F * !t(35)(function() {
            u(function() {})
        }), "Reflect", {
            apply: function(t, n, r) {
                var e = i(t),
                    f = o(r);
                return u ? u(e, n, f) : c.call(e, n, f)
            }
        })
    }, {
        3: 3,
        33: 33,
        35: 35,
        40: 40,
        7: 7
    }],
    211: [function(t, n, r) {
        var e = t(33),
            i = t(71),
            o = t(3),
            u = t(7),
            c = t(51),
            f = t(35),
            a = t(16),
            s = (t(40).Reflect || {}).construct,
            l = f(function() {
                function t() {}
                return !(s(function() {}, [], t) instanceof t)
            }),
            h = !f(function() {
                s(function() {})
            });
        e(e.S + e.F * (l || h), "Reflect", {
            construct: function(t, n) {
                o(t), u(n);
                var r = arguments.length < 3 ? t : o(arguments[2]);
                if (h && !l) return s(t, n, r);
                if (t == r) {
                    switch (n.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n[0]);
                        case 2:
                            return new t(n[0], n[1]);
                        case 3:
                            return new t(n[0], n[1], n[2]);
                        case 4:
                            return new t(n[0], n[1], n[2], n[3])
                    }
                    var e = [null];
                    return e.push.apply(e, n), new(a.apply(t, e))
                }
                var f = r.prototype,
                    v = i(c(f) ? f : Object.prototype),
                    p = Function.apply.call(t, v, n);
                return c(p) ? p : v
            }
        })
    }, {
        16: 16,
        3: 3,
        33: 33,
        35: 35,
        40: 40,
        51: 51,
        7: 7,
        71: 71
    }],
    212: [function(t, n, r) {
        var e = t(72),
            i = t(33),
            o = t(7),
            u = t(120);
        i(i.S + i.F * t(35)(function() {
            Reflect.defineProperty(e.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            })
        }), "Reflect", {
            defineProperty: function(t, n, r) {
                o(t), n = u(n, !0), o(r);
                try {
                    return e.f(t, n, r), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, {
        120: 120,
        33: 33,
        35: 35,
        7: 7,
        72: 72
    }],
    213: [function(t, n, r) {
        var e = t(33),
            i = t(75).f,
            o = t(7);
        e(e.S, "Reflect", {
            deleteProperty: function(t, n) {
                var r = i(o(t), n);
                return !(r && !r.configurable) && delete t[n]
            }
        })
    }, {
        33: 33,
        7: 7,
        75: 75
    }],
    214: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(7),
            o = function(t) {
                this._t = i(t), this._i = 0;
                var n, r = this._k = [];
                for (n in t) r.push(n)
            };
        t(54)(o, "Object", function() {
            var t, n = this,
                r = n._k;
            do {
                if (n._i >= r.length) return {
                    value: void 0,
                    done: !0
                }
            } while (!((t = r[n._i++]) in n._t));
            return {
                value: t,
                done: !1
            }
        }), e(e.S, "Reflect", {
            enumerate: function(t) {
                return new o(t)
            }
        })
    }, {
        33: 33,
        54: 54,
        7: 7
    }],
    215: [function(t, n, r) {
        var e = t(75),
            i = t(33),
            o = t(7);
        i(i.S, "Reflect", {
            getOwnPropertyDescriptor: function(t, n) {
                return e.f(o(t), n)
            }
        })
    }, {
        33: 33,
        7: 7,
        75: 75
    }],
    216: [function(t, n, r) {
        var e = t(33),
            i = t(79),
            o = t(7);
        e(e.S, "Reflect", {
            getPrototypeOf: function(t) {
                return i(o(t))
            }
        })
    }, {
        33: 33,
        7: 7,
        79: 79
    }],
    217: [function(t, n, r) {
        function e(t, n) {
            var r, c, s = arguments.length < 3 ? t : arguments[2];
            return a(t) === s ? t[n] : (r = i.f(t, n)) ? u(r, "value") ? r.value : void 0 !== r.get ? r.get.call(s) : void 0 : f(c = o(t)) ? e(c, n, s) : void 0
        }
        var i = t(75),
            o = t(79),
            u = t(41),
            c = t(33),
            f = t(51),
            a = t(7);
        c(c.S, "Reflect", {
            get: e
        })
    }, {
        33: 33,
        41: 41,
        51: 51,
        7: 7,
        75: 75,
        79: 79
    }],
    218: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Reflect", {
            has: function(t, n) {
                return n in t
            }
        })
    }, {
        33: 33
    }],
    219: [function(t, n, r) {
        var e = t(33),
            i = t(7),
            o = Object.isExtensible;
        e(e.S, "Reflect", {
            isExtensible: function(t) {
                return i(t), !o || o(t)
            }
        })
    }, {
        33: 33,
        7: 7
    }],
    220: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Reflect", {
            ownKeys: t(85)
        })
    }, {
        33: 33,
        85: 85
    }],
    221: [function(t, n, r) {
        var e = t(33),
            i = t(7),
            o = Object.preventExtensions;
        e(e.S, "Reflect", {
            preventExtensions: function(t) {
                i(t);
                try {
                    return o && o(t), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, {
        33: 33,
        7: 7
    }],
    222: [function(t, n, r) {
        var e = t(33),
            i = t(99);
        i && e(e.S, "Reflect", {
            setPrototypeOf: function(t, n) {
                i.check(t, n);
                try {
                    return i.set(t, n), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, {
        33: 33,
        99: 99
    }],
    223: [function(t, n, r) {
        function e(t, n, r) {
            var f, h, v = arguments.length < 4 ? t : arguments[3],
                p = o.f(s(t), n);
            if (!p) {
                if (l(h = u(t))) return e(h, n, r, v);
                p = a(0)
            }
            return c(p, "value") ? !(!1 === p.writable || !l(v)) && (f = o.f(v, n) || a(0), f.value = r, i.f(v, n, f), !0) : void 0 !== p.set && (p.set.call(v, r), !0)
        }
        var i = t(72),
            o = t(75),
            u = t(79),
            c = t(41),
            f = t(33),
            a = t(92),
            s = t(7),
            l = t(51);
        f(f.S, "Reflect", {
            set: e
        })
    }, {
        33: 33,
        41: 41,
        51: 51,
        7: 7,
        72: 72,
        75: 75,
        79: 79,
        92: 92
    }],
    224: [function(t, n, r) {
        var e = t(40),
            i = t(45),
            o = t(72).f,
            u = t(77).f,
            c = t(52),
            f = t(37),
            a = e.RegExp,
            s = a,
            l = a.prototype,
            h = /a/g,
            v = /a/g,
            p = new a(h) !== h;
        if (t(29) && (!p || t(35)(function() {
                return v[t(128)("match")] = !1, a(h) != h || a(v) == v || "/a/i" != a(h, "i")
            }))) {
            a = function(t, n) {
                var r = this instanceof a,
                    e = c(t),
                    o = void 0 === n;
                return !r && e && t.constructor === a && o ? t : i(p ? new s(e && !o ? t.source : t, n) : s((e = t instanceof a) ? t.source : t, e && o ? f.call(t) : n), r ? this : l, a)
            };
            for (var y = u(s), d = 0; y.length > d;) ! function(t) {
                t in a || o(a, t, {
                    configurable: !0,
                    get: function() {
                        return s[t]
                    },
                    set: function(n) {
                        s[t] = n
                    }
                })
            }(y[d++]);
            l.constructor = a, a.prototype = l, t(94)(e, "RegExp", a)
        }
        t(100)("RegExp")
    }, {
        100: 100,
        128: 128,
        29: 29,
        35: 35,
        37: 37,
        40: 40,
        45: 45,
        52: 52,
        72: 72,
        77: 77,
        94: 94
    }],
    225: [function(t, n, r) {
        t(29) && "g" != /./g.flags && t(72).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: t(37)
        })
    }, {
        29: 29,
        37: 37,
        72: 72
    }],
    226: [function(t, n, r) {
        t(36)("match", 1, function(t, n, r) {
            return [function(r) {
                "use strict";
                var e = t(this),
                    i = void 0 == r ? void 0 : r[n];
                return void 0 !== i ? i.call(r, e) : new RegExp(r)[n](String(e))
            }, r]
        })
    }, {
        36: 36
    }],
    227: [function(t, n, r) {
        t(36)("replace", 2, function(t, n, r) {
            return [function(e, i) {
                "use strict";
                var o = t(this),
                    u = void 0 == e ? void 0 : e[n];
                return void 0 !== u ? u.call(e, o, i) : r.call(String(o), e, i)
            }, r]
        })
    }, {
        36: 36
    }],
    228: [function(t, n, r) {
        t(36)("search", 1, function(t, n, r) {
            return [function(r) {
                "use strict";
                var e = t(this),
                    i = void 0 == r ? void 0 : r[n];
                return void 0 !== i ? i.call(r, e) : new RegExp(r)[n](String(e))
            }, r]
        })
    }, {
        36: 36
    }],
    229: [function(t, n, r) {
        t(36)("split", 2, function(n, r, e) {
            "use strict";
            var i = t(52),
                o = e,
                u = [].push,
                c = "length";
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[c] || 2 != "ab".split(/(?:ab)*/)[c] || 4 != ".".split(/(.?)(.?)/)[c] || ".".split(/()()/)[c] > 1 || "".split(/.?/)[c]) {
                var f = void 0 === /()??/.exec("")[1];
                e = function(t, n) {
                    var r = String(this);
                    if (void 0 === t && 0 === n) return [];
                    if (!i(t)) return o.call(r, t, n);
                    var e, a, s, l, h, v = [],
                        p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        y = 0,
                        d = void 0 === n ? 4294967295 : n >>> 0,
                        g = new RegExp(t.source, p + "g");
                    for (f || (e = new RegExp("^" + g.source + "$(?!\\s)", p));
                        (a = g.exec(r)) && !((s = a.index + a[0][c]) > y && (v.push(r.slice(y, a.index)), !f && a[c] > 1 && a[0].replace(e, function() {
                            for (h = 1; h < arguments[c] - 2; h++) void 0 === arguments[h] && (a[h] = void 0)
                        }), a[c] > 1 && a.index < r[c] && u.apply(v, a.slice(1)), l = a[0][c], y = s, v[c] >= d));) g.lastIndex === a.index && g.lastIndex++;
                    return y === r[c] ? !l && g.test("") || v.push("") : v.push(r.slice(y)), v[c] > d ? v.slice(0, d) : v
                }
            } else "0".split(void 0, 0)[c] && (e = function(t, n) {
                return void 0 === t && 0 === n ? [] : o.call(this, t, n)
            });
            return [function(t, i) {
                var o = n(this),
                    u = void 0 == t ? void 0 : t[r];
                return void 0 !== u ? u.call(t, o, i) : e.call(String(o), t, i)
            }, e]
        })
    }, {
        36: 36,
        52: 52
    }],
    230: [function(t, n, r) {
        "use strict";
        t(225);
        var e = t(7),
            i = t(37),
            o = t(29),
            u = /./.toString,
            c = function(n) {
                t(94)(RegExp.prototype, "toString", n, !0)
            };
        t(35)(function() {
            return "/a/b" != u.call({
                source: "a",
                flags: "b"
            })
        }) ? c(function() {
            var t = e(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
        }) : "toString" != u.name && c(function() {
            return u.call(this)
        })
    }, {
        225: 225,
        29: 29,
        35: 35,
        37: 37,
        7: 7,
        94: 94
    }],
    231: [function(t, n, r) {
        "use strict";
        var e = t(19),
            i = t(125);
        n.exports = t(22)("Set", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return e.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, e)
    }, {
        125: 125,
        19: 19,
        22: 22
    }],
    232: [function(t, n, r) {
        "use strict";
        t(108)("anchor", function(t) {
            return function(n) {
                return t(this, "a", "name", n)
            }
        })
    }, {
        108: 108
    }],
    233: [function(t, n, r) {
        "use strict";
        t(108)("big", function(t) {
            return function() {
                return t(this, "big", "", "")
            }
        })
    }, {
        108: 108
    }],
    234: [function(t, n, r) {
        "use strict";
        t(108)("blink", function(t) {
            return function() {
                return t(this, "blink", "", "")
            }
        })
    }, {
        108: 108
    }],
    235: [function(t, n, r) {
        "use strict";
        t(108)("bold", function(t) {
            return function() {
                return t(this, "b", "", "")
            }
        })
    }, {
        108: 108
    }],
    236: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(106)(!1);
        e(e.P, "String", {
            codePointAt: function(t) {
                return i(this, t)
            }
        })
    }, {
        106: 106,
        33: 33
    }],
    237: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(118),
            o = t(107),
            u = "".endsWith;
        e(e.P + e.F * t(34)("endsWith"), "String", {
            endsWith: function(t) {
                var n = o(this, t, "endsWith"),
                    r = arguments.length > 1 ? arguments[1] : void 0,
                    e = i(n.length),
                    c = void 0 === r ? e : Math.min(i(r), e),
                    f = String(t);
                return u ? u.call(n, f, c) : n.slice(c - f.length, c) === f
            }
        })
    }, {
        107: 107,
        118: 118,
        33: 33,
        34: 34
    }],
    238: [function(t, n, r) {
        "use strict";
        t(108)("fixed", function(t) {
            return function() {
                return t(this, "tt", "", "")
            }
        })
    }, {
        108: 108
    }],
    239: [function(t, n, r) {
        "use strict";
        t(108)("fontcolor", function(t) {
            return function(n) {
                return t(this, "font", "color", n)
            }
        })
    }, {
        108: 108
    }],
    240: [function(t, n, r) {
        "use strict";
        t(108)("fontsize", function(t) {
            return function(n) {
                return t(this, "font", "size", n)
            }
        })
    }, {
        108: 108
    }],
    241: [function(t, n, r) {
        var e = t(33),
            i = t(114),
            o = String.fromCharCode,
            u = String.fromCodePoint;
        e(e.S + e.F * (!!u && 1 != u.length), "String", {
            fromCodePoint: function(t) {
                for (var n, r = [], e = arguments.length, u = 0; e > u;) {
                    if (n = +arguments[u++], i(n, 1114111) !== n) throw RangeError(n + " is not a valid code point");
                    r.push(n < 65536 ? o(n) : o(55296 + ((n -= 65536) >> 10), n % 1024 + 56320))
                }
                return r.join("")
            }
        })
    }, {
        114: 114,
        33: 33
    }],
    242: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(107);
        e(e.P + e.F * t(34)("includes"), "String", {
            includes: function(t) {
                return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, {
        107: 107,
        33: 33,
        34: 34
    }],
    243: [function(t, n, r) {
        "use strict";
        t(108)("italics", function(t) {
            return function() {
                return t(this, "i", "", "")
            }
        })
    }, {
        108: 108
    }],
    244: [function(t, n, r) {
        "use strict";
        var e = t(106)(!0);
        t(55)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, n = this._t,
                r = this._i;
            return r >= n.length ? {
                value: void 0,
                done: !0
            } : (t = e(n, r), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, {
        106: 106,
        55: 55
    }],
    245: [function(t, n, r) {
        "use strict";
        t(108)("link", function(t) {
            return function(n) {
                return t(this, "a", "href", n)
            }
        })
    }, {
        108: 108
    }],
    246: [function(t, n, r) {
        var e = t(33),
            i = t(117),
            o = t(118);
        e(e.S, "String", {
            raw: function(t) {
                for (var n = i(t.raw), r = o(n.length), e = arguments.length, u = [], c = 0; r > c;) u.push(String(n[c++])), c < e && u.push(String(arguments[c]));
                return u.join("")
            }
        })
    }, {
        117: 117,
        118: 118,
        33: 33
    }],
    247: [function(t, n, r) {
        var e = t(33);
        e(e.P, "String", {
            repeat: t(110)
        })
    }, {
        110: 110,
        33: 33
    }],
    248: [function(t, n, r) {
        "use strict";
        t(108)("small", function(t) {
            return function() {
                return t(this, "small", "", "")
            }
        })
    }, {
        108: 108
    }],
    249: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(118),
            o = t(107),
            u = "".startsWith;
        e(e.P + e.F * t(34)("startsWith"), "String", {
            startsWith: function(t) {
                var n = o(this, t, "startsWith"),
                    r = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)),
                    e = String(t);
                return u ? u.call(n, e, r) : n.slice(r, r + e.length) === e
            }
        })
    }, {
        107: 107,
        118: 118,
        33: 33,
        34: 34
    }],
    250: [function(t, n, r) {
        "use strict";
        t(108)("strike", function(t) {
            return function() {
                return t(this, "strike", "", "")
            }
        })
    }, {
        108: 108
    }],
    251: [function(t, n, r) {
        "use strict";
        t(108)("sub", function(t) {
            return function() {
                return t(this, "sub", "", "")
            }
        })
    }, {
        108: 108
    }],
    252: [function(t, n, r) {
        "use strict";
        t(108)("sup", function(t) {
            return function() {
                return t(this, "sup", "", "")
            }
        })
    }, {
        108: 108
    }],
    253: [function(t, n, r) {
        "use strict";
        t(111)("trim", function(t) {
            return function() {
                return t(this, 3)
            }
        })
    }, {
        111: 111
    }],
    254: [function(t, n, r) {
        "use strict";
        var e = t(40),
            i = t(41),
            o = t(29),
            u = t(33),
            c = t(94),
            f = t(66).KEY,
            a = t(35),
            s = t(103),
            l = t(101),
            h = t(124),
            v = t(128),
            p = t(127),
            y = t(126),
            d = t(59),
            g = t(32),
            m = t(49),
            b = t(7),
            S = t(117),
            w = t(120),
            x = t(92),
            _ = t(71),
            E = t(76),
            O = t(75),
            M = t(72),
            P = t(81),
            F = O.f,
            A = M.f,
            j = E.f,
            N = e.Symbol,
            I = e.JSON,
            T = I && I.stringify,
            L = v("_hidden"),
            R = v("toPrimitive"),
            k = {}.propertyIsEnumerable,
            D = s("symbol-registry"),
            W = s("symbols"),
            C = s("op-symbols"),
            G = Object.prototype,
            U = "function" == typeof N,
            B = e.QObject,
            V = !B || !B.prototype || !B.prototype.findChild,
            z = o && a(function() {
                return 7 != _(A({}, "a", {
                    get: function() {
                        return A(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, n, r) {
                var e = F(G, n);
                e && delete G[n], A(t, n, r), e && t !== G && A(G, n, e)
            } : A,
            Y = function(t) {
                var n = W[t] = _(N.prototype);
                return n._k = t, n
            },
            q = U && "symbol" == typeof N.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof N
            },
            J = function(t, n, r) {
                return t === G && J(C, n, r), b(t), n = w(n, !0), b(r), i(W, n) ? (r.enumerable ? (i(t, L) && t[L][n] && (t[L][n] = !1), r = _(r, {
                    enumerable: x(0, !1)
                })) : (i(t, L) || A(t, L, x(1, {})), t[L][n] = !0), z(t, n, r)) : A(t, n, r)
            },
            K = function(t, n) {
                b(t);
                for (var r, e = g(n = S(n)), i = 0, o = e.length; o > i;) J(t, r = e[i++], n[r]);
                return t
            },
            H = function(t, n) {
                return void 0 === n ? _(t) : K(_(t), n)
            },
            X = function(t) {
                var n = k.call(this, t = w(t, !0));
                return !(this === G && i(W, t) && !i(C, t)) && (!(n || !i(this, t) || !i(W, t) || i(this, L) && this[L][t]) || n)
            },
            $ = function(t, n) {
                if (t = S(t), n = w(n, !0), t !== G || !i(W, n) || i(C, n)) {
                    var r = F(t, n);
                    return !r || !i(W, n) || i(t, L) && t[L][n] || (r.enumerable = !0), r
                }
            },
            Z = function(t) {
                for (var n, r = j(S(t)), e = [], o = 0; r.length > o;) i(W, n = r[o++]) || n == L || n == f || e.push(n);
                return e
            },
            Q = function(t) {
                for (var n, r = t === G, e = j(r ? C : S(t)), o = [], u = 0; e.length > u;) !i(W, n = e[u++]) || r && !i(G, n) || o.push(W[n]);
                return o
            };
        U || (N = function() {
            if (this instanceof N) throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0),
                n = function(r) {
                    this === G && n.call(C, r), i(this, L) && i(this[L], t) && (this[L][t] = !1), z(this, t, x(1, r))
                };
            return o && V && z(G, t, {
                configurable: !0,
                set: n
            }), Y(t)
        }, c(N.prototype, "toString", function() {
            return this._k
        }), O.f = $, M.f = J, t(77).f = E.f = Z, t(82).f = X, t(78).f = Q, o && !t(60) && c(G, "propertyIsEnumerable", X, !0), p.f = function(t) {
            return Y(v(t))
        }), u(u.G + u.W + u.F * !U, {
            Symbol: N
        });
        for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; tt.length > nt;) v(tt[nt++]);
        for (var rt = P(v.store), et = 0; rt.length > et;) y(rt[et++]);
        u(u.S + u.F * !U, "Symbol", {
            for: function(t) {
                return i(D, t += "") ? D[t] : D[t] = N(t)
            },
            keyFor: function(t) {
                if (q(t)) return d(D, t);
                throw TypeError(t + " is not a symbol!")
            },
            useSetter: function() {
                V = !0
            },
            useSimple: function() {
                V = !1
            }
        }), u(u.S + u.F * !U, "Object", {
            create: H,
            defineProperty: J,
            defineProperties: K,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: Q
        }), I && u(u.S + u.F * (!U || a(function() {
            var t = N();
            return "[null]" != T([t]) || "{}" != T({
                a: t
            }) || "{}" != T(Object(t))
        })), "JSON", {
            stringify: function(t) {
                if (void 0 !== t && !q(t)) {
                    for (var n, r, e = [t], i = 1; arguments.length > i;) e.push(arguments[i++]);
                    return n = e[1], "function" == typeof n && (r = n), !r && m(n) || (n = function(t, n) {
                        if (r && (n = r.call(this, t, n)), !q(n)) return n
                    }), e[1] = n, T.apply(I, e)
                }
            }
        }), N.prototype[R] || t(42)(N.prototype, R, N.prototype.valueOf), l(N, "Symbol"), l(Math, "Math", !0), l(e.JSON, "JSON", !0)
    }, {
        101: 101,
        103: 103,
        117: 117,
        120: 120,
        124: 124,
        126: 126,
        127: 127,
        128: 128,
        29: 29,
        32: 32,
        33: 33,
        35: 35,
        40: 40,
        41: 41,
        42: 42,
        49: 49,
        59: 59,
        60: 60,
        66: 66,
        7: 7,
        71: 71,
        72: 72,
        75: 75,
        76: 76,
        77: 77,
        78: 78,
        81: 81,
        82: 82,
        92: 92,
        94: 94
    }],
    255: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(123),
            o = t(122),
            u = t(7),
            c = t(114),
            f = t(118),
            a = t(51),
            s = t(40).ArrayBuffer,
            l = t(104),
            h = o.ArrayBuffer,
            v = o.DataView,
            p = i.ABV && s.isView,
            y = h.prototype.slice,
            d = i.VIEW;
        e(e.G + e.W + e.F * (s !== h), {
            ArrayBuffer: h
        }), e(e.S + e.F * !i.CONSTR, "ArrayBuffer", {
            isView: function(t) {
                return p && p(t) || a(t) && d in t
            }
        }), e(e.P + e.U + e.F * t(35)(function() {
            return !new h(2).slice(1, void 0).byteLength
        }), "ArrayBuffer", {
            slice: function(t, n) {
                if (void 0 !== y && void 0 === n) return y.call(u(this), t);
                for (var r = u(this).byteLength, e = c(t, r), i = c(void 0 === n ? r : n, r), o = new(l(this, h))(f(i - e)), a = new v(this), s = new v(o), p = 0; e < i;) s.setUint8(p++, a.getUint8(e++));
                return o
            }
        }), t(100)("ArrayBuffer")
    }, {
        100: 100,
        104: 104,
        114: 114,
        118: 118,
        122: 122,
        123: 123,
        33: 33,
        35: 35,
        40: 40,
        51: 51,
        7: 7
    }],
    256: [function(t, n, r) {
        var e = t(33);
        e(e.G + e.W + e.F * !t(123).ABV, {
            DataView: t(122).DataView
        })
    }, {
        122: 122,
        123: 123,
        33: 33
    }],
    257: [function(t, n, r) {
        t(121)("Float32", 4, function(t) {
            return function(n, r, e) {
                return t(this, n, r, e)
            }
        })
    }, {
        121: 121
    }],
    258: [function(t, n, r) {
        t(121)("Float64", 8, function(t) {
            return function(n, r, e) {
                return t(this, n, r, e)
            }
        })
    }, {
        121: 121
    }],
    259: [function(t, n, r) {
        t(121)("Int16", 2, function(t) {
            return function(n, r, e) {
                return t(this, n, r, e)
            }
        })
    }, {
        121: 121
    }],
    260: [function(t, n, r) {
        t(121)("Int32", 4, function(t) {
            return function(n, r, e) {
                return t(this, n, r, e)
            }
        })
    }, {
        121: 121
    }],
    261: [function(t, n, r) {
        t(121)("Int8", 1, function(t) {
            return function(n, r, e) {
                return t(this, n, r, e)
            }
        })
    }, {
        121: 121
    }],
    262: [function(t, n, r) {
        t(121)("Uint16", 2, function(t) {
            return function(n, r, e) {
                return t(this, n, r, e)
            }
        })
    }, {
        121: 121
    }],
    263: [function(t, n, r) {
        t(121)("Uint32", 4, function(t) {
            return function(n, r, e) {
                return t(this, n, r, e)
            }
        })
    }, {
        121: 121
    }],
    264: [function(t, n, r) {
        t(121)("Uint8", 1, function(t) {
            return function(n, r, e) {
                return t(this, n, r, e)
            }
        })
    }, {
        121: 121
    }],
    265: [function(t, n, r) {
        t(121)("Uint8", 1, function(t) {
            return function(n, r, e) {
                return t(this, n, r, e)
            }
        }, !0)
    }, {
        121: 121
    }],
    266: [function(t, n, r) {
        "use strict";
        var e, i = t(12)(0),
            o = t(94),
            u = t(66),
            c = t(70),
            f = t(21),
            a = t(51),
            s = t(35),
            l = t(125),
            h = u.getWeak,
            v = Object.isExtensible,
            p = f.ufstore,
            y = {},
            d = function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            g = {
                get: function(t) {
                    if (a(t)) {
                        var n = h(t);
                        return !0 === n ? p(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0
                    }
                },
                set: function(t, n) {
                    return f.def(l(this, "WeakMap"), t, n)
                }
            },
            m = n.exports = t(22)("WeakMap", d, g, f, !0, !0);
        s(function() {
            return 7 != (new m).set((Object.freeze || Object)(y), 7).get(y)
        }) && (e = f.getConstructor(d, "WeakMap"), c(e.prototype, g), u.NEED = !0, i(["delete", "has", "get", "set"], function(t) {
            var n = m.prototype,
                r = n[t];
            o(n, t, function(n, i) {
                if (a(n) && !v(n)) {
                    this._f || (this._f = new e);
                    var o = this._f[t](n, i);
                    return "set" == t ? this : o
                }
                return r.call(this, n, i)
            })
        }))
    }, {
        12: 12,
        125: 125,
        21: 21,
        22: 22,
        35: 35,
        51: 51,
        66: 66,
        70: 70,
        94: 94
    }],
    267: [function(t, n, r) {
        "use strict";
        var e = t(21),
            i = t(125);
        t(22)("WeakSet", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return e.def(i(this, "WeakSet"), t, !0)
            }
        }, e, !1, !0)
    }, {
        125: 125,
        21: 21,
        22: 22
    }],
    268: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(38),
            o = t(119),
            u = t(118),
            c = t(3),
            f = t(15);
        e(e.P, "Array", {
            flatMap: function(t) {
                var n, r, e = o(this);
                return c(t), n = u(e.length), r = f(e, 0), i(r, e, e, n, 0, 1, t, arguments[1]), r
            }
        }), t(5)("flatMap")
    }, {
        118: 118,
        119: 119,
        15: 15,
        3: 3,
        33: 33,
        38: 38,
        5: 5
    }],
    269: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(38),
            o = t(119),
            u = t(118),
            c = t(116),
            f = t(15);
        e(e.P, "Array", {
            flatten: function() {
                var t = arguments[0],
                    n = o(this),
                    r = u(n.length),
                    e = f(n, 0);
                return i(e, n, n, r, 0, void 0 === t ? 1 : c(t)), e
            }
        }), t(5)("flatten")
    }, {
        116: 116,
        118: 118,
        119: 119,
        15: 15,
        33: 33,
        38: 38,
        5: 5
    }],
    270: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(11)(!0);
        e(e.P, "Array", {
            includes: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), t(5)("includes")
    }, {
        11: 11,
        33: 33,
        5: 5
    }],
    271: [function(t, n, r) {
        var e = t(33),
            i = t(68)(),
            o = t(40).process,
            u = "process" == t(18)(o);
        e(e.G, {
            asap: function(t) {
                var n = u && o.domain;
                i(n ? n.bind(t) : t)
            }
        })
    }, {
        18: 18,
        33: 33,
        40: 40,
        68: 68
    }],
    272: [function(t, n, r) {
        var e = t(33),
            i = t(18);
        e(e.S, "Error", {
            isError: function(t) {
                return "Error" === i(t)
            }
        })
    }, {
        18: 18,
        33: 33
    }],
    273: [function(t, n, r) {
        var e = t(33);
        e(e.G, {
            global: t(40)
        })
    }, {
        33: 33,
        40: 40
    }],
    274: [function(t, n, r) {
        t(97)("Map")
    }, {
        97: 97
    }],
    275: [function(t, n, r) {
        t(98)("Map")
    }, {
        98: 98
    }],
    276: [function(t, n, r) {
        var e = t(33);
        e(e.P + e.R, "Map", {
            toJSON: t(20)("Map")
        })
    }, {
        20: 20,
        33: 33
    }],
    277: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            clamp: function(t, n, r) {
                return Math.min(r, Math.max(n, t))
            }
        })
    }, {
        33: 33
    }],
    278: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            DEG_PER_RAD: Math.PI / 180
        })
    }, {
        33: 33
    }],
    279: [function(t, n, r) {
        var e = t(33),
            i = 180 / Math.PI;
        e(e.S, "Math", {
            degrees: function(t) {
                return t * i
            }
        })
    }, {
        33: 33
    }],
    280: [function(t, n, r) {
        var e = t(33),
            i = t(64),
            o = t(62);
        e(e.S, "Math", {
            fscale: function(t, n, r, e, u) {
                return o(i(t, n, r, e, u))
            }
        })
    }, {
        33: 33,
        62: 62,
        64: 64
    }],
    281: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            iaddh: function(t, n, r, e) {
                var i = t >>> 0,
                    o = n >>> 0,
                    u = r >>> 0;
                return o + (e >>> 0) + ((i & u | (i | u) & ~(i + u >>> 0)) >>> 31) | 0
            }
        })
    }, {
        33: 33
    }],
    282: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            imulh: function(t, n) {
                var r = +t,
                    e = +n,
                    i = 65535 & r,
                    o = 65535 & e,
                    u = r >> 16,
                    c = e >> 16,
                    f = (u * o >>> 0) + (i * o >>> 16);
                return u * c + (f >> 16) + ((i * c >>> 0) + (65535 & f) >> 16)
            }
        })
    }, {
        33: 33
    }],
    283: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            isubh: function(t, n, r, e) {
                var i = t >>> 0,
                    o = n >>> 0,
                    u = r >>> 0;
                return o - (e >>> 0) - ((~i & u | ~(i ^ u) & i - u >>> 0) >>> 31) | 0
            }
        })
    }, {
        33: 33
    }],
    284: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            RAD_PER_DEG: 180 / Math.PI
        })
    }, {
        33: 33
    }],
    285: [function(t, n, r) {
        var e = t(33),
            i = Math.PI / 180;
        e(e.S, "Math", {
            radians: function(t) {
                return t * i
            }
        })
    }, {
        33: 33
    }],
    286: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            scale: t(64)
        })
    }, {
        33: 33,
        64: 64
    }],
    287: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            signbit: function(t) {
                return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
            }
        })
    }, {
        33: 33
    }],
    288: [function(t, n, r) {
        var e = t(33);
        e(e.S, "Math", {
            umulh: function(t, n) {
                var r = +t,
                    e = +n,
                    i = 65535 & r,
                    o = 65535 & e,
                    u = r >>> 16,
                    c = e >>> 16,
                    f = (u * o >>> 0) + (i * o >>> 16);
                return u * c + (f >>> 16) + ((i * c >>> 0) + (65535 & f) >>> 16)
            }
        })
    }, {
        33: 33
    }],
    289: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(119),
            o = t(3),
            u = t(72);
        t(29) && e(e.P + t(74), "Object", {
            __defineGetter__: function(t, n) {
                u.f(i(this), t, {
                    get: o(n),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    }, {
        119: 119,
        29: 29,
        3: 3,
        33: 33,
        72: 72,
        74: 74
    }],
    290: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(119),
            o = t(3),
            u = t(72);
        t(29) && e(e.P + t(74), "Object", {
            __defineSetter__: function(t, n) {
                u.f(i(this), t, {
                    set: o(n),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    }, {
        119: 119,
        29: 29,
        3: 3,
        33: 33,
        72: 72,
        74: 74
    }],
    291: [function(t, n, r) {
        var e = t(33),
            i = t(84)(!0);
        e(e.S, "Object", {
            entries: function(t) {
                return i(t)
            }
        })
    }, {
        33: 33,
        84: 84
    }],
    292: [function(t, n, r) {
        var e = t(33),
            i = t(85),
            o = t(117),
            u = t(75),
            c = t(24);
        e(e.S, "Object", {
            getOwnPropertyDescriptors: function(t) {
                for (var n, r, e = o(t), f = u.f, a = i(e), s = {}, l = 0; a.length > l;) void 0 !== (r = f(e, n = a[l++])) && c(s, n, r);
                return s
            }
        })
    }, {
        117: 117,
        24: 24,
        33: 33,
        75: 75,
        85: 85
    }],
    293: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(119),
            o = t(120),
            u = t(79),
            c = t(75).f;
        t(29) && e(e.P + t(74), "Object", {
            __lookupGetter__: function(t) {
                var n, r = i(this),
                    e = o(t, !0);
                do {
                    if (n = c(r, e)) return n.get
                } while (r = u(r))
            }
        })
    }, {
        119: 119,
        120: 120,
        29: 29,
        33: 33,
        74: 74,
        75: 75,
        79: 79
    }],
    294: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(119),
            o = t(120),
            u = t(79),
            c = t(75).f;
        t(29) && e(e.P + t(74), "Object", {
            __lookupSetter__: function(t) {
                var n, r = i(this),
                    e = o(t, !0);
                do {
                    if (n = c(r, e)) return n.set
                } while (r = u(r))
            }
        })
    }, {
        119: 119,
        120: 120,
        29: 29,
        33: 33,
        74: 74,
        75: 75,
        79: 79
    }],
    295: [function(t, n, r) {
        var e = t(33),
            i = t(84)(!1);
        e(e.S, "Object", {
            values: function(t) {
                return i(t)
            }
        })
    }, {
        33: 33,
        84: 84
    }],
    296: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(40),
            o = t(23),
            u = t(68)(),
            c = t(128)("observable"),
            f = t(3),
            a = t(7),
            s = t(6),
            l = t(93),
            h = t(42),
            v = t(39),
            p = v.RETURN,
            y = function(t) {
                return null == t ? void 0 : f(t)
            },
            d = function(t) {
                var n = t._c;
                n && (t._c = void 0, n())
            },
            g = function(t) {
                return void 0 === t._o
            },
            m = function(t) {
                g(t) || (t._o = void 0, d(t))
            },
            b = function(t, n) {
                a(t), this._c = void 0, this._o = t, t = new S(this);
                try {
                    var r = n(t),
                        e = r;
                    null != r && ("function" == typeof r.unsubscribe ? r = function() {
                        e.unsubscribe()
                    } : f(r), this._c = r)
                } catch (n) {
                    return void t.error(n)
                }
                g(this) && d(this)
            };
        b.prototype = l({}, {
            unsubscribe: function() {
                m(this)
            }
        });
        var S = function(t) {
            this._s = t
        };
        S.prototype = l({}, {
            next: function(t) {
                var n = this._s;
                if (!g(n)) {
                    var r = n._o;
                    try {
                        var e = y(r.next);
                        if (e) return e.call(r, t)
                    } catch (t) {
                        try {
                            m(n)
                        } finally {
                            throw t
                        }
                    }
                }
            },
            error: function(t) {
                var n = this._s;
                if (g(n)) throw t;
                var r = n._o;
                n._o = void 0;
                try {
                    var e = y(r.error);
                    if (!e) throw t;
                    t = e.call(r, t)
                } catch (t) {
                    try {
                        d(n)
                    } finally {
                        throw t
                    }
                }
                return d(n), t
            },
            complete: function(t) {
                var n = this._s;
                if (!g(n)) {
                    var r = n._o;
                    n._o = void 0;
                    try {
                        var e = y(r.complete);
                        t = e ? e.call(r, t) : void 0
                    } catch (t) {
                        try {
                            d(n)
                        } finally {
                            throw t
                        }
                    }
                    return d(n), t
                }
            }
        });
        var w = function(t) {
            s(this, w, "Observable", "_f")._f = f(t)
        };
        l(w.prototype, {
            subscribe: function(t) {
                return new b(t, this._f)
            },
            forEach: function(t) {
                var n = this;
                return new(o.Promise || i.Promise)(function(r, e) {
                    f(t);
                    var i = n.subscribe({
                        next: function(n) {
                            try {
                                return t(n)
                            } catch (t) {
                                e(t), i.unsubscribe()
                            }
                        },
                        error: e,
                        complete: r
                    })
                })
            }
        }), l(w, {
            from: function(t) {
                var n = "function" == typeof this ? this : w,
                    r = y(a(t)[c]);
                if (r) {
                    var e = a(r.call(t));
                    return e.constructor === n ? e : new n(function(t) {
                        return e.subscribe(t)
                    })
                }
                return new n(function(n) {
                    var r = !1;
                    return u(function() {
                            if (!r) {
                                try {
                                    if (v(t, !1, function(t) {
                                            if (n.next(t), r) return p
                                        }) === p) return
                                } catch (t) {
                                    if (r) throw t;
                                    return void n.error(t)
                                }
                                n.complete()
                            }
                        }),
                        function() {
                            r = !0
                        }
                })
            },
            of: function() {
                for (var t = 0, n = arguments.length, r = Array(n); t < n;) r[t] = arguments[t++];
                return new("function" == typeof this ? this : w)(function(t) {
                    var n = !1;
                    return u(function() {
                            if (!n) {
                                for (var e = 0; e < r.length; ++e)
                                    if (t.next(r[e]), n) return;
                                t.complete()
                            }
                        }),
                        function() {
                            n = !0
                        }
                })
            }
        }), h(w.prototype, c, function() {
            return this
        }), e(e.G, {
            Observable: w
        }), t(100)("Observable")
    }, {
        100: 100,
        128: 128,
        23: 23,
        3: 3,
        33: 33,
        39: 39,
        40: 40,
        42: 42,
        6: 6,
        68: 68,
        7: 7,
        93: 93
    }],
    297: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(23),
            o = t(40),
            u = t(104),
            c = t(91);
        e(e.P + e.R, "Promise", {
            finally: function(t) {
                var n = u(this, i.Promise || o.Promise),
                    r = "function" == typeof t;
                return this.then(r ? function(r) {
                    return c(n, t()).then(function() {
                        return r
                    })
                } : t, r ? function(r) {
                    return c(n, t()).then(function() {
                        throw r
                    })
                } : t)
            }
        })
    }, {
        104: 104,
        23: 23,
        33: 33,
        40: 40,
        91: 91
    }],
    298: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(69),
            o = t(90);
        e(e.S, "Promise", {
            try: function(t) {
                var n = i.f(this),
                    r = o(t);
                return (r.e ? n.reject : n.resolve)(r.v), n.promise
            }
        })
    }, {
        33: 33,
        69: 69,
        90: 90
    }],
    299: [function(t, n, r) {
        var e = t(67),
            i = t(7),
            o = e.key,
            u = e.set;
        e.exp({
            defineMetadata: function(t, n, r, e) {
                u(t, n, i(r), o(e))
            }
        })
    }, {
        67: 67,
        7: 7
    }],
    300: [function(t, n, r) {
        var e = t(67),
            i = t(7),
            o = e.key,
            u = e.map,
            c = e.store;
        e.exp({
            deleteMetadata: function(t, n) {
                var r = arguments.length < 3 ? void 0 : o(arguments[2]),
                    e = u(i(n), r, !1);
                if (void 0 === e || !e.delete(t)) return !1;
                if (e.size) return !0;
                var f = c.get(n);
                return f.delete(r), !!f.size || c.delete(n)
            }
        })
    }, {
        67: 67,
        7: 7
    }],
    301: [function(t, n, r) {
        var e = t(231),
            i = t(10),
            o = t(67),
            u = t(7),
            c = t(79),
            f = o.keys,
            a = o.key,
            s = function(t, n) {
                var r = f(t, n),
                    o = c(t);
                if (null === o) return r;
                var u = s(o, n);
                return u.length ? r.length ? i(new e(r.concat(u))) : u : r
            };
        o.exp({
            getMetadataKeys: function(t) {
                return s(u(t), arguments.length < 2 ? void 0 : a(arguments[1]))
            }
        })
    }, {
        10: 10,
        231: 231,
        67: 67,
        7: 7,
        79: 79
    }],
    302: [function(t, n, r) {
        var e = t(67),
            i = t(7),
            o = t(79),
            u = e.has,
            c = e.get,
            f = e.key,
            a = function(t, n, r) {
                if (u(t, n, r)) return c(t, n, r);
                var e = o(n);
                return null !== e ? a(t, e, r) : void 0
            };
        e.exp({
            getMetadata: function(t, n) {
                return a(t, i(n), arguments.length < 3 ? void 0 : f(arguments[2]))
            }
        })
    }, {
        67: 67,
        7: 7,
        79: 79
    }],
    303: [function(t, n, r) {
        var e = t(67),
            i = t(7),
            o = e.keys,
            u = e.key;
        e.exp({
            getOwnMetadataKeys: function(t) {
                return o(i(t), arguments.length < 2 ? void 0 : u(arguments[1]))
            }
        })
    }, {
        67: 67,
        7: 7
    }],
    304: [function(t, n, r) {
        var e = t(67),
            i = t(7),
            o = e.get,
            u = e.key;
        e.exp({
            getOwnMetadata: function(t, n) {
                return o(t, i(n), arguments.length < 3 ? void 0 : u(arguments[2]))
            }
        })
    }, {
        67: 67,
        7: 7
    }],
    305: [function(t, n, r) {
        var e = t(67),
            i = t(7),
            o = t(79),
            u = e.has,
            c = e.key,
            f = function(t, n, r) {
                if (u(t, n, r)) return !0;
                var e = o(n);
                return null !== e && f(t, e, r)
            };
        e.exp({
            hasMetadata: function(t, n) {
                return f(t, i(n), arguments.length < 3 ? void 0 : c(arguments[2]))
            }
        })
    }, {
        67: 67,
        7: 7,
        79: 79
    }],
    306: [function(t, n, r) {
        var e = t(67),
            i = t(7),
            o = e.has,
            u = e.key;
        e.exp({
            hasOwnMetadata: function(t, n) {
                return o(t, i(n), arguments.length < 3 ? void 0 : u(arguments[2]))
            }
        })
    }, {
        67: 67,
        7: 7
    }],
    307: [function(t, n, r) {
        var e = t(67),
            i = t(7),
            o = t(3),
            u = e.key,
            c = e.set;
        e.exp({
            metadata: function(t, n) {
                return function(r, e) {
                    c(t, n, (void 0 !== e ? i : o)(r), u(e))
                }
            }
        })
    }, {
        3: 3,
        67: 67,
        7: 7
    }],
    308: [function(t, n, r) {
        t(97)("Set")
    }, {
        97: 97
    }],
    309: [function(t, n, r) {
        t(98)("Set")
    }, {
        98: 98
    }],
    310: [function(t, n, r) {
        var e = t(33);
        e(e.P + e.R, "Set", {
            toJSON: t(20)("Set")
        })
    }, {
        20: 20,
        33: 33
    }],
    311: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(106)(!0);
        e(e.P, "String", {
            at: function(t) {
                return i(this, t)
            }
        })
    }, {
        106: 106,
        33: 33
    }],
    312: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(28),
            o = t(118),
            u = t(52),
            c = t(37),
            f = RegExp.prototype,
            a = function(t, n) {
                this._r = t, this._s = n
            };
        t(54)(a, "RegExp String", function() {
            var t = this._r.exec(this._s);
            return {
                value: t,
                done: null === t
            }
        }), e(e.P, "String", {
            matchAll: function(t) {
                if (i(this), !u(t)) throw TypeError(t + " is not a regexp!");
                var n = String(this),
                    r = "flags" in f ? String(t.flags) : c.call(t),
                    e = new RegExp(t.source, ~r.indexOf("g") ? r : "g" + r);
                return e.lastIndex = o(t.lastIndex), new a(e, n)
            }
        })
    }, {
        118: 118,
        28: 28,
        33: 33,
        37: 37,
        52: 52,
        54: 54
    }],
    313: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(109);
        e(e.P, "String", {
            padEnd: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
            }
        })
    }, {
        109: 109,
        33: 33
    }],
    314: [function(t, n, r) {
        "use strict";
        var e = t(33),
            i = t(109);
        e(e.P, "String", {
            padStart: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
            }
        })
    }, {
        109: 109,
        33: 33
    }],
    315: [function(t, n, r) {
        "use strict";
        t(111)("trimLeft", function(t) {
            return function() {
                return t(this, 1)
            }
        }, "trimStart")
    }, {
        111: 111
    }],
    316: [function(t, n, r) {
        "use strict";
        t(111)("trimRight", function(t) {
            return function() {
                return t(this, 2)
            }
        }, "trimEnd")
    }, {
        111: 111
    }],
    317: [function(t, n, r) {
        t(126)("asyncIterator")
    }, {
        126: 126
    }],
    318: [function(t, n, r) {
        t(126)("observable")
    }, {
        126: 126
    }],
    319: [function(t, n, r) {
        var e = t(33);
        e(e.S, "System", {
            global: t(40)
        })
    }, {
        33: 33,
        40: 40
    }],
    320: [function(t, n, r) {
        t(97)("WeakMap")
    }, {
        97: 97
    }],
    321: [function(t, n, r) {
        t(98)("WeakMap")
    }, {
        98: 98
    }],
    322: [function(t, n, r) {
        t(97)("WeakSet")
    }, {
        97: 97
    }],
    323: [function(t, n, r) {
        t(98)("WeakSet")
    }, {
        98: 98
    }],
    324: [function(t, n, r) {
        for (var e = t(141), i = t(81), o = t(94), u = t(40), c = t(42), f = t(58), a = t(128), s = a("iterator"), l = a("toStringTag"), h = f.Array, v = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, p = i(v), y = 0; y < p.length; y++) {
            var d, g = p[y],
                m = v[g],
                b = u[g],
                S = b && b.prototype;
            if (S && (S[s] || c(S, s, h), S[l] || c(S, l, g), f[g] = h, m))
                for (d in e) S[d] || o(S, d, e[d], !0)
        }
    }, {
        128: 128,
        141: 141,
        40: 40,
        42: 42,
        58: 58,
        81: 81,
        94: 94
    }],
    325: [function(t, n, r) {
        var e = t(33),
            i = t(113);
        e(e.G + e.B, {
            setImmediate: i.set,
            clearImmediate: i.clear
        })
    }, {
        113: 113,
        33: 33
    }],
    326: [function(t, n, r) {
        var e = t(40),
            i = t(33),
            o = t(46),
            u = t(88),
            c = e.navigator,
            f = !!c && /MSIE .\./.test(c.userAgent),
            a = function(t) {
                return f ? function(n, r) {
                    return t(o(u, [].slice.call(arguments, 2), "function" == typeof n ? n : Function(n)), r)
                } : t
            };
        i(i.G + i.B + i.F * f, {
            setTimeout: a(e.setTimeout),
            setInterval: a(e.setInterval)
        })
    }, {
        33: 33,
        40: 40,
        46: 46,
        88: 88
    }],
    327: [function(t, n, r) {
        t(254), t(191), t(193), t(192), t(195), t(197), t(202), t(196), t(194), t(204), t(203), t(199), t(200), t(198), t(190), t(201), t(205), t(206), t(157), t(159), t(158), t(208), t(207), t(178), t(188), t(189), t(179), t(180), t(181), t(182), t(183), t(184), t(185), t(186), t(187), t(161), t(162), t(163), t(164), t(165), t(166), t(167), t(168), t(169), t(170), t(171), t(172), t(173), t(174), t(175), t(176), t(177), t(241), t(246), t(253), t(244), t(236), t(237), t(242), t(247), t(249), t(232), t(233), t(234), t(235), t(238), t(239), t(240), t(243), t(245), t(248), t(250), t(251), t(252), t(152), t(154), t(153), t(156), t(155), t(140), t(138), t(145), t(142), t(148), t(150), t(137), t(144), t(134), t(149), t(132), t(147), t(146), t(139), t(143), t(131), t(133), t(136), t(135), t(151), t(141), t(224), t(230), t(225), t(226), t(227), t(228), t(229), t(209), t(160), t(231), t(266), t(267), t(255), t(256), t(261), t(264), t(265), t(259), t(262), t(260), t(263), t(257), t(258), t(210), t(211), t(212), t(213), t(214), t(217), t(215), t(216), t(218), t(219), t(220), t(221), t(223), t(222), t(270), t(268), t(269), t(311), t(314), t(313), t(315), t(316), t(312), t(317), t(318), t(292), t(295), t(291), t(289), t(290), t(293), t(294), t(276), t(310), t(275), t(309), t(321), t(323), t(274), t(308), t(320), t(322), t(273), t(319), t(272), t(277), t(278), t(279), t(280), t(281), t(283), t(282), t(284), t(285), t(286), t(288), t(287), t(297), t(298), t(299), t(300), t(302), t(301), t(304), t(303), t(305), t(306), t(307), t(271), t(296), t(326), t(325), t(324), n.exports = t(23)
    }, {
        131: 131,
        132: 132,
        133: 133,
        134: 134,
        135: 135,
        136: 136,
        137: 137,
        138: 138,
        139: 139,
        140: 140,
        141: 141,
        142: 142,
        143: 143,
        144: 144,
        145: 145,
        146: 146,
        147: 147,
        148: 148,
        149: 149,
        150: 150,
        151: 151,
        152: 152,
        153: 153,
        154: 154,
        155: 155,
        156: 156,
        157: 157,
        158: 158,
        159: 159,
        160: 160,
        161: 161,
        162: 162,
        163: 163,
        164: 164,
        165: 165,
        166: 166,
        167: 167,
        168: 168,
        169: 169,
        170: 170,
        171: 171,
        172: 172,
        173: 173,
        174: 174,
        175: 175,
        176: 176,
        177: 177,
        178: 178,
        179: 179,
        180: 180,
        181: 181,
        182: 182,
        183: 183,
        184: 184,
        185: 185,
        186: 186,
        187: 187,
        188: 188,
        189: 189,
        190: 190,
        191: 191,
        192: 192,
        193: 193,
        194: 194,
        195: 195,
        196: 196,
        197: 197,
        198: 198,
        199: 199,
        200: 200,
        201: 201,
        202: 202,
        203: 203,
        204: 204,
        205: 205,
        206: 206,
        207: 207,
        208: 208,
        209: 209,
        210: 210,
        211: 211,
        212: 212,
        213: 213,
        214: 214,
        215: 215,
        216: 216,
        217: 217,
        218: 218,
        219: 219,
        220: 220,
        221: 221,
        222: 222,
        223: 223,
        224: 224,
        225: 225,
        226: 226,
        227: 227,
        228: 228,
        229: 229,
        23: 23,
        230: 230,
        231: 231,
        232: 232,
        233: 233,
        234: 234,
        235: 235,
        236: 236,
        237: 237,
        238: 238,
        239: 239,
        240: 240,
        241: 241,
        242: 242,
        243: 243,
        244: 244,
        245: 245,
        246: 246,
        247: 247,
        248: 248,
        249: 249,
        250: 250,
        251: 251,
        252: 252,
        253: 253,
        254: 254,
        255: 255,
        256: 256,
        257: 257,
        258: 258,
        259: 259,
        260: 260,
        261: 261,
        262: 262,
        263: 263,
        264: 264,
        265: 265,
        266: 266,
        267: 267,
        268: 268,
        269: 269,
        270: 270,
        271: 271,
        272: 272,
        273: 273,
        274: 274,
        275: 275,
        276: 276,
        277: 277,
        278: 278,
        279: 279,
        280: 280,
        281: 281,
        282: 282,
        283: 283,
        284: 284,
        285: 285,
        286: 286,
        287: 287,
        288: 288,
        289: 289,
        290: 290,
        291: 291,
        292: 292,
        293: 293,
        294: 294,
        295: 295,
        296: 296,
        297: 297,
        298: 298,
        299: 299,
        300: 300,
        301: 301,
        302: 302,
        303: 303,
        304: 304,
        305: 305,
        306: 306,
        307: 307,
        308: 308,
        309: 309,
        310: 310,
        311: 311,
        312: 312,
        313: 313,
        314: 314,
        315: 315,
        316: 316,
        317: 317,
        318: 318,
        319: 319,
        320: 320,
        321: 321,
        322: 322,
        323: 323,
        324: 324,
        325: 325,
        326: 326
    }],
    328: [function(t, n, r) {
        (function(t) {
            ! function(t) {
                "use strict";

                function r(t, n, r, e) {
                    var o = n && n.prototype instanceof i ? n : i,
                        u = Object.create(o.prototype),
                        c = new v(e || []);
                    return u._invoke = a(t, r, c), u
                }

                function e(t, n, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(n, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }

                function i() {}

                function o() {}

                function u() {}

                function c(t) {
                    ["next", "throw", "return"].forEach(function(n) {
                        t[n] = function(t) {
                            return this._invoke(n, t)
                        }
                    })
                }

                function f(n) {
                    function r(t, i, o, u) {
                        var c = e(n[t], n, i);
                        if ("throw" !== c.type) {
                            var f = c.arg,
                                a = f.value;
                            return a && "object" == typeof a && m.call(a, "__await") ? Promise.resolve(a.__await).then(function(t) {
                                r("next", t, o, u)
                            }, function(t) {
                                r("throw", t, o, u)
                            }) : Promise.resolve(a).then(function(t) {
                                f.value = t, o(f)
                            }, u)
                        }
                        u(c.arg)
                    }

                    function i(t, n) {
                        function e() {
                            return new Promise(function(e, i) {
                                r(t, n, e, i)
                            })
                        }
                        return o = o ? o.then(e, e) : e()
                    }
                    "object" == typeof t.process && t.process.domain && (r = t.process.domain.bind(r));
                    var o;
                    this._invoke = i
                }

                function a(t, n, r) {
                    var i = O;
                    return function(o, u) {
                        if (i === P) throw new Error("Generator is already running");
                        if (i === F) {
                            if ("throw" === o) throw u;
                            return y()
                        }
                        for (r.method = o, r.arg = u;;) {
                            var c = r.delegate;
                            if (c) {
                                var f = s(c, r);
                                if (f) {
                                    if (f === A) continue;
                                    return f
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (i === O) throw i = F, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            i = P;
                            var a = e(t, n, r);
                            if ("normal" === a.type) {
                                if (i = r.done ? F : M, a.arg === A) continue;
                                return {
                                    value: a.arg,
                                    done: r.done
                                }
                            }
                            "throw" === a.type && (i = F, r.method = "throw", r.arg = a.arg)
                        }
                    }
                }

                function s(t, n) {
                    var r = t.iterator[n.method];
                    if (r === d) {
                        if (n.delegate = null,
                            "throw" === n.method) {
                            if (t.iterator.return && (n.method = "return", n.arg = d, s(t, n), "throw" === n.method)) return A;
                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return A
                    }
                    var i = e(r, t.iterator, n.arg);
                    if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, A;
                    var o = i.arg;
                    return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = d), n.delegate = null, A) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, A)
                }

                function l(t) {
                    var n = {
                        tryLoc: t[0]
                    };
                    1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
                }

                function h(t) {
                    var n = t.completion || {};
                    n.type = "normal", delete n.arg, t.completion = n
                }

                function v(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(l, this), this.reset(!0)
                }

                function p(t) {
                    if (t) {
                        var n = t[S];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                e = function n() {
                                    for (; ++r < t.length;)
                                        if (m.call(t, r)) return n.value = t[r], n.done = !1, n;
                                    return n.value = d, n.done = !0, n
                                };
                            return e.next = e
                        }
                    }
                    return {
                        next: y
                    }
                }

                function y() {
                    return {
                        value: d,
                        done: !0
                    }
                }
                var d, g = Object.prototype,
                    m = g.hasOwnProperty,
                    b = "function" == typeof Symbol ? Symbol : {},
                    S = b.iterator || "@@iterator",
                    w = b.asyncIterator || "@@asyncIterator",
                    x = b.toStringTag || "@@toStringTag",
                    _ = "object" == typeof n,
                    E = t.regeneratorRuntime;
                if (E) return void(_ && (n.exports = E));
                E = t.regeneratorRuntime = _ ? n.exports : {}, E.wrap = r;
                var O = "suspendedStart",
                    M = "suspendedYield",
                    P = "executing",
                    F = "completed",
                    A = {},
                    j = {};
                j[S] = function() {
                    return this
                };
                var N = Object.getPrototypeOf,
                    I = N && N(N(p([])));
                I && I !== g && m.call(I, S) && (j = I);
                var T = u.prototype = i.prototype = Object.create(j);
                o.prototype = T.constructor = u, u.constructor = o, u[x] = o.displayName = "GeneratorFunction", E.isGeneratorFunction = function(t) {
                    var n = "function" == typeof t && t.constructor;
                    return !!n && (n === o || "GeneratorFunction" === (n.displayName || n.name))
                }, E.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, u) : (t.__proto__ = u, x in t || (t[x] = "GeneratorFunction")), t.prototype = Object.create(T), t
                }, E.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, c(f.prototype), f.prototype[w] = function() {
                    return this
                }, E.AsyncIterator = f, E.async = function(t, n, e, i) {
                    var o = new f(r(t, n, e, i));
                    return E.isGeneratorFunction(n) ? o : o.next().then(function(t) {
                        return t.done ? t.value : o.next()
                    })
                }, c(T), T[x] = "Generator", T[S] = function() {
                    return this
                }, T.toString = function() {
                    return "[object Generator]"
                }, E.keys = function(t) {
                    var n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function r() {
                            for (; n.length;) {
                                var e = n.pop();
                                if (e in t) return r.value = e, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, E.values = p, v.prototype = {
                    constructor: v,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = d, this.done = !1, this.delegate = null, this.method = "next", this.arg = d, this.tryEntries.forEach(h), !t)
                            for (var n in this) "t" === n.charAt(0) && m.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = d)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0],
                            n = t.completion;
                        if ("throw" === n.type) throw n.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        function n(n, e) {
                            return o.type = "throw", o.arg = t, r.next = n, e && (r.method = "next", r.arg = d), !!e
                        }
                        if (this.done) throw t;
                        for (var r = this, e = this.tryEntries.length - 1; e >= 0; --e) {
                            var i = this.tryEntries[e],
                                o = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var u = m.call(i, "catchLoc"),
                                    c = m.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, n) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var e = this.tryEntries[r];
                            if (e.tryLoc <= this.prev && m.call(e, "finallyLoc") && this.prev < e.finallyLoc) {
                                var i = e;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = t, o.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, A) : this.complete(o)
                    },
                    complete: function(t, n) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), A
                    },
                    finish: function(t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), h(r), A
                        }
                    },
                    catch: function(t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc === t) {
                                var e = r.completion;
                                if ("throw" === e.type) {
                                    var i = e.arg;
                                    h(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, r) {
                        return this.delegate = {
                            iterator: p(t),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = d), A
                    }
                }
            }("object" == typeof t ? t : "object" == typeof window ? window : "object" == typeof self ? self : this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}]
}, {}, [1]);
! function(e) {
    var n = Date.now || function() {
            return +new Date
        },
        t = {},
        r = 1;
    e.core ? core.effect || (core.effect = {}) : e.core = {
        effect: {}
    }, core.effect.Animate = {
        requestAnimationFrame: function() {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame,
                t = !!n;
            if (n && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(n.toString()) && (t = !1), t) return function(e, t) {
                n(e, t)
            };
            var r = {},
                a = 0,
                i = 1,
                o = null,
                u = +new Date;
            return function(e, n) {
                var t = i++;
                return r[t] = e, a++, null === o && (o = setInterval(function() {
                    var e = +new Date,
                        n = r;
                    r = {}, a = 0;
                    for (var t in n) n.hasOwnProperty(t) && (n[t](e), u = e);
                    e - u > 2500 && (clearInterval(o), o = null)
                }, 1e3 / 60)), t
            }
        }(),
        stop: function(e) {
            var n = null != t[e];
            return n && (t[e] = null), n
        },
        isRunning: function(e) {
            return null != t[e]
        },
        start: function(e, a, i, o, u, f) {
            var c = n(),
                m = c,
                l = 0,
                s = 0,
                v = r++;
            if (f || (f = document.body), v % 20 == 0) {
                var A = {};
                for (var q in t) A[q] = !0;
                t = A
            }
            var F = function(r) {
                var A = !0 !== r,
                    q = n();
                if (!t[v] || a && !a(v)) return t[v] = null, void(i && i(60 - s / ((q - c) / 1e3), v, !1));
                if (A)
                    for (var w = Math.round((q - m) / (1e3 / 60)) - 1, d = 0; d < Math.min(w, 4); d++) F(!0), s++;
                o && (l = (q - c) / o) > 1 && (l = 1);
                var h = u ? u(l) : l;
                !1 !== e(h, q, A) && 1 !== l || !A ? A && (m = q, core.effect.Animate.requestAnimationFrame(F, f)) : (t[v] = null, i && i(60 - s / ((q - c) / 1e3), v, 1 === l || null == o))
            };
            return t[v] = !0, core.effect.Animate.requestAnimationFrame(F, f), v
        }
    }
}(this);
var Scroller;
! function() {
    var e = function() {};
    Scroller = function(o, _) {
        this.__callback = o, this.options = {
            scrollingX: !0,
            scrollingY: !0,
            animating: !0,
            animationDuration: 250,
            bouncing: !0,
            locking: !0,
            paging: !1,
            snapping: !1,
            zooming: !1,
            minZoom: .5,
            maxZoom: 3,
            speedMultiplier: 1,
            scrollingComplete: e,
            penetrationDeceleration: .03,
            penetrationAcceleration: .08
        };
        for (var t in _) this.options[t] = _[t]
    };
    var o = function(e) {
            return Math.pow(e - 1, 3) + 1
        },
        _ = function(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        },
        t = {
            __isSingleTouch: !1,
            __isTracking: !1,
            __didDecelerationComplete: !1,
            __isGesturing: !1,
            __isDragging: !1,
            __isDecelerating: !1,
            __isAnimating: !1,
            __clientLeft: 0,
            __clientTop: 0,
            __clientWidth: 0,
            __clientHeight: 0,
            __contentWidth: 0,
            __contentHeight: 0,
            __snapWidth: 100,
            __snapHeight: 100,
            __refreshHeight: null,
            __refreshActive: !1,
            __refreshActivate: null,
            __refreshDeactivate: null,
            __refreshStart: null,
            __zoomLevel: 1,
            __scrollLeft: 0,
            __scrollTop: 0,
            __maxScrollLeft: 0,
            __maxScrollTop: 0,
            __scheduledLeft: 0,
            __scheduledTop: 0,
            __scheduledZoom: 0,
            __lastTouchLeft: null,
            __lastTouchTop: null,
            __lastTouchMove: null,
            __positions: null,
            __minDecelerationScrollLeft: null,
            __minDecelerationScrollTop: null,
            __maxDecelerationScrollLeft: null,
            __maxDecelerationScrollTop: null,
            __decelerationVelocityX: null,
            __decelerationVelocityY: null,
            setDimensions: function(e, o, _, t) {
                var l = this;
                e === +e && (l.__clientWidth = e), o === +o && (l.__clientHeight = o), _ === +_ && (l.__contentWidth = _), t === +t && (l.__contentHeight = t), l.__computeScrollMax(), l.scrollTo(l.__scrollLeft, l.__scrollTop, !0)
            },
            setPosition: function(e, o) {
                var _ = this;
                _.__clientLeft = e || 0, _.__clientTop = o || 0
            },
            setSnapSize: function(e, o) {
                var _ = this;
                _.__snapWidth = e, _.__snapHeight = o
            },
            activatePullToRefresh: function(e, o, _, t) {
                var l = this;
                l.__refreshHeight = e, l.__refreshActivate = o, l.__refreshDeactivate = _, l.__refreshStart = t
            },
            triggerPullToRefresh: function() {
                this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, !0), this.__refreshStart && this.__refreshStart()
            },
            finishPullToRefresh: function() {
                var e = this;
                e.__refreshActive = !1, e.__refreshDeactivate && e.__refreshDeactivate(), e.scrollTo(e.__scrollLeft, e.__scrollTop, !0)
            },
            getValues: function() {
                var e = this;
                return {
                    left: e.__scrollLeft,
                    top: e.__scrollTop,
                    zoom: e.__zoomLevel
                }
            },
            getScrollMax: function() {
                var e = this;
                return {
                    left: e.__maxScrollLeft,
                    top: e.__maxScrollTop
                }
            },
            zoomTo: function(e, o, _, t, l) {
                var i = this;
                if (!i.options.zooming) throw new Error("Zooming is not enabled!");
                l && (i.__zoomComplete = l), i.__isDecelerating && (core.effect.Animate.stop(i.__isDecelerating), i.__isDecelerating = !1);
                var n = i.__zoomLevel;
                null == _ && (_ = i.__clientWidth / 2), null == t && (t = i.__clientHeight / 2), e = Math.max(Math.min(e, i.options.maxZoom), i.options.minZoom), i.__computeScrollMax(e);
                var r = (_ + i.__scrollLeft) * e / n - _,
                    a = (t + i.__scrollTop) * e / n - t;
                r > i.__maxScrollLeft ? r = i.__maxScrollLeft : r < 0 && (r = 0), a > i.__maxScrollTop ? a = i.__maxScrollTop : a < 0 && (a = 0), i.__publish(r, a, e, o)
            },
            zoomBy: function(e, o, _, t, l) {
                var i = this;
                i.zoomTo(i.__zoomLevel * e, o, _, t, l)
            },
            scrollTo: function(e, o, _, t) {
                var l = this;
                if (l.__isDecelerating && (core.effect.Animate.stop(l.__isDecelerating), l.__isDecelerating = !1), null != t && t !== l.__zoomLevel) {
                    if (!l.options.zooming) throw new Error("Zooming is not enabled!");
                    e *= t, o *= t, l.__computeScrollMax(t)
                } else t = l.__zoomLevel;
                l.options.scrollingX ? l.options.paging ? e = Math.round(e / l.__clientWidth) * l.__clientWidth : l.options.snapping && (e = Math.round(e / l.__snapWidth) * l.__snapWidth) : e = l.__scrollLeft, l.options.scrollingY ? l.options.paging ? o = Math.round(o / l.__clientHeight) * l.__clientHeight : l.options.snapping && (o = Math.round(o / l.__snapHeight) * l.__snapHeight) : o = l.__scrollTop, e = Math.max(Math.min(l.__maxScrollLeft, e), 0), o = Math.max(Math.min(l.__maxScrollTop, o), 0), e === l.__scrollLeft && o === l.__scrollTop && (_ = !1), l.__isTracking || l.__publish(e, o, t, _)
            },
            scrollBy: function(e, o, _) {
                var t = this,
                    l = t.__isAnimating ? t.__scheduledLeft : t.__scrollLeft,
                    i = t.__isAnimating ? t.__scheduledTop : t.__scrollTop;
                t.scrollTo(l + (e || 0), i + (o || 0), _)
            },
            doMouseZoom: function(e, o, _, t) {
                var l = this,
                    i = e > 0 ? .97 : 1.03;
                return l.zoomTo(l.__zoomLevel * i, !1, _ - l.__clientLeft, t - l.__clientTop)
            },
            doTouchStart: function(e, o) {
                if (null == e.length) throw new Error("Invalid touch list: " + e);
                if (o instanceof Date && (o = o.valueOf()), "number" != typeof o) throw new Error("Invalid timestamp value: " + o);
                var _ = this;
                _.__interruptedAnimation = !0, _.__isDecelerating && (core.effect.Animate.stop(_.__isDecelerating), _.__isDecelerating = !1, _.__interruptedAnimation = !0), _.__isAnimating && (core.effect.Animate.stop(_.__isAnimating), _.__isAnimating = !1, _.__interruptedAnimation = !0);
                var t, l, i = 1 === e.length;
                i ? (t = e[0].pageX, l = e[0].pageY) : (t = Math.abs(e[0].pageX + e[1].pageX) / 2, l = Math.abs(e[0].pageY + e[1].pageY) / 2), _.__initialTouchLeft = t, _.__initialTouchTop = l, _.__zoomLevelStart = _.__zoomLevel, _.__lastTouchLeft = t, _.__lastTouchTop = l, _.__lastTouchMove = o, _.__lastScale = 1, _.__enableScrollX = !i && _.options.scrollingX, _.__enableScrollY = !i && _.options.scrollingY, _.__isTracking = !0, _.__didDecelerationComplete = !1, _.__isDragging = !i, _.__isSingleTouch = i, _.__positions = []
            },
            doTouchMove: function(e, o, _) {
                if (null == e.length) throw new Error("Invalid touch list: " + e);
                if (o instanceof Date && (o = o.valueOf()), "number" != typeof o) throw new Error("Invalid timestamp value: " + o);
                var t = this;
                if (t.__isTracking) {
                    var l, i;
                    2 === e.length ? (l = Math.abs(e[0].pageX + e[1].pageX) / 2, i = Math.abs(e[0].pageY + e[1].pageY) / 2) : (l = e[0].pageX, i = e[0].pageY);
                    var n = t.__positions;
                    if (t.__isDragging) {
                        var r = l - t.__lastTouchLeft,
                            a = i - t.__lastTouchTop,
                            c = t.__scrollLeft,
                            s = t.__scrollTop,
                            p = t.__zoomLevel;
                        if (null != _ && t.options.zooming) {
                            var h = p;
                            if (p = p / t.__lastScale * _, p = Math.max(Math.min(p, t.options.maxZoom), t.options.minZoom), h !== p) {
                                var f = l - t.__clientLeft,
                                    m = i - t.__clientTop;
                                c = (f + c) * p / h - f, s = (m + s) * p / h - m, t.__computeScrollMax(p)
                            }
                        }
                        if (t.__enableScrollX) {
                            c -= r * this.options.speedMultiplier;
                            var g = t.__maxScrollLeft;
                            (c > g || c < 0) && (t.options.bouncing ? c += r / 2 * this.options.speedMultiplier : c = c > g ? g : 0)
                        }
                        if (t.__enableScrollY) {
                            s -= a * this.options.speedMultiplier;
                            var u = t.__maxScrollTop;
                            (s > u || s < 0) && (t.options.bouncing ? (s += a / 2 * this.options.speedMultiplier, t.__enableScrollX || null == t.__refreshHeight || (!t.__refreshActive && s <= -t.__refreshHeight ? (t.__refreshActive = !0, t.__refreshActivate && t.__refreshActivate()) : t.__refreshActive && s > -t.__refreshHeight && (t.__refreshActive = !1, t.__refreshDeactivate && t.__refreshDeactivate()))) : s = s > u ? u : 0)
                        }
                        n.length > 60 && n.splice(0, 30), n.push(c, s, o), t.__publish(c, s, p)
                    } else {
                        var v = t.options.locking ? 3 : 0,
                            T = Math.abs(l - t.__initialTouchLeft),
                            d = Math.abs(i - t.__initialTouchTop);
                        t.__enableScrollX = t.options.scrollingX && T >= v, t.__enableScrollY = t.options.scrollingY && d >= v, n.push(t.__scrollLeft, t.__scrollTop, o), t.__isDragging = (t.__enableScrollX || t.__enableScrollY) && (T >= 5 || d >= 5), t.__isDragging && (t.__interruptedAnimation = !1)
                    }
                    t.__lastTouchLeft = l, t.__lastTouchTop = i, t.__lastTouchMove = o, t.__lastScale = _
                }
            },
            doTouchEnd: function(e) {
                if (e instanceof Date && (e = e.valueOf()), "number" != typeof e) throw new Error("Invalid timestamp value: " + e);
                var o = this;
                if (o.__isTracking) {
                    if (o.__isTracking = !1, o.__isDragging)
                        if (o.__isDragging = !1, o.__isSingleTouch && o.options.animating && e - o.__lastTouchMove <= 100) {
                            for (var _ = o.__positions, t = _.length - 1, l = t, i = t; i > 0 && _[i] > o.__lastTouchMove - 100; i -= 3) l = i;
                            if (l !== t) {
                                var n = _[t] - _[l],
                                    r = o.__scrollLeft - _[l - 2],
                                    a = o.__scrollTop - _[l - 1];
                                o.__decelerationVelocityX = r / n * (1e3 / 60), o.__decelerationVelocityY = a / n * (1e3 / 60);
                                var c = o.options.paging || o.options.snapping ? 4 : 1;
                                Math.abs(o.__decelerationVelocityX) > c || Math.abs(o.__decelerationVelocityY) > c ? o.__refreshActive || o.__startDeceleration(e) : o.options.scrollingComplete()
                            } else o.options.scrollingComplete()
                        } else e - o.__lastTouchMove > 100 && o.options.scrollingComplete();
                    o.__isDecelerating || (o.__refreshActive && o.__refreshStart ? (o.__publish(o.__scrollLeft, -o.__refreshHeight, o.__zoomLevel, !0), o.__refreshStart && o.__refreshStart()) : ((o.__interruptedAnimation || o.__isDragging) && o.options.scrollingComplete(), o.scrollTo(o.__scrollLeft, o.__scrollTop, !0, o.__zoomLevel), o.__refreshActive && (o.__refreshActive = !1, o.__refreshDeactivate && o.__refreshDeactivate()))), o.__positions.length = 0
                }
            },
            __publish: function(e, t, l, i) {
                var n = this,
                    r = n.__isAnimating;
                if (r && (core.effect.Animate.stop(r), n.__isAnimating = !1), i && n.options.animating) {
                    n.__scheduledLeft = e, n.__scheduledTop = t, n.__scheduledZoom = l;
                    var a = n.__scrollLeft,
                        c = n.__scrollTop,
                        s = n.__zoomLevel,
                        p = e - a,
                        h = t - c,
                        f = l - s,
                        m = function(e, o, _) {
                            _ && (n.__scrollLeft = a + p * e, n.__scrollTop = c + h * e, n.__zoomLevel = s + f * e, n.__callback && n.__callback(n.__scrollLeft, n.__scrollTop, n.__zoomLevel))
                        },
                        g = function(e) {
                            return n.__isAnimating === e
                        },
                        u = function(e, o, _) {
                            o === n.__isAnimating && (n.__isAnimating = !1), (n.__didDecelerationComplete || _) && n.options.scrollingComplete(), n.options.zooming && (n.__computeScrollMax(), n.__zoomComplete && (n.__zoomComplete(), n.__zoomComplete = null))
                        };
                    n.__isAnimating = core.effect.Animate.start(m, g, u, n.options.animationDuration, r ? o : _)
                } else n.__scheduledLeft = n.__scrollLeft = e, n.__scheduledTop = n.__scrollTop = t, n.__scheduledZoom = n.__zoomLevel = l, n.__callback && n.__callback(e, t, l), n.options.zooming && (n.__computeScrollMax(), n.__zoomComplete && (n.__zoomComplete(), n.__zoomComplete = null))
            },
            __computeScrollMax: function(e) {
                var o = this;
                null == e && (e = o.__zoomLevel), o.__maxScrollLeft = Math.max(o.__contentWidth * e - o.__clientWidth, 0), o.__maxScrollTop = Math.max(o.__contentHeight * e - o.__clientHeight, 0)
            },
            __startDeceleration: function(e) {
                var o = this;
                if (o.options.paging) {
                    var _ = Math.max(Math.min(o.__scrollLeft, o.__maxScrollLeft), 0),
                        t = Math.max(Math.min(o.__scrollTop, o.__maxScrollTop), 0),
                        l = o.__clientWidth,
                        i = o.__clientHeight;
                    o.__minDecelerationScrollLeft = Math.floor(_ / l) * l, o.__minDecelerationScrollTop = Math.floor(t / i) * i, o.__maxDecelerationScrollLeft = Math.ceil(_ / l) * l, o.__maxDecelerationScrollTop = Math.ceil(t / i) * i
                } else o.__minDecelerationScrollLeft = 0, o.__minDecelerationScrollTop = 0, o.__maxDecelerationScrollLeft = o.__maxScrollLeft, o.__maxDecelerationScrollTop = o.__maxScrollTop;
                var n = function(e, _, t) {
                        o.__stepThroughDeceleration(t)
                    },
                    r = o.options.snapping ? 4 : .001,
                    a = function() {
                        var e = Math.abs(o.__decelerationVelocityX) >= r || Math.abs(o.__decelerationVelocityY) >= r;
                        return e || (o.__didDecelerationComplete = !0), e
                    },
                    c = function(e, _, t) {
                        o.__isDecelerating = !1, o.__didDecelerationComplete && o.options.scrollingComplete(), o.scrollTo(o.__scrollLeft, o.__scrollTop, o.options.snapping)
                    };
                o.__isDecelerating = core.effect.Animate.start(n, a, c)
            },
            __stepThroughDeceleration: function(e) {
                var o = this,
                    _ = o.__scrollLeft + o.__decelerationVelocityX,
                    t = o.__scrollTop + o.__decelerationVelocityY;
                if (!o.options.bouncing) {
                    var l = Math.max(Math.min(o.__maxDecelerationScrollLeft, _), o.__minDecelerationScrollLeft);
                    l !== _ && (_ = l, o.__decelerationVelocityX = 0);
                    var i = Math.max(Math.min(o.__maxDecelerationScrollTop, t), o.__minDecelerationScrollTop);
                    i !== t && (t = i, o.__decelerationVelocityY = 0)
                }
                if (e ? o.__publish(_, t, o.__zoomLevel) : (o.__scrollLeft = _, o.__scrollTop = t), !o.options.paging) {
                    o.__decelerationVelocityX *= .95, o.__decelerationVelocityY *= .95
                }
                if (o.options.bouncing) {
                    var n = 0,
                        r = 0,
                        a = o.options.penetrationDeceleration,
                        c = o.options.penetrationAcceleration;
                    _ < o.__minDecelerationScrollLeft ? n = o.__minDecelerationScrollLeft - _ : _ > o.__maxDecelerationScrollLeft && (n = o.__maxDecelerationScrollLeft - _), t < o.__minDecelerationScrollTop ? r = o.__minDecelerationScrollTop - t : t > o.__maxDecelerationScrollTop && (r = o.__maxDecelerationScrollTop - t), 0 !== n && (n * o.__decelerationVelocityX <= 0 ? o.__decelerationVelocityX += n * a : o.__decelerationVelocityX = n * c), 0 !== r && (r * o.__decelerationVelocityY <= 0 ? o.__decelerationVelocityY += r * a : o.__decelerationVelocityY = r * c)
                }
            }
        };
    for (var l in t) Scroller.prototype[l] = t[l]
}();
var dat = dat || {};
dat.gui = dat.gui || {}, dat.utils = dat.utils || {}, dat.controllers = dat.controllers || {}, dat.dom = dat.dom || {}, dat.color = dat.color || {}, dat.utils.css = function() {
    return {
        load: function(e, t) {
            t = t || document;
            var n = t.createElement("link");
            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.getElementsByTagName("head")[0].appendChild(n)
        },
        inject: function(e, t) {
            t = t || document;
            var n = document.createElement("style");
            n.type = "text/css", n.innerHTML = e, t.getElementsByTagName("head")[0].appendChild(n)
        }
    }
}(), dat.utils.common = function() {
    var e = Array.prototype.forEach,
        t = Array.prototype.slice;
    return {
        BREAK: {},
        extend: function(e) {
            return this.each(t.call(arguments, 1), function(t) {
                for (var n in t) this.isUndefined(t[n]) || (e[n] = t[n])
            }, this), e
        },
        defaults: function(e) {
            return this.each(t.call(arguments, 1), function(t) {
                for (var n in t) this.isUndefined(e[n]) && (e[n] = t[n])
            }, this), e
        },
        compose: function() {
            var e = t.call(arguments);
            return function() {
                for (var n = t.call(arguments), o = e.length - 1; o >= 0; o--) n = [e[o].apply(this, n)];
                return n[0]
            }
        },
        each: function(t, n, o) {
            if (t)
                if (e && t.forEach && t.forEach === e) t.forEach(n, o);
                else if (t.length === t.length + 0) {
                for (var i = 0, r = t.length; i < r; i++)
                    if (i in t && n.call(o, t[i], i) === this.BREAK) return
            } else
                for (var i in t)
                    if (n.call(o, t[i], i) === this.BREAK) return
        },
        defer: function(e) {
            setTimeout(e, 0)
        },
        toArray: function(e) {
            return e.toArray ? e.toArray() : t.call(e)
        },
        isUndefined: function(e) {
            return void 0 === e
        },
        isNull: function(e) {
            return null === e
        },
        isNaN: function(e) {
            return e !== e
        },
        isArray: Array.isArray || function(e) {
            return e.constructor === Array
        },
        isObject: function(e) {
            return e === Object(e)
        },
        isNumber: function(e) {
            return e === e + 0
        },
        isString: function(e) {
            return e === e + ""
        },
        isBoolean: function(e) {
            return !1 === e || !0 === e
        },
        isFunction: function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }
}(), dat.controllers.Controller = function(e) {
    var t = function(e, t) {
        this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0
    };
    return e.extend(t.prototype, {
        onChange: function(e) {
            return this.__onChange = e, this
        },
        onFinishChange: function(e) {
            return this.__onFinishChange = e, this
        },
        setValue: function(e) {
            return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
        },
        getValue: function() {
            return this.object[this.property]
        },
        updateDisplay: function() {
            return this
        },
        isModified: function() {
            return this.initialValue !== this.getValue()
        }
    }), t
}(dat.utils.common), dat.dom.dom = function(e) {
    function t(t) {
        if ("0" === t || e.isUndefined(t)) return 0;
        var n = t.match(i);
        return e.isNull(n) ? 0 : parseFloat(n[1])
    }
    var n = {
            HTMLEvents: ["change"],
            MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
            KeyboardEvents: ["keydown"]
        },
        o = {};
    e.each(n, function(t, n) {
        e.each(t, function(e) {
            o[e] = n
        })
    });
    var i = /(\d+(\.\d+)?)px/,
        r = {
            makeSelectable: function(e, t) {
                void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function() {
                    return !1
                } : function() {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
            },
            makeFullscreen: function(t, n, o) {
                e.isUndefined(n) && (n = !0), e.isUndefined(o) && (o = !0), t.style.position = "absolute", n && (t.style.left = 0, t.style.right = 0), o && (t.style.top = 0, t.style.bottom = 0)
            },
            fakeEvent: function(t, n, i, r) {
                i = i || {};
                var s = o[n];
                if (!s) throw new Error("Event type " + n + " not supported.");
                var a = document.createEvent(s);
                switch (s) {
                    case "MouseEvents":
                        var l = i.x || i.clientX || 0,
                            d = i.y || i.clientY || 0;
                        a.initMouseEvent(n, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, l, d, !1, !1, !1, !1, 0, null);
                        break;
                    case "KeyboardEvents":
                        var c = a.initKeyboardEvent || a.initKeyEvent;
                        e.defaults(i, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: void 0,
                            charCode: void 0
                        }), c(n, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
                        break;
                    default:
                        a.initEvent(n, i.bubbles || !1, i.cancelable || !0)
                }
                e.defaults(a, r), t.dispatchEvent(a)
            },
            bind: function(e, t, n, o) {
                return o = o || !1, e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent && e.attachEvent("on" + t, n), r
            },
            unbind: function(e, t, n, o) {
                return o = o || !1, e.removeEventListener ? e.removeEventListener(t, n, o) : e.detachEvent && e.detachEvent("on" + t, n), r
            },
            addClass: function(e, t) {
                if (void 0 === e.className) e.className = t;
                else if (e.className !== t) {
                    var n = e.className.split(/ +/); - 1 == n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                }
                return r
            },
            removeClass: function(e, t) {
                if (t)
                    if (void 0 === e.className);
                    else if (e.className === t) e.removeAttribute("class");
                else {
                    var n = e.className.split(/ +/),
                        o = n.indexOf(t); - 1 != o && (n.splice(o, 1), e.className = n.join(" "))
                } else e.className = void 0;
                return r
            },
            hasClass: function(e, t) {
                return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
            },
            getWidth: function(e) {
                var n = getComputedStyle(e);
                return t(n["border-left-width"]) + t(n["border-right-width"]) + t(n["padding-left"]) + t(n["padding-right"]) + t(n.width)
            },
            getHeight: function(e) {
                var n = getComputedStyle(e);
                return t(n["border-top-width"]) + t(n["border-bottom-width"]) + t(n["padding-top"]) + t(n["padding-bottom"]) + t(n.height)
            },
            getOffset: function(e) {
                var t = {
                    left: 0,
                    top: 0
                };
                if (e.offsetParent)
                    do {
                        t.left += e.offsetLeft, t.top += e.offsetTop
                    } while (e = e.offsetParent);
                return t
            },
            isActive: function(e) {
                return e === document.activeElement && (e.type || e.href)
            }
        };
    return r
}(dat.utils.common), dat.controllers.OptionController = function(e, t, n) {
    var o = function(e, i, r) {
        o.superclass.call(this, e, i);
        var s = this;
        if (this.__select = document.createElement("select"), n.isArray(r)) {
            var a = {};
            n.each(r, function(e) {
                a[e] = e
            }), r = a
        }
        n.each(r, function(e, t) {
            var n = document.createElement("option");
            n.innerHTML = t, n.setAttribute("value", e), s.__select.appendChild(n)
        }), this.updateDisplay(), t.bind(this.__select, "change", function() {
            var e = this.options[this.selectedIndex].value;
            s.setValue(e)
        }), this.domElement.appendChild(this.__select)
    };
    return o.superclass = e, n.extend(o.prototype, e.prototype, {
        setValue: function(e) {
            var t = o.superclass.prototype.setValue.call(this, e);
            return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t
        },
        updateDisplay: function() {
            return this.__select.value = this.getValue(), o.superclass.prototype.updateDisplay.call(this)
        }
    }), o
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.NumberController = function(e, t) {
    function n(e) {
        return e = e.toString(), e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
    }
    var o = function(e, i, r) {
        o.superclass.call(this, e, i), r = r || {}, this.__min = r.min, this.__max = r.max, this.__step = r.step, t.isUndefined(this.__step) ? 0 == this.initialValue ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = n(this.__impliedStep)
    };
    return o.superclass = e, t.extend(o.prototype, e.prototype, {
        setValue: function(e) {
            return void 0 !== this.__min && e < this.__min ? e = this.__min : void 0 !== this.__max && e > this.__max && (e = this.__max), void 0 !== this.__step && e % this.__step != 0 && (e = Math.round(e / this.__step) * this.__step), o.superclass.prototype.setValue.call(this, e)
        },
        min: function(e) {
            return this.__min = e, this
        },
        max: function(e) {
            return this.__max = e, this
        },
        step: function(e) {
            return this.__step = e, this.__impliedStep = e, this.__precision = n(e), this
        }
    }), o
}(dat.controllers.Controller, dat.utils.common), dat.controllers.NumberControllerBox = function(e, t, n) {
    function o(e, t) {
        var n = Math.pow(10, t);
        return Math.round(e * n) / n
    }
    var i = function(e, o, r) {
        function s() {
            var e = parseFloat(h.__input.value);
            n.isNaN(e) || h.setValue(e)
        }

        function a() {
            s(), h.__onFinishChange && h.__onFinishChange.call(h, h.getValue())
        }

        function l(e) {
            t.bind(window, "mousemove", d), t.bind(window, "mouseup", c), u = e.clientY
        }

        function d(e) {
            var t = u - e.clientY;
            h.setValue(h.getValue() + t * h.__impliedStep), u = e.clientY
        }

        function c() {
            t.unbind(window, "mousemove", d), t.unbind(window, "mouseup", c)
        }
        this.__truncationSuspended = !1, i.superclass.call(this, e, o, r);
        var u, h = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "change", s), t.bind(this.__input, "blur", a), t.bind(this.__input, "mousedown", l), t.bind(this.__input, "keydown", function(e) {
            13 === e.keyCode && (h.__truncationSuspended = !0, this.blur(), h.__truncationSuspended = !1)
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
    };
    return i.superclass = e, n.extend(i.prototype, e.prototype, {
        updateDisplay: function() {
            return this.__input.value = this.__truncationSuspended ? this.getValue() : o(this.getValue(), this.__precision), i.superclass.prototype.updateDisplay.call(this)
        }
    }), i
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common);
var rawCssText = "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}",
    cssConverterElement = document.createElement("div");
cssConverterElement.appendChild(document.createTextNode(rawCssText)), dat.controllers.NumberControllerSlider = function(e, t, n, o, i) {
    function r(e, t, n, o, i) {
        return o + (e - t) / (n - t) * (i - o)
    }
    var s = function(e, n, o, i, a) {
        function l(e) {
            t.bind(window, "mousemove", d), t.bind(window, "mouseup", c), d(e)
        }

        function d(e) {
            e.preventDefault();
            var n = t.getOffset(u.__background),
                o = t.getWidth(u.__background);
            return u.setValue(r(e.clientX, n.left, n.left + o, u.__min, u.__max)), !1
        }

        function c() {
            t.unbind(window, "mousemove", d), t.unbind(window, "mouseup", c), u.__onFinishChange && u.__onFinishChange.call(u, u.getValue())
        }
        s.superclass.call(this, e, n, {
            min: o,
            max: i,
            step: a
        });
        var u = this;
        this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), t.bind(this.__background, "mousedown", l), t.addClass(this.__background, "slider"), t.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
    };
    return s.superclass = e, s.useDefaultStyles = function() {
        n.inject(i)
    }, o.extend(s.prototype, e.prototype, {
        updateDisplay: function() {
            var e = (this.getValue() - this.__min) / (this.__max - this.__min);
            return this.__foreground.style.width = 100 * e + "%", s.superclass.prototype.updateDisplay.call(this)
        }
    }), s
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, cssConverterElement.innerHTML), dat.controllers.FunctionController = function(e, t, n) {
    var o = function(e, n, i) {
        o.superclass.call(this, e, n);
        var r = this;
        this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === i ? "Fire" : i, t.bind(this.__button, "click", function(e) {
            return e.preventDefault(), r.fire(), !1
        }), t.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
    };
    return o.superclass = e, n.extend(o.prototype, e.prototype, {
        fire: function() {
            this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object)
        }
    }), o
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.BooleanController = function(e, t, n) {
    var o = function(e, n) {
        function i() {
            r.setValue(!r.__prev)
        }
        o.superclass.call(this, e, n);
        var r = this;
        this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), t.bind(this.__checkbox, "change", i, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
    };
    return o.superclass = e, n.extend(o.prototype, e.prototype, {
        setValue: function(e) {
            var t = o.superclass.prototype.setValue.call(this, e);
            return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), t
        },
        updateDisplay: function() {
            return !0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, o.superclass.prototype.updateDisplay.call(this)
        }
    }), o
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.color.toString = function(e) {
    return function(t) {
        if (1 == t.a || e.isUndefined(t.a)) {
            for (var n = t.hex.toString(16); n.length < 6;) n = "0" + n;
            return "#" + n
        }
        return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")"
    }
}(dat.utils.common), dat.color.interpret = function(e, t) {
    var n, o, i = function() {
            o = !1;
            var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0];
            return t.each(r, function(i) {
                if (i.litmus(e)) return t.each(i.conversions, function(i, r) {
                    if (n = i.read(e), !1 === o && !1 !== n) return o = n, n.conversionName = r, n.conversion = i, t.BREAK
                }), t.BREAK
            }), o
        },
        r = [{
            litmus: t.isString,
            conversions: {
                THREE_CHAR_HEX: {
                    read: function(e) {
                        var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                        return null !== t && {
                            space: "HEX",
                            hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
                        }
                    },
                    write: e
                },
                SIX_CHAR_HEX: {
                    read: function(e) {
                        var t = e.match(/^#([A-F0-9]{6})$/i);
                        return null !== t && {
                            space: "HEX",
                            hex: parseInt("0x" + t[1].toString())
                        }
                    },
                    write: e
                },
                CSS_RGB: {
                    read: function(e) {
                        var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                        return null !== t && {
                            space: "RGB",
                            r: parseFloat(t[1]),
                            g: parseFloat(t[2]),
                            b: parseFloat(t[3])
                        }
                    },
                    write: e
                },
                CSS_RGBA: {
                    read: function(e) {
                        var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                        return null !== t && {
                            space: "RGB",
                            r: parseFloat(t[1]),
                            g: parseFloat(t[2]),
                            b: parseFloat(t[3]),
                            a: parseFloat(t[4])
                        }
                    },
                    write: e
                }
            }
        }, {
            litmus: t.isNumber,
            conversions: {
                HEX: {
                    read: function(e) {
                        return {
                            space: "HEX",
                            hex: e,
                            conversionName: "HEX"
                        }
                    },
                    write: function(e) {
                        return e.hex
                    }
                }
            }
        }, {
            litmus: t.isArray,
            conversions: {
                RGB_ARRAY: {
                    read: function(e) {
                        return 3 == e.length && {
                            space: "RGB",
                            r: e[0],
                            g: e[1],
                            b: e[2]
                        }
                    },
                    write: function(e) {
                        return [e.r, e.g, e.b]
                    }
                },
                RGBA_ARRAY: {
                    read: function(e) {
                        return 4 == e.length && {
                            space: "RGB",
                            r: e[0],
                            g: e[1],
                            b: e[2],
                            a: e[3]
                        }
                    },
                    write: function(e) {
                        return [e.r, e.g, e.b, e.a]
                    }
                }
            }
        }, {
            litmus: t.isObject,
            conversions: {
                RGBA_OBJ: {
                    read: function(e) {
                        return !!(t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a)) && {
                            space: "RGB",
                            r: e.r,
                            g: e.g,
                            b: e.b,
                            a: e.a
                        }
                    },
                    write: function(e) {
                        return {
                            r: e.r,
                            g: e.g,
                            b: e.b,
                            a: e.a
                        }
                    }
                },
                RGB_OBJ: {
                    read: function(e) {
                        return !!(t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b)) && {
                            space: "RGB",
                            r: e.r,
                            g: e.g,
                            b: e.b
                        }
                    },
                    write: function(e) {
                        return {
                            r: e.r,
                            g: e.g,
                            b: e.b
                        }
                    }
                },
                HSVA_OBJ: {
                    read: function(e) {
                        return !!(t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a)) && {
                            space: "HSV",
                            h: e.h,
                            s: e.s,
                            v: e.v,
                            a: e.a
                        }
                    },
                    write: function(e) {
                        return {
                            h: e.h,
                            s: e.s,
                            v: e.v,
                            a: e.a
                        }
                    }
                },
                HSV_OBJ: {
                    read: function(e) {
                        return !!(t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v)) && {
                            space: "HSV",
                            h: e.h,
                            s: e.s,
                            v: e.v
                        }
                    },
                    write: function(e) {
                        return {
                            h: e.h,
                            s: e.s,
                            v: e.v
                        }
                    }
                }
            }
        }];
    return i
}(dat.color.toString, dat.utils.common), rawCssText = ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 10; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", cssConverterElement = document.createElement("div"), cssConverterElement.appendChild(document.createTextNode(rawCssText)), dat.GUI = dat.gui.GUI = function(e, t, n, o, i, r, s, a, l, d, c, u, h, p, _) {
    function f(e, t, n, r) {
        if (void 0 === t[n]) throw new Error("Object " + t + ' has no property "' + n + '"');
        var s;
        if (r.color) s = new c(t, n);
        else {
            var a = [t, n].concat(r.factoryArgs);
            s = o.apply(e, a)
        }
        r.before instanceof i && (r.before = r.before.__li), b(e, s), p.addClass(s.domElement, "c");
        var l = document.createElement("span");
        p.addClass(l, "property-name"), l.innerHTML = s.property;
        var d = document.createElement("div");
        d.appendChild(l), d.appendChild(s.domElement);
        var u = m(e, d, r.before);
        return p.addClass(u, F.CLASS_CONTROLLER_ROW), p.addClass(u, typeof s.getValue()), g(e, u, s), e.__controllers.push(s), s
    }

    function m(e, t, n) {
        var o = document.createElement("li");
        return t && o.appendChild(t), n ? e.__ul.insertBefore(o, params.before) : e.__ul.appendChild(o), e.onResize(), o
    }

    function g(e, t, n) {
        if (n.__li = t, n.__gui = e, _.extend(n, {
                options: function(t) {
                    return arguments.length > 1 ? (n.remove(), f(e, n.object, n.property, {
                        before: n.__li.nextElementSibling,
                        factoryArgs: [_.toArray(arguments)]
                    })) : _.isArray(t) || _.isObject(t) ? (n.remove(), f(e, n.object, n.property, {
                        before: n.__li.nextElementSibling,
                        factoryArgs: [t]
                    })) : void 0
                },
                name: function(e) {
                    return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
                },
                listen: function() {
                    return n.__gui.listen(n), n
                },
                remove: function() {
                    return n.__gui.remove(n), n
                }
            }), n instanceof l) {
            var o = new a(n.object, n.property, {
                min: n.__min,
                max: n.__max,
                step: n.__step
            });
            _.each(["updateDisplay", "onChange", "onFinishChange"], function(e) {
                var t = n[e],
                    i = o[e];
                n[e] = o[e] = function() {
                    var e = Array.prototype.slice.call(arguments);
                    return t.apply(n, e), i.apply(o, e)
                }
            }), p.addClass(t, "has-slider"), n.domElement.insertBefore(o.domElement, n.domElement.firstElementChild)
        } else if (n instanceof a) {
            var i = function(t) {
                return _.isNumber(n.__min) && _.isNumber(n.__max) ? (n.remove(), f(e, n.object, n.property, {
                    before: n.__li.nextElementSibling,
                    factoryArgs: [n.__min, n.__max, n.__step]
                })) : t
            };
            n.min = _.compose(i, n.min), n.max = _.compose(i, n.max)
        } else n instanceof r ? (p.bind(t, "click", function() {
            p.fakeEvent(n.__checkbox, "click")
        }), p.bind(n.__checkbox, "click", function(e) {
            e.stopPropagation()
        })) : n instanceof s ? (p.bind(t, "click", function() {
            p.fakeEvent(n.__button, "click")
        }), p.bind(t, "mouseover", function() {
            p.addClass(n.__button, "hover")
        }), p.bind(t, "mouseout", function() {
            p.removeClass(n.__button, "hover")
        })) : n instanceof c && (p.addClass(t, "color"), n.updateDisplay = _.compose(function(e) {
            return t.style.borderLeftColor = n.__color.toString(), e
        }, n.updateDisplay), n.updateDisplay());
        n.setValue = _.compose(function(t) {
            return e.getRoot().__preset_select && n.isModified() && k(e.getRoot(), !0), t
        }, n.setValue)
    }

    function b(e, t) {
        var n = e.getRoot(),
            o = n.__rememberedObjects.indexOf(t.object);
        if (-1 != o) {
            var i = n.__rememberedObjectIndecesToControllers[o];
            if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[o] = i), i[t.property] = t, n.load && n.load.remembered) {
                var r, s = n.load.remembered;
                if (s[e.preset]) r = s[e.preset];
                else {
                    if (!s[L]) return;
                    r = s[L]
                }
                if (r[o] && void 0 !== r[o][t.property]) {
                    var a = r[o][t.property];
                    t.initialValue = a, t.setValue(a)
                }
            }
        }
    }

    function v(e, t) {
        return document.location.href + "." + t
    }

    function y(e) {
        function t() {
            d.style.display = e.useLocalStorage ? "block" : "none"
        }
        var n = e.__save_row = document.createElement("li");
        p.addClass(e.domElement, "has-save"), e.__ul.insertBefore(n, e.__ul.firstChild), p.addClass(n, "save-row");
        var o = document.createElement("span");
        o.innerHTML = "&nbsp;", p.addClass(o, "button gears");
        var i = document.createElement("span");
        i.innerHTML = "Save", p.addClass(i, "button"), p.addClass(i, "save");
        var r = document.createElement("span");
        r.innerHTML = "New", p.addClass(r, "button"), p.addClass(r, "save-as");
        var s = document.createElement("span");
        s.innerHTML = "Revert", p.addClass(s, "button"), p.addClass(s, "revert");
        var a = e.__preset_select = document.createElement("select");
        if (e.load && e.load.remembered ? _.each(e.load.remembered, function(t, n) {
                E(e, n, n == e.preset)
            }) : E(e, L, !1), p.bind(a, "change", function() {
                for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                e.preset = this.value
            }), n.appendChild(a), n.appendChild(o), n.appendChild(i), n.appendChild(r), n.appendChild(s), N) {
            var l = document.getElementById("dg-save-locally"),
                d = document.getElementById("dg-local-explain");
            l.style.display = "block";
            var c = document.getElementById("dg-local-storage");
            "true" === localStorage.getItem(v(e, "isLocal")) && c.setAttribute("checked", "checked"), t(), p.bind(c, "change", function() {
                e.useLocalStorage = !e.useLocalStorage, t()
            })
        }
        var u = document.getElementById("dg-new-constructor");
        p.bind(u, "keydown", function(e) {
            !e.metaKey || 67 !== e.which && 67 != e.keyCode || T.hide()
        }), p.bind(o, "click", function() {
            u.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), T.show(), u.focus(), u.select()
        }), p.bind(i, "click", function() {
            e.save()
        }), p.bind(r, "click", function() {
            var t = prompt("Enter a new preset name.");
            t && e.saveAs(t)
        }), p.bind(s, "click", function() {
            e.revert()
        })
    }

    function x(e) {
        function t(t) {
            return t.preventDefault(), i = t.clientX, p.addClass(e.__closeButton, F.CLASS_DRAG), p.bind(window, "mousemove", n), p.bind(window, "mouseup", o), !1
        }

        function n(t) {
            return t.preventDefault(), e.width += i - t.clientX, e.onResize(), i = t.clientX, !1
        }

        function o() {
            p.removeClass(e.__closeButton, F.CLASS_DRAG), p.unbind(window, "mousemove", n), p.unbind(window, "mouseup", o)
        }
        e.__resize_handle = document.createElement("div"), _.extend(e.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        var i;
        p.bind(e.__resize_handle, "mousedown", t), p.bind(e.__closeButton, "mousedown", t), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
    }

    function w(e, t) {
        e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
    }

    function C(e, t) {
        var n = {};
        return _.each(e.__rememberedObjects, function(o, i) {
            var r = {},
                s = e.__rememberedObjectIndecesToControllers[i];
            _.each(s, function(e, n) {
                r[n] = t ? e.initialValue : e.getValue()
            }), n[i] = r
        }), n
    }

    function E(e, t, n) {
        var o = document.createElement("option");
        o.innerHTML = t, o.value = t, e.__preset_select.appendChild(o), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
    }

    function A(e) {
        for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value == e.preset && (e.__preset_select.selectedIndex = t)
    }

    function k(e, t) {
        var n = e.__preset_select[e.__preset_select.selectedIndex];
        n.innerHTML = t ? n.value + "*" : n.value
    }

    function S(e) {
        0 != e.length && u(function() {
            S(e)
        }), _.each(e, function(e) {
            e.updateDisplay()
        })
    }
    e.inject(n);
    var T, O, L = "Default",
        N = function() {
            try {
                return "localStorage" in window && null !== window.localStorage
            } catch (e) {
                return !1
            }
        }(),
        R = !0,
        B = !1,
        D = [],
        F = function(e) {
            var t = this;
            this.domElement = document.createElement("div"), this.domElement.id = "dat.gui", this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), p.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], e = e || {}, e = _.defaults(e, {
                autoPlace: !0,
                width: F.DEFAULT_WIDTH
            }), e = _.defaults(e, {
                resizable: e.autoPlace,
                hideable: e.autoPlace
            }), _.isUndefined(e.load) ? e.load = {
                preset: L
            } : e.preset && (e.load.preset = e.preset), _.isUndefined(e.parent) && e.hideable && D.push(this), e.resizable = _.isUndefined(e.parent) && e.resizable, e.autoPlace && _.isUndefined(e.scrollable) && (e.scrollable = !0);
            var n, o = N && "true" === localStorage.getItem(v(this, "isLocal"));
            if (Object.defineProperties(this, {
                    parent: {
                        get: function() {
                            return e.parent
                        }
                    },
                    scrollable: {
                        get: function() {
                            return e.scrollable
                        }
                    },
                    autoPlace: {
                        get: function() {
                            return e.autoPlace
                        }
                    },
                    preset: {
                        get: function() {
                            return t.parent ? t.getRoot().preset : e.load.preset
                        },
                        set: function(n) {
                            t.parent ? t.getRoot().preset = n : e.load.preset = n, A(this), t.revert()
                        }
                    },
                    width: {
                        get: function() {
                            return e.width
                        },
                        set: function(n) {
                            e.width = n, w(t, n)
                        }
                    },
                    name: {
                        get: function() {
                            return e.name
                        },
                        set: function(t) {
                            e.name = t, r && (r.innerHTML = e.name)
                        }
                    },
                    closed: {
                        get: function() {
                            return e.closed
                        },
                        set: function(n) {
                            e.closed = n, e.closed ? p.addClass(t.__ul, F.CLASS_CLOSED) : p.removeClass(t.__ul, F.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = n ? F.TEXT_OPEN : F.TEXT_CLOSED)
                        }
                    },
                    load: {
                        get: function() {
                            return e.load
                        }
                    },
                    useLocalStorage: {
                        get: function() {
                            return o
                        },
                        set: function(e) {
                            N && (o = e, e ? p.bind(window, "unload", n) : p.unbind(window, "unload", n), localStorage.setItem(v(t, "isLocal"), e))
                        }
                    }
                }), _.isUndefined(e.parent)) {
                if (e.closed = !1, p.addClass(this.domElement, F.CLASS_MAIN), p.makeSelectable(this.domElement, !1), N && o) {
                    t.useLocalStorage = !0;
                    var i = localStorage.getItem(v(this, "gui"));
                    i && (e.load = JSON.parse(i))
                }
                this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = F.TEXT_CLOSED, p.addClass(this.__closeButton, F.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), p.bind(this.__closeButton, "click", function() {
                    t.closed = !t.closed
                })
            } else {
                void 0 === e.closed && (e.closed = !0);
                var r = document.createTextNode(e.name);
                p.addClass(r, "controller-name");
                var s = m(t, r),
                    a = function(e) {
                        return e.preventDefault(), t.closed = !t.closed, !1
                    };
                p.addClass(this.__ul, F.CLASS_CLOSED),
                    p.addClass(s, "title"), p.bind(s, "click", a), e.closed || (this.closed = !1)
            }
            e.autoPlace && (_.isUndefined(e.parent) && (R && (O = document.createElement("div"), p.addClass(O, "dg"), p.addClass(O, F.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(O), R = !1), O.appendChild(this.domElement), p.addClass(this.domElement, F.CLASS_AUTO_PLACE)), this.parent || w(t, e.width)), p.bind(window, "resize", function() {
                t.onResize()
            }), p.bind(this.__ul, "webkitTransitionEnd", function() {
                t.onResize()
            }), p.bind(this.__ul, "transitionend", function() {
                t.onResize()
            }), p.bind(this.__ul, "oTransitionEnd", function() {
                t.onResize()
            }), this.onResize(), e.resizable && x(this), n = function() {
                N && "true" === localStorage.getItem(v(t, "isLocal")) && localStorage.setItem(v(t, "gui"), JSON.stringify(t.getSaveObject()))
            }, this.saveToLocalStorageIfPossible = n;
            t.getRoot();
            e.parent || function() {
                var e = t.getRoot();
                e.width += 1, _.defer(function() {
                    e.width -= 1
                })
            }()
        };
    return F.toggleHide = function() {
        B = !B, _.each(D, function(e) {
            e.domElement.style.zIndex = B ? -999 : 999, e.domElement.style.opacity = B ? 0 : 1
        })
    }, F.CLASS_AUTO_PLACE = "a", F.CLASS_AUTO_PLACE_CONTAINER = "ac", F.CLASS_MAIN = "main", F.CLASS_CONTROLLER_ROW = "cr", F.CLASS_TOO_TALL = "taller-than-window", F.CLASS_CLOSED = "closed", F.CLASS_CLOSE_BUTTON = "close-button", F.CLASS_DRAG = "drag", F.DEFAULT_WIDTH = 245, F.TEXT_CLOSED = "Close Controls", F.TEXT_OPEN = "Open Controls", p.bind(window, "keydown", function(e) {
        "text" === document.activeElement.type || 72 !== e.which && 72 != e.keyCode || F.toggleHide()
    }, !1), _.extend(F.prototype, {
        add: function(e, t) {
            return f(this, e, t, {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
            })
        },
        addColor: function(e, t) {
            return f(this, e, t, {
                color: !0
            })
        },
        remove: function(e) {
            this.__ul.removeChild(e.__li), this.__controllers.slice(this.__controllers.indexOf(e), 1);
            var t = this;
            _.defer(function() {
                t.onResize()
            })
        },
        destroy: function() {
            this.autoPlace && O.removeChild(this.domElement)
        },
        addFolder: function(e) {
            if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
            var t = {
                name: e,
                parent: this
            };
            t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
            var n = new F(t);
            this.__folders[e] = n;
            var o = m(this, n.domElement);
            return p.addClass(o, "folder"), n
        },
        open: function() {
            this.closed = !1
        },
        close: function() {
            this.closed = !0
        },
        onResize: function() {
            var e = this.getRoot();
            if (e.scrollable) {
                var t = p.getOffset(e.__ul).top,
                    n = 0;
                _.each(e.__ul.childNodes, function(t) {
                    e.autoPlace && t === e.__save_row || (n += p.getHeight(t))
                }), window.innerHeight - t - 20 < n ? (p.addClass(e.domElement, F.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (p.removeClass(e.domElement, F.CLASS_TOO_TALL), e.__ul.style.height = "auto")
            }
            e.__resize_handle && _.defer(function() {
                e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
            }), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
        },
        remember: function() {
            if (_.isUndefined(T) && (T = new h, T.domElement.innerHTML = '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>'), this.parent) throw new Error("You can only call remember on a top level GUI.");
            var e = this;
            _.each(Array.prototype.slice.call(arguments), function(t) {
                0 == e.__rememberedObjects.length && y(e), -1 == e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t)
            }), this.autoPlace && w(this, this.width)
        },
        getRoot: function() {
            for (var e = this; e.parent;) e = e.parent;
            return e
        },
        getSaveObject: function() {
            var e = this.load;
            return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = C(this)), e.folders = {}, _.each(this.__folders, function(t, n) {
                e.folders[n] = t.getSaveObject()
            }), e
        },
        save: function() {
            this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = C(this), k(this, !1), this.saveToLocalStorageIfPossible()
        },
        saveAs: function(e) {
            this.load.remembered || (this.load.remembered = {}, this.load.remembered[L] = C(this, !0)), this.load.remembered[e] = C(this), this.preset = e, E(this, e, !0), this.saveToLocalStorageIfPossible()
        },
        revert: function(e) {
            _.each(this.__controllers, function(t) {
                this.getRoot().load.remembered ? b(e || this.getRoot(), t) : t.setValue(t.initialValue)
            }, this), _.each(this.__folders, function(e) {
                e.revert(e)
            }), e || k(this.getRoot(), !1)
        },
        listen: function(e) {
            var t = 0 == this.__listening.length;
            this.__listening.push(e), t && S(this.__listening)
        }
    }), F
}(dat.utils.css, 0, cssConverterElement.innerHTML, dat.controllers.factory = function(e, t, n, o, i, r, s) {
    return function(a, l) {
        var d = a[l];
        return s.isArray(arguments[2]) || s.isObject(arguments[2]) ? new e(a, l, arguments[2]) : s.isNumber(d) ? s.isNumber(arguments[2]) && s.isNumber(arguments[3]) ? new n(a, l, arguments[2], arguments[3]) : new t(a, l, {
            min: arguments[2],
            max: arguments[3]
        }) : s.isString(d) ? new o(a, l) : s.isFunction(d) ? new i(a, l, "") : s.isBoolean(d) ? new r(a, l) : void 0
    }
}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function(e, t, n) {
    var o = function(e, n) {
        function i() {
            s.setValue(s.__input.value)
        }

        function r() {
            s.__onFinishChange && s.__onFinishChange.call(s, s.getValue())
        }
        o.superclass.call(this, e, n);
        var s = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "keyup", i), t.bind(this.__input, "change", i), t.bind(this.__input, "blur", r), t.bind(this.__input, "keydown", function(e) {
            13 === e.keyCode && this.blur()
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
    };
    return o.superclass = e, n.extend(o.prototype, e.prototype, {
        updateDisplay: function() {
            return t.isActive(this.__input) || (this.__input.value = this.getValue()), o.superclass.prototype.updateDisplay.call(this)
        }
    }), o
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = function(e, t, n, o, i) {
    function r(e, t, n, o) {
        e.style.background = "", i.each(l, function(i) {
            e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + o + " 100%); "
        })
    }

    function s(e) {
        e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }
    var a = function(e, l) {
        function d(e) {
            p(e), t.bind(window, "mousemove", p), t.bind(window, "mouseup", c)
        }

        function c() {
            t.unbind(window, "mousemove", p), t.unbind(window, "mouseup", c)
        }

        function u() {
            var e = o(this.value);
            !1 !== e ? (f.__color.__state = e, f.setValue(f.__color.toOriginal())) : this.value = f.__color.toString()
        }

        function h() {
            t.unbind(window, "mousemove", _), t.unbind(window, "mouseup", h)
        }

        function p(e) {
            e.preventDefault();
            var n = t.getWidth(f.__saturation_field),
                o = t.getOffset(f.__saturation_field),
                i = (e.clientX - o.left + document.body.scrollLeft) / n,
                r = 1 - (e.clientY - o.top + document.body.scrollTop) / n;
            return r > 1 ? r = 1 : r < 0 && (r = 0), i > 1 ? i = 1 : i < 0 && (i = 0), f.__color.v = r, f.__color.s = i, f.setValue(f.__color.toOriginal()), !1
        }

        function _(e) {
            e.preventDefault();
            var n = t.getHeight(f.__hue_field),
                o = t.getOffset(f.__hue_field),
                i = 1 - (e.clientY - o.top + document.body.scrollTop) / n;
            return i > 1 ? i = 1 : i < 0 && (i = 0), f.__color.h = 360 * i, f.setValue(f.__color.toOriginal()), !1
        }
        a.superclass.call(this, e, l), this.__color = new n(this.getValue()), this.__temp = new n(0);
        var f = this;
        this.domElement = document.createElement("div"), t.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", t.bind(this.__input, "keydown", function(e) {
            13 === e.keyCode && u.call(this)
        }), t.bind(this.__input, "blur", u), t.bind(this.__selector, "mousedown", function(e) {
            t.addClass(this, "drag").bind(window, "mouseup", function(e) {
                t.removeClass(f.__selector, "drag")
            })
        });
        var m = document.createElement("div");
        i.extend(this.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        }), i.extend(this.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        }), i.extend(this.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        }), i.extend(this.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        }), i.extend(m.style, {
            width: "100%",
            height: "100%",
            background: "none"
        }), r(m, "top", "rgba(0,0,0,0)", "#000"), i.extend(this.__hue_field.style, {
            width: "15px",
            height: "100px",
            display: "inline-block",
            border: "1px solid #555",
            cursor: "ns-resize"
        }), s(this.__hue_field), i.extend(this.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        }), t.bind(this.__saturation_field, "mousedown", d), t.bind(this.__field_knob, "mousedown", d), t.bind(this.__hue_field, "mousedown", function(e) {
            _(e), t.bind(window, "mousemove", _), t.bind(window, "mouseup", h)
        }), this.__saturation_field.appendChild(m), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
    };
    a.superclass = e, i.extend(a.prototype, e.prototype, {
        updateDisplay: function() {
            var e = o(this.getValue());
            if (!1 !== e) {
                var t = !1;
                i.each(n.COMPONENTS, function(n) {
                    if (!i.isUndefined(e[n]) && !i.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {}
                }, this), t && i.extend(this.__color.__state, e)
            }
            i.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
            var s = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                a = 255 - s;
            i.extend(this.__field_knob.style, {
                marginLeft: 100 * this.__color.s - 7 + "px",
                marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                backgroundColor: this.__temp.toString(),
                border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")"
            }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, r(this.__saturation_field, "left", "#fff", this.__temp.toString()), i.extend(this.__input.style, {
                backgroundColor: this.__input.value = this.__color.toString(),
                color: "rgb(" + s + "," + s + "," + s + ")",
                textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)"
            })
        }
    });
    var l = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return a
}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function(e, t, n, o) {
    function i(e, t, n) {
        Object.defineProperty(e, t, {
            get: function() {
                return "RGB" === this.__state.space ? this.__state[t] : (s(this, t, n), this.__state[t])
            },
            set: function(e) {
                "RGB" !== this.__state.space && (s(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
            }
        })
    }

    function r(e, t) {
        Object.defineProperty(e, t, {
            get: function() {
                return "HSV" === this.__state.space ? this.__state[t] : (a(this), this.__state[t])
            },
            set: function(e) {
                "HSV" !== this.__state.space && (a(this), this.__state.space = "HSV"), this.__state[t] = e
            }
        })
    }

    function s(e, n, i) {
        if ("HEX" === e.__state.space) e.__state[n] = t.component_from_hex(e.__state.hex, i);
        else {
            if ("HSV" !== e.__state.space) throw "Corrupted color state";
            o.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
        }
    }

    function a(e) {
        var n = t.rgb_to_hsv(e.r, e.g, e.b);
        o.extend(e.__state, {
            s: n.s,
            v: n.v
        }), o.isNaN(n.h) ? o.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h
    }
    var l = function() {
        if (this.__state = e.apply(this, arguments), !1 === this.__state) throw "Failed to interpret color arguments";
        this.__state.a = this.__state.a || 1
    };
    return l.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], o.extend(l.prototype, {
        toString: function() {
            return n(this)
        },
        toOriginal: function() {
            return this.__state.conversion.write(this)
        }
    }), i(l.prototype, "r", 2), i(l.prototype, "g", 1), i(l.prototype, "b", 0), r(l.prototype, "h"), r(l.prototype, "s"), r(l.prototype, "v"), Object.defineProperty(l.prototype, "a", {
        get: function() {
            return this.__state.a
        },
        set: function(e) {
            this.__state.a = e
        }
    }), Object.defineProperty(l.prototype, "hex", {
        get: function() {
            return "HEX" !== !this.__state.space && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
        },
        set: function(e) {
            this.__state.space = "HEX", this.__state.hex = e
        }
    }), l
}(dat.color.interpret, dat.color.math = function() {
    var e;
    return {
        hsv_to_rgb: function(e, t, n) {
            var o = Math.floor(e / 60) % 6,
                i = e / 60 - Math.floor(e / 60),
                r = n * (1 - t),
                s = n * (1 - i * t),
                a = n * (1 - (1 - i) * t),
                l = [
                    [n, a, r],
                    [s, n, r],
                    [r, n, a],
                    [r, s, n],
                    [a, r, n],
                    [n, r, s]
                ][o];
            return {
                r: 255 * l[0],
                g: 255 * l[1],
                b: 255 * l[2]
            }
        },
        rgb_to_hsv: function(e, t, n) {
            var o, i, r = Math.min(e, t, n),
                s = Math.max(e, t, n),
                a = s - r;
            return 0 == s ? {
                h: NaN,
                s: 0,
                v: 0
            } : (i = a / s, o = e == s ? (t - n) / a : t == s ? 2 + (n - e) / a : 4 + (e - t) / a, o /= 6, o < 0 && (o += 1), {
                h: 360 * o,
                s: i,
                v: s / 255
            })
        },
        rgb_to_hex: function(e, t, n) {
            var o = this.hex_with_component(0, 2, e);
            return o = this.hex_with_component(o, 1, t), o = this.hex_with_component(o, 0, n)
        },
        component_from_hex: function(e, t) {
            return e >> 8 * t & 255
        },
        hex_with_component: function(t, n, o) {
            return o << (e = 8 * n) | t & ~(255 << e)
        }
    }
}(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), dat.dom.CenteredDiv = function(e, t) {
    var n = function() {
        this.backgroundElement = document.createElement("div"), t.extend(this.backgroundElement.style, {
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "none",
            zIndex: "1000",
            opacity: 0,
            WebkitTransition: "opacity 0.2s linear"
        }), e.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), t.extend(this.domElement.style, {
            position: "fixed",
            display: "none",
            zIndex: "1001",
            opacity: 0,
            WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
        }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
        var n = this;
        e.bind(this.backgroundElement, "click", function() {
            n.hide()
        })
    };
    return n.prototype.show = function() {
        var e = this;
        this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), t.defer(function() {
            e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
        })
    }, n.prototype.hide = function() {
        var t = this,
            n = function() {
                t.domElement.style.display = "none", t.backgroundElement.style.display = "none", e.unbind(t.domElement, "webkitTransitionEnd", n), e.unbind(t.domElement, "transitionend", n), e.unbind(t.domElement, "oTransitionEnd", n)
            };
        e.bind(this.domElement, "webkitTransitionEnd", n), e.bind(this.domElement, "transitionend", n), e.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
    }, n.prototype.layout = function() {
        this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - e.getHeight(this.domElement) / 2 + "px"
    }, n
}(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
! function(t, n, e) {
    "undefined" != typeof module && module.exports ? module.exports = e() : t.verge = e()
}(this, 0, function() {
    function t() {
        return {
            width: d(),
            height: p()
        }
    }

    function n(t, n) {
        var e = {};
        return n = +n || 0, e.width = (e.right = t.right + n) - (e.left = t.left - n), e.height = (e.bottom = t.bottom + n) - (e.top = t.top - n), e
    }

    function e(t, e) {
        return !(!(t = t && !t.nodeType ? t[0] : t) || 1 !== t.nodeType) && n(t.getBoundingClientRect(), e)
    }

    function o(n) {
        n = null == n ? t() : 1 === n.nodeType ? e(n) : n;
        var o = n.height,
            r = n.width;
        return o = "function" == typeof o ? o.call(n) : o, (r = "function" == typeof r ? r.call(n) : r) / o
    }
    var r = {},
        i = "undefined" != typeof window && window,
        u = "undefined" != typeof document && document,
        c = u && u.documentElement,
        f = i.matchMedia || i.msMatchMedia,
        l = f ? function(t) {
            return !!f.call(i, t).matches
        } : function() {
            return !1
        },
        d = r.viewportW = function() {
            var t = c.clientWidth,
                n = i.innerWidth;
            return t < n ? n : t
        },
        p = r.viewportH = function() {
            var t = c.clientHeight,
                n = i.innerHeight;
            return t < n ? n : t
        };
    return r.mq = l, r.matchMedia = f ? function() {
        return f.apply(i, arguments)
    } : function() {
        return {}
    }, r.viewport = t, r.scrollX = function() {
        return i.pageXOffset || c.scrollLeft
    }, r.scrollY = function() {
        return i.pageYOffset || c.scrollTop
    }, r.rectangle = e, r.aspect = o, r.inX = function(t, n) {
        var o = e(t, n);
        return !!o && o.right >= 0 && o.left <= d()
    }, r.inY = function(t, n) {
        var o = e(t, n);
        return !!o && o.bottom >= 0 && o.top <= p()
    }, r.inViewport = function(t, n) {
        var o = e(t, n);
        return !!o && o.bottom >= 0 && o.right >= 0 && o.top <= p() && o.left <= d()
    }, r
});
Sys.ns("Layering"), Layering.Game = {
    Background: {
        image: 0
    },
    Logo: {
        image: 5
    },
    ResourceLoader: {
        fade: 50,
        spinner: 51
    },
    Movie: {
        video: 50,
        button: 51
    }
};
Sys.ns("Layering.Game"), Layering.Game.Slots = {
    BigWin: {
        text: 20
    },
    CoinWin: {
        background: 15,
        text: 16
    },
    FreeSpinSymbolAttentionAnimation: {
        animationItems: 2
    },
    FreeSpinAdditional: {
        text: 20
    },
    FreeSpinCountDown: {
        text: 20
    },
    FreeSpinIntro: {
        skip: 121,
        background: 122,
        button: 123,
        text: 124
    },
    FreeSpinOutro: {
        background: 120,
        backgroundImage: 121,
        button: 122,
        text: 123
    },
    Keypad: {
        background_basic: 3,
        background_freespin: 35,
        bet: 4,
        balance: 4,
        win: 36,
        total_win: 36,
        betLevelSelector: 5,
        coinValueSelector: 5,
        maxBet: {
            button: 5,
            label: 6
        },
        autoPlay: {
            button: 5,
            label: 6
        },
        paytable: {
            button: 5,
            label: 6
        }
    },
    QuickStop: {
        flash: 25
    },
    Spin: {
        default: {
            symbols: 1
        },
        symbols: 1
    },
    SpreadingWild: {
        symbols: 5
    },
    StickySymbols: {
        symbols: 5
    },
    WinningSymbols: {
        animationItems: 10
    },
    WinSituationsDisplay: {
        hoverBetlines: 21,
        betlines: 20,
        betlineNumberHighlight: 20
    }
};
Sys.ns("Core"), Core.DeviceDetectionCodes = {
    WHITE: 0,
    GREY_OS: 1,
    GREY_OS_VERSION: 2,
    GREY_BROWSER: 3,
    GREY_BROWSER_VERSION: 4,
    BLACK_OS: 5,
    BLACK_OS_VERSION: 6,
    BLACK_BROWSER: 7,
    BLACK_BROWSER_VERSION: 8
}, Core.DeviceDetectionService = function() {
    var e, r, o, n, t;
    return e = function(e, r, o) {
        var n, t = new RegExp(r),
            i = t.exec(e);
        if (!(i && i.length > 0)) throw new Error("Could not find a matching version");
        if (n = i[1], o && (n = n.replace(new RegExp(o, "g"), ".")), !Core._DeviceDetectionUtils.isVersionNumber(n)) throw new Error("The match found is not a valid version");
        return n
    }, r = function(r, o, n) {
        var t, i, s, c, a, d, R, C = Object.keys(o),
            l = C.length;
        for (R = 0; R < l; R++)
            if (t = o[C[R]], i = n[C[R]], c = !1, s = new RegExp(i.matchPattern), i.excludePattern && (c = new RegExp(i.excludePattern).test(r)), s.test(r) && !c) return t.version ? (a = e(r, i.version.matchPattern, i.version.separator), d = Core._DeviceDetectionUtils.isInRange(a, t.version.min, t.version.max)) : d = !0, {
                name: C[R],
                inRange: d
            };
        return null
    }, o = function(e, o) {
        var n, t, i = o.definitions.operatingSystems,
            s = o.ruleSets.white || {},
            c = r(e, s, i),
            a = {};
        if (c) {
            if (a.allowed = !0, a.preferredBrowser = i[c.name].preferredBrowser, !c.inRange) return a.code = Core.DeviceDetectionCodes.GREY_OS_VERSION, a;
            t = s[c.name].browsers, n = r(e, t || {}, o.definitions.browsers), t ? n ? n.inRange ? a.code = Core.DeviceDetectionCodes.WHITE : a.code = Core.DeviceDetectionCodes.GREY_BROWSER_VERSION : a.code = Core.DeviceDetectionCodes.GREY_BROWSER : a.code = Core.DeviceDetectionCodes.WHITE
        }
        return a
    }, n = function(e, o) {
        var n, t, i, s, c = o.definitions.operatingSystems,
            a = o.ruleSets.black || {},
            d = r(e, a, c),
            R = {};
        return d && d.inRange && (n = a[d.name], t = n.browsers, i = r(e, t || {}, o.definitions.browsers), i && i.inRange ? (s = t[i.name], R.preferredBrowser = c[d.name].preferredBrowser, R.allowed = !1, s.version ? R.code = Core.DeviceDetectionCodes.BLACK_BROWSER_VERSION : R.code = Core.DeviceDetectionCodes.BLACK_BROWSER) : n.version ? t || (R.allowed = !1, R.code = Core.DeviceDetectionCodes.BLACK_OS_VERSION) : (R.allowed = !1, R.code = Core.DeviceDetectionCodes.BLACK_OS)), R
    }, t = function(e, r) {
        var t = Resources.readData("disableDeviceDetection"),
            i = {
                preferredBrowser: null,
                allowed: !0,
                code: Core.DeviceDetectionCodes.GREY_OS
            };
        return t ? {
            preferredBrowser: null,
            allowed: !0,
            code: Core.DeviceDetectionCodes.WHITE
        } : (Sys.applyProperties(i, o(e, r)), Sys.applyProperties(i, n(e, r)), i)
    }, {
        validate: function(e, r) {
            if ("string" != typeof e) throw new Error("Could not validate the device since the user agent was not a string");
            if (!Sys.isObj(r)) throw new Error("Could not validate the device since the configuration was not an object");
            return t(e, r)
        }
    }
}();
Sys.ns("Core"), Core._DeviceDetectionUtils = function() {
    return {
        isVersionNumber: function(e) {
            return /^\d+(\.\d+){0,2}$/.test(e)
        },
        compareVersions: function(e, r) {
            var i, t, n, o, s;
            if (!Core._DeviceDetectionUtils.isVersionNumber(e) || !Core._DeviceDetectionUtils.isVersionNumber(r)) throw new Error("The versions provided are not valid versions");
            for (o = e.split(".").map(parseFloat), s = r.split(".").map(parseFloat); o.length < s.length;) o.push(0);
            for (; s.length < o.length;) s.push(0);
            for (i = 0; i < o.length; i++)
                if (t = o[i], n = s[i], t !== n) return t < n ? -1 : 1;
            return 0
        },
        isInRange: function(e, r, i) {
            var t = !0,
                n = !0;
            return r && Core._DeviceDetectionUtils.compareVersions(e, r) < 0 && (t = !1), i && Core._DeviceDetectionUtils.compareVersions(e, i) > 0 && (n = !1), t && n
        }
    }
}();
Sys.ns("Sys.utils"), Sys.utils.XMLHelper = {
    getNodeValue: function(t, e) {
        var n;
        return e.getElementsByTagName && (n = e.getElementsByTagName(t), n.length > 0) ? n[0].textContent : null
    },
    findNode: function(t, e) {
        var n;
        return e.getElementsByTagName && (n = e.getElementsByTagName(t), n.length > 0) ? n[0] : null
    },
    findAll: function(t, e) {
        return !Sys.isEmpty(e) && e.getElementsByTagName ? e.getElementsByTagName(t) : []
    },
    getAttributeValue: function(t, e) {
        return e.attributes && e.hasAttribute(t) ? e.attributes.getNamedItem(t).value : null
    },
    toJSON: function(t) {
        var e, n, i, r, u = {
            tag: t.nodeName
        };
        if (t.hasChildNodes())
            for (u.children = [], i = 0, r = t.childNodes.length; i < r; i++) e = t.childNodes.item(i), 1 === e.nodeType ? u.children.push(this.toJSON(e)) : 3 === e.nodeType && (u.text = e.nodeValue.replace(/^\s+|\s+$/g, ""));
        if (t.attributes)
            for (u.attributes = {}, i = 0, r = t.attributes.length; i < r; i++) n = t.attributes[i], u.attributes[n.nodeName] = n.nodeValue;
        return u.find = this.findNodeInJSON, u.findAll = this.findAllNodesInJSON, u
    },
    findNodeInJSON: function(t) {
        return Sys.find(this.children, function(e) {
            return e.tag === t
        }) || null
    },
    findAllNodesInJSON: function(t) {
        return this.children.filter(function(e) {
            return e.tag === t
        })
    },
    getMoneyFormatFromXML: function(t, e) {
        var n, i, r = this.findAll("moneyformat", t);
        for (i = 0, n = r.length; i < n; i++)
            if (this.getNodeValue("iso", r[i]) === e) return this.getMoneyFormatFromNode(r[i]);
        return null
    },
    getMoneyFormatFromNode: function(t) {
        var e = this.findNode("dividers", t),
            n = this.getAttributeValue("thousands", e),
            i = this.getAttributeValue("decimal", e),
            r = this.findNode("curchar", t);
        return {
            thousandsDivider: n,
            decimalDivider: i,
            currencyChar: r.textContent,
            isCurrCharAfter: "true" === this.getAttributeValue("after", r),
            iso: this.findNode("iso", t).textContent
        }
    }
};
Sys.ns("Sys.utils"), Sys.utils.FunctionQueuer = {
    constructor: function() {
        var e = this;
        Sys.utils.FunctionQueuer.superclass.constructor.apply(this, arguments), e.q = [], e.executing = !1, e.debug = !1
    },
    queue: function(e) {
        var t, n = e.args || [],
            s = e.waitForEvents || [],
            o = e.waitForObjects || [];
        Sys.isArray(n) || (n = [n]), Sys.isArray(s) || (s = [s]), t = {
            obj: e.obj,
            fun: e.fn,
            event: e.endEvent,
            args: n,
            we: s,
            wo: e.waitForObject || e.obj,
            wos: {
                totalEventsCount: 0,
                waitForObjects: o
            }
        }, (s.length || o.length) && this.createWaiters(t), this.q.push(t), this.processQueue()
    },
    execute: function(e) {
        var t, n = this;
        n.executing = !0, t = function() {
            n.debug && console.info("## function has finished executing in FunctionQueuer! (" + e.event + ")"), e.obj.removeListener(e.event, t, n), n.executing = !1, n.processQueue()
        }, e.obj.on(e.event, t, n), e.fun.apply(e.obj, e.args)
    },
    processQueue: function() {
        var e, t, n, s = this;
        !s.executing && s.q.length ? (t = s.q[0].wos, n = 0 !== t.waitForObjects.length, 0 === s.q[0].we.length && !n || n && 0 === t.totalEventsCount ? (e = s.q.shift(), s.execute(e)) : s.debug && (console.warn("cannot execute " + s.q[0].event + " since it is waiting for events:"), console.warn("Event arr: " + s.q[0].we), console.warn("Event obj(s) below: "), Sys.isDefined(s.q[0].wos) && console.info(s.q[0].wos))) : s.debug && (s.q.length ? s.executing && console.warn("wont execute " + s.q[0].event + " since FunctionQueuer is already executing!") : console.warn("wont execute FunctionQueuer since there are no functions queued!"))
    },
    createWaiters: function(e) {
        var t = this;
        e.we.length ? t.registerListeners({
            queueItem: e,
            waitForEvents: e.we,
            waitForObject: e.wo
        }) : e.wos.waitForObjects.length && Sys.each(e.wos.waitForObjects, function(n) {
            Sys.isArray(n.events) || (n.events = [n.events]), e.wos.totalEventsCount += n.events.length, t.registerListeners({
                queueItem: e,
                waitForEvents: n.events,
                waitForObject: n.obj
            })
        })
    },
    registerListeners: function(e) {
        var t, n = this;
        Sys.each(e.waitForEvents, function(s) {
            var o = function() {
                n.debug && console.info("## " + s + " event was fired in FunctionQueuer, removing it from waiting list!"), e.waitForEvents.splice(e.waitForEvents.indexOf(s), 1), t = e.queueItem.wos, Sys.isDefined(t.waitForObjects.length) && t.totalEventsCount >= 1 && (t.totalEventsCount -= 1), e.waitForObject.removeListener(s, o, n), n.processQueue()
            };
            e.waitForObject.on(s, o, n)
        })
    }
}, Sys.utils.FunctionQueuer = Sys.extend(Sys.Observable, Sys.utils.FunctionQueuer, "Sys.utils.FunctionQueuer");
Sys.ns("Loader"), Loader.ResourceHandler = {
    INTEGRATION: "standard",
    constructor: function(e) {
        e = e || {}, Loader.ResourceHandler.superclass.constructor.call(this, e), this.setupData(e), this.setupEvents(), "function" == typeof e.callback && (this.progressCallback = e.callback), this.setLanguageOfHtmlTag(Resources.readData("queryData").lang)
    },
    setupData: function(e) {
        var t = Sys.utils.qsToObj(window.location.search);
        this.data = {}, this.storeData("callback", e.callback), this.storeData("scriptFiles", []), this.storeData("cssFiles", []), this.storeData("totalSize", 0), this.storeData("scriptsAppended", !1), this.storeData("resourcesLoaded", !1), this.storeData("animationComplete", !1), this.storeData("deviceListPath", {
            fallbackPath: t.staticsharedurl
        }), this.storeData("detectionComplete", !1), this.storeData("allConfirmDialogsClosed", !1), this.storeData("loaderCompleted", !1), this.storeData("soundDecoded", !Utils.Platform.isWebAudioAPISupported()), Resources.storeData("queryData", t), Resources.storeData("extraParams", {
            wantsfreerounds: !0,
            freeroundmode: !1,
            wantsreels: !0
        }), Resources.storeData("language", {
            defaultLang: "en",
            lang: t.lang
        })
    },
    setupEvents: function() {
        this.on({
            "notify:loader.animationComplete": this.onLoaderAnimationComplete,
            "notify:gcmProxy.animationComplete": this.onLoaderAnimationComplete,
            "notify:loader.confirmDialogClosed": this.onRequestedConfirmDialogsClosed,
            "notify:userAgentManager.loadDialogConfirmed": this.onRequestedConfirmDialogsClosed,
            "notify:userAgentManager.requestedConfirmDialogsClosed": this.onRequestedConfirmDialogsClosed,
            "notify:userAgentManager.deviceDetectionFinished": this.onDetectionComplete,
            "notify:deviceDetector.validationComplete": this.onDetectionComplete,
            "notify:deviceDetector.finished": this.onRequestedConfirmDialogsClosed
        })
    },
    progressCallback: function(e) {
        this.fireEvent("request:loader.updateProgress", e), this.fireEvent("request:gcmProxy.updateProgress", e)
    },
    preLoad: function() {
        var e, t, s = this,
            a = new Sys.Deferred;
        this.fireEvent("request:loader.show"), this.storeData("startTime", Date.now()), this.isDeviceDetectionDisabled(), e = this.determineSessionID(), e ? t = a.when(e).then(function() {
            return s.gameServerInit()
        }) : (this.determinePluginURL(), this.determineLobbyURL(), t = a.when(this.gameServerInit())), t.then(function() {
            return s.loadResourcesXML()
        }).then(function() {
            return s.addDynamicPriorityResources(), s.loadResources("priorityList")
        }).done(function() {
            s.fireEvent("notify:resourceHandler.priorityListComplete")
        })
    },
    load: function() {
        var e = this,
            t = new Sys.Deferred;
        this.addPlatformSpecificResourcesToGenericList(), t.when(this.loadResources("genericList")).fail(function(t) {
            e.fireEvent("request:loaderErrorHandler.handleRequestError", t)
        }).done(function() {
            e.storeData("loaderCompleted", !0), e.onLoaderComplete()
        })
    },
    isDeviceDetectionDisabled: function() {
        var e = Resources.readData("queryData");
        "boolean" == typeof e.disableDeviceDetection && Resources.storeData("disableDeviceDetection", e.disableDeviceDetection)
    },
    determineSessionID: function() {
        var e = Resources.readData("queryData"),
            t = e.callbackurl,
            s = e.sessId,
            a = e.integration;
        return Sys.isDefined(t) && Sys.isDefined(a) ? this.performServletCall(t, a) : (Sys.isDefined(s) || Sys.utils.goToLobby("1"), this.storeSessionID(s), null)
    },
    determinePluginURL: function() {
        var e = Resources.readData("queryData");
        Sys.isDefined(e.pluginURL) && Resources.storeData("pluginURL", e.pluginURL)
    },
    determineLobbyURL: function(e) {
        var t = Resources.readData("queryData");
        Sys.isDefined(e) ? Resources.storeData("lobbyUrl", e) : Sys.isDefined(t.lobbyURL) && Resources.storeData("lobbyUrl", t.lobbyURL)
    },
    performServletCall: function(e, t) {
        var s, a = this,
            r = new Sys.Deferred;
        return t === this.INTEGRATION ? ("openbet" === t && (s = "no-cache=" + Number(Date.now()), e = Sys.utils.appendParameterToQuery(e, s)), r.when(Sys.utils.httpGet({
            url: e,
            useCredentials: !0
        })).fail(function() {
            Sys.utils.goToLobby("1")
        }).done(function(e) {
            a.handleServletResponse(e)
        })) : Sys.utils.goToLobby("1"), r
    },
    handleServletResponse: function(e) {
        var t = Sys.utils.parseQueryString(e.responseText),
            s = t.playerSessionId,
            a = t.pluginURL,
            r = t.lobbyURL;
        Sys.isDefined(s) ? this.storeSessionID(decodeURIComponent(s)) : Sys.utils.goToLobby("1"), Sys.isDefined(a) ? Resources.storeData("pluginURL", decodeURIComponent(a)) : this.determinePluginURL(), this.determineLobbyURL(r)
    },
    storeSessionID: function(e) {
        this.storeData("sessionID", e), Resources.storeData("sessionID", e)
    },
    onDetectionComplete: function(e) {
        e && (this.storeData("detectionComplete", !0), this.load())
    },
    onRequestedConfirmDialogsClosed: function() {
        this.storeData("allConfirmDialogsClosed", !0), this.readData("loaderCompleted") && this.initGameIfPossible()
    },
    addPlatformSpecificResourcesToGenericList: function() {
        var e = this.readData("genericList"),
            t = this.readData("dynamicallyLoadedResources"),
            s = this.readData("totalSize");
        Platform.PlatformManager.determineResourceBundle(), Sys.iterate(Platform.resourceBundle.loaderResourceKeys, function(a, r) {
            var o = t[a][r];
            o && (e.push(o), s += o.size)
        }), this.storeData("genericList", e), this.storeData("totalSize", s)
    },
    addDynamicPriorityResources: function() {
        var e = this.readData("priorityList"),
            t = this.readData("priorityDynamicallyLoadedResources"),
            s = this.readData("totalSize");
        Platform.PlatformManager.determineResourceBundle(), Sys.iterate(Platform.resourceBundle.loaderResourceKeys, function(a, r) {
            var o = t[a] && t[a][r];
            o && (e.push(o), s += o.size)
        }), this.storeData("priorityList", e), this.storeData("totalSize", s)
    },
    gameServerInit: function() {
        var e = this;
        return (new Sys.Deferred).when(Sys.utils.httpGet({
            url: this.createInitQuery().getQuery()
        })).fail(function(t) {
            e.fireEvent("request:loaderErrorHandler.handleRequestError", t)
        }).done(function(t) {
            e.gameServerInitComplete(t)
        })
    },
    loadResourcesXML: function() {
        var e = this;
        return (new Sys.Deferred).when(Sys.utils.httpGet({
            url: "resources.xml"
        })).fail(function(t) {
            e.fireEvent("request:loaderErrorHandler.handleRequestError", t)
        }).done(function(t) {
            e.parseResourceXml(t)
        })
    },
    loadResources: function(e) {
        var t = this,
            s = this.readData(e),
            a = new Sys.Deferred,
            r = [],
            o = this.readData("resources") || {};
        return s.forEach(function(s) {
            var a, i = s.type,
                n = t.getPathFromName(s),
                l = new Sys.Deferred,
                u = "audio" === i ? "arraybuffer" : void 0;
            "genericList" === e && (a = function(e, s) {
                t.onProgressCallback(e, s)
            }), "css" === i && t.cssComplete("", s.name, s.url), l.when(Sys.utils.httpGet({
                url: n,
                name: s.name,
                onProgressCallback: a,
                responseType: u
            })).fallback(function(e) {
                return t.onLoadResourceError(e, s)
            }).done(function(e) {
                var a = t[i + "Complete"];
                Sys.isDefined(a) ? "css" !== i && a.call(t, e, s.name, s.url) : Resources.storeData(s.name + "Response", e)
            }), o[s.name] = 0, r.push(l)
        }), this.storeData("resources", o), a.when(r), a
    },
    onLoadResourceError: function(e, t) {
        var s, a = this,
            r = Resources.readData("language"),
            o = "languageJSON" === t.name || "languageXML" === t.name;
        if (o && r.lang !== r.defaultLang) return s = this.getLanguagePath(r.defaultLang, t.type, t.url), r.lang = r.defaultLang, Sys.utils.httpGet({
            url: s,
            name: t.name
        }).fail(function(e) {
            a.fireEvent("request:loaderErrorHandler.handleRequestError", e)
        }).done(function(e) {
            a[t.type + "Complete"](e, t.name, t.url)
        });
        this.fireEvent("request:loaderErrorHandler.handleRequestError", e)
    },
    onProgressCallback: function(e, t) {
        this.readData("resources")[t] = e.loaded, this.calculatePercentage(), this.checkLoadSpeed()
    },
    calculatePercentage: function() {
        var e, t = this.readData("resources"),
            s = this.readData("totalSize"),
            a = 0;
        Object.keys(t).forEach(function(e) {
            a += t[e]
        }), e = parseInt(Math.min(a / s * 100, 100), 10), this.storeData("percentageLoaded", e), this.progressCallback(e)
    },
    checkLoadSpeed: function() {
        var e = this.readData("startTime"),
            t = this.readData("totalSize"),
            s = this.readData("status"),
            a = .024 * t;
        "slow" !== s && Date.now() - e > a && this.slownessDetected()
    },
    slownessDetected: function() {
        var e = {
            texts: [Services.languageManager.hasText(Language.Keys.loadingTakesLonger) ? Services.languageManager.getText(Language.Keys.loadingTakesLonger) : "Loading the game is taking longer than usual."],
            buttons: [{
                action: function() {
                    Sys.utils.goToLobby("9")
                },
                label: Services.languageManager.hasText(Language.Keys.btn_casino) ? Services.languageManager.getText(Language.Keys.btn_casino) : "Home",
                scope: this
            }, {
                action: function() {
                    Sys.utils.reload()
                },
                label: Services.languageManager.hasText(Language.Keys.btn_reload) ? Services.languageManager.getText(Language.Keys.btn_reload) : "Reload",
                scope: this
            }],
            severity: "slow"
        };
        this.storeData("status", "slow"), this.fireEvent("request:loader.showDialog", e)
    },
    onLoaderComplete: function() {
        this.progressCallback(100), this.storeData("resourcesLoaded", !0), this.initGameIfPossible()
    },
    onLoaderAnimationComplete: function() {
        this.fireEvent("notify:resourceHandler.animationComplete"), this.storeData("animationComplete", !0), this.initGameIfPossible()
    },
    initGameIfPossible: function() {
        !this.readData("scriptsAppended") && this.readData("resourcesLoaded") && this.readData("animationComplete") && this.readData("allConfirmDialogsClosed") && (this.fireEvent("notify:resourceHandler.gameAssetsLoaded"), this.appendScriptFiles())
    },
    gameServerInitComplete: function(e) {
        Resources.storeData("gameServerInitResponse", Sys.utils.qsToObj(e.responseText)), Resources.storeData("gameServerInitResponseObject", Sys.utils.parseQueryString(e.responseText, !0)), Resources.storeData("unParsedGameServerInitResponse", e.responseText), Resources.storeData("historyUrl", this.buildHistoryUrl())
    },
    jsonComplete: function(e, t) {
        Resources.storeData(t, JSON.parse(e.responseText))
    },
    priorityAudioJsonComplete: function(e, t) {
        var s = JSON.parse(e.responseText);
        Platform.resourceBundle.preloadAudio && this.addAudioToGenericList(s), Resources.storeData(t, s)
    },
    addAudioToGenericList: function(e) {
        var t = e.files.main,
            s = Sys.isDefined(e.fileSizes) && Sys.isDefined(e.fileSizes.main) ? e.fileSizes.main : {},
            a = this.readData("genericList"),
            r = this.readData("totalSize");
        Sys.isObj(t) ? Object.keys(t).forEach(function(e) {
            a.push({
                url: t[e],
                type: "audio",
                name: e,
                size: 1e5,
                loadComplete: !1
            }), r += s[e] || 1e5
        }) : (a.push({
            url: t,
            type: "audio",
            name: "main",
            size: 1e5,
            loadComplete: !1
        }), r += s || 1e5), this.storeData("genericList", a), this.storeData("totalSize", r)
    },
    audioComplete: function(e, t) {
        var s = Resources.readData("preloadedAudio") || {};
        s["main/" + t] = e.response, Resources.storeData("preloadedAudio", s)
    },
    xmlComplete: function(e, t) {
        if (("languageJSON" === t || "languageXML" === t) && !e.responseXML) throw this.fireEvent("request:loaderErrorHandler.showTechnicalError"), new Error("Unable to parse language file xml. Aborting game.");
        Resources.storeData(t, e.responseXML)
    },
    cssComplete: function(e, t, s) {
        var a = this.readData("cssFiles"),
            r = document.createElement("link");
        r.setAttribute("rel", "stylesheet"), r.setAttribute("type", "text/css"), r.setAttribute("href", s), a.push(r), this.storeData("cssFiles", a)
    },
    javascriptComplete: function(e, t, s) {
        var a = this.readData("scriptFiles"),
            r = document.createElement("script");
        r.type = "text/javascript", r.charset = "utf-8", r.src = s, a.push(r), this.storeData("scriptFiles", a)
    },
    appendScriptFiles: function() {
        var e = document.getElementsByTagName("head")[0];
        this.readData("cssFiles").forEach(function(t) {
            e.appendChild(t)
        }), this.readData("scriptFiles").forEach(function(t) {
            e.appendChild(t)
        }), this.storeData("scriptsAppended", !0)
    },
    preloadAudioComplete: function(e, t) {
        Resources.storeData(t, JSON.parse(e.responseText)), Resources.processAudio(t)
    },
    getLanguagePath: function(e, t, s) {
        var a = null;
        return "json" === t ? a = s + this.setCorrectCasing(e) + ".json" : "xml" === t && (a = "../langlib/" + this.setCorrectCasing(e) + "/" + s), a
    },
    getPathFromName: function(e) {
        var t = e.name,
            s = e.url,
            a = s,
            r = Resources.readData("gameServerInitResponse");
        return "languageJSON" === t || "languageXML" === t ? a = this.getLanguagePath(Resources.readData("language").lang, e.type, e.url) : "moneyformat_player" === t ? a = "../../../currencies/" + r.playercurrencyiso.toLowerCase() + "/" + s : "moneyformat_jackpot" === t ? a = "../../../currencies/" + r.jackpotcurrencyiso.toLowerCase() + "/" + s : "deviceDetection" !== t && "deviceDetectionJson" !== t || (a = (r.staticsharedurl || this.readData("deviceListPath").fallbackPath) + "/" + s), a
    },
    setCorrectCasing: function(e) {
        return e.match(/[a-z]{2}_[a-z]{2}/i) ? e.substr(0, 2).toLowerCase() + "_" + e.substr(3, 2).toUpperCase() : e.toLowerCase()
    },
    createInitQuery: function() {
        var e = this.getSessionId(),
            t = Resources.readData("queryData"),
            s = Resources.readData("extraParams");
        return {
            serverStr: e.server +'game/'+ GameName+'/server',
            initStr: "?action=init&sessid=" + e + "&gameId=" + t.gameId,
            extraParams: Sys.utils.objectToQueryString(s),
            noCache: "&no-cache=" + Math.round(Date.now()),
            getQuery: function() {
                var e, t = "";
                for (e in this) this.hasOwnProperty(e) && "string" == typeof this[e] && (t += this[e]);
                return t
            }
        }
    },
    getSessionId: function() {
        return Resources.readData("sessionID")
    },
    parseResourceXml: function(e) {
        var t = Sys.utils.XMLHelper.toJSON(e.responseXML),
            s = t.children[0].children,
            a = [],
            r = [],
            o = {},
            i = {},
            n = 0;
        s.forEach(function(e) {
            e.findAll("resource").forEach(function(e) {
                var t, s, l, u, c = {
                    url: "",
                    type: "",
                    size: "",
                    loadComplete: !1
                };
                c.type = e.find("type").text, c.url = e.find("url").text, c.size = Sys.utils.toInt(e.find("size").text), c.name = e.find("name").text, t = e.find("priority"), s = e.find("resourceTag"), null !== t ? null !== s ? (l = s.find("type").text, u = s.find("key").text, Sys.isDefined(i[l]) || (i[l] = {}), i[l][u] = c) : (c.priority = t.text, a.push(c)) : null !== s ? (l = s.find("type").text, u = s.find("key").text, Sys.isDefined(o[l]) || (o[l] = {}), o[l][u] = c) : (r.push(c), n += c.size)
            })
        }), this.storeData("totalSize", n), this.storeData("priorityList", a), this.storeData("genericList", r), this.storeData("dynamicallyLoadedResources", o), this.storeData("priorityDynamicallyLoadedResources", i)
    },
    buildHistoryUrl: function() {
        var e = Resources.readData("queryData"),
            t = e.server;
        return "/" !== t[t.length - 1] && (t += "/"), t += "game/history?lang=" + e.lang + "&sessionId=" + Resources.readData("sessionID"), Platform.isMQQBrowser && (t += "&type=mobile"), t
    },
    readData: function(e) {
        return this.data[e]
    },
    storeData: function(e, t) {
        this.data[e] = t
    },
    setLanguageOfHtmlTag: function(e) {
        document.documentElement.lang = e
    }
}, Loader.ResourceHandler = Sys.extend(Sys.Observable, Loader.ResourceHandler, "Loader.ResourceHandler");
Sys.ns("Loader"), Loader.DeviceDetector = {
    constructor: function() {
        Loader.DeviceDetector.superclass.constructor.call(this), this.setupEvents()
    },
    setupEvents: function() {
        var e = this;
        e.on({
            "notify:resourceHandler.priorityListComplete": e.onPriorityListComplete
        })
    },
    onPriorityListComplete: function() {
        this.performValidation()
    },
    performValidation: function() {
        var e, t = this,
            i = Core.DeviceDetectionCodes,
            o = Resources.readData("deviceDetectionJson");
        try {
            e = Core.DeviceDetectionService.validate(navigator.userAgent, o)
        } catch (e) {
            return void t.fireEvent("request:loaderErrorHandler.showTechnicalError")
        }
        switch (e.code) {
            case i.WHITE:
                t.handleWhiteListedCombination();
                break;
            case i.GREY_OS:
                t.handleGreyListedCombination(Services.languageManager.getText(Language.Keys.MGnoOSSupport));
                break;
            case Core.DeviceDetectionCodes.GREY_OS_VERSION:
                t.handleGreyListedCombination(Services.languageManager.getText(Language.Keys.deviceBestGameExperience));
                break;
            case Core.DeviceDetectionCodes.GREY_BROWSER:
                t.handleGreyListedCombination(Services.languageManager.getText(Language.Keys.optimisedForVersion, [e.preferredBrowser]));
                break;
            case Core.DeviceDetectionCodes.GREY_BROWSER_VERSION:
                t.handleGreyListedCombination(Services.languageManager.getText(Language.Keys.deviceUpdateBrowser));
                break;
            case i.BLACK_OS:
            case i.BLACK_OS_VERSION:
            case i.BLACK_BROWSER:
            case i.BLACK_BROWSER_VERSION:
                t.handleBlackListedCombination();
                break;
            default:
                t.fireEvent("request:loaderErrorHandler.showTechnicalError")
        }
    },
    handleWhiteListedCombination: function() {
        this.fireEvent("notify:deviceDetector.validationComplete", !0), this.fireEvent("notify:deviceDetector.finished")
    },
    handleGreyListedCombination: function(e) {
        var t = this,
            i = {
                proceed: {
                    label: Services.languageManager.getText(Language.Keys.btn_continue),
                    action: function() {
                        t.fireEvent("notify:deviceDetector.finished"), t.fireEvent("request:loader.hideDialog")
                    }
                },
                casinoLobby: {
                    label: Services.languageManager.getText(Language.Keys.btn_casino),
                    action: function() {
                        Sys.utils.goToLobby("6")
                    }
                }
            };
        t.fireEvent("notify:deviceDetector.validationComplete", !0), t.showDialog({
            texts: [e],
            buttons: Platform.isDesktopDevice ? [i.proceed] : [i.casinoLobby, i.proceed],
            confirmDialog: {
                id: "deviceDetector.greyList"
            }
        })
    },
    handleBlackListedCombination: function() {
        var e = this,
            t = {
                casinoLobby: {
                    label: Services.languageManager.getText(Language.Keys.btn_casino),
                    action: function() {
                        Sys.utils.goToLobby("6")
                    }
                }
            };
        e.fireEvent("notify:deviceDetector.validationComplete", !1), e.showDialog({
            texts: [Services.languageManager.getText(Language.Keys.MGdeviceNoSupport)],
            buttons: Platform.isDesktopDevice ? [] : [t.casinoLobby],
            severity: "stopped"
        })
    },
    showDialog: function(e) {
        this.fireEvent("request:loader.showDialog", e), this.handleIntegrationSpecificDialogs(e)
    },
    handleIntegrationSpecificDialogs: function(e) {}
}, Loader.DeviceDetector = Sys.extend(Sys.Observable, Loader.DeviceDetector, "Loader.DeviceDetector");
Sys.ns("Core"), Core.LoaderController = {
    MINIMUM_LOADING_TIME: 3e3,
    LOADER_PERCENTAGE_STEP: .2,
    constructor: function() {
        Core.LoaderController.superclass.constructor.apply(this, arguments)
    },
    init: function() {
        Core.LoaderController.superclass.init.apply(this, arguments), this.model.storeData("delayedMessages", []), this.model.storeData("visualPercentage", 0), this.model.storeData("progress", 0)
    },
    setupEvents: function() {
        this.on({
            "request:loader.show": this.show,
            "request:loader.hide": this.hide,
            "request:loader.showDialog": this.showDialog,
            "request:loader.hideDialog": this.hideDialog,
            "request:loader.updateProgress": this.updateProgress,
            "notify:stateHandler.leavingBeforeLoaderCloseState": this.hide
        })
    },
    updateProgress: function(e) {
        this.model.storeData("progress", Sys.clamp({
            value: parseFloat(e, 10) || 0,
            min: 0,
            max: 100
        }))
    },
    tick: function() {
        var e = this,
            t = this.model.readData("visualPercentage"),
            o = Date.now() - this.startTime,
            s = Math.min(o / (this.MINIMUM_LOADING_TIME || 1) * 100, 100),
            i = Math.min(s, this.model.readData("progress"));
        t !== i && (this.model.storeData("visualPercentage", i), this.view.updateLoaderBar(), i >= 100 && (clearInterval(this.tickInterval), setTimeout(function() {
            e.fireEvent("notify:loader.animationComplete")
        }, this.MINIMUM_LOADING_TIME * this.LOADER_PERCENTAGE_STEP), this.showDialogFromQueue()))
    },
    show: function() {
        var e = this;
        this.startTime = Date.now(), clearInterval(this.tickInterval), this.tickInterval = setInterval(function() {
            e.tick()
        }, this.MINIMUM_LOADING_TIME * this.LOADER_PERCENTAGE_STEP), this.view.show()
    },
    hide: function() {
        this.view.destroy(), this.fireEvent("notify:loader.closed")
    },
    showDialog: function(e) {
        if (!Sys.isObj(e)) throw new Error("Invalid dialog config received:", e);
        "stopped" === e.severity || "slow" === e.severity ? ("stopped" === e.severity && (clearInterval(this.tickInterval), this.model.storeData("error", !0), this.model.storeData("visualPercentage", 100), this.view.updateLoaderBar()), this.view.showDialog(e)) : this.model.storeData("delayedMessage", this.model.readData("delayedMessages").push(e))
    },
    hideDialog: function() {
        this.fireEvent("notify:loader.confirmDialogClosed"), this.view.hideDialog(), 100 === this.model.readData("visualPercentage") && this.showDialogFromQueue()
    },
    showDialogFromQueue: function() {
        var e = this.model.readData("delayedMessages");
        e.length && this.view.showDialog(e.pop())
    }
}, Core.LoaderController = Sys.extend(Core.Controller, Core.LoaderController, "Core.LoaderController");
Sys.ns("Core"), Core.LoaderView = {
    ANIMATION_DELAY: 100,
    LOGO_SVG: {
        tag: "svg",
        attributes: {
            version: "1.1",
            viewBox: "0 0 258 92",
            xmlns: "http://www.w3.org/2000/svg",
            class: "logo-svg"
        },
        children: [{
            tag: "defs",
            attributes: {},
            children: [{
                tag: "clipPath",
                attributes: {
                    id: "netMask"
                },
                children: [{
                    tag: "rect",
                    attributes: {
                        x: "0",
                        y: "0",
                        width: "135px",
                        height: "92px"
                    },
                    children: []
                }]
            }, {
                tag: "clipPath",
                attributes: {
                    id: "entMask"
                },
                children: [{
                    tag: "rect",
                    attributes: {
                        x: "136",
                        y: "0",
                        width: "245.427px",
                        height: "92px"
                    },
                    children: []
                }]
            }]
        }, {
            tag: "g",
            attributes: {
                id: "logo"
            },
            children: [{
                tag: "path",
                attributes: {
                    id: "line",
                    class: "logo-svg__logo-line logo-parts-fill",
                    d: "M 135,0 L 137.393,0 L 137.393,91.447 L 135,91.447 L 135,0 Z",
                    "shape-rendering": "crispEdges"
                },
                children: []
            }, {
                tag: "g",
                attributes: {
                    "clip-path": "url(#netMask)"
                },
                children: [{
                    tag: "g",
                    attributes: {
                        class: "logo-svg__net-wrapper"
                    },
                    children: [{
                        tag: "path",
                        attributes: {
                            d: "M 31.69,51.93 L 22.25,36.651 L 10.15,17.731 L 10.032,17.542 L 0.003,17.542 L 0.003,73.621 L 11.133,73.621 L 11.133,39.151 L 19.432,52.581 L 32.78,73.621 L 42.89,73.621 L 42.89,17.541 L 31.692,17.541 L 31.692,51.93 L 31.692,51.93 M 31.692,51.93 "
                        },
                        children: []
                    }, {
                        tag: "path",
                        attributes: {
                            d: "M 49.15,73.62 L 85.91,73.62 L 85.91,63.001 L 60.35,63.001 L 60.35,50.772 L 82.199,50.772 L 82.199,40.074 L 60.35,40.074 L 60.35,28.245 L 85.91,28.245 L 85.91,17.547 L 49.15,17.547 L 49.15,73.627 L 49.15,73.627 M 49.15,73.627 "
                        },
                        children: []
                    }, {
                        tag: "path",
                        attributes: {
                            d: "M 90.419,28.319 L 103.268,28.319 L 103.268,73.619 L 114.468,73.619 L 114.468,28.319 L 127.237,28.319 L 127.237,17.54 L 90.418,17.54 L 90.418,28.319 L 90.418,28.319 M 90.418,28.319 "
                        },
                        children: []
                    }]
                }]
            }, {
                tag: "g",
                attributes: {
                    "clip-path": "url(#entMask)"
                },
                children: [{
                    tag: "g",
                    attributes: {
                        class: "logo-svg__ent-wrapper"
                    },
                    children: [{
                        tag: "path",
                        attributes: {
                            d: "M 135,73.621 L 168.309,73.621 L 168.309,63.002 L 142.753,63.002 L 142.753,50.773 L 164.601,50.773 L 164.601,40.075 L 142.753,40.075 L 142.753,28.246 L 168.309,28.246 L 168.309,17.548 L 135,17.548 "
                        },
                        children: []
                    }, {
                        tag: "path",
                        attributes: {
                            d: "M 205.6,52.02 L 196.162,36.75 L 184.064,17.83 L 183.947,17.631 L 173.92,17.631 L 173.92,73.709 L 185.039,73.709 L 185.039,39.24 L 193.339,52.669 L 206.699,73.709 L 216.809,73.709 L 216.809,17.63 L 205.61,17.63 L 205.61,52.02 L 205.61,52.02 M 205.61,52.02 "
                        },
                        children: []
                    }, {
                        tag: "path",
                        attributes: {
                            d: "M 221.38,17.629 L 221.38,28.408 L 234.228,28.408 L 234.228,73.706 L 245.427,73.706 L 245.427,28.407 L 258.196,28.407 L 258.196,17.627 L 221.377,17.627 L 221.377,17.627 M 221.377,17.627 "
                        },
                        children: []
                    }]
                }]
            }]
        }]
    },
    SLOGAN_SVG: {
        tag: "svg",
        attributes: {
            viewBox: "0 0 195.8 22.1",
            class: "slogan-svg"
        },
        children: [{
            tag: "path",
            attributes: {
                d: "M8.8 21.9h-8.8v-18.7h8.4c3.8 0 5.4 2.4 5.4 5.1 0 1.4-.7 3-2.3 3.8 1.8.9 2.6 2.8 2.6 4.3.1 2.9-1.8 5.5-5.3 5.5zm-1.3-15.4h-3.8v4.1h3.8c1.5 0 2.5-.8 2.5-2 0-1.4-.8-2.1-2.5-2.1zm.2 7.3h-4v4.8h4c1.7 0 2.5-.9 2.5-2.4 0-1.4-.9-2.4-2.5-2.4zM15.9 3.2h12.9v3.3h-9.2v4.3h7.9v3.3h-7.9v4.4h9.2v3.3h-12.9v-18.6zM39 6.5v15.4h-3.7v-15.4h-5v-3.3h13.6v3.4h-4.9zM53.8 6.5v15.4h-3.7v-15.4h-5v-3.3h13.6v3.4h-4.9zM60.2 3.2h12.9v3.3h-9.2v4.3h7.9v3.3h-7.9v4.4h9.2v3.3h-12.9v-18.6zM83.1 3.2c3.8 0 5.4 3.1 5.4 5.8 0 2-1.1 4.2-3.1 5.2l3.4 7.7h-4l-2.9-7h-3.4v7h-3.7v-18.7h8.3zm-4.6 8.3h3.8c1.7 0 2.6-1 2.6-2.5 0-1.4-.9-2.5-2.6-2.5h-3.8v5zM103.9 22.1c-3.5 0-7.2-2-7.2-6v-7c0-4 3.6-6.1 7.3-6.1 2.1 0 4.4.6 5.8 1.8l-1.8 2.9c-1.1-1-2.7-1.3-3.9-1.3-1.7 0-3.6.9-3.6 3.4v5.5c0 2.4 1.8 3.4 3.5 3.4.7 0 1.6-.1 2.4-.8v-3.1h-2.7v-3.2h6.4v7.9c-1.7 1.9-4.2 2.6-6.2 2.6zM122.5 18h-6.5l-1.2 3.9h-4l6.6-18.7h3.8l6.5 18.7h-4.1l-1.1-3.9zm-5.5-3.1h4.5l-.7-2.4-1.5-4.9h-.1l-1.4 4.9-.8 2.4zM143.4 11.8l-1.7 3.5-2.1 4h-2.7l-2.1-3.9-1.8-3.5h-.1v10.1h-3.7v-18.8h3.4l3.3 6.6 2.3 4.6h.2l2.3-4.7 3.2-6.5h3.4v18.7h-3.7v-10.1h-.2zM154.3 3.2v18.7h-3.7v-18.7h3.7zM161.1 10.1v11.8h-3.7v-18.7h3.4l4.3 6.4 3.6 5.4h.1v-11.8h3.7v18.7h-3.4l-4.8-7.1-3.1-4.7h-.1zM182.1 22.1c-3.5 0-7.2-2-7.2-6v-7c0-4 3.6-6.1 7.3-6.1 2.1 0 4.4.6 5.8 1.8l-1.8 2.9c-1.1-1-2.7-1.3-3.9-1.3-1.7 0-3.6.9-3.6 3.4v5.5c0 2.4 1.8 3.4 3.5 3.4.7 0 1.6-.1 2.4-.8v-3.1h-2.7v-3.2h6.4v7.9c-1.7 1.9-4.2 2.6-6.2 2.6zM190.2.6v3.5h-.6v-3.5h-1.2v-.6h3.1v.6h-1.3zm3.7 2.2l.5-1.1.9-1.7h.5v4.1h-.6v-2.8l-.4.8-.7 1.4h-.4l-.7-1.3-.5-.9v2.8h-.6v-4.1h.6l.9 1.7.5 1.1z"
            },
            children: []
        }]
    },
    constructor: function() {
        Core.LoaderView.superclass.constructor.apply(this, arguments), this.timeout = null, this.create(), this.show()
    },
    create: function() {
        this.loaderEl = document.createElement("div"), this.loaderEl.classList.add("loader"), document.body.appendChild(this.loaderEl), this.loaderInner = document.createElement("div"), this.loaderInner.classList.add("loader__inner"), this.loaderEl.appendChild(this.loaderInner), this.loaderBar = document.createElement("div"), this.loaderBar.classList.add("loader-bar"), this.loaderInner.appendChild(this.loaderBar), this.loaderBarProgress = document.createElement("div"), this.loaderBarProgress.classList.add("loader-bar__progress"), this.loaderBar.appendChild(this.loaderBarProgress), this.logoContainer = document.createElement("div"), this.logoContainer.classList.add("logo-container"), this.logoWrapper = this.createSVG(this.LOGO_SVG, "logo-wrapper"), this.sloganWrapper = this.createSVG(this.SLOGAN_SVG, "slogan-wrapper"), this.logoContainer.appendChild(this.logoWrapper), this.logoContainer.appendChild(this.sloganWrapper), this.loaderInner.appendChild(this.logoContainer), this.loaderDialog = this.createDialog(), this.loaderInner.appendChild(this.loaderDialog), this.brandingWrapper = this.createBrandingWrapper(), this.loaderInner.appendChild(this.brandingWrapper)
    },
    destroy: function() {
        clearTimeout(this.timeout), document.body.removeChild(this.loaderEl)
    },
    show: function() {
        var e = this;
        this.timeout = setTimeout(function() {
            e.logoWrapper.classList.add("logo-wrapper--animate"), e.sloganWrapper.classList.add("slogan-wrapper--animate"), e.brandingWrapper.classList.add("branding-wrapper--animate")
        }, this.ANIMATION_DELAY)
    },
    updateLoaderBar: function() {
        this.model.readData("error") && this.loaderBarProgress.classList.add("loader-bar__progress--error"), this.loaderBarProgress.style.width = this.model.readData("visualPercentage") + "%"
    },
    createLoaderBar: function() {
        var e = document.createElement("div"),
            t = document.createElement("div");
        return e.classList.add("loader__bar"), t.classList.add("loader__bar__progress"), e.appendChild(t), this.loaderBarProgress = t, e
    },
    createSVG: function(e, t) {
        var a = document.createElement("div"),
            r = this.createElement(e, "http://www.w3.org/2000/svg");
        return a.classList.add(t), a.appendChild(r), a
    },
    createElement: function(e, t) {
        var a, r, i, s;
        if (!e.tag) return null;
        a = t ? document.createElementNS(t, e.tag) : document.createElement(e.tag);
        for (r in e.attributes) e.attributes.hasOwnProperty(r) && a.setAttribute(r, e.attributes[r]);
        for (i = 0; i < e.children.length; i++) s = this.createElement(e.children[i], t), a.appendChild(s);
        return a
    },
    createDialog: function(e) {
        var t, a = document.createElement("div"),
            r = document.createElement("div"),
            i = document.createElement("div");
        return a.classList.add("loader-dialog"), e ? (r.classList.add("loader-dialog__message"), i.classList.add("loader-dialog__button-group"), (e.texts || []).map(function(e) {
            t = document.createElement("div"), t.innerText = e, r.appendChild(t)
        }), (e.buttons || []).map(function(e) {
            var t = new Interface.utils.Button(Sys.apply(e, {
                clickCallback: e.action
            }));
            t.enable(), i.appendChild(t.getContainer().getEl())
        }), a.appendChild(r), a.appendChild(i), a) : a
    },
    showDialog: function(e) {
        var t = this,
            a = this.createDialog(e);
        this.loaderInner.replaceChild(a, this.loaderDialog), this.loaderDialog = a, setTimeout(function() {
            t.loaderDialog.classList.add("loader-dialog--show"), t.logoContainer.classList.add("logo-container--hidden"), t.brandingWrapper.classList.add("branding-wrapper--hidden")
        }, this.ANIMATION_DELAY)
    },
    hideDialog: function() {
        this.loaderDialog.classList.remove("loader-dialog--show"), this.logoContainer.classList.remove("logo-container--hidden"), this.brandingWrapper.classList.remove("branding-wrapper--hidden")
    },
    createBrandingWrapper: function() {
        var e = document.createElement("div"),
            t = this.getBrandingContent(),
            a = this.createElement(t, "svg" === t.tag ? "http://www.w3.org/2000/svg" : null);
        return e.classList.add("branding-wrapper"), a && e.appendChild(a), e
    },
    getBrandingContent: function() {
        return {}
    }
}, Core.LoaderView = Sys.extend(Core.View, Core.LoaderView, "Core.LoaderView");
Sys.ns("Core"), Core.Loader = {
    constructor: function() {
        Core.Loader.superclass.constructor.apply(this, arguments)
    },
    getDefaultMVCClasses: function() {
        return {
            model: Core.Model,
            view: Core.LoaderView,
            controller: Core.LoaderController
        }
    }
}, Core.Loader = Sys.extend(Core.Module, Core.Loader, "Core.Loader");
Sys.ns("Loader"), Loader.ErrorHandler = {
    HTTP_ERROR_TEXTS: [{
        key: Language.Keys.connectionLost,
        fallback: "Connection Lost"
    }, {
        key: Language.Keys.reload,
        fallback: "Please reload the game."
    }],
    GAME_SERVER_ERROR_TEXT: [{
        key: Language.Keys.error,
        fallback: "Technical Error"
    }, {
        key: Language.Keys.returnToLobby,
        fallback: "Please return to Casino."
    }],
    PLUGIN_TIMEOUT_ERROR_TEXT: [{
        key: Language.Keys.error,
        fallback: "Technical Error"
    }, {
        key: Language.Keys.returnToLobby,
        fallback: "Please return to Casino."
    }],
    constructor: function() {
        Loader.ErrorHandler.superclass.constructor.apply(this, arguments), this.errorStatus = {
            http: "handleHttpError",
            timeout: "handleTimeoutError",
            server: "handleGameServerError"
        }, this.data = {
            status: ""
        }, this.setupEvents()
    },
    setupEvents: function() {
        this.on({
            "request:loaderErrorHandler.handleRequestError": this.handleRequestError,
            "request:loaderErrorHandler.handlePluginTimeoutError": this.handlePluginTimeoutError,
            "request:loaderErrorHandler.showTechnicalError": this.handleTechnicalError
        })
    },
    handlePluginTimeoutError: function() {
        this.dispatchDialogRequest({
            texts: this.getTexts(this.PLUGIN_TIMEOUT_ERROR_TEXT),
            buttons: this.setupDialogButtons(),
            severity: "stopped"
        })
    },
    readStatus: function() {
        return this.data.status
    },
    setStatus: function(e) {
        this.readStatus() !== e && (this.data.status = e)
    },
    handleRequestError: function(e) {
        var t, r = Sys.utils.getErrorCode(e);
        Sys.utils.httpRequestIsOK(e) ? Sys.isDefined(r) ? (t = "server", 20 === r && Sys.utils.goToLobby("1")) : Sys.utils.goToLobby("1") : t = "http", Sys.isDefined(t) && t !== this.readStatus() && (this[this.errorStatus[t]](), this.setStatus(t))
    },
    handleHttpError: function() {
        this.dispatchDialogRequest({
            texts: this.getTexts(this.HTTP_ERROR_TEXTS),
            buttons: this.setupDialogButtons(),
            severity: "stopped"
        })
    },
    handleGameServerError: function() {
        this.dispatchDialogRequest({
            texts: this.getTexts(this.GAME_SERVER_ERROR_TEXT),
            buttons: this.setupDialogButtons(),
            severity: "stopped"
        })
    },
    handleTechnicalError: function() {
        this.handleGameServerError()
    },
    getTexts: function(e) {
        var t, r, a = [];
        for (r = -1; ++r < e.length;) t = e[r], a.push(Services.languageManager.hasText(t.key) ? Services.languageManager.getText(t.key) : t.fallback);
        return a
    },
    setupDialogButtons: function() {
        return [{
            action: function() {
                Sys.utils.goToLobby("9")
            },
            label: Services.languageManager.hasText(Language.Keys.btn_casino) ? Services.languageManager.getText(Language.Keys.btn_casino) : "Home"
        }, {
            action: function() {
                Sys.utils.reload()
            },
            label: Services.languageManager.hasText(Language.Keys.btn_reload) ? Services.languageManager.getText(Language.Keys.btn_reload) : "Reload"
        }]
    },
    dispatchDialogRequest: function(e) {
        this.fireEvent("request:loader.showDialog", e)
    }
}, Loader.ErrorHandler = Sys.extend(Sys.Observable, Loader.ErrorHandler, "Loader.ErrorHandler");
Sys.isDefined(Loader.ResourceHandler) && Platform.isDesktopDevice && Sys.override(Loader.ResourceHandler, {
    slownessDetected: function() {
        var e, a = this,
            s = Services.languageManager;
        a.storeData("status", "slow"), e = {
            texts: [s.hasText(Language.Keys.loadingTakesLonger) ? s.getText(Language.Keys.loadingTakesLonger) : "Loading the game is taking longer than usual."],
            buttons: [{
                action: function() {
                    Sys.utils.reload()
                },
                label: s.hasText(Language.Keys.btn_reload) ? s.getText(Language.Keys.btn_reload) : "Reload",
                scope: a
            }],
            severity: "slow"
        }, a.fireEvent("request:loader.showDialog", e)
    }
});
Sys.isDefined(Loader.ErrorHandler) && Platform.isDesktopDevice && Sys.override(Loader.ErrorHandler, {
    GAME_SERVER_ERROR_TEXT: [{
        key: Language.Keys.error,
        fallback: "Technical Error"
    }],
    SESSION_TIMEOUT_TEXT: [{
        key: "20",
        fallback: "Your session has timed out. Restart the game."
    }],
    PLUGIN_TIMEOUT_ERROR_TEXT: [{
        key: Language.Keys.error,
        fallback: "Technical Error"
    }],
    handleRequestError: function(e) {
        var r, t = this,
            a = Sys.utils.getErrorCode(e);
        Sys.utils.httpRequestIsOK(e) ? Sys.isDefined(a) ? (r = "server", 20 === a && (r = "timeout")) : r = "server" : r = "http", Sys.isDefined(r) && r !== t.readStatus() && (t[t.errorStatus[r]](), t.setStatus(r))
    },
    setupDialogButtons: function() {
        return [{
            action: function() {
                Sys.utils.reload()
            },
            label: Services.languageManager.hasText(Language.Keys.btn_reload) ? Services.languageManager.getText(Language.Keys.btn_reload) : "Reload"
        }]
    },
    handleTimeoutError: function() {
        var e = this;
        e.dispatchDialogRequest({
            texts: e.getTexts(e.SESSION_TIMEOUT_TEXT),
            buttons: [],
            severity: "stopped"
        })
    }
});
Sys.ns("Game"), Sys.ns("Services"), Platform.PlatformManager.gatherUserAgentInformation(), Utils.Platform.init(), window.Environment = new Sys.Environment, window.Resources = new Sys.Resources, Services.storage = new Sys.Storage, window.UserInput = new Sys.UserInput, window.initializeGame = function(e) {
    Game.gameStartDateMs = Date.now(), Loader.DeviceDetector ? new Loader.DeviceDetector : Core.UseragentManager && (Game.uam = new Core.UseragentManager), Services.orientation = new Core.Orientation, Game.viewport = Services.scaling = new Core.Scaling, Services.languageManager = new Core.LanguageManager, Game.languagemanager = Services.languageManager, Sys.isGcmEnabled || (Game.loader = new Core.Loader({
        name: "loader"
    })), Game.errorHandler = new Loader.ErrorHandler, Game.resourceHandler = new Loader.ResourceHandler, Services.scaling.scaleContent(), Game.resourceHandler.preLoad()
}, Sys.isGcmEnabled || document.addEventListener("DOMContentLoaded", function() {
    initializeGame()
});
Sys.ns("Loader"), Loader.originalSetLanguageOfHtmlTag = Loader.ResourceHandler.prototype.setLanguageOfHtmlTag, Sys.apply(Loader.ResourceHandler.prototype, {
    setLanguageOfHtmlTag: function(e) {
        Loader.originalSetLanguageOfHtmlTag.call(this, e), Loader.FontLoader.init()
    }
}), Loader.ResourceHandler && Sys.override(Loader.ResourceHandler, {
    addPlatformSpecificResourcesToGenericList: function() {
        var e, a, r, o, s = this;
        Platform.PlatformManager.determineResourceBundle(), e = s.readData("genericList"), a = s.readData("dynamicallyLoadedResources"), r = s.readData("totalSize"), Object.keys(Platform.resourceBundle.loaderResourceKeys).forEach(function(s) {
            var t = Platform.resourceBundle.loaderResourceKeys[s];
            Sys.isDefined(a[s]) && Sys.isDefined(a[s][t]) && (o = a[s][t], e.push(o), r += o.size)
        }), s.storeData("genericList", e), s.storeData("totalSize", r)
    },
    jsonComplete: function(e, a) {
        var r, o;
        "configDesktop" === a && Platform.isDesktopDevice ? Sys.isDefined(Resources.readData("config")) && (r = Resources.readData("config"), o = JSON.parse(e.responseText), this.copyProperties(o, r)) : Resources.storeData(a, JSON.parse(e.responseText))
    },
    copyProperties: function(e, a) {
        Sys.iterate(e, function(e, r) {
            Sys.isDefined(a[e]) || (a[e] = {}), Sys.isObj(r) ? Sys.applyProperties(a[e], r) : a[e] = r
        })
    }
});
Sys.ns("Loader"), Loader.FontLoader = {
    FONTS: [{
        name: "NetentStandardUI",
        location: "url",
        path: "multimedia/fonts/PFDinDisplayPro-Reg.woff",
        weight: "normal"
    }],
    NON_LATIN_LANG: ["bg", "cn", "cs", "el", "et", "hr", "pl", "ro", "ru", "gr"],
    FALLBACK: {},
    init: function() {
        var t = this;
        t.attachFontStyles(), t.attachDomLoader()
    },
    attachFontStyles: function() {
        var t, e = this,
            n = e.NON_LATIN_LANG.indexOf(document.documentElement.lang) > -1,
            a = document.createElement("style"),
            o = "";
        e.FONTS.forEach(function(a) {
            t = n && e.FALLBACK[a.name] ? e.FALLBACK[a.name] : a, o += e.createFontCSS(a.name, t.location, t.path, t.weight)
        }), a.appendChild(document.createTextNode(o)), a.setAttribute("type", "text/css"), document.head.appendChild(a)
    },
    createFontCSS: function(t, e, n, a) {
        return "@font-face {\nfont-family: '" + t + "';\nsrc: " + e + "('" + n + "');\nfont-weight: " + a + ";\n }\n \n"
    },
    attachDomLoader: function() {
        var t, e = this,
            n = document.createElement("div");
        e.FONTS.forEach(function(e) {
            t = document.createElement("div"), t.style.fontFamily = e.name, t.style.display = "none", t.style.height = "0", t.innerHTML = ".", n.appendChild(t)
        }), document.body.appendChild(n)
    }
};
Sys.ns("Integration"), Integration.OpenBetResourceHandlerOverride = {
    INTEGRATION: "openbet",
    determineSessionID: function() {
        return this.performServletCall(Resources.readData("queryData").callbackurl, "openbet")
    },
    handleServletResponse: function(e) {
        var t = this,
            n = {},
            r = Sys.utils.qsToObj(e.responseText, !1),
            a = Resources.readData("queryData"),
            o = r.pluginURL;
        n["openbet.rgitoken"] = r.rgitoken, n["openbet.user_id"] = a["openbet.user_id"], n["openbet.game_code"] = a["openbet.game_code"], n["openbet.channel"] = t.getOpenBetChannel(), n["openbet.user_type"] = a["openbet.user_type"], n["openbet.affiliate"] = Sys.isDefined(a["openbet.affiliate"]) ? a["openbet.affiliate"] : "", n["openbet.rgs_site"] = "NetEnt site", n["openbet.promotions"] = "NO", Sys.applyIf(Resources.readData("extraParams"), n), t.storeSessionID("NULL"), Sys.isDefined(o) ? Resources.storeData("pluginURL", decodeURIComponent(o)) : t.determinePluginURL()
    },
    getOpenBetChannel: function() {
        return Resources.readData("queryData")["openbet.channel"]
    },
    _gameServerInitComplete: Loader.ResourceHandler.prototype.gameServerInitComplete,
    gameServerInitComplete: function(e) {
        var t = Sys.utils.parseQueryString(e.responseText, !0);
        Resources.storeData("gameServerInitResponse", Sys.utils.qsToObj(e.responseText)), Resources.storeData("gameServerInitResponseObject", t), this.storeSessionID(t.openbet.sessionid), Resources.storeData("unParsedGameServerInitResponse", e.responseText), Resources.storeData("historyUrl", this.buildHistoryUrl())
    }
}, Integration.OpenBetLanguageManagerOverride = {
    _getText: Core.LanguageManager.prototype.getText,
    getText: function(e, t) {
        var n = this,
            r = "OB" + e;
        return n.hasText(r) ? n._getText(r, t) : n._getText(e, t)
    }
}, Integration.applyOpenBetOverrides = function() {
    Sys.override(Loader.ResourceHandler, Integration.OpenBetResourceHandlerOverride), Integration.applyOpenBetLanguageOverrides()
}, Integration.applyOpenBetLanguageOverrides = function() {
    Platform.isDesktopDevice && Sys.override(Core.LanguageManager, Integration.OpenBetLanguageManagerOverride)
}, Sys.openBetMode ? Integration.applyOpenBetOverrides() : Sys.openBetPlayForFunMode && Integration.applyOpenBetLanguageOverrides();
Sys.ns("Integration.GCM"), Integration.GCM.availableOptions = ["MUTE", "TURBO"], window.setViewportHidden = function(e) {
    var t, n = document.getElementById("viewport");
    null !== n && Sys.isDefined(n) && (t = 1, e && (t = .01), n.style.opacity = t)
}, Integration.GCM.Proxy = {
    MODULE_NAME: "GCMProxy",
    gcmCoreInstance: void 0,
    exclusivityEnable: !1,
    inIdleState: !1,
    multiChoiceGameDialogsQueue: [],
    freeBetBalance: 0,
    latestWin: 0,
    basicGamePanelEnabled: !0,
    balanceUpdatedWithNewRound: !1,
    constructor: function() {
        var e, t, n = this;
        Integration.GCM.Proxy.superclass.constructor.call(n), Sys.override(Loader.ResourceHandler, {
            getOpenBetChannel: n.getGcmChannel.bind(n)
        }), Sys.override(Environment, {
            goToLobby: n.goToLobby.bind(n)
        }), n.exposedInterface = {
            gameRevealed: n.gameRevealed.bind(n),
            gcmReady: n.gcmReady.bind(n),
            optionHasChanged: n.optionHasChanged.bind(n),
            balancesHasChanged: n.balancesHasChanged.bind(n),
            toggleMute: n.toggleMute.bind(n),
            configReady: n.configReady.bind(n),
            resume: n.resume.bind(n),
            updateLoadingBar: n.simulateLoading.bind(n)
        }, e = com.openbet.gcmBridge, e.init(document.body, window.location.href, n.exposedInterface), t = n.getIframe(), null !== t && Sys.isDefined(t) && (t.style.zIndex = 10, t.style.position = "fixed"), n.on({
            "notify:resourceHandler.gameAssetsLoaded": n.onGameLoadedSuccessfully,
            "request:gcmProxy.updateProgress": n.simulateLoading,
            "notify:stateHandler.leavingBeforeLoaderCloseState": n.onGameResourcesLoaded,
            "notify:resourceHandler.animationComplete": n.onLoadAnimationClosed,
            "notify:loader.closed": n.onLoadAnimationClosed,
            "notify:stateHandler.enteringSpinningState": n.hideCommonUI,
            "request:spin.startNewRound": n.onSpinStart,
            "notify:stateHandler.enteringIdleState": n.onEnteringIdleState,
            "notify:stateHandler.leavingIdleState": n.onLeavingIdleState,
            "notify:settingsManager.settingChanged": n.onSettingChanged,
            "notify:responseParser.responseParsed": n.processServerResponse,
            "notify:moneyManager.betChanged": n.updateBetInUI,
            "notify:moneyManager.balanceReloaded": n.updateBalanceInUI,
            "request:disableBasicGamePanel": n.disableBasicGamePanel,
            "request:enableBasicGamePanel": n.enableBasicGamePanel,
            "request:gcmProxy.handleError": n.handleError,
            "request:cashField.showWin": n.onShowWin
        })
    },
    goToLobby: function() {
        this.handleError({
            category: "CRITICAL",
            severity: "ERROR",
            errorCode: "CRITICAL_ERROR",
            message: Services.languageManager.getText(Language.Keys.btn_casino),
            extraParameters: {
                originalError: "criticalError",
                originalTitle: Services.languageManager.getText(Language.Keys.btn_casino),
                reason: 3,
                suppressMessage: !0
            }
        })
    },
    getIframe: function() {
        return document.querySelector("iframe[name='commonUIIFrame']")
    },
    getGcmChannel: function() {
        return this.gcmCoreInstance.getConfig().channel
    },
    onGameLoadedSuccessfully: function() {
        this.setupAccount(), setViewportHidden(!1)
    },
    setupAccount: function() {
        var e = Resources.readData("gameServerInitResponse"),
            t = e.playercurrencyiso,
            n = Sys.utils.XMLHelper.getMoneyFormatFromXML(Resources.readData("moneyformat_player"), t),
            a = {
                ccy_code: t,
                ccy_decimal_separator: n.decimalDivider,
                ccy_thousand_separator: n.thousandsDivider
            },
            i = Number(e.credit) / 100,
            o = (Sys.isDefined(e["openbet.freebets"]) ? Number(e["openbet.freebets"]) : 0) / 100,
            s = {
                CASH: {
                    amount: i
                },
                FREEBET: {
                    amount: o
                }
            };
        this.gcmCoreInstance.accountInit(a, s), this.gcmCoreInstance.stakeUpdate(0), this.gcmCoreInstance.paidUpdate(0)
    },
    onGameResourcesLoaded: function() {
        this.gameResourcesLoaded = !0, this.tryToFinishGCMInitialization()
    },
    onLoadAnimationClosed: function() {
        this.loadAnimationClosed = !0, this.tryToFinishGCMInitialization()
    },
    tryToFinishGCMInitialization: function() {
        var e = this;
        e.gameResourcesLoaded && e.loadAnimationClosed && (e.updateBalanceInUI(), e.updateBetInUI(), e.updatePayoutInUI(), e.registerAvailableOptions(), e.gcmCoreInstance.gameReady(), e.fireEvent("request:scaling.update"))
    },
    registerAvailableOptions: function() {
        var e = this,
            t = e.gcmCoreInstance;
        Sys.each(Integration.GCM.availableOptions, function(e) {
            t.regOption(e)
        }), e.hasRegisteredOptions = !0, e.updateTurboSettingInUI(), e.updateAudioSettingInUI()
    },
    onSpinStart: function() {
        var e = this.getBalances(!0);
        this.hideCommonUI(), this.gcmCoreInstance.balancesUpdate(e), this.balanceUpdatedWithNewRound = !0
    },
    hideCommonUI: function() {
        this.gcmCoreInstance.gameAnimationStart()
    },
    processServerResponse: function(e) {
        var t = this,
            n = e.openbet;
        t.freeBetBalance = Sys.isDefined(n) && Sys.isDefined(n.freebets) ? Number(n.freebets) : t.freeBetBalance, t.latestWin = Sys.isDefined(e.wins) ? e.wins.centsTotal : 0
    },
    onShowWin: function() {
        this.updateBalanceInUI(), this.updatePayoutInUI()
    },
    onEnteringIdleState: function() {
        var e = this;
        e.inIdleState = !0, e.showCommonUI()
    },
    showCommonUI: function() {
        this.gcmCoreInstance.gameAnimationComplete(this.enableUI)
    },
    enableUI: function() {},
    updateBalanceInUI: function() {
        var e = this.getBalances();
        this.balanceUpdatedWithNewRound || this.gcmCoreInstance.balancesUpdate(e), this.balanceUpdatedWithNewRound = !1
    },
    getBalances: function(e) {
        var t = Services.moneyManager.getBalanceCents() / 100,
            n = this.freeBetBalance / 100,
            a = t - n,
            i = n,
            o = Services.moneyManager.getBetCents() / 100;
        return e && (a += o, n -= o, n < 0 ? (a += n, i = 0) : i = n), {
            CASH: {
                amount: a
            },
            FREEBET: {
                amount: i
            }
        }
    },
    updatePayoutInUI: function() {
        this.gcmCoreInstance.paidUpdate(this.latestWin / 100)
    },
    onLeavingIdleState: function() {
        this.inIdleState = !1, this.gcmCoreInstance.paidUpdate(0), this.updateBalanceInUI()
    },
    onSettingChanged: function(e) {
        "betLevel" === e || "denomination" === e || "betLines" === e ? this.updateBetInUI() : "quickSpin" === e ? this.updateTurboSettingInUI() : "volume" === e && this.updateAudioSettingInUI()
    },
    updateBetInUI: function() {
        var e = Services.moneyManager.getBetCents() / 100;
        Sys.isNumber(e) && this.gcmCoreInstance.stakeUpdate(e)
    },
    updateTurboSettingInUI: function() {
        var e = this,
            t = !0 === Services.settingsManager.getSetting("quickSpin");
        e.hasRegisteredOptions && Integration.GCM.availableOptions.contains("TURBO") && e.gcmCoreInstance.optionHasChanged("TURBO", "GAME", t)
    },
    updateAudioSettingInUI: function() {
        var e = this,
            t = 0 === Services.settingsManager.getSetting("volume");
        e.hasRegisteredOptions && Integration.GCM.availableOptions.contains("MUTE") && e.exposedInterface.toggleMute(t)
    },
    handleError: function(e) {
        var t, n, a, i = this;
        i.disableUI(), t = !0, e.RGIError ? (n = com.openbet.gcm.xmlutil, a = n.getErrorInfoFromRGIXml(decodeURIComponent(e.RGIXML)), i.shouldRevertRound = "VOID_TXN" === a.errorAction, i.gcmCoreInstance.handleServerError(a)) : (e = Sys.applyIf(e, {
            category: "NON_RECOVERABLE_ERROR",
            severity: "ERROR",
            message: "An error occurred",
            errorCode: "CLIENTERROR"
        }), "MULTI_CHOICE_DIALOG" === e.category && (Sys.isDefined(i.actionsOfCurrentDialog) ? (t = !1, i.multiChoiceGameDialogsQueue.push(e)) : (i.actionsOfCurrentDialog = e.actions, i.exclusivityEnable || (i.fireEvent("request:userInputManager.activateExclusivity", i.MODULE_NAME), i.fireEvent("request:quickSettingsMenu.externalDeactivate", i.MODULE_NAME), i.fireEvent("request:spinButton.hide", i.MODULE_NAME), i.exclusivityEnable = !0))), t && (i.shouldRevertRound = !0 === e.revert, i.gcmCoreInstance.handleError(e.category, e.severity, e.errorCode, e.message, e.extraParameters)))
    },
    disableUI: function() {},
    gcmReady: function(e) {
        this.gcmCoreInstance = e, this.simulateLoading(0)
    },
    configReady: function() {
        var e = this,
            t = !e.isDemoMode();
        t && Sys.openBetMode || !t && !Sys.openBetMode ? initializeGame({
            loaderProgressCallBack: e.simulateLoading.bind(e)
        }) : t && !Sys.openBetMode ? e.handleError({
            category: "LOGIN_ERROR",
            severity: "ERROR",
            message: "ACCOUNT_UNAVAILABLE",
            errorCode: "ACCOUNT_UNAVAILABLE",
            extraParameters: {
                originalError: 70,
                originalTitle: "MGaccountUnavailable"
            }
        }) : Sys.utils.goToLobby()
    },
    isDemoMode: function() {
        return "demo" === this.gcmCoreInstance.getConfig().playMode
    },
    simulateLoading: function(e) {
        var t = Sys.utils.toInt(e);
        t < 100 ? this.gcmCoreInstance.loadProgressUpdate(t) : (this.gcmCoreInstance.loadProgressUpdate(99), this.hideCommonUI(), this.fireEvent("notify:gcmProxy.animationComplete"))
    },
    gameRevealed: function() {
        this.configureGameForGcm()
    },
    configureGameForGcm: function() {
        this.fireEvent("request:homeButton.hidePermanently")
    },
    optionHasChanged: function(e, t) {
        var n = this;
        switch (e) {
            case "MUTE":
                n.toggleSound(t);
                break;
            case "TURBO":
                n.toggleQuickSpin(t);
                break;
            case "GAME_PREFERENCES":
                Platform.isDesktopDevice ? n.toggleSettingsWindowDesktop("gameSettings") : n.toggleSettingsWindow(t, "betSettings");
                break;
            case "PAYTABLE":
                n.toggleSettingsWindow(t, "paytable");
                break;
            case "ABOUT":
                n.inIdleState && n.toggleSettingsWindow(t, "gameRules");
                break;
            default:
                console.error("unknown option [" + e + "] changed by gcm ")
        }
    },
    disableBasicGamePanel: function() {
        this.basicGamePanelEnabled = !1
    },
    enableBasicGamePanel: function() {
        this.basicGamePanelEnabled = !0
    },
    toggleSettingsWindowDesktop: function(e) {
        this.fireEvent("request:" + e + ".toggle")
    },
    toggleSettingsWindow: function(e, t) {
        this.basicGamePanelEnabled && (e ? this.fireEvent("request:" + t + ".show") : this.fireEvent("request:settingsWindow.close"))
    },
    toggleSound: function(e) {
        Services.settingsManager.storeSetting("volume", e ? 0 : 1)
    },
    toggleQuickSpin: function(e) {
        var t;
        this.fireEvent("request:settingsManager.storeData", "quickSpin", e), (t = Services.settingsManager.getSetting("quickSpin")) !== e && this.gcmCoreInstance.optionHasChanged("TURBO", "GAME", t)
    },
    balancesHasChanged: function(e) {
        var t, n;
        this.inIdleState ? (t = parseInt(Math.round(100 * e.CASH.amount), 10), n = parseInt(Math.round(100 * e.FREEBET.amount), 10), Services.moneyManager.setBalance(t + n), this.freeBetBalance = n) : Sys.utils.reload()
    },
    toggleMute: function(e) {
        this.gcmCoreInstance.optionHasChanged("MUTE", "GAME", e)
    },
    resume: function(e) {
        var t, n = this,
            a = e,
            i = Sys.isArray(n.actionsOfCurrentDialog);
        try {
            i && 1 === n.actionsOfCurrentDialog.length && !Sys.isDefined(a) && (a = 0), i && Sys.isDefined(n.actionsOfCurrentDialog[a]) ? n.actionsOfCurrentDialog[a]() : n.shouldRevertRound && (n.fireEvent("request:moneyManager.revertBet"), n.fireEvent("request:spin.activateDefaultOutcome", "basic"), n.updateBalanceInUI())
        } finally {
            n.actionsOfCurrentDialog = void 0
        }
        n.multiChoiceGameDialogsQueue.length > 0 ? (t = n.multiChoiceGameDialogsQueue.shift(), n.handleError(t)) : (n.exclusivityEnable = !1, n.fireEvent("request:userInputManager.deactivateExclusivity", n.MODULE_NAME), n.fireEvent("request:quickSettingsMenu.externalActivate", n.MODULE_NAME), n.fireEvent("request:spinButton.show", n.MODULE_NAME))
    }
}, Integration.GCM.Proxy = Sys.extend(Sys.Observable, Integration.GCM.Proxy, "Integration.GCM.Proxy"), Sys.isGcmEnabled && (setViewportHidden(!0), Sys.utils.addCSSClass(document.body, "gcmMode"), Sys.utils.loadJS({
    url: "../../../gcm/js/gcmBridge.js"
}).then(function() {
    new Integration.GCM.Proxy
}));
Sys.ns("Integration.GCM"), Integration.GCM.ErrorHandler = {
        handleRequestError: function(e) {
            var r, t = this,
                s = Sys.utils.getResponseParameter("openbet.error.xml", e);
            Sys.utils.httpRequestIsOK(e) ? Sys.isDefined(s) ? this.fireEvent("request:gcmProxy.handleError", {
                RGIError: !0,
                RGIXML: s.replace(/\+/g, " ")
            }) : r = "server" : r = "http", Sys.isDefined(r) && r !== t.readStatus() && (t[t.errorStatus[r]](), t.setStatus(r))
        }
    }, Integration.GCM.ResourceHandler = {
        slownessDetected: function() {}
    }, Integration.GCM.DeviceDetector = {
        handleIntegrationSpecificDialogs: function(e) {
            var r = "stopped" === e.severity,
                t = {
                    category: "MULTI_CHOICE_DIALOG",
                    severity: r ? "ERROR" : "INFO",
                    message: e.texts.join("\n"),
                    errorCode: "ERROR",
                    actions: [],
                    extraParameters: {}
                },
                s = [];
            Sys.each(e.buttons, function(e) {
                s.push(e.label), t.actions.push(e.action)
            }), t.extraParameters.options = s, this.fireEvent("request:gcmProxy.handleError", t)
        }
    },
    function() {
        Sys.isGcmEnabled && (Sys.override(Loader.ErrorHandler, Integration.GCM.ErrorHandler), Sys.override(Loader.ResourceHandler, Integration.GCM.ResourceHandler), Sys.isDefined(Loader.DeviceDetector) && Sys.override(Loader.DeviceDetector, Integration.GCM.DeviceDetector))
    }();
Sys.ns("Archbot"), Archbot.Controller = {
    init: function(t) {
        this.model = t.model, this.view = t.view, this.MODULE_NAME = t.name, this.setupEvents(), this.setupArchbotEvents()
    },
    setupArchbotEvents: function() {
        Sys.isDefined(this.view) && (this.addListener("request:" + this.MODULE_NAME + ".fetchItem", this.view.getItem.bind(this.view)), this.addListener("view:sendItem", this.fireEvent.bind(this, "request:archBotGUI.saveItem", this.MODULE_NAME))), this.addListener("request:" + this.MODULE_NAME + ".fetchData", this.sendDataToArchbotModule)
    },
    sendDataToArchbotModule: function(t) {
        this.fireEvent("request:archBotGUI.saveData", this.model.readData(t))
    }
}, Sys.override(Core.Controller, Archbot.Controller);
Sys.ns("Archbot"), Archbot.View = {
    getItem: function(e, i) {
        var s, t, n = this;
        Sys.isDefined(e) && Sys.isDefined(i) && (t = i.split("."), Sys.each(t, function(e, i) {
            return s = 0 === i ? n[e] : s[e], !!Sys.isDefined(s)
        }), Sys.isDefined(s) && this.fireEvent("view:sendItem", {
            itemName: e,
            item: s
        }))
    }
}, Sys.override(Core.View, Archbot.View);