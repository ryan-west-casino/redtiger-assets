! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(g, e) {
    "use strict";

    function C(e, t, n) {
        var r, i, o = (n = n || w).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function T(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = T(e);
        return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function D(e, n, r) {
        return b(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }

    function P(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function I(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function B(e, t, n, r) {
        var i;
        try {
            e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function F() {
        w.removeEventListener("DOMContentLoaded", F), g.removeEventListener("load", F), E.ready()
    }

    function U(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(_, U)
    }

    function Q() {
        this.expando = E.expando + Q.uid++
    }

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }

    function ue(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = se[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), se[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? E.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }

    function me(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            E.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ge(f.appendChild(o), "script"), l && ve(a), n)
            for (c = 0; o = a[c++];) pe.test(o.type || "") && n.push(o);
        return f
    }

    function xe() {
        return !0
    }

    function we() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return w.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Te(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Te(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = we;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }

    function Ee(e, i, o) {
        o ? (Y.set(e, i, !1), E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && E.event.add(e, i, xe)
    }

    function ke(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
            G.hasData(e) && (o = G.access(e), a = E.extend({}, o), G.set(t, a))
        }
    }

    function qe(n, r, i, o) {
        r = v(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            d = f - 1,
            p = r[0],
            h = b(p);
        if (h || 1 < f && "string" == typeof p && !m.checkClone && Ne.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), qe(t, r, i, o)
        });
        if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ge(e, "script"), De)).length; c < f; c++) u = e, c !== d && (u = E.clone(u, !0, !0), s && E.merge(a, ge(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, E.map(a, Le), c = 0; c < s; c++) u = a[c], pe.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : C(u.textContent.replace(Se, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || He(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = E.style(e, t)), !m.pixelBoxStyles() && Pe.test(a) && Re.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Me(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function ze(e) {
        return E.cssProps[e] || $e[e] || (e in Fe ? e : $e[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
                if ((e = We[n] + t) in Fe) return e
        }(e) || e)
    }

    function Ge(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = He(e),
            i = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function rt(e) {
        return (e.match(H) || []).join(" ")
    }

    function it(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ot(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }

    function ht(n, e, r, i) {
        var t;
        if (Array.isArray(e)) E.each(e, function(e, t) {
            r || ct.test(n) ? i(n, t) : ht(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== T(e)) i(n, e);
        else
            for (t in e) ht(n + "[" + t + "]", e[t], r, i)
    }
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        v = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        m = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        w = g.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        f = "3.6.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
        E = function(e, t) {
            return new E.fn.init(e, t)
        };
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof(n = y.call(t, "constructor") && t.constructor) || a.call(n) !== l))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            C(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return v(a)
        },
        guid: 1,
        support: m
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && (C(e), e = e || T, E)) {
                if (11 !== d && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === d) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(i)), n
                    }
                if (p.qsa && !k[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === d && (U.test(t) || _.test(t))) {
                        for ((f = ee.test(t) && ye(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = A)), o = (l = h(t)).length; o--;) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return O.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        k(t, !0)
                    } finally {
                        s === A && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[A] = !0, e
        }

        function ce(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function me() {}

        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function xe(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                d = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [N, d];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || f)
                            if (i = (o = e[A] || (e[A] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === N && r[1] === d) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(p, h, g, v, y, e) {
            return v && !v[A] && (v = Te(v)), y && !y[A] && (y = Te(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !p || !e && h ? c : Ce(c, s, p, n, r),
                    d = g ? y || (e ? p : l || v) ? [] : t : f;
                if (g && g(f, d, n, r), v)
                    for (i = Ce(d, u), v(i, [], n, r), o = i.length; o--;)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (y || p) {
                        if (y) {
                            for (i = [], o = d.length; o--;)(a = d[o]) && i.push(f[o] = a);
                            y(null, d = [], i, r)
                        }
                        for (o = d.length; o--;)(a = d[o]) && -1 < (i = y ? H(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else d = Ce(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : O.apply(t, d)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = xe(function(e) {
                    return e === i
                }, a, !0), l = xe(function(e) {
                    return -1 < H(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = x.relative[e[s].type]) c = [xe(we(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
                        for (n = ++s; n < r && !x.relative[e[n].type]; n++);
                        return Te(1 < s && we(c), 1 < s && be(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && be(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        var e, p, x, o, i, h, f, g, w, u, l, C, T, a, E, v, s, c, y, A = "sizzle" + 1 * new Date,
            d = n.document,
            N = 0,
            r = 0,
            m = ue(),
            b = ue(),
            S = ue(),
            k = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            L = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            q = t.push,
            O = t.push,
            P = t.slice,
            H = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
            W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            F = new RegExp(R + "+", "g"),
            $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            z = new RegExp("^" + R + "*," + R + "*"),
            _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp(R + "|>"),
            V = new RegExp(W),
            X = new RegExp("^" + B + "$"),
            Q = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                C()
            },
            ae = xe(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(t = P.call(d.childNodes), d.childNodes), t[d.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: t.length ? function(e, t) {
                    q.apply(e, P.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        for (e in p = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, C = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : d;
                return r != T && 9 === r.nodeType && r.documentElement && (a = (T = r).documentElement, E = !i(T), d != T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(T.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), p.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = ce(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = J.test(T.getElementsByClassName), p.getById = ce(function(e) {
                    return a.appendChild(e).id = A, !T.getElementsByName || !T.getElementsByName(A).length
                }), p.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (p.qsa = J.test(T.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + A + "-]").length || v.push("~="), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + A + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (p.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == d && y(d, e) ? -1 : t == T || t.ownerDocument == d && y(d, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == T ? -1 : t == T ? 1 : i ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;
                    if (i === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? de(a[r], s[r]) : a[r] == d ? -1 : s[r] == d ? 1 : 0
                }), T
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (C(e), p.matchesSelector && E && !k[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    k(t, !0)
                }
                return 0 < se(t, T, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != T && C(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != T && C(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(D), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (x = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                p = !1;
                            if (c) {
                                if (y) {
                                    for (; l;) {
                                        for (a = e; a = a[l];)
                                            if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && d) {
                                    for (p = (s = (r = (i = (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();)
                                        if (1 === a.nodeType && ++p && a === e) {
                                            i[h] = [N, s, p];
                                            break
                                        }
                                } else if (d && (p = s = (r = (i = (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === p)
                                    for (;
                                        (a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((i = (o = a[A] || (a[A] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [N, p]), a !== e)););
                                return (p -= v) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = H(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[A] ? le(function(e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return X.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = pe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = he(e);
        return me.prototype = x.filters = x.pseudos, x.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = b[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = x.preFilter; a;) {
                for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), x.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : b(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, b, r, i = [],
                o = [],
                a = S[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;)(a = Ee(t[n]))[A] ? i.push(a) : o.push(a);
                (a = S(e, (v = o, m = 0 < (y = i).length, b = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        d = w,
                        p = e || b && x.find.TAG("*", i),
                        h = N += null == d ? 1 : Math.random() || .1,
                        g = p.length;
                    for (i && (w = t == T || t || i); l !== g && null != (o = p[l]); l++) {
                        if (b && o) {
                            for (a = 0, t || o.ownerDocument == T || (C(o), n = !E); s = v[a++];)
                                if (s(o, t || T, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (N = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        for (a = 0; s = y[a++];) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = j.call(r));
                            f = Ce(f)
                        }
                        O.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (N = h, w = d), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Q.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
                    if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && be(o))) return O.apply(n, r), n;
                        break
                    }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, p.sortStable = A.split("").sort(D).join("") === A, p.detectDuplicates = !!l, C(), p.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(I, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(g);
    E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;
    var h = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        A = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        N = E.expr.match.needsContext,
        k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length
        }
    });
    var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || L, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), k.test(r[1]) && E.isPlainObject(t))
                    for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = w.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }).prototype = E.fn, L = E(w);
    var q = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && E(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return A((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return A(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (O[r] || E.uniqueSort(n), q.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(H) || [], function(e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1)
                    for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        E.each(e, function(e, t) {
                            b(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return E.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = E.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, E.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                var n = b(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, l(u, o, I, s), l(u, o, R, s)) : (u++, t.call(e, l(u, o, I, s), l(u, o, R, s), l(u, o, I, o.notifyWith))) : (a !== I && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), g.setTimeout(t))
                            }
                        }
                        var u = 0;
                        return E.Deferred(function(e) {
                            o[0][3].add(l(0, e, b(r) ? r : I, e.notifyWith)), o[1][3].add(l(0, e, b(t) ? t : I)), o[2][3].add(l(0, e, b(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, a) : a
                    }
                },
                s = {};
            return E.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = E.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (B(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || b(i[t] && i[t].then))) return o.then();
            for (; t--;) B(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        g.console && g.console.warn && e && M.test(e.name) && g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function(e) {
        g.setTimeout(function() {
            throw e
        })
    };
    var W = E.Deferred();
    E.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || W.resolveWith(w, [E])
        }
    }), E.ready.then = W.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? g.setTimeout(E.ready) : (w.addEventListener("DOMContentLoaded", F), g.addEventListener("load", F));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === T(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, b(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(E(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        _ = /-([a-z])/g,
        X = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(H) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Y = new Q,
        G = new Q,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    E.extend({
        hasData: function(e) {
            return G.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                G.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = E.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = w.documentElement,
        ie = function(e) {
            return E.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
        },
        se = {};
    E.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var le, ce, fe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    le = w.createDocumentFragment().appendChild(w.createElement("div")), (ce = w.createElement("input")).setAttribute("type", "radio"), ce.setAttribute("checked", "checked"), ce.setAttribute("name", "t"), le.appendChild(ce), m.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked, le.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue, le.innerHTML = "<option></option>", m.option = !!le.lastChild;
    var he = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, m.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/,
        be = /^([^.]*)(?:\.(.+)|)/;
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Y.get(t);
            if (X(t))
                for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                        return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(H) || [""]).length; l--;) p = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = E.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = E.event.special[p] || {}, c = E.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(H) || [""]).length; l--;)
                    if (p = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = E.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle), delete u[p])
                    } else
                        for (p in u) E.event.remove(e, p + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = E.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = E.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = E.event.handlers.call(this, u, l), t = 0;
                    (i = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click", xe), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && S(t, "input") && Ee(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && S(t, "input") && Y.get(t, "click") || S(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return Ee(this, e, Ce), !1
            },
            trigger: function() {
                return Ee(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, r) {
            return Te(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Te(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var Ae = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s = o[r], u = a[r], "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) je(o[r], a[r]);
                else je(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return qe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return qe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ke(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return qe(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        He = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = g), t.getComputedStyle(e)
        },
        Ie = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Re = new RegExp(ne.join("|"), "i");
    ! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = g.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = w.createElement("div"),
            l = w.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(m, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = w.createElement("table"), t = w.createElement("tr"), n = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = g.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var _e, Ue, We = ["Webkit", "Moz", "ms"],
        Fe = w.createElement("div").style,
        $e = {},
        Ve = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = function(e, t, n, r) {
                    var i, o, a = 20,
                        s = function() {
                            return E.css(e, t, "")
                        },
                        u = s(),
                        l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
                    if (c && c[3] !== l) {
                        for (u /= 2, l = l || c[3], c = +u || 1; a--;) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                        c *= 2, E.style(e, t, c + l), n = n || []
                    }
                    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i
                }(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Xe.test(t) || (t = ze(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function(e, u) {
        E.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ve.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Ie(e, Qe, function() {
                    return Je(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = He(e),
                    o = !m.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Ge(0, t, s)
            }
        }
    }), E.cssHooks.marginLeft = Me(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (E.cssHooks[i + o].set = Ge)
    }), E.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = He(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = g.setTimeout(e, r);
            t.stop = function() {
                g.clearTimeout(n)
            }
        })
    }, _e = w.createElement("input"), Ue = w.createElement("select").appendChild(w.createElement("option")), _e.type = "checkbox", m.checkOn = "" !== _e.value, m.optSelected = Ue.selected, (_e = w.createElement("input")).value = "t", _e.type = "radio", m.radioValue = "t" === _e.value;
    var Ze, et = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return $(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? Ze : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(H);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), Ze = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = et[t] || E.find.attr;
        et[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = et[o], et[o] = r, r = null != a(e, t, n) ? o : null, et[o] = i), r
        }
    });
    var tt = /^(?:input|select|textarea|button)$/i,
        nt = /^(?:a|area)$/i;
    E.fn.extend({
        prop: function(e, t) {
            return $(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (b(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, it(this)))
            });
            if ((e = ot(t)).length)
                for (; n = this[u++];)
                    if (i = it(n), r = 1 === n.nodeType && " " + rt(i) + " ") {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = rt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (b(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, it(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = ot(t)).length)
                for (; n = this[u++];)
                    if (i = it(n), r = 1 === n.nodeType && " " + rt(i) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = rt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : b(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, it(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = E(this), r = ot(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = it(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + rt(it(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var at = /\r/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(at, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : rt(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, m.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), m.focusin = "onfocusin" in g;
    var st = /^(?:focusinfocus|focusoutblur)$/,
        ut = function(e) {
            e.stopPropagation()
        };
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, d = [n || w],
                p = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || w, 3 !== n.nodeType && 8 !== n.nodeType && !st.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || p, st.test(s + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (n.ownerDocument || w) && d.push(a.defaultView || a.parentWindow || g)
                }
                for (i = 0;
                    (o = d[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? s : c.bindType || p, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && X(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !X(n) || u && b(n[p]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, ut), n[p](), e.isPropagationStopped() && f.removeEventListener(p, ut), E.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), m.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    }), E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new g.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var lt, ct = /\[\]$/,
        ft = /\r?\n/g,
        dt = /^(?:submit|button|image|reset|file)$/i,
        pt = /^(?:input|select|textarea|keygen)/i;
    E.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = b(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) ht(n, e[n], t, i);
        return r.join("&")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && pt.test(this.nodeName) && !dt.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(ft, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(ft, "\r\n")
                }
            }).get()
        }
    }), E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, m.createHTMLDocument = ((lt = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === lt.childNodes.length), E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(r)) : t = w), o = !n && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = me([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
        var r, i, o
    }, E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), b(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || re
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Me(m.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, i
    }, E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E.isFunction = b, E.isWindow = x, E.camelCase = V, E.type = T, E.now = Date.now, E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, E.trim = function(e) {
        return null == e ? "" : (e + "").replace(gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var vt = g.jQuery,
        yt = g.$;
    return E.noConflict = function(e) {
        return g.$ === E && (g.$ = yt), e && g.jQuery === E && (g.jQuery = vt), E
    }, void 0 === e && (g.jQuery = g.$ = E), E
}),
function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(r) {
        return n(r, e, t), r.mobile
    }) : n(e.jQuery, e, t)
}(this, document, function(e, t, n, r) {
    (function(e, n) {
        e.extend(e.support, {
            orientation: "orientation" in t && "onorientationchange" in t
        })
    })(e),
    function(e) {
        e.event.special.throttledresize = {
            setup: function() {
                e(this).bind("resize", n)
            },
            teardown: function() {
                e(this).unbind("resize", n)
            }
        };
        var i, s, o, n = function() {
                s = (new Date).getTime(), (o = s - r) >= 250 ? (r = s, e(this).trigger("throttledresize")) : (i && clearTimeout(i), i = setTimeout(n, 250 - o))
            },
            r = 0
    }(e),
    function(e, t) {
        function p() {
            var e = s();
            e !== o && (o = e, r.trigger(i))
        }
        var s, o, u, a, l, c, h, r = e(t),
            i = "orientationchange",
            f = {
                0: !0,
                180: !0
            };
        e.support.orientation && (h = 50, u = (l = t.innerWidth || r.width()) > (c = t.innerHeight || r.height()) && l - c > h, a = f[t.orientation], (u && a || !u && !a) && (f = {
            "-90": !0,
            90: !0
        })), e.event.special.orientationchange = e.extend({}, e.event.special.orientationchange, {
            setup: function() {
                if (e.support.orientation && !e.event.special.orientationchange.disabled) return !1;
                o = s(), r.bind("throttledresize", p)
            },
            teardown: function() {
                if (e.support.orientation && !e.event.special.orientationchange.disabled) return !1;
                r.unbind("throttledresize", p)
            },
            add: function(e) {
                var t = e.handler;
                e.handler = function(e) {
                    return e.orientation = s(), t.apply(this, arguments)
                }
            }
        }), e.event.special.orientationchange.orientation = s = function() {
            var i = n.documentElement;
            return (e.support.orientation ? f[t.orientation] : i && i.clientWidth / i.clientHeight < 1.1) ? "portrait" : "landscape"
        }, e.fn[i] = function(e) {
            return e ? this.bind(i, e) : this.trigger(i)
        }, e.attrFn && (e.attrFn[i] = !0)
    }(e, this),
    function(e) {
        e.mobile = {}
    }(e),
    function(e, t, n) {
        e.extend(e.mobile, {
            version: "1.4.5",
            subPageUrlKey: "ui-page",
            hideUrlBar: !0,
            keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 0,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "a",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            buttonMarkup: {
                hoverDelay: 200
            },
            dynamicBaseEnabled: !0,
            pageContainer: e(),
            allowCrossDomainPages: !1,
            dialogHashKey: "&ui-state=dialog"
        })
    }(e),
    function(e, t, n) {
        var r = {},
            i = e.find,
            s = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            o = /:jqmData\(([^)]*)\)/g;
        e.extend(e.mobile, {
            ns: "",
            getAttribute: function(t, n) {
                var r;
                (t = t.jquery ? t[0] : t) && t.getAttribute && (r = t.getAttribute("data-" + e.mobile.ns + n));
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : s.test(r) ? JSON.parse(r) : r)
                } catch (i) {}
                return r
            },
            nsNormalizeDict: r,
            nsNormalize: function(t) {
                return r[t] || (r[t] = e.camelCase(e.mobile.ns + t))
            },
            closestPageData: function(e) {
                return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
            }
        }), e.fn.jqmData = function(t, r) {
            var i;
            return void 0 !== t && (t && (t = e.mobile.nsNormalize(t)), i = arguments.length < 2 || void 0 === r ? this.data(t) : this.data(t, r)), i
        }, e.jqmData = function(t, n, r) {
            var i;
            return void 0 !== n && (i = e.data(t, n ? e.mobile.nsNormalize(n) : n, r)), i
        }, e.fn.jqmRemoveData = function(t) {
            return this.removeData(e.mobile.nsNormalize(t))
        }, e.jqmRemoveData = function(t, n) {
            return e.removeData(t, e.mobile.nsNormalize(n))
        }, e.find = function(t, n, r, s) {
            return t.indexOf(":jqmData") > -1 && (t = t.replace(o, "[data-" + (e.mobile.ns || "") + "$1]")), i.call(this, t, n, r, s)
        }, e.extend(e.find, i)
    }(e),
    function(e, t) {
        function s(t, n) {
            var r, i, s, u = t.nodeName.toLowerCase();
            return "area" === u ? (r = t.parentNode, i = r.name, !(!t.href || !i || "map" !== r.nodeName.toLowerCase()) && (!!(s = e("img[usemap=#" + i + "]")[0]) && o(s))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && o(t)
        }

        function o(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }
        var r = 0,
            i = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "c0ab71056b936627e8a7821f03c044aec6280a40",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            focus: function(t) {
                return function(n, r) {
                    return "number" == typeof n ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            e(t).focus(), r && r.call(t)
                        }, n)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            scrollParent: function() {
                var t;
                return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(this[0].ownerDocument || n) : t
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++r)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    i.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(n) {
                    return !!e.data(n, t)
                }
            }) : function(t, n, r) {
                return !!e.data(t, r[3])
            },
            focusable: function(t) {
                return s(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var n = e.attr(t, "tabindex"),
                    r = isNaN(n);
                return (r || n >= 0) && s(t, !r)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
            function u(t, n, r, s) {
                return e.each(i, function() {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), n
            }
            var i = "Width" === r ? ["Left", "Right"] : ["Top", "Bottom"],
                s = r.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + r] = function(n) {
                return n === t ? o["inner" + r].call(this) : this.each(function() {
                    e(this).css(s, u(this, n) + "px")
                })
            }, e.fn["outer" + r] = function(t, n) {
                return "number" != typeof t ? o["outer" + r].call(this, t) : this.each(function() {
                    e(this).css(s, u(this, t, !0, n) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(n) {
                return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in n.createElement("div"), e.fn.extend({
            disableSelection: function() {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(r) {
                if (r !== t) return this.css("zIndex", r);
                if (this.length)
                    for (var s, o, i = e(this[0]); i.length && i[0] !== n;) {
                        if (("absolute" === (s = i.css("position")) || "relative" === s || "fixed" === s) && (o = parseInt(i.css("zIndex"), 10), !isNaN(o) && 0 !== o)) return o;
                        i = i.parent()
                    }
                return 0
            }
        }), e.ui.plugin = {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n, r) {
                var i, s = e.plugins[t];
                if (s && (r || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (i = 0; i < s.length; i++) e.options[s[i][0]] && s[i][1].apply(e.element, n)
            }
        }
    }(e),
    function(e, t, r) {
        e.extend(e.mobile, {
            window: e(t),
            document: e(n),
            keyCode: e.ui.keyCode,
            behaviors: {},
            silentScroll: function(n) {
                "number" !== e.type(n) && (n = e.mobile.defaultHomeScroll), e.event.special.scrollstart.enabled = !1, setTimeout(function() {
                    t.scrollTo(0, n), e.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: n
                    })
                }, 20), setTimeout(function() {
                    e.event.special.scrollstart.enabled = !0
                }, 150)
            },
            getClosestBaseUrl: function(t) {
                var n = e(t).closest(".ui-page").jqmData("url"),
                    r = e.mobile.path.documentBase.hrefNoHash;
                return e.mobile.dynamicBaseEnabled && n && e.mobile.path.isPath(n) || (n = r), e.mobile.path.makeUrlAbsolute(n, r)
            },
            removeActiveLinkClass: function(t) {
                !!e.mobile.activeClickedLink && (!e.mobile.activeClickedLink.closest("." + e.mobile.activePageClass).length || t) && e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass), e.mobile.activeClickedLink = null
            },
            getInheritedTheme: function(e, t) {
                for (var s, o, n = e[0], r = "", i = /ui-(bar|body|overlay)-([a-z])\b/; n && !((s = n.className || "") && (o = i.exec(s)) && (r = o[2]));) n = n.parentNode;
                return r || t || "a"
            },
            enhanceable: function(e) {
                return this.haveParents(e, "enhance")
            },
            hijackable: function(e) {
                return this.haveParents(e, "ajax")
            },
            haveParents: function(t, n) {
                if (!e.mobile.ignoreContentEnabled) return t;
                var s, o, u, a, r = t.length,
                    i = e();
                for (a = 0; a < r; a++) {
                    for (o = t.eq(a), u = !1, s = t[a]; s;) {
                        if ("false" === (s.getAttribute ? s.getAttribute("data-" + e.mobile.ns + n) : "")) {
                            u = !0;
                            break
                        }
                        s = s.parentNode
                    }
                    u || (i = i.add(o))
                }
                return i
            },
            getScreenHeight: function() {
                return t.innerHeight || e.mobile.window.height()
            },
            resetActivePageHeight: function(t) {
                var n = e("." + e.mobile.activePageClass),
                    r = n.height(),
                    s = n.outerHeight(!0);
                t = function(t, n) {
                    var r = t.parent(),
                        i = [],
                        s = function() {
                            var t = e(this),
                                n = e.mobile.toolbar && t.data("mobile-toolbar") ? t.toolbar("option") : {
                                    position: t.attr("data-" + e.mobile.ns + "position"),
                                    updatePagePadding: !1 !== t.attr("data-" + e.mobile.ns + "update-page-padding")
                                };
                            return "fixed" !== n.position || !0 !== n.updatePagePadding
                        },
                        o = r.children(":jqmData(role='header')").filter(s),
                        u = t.children(":jqmData(role='header')"),
                        a = r.children(":jqmData(role='footer')").filter(s),
                        f = t.children(":jqmData(role='footer')");
                    return 0 === u.length && o.length > 0 && (i = i.concat(o.toArray())), 0 === f.length && a.length > 0 && (i = i.concat(a.toArray())), e.each(i, function(t, r) {
                        n -= e(r).outerHeight()
                    }), Math.max(0, n)
                }(n, "number" == typeof t ? t : e.mobile.getScreenHeight()), n.css("min-height", ""), n.height() < t && n.css("min-height", t - (s - r))
            },
            loading: function() {
                var t = this.loading._widget || e(e.mobile.loader.prototype.defaultHtml).loader(),
                    n = t.loader.apply(t, arguments);
                return this.loading._widget = t, n
            }
        }), e.addDependents = function(t, n) {
            var r = e(t),
                i = r.jqmData("dependents") || e();
            r.jqmData("dependents", e(i).add(n))
        }, e.fn.extend({
            removeWithDependents: function() {
                e.removeWithDependents(this)
            },
            enhanceWithin: function() {
                var t, n = {},
                    r = e.mobile.page.prototype.keepNativeSelector(),
                    i = this;
                e.mobile.nojs && e.mobile.nojs(this), e.mobile.links && e.mobile.links(this), e.mobile.degradeInputsWithin && e.mobile.degradeInputsWithin(this), e.fn.buttonMarkup && this.find(e.fn.buttonMarkup.initSelector).not(r).jqmEnhanceable().buttonMarkup(), e.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(r).jqmEnhanceable().fieldcontain(), e.each(e.mobile.widgets, function(t, s) {
                    if (s.initSelector) {
                        var o = e.mobile.enhanceable(i.find(s.initSelector));
                        o.length > 0 && (o = o.not(r)), o.length > 0 && (n[s.prototype.widgetName] = o)
                    }
                });
                for (t in n) n[t][t]();
                return this
            },
            addDependents: function(t) {
                e.addDependents(this, t)
            },
            getEncodedText: function() {
                return e("<a>").text(this.text()).html()
            },
            jqmEnhanceable: function() {
                return e.mobile.enhanceable(this)
            },
            jqmHijackable: function() {
                return e.mobile.hijackable(this)
            }
        }), e.removeWithDependents = function(t) {
            var n = e(t);
            (n.jqmData("dependents") || e()).remove(), n.remove()
        }, e.addDependents = function(t, n) {
            var r = e(t),
                i = r.jqmData("dependents") || e();
            r.jqmData("dependents", e(i).add(n))
        }, e.find.matches = function(t, n) {
            return e.find(t, null, null, n)
        }, e.find.matchesSelector = function(t, n) {
            return e.find(n, null, null, [t]).length > 0
        }
    }(e, this),
    function(e) {
        var t = e("meta[name=viewport]"),
            n = t.attr("content"),
            r = n + ",maximum-scale=1, user-scalable=no",
            i = n + ",maximum-scale=10, user-scalable=yes",
            s = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(n);
        e.mobile.zoom = e.extend({}, {
            enabled: !s,
            locked: !1,
            disable: function(n) {
                !s && !e.mobile.zoom.locked && (t.attr("content", r), e.mobile.zoom.enabled = !1, e.mobile.zoom.locked = n || !1)
            },
            enable: function(n) {
                !s && (!e.mobile.zoom.locked || !0 === n) && (t.attr("content", i), e.mobile.zoom.enabled = !0, e.mobile.zoom.locked = !1)
            },
            restore: function() {
                s || (t.attr("content", n), e.mobile.zoom.enabled = !0)
            }
        })
    }(e),
    function(e, t) {
        function f(e) {
            i = e.originalEvent, a = i.accelerationIncludingGravity, s = Math.abs(a.x), o = Math.abs(a.y), u = Math.abs(a.z), !t.orientation && (s > 7 || (u > 6 && o < 8 || u < 8 && o > 6) && s > 5) ? r.enabled && r.disable() : r.enabled || r.enable()
        }
        e.mobile.iosorientationfixEnabled = !0;
        var r, i, s, o, u, a, n = navigator.userAgent;
        /iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(n) && n.indexOf("AppleWebKit") > -1 ? (r = e.mobile.zoom, e.mobile.document.on("mobileinit", function() {
            e.mobile.iosorientationfixEnabled && e.mobile.window.bind("orientationchange.iosorientationfix", r.enable).bind("devicemotion.iosorientationfix", f)
        })) : e.mobile.iosorientationfixEnabled = !1
    }(e, this)
});
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.CustomEase", ["easing.Ease"], function(a) {
            var b = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                c = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                d = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                e = /[cLlsS]/g,
                f = "CustomEase only accepts Cubic Bezier data.",
                g = function(a, b, c, d, e, f, h, i, j, k, l) {
                    var m, n = (a + c) / 2,
                        o = (b + d) / 2,
                        p = (c + e) / 2,
                        q = (d + f) / 2,
                        r = (e + h) / 2,
                        s = (f + i) / 2,
                        t = (n + p) / 2,
                        u = (o + q) / 2,
                        v = (p + r) / 2,
                        w = (q + s) / 2,
                        x = (t + v) / 2,
                        y = (u + w) / 2,
                        z = h - a,
                        A = i - b,
                        B = Math.abs((c - h) * A - (d - i) * z),
                        C = Math.abs((e - h) * A - (f - i) * z);
                    return k || (k = [{
                        x: a,
                        y: b
                    }, {
                        x: h,
                        y: i
                    }], l = 1), k.splice(l || k.length - 1, 0, {
                        x: x,
                        y: y
                    }), (B + C) * (B + C) > j * (z * z + A * A) && (m = k.length, g(a, b, n, o, t, u, x, y, j, k, l), g(x, y, v, w, r, s, h, i, j, k, l + 1 + (k.length - m))), k
                },
                h = function(a) {
                    var b, e, g, h, i, j, k, l, m, n, o, p = (a + "").replace(d, function(a) {
                            var b = +a;
                            return 1e-4 > b && b > -1e-4 ? 0 : b
                        }).match(c) || [],
                        q = [],
                        r = 0,
                        s = 0,
                        t = p.length,
                        u = 2;
                    for (b = 0; t > b; b++)
                        if (m = h, isNaN(p[b]) ? (h = p[b].toUpperCase(), i = h !== p[b]) : b--, e = +p[b + 1], g = +p[b + 2], i && (e += r, g += s), b || (k = e, l = g), "M" === h) j && j.length < 8 && (q.length -= 1, u = 0), r = k = e, s = l = g, j = [e, g], u = 2, q.push(j), b += 2, h = "L";
                        else if ("C" === h) j || (j = [0, 0]), j[u++] = e, j[u++] = g, i || (r = s = 0), j[u++] = r + 1 * p[b + 3], j[u++] = s + 1 * p[b + 4], j[u++] = r += 1 * p[b + 5], j[u++] = s += 1 * p[b + 6], b += 6;
                    else if ("S" === h) "C" === m || "S" === m ? (n = r - j[u - 4], o = s - j[u - 3], j[u++] = r + n, j[u++] = s + o) : (j[u++] = r, j[u++] = s), j[u++] = e, j[u++] = g, i || (r = s = 0), j[u++] = r += 1 * p[b + 3], j[u++] = s += 1 * p[b + 4], b += 4;
                    else {
                        if ("L" !== h && "Z" !== h) throw f;
                        "Z" === h && (e = k, g = l, j.closed = !0), ("L" === h || Math.abs(r - e) > .5 || Math.abs(s - g) > .5) && (j[u++] = r + (e - r) / 3, j[u++] = s + (g - s) / 3, j[u++] = r + 2 * (e - r) / 3, j[u++] = s + 2 * (g - s) / 3, j[u++] = e, j[u++] = g, "L" === h && (b += 2)), r = e, s = g
                    }
                    return q[0]
                },
                k = function(a) {
                    var b = this.lookup[a * this.l | 0] || this.lookup[this.l - 1];
                    return b.nx < a && (b = b.n), b.y + (a - b.x) / b.cx * b.cy
                },
                l = function(b, c, d) {
                    this._calcEnd = !0, this.id = b, b && (a.map[b] = this), this.getRatio = k, this.setData(c, d)
                },
                m = l.prototype = new a;
            return m.constructor = l, m.setData = function(a, c) {
                var d, i, k, l, m, n, o, p, q, r, s = (a = a || "0,0,1,1").match(b),
                    t = 1,
                    u = [];
                if (c = c || {}, r = c.precision || 1, this.data = a, this.lookup = [], this.points = u, this.fast = 1 >= r, (e.test(a) || -1 !== a.indexOf("M") && -1 === a.indexOf("C")) && (s = h(a)), 4 === (d = s.length)) s.unshift(0, 0), s.push(1, 1), d = 8;
                else if ((d - 2) % 6) throw f;
                for ((0 != +s[0] || 1 != +s[d - 2]) && function(a, b, c) {
                        c || 0 === c || (c = Math.max(+a[a.length - 1], +a[1]));
                        var d, e = -1 * +a[0],
                            f = -c,
                            g = a.length,
                            h = 1 / (+a[g - 2] + e),
                            j = -b || (Math.abs(+a[g - 1] - +a[1]) < .01 * (+a[g - 2] - +a[0]) ? function(a) {
                                var b, c = a.length,
                                    d = 999999999999;
                                for (b = 1; c > b; b += 6) + a[b] < d && (d = +a[b]);
                                return d
                            }(a) + f : +a[g - 1] + f);
                        for (j = j ? 1 / j : -h, d = 0; g > d; d += 2) a[d] = (+a[d] + e) * h, a[d + 1] = (+a[d + 1] + f) * j
                    }(s, c.height, c.originY), this.rawBezier = s, l = 2; d > l; l += 6) i = {
                    x: +s[l - 2],
                    y: +s[l - 1]
                }, k = {
                    x: +s[l + 4],
                    y: +s[l + 5]
                }, u.push(i, k), g(i.x, i.y, +s[l], +s[l + 1], +s[l + 2], +s[l + 3], k.x, k.y, 1 / (2e5 * r), u, u.length - 1);
                for (d = u.length, l = 0; d > l; l++) o = u[l], p = u[l - 1] || o, o.x > p.x || p.y !== o.y && p.x === o.x || o === p ? (p.cx = o.x - p.x, p.cy = o.y - p.y, p.n = o, p.nx = o.x, this.fast && l > 1 && Math.abs(p.cy / p.cx - u[l - 2].cy / u[l - 2].cx) > 2 && (this.fast = !1), p.cx < t && (p.cx ? t = p.cx : (p.cx = .001, l === d - 1 && (p.x -= .001, t = Math.min(t, .001), this.fast = !1)))) : (u.splice(l--, 1), d--);
                if (d = 1 / t + 1 | 0, this.l = d, m = 1 / d, n = 0, o = u[0], this.fast) {
                    for (l = 0; d > l; l++) q = l * m, o.nx < q && (o = u[++n]), i = o.y + (q - o.x) / o.cx * o.cy, this.lookup[l] = {
                        x: q,
                        cx: m,
                        y: i,
                        cy: 0,
                        nx: 9
                    }, l && (this.lookup[l - 1].cy = i - this.lookup[l - 1].y);
                    this.lookup[d - 1].cy = u[u.length - 1].y - i
                } else {
                    for (l = 0; d > l; l++) o.nx < l * m && (o = u[++n]), this.lookup[l] = o;
                    n < u.length - 1 && (this.lookup[l - 1] = u[u.length - 2])
                }
                return this._calcEnd = 1 !== u[u.length - 1].y || 0 !== u[0].y, this
            }, m.getRatio = k, m.getSVGData = function(a) {
                return l.getSVGData(this, a)
            }, l.create = function(a, b, c) {
                return new l(a, b, c)
            }, l.version = "0.2.1", l.bezierToPoints = g, l.get = function(b) {
                return a.map[b]
            }, l.getSVGData = function(b, c) {
                var d, e, f, g, h, i, j, k, l, m, n = 1e3,
                    o = (c = c || {}).width || 100,
                    p = c.height || 100,
                    q = c.x || 0,
                    r = (c.y || 0) + p,
                    s = c.path;
                if (c.invert && (p = -p, r = 0), (b = b.getRatio ? b : a.map[b] || console.log("No ease found: ", b)).rawBezier) {
                    for (d = [], j = b.rawBezier.length, f = 0; j > f; f += 2) d.push(((q + b.rawBezier[f] * o) * n | 0) / n + "," + ((r + b.rawBezier[f + 1] * -p) * n | 0) / n);
                    d[0] = "M" + d[0], d[1] = "C" + d[1]
                } else
                    for (d = ["M" + q + "," + r], j = Math.max(5, 200 * (c.precision || 1)), g = 1 / j, j += 2, k = 5 / j, l = ((q + g * o) * n | 0) / n, m = ((r + b.getRatio(g) * -p) * n | 0) / n, e = (m - r) / (l - q), f = 2; j > f; f++) h = ((q + f * g * o) * n | 0) / n, i = ((r + b.getRatio(f * g) * -p) * n | 0) / n, (Math.abs((i - m) / (h - l) - e) > k || f === j - 1) && (d.push(l + "," + m), e = (i - m) / (h - l)), l = h, m = i;
                return s && ("string" == typeof s ? document.querySelector(s) : s).setAttribute("d", d.join(" ")), d.join(" ")
            }, l
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).CustomEase
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
    }(),
    function(window, undefined) {
        function Proton(proParticleCount, integrationType) {
            this.proParticleCount = Proton.Util.initValue(proParticleCount, Proton.POOL_MAX), this.integrationType = Proton.Util.initValue(integrationType, Proton.EULER), this.emitters = [], this.renderers = [], this.time = 0, this.oldTime = 0, Proton.pool = new Proton.ParticlePool(this.proParticleCount), Proton.integrator = new Proton.NumericalIntegration(this.integrationType)
        }

        function EventDispatcher() {
            this.initialize()
        }

        function MStack() {
            this.mats = [], this.size = 0;
            for (var i = 0; i < 20; i++) this.mats.push(Proton.Mat3.create([0, 0, 0, 0, 0, 0, 0, 0, 0]))
        }

        function Particle(pOBJ) {
            this.id = "particle_" + Particle.ID++, this.reset(!0), Proton.Util.setPrototypeByObject(this, pOBJ)
        }

        function ParticlePool(num, releaseTime) {
            this.proParticleCount = Proton.Util.initValue(num, 0), this.releaseTime = Proton.Util.initValue(releaseTime, -1), this.poolList = [], this.timeoutID = 0;
            for (var i = 0; i < this.proParticleCount; i++) this.add();
            this.releaseTime > 0 && (this.timeoutID = setTimeout(this.release, this.releaseTime / 1e3))
        }

        function Span(a, b, center) {
            this.isArray = !1, Proton.Util.isArray(a) ? (this.isArray = !0, this.a = a) : (this.a = Proton.Util.initValue(a, 1), this.b = Proton.Util.initValue(b, this.a), this.center = Proton.Util.initValue(center, !1))
        }

        function ColorSpan(color) {
            Proton.Util.isArray(color) ? this.colorArr = color : this.colorArr = [color]
        }

        function Rectangle(x, y, w, h) {
            this.x = x, this.y = y, this.width = w, this.height = h, this.bottom = this.y + this.height, this.right = this.x + this.width
        }

        function Behaviour(life, easing) {
            this.id = "Behaviour_" + Behaviour.id++, this.life = Proton.Util.initValue(life, 1 / 0), this.easing = Proton.ease.setEasingByName(easing), this.age = 0, this.energy = 1, this.dead = !1, this.parents = [], this.name = "Behaviour"
        }

        function Rate(numpan, timepan) {
            this.numPan = Proton.Util.initValue(numpan, 1), this.timePan = Proton.Util.initValue(timepan, 1), this.numPan = Proton.Util.setSpanValue(this.numPan), this.timePan = Proton.Util.setSpanValue(this.timePan), this.startTime = 0, this.nextTime = 0, this.init()
        }

        function Initialize() {}

        function Life(a, b, c) {
            Life._super_.call(this), this.lifePan = Proton.Util.setSpanValue(a, b, c)
        }

        function Position(zone) {
            Position._super_.call(this), this.zone = Proton.Util.initValue(zone, new Proton.PointZone)
        }

        function Velocity(rpan, thapan, type) {
            Velocity._super_.call(this), this.rPan = Proton.Util.setSpanValue(rpan), this.thaPan = Proton.Util.setSpanValue(thapan), this.type = Proton.Util.initValue(type, "vector")
        }

        function Mass(a, b, c) {
            Mass._super_.call(this), this.massPan = Proton.Util.setSpanValue(a, b, c)
        }

        function Radius(a, b, c) {
            Radius._super_.call(this), this.radius = Proton.Util.setSpanValue(a, b, c)
        }

        function ImageTarget(image, w, h) {
            ImageTarget._super_.call(this), this.image = this.setSpanValue(image), this.w = Proton.Util.initValue(w, 20), this.h = Proton.Util.initValue(h, this.w)
        }

        function Force(fx, fy, life, easing) {
            Force._super_.call(this, life, easing), this.force = this.normalizeForce(new Proton.Vector2D(fx, fy)), this.name = "Force"
        }

        function Attraction(targetPosition, force, radius, life, easing) {
            Attraction._super_.call(this, life, easing), this.targetPosition = Proton.Util.initValue(targetPosition, new Proton.Vector2D), this.radius = Proton.Util.initValue(radius, 1e3), this.force = Proton.Util.initValue(this.normalizeValue(force), 100), this.radiusSq = this.radius * this.radius, this.attractionForce = new Proton.Vector2D, this.lengthSq = 0, this.name = "Attraction"
        }

        function RandomDrift(driftX, driftY, delay, life, easing) {
            RandomDrift._super_.call(this, life, easing), this.reset(driftX, driftY, delay), this.time = 0, this.name = "RandomDrift"
        }

        function Repulsion(targetPosition, force, radius, life, easing) {
            Repulsion._super_.call(this, targetPosition, force, radius, life, easing), this.force *= -1, this.name = "Repulsion"
        }

        function Gravity(g, life, easing) {
            Gravity._super_.call(this, 0, g, life, easing), this.name = "Gravity"
        }

        function Collision(emitter, mass, callback, life, easing) {
            Collision._super_.call(this, life, easing), this.reset(emitter, mass, callback), this.name = "Collision"
        }

        function CrossZone(zone, crossType, life, easing) {
            CrossZone._super_.call(this, life, easing), this.reset(zone, crossType), this.name = "CrossZone"
        }

        function Alpha(a, b, life, easing) {
            Alpha._super_.call(this, life, easing), this.reset(a, b), this.name = "Alpha"
        }

        function Scale(a, b, life, easing) {
            Scale._super_.call(this, life, easing), this.reset(a, b), this.name = "Scale"
        }

        function Rotate(a, b, style, life, easing) {
            Rotate._super_.call(this, life, easing), this.reset(a, b, style), this.name = "Rotate"
        }

        function Color(color1, color2, life, easing) {
            Color._super_.call(this, life, easing), this.reset(color1, color2), this.name = "Color"
        }

        function GravityWell(centerPoint, force, life, easing) {
            GravityWell._super_.call(this, life, easing), this.distanceVec = new Proton.Vector2D, this.centerPoint = Proton.Util.initValue(centerPoint, new Proton.Vector2D), this.force = Proton.Util.initValue(this.normalizeValue(force), 100), this.name = "GravityWell"
        }

        function Emitter(pObj) {
            this.initializes = [], this.particles = [], this.behaviours = [], this.emitTime = 0, this.emitTotalTimes = -1, this.damping = .006, this.bindEmitter = !0, this.rate = new Proton.Rate(1, .1), Emitter._super_.call(this, pObj), this.id = "emitter_" + Emitter.ID++
        }

        function BehaviourEmitter(pObj) {
            this.selfBehaviours = [], BehaviourEmitter._super_.call(this, pObj)
        }

        function FollowEmitter(mouseTarget, ease, pObj) {
            this.mouseTarget = Proton.Util.initValue(mouseTarget, window), this.ease = Proton.Util.initValue(ease, .7), this._allowEmitting = !1, this.initEventHandler(), FollowEmitter._super_.call(this, pObj)
        }

        function Renderer(type, proton, element) {
            this.element = element, this.type = Proton.Util.initValue(type, "canvas"), this.proton = proton, this.renderer = this.getRenderer()
        }

        function BaseRender(proton, element, stroke) {
            this.proton = proton, this.element = element, this.stroke = stroke
        }

        function DomRender(proton, element) {
            DomRender._super_.call(this, proton, element), this.stroke = null
        }

        function EaselRender(proton, element, stroke) {
            EaselRender._super_.call(this, proton, element), this.stroke = stroke
        }

        function CanvasRender(proton, element) {
            CanvasRender._super_.call(this, proton, element), this.stroke = null, this.context = this.element.getContext("2d"), this.bufferCache = {}
        }

        function PixelRender(proton, element, rectangle) {
            PixelRender._super_.call(this, proton, element), this.context = this.element.getContext("2d"), this.imageData = null, this.rectangle = null, this.rectangle = rectangle, this.createImageData(rectangle)
        }

        function WebGLRender(proton, element) {
            WebGLRender._super_.call(this, proton, element), this.gl = this.element.getContext("experimental-webgl", {
                antialias: !0,
                stencil: !1,
                depth: !1
            }), this.gl || alert("Sorry your browser do not suppest WebGL!"), this.initVar(), this.setMaxRadius(), this.initShaders(), this.initBuffers(), this.gl.blendEquation(this.gl.FUNC_ADD), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.enable(this.gl.BLEND)
        }

        function Zone() {
            this.vector = new Proton.Vector2D(0, 0), this.random = 0, this.crossType = "dead", this.alert = !0
        }

        function LineZone(x1, y1, x2, y2, direction) {
            LineZone._super_.call(this), x2 - x1 >= 0 ? (this.x1 = x1, this.y1 = y1, this.x2 = x2, this.y2 = y2) : (this.x1 = x2, this.y1 = y2, this.x2 = x1, this.y2 = y1), this.dx = this.x2 - this.x1, this.dy = this.y2 - this.y1, this.minx = Math.min(this.x1, this.x2), this.miny = Math.min(this.y1, this.y2), this.maxx = Math.max(this.x1, this.x2), this.maxy = Math.max(this.y1, this.y2), this.dot = this.x2 * this.y1 - this.x1 * this.y2, this.xxyy = this.dx * this.dx + this.dy * this.dy, this.gradient = this.getGradient(), this.length = this.getLength(), this.direction = Proton.Util.initValue(direction, ">")
        }

        function CircleZone(x, y, radius) {
            CircleZone._super_.call(this), this.x = x, this.y = y, this.radius = radius, this.angle = 0, this.center = {
                x: this.x,
                y: this.y
            }
        }

        function PointZone(x, y) {
            PointZone._super_.call(this), this.x = x, this.y = y
        }

        function RectZone(x, y, width, height) {
            RectZone._super_.call(this), this.x = x, this.y = y, this.width = width, this.height = height
        }

        function ImageZone(imageData, x, y, d) {
            ImageZone._super_.call(this), this.reset(imageData, x, y, d)
        }
        Proton.POOL_MAX = 1e3, Proton.TIME_STEP = 60, Proton.MEASURE = 100, Proton.EULER = "euler", Proton.RK2 = "runge-kutta2", Proton.RK4 = "runge-kutta4", Proton.VERLET = "verlet", Proton.PARTICLE_CREATED = "partilcleCreated", Proton.PARTICLE_UPDATE = "partilcleUpdate", Proton.PARTICLE_SLEEP = "particleSleep", Proton.PARTICLE_DEAD = "partilcleDead", Proton.PROTON_UPDATE = "protonUpdate", Proton.PROTON_UPDATE_AFTER = "protonUpdateAfter", Proton.EMITTER_ADDED = "emitterAdded", Proton.EMITTER_REMOVED = "emitterRemoved", Proton.amendChangeTabsBug = !0, Proton.TextureBuffer = {}, Proton.TextureCanvasBuffer = {}, Proton.prototype = {
            addRender: function(render) {
                render.proton = this, this.renderers.push(render.proton)
            },
            addEmitter: function(emitter) {
                this.emitters.push(emitter), emitter.parent = this, this.dispatchEvent(new Proton.Event({
                    type: Proton.EMITTER_ADDED,
                    emitter: emitter
                }))
            },
            removeEmitter: function(emitter) {
                var index = this.emitters.indexOf(emitter);
                this.emitters.splice(index, 1), emitter.parent = null, this.dispatchEvent(new Proton.Event({
                    type: Proton.EMITTER_REMOVED,
                    emitter: emitter
                }))
            },
            update: function() {
                this.dispatchEvent(new Proton.Event({
                    type: Proton.PROTON_UPDATE
                })), this.oldTime || (this.oldTime = (new Date).getTime());
                var time = (new Date).getTime();
                if (this.elapsed = (time - this.oldTime) / 1e3, Proton.amendChangeTabsBug && this.amendChangeTabsBug(), this.oldTime = time, this.elapsed > 0)
                    for (var i = 0; i < this.emitters.length; i++) this.emitters[i].update(this.elapsed);
                this.dispatchEvent(new Proton.Event({
                    type: Proton.PROTON_UPDATE_AFTER
                }))
            },
            amendChangeTabsBug: function() {
                this.elapsed > .5 && (this.oldTime = (new Date).getTime(), this.elapsed = 0)
            },
            getCount: function() {
                for (var total = 0, length = this.emitters.length, i = 0; i < length; i++) total += this.emitters[i].particles.length;
                return total
            },
            destory: function() {
                for (var length = this.emitters.length, i = 0; i < length; i++) this.emitters[i].destory(), delete this.emitters[i];
                this.emitters = [], this.time = 0, this.oldTime = 0, Proton.pool.release()
            }
        }, window.Proton = Proton;
        var p = EventDispatcher.prototype;
        EventDispatcher.initialize = function(target) {
            target.addEventListener = p.addEventListener, target.removeEventListener = p.removeEventListener, target.removeAllEventListeners = p.removeAllEventListeners, target.hasEventListener = p.hasEventListener, target.dispatchEvent = p.dispatchEvent
        }, p._listeners = null, p.initialize = function() {}, p.addEventListener = function(type, listener) {
            var listeners = this._listeners;
            listeners ? this.removeEventListener(type, listener) : listeners = this._listeners = {};
            var arr = listeners[type];
            return arr || (arr = listeners[type] = []), arr.push(listener), listener
        }, p.removeEventListener = function(type, listener) {
            var listeners = this._listeners;
            if (listeners) {
                var arr = listeners[type];
                if (arr)
                    for (var i = 0, l = arr.length; i < l; i++)
                        if (arr[i] == listener) {
                            1 == l ? delete listeners[type] : arr.splice(i, 1);
                            break
                        }
            }
        }, p.removeAllEventListeners = function(type) {
            type ? this._listeners && delete this._listeners[type] : this._listeners = null
        }, p.dispatchEvent = function(eventObj) {
            var ret = !1,
                listeners = this._listeners;
            if (eventObj && listeners) {
                var arr = listeners[eventObj.type];
                if (!arr) return ret;
                for (var i = 0, l = (arr = arr.slice()).length; i < l; i++) {
                    var o = arr[i];
                    ret = ret || o(eventObj)
                }
            }
            return !!ret
        }, p.hasEventListener = function(type) {
            var listeners = this._listeners;
            return !(!listeners || !listeners[type])
        }, (Proton.EventDispatcher = EventDispatcher).initialize(Proton.prototype), Proton.Event = function(pObj) {
            this.type = pObj.type, this.particle = pObj.particle, this.emitter = pObj.emitter
        };
        var Util = Util || {
            initValue: function(value, defaults) {
                return value = null != value && void 0 != value ? value : defaults
            },
            isArray: function(value) {
                return "object" == typeof value && value.hasOwnProperty("length")
            },
            destroyArray: function(array) {
                array.length = 0
            },
            destroyObject: function(obj) {
                for (var o in obj) delete obj[o]
            },
            getVector2D: function(postionOrX, y) {
                if ("object" == typeof postionOrX) return postionOrX;
                return new Proton.Vector2D(postionOrX, y)
            },
            judgeVector2D: function(pOBJ) {
                var result = "";
                return (pOBJ.hasOwnProperty("x") || pOBJ.hasOwnProperty("y") || pOBJ.hasOwnProperty("p") || pOBJ.hasOwnProperty("position")) && (result += "p"), (pOBJ.hasOwnProperty("vx") || pOBJ.hasOwnProperty("vx") || pOBJ.hasOwnProperty("v") || pOBJ.hasOwnProperty("velocity")) && (result += "v"), (pOBJ.hasOwnProperty("ax") || pOBJ.hasOwnProperty("ax") || pOBJ.hasOwnProperty("a") || pOBJ.hasOwnProperty("accelerate")) && (result += "a"), result
            },
            setVector2DByObject: function(target, pOBJ) {
                pOBJ.hasOwnProperty("x") && (target.p.x = pOBJ.x), pOBJ.hasOwnProperty("y") && (target.p.y = pOBJ.y), pOBJ.hasOwnProperty("vx") && (target.v.x = pOBJ.vx), pOBJ.hasOwnProperty("vy") && (target.v.y = pOBJ.vy), pOBJ.hasOwnProperty("ax") && (target.a.x = pOBJ.ax), pOBJ.hasOwnProperty("ay") && (target.a.y = pOBJ.ay), pOBJ.hasOwnProperty("p") && particle.p.copy(pOBJ.p), pOBJ.hasOwnProperty("v") && particle.v.copy(pOBJ.v), pOBJ.hasOwnProperty("a") && particle.a.copy(pOBJ.a), pOBJ.hasOwnProperty("position") && particle.p.copy(pOBJ.position), pOBJ.hasOwnProperty("velocity") && particle.v.copy(pOBJ.velocity), pOBJ.hasOwnProperty("accelerate") && particle.a.copy(pOBJ.accelerate)
            },
            addPrototypeByObject: function(target, prototypeObject, filters) {
                for (var singlePrototype in prototypeObject) filters ? filters.indexOf(singlePrototype) < 0 && (target[singlePrototype] = Proton.Util.getSpanValue(prototypeObject[singlePrototype])) : target[singlePrototype] = Proton.Util.getSpanValue(prototypeObject[singlePrototype]);
                return target
            },
            setPrototypeByObject: function(target, prototypeObject, filters) {
                for (var singlePrototype in prototypeObject) target.hasOwnProperty(singlePrototype) && (filters ? filters.indexOf(singlePrototype) < 0 && (target[singlePrototype] = Proton.Util.getSpanValue(prototypeObject[singlePrototype])) : target[singlePrototype] = Proton.Util.getSpanValue(prototypeObject[singlePrototype]));
                return target
            },
            setSpanValue: function(a, b, c) {
                return a instanceof Proton.Span ? a : b ? c ? new Proton.Span(a, b, c) : new Proton.Span(a, b) : new Proton.Span(a)
            },
            getSpanValue: function(pan) {
                return pan instanceof Proton.Span ? pan.getValue() : pan
            },
            inherits: function(subClass, superClass) {
                if (subClass._super_ = superClass, Object.create) subClass.prototype = Object.create(superClass.prototype, {
                    constructor: {
                        value: superClass
                    }
                });
                else {
                    var F = function() {};
                    F.prototype = superClass.prototype, subClass.prototype = new F, subClass.prototype.constructor = subClass
                }
            },
            getImageData: function(context, image, rect) {
                context.drawImage(image, rect.x, rect.y);
                var imagedata = context.getImageData(rect.x, rect.y, rect.width, rect.height);
                return context.clearRect(rect.x, rect.y, rect.width, rect.height), imagedata
            },
            getImage: function(img, particle, drawCanvas, fun) {
                "string" == typeof img ? this.loadAndSetImage(img, particle, drawCanvas, fun) : "object" == typeof img ? this.loadAndSetImage(img.src, particle, drawCanvas, fun) : img instanceof Image && this.loadedImage(img.src, particle, drawCanvas, fun, img)
            },
            loadedImage: function(src, particle, drawCanvas, fun, target) {
                if (particle.target = target, particle.transform.src = src, Proton.TextureBuffer[src] || (Proton.TextureBuffer[src] = particle.target), drawCanvas)
                    if (Proton.TextureCanvasBuffer[src]) particle.transform.canvas = Proton.TextureCanvasBuffer[src];
                    else {
                        var _width = Proton.WebGLUtil.nhpot(particle.target.width),
                            _height = Proton.WebGLUtil.nhpot(particle.target.height);
                        particle.transform.canvas = Proton.DomUtil.createCanvas("canvas" + src, _width, _height);
                        particle.transform.canvas.getContext("2d").drawImage(particle.target, 0, 0, particle.target.width, particle.target.height), Proton.TextureCanvasBuffer[src] = particle.transform.canvas
                    }
                fun && fun(particle)
            },
            loadAndSetImage: function(src, particle, drawCanvas, fun) {
                if (Proton.TextureBuffer[src]) this.loadedImage(src, particle, drawCanvas, fun, Proton.TextureBuffer[src]);
                else {
                    var self = this,
                        myImage = new Image;
                    myImage.onload = function(e) {
                        self.loadedImage(src, particle, drawCanvas, fun, e.target)
                    }, myImage.src = src
                }
            },
            hexToRGB: function(h) {
                var hex16 = "#" == h.charAt(0) ? h.substring(1, 7) : h;
                return {
                    r: parseInt(hex16.substring(0, 2), 16),
                    g: parseInt(hex16.substring(2, 4), 16),
                    b: parseInt(hex16.substring(4, 6), 16)
                }
            },
            rgbToHex: function(rbg) {
                return "rgb(" + rbg.r + ", " + rbg.g + ", " + rbg.b + ")"
            }
        };
        Proton.Util = Util;
        var WebGLUtil = WebGLUtil || {
            ipot: function(length) {
                return 0 == (length & length - 1)
            },
            nhpot: function(length) {
                --length;
                for (var i = 1; i < 32; i <<= 1) length |= length >> i;
                return length + 1
            },
            makeTranslation: function(tx, ty) {
                return [1, 0, 0, 0, 1, 0, tx, ty, 1]
            },
            makeRotation: function(angleInRadians) {
                var c = Math.cos(angleInRadians),
                    s = Math.sin(angleInRadians);
                return [c, -s, 0, s, c, 0, 0, 0, 1]
            },
            makeScale: function(sx, sy) {
                return [sx, 0, 0, 0, sy, 0, 0, 0, 1]
            },
            matrixMultiply: function(a, b) {
                var a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a10 = a[3],
                    a11 = a[4],
                    a12 = a[5],
                    a20 = a[6],
                    a21 = a[7],
                    a22 = a[8],
                    b00 = b[0],
                    b01 = b[1],
                    b02 = b[2],
                    b10 = b[3],
                    b11 = b[4],
                    b12 = b[5],
                    b20 = b[6],
                    b21 = b[7],
                    b22 = b[8];
                return [a00 * b00 + a01 * b10 + a02 * b20, a00 * b01 + a01 * b11 + a02 * b21, a00 * b02 + a01 * b12 + a02 * b22, a10 * b00 + a11 * b10 + a12 * b20, a10 * b01 + a11 * b11 + a12 * b21, a10 * b02 + a11 * b12 + a12 * b22, a20 * b00 + a21 * b10 + a22 * b20, a20 * b01 + a21 * b11 + a22 * b21, a20 * b02 + a21 * b12 + a22 * b22]
            }
        };
        Proton.WebGLUtil = WebGLUtil;
        var DomUtil = DomUtil || {
            createCanvas: function($id, $width, $height, $position) {
                var element = document.createElement("canvas"),
                    position = $position || "absolute";
                return element.id = $id, element.width = $width, element.height = $height, element.style.position = position, element.style.opacity = 0, this.transformDom(element, -500, -500, 0, 0), element
            },
            transformDom: function($div, $x, $y, $scale, $rotate) {
                $div.style.WebkitTransform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)", $div.style.MozTransform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)", $div.style.OTransform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)", $div.style.msTransform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)", $div.style.transform = "translate(" + $x + "px, " + $y + "px) scale(" + $scale + ") rotate(" + $rotate + "deg)"
            }
        };
        Proton.DomUtil = DomUtil, MStack.prototype.set = function(m, i) {
            0 == i ? Proton.Mat3.set(m, this.mats[0]) : Proton.Mat3.multiply(this.mats[i - 1], m, this.mats[i]), this.size = Math.max(this.size, i + 1)
        }, MStack.prototype.push = function(m) {
            0 == this.size ? Proton.Mat3.set(m, this.mats[0]) : Proton.Mat3.multiply(this.mats[this.size - 1], m, this.mats[this.size]), this.size++
        }, MStack.prototype.pop = function() {
            this.size > 0 && this.size--
        }, MStack.prototype.top = function() {
            return this.mats[this.size - 1]
        }, Proton.MStack = MStack, Particle.ID = 0, Particle.prototype = {
            getDirection: function() {
                return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI)
            },
            reset: function(init) {
                return this.life = 1 / 0, this.age = 0, this.energy = 1, this.dead = !1, this.sleep = !1, this.target = null, this.sprite = null, this.parent = null, this.mass = 1, this.radius = 10, this.alpha = 1, this.scale = 1, this.rotation = 0, this.color = null, this.easing = Proton.ease.setEasingByName(Proton.easeLinear), init ? (this.transform = {}, this.p = new Proton.Vector2D, this.v = new Proton.Vector2D, this.a = new Proton.Vector2D, this.old = {
                    p: new Proton.Vector2D,
                    v: new Proton.Vector2D,
                    a: new Proton.Vector2D
                }, this.behaviours = []) : (Proton.Util.destroyObject(this.transform), this.p.set(0, 0), this.v.set(0, 0), this.a.set(0, 0), this.old.p.set(0, 0), this.old.v.set(0, 0), this.old.a.set(0, 0), this.removeAllBehaviours()), this.transform.rgb = {
                    r: 255,
                    g: 255,
                    b: 255
                }, this
            },
            update: function(time, index) {
                if (!this.sleep) {
                    this.age += time;
                    var i, length = this.behaviours.length;
                    for (i = 0; i < length; i++) this.behaviours[i] && this.behaviours[i].applyBehaviour(this, time, index)
                }
                if (this.age >= this.life) this.destory();
                else {
                    var scale = this.easing(this.age / this.life);
                    this.energy = Math.max(1 - scale, 0)
                }
            },
            addBehaviour: function(behaviour) {
                this.behaviours.push(behaviour), behaviour.hasOwnProperty("parents") && behaviour.parents.push(this), behaviour.initialize(this)
            },
            addBehaviours: function(behaviours) {
                var i, length = behaviours.length;
                for (i = 0; i < length; i++) this.addBehaviour(behaviours[i])
            },
            removeBehaviour: function(behaviour) {
                var index = this.behaviours.indexOf(behaviour);
                if (index > -1) {
                    (behaviour = this.behaviours.splice(index, 1)).parents = null
                }
            },
            removeAllBehaviours: function() {
                Proton.Util.destroyArray(this.behaviours)
            },
            destory: function() {
                this.removeAllBehaviours(), this.energy = 0, this.dead = !0, this.parent = null
            }
        }, Proton.Particle = Particle, ParticlePool.prototype = {
            create: function(newTypeParticleClass) {
                return newTypeParticleClass ? new newTypeParticle : new Proton.Particle
            },
            getCount: function() {
                return this.poolList.length
            },
            add: function() {
                return this.poolList.push(this.create())
            },
            get: function() {
                return 0 === this.poolList.length ? this.create() : this.poolList.pop().reset()
            },
            set: function(particle) {
                if (this.poolList.length < Proton.POOL_MAX) return this.poolList.push(particle)
            },
            release: function() {
                for (var i = 0; i < this.poolList.length; i++) this.poolList[i].destory && this.poolList[i].destory(), delete this.poolList[i];
                this.poolList = []
            }
        }, Proton.ParticlePool = ParticlePool;
        var MathUtils = {
            randomAToB: function(a, b, INT) {
                return INT ? Math.floor(Math.random() * (b - a)) + a : a + Math.random() * (b - a)
            },
            randomFloating: function(center, f, INT) {
                return MathUtils.randomAToB(center - f, center + f, INT)
            },
            randomZone: function(display) {},
            degreeTransform: function(a) {
                return a * Math.PI / 180
            },
            toColor16: function(num) {
                return "#" + num.toString(16)
            },
            randomColor: function() {
                return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).slice(-6)
            }
        };
        Proton.MathUtils = MathUtils;
        var NumericalIntegration = function(type) {
            this.type = Proton.Util.initValue(type, Proton.EULER)
        };
        NumericalIntegration.prototype = {
            integrate: function(particles, time, damping) {
                this.eulerIntegrate(particles, time, damping)
            },
            eulerIntegrate: function(particle, time, damping) {
                particle.sleep || (particle.old.p.copy(particle.p), particle.old.v.copy(particle.v), particle.a.multiplyScalar(1 / particle.mass), particle.v.add(particle.a.multiplyScalar(time)), particle.p.add(particle.old.v.multiplyScalar(time)), damping && particle.v.multiplyScalar(damping), particle.a.clear())
            }
        }, Proton.NumericalIntegration = NumericalIntegration;
        var Vector2D = function(x, y) {
            this.x = x || 0, this.y = y || 0
        };
        Vector2D.prototype = {
            set: function(x, y) {
                return this.x = x, this.y = y, this
            },
            setX: function(x) {
                return this.x = x, this
            },
            setY: function(y) {
                return this.y = y, this
            },
            setComponent: function(index, value) {
                switch (index) {
                    case 0:
                        this.x = value;
                        break;
                    case 1:
                        this.y = value;
                        break;
                    default:
                        throw new Error("index is out of range: " + index)
                }
            },
            getGradient: function() {
                return 0 != this.x ? Math.atan2(this.y, this.x) : this.y > 0 ? Math.PI / 2 : this.y < 0 ? -Math.PI / 2 : void 0
            },
            getComponent: function(index) {
                switch (index) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + index)
                }
            },
            copy: function(v) {
                return this.x = v.x, this.y = v.y, this
            },
            add: function(v, w) {
                return void 0 !== w ? this.addVectors(v, w) : (this.x += v.x, this.y += v.y, this)
            },
            addXY: function(a, b) {
                return this.x += a, this.y += b, this
            },
            addVectors: function(a, b) {
                return this.x = a.x + b.x, this.y = a.y + b.y, this
            },
            addScalar: function(s) {
                return this.x += s, this.y += s, this
            },
            sub: function(v, w) {
                return void 0 !== w ? this.subVectors(v, w) : (this.x -= v.x, this.y -= v.y, this)
            },
            subVectors: function(a, b) {
                return this.x = a.x - b.x, this.y = a.y - b.y, this
            },
            multiplyScalar: function(s) {
                return this.x *= s, this.y *= s, this
            },
            divideScalar: function(s) {
                return 0 !== s ? (this.x /= s, this.y /= s) : this.set(0, 0), this
            },
            min: function(v) {
                return this.x > v.x && (this.x = v.x), this.y > v.y && (this.y = v.y), this
            },
            max: function(v) {
                return this.x < v.x && (this.x = v.x), this.y < v.y && (this.y = v.y), this
            },
            clamp: function(min, max) {
                return this.x < min.x ? this.x = min.x : this.x > max.x && (this.x = max.x), this.y < min.y ? this.y = min.y : this.y > max.y && (this.y = max.y), this
            },
            negate: function() {
                return this.multiplyScalar(-1)
            },
            dot: function(v) {
                return this.x * v.x + this.y * v.y
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            distanceTo: function(v) {
                return Math.sqrt(this.distanceToSquared(v))
            },
            rotate: function(tha) {
                var x = this.x,
                    y = this.y;
                return this.x = x * Math.cos(tha) + y * Math.sin(tha), this.y = -x * Math.sin(tha) + y * Math.cos(tha), this
            },
            distanceToSquared: function(v) {
                var dx = this.x - v.x,
                    dy = this.y - v.y;
                return dx * dx + dy * dy
            },
            setLength: function(l) {
                var oldLength = this.length();
                return 0 !== oldLength && l !== oldLength && this.multiplyScalar(l / oldLength), this
            },
            lerp: function(v, alpha) {
                return this.x += (v.x - this.x) * alpha, this.y += (v.y - this.y) * alpha, this
            },
            equals: function(v) {
                return v.x === this.x && v.y === this.y
            },
            toArray: function() {
                return [this.x, this.y]
            },
            clear: function() {
                return this.x = 0, this.y = 0, this
            },
            clone: function() {
                return new Proton.Vector2D(this.x, this.y)
            }
        }, Proton.Vector2D = Vector2D;
        var Polar2D = function(r, tha) {
            this.r = Math.abs(r) || 0, this.tha = tha || 0
        };
        Polar2D.prototype = {
            set: function(r, tha) {
                return this.r = r, this.tha = tha, this
            },
            setR: function(r) {
                return this.r = r, this
            },
            setTha: function(tha) {
                return this.tha = tha, this
            },
            copy: function(p) {
                return this.r = p.r, this.tha = p.tha, this
            },
            toVector: function() {
                return new Proton.Vector2D(this.getX(), this.getY())
            },
            getX: function() {
                return this.r * Math.sin(this.tha)
            },
            getY: function() {
                return -this.r * Math.cos(this.tha)
            },
            normalize: function() {
                return this.r = 1, this
            },
            equals: function(v) {
                return v.r === this.r && v.tha === this.tha
            },
            toArray: function() {
                return [this.r, this.tha]
            },
            clear: function() {
                return this.r = 0, this.tha = 0, this
            },
            clone: function() {
                return new Proton.Polar2D(this.r, this.tha)
            }
        }, Proton.Polar2D = Polar2D, Span.prototype = {
            getValue: function(INT) {
                return this.isArray ? this.a[Math.floor(this.a.length * Math.random())] : this.center ? Proton.MathUtils.randomFloating(this.a, this.b, INT) : Proton.MathUtils.randomAToB(this.a, this.b, INT)
            }
        }, Proton.Span = Span, Proton.getSpan = function(a, b, center) {
            return new Proton.Span(a, b, center)
        }, Proton.Util.inherits(ColorSpan, Proton.Span), ColorSpan.prototype.getValue = function() {
            var color = this.colorArr[Math.floor(this.colorArr.length * Math.random())];
            return "random" == color || "Random" == color ? Proton.MathUtils.randomColor() : color
        }, Proton.ColorSpan = ColorSpan, Rectangle.prototype = {
            contains: function(x, y) {
                return x <= this.right && x >= this.x && y <= this.bottom && y >= this.y
            }
        }, Proton.Rectangle = Rectangle;
        var Mat3 = Mat3 || {
            create: function(mat3) {
                var mat = new Float32Array(9);
                return mat3 && this.set(mat3, mat), mat
            },
            set: function(mat1, mat2) {
                for (var i = 0; i < 9; i++) mat2[i] = mat1[i];
                return mat2
            },
            multiply: function(mat, mat2, mat3) {
                var a00 = mat[0],
                    a01 = mat[1],
                    a02 = mat[2],
                    a10 = mat[3],
                    a11 = mat[4],
                    a20 = mat[6],
                    a21 = mat[7],
                    b00 = mat2[0],
                    b01 = mat2[1],
                    b02 = mat2[2],
                    b10 = mat2[3],
                    b11 = mat2[4],
                    b20 = mat2[6],
                    b21 = mat2[7];
                return mat3[0] = b00 * a00 + b01 * a10, mat3[1] = b00 * a01 + b01 * a11, mat3[2] = a02 * b02, mat3[3] = b10 * a00 + b11 * a10, mat3[4] = b10 * a01 + b11 * a11, mat3[6] = b20 * a00 + b21 * a10 + a20, mat3[7] = b20 * a01 + b21 * a11 + a21, mat3
            },
            inverse: function(mat, mat3) {
                var id, a00 = mat[0],
                    a01 = mat[1],
                    a10 = mat[3],
                    a11 = mat[4],
                    a20 = mat[6],
                    a21 = mat[7],
                    b01 = a11,
                    b11 = -a10,
                    b21 = a21 * a10 - a11 * a20;
                return id = 1 / (a00 * b01 + a01 * b11), mat3[0] = b01 * id, mat3[1] = -a01 * id, mat3[3] = b11 * id, mat3[4] = a00 * id, mat3[6] = b21 * id, mat3[7] = (-a21 * a00 + a01 * a20) * id, mat3
            },
            multiplyVec2: function(m, vec, mat3) {
                var x = vec[0],
                    y = vec[1];
                return mat3[0] = x * m[0] + y * m[3] + m[6], mat3[1] = x * m[1] + y * m[4] + m[7], mat3
            }
        };
        Proton.Mat3 = Mat3, Behaviour.id = 0, Behaviour.prototype = {
            reset: function(life, easing) {
                this.life = Proton.Util.initValue(life, 1 / 0), this.easing = Proton.Util.initValue(easing, Proton.ease.setEasingByName(Proton.easeLinear))
            },
            normalizeForce: function(force) {
                return force.multiplyScalar(Proton.MEASURE)
            },
            normalizeValue: function(value) {
                return value * Proton.MEASURE
            },
            initialize: function(particle) {},
            applyBehaviour: function(particle, time, index) {
                if (this.age += time, this.age >= this.life || this.dead) this.energy = 0, this.dead = !0, this.destory();
                else {
                    var scale = this.easing(particle.age / particle.life);
                    this.energy = Math.max(1 - scale, 0)
                }
            },
            destory: function() {
                var i, length = this.parents.length;
                for (i = 0; i < length; i++) this.parents[i].removeBehaviour(this);
                this.parents = []
            }
        }, Proton.Behaviour = Behaviour, Rate.prototype = {
            init: function() {
                this.startTime = 0, this.nextTime = this.timePan.getValue()
            },
            getValue: function(time) {
                return this.startTime += time, this.startTime >= this.nextTime ? (this.startTime = 0, this.nextTime = this.timePan.getValue(), 1 == this.numPan.b ? this.numPan.getValue(!1) > .5 ? 1 : 0 : this.numPan.getValue(!0)) : 0
            }
        }, Proton.Rate = Rate, Initialize.prototype.reset = function() {}, Initialize.prototype.init = function(emitter, particle) {
            particle ? this.initialize(particle) : this.initialize(emitter)
        }, Initialize.prototype.initialize = function(target) {}, Proton.Initialize = Initialize;
        Proton.InitializeUtil = {
            initialize: function(emitter, particle, initializes) {
                var i, length = initializes.length;
                for (i = 0; i < length; i++) initializes[i] instanceof Proton.Initialize ? initializes[i].init(emitter, particle) : Proton.InitializeUtil.init(emitter, particle, initializes[i]);
                Proton.InitializeUtil.bindEmitter(emitter, particle)
            },
            init: function(emitter, particle, initialize) {
                Proton.Util.setPrototypeByObject(particle, initialize), Proton.Util.setVector2DByObject(particle, initialize)
            },
            bindEmitter: function(emitter, particle) {
                emitter.bindEmitter && (particle.p.add(emitter.p), particle.v.add(emitter.v), particle.a.add(emitter.a), particle.v.rotate(Proton.MathUtils.degreeTransform(emitter.rotation)))
            }
        }, Proton.Util.inherits(Life, Proton.Initialize), Life.prototype.initialize = function(target) {
            this.lifePan.a == 1 / 0 ? target.life = 1 / 0 : target.life = this.lifePan.getValue()
        }, Proton.Life = Life, Proton.Util.inherits(Position, Proton.Initialize), Position.prototype.reset = function(zone) {
            this.zone = Proton.Util.initValue(zone, new Proton.PointZone)
        }, Position.prototype.initialize = function(target) {
            this.zone.getPosition(), target.p.x = this.zone.vector.x, target.p.y = this.zone.vector.y
        }, Proton.Position = Position, Proton.P = Position, Proton.Util.inherits(Velocity, Proton.Initialize), Velocity.prototype.reset = function(rpan, thapan, type) {
            this.rPan = Proton.Util.setSpanValue(rpan), this.thaPan = Proton.Util.setSpanValue(thapan), this.type = Proton.Util.initValue(type, "vector")
        }, Velocity.prototype.normalizeVelocity = function(vr) {
            return vr * Proton.MEASURE
        }, Velocity.prototype.initialize = function(target) {
            if ("p" == this.type || "P" == this.type || "polar" == this.type) {
                var polar2d = new Proton.Polar2D(this.normalizeVelocity(this.rPan.getValue()), this.thaPan.getValue() * Math.PI / 180);
                target.v.x = polar2d.getX(), target.v.y = polar2d.getY()
            } else target.v.x = this.normalizeVelocity(this.rPan.getValue()), target.v.y = this.normalizeVelocity(this.thaPan.getValue())
        }, Proton.Velocity = Velocity, Proton.V = Velocity, Proton.Util.inherits(Mass, Proton.Initialize), Mass.prototype.initialize = function(target) {
            target.mass = this.massPan.getValue()
        }, Proton.Mass = Mass, Proton.Util.inherits(Radius, Proton.Initialize), Radius.prototype.reset = function(a, b, c) {
            this.radius = Proton.Util.setSpanValue(a, b, c)
        }, Radius.prototype.initialize = function(particle) {
            particle.radius = this.radius.getValue(), particle.transform.oldRadius = particle.radius
        }, Proton.Radius = Radius, Proton.Util.inherits(ImageTarget, Proton.Initialize), ImageTarget.prototype.initialize = function(particle) {
            var imagetarget = this.image.getValue();
            particle.target = "string" == typeof imagetarget ? {
                width: this.w,
                height: this.h,
                src: imagetarget
            } : imagetarget
        }, ImageTarget.prototype.setSpanValue = function(color) {
            return color instanceof Proton.ColorSpan ? color : new Proton.ColorSpan(color)
        }, Proton.ImageTarget = ImageTarget, Proton.Util.inherits(Force, Proton.Behaviour), Force.prototype.reset = function(fx, fy, life, easing) {
            this.force = this.normalizeForce(new Proton.Vector2D(fx, fy)), life && Force._super_.prototype.reset.call(this, life, easing)
        }, Force.prototype.applyBehaviour = function(particle, time, index) {
            Force._super_.prototype.applyBehaviour.call(this, particle, time, index), particle.a.add(this.force)
        }, Proton.Force = Force, Proton.F = Force, Proton.Util.inherits(Attraction, Proton.Behaviour), Attraction.prototype.reset = function(targetPosition, force, radius, life, easing) {
            this.targetPosition = Proton.Util.initValue(targetPosition, new Proton.Vector2D), this.radius = Proton.Util.initValue(radius, 1e3), this.force = Proton.Util.initValue(this.normalizeValue(force), 100), this.radiusSq = this.radius * this.radius, this.attractionForce = new Proton.Vector2D, this.lengthSq = 0, life && Attraction._super_.prototype.reset.call(this, life, easing)
        }, Attraction.prototype.applyBehaviour = function(particle, time, index) {
            Attraction._super_.prototype.applyBehaviour.call(this, particle, time, index), this.attractionForce.copy(this.targetPosition), this.attractionForce.sub(particle.p), this.lengthSq = this.attractionForce.lengthSq(), this.lengthSq > 4e-6 && this.lengthSq < this.radiusSq && (this.attractionForce.normalize(), this.attractionForce.multiplyScalar(1 - this.lengthSq / this.radiusSq), this.attractionForce.multiplyScalar(this.force), particle.a.add(this.attractionForce))
        }, Proton.Attraction = Attraction, Proton.Util.inherits(RandomDrift, Proton.Behaviour), RandomDrift.prototype.reset = function(driftX, driftY, delay, life, easing) {
            this.panFoce = new Proton.Vector2D(driftX, driftY), this.panFoce = this.normalizeForce(this.panFoce), this.delay = delay, life && RandomDrift._super_.prototype.reset.call(this, life, easing)
        }, RandomDrift.prototype.applyBehaviour = function(particle, time, index) {
            RandomDrift._super_.prototype.applyBehaviour.call(this, particle, time, index), this.time += time, this.time >= this.delay && (particle.a.addXY(Proton.MathUtils.randomAToB(-this.panFoce.x, this.panFoce.x), Proton.MathUtils.randomAToB(-this.panFoce.y, this.panFoce.y)), this.time = 0)
        }, Proton.RandomDrift = RandomDrift, Proton.Util.inherits(Repulsion, Proton.Attraction), Repulsion.prototype.reset = function(targetPosition, force, radius, life, easing) {
            Repulsion._super_.prototype.reset.call(this, targetPosition, force, radius, life, easing), this.force *= -1
        }, Proton.Repulsion = Repulsion, Proton.Util.inherits(Gravity, Proton.Force), Gravity.prototype.reset = function(g, life, easing) {
            Gravity._super_.prototype.reset.call(this, 0, g, life, easing)
        }, Proton.Gravity = Gravity, Proton.G = Gravity, Proton.Util.inherits(Collision, Proton.Behaviour), Collision.prototype.reset = function(emitter, mass, callback, life, easing) {
            this.emitter = Proton.Util.initValue(emitter, null), this.mass = Proton.Util.initValue(mass, !0), this.callback = Proton.Util.initValue(callback, null), this.collisionPool = [], this.delta = new Proton.Vector2D, life && Collision._super_.prototype.reset.call(this, life, easing)
        }, Collision.prototype.applyBehaviour = function(particle, time, index) {
            for (var otherParticle, lengthSq, overlap, averageMass1, averageMass2, newPool = this.emitter ? this.emitter.particles.slice(index) : this.pool.slice(index), length = newPool.length, i = 0; i < length; i++)(otherParticle = newPool[i]) !== particle && (this.delta.copy(otherParticle.p), this.delta.sub(particle.p), lengthSq = this.delta.lengthSq(), distance = particle.radius + otherParticle.radius, lengthSq <= distance * distance && (overlap = distance - Math.sqrt(lengthSq), overlap += .5, totalMass = particle.mass + otherParticle.mass, averageMass1 = this.mass ? otherParticle.mass / totalMass : .5, averageMass2 = this.mass ? particle.mass / totalMass : .5, particle.p.add(this.delta.clone().normalize().multiplyScalar(overlap * -averageMass1)), otherParticle.p.add(this.delta.normalize().multiplyScalar(overlap * averageMass2)), this.callback && this.callback(particle, otherParticle)))
        }, Proton.Collision = Collision, Proton.Util.inherits(CrossZone, Proton.Behaviour), CrossZone.prototype.reset = function(zone, crossType, life, easing) {
            this.zone = zone, this.zone.crossType = Proton.Util.initValue(crossType, "dead"), life && CrossZone._super_.prototype.reset.call(this, life, easing)
        }, CrossZone.prototype.applyBehaviour = function(particle, time, index) {
            CrossZone._super_.prototype.applyBehaviour.call(this, particle, time, index), this.zone.crossing(particle)
        }, Proton.CrossZone = CrossZone, Proton.Util.inherits(Alpha, Proton.Behaviour), Alpha.prototype.reset = function(a, b, life, easing) {
            this.same = null == b || void 0 == b, this.a = Proton.Util.setSpanValue(Proton.Util.initValue(a, 1)), this.b = Proton.Util.setSpanValue(b), life && Alpha._super_.prototype.reset.call(this, life, easing)
        }, Alpha.prototype.initialize = function(particle) {
            particle.transform.alphaA = this.a.getValue(), this.same ? particle.transform.alphaB = particle.transform.alphaA : particle.transform.alphaB = this.b.getValue()
        }, Alpha.prototype.applyBehaviour = function(particle, time, index) {
            Alpha._super_.prototype.applyBehaviour.call(this, particle, time, index), particle.alpha = particle.transform.alphaB + (particle.transform.alphaA - particle.transform.alphaB) * this.energy, particle.alpha < .001 && (particle.alpha = 0)
        }, Proton.Alpha = Alpha, Proton.Util.inherits(Scale, Proton.Behaviour), Scale.prototype.reset = function(a, b, life, easing) {
            this.same = null == b || void 0 == b, this.a = Proton.Util.setSpanValue(Proton.Util.initValue(a, 1)), this.b = Proton.Util.setSpanValue(b), life && Scale._super_.prototype.reset.call(this, life, easing)
        }, Scale.prototype.initialize = function(particle) {
            particle.transform.scaleA = this.a.getValue(), particle.transform.oldRadius = particle.radius, this.same ? particle.transform.scaleB = particle.transform.scaleA : particle.transform.scaleB = this.b.getValue()
        }, Scale.prototype.applyBehaviour = function(particle, time, index) {
            Scale._super_.prototype.applyBehaviour.call(this, particle, time, index), particle.scale = particle.transform.scaleB + (particle.transform.scaleA - particle.transform.scaleB) * this.energy, particle.scale < 1e-4 && (particle.scale = 0), particle.radius = particle.transform.oldRadius * particle.scale
        }, Proton.Scale = Scale, Proton.Util.inherits(Rotate, Proton.Behaviour), Rotate.prototype.reset = function(a, b, style, life, easing) {
            this.same = null == b || void 0 == b, this.a = Proton.Util.setSpanValue(Proton.Util.initValue(a, "Velocity")), this.b = Proton.Util.setSpanValue(Proton.Util.initValue(b, 0)), this.style = Proton.Util.initValue(style, "to"), life && Rotate._super_.prototype.reset.call(this, life, easing)
        }, Rotate.prototype.initialize = function(particle) {
            particle.rotation = this.a.getValue(), particle.transform.rotationA = this.a.getValue(), this.same || (particle.transform.rotationB = this.b.getValue())
        }, Rotate.prototype.applyBehaviour = function(particle, time, index) {
            Rotate._super_.prototype.applyBehaviour.call(this, particle, time, index), this.same ? "V" != this.a.a && "Velocity" != this.a.a && "v" != this.a.a || (particle.rotation = particle.getDirection()) : "to" == this.style || "TO" == this.style || "_" == this.style ? particle.rotation += particle.transform.rotationB + (particle.transform.rotationA - particle.transform.rotationB) * this.energy : particle.rotation += particle.transform.rotationB
        }, Proton.Rotate = Rotate, Proton.Util.inherits(Color, Proton.Behaviour), Color.prototype.reset = function(color1, color2, life, easing) {
            this.color1 = this.setSpanValue(color1), this.color2 = this.setSpanValue(color2), life && Color._super_.prototype.reset.call(this, life, easing)
        }, Color.prototype.initialize = function(particle) {
            particle.color = this.color1.getValue(), particle.transform.beginRGB = Proton.Util.hexToRGB(particle.color), this.color2 && (particle.transform.endRGB = Proton.Util.hexToRGB(this.color2.getValue()))
        }, Color.prototype.applyBehaviour = function(particle, time, index) {
            this.color2 ? (Color._super_.prototype.applyBehaviour.call(this, particle, time, index), particle.transform.rgb.r = particle.transform.endRGB.r + (particle.transform.beginRGB.r - particle.transform.endRGB.r) * this.energy, particle.transform.rgb.g = particle.transform.endRGB.g + (particle.transform.beginRGB.g - particle.transform.endRGB.g) * this.energy, particle.transform.rgb.b = particle.transform.endRGB.b + (particle.transform.beginRGB.b - particle.transform.endRGB.b) * this.energy, particle.transform.rgb.r = parseInt(particle.transform.rgb.r, 10), particle.transform.rgb.g = parseInt(particle.transform.rgb.g, 10), particle.transform.rgb.b = parseInt(particle.transform.rgb.b, 10)) : (particle.transform.rgb.r = particle.transform.beginRGB.r, particle.transform.rgb.g = particle.transform.beginRGB.g, particle.transform.rgb.b = particle.transform.beginRGB.b)
        }, Color.prototype.setSpanValue = function(color) {
            return color ? color instanceof Proton.ColorSpan ? color : new Proton.ColorSpan(color) : null
        }, Proton.Color = Color, Proton.Util.inherits(GravityWell, Proton.Behaviour), GravityWell.prototype.reset = function(centerPoint, force, life, easing) {
            this.distanceVec = new Proton.Vector2D, this.centerPoint = Proton.Util.initValue(centerPoint, new Proton.Vector2D), this.force = Proton.Util.initValue(this.normalizeValue(force), 100), life && GravityWell._super_.prototype.reset.call(this, life, easing)
        }, GravityWell.prototype.initialize = function(particle) {}, GravityWell.prototype.applyBehaviour = function(particle, time, index) {
            this.distanceVec.set(this.centerPoint.x - particle.p.x, this.centerPoint.y - particle.p.y);
            var distanceSq = this.distanceVec.lengthSq();
            if (0 != distanceSq) {
                var distance = this.distanceVec.length(),
                    factor = this.force * time / (distanceSq * distance);
                particle.v.x += factor * this.distanceVec.x, particle.v.y += factor * this.distanceVec.y
            }
        }, Proton.GravityWell = GravityWell, Emitter.ID = 0, Proton.Util.inherits(Emitter, Proton.Particle), Proton.EventDispatcher.initialize(Emitter.prototype), Emitter.prototype.emit = function(emitTime, life) {
            this.emitTime = 0, this.emitTotalTimes = Proton.Util.initValue(emitTime, 1 / 0), 1 == life || "life" == life || "destroy" == life ? this.life = "once" == emitTime ? 1 : this.emitTotalTimes : isNaN(life) || (this.life = life), this.rate.init()
        }, Emitter.prototype.stopEmit = function() {
            this.emitTotalTimes = -1, this.emitTime = 0
        }, Emitter.prototype.removeAllParticles = function() {
            for (var i = 0; i < this.particles.length; i++) this.particles[i].dead = !0
        }, Emitter.prototype.createParticle = function(initialize, behaviour) {
            var particle = Proton.pool.get();
            return this.setupParticle(particle, initialize, behaviour), this.dispatchEvent(new Proton.Event({
                type: Proton.PARTICLE_CREATED,
                particle: particle
            })), particle
        }, Emitter.prototype.addSelfInitialize = function(pObj) {
            pObj.init ? pObj.init(this) : this.initAll()
        }, Emitter.prototype.addInitialize = function() {
            var i, length = arguments.length;
            for (i = 0; i < length; i++) this.initializes.push(arguments[i])
        }, Emitter.prototype.removeInitialize = function(initializer) {
            var index = this.initializes.indexOf(initializer);
            index > -1 && this.initializes.splice(index, 1)
        }, Emitter.prototype.removeInitializers = function() {
            Proton.Util.destroyArray(this.initializes)
        }, Emitter.prototype.addBehaviour = function() {
            var i, length = arguments.length;
            for (i = 0; i < length; i++) this.behaviours.push(arguments[i]), arguments[i].hasOwnProperty("parents") && arguments[i].parents.push(this)
        }, Emitter.prototype.removeBehaviour = function(behaviour) {
            var index = this.behaviours.indexOf(behaviour);
            index > -1 && this.behaviours.splice(index, 1)
        }, Emitter.prototype.removeAllBehaviours = function() {
            Proton.Util.destroyArray(this.behaviours)
        }, Emitter.prototype.integrate = function(time) {
            var damping = 1 - this.damping;
            Proton.integrator.integrate(this, time, damping);
            var i, length = this.particles.length;
            for (i = 0; i < length; i++) {
                var particle = this.particles[i];
                particle.update(time, i), Proton.integrator.integrate(particle, time, damping), this.dispatchEvent(new Proton.Event({
                    type: Proton.PARTICLE_UPDATE,
                    particle: particle
                }))
            }
        }, Emitter.prototype.emitting = function(time) {
            if ("once" == this.emitTotalTimes) {
                var length = this.rate.getValue(99999);
                for (i = 0; i < length; i++) this.createParticle();
                this.emitTotalTimes = "none"
            } else if (!isNaN(this.emitTotalTimes) && (this.emitTime += time, this.emitTime < this.emitTotalTimes)) {
                var i;
                length = this.rate.getValue(time);
                for (i = 0; i < length; i++) this.createParticle()
            }
        }, Emitter.prototype.update = function(time) {
            this.age += time, (this.age >= this.life || this.dead) && this.destroy(), this.emitting(time), this.integrate(time);
            var particle, k;
            for (k = this.particles.length - 1; k >= 0; k--)(particle = this.particles[k]).dead && (Proton.pool.set(particle), this.particles.splice(k, 1), this.dispatchEvent(new Proton.Event({
                type: Proton.PARTICLE_DEAD,
                particle: particle
            })))
        }, Emitter.prototype.setupParticle = function(particle, initialize, behaviour) {
            var initializes = this.initializes,
                behaviours = this.behaviours;
            initialize && (initializes = initialize instanceof Array ? initialize : [initialize]), behaviour && (behaviours = behaviour instanceof Array ? behaviour : [behaviour]), Proton.InitializeUtil.initialize(this, particle, initializes), particle.addBehaviours(behaviours), particle.parent = this, this.particles.push(particle)
        }, Emitter.prototype.destroy = function() {
            this.dead = !0, this.emitTotalTimes = -1, 0 == this.particles.length && (this.removeInitializers(), this.removeAllBehaviours(), this.parent && this.parent.removeEmitter(this))
        }, Proton.Emitter = Emitter, Proton.Util.inherits(BehaviourEmitter, Proton.Emitter), BehaviourEmitter.prototype.addSelfBehaviour = function() {
            var i, length = arguments.length;
            for (i = 0; i < length; i++) this.selfBehaviours.push(arguments[i])
        }, BehaviourEmitter.prototype.removeSelfBehaviour = function(behaviour) {
            var index = this.selfBehaviours.indexOf(behaviour);
            index > -1 && this.selfBehaviours.splice(index, 1)
        }, BehaviourEmitter.prototype.update = function(time) {
            if (BehaviourEmitter._super_.prototype.update.call(this, time), !this.sleep) {
                var i, length = this.selfBehaviours.length;
                for (i = 0; i < length; i++) this.selfBehaviours[i].applyBehaviour(this, time, i)
            }
        }, Proton.BehaviourEmitter = BehaviourEmitter, Proton.Util.inherits(FollowEmitter, Proton.Emitter), FollowEmitter.prototype.initEventHandler = function() {
            var self = this;
            this.mousemoveHandler = function(e) {
                self.mousemove.call(self, e)
            }, this.mousedownHandler = function(e) {
                self.mousedown.call(self, e)
            }, this.mouseupHandler = function(e) {
                self.mouseup.call(self, e)
            }, this.mouseTarget.addEventListener("mousemove", this.mousemoveHandler, !1)
        }, FollowEmitter.prototype.emit = function() {
            this._allowEmitting = !0
        }, FollowEmitter.prototype.stopEmit = function() {
            this._allowEmitting = !1
        }, FollowEmitter.prototype.mousemove = function(e) {
            e.layerX || 0 == e.layerX ? (this.p.x += (e.layerX - this.p.x) * this.ease, this.p.y += (e.layerY - this.p.y) * this.ease) : (e.offsetX || 0 == e.offsetX) && (this.p.x += (e.offsetX - this.p.x) * this.ease, this.p.y += (e.offsetY - this.p.y) * this.ease), this._allowEmitting && FollowEmitter._super_.prototype.emit.call(this, "once")
        }, FollowEmitter.prototype.destroy = function() {
            FollowEmitter._super_.prototype.destroy.call(this), this.mouseTarget.removeEventListener("mousemove", this.mousemoveHandler, !1)
        }, Proton.FollowEmitter = FollowEmitter;
        var ease = ease || {
            easeLinear: function(value) {
                return value
            },
            easeInQuad: function(value) {
                return Math.pow(value, 2)
            },
            easeOutQuad: function(value) {
                return -(Math.pow(value - 1, 2) - 1)
            },
            easeInOutQuad: function(value) {
                return (value /= .5) < 1 ? .5 * Math.pow(value, 2) : -.5 * ((value -= 2) * value - 2)
            },
            easeInCubic: function(value) {
                return Math.pow(value, 3)
            },
            easeOutCubic: function(value) {
                return Math.pow(value - 1, 3) + 1
            },
            easeInOutCubic: function(value) {
                return (value /= .5) < 1 ? .5 * Math.pow(value, 3) : .5 * (Math.pow(value - 2, 3) + 2)
            },
            easeInQuart: function(value) {
                return Math.pow(value, 4)
            },
            easeOutQuart: function(value) {
                return -(Math.pow(value - 1, 4) - 1)
            },
            easeInOutQuart: function(value) {
                return (value /= .5) < 1 ? .5 * Math.pow(value, 4) : -.5 * ((value -= 2) * Math.pow(value, 3) - 2)
            },
            easeInSine: function(value) {
                return 1 - Math.cos(value * (Math.PI / 2))
            },
            easeOutSine: function(value) {
                return Math.sin(value * (Math.PI / 2))
            },
            easeInOutSine: function(value) {
                return -.5 * (Math.cos(Math.PI * value) - 1)
            },
            easeInExpo: function(value) {
                return 0 === value ? 0 : Math.pow(2, 10 * (value - 1))
            },
            easeOutExpo: function(value) {
                return 1 === value ? 1 : 1 - Math.pow(2, -10 * value)
            },
            easeInOutExpo: function(value) {
                return 0 === value ? 0 : 1 === value ? 1 : (value /= .5) < 1 ? .5 * Math.pow(2, 10 * (value - 1)) : .5 * (2 - Math.pow(2, -10 * --value))
            },
            easeInCirc: function(value) {
                return -(Math.sqrt(1 - value * value) - 1)
            },
            easeOutCirc: function(value) {
                return Math.sqrt(1 - Math.pow(value - 1, 2))
            },
            easeInOutCirc: function(value) {
                return (value /= .5) < 1 ? -.5 * (Math.sqrt(1 - value * value) - 1) : .5 * (Math.sqrt(1 - (value -= 2) * value) + 1)
            },
            easeInBack: function(value) {
                var s = 1.70158;
                return value * value * ((s + 1) * value - s)
            },
            easeOutBack: function(value) {
                var s = 1.70158;
                return (value -= 1) * value * ((s + 1) * value + s) + 1
            },
            easeInOutBack: function(value) {
                var s = 1.70158;
                return (value /= .5) < 1 ? value * value * ((1 + (s *= 1.525)) * value - s) * .5 : .5 * ((value -= 2) * value * ((1 + (s *= 1.525)) * value + s) + 2)
            },
            setEasingByName: function(name) {
                switch (name) {
                    case "easeLinear":
                        return Proton.ease.easeLinear;
                    case "easeInQuad":
                        return Proton.ease.easeInQuad;
                    case "easeOutQuad":
                        return Proton.ease.easeOutQuad;
                    case "easeInOutQuad":
                        return Proton.ease.easeInOutQuad;
                    case "easeInCubic":
                        return Proton.ease.easeInCubic;
                    case "easeOutCubic":
                        return Proton.ease.easeOutCubic;
                    case "easeInOutCubic":
                        return Proton.ease.easeInOutCubic;
                    case "easeInQuart":
                        return Proton.ease.easeInQuart;
                    case "easeOutQuart":
                        return Proton.ease.easeOutQuart;
                    case "easeInOutQuart":
                        return Proton.ease.easeInOutQuart;
                    case "easeInSine":
                        return Proton.ease.easeInSine;
                    case "easeOutSine":
                        return Proton.ease.easeOutSine;
                    case "easeInOutSine":
                        return Proton.ease.easeInOutSine;
                    case "easeInExpo":
                        return Proton.ease.easeInExpo;
                    case "easeOutExpo":
                        return Proton.ease.easeOutExpo;
                    case "easeInOutExpo":
                        return Proton.ease.easeInOutExpo;
                    case "easeInCirc":
                        return Proton.ease.easeInCirc;
                    case "easeOutCirc":
                        return Proton.ease.easeOutCirc;
                    case "easeInOutCirc":
                        return Proton.ease.easeInOutCirc;
                    case "easeInBack":
                        return Proton.ease.easeInBack;
                    case "easeOutBack":
                        return Proton.ease.easeOutBack;
                    case "easeInOutBack":
                        return Proton.ease.easeInOutBack;
                    default:
                        return Proton.ease.easeLinear
                }
            }
        };
        Proton.ease = ease, Proton.easeLinear = "easeLinear", Proton.easeInQuad = "easeInQuad", Proton.easeOutQuad = "easeOutQuad", Proton.easeInOutQuad = "easeInOutQuad", Proton.easeInCubic = "easeInCubic", Proton.easeOutCubic = "easeOutCubic", Proton.easeInOutCubic = "easeInOutCubic", Proton.easeInQuart = "easeInQuart", Proton.easeOutQuart = "easeOutQuart", Proton.easeInOutQuart = "easeInOutQuart", Proton.easeInSine = "easeInSine", Proton.easeOutSine = "easeOutSine", Proton.easeInOutSine = "easeInOutSine", Proton.easeInExpo = "easeInExpo", Proton.easeOutExpo = "easeOutExpo", Proton.easeInOutExpo = "easeInOutExpo", Proton.easeInCirc = "easeInCirc", Proton.easeOutCirc = "easeOutCirc", Proton.easeInOutCirc = "easeInOutCirc", Proton.easeInBack = "easeInBack", Proton.easeOutBack = "easeOutBack", Proton.easeInOutBack = "easeInOutBack", Renderer.prototype = {
            start: function() {
                this.addEventHandler(), this.renderer.start()
            },
            stop: function() {
                this.renderer.stop()
            },
            resize: function(width, height) {
                this.renderer.resize(width, height)
            },
            setStroke: function(color, thinkness) {
                this.renderer.hasOwnProperty("stroke") ? this.renderer.setStroke(color, thinkness) : alert("Sorry this renderer do not suppest stroke method!")
            },
            createImageData: function(data) {
                this.renderer instanceof Proton.PixelRender && this.renderer.createImageData(data)
            },
            setMaxRadius: function(radius) {
                this.renderer instanceof Proton.WebGLRender && this.renderer.setMaxRadius(radius)
            },
            blendEquation: function(A) {
                this.renderer instanceof Proton.WebGLRender && this.renderer.blendEquation(A)
            },
            blendFunc: function(A, B) {
                this.renderer instanceof Proton.WebGLRender && this.renderer.blendFunc(A, B)
            },
            setType: function(type) {
                this.type = type, this.renderer = this.getRenderer()
            },
            getRenderer: function() {
                switch (this.type) {
                    case "dom":
                        return new Proton.DomRender(this.proton, this.element);
                    case "canvas":
                        return new Proton.CanvasRender(this.proton, this.element);
                    case "webgl":
                        return new Proton.WebGLRender(this.proton, this.element);
                    case "easel":
                    case "easeljs":
                        return new Proton.EaselRender(this.proton, this.element);
                    case "pixel":
                        return new Proton.PixelRender(this.proton, this.element);
                    default:
                        return new Proton.BaseRender(this.proton, this.element)
                }
            },
            render: function(callback) {
                this.renderer.render(callback)
            },
            addEventHandler: function() {
                this.onProtonUpdate && (this.renderer.onProtonUpdate = this.onProtonUpdate), this.onParticleCreated && (this.renderer.onParticleCreated = this.onParticleCreated), this.onParticleUpdate && (this.renderer.onParticleUpdate = this.onParticleUpdate), this.onParticleDead && (this.renderer.onParticleDead = this.onParticleDead)
            }
        }, Proton.Renderer = Renderer, BaseRender.prototype = {
            start: function() {
                var self = this;
                this.proton.addEventListener(Proton.PROTON_UPDATE, function(e) {
                    self.onProtonUpdate.call(self)
                }), this.proton.addEventListener(Proton.PROTON_UPDATE_AFTER, function(e) {
                    self.onProtonUpdateAfter.call(self)
                }), this.proton.addEventListener(Proton.EMITTER_ADDED, function(e) {
                    self.onEmitterAdded.call(self, e.emitter)
                }), this.proton.addEventListener(Proton.EMITTER_REMOVED, function(e) {
                    self.onEmitterRemoved.call(self, e.emitter)
                });
                var i, length = this.proton.emitters.length;
                for (i = 0; i < length; i++) {
                    var emitter = this.proton.emitters[i];
                    this.addEmitterListener(emitter)
                }
            },
            resize: function(width, height) {},
            addEmitterListener: function(emitter) {
                var self = this;
                emitter.addEventListener(Proton.PARTICLE_CREATED, function(e) {
                    self.onParticleCreated.call(self, e.particle)
                }), emitter.addEventListener(Proton.PARTICLE_UPDATE, function(e) {
                    self.onParticleUpdate.call(self, e.particle)
                }), emitter.addEventListener(Proton.PARTICLE_DEAD, function(e) {
                    self.onParticleDead.call(self, e.particle)
                })
            },
            stop: function() {
                var i, length = this.proton.emitters.length;
                for (this.proton.removeAllEventListeners(), i = 0; i < length; i++) {
                    this.proton.emitters[i].removeAllEventListeners()
                }
            },
            onEmitterAdded: function(emitter) {
                this.addEmitterListener(emitter)
            },
            onEmitterRemoved: function(emitter) {
                emitter.removeAllEventListeners()
            },
            onProtonUpdate: function() {},
            onProtonUpdateAfter: function() {},
            onParticleCreated: function(particle) {},
            onParticleUpdate: function(particle) {},
            onParticleDead: function(particle) {}
        }, Proton.BaseRender = BaseRender, Proton.Util.inherits(DomRender, Proton.BaseRender), DomRender.prototype.start = function() {
            DomRender._super_.prototype.start.call(this)
        }, DomRender.prototype.setStroke = function(color, thinkness) {
            color = Proton.Util.initValue(color, "#000000"), thinkness = Proton.Util.initValue(thinkness, 1), this.stroke = {
                color: color,
                thinkness: thinkness
            }
        }, DomRender.prototype.onProtonUpdate = function() {}, DomRender.prototype.onParticleCreated = function(particle) {
            if (particle.target) {
                var self = this;
                Proton.Util.getImage(particle.target, particle, !1, function(particle) {
                    self.setImgInDIV.call(self, particle)
                })
            } else particle.transform.canvas = Proton.DomUtil.createCanvas(particle.id + "_canvas", particle.radius + 1, particle.radius + 1, "absolute"), particle.transform.bakOldRadius = particle.radius, this.stroke ? (particle.transform.canvas.width = 2 * particle.radius + 2 * this.stroke.thinkness, particle.transform.canvas.height = 2 * particle.radius + 2 * this.stroke.thinkness) : (particle.transform.canvas.width = 2 * particle.radius + 1, particle.transform.canvas.height = 2 * particle.radius + 1), particle.transform.context = particle.transform.canvas.getContext("2d"), particle.transform.context.fillStyle = particle.color, particle.transform.context.beginPath(), particle.transform.context.arc(particle.radius, particle.radius, particle.radius, 0, 2 * Math.PI, !0), this.stroke && (particle.transform.context.strokeStyle = this.stroke.color, particle.transform.context.lineWidth = this.stroke.thinkness, particle.transform.context.stroke()), particle.transform.context.closePath(), particle.transform.context.fill(), this.element.appendChild(particle.transform.canvas)
        }, DomRender.prototype.onParticleUpdate = function(particle) {
            particle.target ? particle.target instanceof Image && (particle.transform.canvas.style.opacity = particle.alpha, Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.target.width / 2, particle.p.y - particle.target.height / 2, particle.scale, particle.rotation)) : (particle.transform.canvas.style.opacity = particle.alpha, particle.transform.oldRadius ? Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.transform.oldRadius, particle.p.y - particle.transform.oldRadius, particle.scale, particle.rotation) : Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.transform.bakOldRadius, particle.p.y - particle.transform.bakOldRadius, particle.scale, particle.rotation))
        }, DomRender.prototype.onParticleDead = function(particle) {
            particle.transform.canvas && this.element.removeChild(particle.transform.canvas)
        }, DomRender.prototype.setImgInDIV = function(particle) {
            particle.transform.canvas = Proton.DomUtil.createCanvas(particle.id + "_canvas", particle.target.width + 1, particle.target.height + 1, "absolute", particle.p.x - particle.radius, particle.p.y - particle.radius), particle.transform.context = particle.transform.canvas.getContext("2d"), particle.transform.context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height), this.element.appendChild(particle.transform.canvas)
        }, Proton.DomRender = DomRender, Proton.Util.inherits(EaselRender, Proton.BaseRender), EaselRender.prototype.resize = function(width, height) {}, EaselRender.prototype.start = function() {
            EaselRender._super_.prototype.start.call(this)
        }, EaselRender.prototype.onProtonUpdate = function() {}, EaselRender.prototype.onParticleCreated = function(particle) {
            if (particle.target) particle.target = particle.target.clone(!0), particle.target.parent || (particle.target.image && (particle.target.regX = particle.target.image.width / 2, particle.target.regY = particle.target.image.height / 2), particle.target.visible = !0, this.element.addChild(particle.target));
            else {
                var graphics = new createjs.Graphics;
                this.stroke && (1 == this.stroke ? graphics.beginStroke("#000000") : this.stroke instanceof String && graphics.beginStroke(this.stroke)), graphics.beginFill(particle.color).drawCircle(0, 0, particle.radius);
                var shape = new createjs.Shape(graphics);
                particle.target = shape, this.element.addChild(particle.target)
            }
        }, EaselRender.prototype.onParticleUpdate = function(particle) {
            particle.target && (particle.target.x = particle.p.x, particle.target.y = particle.p.y, particle.target.alpha = particle.alpha, particle.target.scaleX = particle.target.scaleY = particle.scale, particle.target.rotation = particle.rotation)
        }, EaselRender.prototype.onParticleDead = function(particle) {
            particle.target && particle.target.parent && particle.target.parent.removeChild(particle.target)
        }, Proton.EaselRender = EaselRender, Proton.Util.inherits(CanvasRender, Proton.BaseRender), CanvasRender.prototype.resize = function(width, height) {
            this.element.width = width, this.element.height = height
        }, CanvasRender.prototype.start = function() {
            CanvasRender._super_.prototype.start.call(this)
        }, CanvasRender.prototype.setStroke = function(color, thinkness) {
            color = Proton.Util.initValue(color, "#000000"), thinkness = Proton.Util.initValue(thinkness, 1), this.stroke = {
                color: color,
                thinkness: thinkness
            }
        }, CanvasRender.prototype.onProtonUpdate = function() {
            this.context.clearRect(0, 0, this.element.width, this.element.height)
        }, CanvasRender.prototype.onParticleCreated = function(particle) {
            particle.target ? Proton.Util.getImage(particle.target, particle, !1) : particle.color = particle.color ? particle.color : "#ff0000"
        }, CanvasRender.prototype.onParticleUpdate = function(particle) {
            if (particle.target) {
                if (particle.target instanceof Image) {
                    var w = particle.target.width * particle.scale | 0,
                        h = particle.target.height * particle.scale | 0,
                        x = particle.p.x - w / 2,
                        y = particle.p.y - h / 2;
                    if (particle.color) {
                        particle.transform.buffer || (particle.transform.buffer = this.getBuffer(particle.target));
                        var bufferContext = particle.transform.buffer.getContext("2d");
                        bufferContext.clearRect(0, 0, particle.transform.buffer.width, particle.transform.buffer.height), bufferContext.globalAlpha = particle.alpha, bufferContext.drawImage(particle.target, 0, 0), bufferContext.globalCompositeOperation = "source-atop", bufferContext.fillStyle = Proton.Util.rgbToHex(particle.transform.rgb), bufferContext.fillRect(0, 0, particle.transform.buffer.width, particle.transform.buffer.height), bufferContext.globalCompositeOperation = "source-over", bufferContext.globalAlpha = 1, this.context.drawImage(particle.transform.buffer, 0, 0, particle.transform.buffer.width, particle.transform.buffer.height, x, y, w, h)
                    } else this.context.save(), this.context.globalAlpha = particle.alpha, this.context.translate(particle.p.x, particle.p.y), this.context.rotate(Proton.MathUtils.degreeTransform(particle.rotation)), this.context.translate(-particle.p.x, -particle.p.y), this.context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height, x, y, w, h), this.context.globalAlpha = 1, this.context.restore()
                }
            } else particle.transform.rgb ? this.context.fillStyle = "rgba(" + particle.transform.rgb.r + "," + particle.transform.rgb.g + "," + particle.transform.rgb.b + "," + particle.alpha + ")" : this.context.fillStyle = particle.color, this.context.beginPath(), this.context.arc(particle.p.x, particle.p.y, particle.radius, 0, 2 * Math.PI, !0), this.stroke && (this.context.strokeStyle = this.stroke.color, this.context.lineWidth = this.stroke.thinkness, this.context.stroke()), this.context.closePath(), this.context.fill()
        }, CanvasRender.prototype.onParticleDead = function(particle) {}, CanvasRender.prototype.getBuffer = function(image) {
            if (image instanceof Image) {
                var size = image.width + "_" + image.height,
                    canvas = this.bufferCache[size];
                return canvas || ((canvas = document.createElement("canvas")).width = image.width, canvas.height = image.height, this.bufferCache[size] = canvas), canvas
            }
        }, Proton.CanvasRender = CanvasRender, Proton.Util.inherits(PixelRender, Proton.BaseRender), PixelRender.prototype.resize = function(width, height) {
            this.element.width = width, this.element.height = height
        }, PixelRender.prototype.createImageData = function(rectangle) {
            this.rectangle = rectangle || new Proton.Rectangle(0, 0, this.element.width, this.element.height), this.imageData = this.context.createImageData(this.rectangle.width, this.rectangle.height), this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y)
        }, PixelRender.prototype.start = function() {
            PixelRender._super_.prototype.start.call(this)
        }, PixelRender.prototype.onProtonUpdate = function() {
            this.context.clearRect(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height), this.imageData = this.context.getImageData(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height)
        }, PixelRender.prototype.onProtonUpdateAfter = function() {
            this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y)
        }, PixelRender.prototype.onParticleCreated = function(particle) {}, PixelRender.prototype.onParticleUpdate = function(particle) {
            this.imageData && this.setPixel(this.imageData, Math.floor(particle.p.x - this.rectangle.x), Math.floor(particle.p.y - this.rectangle.y), particle)
        }, PixelRender.prototype.setPixel = function(imagedata, x, y, particle) {
            var rgb = particle.transform.rgb;
            if (!(x < 0 || x > this.element.width || y < 0 || y > this.elementwidth)) {
                var i = 4 * ((y >> 0) * imagedata.width + (x >> 0));
                imagedata.data[i] = rgb.r, imagedata.data[i + 1] = rgb.g, imagedata.data[i + 2] = rgb.b, imagedata.data[i + 3] = 255 * particle.alpha
            }
        }, PixelRender.prototype.onParticleDead = function(particle) {}, Proton.PixelRender = PixelRender, Proton.Util.inherits(WebGLRender, Proton.BaseRender), WebGLRender.prototype.resize = function(width, height) {
            this.umat[4] = -2, this.umat[7] = 1, this.smat[0] = 1 / width, this.smat[4] = 1 / height, this.mstack.set(this.umat, 0), this.mstack.set(this.smat, 1), this.gl.viewport(0, 0, width, height), this.element.width = width, this.element.height = height
        }, WebGLRender.prototype.setMaxRadius = function(radius) {
            this.circleCanvasURL = this.createCircle(radius)
        }, WebGLRender.prototype.getVertexShader = function() {
            return ["uniform vec2 viewport;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 tMat;", "varying vec2 vTextureCoord;", "varying float alpha;", "void main() {", "vec3 v = tMat * vec3(aVertexPosition, 1.0);", "gl_Position = vec4(v.x, v.y, 0, 1);", "vTextureCoord = aTextureCoord;", "alpha = tMat[0][2];", "}"].join("\n")
        }, WebGLRender.prototype.getFragmentShader = function() {
            return ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float alpha;", "uniform sampler2D uSampler;", "uniform vec4 color;", "uniform bool useTexture;", "uniform vec3 uColor;", "void main() {", "vec4 textureColor = texture2D(uSampler, vTextureCoord);", "gl_FragColor = textureColor * vec4(uColor, 1.0);", "gl_FragColor.w *= alpha;", "}"].join("\n")
        }, WebGLRender.prototype.initVar = function() {
            this.mstack = new Proton.MStack, this.umat = Proton.Mat3.create([2, 0, 1, 0, -2, 0, -1, 1, 1]), this.smat = Proton.Mat3.create([.01, 0, 1, 0, .01, 0, 0, 0, 1]), this.texturebuffers = {}
        }, WebGLRender.prototype.start = function() {
            WebGLRender._super_.prototype.start.call(this), this.resize(this.element.width, this.element.height)
        }, WebGLRender.prototype.blendEquation = function(A) {
            this.gl.blendEquation(this.gl[A])
        }, WebGLRender.prototype.blendFunc = function(A, B) {
            this.gl.blendFunc(this.gl[A], this.gl[B])
        }, WebGLRender.prototype.getShader = function(gl, str, fs) {
            var shader;
            return shader = fs ? gl.createShader(gl.FRAGMENT_SHADER) : gl.createShader(gl.VERTEX_SHADER), gl.shaderSource(shader, str), gl.compileShader(shader), gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : (alert(gl.getShaderInfoLog(shader)), null)
        }, WebGLRender.prototype.initShaders = function() {
            var fragmentShader = this.getShader(this.gl, this.getFragmentShader(), !0),
                vertexShader = this.getShader(this.gl, this.getVertexShader(), !1);
            this.sprogram = this.gl.createProgram(), this.gl.attachShader(this.sprogram, vertexShader), this.gl.attachShader(this.sprogram, fragmentShader), this.gl.linkProgram(this.sprogram), this.gl.getProgramParameter(this.sprogram, this.gl.LINK_STATUS) || alert("Could not initialise shaders"), this.gl.useProgram(this.sprogram), this.sprogram.vpa = this.gl.getAttribLocation(this.sprogram, "aVertexPosition"), this.sprogram.tca = this.gl.getAttribLocation(this.sprogram, "aTextureCoord"), this.gl.enableVertexAttribArray(this.sprogram.tca), this.gl.enableVertexAttribArray(this.sprogram.vpa), this.sprogram.tMatUniform = this.gl.getUniformLocation(this.sprogram, "tMat"), this.sprogram.samplerUniform = this.gl.getUniformLocation(this.sprogram, "uSampler"), this.sprogram.useTex = this.gl.getUniformLocation(this.sprogram, "useTexture"), this.sprogram.color = this.gl.getUniformLocation(this.sprogram, "uColor"), this.gl.uniform1i(this.sprogram.useTex, 1)
        }, WebGLRender.prototype.initBuffers = function() {
            this.unitIBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 3, 1, 0, 2, 3]), this.gl.STATIC_DRAW);
            for (var ids = [], i = 0; i < 100; i++) ids.push(i);
            for (idx = new Uint16Array(ids), this.unitI33 = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitI33), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, idx, this.gl.STATIC_DRAW), ids = [], i = 0; i < 100; i++) ids.push(i, i + 1, i + 2);
            idx = new Uint16Array(ids), this.stripBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.stripBuffer), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, idx, this.gl.STATIC_DRAW)
        }, WebGLRender.prototype.createCircle = function(raidus) {
            this.circleCanvasRadius = Proton.WebGLUtil.nhpot(Proton.Util.initValue(raidus, 32));
            var canvas = Proton.DomUtil.createCanvas("circle_canvas", 2 * this.circleCanvasRadius, 2 * this.circleCanvasRadius),
                context = canvas.getContext("2d");
            return context.beginPath(), context.arc(this.circleCanvasRadius, this.circleCanvasRadius, this.circleCanvasRadius, 0, 2 * Math.PI, !0), context.closePath(), context.fillStyle = "#FFF", context.fill(), canvas.toDataURL()
        }, WebGLRender.prototype.setImgInCanvas = function(particle) {
            var _w = particle.target.width,
                _h = particle.target.height,
                _width = Proton.WebGLUtil.nhpot(particle.target.width),
                _height = Proton.WebGLUtil.nhpot(particle.target.height),
                _scaleX = particle.target.width / _width,
                _scaleY = particle.target.height / _height;
            this.texturebuffers[particle.transform.src] || (this.texturebuffers[particle.transform.src] = [this.gl.createTexture(), this.gl.createBuffer(), this.gl.createBuffer()]), particle.transform.texture = this.texturebuffers[particle.transform.src][0], particle.transform.vcBuffer = this.texturebuffers[particle.transform.src][1], particle.transform.tcBuffer = this.texturebuffers[particle.transform.src][2], this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.transform.tcBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, _scaleX, 0, 0, _scaleY, _scaleY, _scaleY]), this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.transform.vcBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([0, 0, _w, 0, 0, _h, _w, _h]), this.gl.STATIC_DRAW);
            var data = particle.transform.canvas.getContext("2d").getImageData(0, 0, _width, _height);
            this.gl.bindTexture(this.gl.TEXTURE_2D, particle.transform.texture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, data), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_NEAREST), this.gl.generateMipmap(this.gl.TEXTURE_2D), particle.transform.textureLoaded = !0, particle.transform.textureWidth = _w, particle.transform.textureHeight = _h
        }, WebGLRender.prototype.setStroke = function(color, thinkness) {}, WebGLRender.prototype.onProtonUpdate = function() {}, WebGLRender.prototype.onParticleCreated = function(particle) {
            var self = this;
            particle.transform.textureLoaded = !1, particle.transform.tmat = Proton.Mat3.create(), particle.transform.tmat[8] = 1, particle.transform.imat = Proton.Mat3.create(), particle.transform.imat[8] = 1, particle.target ? Proton.Util.getImage(particle.target, particle, !0, function(particle) {
                self.setImgInCanvas.call(self, particle), particle.transform.oldScale = 1
            }) : Proton.Util.getImage(this.circleCanvasURL, particle, !0, function(particle) {
                self.setImgInCanvas.call(self, particle), particle.transform.oldScale = particle.radius / self.circleCanvasRadius
            })
        }, WebGLRender.prototype.onParticleUpdate = function(particle) {
            particle.transform.textureLoaded && (this.updateMatrix(particle), this.gl.uniform3f(this.sprogram.color, particle.transform.rgb.r / 255, particle.transform.rgb.g / 255, particle.transform.rgb.b / 255), this.gl.uniformMatrix3fv(this.sprogram.tMatUniform, !1, this.mstack.top()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.transform.vcBuffer), this.gl.vertexAttribPointer(this.sprogram.vpa, 2, this.gl.FLOAT, !1, 0, 0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, particle.transform.tcBuffer), this.gl.vertexAttribPointer(this.sprogram.tca, 2, this.gl.FLOAT, !1, 0, 0), this.gl.bindTexture(this.gl.TEXTURE_2D, particle.transform.texture), this.gl.uniform1i(this.sprogram.samplerUniform, 0), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer), this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0), this.mstack.pop())
        }, WebGLRender.prototype.onParticleDead = function(particle) {}, WebGLRender.prototype.updateMatrix = function(particle) {
            var moveOriginMatrix = Proton.WebGLUtil.makeTranslation(-particle.transform.textureWidth / 2, -particle.transform.textureHeight / 2),
                translationMatrix = Proton.WebGLUtil.makeTranslation(particle.p.x, particle.p.y),
                angel = particle.rotation * (Math.PI / 180),
                rotationMatrix = Proton.WebGLUtil.makeRotation(angel),
                scale = particle.scale * particle.transform.oldScale,
                scaleMatrix = Proton.WebGLUtil.makeScale(scale, scale),
                matrix = Proton.WebGLUtil.matrixMultiply(moveOriginMatrix, scaleMatrix);
            matrix = Proton.WebGLUtil.matrixMultiply(matrix, rotationMatrix), matrix = Proton.WebGLUtil.matrixMultiply(matrix, translationMatrix), Proton.Mat3.inverse(matrix, particle.transform.imat), matrix[2] = particle.alpha, this.mstack.push(matrix)
        }, Proton.WebGLRender = WebGLRender, Zone.prototype = {
            getPosition: function() {},
            crossing: function(particle) {}
        }, Proton.Zone = Zone, Proton.Util.inherits(LineZone, Proton.Zone), LineZone.prototype.getPosition = function() {
            return this.random = Math.random(), this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient), this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient), this.vector
        }, LineZone.prototype.getDirection = function(x, y) {
            var A = this.dy,
                B = -this.dx;
            return (A * x + B * y + this.dot) * (0 == B ? 1 : B) > 0
        }, LineZone.prototype.getDistance = function(x, y) {
            return (this.dy * x + -this.dx * y + this.dot) / Math.sqrt(this.xxyy)
        }, LineZone.prototype.getSymmetric = function(v) {
            var tha2 = v.getGradient(),
                tha = 2 * (this.getGradient() - tha2),
                oldx = v.x,
                oldy = v.y;
            return v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha), v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha), v
        }, LineZone.prototype.getGradient = function() {
            return Math.atan2(this.dy, this.dx)
        }, LineZone.prototype.getRange = function(particle, fun) {
            Math.abs(this.getGradient()) <= Math.PI / 4 ? particle.p.x < this.maxx && particle.p.x > this.minx && fun() : particle.p.y < this.maxy && particle.p.y > this.miny && fun()
        }, LineZone.prototype.getLength = function() {
            return Math.sqrt(this.dx * this.dx + this.dy * this.dy)
        }, LineZone.prototype.crossing = function(particle) {
            var self = this;
            "dead" == this.crossType ? ">" == this.direction || "R" == this.direction || "right" == this.direction || "down" == this.direction ? this.getRange(particle, function() {
                self.getDirection(particle.p.x, particle.p.y) && (particle.dead = !0)
            }) : this.getRange(particle, function() {
                self.getDirection(particle.p.x, particle.p.y) || (particle.dead = !0)
            }) : "bound" == this.crossType ? this.getRange(particle, function() {
                self.getDistance(particle.p.x, particle.p.y) <= particle.radius && (0 == self.dx ? particle.v.x *= -1 : 0 == self.dy ? particle.v.y *= -1 : self.getSymmetric(particle.v))
            }) : "cross" == this.crossType && this.alert && (alert("Sorry lineZone does not support cross method"), this.alert = !1)
        }, Proton.LineZone = LineZone, Proton.Util.inherits(CircleZone, Proton.Zone), CircleZone.prototype.getPosition = function() {
            return this.random = Math.random(), this.angle = 2 * Math.PI * Math.random(), this.vector.x = this.x + this.random * this.radius * Math.cos(this.angle), this.vector.y = this.y + this.random * this.radius * Math.sin(this.angle), this.vector
        }, CircleZone.prototype.setCenter = function(x, y) {
            this.center.x = x, this.center.y = y
        }, CircleZone.prototype.crossing = function(particle) {
            var d = particle.p.distanceTo(this.center);
            "dead" == this.crossType ? d - particle.radius > this.radius && (particle.dead = !0) : "bound" == this.crossType ? d + particle.radius >= this.radius && this.getSymmetric(particle) : "cross" == this.crossType && this.alert && (alert("Sorry CircleZone does not support cross method"), this.alert = !1)
        }, CircleZone.prototype.getSymmetric = function(particle) {
            var tha2 = particle.v.getGradient(),
                tha = 2 * (this.getGradient(particle) - tha2),
                oldx = particle.v.x,
                oldy = particle.v.y;
            particle.v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha), particle.v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha)
        }, CircleZone.prototype.getGradient = function(particle) {
            return -Math.PI / 2 + Math.atan2(particle.p.y - this.center.y, particle.p.x - this.center.x)
        }, Proton.CircleZone = CircleZone, Proton.Util.inherits(PointZone, Proton.Zone), PointZone.prototype.getPosition = function() {
            return this.vector.x = this.x, this.vector.y = this.y, this.vector
        }, PointZone.prototype.crossing = function(particle) {
            this.alert && (alert("Sorry PointZone does not support crossing method"), this.alert = !1)
        }, Proton.PointZone = PointZone, Proton.Util.inherits(RectZone, Proton.Zone), RectZone.prototype.getPosition = function() {
            return this.vector.x = this.x + Math.random() * this.width, this.vector.y = this.y + Math.random() * this.height, this.vector
        }, RectZone.prototype.crossing = function(particle) {
            "dead" == this.crossType ? (particle.p.x + particle.radius < this.x ? particle.dead = !0 : particle.p.x - particle.radius > this.x + this.width && (particle.dead = !0), particle.p.y + particle.radius < this.y ? particle.dead = !0 : particle.p.y - particle.radius > this.y + this.height && (particle.dead = !0)) : "bound" == this.crossType ? (particle.p.x - particle.radius < this.x ? (particle.p.x = this.x + particle.radius, particle.v.x *= -1) : particle.p.x + particle.radius > this.x + this.width && (particle.p.x = this.x + this.width - particle.radius, particle.v.x *= -1), particle.p.y - particle.radius < this.y ? (particle.p.y = this.y + particle.radius, particle.v.y *= -1) : particle.p.y + particle.radius > this.y + this.height && (particle.p.y = this.y + this.height - particle.radius, particle.v.y *= -1)) : "cross" == this.crossType && (particle.p.x + particle.radius < this.x && particle.v.x <= 0 ? particle.p.x = this.x + this.width + particle.radius : particle.p.x - particle.radius > this.x + this.width && particle.v.x >= 0 && (particle.p.x = this.x - particle.radius), particle.p.y + particle.radius < this.y && particle.v.y <= 0 ? particle.p.y = this.y + this.height + particle.radius : particle.p.y - particle.radius > this.y + this.height && particle.v.y >= 0 && (particle.p.y = this.y - particle.radius))
        }, Proton.RectZone = RectZone, Proton.Util.inherits(ImageZone, Proton.Zone), ImageZone.prototype.reset = function(imageData, x, y, d) {
            this.imageData = imageData, this.x = Proton.Util.initValue(x, 0), this.y = Proton.Util.initValue(y, 0), this.d = Proton.Util.initValue(d, 2), this.vectors = [], this.setVectors()
        }, ImageZone.prototype.setVectors = function() {
            var i, j, length1 = this.imageData.width,
                length2 = this.imageData.height;
            for (i = 0; i < length1; i += this.d)
                for (j = 0; j < length2; j += this.d) {
                    var index = 4 * ((j >> 0) * length1 + (i >> 0));
                    this.imageData.data[index + 3] > 0 && this.vectors.push({
                        x: i + this.x,
                        y: j + this.y
                    })
                }
            return this.vector
        }, ImageZone.prototype.getBound = function(x, y) {
            var index = 4 * ((y >> 0) * this.imageData.width + (x >> 0));
            return this.imageData.data[index + 3] > 0
        }, ImageZone.prototype.getPosition = function() {
            return this.vector.copy(this.vectors[Math.floor(Math.random() * this.vectors.length)])
        }, ImageZone.prototype.getColor = function(x, y) {
            x -= this.x;
            var i = 4 * (((y -= this.y) >> 0) * this.imageData.width + (x >> 0));
            return {
                r: this.imageData.data[i],
                g: this.imageData.data[i + 1],
                b: this.imageData.data[i + 2],
                a: this.imageData.data[i + 3]
            }
        }, ImageZone.prototype.crossing = function(particle) {
            "dead" == this.crossType ? this.getBound(particle.p.x - this.x, particle.p.y - this.y) ? particle.dead = !0 : particle.dead = !1 : "bound" == this.crossType && (this.getBound(particle.p.x - this.x, particle.p.y - this.y) || particle.v.negate())
        }, Proton.ImageZone = ImageZone;
        var log = function() {
            if (window.console && window.console.log) {
                var arg = arguments;
                if ("string" == typeof arguments[0])
                    if (0 == arguments[0].indexOf("+")) {
                        var n = parseInt(arguments[0]);
                        log.once < n && (delete arg[0], console.log(arg), log.once++)
                    } else console.log(arg);
                else console.log(arg)
            }
        };
        log.once = 0, Proton.log = log;
        var Debug = Debug || {
            addEventListener: function(proton, fun) {
                proton.addEventListener(Proton.PROTON_UPDATE, function(e) {
                    fun()
                })
            },
            setStyle: function(c) {
                var color = c || "#ff0000",
                    rgb = Proton.Util.hexToRGB(color);
                return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.5)"
            },
            drawZone: function(proton, canvas, zone, clear) {
                var context = canvas.getContext("2d"),
                    style = this.setStyle();
                this.addEventListener(proton, function() {
                    clear && context.clearRect(0, 0, canvas.width, canvas.height), zone instanceof Proton.PointZone ? (context.beginPath(), context.fillStyle = style, context.arc(zone.x, zone.y, 10, 0, 2 * Math.PI, !0), context.fill(), context.closePath()) : zone instanceof Proton.LineZone ? (context.beginPath(), context.strokeStyle = style, context.moveTo(zone.x1, zone.y1), context.lineTo(zone.x2, zone.y2), context.stroke(), context.closePath()) : zone instanceof Proton.RectZone ? (context.beginPath(), context.strokeStyle = style, context.drawRect(zone.x, zone.y, zone.width, zone.height), context.stroke(), context.closePath()) : zone instanceof Proton.CircleZone && (context.beginPath(), context.strokeStyle = style, context.arc(zone.x, zone.y, zone.radius, 0, 2 * Math.PI, !0), context.stroke(), context.closePath())
                })
            },
            drawEmitter: function(proton, canvas, emitter, clear) {
                var context = canvas.getContext("2d"),
                    style = this.setStyle();
                this.addEventListener(proton, function() {
                    clear && context.clearRect(0, 0, canvas.width, canvas.height), context.beginPath(), context.fillStyle = style, context.arc(emitter.p.x, emitter.p.y, 10, 0, 2 * Math.PI, !0), context.fill(), context.closePath()
                })
            },
            test: {},
            setTest: function(id, value) {
                this.test[id] = value
            },
            getTest: function(id) {
                return !!this.test.hasOwnProperty(id) && this.test[id]
            }
        };
        Proton.Debug = Debug
    }(window),
    function() {
        for (var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(callback, element) {
            var currTime = (new Date).getTime(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                id = window.setTimeout(function() {
                    callback(currTime + timeToCall)
                }, timeToCall);
            return lastTime = currTime + timeToCall, id
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(id) {
            clearTimeout(id)
        })
    }(), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(t, e, i, s) {
            var r, n, a, o, l = function() {
                    t.call(this, "throwProps"), this._overwriteProps.length = 0
                },
                h = 999999999999999,
                u = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1
                },
                p = function(t, e, i, s) {
                    if ("auto" === t.end) return t;
                    i = isNaN(i) ? h : i, s = isNaN(s) ? -h : s;
                    var r = "function" == typeof t.end ? t.end(e) : t.end instanceof Array ? function(t, e, i, s) {
                        for (var r, n, a = e.length, o = 0, l = h; --a > -1;) r = e[a], 0 > (n = r - t) && (n = -n), l > n && r >= s && i >= r && (o = a, l = n);
                        return e[o]
                    }(e, t.end, i, s) : Number(t.end);
                    return r > i ? r = i : s > r && (r = s), {
                        max: r,
                        min: r
                    }
                },
                c = l.calculateChange = function(t, s, r, n) {
                    null == n && (n = .05);
                    return r * n * t / (s instanceof i ? s : s ? new i(s) : e.defaultEase).getRatio(n)
                },
                f = l.calculateDuration = function(t, s, r, n, a) {
                    a = a || .05;
                    var o = n instanceof i ? n : n ? new i(n) : e.defaultEase;
                    return Math.abs((s - t) * o.getRatio(a) / r / a)
                },
                d = l.calculateTweenDuration = function(t, r, n, a, o) {
                    if ("string" == typeof t && (t = e.selector(t)), !t) return 0;
                    null == n && (n = 10), null == a && (a = .2), null == o && (o = 1), t.length && (t = t[0] || t);
                    var h, u, _, d, m, g, v, y, w, x, T = 0,
                        b = 9999999999,
                        P = r.throwProps || r,
                        k = r.ease instanceof i ? r.ease : r.ease ? new i(r.ease) : e.defaultEase,
                        S = isNaN(P.checkpoint) ? .05 : Number(P.checkpoint),
                        C = isNaN(P.resistance) ? l.defaultResistance : Number(P.resistance);
                    for (h in P) "resistance" !== h && "checkpoint" !== h && ("object" != typeof(u = P[h]) && ((w = w || s.getByTarget(t)) && w.isTrackingProp(h) ? u = "number" == typeof u ? {
                        velocity: u
                    } : {
                        velocity: w.getVelocity(h)
                    } : (d = Number(u) || 0, _ = d * C > 0 ? d / C : d / -C)), "object" == typeof u && (void 0 !== u.velocity && "number" == typeof u.velocity ? d = Number(u.velocity) || 0 : (w = w || s.getByTarget(t), d = w && w.isTrackingProp(h) ? w.getVelocity(h) : 0), m = isNaN(u.resistance) ? C : Number(u.resistance), _ = d * m > 0 ? d / m : d / -m, g = "function" == typeof t[h] ? t[h.indexOf("set") || "function" != typeof t["get" + h.substr(3)] ? h : "get" + h.substr(3)]() : t[h] || 0, v = g + c(d, k, _, S), void 0 !== u.end && (u = p(u, v, u.max, u.min)), void 0 !== u.max && v > Number(u.max) ? (x = u.unitFactor || 1, y = g > u.max && u.min !== u.max || d * x > -15 && 45 > d * x ? a + .1 * (n - a) : f(g, u.max, d, k, S), b > y + o && (b = y + o)) : void 0 !== u.min && Number(u.min) > v && (x = u.unitFactor || 1, y = u.min > g && u.min !== u.max || d * x > -45 && 15 > d * x ? a + .1 * (n - a) : f(g, u.min, d, k, S), b > y + o && (b = y + o)), y > T && (T = y)), _ > T && (T = _));
                    return T > b && (T = b), T > n ? n : a > T ? a : T
                },
                m = l.prototype = new t("throwProps");
            return m.constructor = l, l.version = "0.9.0", l.API = 2, l._autoCSS = !0, l.defaultResistance = 100, l.track = function(t, e, i) {
                return s.track(t, e, i)
            }, l.untrack = function(t, e) {
                s.untrack(t, e)
            }, l.isTracking = function(t, e) {
                return s.isTracking(t, e)
            }, l.getVelocity = function(t, e) {
                var i = s.getByTarget(t);
                return i ? i.getVelocity(e) : NaN
            }, l._cssRegister = function() {
                var t = (window.GreenSockGlobals || window).com.greensock.plugins.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        a = e._setPluginRatio,
                        o = e.CSSPropTween;
                    e._registerComplexSpecialProp("throwProps", {
                        parser: function(t, e, h, _, p, c) {
                            c = new l;
                            var d, m, g, v, y = {},
                                w = {},
                                x = {},
                                T = {},
                                b = {};
                            n = {};
                            for (m in e) "resistance" !== m && ("object" == typeof(d = e[m]) ? (void 0 !== d.velocity && "number" == typeof d.velocity ? y[m] = Number(d.velocity) || 0 : (v = v || s.getByTarget(t), y[m] = v && v.isTrackingProp(m) ? v.getVelocity(m) : 0), void 0 !== d.end && (T[m] = d.end), void 0 !== d.min && (w[m] = d.min), void 0 !== d.max && (x[m] = d.max), void 0 !== d.resistance && (!0, b[m] = d.resistance)) : "number" == typeof d ? y[m] = d : (v = v || s.getByTarget(t), y[m] = v && v.isTrackingProp(m) ? v.getVelocity(m) : d || 0), u[m] && _._enableTransforms(2 === u[m]));
                            g = i(t, y, _, p, c), r = g.proxy, y = g.end;
                            for (m in r) n[m] = {
                                velocity: y[m],
                                min: w[m],
                                max: x[m],
                                end: T[m],
                                resistance: b[m]
                            };
                            return null != e.resistance && (n.resistance = e.resistance), p = new o(t, "throwProps", 0, 0, g.pt, 2), p.plugin = c, p.setRatio = a, p.data = g, c._onInitTween(r, n, _._tween), p
                        }
                    })
                }
            }, l.to = function(t, i, s, l, h) {
                i.throwProps || (i = {
                    throwProps: i
                });
                var u = new e(t, 1, i);
                return u.render(0, !0, !0), u.vars.css ? (u.duration(d(r, {
                    throwProps: n,
                    ease: i.ease
                }, s, l, h)), u._delay && !u.vars.immediateRender ? u.invalidate() : a._onInitTween(r, o, u), u) : (u.kill(), new e(t, d(t, i, s, l, h), i))
            }, m._onInitTween = function(t, e, i) {
                this.target = t, this._props = [], a = this, o = e;
                var r, n, l, h, u, _, f, d, m, g = i._ease,
                    v = isNaN(e.checkpoint) ? .05 : Number(e.checkpoint),
                    y = i._duration,
                    w = 0;
                for (r in e)
                    if ("resistance" !== r && "checkpoint" !== r) {
                        if ("number" == typeof(n = e[r])) u = Number(n) || 0;
                        else if ("object" != typeof n || isNaN(n.velocity)) {
                            if (!(m = m || s.getByTarget(t)) || !m.isTrackingProp(r)) throw "ERROR: No velocity was defined in the throwProps tween of " + t + " property: " + r;
                            u = m.getVelocity(r)
                        } else u = Number(n.velocity);
                        _ = c(u, g, y, v), d = 0, l = (h = "function" == typeof t[r]) ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : t[r], "object" == typeof n && (f = l + _, void 0 !== n.end && (n = p(n, f, n.max, n.min)), void 0 !== n.max && f > Number(n.max) ? d = n.max - l - _ : void 0 !== n.min && Number(n.min) > f && (d = n.min - l - _)), this._props[w++] = {
                            p: r,
                            s: l,
                            c1: _,
                            c2: d,
                            f: h,
                            r: !1
                        }, this._overwriteProps[w] = r
                    }
                return !0
            }, m._kill = function(e) {
                for (var i = this._props.length; --i > -1;) null != e[this._props[i].p] && this._props.splice(i, 1);
                return t.prototype._kill.call(this, e)
            }, m._roundProps = function(t, e) {
                for (var i = this._props, s = i.length; --s > -1;)(t[i[s]] || t.throwProps) && (i[s].r = e)
            }, m.setRatio = function(t) {
                for (var e, i, s = this._props.length; --s > -1;) e = this._props[s], i = e.s + e.c1 * t + e.c2 * t * t, e.r && (i = 0 | i + (i > 0 ? .5 : -.5)), e.f ? this.target[e.p](i) : this.target[e.p] = i
            }, t.activate([l]), l
        }, !0), window._gsDefine("utils.VelocityTracker", ["TweenLite"], function(t) {
            var e, i, s, n = /([A-Z])/g,
                a = {},
                o = {
                    x: 1,
                    y: 1,
                    z: 2,
                    scale: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 1,
                    rotationZ: 1,
                    rotationX: 2,
                    rotationY: 2,
                    skewX: 1,
                    skewY: 1
                },
                l = document.defaultView ? document.defaultView.getComputedStyle : function() {},
                h = function(t, e, i) {
                    var s = (t._gsTransform || a)[e];
                    return s || 0 === s ? s : (t.style[e] ? s = t.style[e] : (i = i || l(t, null)) ? (t = i.getPropertyValue(e.replace(n, "-$1").toLowerCase()), s = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, s = i[e]), parseFloat(s) || 0)
                },
                u = t.ticker,
                _ = function(t, e, i) {
                    this.p = t, this.f = e, this.v1 = this.v2 = 0, this.t1 = this.t2 = u.time, this.css = !1, this.type = "", this._prev = null, i && (this._next = i, i._prev = this)
                },
                p = function() {
                    var t, i, n = e,
                        a = u.time;
                    if (a - s >= .03)
                        for (s, s = a; n;) {
                            for (i = n._firstVP; i;)((t = i.css ? h(n.target, i.p) : i.f ? n.target[i.p]() : n.target[i.p]) !== i.v1 || a - i.t1 > .15) && (i.v2 = i.v1, i.v1 = t, i.t2 = i.t1, i.t1 = a), i = i._next;
                            n = n._next
                        }
                },
                c = function(t) {
                    this._lookup = {}, this.target = t, this.elem = !(!t.style || !t.nodeType), i || (u.addEventListener("tick", p, null, !1, -100), s = u.time, i = !0), e && (this._next = e, e._prev = this), e = this
                },
                f = c.getByTarget = function(t) {
                    for (var i = e; i;) {
                        if (i.target === t) return i;
                        i = i._next
                    }
                },
                d = c.prototype;
            return d.addProp = function(e, i) {
                if (!this._lookup[e]) {
                    var s = this.target,
                        r = "function" == typeof s[e],
                        n = r ? this._altProp(e) : e,
                        a = this._firstVP;
                    this._firstVP = this._lookup[e] = this._lookup[n] = a = new _(n !== e && 0 === e.indexOf("set") ? n : e, r, a), a.css = this.elem && (void 0 !== this.target.style[a.p] || o[a.p]), a.css && o[a.p] && !s._gsTransform && t.set(s, {
                        x: "+=0"
                    }), a.type = i || a.css && 0 === e.indexOf("rotation") ? "deg" : "", a.v1 = a.v2 = a.css ? h(s, a.p) : r ? s[a.p]() : s[a.p]
                }
            }, d.removeProp = function(t) {
                var e = this._lookup[t];
                e && (e._prev ? e._prev._next = e._next : e === this._firstVP && (this._firstVP = e._next), e._next && (e._next._prev = e._prev), this._lookup[t] = 0, e.f && (this._lookup[this._altProp(t)] = 0))
            }, d.isTrackingProp = function(t) {
                return this._lookup[t] instanceof _
            }, d.getVelocity = function(t) {
                var e, i, s, r = this._lookup[t],
                    n = this.target;
                if (!r) throw "The velocity of " + t + " is not being tracked.";
                return e = r.css ? h(n, r.p) : r.f ? n[r.p]() : n[r.p], i = e - r.v2, ("rad" === r.type || "deg" === r.type) && (s = "rad" === r.type ? 2 * Math.PI : 360, (i %= s) !== i % (s / 2) && (i = 0 > i ? i + s : i - s)), i / (u.time - r.t2)
            }, d._altProp = function(t) {
                var e = t.substr(0, 3),
                    i = ("get" === e ? "set" : "set" === e ? "get" : e) + t.substr(3);
                return "function" == typeof this.target[i] ? i : t
            }, c.getByTarget = function(t) {
                for (var i = e; i;) {
                    if (i.target === t) return i;
                    i = i._next
                }
            }, c.track = function(t, e, i) {
                var s = f(t),
                    r = e.split(","),
                    n = r.length;
                for (i = (i || "").split(","), s || (s = new c(t)); --n > -1;) s.addProp(r[n], i[n] || i[0]);
                return s
            }, c.untrack = function(t, i) {
                var s = f(t),
                    r = (i || "").split(","),
                    n = r.length;
                if (s) {
                    for (; --n > -1;) s.removeProp(r[n]);
                    s._firstVP && i || (s._prev ? s._prev._next = s._next : s === e && (e = s._next), s._next && (s._next._prev = s._prev))
                }
            }, c.isTracking = function(t, e) {
                var i = f(t);
                return !!i && (!(e || !i._firstVP) || i.isTrackingProp(e))
            }, c
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()();
var _gsScope;
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    e = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                        delete a.cycle
                    },
                    f = function(a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = f.prototype.render
                    },
                    g = 1e-10,
                    h = c._internals,
                    i = h.isSelector,
                    j = h.isArray,
                    k = f.prototype = c.to({}, .1, {}),
                    l = [];
                f.version = "1.20.3", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this)
                }, k.updateTo = function(a, b) {
                    var d, e = this.ratio,
                        f = this.vars.immediateRender || a.immediateRender;
                    b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted || f)
                        if (b) this._initted = !1, f && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var g = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || f)
                        for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
                    return this
                }, k.render = function(a, b, d) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var e, f, i, j, k, l, m, n, o, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._time,
                        r = this._totalTime,
                        s = this._cycle,
                        t = this._duration,
                        u = this._rawPrevTime;
                    if (a >= p - 1e-7 && a >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = t, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === t && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0), (0 > u || 0 >= a && a >= -1e-7 || u === g && "isPause" !== this.data) && u !== a && (d = !0, u > g && (f = "onReverseComplete")), this._rawPrevTime = n = !b || a || u === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === t && u > 0) && (f = "onReverseComplete", e = this._reversed), 0 > a && (this._active = !1, 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), this._rawPrevTime = n = !b || a || u === a ? a : g)), this._initted || (d = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (j = t + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * j, this._yoyo && 0 != (1 & this._cycle) && (this._time = t - this._time, (o = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== o || this._initted ? this._yoyoEase = o = !0 === o ? this._ease : o instanceof Ease ? o : Ease.map[o] : (o = this.vars.ease, this._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0)), this._time > t ? this._time = t : this._time < 0 && (this._time = 0)), this._easeType && !o ? (k = this._time / t, l = this._easeType, m = this._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : this._time / t < .5 ? this.ratio = k / 2 : this.ratio = 1 - k / 2) : o || (this.ratio = this._ease.getRatio(this._time / t))), q !== this._time || d || s !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!d && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = q, this._totalTime = r, this._rawPrevTime = u, this._cycle = s, h.lazyTweens.push(this), void(this._lazy = [a, b]);
                            !this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / t)
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== q && a >= 0 && (this._active = !0), 0 === r && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))), i = this._firstPT; i;) i.f ? i.t[i.p](i.c * this.ratio + i.s) : i.t[i.p] = i.c * this.ratio + i.s, i = i._next;
                        this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || (this._totalTime !== r || f) && this._callback("onUpdate")), this._cycle !== s && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), f && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this._callback(f), 0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0))
                    } else r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate"))
                }, f.to = function(a, b, c) {
                    return new f(a, b, c)
                }, f.from = function(a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c)
                }, f.fromTo = function(a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d)
                }, f.staggerTo = f.allTo = function(a, b, g, h, k, m, n) {
                    h = h || 0;
                    var o, p, q, r, s = 0,
                        t = [],
                        u = function() {
                            g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l)
                        },
                        v = g.cycle,
                        w = g.startAt && g.startAt.cycle;
                    for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && ((a = d(a)).reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) {
                        p = {};
                        for (r in g) p[r] = g[r];
                        if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) {
                            w = p.startAt = {};
                            for (r in g.startAt) w[r] = g.startAt[r];
                            e(p.startAt, a, q)
                        }
                        p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h
                    }
                    return t
                }, f.staggerFrom = f.allFrom = function(a, b, c, d, e, g, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h)
                }, f.staggerFromTo = f.allFromTo = function(a, b, c, d, e, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i)
                }, f.delayedCall = function(a, b, c, d, e) {
                    return new f(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        callbackScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        immediateRender: !1,
                        useFrames: e,
                        overwrite: 0
                    })
                }, f.set = function(a, b) {
                    return new f(a, 0, b)
                }, f.isTweening = function(a) {
                    return c.getTweensOf(a, !0).length > 0
                };
                var m = function(a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    n = f.getAllTweens = function(b) {
                        return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b))
                    };
                f.killAll = function(a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = n(0 != e),
                        j = i.length,
                        k = c && d && e;
                    for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                }, f.killChildTweensOf = function(a, b) {
                    if (null != a) {
                        var e, g, k, l, m, n = h.tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))
                            for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
                        else {
                            e = [];
                            for (k in n)
                                for (g = n[k].target.parentNode; g;) g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
                            for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
                        }
                    }
                };
                var o = function(a, c, d, e) {
                    c = !1 !== c, d = !1 !== d;
                    for (var f, g, h = n(e = !1 !== e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                };
                return f.pauseAll = function(a, b, c) {
                    o(!0, a, b, c)
                }, f.resumeAll = function(a, b, c) {
                    o(!1, a, b, c)
                }, f.globalTimeScale = function(b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                }, k.progress = function(a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
                }, k.totalProgress = function(a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
                }, k.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 != (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, k.duration = function(b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, k.totalDuration = function(a) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, k.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, f
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        b.call(this, a), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var c, d, e = this.vars;
                        for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                        i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
                    },
                    e = 1e-10,
                    f = c._internals,
                    g = d._internals = {},
                    h = f.isSelector,
                    i = f.isArray,
                    j = f.lazyTweens,
                    k = f.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    m = function(a) {
                        var b, c = {};
                        for (b in a) c[b] = a[b];
                        return c
                    },
                    n = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                        delete a.cycle
                    },
                    o = g.pauseCallback = function() {},
                    p = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    q = d.prototype = new b;
                return d.version = "1.20.3", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function(a, b, d, e) {
                    var f = d.repeat && l.TweenMax || c;
                    return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                }, q.from = function(a, b, d, e) {
                    return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
                }, q.fromTo = function(a, b, d, e, f) {
                    var g = e.repeat && l.TweenMax || c;
                    return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, q.staggerTo = function(a, b, e, f, g, i, j, k) {
                    var l, o, q = new d({
                            onComplete: i,
                            onCompleteParams: j,
                            callbackScope: k,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        r = e.cycle;
                    for ("string" == typeof a && (a = c.selector(a) || a), h(a = a || []) && (a = p(a)), 0 > (f = f || 0) && ((a = p(a)).reverse(), f *= -1), o = 0; o < a.length; o++)(l = m(e)).startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
                    return this.add(q, g)
                }, q.staggerFrom = function(a, b, c, d, e, f, g, h) {
                    return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                }, q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                }, q.call = function(a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, q.set = function(a, b, d) {
                    return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                }, d.exportRoot = function(a, b) {
                    null == (a = a || {}).smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g, h, i = new d(a),
                        j = i._timeline;
                    for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (0 > (f = g._startTime - g._delay) && (e = 1), i.add(g, f)), g = h;
                    return j.add(i, 0), e && i.totalDuration(), i
                }, q.add = function(e, f, g, h) {
                    var j, k, l, m, n, o;
                    if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && i(e)) {
                            for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({
                                tweens: m
                            })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                    return this
                }, q.remove = function(b) {
                    if (b instanceof a) {
                        this._remove(b, !1);
                        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
                    }
                    if (b instanceof Array || b && b.push && i(b)) {
                        for (var d = b.length; --d > -1;) this.remove(b[d]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, q._remove = function(a, c) {
                    b.prototype._remove.call(this, a, c);
                    return this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, q.append = function(a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, q.insert = q.insertMultiple = function(a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, q.appendMultiple = function(a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, q.addLabel = function(a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, q.addPause = function(a, b, d, e) {
                    var f = c.delayedCall(0, o, d, e || this);
                    return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
                }, q.removeLabel = function(a) {
                    return delete this._labels[a], this
                }, q.getLabelTime = function(a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, q._parseTimeOrLabel = function(b, c, d, e) {
                    var f, g;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e && (e instanceof Array || e.push && i(e)))
                        for (g = e.length; --g > -1;) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                    if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);
                    else {
                        if (-1 === (g = b.indexOf("="))) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f
                    }
                    return Number(b) + c
                }, q.seek = function(a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b)
                }, q.stop = function() {
                    return this.paused(!0)
                }, q.gotoAndPlay = function(a, b) {
                    return this.play(a, b)
                }, q.gotoAndStop = function(a, b) {
                    return this.pause(a, b)
                }, q.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, h, i, l, m, n = this._time,
                        o = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._startTime,
                        q = this._timeScale,
                        r = this._paused;
                    if (n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0) this._totalTime = this._time = o, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = o + 1e-4;
                    else if (1e-7 > a)
                        if (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;
                        else {
                            if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, this._initted || (i = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !b) {
                            if (a >= n)
                                for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
                            else
                                for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                            l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = a
                    }
                    if (this._time !== n && this._first || c || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), (m = this._time) >= n)
                            for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
                                if (d._active || d._startTime <= n && !d._paused && !d._gc) {
                                    if (l === d) {
                                        for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                                        l = null, this.pause()
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                }
                                d = g
                            }
                        this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
                    }
                }, q._hasPausedChild = function() {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, q.getChildren = function(a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? !1 !== b && (f[h++] = g) : (!1 !== d && (f[h++] = g), !1 !== a && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, q.getTweensOf = function(a, b) {
                    var d, e, f = this._gc,
                        g = [],
                        h = 0;
                    for (f && this._enabled(!0, !0), e = (d = c.getTweensOf(a)).length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                    return f && this._enabled(!1, !0), g
                }, q.recent = function() {
                    return this._recent
                }, q._contains = function(a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, q.shiftChildren = function(a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, q._kill = function(a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, q.clear = function(a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return !1 !== a && (this._labels = {}), this._uncache(!0)
                }, q.invalidate = function() {
                    for (var b = this._first; b;) b.invalidate(), b = b._next;
                    return a.prototype.invalidate.call(this)
                }, q._enabled = function(a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, q.totalTime = function(b, c, d) {
                    this._forcingPlayhead = !0;
                    var e = a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, q.duration = function(a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, q.totalDuration = function(a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(e, e._startTime - e._delay), this._calculatingDuration = 0) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale, this._time -= e._startTime, this._totalTime -= e._startTime, this._rawPrevTime -= e._startTime), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), (c = e._startTime + e._totalDuration / e._timeScale) > d && (d = c), e = b;
                            this._duration = this._totalDuration = d, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
                }, q.paused = function(b) {
                    if (!b)
                        for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
                    return a.prototype.paused.apply(this, arguments)
                }, q.usesFrames = function() {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, q.rawTime = function(a) {
                    return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale
                }, d
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                var d = function(b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    e = 1e-10,
                    f = b._internals,
                    g = f.lazyTweens,
                    h = f.lazyRender,
                    i = _gsScope._gsDefine.globals,
                    j = new c(null, null, 1, 0),
                    k = d.prototype = new a;
                return k.constructor = d, k.kill()._gc = !1, d.version = "1.20.3", k.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, k.addCallback = function(a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, k.removeCallback = function(a, b) {
                    if (a)
                        if (null == b) this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, k.removePause = function(b) {
                    return this.removeCallback(a._internals.pauseCallback, b)
                }, k.tweenTo = function(a, c) {
                    c = c || {};
                    var d, e, f, g = {
                            ease: j,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        h = c.repeat && i.TweenMax || b;
                    for (e in c) g[e] = c[e];
                    return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function() {
                        f.target.paused(!0), f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || [])
                    }, f
                }, k.tweenFromTo = function(a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        callbackScope: this
                    }, c.immediateRender = !1 !== c.immediateRender;
                    var d = this.tweenTo(b, c);
                    return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, k.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, i, j, k, l, m, n, o = this._time,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._duration,
                        r = this._totalTime,
                        s = this._startTime,
                        t = this._timeScale,
                        u = this._rawPrevTime,
                        v = this._paused,
                        w = this._cycle;
                    if (o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 != (1 & this._cycle) ? this._time = a = 0 : (this._time = q, a = q + 1e-4);
                    else if (1e-7 > a)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== o || 0 === q && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;
                        else {
                            if (this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, this._initted || (k = !0)
                        }
                    else if (0 === q && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = q + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = q - this._time), this._time > q ? (this._time = q, a = q + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) {
                        if ((a = this._time) >= o || this._repeat && w !== this._cycle)
                            for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;
                        else
                            for (d = this._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                        m && m._startTime < q && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 != (1 & w),
                            y = x === (this._yoyo && 0 != (1 & this._cycle)),
                            z = this._totalTime,
                            A = this._cycle,
                            B = this._rawPrevTime,
                            C = this._time;
                        if (this._totalTime = w * q, this._cycle < w ? x = !x : this._totalTime += q, this._time = o, this._rawPrevTime = 0 === q ? u - 1e-4 : u, this._cycle = w, this._locked = !0, o = x ? 0 : q, this.render(o, b, 0 === q), b || this._gc || this.vars.onRepeat && (this._cycle = A, this._locked = !1, this._callback("onRepeat")), o !== this._time) return;
                        if (y && (this._cycle = w, this._locked = !0, o = x ? q + 1e-4 : -1e-4, this.render(o, !0, !1)), this._locked = !1, this._paused && !v) return;
                        this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B
                    }
                    if (this._time !== o && this._first || c || k || m) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), (n = this._time) >= o)
                            for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
                        else
                            for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
                                if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                                    if (m === d) {
                                        for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                                        m = null, this.pause()
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                }
                                d = i
                            }
                        this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)))
                    } else r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate"))
                }, k.getActive = function(a, b, c) {
                    null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                    var d, e, f = [],
                        g = this.getChildren(a, b, c),
                        h = 0,
                        i = g.length;
                    for (d = 0; i > d; d++)(e = g[d]).isActive() && (f[h++] = e);
                    return f
                }, k.getLabelAfter = function(a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, k.getLabelBefore = function(a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (b[c].time < a) return b[c].name;
                    return null
                }, k.getLabelsArray = function() {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = {
                        time: this._labels[a],
                        name: a
                    };
                    return b.sort(function(a, b) {
                        return a.time - b.time
                    }), b
                }, k.invalidate = function() {
                    return this._locked = !1, a.prototype.invalidate.call(this)
                }, k.progress = function(a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0
                }, k.totalProgress = function(a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0
                }, k.totalDuration = function(b) {
                    return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, k.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 != (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, k.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, k.currentLabel = function(a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                }, d
            }, !0),
            function() {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = _gsScope._gsDefine.globals,
                    g = function(a, b, c, d) {
                        c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    i = function(a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    j = function(a, e, f, g, h) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, n.b = 0 !== j ? y : y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        (n = a[x]).b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    k = function(a, d, e, f) {
                        var h, i, j, k, l, m, n = [];
                        if (f)
                            for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                        if (0 > (h = a.length - 2)) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;
                        for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                        return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
                    },
                    l = function(a, f, g, i, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                    t = !1;
                                    break
                                }
                            t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
                        for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                        if (!i) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                        }
                        for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    m = function(a, b, c) {
                        var d, e, f, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === (b = b || "soft") ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (p[m = s[j]] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                            i.length = n
                        }
                        return p
                    },
                    n = function(a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    o = function(a, b) {
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = (b = b >> 0 || 6) - 1,
                            l = [],
                            m = [];
                        for (c in a) n(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        }
                    },
                    p = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                k = i[0],
                                n = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = n ? n instanceof Array ? n : [
                                ["x", "y", "rotation", !0 === n ? 0 : Number(n) || 0]
                            ] : null;
                            for (d in k) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = o(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (n = this._autoRotate)
                                for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                                    for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] && a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)];
                                    d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d)
                                }
                            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(b) {
                            var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                n = this._func,
                                o = this._target,
                                p = b !== this._startRatio;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                    for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                } else if (b < this._l1 && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                                    for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
                                    this._s1 = l[e - 1], this._si = e
                                } else if (b < this._s1 && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
                            if (this._autoRotate) {
                                var q, r, s, t, u, v, w, x = this._autoRotate;
                                for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = !0 === x[e][4] ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i)
                            }
                        }
                    }),
                    q = p.prototype;
                p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, p._cssRegister = function() {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function(a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), i = new p;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = !0 === q.autoRotate ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", j, !1]
                                ] : null != l.end.x && [
                                    ["x", "y", "rotation", j, !1]
                                ]), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, q._mod = function(a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;)(b = a[c[d]]) && "function" == typeof b && (this._mod[c[d]] = b)
                }, q._kill = function(a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    if (d = this._autoRotate)
                        for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                var c, d, e, f, g = function() {
                        a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                    },
                    h = _gsScope._gsDefine.globals,
                    i = {},
                    j = g.prototype = new a("css");
                j.constructor = g, g.version = "1.20.3", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
                    top: j,
                    right: j,
                    bottom: j,
                    left: j,
                    width: j,
                    height: j,
                    fontSize: j,
                    padding: j,
                    margin: j,
                    perspective: j,
                    lineHeight: ""
                };
                var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    y = /opacity:([^;]*)/i,
                    z = /alpha\(opacity *=.+?\)/i,
                    A = /^(rgb|hsl)/,
                    B = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function(a, b) {
                        return b.toUpperCase()
                    },
                    F = /(?:Left|Right|Width)/i,
                    G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    J = /[\s,\(]/i,
                    K = Math.PI / 180,
                    L = 180 / Math.PI,
                    M = {},
                    N = {
                        style: {}
                    },
                    O = _gsScope.document || {
                        createElement: function() {
                            return N
                        }
                    },
                    P = function(a, b) {
                        return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
                    },
                    Q = P("div"),
                    R = P("img"),
                    S = g._internals = {
                        _specialProps: i
                    },
                    T = (_gsScope.navigator || {}).userAgent || "",
                    U = function() {
                        var a = T.indexOf("Android"),
                            b = P("a");
                        return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), !!b && (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity))
                    }(),
                    V = function(a) {
                        return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(a) {
                        _gsScope.console && console.log(a)
                    },
                    X = "",
                    Y = "",
                    Z = function(a, b) {
                        var c, d, e = (b = b || Q).style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                        return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
                    },
                    $ = O.defaultView ? O.defaultView.getComputedStyle : function() {},
                    _ = g.getStyle = function(a, b, c, d, e) {
                        var f;
                        return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
                    },
                    aa = S.convertToPixels = function(a, c, d, e, f) {
                        if ("px" === e || !e && "lineHeight" !== c) return d;
                        if ("auto" === e || !d) return 0;
                        var h, i, j, k = F.test(c),
                            l = a,
                            m = Q.style,
                            n = 0 > d,
                            o = 1 === d;
                        if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e)
                            if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                            else {
                                if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                else {
                                    if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                    m[k ? "width" : "height"] = d + e
                                }
                                l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && !1 !== g.cacheWidths && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0))
                            }
                        else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i;
                        return o && (h /= 100), n ? -h : h
                    },
                    ba = S.calculateOffset = function(a, b, c) {
                        if ("absolute" !== _(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = _(a, "margin" + d, c);
                        return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
                    },
                    ca = function(a, b) {
                        var c, d, e, f = {};
                        if (b = b || $(a, null))
                            if (c = b.length)
                                for (; --c > -1;)(-1 === (e = b[c]).indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                            else
                                for (c in b)(-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                        else if (b = a.currentStyle || a.style)
                            for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                        return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                    },
                    da = function(a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return {
                            difs: i,
                            firstMPT: h
                        }
                    },
                    ea = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ga = function(a, b, c) {
                        if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
                        if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = ea[b],
                            f = e.length;
                        for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ha = function(a, b) {
                        if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                        (null == a || "" === a) && (a = "0 0");
                        var c, d = a.split(" "),
                            e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                            f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                        if (d.length > 3 && !b) {
                            for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
                            return a.join(",")
                        }
                        return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
                    },
                    ia = function(a, b) {
                        return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                    },
                    ja = function(a, b) {
                        return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                    },
                    ka = function(a, b, c, d) {
                        var e, f, g, h, i;
                        return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e) != g % (e / 2) && (g = 0 > g ? g + e : g - e), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), 1e-6 > h && h > -1e-6 && (h = 0), h
                    },
                    la = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ma = function(a, b, c) {
                        return 255 * (1 > 6 * (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a) ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                    },
                    na = g.parseColor = function(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m;
                        if (a)
                            if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                            else {
                                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];
                                else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                                else if ("hsl" === a.substr(0, 3))
                                    if (c = m = a.match(s), b) {
                                        if (-1 !== a.indexOf("=")) return a.match(t)
                                    } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
                                else c = a.match(s) || la.transparent;
                                c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                            }
                        else c = la.black;
                        return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                    },
                    oa = function(a, b) {
                        var c, d, e, f = a.match(pa) || [],
                            g = 0,
                            h = "";
                        if (!f.length) return a;
                        for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, 3 === (d = na(d, b)).length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                        return h + a.substr(g)
                    },
                    pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (j in la) pa += "|" + j + "\\b";
                pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function(a) {
                    var b, c = a[0] + " " + a[1];
                    pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0
                }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
                var qa = function(a, b, c, d) {
                        if (null == a) return function(a) {
                            return a
                        };
                        var e, f = b ? (a.match(pa) || [""])[0] : "",
                            g = a.split(f).join("").match(u) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(s, "") : "";
                        return k ? e = b ? function(a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                return o.join(",")
                            }
                            if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
                                for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function(a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                return f.join(",")
                            }
                            if (b = a.match(u) || [], m = b.length, k > m--)
                                for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                            return h + b.join(j) + i
                        } : function(a) {
                            return a
                        }
                    },
                    ra = function(a) {
                        return a = a.split(","),
                            function(b, c, d, e, f, g, h) {
                                var i, j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    sa = (S._setPluginRatio = function(a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT; i;) b = h[i.v], i.r ? b = Math.round(b) : 1e-6 > b && b > -1e-6 && (b = 0), i.t[i.p] = b, i = i._next;
                        if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a)
                            for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                                if ((c = i.t).type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c[f] = e
                                    }
                                } else c[f] = c.s + c.xs0;
                                i = i._next
                            }
                    }, function(a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    ta = (S._parseToProxy = function(a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = M;
                        for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return {
                            proxy: m,
                            end: n,
                            firstMPT: j,
                            pt: k
                        }
                    }, S.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                    }),
                    ua = function(a, b, c, d, e, f) {
                        var g = new ta(a, b, c, d - c, e, -1, f);
                        return g.b = c, g.e = g.xs0 = d, g
                    },
                    va = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
                        c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
                        var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                            E = d.split(", ").join(",").split(" "),
                            F = D.length,
                            G = !1 !== k;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)
                            if (p = D[m], u = E[m], (x = parseFloat(p)) || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
                            else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), (y = p.length + u.length > 6) && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;
                        else if (v = p.match(s)) {
                            if (!(w = u.match(t)) || w.length !== v.length) return h;
                            for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
                            h["xs" + h.l] += p.substr(o)
                        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                        if (-1 !== d.indexOf("=") && h.data) {
                            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                            h.e = B + h["xs" + m]
                        }
                        return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
                    },
                    wa = 9;
                for ((j = ta.prototype).l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
                j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var xa = function(a, b) {
                        b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                    },
                    ya = S._registerComplexSpecialProp = function(a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var d, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, new xa(f[d], b)
                    },
                    za = S._registerPluginProp = function(a) {
                        if (!i[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            ya(a, {
                                parser: function(a, c, d, e, f, g, j) {
                                    var k = h.com.greensock.plugins[b];
                                    return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                (j = xa.prototype).parseComplex = function(a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, j.parse = function(a, b, c, d, f, g, h) {
                    return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }, g.registerSpecialProp = function(a, b, c) {
                    ya(a, {
                        parser: function(a, d, e, f, g, h, i) {
                            var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                            return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                        },
                        priority: c
                    })
                }, g.useSVGTransformAttr = !0;
                var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ca = Z("transform"),
                    Da = X + "transform",
                    Ea = Z("transformOrigin"),
                    Fa = null !== Z("perspective"),
                    Ga = S.Transform = function() {
                        this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = !(!1 === g.defaultForce3D || !Fa) && (g.defaultForce3D || "auto")
                    },
                    Ha = _gsScope.SVGElement,
                    Ia = function(a, b, c) {
                        var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
                            f = /([a-z])([A-Z])/g;
                        for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                        return b.appendChild(e), e
                    },
                    Ja = O.documentElement || {},
                    Ka = function() {
                        var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
                        return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d
                    }(),
                    La = function(a, b, c, d, e, f) {
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                            w = Qa(a, !0);
                        v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (0 === (n = a.getBBox()).x && 0 === n.y && n.width + n.height === 0 && (n = {
                            x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                            y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], (s = m * p - n * o) && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || !1 !== e && !1 !== g.defaultSmoothOrigin ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
                    },
                    Ma = function(a) {
                        var b, c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            d = this.parentNode,
                            e = this.nextSibling,
                            f = this.style.cssText;
                        if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                            b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma
                        } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
                        return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b
                    },
                    Oa = function(a) {
                        return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || ! function(a) {
                            try {
                                return a.getBBox()
                            } catch (b) {
                                return Ma.call(a, !0)
                            }
                        }(a))
                    },
                    Pa = [1, 0, 0, 1, 0, 0],
                    Qa = function(a, b) {
                        var c, d, e, f, g, h, i = a._gsTransform || new Ga,
                            k = a.style;
                        if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return Pa;
                        for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (1e5 * g + (0 > g ? -.5 : .5) | 0) / 1e5 + f : f;
                        return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                    },
                    Ra = S.getTransform = function(a, c, d, e) {
                        if (a._gsTransform && d && !e) return a._gsTransform;
                        var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga,
                            n = m.scaleX < 0,
                            o = 2e-5,
                            p = 1e5,
                            q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                            r = parseFloat(g.defaultTransformPerspective) || 0;
                        if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), (f = Qa(a)) !== Pa) {
                            if (16 === f.length) {
                                var s, t, u, v, w, x = f[0],
                                    y = f[1],
                                    z = f[2],
                                    A = f[3],
                                    B = f[4],
                                    C = f[5],
                                    D = f[6],
                                    E = f[7],
                                    F = f[8],
                                    G = f[9],
                                    H = f[10],
                                    I = f[12],
                                    J = f[13],
                                    K = f[14],
                                    M = f[11],
                                    N = Math.atan2(D, H);
                                m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                            } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                                var O = f.length >= 6,
                                    P = O ? f[0] : 1,
                                    Q = f[1] || 0,
                                    R = f[2] || 0,
                                    S = O ? f[3] : 1;
                                m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                            }
                            Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;
                            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                        }
                        return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function() {
                            Va(a.style, Ca)
                        }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function() {
                            a.removeAttribute("transform")
                        }))), m
                    },
                    Sa = function(a) {
                        var b, c, d = this.data,
                            e = -d.rotation * K,
                            f = e + d.skewX * K,
                            g = 1e5,
                            h = (Math.cos(e) * d.scaleX * g | 0) / g,
                            i = (Math.sin(e) * d.scaleX * g | 0) / g,
                            j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                            k = (Math.cos(f) * d.scaleY * g | 0) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, o, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                u = d.x + q * d.xPercent / 100,
                                v = d.y + r * d.yPercent / 100;
                            if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                                var y, z, A, B = 8 > p ? 1 : -1;
                                for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
                            }
                        }
                    },
                    Ta = S.set3DTransformRatio = S.setTransformRatio = function(a) {
                        var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
                            A = this.t.style,
                            B = z.rotation,
                            C = z.rotationX,
                            D = z.rotationY,
                            E = z.scaleX,
                            F = z.scaleY,
                            G = z.scaleZ,
                            H = z.x,
                            I = z.y,
                            J = z.z,
                            L = z.svg,
                            M = z.perspective,
                            N = z.force3D,
                            O = z.skewY,
                            P = z.skewX;
                        if (O && (P += O, B += O), !((1 !== a && 0 !== a || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || J || M || D || C || 1 !== G) || Aa && L || !Fa) B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), (q = 1e-6) > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")";
                        else {
                            if (n && ((q = 1e-4) > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
                            else {
                                if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                                c = g = 1, d = f = 0
                            }
                            k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", (B = D * K) && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), (B = C * K) && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u
                        }
                    };
                (j = Ga.prototype).x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(a, b, c, d, f, h, i) {
                        if (d._lastParsedTransform === i) return f;
                        d._lastParsedTransform = i;
                        var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                        "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
                        var l, m, n, o, p, s, t, u, v, w = a._gsTransform,
                            x = a.style,
                            z = Ba.length,
                            A = i,
                            B = {},
                            C = "transformOrigin",
                            D = Ra(a, e, !0, A.parseTransform),
                            E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
                        if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
                        else if ("object" == typeof A) {
                            if (l = {
                                    scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                                    scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                                    scaleZ: ja(A.scaleZ, D.scaleZ),
                                    x: ja(A.x, D.x),
                                    y: ja(A.y, D.y),
                                    z: ja(A.z, D.z),
                                    xPercent: ja(A.xPercent, D.xPercent),
                                    yPercent: ja(A.yPercent, D.yPercent),
                                    perspective: ja(A.transformPerspective, D.perspective)
                                }, null != (p = A.directionalRotation))
                                if ("object" == typeof p)
                                    for (m in p) A[m] = p[m];
                                else A.rotation = p;
                            "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY)
                        }
                        for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), (n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], ((E = l[v] - D[v]) > 1e-6 || -1e-6 > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                        return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f
                    },
                    prefix: !0
                }), ya("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ya("borderRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, f, g, h) {
                        b = this.format(b);
                        var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            z = a.style;
                        for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), -1 !== (m = l = _(a, y[j], e, !1, "0px")).indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), (u = "=" === n.charAt(1)) ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: qa("0px 0px 0px 0px", !1, !0)
                }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, d, f, g) {
                        return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
                    },
                    prefix: !0,
                    formatter: qa("0px 0px", !1, !0)
                }), ya("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position",
                            o = e || $(a, null),
                            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, "")) && "none" !== m) {
                            for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], (k = -1 !== q.indexOf("%")) !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: ha
                }), ya("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(a) {
                        return a += "", ha(-1 === a.indexOf(" ") ? a + " " + a : a)
                    }
                }), ya("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ya("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ya("transformStyle", {
                    prefix: !0
                }), ya("backfaceVisibility", {
                    prefix: !0
                }), ya("userSelect", {
                    prefix: !0
                }), ya("margin", {
                    parser: ra("marginTop,marginRight,marginBottom,marginLeft")
                }), ya("padding", {
                    parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ya("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j;
                        return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                    }
                }), ya("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ya("autoRound,strictUnits", {
                    parser: function(a, b, c, d, e) {
                        return e
                    }
                }), ya("border", {
                    defaultValue: "0px solid #000",
                    parser: function(a, b, c, d, f, g) {
                        var h = _(a, "borderTopWidth", e, !1, "0px"),
                            i = this.format(b).split(" "),
                            j = i[0].replace(w, "");
                        return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                    },
                    color: !0,
                    formatter: function(a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
                    }
                }), ya("borderWidth", {
                    parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ya("float,cssFloat,styleFloat", {
                    parser: function(a, b, c, d, e, f) {
                        var g = a.style,
                            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                        return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                    }
                });
                var Ua = function(a) {
                    var b, c = this.t,
                        d = c.filter || _(this.data, "filter") || "",
                        e = this.s + this.c * a | 0;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
                };
                ya("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(a, b, c, d, f, g) {
                        var h = parseFloat(_(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                    }
                });
                var Va = function(a, b) {
                        b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
                    },
                    Wa = function(a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ya("className", {
                    parser: function(a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
                    }
                });
                var Xa = function(a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b, c, d, e, f, g = this.t.style,
                            h = i.transform.parse;
                        if ("all" === this.e) g.cssText = "", e = !0;
                        else
                            for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
                        e && (Va(g, Ca), (f = this.t._gsTransform) && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (ya("clearProps", {
                        parser: function(a, b, d, e, f) {
                            return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
                (j = g.prototype)._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
                    if (!a.nodeType) return !1;
                    this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
                    var n, p, s, t, u, v, w, x, z, A = a.style;
                    if (l && "" === A.zIndex && ("auto" === (n = _(a, "zIndex", e)) || "" === n) && this._addLazySet(A, "zIndex", 0), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                        for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && ("auto" === (w = _(a, "zIndex", e)) || "" === w) && this._addLazySet(A, "zIndex", 0), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                        x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop()
                    }
                    if (c) {
                        for (; p;) {
                            for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                            (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
                        }
                        this._firstPT = t
                    }
                    return !0
                }, j.parse = function(a, b, c, f) {
                    var g, h, j, l, m, n, o, p, s, t, u = a.style;
                    for (g in b) {
                        if ("function" == typeof(n = b[g]) && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b);
                        else {
                            if ("--" === g.substr(0, 2)) {
                                this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
                                continue
                            }
                            m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), (t = s && "=" === n.charAt(1)) ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, !0 !== b.strictUnits && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, !1 !== k && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))
                        }
                        f && c && !c.plugin && (c.plugin = f)
                    }
                    return c
                }, j.setRatio = function(a) {
                    var b, c, d, e = this._firstPT;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = Math.round(b) : 1e-6 > b && b > -1e-6 && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (2 === (d = e.l)) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (b = Math.round(e.s + e.c), e.type) {
                                            if (1 === e.type) {
                                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next
                            }
                }, j._enableTransforms = function(a) {
                    this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
                };
                var Ya = function(a) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                j._addLazySet = function(a, b, c) {
                    var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
                    d.e = c, d.setRatio = Ya, d.data = this
                }, j._linkCSSP = function(a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                }, j._mod = function(a) {
                    for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next
                }, j._kill = function(b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                    }
                    for (b.className && (c = this._classNamePT) && ((e = c.xfirst) && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
                    return a.prototype._kill.call(this, f)
                };
                var Za = function(a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) Za(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
                };
                return g.cascadeTo = function(a, c, d) {
                    var e, f, g, h, i = b.to(a, c, d),
                        j = [i],
                        k = [],
                        l = [],
                        m = [],
                        n = b._internals.reservedProps;
                    for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                        if ((f = da(m[e], k[e], l[e])).firstMPT) {
                            f = f.difs;
                            for (g in d) n[g] && (f[g] = d[g]);
                            h = {};
                            for (g in f) h[g] = k[e][g];
                            j.push(b.fromTo(m[e], c, h, f))
                        }
                    return j
                }, a.activate([g]), g
            }, !0),
            function() {
                var b = function(a) {
                        for (; a;) a.f || a.blob || (a.m = Math.round), a = a._next
                    },
                    c = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(a, b, c) {
                            return this._tween = c, !0
                        }
                    }).prototype;
                c._onInitAllProps = function() {
                    for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) h[f[g]] = Math.round;
                    for (g = f.length; --g > -1;)
                        for (a = f[g], c = e._firstPT; c;) d = c._next, c.pg ? c.t._mod(h) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d), c._next = c._prev = null, e._propLookup[a] = i)), c = d;
                    return !1
                }, c._add = function(a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, Math.round), this._overwriteProps.push(b)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(a, b, c, d) {
                    var e, f;
                    if ("function" != typeof a.setAttribute) return !1;
                    for (e in b) "function" == typeof(f = b[e]) && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                    return !0
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(a, b, c, d) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var e, f, g, h, i, j, k = !0 === b.useRadians ? 2 * Math.PI : 360;
                    for (e in b) "useRadians" !== e && ("function" == typeof(h = b[e]) && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (-1 !== (f = j.join("_")).indexOf("short") && (i %= k) != i % (k / 2) && (i = 0 > i ? i + k : i - k), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > 1e-6 || -1e-6 > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
                    return !0
                },
                set: function(a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
                    f = e.com.greensock,
                    g = 2 * Math.PI,
                    h = Math.PI / 2,
                    i = f._class,
                    j = function(b, c) {
                        var d = i("easing." + b, function() {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    k = a.register || function() {},
                    l = function(a, b, c, d, e) {
                        var f = i("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return k(f, a), f
                    },
                    m = function(a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    n = function(b, c) {
                        var d = i("easing." + b, function(a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function(a) {
                            return new d(a)
                        }, d
                    },
                    o = l("Back", n("BackOut", function(a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), n("BackIn", function(a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), n("BackInOut", function(a) {
                        return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    p = i("easing.SlowMo", function(a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === c
                    }, !0),
                    q = p.prototype = new a;
                return q.constructor = p, q.getRatio = function(a) {
                    var b = a + (.5 - a) * this._p;
                    return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) {
                    return new p(a, b, c)
                }, b = i("easing.SteppedEase", function(a, b) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0
                }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function(a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1
                }, q.config = b.config = function(a, c) {
                    return new b(a, c)
                }, c = i("easing.RoughEase", function(b) {
                    for (var c, d, e, f, g, h, i = (b = b || {}).taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = !1 !== b.randomize, p = !0 === b.clamp, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                        x: c,
                        y: d
                    };
                    for (j.sort(function(a, b) {
                            return a.x - b.x
                        }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
                    this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
                }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function(a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && a <= b.t;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, q.config = function(a) {
                    return new c(a)
                }, c.ease = new c, l("Bounce", j("BounceOut", function(a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), j("BounceIn", function(a) {
                    return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), j("BounceInOut", function(a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), l("Circ", j("CircOut", function(a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), j("CircIn", function(a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), j("CircInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), d = function(b, c, d) {
                    var e = i("easing." + b, function(a, b) {
                            this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2
                        }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                        return new e(a, b)
                    }, e
                }, l("Elastic", d("ElasticOut", function(a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
                }, .3), d("ElasticIn", function(a) {
                    return -this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)
                }, .3), d("ElasticInOut", function(a) {
                    return (a *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
                }, .45)), l("Expo", j("ExpoOut", function(a) {
                    return 1 - Math.pow(2, -10 * a)
                }), j("ExpoIn", function(a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), j("ExpoInOut", function(a) {
                    return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), l("Sine", j("SineOut", function(a) {
                    return Math.sin(a * h)
                }), j("SineIn", function(a) {
                    return 1 - Math.cos(a * h)
                }), j("SineInOut", function(a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), i("easing.EaseLookup", {
                    find: function(b) {
                        return a.map[b]
                    }
                }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a, b) {
        "use strict";
        var c = {},
            d = a.document,
            e = a.GreenSockGlobals = a.GreenSockGlobals || a;
        if (!e.TweenLite) {
            var f, g, h, i, j, k = function(a) {
                    var b, c = a.split("."),
                        d = e;
                    for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                    return d
                },
                l = k("com.greensock"),
                m = 1e-10,
                n = function(a) {
                    var b, c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c
                },
                o = function() {},
                p = function() {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function(c) {
                        return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                    }
                }(),
                q = {},
                r = function(d, f, g, h) {
                    this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;
                    var i = [];
                    this.check = function(j) {
                        for (var l, m, n, o, p = f.length, s = p; --p > -1;)(l = q[f[p]] || new r(f[p], [])).gsClass ? (i[p] = l.gsClass, s--) : j && l.sc.push(this);
                        if (0 === s && g) {
                            if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                                if (e[n] = c[n] = o, "undefined" != typeof module && module.exports)
                                    if (d === b) {
                                        module.exports = c[b] = o;
                                        for (p in c) o[p] = c[p]
                                    } else c[b] && (c[b][n] = o);
                            else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                                return o
                            });
                            for (p = 0; p < this.sc.length; p++) this.sc[p].check()
                        }
                    }, this.check(!0)
                },
                s = a._gsDefine = function(a, b, c, d) {
                    return new r(a, b, c, d)
                },
                t = l._class = function(a, b, c) {
                    return b = b || function() {}, s(a, [], function() {
                        return b
                    }, c), b
                };
            s.globals = e;
            var u = [0, 0, 1, 1],
                v = t("easing.Ease", function(a, b, c, d) {
                    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u
                }, !0),
                w = v.map = {},
                x = v.register = function(a, b, c, d) {
                    for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                        for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                };
            for ((h = v.prototype)._calcEnd = !1, h.getRatio = function(a) {
                    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                    var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
                }, g = (f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --g > -1;) h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
            var y = t("events.EventDispatcher", function(a) {
                this._listeners = {}, this._eventTarget = a || this
            });
            (h = y.prototype).addEventListener = function(a, b, c, d, e) {
                e = e || 0;
                var f, g, h = this._listeners[a],
                    k = 0;
                for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;)(f = h[g]).c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
                h.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                })
            }, h.removeEventListener = function(a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1)
            }, h.dispatchEvent = function(a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for ((b = e.length) > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;)(d = e[b]) && (d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c))
            };
            var z = a.requestAnimationFrame,
                A = a.cancelAnimationFrame,
                B = Date.now || function() {
                    return (new Date).getTime()
                },
                C = B();
            for (g = (f = ["ms", "moz", "webkit", "o"]).length; --g > -1 && !z;) z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
            t("Ticker", function(a, b) {
                var c, e, f, g, h, k = this,
                    l = B(),
                    n = !(!1 === b || !z) && "auto",
                    p = 500,
                    q = 33,
                    s = function(a) {
                        var b, d, i = B() - C;
                        i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || !0 === a) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), !0 !== a && (f = e(s)), d && k.dispatchEvent("tick")
                    };
                y.call(k), k.time = k.frame = 0, k.tick = function() {
                    s(!0)
                }, k.lagSmoothing = function(a, b) {
                    return arguments.length ? (p = a || 1 / m, void(q = Math.min(b, p, 0))) : 1 / m > p
                }, k.sleep = function() {
                    null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1))
                }, k.wake = function(a) {
                    null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function(a) {
                        return setTimeout(a, 1e3 * (h - k.time) + 1 | 0)
                    }, k === i && (j = !0), s(2)
                }, k.fps = function(a) {
                    return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c
                }, k.useRAF = function(a) {
                    return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n
                }, k.fps(a), setTimeout(function() {
                    "auto" === n && k.frame < 5 && "hidden" !== d.visibilityState && k.useRAF(!1)
                }, 1500)
            }), (h = l.Ticker.prototype = new l.events.EventDispatcher).constructor = l.Ticker;
            var D = t("core.Animation", function(a, b) {
                if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, X) {
                    j || i.wake();
                    var c = this.vars.useFrames ? W : X;
                    c.add(this, c._time), this.vars.paused && this.paused(!0)
                }
            });
            i = D.ticker = new l.Ticker, (h = D.prototype)._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
            var E = function() {
                j && B() - C > 2e3 && ("hidden" !== d.visibilityState || !i.lagSmoothing()) && i.wake();
                var a = setTimeout(E, 2e3);
                a.unref && a.unref()
            };
            E(), h.play = function(a, b) {
                return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
            }, h.pause = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!0)
            }, h.resume = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!1)
            }, h.seek = function(a, b) {
                return this.totalTime(Number(a), !1 !== b)
            }, h.restart = function(a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
            }, h.reverse = function(a, b) {
                return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
            }, h.render = function(a, b, c) {}, h.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, h.isActive = function() {
                var a, b = this._timeline,
                    c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7
            }, h._enabled = function(a, b) {
                return j || i.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            }, h._kill = function(a, b) {
                return this._enabled(!1, !1)
            }, h.kill = function(a, b) {
                return this._kill(a, b), this
            }, h._uncache = function(a) {
                for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                return this
            }, h._swapSelfInParams = function(a) {
                for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                return c
            }, h._callback = function(a) {
                var b = this.vars,
                    c = b[a],
                    d = b[a + "Params"],
                    e = b[a + "Scope"] || b.callbackScope || this;
                switch (d ? d.length : 0) {
                    case 0:
                        c.call(e);
                        break;
                    case 1:
                        c.call(e, d[0]);
                        break;
                    case 2:
                        c.call(e, d[0], d[1]);
                        break;
                    default:
                        c.apply(e, d)
                }
            }, h.eventCallback = function(a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }, h.delay = function(a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
            }, h.duration = function(a) {
                return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, h.totalDuration = function(a) {
                return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
            }, h.time = function(a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }, h.totalTime = function(a, b, c) {
                if (j || i.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration,
                            e = this._timeline;
                        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z())
                }
                return this
            }, h.progress = h.totalProgress = function(a, b) {
                var c = this.duration();
                return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
            }, h.startTime = function(a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
            }, h.endTime = function(a) {
                return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
            }, h.timeScale = function(a) {
                if (!arguments.length) return this._timeScale;
                var b, c;
                for (a = a || m, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline;
                return this
            }, h.reversed = function(a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, h.paused = function(a) {
                if (!arguments.length) return this._paused;
                var b, c, d = this._timeline;
                return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
            };
            var F = t("core.SimpleTimeline", function(a) {
                D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (h = F.prototype = new D).constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function(a, b, c, d) {
                var e, f;
                if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                    for (f = a._startTime; e && e._startTime > f;) e = e._prev;
                return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
            }, h._remove = function(a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, h.render = function(a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
            }, h.rawTime = function() {
                return j || i.wake(), this._totalTime
            };
            var G = t("TweenLite", function(b, c, d) {
                    if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : G.selector(b) || b;
                    var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite;
                    if (this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0])
                        for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++)(f = g[e]) ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = $(f, this, !1), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e])) : "string" == typeof(f = g[e--] = G.selector(f)) && g.splice(e + 1, 1) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = $(b, this, !1), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -m, this.render(Math.min(0, -this._delay)))
                }, !0),
                H = function(b) {
                    return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                };
            (h = G.prototype = new D).constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.20.3", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function(a, b) {
                i.lagSmoothing(a, b)
            }, G.selector = a.$ || a.jQuery || function(b) {
                var c = a.$ || a.jQuery;
                return c ? (G.selector = c, c(b)) : void 0 === d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
            };
            var J = [],
                K = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                M = /[\+-]=-?[\.\d]/,
                N = function(a) {
                    for (var b, c = this._firstPT; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : 1e-6 > b && b > -1e-6 && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
                },
                O = function(a, b, c, d) {
                    var e, f, g, h, i, j, k, l = [],
                        m = 0,
                        n = "",
                        o = 0;
                    for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                        _next: l._firstPT,
                        t: l,
                        p: l.length - 1,
                        s: g,
                        c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                        f: 0,
                        m: o && 4 > o ? Math.round : 0
                    }), m += k.length;
                    return (n += b.substr(m)) && l.push(n), l.setRatio = N, M.test(b) && (l.end = null), l
                },
                P = function(a, b, c, d, e, f, g, h, i) {
                    "function" == typeof d && (d = d(i || 0, a));
                    var j, k = typeof a[b],
                        l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                        m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
                        n = "string" == typeof d && "=" === d.charAt(1),
                        o = {
                            t: a,
                            p: b,
                            s: m,
                            f: "function" === k,
                            pg: 0,
                            n: e || b,
                            m: f ? "function" == typeof f ? f : Math.round : 0,
                            pr: 0,
                            c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                        };
                    return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = O(m, n ? parseFloat(o.s) + o.c : d, h || G.defaultStringFilter, o), o = {
                        t: j,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: e || b,
                        pr: 0,
                        m: 0
                    }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
                },
                Q = G._internals = {
                    isArray: p,
                    isSelector: H,
                    lazyTweens: J,
                    blobDif: O
                },
                R = G._plugins = {},
                S = Q.tweenLookup = {},
                T = 0,
                U = Q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                V = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                W = D._rootFramesTimeline = new F,
                X = D._rootTimeline = new F,
                Y = 30,
                Z = Q.lazyRender = function() {
                    var a, b = J.length;
                    for (K = {}; --b > -1;)(a = J[b]) && !1 !== a._lazy && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                    J.length = 0
                };
            X._startTime = i.time, W._startTime = i.frame, X._active = W._active = !0, setTimeout(Z, 1), D._updateRoot = G.render = function() {
                var a, b, c;
                if (J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y) {
                    Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
                    for (c in S) {
                        for (a = (b = S[c].tweens).length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete S[c]
                    }
                    if ((!(c = X._first) || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length) {
                        for (; c && c._paused;) c = c._next;
                        c || i.sleep()
                    }
                }
            }, i.addEventListener("tick", D._updateRoot);
            var $ = function(a, b, c) {
                    var d, e, f = a._gsTweenID;
                    if (S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = {
                            target: a,
                            tweens: []
                        }), b && (d = S[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return S[f].tweens
                },
                _ = function(a, b, c, d) {
                    var e, f, g = a.vars.onOverwrite;
                    return g && (e = g(a, b, c, d)), (g = G.onOverwrite) && (f = g(a, b, c, d)), !1 !== e && !1 !== f
                },
                aa = function(a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                            else if (5 === d) break;
                        return g
                    }
                    var j, k = b._startTime + m,
                        l = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ba(b, 0, o), 0 === ba(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
                    for (f = n; --f > -1;)
                        if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                            if (2 !== d && !_(h, b)) continue;
                            h._enabled(!1, !1) && (g = !0)
                        }
                    return g
                },
                ba = function(a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline
                    }
                    return (f /= e) > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m
                };
            h._init = function() {
                var a, b, c, d, e, f, g = this.vars,
                    h = this._overwrittenProps,
                    i = this._duration,
                    j = !!g.immediateRender,
                    k = g.ease;
                if (g.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                    for (d in g.startAt) e[d] = g.startAt[d];
                    if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && !1 !== g.lazy, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = G.to(this.target, 0, e), j)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== i) return
                } else if (g.runBackwards && 0 !== i)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (j = !1), c = {};
                        for (d in g) U[d] && "autoCSS" !== d || (c[d] = g[d]);
                        if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && !1 !== g.lazy, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
                if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = g.onUpdate, this._initted = !0
            }, h._initProps = function(b, c, d, e, f) {
                var g, h, i, j, k, l;
                if (null == b) return !1;
                K[b._gsTweenID] && Z(), this.vars.css || b.style && b !== a && b.nodeType && R.css && !1 !== this.vars.autoCSS && function(a, b) {
                    var c, d = {};
                    for (c in a) U[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!R[c] || R[c] && R[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d
                }(this.vars, b);
                for (g in this.vars)
                    if (l = this.vars[g], U[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                    else if (R[g] && (j = new R[g])._onInitTween(b, this.vars[g], this, f)) {
                    for (this._firstPT = k = {
                            _next: this._firstPT,
                            t: j,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: g,
                            pg: 1,
                            pr: j._priority,
                            m: 0
                        }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
                    (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
                } else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
                return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i)
            }, h.render = function(a, b, c) {
                var d, e, f, g, h = this._time,
                    i = this._duration,
                    j = this._rawPrevTime;
                if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) {
                    var k = a / i,
                        l = this._easeType,
                        n = this._easePower;
                    (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), this.ratio = 1 === l ? 1 - k : 2 === l ? k : .5 > a / i ? k / 2 : 1 - k / 2
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void(this._lazy = [a, b]);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && -1e-4 !== a && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && -1e-4 !== a && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0))
                }
            }, h._kill = function(a, b, c) {
                if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
                var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
                if ((p(b) || H(b)) && "number" != typeof b[0])
                    for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
                else {
                    if (this._targets) {
                        for (d = this._targets.length; --d > -1;)
                            if (b === this._targets[d]) {
                                h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                                break
                            }
                    } else {
                        if (b !== this.target) return !1;
                        h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                    if (h) {
                        if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
                            for (f in j) h[f] && (l || (l = []), l.push(f));
                            if ((l || !a) && !_(this, c, b, l)) return !1
                        }
                        for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return i
            }, h.invalidate = function() {
                return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this
            }, h._enabled = function(a, b) {
                if (j || i.wake(), a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = $(d[c], this, !0);
                    else this._siblings = $(this.target, this, !0)
                }
                return D.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && G._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
            }, G.to = function(a, b, c) {
                return new G(a, b, c)
            }, G.from = function(a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c)
            }, G.fromTo = function(a, b, c, d) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d)
            }, G.delayedCall = function(a, b, c, d, e) {
                return new G(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    callbackScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }, G.set = function(a, b) {
                return new G(a, 0, b)
            }, G.getTweensOf = function(a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : G.selector(a) || a;
                var c, d, e, f;
                if ((p(a) || H(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                } else if (a._gsTweenID)
                    for (d = $(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d || []
            }, G.killTweensOf = G.killDelayedCallsTo = function(a, b, c) {
                "object" == typeof b && (c = b, b = !1);
                for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
            };
            var ca = t("plugins.TweenPlugin", function(a, b) {
                this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ca.prototype
            }, !0);
            if (h = ca.prototype, ca.version = "1.19.0", ca.API = 2, h._firstPT = null, h._addTween = P, h.setRatio = N, h._kill = function(a) {
                    var b, c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                    for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                    return !1
                }, h._mod = h._roundProps = function(a) {
                    for (var b, c = this._firstPT; c;)(b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
                }, G._onPluginEvent = function(a, b) {
                    var c, d, e, f, g, h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h;) {
                            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                        }
                        h = b._firstPT = e
                    }
                    for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                    return c
                }, ca.activate = function(a) {
                    for (var b = a.length; --b > -1;) a[b].API === ca.API && (R[(new a[b])._propName] = a[b]);
                    return !0
                }, s.plugin = function(a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                            ca.call(this, c, d), this._overwriteProps = e || []
                        }, !0 === a.global),
                        h = g.prototype = new ca(c);
                    h.constructor = g, g.API = a.API;
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return g.version = a.version, ca.activate([g]), g
                }, f = a._gsQueue) {
                for (g = 0; g < f.length; g++) f[g]();
                for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h)
            }
            j = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function() {
        function n(n) {
            return function(r, e, u, i) {
                e = d(e, i, 4);
                var o = !w(r) && m.keys(r),
                    a = (o || r).length,
                    c = n > 0 ? 0 : a - 1;
                return arguments.length < 3 && (u = r[o ? o[c] : c], c += n),
                    function(t, r, e, u, i, o) {
                        for (; i >= 0 && o > i; i += n) {
                            var a = u ? u[i] : i;
                            e = r(e, t[a], a, t)
                        }
                        return e
                    }(r, e, u, o, c, a)
            }
        }

        function t(n) {
            return function(t, r, e) {
                r = b(r, e);
                for (var u = null != t && t.length, i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                    if (r(t[i], i, t)) return i;
                return -1
            }
        }

        function r(n, t) {
            var r = S.length,
                e = n.constructor,
                u = m.isFunction(e) && e.prototype || o,
                i = "constructor";
            for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;)(i = S[r]) in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
        }
        var e = this,
            u = e._,
            i = Array.prototype,
            o = Object.prototype,
            a = Function.prototype,
            c = i.push,
            l = i.slice,
            f = o.toString,
            s = o.hasOwnProperty,
            p = Array.isArray,
            h = Object.keys,
            v = a.bind,
            g = Object.create,
            y = function() {},
            m = function(n) {
                return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : e._ = m, m.VERSION = "1.8.2";
        var d = function(n, t, r) {
                if (void 0 === t) return n;
                switch (null == r ? 3 : r) {
                    case 1:
                        return function(r) {
                            return n.call(t, r)
                        };
                    case 2:
                        return function(r, e) {
                            return n.call(t, r, e)
                        };
                    case 3:
                        return function(r, e, u) {
                            return n.call(t, r, e, u)
                        };
                    case 4:
                        return function(r, e, u, i) {
                            return n.call(t, r, e, u, i)
                        }
                }
                return function() {
                    return n.apply(t, arguments)
                }
            },
            b = function(n, t, r) {
                return null == n ? m.identity : m.isFunction(n) ? d(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
            };
        m.iteratee = function(n, t) {
            return b(n, t, 1 / 0)
        };
        var x = function(n, t) {
                return function(r) {
                    var e = arguments.length;
                    if (2 > e || null == r) return r;
                    for (var u = 1; e > u; u++)
                        for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                            var l = o[c];
                            t && void 0 !== r[l] || (r[l] = i[l])
                        }
                    return r
                }
            },
            j = Math.pow(2, 53) - 1,
            w = function(n) {
                var t = n && n.length;
                return "number" == typeof t && t >= 0 && j >= t
            };
        m.each = m.forEach = function(n, t, r) {
            t = d(t, r);
            var e, u;
            if (w(n))
                for (e = 0, u = n.length; u > e; e++) t(n[e], e, n);
            else {
                var i = m.keys(n);
                for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n)
            }
            return n
        }, m.map = m.collect = function(n, t, r) {
            t = b(t, r);
            for (var e = !w(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
                var a = e ? e[o] : o;
                i[o] = t(n[a], a, n)
            }
            return i
        }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, t, r) {
            var e;
            return void 0 !== (e = w(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r)) && -1 !== e ? n[e] : void 0
        }, m.filter = m.select = function(n, t, r) {
            var e = [];
            return t = b(t, r), m.each(n, function(n, r, u) {
                t(n, r, u) && e.push(n)
            }), e
        }, m.reject = function(n, t, r) {
            return m.filter(n, m.negate(b(t)), r)
        }, m.every = m.all = function(n, t, r) {
            t = b(t, r);
            for (var e = !w(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
                var o = e ? e[i] : i;
                if (!t(n[o], o, n)) return !1
            }
            return !0
        }, m.some = m.any = function(n, t, r) {
            t = b(t, r);
            for (var e = !w(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
                var o = e ? e[i] : i;
                if (t(n[o], o, n)) return !0
            }
            return !1
        }, m.contains = m.includes = m.include = function(n, t, r) {
            return w(n) || (n = m.values(n)), m.indexOf(n, t, "number" == typeof r && r) >= 0
        }, m.invoke = function(n, t) {
            var r = l.call(arguments, 2),
                e = m.isFunction(t);
            return m.map(n, function(n) {
                var u = e ? t : n[t];
                return null == u ? u : u.apply(n, r)
            })
        }, m.pluck = function(n, t) {
            return m.map(n, m.property(t))
        }, m.where = function(n, t) {
            return m.filter(n, m.matcher(t))
        }, m.findWhere = function(n, t) {
            return m.find(n, m.matcher(t))
        }, m.max = function(n, t, r) {
            var e, u, i = -1 / 0,
                o = -1 / 0;
            if (null == t && null != n)
                for (var a = 0, c = (n = w(n) ? n : m.values(n)).length; c > a; a++)(e = n[a]) > i && (i = e);
            else t = b(t, r), m.each(n, function(n, r, e) {
                ((u = t(n, r, e)) > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
            });
            return i
        }, m.min = function(n, t, r) {
            var e, u, i = 1 / 0,
                o = 1 / 0;
            if (null == t && null != n)
                for (var a = 0, c = (n = w(n) ? n : m.values(n)).length; c > a; a++) e = n[a], i > e && (i = e);
            else t = b(t, r), m.each(n, function(n, r, e) {
                u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
            });
            return i
        }, m.shuffle = function(n) {
            for (var t, r = w(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)(t = m.random(0, i)) !== i && (u[i] = u[t]), u[t] = r[i];
            return u
        }, m.sample = function(n, t, r) {
            return null == t || r ? (w(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
        }, m.sortBy = function(n, t, r) {
            return t = b(t, r), m.pluck(m.map(n, function(n, r, e) {
                return {
                    value: n,
                    index: r,
                    criteria: t(n, r, e)
                }
            }).sort(function(n, t) {
                var r = n.criteria,
                    e = t.criteria;
                if (r !== e) {
                    if (r > e || void 0 === r) return 1;
                    if (e > r || void 0 === e) return -1
                }
                return n.index - t.index
            }), "value")
        };
        var A = function(n) {
            return function(t, r, e) {
                var u = {};
                return r = b(r, e), m.each(t, function(e, i) {
                    var o = r(e, i, t);
                    n(u, e, o)
                }), u
            }
        };
        m.groupBy = A(function(n, t, r) {
            m.has(n, r) ? n[r].push(t) : n[r] = [t]
        }), m.indexBy = A(function(n, t, r) {
            n[r] = t
        }), m.countBy = A(function(n, t, r) {
            m.has(n, r) ? n[r]++ : n[r] = 1
        }), m.toArray = function(n) {
            return n ? m.isArray(n) ? l.call(n) : w(n) ? m.map(n, m.identity) : m.values(n) : []
        }, m.size = function(n) {
            return null == n ? 0 : w(n) ? n.length : m.keys(n).length
        }, m.partition = function(n, t, r) {
            t = b(t, r);
            var e = [],
                u = [];
            return m.each(n, function(n, r, i) {
                (t(n, r, i) ? e : u).push(n)
            }), [e, u]
        }, m.first = m.head = m.take = function(n, t, r) {
            return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
        }, m.initial = function(n, t, r) {
            return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
        }, m.last = function(n, t, r) {
            return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
        }, m.rest = m.tail = m.drop = function(n, t, r) {
            return l.call(n, null == t || r ? 1 : t)
        }, m.compact = function(n) {
            return m.filter(n, m.identity)
        };
        var k = function(n, t, r, e) {
            for (var u = [], i = 0, o = e || 0, a = n && n.length; a > o; o++) {
                var c = n[o];
                if (w(c) && (m.isArray(c) || m.isArguments(c))) {
                    t || (c = k(c, t, r));
                    var l = 0,
                        f = c.length;
                    for (u.length += f; f > l;) u[i++] = c[l++]
                } else r || (u[i++] = c)
            }
            return u
        };
        m.flatten = function(n, t) {
            return k(n, t, !1)
        }, m.without = function(n) {
            return m.difference(n, l.call(arguments, 1))
        }, m.uniq = m.unique = function(n, t, r, e) {
            if (null == n) return [];
            m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = b(r, e));
            for (var u = [], i = [], o = 0, a = n.length; a > o; o++) {
                var c = n[o],
                    l = r ? r(c, o, n) : c;
                t ? (o && i === l || u.push(c), i = l) : r ? m.contains(i, l) || (i.push(l), u.push(c)) : m.contains(u, c) || u.push(c)
            }
            return u
        }, m.union = function() {
            return m.uniq(k(arguments, !0, !0))
        }, m.intersection = function(n) {
            if (null == n) return [];
            for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) {
                var i = n[e];
                if (!m.contains(t, i)) {
                    for (var o = 1; r > o && m.contains(arguments[o], i); o++);
                    o === r && t.push(i)
                }
            }
            return t
        }, m.difference = function(n) {
            var t = k(arguments, !0, !0, 1);
            return m.filter(n, function(n) {
                return !m.contains(t, n)
            })
        }, m.zip = function() {
            return m.unzip(arguments)
        }, m.unzip = function(n) {
            for (var t = n && m.max(n, "length").length || 0, r = Array(t), e = 0; t > e; e++) r[e] = m.pluck(n, e);
            return r
        }, m.object = function(n, t) {
            for (var r = {}, e = 0, u = n && n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
            return r
        }, m.indexOf = function(n, t, r) {
            var e = 0,
                u = n && n.length;
            if ("number" == typeof r) e = 0 > r ? Math.max(0, u + r) : r;
            else if (r && u) return e = m.sortedIndex(n, t), n[e] === t ? e : -1;
            if (t != t) return m.findIndex(l.call(n, e), m.isNaN);
            for (; u > e; e++)
                if (n[e] === t) return e;
            return -1
        }, m.lastIndexOf = function(n, t, r) {
            var e = n ? n.length : 0;
            if ("number" == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)), t != t) return m.findLastIndex(l.call(n, 0, e), m.isNaN);
            for (; --e >= 0;)
                if (n[e] === t) return e;
            return -1
        }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function(n, t, r, e) {
            for (var u = (r = b(r, e, 1))(t), i = 0, o = n.length; o > i;) {
                var a = Math.floor((i + o) / 2);
                r(n[a]) < u ? i = a + 1 : o = a
            }
            return i
        }, m.range = function(n, t, r) {
            arguments.length <= 1 && (t = n || 0, n = 0), r = r || 1;
            for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n;
            return u
        };
        var O = function(n, t, r, e, u) {
            if (!(e instanceof t)) return n.apply(r, u);
            var i = function(n) {
                    if (!m.isObject(n)) return {};
                    if (g) return g(n);
                    y.prototype = n;
                    var t = new y;
                    return y.prototype = null, t
                }(n.prototype),
                o = n.apply(i, u);
            return m.isObject(o) ? o : i
        };
        m.bind = function(n, t) {
            if (v && n.bind === v) return v.apply(n, l.call(arguments, 1));
            if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
            var r = l.call(arguments, 2),
                e = function() {
                    return O(n, e, t, this, r.concat(l.call(arguments)))
                };
            return e
        }, m.partial = function(n) {
            var t = l.call(arguments, 1),
                r = function() {
                    for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
                    for (; e < arguments.length;) i.push(arguments[e++]);
                    return O(n, r, this, this, i)
                };
            return r
        }, m.bindAll = function(n) {
            var t, r, e = arguments.length;
            if (1 >= e) throw new Error("bindAll must be passed function names");
            for (t = 1; e > t; t++) r = arguments[t], n[r] = m.bind(n[r], n);
            return n
        }, m.memoize = function(n, t) {
            var r = function(e) {
                var u = r.cache,
                    i = "" + (t ? t.apply(this, arguments) : e);
                return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
            };
            return r.cache = {}, r
        }, m.delay = function(n, t) {
            var r = l.call(arguments, 2);
            return setTimeout(function() {
                return n.apply(null, r)
            }, t)
        }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, t, r) {
            var e, u, i, o = null,
                a = 0;
            r || (r = {});
            var c = function() {
                a = !1 === r.leading ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
            };
            return function() {
                var l = m.now();
                a || !1 !== r.leading || (a = l);
                var f = t - (l - a);
                return e = this, u = arguments, 0 >= f || f > t ? (o && (clearTimeout(o), o = null), a = l, i = n.apply(e, u), o || (e = u = null)) : o || !1 === r.trailing || (o = setTimeout(c, f)), i
            }
        }, m.debounce = function(n, t, r) {
            var e, u, i, o, a, c = function() {
                var l = m.now() - o;
                t > l && l >= 0 ? e = setTimeout(c, t - l) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
            };
            return function() {
                i = this, u = arguments, o = m.now();
                var l = r && !e;
                return e || (e = setTimeout(c, t)), l && (a = n.apply(i, u), i = u = null), a
            }
        }, m.wrap = function(n, t) {
            return m.partial(t, n)
        }, m.negate = function(n) {
            return function() {
                return !n.apply(this, arguments)
            }
        }, m.compose = function() {
            var n = arguments,
                t = n.length - 1;
            return function() {
                for (var r = t, e = n[t].apply(this, arguments); r--;) e = n[r].call(this, e);
                return e
            }
        }, m.after = function(n, t) {
            return function() {
                return --n < 1 ? t.apply(this, arguments) : void 0
            }
        }, m.before = function(n, t) {
            var r;
            return function() {
                return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
            }
        }, m.once = m.partial(m.before, 2);
        var F = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            S = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        m.keys = function(n) {
            if (!m.isObject(n)) return [];
            if (h) return h(n);
            var t = [];
            for (var e in n) m.has(n, e) && t.push(e);
            return F && r(n, t), t
        }, m.allKeys = function(n) {
            if (!m.isObject(n)) return [];
            var t = [];
            for (var e in n) t.push(e);
            return F && r(n, t), t
        }, m.values = function(n) {
            for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
            return e
        }, m.mapObject = function(n, t, r) {
            t = b(t, r);
            for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) e = u[a], o[e] = t(n[e], e, n);
            return o
        }, m.pairs = function(n) {
            for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
            return e
        }, m.invert = function(n) {
            for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
            return t
        }, m.functions = m.methods = function(n) {
            var t = [];
            for (var r in n) m.isFunction(n[r]) && t.push(r);
            return t.sort()
        }, m.extend = x(m.allKeys), m.extendOwn = m.assign = x(m.keys), m.findKey = function(n, t, r) {
            t = b(t, r);
            for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
                if (e = u[i], t(n[e], e, n)) return e
        }, m.pick = function(n, t, r) {
            var e, u, i = {},
                o = n;
            if (null == o) return i;
            m.isFunction(t) ? (u = m.allKeys(o), e = d(t, r)) : (u = k(arguments, !1, !1, 1), e = function(n, t, r) {
                return t in r
            }, o = Object(o));
            for (var a = 0, c = u.length; c > a; a++) {
                var l = u[a],
                    f = o[l];
                e(f, l, o) && (i[l] = f)
            }
            return i
        }, m.omit = function(n, t, r) {
            if (m.isFunction(t)) t = m.negate(t);
            else {
                var e = m.map(k(arguments, !1, !1, 1), String);
                t = function(n, t) {
                    return !m.contains(e, t)
                }
            }
            return m.pick(n, t, r)
        }, m.defaults = x(m.allKeys, !0), m.clone = function(n) {
            return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
        }, m.tap = function(n, t) {
            return t(n), n
        }, m.isMatch = function(n, t) {
            var r = m.keys(t),
                e = r.length;
            if (null == n) return !e;
            for (var u = Object(n), i = 0; e > i; i++) {
                var o = r[i];
                if (t[o] !== u[o] || !(o in u)) return !1
            }
            return !0
        };
        var E = function(n, t, r, e) {
            if (n === t) return 0 !== n || 1 / n == 1 / t;
            if (null == n || null == t) return n === t;
            n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
            var u = f.call(n);
            if (u !== f.call(t)) return !1;
            switch (u) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + n == "" + t;
                case "[object Number]":
                    return +n != +n ? +t != +t : 0 == +n ? 1 / +n == 1 / t : +n == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +n == +t
            }
            var i = "[object Array]" === u;
            if (!i) {
                if ("object" != typeof n || "object" != typeof t) return !1;
                var o = n.constructor,
                    a = t.constructor;
                if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1
            }
            r = r || [], e = e || [];
            for (var c = r.length; c--;)
                if (r[c] === n) return e[c] === t;
            if (r.push(n), e.push(t), i) {
                if ((c = n.length) !== t.length) return !1;
                for (; c--;)
                    if (!E(n[c], t[c], r, e)) return !1
            } else {
                var l, s = m.keys(n);
                if (c = s.length, m.keys(t).length !== c) return !1;
                for (; c--;)
                    if (l = s[c], !m.has(t, l) || !E(n[l], t[l], r, e)) return !1
            }
            return r.pop(), e.pop(), !0
        };
        m.isEqual = function(n, t) {
            return E(n, t)
        }, m.isEmpty = function(n) {
            return null == n || (w(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length)
        }, m.isElement = function(n) {
            return !(!n || 1 !== n.nodeType)
        }, m.isArray = p || function(n) {
            return "[object Array]" === f.call(n)
        }, m.isObject = function(n) {
            var t = typeof n;
            return "function" === t || "object" === t && !!n
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
            m["is" + n] = function(t) {
                return f.call(t) === "[object " + n + "]"
            }
        }), m.isArguments(arguments) || (m.isArguments = function(n) {
            return m.has(n, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
            return "function" == typeof n || !1
        }), m.isFinite = function(n) {
            return isFinite(n) && !isNaN(parseFloat(n))
        }, m.isNaN = function(n) {
            return m.isNumber(n) && n !== +n
        }, m.isBoolean = function(n) {
            return !0 === n || !1 === n || "[object Boolean]" === f.call(n)
        }, m.isNull = function(n) {
            return null === n
        }, m.isUndefined = function(n) {
            return void 0 === n
        }, m.has = function(n, t) {
            return null != n && s.call(n, t)
        }, m.noConflict = function() {
            return e._ = u, this
        }, m.identity = function(n) {
            return n
        }, m.constant = function(n) {
            return function() {
                return n
            }
        }, m.noop = function() {}, m.property = function(n) {
            return function(t) {
                return null == t ? void 0 : t[n]
            }
        }, m.propertyOf = function(n) {
            return null == n ? function() {} : function(t) {
                return n[t]
            }
        }, m.matcher = m.matches = function(n) {
            return n = m.extendOwn({}, n),
                function(t) {
                    return m.isMatch(t, n)
                }
        }, m.times = function(n, t, r) {
            var e = Array(Math.max(0, n));
            t = d(t, r, 1);
            for (var u = 0; n > u; u++) e[u] = t(u);
            return e
        }, m.random = function(n, t) {
            return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
        }, m.now = Date.now || function() {
            return (new Date).getTime()
        };
        var M = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            N = m.invert(M),
            I = function(n) {
                var t = function(t) {
                        return n[t]
                    },
                    r = "(?:" + m.keys(n).join("|") + ")",
                    e = RegExp(r),
                    u = RegExp(r, "g");
                return function(n) {
                    return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
                }
            };
        m.escape = I(M), m.unescape = I(N), m.result = function(n, t, r) {
            var e = null == n ? void 0 : n[t];
            return void 0 === e && (e = r), m.isFunction(e) ? e.call(n) : e
        };
        var B = 0;
        m.uniqueId = function(n) {
            var t = ++B + "";
            return n ? n + t : t
        }, m.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var T = /(.)^/,
            R = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            q = /\\|'|\r|\n|\u2028|\u2029/g,
            K = function(n) {
                return "\\" + R[n]
            };
        m.template = function(n, t, r) {
            !t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
            var e = RegExp([(t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"),
                u = 0,
                i = "__p+='";
            n.replace(e, function(t, r, e, o, a) {
                return i += n.slice(u, a).replace(q, K), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
            }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
            try {
                var o = new Function(t.variable || "obj", "_", i)
            } catch (a) {
                throw a.source = i, a
            }
            var c = function(n) {
                    return o.call(this, n, m)
                },
                l = t.variable || "obj";
            return c.source = "function(" + l + "){\n" + i + "}", c
        }, m.chain = function(n) {
            var t = m(n);
            return t._chain = !0, t
        };
        var z = function(n, t) {
            return n._chain ? m(t).chain() : t
        };
        m.mixin = function(n) {
            m.each(m.functions(n), function(t) {
                var r = m[t] = n[t];
                m.prototype[t] = function() {
                    var n = [this._wrapped];
                    return c.apply(n, arguments), z(this, r.apply(m, n))
                }
            })
        }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
            var t = i[n];
            m.prototype[n] = function() {
                var r = this._wrapped;
                return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], z(this, r)
            }
        }), m.each(["concat", "join", "slice"], function(n) {
            var t = i[n];
            m.prototype[n] = function() {
                return z(this, t.apply(this._wrapped, arguments))
            }
        }), m.prototype.value = function() {
            return this._wrapped
        }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return m
        })
    }.call(this), this.createjs = this.createjs || {}, createjs.extend = function(subclass, superclass) {
        "use strict";

        function o() {
            this.constructor = subclass
        }
        return o.prototype = superclass.prototype, subclass.prototype = new o
    }, createjs.promote = function(subclass, prefix) {
        "use strict";
        var subP = subclass.prototype,
            supP = Object.getPrototypeOf && Object.getPrototypeOf(subP) || subP.__proto__;
        if (supP) {
            subP[(prefix += "_") + "constructor"] = supP.constructor;
            for (var n in supP) subP.hasOwnProperty(n) && "function" == typeof supP[n] && (subP[prefix + n] = supP[n])
        }
        return subclass
    }, createjs.indexOf = function(array, searchElement) {
        "use strict";
        for (var i = 0, l = array.length; i < l; i++)
            if (searchElement === array[i]) return i;
        return -1
    },
    function() {
        "use strict";

        function Event(type, bubbles, cancelable) {
            this.type = type, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!bubbles, this.cancelable = !!cancelable, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
        }
        var p = Event.prototype;
        p.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0
        }, p.stopPropagation = function() {
            this.propagationStopped = !0
        }, p.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, p.remove = function() {
            this.removed = !0
        }, p.clone = function() {
            return new Event(this.type, this.bubbles, this.cancelable)
        }, p.set = function(props) {
            for (var n in props) this[n] = props[n];
            return this
        }, p.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = Event
    }(),
    function() {
        "use strict";

        function EventDispatcher() {
            this._listeners = null, this._captureListeners = null
        }
        var p = EventDispatcher.prototype;
        EventDispatcher.initialize = function(target) {
            target.addEventListener = p.addEventListener, target.on = p.on, target.removeEventListener = target.off = p.removeEventListener, target.removeAllEventListeners = p.removeAllEventListeners, target.hasEventListener = p.hasEventListener, target.dispatchEvent = p.dispatchEvent, target._dispatchEvent = p._dispatchEvent, target.willTrigger = p.willTrigger
        }, p.addEventListener = function(type, listener, useCapture) {
            var listeners, arr = (listeners = useCapture ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {})[type];
            return arr && this.removeEventListener(type, listener, useCapture), (arr = listeners[type]) ? arr.push(listener) : listeners[type] = [listener], listener
        }, p.on = function(type, listener, scope, once, data, useCapture) {
            return listener.handleEvent && (scope = scope || listener, listener = listener.handleEvent), scope = scope || this, this.addEventListener(type, function(evt) {
                listener.call(scope, evt, data), once && evt.remove()
            }, useCapture)
        }, p.removeEventListener = function(type, listener, useCapture) {
            var listeners = useCapture ? this._captureListeners : this._listeners;
            if (listeners) {
                var arr = listeners[type];
                if (arr)
                    for (var i = 0, l = arr.length; i < l; i++)
                        if (arr[i] == listener) {
                            1 == l ? delete listeners[type] : arr.splice(i, 1);
                            break
                        }
            }
        }, p.off = p.removeEventListener, p.removeAllEventListeners = function(type) {
            type ? (this._listeners && delete this._listeners[type], this._captureListeners && delete this._captureListeners[type]) : this._listeners = this._captureListeners = null
        }, p.dispatchEvent = function(eventObj, bubbles, cancelable) {
            if ("string" == typeof eventObj) {
                var listeners = this._listeners;
                if (!(bubbles || listeners && listeners[eventObj])) return !0;
                eventObj = new createjs.Event(eventObj, bubbles, cancelable)
            } else eventObj.target && eventObj.clone && (eventObj = eventObj.clone());
            try {
                eventObj.target = this
            } catch (e) {}
            if (eventObj.bubbles && this.parent) {
                for (var top = this, list = [top]; top.parent;) list.push(top = top.parent);
                var i, l = list.length;
                for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) list[i]._dispatchEvent(eventObj, 1 + (0 == i));
                for (i = 1; i < l && !eventObj.propagationStopped; i++) list[i]._dispatchEvent(eventObj, 3)
            } else this._dispatchEvent(eventObj, 2);
            return !eventObj.defaultPrevented
        }, p.hasEventListener = function(type) {
            var listeners = this._listeners,
                captureListeners = this._captureListeners;
            return !!(listeners && listeners[type] || captureListeners && captureListeners[type])
        }, p.willTrigger = function(type) {
            for (var o = this; o;) {
                if (o.hasEventListener(type)) return !0;
                o = o.parent
            }
            return !1
        }, p.toString = function() {
            return "[EventDispatcher]"
        }, p._dispatchEvent = function(eventObj, eventPhase) {
            var l, listeners = 1 == eventPhase ? this._captureListeners : this._listeners;
            if (eventObj && listeners) {
                var arr = listeners[eventObj.type];
                if (!arr || !(l = arr.length)) return;
                try {
                    eventObj.currentTarget = this
                } catch (e) {}
                try {
                    eventObj.eventPhase = eventPhase
                } catch (e) {}
                eventObj.removed = !1, arr = arr.slice();
                for (var i = 0; i < l && !eventObj.immediatePropagationStopped; i++) {
                    var o = arr[i];
                    o.handleEvent ? o.handleEvent(eventObj) : o(eventObj), eventObj.removed && (this.off(eventObj.type, o, 1 == eventPhase), eventObj.removed = !1)
                }
            }
        }, createjs.EventDispatcher = EventDispatcher
    }(),
    function() {
        "use strict";

        function Ticker() {
            throw "Ticker cannot be instantiated."
        }
        Ticker.RAF_SYNCHED = "synched", Ticker.RAF = "raf", Ticker.TIMEOUT = "timeout", Ticker.useRAF = !1, Ticker.timingMode = null, Ticker.maxDelta = 0, Ticker.paused = !1, Ticker.removeEventListener = null, Ticker.removeAllEventListeners = null, Ticker.dispatchEvent = null, Ticker.hasEventListener = null, Ticker._listeners = null, createjs.EventDispatcher.initialize(Ticker), Ticker._addEventListener = Ticker.addEventListener, Ticker.addEventListener = function() {
            return !Ticker._inited && Ticker.init(), Ticker._addEventListener.apply(Ticker, arguments)
        }, Ticker._inited = !1, Ticker._startTime = 0, Ticker._pausedTime = 0, Ticker._ticks = 0, Ticker._pausedTicks = 0, Ticker._interval = 50, Ticker._lastTime = 0, Ticker._times = null, Ticker._tickTimes = null, Ticker._timerId = null, Ticker._raf = !0, Ticker.setInterval = function(interval) {
            Ticker._interval = interval, Ticker._inited && Ticker._setupTick()
        }, Ticker.getInterval = function() {
            return Ticker._interval
        }, Ticker.setFPS = function(value) {
            Ticker.setInterval(1e3 / value)
        }, Ticker.getFPS = function() {
            return 1e3 / Ticker._interval
        };
        try {
            Object.defineProperties(Ticker, {
                interval: {
                    get: Ticker.getInterval,
                    set: Ticker.setInterval
                },
                framerate: {
                    get: Ticker.getFPS,
                    set: Ticker.setFPS
                }
            })
        } catch (e) {
            console.log(e)
        }
        Ticker.init = function() {
            Ticker._inited || (Ticker._inited = !0, Ticker._times = [], Ticker._tickTimes = [], Ticker._startTime = Ticker._getTime(), Ticker._times.push(Ticker._lastTime = 0), Ticker.interval = Ticker._interval)
        }, Ticker.reset = function() {
            if (Ticker._raf) {
                var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                f && f(Ticker._timerId)
            } else clearTimeout(Ticker._timerId);
            Ticker.removeAllEventListeners("tick"), Ticker._timerId = Ticker._times = Ticker._tickTimes = null, Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0, Ticker._inited = !1
        }, Ticker.getMeasuredTickTime = function(ticks) {
            var ttl = 0,
                times = Ticker._tickTimes;
            if (!times || times.length < 1) return -1;
            ticks = Math.min(times.length, ticks || 0 | Ticker.getFPS());
            for (var i = 0; i < ticks; i++) ttl += times[i];
            return ttl / ticks
        }, Ticker.getMeasuredFPS = function(ticks) {
            var times = Ticker._times;
            return !times || times.length < 2 ? -1 : (ticks = Math.min(times.length - 1, ticks || 0 | Ticker.getFPS()), 1e3 / ((times[0] - times[ticks]) / ticks))
        }, Ticker.setPaused = function(value) {
            Ticker.paused = value
        }, Ticker.getPaused = function() {
            return Ticker.paused
        }, Ticker.getTime = function(runTime) {
            return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1
        }, Ticker.getEventTime = function(runTime) {
            return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1
        }, Ticker.getTicks = function(pauseable) {
            return Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0)
        }, Ticker._handleSynch = function() {
            Ticker._timerId = null, Ticker._setupTick(), Ticker._getTime() - Ticker._lastTime >= .97 * (Ticker._interval - 1) && Ticker._tick()
        }, Ticker._handleRAF = function() {
            Ticker._timerId = null, Ticker._setupTick(), Ticker._tick()
        }, Ticker._handleTimeout = function() {
            Ticker._timerId = null, Ticker._setupTick(), Ticker._tick()
        }, Ticker._setupTick = function() {
            if (null == Ticker._timerId) {
                var mode = Ticker.timingMode || Ticker.useRAF && Ticker.RAF_SYNCHED;
                if (mode == Ticker.RAF_SYNCHED || mode == Ticker.RAF) {
                    var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                    if (f) return Ticker._timerId = f(mode == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch), void(Ticker._raf = !0)
                }
                Ticker._raf = !1, Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval)
            }
        }, Ticker._tick = function() {
            var paused = Ticker.paused,
                time = Ticker._getTime(),
                elapsedTime = time - Ticker._lastTime;
            if (Ticker._lastTime = time, Ticker._ticks++, paused && (Ticker._pausedTicks++, Ticker._pausedTime += elapsedTime), Ticker.hasEventListener("tick")) {
                var event = new createjs.Event("tick"),
                    maxDelta = Ticker.maxDelta;
                event.delta = maxDelta && elapsedTime > maxDelta ? maxDelta : elapsedTime, event.paused = paused, event.time = time, event.runTime = time - Ticker._pausedTime, Ticker.dispatchEvent(event)
            }
            for (Ticker._tickTimes.unshift(Ticker._getTime() - time); Ticker._tickTimes.length > 100;) Ticker._tickTimes.pop();
            for (Ticker._times.unshift(time); Ticker._times.length > 100;) Ticker._times.pop()
        };
        var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
        Ticker._getTime = function() {
            return (now && now.call(performance) || (new Date).getTime()) - Ticker._startTime
        }, createjs.Ticker = Ticker
    }(),
    function() {
        "use strict";

        function UID() {
            throw "UID cannot be instantiated"
        }
        UID._nextID = 0, UID.get = function() {
            return UID._nextID++
        }, createjs.UID = UID
    }(),
    function() {
        "use strict";

        function MouseEvent(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY, relatedTarget) {
            this.Event_constructor(type, bubbles, cancelable), this.stageX = stageX, this.stageY = stageY, this.rawX = null == rawX ? stageX : rawX, this.rawY = null == rawY ? stageY : rawY, this.nativeEvent = nativeEvent, this.pointerID = pointerID, this.primary = !!primary, this.relatedTarget = relatedTarget
        }
        var p = createjs.extend(MouseEvent, createjs.Event);
        p._get_localX = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
        }, p._get_localY = function() {
            return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
        }, p._get_isTouch = function() {
            return -1 !== this.pointerID
        };
        try {
            Object.defineProperties(p, {
                localX: {
                    get: p._get_localX
                },
                localY: {
                    get: p._get_localY
                },
                isTouch: {
                    get: p._get_isTouch
                }
            })
        } catch (e) {}
        p.clone = function() {
            return new MouseEvent(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
        }, p.toString = function() {
            return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
        }, createjs.MouseEvent = createjs.promote(MouseEvent, "Event")
    }(),
    function() {
        "use strict";

        function Matrix2D(a, b, c, d, tx, ty) {
            this.setValues(a, b, c, d, tx, ty)
        }
        var p = Matrix2D.prototype;
        Matrix2D.DEG_TO_RAD = Math.PI / 180, Matrix2D.identity = null, p.setValues = function(a, b, c, d, tx, ty) {
            return this.a = null == a ? 1 : a, this.b = b || 0, this.c = c || 0, this.d = null == d ? 1 : d, this.tx = tx || 0, this.ty = ty || 0, this
        }, p.append = function(a, b, c, d, tx, ty) {
            var a1 = this.a,
                b1 = this.b,
                c1 = this.c,
                d1 = this.d;
            return 1 == a && 0 == b && 0 == c && 1 == d || (this.a = a1 * a + c1 * b, this.b = b1 * a + d1 * b, this.c = a1 * c + c1 * d, this.d = b1 * c + d1 * d), this.tx = a1 * tx + c1 * ty + this.tx, this.ty = b1 * tx + d1 * ty + this.ty, this
        }, p.prepend = function(a, b, c, d, tx, ty) {
            var a1 = this.a,
                c1 = this.c,
                tx1 = this.tx;
            return this.a = a * a1 + c * this.b, this.b = b * a1 + d * this.b, this.c = a * c1 + c * this.d, this.d = b * c1 + d * this.d, this.tx = a * tx1 + c * this.ty + tx, this.ty = b * tx1 + d * this.ty + ty, this
        }, p.appendMatrix = function(matrix) {
            return this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty)
        }, p.prependMatrix = function(matrix) {
            return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty)
        }, p.appendTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
            if (rotation % 360) var r = rotation * Matrix2D.DEG_TO_RAD,
                cos = Math.cos(r),
                sin = Math.sin(r);
            else cos = 1, sin = 0;
            return skewX || skewY ? (skewX *= Matrix2D.DEG_TO_RAD, skewY *= Matrix2D.DEG_TO_RAD, this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y), this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0)) : this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y), (regX || regY) && (this.tx -= regX * this.a + regY * this.c, this.ty -= regX * this.b + regY * this.d), this
        }, p.prependTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
            if (rotation % 360) var r = rotation * Matrix2D.DEG_TO_RAD,
                cos = Math.cos(r),
                sin = Math.sin(r);
            else cos = 1, sin = 0;
            return (regX || regY) && (this.tx -= regX, this.ty -= regY), skewX || skewY ? (skewX *= Matrix2D.DEG_TO_RAD, skewY *= Matrix2D.DEG_TO_RAD, this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0), this.prepend(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y)) : this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y), this
        }, p.rotate = function(angle) {
            angle *= Matrix2D.DEG_TO_RAD;
            var cos = Math.cos(angle),
                sin = Math.sin(angle),
                a1 = this.a,
                b1 = this.b;
            return this.a = a1 * cos + this.c * sin, this.b = b1 * cos + this.d * sin, this.c = -a1 * sin + this.c * cos, this.d = -b1 * sin + this.d * cos, this
        }, p.skew = function(skewX, skewY) {
            return skewX *= Matrix2D.DEG_TO_RAD, skewY *= Matrix2D.DEG_TO_RAD, this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0), this
        }, p.scale = function(x, y) {
            return this.a *= x, this.b *= x, this.c *= y, this.d *= y, this
        }, p.translate = function(x, y) {
            return this.tx += this.a * x + this.c * y, this.ty += this.b * x + this.d * y, this
        }, p.identity = function() {
            return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
        }, p.invert = function() {
            var a1 = this.a,
                b1 = this.b,
                c1 = this.c,
                d1 = this.d,
                tx1 = this.tx,
                n = a1 * d1 - b1 * c1;
            return this.a = d1 / n, this.b = -b1 / n, this.c = -c1 / n, this.d = a1 / n, this.tx = (c1 * this.ty - d1 * tx1) / n, this.ty = -(a1 * this.ty - b1 * tx1) / n, this
        }, p.isIdentity = function() {
            return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
        }, p.equals = function(matrix) {
            return this.tx === matrix.tx && this.ty === matrix.ty && this.a === matrix.a && this.b === matrix.b && this.c === matrix.c && this.d === matrix.d
        }, p.transformPoint = function(x, y, pt) {
            return pt = pt || {}, pt.x = x * this.a + y * this.c + this.tx, pt.y = x * this.b + y * this.d + this.ty, pt
        }, p.decompose = function(target) {
            null == target && (target = {}), target.x = this.tx, target.y = this.ty, target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
            var skewX = Math.atan2(-this.c, this.d),
                skewY = Math.atan2(this.b, this.a);
            return Math.abs(1 - skewX / skewY) < 1e-5 ? (target.rotation = skewY / Matrix2D.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (target.rotation += target.rotation <= 0 ? 180 : -180), target.skewX = target.skewY = 0) : (target.skewX = skewX / Matrix2D.DEG_TO_RAD, target.skewY = skewY / Matrix2D.DEG_TO_RAD), target
        }, p.copy = function(matrix) {
            return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty)
        }, p.clone = function() {
            return new Matrix2D(this.a, this.b, this.c, this.d, this.tx, this.ty)
        }, p.toString = function() {
            return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
        }, Matrix2D.identity = new Matrix2D, createjs.Matrix2D = Matrix2D
    }(),
    function() {
        "use strict";

        function DisplayProps(visible, alpha, shadow, compositeOperation, matrix) {
            this.setValues(visible, alpha, shadow, compositeOperation, matrix)
        }
        var p = DisplayProps.prototype;
        p.setValues = function(visible, alpha, shadow, compositeOperation, matrix) {
            return this.visible = null == visible || !!visible, this.alpha = null == alpha ? 1 : alpha, this.shadow = shadow, this.compositeOperation = compositeOperation, this.matrix = matrix || this.matrix && this.matrix.identity() || new createjs.Matrix2D, this
        }, p.append = function(visible, alpha, shadow, compositeOperation, matrix) {
            return this.alpha *= alpha, this.shadow = shadow || this.shadow, this.compositeOperation = compositeOperation || this.compositeOperation, this.visible = this.visible && visible, matrix && this.matrix.appendMatrix(matrix), this
        }, p.prepend = function(visible, alpha, shadow, compositeOperation, matrix) {
            return this.alpha *= alpha, this.shadow = this.shadow || shadow, this.compositeOperation = this.compositeOperation || compositeOperation, this.visible = this.visible && visible, matrix && this.matrix.prependMatrix(matrix), this
        }, p.identity = function() {
            return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this
        }, p.clone = function() {
            return new DisplayProps(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
        }, createjs.DisplayProps = DisplayProps
    }(),
    function() {
        "use strict";

        function Point(x, y) {
            this.setValues(x, y)
        }
        var p = Point.prototype;
        p.setValues = function(x, y) {
            return this.x = x || 0, this.y = y || 0, this
        }, p.copy = function(point) {
            return this.x = point.x, this.y = point.y, this
        }, p.clone = function() {
            return new Point(this.x, this.y)
        }, p.toString = function() {
            return "[Point (x=" + this.x + " y=" + this.y + ")]"
        }, createjs.Point = Point
    }(),
    function() {
        "use strict";

        function Rectangle(x, y, width, height) {
            this.setValues(x, y, width, height)
        }
        var p = Rectangle.prototype;
        p.setValues = function(x, y, width, height) {
            return this.x = x || 0, this.y = y || 0, this.width = width || 0, this.height = height || 0, this
        }, p.extend = function(x, y, width, height) {
            return width = width || 0, height = height || 0, x + width > this.x + this.width && (this.width = x + width - this.x), y + height > this.y + this.height && (this.height = y + height - this.y), x < this.x && (this.width += this.x - x, this.x = x), y < this.y && (this.height += this.y - y, this.y = y), this
        }, p.pad = function(top, left, bottom, right) {
            return this.x -= left, this.y -= top, this.width += left + right, this.height += top + bottom, this
        }, p.copy = function(rectangle) {
            return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
        }, p.contains = function(x, y, width, height) {
            return width = width || 0, height = height || 0, x >= this.x && x + width <= this.x + this.width && y >= this.y && y + height <= this.y + this.height
        }, p.union = function(rect) {
            return this.clone().extend(rect.x, rect.y, rect.width, rect.height)
        }, p.intersection = function(rect) {
            var x1 = rect.x,
                y1 = rect.y,
                x2 = x1 + rect.width,
                y2 = y1 + rect.height;
            return this.x > x1 && (x1 = this.x), this.y > y1 && (y1 = this.y), this.x + this.width < x2 && (x2 = this.x + this.width), this.y + this.height < y2 && (y2 = this.y + this.height), x2 <= x1 || y2 <= y1 ? null : new Rectangle(x1, y1, x2 - x1, y2 - y1)
        }, p.intersects = function(rect) {
            return rect.x <= this.x + this.width && this.x <= rect.x + rect.width && rect.y <= this.y + this.height && this.y <= rect.y + rect.height
        }, p.isEmpty = function() {
            return this.width <= 0 || this.height <= 0
        }, p.clone = function() {
            return new Rectangle(this.x, this.y, this.width, this.height)
        }, p.toString = function() {
            return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
        }, createjs.Rectangle = Rectangle
    }(),
    function() {
        "use strict";

        function ButtonHelper(target, outLabel, overLabel, downLabel, play, hitArea, hitLabel) {
            target.addEventListener && (this.target = target, this.overLabel = null == overLabel ? "over" : overLabel, this.outLabel = null == outLabel ? "out" : outLabel, this.downLabel = null == downLabel ? "down" : downLabel, this.play = play, this._isPressed = !1, this._isOver = !1, this._enabled = !1, target.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), hitArea && (hitLabel && (hitArea.actionsEnabled = !1, hitArea.gotoAndStop && hitArea.gotoAndStop(hitLabel)), target.hitArea = hitArea))
        }
        var p = ButtonHelper.prototype;
        p.setEnabled = function(value) {
            if (value != this._enabled) {
                var o = this.target;
                this._enabled = value, value ? (o.cursor = "pointer", o.addEventListener("rollover", this), o.addEventListener("rollout", this), o.addEventListener("mousedown", this), o.addEventListener("pressup", this), o._reset && (o.__reset = o._reset, o._reset = this._reset)) : (o.cursor = null, o.removeEventListener("rollover", this), o.removeEventListener("rollout", this), o.removeEventListener("mousedown", this), o.removeEventListener("pressup", this), o.__reset && (o._reset = o.__reset, delete o.__reset))
            }
        }, p.getEnabled = function() {
            return this._enabled
        };
        try {
            Object.defineProperties(p, {
                enabled: {
                    get: p.getEnabled,
                    set: p.setEnabled
                }
            })
        } catch (e) {}
        p.toString = function() {
            return "[ButtonHelper]"
        }, p.handleEvent = function(evt) {
            var label, t = this.target,
                type = evt.type;
            "mousedown" == type ? (this._isPressed = !0, label = this.downLabel) : "pressup" == type ? (this._isPressed = !1, label = this._isOver ? this.overLabel : this.outLabel) : "rollover" == type ? (this._isOver = !0, label = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, label = this._isPressed ? this.overLabel : this.outLabel), this.play ? t.gotoAndPlay && t.gotoAndPlay(label) : t.gotoAndStop && t.gotoAndStop(label)
        }, p._reset = function() {
            var p = this.paused;
            this.__reset(), this.paused = p
        }, createjs.ButtonHelper = ButtonHelper
    }(),
    function() {
        "use strict";

        function Shadow(color, offsetX, offsetY, blur) {
            this.color = color || "black", this.offsetX = offsetX || 0, this.offsetY = offsetY || 0, this.blur = blur || 0
        }
        var p = Shadow.prototype;
        Shadow.identity = new Shadow("transparent", 0, 0, 0), p.toString = function() {
            return "[Shadow]"
        }, p.clone = function() {
            return new Shadow(this.color, this.offsetX, this.offsetY, this.blur)
        }, createjs.Shadow = Shadow
    }(),
    function() {
        "use strict";

        function SpriteSheet(data) {
            this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(data)
        }
        var p = createjs.extend(SpriteSheet, createjs.EventDispatcher);
        p.getAnimations = function() {
            return this._animations.slice()
        };
        try {
            Object.defineProperties(p, {
                animations: {
                    get: p.getAnimations
                }
            })
        } catch (e) {}
        p.getNumFrames = function(animation) {
            if (null == animation) return this._frames ? this._frames.length : this._numFrames || 0;
            var data = this._data[animation];
            return null == data ? 0 : data.frames.length
        }, p.getAnimation = function(name) {
            return this._data[name]
        }, p.getFrame = function(frameIndex) {
            var frame;
            return this._frames && (frame = this._frames[frameIndex]) ? frame : null
        }, p.getFrameBounds = function(frameIndex, rectangle) {
            var frame = this.getFrame(frameIndex);
            return frame ? (rectangle || new createjs.Rectangle).setValues(-frame.regX, -frame.regY, frame.rect.width, frame.rect.height) : null
        }, p.toString = function() {
            return "[SpriteSheet]"
        }, p.clone = function() {
            throw "SpriteSheet cannot be cloned."
        }, p._parseData = function(data) {
            var i, l, o, a;
            if (null != data) {
                if (this.framerate = data.framerate || 0, data.images && (l = data.images.length) > 0)
                    for (a = this._images = [], i = 0; i < l; i++) {
                        var img = data.images[i];
                        if ("string" == typeof img) {
                            var src = img;
                            (img = document.createElement("img")).src = src
                        }
                        a.push(img), img.getContext || img.naturalWidth || (this._loadCount++, this.complete = !1, function(o, src) {
                            img.onload = function() {
                                o._handleImageLoad(src)
                            }
                        }(this, src), function(o, src) {
                            img.onerror = function() {
                                o._handleImageError(src)
                            }
                        }(this, src))
                    }
                if (null == data.frames);
                else if (Array.isArray(data.frames))
                    for (this._frames = [], i = 0, l = (a = data.frames).length; i < l; i++) {
                        var arr = a[i];
                        this._frames.push({
                            image: this._images[arr[4] ? arr[4] : 0],
                            rect: new createjs.Rectangle(arr[0], arr[1], arr[2], arr[3]),
                            regX: arr[5] || 0,
                            regY: arr[6] || 0
                        })
                    } else o = data.frames, this._frameWidth = o.width, this._frameHeight = o.height, this._regX = o.regX || 0, this._regY = o.regY || 0, this._spacing = o.spacing || 0, this._margin = o.margin || 0, this._numFrames = o.count, 0 == this._loadCount && this._calculateFrames();
                if (this._animations = [], null != (o = data.animations)) {
                    this._data = {};
                    var name;
                    for (name in o) {
                        var anim = {
                                name: name
                            },
                            obj = o[name];
                        if ("number" == typeof obj) a = anim.frames = [obj];
                        else if (Array.isArray(obj))
                            if (1 == obj.length) anim.frames = [obj[0]];
                            else
                                for (anim.speed = obj[3], anim.next = obj[2], a = anim.frames = [], i = obj[0]; i <= obj[1]; i++) a.push(i);
                        else {
                            anim.speed = obj.speed, anim.next = obj.next;
                            var frames = obj.frames;
                            a = anim.frames = "number" == typeof frames ? [frames] : frames.slice(0)
                        }!0 !== anim.next && void 0 !== anim.next || (anim.next = name), (!1 === anim.next || a.length < 2 && anim.next == name) && (anim.next = null), anim.speed || (anim.speed = 1), this._animations.push(name), this._data[name] = anim
                    }
                }
            }
        }, p._handleImageLoad = function(src) {
            0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
        }, p._handleImageError = function(src) {
            var errorEvent = new createjs.Event("error");
            errorEvent.src = src, this.dispatchEvent(errorEvent), 0 == --this._loadCount && this.dispatchEvent("complete")
        }, p._calculateFrames = function() {
            if (!this._frames && 0 != this._frameWidth) {
                this._frames = [];
                var maxFrames = this._numFrames || 1e5,
                    frameCount = 0,
                    frameWidth = this._frameWidth,
                    frameHeight = this._frameHeight,
                    spacing = this._spacing,
                    margin = this._margin;
                imgLoop: for (var i = 0, imgs = this._images; i < imgs.length; i++)
                    for (var img = imgs[i], imgW = img.width, imgH = img.height, y = margin; y <= imgH - margin - frameHeight;) {
                        for (var x = margin; x <= imgW - margin - frameWidth;) {
                            if (frameCount >= maxFrames) break imgLoop;
                            frameCount++, this._frames.push({
                                image: img,
                                rect: new createjs.Rectangle(x, y, frameWidth, frameHeight),
                                regX: this._regX,
                                regY: this._regY
                            }), x += frameWidth + spacing
                        }
                        y += frameHeight + spacing
                    }
                this._numFrames = frameCount
            }
        }, createjs.SpriteSheet = createjs.promote(SpriteSheet, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function Graphics() {
            this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear()
        }
        var p = Graphics.prototype,
            G = Graphics;
        Graphics.getRGB = function(r, g, b, alpha) {
            return null != r && null == b && (alpha = g, b = 255 & r, g = r >> 8 & 255, r = r >> 16 & 255), null == alpha ? "rgb(" + r + "," + g + "," + b + ")" : "rgba(" + r + "," + g + "," + b + "," + alpha + ")"
        }, Graphics.getHSL = function(hue, saturation, lightness, alpha) {
            return null == alpha ? "hsl(" + hue % 360 + "," + saturation + "%," + lightness + "%)" : "hsla(" + hue % 360 + "," + saturation + "%," + lightness + "%," + alpha + ")"
        }, Graphics.BASE_64 = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            a: 26,
            b: 27,
            c: 28,
            d: 29,
            e: 30,
            f: 31,
            g: 32,
            h: 33,
            i: 34,
            j: 35,
            k: 36,
            l: 37,
            m: 38,
            n: 39,
            o: 40,
            p: 41,
            q: 42,
            r: 43,
            s: 44,
            t: 45,
            u: 46,
            v: 47,
            w: 48,
            x: 49,
            y: 50,
            z: 51,
            0: 52,
            1: 53,
            2: 54,
            3: 55,
            4: 56,
            5: 57,
            6: 58,
            7: 59,
            8: 60,
            9: 61,
            "+": 62,
            "/": 63
        }, Graphics.STROKE_CAPS_MAP = ["butt", "round", "square"], Graphics.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
        var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.getContext && (Graphics._ctx = canvas.getContext("2d"), canvas.width = canvas.height = 1), p.getInstructions = function() {
            return this._updateInstructions(), this._instructions
        };
        try {
            Object.defineProperties(p, {
                instructions: {
                    get: p.getInstructions
                }
            })
        } catch (e) {}
        p.isEmpty = function() {
            return !(this._instructions.length || this._activeInstructions.length)
        }, p.draw = function(ctx, data) {
            this._updateInstructions();
            for (var instr = this._instructions, i = this._storeIndex, l = instr.length; i < l; i++) instr[i].exec(ctx, data)
        }, p.drawAsPath = function(ctx) {
            this._updateInstructions();
            for (var instr, instrs = this._instructions, i = this._storeIndex, l = instrs.length; i < l; i++) !1 !== (instr = instrs[i]).path && instr.exec(ctx)
        }, p.moveTo = function(x, y) {
            return this.append(new G.MoveTo(x, y), !0)
        }, p.lineTo = function(x, y) {
            return this.append(new G.LineTo(x, y))
        }, p.arcTo = function(x1, y1, x2, y2, radius) {
            return this.append(new G.ArcTo(x1, y1, x2, y2, radius))
        }, p.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            return this.append(new G.Arc(x, y, radius, startAngle, endAngle, anticlockwise))
        }, p.quadraticCurveTo = function(cpx, cpy, x, y) {
            return this.append(new G.QuadraticCurveTo(cpx, cpy, x, y))
        }, p.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            return this.append(new G.BezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y))
        }, p.rect = function(x, y, w, h) {
            return this.append(new G.Rect(x, y, w, h))
        }, p.closePath = function() {
            return this._activeInstructions.length ? this.append(new G.ClosePath) : this
        }, p.clear = function() {
            return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this
        }, p.beginFill = function(color) {
            return this._setFill(color ? new G.Fill(color) : null)
        }, p.beginLinearGradientFill = function(colors, ratios, x0, y0, x1, y1) {
            return this._setFill((new G.Fill).linearGradient(colors, ratios, x0, y0, x1, y1))
        }, p.beginRadialGradientFill = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            return this._setFill((new G.Fill).radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1))
        }, p.beginBitmapFill = function(image, repetition, matrix) {
            return this._setFill(new G.Fill(null, matrix).bitmap(image, repetition))
        }, p.endFill = function() {
            return this.beginFill()
        }, p.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
            return this._updateInstructions(!0), this._strokeStyle = this.command = new G.StrokeStyle(thickness, caps, joints, miterLimit, ignoreScale), this._stroke && (this._stroke.ignoreScale = ignoreScale), this._strokeIgnoreScale = ignoreScale, this
        }, p.setStrokeDash = function(segments, offset) {
            return this._updateInstructions(!0), this._strokeDash = this.command = new G.StrokeDash(segments, offset), this
        }, p.beginStroke = function(color) {
            return this._setStroke(color ? new G.Stroke(color) : null)
        }, p.beginLinearGradientStroke = function(colors, ratios, x0, y0, x1, y1) {
            return this._setStroke((new G.Stroke).linearGradient(colors, ratios, x0, y0, x1, y1))
        }, p.beginRadialGradientStroke = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            return this._setStroke((new G.Stroke).radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1))
        }, p.beginBitmapStroke = function(image, repetition) {
            return this._setStroke((new G.Stroke).bitmap(image, repetition))
        }, p.endStroke = function() {
            return this.beginStroke()
        }, p.curveTo = p.quadraticCurveTo, p.drawRect = p.rect, p.drawRoundRect = function(x, y, w, h, radius) {
            return this.drawRoundRectComplex(x, y, w, h, radius, radius, radius, radius)
        }, p.drawRoundRectComplex = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
            return this.append(new G.RoundRect(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL))
        }, p.drawCircle = function(x, y, radius) {
            return this.append(new G.Circle(x, y, radius))
        }, p.drawEllipse = function(x, y, w, h) {
            return this.append(new G.Ellipse(x, y, w, h))
        }, p.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
            return this.append(new G.PolyStar(x, y, radius, sides, pointSize, angle))
        }, p.append = function(command, clean) {
            return this._activeInstructions.push(command), this.command = command, clean || (this._dirty = !0), this
        }, p.decodePath = function(str) {
            for (var instructions = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], paramCount = [2, 2, 4, 6, 0], i = 0, l = str.length, params = [], x = 0, y = 0, base64 = Graphics.BASE_64; i < l;) {
                var c = str.charAt(i),
                    n = base64[c],
                    fi = n >> 3,
                    f = instructions[fi];
                if (!f || 3 & n) throw "bad path data (@" + i + "): " + c;
                var pl = paramCount[fi];
                fi || (x = y = 0), params.length = 0, i++;
                for (var charCount = 2 + (n >> 2 & 1), p = 0; p < pl; p++) {
                    var num = base64[str.charAt(i)],
                        sign = num >> 5 ? -1 : 1;
                    num = (31 & num) << 6 | base64[str.charAt(i + 1)], 3 == charCount && (num = num << 6 | base64[str.charAt(i + 2)]), num = sign * num / 10, p % 2 ? x = num += x : y = num += y, params[p] = num, i += charCount
                }
                f.apply(this, params)
            }
            return this
        }, p.store = function() {
            return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
        }, p.unstore = function() {
            return this._storeIndex = 0, this
        }, p.clone = function() {
            var o = new Graphics;
            return o.command = this.command, o._stroke = this._stroke, o._strokeStyle = this._strokeStyle, o._strokeDash = this._strokeDash, o._strokeIgnoreScale = this._strokeIgnoreScale, o._fill = this._fill, o._instructions = this._instructions.slice(), o._commitIndex = this._commitIndex, o._activeInstructions = this._activeInstructions.slice(), o._dirty = this._dirty, o._storeIndex = this._storeIndex, o
        }, p.toString = function() {
            return "[Graphics]"
        }, p.mt = p.moveTo, p.lt = p.lineTo, p.at = p.arcTo, p.bt = p.bezierCurveTo, p.qt = p.quadraticCurveTo, p.a = p.arc, p.r = p.rect, p.cp = p.closePath, p.c = p.clear, p.f = p.beginFill, p.lf = p.beginLinearGradientFill, p.rf = p.beginRadialGradientFill, p.bf = p.beginBitmapFill, p.ef = p.endFill, p.ss = p.setStrokeStyle, p.sd = p.setStrokeDash, p.s = p.beginStroke, p.ls = p.beginLinearGradientStroke, p.rs = p.beginRadialGradientStroke, p.bs = p.beginBitmapStroke, p.es = p.endStroke, p.dr = p.drawRect, p.rr = p.drawRoundRect, p.rc = p.drawRoundRectComplex, p.dc = p.drawCircle, p.de = p.drawEllipse, p.dp = p.drawPolyStar, p.p = p.decodePath, p._updateInstructions = function(commit) {
            var instr = this._instructions,
                active = this._activeInstructions,
                commitIndex = this._commitIndex;
            if (this._dirty && active.length) {
                instr.length = commitIndex, instr.push(Graphics.beginCmd);
                var l = active.length,
                    ll = instr.length;
                instr.length = ll + l;
                for (var i = 0; i < l; i++) instr[i + ll] = active[i];
                this._fill && instr.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && (this._oldStrokeDash = this._strokeDash, instr.push(this._strokeDash)), this._strokeStyle !== this._oldStrokeStyle && (this._oldStrokeStyle = this._strokeStyle, instr.push(this._strokeStyle)), instr.push(this._stroke)), this._dirty = !1
            }
            commit && (active.length = 0, this._commitIndex = instr.length)
        }, p._setFill = function(fill) {
            return this._updateInstructions(!0), this.command = this._fill = fill, this
        }, p._setStroke = function(stroke) {
            return this._updateInstructions(!0), (this.command = this._stroke = stroke) && (stroke.ignoreScale = this._strokeIgnoreScale), this
        }, (G.LineTo = function(x, y) {
            this.x = x, this.y = y
        }).prototype.exec = function(ctx) {
            ctx.lineTo(this.x, this.y)
        }, (G.MoveTo = function(x, y) {
            this.x = x, this.y = y
        }).prototype.exec = function(ctx) {
            ctx.moveTo(this.x, this.y)
        }, (G.ArcTo = function(x1, y1, x2, y2, radius) {
            this.x1 = x1, this.y1 = y1, this.x2 = x2, this.y2 = y2, this.radius = radius
        }).prototype.exec = function(ctx) {
            ctx.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
        }, (G.Arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
            this.x = x, this.y = y, this.radius = radius, this.startAngle = startAngle, this.endAngle = endAngle, this.anticlockwise = !!anticlockwise
        }).prototype.exec = function(ctx) {
            ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
        }, (G.QuadraticCurveTo = function(cpx, cpy, x, y) {
            this.cpx = cpx, this.cpy = cpy, this.x = x, this.y = y
        }).prototype.exec = function(ctx) {
            ctx.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
        }, (G.BezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
            this.cp1x = cp1x, this.cp1y = cp1y, this.cp2x = cp2x, this.cp2y = cp2y, this.x = x, this.y = y
        }).prototype.exec = function(ctx) {
            ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
        }, (G.Rect = function(x, y, w, h) {
            this.x = x, this.y = y, this.w = w, this.h = h
        }).prototype.exec = function(ctx) {
            ctx.rect(this.x, this.y, this.w, this.h)
        }, (G.ClosePath = function() {}).prototype.exec = function(ctx) {
            ctx.closePath()
        }, (G.BeginPath = function() {}).prototype.exec = function(ctx) {
            ctx.beginPath()
        }, (p = (G.Fill = function(style, matrix) {
            this.style = style, this.matrix = matrix
        }).prototype).exec = function(ctx) {
            if (this.style) {
                ctx.fillStyle = this.style;
                var mtx = this.matrix;
                mtx && (ctx.save(), ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)), ctx.fill(), mtx && ctx.restore()
            }
        }, p.linearGradient = function(colors, ratios, x0, y0, x1, y1) {
            for (var o = this.style = Graphics._ctx.createLinearGradient(x0, y0, x1, y1), i = 0, l = colors.length; i < l; i++) o.addColorStop(ratios[i], colors[i]);
            return o.props = {
                colors: colors,
                ratios: ratios,
                x0: x0,
                y0: y0,
                x1: x1,
                y1: y1,
                type: "linear"
            }, this
        }, p.radialGradient = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
            for (var o = this.style = Graphics._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1), i = 0, l = colors.length; i < l; i++) o.addColorStop(ratios[i], colors[i]);
            return o.props = {
                colors: colors,
                ratios: ratios,
                x0: x0,
                y0: y0,
                r0: r0,
                x1: x1,
                y1: y1,
                r1: r1,
                type: "radial"
            }, this
        }, p.bitmap = function(image, repetition) {
            if (image.naturalWidth || image.getContext || image.readyState >= 2) {
                (this.style = Graphics._ctx.createPattern(image, repetition || "")).props = {
                    image: image,
                    repetition: repetition,
                    type: "bitmap"
                }
            }
            return this
        }, p.path = !1, (p = (G.Stroke = function(style, ignoreScale) {
            this.style = style, this.ignoreScale = ignoreScale
        }).prototype).exec = function(ctx) {
            this.style && (ctx.strokeStyle = this.style, this.ignoreScale && (ctx.save(), ctx.setTransform(1, 0, 0, 1, 0, 0)), ctx.stroke(), this.ignoreScale && ctx.restore())
        }, p.linearGradient = G.Fill.prototype.linearGradient, p.radialGradient = G.Fill.prototype.radialGradient, p.bitmap = G.Fill.prototype.bitmap, p.path = !1, (p = (G.StrokeStyle = function(width, caps, joints, miterLimit, ignoreScale) {
            this.width = width, this.caps = caps, this.joints = joints, this.miterLimit = miterLimit, this.ignoreScale = ignoreScale
        }).prototype).exec = function(ctx) {
            ctx.lineWidth = null == this.width ? "1" : this.width, ctx.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : Graphics.STROKE_CAPS_MAP[this.caps], ctx.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : Graphics.STROKE_JOINTS_MAP[this.joints], ctx.miterLimit = null == this.miterLimit ? "10" : this.miterLimit, ctx.ignoreScale = null != this.ignoreScale && this.ignoreScale
        }, p.path = !1, (G.StrokeDash = function(segments, offset) {
            this.segments = segments, this.offset = offset || 0
        }).prototype.exec = function(ctx) {
            ctx.setLineDash && (ctx.setLineDash(this.segments || G.StrokeDash.EMPTY_SEGMENTS), ctx.lineDashOffset = this.offset || 0)
        }, G.StrokeDash.EMPTY_SEGMENTS = [], (G.RoundRect = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
            this.x = x, this.y = y, this.w = w, this.h = h, this.radiusTL = radiusTL, this.radiusTR = radiusTR, this.radiusBR = radiusBR, this.radiusBL = radiusBL
        }).prototype.exec = function(ctx) {
            var max = (w < h ? w : h) / 2,
                mTL = 0,
                mTR = 0,
                mBR = 0,
                mBL = 0,
                x = this.x,
                y = this.y,
                w = this.w,
                h = this.h,
                rTL = this.radiusTL,
                rTR = this.radiusTR,
                rBR = this.radiusBR,
                rBL = this.radiusBL;
            rTL < 0 && (rTL *= mTL = -1), rTL > max && (rTL = max), rTR < 0 && (rTR *= mTR = -1), rTR > max && (rTR = max), rBR < 0 && (rBR *= mBR = -1), rBR > max && (rBR = max), rBL < 0 && (rBL *= mBL = -1), rBL > max && (rBL = max), ctx.moveTo(x + w - rTR, y), ctx.arcTo(x + w + rTR * mTR, y - rTR * mTR, x + w, y + rTR, rTR), ctx.lineTo(x + w, y + h - rBR), ctx.arcTo(x + w + rBR * mBR, y + h + rBR * mBR, x + w - rBR, y + h, rBR), ctx.lineTo(x + rBL, y + h), ctx.arcTo(x - rBL * mBL, y + h + rBL * mBL, x, y + h - rBL, rBL), ctx.lineTo(x, y + rTL), ctx.arcTo(x - rTL * mTL, y - rTL * mTL, x + rTL, y, rTL), ctx.closePath()
        }, (G.Circle = function(x, y, radius) {
            this.x = x, this.y = y, this.radius = radius
        }).prototype.exec = function(ctx) {
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        }, (G.Ellipse = function(x, y, w, h) {
            this.x = x, this.y = y, this.w = w, this.h = h
        }).prototype.exec = function(ctx) {
            var x = this.x,
                y = this.y,
                w = this.w,
                h = this.h,
                k = .5522848,
                ox = w / 2 * k,
                oy = h / 2 * k,
                xe = x + w,
                ye = y + h,
                xm = x + w / 2,
                ym = y + h / 2;
            ctx.moveTo(x, ym), ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y), ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym), ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye), ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym)
        }, (G.PolyStar = function(x, y, radius, sides, pointSize, angle) {
            this.x = x, this.y = y, this.radius = radius, this.sides = sides, this.pointSize = pointSize, this.angle = angle
        }).prototype.exec = function(ctx) {
            var x = this.x,
                y = this.y,
                radius = this.radius,
                angle = (this.angle || 0) / 180 * Math.PI,
                sides = this.sides,
                ps = 1 - (this.pointSize || 0),
                a = Math.PI / sides;
            ctx.moveTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
            for (var i = 0; i < sides; i++) angle += a, 1 != ps && ctx.lineTo(x + Math.cos(angle) * radius * ps, y + Math.sin(angle) * radius * ps), angle += a, ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
            ctx.closePath()
        }, Graphics.beginCmd = new G.BeginPath, createjs.Graphics = Graphics
    }(),
    function() {
        "use strict";

        function DisplayObject() {
            this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.cacheID = 0, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor = null, this._cacheOffsetX = 0, this._cacheOffsetY = 0, this._filterOffsetX = 0, this._filterOffsetY = 0, this._cacheScale = 1, this._cacheDataURLID = 0, this._cacheDataURL = null, this._props = new createjs.DisplayProps, this._rectangle = new createjs.Rectangle, this._bounds = null
        }
        var p = createjs.extend(DisplayObject, createjs.EventDispatcher);
        DisplayObject._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], DisplayObject.suppressCrossDomainErrors = !1, DisplayObject._snapToPixelEnabled = !1;
        var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.getContext && (DisplayObject._hitTestCanvas = canvas, DisplayObject._hitTestContext = canvas.getContext("2d"), canvas.width = canvas.height = 1), DisplayObject._nextCacheID = 1, p.getStage = function() {
            for (var o = this, _Stage = createjs.Stage; o.parent;) o = o.parent;
            return o instanceof _Stage ? o : null
        };
        try {
            Object.defineProperties(p, {
                stage: {
                    get: p.getStage
                }
            })
        } catch (e) {}
        p.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, p.draw = function(ctx, ignoreCache) {
            var cacheCanvas = this.cacheCanvas;
            if (ignoreCache || !cacheCanvas) return !1;
            var scale = this._cacheScale;
            return ctx.drawImage(cacheCanvas, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, cacheCanvas.width / scale, cacheCanvas.height / scale), !0
        }, p.updateContext = function(ctx) {
            var o = this,
                mask = o.mask,
                mtx = o._props.matrix;
            mask && mask.graphics && !mask.graphics.isEmpty() && (mask.getMatrix(mtx), ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty), mask.graphics.drawAsPath(ctx), ctx.clip(), mtx.invert(), ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)), this.getMatrix(mtx);
            var tx = mtx.tx,
                ty = mtx.ty;
            DisplayObject._snapToPixelEnabled && o.snapToPixel && (tx = tx + (tx < 0 ? -.5 : .5) | 0, ty = ty + (ty < 0 ? -.5 : .5) | 0), ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, tx, ty), ctx.globalAlpha *= o.alpha, o.compositeOperation && (ctx.globalCompositeOperation = o.compositeOperation), o.shadow && this._applyShadow(ctx, o.shadow)
        }, p.cache = function(x, y, width, height, scale) {
            scale = scale || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = width, this._cacheHeight = height, this._cacheOffsetX = x, this._cacheOffsetY = y, this._cacheScale = scale, this.updateCache()
        }, p.updateCache = function(compositeOperation) {
            var cacheCanvas = this.cacheCanvas;
            if (!cacheCanvas) throw "cache() must be called before updateCache()";
            var scale = this._cacheScale,
                offX = this._cacheOffsetX * scale,
                offY = this._cacheOffsetY * scale,
                w = this._cacheWidth,
                h = this._cacheHeight,
                ctx = cacheCanvas.getContext("2d"),
                fBounds = this._getFilterBounds();
            offX += this._filterOffsetX = fBounds.x, offY += this._filterOffsetY = fBounds.y, w = Math.ceil(w * scale) + fBounds.width, h = Math.ceil(h * scale) + fBounds.height, w != cacheCanvas.width || h != cacheCanvas.height ? (cacheCanvas.width = w, cacheCanvas.height = h) : compositeOperation || ctx.clearRect(0, 0, w + 1, h + 1), ctx.save(), ctx.globalCompositeOperation = compositeOperation, ctx.setTransform(scale, 0, 0, scale, -offX, -offY), this.draw(ctx, !0), this._applyFilters(), ctx.restore(), this.cacheID = DisplayObject._nextCacheID++
        }, p.uncache = function() {
            this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0, this._cacheScale = 1
        }, p.getCacheDataURL = function() {
            return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
        }, p.localToGlobal = function(x, y, pt) {
            return this.getConcatenatedMatrix(this._props.matrix).transformPoint(x, y, pt || new createjs.Point)
        }, p.globalToLocal = function(x, y, pt) {
            return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(x, y, pt || new createjs.Point)
        }, p.localToLocal = function(x, y, target, pt) {
            return pt = this.localToGlobal(x, y, pt), target.globalToLocal(pt.x, pt.y, pt)
        }, p.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
            return this.x = x || 0, this.y = y || 0, this.scaleX = null == scaleX ? 1 : scaleX, this.scaleY = null == scaleY ? 1 : scaleY, this.rotation = rotation || 0, this.skewX = skewX || 0, this.skewY = skewY || 0, this.regX = regX || 0, this.regY = regY || 0, this
        }, p.getMatrix = function(matrix) {
            var o = this,
                mtx = matrix && matrix.identity() || new createjs.Matrix2D;
            return o.transformMatrix ? mtx.copy(o.transformMatrix) : mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY)
        }, p.getConcatenatedMatrix = function(matrix) {
            for (var o = this, mtx = this.getMatrix(matrix); o = o.parent;) mtx.prependMatrix(o.getMatrix(o._props.matrix));
            return mtx
        }, p.getConcatenatedDisplayProps = function(props) {
            props = props ? props.identity() : new createjs.DisplayProps;
            var o = this,
                mtx = o.getMatrix(props.matrix);
            do {
                props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation), o != this && mtx.prependMatrix(o.getMatrix(o._props.matrix))
            } while (o = o.parent);
            return props
        }, p.hitTest = function(x, y) {
            var ctx = DisplayObject._hitTestContext;
            ctx.setTransform(1, 0, 0, 1, -x, -y), this.draw(ctx);
            var hit = this._testHit(ctx);
            return ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, 2, 2), hit
        }, p.set = function(props) {
            for (var n in props) this[n] = props[n];
            return this
        }, p.getBounds = function() {
            if (this._bounds) return this._rectangle.copy(this._bounds);
            var cacheCanvas = this.cacheCanvas;
            if (cacheCanvas) {
                var scale = this._cacheScale;
                return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, cacheCanvas.width / scale, cacheCanvas.height / scale)
            }
            return null
        }, p.getTransformedBounds = function() {
            return this._getBounds()
        }, p.setBounds = function(x, y, width, height) {
            null == x && (this._bounds = x), this._bounds = (this._bounds || new createjs.Rectangle).setValues(x, y, width, height)
        }, p.clone = function() {
            return this._cloneProps(new DisplayObject)
        }, p.toString = function() {
            return "[DisplayObject (name=" + this.name + ")]"
        }, p._cloneProps = function(o) {
            return o.alpha = this.alpha, o.mouseEnabled = this.mouseEnabled, o.tickEnabled = this.tickEnabled, o.name = this.name, o.regX = this.regX, o.regY = this.regY, o.rotation = this.rotation, o.scaleX = this.scaleX, o.scaleY = this.scaleY, o.shadow = this.shadow, o.skewX = this.skewX, o.skewY = this.skewY, o.visible = this.visible, o.x = this.x, o.y = this.y, o.compositeOperation = this.compositeOperation, o.snapToPixel = this.snapToPixel, o.filters = null == this.filters ? null : this.filters.slice(0), o.mask = this.mask, o.hitArea = this.hitArea, o.cursor = this.cursor, o._bounds = this._bounds, o
        }, p._applyShadow = function(ctx, shadow) {
            shadow = shadow || Shadow.identity, ctx.shadowColor = shadow.color, ctx.shadowOffsetX = shadow.offsetX, ctx.shadowOffsetY = shadow.offsetY, ctx.shadowBlur = shadow.blur
        }, p._tick = function(evtObj) {
            var ls = this._listeners;
            ls && ls.tick && (evtObj.target = null, evtObj.propagationStopped = evtObj.immediatePropagationStopped = !1, this.dispatchEvent(evtObj))
        }, p._testHit = function(ctx) {
            try {
                var hit = ctx.getImageData(0, 0, 1, 1).data[3] > 1
            } catch (e) {
                if (!DisplayObject.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
            }
            return hit
        }, p._applyFilters = function() {
            if (this.filters && 0 != this.filters.length && this.cacheCanvas)
                for (var l = this.filters.length, ctx = this.cacheCanvas.getContext("2d"), w = this.cacheCanvas.width, h = this.cacheCanvas.height, i = 0; i < l; i++) this.filters[i].applyFilter(ctx, 0, 0, w, h)
        }, p._getFilterBounds = function(rect) {
            var l, filters = this.filters,
                bounds = this._rectangle.setValues(0, 0, 0, 0);
            if (!filters || !(l = filters.length)) return bounds;
            for (var i = 0; i < l; i++) {
                var f = this.filters[i];
                f.getBounds && f.getBounds(bounds)
            }
            return bounds
        }, p._getBounds = function(matrix, ignoreTransform) {
            return this._transformBounds(this.getBounds(), matrix, ignoreTransform)
        }, p._transformBounds = function(bounds, matrix, ignoreTransform) {
            if (!bounds) return bounds;
            var x = bounds.x,
                y = bounds.y,
                width = bounds.width,
                height = bounds.height,
                mtx = this._props.matrix;
            mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx), (x || y) && mtx.appendTransform(0, 0, 1, 1, 0, 0, 0, -x, -y), matrix && mtx.prependMatrix(matrix);
            var x_a = width * mtx.a,
                x_b = width * mtx.b,
                y_c = height * mtx.c,
                y_d = height * mtx.d,
                tx = mtx.tx,
                ty = mtx.ty,
                minX = tx,
                maxX = tx,
                minY = ty,
                maxY = ty;
            return (x = x_a + tx) < minX ? minX = x : x > maxX && (maxX = x), (x = x_a + y_c + tx) < minX ? minX = x : x > maxX && (maxX = x), (x = y_c + tx) < minX ? minX = x : x > maxX && (maxX = x), (y = x_b + ty) < minY ? minY = y : y > maxY && (maxY = y), (y = x_b + y_d + ty) < minY ? minY = y : y > maxY && (maxY = y), (y = y_d + ty) < minY ? minY = y : y > maxY && (maxY = y), bounds.setValues(minX, minY, maxX - minX, maxY - minY)
        }, p._hasMouseEventListener = function() {
            for (var evts = DisplayObject._MOUSE_EVENTS, i = 0, l = evts.length; i < l; i++)
                if (this.hasEventListener(evts[i])) return !0;
            return !!this.cursor
        }, createjs.DisplayObject = createjs.promote(DisplayObject, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function Container() {
            this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0
        }
        var p = createjs.extend(Container, createjs.DisplayObject);
        p.getNumChildren = function() {
            return this.children.length
        };
        try {
            Object.defineProperties(p, {
                numChildren: {
                    get: p.getNumChildren
                }
            })
        } catch (e) {}
        p.initialize = Container, p.isVisible = function() {
            var hasContent = this.cacheCanvas || this.children.length;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            if (this.DisplayObject_draw(ctx, ignoreCache)) return !0;
            for (var list = this.children.slice(), i = 0, l = list.length; i < l; i++) {
                var child = list[i];
                child.isVisible() && (ctx.save(), child.updateContext(ctx), child.draw(ctx), ctx.restore())
            }
            return !0
        }, p.addChild = function(child) {
            if (null == child) return child;
            var l = arguments.length;
            if (l > 1) {
                for (var i = 0; i < l; i++) this.addChild(arguments[i]);
                return arguments[l - 1]
            }
            return child.parent && child.parent.removeChild(child), child.parent = this, this.children.push(child), child.dispatchEvent("added"), child
        }, p.addChildAt = function(child, index) {
            var l = arguments.length,
                indx = arguments[l - 1];
            if (indx < 0 || indx > this.children.length) return arguments[l - 2];
            if (l > 2) {
                for (var i = 0; i < l - 1; i++) this.addChildAt(arguments[i], indx + i);
                return arguments[l - 2]
            }
            return child.parent && child.parent.removeChild(child), child.parent = this, this.children.splice(index, 0, child), child.dispatchEvent("added"), child
        }, p.removeChild = function(child) {
            var l = arguments.length;
            if (l > 1) {
                for (var good = !0, i = 0; i < l; i++) good = good && this.removeChild(arguments[i]);
                return good
            }
            return this.removeChildAt(createjs.indexOf(this.children, child))
        }, p.removeChildAt = function(index) {
            var l = arguments.length;
            if (l > 1) {
                for (var a = [], i = 0; i < l; i++) a[i] = arguments[i];
                a.sort(function(a, b) {
                    return b - a
                });
                var good = !0;
                for (i = 0; i < l; i++) good = good && this.removeChildAt(a[i]);
                return good
            }
            if (index < 0 || index > this.children.length - 1) return !1;
            var child = this.children[index];
            return child && (child.parent = null), this.children.splice(index, 1), child.dispatchEvent("removed"), !0
        }, p.removeAllChildren = function() {
            for (var kids = this.children; kids.length;) this.removeChildAt(0)
        }, p.getChildAt = function(index) {
            return this.children[index]
        }, p.getChildByName = function(name) {
            for (var kids = this.children, i = 0, l = kids.length; i < l; i++)
                if (kids[i].name == name) return kids[i];
            return null
        }, p.sortChildren = function(sortFunction) {
            this.children.sort(sortFunction)
        }, p.getChildIndex = function(child) {
            return createjs.indexOf(this.children, child)
        }, p.swapChildrenAt = function(index1, index2) {
            var kids = this.children,
                o1 = kids[index1],
                o2 = kids[index2];
            o1 && o2 && (kids[index1] = o2, kids[index2] = o1)
        }, p.swapChildren = function(child1, child2) {
            for (var index1, index2, kids = this.children, i = 0, l = kids.length; i < l && (kids[i] == child1 && (index1 = i), kids[i] == child2 && (index2 = i), null == index1 || null == index2); i++);
            i != l && (kids[index1] = child2, kids[index2] = child1)
        }, p.setChildIndex = function(child, index) {
            var kids = this.children,
                l = kids.length;
            if (!(child.parent != this || index < 0 || index >= l)) {
                for (var i = 0; i < l && kids[i] != child; i++);
                i != l && i != index && (kids.splice(i, 1), kids.splice(index, 0, child))
            }
        }, p.contains = function(child) {
            for (; child;) {
                if (child == this) return !0;
                child = child.parent
            }
            return !1
        }, p.hitTest = function(x, y) {
            return null != this.getObjectUnderPoint(x, y)
        }, p.getObjectsUnderPoint = function(x, y, mode) {
            var arr = [],
                pt = this.localToGlobal(x, y);
            return this._getObjectsUnderPoint(pt.x, pt.y, arr, mode > 0, 1 == mode), arr
        }, p.getObjectUnderPoint = function(x, y, mode) {
            var pt = this.localToGlobal(x, y);
            return this._getObjectsUnderPoint(pt.x, pt.y, null, mode > 0, 1 == mode)
        }, p.getBounds = function() {
            return this._getBounds(null, !0)
        }, p.getTransformedBounds = function() {
            return this._getBounds()
        }, p.clone = function(recursive) {
            var o = this._cloneProps(new Container);
            return recursive && this._cloneChildren(o), o
        }, p.toString = function() {
            return "[Container (name=" + this.name + ")]"
        }, p._tick = function(evtObj) {
            if (this.tickChildren)
                for (var i = this.children.length - 1; i >= 0; i--) {
                    var child = this.children[i];
                    child.tickEnabled && child._tick && child._tick(evtObj)
                }
            this.DisplayObject__tick(evtObj)
        }, p._cloneChildren = function(o) {
            o.children.length && o.removeAllChildren();
            for (var arr = o.children, i = 0, l = this.children.length; i < l; i++) {
                var clone = this.children[i].clone(!0);
                clone.parent = o, arr.push(clone)
            }
        }, p._getObjectsUnderPoint = function(x, y, arr, mouse, activeListener, currentDepth) {
            if (!(currentDepth = currentDepth || 0) && !this._testMask(this, x, y)) return null;
            var mtx, ctx = createjs.DisplayObject._hitTestContext;
            activeListener = activeListener || mouse && this._hasMouseEventListener();
            for (var children = this.children, i = children.length - 1; i >= 0; i--) {
                var child = children[i],
                    hitArea = child.hitArea;
                if (child.visible && (hitArea || child.isVisible()) && (!mouse || child.mouseEnabled) && (hitArea || this._testMask(child, x, y)))
                    if (!hitArea && child instanceof Container) {
                        var result = child._getObjectsUnderPoint(x, y, arr, mouse, activeListener, currentDepth + 1);
                        if (!arr && result) return mouse && !this.mouseChildren ? this : result
                    } else {
                        if (mouse && !activeListener && !child._hasMouseEventListener()) continue;
                        var props = child.getConcatenatedDisplayProps(child._props);
                        if (mtx = props.matrix, hitArea && (mtx.appendMatrix(hitArea.getMatrix(hitArea._props.matrix)), props.alpha = hitArea.alpha), ctx.globalAlpha = props.alpha, ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y), (hitArea || child).draw(ctx), !this._testHit(ctx)) continue;
                        if (ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, 2, 2), !arr) return mouse && !this.mouseChildren ? this : child;
                        arr.push(child)
                    }
            }
            return null
        }, p._testMask = function(target, x, y) {
            var mask = target.mask;
            if (!mask || !mask.graphics || mask.graphics.isEmpty()) return !0;
            var mtx = this._props.matrix,
                parent = target.parent;
            mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity(), mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);
            var ctx = createjs.DisplayObject._hitTestContext;
            return ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y), mask.graphics.drawAsPath(ctx), ctx.fillStyle = "#000", ctx.fill(), !!this._testHit(ctx) && (ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, 2, 2), !0)
        }, p._getBounds = function(matrix, ignoreTransform) {
            var bounds = this.DisplayObject_getBounds();
            if (bounds) return this._transformBounds(bounds, matrix, ignoreTransform);
            var mtx = this._props.matrix;
            mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx), matrix && mtx.prependMatrix(matrix);
            for (var l = this.children.length, rect = null, i = 0; i < l; i++) {
                var child = this.children[i];
                if (!child || this.children.length !== l) {
                    if (!this._infinityLoopProtection) return this._infinityLoopProtection = !0, this._getBounds(matrix, ignoreTransform);
                    console.warn("Serious problem - looped more than once, please investigate me!")
                }
                child.visible && (bounds = child._getBounds(mtx)) && (rect ? rect.extend(bounds.x, bounds.y, bounds.width, bounds.height) : rect = bounds.clone())
            }
            return this._infinityLoopProtection = !1, rect
        }, createjs.Container = createjs.promote(Container, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Stage(canvas) {
            this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof canvas ? document.getElementById(canvas) : canvas, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0)
        }
        var p = createjs.extend(Stage, createjs.Container);
        p._get_nextStage = function() {
            return this._nextStage
        }, p._set_nextStage = function(value) {
            this._nextStage && (this._nextStage._prevStage = null), value && (value._prevStage = this), this._nextStage = value
        };
        try {
            Object.defineProperties(p, {
                nextStage: {
                    get: p._get_nextStage,
                    set: p._set_nextStage
                }
            })
        } catch (e) {}
        p.update = function(props) {
            if (this.canvas && (this.tickOnUpdate && this.tick(props), !1 !== this.dispatchEvent("drawstart", !1, !0))) {
                createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
                var r = this.drawRect,
                    ctx = this.canvas.getContext("2d");
                ctx.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (r ? ctx.clearRect(r.x, r.y, r.width, r.height) : ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), ctx.save(), this.drawRect && (ctx.beginPath(), ctx.rect(r.x, r.y, r.width, r.height), ctx.clip()), this.updateContext(ctx), this.draw(ctx, !1), ctx.restore(), this.dispatchEvent("drawend")
            }
        }, p.tick = function(props) {
            if (this.tickEnabled && !1 !== this.dispatchEvent("tickstart", !1, !0)) {
                var evtObj = new createjs.Event("tick");
                if (props)
                    for (var n in props) props.hasOwnProperty(n) && (evtObj[n] = props[n]);
                this._tick(evtObj), this.dispatchEvent("tickend")
            }
        }, p.handleEvent = function(evt) {
            "tick" == evt.type && this.update(evt)
        }, p.clear = function() {
            if (this.canvas) {
                var ctx = this.canvas.getContext("2d");
                ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
            }
        }, p.toDataURL = function(backgroundColor, mimeType) {
            var data, ctx = this.canvas.getContext("2d"),
                w = this.canvas.width,
                h = this.canvas.height;
            if (backgroundColor) {
                data = ctx.getImageData(0, 0, w, h);
                var compositeOperation = ctx.globalCompositeOperation;
                ctx.globalCompositeOperation = "destination-over", ctx.fillStyle = backgroundColor, ctx.fillRect(0, 0, w, h)
            }
            var dataURL = this.canvas.toDataURL(mimeType || "image/png");
            return backgroundColor && (ctx.putImageData(data, 0, 0), ctx.globalCompositeOperation = compositeOperation), dataURL
        }, p.enableMouseOver = function(frequency) {
            if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == frequency && this._testMouseOver(!0)), null == frequency) frequency = 20;
            else if (frequency <= 0) return;
            var o = this;
            this._mouseOverIntervalID = setInterval(function() {
                o._testMouseOver()
            }, 1e3 / Math.min(50, frequency))
        }, p.enableDOMEvents = function(enable) {
            null == enable && (enable = !0);
            var n, o, ls = this._eventListeners;
            if (!enable && ls) {
                for (n in ls)(o = ls[n]).t.removeEventListener(n, o.f, !1);
                this._eventListeners = null
            } else if (enable && !ls && this.canvas) {
                var t = window.addEventListener ? window : document,
                    _this = this;
                (ls = this._eventListeners = {}).mouseup = {
                    t: t,
                    f: function(e) {
                        _this._handleMouseUp(e)
                    }
                }, ls.mousemove = {
                    t: t,
                    f: function(e) {
                        _this._handleMouseMove(e)
                    }
                }, ls.dblclick = {
                    t: this.canvas,
                    f: function(e) {
                        _this._handleDoubleClick(e)
                    }
                }, ls.mousedown = {
                    t: this.canvas,
                    f: function(e) {
                        _this._handleMouseDown(e)
                    }
                };
                for (n in ls)(o = ls[n]).t.addEventListener(n, o.f, !1)
            }
        }, p.clone = function() {
            throw "Stage cannot be cloned."
        }, p.toString = function() {
            return "[Stage (name=" + this.name + ")]"
        }, p._getElementRect = function(e) {
            var bounds;
            try {
                bounds = e.getBoundingClientRect()
            } catch (err) {
                bounds = {
                    top: e.offsetTop,
                    left: e.offsetLeft,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }
            var offX = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
                offY = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
                styles = window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle,
                padL = parseInt(styles.paddingLeft) + parseInt(styles.borderLeftWidth),
                padT = parseInt(styles.paddingTop) + parseInt(styles.borderTopWidth),
                padR = parseInt(styles.paddingRight) + parseInt(styles.borderRightWidth),
                padB = parseInt(styles.paddingBottom) + parseInt(styles.borderBottomWidth);
            return {
                left: bounds.left + offX + padL,
                right: bounds.right + offX - padR,
                top: bounds.top + offY + padT,
                bottom: bounds.bottom + offY - padB
            }
        }, p._getPointerData = function(id) {
            var data = this._pointerData[id];
            return data || (data = this._pointerData[id] = {
                x: 0,
                y: 0
            }), data
        }, p._handleMouseMove = function(e) {
            e || (e = window.event), this._handlePointerMove(-1, e, e.pageX, e.pageY)
        }, p._handlePointerMove = function(id, e, pageX, pageY, owner) {
            if ((!this._prevStage || void 0 !== owner) && this.canvas) {
                var nextStage = this._nextStage,
                    o = this._getPointerData(id),
                    inBounds = o.inBounds;
                this._updatePointerPosition(id, e, pageX, pageY), (inBounds || o.inBounds || this.mouseMoveOutside) && (-1 === id && o.inBounds == !inBounds && this._dispatchMouseEvent(this, inBounds ? "mouseleave" : "mouseenter", !1, id, o, e), this._dispatchMouseEvent(this, "stagemousemove", !1, id, o, e), this._dispatchMouseEvent(o.target, "pressmove", !0, id, o, e)), nextStage && nextStage._handlePointerMove(id, e, pageX, pageY, null)
            }
        }, p._updatePointerPosition = function(id, e, pageX, pageY) {
            var rect = this._getElementRect(this.canvas);
            pageX -= rect.left, pageY -= rect.top;
            var w = this.canvas.width,
                h = this.canvas.height;
            pageX /= (rect.right - rect.left) / w, pageY /= (rect.bottom - rect.top) / h;
            var o = this._getPointerData(id);
            (o.inBounds = pageX >= 0 && pageY >= 0 && pageX <= w - 1 && pageY <= h - 1) ? (o.x = pageX, o.y = pageY) : this.mouseMoveOutside && (o.x = pageX < 0 ? 0 : pageX > w - 1 ? w - 1 : pageX, o.y = pageY < 0 ? 0 : pageY > h - 1 ? h - 1 : pageY), o.posEvtObj = e, o.rawX = pageX, o.rawY = pageY, id !== this._primaryPointerID && -1 !== id || (this.mouseX = o.x, this.mouseY = o.y, this.mouseInBounds = o.inBounds)
        }, p._handleMouseUp = function(e) {
            this._handlePointerUp(-1, e, !1)
        }, p._handlePointerUp = function(id, e, clear, owner) {
            var nextStage = this._nextStage,
                o = this._getPointerData(id);
            if (!this._prevStage || void 0 !== owner) {
                var target = null,
                    oTarget = o.target;
                owner || !oTarget && !nextStage || (target = this._getObjectsUnderPoint(o.x, o.y, null, !0)), o.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, id, o, e, target), o.down = !1), target == oTarget && this._dispatchMouseEvent(oTarget, "click", !0, id, o, e), this._dispatchMouseEvent(oTarget, "pressup", !0, id, o, e), clear ? (id == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[id]) : o.target = null, nextStage && nextStage._handlePointerUp(id, e, clear, owner || target && this)
            }
        }, p._handleMouseDown = function(e) {
            this._handlePointerDown(-1, e, e.pageX, e.pageY)
        }, p._handlePointerDown = function(id, e, pageX, pageY, owner) {
            this.preventSelection && e.preventDefault(), null != this._primaryPointerID && -1 !== id || (this._primaryPointerID = id), null != pageY && this._updatePointerPosition(id, e, pageX, pageY);
            var target = null,
                nextStage = this._nextStage,
                o = this._getPointerData(id);
            owner || (target = o.target = this._getObjectsUnderPoint(o.x, o.y, null, !0)), o.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, id, o, e, target), o.down = !0), this._dispatchMouseEvent(target, "mousedown", !0, id, o, e), nextStage && nextStage._handlePointerDown(id, e, pageX, pageY, owner || target && this)
        }, p._testMouseOver = function(clear, owner, eventTarget) {
            if (!this._prevStage || void 0 !== owner) {
                var nextStage = this._nextStage;
                if (this._mouseOverIntervalID) {
                    var o = this._getPointerData(-1);
                    if (o && (clear || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                        var t, i, l, e = o.posEvtObj,
                            isEventTarget = eventTarget || e && e.target == this.canvas,
                            target = null,
                            common = -1,
                            cursor = "";
                        !owner && (clear || this.mouseInBounds && isEventTarget) && (target = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
                        var oldList = this._mouseOverTarget || [],
                            oldTarget = oldList[oldList.length - 1],
                            list = this._mouseOverTarget = [];
                        for (t = target; t;) list.unshift(t), cursor || (cursor = t.cursor), t = t.parent;
                        for (this.canvas.style.cursor = cursor, !owner && eventTarget && (eventTarget.canvas.style.cursor = cursor), i = 0, l = list.length; i < l && list[i] == oldList[i]; i++) common = i;
                        for (oldTarget != target && this._dispatchMouseEvent(oldTarget, "mouseout", !0, -1, o, e, target), i = oldList.length - 1; i > common; i--) this._dispatchMouseEvent(oldList[i], "rollout", !1, -1, o, e, target);
                        for (i = list.length - 1; i > common; i--) this._dispatchMouseEvent(list[i], "rollover", !1, -1, o, e, oldTarget);
                        oldTarget != target && this._dispatchMouseEvent(target, "mouseover", !0, -1, o, e, oldTarget), nextStage && nextStage._testMouseOver(clear, owner || target && this, eventTarget || isEventTarget && this)
                    }
                } else nextStage && nextStage._testMouseOver(clear, owner, eventTarget)
            }
        }, p._handleDoubleClick = function(e, owner) {
            var target = null,
                nextStage = this._nextStage,
                o = this._getPointerData(-1);
            owner || (target = this._getObjectsUnderPoint(o.x, o.y, null, !0), this._dispatchMouseEvent(target, "dblclick", !0, -1, o, e)), nextStage && nextStage._handleDoubleClick(e, owner || target && this)
        }, p._dispatchMouseEvent = function(target, type, bubbles, pointerId, o, nativeEvent, relatedTarget) {
            if (target && (bubbles || target.hasEventListener(type))) {
                var evt = new createjs.MouseEvent(type, bubbles, !1, o.x, o.y, nativeEvent, pointerId, pointerId === this._primaryPointerID || -1 === pointerId, o.rawX, o.rawY, relatedTarget);
                target.dispatchEvent(evt)
            }
        }, createjs.Stage = createjs.promote(Stage, "Container")
    }(),
    function() {
        function Bitmap(imageOrUri) {
            this.DisplayObject_constructor(), "string" == typeof imageOrUri ? (this.image = document.createElement("img"), this.image.src = imageOrUri) : this.image = imageOrUri, this.sourceRect = null
        }
        var p = createjs.extend(Bitmap, createjs.DisplayObject);
        p.initialize = Bitmap, p.isVisible = function() {
            var image = this.image,
                hasContent = this.cacheCanvas || image && (image.naturalWidth || image.getContext || image.readyState >= 2);
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            if (this.DisplayObject_draw(ctx, ignoreCache) || !this.image) return !0;
            var img = this.image,
                rect = this.sourceRect;
            if (rect) {
                var x1 = rect.x,
                    y1 = rect.y,
                    x2 = x1 + rect.width,
                    y2 = y1 + rect.height,
                    x = 0,
                    y = 0,
                    w = img.width,
                    h = img.height;
                x1 < 0 && (x -= x1, x1 = 0), x2 > w && (x2 = w), y1 < 0 && (y -= y1, y1 = 0), y2 > h && (y2 = h), ctx.drawImage(img, x1, y1, x2 - x1, y2 - y1, x, y, x2 - x1, y2 - y1)
            } else ctx.drawImage(img, 0, 0);
            return !0
        }, p.getBounds = function() {
            var rect = this.DisplayObject_getBounds();
            if (rect) return rect;
            var image = this.image,
                o = this.sourceRect || image;
            return image && (image.naturalWidth || image.getContext || image.readyState >= 2) ? this._rectangle.setValues(0, 0, o.width, o.height) : null
        }, p.clone = function() {
            var o = new Bitmap(this.image);
            return this.sourceRect && (o.sourceRect = this.sourceRect.clone()), this._cloneProps(o), o
        }, p.toString = function() {
            return "[Bitmap (name=" + this.name + ")]"
        }, createjs.Bitmap = createjs.promote(Bitmap, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Sprite(spriteSheet, frameOrAnimation) {
            this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = spriteSheet, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, null != frameOrAnimation && this.gotoAndPlay(frameOrAnimation)
        }
        var p = createjs.extend(Sprite, createjs.DisplayObject);
        p.initialize = Sprite, p.isVisible = function() {
            var hasContent = this.cacheCanvas || this.spriteSheet.complete;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            if (this.DisplayObject_draw(ctx, ignoreCache)) return !0;
            this._normalizeFrame();
            var o = this.spriteSheet.getFrame(0 | this._currentFrame);
            if (!o) return !1;
            var rect = o.rect;
            return rect.width && rect.height && ctx.drawImage(o.image, rect.x, rect.y, rect.width, rect.height, -o.regX, -o.regY, rect.width, rect.height), !0
        }, p.play = function() {
            this.paused = !1
        }, p.stop = function() {
            this.paused = !0
        }, p.gotoAndPlay = function(frameOrAnimation) {
            this.paused = !1, this._skipAdvance = !0, this._goto(frameOrAnimation)
        }, p.gotoAndStop = function(frameOrAnimation) {
            this.paused = !0, this._goto(frameOrAnimation)
        }, p.advance = function(time) {
            var fps = this.framerate || this.spriteSheet.framerate,
                t = fps && null != time ? time / (1e3 / fps) : 1;
            this._normalizeFrame(t)
        }, p.getBounds = function() {
            return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
        }, p.clone = function() {
            return this._cloneProps(new Sprite(this.spriteSheet))
        }, p.toString = function() {
            return "[Sprite (name=" + this.name + ")]"
        }, p._cloneProps = function(o) {
            return this.DisplayObject__cloneProps(o), o.currentFrame = this.currentFrame, o.currentAnimation = this.currentAnimation, o.paused = this.paused, o.currentAnimationFrame = this.currentAnimationFrame, o.framerate = this.framerate, o._animation = this._animation, o._currentFrame = this._currentFrame, o._skipAdvance = this._skipAdvance, o
        }, p._tick = function(evtObj) {
            this.paused || (this._skipAdvance || this.advance(evtObj && evtObj.delta), this._skipAdvance = !1), this.DisplayObject__tick(evtObj)
        }, p._normalizeFrame = function(frameDelta) {
            frameDelta = frameDelta || 0;
            var l, animation = this._animation,
                paused = this.paused,
                frame = this._currentFrame;
            if (animation) {
                var speed = animation.speed || 1,
                    animFrame = this.currentAnimationFrame;
                if (l = animation.frames.length, animFrame + frameDelta * speed >= l) {
                    var next = animation.next;
                    if (this._dispatchAnimationEnd(animation, frame, paused, next, l - 1)) return;
                    if (next) return this._goto(next, frameDelta - (l - animFrame) / speed);
                    this.paused = !0, animFrame = animation.frames.length - 1
                } else animFrame += frameDelta * speed;
                this.currentAnimationFrame = animFrame, this._currentFrame = animation.frames[0 | animFrame]
            } else if (frame = this._currentFrame += frameDelta, l = this.spriteSheet.getNumFrames(), frame >= l && l > 0 && !this._dispatchAnimationEnd(animation, frame, paused, l - 1) && (this._currentFrame -= l) >= l) return this._normalizeFrame();
            frame = 0 | this._currentFrame, this.currentFrame != frame && (this.currentFrame = frame, this.dispatchEvent("change"))
        }, p._dispatchAnimationEnd = function(animation, frame, paused, next, end) {
            var name = animation ? animation.name : null;
            if (this.hasEventListener("animationend")) {
                var evt = new createjs.Event("animationend");
                evt.name = name, evt.next = next, this.dispatchEvent(evt)
            }
            var changed = this._animation != animation || this._currentFrame != frame;
            return changed || paused || !this.paused || (this.currentAnimationFrame = end, changed = !0), changed
        }, p._goto = function(frameOrAnimation, frame) {
            if (this.currentAnimationFrame = 0, isNaN(frameOrAnimation)) {
                var data = this.spriteSheet.getAnimation(frameOrAnimation);
                data && (this._animation = data, this.currentAnimation = frameOrAnimation, this._normalizeFrame(frame))
            } else this.currentAnimation = this._animation = null, this._currentFrame = frameOrAnimation, this._normalizeFrame()
        }, createjs.Sprite = createjs.promote(Sprite, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Shape(graphics) {
            this.DisplayObject_constructor(), this.graphics = graphics || new createjs.Graphics
        }
        var p = createjs.extend(Shape, createjs.DisplayObject);
        p.isVisible = function() {
            var hasContent = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            return !!this.DisplayObject_draw(ctx, ignoreCache) || (this.graphics.draw(ctx, this), !0)
        }, p.clone = function(recursive) {
            var g = recursive && this.graphics ? this.graphics.clone() : this.graphics;
            return this._cloneProps(new Shape(g))
        }, p.toString = function() {
            return "[Shape (name=" + this.name + ")]"
        }, createjs.Shape = createjs.promote(Shape, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Text(text, font, color) {
            this.DisplayObject_constructor(), this.text = text, this.font = font, this.color = color, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null
        }
        var p = createjs.extend(Text, createjs.DisplayObject),
            canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.getContext && (Text._workingContext = canvas.getContext("2d"), canvas.width = canvas.height = 1), Text.H_OFFSETS = {
            start: 0,
            left: 0,
            center: -.5,
            end: -1,
            right: -1
        }, Text.V_OFFSETS = {
            top: 0,
            hanging: -.01,
            middle: -.4,
            alphabetic: -.8,
            ideographic: -.85,
            bottom: -1
        }, p.isVisible = function() {
            var hasContent = this.cacheCanvas || null != this.text && "" !== this.text;
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && hasContent)
        }, p.draw = function(ctx, ignoreCache) {
            if (this.DisplayObject_draw(ctx, ignoreCache)) return !0;
            var col = this.color || "#000";
            return this.outline ? (ctx.strokeStyle = col, ctx.lineWidth = 1 * this.outline) : ctx.fillStyle = col, this._drawText(this._prepContext(ctx)), !0
        }, p.getMeasuredWidth = function() {
            return this._getMeasuredWidth(this.text)
        }, p.getMeasuredLineHeight = function() {
            return 1.2 * this._getMeasuredWidth("M")
        }, p.getMeasuredHeight = function() {
            return this._drawText(null, {}).height
        }, p.getBounds = function() {
            var rect = this.DisplayObject_getBounds();
            if (rect) return rect;
            if (null == this.text || "" === this.text) return null;
            var o = this._drawText(null, {}),
                w = this.maxWidth && this.maxWidth < o.width ? this.maxWidth : o.width,
                x = w * Text.H_OFFSETS[this.textAlign || "left"],
                y = (this.lineHeight || this.getMeasuredLineHeight()) * Text.V_OFFSETS[this.textBaseline || "top"];
            return this._rectangle.setValues(x, y, w, o.height)
        }, p.getMetrics = function() {
            var o = {
                lines: []
            };
            return o.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), o.vOffset = o.lineHeight * Text.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, o, o.lines)
        }, p.clone = function() {
            return this._cloneProps(new Text(this.text, this.font, this.color))
        }, p.toString = function() {
            return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
        }, p._cloneProps = function(o) {
            return this.DisplayObject__cloneProps(o), o.textAlign = this.textAlign, o.textBaseline = this.textBaseline, o.maxWidth = this.maxWidth, o.outline = this.outline, o.lineHeight = this.lineHeight, o.lineWidth = this.lineWidth, o
        }, p._prepContext = function(ctx) {
            return ctx.font = this.font || "10px sans-serif", ctx.textAlign = this.textAlign || "left", ctx.textBaseline = this.textBaseline || "top", ctx
        }, p._drawText = function(ctx, o, lines) {
            var paint = !!ctx;
            paint || ((ctx = Text._workingContext).save(), this._prepContext(ctx));
            for (var lineHeight = this.lineHeight || this.getMeasuredLineHeight(), maxW = 0, count = 0, hardLines = String(this.text).split(/(?:\r\n|\r|\n)/), i = 0, l = hardLines.length; i < l; i++) {
                var str = hardLines[i],
                    w = null;
                if (null != this.lineWidth && (w = ctx.measureText(str).width) > this.lineWidth) {
                    var words = str.split(/(\s)/);
                    str = words[0], w = ctx.measureText(str).width;
                    for (var j = 1, jl = words.length; j < jl; j += 2) {
                        var wordW = ctx.measureText(words[j] + words[j + 1]).width;
                        w + wordW > this.lineWidth ? (paint && this._drawTextLine(ctx, str, count * lineHeight), lines && lines.push(str), w > maxW && (maxW = w), str = words[j + 1], w = ctx.measureText(str).width, count++) : (str += words[j] + words[j + 1], w += wordW)
                    }
                }
                paint && this._drawTextLine(ctx, str, count * lineHeight), lines && lines.push(str), o && null == w && (w = ctx.measureText(str).width), w > maxW && (maxW = w), count++
            }
            return o && (o.width = maxW, o.height = count * lineHeight), paint || ctx.restore(), o
        }, p._drawTextLine = function(ctx, text, y) {
            this.outline ? ctx.strokeText(text, 0, y, this.maxWidth || 65535) : ctx.fillText(text, 0, y, this.maxWidth || 65535)
        }, p._getMeasuredWidth = function(text) {
            var ctx = Text._workingContext;
            ctx.save();
            var w = this._prepContext(ctx).measureText(text).width;
            return ctx.restore(), w
        }, createjs.Text = createjs.promote(Text, "DisplayObject")
    }(),
    function() {
        "use strict";

        function BitmapText(text, spriteSheet) {
            this.Container_constructor(), this.text = text || "", this.spriteSheet = spriteSheet, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
                text: 0,
                spriteSheet: 0,
                lineHeight: 0,
                letterSpacing: 0,
                spaceWidth: 0
            }
        }
        var p = createjs.extend(BitmapText, createjs.Container);
        BitmapText.maxPoolSize = 100, BitmapText._spritePool = [], p.draw = function(ctx, ignoreCache) {
            this.DisplayObject_draw(ctx, ignoreCache) || (this._updateText(), this.Container_draw(ctx, ignoreCache))
        }, p.getBounds = function() {
            return this._updateText(), this.Container_getBounds()
        }, p.isVisible = function() {
            var hasContent = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
            return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && hasContent)
        }, p.clone = function() {
            return this._cloneProps(new BitmapText(this.text, this.spriteSheet))
        }, p.addChild = p.addChildAt = p.removeChild = p.removeChildAt = p.removeAllChildren = function() {}, p._cloneProps = function(o) {
            return this.Container__cloneProps(o), o.lineHeight = this.lineHeight, o.letterSpacing = this.letterSpacing, o.spaceWidth = this.spaceWidth, o
        }, p._getFrameIndex = function(character, spriteSheet) {
            var c, o = spriteSheet.getAnimation(character);
            return o || (character != (c = character.toUpperCase()) || character != (c = character.toLowerCase()) || (c = null), c && (o = spriteSheet.getAnimation(c))), o && o.frames[0]
        }, p._getFrame = function(character, spriteSheet) {
            var index = this._getFrameIndex(character, spriteSheet);
            return null == index ? index : spriteSheet.getFrame(index)
        }, p._getLineHeight = function(ss) {
            var frame = this._getFrame("1", ss) || this._getFrame("T", ss) || this._getFrame("L", ss) || ss.getFrame(0);
            return frame ? frame.rect.height : 1
        }, p._getSpaceWidth = function(ss) {
            var frame = this._getFrame("1", ss) || this._getFrame("l", ss) || this._getFrame("e", ss) || this._getFrame("a", ss) || ss.getFrame(0);
            return frame ? frame.rect.width : 1
        }, p._updateText = function() {
            var sprite, x = 0,
                y = 0,
                o = this._oldProps,
                change = !1,
                spaceW = this.spaceWidth,
                lineH = this.lineHeight,
                ss = this.spriteSheet,
                pool = BitmapText._spritePool,
                kids = this.children,
                childIndex = 0,
                numKids = kids.length;
            for (var n in o) o[n] != this[n] && (o[n] = this[n], change = !0);
            if (change) {
                var hasSpace = !!this._getFrame(" ", ss);
                hasSpace || spaceW || (spaceW = this._getSpaceWidth(ss)), lineH || (lineH = this._getLineHeight(ss));
                for (var i = 0, l = this.text.length; i < l; i++) {
                    var character = this.text.charAt(i);
                    if (" " != character || hasSpace)
                        if ("\n" != character && "\r" != character) {
                            var index = this._getFrameIndex(character, ss);
                            null != index && (childIndex < numKids ? sprite = kids[childIndex] : (kids.push(sprite = pool.length ? pool.pop() : new createjs.Sprite), sprite.parent = this, numKids++), sprite.spriteSheet = ss, sprite.gotoAndStop(index), sprite.x = x, sprite.y = y, childIndex++, x += sprite.getBounds().width + this.letterSpacing)
                        } else "\r" == character && "\n" == this.text.charAt(i + 1) && i++, x = 0, y += lineH;
                    else x += spaceW
                }
                for (; numKids > childIndex;) pool.push(sprite = kids.pop()), sprite.parent = null, numKids--;
                pool.length > BitmapText.maxPoolSize && (pool.length = BitmapText.maxPoolSize)
            }
        }, createjs.BitmapText = createjs.promote(BitmapText, "Container")
    }(),
    function() {
        "use strict";

        function MovieClip(mode, startPosition, loop, labels) {
            this.Container_constructor(), !MovieClip.inited && MovieClip.init(), this.mode = mode || MovieClip.INDEPENDENT, this.startPosition = startPosition || 0, this.loop = loop, this.currentFrame = 0, this.timeline = new createjs.Timeline(null, labels, {
                paused: !0,
                position: startPosition,
                useTicks: !0
            }), this.paused = !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || null, this.framerate = null, this._synchOffset = 0, this._prevPos = -1, this._prevPosition = 0, this._t = 0, this._managed = {}
        }

        function MovieClipPlugin() {
            throw "MovieClipPlugin cannot be instantiated."
        }
        var p = createjs.extend(MovieClip, createjs.Container);
        MovieClip.INDEPENDENT = "independent", MovieClip.SINGLE_FRAME = "single", MovieClip.SYNCHED = "synched", MovieClip.inited = !1, MovieClip.init = function() {
            MovieClip.inited || (MovieClipPlugin.install(), MovieClip.inited = !0)
        }, p.getLabels = function() {
            return this.timeline.getLabels()
        }, p.getCurrentLabel = function() {
            return this._updateTimeline(), this.timeline.getCurrentLabel()
        }, p.getDuration = function() {
            return this.timeline.duration
        };
        try {
            Object.defineProperties(p, {
                labels: {
                    get: p.getLabels
                },
                currentLabel: {
                    get: p.getCurrentLabel
                },
                totalFrames: {
                    get: p.getDuration
                },
                duration: {
                    get: p.getDuration
                }
            })
        } catch (e) {}
        p.initialize = MovieClip, p.isVisible = function() {
            return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
        }, p.draw = function(ctx, ignoreCache) {
            return !!this.DisplayObject_draw(ctx, ignoreCache) || (this._updateTimeline(), this.Container_draw(ctx, ignoreCache), !0)
        }, p.play = function() {
            this.paused = !1
        }, p.stop = function() {
            this.paused = !0
        }, p.gotoAndPlay = function(positionOrLabel) {
            this.paused = !1, this._goto(positionOrLabel)
        }, p.gotoAndStop = function(positionOrLabel) {
            this.paused = !0, this._goto(positionOrLabel)
        }, p.advance = function(time) {
            var independent = MovieClip.INDEPENDENT;
            if (this.mode == independent) {
                for (var o = this, fps = o.framerate;
                    (o = o.parent) && null == fps;) o.mode == independent && (fps = o._framerate);
                this._framerate = fps;
                var t = null != fps && -1 != fps && null != time ? time / (1e3 / fps) + this._t : 1,
                    frames = 0 | t;
                for (this._t = t - frames; !this.paused && frames--;) this._prevPosition = this._prevPos < 0 ? 0 : this._prevPosition + 1, this._updateTimeline()
            }
        }, p.clone = function() {
            throw "MovieClip cannot be cloned."
        }, p.toString = function() {
            return "[MovieClip (name=" + this.name + ")]"
        }, p._tick = function(evtObj) {
            this.advance(evtObj && evtObj.delta), this.Container__tick(evtObj)
        }, p._goto = function(positionOrLabel) {
            var pos = this.timeline.resolve(positionOrLabel);
            null != pos && (-1 == this._prevPos && (this._prevPos = NaN), this._prevPosition = pos, this._t = 0, this._updateTimeline())
        }, p._reset = function() {
            this._prevPos = -1, this._t = this.currentFrame = 0, this.paused = !1
        }, p._updateTimeline = function() {
            var tl = this.timeline,
                synched = this.mode != MovieClip.INDEPENDENT;
            tl.loop = null == this.loop || this.loop;
            var pos = synched ? this.startPosition + (this.mode == MovieClip.SINGLE_FRAME ? 0 : this._synchOffset) : this._prevPos < 0 ? 0 : this._prevPosition,
                mode = synched || !this.actionsEnabled ? createjs.Tween.NONE : null;
            if (this.currentFrame = tl._calcPosition(pos), tl.setPosition(pos, mode), this._prevPosition = tl._prevPosition, this._prevPos != tl._prevPos) {
                this.currentFrame = this._prevPos = tl._prevPos;
                for (var n in this._managed) this._managed[n] = 1;
                for (var tweens = tl._tweens, i = 0, l = tweens.length; i < l; i++) {
                    var tween = tweens[i],
                        target = tween._target;
                    if (target != this && !tween.passive) {
                        var offset = tween._stepPosition;
                        target instanceof createjs.DisplayObject ? this._addManagedChild(target, offset) : this._setState(target.state, offset)
                    }
                }
                var kids = this.children;
                for (i = kids.length - 1; i >= 0; i--) {
                    var id = kids[i].id;
                    1 == this._managed[id] && (this.removeChildAt(i), delete this._managed[id])
                }
            }
        }, p._setState = function(state, offset) {
            if (state)
                for (var i = state.length - 1; i >= 0; i--) {
                    var o = state[i],
                        target = o.t,
                        props = o.p;
                    for (var n in props) target[n] = props[n];
                    this._addManagedChild(target, offset)
                }
        }, p._addManagedChild = function(child, offset) {
            child._off || (this.addChildAt(child, 0), child instanceof MovieClip && (child._synchOffset = offset, child.mode == MovieClip.INDEPENDENT && child.autoReset && !this._managed[child.id] && child._reset()), this._managed[child.id] = 2)
        }, p._getBounds = function(matrix, ignoreTransform) {
            var bounds = this.DisplayObject_getBounds();
            return bounds || (this._updateTimeline(), this.frameBounds && (bounds = this._rectangle.copy(this.frameBounds[this.currentFrame]))), bounds ? this._transformBounds(bounds, matrix, ignoreTransform) : this.Container__getBounds(matrix, ignoreTransform)
        }, createjs.MovieClip = createjs.promote(MovieClip, "Container"), MovieClipPlugin.priority = 100, MovieClipPlugin.install = function() {
            createjs.Tween.installPlugin(MovieClipPlugin, ["startPosition"])
        }, MovieClipPlugin.init = function(tween, prop, value) {
            return value
        }, MovieClipPlugin.step = function() {}, MovieClipPlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
            return tween.target instanceof MovieClip ? 1 == ratio ? endValues[prop] : startValues[prop] : value
        }
    }(),
    function() {
        "use strict";

        function SpriteSheetUtils() {
            throw "SpriteSheetUtils cannot be instantiated"
        }
        var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.getContext && (SpriteSheetUtils._workingCanvas = canvas, SpriteSheetUtils._workingContext = canvas.getContext("2d"), canvas.width = canvas.height = 1), SpriteSheetUtils.addFlippedFrames = function(spriteSheet, horizontal, vertical, both) {
            if (horizontal || vertical || both) {
                var count = 0;
                horizontal && SpriteSheetUtils._flip(spriteSheet, ++count, !0, !1), vertical && SpriteSheetUtils._flip(spriteSheet, ++count, !1, !0), both && SpriteSheetUtils._flip(spriteSheet, ++count, !0, !0)
            }
        }, SpriteSheetUtils.extractFrame = function(spriteSheet, frameOrAnimation) {
            isNaN(frameOrAnimation) && (frameOrAnimation = spriteSheet.getAnimation(frameOrAnimation).frames[0]);
            var data = spriteSheet.getFrame(frameOrAnimation);
            if (!data) return null;
            var r = data.rect,
                canvas = SpriteSheetUtils._workingCanvas;
            canvas.width = r.width, canvas.height = r.height, SpriteSheetUtils._workingContext.drawImage(data.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
            var img = document.createElement("img");
            return img.src = canvas.toDataURL("image/png"), img
        }, SpriteSheetUtils.mergeAlpha = function(rgbImage, alphaImage, canvas) {
            canvas || (canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), canvas.width = Math.max(alphaImage.width, rgbImage.width), canvas.height = Math.max(alphaImage.height, rgbImage.height);
            var ctx = canvas.getContext("2d");
            return ctx.save(), ctx.drawImage(rgbImage, 0, 0), ctx.globalCompositeOperation = "destination-in", ctx.drawImage(alphaImage, 0, 0), ctx.restore(), canvas
        }, SpriteSheetUtils._flip = function(spriteSheet, count, h, v) {
            for (var imgs = spriteSheet._images, canvas = SpriteSheetUtils._workingCanvas, ctx = SpriteSheetUtils._workingContext, il = imgs.length / count, i = 0; i < il; i++) {
                var src = imgs[i];
                src.__tmp = i, ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, canvas.width + 1, canvas.height + 1), canvas.width = src.width, canvas.height = src.height, ctx.setTransform(h ? -1 : 1, 0, 0, v ? -1 : 1, h ? src.width : 0, v ? src.height : 0), ctx.drawImage(src, 0, 0);
                var img = document.createElement("img");
                img.src = canvas.toDataURL("image/png"), img.width = src.width, img.height = src.height, imgs.push(img)
            }
            var frames = spriteSheet._frames,
                fl = frames.length / count;
            for (i = 0; i < fl; i++) {
                var rect = (src = frames[i]).rect.clone(),
                    frame = {
                        image: img = imgs[src.image.__tmp + il * count],
                        rect: rect,
                        regX: src.regX,
                        regY: src.regY
                    };
                h && (rect.x = img.width - rect.x - rect.width, frame.regX = rect.width - src.regX), v && (rect.y = img.height - rect.y - rect.height, frame.regY = rect.height - src.regY), frames.push(frame)
            }
            var sfx = "_" + (h ? "h" : "") + (v ? "v" : ""),
                names = spriteSheet._animations,
                data = spriteSheet._data,
                al = names.length / count;
            for (i = 0; i < al; i++) {
                var name = names[i],
                    anim = {
                        name: name + sfx,
                        speed: (src = data[name]).speed,
                        next: src.next,
                        frames: []
                    };
                src.next && (anim.next += sfx);
                for (var j = 0, l = (frames = src.frames).length; j < l; j++) anim.frames.push(frames[j] + fl * count);
                data[anim.name] = anim, names.push(anim.name)
            }
        }, createjs.SpriteSheetUtils = SpriteSheetUtils
    }(),
    function() {
        "use strict";

        function SpriteSheetBuilder(framerate) {
            this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this.framerate = framerate || 0, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1
        }
        var p = createjs.extend(SpriteSheetBuilder, createjs.EventDispatcher);
        SpriteSheetBuilder.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", SpriteSheetBuilder.ERR_RUNNING = "a build is already running", p.addFrame = function(source, sourceRect, scale, setupFunction, setupData) {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            var rect = sourceRect || source.bounds || source.nominalBounds;
            return !rect && source.getBounds && (rect = source.getBounds()), rect ? (scale = scale || 1, this._frames.push({
                source: source,
                sourceRect: rect,
                scale: scale,
                funct: setupFunction,
                data: setupData,
                index: this._frames.length,
                height: rect.height * scale
            }) - 1) : null
        }, p.addAnimation = function(name, frames, next, speed) {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            this._animations[name] = {
                frames: frames,
                next: next,
                speed: speed
            }
        }, p.addMovieClip = function(source, sourceRect, scale, setupFunction, setupData, labelFunction) {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            var rects = source.frameBounds,
                rect = sourceRect || source.bounds || source.nominalBounds;
            if (!rect && source.getBounds && (rect = source.getBounds()), rect || rects) {
                var i, l, baseFrameIndex = this._frames.length,
                    duration = source.timeline.duration;
                for (i = 0; i < duration; i++) {
                    var r = rects && rects[i] ? rects[i] : rect;
                    this.addFrame(source, r, scale, this._setupMovieClipFrame, {
                        i: i,
                        f: setupFunction,
                        d: setupData
                    })
                }
                var labels = source.timeline._labels,
                    lbls = [];
                for (var n in labels) lbls.push({
                    index: labels[n],
                    label: n
                });
                if (lbls.length)
                    for (lbls.sort(function(a, b) {
                            return a.index - b.index
                        }), i = 0, l = lbls.length; i < l; i++) {
                        for (var label = lbls[i].label, start = baseFrameIndex + lbls[i].index, end = baseFrameIndex + (i == l - 1 ? duration : lbls[i + 1].index), frames = [], j = start; j < end; j++) frames.push(j);
                        labelFunction && !(label = labelFunction(label, source, start, end)) || this.addAnimation(label, frames, !0)
                    }
            }
        }, p.build = function() {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            for (this._startBuild(); this._drawNext(););
            return this._endBuild(), this.spriteSheet
        }, p.buildAsync = function(timeSlice) {
            if (this._data) throw SpriteSheetBuilder.ERR_RUNNING;
            this.timeSlice = timeSlice, this._startBuild();
            var _this = this;
            this._timerID = setTimeout(function() {
                _this._run()
            }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
        }, p.stopAsync = function() {
            clearTimeout(this._timerID), this._data = null
        }, p.clone = function() {
            throw "SpriteSheetBuilder cannot be cloned."
        }, p.toString = function() {
            return "[SpriteSheetBuilder]"
        }, p._startBuild = function() {
            var pad = this.padding || 0;
            this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
            var dataFrames = [];
            this._data = {
                images: [],
                frames: dataFrames,
                framerate: this.framerate,
                animations: this._animations
            };
            var frames = this._frames.slice();
            if (frames.sort(function(a, b) {
                    return a.height <= b.height ? -1 : 1
                }), frames[frames.length - 1].height + 2 * pad > this.maxHeight) throw SpriteSheetBuilder.ERR_DIMENSIONS;
            for (var y = 0, x = 0, img = 0; frames.length;) {
                var o = this._fillRow(frames, y, img, dataFrames, pad);
                if (o.w > x && (x = o.w), y += o.h, !o.h || !frames.length) {
                    var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                    canvas.width = this._getSize(x, this.maxWidth), canvas.height = this._getSize(y, this.maxHeight), this._data.images[img] = canvas, o.h || (x = y = 0, img++)
                }
            }
        }, p._setupMovieClipFrame = function(source, data) {
            var ae = source.actionsEnabled;
            source.actionsEnabled = !1, source.gotoAndStop(data.i), source.actionsEnabled = ae, data.f && data.f(source, data.d, data.i)
        }, p._getSize = function(size, max) {
            for (var pow = 4; Math.pow(2, ++pow) < size;);
            return Math.min(max, Math.pow(2, pow))
        }, p._fillRow = function(frames, y, img, dataFrames, pad) {
            for (var w = this.maxWidth, h = this.maxHeight - (y += pad), x = pad, height = 0, i = frames.length - 1; i >= 0; i--) {
                var frame = frames[i],
                    sc = this._scale * frame.scale,
                    rect = frame.sourceRect,
                    source = frame.source,
                    rx = Math.floor(sc * rect.x - pad),
                    ry = Math.floor(sc * rect.y - pad),
                    rh = Math.ceil(sc * rect.height + 2 * pad),
                    rw = Math.ceil(sc * rect.width + 2 * pad);
                if (rw > w) throw SpriteSheetBuilder.ERR_DIMENSIONS;
                rh > h || x + rw > w || (frame.img = img, frame.rect = new createjs.Rectangle(x, y, rw, rh), height = height || rh, frames.splice(i, 1), dataFrames[frame.index] = [x, y, rw, rh, img, Math.round(-rx + sc * source.regX - pad), Math.round(-ry + sc * source.regY - pad)], x += rw)
            }
            return {
                w: x,
                h: height
            }
        }, p._endBuild = function() {
            this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
        }, p._run = function() {
            for (var ts = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), t = (new Date).getTime() + ts, complete = !1; t > (new Date).getTime();)
                if (!this._drawNext()) {
                    complete = !0;
                    break
                }
            if (complete) this._endBuild();
            else {
                var _this = this;
                this._timerID = setTimeout(function() {
                    _this._run()
                }, 50 - ts)
            }
            var p = this.progress = this._index / this._frames.length;
            if (this.hasEventListener("progress")) {
                var evt = new createjs.Event("progress");
                evt.progress = p, this.dispatchEvent(evt)
            }
        }, p._drawNext = function() {
            var frame = this._frames[this._index],
                sc = frame.scale * this._scale,
                rect = frame.rect,
                sourceRect = frame.sourceRect,
                ctx = this._data.images[frame.img].getContext("2d");
            return frame.funct && frame.funct(frame.source, frame.data), ctx.save(), ctx.beginPath(), ctx.rect(rect.x, rect.y, rect.width, rect.height), ctx.clip(), ctx.translate(Math.ceil(rect.x - sourceRect.x * sc), Math.ceil(rect.y - sourceRect.y * sc)), ctx.scale(sc, sc), frame.source.draw(ctx), ctx.restore(), ++this._index < this._frames.length
        }, createjs.SpriteSheetBuilder = createjs.promote(SpriteSheetBuilder, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function DOMElement(htmlElement) {
            this.DisplayObject_constructor(), "string" == typeof htmlElement && (htmlElement = document.getElementById(htmlElement)), this.mouseEnabled = !1;
            var style = htmlElement.style;
            style.position = "absolute", style.transformOrigin = style.WebkitTransformOrigin = style.msTransformOrigin = style.MozTransformOrigin = style.OTransformOrigin = "0% 0%", this.htmlElement = htmlElement, this._oldProps = null
        }
        var p = createjs.extend(DOMElement, createjs.DisplayObject);
        p.isVisible = function() {
            return null != this.htmlElement
        }, p.draw = function(ctx, ignoreCache) {
            return !0
        }, p.cache = function() {}, p.uncache = function() {}, p.updateCache = function() {}, p.hitTest = function() {}, p.localToGlobal = function() {}, p.globalToLocal = function() {}, p.localToLocal = function() {}, p.clone = function() {
            throw "DOMElement cannot be cloned."
        }, p.toString = function() {
            return "[DOMElement (name=" + this.name + ")]"
        }, p._tick = function(evtObj) {
            var stage = this.getStage();
            stage && stage.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(evtObj)
        }, p._handleDrawEnd = function(evt) {
            var o = this.htmlElement;
            if (o) {
                var style = o.style,
                    props = this.getConcatenatedDisplayProps(this._props),
                    mtx = props.matrix,
                    visibility = props.visible ? "visible" : "hidden";
                if (visibility != style.visibility && (style.visibility = visibility), props.visible) {
                    var oldProps = this._oldProps,
                        oldMtx = oldProps && oldProps.matrix,
                        n = 1e4;
                    if (!oldMtx || !oldMtx.equals(mtx)) {
                        var str = "matrix(" + (mtx.a * n | 0) / n + "," + (mtx.b * n | 0) / n + "," + (mtx.c * n | 0) / n + "," + (mtx.d * n | 0) / n + "," + (mtx.tx + .5 | 0);
                        style.transform = style.WebkitTransform = style.OTransform = style.msTransform = str + "," + (mtx.ty + .5 | 0) + ")", style.MozTransform = str + "px," + (mtx.ty + .5 | 0) + "px)", oldProps || (oldProps = this._oldProps = new createjs.DisplayProps(!0, NaN)), oldProps.matrix.copy(mtx)
                    }
                    oldProps.alpha != props.alpha && (style.opacity = "" + (props.alpha * n | 0) / n, oldProps.alpha = props.alpha)
                }
            }
        }, createjs.DOMElement = createjs.promote(DOMElement, "DisplayObject")
    }(),
    function() {
        "use strict";

        function Filter() {}
        var p = Filter.prototype;
        p.getBounds = function(rect) {
            return rect
        }, p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
            targetCtx = targetCtx || ctx, null == targetX && (targetX = x), null == targetY && (targetY = y);
            try {
                var imageData = ctx.getImageData(x, y, width, height)
            } catch (e) {
                return !1
            }
            return !!this._applyFilter(imageData) && (targetCtx.putImageData(imageData, targetX, targetY), !0)
        }, p.toString = function() {
            return "[Filter]"
        }, p.clone = function() {
            return new Filter
        }, p._applyFilter = function(imageData) {
            return !0
        }, createjs.Filter = Filter
    }(),
    function() {
        "use strict";

        function BlurFilter(blurX, blurY, quality) {
            (isNaN(blurX) || blurX < 0) && (blurX = 0), (isNaN(blurY) || blurY < 0) && (blurY = 0), (isNaN(quality) || quality < 1) && (quality = 1), this.blurX = 0 | blurX, this.blurY = 0 | blurY, this.quality = 0 | quality
        }
        var p = createjs.extend(BlurFilter, createjs.Filter);
        BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], p.getBounds = function(rect) {
            var x = 0 | this.blurX,
                y = 0 | this.blurY;
            if (x <= 0 && y <= 0) return rect;
            var q = Math.pow(this.quality, .2);
            return (rect || new createjs.Rectangle).pad(x * q + 1, y * q + 1, x * q + 1, y * q + 1)
        }, p.clone = function() {
            return new BlurFilter(this.blurX, this.blurY, this.quality)
        }, p.toString = function() {
            return "[BlurFilter]"
        }, p._applyFilter = function(imageData) {
            var radiusX = this.blurX >> 1;
            if (isNaN(radiusX) || radiusX < 0) return !1;
            var radiusY = this.blurY >> 1;
            if (isNaN(radiusY) || radiusY < 0) return !1;
            if (0 == radiusX && 0 == radiusY) return !1;
            var iterations = this.quality;
            (isNaN(iterations) || iterations < 1) && (iterations = 1), (iterations |= 0) > 3 && (iterations = 3), iterations < 1 && (iterations = 1);
            var px = imageData.data,
                x = 0,
                y = 0,
                i = 0,
                p = 0,
                yp = 0,
                yi = 0,
                yw = 0,
                r = 0,
                g = 0,
                b = 0,
                a = 0,
                pr = 0,
                pg = 0,
                pb = 0,
                pa = 0,
                divx = radiusX + radiusX + 1 | 0,
                divy = radiusY + radiusY + 1 | 0,
                w = 0 | imageData.width,
                h = 0 | imageData.height,
                w1 = w - 1 | 0,
                h1 = h - 1 | 0,
                rxp1 = radiusX + 1 | 0,
                ryp1 = radiusY + 1 | 0,
                ssx = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                sx = ssx;
            for (i = 1; i < divx; i++) sx = sx.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            sx.n = ssx;
            var ssy = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                sy = ssy;
            for (i = 1; i < divy; i++) sy = sy.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            sy.n = ssy;
            for (var si = null, mtx = 0 | BlurFilter.MUL_TABLE[radiusX], stx = 0 | BlurFilter.SHG_TABLE[radiusX], mty = 0 | BlurFilter.MUL_TABLE[radiusY], sty = 0 | BlurFilter.SHG_TABLE[radiusY]; iterations-- > 0;) {
                yw = yi = 0;
                var ms = mtx,
                    ss = stx;
                for (y = h; --y > -1;) {
                    for (r = rxp1 * (pr = px[0 | yi]), g = rxp1 * (pg = px[yi + 1 | 0]), b = rxp1 * (pb = px[yi + 2 | 0]), a = rxp1 * (pa = px[yi + 3 | 0]), sx = ssx, i = rxp1; --i > -1;) sx.r = pr, sx.g = pg, sx.b = pb, sx.a = pa, sx = sx.n;
                    for (i = 1; i < rxp1; i++) p = yi + ((w1 < i ? w1 : i) << 2) | 0, r += sx.r = px[p], g += sx.g = px[p + 1], b += sx.b = px[p + 2], a += sx.a = px[p + 3], sx = sx.n;
                    for (si = ssx, x = 0; x < w; x++) px[yi++] = r * ms >>> ss, px[yi++] = g * ms >>> ss, px[yi++] = b * ms >>> ss, px[yi++] = a * ms >>> ss, p = yw + ((p = x + radiusX + 1) < w1 ? p : w1) << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n;
                    yw += w
                }
                for (ms = mty, ss = sty, x = 0; x < w; x++) {
                    for (r = ryp1 * (pr = px[yi = x << 2 | 0]) | 0, g = ryp1 * (pg = px[yi + 1 | 0]) | 0, b = ryp1 * (pb = px[yi + 2 | 0]) | 0, a = ryp1 * (pa = px[yi + 3 | 0]) | 0, sy = ssy, i = 0; i < ryp1; i++) sy.r = pr, sy.g = pg, sy.b = pb, sy.a = pa, sy = sy.n;
                    for (yp = w, i = 1; i <= radiusY; i++) yi = yp + x << 2, r += sy.r = px[yi], g += sy.g = px[yi + 1], b += sy.b = px[yi + 2], a += sy.a = px[yi + 3], sy = sy.n, i < h1 && (yp += w);
                    if (yi = x, si = ssy, iterations > 0)
                        for (y = 0; y < h; y++) px[(p = yi << 2) + 3] = pa = a * ms >>> ss, pa > 0 ? (px[p] = r * ms >>> ss, px[p + 1] = g * ms >>> ss, px[p + 2] = b * ms >>> ss) : px[p] = px[p + 1] = px[p + 2] = 0, p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n, yi += w;
                    else
                        for (y = 0; y < h; y++) px[(p = yi << 2) + 3] = pa = a * ms >>> ss, pa > 0 ? (pa = 255 / pa, px[p] = (r * ms >>> ss) * pa, px[p + 1] = (g * ms >>> ss) * pa, px[p + 2] = (b * ms >>> ss) * pa) : px[p] = px[p + 1] = px[p + 2] = 0, p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n, yi += w
                }
            }
            return !0
        }, createjs.BlurFilter = createjs.promote(BlurFilter, "Filter")
    }(),
    function() {
        "use strict";

        function AlphaMapFilter(alphaMap) {
            this.alphaMap = alphaMap, this._alphaMap = null, this._mapData = null
        }
        var p = createjs.extend(AlphaMapFilter, createjs.Filter);
        p.clone = function() {
            var o = new AlphaMapFilter(this.alphaMap);
            return o._alphaMap = this._alphaMap, o._mapData = this._mapData, o
        }, p.toString = function() {
            return "[AlphaMapFilter]"
        }, p._applyFilter = function(imageData) {
            if (!this.alphaMap) return !0;
            if (!this._prepAlphaMap()) return !1;
            for (var data = imageData.data, map = this._mapData, i = 0, l = data.length; i < l; i += 4) data[i + 3] = map[i] || 0;
            return !0
        }, p._prepAlphaMap = function() {
            if (!this.alphaMap) return !1;
            if (this.alphaMap == this._alphaMap && this._mapData) return !0;
            this._mapData = null;
            var ctx, map = this._alphaMap = this.alphaMap,
                canvas = map;
            map instanceof HTMLCanvasElement ? ctx = canvas.getContext("2d") : ((canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).width = map.width, canvas.height = map.height, (ctx = canvas.getContext("2d")).drawImage(map, 0, 0));
            try {
                var imgData = ctx.getImageData(0, 0, map.width, map.height)
            } catch (e) {
                return !1
            }
            return this._mapData = imgData.data, !0
        }, createjs.AlphaMapFilter = createjs.promote(AlphaMapFilter, "Filter")
    }(),
    function() {
        "use strict";

        function AlphaMaskFilter(mask) {
            this.mask = mask
        }
        var p = createjs.extend(AlphaMaskFilter, createjs.Filter);
        p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
            return !this.mask || (targetCtx = targetCtx || ctx, null == targetX && (targetX = x), null == targetY && (targetY = y), targetCtx.save(), ctx == targetCtx && (targetCtx.globalCompositeOperation = "destination-in", targetCtx.drawImage(this.mask, targetX, targetY), targetCtx.restore(), !0))
        }, p.clone = function() {
            return new AlphaMaskFilter(this.mask)
        }, p.toString = function() {
            return "[AlphaMaskFilter]"
        }, createjs.AlphaMaskFilter = createjs.promote(AlphaMaskFilter, "Filter")
    }(),
    function() {
        "use strict";

        function ColorFilter(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
            this.redMultiplier = null != redMultiplier ? redMultiplier : 1, this.greenMultiplier = null != greenMultiplier ? greenMultiplier : 1, this.blueMultiplier = null != blueMultiplier ? blueMultiplier : 1, this.alphaMultiplier = null != alphaMultiplier ? alphaMultiplier : 1, this.redOffset = redOffset || 0, this.greenOffset = greenOffset || 0, this.blueOffset = blueOffset || 0, this.alphaOffset = alphaOffset || 0
        }
        var p = createjs.extend(ColorFilter, createjs.Filter);
        p.toString = function() {
            return "[ColorFilter]"
        }, p.clone = function() {
            return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
        }, p._applyFilter = function(imageData) {
            for (var data = imageData.data, l = data.length, i = 0; i < l; i += 4) data[i] = data[i] * this.redMultiplier + this.redOffset, data[i + 1] = data[i + 1] * this.greenMultiplier + this.greenOffset, data[i + 2] = data[i + 2] * this.blueMultiplier + this.blueOffset, data[i + 3] = data[i + 3] * this.alphaMultiplier + this.alphaOffset;
            return !0
        }, createjs.ColorFilter = createjs.promote(ColorFilter, "Filter")
    }(),
    function() {
        "use strict";

        function ColorMatrix(brightness, contrast, saturation, hue) {
            this.setColor(brightness, contrast, saturation, hue)
        }
        var p = ColorMatrix.prototype;
        ColorMatrix.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], ColorMatrix.LENGTH = (ColorMatrix.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]).length, p.setColor = function(brightness, contrast, saturation, hue) {
            return this.reset().adjustColor(brightness, contrast, saturation, hue)
        }, p.reset = function() {
            return this.copy(ColorMatrix.IDENTITY_MATRIX)
        }, p.adjustColor = function(brightness, contrast, saturation, hue) {
            return this.adjustHue(hue), this.adjustContrast(contrast), this.adjustBrightness(brightness), this.adjustSaturation(saturation)
        }, p.adjustBrightness = function(value) {
            return 0 == value || isNaN(value) ? this : (value = this._cleanValue(value, 255), this._multiplyMatrix([1, 0, 0, 0, value, 0, 1, 0, 0, value, 0, 0, 1, 0, value, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
        }, p.adjustContrast = function(value) {
            if (0 == value || isNaN(value)) return this;
            var x;
            return x = (value = this._cleanValue(value, 100)) < 0 ? 127 + value / 100 * 127 : 127 * (x = 0 == (x = value % 1) ? ColorMatrix.DELTA_INDEX[value] : ColorMatrix.DELTA_INDEX[value << 0] * (1 - x) + ColorMatrix.DELTA_INDEX[1 + (value << 0)] * x) + 127, this._multiplyMatrix([x / 127, 0, 0, 0, .5 * (127 - x), 0, x / 127, 0, 0, .5 * (127 - x), 0, 0, x / 127, 0, .5 * (127 - x), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, p.adjustSaturation = function(value) {
            if (0 == value || isNaN(value)) return this;
            var x = 1 + ((value = this._cleanValue(value, 100)) > 0 ? 3 * value / 100 : value / 100);
            return this._multiplyMatrix([.3086 * (1 - x) + x, .6094 * (1 - x), .082 * (1 - x), 0, 0, .3086 * (1 - x), .6094 * (1 - x) + x, .082 * (1 - x), 0, 0, .3086 * (1 - x), .6094 * (1 - x), .082 * (1 - x) + x, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, p.adjustHue = function(value) {
            if (0 == value || isNaN(value)) return this;
            value = this._cleanValue(value, 180) / 180 * Math.PI;
            var cosVal = Math.cos(value),
                sinVal = Math.sin(value);
            return this._multiplyMatrix([.213 + .787 * cosVal + -.213 * sinVal, .715 + -.715 * cosVal + -.715 * sinVal, .072 + -.072 * cosVal + .928 * sinVal, 0, 0, .213 + -.213 * cosVal + .143 * sinVal, .715 + cosVal * (1 - .715) + .14 * sinVal, .072 + -.072 * cosVal + -.283 * sinVal, 0, 0, .213 + -.213 * cosVal + -.787 * sinVal, .715 + -.715 * cosVal + .715 * sinVal, .072 + .928 * cosVal + .072 * sinVal, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
        }, p.concat = function(matrix) {
            return (matrix = this._fixMatrix(matrix)).length != ColorMatrix.LENGTH ? this : (this._multiplyMatrix(matrix), this)
        }, p.clone = function() {
            return (new ColorMatrix).copy(this)
        }, p.toArray = function() {
            for (var arr = [], i = 0, l = ColorMatrix.LENGTH; i < l; i++) arr[i] = this[i];
            return arr
        }, p.copy = function(matrix) {
            for (var l = ColorMatrix.LENGTH, i = 0; i < l; i++) this[i] = matrix[i];
            return this
        }, p.toString = function() {
            return "[ColorMatrix]"
        }, p._multiplyMatrix = function(matrix) {
            var i, j, k, col = [];
            for (i = 0; i < 5; i++) {
                for (j = 0; j < 5; j++) col[j] = this[j + 5 * i];
                for (j = 0; j < 5; j++) {
                    var val = 0;
                    for (k = 0; k < 5; k++) val += matrix[j + 5 * k] * col[k];
                    this[j + 5 * i] = val
                }
            }
        }, p._cleanValue = function(value, limit) {
            return Math.min(limit, Math.max(-limit, value))
        }, p._fixMatrix = function(matrix) {
            return matrix instanceof ColorMatrix && (matrix = matrix.toArray()), matrix.length < ColorMatrix.LENGTH ? matrix = matrix.slice(0, matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length, ColorMatrix.LENGTH)) : matrix.length > ColorMatrix.LENGTH && (matrix = matrix.slice(0, ColorMatrix.LENGTH)), matrix
        }, createjs.ColorMatrix = ColorMatrix
    }(),
    function() {
        "use strict";

        function ColorMatrixFilter(matrix) {
            this.matrix = matrix
        }
        var p = createjs.extend(ColorMatrixFilter, createjs.Filter);
        p.toString = function() {
            return "[ColorMatrixFilter]"
        }, p.clone = function() {
            return new ColorMatrixFilter(this.matrix)
        }, p._applyFilter = function(imageData) {
            for (var r, g, b, a, data = imageData.data, l = data.length, mtx = this.matrix, m0 = mtx[0], m1 = mtx[1], m2 = mtx[2], m3 = mtx[3], m4 = mtx[4], m5 = mtx[5], m6 = mtx[6], m7 = mtx[7], m8 = mtx[8], m9 = mtx[9], m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14], m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19], i = 0; i < l; i += 4) r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3], data[i] = r * m0 + g * m1 + b * m2 + a * m3 + m4, data[i + 1] = r * m5 + g * m6 + b * m7 + a * m8 + m9, data[i + 2] = r * m10 + g * m11 + b * m12 + a * m13 + m14, data[i + 3] = r * m15 + g * m16 + b * m17 + a * m18 + m19;
            return !0
        }, createjs.ColorMatrixFilter = createjs.promote(ColorMatrixFilter, "Filter")
    }(),
    function() {
        "use strict";

        function Touch() {
            throw "Touch cannot be instantiated"
        }
        Touch.isSupported = function() {
            return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0)
        }, Touch.enable = function(stage, singleTouch, allowDefault) {
            return !!(stage && stage.canvas && Touch.isSupported()) && (!!stage.__touch || (stage.__touch = {
                pointers: {},
                multitouch: !singleTouch,
                preventDefault: !allowDefault,
                count: 0
            }, "ontouchstart" in window ? Touch._IOS_enable(stage) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && Touch._IE_enable(stage), !0))
        }, Touch.disable = function(stage) {
            stage && ("ontouchstart" in window ? Touch._IOS_disable(stage) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && Touch._IE_disable(stage), delete stage.__touch)
        }, Touch._IOS_enable = function(stage) {
            var canvas = stage.canvas,
                f = stage.__touch.f = function(e) {
                    Touch._IOS_handleEvent(stage, e)
                };
            canvas.addEventListener("touchstart", f, !1), canvas.addEventListener("touchmove", f, !1), canvas.addEventListener("touchend", f, !1), canvas.addEventListener("touchcancel", f, !1)
        }, Touch._IOS_disable = function(stage) {
            var canvas = stage.canvas;
            if (canvas) {
                var f = stage.__touch.f;
                canvas.removeEventListener("touchstart", f, !1), canvas.removeEventListener("touchmove", f, !1), canvas.removeEventListener("touchend", f, !1), canvas.removeEventListener("touchcancel", f, !1)
            }
        }, Touch._IOS_handleEvent = function(stage, e) {
            if (stage) {
                stage.__touch.preventDefault && e.preventDefault && e.preventDefault();
                for (var touches = e.changedTouches, type = e.type, i = 0, l = touches.length; i < l; i++) {
                    var touch = touches[i],
                        id = touch.identifier;
                    touch.target == stage.canvas && ("touchstart" == type ? this._handleStart(stage, id, e, touch.pageX, touch.pageY) : "touchmove" == type ? this._handleMove(stage, id, e, touch.pageX, touch.pageY) : "touchend" != type && "touchcancel" != type || this._handleEnd(stage, id, e))
                }
            }
        }, Touch._IE_enable = function(stage) {
            var canvas = stage.canvas,
                f = stage.__touch.f = function(e) {
                    Touch._IE_handleEvent(stage, e)
                };
            void 0 === window.navigator.pointerEnabled ? (canvas.addEventListener("MSPointerDown", f, !1), window.addEventListener("MSPointerMove", f, !1), window.addEventListener("MSPointerUp", f, !1), window.addEventListener("MSPointerCancel", f, !1), stage.__touch.preventDefault && (canvas.style.msTouchAction = "none")) : (canvas.addEventListener("pointerdown", f, !1), window.addEventListener("pointermove", f, !1), window.addEventListener("pointerup", f, !1), window.addEventListener("pointercancel", f, !1), stage.__touch.preventDefault && (canvas.style.touchAction = "none")), stage.__touch.activeIDs = {}
        }, Touch._IE_disable = function(stage) {
            var f = stage.__touch.f;
            void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", f, !1), window.removeEventListener("MSPointerUp", f, !1), window.removeEventListener("MSPointerCancel", f, !1), stage.canvas && stage.canvas.removeEventListener("MSPointerDown", f, !1)) : (window.removeEventListener("pointermove", f, !1), window.removeEventListener("pointerup", f, !1), window.removeEventListener("pointercancel", f, !1), stage.canvas && stage.canvas.removeEventListener("pointerdown", f, !1))
        }, Touch._IE_handleEvent = function(stage, e) {
            if (stage) {
                stage.__touch.preventDefault && e.preventDefault && e.preventDefault();
                var type = e.type,
                    id = e.pointerId,
                    ids = stage.__touch.activeIDs;
                if ("MSPointerDown" == type || "pointerdown" == type) {
                    if (e.srcElement != stage.canvas) return;
                    ids[id] = !0, this._handleStart(stage, id, e, e.pageX, e.pageY)
                } else ids[id] && ("MSPointerMove" == type || "pointermove" == type ? this._handleMove(stage, id, e, e.pageX, e.pageY) : "MSPointerUp" != type && "MSPointerCancel" != type && "pointerup" != type && "pointercancel" != type || (delete ids[id], this._handleEnd(stage, id, e)))
            }
        }, Touch._handleStart = function(stage, id, e, x, y) {
            var props = stage.__touch;
            if (props.multitouch || !props.count) {
                var ids = props.pointers;
                ids[id] || (ids[id] = !0, props.count++, stage._handlePointerDown(id, e, x, y))
            }
        }, Touch._handleMove = function(stage, id, e, x, y) {
            stage.__touch.pointers[id] && stage._handlePointerMove(id, e, x, y)
        }, Touch._handleEnd = function(stage, id, e) {
            var props = stage.__touch,
                ids = props.pointers;
            ids[id] && (props.count--, stage._handlePointerUp(id, e, !0), delete ids[id])
        }, createjs.Touch = Touch
    }(),
    function() {
        "use strict";
        var s = createjs.EaselJS = createjs.EaselJS || {};
        s.version = "0.8.2", s.buildDate = "Thu, 26 Nov 2015 20:44:34 GMT"
    }(),
    function() {
        "use strict";
        var s = createjs.PreloadJS = createjs.PreloadJS || {};
        s.version = "0.6.2", s.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(),
    function() {
        "use strict";
        createjs.proxy = function(method, scope) {
            var aArgs = Array.prototype.slice.call(arguments, 2);
            return function() {
                return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs))
            }
        }
    }(),
    function() {
        "use strict";

        function ErrorEvent(title, message, data) {
            this.Event_constructor("error"), this.title = title, this.message = message, this.data = data
        }
        createjs.extend(ErrorEvent, createjs.Event).clone = function() {
            return new createjs.ErrorEvent(this.title, this.message, this.data)
        }, createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event")
    }(),
    function(scope) {
        "use strict";

        function ProgressEvent(loaded, total) {
            this.Event_constructor("progress"), this.loaded = loaded, this.total = null == total ? 1 : total, this.progress = 0 == total ? 0 : this.loaded / this.total
        }
        createjs.extend(ProgressEvent, createjs.Event).clone = function() {
            return new createjs.ProgressEvent(this.loaded, this.total)
        }, createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event")
    }(window),
    function() {
        function runInContext(context, exports) {
            function has(name) {
                if (has[name] !== undef) return has[name];
                var isSupported;
                if ("bug-string-char-index" == name) isSupported = "a" != "a" [0];
                else if ("json" == name) isSupported = has("json-stringify") && has("json-parse");
                else {
                    var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if ("json-stringify" == name) {
                        var stringify = exports.stringify,
                            stringifySupported = "function" == typeof stringify && isExtended;
                        if (stringifySupported) {
                            (value = function() {
                                return 1
                            }).toJSON = value;
                            try {
                                stringifySupported = "0" === stringify(0) && "0" === stringify(new Number) && '""' == stringify(new String) && stringify(getClass) === undef && stringify(undef) === undef && stringify() === undef && "1" === stringify(value) && "[1]" == stringify([value]) && "[null]" == stringify([undef]) && "null" == stringify(null) && "[null,null,null]" == stringify([undef, getClass, null]) && stringify({
                                    a: [value, !0, !1, null, "\0\b\n\f\r\t"]
                                }) == serialized && "1" === stringify(null, value) && "[\n 1,\n 2\n]" == stringify([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == stringify(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == stringify(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == stringify(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == stringify(new Date(-1))
                            } catch (exception) {
                                stringifySupported = !1
                            }
                        }
                        isSupported = stringifySupported
                    }
                    if ("json-parse" == name) {
                        var parse = exports.parse;
                        if ("function" == typeof parse) try {
                            if (0 === parse("0") && !parse(!1)) {
                                var parseSupported = 5 == (value = parse(serialized)).a.length && 1 === value.a[0];
                                if (parseSupported) {
                                    try {
                                        parseSupported = !parse('"\t"')
                                    } catch (exception) {}
                                    if (parseSupported) try {
                                        parseSupported = 1 !== parse("01")
                                    } catch (exception) {}
                                    if (parseSupported) try {
                                        parseSupported = 1 !== parse("1.")
                                    } catch (exception) {}
                                }
                            }
                        } catch (exception) {
                            parseSupported = !1
                        }
                        isSupported = parseSupported
                    }
                }
                return has[name] = !!isSupported
            }
            context || (context = root.Object()), exports || (exports = root.Object());
            var Number = context.Number || root.Number,
                String = context.String || root.String,
                Object = context.Object || root.Object,
                Date = context.Date || root.Date,
                SyntaxError = context.SyntaxError || root.SyntaxError,
                TypeError = context.TypeError || root.TypeError,
                Math = context.Math || root.Math,
                nativeJSON = context.JSON || root.JSON;
            "object" == typeof nativeJSON && nativeJSON && (exports.stringify = nativeJSON.stringify, exports.parse = nativeJSON.parse);
            var isProperty, forEach, undef, objectProto = Object.prototype,
                getClass = objectProto.toString,
                isExtended = new Date(-0xc782b5b800cec);
            try {
                isExtended = -109252 == isExtended.getUTCFullYear() && 0 === isExtended.getUTCMonth() && 1 === isExtended.getUTCDate() && 10 == isExtended.getUTCHours() && 37 == isExtended.getUTCMinutes() && 6 == isExtended.getUTCSeconds() && 708 == isExtended.getUTCMilliseconds()
            } catch (exception) {}
            if (!has("json")) {
                var charIndexBuggy = has("bug-string-char-index");
                if (!isExtended) var floor = Math.floor,
                    Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    getDay = function(year, month) {
                        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400)
                    };
                if ((isProperty = objectProto.hasOwnProperty) || (isProperty = function(property) {
                        var constructor, members = {};
                        return (members.__proto__ = null, members.__proto__ = {
                            toString: 1
                        }, members).toString != getClass ? isProperty = function(property) {
                            var original = this.__proto__,
                                result = property in (this.__proto__ = null, this);
                            return this.__proto__ = original, result
                        } : (constructor = members.constructor, isProperty = function(property) {
                            var parent = (this.constructor || constructor).prototype;
                            return property in this && !(property in parent && this[property] === parent[property])
                        }), members = null, isProperty.call(this, property)
                    }), forEach = function(object, callback) {
                        var Properties, members, property, size = 0;
                        (Properties = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, members = new Properties;
                        for (property in members) isProperty.call(members, property) && size++;
                        return Properties = members = null, size ? forEach = 2 == size ? function(object, callback) {
                            var property, members = {},
                                isFunction = "[object Function]" == getClass.call(object);
                            for (property in object) isFunction && "prototype" == property || isProperty.call(members, property) || !(members[property] = 1) || !isProperty.call(object, property) || callback(property)
                        } : function(object, callback) {
                            var property, isConstructor, isFunction = "[object Function]" == getClass.call(object);
                            for (property in object) isFunction && "prototype" == property || !isProperty.call(object, property) || (isConstructor = "constructor" === property) || callback(property);
                            (isConstructor || isProperty.call(object, property = "constructor")) && callback(property)
                        } : (members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], forEach = function(object, callback) {
                            var property, length, isFunction = "[object Function]" == getClass.call(object),
                                hasProperty = !isFunction && "function" != typeof object.constructor && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                            for (property in object) isFunction && "prototype" == property || !hasProperty.call(object, property) || callback(property);
                            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
                        }), forEach(object, callback)
                    }, !has("json-stringify")) {
                    var Escapes = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        toPaddedString = function(width, value) {
                            return ("000000" + (value || 0)).slice(-width)
                        },
                        quote = function(value) {
                            for (var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10, symbols = useCharIndex && (charIndexBuggy ? value.split("") : value); index < length; index++) {
                                var charCode = value.charCodeAt(index);
                                switch (charCode) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        result += Escapes[charCode];
                                        break;
                                    default:
                                        if (charCode < 32) {
                                            result += "\\u00" + toPaddedString(2, charCode.toString(16));
                                            break
                                        }
                                        result += useCharIndex ? symbols[index] : value.charAt(index)
                                }
                            }
                            return result + '"'
                        },
                        serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                            var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                            try {
                                value = object[property]
                            } catch (exception) {}
                            if ("object" == typeof value && value)
                                if ("[object Date]" != (className = getClass.call(value)) || isProperty.call(value, "toJSON")) "function" == typeof value.toJSON && ("[object Number]" != className && "[object String]" != className && "[object Array]" != className || isProperty.call(value, "toJSON")) && (value = value.toJSON(property));
                                else if (value > -1 / 0 && value < 1 / 0) {
                                if (getDay) {
                                    for (date = floor(value / 864e5), year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                                    date = 1 + date - getDay(year, month), hours = floor((time = (value % 864e5 + 864e5) % 864e5) / 36e5) % 24, minutes = floor(time / 6e4) % 60, seconds = floor(time / 1e3) % 60, milliseconds = time % 1e3
                                } else year = value.getUTCFullYear(), month = value.getUTCMonth(), date = value.getUTCDate(), hours = value.getUTCHours(), minutes = value.getUTCMinutes(), seconds = value.getUTCSeconds(), milliseconds = value.getUTCMilliseconds();
                                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z"
                            } else value = null;
                            if (callback && (value = callback.call(object, property, value)), null === value) return "null";
                            if ("[object Boolean]" == (className = getClass.call(value))) return "" + value;
                            if ("[object Number]" == className) return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                            if ("[object String]" == className) return quote("" + value);
                            if ("object" == typeof value) {
                                for (length = stack.length; length--;)
                                    if (stack[length] === value) throw TypeError();
                                if (stack.push(value), results = [], prefix = indentation, indentation += whitespace, "[object Array]" == className) {
                                    for (index = 0, length = value.length; index < length; index++) element = serialize(index, value, callback, properties, whitespace, indentation, stack), results.push(element === undef ? "null" : element);
                                    result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]"
                                } else forEach(properties || value, function(property) {
                                    var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                    element !== undef && results.push(quote(property) + ":" + (whitespace ? " " : "") + element)
                                }), result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                                return stack.pop(), result
                            }
                        };
                    exports.stringify = function(source, filter, width) {
                        var whitespace, callback, properties, className;
                        if (objectTypes[typeof filter] && filter)
                            if ("[object Function]" == (className = getClass.call(filter))) callback = filter;
                            else if ("[object Array]" == className) {
                            properties = {};
                            for (var value, index = 0, length = filter.length; index < length; value = filter[index++], ("[object String]" == (className = getClass.call(value)) || "[object Number]" == className) && (properties[value] = 1));
                        }
                        if (width)
                            if ("[object Number]" == (className = getClass.call(width))) {
                                if ((width -= width % 1) > 0)
                                    for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
                            } else "[object String]" == className && (whitespace = width.length <= 10 ? width : width.slice(0, 10));
                        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", [])
                    }
                }
                if (!has("json-parse")) {
                    var Index, Source, fromCharCode = String.fromCharCode,
                        Unescapes = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        abort = function() {
                            throw Index = Source = null, SyntaxError()
                        },
                        lex = function() {
                            for (var value, begin, position, isSigned, charCode, source = Source, length = source.length; Index < length;) switch (charCode = source.charCodeAt(Index)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    Index++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return value = charIndexBuggy ? source.charAt(Index) : source[Index], Index++, value;
                                case 34:
                                    for (value = "@", Index++; Index < length;)
                                        if ((charCode = source.charCodeAt(Index)) < 32) abort();
                                        else if (92 == charCode) switch (charCode = source.charCodeAt(++Index)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            value += Unescapes[charCode], Index++;
                                            break;
                                        case 117:
                                            for (begin = ++Index, position = Index + 4; Index < position; Index++)(charCode = source.charCodeAt(Index)) >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70 || abort();
                                            value += fromCharCode("0x" + source.slice(begin, Index));
                                            break;
                                        default:
                                            abort()
                                    } else {
                                        if (34 == charCode) break;
                                        for (charCode = source.charCodeAt(Index), begin = Index; charCode >= 32 && 92 != charCode && 34 != charCode;) charCode = source.charCodeAt(++Index);
                                        value += source.slice(begin, Index)
                                    }
                                    if (34 == source.charCodeAt(Index)) return Index++, value;
                                    abort();
                                default:
                                    if (begin = Index, 45 == charCode && (isSigned = !0, charCode = source.charCodeAt(++Index)), charCode >= 48 && charCode <= 57) {
                                        for (48 == charCode && (charCode = source.charCodeAt(Index + 1)) >= 48 && charCode <= 57 && abort(), isSigned = !1; Index < length && (charCode = source.charCodeAt(Index)) >= 48 && charCode <= 57; Index++);
                                        if (46 == source.charCodeAt(Index)) {
                                            for (position = ++Index; position < length && (charCode = source.charCodeAt(position)) >= 48 && charCode <= 57; position++);
                                            position == Index && abort(), Index = position
                                        }
                                        if (101 == (charCode = source.charCodeAt(Index)) || 69 == charCode) {
                                            for (43 != (charCode = source.charCodeAt(++Index)) && 45 != charCode || Index++, position = Index; position < length && (charCode = source.charCodeAt(position)) >= 48 && charCode <= 57; position++);
                                            position == Index && abort(), Index = position
                                        }
                                        return +source.slice(begin, Index)
                                    }
                                    if (isSigned && abort(), "true" == source.slice(Index, Index + 4)) return Index += 4, !0;
                                    if ("false" == source.slice(Index, Index + 5)) return Index += 5, !1;
                                    if ("null" == source.slice(Index, Index + 4)) return Index += 4, null;
                                    abort()
                            }
                            return "$"
                        },
                        get = function(value) {
                            var results, hasMembers;
                            if ("$" == value && abort(), "string" == typeof value) {
                                if ("@" == (charIndexBuggy ? value.charAt(0) : value[0])) return value.slice(1);
                                if ("[" == value) {
                                    for (results = [];
                                        "]" != (value = lex()); hasMembers || (hasMembers = !0)) hasMembers && ("," == value ? "]" == (value = lex()) && abort() : abort()), "," == value && abort(), results.push(get(value));
                                    return results
                                }
                                if ("{" == value) {
                                    for (results = {};
                                        "}" != (value = lex()); hasMembers || (hasMembers = !0)) hasMembers && ("," == value ? "}" == (value = lex()) && abort() : abort()), "," != value && "string" == typeof value && "@" == (charIndexBuggy ? value.charAt(0) : value[0]) && ":" == lex() || abort(), results[value.slice(1)] = get(lex());
                                    return results
                                }
                                abort()
                            }
                            return value
                        },
                        update = function(source, property, callback) {
                            var element = walk(source, property, callback);
                            element === undef ? delete source[property] : source[property] = element
                        },
                        walk = function(source, property, callback) {
                            var length, value = source[property];
                            if ("object" == typeof value && value)
                                if ("[object Array]" == getClass.call(value))
                                    for (length = value.length; length--;) update(value, length, callback);
                                else forEach(value, function(property) {
                                    update(value, property, callback)
                                });
                            return callback.call(source, property, value)
                        };
                    exports.parse = function(source, callback) {
                        var result, value;
                        return Index = 0, Source = "" + source, result = get(lex()), "$" != lex() && abort(), Index = Source = null, callback && "[object Function]" == getClass.call(callback) ? walk((value = {}, value[""] = result, value), "", callback) : result
                    }
                }
            }
            return exports.runInContext = runInContext, exports
        }
        var isLoader = "function" == typeof define && define.amd,
            objectTypes = {
                function: !0,
                object: !0
            },
            freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
            root = objectTypes[typeof window] && window || this,
            freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        if (!freeGlobal || freeGlobal.global !== freeGlobal && freeGlobal.window !== freeGlobal && freeGlobal.self !== freeGlobal || (root = freeGlobal), freeExports && !isLoader) runInContext(root, freeExports);
        else {
            var nativeJSON = root.JSON,
                previousJSON = root.JSON3,
                isRestored = !1,
                JSON3 = runInContext(root, root.JSON3 = {
                    noConflict: function() {
                        return isRestored || (isRestored = !0, root.JSON = nativeJSON, root.JSON3 = previousJSON, nativeJSON = previousJSON = null), JSON3
                    }
                });
            root.JSON = {
                parse: JSON3.parse,
                stringify: JSON3.stringify
            }
        }
        isLoader && define(function() {
            return JSON3
        })
    }.call(this),
    function() {
        var s = {};
        s.appendToHead = function(el) {
            s.getHead().appendChild(el)
        }, s.getHead = function() {
            return document.head || document.getElementsByTagName("head")[0]
        }, s.getBody = function() {
            return document.body || document.getElementsByTagName("body")[0]
        }, createjs.DomUtils = s
    }(),
    function() {
        var s = {};
        s.parseXML = function(text, type) {
            var xml = null;
            try {
                if (window.DOMParser) {
                    var parser = new DOMParser;
                    xml = parser.parseFromString(text, type)
                }
            } catch (e) {}
            if (!xml) try {
                (xml = new ActiveXObject("Microsoft.XMLDOM")).async = !1, xml.loadXML(text)
            } catch (e) {
                xml = null
            }
            return xml
        }, s.parseJSON = function(value) {
            if (null == value) return null;
            try {
                return JSON.parse(value)
            } catch (e) {
                throw e
            }
        }, createjs.DataUtils = s
    }(),
    function() {
        "use strict";

        function LoadItem() {
            this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = s.LOAD_TIMEOUT_DEFAULT
        }
        var p = LoadItem.prototype = {},
            s = LoadItem;
        s.LOAD_TIMEOUT_DEFAULT = 8e3, s.create = function(value) {
            if ("string" == typeof value) {
                var item = new LoadItem;
                return item.src = value, item
            }
            if (value instanceof s) return value;
            if (value instanceof Object && value.src) return null == value.loadTimeout && (value.loadTimeout = s.LOAD_TIMEOUT_DEFAULT), value;
            throw new Error("Type not recognized.")
        }, p.set = function(props) {
            for (var n in props) this[n] = props[n];
            return this
        }, createjs.LoadItem = s
    }(),
    function() {
        var s = {};
        s.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, s.RELATIVE_PATT = /^[./]*?\//i, s.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i, s.parseURI = function(path) {
            var info = {
                absolute: !1,
                relative: !1
            };
            if (null == path) return info;
            var queryIndex = path.indexOf("?");
            queryIndex > -1 && (path = path.substr(0, queryIndex));
            var match;
            return s.ABSOLUTE_PATT.test(path) ? info.absolute = !0 : s.RELATIVE_PATT.test(path) && (info.relative = !0), (match = path.match(s.EXTENSION_PATT)) && (info.extension = match[1].toLowerCase()), info
        }, s.formatQueryString = function(data, query) {
            if (null == data) throw new Error("You must specify data.");
            var params = [];
            for (var n in data) params.push(n + "=" + escape(data[n]));
            return query && (params = params.concat(query)), params.join("&")
        }, s.buildPath = function(src, data) {
            if (null == data) return src;
            var query = [],
                idx = src.indexOf("?");
            if (-1 != idx) {
                var q = src.slice(idx + 1);
                query = query.concat(q.split("&"))
            }
            return -1 != idx ? src.slice(0, idx) + "?" + this.formatQueryString(data, query) : src + "?" + this.formatQueryString(data, query)
        }, s.isCrossDomain = function(item) {
            var target = document.createElement("a");
            target.href = item.src;
            var host = document.createElement("a");
            host.href = location.href;
            return "" != target.hostname && (target.port != host.port || target.protocol != host.protocol || target.hostname != host.hostname)
        }, s.isLocal = function(item) {
            var target = document.createElement("a");
            return target.href = item.src, "" == target.hostname && "file:" == target.protocol
        }, s.isBinary = function(type) {
            switch (type) {
                case createjs.AbstractLoader.IMAGE:
                case createjs.AbstractLoader.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, s.isImageTag = function(item) {
            return item instanceof HTMLImageElement
        }, s.isAudioTag = function(item) {
            return !!window.HTMLAudioElement && item instanceof HTMLAudioElement
        }, s.isVideoTag = function(item) {
            return !!window.HTMLVideoElement && item instanceof HTMLVideoElement
        }, s.isText = function(type) {
            switch (type) {
                case createjs.AbstractLoader.TEXT:
                case createjs.AbstractLoader.JSON:
                case createjs.AbstractLoader.MANIFEST:
                case createjs.AbstractLoader.XML:
                case createjs.AbstractLoader.CSS:
                case createjs.AbstractLoader.SVG:
                case createjs.AbstractLoader.JAVASCRIPT:
                case createjs.AbstractLoader.SPRITESHEET:
                    return !0;
                default:
                    return !1
            }
        }, s.getTypeByExtension = function(extension) {
            if (null == extension) return createjs.AbstractLoader.TEXT;
            switch (extension.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.AbstractLoader.IMAGE;
                case "ogg":
                case "mp3":
                case "webm":
                    return createjs.AbstractLoader.SOUND;
                case "mp4":
                case "webm":
                case "ts":
                    return createjs.AbstractLoader.VIDEO;
                case "json":
                    return createjs.AbstractLoader.JSON;
                case "xml":
                    return createjs.AbstractLoader.XML;
                case "css":
                    return createjs.AbstractLoader.CSS;
                case "js":
                    return createjs.AbstractLoader.JAVASCRIPT;
                case "svg":
                    return createjs.AbstractLoader.SVG;
                default:
                    return createjs.AbstractLoader.TEXT
            }
        }, createjs.RequestUtils = s
    }(),
    function() {
        "use strict";

        function AbstractLoader(loadItem, preferXHR, type) {
            this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = type, this.resultFormatter = null, this._item = loadItem ? createjs.LoadItem.create(loadItem) : null, this._preferXHR = preferXHR, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
        }
        var p = createjs.extend(AbstractLoader, createjs.EventDispatcher),
            s = AbstractLoader;
        s.POST = "POST", s.GET = "GET", s.BINARY = "binary", s.CSS = "css", s.IMAGE = "image", s.JAVASCRIPT = "javascript", s.JSON = "json", s.JSONP = "jsonp", s.MANIFEST = "manifest", s.SOUND = "sound", s.VIDEO = "video", s.SPRITESHEET = "spritesheet", s.SVG = "svg", s.TEXT = "text", s.XML = "xml", p.getItem = function() {
            return this._item
        }, p.getResult = function(raw) {
            return raw ? this._rawResult : this._result
        }, p.getTag = function() {
            return this._tag
        }, p.setTag = function(tag) {
            this._tag = tag
        }, p.load = function() {
            this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
            var evt = new createjs.Event("initialize");
            evt.loader = this._request, this.dispatchEvent(evt), this._request.load()
        }, p.cancel = function() {
            this.canceled = !0, this.destroy()
        }, p.destroy = function() {
            this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
        }, p.getLoadedItems = function() {
            return this._loadedItems
        }, p._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, p._createTag = function(src) {
            return null
        }, p._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, p._sendProgress = function(value) {
            if (!this._isCanceled()) {
                var event = null;
                "number" == typeof value ? (this.progress = value, event = new createjs.ProgressEvent(this.progress)) : (event = value, this.progress = value.loaded / value.total, event.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(event)
            }
        }, p._sendComplete = function() {
            if (!this._isCanceled()) {
                this.loaded = !0;
                var event = new createjs.Event("complete");
                event.rawResult = this._rawResult, null != this._result && (event.result = this._result), this.dispatchEvent(event)
            }
        }, p._sendError = function(event) {
            !this._isCanceled() && this.hasEventListener("error") && (null == event && (event = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(event))
        }, p._isCanceled = function() {
            return !(null != window.createjs && !this.canceled)
        }, p.resultFormatter = null, p.handleEvent = function(event) {
            switch (event.type) {
                case "complete":
                    this._rawResult = event.target._response;
                    var result = this.resultFormatter && this.resultFormatter(this);
                    result instanceof Function ? result.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = result || this._rawResult, this._sendComplete());
                    break;
                case "progress":
                    this._sendProgress(event);
                    break;
                case "error":
                    this._sendError(event);
                    break;
                case "loadstart":
                    this._sendLoadStart();
                    break;
                case "abort":
                case "timeout":
                    this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + event.type.toUpperCase() + "_ERROR"))
            }
        }, p._resultFormatSuccess = function(result) {
            this._result = result, this._sendComplete()
        }, p._resultFormatFailed = function(event) {
            this._sendError(event)
        }, p.buildPath = function(src, data) {
            return createjs.RequestUtils.buildPath(src, data)
        }, p.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function AbstractMediaLoader(loadItem, preferXHR, type) {
            this.AbstractLoader_constructor(loadItem, preferXHR, type), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this)
        }
        var p = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);
        p.load = function() {
            this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
        }, p._createTag = function() {}, p._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, p._updateXHR = function(event) {
            event.loader.setResponseType && event.loader.setResponseType("blob")
        }, p._formatResult = function(loader) {
            if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
                var URL = window.URL || window.webkitURL,
                    result = loader.getResult(!0);
                loader.getTag().src = URL.createObjectURL(result)
            }
            return loader.getTag()
        }, createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";
        var AbstractRequest = function(item) {
                this._item = item
            },
            p = createjs.extend(AbstractRequest, createjs.EventDispatcher);
        p.load = function() {}, p.destroy = function() {}, p.cancel = function() {}, createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function TagRequest(loadItem, tag, srcAttribute) {
            this.AbstractRequest_constructor(loadItem), this._tag = tag, this._tagSrcAttribute = srcAttribute, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
        }
        var p = createjs.extend(TagRequest, createjs.AbstractRequest);
        p.load = function() {
            this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
            var evt = new createjs.Event("initialize");
            evt.loader = this._tag, this.dispatchEvent(evt), this._hideTag(), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0)
        }, p.destroy = function() {
            this._clean(), this._tag = null, this.AbstractRequest_destroy()
        }, p._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var tag = this._tag;
            "loaded" != tag.readyState && "complete" != tag.readyState || this._handleTagComplete()
        }, p._handleError = function() {
            this._clean(), this.dispatchEvent("error")
        }, p._handleTagComplete = function() {
            this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
        }, p._handleTimeout = function() {
            this._clean(), this.dispatchEvent(new createjs.Event("timeout"))
        }, p._clean = function() {
            this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout)
        }, p._hideTag = function() {
            this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
        }, p._showTag = function() {
            this._tag.style.visibility = this._startTagVisibility
        }, p._handleStalled = function() {}, createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest")
    }(),
    function() {
        "use strict";

        function MediaTagRequest(loadItem, tag, srcAttribute) {
            this.AbstractRequest_constructor(loadItem), this._tag = tag, this._tagSrcAttribute = srcAttribute, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
        }
        var p = createjs.extend(MediaTagRequest, createjs.TagRequest);
        p.load = function() {
            var sc = createjs.proxy(this._handleStalled, this);
            this._stalledCallback = sc;
            var pc = createjs.proxy(this._handleProgress, this);
            this._handleProgress = pc, this._tag.addEventListener("stalled", sc), this._tag.addEventListener("progress", pc), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
        }, p._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var tag = this._tag;
            "loaded" != tag.readyState && "complete" != tag.readyState || this._handleTagComplete()
        }, p._handleStalled = function() {}, p._handleProgress = function(event) {
            if (event && !(event.loaded > 0 && 0 == event.total)) {
                var newEvent = new createjs.ProgressEvent(event.loaded, event.total);
                this.dispatchEvent(newEvent)
            }
        }, p._clean = function() {
            this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean()
        }, createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest")
    }(),
    function() {
        "use strict";

        function XHRRequest(item) {
            this.AbstractRequest_constructor(item), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), this._createXHR(item)
        }
        var p = createjs.extend(XHRRequest, createjs.AbstractRequest);
        XHRRequest.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], p.getResult = function(raw) {
            return raw && this._rawResponse ? this._rawResponse : this._response
        }, p.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, p.load = function() {
            if (null != this._request) {
                null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
                try {
                    this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
                } catch (error) {
                    this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, error))
                }
            } else this._handleError()
        }, p.setResponseType = function(type) {
            "blob" === type && (type = window.URL ? "blob" : "arraybuffer", this._responseType = type), this._request.responseType = type
        }, p.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, p.getResponseHeader = function(header) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(header) : null
        }, p._handleProgress = function(event) {
            if (event && !(event.loaded > 0 && 0 == event.total)) {
                var newEvent = new createjs.ProgressEvent(event.loaded, event.total);
                this.dispatchEvent(newEvent)
            }
        }, p._handleLoadStart = function(event) {
            clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
        }, p._handleAbort = function(event) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, event))
        }, p._handleError = function(event) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent(event.message))
        }, p._handleReadyStateChange = function(event) {
            4 == this._request.readyState && this._handleLoad()
        }, p._handleLoad = function(event) {
            if (!this.loaded) {
                this.loaded = !0;
                var error = this._checkError();
                if (error) this._handleError(error);
                else {
                    if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
                        this._response = new Blob([this._response])
                    } catch (e) {
                        if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === e.name && window.BlobBuilder) {
                            var builder = new BlobBuilder;
                            builder.append(this._response), this._response = builder.getBlob()
                        }
                    }
                    this._clean(), this.dispatchEvent(new createjs.Event("complete"))
                }
            }
        }, p._handleTimeout = function(event) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, event))
        }, p._checkError = function() {
            var status = parseInt(this._request.status);
            switch (status) {
                case 404:
                case 0:
                    return new Error(status)
            }
            return null
        }, p._getResponse = function() {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (e) {}
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (e) {}
            return null
        }, p._createXHR = function(item) {
            var crossdomain = createjs.RequestUtils.isCrossDomain(item),
                headers = {},
                req = null;
            if (window.XMLHttpRequest) req = new XMLHttpRequest, crossdomain && void 0 === req.withCredentials && window.XDomainRequest && (req = new XDomainRequest);
            else {
                for (var i = 0, l = s.ACTIVEX_VERSIONS.length; i < l; i++) {
                    var axVersion = s.ACTIVEX_VERSIONS[i];
                    try {
                        req = new ActiveXObject(axVersion);
                        break
                    } catch (e) {}
                }
                if (null == req) return !1
            }
            null == item.mimeType && createjs.RequestUtils.isText(item.type) && (item.mimeType = "text/plain; charset=utf-8"), item.mimeType && req.overrideMimeType && req.overrideMimeType(item.mimeType), this._xhrLevel = "string" == typeof req.responseType ? 2 : 1;
            var src = null;
            if (src = item.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(item.src, item.values) : item.src, req.open(item.method || createjs.AbstractLoader.GET, src, !0), crossdomain && req instanceof XMLHttpRequest && 1 == this._xhrLevel && (headers.Origin = location.origin), item.values && item.method == createjs.AbstractLoader.POST && (headers["Content-Type"] = "application/x-www-form-urlencoded"), crossdomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), item.headers)
                for (var n in item.headers) headers[n] = item.headers[n];
            for (n in headers) req.setRequestHeader(n, headers[n]);
            return req instanceof XMLHttpRequest && void 0 !== item.withCredentials && (req.withCredentials = item.withCredentials), this._request = req, !0
        }, p._clean = function() {
            clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
        }, p.toString = function() {
            return "[PreloadJS XHRRequest]"
        }, createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest")
    }(),
    function() {
        "use strict";

        function LoadQueue(preferXHR, basePath, crossOrigin) {
            this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(preferXHR, basePath, crossOrigin)
        }
        var p = createjs.extend(LoadQueue, createjs.AbstractLoader),
            s = LoadQueue;
        p.init = function(preferXHR, basePath, crossOrigin) {
            this.useXHR = !0, this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(preferXHR), this._paused = !1, this._basePath = basePath, this._crossOrigin = crossOrigin, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN
        }, s.loadTimeout = 8e3, s.LOAD_TIMEOUT = 0, s.BINARY = createjs.AbstractLoader.BINARY, s.CSS = createjs.AbstractLoader.CSS, s.IMAGE = createjs.AbstractLoader.IMAGE, s.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT, s.JSON = createjs.AbstractLoader.JSON, s.JSONP = createjs.AbstractLoader.JSONP, s.MANIFEST = createjs.AbstractLoader.MANIFEST, s.SOUND = createjs.AbstractLoader.SOUND, s.VIDEO = createjs.AbstractLoader.VIDEO, s.SVG = createjs.AbstractLoader.SVG, s.TEXT = createjs.AbstractLoader.TEXT, s.XML = createjs.AbstractLoader.XML, s.POST = createjs.AbstractLoader.POST, s.GET = createjs.AbstractLoader.GET, p.registerLoader = function(loader) {
            if (!loader || !loader.canLoadItem) throw new Error("loader is of an incorrect type.");
            if (-1 != this._availableLoaders.indexOf(loader)) throw new Error("loader already exists.");
            this._availableLoaders.unshift(loader)
        }, p.unregisterLoader = function(loader) {
            var idx = this._availableLoaders.indexOf(loader); - 1 != idx && idx < this._defaultLoaderLength - 1 && this._availableLoaders.splice(idx, 1)
        }, p.setUseXHR = function(value) {
            return this.setPreferXHR(value)
        }, p.setPreferXHR = function(value) {
            return this.preferXHR = 0 != value && null != window.XMLHttpRequest, this.preferXHR
        }, p.removeAll = function() {
            this.remove()
        }, p.remove = function(idsOrUrls) {
            var args = null;
            if (idsOrUrls && !Array.isArray(idsOrUrls)) args = [idsOrUrls];
            else if (idsOrUrls) args = idsOrUrls;
            else if (arguments.length > 0) return;
            var itemsWereRemoved = !1;
            if (args) {
                for (; args.length;) {
                    var item = args.pop(),
                        r = this.getResult(item);
                    for (i = this._loadQueue.length - 1; i >= 0; i--)
                        if ((loadItem = this._loadQueue[i].getItem()).id == item || loadItem.src == item) {
                            this._loadQueue.splice(i, 1)[0].cancel();
                            break
                        }
                    for (i = this._loadQueueBackup.length - 1; i >= 0; i--)
                        if ((loadItem = this._loadQueueBackup[i].getItem()).id == item || loadItem.src == item) {
                            this._loadQueueBackup.splice(i, 1)[0].cancel();
                            break
                        }
                    if (r) this._disposeItem(this.getItem(item));
                    else
                        for (var i = this._currentLoads.length - 1; i >= 0; i--) {
                            var loadItem = this._currentLoads[i].getItem();
                            if (loadItem.id == item || loadItem.src == item) {
                                this._currentLoads.splice(i, 1)[0].cancel(), itemsWereRemoved = !0;
                                break
                            }
                        }
                }
                itemsWereRemoved && this._loadNext()
            } else {
                this.close();
                for (var n in this._loadItemsById) this._disposeItem(this._loadItemsById[n]);
                this.init(this.preferXHR, this._basePath)
            }
        }, p.reset = function() {
            this.close();
            for (var n in this._loadItemsById) this._disposeItem(this._loadItemsById[n]);
            for (var a = [], i = 0, l = this._loadQueueBackup.length; i < l; i++) a.push(this._loadQueueBackup[i].getItem());
            this.loadManifest(a, !1)
        }, p.installPlugin = function(plugin) {
            if (null != plugin && null != plugin.getPreloadHandlers) {
                this._plugins.push(plugin);
                var map = plugin.getPreloadHandlers();
                if (map.scope = plugin, null != map.types)
                    for (var i = 0, l = map.types.length; i < l; i++) this._typeCallbacks[map.types[i]] = map;
                if (null != map.extensions)
                    for (i = 0, l = map.extensions.length; i < l; i++) this._extensionCallbacks[map.extensions[i]] = map
            }
        }, p.setMaxConnections = function(value) {
            this._maxConnections = value, !this._paused && this._loadQueue.length > 0 && this._loadNext()
        }, p.loadFile = function(file, loadNow, basePath) {
            if (null != file) this._addItem(file, null, basePath), !1 !== loadNow ? this.setPaused(!1) : this.setPaused(!0);
            else {
                var event = new createjs.ErrorEvent("PRELOAD_NO_FILE");
                this._sendError(event)
            }
        }, p.loadManifest = function(manifest, loadNow, basePath) {
            var fileList = null,
                path = null;
            if (Array.isArray(manifest)) {
                if (0 == manifest.length) {
                    var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                    return void this._sendError(event)
                }
                fileList = manifest
            } else if ("string" == typeof manifest) fileList = [{
                src: manifest,
                type: s.MANIFEST
            }];
            else {
                if ("object" != typeof manifest) {
                    event = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                    return void this._sendError(event)
                }
                if (void 0 !== manifest.src) {
                    if (null == manifest.type) manifest.type = s.MANIFEST;
                    else if (manifest.type != s.MANIFEST) {
                        var event = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                        this._sendError(event)
                    }
                    fileList = [manifest]
                } else void 0 !== manifest.manifest && (fileList = manifest.manifest, path = manifest.path)
            }
            for (var i = 0, l = fileList.length; i < l; i++) this._addItem(fileList[i], path, basePath);
            !1 !== loadNow ? this.setPaused(!1) : this.setPaused(!0)
        }, p.load = function() {
            this.setPaused(!1)
        }, p.getItem = function(value) {
            return this._loadItemsById[value] || this._loadItemsBySrc[value]
        }, p.getResult = function(value, rawResult) {
            var item = this._loadItemsById[value] || this._loadItemsBySrc[value];
            if (null == item) return null;
            var id = item.id;
            return rawResult && this._loadedRawResults[id] ? this._loadedRawResults[id] : this._loadedResults[id]
        }, p.getItems = function(loaded) {
            var arr = [];
            for (var n in this._loadItemsById) {
                var item = this._loadItemsById[n],
                    result = this.getResult(n);
                !0 === loaded && null == result || arr.push({
                    item: item,
                    result: result,
                    rawResult: this.getResult(n, !0)
                })
            }
            return arr
        }, p.setPaused = function(value) {
            this._paused = value, this._paused || this._loadNext()
        }, p.close = function() {
            for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
            this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
        }, p._addItem = function(value, path, basePath) {
            var item = this._createLoadItem(value, path, basePath);
            if (null != item) {
                var loader = this._createLoader(item);
                null != loader && ("plugins" in loader && (loader.plugins = this._plugins), item._loader = loader, this._loadQueue.push(loader), this._loadQueueBackup.push(loader), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT || !0 === item.maintainOrder) && (this._scriptOrder.push(item), this._loadedScripts.push(null)))
            }
        }, p._createLoadItem = function(value, path, basePath) {
            var item = createjs.LoadItem.create(value);
            if (null == item) return null;
            var bp = "",
                useBasePath = basePath || this._basePath;
            if (item.src instanceof Object) {
                if (!item.type) return null;
                if (path) {
                    bp = path;
                    var pathMatch = createjs.RequestUtils.parseURI(path);
                    null == useBasePath || pathMatch.absolute || pathMatch.relative || (bp = useBasePath + bp)
                } else null != useBasePath && (bp = useBasePath)
            } else {
                var match = createjs.RequestUtils.parseURI(item.src);
                match.extension && (item.ext = match.extension), null == item.type && (item.type = createjs.RequestUtils.getTypeByExtension(item.ext));
                var autoId = item.src;
                if (!match.absolute && !match.relative)
                    if (path) {
                        bp = path;
                        pathMatch = createjs.RequestUtils.parseURI(path);
                        autoId = path + autoId, null == useBasePath || pathMatch.absolute || pathMatch.relative || (bp = useBasePath + bp)
                    } else null != useBasePath && (bp = useBasePath);
                item.src = bp + item.src
            }
            item.path = bp, void 0 !== item.id && null !== item.id && "" !== item.id || (item.id = autoId);
            var customHandler = this._typeCallbacks[item.type] || this._extensionCallbacks[item.ext];
            if (customHandler) {
                var result = customHandler.callback.call(customHandler.scope, item, this);
                if (!1 === result) return null;
                !0 === result || null != result && (item._loader = result), null != (match = createjs.RequestUtils.parseURI(item.src)).extension && (item.ext = match.extension)
            }
            return this._loadItemsById[item.id] = item, this._loadItemsBySrc[item.src] = item, null == item.crossOrigin && (item.crossOrigin = this._crossOrigin), item
        }, p._createLoader = function(item) {
            if (null != item._loader) return item._loader;
            for (var preferXHR = this.preferXHR, i = 0; i < this._availableLoaders.length; i++) {
                var loader = this._availableLoaders[i];
                if (loader && loader.canLoadItem(item)) return new loader(item, preferXHR)
            }
            return null
        }, p._loadNext = function() {
            if (!this._paused) {
                this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
                for (var i = 0; i < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); i++) {
                    var loader = this._loadQueue[i];
                    this._canStartLoad(loader) && (this._loadQueue.splice(i, 1), i--, this._loadItem(loader))
                }
            }
        }, p._loadItem = function(loader) {
            loader.on("fileload", this._handleFileLoad, this), loader.on("progress", this._handleProgress, this), loader.on("complete", this._handleFileComplete, this), loader.on("error", this._handleError, this), loader.on("fileerror", this._handleFileError, this), this._currentLoads.push(loader), this._sendFileStart(loader.getItem()), loader.load()
        }, p._handleFileLoad = function(event) {
            event.target = null, this.dispatchEvent(event)
        }, p._handleFileError = function(event) {
            var newEvent = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, event.item);
            this._sendError(newEvent)
        }, p._handleError = function(event) {
            var loader = event.target;
            this._numItemsLoaded++, this._finishOrderedItem(loader, !0), this._updateProgress();
            var newEvent = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, loader.getItem());
            this._sendError(newEvent), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(loader), this._cleanLoadItem(loader), this._loadNext())
        }, p._handleFileComplete = function(event) {
            var loader = event.target,
                item = loader.getItem(),
                result = loader.getResult();
            this._loadedResults[item.id] = result;
            var rawResult = loader.getResult(!0);
            null != rawResult && rawResult !== result && (this._loadedRawResults[item.id] = rawResult), this._saveLoadedItems(loader), this._removeLoadItem(loader), this._finishOrderedItem(loader) || this._processFinishedLoad(item, loader), this._cleanLoadItem(loader)
        }, p._saveLoadedItems = function(loader) {
            var list = loader.getLoadedItems();
            if (null !== list)
                for (var i = 0; i < list.length; i++) {
                    var item = list[i].item;
                    this._loadItemsBySrc[item.src] = item, this._loadItemsById[item.id] = item, this._loadedResults[item.id] = list[i].result, this._loadedRawResults[item.id] = list[i].rawResult
                }
        }, p._finishOrderedItem = function(loader, loadFailed) {
            var item = loader.getItem();
            if (this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT || item.maintainOrder) {
                loader instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
                var index = createjs.indexOf(this._scriptOrder, item);
                return -1 != index && (this._loadedScripts[index] = !0 === loadFailed || item, this._checkScriptLoadOrder(), !0)
            }
            return !1
        }, p._checkScriptLoadOrder = function() {
            for (var l = this._loadedScripts.length, i = 0; i < l; i++) {
                var item = this._loadedScripts[i];
                if (null === item) break;
                if (!0 !== item) {
                    var loadItem = this._loadedResults[item.id];
                    item.type == createjs.LoadQueue.JAVASCRIPT && createjs.DomUtils.appendToHead(loadItem);
                    var loader = item._loader;
                    this._processFinishedLoad(item, loader), this._loadedScripts[i] = !0
                }
            }
        }, p._processFinishedLoad = function(item, loader) {
            if (this._numItemsLoaded++, !this.maintainScriptOrder && item.type == createjs.LoadQueue.JAVASCRIPT) {
                var tag = loader.getTag();
                createjs.DomUtils.appendToHead(tag)
            }
            this._updateProgress(), this._sendFileComplete(item, loader), this._loadNext()
        }, p._canStartLoad = function(loader) {
            if (!this.maintainScriptOrder || loader.preferXHR) return !0;
            var item = loader.getItem();
            if (item.type != createjs.LoadQueue.JAVASCRIPT) return !0;
            if (this._currentlyLoadingScript) return !1;
            for (var index = this._scriptOrder.indexOf(item), i = 0; i < index;) {
                if (null == this._loadedScripts[i]) return !1;
                i++
            }
            return this._currentlyLoadingScript = !0, !0
        }, p._removeLoadItem = function(loader) {
            for (var l = this._currentLoads.length, i = 0; i < l; i++)
                if (this._currentLoads[i] == loader) {
                    this._currentLoads.splice(i, 1);
                    break
                }
        }, p._cleanLoadItem = function(loader) {
            var item = loader.getItem();
            item && delete item._loader
        }, p._handleProgress = function(event) {
            var loader = event.target;
            this._sendFileProgress(loader.getItem(), loader.progress), this._updateProgress()
        }, p._updateProgress = function() {
            var loaded = this._numItemsLoaded / this._numItems,
                remaining = this._numItems - this._numItemsLoaded;
            if (remaining > 0) {
                for (var chunk = 0, i = 0, l = this._currentLoads.length; i < l; i++) chunk += this._currentLoads[i].progress;
                loaded += chunk / remaining * (remaining / this._numItems)
            }
            this._lastProgress != loaded && (this._sendProgress(loaded), this._lastProgress = loaded)
        }, p._disposeItem = function(item) {
            delete this._loadedResults[item.id], delete this._loadedRawResults[item.id], delete this._loadItemsById[item.id], delete this._loadItemsBySrc[item.src]
        }, p._sendFileProgress = function(item, progress) {
            if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
                var event = new createjs.Event("fileprogress");
                event.progress = progress, event.loaded = progress, event.total = 1, event.item = item, this.dispatchEvent(event)
            }
        }, p._sendFileComplete = function(item, loader) {
            if (!this._isCanceled() && !this._paused) {
                var event = new createjs.Event("fileload");
                event.loader = loader, event.item = item, event.result = this._loadedResults[item.id], event.rawResult = this._loadedRawResults[item.id], item.completeHandler && item.completeHandler(event), this.hasEventListener("fileload") && this.dispatchEvent(event)
            }
        }, p._sendFileStart = function(item) {
            var event = new createjs.Event("filestart");
            event.item = item, this.hasEventListener("filestart") && this.dispatchEvent(event)
        }, p.toString = function() {
            return "[PreloadJS LoadQueue]"
        }, createjs.LoadQueue = createjs.promote(LoadQueue, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function TextLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.TEXT)
        }
        createjs.extend(TextLoader, createjs.AbstractLoader);
        TextLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.TEXT
        }, createjs.TextLoader = createjs.promote(TextLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function BinaryLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.BINARY), this.on("initialize", this._updateXHR, this)
        }
        var p = createjs.extend(BinaryLoader, createjs.AbstractLoader);
        BinaryLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.BINARY
        }, p._updateXHR = function(event) {
            event.loader.setResponseType("arraybuffer")
        }, createjs.BinaryLoader = createjs.promote(BinaryLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function CSSLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", this._tag = preferXHR ? document.createElement("style") : document.createElement("link"), this._tag.rel = "stylesheet", this._tag.type = "text/css"
        }
        var p = createjs.extend(CSSLoader, createjs.AbstractLoader);
        CSSLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.CSS
        }, p._formatResult = function(loader) {
            if (this._preferXHR) {
                var tag = loader.getTag();
                if (tag.styleSheet) tag.styleSheet.cssText = loader.getResult(!0);
                else {
                    var textNode = document.createTextNode(loader.getResult(!0));
                    tag.appendChild(textNode)
                }
            } else tag = this._tag;
            return createjs.DomUtils.appendToHead(tag), tag
        }, createjs.CSSLoader = createjs.promote(CSSLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function ImageLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.RequestUtils.isImageTag(loadItem) ? this._tag = loadItem : createjs.RequestUtils.isImageTag(loadItem.src) ? this._tag = loadItem.src : createjs.RequestUtils.isImageTag(loadItem.tag) && (this._tag = loadItem.tag), null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"), this.on("initialize", this._updateXHR, this)
        }
        var p = createjs.extend(ImageLoader, createjs.AbstractLoader);
        ImageLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.IMAGE
        }, p.load = function() {
            if ("" != this._tag.src && this._tag.complete) this._sendComplete();
            else {
                var crossOrigin = this._item.crossOrigin;
                1 == crossOrigin && (crossOrigin = "Anonymous"), null == crossOrigin || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = crossOrigin), this.AbstractLoader_load()
            }
        }, p._updateXHR = function(event) {
            event.loader.mimeType = "text/plain; charset=x-user-defined-binary", event.loader.setResponseType && event.loader.setResponseType("blob")
        }, p._formatResult = function(loader) {
            return this._formatImage
        }, p._formatImage = function(successCallback, errorCallback) {
            var tag = this._tag,
                URL = window.URL || window.webkitURL;
            if (this._preferXHR)
                if (URL) {
                    var objURL = URL.createObjectURL(this.getResult(!0));
                    tag.src = objURL
                } else tag.src = this._item.src;
            else;
            tag.complete ? successCallback(tag) : (tag.onload = createjs.proxy(function() {
                successCallback(this._tag)
            }, this), tag.onerror = createjs.proxy(function() {
                errorCallback(this._tag)
            }, this))
        }, p._cleanUpURL = function(event) {
            (window.URL || window.webkitURL).revokeObjectURL(event.target.src)
        }, createjs.ImageLoader = createjs.promote(ImageLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function JavaScriptLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(document.createElement("script"))
        }
        var p = createjs.extend(JavaScriptLoader, createjs.AbstractLoader);
        JavaScriptLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.JAVASCRIPT
        }, p._formatResult = function(loader) {
            var tag = loader.getTag();
            return this._preferXHR && (tag.text = loader.getResult(!0)), tag
        }, createjs.JavaScriptLoader = createjs.promote(JavaScriptLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function JSONLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.JSON), this.resultFormatter = this._formatResult
        }
        var p = createjs.extend(JSONLoader, createjs.AbstractLoader);
        JSONLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.JSON
        }, p._formatResult = function(loader) {
            var json = null;
            try {
                json = createjs.DataUtils.parseJSON(loader.getResult(!0))
            } catch (e) {
                var event = new createjs.ErrorEvent("JSON_FORMAT", null, e);
                return this._sendError(event), e
            }
            return json
        }, createjs.JSONLoader = createjs.promote(JSONLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function JSONPLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !1, createjs.AbstractLoader.JSONP), this.setTag(document.createElement("script")), this.getTag().type = "text/javascript"
        }
        var p = createjs.extend(JSONPLoader, createjs.AbstractLoader);
        JSONPLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.JSONP
        }, p.cancel = function() {
            this.AbstractLoader_cancel(), this._dispose()
        }, p.load = function() {
            if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");
            if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
            window[this._item.callback] = createjs.proxy(this._handleLoad, this), window.document.body.appendChild(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src
        }, p._handleLoad = function(data) {
            this._result = this._rawResult = data, this._sendComplete(), this._dispose()
        }, p._handleTimeout = function() {
            this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"))
        }, p._dispose = function() {
            window.document.body.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout)
        }, createjs.JSONPLoader = createjs.promote(JSONPLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function ManifestLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, null, createjs.AbstractLoader.MANIFEST), this.plugins = null, this._manifestQueue = null
        }
        var p = createjs.extend(ManifestLoader, createjs.AbstractLoader),
            s = ManifestLoader;
        s.MANIFEST_PROGRESS = .25, s.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.MANIFEST
        }, p.load = function() {
            this.AbstractLoader_load()
        }, p._createRequest = function() {
            var callback = this._item.callback;
            this._request = null != callback ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
        }, p.handleEvent = function(event) {
            switch (event.type) {
                case "complete":
                    return this._rawResult = event.target.getResult(!0), this._result = event.target.getResult(), this._sendProgress(s.MANIFEST_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return event.loaded *= s.MANIFEST_PROGRESS, this.progress = event.loaded / event.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(event)
            }
            this.AbstractLoader_handleEvent(event)
        }, p.destroy = function() {
            this.AbstractLoader_destroy(), this._manifestQueue.close()
        }, p._loadManifest = function(json) {
            if (json && json.manifest) {
                var queue = this._manifestQueue = new createjs.LoadQueue;
                queue.on("fileload", this._handleManifestFileLoad, this), queue.on("progress", this._handleManifestProgress, this), queue.on("complete", this._handleManifestComplete, this, !0), queue.on("error", this._handleManifestError, this, !0);
                for (var i = 0, l = this.plugins.length; i < l; i++) queue.installPlugin(this.plugins[i]);
                queue.loadManifest(json)
            } else this._sendComplete()
        }, p._handleManifestFileLoad = function(event) {
            event.target = null, this.dispatchEvent(event)
        }, p._handleManifestComplete = function(event) {
            this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, p._handleManifestProgress = function(event) {
            this.progress = event.progress * (1 - s.MANIFEST_PROGRESS) + s.MANIFEST_PROGRESS, this._sendProgress(this.progress)
        }, p._handleManifestError = function(event) {
            var newEvent = new createjs.Event("fileerror");
            newEvent.item = event.data, this.dispatchEvent(newEvent)
        }, createjs.ManifestLoader = createjs.promote(ManifestLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function SoundLoader(loadItem, preferXHR) {
            this.AbstractMediaLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(loadItem) ? this._tag = loadItem : createjs.RequestUtils.isAudioTag(loadItem.src) ? this._tag = loadItem : createjs.RequestUtils.isAudioTag(loadItem.tag) && (this._tag = createjs.RequestUtils.isAudioTag(loadItem) ? loadItem : loadItem.src), null != this._tag && (this._preferXHR = !1)
        }
        var p = createjs.extend(SoundLoader, createjs.AbstractMediaLoader);
        SoundLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.SOUND
        }, p._createTag = function(src) {
            var tag = document.createElement("audio");
            return tag.autoplay = !1, tag.preload = "none", tag.src = src, tag
        }, createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader")
    }(),
    function() {
        "use strict";

        function VideoLoader(loadItem, preferXHR) {
            this.AbstractMediaLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.VIDEO), createjs.RequestUtils.isVideoTag(loadItem) || createjs.RequestUtils.isVideoTag(loadItem.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(loadItem) ? loadItem : loadItem.src), this._preferXHR = !1) : this.setTag(this._createTag())
        }
        var s = VideoLoader;
        createjs.extend(VideoLoader, createjs.AbstractMediaLoader)._createTag = function() {
            return document.createElement("video")
        }, s.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.VIDEO
        }, createjs.VideoLoader = createjs.promote(VideoLoader, "AbstractMediaLoader")
    }(),
    function() {
        "use strict";

        function SpriteSheetLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SPRITESHEET), this._manifestQueue = null
        }
        var p = createjs.extend(SpriteSheetLoader, createjs.AbstractLoader),
            s = SpriteSheetLoader;
        s.SPRITESHEET_PROGRESS = .25, s.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.SPRITESHEET
        }, p.destroy = function() {
            this.AbstractLoader_destroy, this._manifestQueue.close()
        }, p._createRequest = function() {
            var callback = this._item.callback;
            this._request = null != callback ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
        }, p.handleEvent = function(event) {
            switch (event.type) {
                case "complete":
                    return this._rawResult = event.target.getResult(!0), this._result = event.target.getResult(), this._sendProgress(s.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
                case "progress":
                    return event.loaded *= s.SPRITESHEET_PROGRESS, this.progress = event.loaded / event.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(event)
            }
            this.AbstractLoader_handleEvent(event)
        }, p._loadManifest = function(json) {
            if (json && json.images) {
                var queue = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
                queue.on("complete", this._handleManifestComplete, this, !0), queue.on("fileload", this._handleManifestFileLoad, this), queue.on("progress", this._handleManifestProgress, this), queue.on("error", this._handleManifestError, this, !0), queue.loadManifest(json.images)
            }
        }, p._handleManifestFileLoad = function(event) {
            var image = event.result;
            if (null != image) {
                var images = this.getResult().images;
                images[images.indexOf(event.item.src)] = image
            }
        }, p._handleManifestComplete = function(event) {
            this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
        }, p._handleManifestProgress = function(event) {
            this.progress = event.progress * (1 - s.SPRITESHEET_PROGRESS) + s.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
        }, p._handleManifestError = function(event) {
            var newEvent = new createjs.Event("fileerror");
            newEvent.item = event.data, this.dispatchEvent(newEvent)
        }, createjs.SpriteSheetLoader = createjs.promote(SpriteSheetLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function SVGLoader(loadItem, preferXHR) {
            this.AbstractLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", preferXHR ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml")
        }
        var p = createjs.extend(SVGLoader, createjs.AbstractLoader);
        SVGLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.SVG
        }, p._formatResult = function(loader) {
            var xml = createjs.DataUtils.parseXML(loader.getResult(!0), "text/xml"),
                tag = loader.getTag();
            return !this._preferXHR && document.body.contains(tag) && document.body.removeChild(tag), null != xml.documentElement ? (tag.appendChild(xml.documentElement), tag.style.visibility = "visible", tag) : xml
        }, createjs.SVGLoader = createjs.promote(SVGLoader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function XMLLoader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.XML), this.resultFormatter = this._formatResult
        }
        var p = createjs.extend(XMLLoader, createjs.AbstractLoader);
        XMLLoader.canLoadItem = function(item) {
            return item.type == createjs.AbstractLoader.XML
        }, p._formatResult = function(loader) {
            return createjs.DataUtils.parseXML(loader.getResult(!0), "text/xml")
        }, createjs.XMLLoader = createjs.promote(XMLLoader, "AbstractLoader")
    }(),
    function() {
        var s = createjs.SoundJS = createjs.SoundJS || {};
        s.version = "0.6.2", s.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(), createjs.indexOf = function(array, searchElement) {
        "use strict";
        for (var i = 0, l = array.length; i < l; i++)
            if (searchElement === array[i]) return i;
        return -1
    },
    function() {
        "use strict";
        createjs.proxy = function(method, scope) {
            var aArgs = Array.prototype.slice.call(arguments, 2);
            return function() {
                return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs))
            }
        }
    }(),
    function() {
        "use strict";

        function BrowserDetect() {
            throw "BrowserDetect cannot be instantiated"
        }
        var agent = BrowserDetect.agent = window.navigator.userAgent;
        BrowserDetect.isWindowPhone = agent.indexOf("IEMobile") > -1 || agent.indexOf("Windows Phone") > -1, BrowserDetect.isFirefox = agent.indexOf("Firefox") > -1, BrowserDetect.isOpera = null != window.opera, BrowserDetect.isChrome = agent.indexOf("Chrome") > -1, BrowserDetect.isIOS = (agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1) && !BrowserDetect.isWindowPhone, BrowserDetect.isAndroid = agent.indexOf("Android") > -1 && !BrowserDetect.isWindowPhone, BrowserDetect.isBlackberry = agent.indexOf("Blackberry") > -1, createjs.BrowserDetect = BrowserDetect
    }(),
    function() {
        "use strict";
        var PlayPropsConfig = function() {
                this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null
            },
            p = PlayPropsConfig.prototype = {},
            s = PlayPropsConfig;
        s.create = function(value) {
            if (value instanceof s || value instanceof Object) {
                var ppc = new createjs.PlayPropsConfig;
                return ppc.set(value), ppc
            }
            throw new Error("Type not recognized.")
        }, p.set = function(props) {
            for (var n in props) this[n] = props[n];
            return this
        }, p.toString = function() {
            return "[PlayPropsConfig]"
        }, createjs.PlayPropsConfig = s
    }(),
    function() {
        "use strict";

        function Sound() {
            throw "Sound cannot be instantiated"
        }

        function SoundChannel(src, max) {
            this.init(src, max)
        }
        var s = Sound;
        s.INTERRUPT_ANY = "any", s.INTERRUPT_EARLY = "early", s.INTERRUPT_LATE = "late", s.INTERRUPT_NONE = "none", s.PLAY_INITED = "playInited", s.PLAY_SUCCEEDED = "playSucceeded", s.PLAY_INTERRUPTED = "playInterrupted", s.PLAY_FINISHED = "playFinished", s.PLAY_FAILED = "playFailed", s.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], s.EXTENSION_MAP = {
            m4a: "mp4"
        }, s.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, s.defaultInterruptBehavior = s.INTERRUPT_NONE, s.alternateExtensions = [], s.activePlugin = null, s._masterVolume = 1, Object.defineProperty(s, "volume", {
            get: function() {
                return this._masterVolume
            },
            set: function(value) {
                if (null == Number(value)) return !1;
                if (value = Math.max(0, Math.min(1, value)), s._masterVolume = value, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(value))
                    for (var instances = this._instances, i = 0, l = instances.length; i < l; i++) instances[i].setMasterVolume(value)
            }
        }), s._masterMute = !1, Object.defineProperty(s, "muted", {
            get: function() {
                return this._masterMute
            },
            set: function(value) {
                if (null == value) return !1;
                if (this._masterMute = value, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(value))
                    for (var instances = this._instances, i = 0, l = instances.length; i < l; i++) instances[i].setMasterMute(value);
                return !0
            }
        }), Object.defineProperty(s, "capabilities", {
            get: function() {
                return null == s.activePlugin ? null : s.activePlugin._capabilities
            },
            set: function(value) {
                return !1
            }
        }), s._pluginsRegistered = !1, s._lastID = 0, s._instances = [], s._idHash = {}, s._preloadHash = {}, s._defaultPlayPropsHash = {}, s.addEventListener = null, s.removeEventListener = null, s.removeAllEventListeners = null, s.dispatchEvent = null, s.hasEventListener = null, s._listeners = null, createjs.EventDispatcher.initialize(s), s.getPreloadHandlers = function() {
            return {
                callback: createjs.proxy(s.initLoad, s),
                types: ["sound"],
                extensions: s.SUPPORTED_EXTENSIONS
            }
        }, s._handleLoadComplete = function(event) {
            var src = event.target.getItem().src;
            if (s._preloadHash[src])
                for (var i = 0, l = s._preloadHash[src].length; i < l; i++) {
                    var item = s._preloadHash[src][i];
                    if (s._preloadHash[src][i] = !0, s.hasEventListener("fileload")) {
                        (event = new createjs.Event("fileload")).src = item.src, event.id = item.id, event.data = item.data, event.sprite = item.sprite, s.dispatchEvent(event)
                    }
                }
        }, s._handleLoadError = function(event) {
            var src = event.target.getItem().src;
            if (s._preloadHash[src])
                for (var i = 0, l = s._preloadHash[src].length; i < l; i++) {
                    var item = s._preloadHash[src][i];
                    if (s._preloadHash[src][i] = !1, s.hasEventListener("fileerror")) {
                        (event = new createjs.Event("fileerror")).src = item.src, event.id = item.id, event.data = item.data, event.sprite = item.sprite, s.dispatchEvent(event)
                    }
                }
        }, s._registerPlugin = function(plugin) {
            return !!plugin.isSupported() && (s.activePlugin = new plugin, !0)
        }, s.registerPlugins = function(plugins) {
            s._pluginsRegistered = !0;
            for (var i = 0, l = plugins.length; i < l; i++)
                if (s._registerPlugin(plugins[i])) return !0;
            return !1
        }, s.initializeDefaultPlugins = function() {
            return null != s.activePlugin || !s._pluginsRegistered && !!s.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin])
        }, s.isReady = function() {
            return null != s.activePlugin
        }, s.getCapabilities = function() {
            return null == s.activePlugin ? null : s.activePlugin._capabilities
        }, s.getCapability = function(key) {
            return null == s.activePlugin ? null : s.activePlugin._capabilities[key]
        }, s.initLoad = function(loadItem) {
            return s._registerSound(loadItem)
        }, s._registerSound = function(loadItem) {
            if (!s.initializeDefaultPlugins()) return !1;
            var details;
            if (loadItem.src instanceof Object ? (details = s._parseSrc(loadItem.src)).src = loadItem.path + details.src : details = s._parsePath(loadItem.src), null == details) return !1;
            loadItem.src = details.src, loadItem.type = "sound";
            var data = loadItem.data,
                numChannels = null;
            if (null != data && (isNaN(data.channels) ? isNaN(data) || (numChannels = parseInt(data)) : numChannels = parseInt(data.channels), data.audioSprite))
                for (var sp, i = data.audioSprite.length; i--;) sp = data.audioSprite[i], s._idHash[sp.id] = {
                    src: loadItem.src,
                    startTime: parseInt(sp.startTime),
                    duration: parseInt(sp.duration)
                }, sp.defaultPlayProps && (s._defaultPlayPropsHash[sp.id] = createjs.PlayPropsConfig.create(sp.defaultPlayProps));
            null != loadItem.id && (s._idHash[loadItem.id] = {
                src: loadItem.src
            });
            var loader = s.activePlugin.register(loadItem);
            return SoundChannel.create(loadItem.src, numChannels), null != data && isNaN(data) ? loadItem.data.channels = numChannels || SoundChannel.maxPerChannel() : loadItem.data = numChannels || SoundChannel.maxPerChannel(), loader.type && (loadItem.type = loader.type), loadItem.defaultPlayProps && (s._defaultPlayPropsHash[loadItem.src] = createjs.PlayPropsConfig.create(loadItem.defaultPlayProps)), loader
        }, s.registerSound = function(src, id, data, basePath, defaultPlayProps) {
            var loadItem = {
                src: src,
                id: id,
                data: data,
                defaultPlayProps: defaultPlayProps
            };
            src instanceof Object && src.src && (basePath = id, loadItem = src), (loadItem = createjs.LoadItem.create(loadItem)).path = basePath, null == basePath || loadItem.src instanceof Object || (loadItem.src = basePath + src);
            var loader = s._registerSound(loadItem);
            if (!loader) return !1;
            if (s._preloadHash[loadItem.src] || (s._preloadHash[loadItem.src] = []), s._preloadHash[loadItem.src].push(loadItem), 1 == s._preloadHash[loadItem.src].length) loader.on("complete", createjs.proxy(this._handleLoadComplete, this)), loader.on("error", createjs.proxy(this._handleLoadError, this)), s.activePlugin.preload(loader);
            else if (1 == s._preloadHash[loadItem.src][0]) return !0;
            return loadItem
        }, s.registerSounds = function(sounds, basePath) {
            var returnValues = [];
            sounds.path && (basePath ? basePath += sounds.path : basePath = sounds.path, sounds = sounds.manifest);
            for (var i = 0, l = sounds.length; i < l; i++) returnValues[i] = createjs.Sound.registerSound(sounds[i].src, sounds[i].id, sounds[i].data, basePath, sounds[i].defaultPlayProps);
            return returnValues
        }, s.removeSound = function(src, basePath) {
            if (null == s.activePlugin) return !1;
            src instanceof Object && src.src && (src = src.src);
            var details;
            if (src instanceof Object ? details = s._parseSrc(src) : (src = s._getSrcById(src).src, details = s._parsePath(src)), null == details) return !1;
            src = details.src, null != basePath && (src = basePath + src);
            for (var prop in s._idHash) s._idHash[prop].src == src && delete s._idHash[prop];
            return SoundChannel.removeSrc(src), delete s._preloadHash[src], s.activePlugin.removeSound(src), !0
        }, s.removeSounds = function(sounds, basePath) {
            var returnValues = [];
            sounds.path && (basePath ? basePath += sounds.path : basePath = sounds.path, sounds = sounds.manifest);
            for (var i = 0, l = sounds.length; i < l; i++) returnValues[i] = createjs.Sound.removeSound(sounds[i].src, basePath);
            return returnValues
        }, s.removeAllSounds = function() {
            s._idHash = {}, s._preloadHash = {}, SoundChannel.removeAll(), s.activePlugin && s.activePlugin.removeAllSounds()
        }, s.loadComplete = function(src) {
            if (!s.isReady()) return !1;
            var details = s._parsePath(src);
            return src = details ? s._getSrcById(details.src).src : s._getSrcById(src).src, void 0 != s._preloadHash[src] && 1 == s._preloadHash[src][0]
        }, s._parsePath = function(value) {
            "string" != typeof value && (value = value.toString());
            var match = value.match(s.FILE_PATTERN);
            if (null == match) return !1;
            for (var name = match[4], ext = match[5], c = s.capabilities, i = 0; !c[ext];)
                if (ext = s.alternateExtensions[i++], i > s.alternateExtensions.length) return null;
            return {
                name: name,
                src: value = value.replace("." + match[5], "." + ext),
                extension: ext
            }
        }, s._parseSrc = function(value) {
            var ret = {
                    name: void 0,
                    src: void 0,
                    extension: void 0
                },
                c = s.capabilities;
            for (var prop in value)
                if (value.hasOwnProperty(prop) && c[prop]) {
                    ret.src = value[prop], ret.extension = prop;
                    break
                }
            if (!ret.src) return !1;
            var i = ret.src.lastIndexOf("/");
            return ret.name = -1 != i ? ret.src.slice(i + 1) : ret.src, ret
        }, s.play = function(src, interrupt, delay, offset, loop, volume, pan, startTime, duration) {
            var playProps;
            playProps = interrupt instanceof Object || interrupt instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(interrupt) : createjs.PlayPropsConfig.create({
                interrupt: interrupt,
                delay: delay,
                offset: offset,
                loop: loop,
                volume: volume,
                pan: pan,
                startTime: startTime,
                duration: duration
            });
            var instance = s.createInstance(src, playProps.startTime, playProps.duration);
            return s._playInstance(instance, playProps) || instance._playFailed(), instance
        }, s.createInstance = function(src, startTime, duration) {
            if (!s.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(src, startTime, duration);
            var defaultPlayProps = s._defaultPlayPropsHash[src];
            src = s._getSrcById(src);
            var details = s._parsePath(src.src),
                instance = null;
            return null != details && null != details.src ? (SoundChannel.create(details.src), null == startTime && (startTime = src.startTime), instance = s.activePlugin.create(details.src, startTime, duration || src.duration), (defaultPlayProps = defaultPlayProps || s._defaultPlayPropsHash[details.src]) && instance.applyPlayProps(defaultPlayProps)) : instance = new createjs.DefaultSoundInstance(src, startTime, duration), instance.uniqueId = s._lastID++, instance
        }, s.stop = function() {
            for (var instances = this._instances, i = instances.length; i--;) instances[i].stop()
        }, s.setVolume = function(value) {
            if (null == Number(value)) return !1;
            if (value = Math.max(0, Math.min(1, value)), s._masterVolume = value, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(value))
                for (var instances = this._instances, i = 0, l = instances.length; i < l; i++) instances[i].setMasterVolume(value)
        }, s.getVolume = function() {
            return this._masterVolume
        }, s.setMute = function(value) {
            if (null == value) return !1;
            if (this._masterMute = value, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(value))
                for (var instances = this._instances, i = 0, l = instances.length; i < l; i++) instances[i].setMasterMute(value);
            return !0
        }, s.getMute = function() {
            return this._masterMute
        }, s.setDefaultPlayProps = function(src, playProps) {
            src = s._getSrcById(src), s._defaultPlayPropsHash[s._parsePath(src.src).src] = createjs.PlayPropsConfig.create(playProps)
        }, s.getDefaultPlayProps = function(src) {
            return src = s._getSrcById(src), s._defaultPlayPropsHash[s._parsePath(src.src).src]
        }, s._playInstance = function(instance, playProps) {
            var defaultPlayProps = s._defaultPlayPropsHash[instance.src] || {};
            if (null == playProps.interrupt && (playProps.interrupt = defaultPlayProps.interrupt || s.defaultInterruptBehavior), null == playProps.delay && (playProps.delay = defaultPlayProps.delay || 0), null == playProps.offset && (playProps.offset = instance.getPosition()), null == playProps.loop && (playProps.loop = instance.loop), null == playProps.volume && (playProps.volume = instance.volume), null == playProps.pan && (playProps.pan = instance.pan), 0 == playProps.delay) {
                if (!s._beginPlaying(instance, playProps)) return !1
            } else {
                var delayTimeoutId = setTimeout(function() {
                    s._beginPlaying(instance, playProps)
                }, playProps.delay);
                instance.delayTimeoutId = delayTimeoutId
            }
            return this._instances.push(instance), !0
        }, s._beginPlaying = function(instance, playProps) {
            if (!SoundChannel.add(instance, playProps.interrupt)) return !1;
            if (!instance._beginPlaying(playProps)) {
                var index = createjs.indexOf(this._instances, instance);
                return index > -1 && this._instances.splice(index, 1), !1
            }
            return !0
        }, s._getSrcById = function(value) {
            return s._idHash[value] || {
                src: value
            }
        }, s._playFinished = function(instance) {
            SoundChannel.remove(instance);
            var index = createjs.indexOf(this._instances, instance);
            index > -1 && this._instances.splice(index, 1)
        }, createjs.Sound = Sound, SoundChannel.channels = {}, SoundChannel.create = function(src, max) {
            return null == SoundChannel.get(src) && (SoundChannel.channels[src] = new SoundChannel(src, max), !0)
        }, SoundChannel.removeSrc = function(src) {
            var channel = SoundChannel.get(src);
            return null != channel && (channel._removeAll(), delete SoundChannel.channels[src], !0)
        }, SoundChannel.removeAll = function() {
            for (var channel in SoundChannel.channels) SoundChannel.channels[channel]._removeAll();
            SoundChannel.channels = {}
        }, SoundChannel.add = function(instance, interrupt) {
            var channel = SoundChannel.get(instance.src);
            return null != channel && channel._add(instance, interrupt)
        }, SoundChannel.remove = function(instance) {
            var channel = SoundChannel.get(instance.src);
            return null != channel && (channel._remove(instance), !0)
        }, SoundChannel.maxPerChannel = function() {
            return p.maxDefault
        }, SoundChannel.get = function(src) {
            return SoundChannel.channels[src]
        };
        var p = SoundChannel.prototype;
        p.constructor = SoundChannel, p.src = null, p.max = null, p.maxDefault = 100, p.length = 0, p.init = function(src, max) {
            this.src = src, this.max = max || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
        }, p._get = function(index) {
            return this._instances[index]
        }, p._add = function(instance, interrupt) {
            return !!this._getSlot(interrupt, instance) && (this._instances.push(instance), this.length++, !0)
        }, p._remove = function(instance) {
            var index = createjs.indexOf(this._instances, instance);
            return -1 != index && (this._instances.splice(index, 1), this.length--, !0)
        }, p._removeAll = function() {
            for (var i = this.length - 1; i >= 0; i--) this._instances[i].stop()
        }, p._getSlot = function(interrupt, instance) {
            var target, replacement;
            if (interrupt != Sound.INTERRUPT_NONE && null == (replacement = this._get(0))) return !0;
            for (var i = 0, l = this.max; i < l; i++) {
                if (null == (target = this._get(i))) return !0;
                if (target.playState == Sound.PLAY_FINISHED || target.playState == Sound.PLAY_INTERRUPTED || target.playState == Sound.PLAY_FAILED) {
                    replacement = target;
                    break
                }
                interrupt != Sound.INTERRUPT_NONE && ((interrupt == Sound.INTERRUPT_EARLY && target.getPosition() < replacement.getPosition() || interrupt == Sound.INTERRUPT_LATE && target.getPosition() > replacement.getPosition()) && (replacement = target))
            }
            return null != replacement && (replacement._interrupt(), this._remove(replacement), !0)
        }, p.toString = function() {
            return "[Sound SoundChannel]"
        }
    }(),
    function() {
        "use strict";
        var AbstractSoundInstance = function(src, startTime, duration, playbackResource) {
                this.EventDispatcher_constructor(), this.src = src, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", {
                    get: this.getVolume,
                    set: this.setVolume
                }), this._pan = 0, Object.defineProperty(this, "pan", {
                    get: this.getPan,
                    set: this.setPan
                }), this._startTime = Math.max(0, startTime || 0), Object.defineProperty(this, "startTime", {
                    get: this.getStartTime,
                    set: this.setStartTime
                }), this._duration = Math.max(0, duration || 0), Object.defineProperty(this, "duration", {
                    get: this.getDuration,
                    set: this.setDuration
                }), this._playbackResource = null, Object.defineProperty(this, "playbackResource", {
                    get: this.getPlaybackResource,
                    set: this.setPlaybackResource
                }), !1 !== playbackResource && !0 !== playbackResource && this.setPlaybackResource(playbackResource), this._position = 0, Object.defineProperty(this, "position", {
                    get: this.getPosition,
                    set: this.setPosition
                }), this._loop = 0, Object.defineProperty(this, "loop", {
                    get: this.getLoop,
                    set: this.setLoop
                }), this._muted = !1, Object.defineProperty(this, "muted", {
                    get: this.getMuted,
                    set: this.setMuted
                }), this._paused = !1, Object.defineProperty(this, "paused", {
                    get: this.getPaused,
                    set: this.setPaused
                })
            },
            p = createjs.extend(AbstractSoundInstance, createjs.EventDispatcher);
        p.play = function(interrupt, delay, offset, loop, volume, pan) {
            var playProps;
            return playProps = interrupt instanceof Object || interrupt instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(interrupt) : createjs.PlayPropsConfig.create({
                interrupt: interrupt,
                delay: delay,
                offset: offset,
                loop: loop,
                volume: volume,
                pan: pan
            }), this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(playProps), void(this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, playProps), this)
        }, p.stop = function() {
            return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
        }, p.destroy = function() {
            this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
        }, p.applyPlayProps = function(playProps) {
            return null != playProps.offset && this.setPosition(playProps.offset), null != playProps.loop && this.setLoop(playProps.loop), null != playProps.volume && this.setVolume(playProps.volume), null != playProps.pan && this.setPan(playProps.pan), null != playProps.startTime && (this.setStartTime(playProps.startTime), this.setDuration(playProps.duration)), this
        }, p.toString = function() {
            return "[AbstractSoundInstance]"
        }, p.getPaused = function() {
            return this._paused
        }, p.setPaused = function(value) {
            if (!(!0 !== value && !1 !== value || this._paused == value || 1 == value && this.playState != createjs.Sound.PLAY_SUCCEEDED)) return this._paused = value, value ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this
        }, p.setVolume = function(value) {
            return value == this._volume ? this : (this._volume = Math.max(0, Math.min(1, value)), this._muted || this._updateVolume(), this)
        }, p.getVolume = function() {
            return this._volume
        }, p.setMuted = function(value) {
            if (!0 === value || !1 === value) return this._muted = value, this._updateVolume(), this
        }, p.getMuted = function() {
            return this._muted
        }, p.setPan = function(value) {
            return value == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, value)), this._updatePan(), this)
        }, p.getPan = function() {
            return this._pan
        }, p.getPosition = function() {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position
        }, p.setPosition = function(value) {
            return this._position = Math.max(0, value), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
        }, p.getStartTime = function() {
            return this._startTime
        }, p.setStartTime = function(value) {
            return value == this._startTime ? this : (this._startTime = Math.max(0, value || 0), this._updateStartTime(), this)
        }, p.getDuration = function() {
            return this._duration
        }, p.setDuration = function(value) {
            return value == this._duration ? this : (this._duration = Math.max(0, value || 0), this._updateDuration(), this)
        }, p.setPlaybackResource = function(value) {
            return this._playbackResource = value, 0 == this._duration && this._setDurationFromSource(), this
        }, p.getPlaybackResource = function() {
            return this._playbackResource
        }, p.getLoop = function() {
            return this._loop
        }, p.setLoop = function(value) {
            null != this._playbackResource && (0 != this._loop && 0 == value ? this._removeLooping(value) : 0 == this._loop && 0 != value && this._addLooping(value)), this._loop = value
        }, p._sendEvent = function(type) {
            var event = new createjs.Event(type);
            this.dispatchEvent(event)
        }, p._cleanUp = function() {
            clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
        }, p._interrupt = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
        }, p._beginPlaying = function(playProps) {
            return this.setPosition(playProps.offset), this.setLoop(playProps.loop), this.setVolume(playProps.volume), this.setPan(playProps.pan), null != playProps.startTime && (this.setStartTime(playProps.startTime), this.setDuration(playProps.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
        }, p._playFailed = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
        }, p._handleSoundComplete = function(event) {
            if (this._position = 0, 0 != this._loop) return this._loop--, this._handleLoop(), void this._sendEvent("loop");
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this._sendEvent("complete")
        }, p._handleSoundReady = function() {}, p._updateVolume = function() {}, p._updatePan = function() {}, p._updateStartTime = function() {}, p._updateDuration = function() {}, p._setDurationFromSource = function() {}, p._calculateCurrentPosition = function() {}, p._updatePosition = function() {}, p._removeLooping = function(value) {}, p._addLooping = function(value) {}, p._pause = function() {}, p._resume = function() {}, p._handleStop = function() {}, p._handleCleanUp = function() {}, p._handleLoop = function() {}, createjs.AbstractSoundInstance = createjs.promote(AbstractSoundInstance, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
    }(),
    function() {
        "use strict";
        var AbstractPlugin = function() {
                this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass
            },
            p = AbstractPlugin.prototype;
        AbstractPlugin._capabilities = null, AbstractPlugin.isSupported = function() {
            return !0
        }, p.register = function(loadItem) {
            var loader = this._loaders[loadItem.src];
            return loader && !loader.canceled ? this._loaders[loadItem.src] : (this._audioSources[loadItem.src] = !0, this._soundInstances[loadItem.src] = [], (loader = new this._loaderClass(loadItem)).on("complete", this._handlePreloadComplete, this), this._loaders[loadItem.src] = loader, loader)
        }, p.preload = function(loader) {
            loader.on("error", this._handlePreloadError, this), loader.load()
        }, p.isPreloadStarted = function(src) {
            return null != this._audioSources[src]
        }, p.isPreloadComplete = function(src) {
            return !(null == this._audioSources[src] || 1 == this._audioSources[src])
        }, p.removeSound = function(src) {
            if (this._soundInstances[src]) {
                for (var i = this._soundInstances[src].length; i--;) {
                    this._soundInstances[src][i].destroy()
                }
                delete this._soundInstances[src], delete this._audioSources[src], this._loaders[src] && this._loaders[src].destroy(), delete this._loaders[src]
            }
        }, p.removeAllSounds = function() {
            for (var key in this._audioSources) this.removeSound(key)
        }, p.create = function(src, startTime, duration) {
            this.isPreloadStarted(src) || this.preload(this.register(src));
            var si = new this._soundInstanceClass(src, startTime, duration, this._audioSources[src]);
            return this._soundInstances[src].push(si), si
        }, p.setVolume = function(value) {
            return this._volume = value, this._updateVolume(), !0
        }, p.getVolume = function() {
            return this._volume
        }, p.setMute = function(value) {
            return this._updateVolume(), !0
        }, p.toString = function() {
            return "[AbstractPlugin]"
        }, p._handlePreloadComplete = function(event) {
            var src = event.target.getItem().src;
            this._audioSources[src] = event.result;
            for (var i = 0, l = this._soundInstances[src].length; i < l; i++) {
                this._soundInstances[src][i].setPlaybackResource(this._audioSources[src])
            }
        }, p._handlePreloadError = function(event) {}, p._updateVolume = function() {}, createjs.AbstractPlugin = AbstractPlugin
    }(),
    function() {
        "use strict";

        function Loader(loadItem) {
            this.AbstractLoader_constructor(loadItem, !0, createjs.AbstractLoader.SOUND)
        }
        var p = createjs.extend(Loader, createjs.AbstractLoader);
        Loader.context = null, p.toString = function() {
            return "[WebAudioLoader]"
        }, p._createRequest = function() {
            this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer")
        }, p._sendComplete = function(event) {
            Loader.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
        }, p._handleAudioDecoded = function(decodedAudio) {
            this._result = decodedAudio, this.AbstractLoader__sendComplete()
        }, createjs.WebAudioLoader = createjs.promote(Loader, "AbstractLoader")
    }(),
    function() {
        "use strict";

        function WebAudioSoundInstance(src, startTime, duration, playbackResource) {
            this.AbstractSoundInstance_constructor(src, startTime, duration, playbackResource), this.gainNode = s.context.createGain(), this.panNode = s.context.createPanner(), this.panNode.panningModel = s._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
        }
        var p = createjs.extend(WebAudioSoundInstance, createjs.AbstractSoundInstance),
            s = WebAudioSoundInstance;
        s.context = null, s._scratchBuffer = null, s.destinationNode = null, s._panningModel = "equalpower", p.destroy = function() {
            this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
        }, p.toString = function() {
            return "[WebAudioSoundInstance]"
        }, p._updatePan = function() {
            this.panNode.setPosition(this._pan, 0, -.5)
        }, p._removeLooping = function(value) {
            this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
        }, p._addLooping = function(value) {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, p._setDurationFromSource = function() {
            this._duration = 1e3 * this.playbackResource.duration
        }, p._handleCleanUp = function() {
            this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
        }, p._cleanUpAudioNode = function(audioNode) {
            if (audioNode) {
                audioNode.stop(0), audioNode.disconnect(0);
                try {
                    audioNode.buffer = s._scratchBuffer
                } catch (e) {}
                audioNode = null
            }
            return audioNode
        }, p._handleSoundReady = function(event) {
            this.gainNode.connect(s.destinationNode);
            var dur = .001 * this._duration,
                pos = .001 * this._position;
            pos > dur && (pos = dur), this.sourceNode = this._createAndPlayAudioNode(s.context.currentTime - dur, pos), this._playbackStartTime = this.sourceNode.startTime - pos, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (dur - pos)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, p._createAndPlayAudioNode = function(startTime, offset) {
            var audioNode = s.context.createBufferSource();
            audioNode.buffer = this.playbackResource, audioNode.connect(this.panNode);
            var dur = .001 * this._duration;
            return audioNode.startTime = startTime + dur, audioNode.start(audioNode.startTime, offset + .001 * this._startTime, dur - offset), audioNode
        }, p._pause = function() {
            this._position = 1e3 * (s.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
        }, p._resume = function() {
            this._handleSoundReady()
        }, p._updateVolume = function() {
            var newVolume = this._muted ? 0 : this._volume;
            newVolume != this.gainNode.gain.value && (this.gainNode.gain.value = newVolume)
        }, p._calculateCurrentPosition = function() {
            return 1e3 * (s.context.currentTime - this._playbackStartTime)
        }, p._updatePosition = function() {
            this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
        }, p._handleLoop = function() {
            this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
        }, p._updateDuration = function() {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume())
        }, createjs.WebAudioSoundInstance = createjs.promote(WebAudioSoundInstance, "AbstractSoundInstance")
    }(),
    function() {
        "use strict";

        function WebAudioPlugin() {
            this.AbstractPlugin_constructor(), this._panningModel = s._panningModel, this.context = s.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = s._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
        }
        var p = createjs.extend(WebAudioPlugin, createjs.AbstractPlugin),
            s = WebAudioPlugin;
        s._capabilities = null, s._panningModel = "equalpower", s.context = null, s._scratchBuffer = null, s._unlocked = !1, s.isSupported = function() {
            var isMobilePhoneGap = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
            return !("file:" == location.protocol && !isMobilePhoneGap && !this._isFileXHRSupported()) && (s._generateCapabilities(), null != s.context)
        }, s.playEmptySound = function() {
            if (null != s.context) {
                var source = s.context.createBufferSource();
                source.buffer = s._scratchBuffer, source.connect(s.context.destination), source.start(0, 0, 0)
            }
        }, s._isFileXHRSupported = function() {
            var supported = !0,
                xhr = new XMLHttpRequest;
            try {
                xhr.open("GET", "WebAudioPluginTest.fail", !1)
            } catch (error) {
                return supported = !1
            }
            xhr.onerror = function() {
                supported = !1
            }, xhr.onload = function() {
                supported = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
            };
            try {
                xhr.send()
            } catch (error) {
                supported = !1
            }
            return supported
        }, s._generateCapabilities = function() {
            if (null == s._capabilities) {
                var t = document.createElement("audio");
                if (null == t.canPlayType) return null;
                if (null == s.context)
                    if (window.AudioContext) s.context = new AudioContext;
                    else {
                        if (!window.webkitAudioContext) return null;
                        s.context = new webkitAudioContext
                    }
                null == s._scratchBuffer && (s._scratchBuffer = s.context.createBuffer(1, 1, 22050)), s._compatibilitySetUp(), "ontouchstart" in window && "running" != s.context.state && (s._unlock(), document.addEventListener("mousedown", s._unlock, !0), document.addEventListener("touchend", s._unlock, !0)), s._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var supportedExtensions = createjs.Sound.SUPPORTED_EXTENSIONS, extensionMap = createjs.Sound.EXTENSION_MAP, i = 0, l = supportedExtensions.length; i < l; i++) {
                    var ext = supportedExtensions[i],
                        playType = extensionMap[ext] || ext;
                    s._capabilities[ext] = "no" != t.canPlayType("audio/" + ext) && "" != t.canPlayType("audio/" + ext) || "no" != t.canPlayType("audio/" + playType) && "" != t.canPlayType("audio/" + playType)
                }
                s.context.destination.numberOfChannels < 2 && (s._capabilities.panning = !1)
            }
        }, s._compatibilitySetUp = function() {
            if (s._panningModel = "equalpower", !s.context.createGain) {
                s.context.createGain = s.context.createGainNode;
                var audioNode = s.context.createBufferSource();
                audioNode.__proto__.start = audioNode.__proto__.noteGrainOn, audioNode.__proto__.stop = audioNode.__proto__.noteOff, s._panningModel = 0
            }
        }, s._unlock = function() {
            s._unlocked || (s.playEmptySound(), "running" == s.context.state && (document.removeEventListener("mousedown", s._unlock, !0), document.removeEventListener("touchend", s._unlock, !0), s._unlocked = !0))
        }, p.toString = function() {
            return "[WebAudioPlugin]"
        }, p._addPropsToClasses = function() {
            var c = this._soundInstanceClass;
            c.context = this.context, c._scratchBuffer = s._scratchBuffer, c.destinationNode = this.gainNode, c._panningModel = this._panningModel, this._loaderClass.context = this.context
        }, p._updateVolume = function() {
            var newVolume = createjs.Sound._masterMute ? 0 : this._volume;
            newVolume != this.gainNode.gain.value && (this.gainNode.gain.value = newVolume)
        }, createjs.WebAudioPlugin = createjs.promote(WebAudioPlugin, "AbstractPlugin")
    }(),
    function() {
        "use strict";

        function HTMLAudioTagPool() {
            throw "HTMLAudioTagPool cannot be instantiated"
        }

        function TagPool(src) {
            this._tags = []
        }
        var s = HTMLAudioTagPool;
        s._tags = {}, s._tagPool = new TagPool, s._tagUsed = {}, s.get = function(src) {
            var t = s._tags[src];
            return null == t ? (t = s._tags[src] = s._tagPool.get()).src = src : s._tagUsed[src] ? (t = s._tagPool.get()).src = src : s._tagUsed[src] = !0, t
        }, s.set = function(src, tag) {
            tag == s._tags[src] ? s._tagUsed[src] = !1 : s._tagPool.set(tag)
        }, s.remove = function(src) {
            var tag = s._tags[src];
            return null != tag && (s._tagPool.set(tag), delete s._tags[src], delete s._tagUsed[src], !0)
        }, s.getDuration = function(src) {
            var t = s._tags[src];
            return null != t && t.duration ? 1e3 * t.duration : 0
        }, createjs.HTMLAudioTagPool = HTMLAudioTagPool;
        var p = TagPool.prototype;
        p.constructor = TagPool, p.get = function() {
            var tag;
            return null == (tag = 0 == this._tags.length ? this._createTag() : this._tags.pop()).parentNode && document.body.appendChild(tag), tag
        }, p.set = function(tag) {
            -1 == createjs.indexOf(this._tags, tag) && (this._tags.src = null, this._tags.push(tag))
        }, p.toString = function() {
            return "[TagPool]"
        }, p._createTag = function() {
            var tag = document.createElement("audio");
            return tag.autoplay = !1, tag.preload = "none", tag
        }
    }(),
    function() {
        "use strict";

        function HTMLAudioSoundInstance(src, startTime, duration, playbackResource) {
            this.AbstractSoundInstance_constructor(src, startTime, duration, playbackResource), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), duration ? this._audioSpriteStopTime = .001 * (startTime + duration) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
        }
        var p = createjs.extend(HTMLAudioSoundInstance, createjs.AbstractSoundInstance);
        p.setMasterVolume = function(value) {
            this._updateVolume()
        }, p.setMasterMute = function(isMuted) {
            this._updateVolume()
        }, p.toString = function() {
            return "[HTMLAudioSoundInstance]"
        }, p._removeLooping = function() {
            null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, p._addLooping = function() {
            null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
        }, p._handleCleanUp = function() {
            var tag = this._playbackResource;
            if (null != tag) {
                tag.pause(), tag.loop = !1, tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), tag.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
                try {
                    tag.currentTime = this._startTime
                } catch (e) {}
                createjs.HTMLAudioTagPool.set(this.src, tag), this._playbackResource = null
            }
        }, p._beginPlaying = function(playProps) {
            return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(playProps)
        }, p._handleSoundReady = function(event) {
            if (4 !== this._playbackResource.readyState) {
                var tag = this._playbackResource;
                return tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), tag.preload = "auto", void tag.load()
            }
            this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
        }, p._handleTagReady = function(event) {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
        }, p._pause = function() {
            this._playbackResource.pause()
        }, p._resume = function() {
            this._playbackResource.play()
        }, p._updateVolume = function() {
            if (null != this._playbackResource) {
                var newVolume = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
                newVolume != this._playbackResource.volume && (this._playbackResource.volume = newVolume)
            }
        }, p._calculateCurrentPosition = function() {
            return 1e3 * this._playbackResource.currentTime - this._startTime
        }, p._updatePosition = function() {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
            try {
                this._playbackResource.currentTime = .001 * (this._position + this._startTime)
            } catch (error) {
                this._handleSetPositionSeek(null)
            }
        }, p._handleSetPositionSeek = function(event) {
            null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, p._handleAudioSpriteLoop = function(event) {
            this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
        }, p._handleLoop = function(event) {
            0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, p._updateStartTime = function() {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, p._updateDuration = function() {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, p._setDurationFromSource = function() {
            this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null
        }, createjs.HTMLAudioSoundInstance = createjs.promote(HTMLAudioSoundInstance, "AbstractSoundInstance")
    }(),
    function() {
        "use strict";

        function HTMLAudioPlugin() {
            this.AbstractPlugin_constructor(), this.defaultNumChannels = 2, this._capabilities = s._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
        }
        var p = createjs.extend(HTMLAudioPlugin, createjs.AbstractPlugin),
            s = HTMLAudioPlugin;
        s.MAX_INSTANCES = 30, s._AUDIO_READY = "canplaythrough", s._AUDIO_ENDED = "ended", s._AUDIO_SEEKED = "seeked", s._AUDIO_STALLED = "stalled", s._TIME_UPDATE = "timeupdate", s._capabilities = null, s.isSupported = function() {
            return s._generateCapabilities(), null != s._capabilities
        }, s._generateCapabilities = function() {
            if (null == s._capabilities) {
                var t = document.createElement("audio");
                if (null == t.canPlayType) return null;
                s._capabilities = {
                    panning: !1,
                    volume: !0,
                    tracks: -1
                };
                for (var supportedExtensions = createjs.Sound.SUPPORTED_EXTENSIONS, extensionMap = createjs.Sound.EXTENSION_MAP, i = 0, l = supportedExtensions.length; i < l; i++) {
                    var ext = supportedExtensions[i],
                        playType = extensionMap[ext] || ext;
                    s._capabilities[ext] = "no" != t.canPlayType("audio/" + ext) && "" != t.canPlayType("audio/" + ext) || "no" != t.canPlayType("audio/" + playType) && "" != t.canPlayType("audio/" + playType)
                }
            }
        }, p.register = function(loadItem) {
            var tag = createjs.HTMLAudioTagPool.get(loadItem.src),
                loader = this.AbstractPlugin_register(loadItem);
            return loader.setTag(tag), loader
        }, p.removeSound = function(src) {
            this.AbstractPlugin_removeSound(src), createjs.HTMLAudioTagPool.remove(src)
        }, p.create = function(src, startTime, duration) {
            var si = this.AbstractPlugin_create(src, startTime, duration);
            return si.setPlaybackResource(null), si
        }, p.toString = function() {
            return "[HTMLAudioPlugin]"
        }, p.setVolume = p.getVolume = p.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(HTMLAudioPlugin, "AbstractPlugin")
    }(),
    function() {
        "use strict";

        function Tween(target, props, pluginData) {
            this.ignoreGlobalPause = !1, this.loop = !1, this.duration = 0, this.pluginData = pluginData || {}, this.target = target, this.position = null, this.passive = !1, this._paused = !1, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], this._prevPosition = 0, this._stepPosition = 0, this._prevPos = -1, this._target = target, this._useTicks = !1, this._inited = !1, this._registered = !1, props && (this._useTicks = props.useTicks, this.ignoreGlobalPause = props.ignoreGlobalPause, this.loop = props.loop, props.onChange && this.addEventListener("change", props.onChange), props.override && Tween.removeTweens(target)), props && props.paused ? this._paused = !0 : createjs.Tween._register(this, !0), props && null != props.position && this.setPosition(props.position, Tween.NONE)
        }
        var p = createjs.extend(Tween, createjs.EventDispatcher);
        Tween.NONE = 0, Tween.LOOP = 1, Tween.REVERSE = 2, Tween.IGNORE = {}, Tween._tweens = [], Tween._plugins = {}, Tween.get = function(target, props, pluginData, override) {
            return override && Tween.removeTweens(target), new Tween(target, props, pluginData)
        }, Tween.tick = function(delta, paused) {
            for (var tweens = Tween._tweens.slice(), i = tweens.length - 1; i >= 0; i--) {
                var tween = tweens[i];
                paused && !tween.ignoreGlobalPause || tween._paused || tween.tick(tween._useTicks ? 1 : delta)
            }
        }, Tween.handleEvent = function(event) {
            "tick" == event.type && this.tick(event.delta, event.paused)
        }, Tween.removeTweens = function(target) {
            if (target.tweenjs_count) {
                for (var tweens = Tween._tweens, i = tweens.length - 1; i >= 0; i--) {
                    var tween = tweens[i];
                    tween._target == target && (tween._paused = !0, tweens.splice(i, 1))
                }
                target.tweenjs_count = 0
            }
        }, Tween.removeAllTweens = function() {
            for (var tweens = Tween._tweens, i = 0, l = tweens.length; i < l; i++) {
                var tween = tweens[i];
                tween._paused = !0, tween.target && (tween.target.tweenjs_count = 0)
            }
            tweens.length = 0
        }, Tween.hasActiveTweens = function(target) {
            return target ? null != target.tweenjs_count && !!target.tweenjs_count : Tween._tweens && !!Tween._tweens.length
        }, Tween.installPlugin = function(plugin, properties) {
            var priority = plugin.priority;
            null == priority && (plugin.priority = priority = 0);
            for (var i = 0, l = properties.length, p = Tween._plugins; i < l; i++) {
                var n = properties[i];
                if (p[n]) {
                    for (var arr = p[n], j = 0, jl = arr.length; j < jl && !(priority < arr[j].priority); j++);
                    p[n].splice(j, 0, plugin)
                } else p[n] = [plugin]
            }
        }, Tween._register = function(tween, value) {
            var target = tween._target,
                tweens = Tween._tweens;
            if (value && !tween._registered) target && (target.tweenjs_count = target.tweenjs_count ? target.tweenjs_count + 1 : 1), tweens.push(tween), !Tween._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", Tween), Tween._inited = !0);
            else if (!value && tween._registered) {
                target && target.tweenjs_count--;
                for (var i = tweens.length; i--;)
                    if (tweens[i] == tween) {
                        tweens.splice(i, 1);
                        break
                    }
            }
            tween._registered = value
        }, p.wait = function(duration, passive) {
            if (null == duration || duration <= 0) return this;
            var o = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: duration,
                p0: o,
                e: this._linearEase,
                p1: o,
                v: passive
            })
        }, p.to = function(props, duration, ease) {
            return (isNaN(duration) || duration < 0) && (duration = 0), this._addStep({
                d: duration || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: ease,
                p1: this._cloneProps(this._appendQueueProps(props))
            })
        }, p.call = function(callback, params, scope) {
            return this._addAction({
                f: callback,
                p: params || [this],
                o: scope || this._target
            })
        }, p.set = function(props, target) {
            return this._addAction({
                f: this._set,
                o: this,
                p: [props, target || this._target]
            })
        }, p.play = function(tween) {
            return tween || (tween = this), this.call(tween.setPaused, [!1], tween)
        }, p.pause = function(tween) {
            return tween || (tween = this), this.call(tween.setPaused, [!0], tween)
        }, p.setPosition = function(value, actionsMode) {
            value < 0 && (value = 0), null == actionsMode && (actionsMode = 1);
            var t = value,
                end = !1;
            if (t >= this.duration && (this.loop ? t %= this.duration : (t = this.duration, end = !0)), t == this._prevPos) return end;
            var prevPos = this._prevPos;
            if (this.position = this._prevPos = t, this._prevPosition = value, this._target)
                if (end) this._updateTargetProps(null, 1);
                else if (this._steps.length > 0) {
                for (var i = 0, l = this._steps.length; i < l && !(this._steps[i].t > t); i++);
                var step = this._steps[i - 1];
                this._updateTargetProps(step, (this._stepPosition = t - step.t) / step.d)
            }
            return 0 != actionsMode && this._actions.length > 0 && (this._useTicks ? this._runActions(t, t) : 1 == actionsMode && t < prevPos ? (prevPos != this.duration && this._runActions(prevPos, this.duration), this._runActions(0, t, !0)) : this._runActions(prevPos, t)), end && this.setPaused(!0), this.dispatchEvent("change"), end
        }, p.tick = function(delta) {
            this._paused || this.setPosition(this._prevPosition + delta)
        }, p.setPaused = function(value) {
            return this._paused === !!value ? this : (this._paused = !!value, Tween._register(this, !value), this)
        }, p.w = p.wait, p.t = p.to, p.c = p.call, p.s = p.set, p.toString = function() {
            return "[Tween]"
        }, p.clone = function() {
            throw "Tween can not be cloned."
        }, p._updateTargetProps = function(step, ratio) {
            var p0, p1, v, v0, v1, arr;
            if (step || 1 != ratio) {
                if (this.passive = !!step.v, this.passive) return;
                step.e && (ratio = step.e(ratio, 0, 1, 1)), p0 = step.p0, p1 = step.p1
            } else this.passive = !1, p0 = p1 = this._curQueueProps;
            for (var n in this._initQueueProps) {
                null == (v0 = p0[n]) && (p0[n] = v0 = this._initQueueProps[n]), null == (v1 = p1[n]) && (p1[n] = v1 = v0), v = v0 == v1 || 0 == ratio || 1 == ratio || "number" != typeof v0 ? 1 == ratio ? v1 : v0 : v0 + (v1 - v0) * ratio;
                var ignore = !1;
                if (arr = Tween._plugins[n])
                    for (var i = 0, l = arr.length; i < l; i++) {
                        var v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step && p0 == p1, !step);
                        v2 == Tween.IGNORE ? ignore = !0 : v = v2
                    }
                ignore || (this._target[n] = v)
            }
        }, p._runActions = function(startPos, endPos, includeStart) {
            var sPos = startPos,
                ePos = endPos,
                i = -1,
                j = this._actions.length,
                k = 1;
            for (startPos > endPos && (sPos = endPos, ePos = startPos, i = j, j = k = -1);
                (i += k) != j;) {
                var action = this._actions[i],
                    pos = action.t;
                (pos == ePos || pos > sPos && pos < ePos || includeStart && pos == startPos) && action.f.apply(action.o, action.p)
            }
        }, p._appendQueueProps = function(o) {
            var arr, oldValue, i, l, injectProps;
            for (var n in o)
                if (void 0 === this._initQueueProps[n]) {
                    if (oldValue = this._target[n], arr = Tween._plugins[n])
                        for (i = 0, l = arr.length; i < l; i++) oldValue = arr[i].init(this, n, oldValue);
                    this._initQueueProps[n] = this._curQueueProps[n] = void 0 === oldValue ? null : oldValue
                } else oldValue = this._curQueueProps[n];
            for (var n in o) {
                if (oldValue = this._curQueueProps[n], arr = Tween._plugins[n])
                    for (injectProps = injectProps || {}, i = 0, l = arr.length; i < l; i++) arr[i].step && arr[i].step(this, n, oldValue, o[n], injectProps);
                this._curQueueProps[n] = o[n]
            }
            return injectProps && this._appendQueueProps(injectProps), this._curQueueProps
        }, p._cloneProps = function(props) {
            var o = {};
            for (var n in props) o[n] = props[n];
            return o
        }, p._addStep = function(o) {
            return o.d > 0 && (this._steps.push(o), o.t = this.duration, this.duration += o.d), this
        }, p._addAction = function(o) {
            return o.t = this.duration, this._actions.push(o), this
        }, p._set = function(props, o) {
            for (var n in props) o[n] = props[n]
        }, createjs.Tween = createjs.promote(Tween, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function Timeline(tweens, labels, props) {
            this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.duration = 0, this.loop = !1, this.position = null, this._paused = !1, this._tweens = [], this._labels = null, this._labelList = null, this._prevPosition = 0, this._prevPos = -1, this._useTicks = !1, this._registered = !1, props && (this._useTicks = props.useTicks, this.loop = props.loop, this.ignoreGlobalPause = props.ignoreGlobalPause, props.onChange && this.addEventListener("change", props.onChange)), tweens && this.addTween.apply(this, tweens), this.setLabels(labels), props && props.paused ? this._paused = !0 : createjs.Tween._register(this, !0), props && null != props.position && this.setPosition(props.position, createjs.Tween.NONE)
        }
        var p = createjs.extend(Timeline, createjs.EventDispatcher);
        p.addTween = function(tween) {
            var l = arguments.length;
            if (l > 1) {
                for (var i = 0; i < l; i++) this.addTween(arguments[i]);
                return arguments[0]
            }
            return 0 == l ? null : (this.removeTween(tween), this._tweens.push(tween), tween.setPaused(!0), tween._paused = !1, tween._useTicks = this._useTicks, tween.duration > this.duration && (this.duration = tween.duration), this._prevPos >= 0 && tween.setPosition(this._prevPos, createjs.Tween.NONE), tween)
        }, p.removeTween = function(tween) {
            var l = arguments.length;
            if (l > 1) {
                for (var good = !0, i = 0; i < l; i++) good = good && this.removeTween(arguments[i]);
                return good
            }
            if (0 == l) return !1;
            var tweens = this._tweens;
            for (i = tweens.length; i--;)
                if (tweens[i] == tween) return tweens.splice(i, 1), tween.duration >= this.duration && this.updateDuration(), !0;
            return !1
        }, p.addLabel = function(label, position) {
            this._labels[label] = position;
            var list = this._labelList;
            if (list) {
                for (var i = 0, l = list.length; i < l && !(position < list[i].position); i++);
                list.splice(i, 0, {
                    label: label,
                    position: position
                })
            }
        }, p.setLabels = function(o) {
            this._labels = o || {}
        }, p.getLabels = function() {
            var list = this._labelList;
            if (!list) {
                list = this._labelList = [];
                var labels = this._labels;
                for (var n in labels) list.push({
                    label: n,
                    position: labels[n]
                });
                list.sort(function(a, b) {
                    return a.position - b.position
                })
            }
            return list
        }, p.getCurrentLabel = function() {
            var labels = this.getLabels(),
                pos = this.position,
                l = labels.length;
            if (l) {
                for (var i = 0; i < l && !(pos < labels[i].position); i++);
                return 0 == i ? null : labels[i - 1].label
            }
            return null
        }, p.gotoAndPlay = function(positionOrLabel) {
            this.setPaused(!1), this._goto(positionOrLabel)
        }, p.gotoAndStop = function(positionOrLabel) {
            this.setPaused(!0), this._goto(positionOrLabel)
        }, p.setPosition = function(value, actionsMode) {
            var t = this._calcPosition(value),
                end = !this.loop && value >= this.duration;
            if (t == this._prevPos) return end;
            this._prevPosition = value, this.position = this._prevPos = t;
            for (var i = 0, l = this._tweens.length; i < l; i++)
                if (this._tweens[i].setPosition(t, actionsMode), t != this._prevPos) return !1;
            return end && this.setPaused(!0), this.dispatchEvent("change"), end
        }, p.setPaused = function(value) {
            this._paused = !!value, createjs.Tween._register(this, !value)
        }, p.updateDuration = function() {
            this.duration = 0;
            for (var i = 0, l = this._tweens.length; i < l; i++) {
                var tween = this._tweens[i];
                tween.duration > this.duration && (this.duration = tween.duration)
            }
        }, p.tick = function(delta) {
            this.setPosition(this._prevPosition + delta)
        }, p.resolve = function(positionOrLabel) {
            var pos = Number(positionOrLabel);
            return isNaN(pos) && (pos = this._labels[positionOrLabel]), pos
        }, p.toString = function() {
            return "[Timeline]"
        }, p.clone = function() {
            throw "Timeline can not be cloned."
        }, p._goto = function(positionOrLabel) {
            var pos = this.resolve(positionOrLabel);
            null != pos && this.setPosition(pos)
        }, p._calcPosition = function(value) {
            return value < 0 ? 0 : value < this.duration ? value : this.loop ? value % this.duration : this.duration
        }, createjs.Timeline = createjs.promote(Timeline, "EventDispatcher")
    }(),
    function() {
        "use strict";

        function Ease() {
            throw "Ease cannot be instantiated."
        }
        Ease.none = Ease.linear = function(t) {
            return t
        }, Ease.get = function(amount) {
            return amount < -1 && (amount = -1), amount > 1 && (amount = 1),
                function(t) {
                    return 0 == amount ? t : amount < 0 ? t * (t * -amount + 1 + amount) : t * ((2 - t) * amount + (1 - amount))
                }
        }, Ease.getPowIn = function(pow) {
            return function(t) {
                return Math.pow(t, pow)
            }
        }, Ease.getPowOut = function(pow) {
            return function(t) {
                return 1 - Math.pow(1 - t, pow)
            }
        }, Ease.getPowInOut = function(pow) {
            return function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(t, pow) : 1 - .5 * Math.abs(Math.pow(2 - t, pow))
            }
        }, Ease.quadIn = Ease.getPowIn(2), Ease.quadOut = Ease.getPowOut(2), Ease.quadInOut = Ease.getPowInOut(2), Ease.cubicIn = Ease.getPowIn(3), Ease.cubicOut = Ease.getPowOut(3), Ease.cubicInOut = Ease.getPowInOut(3), Ease.quartIn = Ease.getPowIn(4), Ease.quartOut = Ease.getPowOut(4), Ease.quartInOut = Ease.getPowInOut(4), Ease.quintIn = Ease.getPowIn(5), Ease.quintOut = Ease.getPowOut(5), Ease.quintInOut = Ease.getPowInOut(5), Ease.sineIn = function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, Ease.sineOut = function(t) {
            return Math.sin(t * Math.PI / 2)
        }, Ease.sineInOut = function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }, Ease.getBackIn = function(amount) {
            return function(t) {
                return t * t * ((amount + 1) * t - amount)
            }
        }, Ease.backIn = Ease.getBackIn(1.7), Ease.getBackOut = function(amount) {
            return function(t) {
                return --t * t * ((amount + 1) * t + amount) + 1
            }
        }, Ease.backOut = Ease.getBackOut(1.7), Ease.getBackInOut = function(amount) {
            return amount *= 1.525,
                function(t) {
                    return (t *= 2) < 1 ? t * t * ((amount + 1) * t - amount) * .5 : .5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2)
                }
        }, Ease.backInOut = Ease.getBackInOut(1.7), Ease.circIn = function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }, Ease.circOut = function(t) {
            return Math.sqrt(1 - --t * t)
        }, Ease.circInOut = function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, Ease.bounceIn = function(t) {
            return 1 - Ease.bounceOut(1 - t)
        }, Ease.bounceOut = function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, Ease.bounceInOut = function(t) {
            return t < .5 ? .5 * Ease.bounceIn(2 * t) : .5 * Ease.bounceOut(2 * t - 1) + .5
        }, Ease.getElasticIn = function(amplitude, period) {
            var pi2 = 2 * Math.PI;
            return function(t) {
                if (0 == t || 1 == t) return t;
                var s = period / pi2 * Math.asin(1 / amplitude);
                return -amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period)
            }
        }, Ease.elasticIn = Ease.getElasticIn(1, .3), Ease.getElasticOut = function(amplitude, period) {
            var pi2 = 2 * Math.PI;
            return function(t) {
                if (0 == t || 1 == t) return t;
                var s = period / pi2 * Math.asin(1 / amplitude);
                return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1
            }
        }, Ease.elasticOut = Ease.getElasticOut(1, .3), Ease.getElasticInOut = function(amplitude, period) {
            var pi2 = 2 * Math.PI;
            return function(t) {
                var s = period / pi2 * Math.asin(1 / amplitude);
                return (t *= 2) < 1 ? amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * -.5 : amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * .5 + 1
            }
        }, Ease.elasticInOut = Ease.getElasticInOut(1, .3 * 1.5), createjs.Ease = Ease
    }(),
    function() {
        "use strict";

        function MotionGuidePlugin() {
            throw "MotionGuidePlugin cannot be instantiated."
        }
        MotionGuidePlugin.priority = 0, MotionGuidePlugin.install = function() {
            return createjs.Tween.installPlugin(MotionGuidePlugin, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
        }, MotionGuidePlugin.init = function(tween, prop, value) {
            var target = tween.target;
            return target.hasOwnProperty("x") || (target.x = 0), target.hasOwnProperty("y") || (target.y = 0), target.hasOwnProperty("rotation") || (target.rotation = 0), "rotation" == prop && (tween.__needsRot = !0), "guide" == prop ? null : value
        }, MotionGuidePlugin.step = function(tween, prop, startValue, endValue, injectProps) {
            if ("rotation" == prop && (tween.__rotGlobalS = startValue, tween.__rotGlobalE = endValue, MotionGuidePlugin.testRotData(tween, injectProps)), "guide" != prop) return endValue;
            var temp, data = endValue;
            data.hasOwnProperty("path") || (data.path = []);
            var path = data.path;
            if (data.hasOwnProperty("end") || (data.end = 1), data.hasOwnProperty("start") || (data.start = startValue && startValue.hasOwnProperty("end") && startValue.path === path ? startValue.end : 0), data.hasOwnProperty("_segments") && data._length) return endValue;
            var l = path.length;
            if (!(l >= 6 && (l - 2) % 4 == 0)) throw "invalid 'path' data, please see documentation for valid paths";
            data._segments = [], data._length = 0;
            for (var i = 2; i < l; i += 4) {
                for (var tempX, tempY, sx = path[i - 2], sy = path[i - 1], cx = path[i + 0], cy = path[i + 1], ex = path[i + 2], ey = path[i + 3], oldX = sx, oldY = sy, total = 0, sublines = [], j = 1; j <= 10; j++) {
                    var t = j / 10,
                        inv = 1 - t;
                    tempX = inv * inv * sx + 2 * inv * t * cx + t * t * ex, tempY = inv * inv * sy + 2 * inv * t * cy + t * t * ey, total += sublines[sublines.push(Math.sqrt((temp = tempX - oldX) * temp + (temp = tempY - oldY) * temp)) - 1], oldX = tempX, oldY = tempY
                }
                data._segments.push(total), data._segments.push(sublines), data._length += total
            }
            temp = data.orient, data.orient = !0;
            var o = {};
            return MotionGuidePlugin.calc(data, data.start, o), tween.__rotPathS = Number(o.rotation.toFixed(5)), MotionGuidePlugin.calc(data, data.end, o), tween.__rotPathE = Number(o.rotation.toFixed(5)), data.orient = !1, MotionGuidePlugin.calc(data, data.end, injectProps), data.orient = temp, data.orient ? (tween.__guideData = data, MotionGuidePlugin.testRotData(tween, injectProps), endValue) : endValue
        }, MotionGuidePlugin.testRotData = function(tween, injectProps) {
            if (void 0 === tween.__rotGlobalS || void 0 === tween.__rotGlobalE) {
                if (tween.__needsRot) return;
                void 0 !== tween._curQueueProps.rotation ? tween.__rotGlobalS = tween.__rotGlobalE = tween._curQueueProps.rotation : tween.__rotGlobalS = tween.__rotGlobalE = injectProps.rotation = tween.target.rotation || 0
            }
            if (void 0 !== tween.__guideData) {
                var data = tween.__guideData,
                    rotGlobalD = tween.__rotGlobalE - tween.__rotGlobalS,
                    rotPathD = tween.__rotPathE - tween.__rotPathS,
                    rot = rotGlobalD - rotPathD;
                if ("auto" == data.orient) rot > 180 ? rot -= 360 : rot < -180 && (rot += 360);
                else if ("cw" == data.orient) {
                    for (; rot < 0;) rot += 360;
                    0 == rot && rotGlobalD > 0 && 180 != rotGlobalD && (rot += 360)
                } else if ("ccw" == data.orient) {
                    for (rot = rotGlobalD - (rotPathD > 180 ? 360 - rotPathD : rotPathD); rot > 0;) rot -= 360;
                    0 == rot && rotGlobalD < 0 && -180 != rotGlobalD && (rot -= 360)
                }
                data.rotDelta = rot, data.rotOffS = tween.__rotGlobalS - tween.__rotPathS, tween.__rotGlobalS = tween.__rotGlobalE = tween.__guideData = tween.__needsRot = void 0
            }
        }, MotionGuidePlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
            var data = endValues.guide;
            if (void 0 == data || data === startValues.guide) return value;
            if (data.lastRatio != ratio) {
                var t = (data.end - data.start) * (wait ? data.end : ratio) + data.start;
                switch (MotionGuidePlugin.calc(data, t, tween.target), data.orient) {
                    case "cw":
                    case "ccw":
                    case "auto":
                        tween.target.rotation += data.rotOffS + data.rotDelta * ratio;
                        break;
                    case "fixed":
                    default:
                        tween.target.rotation += data.rotOffS
                }
                data.lastRatio = ratio
            }
            return "rotation" != prop || data.orient && "false" != data.orient ? tween.target[prop] : value
        }, MotionGuidePlugin.calc = function(data, ratio, target) {
            if (void 0 == data._segments) throw "Missing critical pre-calculated information, please file a bug";
            void 0 == target && (target = {
                x: 0,
                y: 0,
                rotation: 0
            });
            for (var seg = data._segments, path = data.path, pos = data._length * ratio, cap = seg.length - 2, n = 0; pos > seg[n] && n < cap;) pos -= seg[n], n += 2;
            var sublines = seg[n + 1],
                i = 0;
            for (cap = sublines.length - 1; pos > sublines[i] && i < cap;) pos -= sublines[i], i++;
            var t = i / ++cap + pos / (cap * sublines[i]);
            n = 2 * n + 2;
            var inv = 1 - t;
            return target.x = inv * inv * path[n - 2] + 2 * inv * t * path[n + 0] + t * t * path[n + 2], target.y = inv * inv * path[n - 1] + 2 * inv * t * path[n + 1] + t * t * path[n + 3], data.orient && (target.rotation = 57.2957795 * Math.atan2((path[n + 1] - path[n - 1]) * inv + (path[n + 3] - path[n + 1]) * t, (path[n + 0] - path[n - 2]) * inv + (path[n + 2] - path[n + 0]) * t)), target
        }, createjs.MotionGuidePlugin = MotionGuidePlugin
    }(),
    function() {
        "use strict";
        var s = createjs.TweenJS = createjs.TweenJS || {};
        s.version = "0.6.2", s.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function BlurFilter(blurX, blurY, quality) {
            (isNaN(blurX) || blurX < 0) && (blurX = 0), (isNaN(blurY) || blurY < 0) && (blurY = 0), (isNaN(quality) || quality < 1) && (quality = 1), this.blurX = 0 | blurX, this.blurY = 0 | blurY, this.quality = 0 | quality
        }
        var p = createjs.extend(BlurFilter, createjs.Filter);
        BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], p.getBounds = function(rect) {
            var x = 0 | this.blurX,
                y = 0 | this.blurY;
            if (x <= 0 && y <= 0) return rect;
            var q = Math.pow(this.quality, .2);
            return (rect || new createjs.Rectangle).pad(x * q + 1, y * q + 1, x * q + 1, y * q + 1)
        }, p.clone = function() {
            return new BlurFilter(this.blurX, this.blurY, this.quality)
        }, p.toString = function() {
            return "[BlurFilter]"
        }, p._applyFilter = function(imageData) {
            ! function(imageData) {
                for (var pixels = imageData.data, size = imageData.width * imageData.height * 4, i = 0; i < size; i += 4) {
                    var a = pixels[i + 3] / 255;
                    pixels[i] *= a, pixels[i + 1] *= a, pixels[i + 2] *= a
                }
            }(imageData);
            var radiusX = this.blurX >> 1;
            if (isNaN(radiusX) || radiusX < 0) return !1;
            var radiusY = this.blurY >> 1;
            if (isNaN(radiusY) || radiusY < 0) return !1;
            if (0 == radiusX && 0 == radiusY) return !1;
            var iterations = this.quality;
            (isNaN(iterations) || iterations < 1) && (iterations = 1), (iterations |= 0) > 3 && (iterations = 3), iterations < 1 && (iterations = 1);
            var px = imageData.data,
                x = 0,
                y = 0,
                i = 0,
                p = 0,
                yp = 0,
                yi = 0,
                yw = 0,
                r = 0,
                g = 0,
                b = 0,
                a = 0,
                pr = 0,
                pg = 0,
                pb = 0,
                pa = 0,
                divx = radiusX + radiusX + 1 | 0,
                divy = radiusY + radiusY + 1 | 0,
                w = 0 | imageData.width,
                h = 0 | imageData.height,
                w1 = w - 1 | 0,
                h1 = h - 1 | 0,
                rxp1 = radiusX + 1 | 0,
                ryp1 = radiusY + 1 | 0,
                ssx = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                sx = ssx;
            for (i = 1; i < divx; i++) sx = sx.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            sx.n = ssx;
            var ssy = {
                    r: 0,
                    b: 0,
                    g: 0,
                    a: 0
                },
                sy = ssy;
            for (i = 1; i < divy; i++) sy = sy.n = {
                r: 0,
                b: 0,
                g: 0,
                a: 0
            };
            sy.n = ssy;
            for (var si = null, mtx = 0 | BlurFilter.MUL_TABLE[radiusX], stx = 0 | BlurFilter.SHG_TABLE[radiusX], mty = 0 | BlurFilter.MUL_TABLE[radiusY], sty = 0 | BlurFilter.SHG_TABLE[radiusY]; iterations-- > 0;) {
                yw = yi = 0;
                var ms = mtx,
                    ss = stx;
                for (y = h; --y > -1;) {
                    for (r = rxp1 * (pr = px[0 | yi]), g = rxp1 * (pg = px[yi + 1 | 0]), b = rxp1 * (pb = px[yi + 2 | 0]), a = rxp1 * (pa = px[yi + 3 | 0]), sx = ssx, i = rxp1; --i > -1;) sx.r = pr, sx.g = pg, sx.b = pb, sx.a = pa, sx = sx.n;
                    for (i = 1; i < rxp1; i++) p = yi + ((w1 < i ? w1 : i) << 2) | 0, r += sx.r = px[p], g += sx.g = px[p + 1], b += sx.b = px[p + 2], a += sx.a = px[p + 3], sx = sx.n;
                    for (si = ssx, x = 0; x < w; x++) px[yi++] = r * ms >>> ss, px[yi++] = g * ms >>> ss, px[yi++] = b * ms >>> ss, px[yi++] = a * ms >>> ss, p = yw + ((p = x + radiusX + 1) < w1 ? p : w1) << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n;
                    yw += w
                }
                for (ms = mty, ss = sty, x = 0; x < w; x++) {
                    for (r = ryp1 * (pr = px[yi = x << 2 | 0]) | 0, g = ryp1 * (pg = px[yi + 1 | 0]) | 0, b = ryp1 * (pb = px[yi + 2 | 0]) | 0, a = ryp1 * (pa = px[yi + 3 | 0]) | 0, sy = ssy, i = 0; i < ryp1; i++) sy.r = pr, sy.g = pg, sy.b = pb, sy.a = pa, sy = sy.n;
                    for (yp = w, i = 1; i <= radiusY; i++) yi = yp + x << 2, r += sy.r = px[yi], g += sy.g = px[yi + 1], b += sy.b = px[yi + 2], a += sy.a = px[yi + 3], sy = sy.n, i < h1 && (yp += w);
                    if (yi = x, si = ssy, iterations > 0)
                        for (y = 0; y < h; y++) px[p = yi << 2] = r * ms >>> ss, px[p + 1] = g * ms >>> ss, px[p + 2] = b * ms >>> ss, px[p + 3] = a * ms >>> ss, p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n, yi += w;
                    else
                        for (y = 0; y < h; y++) px[p = yi << 2] = r * ms >>> ss, px[p + 1] = g * ms >>> ss, px[p + 2] = b * ms >>> ss, px[p + 3] = a * ms >>> ss, p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2, r -= si.r - (si.r = px[p]), g -= si.g - (si.g = px[p + 1]), b -= si.b - (si.b = px[p + 2]), a -= si.a - (si.a = px[p + 3]), si = si.n, yi += w
                }
            }
            return function(imageData) {
                for (var pixels = imageData.data, size = imageData.width * imageData.height * 4, i = 0; i < size; i += 4) {
                    var a = pixels[i + 3];
                    0 != a && (a = 255 / a, pixels[i] *= a, pixels[i + 1] *= a, pixels[i + 2] *= a)
                }
            }(imageData), !0
        }, createjs.BlurFilter = createjs.promote(BlurFilter, "Filter")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function SpriteContainer(spriteSheet) {
            this.Container_constructor(), this.spriteSheet = spriteSheet
        }
        var p = createjs.extend(SpriteContainer, createjs.Container);
        p.addChild = function(child) {
            return null == child ? child : arguments.length > 1 ? this.addChildAt.apply(this, Array.prototype.slice.call(arguments).concat([this.children.length])) : this.addChildAt(child, this.children.length)
        }, p.addChildAt = function(child, index) {
            var l = arguments.length,
                indx = arguments[l - 1];
            if (indx < 0 || indx > this.children.length) return arguments[l - 2];
            if (l > 2) {
                for (var i = 0; i < l - 1; i++) this.addChildAt(arguments[i], indx + i);
                return arguments[l - 2]
            }
            if (!(child._spritestage_compatibility >= 1)) return console && console.log("Error: You can only add children of type SpriteContainer, Sprite, BitmapText, or DOMElement [" + child.toString() + "]"), child;
            if (child._spritestage_compatibility <= 4) {
                var spriteSheet = child.spriteSheet;
                if (!spriteSheet || !spriteSheet._images || spriteSheet._images.length > 1 || this.spriteSheet && this.spriteSheet !== spriteSheet) return console && console.log("Error: A child's spriteSheet must be equal to its parent spriteSheet and only use one image. [" + child.toString() + "]"), child;
                this.spriteSheet = spriteSheet
            }
            return child.parent && child.parent.removeChild(child), child.parent = this, this.children.splice(index, 0, child), child
        }, p.toString = function() {
            return "[SpriteContainer (name=" + this.name + ")]"
        }, createjs.SpriteContainer = createjs.promote(SpriteContainer, "Container")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function SpriteStage(canvas, preserveDrawingBuffer, antialias) {
            this.Stage_constructor(canvas), this._preserveDrawingBuffer = preserveDrawingBuffer || !1, this._antialias = antialias || !1, this._viewportWidth = 0, this._viewportHeight = 0, this._projectionMatrix = null, this._webGLContext = null, this._webGLErrorDetected = !1, this._clearColor = null, this._maxTexturesPerDraw = 1, this._maxBoxesPointsPerDraw = null, this._maxBoxesPerDraw = null, this._maxIndicesPerDraw = null, this._shaderProgram = null, this._vertices = null, this._verticesBuffer = null, this._indices = null, this._indicesBuffer = null, this._currentBoxIndex = -1, this._drawTexture = null, this._initializeWebGL()
        }[createjs.SpriteContainer, createjs.Sprite, createjs.BitmapText, createjs.Bitmap, createjs.DOMElement].forEach(function(_class, index) {
            _class.prototype._spritestage_compatibility = index + 1
        });
        var p = createjs.extend(SpriteStage, createjs.Stage);
        SpriteStage.NUM_VERTEX_PROPERTIES = 5, SpriteStage.NUM_VERTEX_PROPERTIES_PER_BOX = (SpriteStage.POINTS_PER_BOX = 4) * SpriteStage.NUM_VERTEX_PROPERTIES, SpriteStage.INDICES_PER_BOX = 6, SpriteStage.MAX_INDEX_SIZE = Math.pow(2, 16), SpriteStage.MAX_BOXES_POINTS_INCREMENT = SpriteStage.MAX_INDEX_SIZE / 4, p._get_isWebGL = function() {
            return !!this._webGLContext
        };
        try {
            Object.defineProperties(p, {
                isWebGL: {
                    get: p._get_isWebGL
                }
            })
        } catch (e) {}
        p.addChild = function(child) {
            return null == child ? child : arguments.length > 1 ? this.addChildAt.apply(this, Array.prototype.slice.call(arguments).concat([this.children.length])) : this.addChildAt(child, this.children.length)
        }, p.addChildAt = function(child, index) {
            var l = arguments.length,
                indx = arguments[l - 1];
            if (indx < 0 || indx > this.children.length) return arguments[l - 2];
            if (l > 2) {
                for (var i = 0; i < l - 1; i++) this.addChildAt(arguments[i], indx + i);
                return arguments[l - 2]
            }
            return child._spritestage_compatibility >= 1 ? !child.image && !child.spriteSheet && child._spritestage_compatibility <= 4 ? (console && console.log("Error: You can only add children that have an image or spriteSheet defined on them. [" + child.toString() + "]"), child) : (child.parent && child.parent.removeChild(child), child.parent = this, this.children.splice(index, 0, child), child) : (console && console.log("Error: You can only add children of type SpriteContainer, Sprite, Bitmap, BitmapText, or DOMElement. [" + child.toString() + "]"), child)
        }, p.update = function(props) {
            if (this.canvas) {
                this.tickOnUpdate && this.tick(props), this.dispatchEvent("drawstart"), this.autoClear && this.clear();
                var ctx = this._setWebGLContext();
                ctx ? this.draw(ctx, !1) : ((ctx = this.canvas.getContext("2d")).save(), this.updateContext(ctx), this.draw(ctx, !1), ctx.restore()), this.dispatchEvent("drawend")
            }
        }, p.clear = function() {
            if (this.canvas) {
                var ctx = this._setWebGLContext();
                ctx ? ctx.clear(ctx.COLOR_BUFFER_BIT) : ((ctx = this.canvas.getContext("2d")).setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1))
            }
        }, p.draw = function(ctx, ignoreCache) {
            return "undefined" != typeof WebGLRenderingContext && (ctx === this._webGLContext || ctx instanceof WebGLRenderingContext) ? (this._drawWebGLKids(this.children, ctx), !0) : this.Stage_draw(ctx, ignoreCache)
        }, p.updateViewport = function(width, height) {
            this._viewportWidth = width, this._viewportHeight = height, this._webGLContext && (this._webGLContext.viewport(0, 0, this._viewportWidth, this._viewportHeight), this._projectionMatrix || (this._projectionMatrix = new Float32Array([0, 0, 0, 0, 0, 1, -1, 1, 1])), this._projectionMatrix[0] = 2 / width, this._projectionMatrix[4] = -2 / height)
        }, p.clearImageTexture = function(image) {
            image.__easeljs_texture = null
        }, p.toString = function() {
            return "[SpriteStage (name=" + this.name + ")]"
        }, p._initializeWebGL = function() {
            this._clearColor = {
                r: 0,
                g: 0,
                b: 0,
                a: 0
            }, this._setWebGLContext()
        }, p._setWebGLContext = function() {
            return this.canvas ? this._webGLContext && this._webGLContext.canvas === this.canvas || this._initializeWebGLContext() : this._webGLContext = null, this._webGLContext
        }, p._initializeWebGLContext = function() {
            var options = {
                    depth: !1,
                    alpha: !0,
                    preserveDrawingBuffer: this._preserveDrawingBuffer,
                    antialias: this._antialias,
                    premultipliedAlpha: !0
                },
                ctx = this._webGLContext = this.canvas.getContext("webgl", options) || this.canvas.getContext("experimental-webgl", options);
            ctx && (this._maxTexturesPerDraw = 1, this._setClearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a), ctx.enable(ctx.BLEND), ctx.blendFuncSeparate(ctx.SRC_ALPHA, ctx.ONE_MINUS_SRC_ALPHA, ctx.ONE, ctx.ONE_MINUS_SRC_ALPHA), ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), this._createShaderProgram(ctx), this._webGLErrorDetected ? this._webGLContext = null : (this._createBuffers(ctx), this.updateViewport(this._viewportWidth || this.canvas.width || 0, this._viewportHeight || this.canvas.height || 0)))
        }, p._setClearColor = function(r, g, b, a) {
            this._clearColor.r = r, this._clearColor.g = g, this._clearColor.b = b, this._clearColor.a = a, this._webGLContext && this._webGLContext.clearColor(r, g, b, a)
        }, p._createShaderProgram = function(ctx) {
            var fragmentShader = this._createShader(ctx, ctx.FRAGMENT_SHADER, "precision mediump float;uniform sampler2D uSampler0;varying vec3 vTextureCoord;void main(void) {vec4 color = texture2D(uSampler0, vTextureCoord.st);gl_FragColor = vec4(color.rgb, color.a * vTextureCoord.z);}"),
                vertexShader = this._createShader(ctx, ctx.VERTEX_SHADER, "attribute vec2 aVertexPosition;attribute vec3 aTextureCoord;uniform mat3 uPMatrix;varying vec3 vTextureCoord;void main(void) {vTextureCoord = aTextureCoord;gl_Position = vec4((uPMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);}");
            if (!this._webGLErrorDetected && fragmentShader && vertexShader) {
                var program = ctx.createProgram();
                ctx.attachShader(program, fragmentShader), ctx.attachShader(program, vertexShader), ctx.linkProgram(program), ctx.getProgramParameter(program, ctx.LINK_STATUS) ? (program.vertexPositionAttribute = ctx.getAttribLocation(program, "aVertexPosition"), program.textureCoordAttribute = ctx.getAttribLocation(program, "aTextureCoord"), program.sampler0uniform = ctx.getUniformLocation(program, "uSampler0"), ctx.enableVertexAttribArray(program.vertexPositionAttribute), ctx.enableVertexAttribArray(program.textureCoordAttribute), program.pMatrixUniform = ctx.getUniformLocation(program, "uPMatrix"), ctx.useProgram(program), this._shaderProgram = program) : this._webGLErrorDetected = !0
            }
        }, p._createShader = function(ctx, type, str) {
            var shader = ctx.createShader(type);
            return ctx.shaderSource(shader, str), ctx.compileShader(shader), ctx.getShaderParameter(shader, ctx.COMPILE_STATUS) ? shader : (this._webGLErrorDetected = !0, null)
        }, p._createBuffers = function(ctx) {
            this._verticesBuffer = ctx.createBuffer(), ctx.bindBuffer(ctx.ARRAY_BUFFER, this._verticesBuffer);
            var byteCount = 4 * SpriteStage.NUM_VERTEX_PROPERTIES;
            ctx.vertexAttribPointer(this._shaderProgram.vertexPositionAttribute, 2, ctx.FLOAT, ctx.FALSE, byteCount, 0), ctx.vertexAttribPointer(this._shaderProgram.textureCoordAttribute, 3, ctx.FLOAT, ctx.FALSE, byteCount, 8), this._indicesBuffer = ctx.createBuffer(), this._setMaxBoxesPoints(ctx, SpriteStage.MAX_BOXES_POINTS_INCREMENT)
        }, p._setMaxBoxesPoints = function(ctx, value) {
            this._maxBoxesPointsPerDraw = value, this._maxBoxesPerDraw = this._maxBoxesPointsPerDraw / SpriteStage.POINTS_PER_BOX | 0, this._maxIndicesPerDraw = this._maxBoxesPerDraw * SpriteStage.INDICES_PER_BOX, ctx.bindBuffer(ctx.ARRAY_BUFFER, this._verticesBuffer), this._vertices = new Float32Array(this._maxBoxesPerDraw * SpriteStage.NUM_VERTEX_PROPERTIES_PER_BOX), ctx.bufferData(ctx.ARRAY_BUFFER, this._vertices, ctx.DYNAMIC_DRAW), this._indices = new Uint16Array(this._maxIndicesPerDraw);
            for (var i = 0, l = this._indices.length; i < l; i += SpriteStage.INDICES_PER_BOX) {
                var j = i * SpriteStage.POINTS_PER_BOX / SpriteStage.INDICES_PER_BOX;
                this._indices[i] = j, this._indices[i + 1] = j + 1, this._indices[i + 2] = j + 2, this._indices[i + 3] = j, this._indices[i + 4] = j + 2, this._indices[i + 5] = j + 3
            }
            ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, this._indicesBuffer), ctx.bufferData(ctx.ELEMENT_ARRAY_BUFFER, this._indices, ctx.STATIC_DRAW)
        }, p._setupImageTexture = function(ctx, image) {
            if (image && (image.naturalWidth || image.getContext || image.readyState >= 2)) {
                var texture = image.__easeljs_texture;
                return texture || (texture = image.__easeljs_texture = ctx.createTexture(), ctx.bindTexture(ctx.TEXTURE_2D, texture), ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, image), ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST), ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR), ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE), ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE)), texture
            }
        }, p._drawWebGLKids = function(kids, ctx, parentMVMatrix) {
            for (var kid, mtx, snapToPixelEnabled = this.snapToPixelEnabled, image = null, leftSide = 0, topSide = 0, rightSide = 0, bottomSide = 0, vertices = this._vertices, numVertexPropertiesPerBox = SpriteStage.NUM_VERTEX_PROPERTIES_PER_BOX, maxIndexSize = SpriteStage.MAX_INDEX_SIZE, maxBoxIndex = this._maxBoxesPerDraw - 1, i = 0, l = kids.length; i < l; i++)
                if ((kid = kids[i]).isVisible()) {
                    var texture = (image = kid.image || kid.spriteSheet && kid.spriteSheet._images[0]).__easeljs_texture;
                    if (texture || (texture = this._setupImageTexture(ctx, image))) {
                        mtx = kid._props.matrix, mtx = (parentMVMatrix ? mtx.copy(parentMVMatrix) : mtx.identity()).appendTransform(kid.x, kid.y, kid.scaleX, kid.scaleY, kid.rotation, kid.skewX, kid.skewY, kid.regX, kid.regY);
                        var uStart = 0,
                            uEnd = 1,
                            vStart = 0,
                            vEnd = 1;
                        if (4 === kid._spritestage_compatibility) leftSide = 0, topSide = 0, rightSide = image.width, bottomSide = image.height;
                        else if (2 === kid._spritestage_compatibility) {
                            var frame = kid.spriteSheet.getFrame(kid.currentFrame),
                                rect = frame.rect;
                            leftSide = -frame.regX, topSide = -frame.regY, rightSide = leftSide + rect.width, bottomSide = topSide + rect.height, uStart = rect.x / image.width, vStart = rect.y / image.height, uEnd = uStart + rect.width / image.width, vEnd = vStart + rect.height / image.height
                        } else image = null, 3 === kid._spritestage_compatibility && kid._updateText();
                        if (!parentMVMatrix && kid._spritestage_compatibility <= 4 && texture !== this._drawTexture && (this._drawToGPU(ctx), this._drawTexture = texture), null !== image) {
                            var offset = ++this._currentBoxIndex * numVertexPropertiesPerBox,
                                a = mtx.a,
                                b = mtx.b,
                                c = mtx.c,
                                d = mtx.d,
                                tx = mtx.tx,
                                ty = mtx.ty;
                            snapToPixelEnabled && kid.snapToPixel && (tx = tx + (tx < 0 ? -.5 : .5) | 0, ty = ty + (ty < 0 ? -.5 : .5) | 0), vertices[offset] = leftSide * a + topSide * c + tx, vertices[offset + 1] = leftSide * b + topSide * d + ty, vertices[offset + 5] = leftSide * a + bottomSide * c + tx, vertices[offset + 6] = leftSide * b + bottomSide * d + ty, vertices[offset + 10] = rightSide * a + bottomSide * c + tx, vertices[offset + 11] = rightSide * b + bottomSide * d + ty, vertices[offset + 15] = rightSide * a + topSide * c + tx, vertices[offset + 16] = rightSide * b + topSide * d + ty, vertices[offset + 2] = vertices[offset + 7] = uStart, vertices[offset + 12] = vertices[offset + 17] = uEnd, vertices[offset + 3] = vertices[offset + 18] = vStart, vertices[offset + 8] = vertices[offset + 13] = vEnd, vertices[offset + 4] = vertices[offset + 9] = vertices[offset + 14] = vertices[offset + 19] = kid.alpha, this._currentBoxIndex === maxBoxIndex && (this._drawToGPU(ctx), this._drawTexture = texture, this._maxBoxesPointsPerDraw < maxIndexSize && (this._setMaxBoxesPoints(ctx, this._maxBoxesPointsPerDraw + SpriteStage.MAX_BOXES_POINTS_INCREMENT), maxBoxIndex = this._maxBoxesPerDraw - 1))
                        }
                        kid.children && (this._drawWebGLKids(kid.children, ctx, mtx), maxBoxIndex = this._maxBoxesPerDraw - 1)
                    }
                }
            parentMVMatrix || this._drawToGPU(ctx)
        }, p._drawToGPU = function(ctx) {
            if (this._drawTexture) {
                var numBoxes = this._currentBoxIndex + 1;
                ctx.activeTexture(ctx.TEXTURE0), ctx.bindTexture(ctx.TEXTURE_2D, this._drawTexture), ctx.uniform1i(this._shaderProgram.sampler0uniform, 0), ctx.bindBuffer(ctx.ARRAY_BUFFER, this._verticesBuffer), ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, this._indicesBuffer), ctx.uniformMatrix3fv(this._shaderProgram.pMatrixUniform, !1, this._projectionMatrix), ctx.bufferSubData(ctx.ARRAY_BUFFER, 0, this._vertices), ctx.drawElements(ctx.TRIANGLES, numBoxes * SpriteStage.INDICES_PER_BOX, ctx.UNSIGNED_SHORT, 0), this._currentBoxIndex = -1, this._drawTexture = null
            }
        }, createjs.SpriteStage = createjs.promote(SpriteStage, "Stage")
    }(),
    function() {
        "use strict";
        var HowlerGlobal = function() {
            this.init()
        };
        HowlerGlobal.prototype = {
            init: function() {
                var self = this || Howler;
                return self._codecs = {}, self._howls = [], self._muted = !1, self._volume = 1, self._canPlayEvent = "canplaythrough", self._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, self.masterGain = null, self.noAudio = !1, self.usingWebAudio = !0, self.autoSuspend = !0, self.ctx = null, self.mobileAutoEnable = !0, self._setup(), self
            },
            volume: function(vol) {
                var self = this || Howler;
                if (vol = parseFloat(vol), self.ctx || setupAudioContext(), void 0 !== vol && vol >= 0 && vol <= 1) {
                    if (self._volume = vol, self._muted) return self;
                    self.usingWebAudio && (self.masterGain.gain.value = vol);
                    for (var i = 0; i < self._howls.length; i++)
                        if (!self._howls[i]._webAudio)
                            for (var ids = self._howls[i]._getSoundIds(), j = 0; j < ids.length; j++) {
                                var sound = self._howls[i]._soundById(ids[j]);
                                sound && sound._node && (sound._node.volume = sound._volume * vol)
                            }
                    return self
                }
                return self._volume
            },
            mute: function(muted) {
                var self = this || Howler;
                self.ctx || setupAudioContext(), self._muted = muted, self.usingWebAudio && (self.masterGain.gain.value = muted ? 0 : self._volume);
                for (var i = 0; i < self._howls.length; i++)
                    if (!self._howls[i]._webAudio)
                        for (var ids = self._howls[i]._getSoundIds(), j = 0; j < ids.length; j++) {
                            var sound = self._howls[i]._soundById(ids[j]);
                            sound && sound._node && (sound._node.muted = !!muted || sound._muted)
                        }
                return self
            },
            unload: function() {
                for (var self = this || Howler, i = self._howls.length - 1; i >= 0; i--) self._howls[i].unload();
                return self.usingWebAudio && void 0 !== self.ctx.close && (self.ctx.close(), self.ctx = null, setupAudioContext()), self
            },
            codecs: function(ext) {
                return (this || Howler)._codecs[ext]
            },
            _setup: function() {
                var self = this || Howler;
                return self.state = self.ctx ? self.ctx.state || "running" : "running", self._autoSuspend(), self.noAudio || self._setupCodecs(), self
            },
            _setupCodecs: function() {
                var self = this || Howler,
                    audioTest = "undefined" != typeof Audio ? new Audio : null;
                if (!audioTest || "function" != typeof audioTest.canPlayType) return self;
                var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g),
                    isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33,
                    isEdge = self._navigator && /Edge\//g.test(self._navigator.userAgent);
                return self._codecs = {
                    mp3: !(isOldOpera || !mpegTest && !audioTest.canPlayType("audio/mp3;").replace(/^no$/, "")),
                    mpeg: !!mpegTest,
                    opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && !isEdge,
                    oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                    webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                    dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, "")
                }, self
            },
            _enableMobileAudio: function() {
                var self = this || Howler,
                    isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent),
                    isTouch = !!("ontouchend" in window || self._navigator && self._navigator.maxTouchPoints > 0 || self._navigator && self._navigator.msMaxTouchPoints > 0);
                if (!self._mobileEnabled && self.ctx && (isMobile || isTouch)) {
                    self._mobileEnabled = !1, self._mobileUnloaded || 44100 === self.ctx.sampleRate || (self._mobileUnloaded = !0, self.unload()), self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
                    var unlock = function() {
                        var source = self.ctx.createBufferSource();
                        source.buffer = self._scratchBuffer, source.connect(self.ctx.destination), void 0 === source.start ? source.noteOn(0) : source.start(0), source.onended = function() {
                            source.disconnect(0), self._mobileEnabled = !0, self.mobileAutoEnable = !1, document.removeEventListener("touchend", unlock, !0)
                        }
                    };
                    return document.addEventListener("touchend", unlock, !0), self
                }
            },
            _autoSuspend: function() {
                var self = this;
                if (self.autoSuspend && self.ctx && void 0 !== self.ctx.suspend && Howler.usingWebAudio) {
                    for (var i = 0; i < self._howls.length; i++)
                        if (self._howls[i]._webAudio)
                            for (var j = 0; j < self._howls[i]._sounds.length; j++)
                                if (!self._howls[i]._sounds[j]._paused) return self;
                    return self._suspendTimer && clearTimeout(self._suspendTimer), self._suspendTimer = setTimeout(function() {
                        self.autoSuspend && (self._suspendTimer = null, null == self.ctx || "interrupted" === self.ctx.state ? (self.state = "suspended", self._autoResume()) : (self.state = "suspending", self.ctx.suspend().then(function() {
                            self.state = "suspended", self._resumeAfterSuspend && (delete self._resumeAfterSuspend, self._autoResume())
                        })))
                    }, 3e4), self
                }
            },
            _autoResume: function() {
                var self = this;
                if (self.ctx && void 0 !== self.ctx.resume && Howler.usingWebAudio) return "running" === self.state && self._suspendTimer ? (clearTimeout(self._suspendTimer), self._suspendTimer = null) : "suspended" === self.state ? (self.state = "resuming", self.ctx.resume().then(function() {
                    self.state = "running"
                }), self._suspendTimer && (clearTimeout(self._suspendTimer), self._suspendTimer = null)) : "suspending" === self.state && (self._resumeAfterSuspend = !0), self
            }
        };
        var Howler = new HowlerGlobal,
            Howl = function(o) {
                o.src && 0 !== o.src.length ? this.init(o) : console.error("An array of source files must be passed with any new Howl.")
            };
        Howl.prototype = {
            init: function(o) {
                return Howler.ctx || setupAudioContext(), this._autoplay = o.autoplay || !1, this._format = "string" != typeof o.format ? o.format : [o.format], this._html5 = o.html5 || !1, this._muted = o.mute || !1, this._loop = o.loop || !1, this._pool = o.pool || 5, this._preload = "boolean" != typeof o.preload || o.preload, this._rate = o.rate || 1, this._sprite = o.sprite || {}, this._src = "string" != typeof o.src ? o.src : [o.src], this._volume = void 0 !== o.volume ? o.volume : 1, this._duration = 0, this._state = "unloaded", this._sounds = [], this._endTimers = {}, this._queue = [], this._onend = o.onend ? [{
                    fn: o.onend
                }] : [], this._onfade = o.onfade ? [{
                    fn: o.onfade
                }] : [], this._onload = o.onload ? [{
                    fn: o.onload
                }] : [], this._onloaderror = o.onloaderror ? [{
                    fn: o.onloaderror
                }] : [], this._onpause = o.onpause ? [{
                    fn: o.onpause
                }] : [], this._onplay = o.onplay ? [{
                    fn: o.onplay
                }] : [], this._onstop = o.onstop ? [{
                    fn: o.onstop
                }] : [], this._onmute = o.onmute ? [{
                    fn: o.onmute
                }] : [], this._onvolume = o.onvolume ? [{
                    fn: o.onvolume
                }] : [], this._onrate = o.onrate ? [{
                    fn: o.onrate
                }] : [], this._onseek = o.onseek ? [{
                    fn: o.onseek
                }] : [], this._webAudio = Howler.usingWebAudio && !this._html5, void 0 !== Howler.ctx && Howler.ctx && Howler.mobileAutoEnable && Howler._enableMobileAudio(), Howler._howls.push(this), this._preload && this.load(), this
            },
            load: function() {
                var url = null;
                if (Howler.noAudio) this._emit("loaderror", null, "No audio support.");
                else {
                    "string" == typeof this._src && (this._src = [this._src]);
                    for (var i = 0; i < this._src.length; i++) {
                        var ext, str;
                        if (this._format && this._format[i]) ext = this._format[i];
                        else {
                            if ("string" != typeof(str = this._src[i])) {
                                this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                continue
                            }(ext = /^data:audio\/([^;,]+);/i.exec(str)) || (ext = /\.([^.]+)$/.exec(str.split("?", 1)[0])), ext && (ext = ext[1].toLowerCase())
                        }
                        if (Howler.codecs(ext)) {
                            url = this._src[i];
                            break
                        }
                    }
                    if (url) return this._src = url, this._state = "loading", "https:" === window.location.protocol && "http:" === url.slice(0, 5) && (this._html5 = !0, this._webAudio = !1), new Sound(this), this._webAudio && loadBuffer(this), this;
                    this._emit("loaderror", null, "No codec support for selected audio sources.")
                }
            },
            play: function(sprite, internal) {
                var self = this,
                    id = null;
                if ("number" == typeof sprite) id = sprite, sprite = null;
                else {
                    if ("string" == typeof sprite && "loaded" === self._state && !self._sprite[sprite]) return null;
                    if (void 0 === sprite) {
                        sprite = "__default";
                        for (var num = 0, i = 0; i < self._sounds.length; i++) self._sounds[i]._paused && !self._sounds[i]._ended && (num++, id = self._sounds[i]._id);
                        1 === num ? sprite = null : id = null
                    }
                }
                var sound = id ? self._soundById(id) : self._inactiveSound();
                if (!sound) return null;
                if (id && !sprite && (sprite = sound._sprite || "__default"), "loaded" !== self._state && !self._sprite[sprite]) return self._queue.push({
                    event: "play",
                    action: function() {
                        self.play(self._soundById(sound._id) ? sound._id : void 0)
                    }
                }), sound._id;
                if (id && !sound._paused) return internal || setTimeout(function() {
                    self._emit("play", sound._id)
                }, 0), sound._id;
                self._webAudio && Howler._autoResume();
                var seek = sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1e3,
                    duration = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3 - seek;
                duration < 0 && (duration = 0);
                var timeout = 1e3 * duration / Math.abs(sound._rate);
                sound._paused = !1, sound._ended = !1, sound._sprite = sprite, sound._seek = seek, sound._start = self._sprite[sprite][0] / 1e3, sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3, sound._loop = !(!sound._loop && !self._sprite[sprite][2]);
                var node = sound._node;
                if (self._webAudio) {
                    var playWebAudio = function() {
                        self._refreshBuffer(sound);
                        var vol = sound._muted || self._muted ? 0 : sound._volume;
                        node.gain.setValueAtTime(vol, Howler.ctx.currentTime), sound._playStart = Howler.ctx.currentTime, void 0 === node.bufferSource.start ? sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration) : sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration), timeout !== 1 / 0 && (self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout)), internal || setTimeout(function() {
                            self._emit("play", sound._id)
                        }, 0)
                    };
                    "loaded" === self._state ? playWebAudio() : (self.once("load", playWebAudio, sound._id), self._clearTimer(sound._id))
                } else {
                    var playHtml5 = function() {
                            node.currentTime = seek, node.muted = sound._muted || self._muted || Howler._muted || node.muted, node.volume = sound._volume * Howler.volume(), node.playbackRate = sound._rate, setTimeout(function() {
                                var play = node.play();
                                play && play.catch(function(e) {
                                    console.warn(e)
                                }), timeout !== 1 / 0 && (self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout)), internal || self._emit("play", sound._id)
                            }, 0)
                        },
                        loadedNoReadyState = "loaded" === self._state && (window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS);
                    if (4 === node.readyState || loadedNoReadyState) playHtml5();
                    else {
                        var listener = function() {
                            playHtml5(), node.removeEventListener(Howler._canPlayEvent, listener, !1)
                        };
                        node.addEventListener(Howler._canPlayEvent, listener, !1), self._clearTimer(sound._id)
                    }
                }
                return sound._id
            },
            pause: function(id) {
                var self = this;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "pause",
                    action: function() {
                        self.pause(id)
                    }
                }), self;
                for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                    self._clearTimer(ids[i]);
                    var sound = self._soundById(ids[i]);
                    if (sound && !sound._paused) {
                        if (sound._seek = self.seek(ids[i]), sound._rateSeek = 0, sound._paused = !0, self._stopFade(ids[i]), sound._node)
                            if (self._webAudio) {
                                if (!sound._node.bufferSource) return self;
                                void 0 === sound._node.bufferSource.stop ? sound._node.bufferSource.noteOff(0) : sound._node.bufferSource.stop(0), self._cleanBuffer(sound._node)
                            } else isNaN(sound._node.duration) && sound._node.duration !== 1 / 0 || sound._node.pause();
                        arguments[1] || self._emit("pause", sound._id)
                    }
                }
                return self
            },
            stop: function(id, internal) {
                var self = this;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "stop",
                    action: function() {
                        self.stop(id)
                    }
                }), self;
                for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                    self._clearTimer(ids[i]);
                    var sound = self._soundById(ids[i]);
                    if (sound && !sound._paused && (sound._seek = sound._start || 0, sound._rateSeek = 0, sound._paused = !0, sound._ended = !0, self._stopFade(ids[i]), sound._node))
                        if (self._webAudio) {
                            if (!sound._node.bufferSource) return self;
                            void 0 === sound._node.bufferSource.stop ? sound._node.bufferSource.noteOff(0) : sound._node.bufferSource.stop(0), self._cleanBuffer(sound._node)
                        } else isNaN(sound._node.duration) && sound._node.duration !== 1 / 0 || (sound._node.currentTime = sound._start || 0, sound._node.pause());
                    sound && !internal && self._emit("stop", sound._id)
                }
                return self
            },
            mute: function(muted, id) {
                var self = this;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "mute",
                    action: function() {
                        self.mute(muted, id)
                    }
                }), self;
                if (void 0 === id) {
                    if ("boolean" != typeof muted) return self._muted;
                    self._muted = muted
                }
                for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                    var sound = self._soundById(ids[i]);
                    sound && (sound._muted = muted, self._webAudio && sound._node ? sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime) : sound._node && (sound._node.muted = !!Howler._muted || muted), self._emit("mute", sound._id))
                }
                return self
            },
            volume: function() {
                var vol, id, self = this,
                    args = arguments;
                if (0 === args.length) return self._volume;
                if (1 === args.length) {
                    self._getSoundIds().indexOf(args[0]) >= 0 ? id = parseInt(args[0], 10) : vol = parseFloat(args[0])
                } else args.length >= 2 && (vol = parseFloat(args[0]), id = parseInt(args[1], 10));
                var sound;
                if (!(void 0 !== vol && vol >= 0 && vol <= 1)) return (sound = id ? self._soundById(id) : self._sounds[0]) ? sound._volume : 0;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "volume",
                    action: function() {
                        self.volume.apply(self, args)
                    }
                }), self;
                void 0 === id && (self._volume = vol), id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++)(sound = self._soundById(id[i])) && (sound._volume = vol, args[2] || self._stopFade(id[i]), self._webAudio && sound._node && !sound._muted ? sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime) : sound._node && !sound._muted && (sound._node.volume = vol * Howler.volume()), self._emit("volume", sound._id));
                return self
            },
            fade: function(from, to, len, id) {
                var self = this,
                    diff = Math.abs(from - to),
                    dir = from > to ? "out" : "in",
                    stepLen = len / (diff / .01);
                if ("loaded" !== self._state) return self._queue.push({
                    event: "fade",
                    action: function() {
                        self.fade(from, to, len, id)
                    }
                }), self;
                self.volume(from, id);
                for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                    var sound = self._soundById(ids[i]);
                    if (sound) {
                        if (id || self._stopFade(ids[i]), self._webAudio && !sound._muted) {
                            var currentTime = Howler.ctx.currentTime,
                                end = currentTime + len / 1e3;
                            sound._volume = from, sound._node.gain.setValueAtTime(from, currentTime), sound._node.gain.linearRampToValueAtTime(to, end)
                        }
                        var vol = from;
                        sound._interval = setInterval(function(soundId, sound) {
                            vol += "in" === dir ? .01 : -.01, vol = Math.max(0, vol), vol = Math.min(1, vol), vol = Math.round(100 * vol) / 100, self._webAudio ? (void 0 === id && (self._volume = vol), sound._volume = vol) : self.volume(vol, soundId, !0), vol === to && (clearInterval(sound._interval), sound._interval = null, self.volume(vol, soundId), self._emit("fade", soundId))
                        }.bind(self, ids[i], sound), stepLen)
                    }
                }
                return self
            },
            _stopFade: function(id) {
                var sound = this._soundById(id);
                return sound && sound._interval && (this._webAudio && sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime), clearInterval(sound._interval), sound._interval = null, this._emit("fade", id)), this
            },
            loop: function() {
                var loop, id, sound, args = arguments;
                if (0 === args.length) return this._loop;
                if (1 === args.length) {
                    if ("boolean" != typeof args[0]) return !!(sound = this._soundById(parseInt(args[0], 10))) && sound._loop;
                    loop = args[0], this._loop = loop
                } else 2 === args.length && (loop = args[0], id = parseInt(args[1], 10));
                for (var ids = this._getSoundIds(id), i = 0; i < ids.length; i++)(sound = this._soundById(ids[i])) && (sound._loop = loop, !this._webAudio && sound._node && (sound._node.loop = loop), this._webAudio && sound._node && sound._node.bufferSource && (sound._node.bufferSource.loop = loop, loop && (sound._node.bufferSource.loopStart = sound._start || 0, sound._node.bufferSource.loopEnd = sound._stop, this.playing(ids[i]) && (void 0 === sound._node.bufferSource.stop ? sound._node.bufferSource.noteOff(0) : sound._node.bufferSource.stop(0), this._refreshBuffer(sound), void 0 === sound._node.bufferSource.start ? sound._node.bufferSource.noteGrainOn(0, this.seek(ids[i]), 86400) : sound._node.bufferSource.start(0, this.seek(ids[i]), 86400)))));
                return this
            },
            rate: function() {
                var rate, id, self = this,
                    args = arguments;
                if (0 === args.length) id = self._sounds[0]._id;
                else if (1 === args.length) {
                    self._getSoundIds().indexOf(args[0]) >= 0 ? id = parseInt(args[0], 10) : rate = parseFloat(args[0])
                } else 2 === args.length && (rate = parseFloat(args[0]), id = parseInt(args[1], 10));
                var sound;
                if ("number" != typeof rate) return (sound = self._soundById(id)) ? sound._rate : self._rate;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "rate",
                    action: function() {
                        self.rate.apply(self, args)
                    }
                }), self;
                void 0 === id && (self._rate = rate), id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++)
                    if (sound = self._soundById(id[i])) {
                        sound._rateSeek = self.seek(id[i]), sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart, sound._rate = rate, self._webAudio && sound._node && sound._node.bufferSource ? sound._node.bufferSource.playbackRate.value = rate : sound._node && (sound._node.playbackRate = rate);
                        var seek = self.seek(id[i]),
                            timeout = 1e3 * ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1e3 - seek) / Math.abs(sound._rate);
                        !self._endTimers[id[i]] && sound._paused || (self._clearTimer(id[i]), self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout)), self._emit("rate", sound._id)
                    }
                return self
            },
            seek: function() {
                var seek, id, self = this,
                    args = arguments;
                if (0 === args.length) id = self._sounds[0]._id;
                else if (1 === args.length) {
                    self._getSoundIds().indexOf(args[0]) >= 0 ? id = parseInt(args[0], 10) : (id = self._sounds[0]._id, seek = parseFloat(args[0]))
                } else 2 === args.length && (seek = parseFloat(args[0]), id = parseInt(args[1], 10));
                if (void 0 === id) return self;
                if ("loaded" !== self._state) return self._queue.push({
                    event: "seek",
                    action: function() {
                        self.seek.apply(self, args)
                    }
                }), self;
                var sound = self._soundById(id);
                if (sound) {
                    if (!("number" == typeof seek && seek >= 0)) {
                        if (self._webAudio) {
                            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0,
                                rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate))
                        }
                        return sound._node.currentTime
                    }
                    var playing = self.playing(id);
                    playing && self.pause(id, !0), sound._seek = seek, sound._ended = !1, self._clearTimer(id), playing && self.play(id, !0), !self._webAudio && sound._node && (sound._node.currentTime = seek), self._emit("seek", id)
                }
                return self
            },
            playing: function(id) {
                if ("number" == typeof id) {
                    var sound = this._soundById(id);
                    return !!sound && !sound._paused
                }
                for (var i = 0; i < this._sounds.length; i++)
                    if (!this._sounds[i]._paused) return !0;
                return !1
            },
            duration: function(id) {
                var duration = this._duration,
                    sound = this._soundById(id);
                return sound && (duration = this._sprite[sound._sprite][1] / 1e3), duration
            },
            state: function() {
                return this._state
            },
            unload: function() {
                for (var self = this, sounds = self._sounds, i = 0; i < sounds.length; i++) {
                    sounds[i]._paused || (self.stop(sounds[i]._id), self._emit("end", sounds[i]._id)), self._webAudio || (sounds[i]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", sounds[i]._node.removeEventListener("error", sounds[i]._errorFn, !1), sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, !1)), delete sounds[i]._node, self._clearTimer(sounds[i]._id);
                    var index = Howler._howls.indexOf(self);
                    index >= 0 && Howler._howls.splice(index, 1)
                }
                var remCache = !0;
                for (i = 0; i < Howler._howls.length; i++)
                    if (Howler._howls[i]._src === self._src) {
                        remCache = !1;
                        break
                    }
                return cache && remCache && delete cache[self._src], self._state = "unloaded", self._sounds = [], self = null, null
            },
            on: function(event, fn, id, once) {
                var events = this["_on" + event];
                return "function" == typeof fn && events.push(once ? {
                    id: id,
                    fn: fn,
                    once: once
                } : {
                    id: id,
                    fn: fn
                }), this
            },
            off: function(event, fn, id) {
                var events = this["_on" + event],
                    i = 0;
                if (fn) {
                    for (i = 0; i < events.length; i++)
                        if (fn === events[i].fn && id === events[i].id) {
                            events.splice(i, 1);
                            break
                        }
                } else if (event) this["_on" + event] = [];
                else {
                    var keys = Object.keys(this);
                    for (i = 0; i < keys.length; i++) 0 === keys[i].indexOf("_on") && Array.isArray(this[keys[i]]) && (this[keys[i]] = [])
                }
                return this
            },
            once: function(event, fn, id) {
                return this.on(event, fn, id, 1), this
            },
            _emit: function(event, id, msg) {
                for (var events = this["_on" + event], i = events.length - 1; i >= 0; i--) events[i].id && events[i].id !== id && "load" !== event || (setTimeout(function(fn) {
                    fn.call(this, id, msg)
                }.bind(this, events[i].fn), 0), events[i].once && this.off(event, events[i].fn, events[i].id));
                return "loaderror" === event && (this.__hasLoadError = !0), this
            },
            _loadQueue: function() {
                var self = this;
                if (self._queue.length > 0) {
                    var task = self._queue[0];
                    self.once(task.event, function() {
                        self._queue.shift(), self._loadQueue()
                    }), task.action()
                }
                return self
            },
            _ended: function(sound) {
                var sprite = sound._sprite,
                    loop = !(!sound._loop && !this._sprite[sprite][2]);
                if (this._emit("end", sound._id), this._webAudio, this._webAudio && loop) {
                    this._emit("play", sound._id), sound._seek = sound._start || 0, sound._rateSeek = 0, sound._playStart = Howler.ctx.currentTime;
                    var timeout = 1e3 * (sound._stop - sound._start) / Math.abs(sound._rate);
                    this._endTimers[sound._id] = setTimeout(this._ended.bind(this, sound), timeout)
                }
                return this._webAudio && !loop && (sound._paused = !0, sound._ended = !0, sound._seek = sound._start || 0, sound._rateSeek = 0, this._clearTimer(sound._id), this._cleanBuffer(sound._node), Howler._autoSuspend()), this._webAudio || loop || this.stop(sound._id), this
            },
            _clearTimer: function(id) {
                return this._endTimers[id] && (clearTimeout(this._endTimers[id]), delete this._endTimers[id]), this
            },
            _soundById: function(id) {
                for (var i = 0; i < this._sounds.length; i++)
                    if (id === this._sounds[i]._id) return this._sounds[i];
                return null
            },
            _inactiveSound: function() {
                this._drain();
                for (var i = 0; i < this._sounds.length; i++)
                    if (this._sounds[i]._ended) return this._sounds[i].reset();
                return new Sound(this)
            },
            _drain: function() {
                var limit = this._pool,
                    cnt = 0,
                    i = 0;
                if (!(this._sounds.length < limit)) {
                    for (i = 0; i < this._sounds.length; i++) this._sounds[i]._ended && cnt++;
                    for (i = this._sounds.length - 1; i >= 0; i--) {
                        if (cnt <= limit) return;
                        this._sounds[i]._ended && (this._webAudio && this._sounds[i]._node && this._sounds[i]._node.disconnect(0), this._sounds.splice(i, 1), cnt--)
                    }
                }
            },
            _getSoundIds: function(id) {
                if (void 0 === id) {
                    for (var ids = [], i = 0; i < this._sounds.length; i++) ids.push(this._sounds[i]._id);
                    return ids
                }
                return [id]
            },
            _refreshBuffer: function(sound) {
                return sound._node.bufferSource = Howler.ctx.createBufferSource(), sound._node.bufferSource.buffer = cache[this._src], sound._panner ? sound._node.bufferSource.connect(sound._panner) : sound._node.bufferSource.connect(sound._node), sound._node.bufferSource.loop = sound._loop, sound._loop && (sound._node.bufferSource.loopStart = sound._start || 0, sound._node.bufferSource.loopEnd = sound._stop), sound._node.bufferSource.playbackRate.value = sound._rate, this
            },
            _cleanBuffer: function(node) {
                if (this._scratchBuffer) {
                    node.bufferSource.onended = null, node.bufferSource.disconnect(0);
                    try {
                        node.bufferSource.buffer = this._scratchBuffer
                    } catch (e) {}
                }
                return node.bufferSource = null, this
            }
        };
        var Sound = function(howl) {
            this._parent = howl, this.init()
        };
        Sound.prototype = {
            init: function() {
                var parent = this._parent;
                this._muted = parent._muted, this._loop = parent._loop, this._volume = parent._volume, this._muted = parent._muted, this._rate = parent._rate, this._seek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = Math.round(Date.now() * Math.random()), parent._sounds.push(this);
                try {
                    this.create()
                } catch (e) {
                    console.log(e)
                }
                return this
            },
            create: function() {
                var parent = this._parent,
                    volume = Howler._muted || this._muted || this._parent._muted ? 0 : this._volume;
                return parent._webAudio ? (this._node = void 0 === Howler.ctx.createGain ? Howler.ctx.createGainNode() : Howler.ctx.createGain(), this._node.gain.setValueAtTime(volume, Howler.ctx.currentTime), this._node.paused = !0, this._node.connect(Howler.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(Howler._canPlayEvent, this._loadFn, !1), this._node.src = parent._src, this._node.preload = "auto", this._node.volume = volume * Howler.volume(), this._node.load()), this
            },
            reset: function() {
                var parent = this._parent;
                return this._muted = parent._muted, this._loop = parent._loop, this._volume = parent._volume, this._muted = parent._muted, this._rate = parent._rate, this._seek = 0, this._rateSeek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = Math.round(Date.now() * Math.random()), this
            },
            _errorListener: function() {
                this._node.error && 4 === this._node.error.code && (Howler.noAudio = !0), this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0), this._node.removeEventListener("error", this._errorListener, !1)
            },
            _loadListener: function() {
                var parent = this._parent;
                parent._duration = Math.ceil(10 * this._node.duration) / 10, 0 === Object.keys(parent._sprite).length && (parent._sprite = {
                    __default: [0, 1e3 * parent._duration]
                }), "loaded" !== parent._state && (parent._state = "loaded", parent._emit("load"), parent._loadQueue()), parent._autoplay && parent.play(), this._node.removeEventListener(Howler._canPlayEvent, this._loadFn, !1)
            }
        };
        var cache = {},
            loadBuffer = function(self) {
                var url = self._src;
                if (cache[url]) return self._duration = cache[url].duration, void loadSound(self);
                if (/^data:[^;]+;base64,/.test(url)) {
                    for (var data = atob(url.split(",")[1]), dataView = new Uint8Array(data.length), i = 0; i < data.length; ++i) dataView[i] = data.charCodeAt(i);
                    decodeAudioData(dataView.buffer, self)
                } else {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, !0), xhr.responseType = "arraybuffer", xhr.onload = function() {
                        var code = (xhr.status + "")[0];
                        "0" === code || "2" === code || "3" === code ? decodeAudioData(xhr.response, self) : self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".")
                    }, xhr.onerror = function() {
                        self._webAudio && (self._html5 = !0, self._webAudio = !1, self._sounds = [], delete cache[url], self.load())
                    }, safeXhrSend(xhr)
                }
            },
            safeXhrSend = function(xhr) {
                try {
                    xhr.send()
                } catch (e) {
                    xhr.onerror()
                }
            },
            decodeAudioData = function(arraybuffer, self) {
                var decoder = Howler.ctx.decodeAudioData(arraybuffer, function(buffer) {
                    buffer && self._sounds.length > 0 && (cache[self._src] = buffer, loadSound(self, buffer))
                }, function() {
                    self._emit("loaderror", null, "Decoding audio data failed.")
                });
                decoder && decoder.catch(function() {
                    console.warn("Decoding audio data failed.")
                })
            },
            loadSound = function(self, buffer) {
                buffer && !self._duration && (self._duration = buffer.duration), 0 === Object.keys(self._sprite).length && (self._sprite = {
                    __default: [0, 1e3 * self._duration]
                }), "loaded" !== self._state && (self._state = "loaded", self._emit("load"), self._loadQueue()), self._autoplay && self.play()
            },
            setupAudioContext = function() {
                Howler.noAudio = !1;
                try {
                    "undefined" != typeof AudioContext ? Howler.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? Howler.ctx = new webkitAudioContext : Howler.usingWebAudio = !1
                } catch (e) {
                    Howler.usingWebAudio = !1
                }
                if (Howler.ctx) {
                    if (!Howler.usingWebAudio)
                        if ("undefined" != typeof Audio) try {
                            void 0 === (new Audio).oncanplaythrough && (Howler._canPlayEvent = "canplay")
                        } catch (e) {
                            Howler.noAudio = !0
                        } else Howler.noAudio = !0
                } else Howler.usingWebAudio = !1, Howler.noAudio = !0;
                try {
                    (new Audio).muted && (Howler.noAudio = !0)
                } catch (e) {}
                var iOS = /iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform),
                    appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                    version = appVersion ? parseInt(appVersion[1], 10) : null;
                if (iOS && version && version < 9) {
                    var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
                    (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) && (Howler.usingWebAudio = !1)
                }
                Howler.usingWebAudio && (Howler.masterGain = void 0 === Howler.ctx.createGain ? Howler.ctx.createGainNode() : Howler.ctx.createGain(), Howler.masterGain.gain.value = 1, Howler.masterGain.connect(Howler.ctx.destination)), Howler._setup()
            };
        "function" == typeof define && define.amd && define([], function() {
            return {
                Howler: Howler,
                Howl: Howl
            }
        }), "undefined" != typeof exports && (exports.Howler = Howler, exports.Howl = Howl), "undefined" != typeof window ? (window.HowlerGlobal = HowlerGlobal, window.Howler = Howler, window.Howl = Howl, window.Sound = Sound) : "undefined" != typeof global && (global.HowlerGlobal = HowlerGlobal, global.Howler = Howler, global.Howl = Howl, global.Sound = Sound)
    }(),
    function() {
        "use strict";
        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(pan) {
            if (!this.ctx || !this.ctx.listener) return this;
            for (var i = this._howls.length - 1; i >= 0; i--) this._howls[i].stereo(pan);
            return this
        }, HowlerGlobal.prototype.pos = function(x, y, z) {
            return this.ctx && this.ctx.listener ? (y = "number" != typeof y ? this._pos[1] : y, z = "number" != typeof z ? this._pos[2] : z, "number" != typeof x ? this._pos : (this._pos = [x, y, z], this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]), this)) : this
        }, HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
            if (!this.ctx || !this.ctx.listener) return this;
            var or = this._orientation;
            return y = "number" != typeof y ? or[1] : y, z = "number" != typeof z ? or[2] : z, xUp = "number" != typeof xUp ? or[3] : xUp, yUp = "number" != typeof yUp ? or[4] : yUp, zUp = "number" != typeof zUp ? or[5] : zUp, "number" != typeof x ? or : (this._orientation = [x, y, z, xUp, yUp, zUp], this.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp), this)
        }, Howl.prototype.init = function(_super) {
            return function(o) {
                return this._orientation = o.orientation || [1, 0, 0], this._stereo = o.stereo || null, this._pos = o.pos || null, this._pannerAttr = {
                    coneInnerAngle: void 0 !== o.coneInnerAngle ? o.coneInnerAngle : 360,
                    coneOuterAngle: void 0 !== o.coneOuterAngle ? o.coneOuterAngle : 360,
                    coneOuterGain: void 0 !== o.coneOuterGain ? o.coneOuterGain : 0,
                    distanceModel: void 0 !== o.distanceModel ? o.distanceModel : "inverse",
                    maxDistance: void 0 !== o.maxDistance ? o.maxDistance : 1e4,
                    panningModel: void 0 !== o.panningModel ? o.panningModel : "HRTF",
                    refDistance: void 0 !== o.refDistance ? o.refDistance : 1,
                    rolloffFactor: void 0 !== o.rolloffFactor ? o.rolloffFactor : 1
                }, this._onstereo = o.onstereo ? [{
                    fn: o.onstereo
                }] : [], this._onpos = o.onpos ? [{
                    fn: o.onpos
                }] : [], this._onorientation = o.onorientation ? [{
                    fn: o.onorientation
                }] : [], _super.call(this, o)
            }
        }(Howl.prototype.init), Howl.prototype.stereo = function(pan, id) {
            var self = this;
            if (!self._webAudio) return self;
            if ("loaded" !== self._state) return self._queue.push({
                event: "stereo",
                action: function() {
                    self.stereo(pan, id)
                }
            }), self;
            var pannerType = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
            if (void 0 === id) {
                if ("number" != typeof pan) return self._stereo;
                self._stereo = pan, self._pos = [pan, 0, 0]
            }
            for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                var sound = self._soundById(ids[i]);
                if (sound) {
                    if ("number" != typeof pan) return sound._stereo;
                    sound._stereo = pan, sound._pos = [pan, 0, 0], sound._node && (sound._pannerAttr.panningModel = "equalpower", sound._panner && sound._panner.pan || setupPanner(sound, pannerType), "spatial" === pannerType ? sound._panner.setPosition(pan, 0, 0) : sound._panner.pan.value = pan), self._emit("stereo", sound._id)
                }
            }
            return self
        }, Howl.prototype.pos = function(x, y, z, id) {
            var self = this;
            if (!self._webAudio) return self;
            if ("loaded" !== self._state) return self._queue.push({
                event: "pos",
                action: function() {
                    self.pos(x, y, z, id)
                }
            }), self;
            if (y = "number" != typeof y ? 0 : y, z = "number" != typeof z ? -.5 : z, void 0 === id) {
                if ("number" != typeof x) return self._pos;
                self._pos = [x, y, z]
            }
            for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                var sound = self._soundById(ids[i]);
                if (sound) {
                    if ("number" != typeof x) return sound._pos;
                    sound._pos = [x, y, z], sound._node && (sound._panner && !sound._panner.pan || setupPanner(sound, "spatial"), sound._panner.setPosition(x, y, z)), self._emit("pos", sound._id)
                }
            }
            return self
        }, Howl.prototype.orientation = function(x, y, z, id) {
            var self = this;
            if (!self._webAudio) return self;
            if ("loaded" !== self._state) return self._queue.push({
                event: "orientation",
                action: function() {
                    self.orientation(x, y, z, id)
                }
            }), self;
            if (y = "number" != typeof y ? self._orientation[1] : y, z = "number" != typeof z ? self._orientation[2] : z, void 0 === id) {
                if ("number" != typeof x) return self._orientation;
                self._orientation = [x, y, z]
            }
            for (var ids = self._getSoundIds(id), i = 0; i < ids.length; i++) {
                var sound = self._soundById(ids[i]);
                if (sound) {
                    if ("number" != typeof x) return sound._orientation;
                    sound._orientation = [x, y, z], sound._node && (sound._panner || (sound._pos || (sound._pos = self._pos || [0, 0, -.5]), setupPanner(sound, "spatial")), sound._panner.setOrientation(x, y, z)), self._emit("orientation", sound._id)
                }
            }
            return self
        }, Howl.prototype.pannerAttr = function() {
            var o, id, sound, args = arguments;
            if (!this._webAudio) return this;
            if (0 === args.length) return this._pannerAttr;
            if (1 === args.length) {
                if ("object" != typeof args[0]) return (sound = this._soundById(parseInt(args[0], 10))) ? sound._pannerAttr : this._pannerAttr;
                o = args[0], void 0 === id && (this._pannerAttr = {
                    coneInnerAngle: void 0 !== o.coneInnerAngle ? o.coneInnerAngle : this._coneInnerAngle,
                    coneOuterAngle: void 0 !== o.coneOuterAngle ? o.coneOuterAngle : this._coneOuterAngle,
                    coneOuterGain: void 0 !== o.coneOuterGain ? o.coneOuterGain : this._coneOuterGain,
                    distanceModel: void 0 !== o.distanceModel ? o.distanceModel : this._distanceModel,
                    maxDistance: void 0 !== o.maxDistance ? o.maxDistance : this._maxDistance,
                    panningModel: void 0 !== o.panningModel ? o.panningModel : this._panningModel,
                    refDistance: void 0 !== o.refDistance ? o.refDistance : this._refDistance,
                    rolloffFactor: void 0 !== o.rolloffFactor ? o.rolloffFactor : this._rolloffFactor
                })
            } else 2 === args.length && (o = args[0], id = parseInt(args[1], 10));
            for (var ids = this._getSoundIds(id), i = 0; i < ids.length; i++)
                if (sound = this._soundById(ids[i])) {
                    var pa = sound._pannerAttr;
                    pa = {
                        coneInnerAngle: void 0 !== o.coneInnerAngle ? o.coneInnerAngle : pa.coneInnerAngle,
                        coneOuterAngle: void 0 !== o.coneOuterAngle ? o.coneOuterAngle : pa.coneOuterAngle,
                        coneOuterGain: void 0 !== o.coneOuterGain ? o.coneOuterGain : pa.coneOuterGain,
                        distanceModel: void 0 !== o.distanceModel ? o.distanceModel : pa.distanceModel,
                        maxDistance: void 0 !== o.maxDistance ? o.maxDistance : pa.maxDistance,
                        panningModel: void 0 !== o.panningModel ? o.panningModel : pa.panningModel,
                        refDistance: void 0 !== o.refDistance ? o.refDistance : pa.refDistance,
                        rolloffFactor: void 0 !== o.rolloffFactor ? o.rolloffFactor : pa.rolloffFactor
                    };
                    var panner = sound._panner;
                    panner ? (panner.coneInnerAngle = pa.coneInnerAngle, panner.coneOuterAngle = pa.coneOuterAngle, panner.coneOuterGain = pa.coneOuterGain, panner.distanceModel = pa.distanceModel, panner.maxDistance = pa.maxDistance, panner.panningModel = pa.panningModel, panner.refDistance = pa.refDistance, panner.rolloffFactor = pa.rolloffFactor) : (sound._pos || (sound._pos = this._pos || [0, 0, -.5]), setupPanner(sound, "spatial"))
                }
            return this
        }, Sound.prototype.init = function(_super) {
            return function() {
                var parent = this._parent;
                this._orientation = parent._orientation, this._stereo = parent._stereo, this._pos = parent._pos, this._pannerAttr = parent._pannerAttr, _super.call(this), this._stereo ? parent.stereo(this._stereo) : this._pos && parent.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
            }
        }(Sound.prototype.init), Sound.prototype.reset = function(_super) {
            return function() {
                var parent = this._parent;
                return this._orientation = parent._orientation, this._pos = parent._pos, this._pannerAttr = parent._pannerAttr, _super.call(this)
            }
        }(Sound.prototype.reset);
        var setupPanner = function(sound, type) {
            "spatial" === (type = type || "spatial") ? (sound._panner = Howler.ctx.createPanner(), sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle, sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle, sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain, sound._panner.distanceModel = sound._pannerAttr.distanceModel, sound._panner.maxDistance = sound._pannerAttr.maxDistance, sound._panner.panningModel = sound._pannerAttr.panningModel, sound._panner.refDistance = sound._pannerAttr.refDistance, sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor, sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]), sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2])) : (sound._panner = Howler.ctx.createStereoPanner(), sound._panner.pan.value = sound._stereo), sound._panner.connect(sound._node), sound._paused || sound._parent.pause(sound._id, !0).play(sound._id)
        };
        Object.defineProperty(HowlerGlobal.prototype, "_mobileUnloaded", {
            get: function() {
                return !!/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform) || this.__mobileUnloaded
            },
            set: function(val) {
                this.__mobileUnloaded = val
            }
        })
    }(),
    function() {
        if (!(Howl && Howl.prototype && Howl.prototype.play && Howler)) return console.error("Howler or Howl are not globally available");
        var events = ["touchend", "keypress", "click"],
            superStop = Howl.prototype.stop;
        Howl.prototype.stop = function(id, internal) {
            return "loaded" === this._state && this._suspendedAt && delete this._suspendedAt, superStop.call(this, id, internal)
        };
        var _resume = function() {
            events.forEach(function(event) {
                document.removeEventListener(event, _resume, !0)
            }), Howler && Howler.ctx && "suspended" === Howler.ctx.state && Howler.ctx.resume().then(function() {
                Howler._howls.forEach(function(howl) {
                    if (howl._suspendedAt) {
                        var seek = (Date.now() - howl._suspendedAt) / 1e3;
                        if (howl._loop || seek < howl._duration) return howl.seek(seek).play()
                    }
                })
            })
        };
        events.forEach(function(event) {
            document.addEventListener(event, _resume, !0)
        })
    }(),
    function() {
        "use strict";
        Howl.prototype.fadeIn = function(duration) {
            return this.fadeTo(duration, 1), this
        }, Howl.prototype.fadeOut = function(duration, autoStop) {
            return void 0 === autoStop && (autoStop = !0), this.fadeTo(duration, 0, autoStop ? this.stop.bind(this) : null), this
        }, Howl.prototype.fadeTo = function(duration, volume, callback) {
            void 0 === duration && (duration = .5), void 0 === volume && (volume = .5), this.__tween = {
                _volume: this.volume()
            };
            var syncTime = duration * Math.abs(this.__tween._volume - volume);
            return TweenMax.to(this.__tween, syncTime, {
                _volume: volume,
                onUpdate: function() {
                    this.volume(this.__tween._volume)
                }.bind(this),
                onComplete: callback || null
            }), this
        }, Howl.prototype.play = function(_super) {
            return function() {
                var interval = this.__limitInterval || 0;
                return null === arguments[0] && (arguments[0] = void 0), void 0 !== arguments[1] && (interval = arguments[1], arguments[1] = void 0, Howl.__warningShown || (Howl.__warningShown = !0, console.warn("DEPRECATED: This usage of .play(null, interval) is deprecated! Please use .limitInterval(interval).play() instead"))), Howler && Howler.ctx && "suspended" === Howler.ctx.state ? (this._suspendedAt = Date.now(), this) : this.__lastPlayedAt && this.__lastSoundId && Date.now() - this.__lastPlayedAt < interval ? this : (this.__lastSoundId = _super.apply(this, arguments), this.__lastPlayedAt = Date.now(), this)
            }
        }(Howl.prototype.play), Howl.prototype.limitInterval = function(interval) {
            return this.__limitInterval = interval, this
        }, Howl.prototype.getSoundId = function(duration, autoStop) {
            return this.__lastSoundId
        };
        Howl.prototype.delay = function(secs) {
            return this._delayed && (console.warn("Sorry, but multiple delays are not supported yet, so I will just kill the previous one"), this.clearDelay()), this._delayed = !0, this._delayCallbacks = [], this._delayTimeout = _.wait(secs, function() {
                var callbacks = this._delayCallbacks;
                this.clearDelay(), callbacks.forEach(function(callback) {
                    callback()
                })
            }, this), this
        }, Howl.prototype.clearDelay = function() {
            this._delayTimeout && _.clearWait(this._delayTimeout), this._delayed = !1, this._delayCallbacks = null, this._delayTimeout = null
        }, ["play", "stop", "pause", "seek", "loop", "volume", "mute", "fade", "fadeIn", "fadeOut", "fadeTo", "delay", "limit"].forEach(function(method) {
            Howl.prototype[method] = function(_super) {
                return function() {
                    if (this.__hasLoadError) return this.__warningSkipShown || (this.__warningSkipShown = !0, console.warn("This sound wasn't loaded successfuly, so will be skipped:", JSON.stringify(this._src))), this;
                    if (this._delayed) {
                        var me = this,
                            args = arguments;
                        return this._delayCallbacks.push(function() {
                            _super.apply(me, args)
                        }), this
                    }
                    return _super.apply(this, arguments)
                }
            }(Howl.prototype[method])
        }), HowlerGlobal.prototype.resumeAll = function() {
            for (var self = this || Howler, i = 0; i < self._howls.length; i++)
                for (var ids = self._howls[i]._getSoundIds(), j = 0; j < ids.length; j++) {
                    var sound = self._howls[i]._soundById(ids[j]);
                    sound && sound._wasPaused && (self._howls[i].play(sound._id), sound._wasPaused = !1)
                }
            return self
        }, HowlerGlobal.prototype.pauseAll = function() {
            for (var self = this || Howler, i = 0; i < self._howls.length; i++)
                for (var ids = self._howls[i]._getSoundIds(), j = 0; j < ids.length; j++) {
                    var sound = self._howls[i]._soundById(ids[j]),
                        isPlaying = sound && !sound._paused && !sound._ended;
                    sound && isPlaying && (sound._wasPaused = !0, self._howls[i].pause(sound._id))
                }
            return self
        }, Sound.prototype.setRate = function(rate) {
            var parent = this._parent;
            return this._rate = rate, parent._webAudio && this._node && this._node.bufferSource && (this._node.bufferSource.playbackRate.value = rate), this
        }, Sound.prototype.getRate = function() {
            var parent = this._parent,
                rate = 1;
            return this._rate && (rate = this._rate), parent._webAudio && this._node && this._node.bufferSource && (rate = this._node.bufferSource.playbackRate.value), rate
        }, Howl.prototype.setRate = function(rate) {
            for (var ids = this._getSoundIds(), j = 0; j < ids.length; j++) {
                var sound = this._soundById(ids[j]);
                sound && sound.setRate(rate)
            }
            return this._rate = rate, this
        }, Howl.prototype.restoreRate = function() {
            for (var ids = this._getSoundIds(), j = 0; j < ids.length; j++) {
                var sound = this._soundById(ids[j]);
                sound && sound.setRate(1)
            }
            return this._rate = 1, this
        }, HowlerGlobal.prototype.setRate = function(rate) {
            for (var self = this || Howler, i = 0; i < self._howls.length; i++) self._howls[i].setRate(rate);
            return self
        }, HowlerGlobal.prototype.restoreRate = function() {
            for (var self = this || Howler, i = 0; i < self._howls.length; i++) self._howls[i].restoreRate();
            return self
        }
    }();