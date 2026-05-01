import * as a from "react";
import Gn, {
    createContext as yp,
    createElement as Or,
    forwardRef as ra,
    useContext as bp,
    useEffect as Rp,
    useLayoutEffect as Ep,
    useState as $l
} from "react";
import * as Jt from "react-dom";

var ro = { exports: {} }, br = {};
var Ul;
function xp() {
  if (Ul) return br;
  Ul = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, o, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), o.key !== void 0 && (l = "" + o.key), "key" in o) {
      s = {};
      for (var i in o)
        i !== "key" && (s[i] = o[i]);
    } else s = o;
    return o = s.ref, {
      $$typeof: t,
      type: r,
      key: l,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return br.Fragment = e, br.jsx = n, br.jsxs = n, br;
}
var yr = {};
var Wl;
function vp() {
  return Wl || (Wl = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === _ ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case b:
          return "Fragment";
        case v:
          return "Profiler";
        case E:
          return "StrictMode";
        case R:
          return "Suspense";
        case S:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case y:
            return "Portal";
          case C:
            return T.displayName || "Context";
          case m:
            return (T._context.displayName || "Context") + ".Consumer";
          case x:
            var D = T.render;
            return T = T.displayName, T || (T = D.displayName || D.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case I:
            return D = T.displayName || null, D !== null ? D : t(T.type) || "Memo";
          case M:
            D = T._payload, T = T._init;
            try {
              return t(T(D));
            } catch {
            }
        }
      return null;
    }
    function e(T) {
      return "" + T;
    }
    function n(T) {
      try {
        e(T);
        var D = !1;
      } catch {
        D = !0;
      }
      if (D) {
        D = console;
        var $ = D.error, J = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return $.call(
          D,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          J
        ), e(T);
      }
    }
    function r(T) {
      if (T === b) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === M)
        return "<...>";
      try {
        var D = t(T);
        return D ? "<" + D + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var T = L.A;
      return T === null ? null : T.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(T) {
      if (N.call(T, "key")) {
        var D = Object.getOwnPropertyDescriptor(T, "key").get;
        if (D && D.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function i(T, D) {
      function $() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          D
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: $,
        configurable: !0
      });
    }
    function f() {
      var T = t(this.type);
      return V[T] || (V[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function u(T, D, $, J, Z, q) {
      var B = $.ref;
      return T = {
        $$typeof: d,
        type: T,
        key: D,
        props: $,
        _owner: J
      }, (B !== void 0 ? B : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function c(T, D, $, J, Z, q) {
      var B = D.children;
      if (B !== void 0)
        if (J)
          if (P(B)) {
            for (J = 0; J < B.length; J++)
              p(B[J]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(B);
      if (N.call(D, "key")) {
        B = t(T);
        var Y = Object.keys(D).filter(function(re) {
          return re !== "key";
        });
        J = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", U[B + J] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          J,
          B,
          Y,
          B
        ), U[B + J] = !0);
      }
      if (B = null, $ !== void 0 && (n($), B = "" + $), l(D) && (n(D.key), B = "" + D.key), "key" in D) {
        $ = {};
        for (var Q in D)
          Q !== "key" && ($[Q] = D[Q]);
      } else $ = D;
      return B && i(
        $,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), u(
        T,
        B,
        $,
        o(),
        Z,
        q
      );
    }
    function p(T) {
      h(T) ? T._store && (T._store.validated = 1) : typeof T == "object" && T !== null && T.$$typeof === M && (T._payload.status === "fulfilled" ? h(T._payload.value) && T._payload.value._store && (T._payload.value._store.validated = 1) : T._store && (T._store.validated = 1));
    }
    function h(T) {
      return typeof T == "object" && T !== null && T.$$typeof === d;
    }
    var g = Gn, d = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), b = /* @__PURE__ */ Symbol.for("react.fragment"), E = /* @__PURE__ */ Symbol.for("react.strict_mode"), v = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), C = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.client.reference"), L = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, P = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var O, V = {}, k = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), H = w(r(s)), U = {};
    yr.Fragment = b, yr.jsx = function(T, D, $) {
      var J = 1e4 > L.recentlyCreatedOwnerStacks++;
      return c(
        T,
        D,
        $,
        !1,
        J ? Error("react-stack-top-frame") : k,
        J ? w(r(T)) : H
      );
    }, yr.jsxs = function(T, D, $) {
      var J = 1e4 > L.recentlyCreatedOwnerStacks++;
      return c(
        T,
        D,
        $,
        !0,
        J ? Error("react-stack-top-frame") : k,
        J ? w(r(T)) : H
      );
    };
  })()), yr;
}
var Kl;
function Cp() {
  return Kl || (Kl = 1, process.env.NODE_ENV === "production" ? ro.exports = xp() : ro.exports = vp()), ro.exports;
}
var X = Cp(), oo = { exports: {} }, Ms = {};
var Gl;
function Sp() {
  if (Gl) return Ms;
  Gl = 1;
  var t = Gn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return Ms.c = function(e) {
    return t.H.useMemoCache(e);
  }, Ms;
}
var _s = {};
var Yl;
function Ip() {
  return Yl || (Yl = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Gn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    _s.c = function(e) {
      var n = t.H;
      return n === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), n.useMemoCache(e);
    };
  })()), _s;
}
var zl;
function Tp() {
  return zl || (zl = 1, process.env.NODE_ENV === "production" ? oo.exports = Sp() : oo.exports = Ip()), oo.exports;
}
var Zt = Tp();
function es() {
  return typeof window < "u";
}
function It(t) {
  return bi(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function it(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function dn(t) {
  var e;
  return (e = (bi(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function bi(t) {
  return es() ? t instanceof Node || t instanceof it(t).Node : !1;
}
function We(t) {
  return es() ? t instanceof Element || t instanceof it(t).Element : !1;
}
function Qe(t) {
  return es() ? t instanceof HTMLElement || t instanceof it(t).HTMLElement : !1;
}
function ur(t) {
  return !es() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof it(t).ShadowRoot;
}
function Mn(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = _t(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && o !== "inline" && o !== "contents";
}
function wp(t) {
  return /^(table|td|th)$/.test(It(t));
}
function ts(t) {
  try {
    if (t.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return t.matches(":modal");
  } catch {
    return !1;
  }
}
const Pp = /transform|translate|scale|rotate|perspective|filter/, Np = /paint|layout|strict|content/, Bn = (t) => !!t && t !== "none";
let As;
function yi(t) {
  const e = We(t) ? _t(t) : t;
  return Bn(e.transform) || Bn(e.translate) || Bn(e.scale) || Bn(e.rotate) || Bn(e.perspective) || !ns() && (Bn(e.backdropFilter) || Bn(e.filter)) || Pp.test(e.willChange || "") || Np.test(e.contain || "");
}
function Op(t) {
  let e = fn(t);
  for (; Qe(e) && !sn(e); ) {
    if (yi(e))
      return e;
    if (ts(e))
      return null;
    e = fn(e);
  }
  return null;
}
function ns() {
  return As == null && (As = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), As;
}
function sn(t) {
  return /^(html|body|#document)$/.test(It(t));
}
function _t(t) {
  return it(t).getComputedStyle(t);
}
function rs(t) {
  return We(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function fn(t) {
  if (It(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    ur(t) && t.host || // Fallback.
    dn(t)
  );
  return ur(e) ? e.host : e;
}
function oa(t) {
  const e = fn(t);
  return sn(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Qe(e) && Mn(e) ? e : oa(e);
}
function Mr(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = oa(t), s = o === ((r = t.ownerDocument) == null ? void 0 : r.body), l = it(o);
  if (s) {
    const i = Qs(l);
    return e.concat(l, l.visualViewport || [], Mn(o) ? o : [], i && n ? Mr(i) : []);
  } else
    return e.concat(o, Mr(o, [], n));
}
function Qs(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
const ql = {};
function at(t, e) {
  const n = a.useRef(ql);
  return n.current === ql && (n.current = t(e)), n;
}
const ks = a[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)], Mp = (
  // React 17 doesn't have useInsertionEffect.
  ks && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  ks !== a.useLayoutEffect ? ks : (t) => t()
);
function le(t) {
  const e = at(_p).current;
  return e.next = t, Mp(e.effect), e.trampoline;
}
function _p() {
  const t = {
    next: void 0,
    callback: Ap,
    trampoline: (...e) => t.callback?.(...e),
    effect: () => {
      t.callback = t.next;
    }
  };
  return t;
}
function Ap() {
  if (process.env.NODE_ENV !== "production")
    throw (
      /* minify-error-disabled */
      new Error("Base UI: Cannot call an event handler while rendering.")
    );
}
let ei;
process.env.NODE_ENV !== "production" && (ei = /* @__PURE__ */ new Set());
function fr(...t) {
  if (process.env.NODE_ENV !== "production") {
    const e = t.join(" ");
    ei.has(e) || (ei.add(e), console.error(`Base UI: ${e}`));
  }
}
const _r = {
  ...a
}, kp = () => {
}, pe = typeof document < "u" ? a.useLayoutEffect : kp;
function ti(t, e) {
  if (t && !e)
    return t;
  if (!t && e)
    return e;
  if (t || e)
    return {
      ...t,
      ...e
    };
}
const Ei = {};
function At(t, e, n, r, o) {
  if (!n && !r && !o && !t)
    return Do(e);
  let s = Do(t);
  return e && (s = Sr(s, e)), n && (s = Sr(s, n)), r && (s = Sr(s, r)), o && (s = Sr(s, o)), s;
}
function Vp(t) {
  if (t.length === 0)
    return Ei;
  if (t.length === 1)
    return Do(t[0]);
  let e = Do(t[0]);
  for (let n = 1; n < t.length; n += 1)
    e = Sr(e, t[n]);
  return e;
}
function Do(t) {
  return Ri(t) ? {
    ...ia(t, Ei)
  } : Dp(t);
}
function Sr(t, e) {
  return Ri(e) ? ia(e, t) : Fp(t, e);
}
function Dp(t) {
  const e = {
    ...t
  };
  for (const n in e) {
    const r = e[n];
    sa(n, r) && (e[n] = la(r));
  }
  return e;
}
function Fp(t, e) {
  if (!e)
    return t;
  for (const n in e) {
    const r = e[n];
    switch (n) {
      case "style": {
        t[n] = ti(t.style, r);
        break;
      }
      case "className": {
        t[n] = ca(t.className, r);
        break;
      }
      default:
        sa(n, r) ? t[n] = Lp(t[n], r) : t[n] = r;
    }
  }
  return t;
}
function sa(t, e) {
  const n = t.charCodeAt(0), r = t.charCodeAt(1), o = t.charCodeAt(2);
  return n === 111 && r === 110 && o >= 65 && o <= 90 && (typeof e == "function" || typeof e > "u");
}
function Ri(t) {
  return typeof t == "function";
}
function ia(t, e) {
  return Ri(t) ? t(e) : t ?? Ei;
}
function Lp(t, e) {
  return e ? t ? (...n) => {
    const r = n[0];
    if (aa(r)) {
      const s = r;
      Fo(s);
      const l = e(...n);
      return s.baseUIHandlerPrevented || t?.(...n), l;
    }
    const o = e(...n);
    return t?.(...n), o;
  } : la(e) : t;
}
function la(t) {
  return t && ((...e) => {
    const n = e[0];
    return aa(n) && Fo(n), t(...e);
  });
}
function Fo(t) {
  return t.preventBaseUIHandler = () => {
    t.baseUIHandlerPrevented = !0;
  }, t;
}
function ca(t, e) {
  return e ? t ? e + " " + t : e : t;
}
function aa(t) {
  return t != null && typeof t == "object" && "nativeEvent" in t;
}
function Bp(t, e) {
  return function(r, ...o) {
    const s = new URL(t);
    return s.searchParams.set("code", r.toString()), o.forEach((l) => s.searchParams.append("args[]", l)), `${e} error #${r}; visit ${s} for the full message.`;
  };
}
const ot = Bp("https://base-ui.com/production-error", "Base UI"), xi = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (xi.displayName = "CompositeRootContext");
function vi(t = !1) {
  const e = a.useContext(xi);
  if (e === void 0 && !t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : ot(16));
  return e;
}
function Hp(t) {
  const {
    focusableWhenDisabled: e,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: s
  } = t, l = r && e !== !1, i = r && e === !1;
  return {
    props: a.useMemo(() => {
      const u = {
        // allow Tabbing away from focusableWhenDisabled elements
        onKeyDown(c) {
          n && e && c.key !== "Tab" && c.preventDefault();
        }
      };
      return r || (u.tabIndex = o, !s && n && (u.tabIndex = e ? o : -1)), (s && (e || l) || !s && n) && (u["aria-disabled"] = n), s && (!e || i) && (u.disabled = n), u;
    }, [r, n, e, l, i, s, o])
  };
}
function Lt(t = {}) {
  const {
    disabled: e = !1,
    focusableWhenDisabled: n,
    tabIndex: r = 0,
    native: o = !0,
    composite: s
  } = t, l = a.useRef(null), i = vi(!0), f = s ?? i !== void 0, {
    props: u
  } = Hp({
    focusableWhenDisabled: n,
    disabled: e,
    composite: f,
    tabIndex: r,
    isNativeButton: o
  });
  process.env.NODE_ENV !== "production" && a.useEffect(() => {
    if (!l.current)
      return;
    const g = so(l.current);
    if (o) {
      if (!g) {
        const d = _r.captureOwnerStack?.() || "";
        fr(`A component that acts as a button expected a native <button> because the \`nativeButton\` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the \`render\` prop, or set \`nativeButton\` to \`false\`.${d}`);
      }
    } else if (g) {
      const d = _r.captureOwnerStack?.() || "";
      fr(`A component that acts as a button expected a non-<button> because the \`nativeButton\` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as \`role\` or \`aria-disabled\`). Use a non-<button> in the \`render\` prop, or set \`nativeButton\` to \`true\`.${d}`);
    }
  }, [o]);
  const c = a.useCallback(() => {
    const g = l.current;
    so(g) && f && e && u.disabled === void 0 && g.disabled && (g.disabled = !1);
  }, [e, u.disabled, f]);
  pe(c, [c]);
  const p = a.useCallback((g = {}) => {
    const {
      onClick: d,
      onMouseDown: y,
      onKeyUp: b,
      onKeyDown: E,
      onPointerDown: v,
      ...m
    } = g;
    return At({
      type: o ? "button" : void 0,
      onClick(x) {
        if (e) {
          x.preventDefault();
          return;
        }
        d?.(x);
      },
      onMouseDown(x) {
        e || y?.(x);
      },
      onKeyDown(x) {
        if (e || (Fo(x), E?.(x), x.baseUIHandlerPrevented))
          return;
        const R = x.target === x.currentTarget, S = x.currentTarget, I = so(S), M = !o && jp(S), A = R && (o ? I : !M), _ = x.key === "Enter", L = x.key === " ", N = S.getAttribute("role"), P = N?.startsWith("menuitem") || N === "option" || N === "gridcell";
        if (R && f && L) {
          if (x.defaultPrevented && P)
            return;
          x.preventDefault(), M || o && I ? (S.click(), x.preventBaseUIHandler()) : A && (d?.(x), x.preventBaseUIHandler());
          return;
        }
        A && (!o && (L || _) && x.preventDefault(), !o && _ && d?.(x));
      },
      onKeyUp(x) {
        if (!e) {
          if (Fo(x), b?.(x), x.target === x.currentTarget && o && f && so(x.currentTarget) && x.key === " ") {
            x.preventDefault();
            return;
          }
          x.baseUIHandlerPrevented || x.target === x.currentTarget && !o && !f && x.key === " " && d?.(x);
        }
      },
      onPointerDown(x) {
        if (e) {
          x.preventDefault();
          return;
        }
        v?.(x);
      }
    }, o ? void 0 : {
      role: "button"
    }, u, m);
  }, [e, u, f, o]), h = le((g) => {
    l.current = g, c();
  });
  return {
    getButtonProps: p,
    buttonRef: h
  };
}
function so(t) {
  return Qe(t) && t.tagName === "BUTTON";
}
function jp(t) {
  return !!(t?.tagName === "A" && t?.href);
}
function Tt(t, e, n, r) {
  const o = at(ua).current;
  return Up(o, t, e, n, r) && fa(o, [t, e, n, r]), o.callback;
}
function $p(t) {
  const e = at(ua).current;
  return Wp(e, t) && fa(e, t), e.callback;
}
function ua() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function Up(t, e, n, r, o) {
  return t.refs[0] !== e || t.refs[1] !== n || t.refs[2] !== r || t.refs[3] !== o;
}
function Wp(t, e) {
  return t.refs.length !== e.length || t.refs.some((n, r) => n !== e[r]);
}
function fa(t, e) {
  if (t.refs = e, e.every((n) => n == null)) {
    t.callback = null;
    return;
  }
  t.callback = (n) => {
    if (t.cleanup && (t.cleanup(), t.cleanup = null), n != null) {
      const r = Array(e.length).fill(null);
      for (let o = 0; o < e.length; o += 1) {
        const s = e[o];
        if (s != null)
          switch (typeof s) {
            case "function": {
              const l = s(n);
              typeof l == "function" && (r[o] = l);
              break;
            }
            case "object": {
              s.current = n;
              break;
            }
          }
      }
      t.cleanup = () => {
        for (let o = 0; o < e.length; o += 1) {
          const s = e[o];
          if (s != null)
            switch (typeof s) {
              case "function": {
                const l = r[o];
                typeof l == "function" ? l() : s(null);
                break;
              }
              case "object": {
                s.current = null;
                break;
              }
            }
        }
      };
    }
  };
}
const Kp = parseInt(a.version, 10);
function Ci(t) {
  return Kp >= t;
}
function Xl(t) {
  if (!/* @__PURE__ */ a.isValidElement(t))
    return null;
  const e = t, n = e.props;
  return (Ci(19) ? n?.ref : e.ref) ?? null;
}
let ni;
process.env.NODE_ENV !== "production" && (ni = /* @__PURE__ */ new Set());
function da(...t) {
  if (process.env.NODE_ENV !== "production") {
    const e = t.join(" ");
    ni.has(e) || (ni.add(e), console.warn(`Base UI: ${e}`));
  }
}
function Ze() {
}
const zt = Object.freeze([]), et = Object.freeze({});
function Gp(t, e) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (e?.hasOwnProperty(r)) {
      const s = e[r](o);
      s != null && Object.assign(n, s);
      continue;
    }
    o === !0 ? n[`data-${r.toLowerCase()}`] = "" : o && (n[`data-${r.toLowerCase()}`] = o.toString());
  }
  return n;
}
function Yp(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function zp(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Be(t, e, n = {}) {
  const r = e.render, o = qp(e, n);
  if (n.enabled === !1)
    return null;
  const s = n.state ?? et;
  return em(t, r, o, s);
}
function qp(t, e = {}) {
  const {
    className: n,
    style: r,
    render: o
  } = t, {
    state: s = et,
    ref: l,
    props: i,
    stateAttributesMapping: f,
    enabled: u = !0
  } = e, c = u ? Yp(n, s) : void 0, p = u ? zp(r, s) : void 0, h = u ? Gp(s, f) : et, g = u && i ? Xp(i) : void 0, d = u ? ti(h, g) ?? {} : et;
  return typeof document < "u" && (u ? Array.isArray(l) ? d.ref = $p([d.ref, Xl(o), ...l]) : d.ref = Tt(d.ref, Xl(o), l) : Tt(null, null)), u ? (c !== void 0 && (d.className = ca(d.className, c)), p !== void 0 && (d.style = ti(d.style, p)), d) : et;
}
function Xp(t) {
  return Array.isArray(t) ? Vp(t) : At(void 0, t);
}
const Jp = /* @__PURE__ */ Symbol.for("react.lazy"), Zp = /^[A-Z][A-Za-z0-9$]*$/, Qp = /[a-z]/;
function em(t, e, n, r) {
  if (e) {
    if (typeof e == "function")
      return process.env.NODE_ENV !== "production" && tm(e), e(n, r);
    const o = At(n, e.props);
    o.ref = n.ref;
    let s = e;
    if (s?.$$typeof === Jp && (s = a.Children.toArray(e)[0]), process.env.NODE_ENV !== "production" && !/* @__PURE__ */ a.isValidElement(s))
      throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join(`
`));
    return /* @__PURE__ */ a.cloneElement(s, o);
  }
  if (t && typeof t == "string")
    return nm(t, n);
  throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: Render element or function are not defined." : ot(8));
}
function tm(t) {
  const e = t.name;
  e.length !== 0 && Zp.test(e) && Qp.test(e) && da(`The \`render\` prop received a function named \`${e}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function nm(t, e) {
  return t === "button" ? /* @__PURE__ */ Or("button", {
    type: "button",
    ...e,
    key: e.key
  }) : t === "img" ? /* @__PURE__ */ Or("img", {
    alt: "",
    ...e,
    key: e.key
  }) : /* @__PURE__ */ a.createElement(t, e);
}
const pa = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    disabled: s = !1,
    focusableWhenDisabled: l = !1,
    nativeButton: i = !0,
    style: f,
    ...u
  } = e, {
    getButtonProps: c,
    buttonRef: p
  } = Lt({
    disabled: s,
    focusableWhenDisabled: l,
    native: i
  });
  return Be("button", e, {
    state: {
      disabled: s
    },
    ref: [n, p],
    props: [u, c]
  });
});
process.env.NODE_ENV !== "production" && (pa.displayName = "Button");
function ma(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = ma(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Fe() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = ma(t)) && (r && (r += " "), r += e);
  return r;
}
const rm = "_Button_e2son_12", om = "_TextForm_e2son_51", sm = "_SizeSmallText_e2son_59", im = "_SizeDefaultText_e2son_63", lm = "_TypePrimary_e2son_75", cm = "_TypeSecondary_e2son_104", am = "_TypeImportant_e2son_115", um = "_TypeTooltip_e2son_126", fm = "_TypeServer_e2son_137", dm = "_TypeServerSecondary_e2son_147", pm = "_TypeNerf_e2son_157", mm = "_TypeNerfSecondary_e2son_167", gm = "_TypeText_e2son_177", hm = "_TypeWebinar_e2son_187", Ot = {
  Button: rm,
  TextForm: om,
  SizeSmallText: sm,
  SizeDefaultText: im,
  TypePrimary: lm,
  TypeSecondary: cm,
  TypeImportant: am,
  TypeTooltip: um,
  TypeServer: fm,
  TypeServerSecondary: dm,
  TypeNerf: pm,
  TypeNerfSecondary: mm,
  TypeText: gm,
  TypeWebinar: hm
};
function ga(t) {
  const e = Zt.c(14);
  let n, r, o, s, l, i;
  if (e[0] !== t) {
    const {
      children: u,
      styleType: c,
      size: p,
      leftIcon: h,
      rightIcon: g,
      ...d
    } = t;
    o = u, s = h, l = g;
    const y = c === void 0 ? "primary" : c, b = p === void 0 ? "default" : p, {
      className: E,
      ...v
    } = d;
    r = v;
    const m = b === "default" ? Ot.SizeDefaultText : Ot.SizeSmallText;
    n = pa, i = Fe(Ot.Button, m, Ot.TextForm, bm(y), E), e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = s, e[5] = l, e[6] = i;
  } else
    n = e[1], r = e[2], o = e[3], s = e[4], l = e[5], i = e[6];
  let f;
  return e[7] !== n || e[8] !== r || e[9] !== o || e[10] !== s || e[11] !== l || e[12] !== i ? (f = /* @__PURE__ */ X.jsxs(n, { className: i, ...r, children: [
    s,
    o,
    l
  ] }), e[7] = n, e[8] = r, e[9] = o, e[10] = s, e[11] = l, e[12] = i, e[13] = f) : f = e[13], f;
}
function bm(t) {
  switch (t) {
    case "primary":
      return Ot.TypePrimary;
    case "secondary":
      return Ot.TypeSecondary;
    case "important":
      return Ot.TypeImportant;
    case "tooltip":
      return Ot.TypeTooltip;
    case "webinar":
      return Ot.TypeWebinar;
    case "server":
      return Ot.TypeServer;
    case "serverSecondary":
      return Ot.TypeServerSecondary;
    case "nerf":
      return Ot.TypeNerf;
    case "nerfSecondary":
      return Ot.TypeNerfSecondary;
    case "text":
      return Ot.TypeText;
  }
}
function Xt({
  controlled: t,
  default: e,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = a.useRef(t !== void 0), [s, l] = a.useState(e), i = o ? t : s;
  if (process.env.NODE_ENV !== "production") {
    a.useEffect(() => {
      o !== (t !== void 0) && fr([`A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, t]);
    const {
      current: u
    } = a.useRef(e);
    a.useEffect(() => {
      !o && Jl(u) !== Jl(e) && fr([`A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [e]);
  }
  const f = a.useCallback((u) => {
    o || l(u);
  }, []);
  return [i, f];
}
function Jl(t) {
  let e = 0;
  const n = /* @__PURE__ */ new WeakMap();
  try {
    return JSON.stringify(t, function(s, l) {
      if (!(s === "_owner" && this != null && typeof this == "object" && "$$typeof" in this)) {
        if (typeof l == "bigint")
          return `__bigint__:${l}`;
        if (l !== null && typeof l == "object") {
          const i = n.get(l);
          if (i !== void 0)
            return `__object__:${i}`;
          n.set(l, e), e += 1;
        }
        return l;
      }
    }) ?? `__top__:${typeof t}`;
  } catch {
    return "__unserializable__";
  }
}
const ha = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
}, yn = {
  ...ha,
  position: "fixed",
  top: 0,
  left: 0
}, Yn = {
  ...ha,
  position: "absolute"
};
let Zl = /* @__PURE__ */ (function(t) {
  return t.checked = "data-checked", t.unchecked = "data-unchecked", t.indeterminate = "data-indeterminate", t.disabled = "data-disabled", t.readonly = "data-readonly", t.required = "data-required", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.filled = "data-filled", t.focused = "data-focused", t;
})({}), Ql = /* @__PURE__ */ (function(t) {
  return t.disabled = "data-disabled", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.filled = "data-filled", t.focused = "data-focused", t;
})({});
const os = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: null,
  valueMissing: !1
}, sr = {
  valid: null,
  touched: !1,
  dirty: !1,
  filled: !1,
  focused: !1
}, ym = {
  disabled: !1,
  ...sr
}, wt = {
  valid(t) {
    return t === null ? null : t ? {
      [Ql.valid]: ""
    } : {
      [Ql.invalid]: ""
    };
  }
};
function ba(t) {
  return a.useMemo(() => ({
    checked(e) {
      return t.indeterminate ? {} : e ? {
        [Zl.checked]: ""
      } : {
        [Zl.unchecked]: ""
      };
    },
    ...wt
  }), [t.indeterminate]);
}
let ec = 0;
function Em(t, e = "mui") {
  const [n, r] = a.useState(t), o = t || n;
  return a.useEffect(() => {
    n == null && (ec += 1, r(`${e}-${ec}`));
  }, [n, e]), o;
}
const tc = _r.useId;
function zn(t, e) {
  if (tc !== void 0) {
    const n = tc();
    return t ?? (e ? `${e}-${n}` : n);
  }
  return Em(t, e);
}
function Et(t) {
  return zn(t, "base-ui");
}
const Si = /* @__PURE__ */ a.createContext({
  invalid: void 0,
  name: void 0,
  validityData: {
    state: os,
    errors: [],
    error: "",
    value: "",
    initialValue: null
  },
  setValidityData: Ze,
  disabled: void 0,
  touched: sr.touched,
  setTouched: Ze,
  dirty: sr.dirty,
  setDirty: Ze,
  filled: sr.filled,
  setFilled: Ze,
  focused: sr.focused,
  setFocused: Ze,
  validate: () => null,
  validationMode: "onSubmit",
  validationDebounceTime: 0,
  shouldValidateOnChange: () => !1,
  state: ym,
  markedDirtyRef: {
    current: !1
  },
  registerFieldControl: Ze,
  validation: {
    getValidationProps: (t = et) => t,
    getInputValidationProps: (t = et) => t,
    inputRef: {
      current: null
    },
    commit: async () => {
    }
  }
});
process.env.NODE_ENV !== "production" && (Si.displayName = "FieldRootContext");
function mt(t = !0) {
  const e = a.useContext(Si);
  if (e.setValidityData === Ze && !t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>." : ot(28));
  return e;
}
function _n(t, e) {
  const {
    enabled: n = !0,
    getValue: r,
    id: o,
    value: s
  } = e, {
    registerFieldControl: l
  } = mt(), i = a.useRef(null);
  i.current || (i.current = /* @__PURE__ */ Symbol()), pe(() => {
    const f = i.current;
    if (!(!f || !n))
      return l(f, {
        controlRef: t,
        getValue: r,
        id: o,
        value: s
      }), () => {
        l(f, void 0);
      };
  }, [t, n, r, o, l, s]);
}
const ya = /* @__PURE__ */ a.createContext({
  disabled: !1
});
process.env.NODE_ENV !== "production" && (ya.displayName = "FieldItemContext");
function Ea() {
  return a.useContext(ya);
}
const Ra = /* @__PURE__ */ a.createContext({
  formRef: {
    current: {
      fields: /* @__PURE__ */ new Map()
    }
  },
  errors: {},
  clearErrors: Ze,
  validationMode: "onSubmit",
  submitAttemptedRef: {
    current: !1
  }
});
process.env.NODE_ENV !== "production" && (Ra.displayName = "FormContext");
function Qt() {
  return a.useContext(Ra);
}
const Ii = /* @__PURE__ */ a.createContext({
  controlId: void 0,
  registerControlId: Ze,
  labelId: void 0,
  setLabelId: Ze,
  messageIds: [],
  setMessageIds: Ze,
  getDescriptionProps: (t) => t
});
process.env.NODE_ENV !== "production" && (Ii.displayName = "LabelableContext");
function Pt() {
  return a.useContext(Ii);
}
function Ti(t, e, n, r = !0, o) {
  const [s, l] = a.useState(), i = Et(o ? `${o}-label` : void 0), f = t ?? e ?? s;
  return pe(() => {
    const u = t || e || !r ? void 0 : Rm(n.current, i);
    s !== u && l(u);
  }), f;
}
function Rm(t, e) {
  const n = xm(t);
  if (n)
    return !n.id && e && (n.id = e), n.id || void 0;
}
function xm(t) {
  if (!t)
    return;
  const e = t.parentElement;
  if (e && e.tagName === "LABEL")
    return e;
  const n = t.id;
  if (n) {
    const o = t.nextElementSibling;
    if (o && o.htmlFor === n)
      return o;
  }
  const r = t.labels;
  return r && r[0];
}
const xa = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (xa.displayName = "CheckboxGroupContext");
function vm(t = !0) {
  const e = a.useContext(xa);
  if (e === void 0 && !t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>." : ot(3));
  return e;
}
const wi = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (wi.displayName = "CheckboxRootContext");
function Cm() {
  const t = a.useContext(wi);
  if (t === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>." : ot(14));
  return t;
}
const ct = "none", dr = "trigger-press", Ct = "trigger-hover", ir = "trigger-focus", Br = "outside-press", lr = "item-press", Sm = "close-press", nc = "clear-press", Im = "chip-remove-press", rc = "track-press", Tm = "increment-press", wm = "decrement-press", on = "input-change", Dt = "input-clear", Lo = "input-blur", ri = "input-paste", va = "input-press", On = "focus-out", Hr = "escape-key", Pr = "list-navigation", or = "keyboard", Pm = "drag", Ca = "cancel-open", Ir = "sibling-open", Nm = "disabled", Sa = "imperative-action", Om = "window-resize";
function ge(t, e, n, r) {
  let o = !1, s = !1;
  const l = r ?? et;
  return {
    reason: t,
    event: e ?? new Event("base-ui"),
    cancel() {
      o = !0;
    },
    allowPropagation() {
      s = !0;
    },
    get isCanceled() {
      return o;
    },
    get isPropagationAllowed() {
      return s;
    },
    trigger: n,
    ...l
  };
}
function Ht(t, e, n) {
  const r = n ?? et;
  return {
    reason: t,
    event: e ?? new Event("base-ui"),
    ...r
  };
}
function qt(t, e) {
  const n = a.useRef(t), r = le(e);
  pe(() => {
    n.current !== t && r(n.current);
  }, [t, r]), pe(() => {
    n.current = t;
  }, [t]);
}
const Mm = "data-parent", Ia = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    checked: r,
    className: o,
    defaultChecked: s = !1,
    "aria-labelledby": l,
    disabled: i = !1,
    form: f,
    id: u,
    indeterminate: c = !1,
    inputRef: p,
    name: h,
    onCheckedChange: g,
    parent: d = !1,
    readOnly: y = !1,
    render: b,
    required: E = !1,
    uncheckedValue: v,
    value: m,
    nativeButton: C = !1,
    style: x,
    ...R
  } = e, {
    clearErrors: S
  } = Qt(), {
    disabled: I,
    name: M,
    setDirty: A,
    setFilled: _,
    setFocused: L,
    setTouched: N,
    state: P,
    validationMode: w,
    validityData: O,
    shouldValidateOnChange: V,
    validation: k
  } = mt(), H = Ea(), {
    labelId: U,
    controlId: T,
    registerControlId: D,
    getDescriptionProps: $
  } = Pt(), J = vm(), Z = J?.parent, q = Z && J.allValues, B = I || H.disabled || J?.disabled || i, Y = M ?? h, Q = m ?? Y, re = Et(), ue = Et();
  let z = T;
  q ? z = d ? ue : `${Z.id}-${Q}` : u && (z = u);
  let se = {};
  q && (d ? se = J.parent.getParentProps() : Q && (se = J.parent.getChildProps(Q)));
  const fe = le(g), {
    checked: j = r,
    indeterminate: W = c,
    onCheckedChange: te,
    ...ne
  } = se, ee = J?.value, ae = J?.setValue, G = J?.defaultValue, oe = a.useRef(null), F = at(() => /* @__PURE__ */ Symbol("checkbox-control")), K = a.useRef(!1), {
    getButtonProps: ce,
    buttonRef: me
  } = Lt({
    disabled: B,
    native: C
  }), Re = J?.validation ?? k, [Ce, we] = Xt({
    controlled: Q && ee && !d ? ee.includes(Q) : j,
    default: Q && G && !d ? G.includes(Q) : s,
    name: "Checkbox",
    state: "checked"
  });
  pe(() => {
    D !== Ze && (K.current = !0, D(F.current, z));
  }, [z, J, D, d, F]), a.useEffect(() => {
    const Ie = F.current;
    return () => {
      !K.current || D === Ze || (K.current = !1, D(Ie, void 0));
    };
  }, [D, F]), _n(oe, {
    enabled: !J,
    id: re,
    value: Ce
  });
  const Ee = a.useRef(null), he = Tt(p, Ee, Re.inputRef), be = Ti(l, U, Ee, !C, z ?? void 0);
  pe(() => {
    Ee.current && (Ee.current.indeterminate = W, Ce && _(!0));
  }, [Ce, W, _]), qt(Ce, () => {
    J && !d || (S(Y), _(Ce), A(Ce !== O.initialValue), V() ? Re.commit(Ce) : Re.commit(Ce, !0));
  });
  const Ne = At(
    {
      checked: Ce,
      disabled: B,
      form: f,
      // parent checkboxes unset `name` to be excluded from form submission
      name: d ? void 0 : Y,
      // Set `id` to stop Chrome warning about an unassociated input.
      // When using a native button, the `id` is applied to the button instead.
      id: C ? void 0 : z ?? void 0,
      required: E,
      ref: he,
      style: Y ? Yn : yn,
      tabIndex: -1,
      type: "checkbox",
      "aria-hidden": !0,
      onChange(Ie) {
        if (Ie.nativeEvent.defaultPrevented)
          return;
        if (y) {
          Ie.preventDefault();
          return;
        }
        const xe = Ie.currentTarget.checked, Te = ge(ct, Ie.nativeEvent);
        if (te?.(xe, Te), fe(xe, Te), !Te.isCanceled && (we(xe), Q && ee && ae && !d && !q)) {
          const Ye = xe ? [...ee, Q] : ee.filter((je) => je !== Q);
          ae(Ye, Te);
        }
      },
      onFocus() {
        oe.current?.focus();
      }
    },
    // React <19 sets an empty value if `undefined` is passed explicitly
    // To avoid this, we only set the value if it's defined
    m !== void 0 ? {
      value: (J ? Ce && m : m) || ""
    } : et,
    $,
    J ? Re.getValidationProps : Re.getInputValidationProps
  ), Se = q ? !!j : Ce, Pe = q && W || c;
  a.useEffect(() => {
    if (!Z || !Q)
      return;
    const Ie = Z.disabledStatesRef.current;
    return Ie.set(Q, B), () => {
      Ie.delete(Q);
    };
  }, [Z, B, Q]);
  const Le = a.useMemo(() => ({
    ...P,
    checked: Se,
    disabled: B,
    readOnly: y,
    required: E,
    indeterminate: Pe
  }), [P, Se, B, y, E, Pe]), Me = ba(Le), ye = Be("span", e, {
    state: Le,
    ref: [me, oe, n, J?.registerControlRef],
    props: [{
      id: C ? z ?? void 0 : re,
      role: "checkbox",
      "aria-checked": W ? "mixed" : Ce,
      "aria-readonly": y || void 0,
      "aria-required": E || void 0,
      "aria-labelledby": be,
      [Mm]: d ? "" : void 0,
      onFocus() {
        L(!0);
      },
      onBlur() {
        const Ie = Ee.current;
        Ie && (N(!0), L(!1), w === "onBlur" && Re.commit(J ? ee : Ie.checked));
      },
      onClick(Ie) {
        y || B || (Ie.preventDefault(), Ee.current?.dispatchEvent(new PointerEvent("click", {
          bubbles: !0,
          shiftKey: Ie.shiftKey,
          ctrlKey: Ie.ctrlKey,
          altKey: Ie.altKey,
          metaKey: Ie.metaKey
        })));
      }
    }, $, Re.getValidationProps, R, ne, ce],
    stateAttributesMapping: Me
  });
  return /* @__PURE__ */ X.jsxs(wi.Provider, {
    value: Le,
    children: [ye, !Ce && !J && Y && !d && v !== void 0 && /* @__PURE__ */ X.jsx("input", {
      type: "hidden",
      form: f,
      name: Y,
      value: v
    }), /* @__PURE__ */ X.jsx("input", {
      ...Ne,
      suppressHydrationWarning: !0
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ia.displayName = "CheckboxRoot");
const _m = [];
function ss(t) {
  a.useEffect(t, _m);
}
const io = null;
let oc = globalThis.requestAnimationFrame;
class Am {
  /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = !1;
  tick = (e) => {
    this.isScheduled = !1;
    const n = this.callbacks, r = this.callbacksCount;
    if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, r > 0)
      for (let o = 0; o < n.length; o += 1)
        n[o]?.(e);
  };
  request(e) {
    const n = this.nextId;
    this.nextId += 1, this.callbacks.push(e), this.callbacksCount += 1;
    const r = process.env.NODE_ENV !== "production" && oc !== requestAnimationFrame && (oc = requestAnimationFrame, !0);
    return (!this.isScheduled || r) && (requestAnimationFrame(this.tick), this.isScheduled = !0), n;
  }
  cancel(e) {
    const n = e - this.startId;
    n < 0 || n >= this.callbacks.length || (this.callbacks[n] = null, this.callbacksCount -= 1);
  }
}
const lo = new Am();
class rn {
  static create() {
    return new rn();
  }
  static request(e) {
    return lo.request(e);
  }
  static cancel(e) {
    return lo.cancel(e);
  }
  currentId = io;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(e) {
    this.cancel(), this.currentId = lo.request(() => {
      this.currentId = io, e();
    });
  }
  cancel = () => {
    this.currentId !== io && (lo.cancel(this.currentId), this.currentId = io);
  };
  disposeEffect = () => this.cancel;
}
function jr() {
  const t = at(rn.create).current;
  return ss(t.disposeEffect), t;
}
function mn(t) {
  return t == null ? t : "current" in t ? t.current : t;
}
let Ar = /* @__PURE__ */ (function(t) {
  return t.startingStyle = "data-starting-style", t.endingStyle = "data-ending-style", t;
})({});
const km = {
  [Ar.startingStyle]: ""
}, Vm = {
  [Ar.endingStyle]: ""
}, An = {
  transitionStatus(t) {
    return t === "starting" ? km : t === "ending" ? Vm : null;
  }
};
function Ta(t, e = !1, n = !0) {
  const r = jr();
  return le((o, s = null) => {
    r.cancel();
    const l = mn(t);
    if (l == null)
      return;
    const i = l, f = () => {
      Jt.flushSync(o);
    };
    if (typeof i.getAnimations != "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      o();
      return;
    }
    function u() {
      Promise.all(i.getAnimations().map((c) => c.finished)).then(() => {
        s?.aborted || f();
      }).catch(() => {
        if (n) {
          s?.aborted || f();
          return;
        }
        const c = i.getAnimations();
        !s?.aborted && c.length > 0 && c.some((p) => p.pending || p.playState !== "finished") && u();
      });
    }
    if (e) {
      const c = Ar.startingStyle;
      if (!i.hasAttribute(c)) {
        r.request(u);
        return;
      }
      const p = new MutationObserver(() => {
        i.hasAttribute(c) || (p.disconnect(), u());
      });
      p.observe(i, {
        attributes: !0,
        attributeFilter: [c]
      }), s?.addEventListener("abort", () => p.disconnect(), {
        once: !0
      });
      return;
    }
    r.request(u);
  });
}
function en(t) {
  const {
    enabled: e = !0,
    open: n,
    ref: r,
    onComplete: o
  } = t, s = le(o), l = Ta(r, n, !1);
  a.useEffect(() => {
    if (!e)
      return;
    const i = new AbortController();
    return l(s, i.signal), () => {
      i.abort();
    };
  }, [e, n, s, l]);
}
function kn(t, e = !1, n = !1) {
  const [r, o] = a.useState(t && e ? "idle" : void 0), [s, l] = a.useState(t);
  return t && !s && (l(!0), o("starting")), !t && s && r !== "ending" && !n && o("ending"), !t && !s && r === "ending" && o(void 0), pe(() => {
    if (!t && s && r !== "ending" && n) {
      const i = rn.request(() => {
        o("ending");
      });
      return () => {
        rn.cancel(i);
      };
    }
  }, [t, s, r, n]), pe(() => {
    if (!t || e)
      return;
    const i = rn.request(() => {
      o(void 0);
    });
    return () => {
      rn.cancel(i);
    };
  }, [e, t]), pe(() => {
    if (!t || !e)
      return;
    t && s && r !== "idle" && o("starting");
    const i = rn.request(() => {
      o("idle");
    });
    return () => {
      rn.cancel(i);
    };
  }, [e, t, s, r]), {
    mounted: s,
    setMounted: l,
    transitionStatus: r
  };
}
const wa = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    keepMounted: l = !1,
    ...i
  } = e, f = Cm(), u = f.checked || f.indeterminate, {
    mounted: c,
    transitionStatus: p,
    setMounted: h
  } = kn(u), g = a.useRef(null), d = {
    ...f,
    transitionStatus: p
  };
  en({
    open: u,
    ref: g,
    onComplete() {
      u || h(!1);
    }
  });
  const y = ba(f), b = a.useMemo(() => ({
    ...y,
    ...An,
    ...wt
  }), [y]), E = l || c, v = Be("span", e, {
    ref: [n, g],
    state: d,
    stateAttributesMapping: b,
    props: i
  });
  return E ? v : null;
});
process.env.NODE_ENV !== "production" && (wa.displayName = "CheckboxIndicator");
const Pa = (...t) => t.filter((e, n, r) => !!e && e.trim() !== "" && r.indexOf(e) === n).join(" ").trim();
const Dm = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Fm = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
const sc = (t) => {
  const e = Fm(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
var Vs = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Lm = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, Bm = yp({}), Hm = () => bp(Bm), jm = ra(
  ({ color: t, size: e, strokeWidth: n, absoluteStrokeWidth: r, className: o = "", children: s, iconNode: l, ...i }, f) => {
    const {
      size: u = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: p = !1,
      color: h = "currentColor",
      className: g = ""
    } = Hm() ?? {}, d = r ?? p ? Number(n ?? c) * 24 / Number(e ?? u) : n ?? c;
    return Or(
      "svg",
      {
        ref: f,
        ...Vs,
        width: e ?? u ?? Vs.width,
        height: e ?? u ?? Vs.height,
        stroke: t ?? h,
        strokeWidth: d,
        className: Pa("lucide", g, o),
        ...!s && !Lm(i) && { "aria-hidden": "true" },
        ...i
      },
      [
        ...l.map(([y, b]) => Or(y, b)),
        ...Array.isArray(s) ? s : [s]
      ]
    );
  }
);
const $r = (t, e) => {
  const n = ra(
    ({ className: r, ...o }, s) => Or(jm, {
      ref: s,
      iconNode: e,
      className: Pa(
        `lucide-${Dm(sc(t))}`,
        `lucide-${t}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = sc(t), n;
};
const $m = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Pi = $r("check", $m);
const Um = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Wm = $r("chevron-down", Um);
const Km = [["path", { d: "M5 12h14", key: "1ays0h" }]], Gm = $r("minus", Km);
const Ym = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], zm = $r("plus", Ym);
const qm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Xm = $r("x", qm), Jm = "_Label_1f1p8_3", Zm = "_Checkbox_1f1p8_20", Qm = "_Indicator_1f1p8_53", Ds = {
  Label: Jm,
  Checkbox: Zm,
  Indicator: Qm
};
function RR(t) {
  const e = Zt.c(43);
  let n, r, o, s, l, i, f, u, c, p;
  if (e[0] !== t) {
    const {
      disabled: E,
      labelContent: v,
      innerProps: m,
      ...C
    } = t;
    r = E, l = v;
    let x;
    e[11] !== m ? (x = m === void 0 ? {} : m, e[11] = m, e[12] = x) : x = e[12];
    const R = x;
    let S;
    e[13] !== R.label ? (S = R.label || {}, e[13] = R.label, e[14] = S) : S = e[14];
    let I, M;
    e[15] !== S ? ({
      className: I,
      ...M
    } = S, e[15] = S, e[16] = I, e[17] = M) : (I = e[16], M = e[17]);
    const {
      className: A,
      ..._
    } = C || {};
    i = _;
    let L;
    e[18] !== R.indicator ? (L = R.indicator || {}, e[18] = R.indicator, e[19] = L) : L = e[19], e[20] !== L ? ({
      className: o,
      ...s
    } = L, e[20] = L, e[21] = o, e[22] = s) : (o = e[21], s = e[22]), u = r, e[23] !== I ? (c = Fe(Ds.Label, I), e[23] = I, e[24] = c) : c = e[24], p = M, n = Ia, f = Fe(Ds.Checkbox, A), e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = s, e[5] = l, e[6] = i, e[7] = f, e[8] = u, e[9] = c, e[10] = p;
  } else
    n = e[1], r = e[2], o = e[3], s = e[4], l = e[5], i = e[6], f = e[7], u = e[8], c = e[9], p = e[10];
  let h;
  e[25] !== o ? (h = Fe(Ds.Indicator, o), e[25] = o, e[26] = h) : h = e[26];
  let g;
  e[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = /* @__PURE__ */ X.jsx(Pi, { width: 14, height: 14 }), e[27] = g) : g = e[27];
  let d;
  e[28] !== s || e[29] !== h ? (d = /* @__PURE__ */ X.jsx(wa, { className: h, ...s, children: g }), e[28] = s, e[29] = h, e[30] = d) : d = e[30];
  let y;
  e[31] !== n || e[32] !== r || e[33] !== i || e[34] !== f || e[35] !== d ? (y = /* @__PURE__ */ X.jsx(n, { className: f, disabled: r, ...i, children: d }), e[31] = n, e[32] = r, e[33] = i, e[34] = f, e[35] = d, e[36] = y) : y = e[36];
  let b;
  return e[37] !== l || e[38] !== u || e[39] !== c || e[40] !== p || e[41] !== y ? (b = /* @__PURE__ */ X.jsxs("label", { "aria-disabled": u, className: c, ...p, children: [
    y,
    l
  ] }), e[37] = l, e[38] = u, e[39] = c, e[40] = p, e[41] = y, e[42] = b) : b = e[42], b;
}
const Na = /* @__PURE__ */ a.createContext({
  legendId: void 0,
  setLegendId: () => {
  },
  disabled: void 0
});
process.env.NODE_ENV !== "production" && (Na.displayName = "FieldsetRootContext");
function Oa(t = !1) {
  const e = a.useContext(Na);
  if (!e && !t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: FieldsetRootContext is missing. Fieldset parts must be placed within <Fieldset.Root>." : ot(86));
  return e;
}
const Ma = function(e) {
  const n = Et(), r = e.controlId === void 0 ? n : e.controlId, [o, s] = a.useState(r), [l, i] = a.useState(e.labelId), [f, u] = a.useState([]), c = at(() => /* @__PURE__ */ new Map()), {
    messageIds: p
  } = Pt(), h = le((y, b) => {
    const E = c.current;
    if (b === void 0) {
      E.delete(y);
      return;
    }
    E.set(y, b), s((v) => {
      if (E.size === 0)
        return;
      let m;
      for (const C of E.values()) {
        if (v !== void 0 && C === v)
          return v;
        m === void 0 && (m = C);
      }
      return m;
    });
  }), g = a.useCallback((y) => At({
    "aria-describedby": p.concat(f).join(" ") || void 0
  }, y), [p, f]), d = a.useMemo(() => ({
    controlId: o,
    registerControlId: h,
    labelId: l,
    setLabelId: i,
    messageIds: f,
    setMessageIds: u,
    getDescriptionProps: g
  }), [o, h, l, i, f, u, g]);
  return /* @__PURE__ */ X.jsx(Ii.Provider, {
    value: d,
    children: e.children
  });
};
process.env.NODE_ENV !== "production" && (Ma.displayName = "LabelableProvider");
function Vn(t = {}) {
  const {
    id: e,
    implicit: n = !1,
    controlRef: r
  } = t, {
    controlId: o,
    registerControlId: s
  } = Pt(), l = Et(e), i = n ? o : void 0, f = at(() => /* @__PURE__ */ Symbol("labelable-control")), u = a.useRef(!1), c = a.useRef(e != null), p = le(() => {
    !u.current || s === Ze || (u.current = !1, s(f.current, void 0));
  });
  return pe(() => {
    if (s === Ze)
      return;
    let h;
    if (n) {
      const g = r?.current;
      We(g) && g.closest("label") != null ? h = e ?? null : h = i ?? l;
    } else if (e != null)
      c.current = !0, h = e;
    else if (c.current)
      h = l;
    else {
      p();
      return;
    }
    if (h === void 0) {
      p();
      return;
    }
    u.current = !0, s(f.current, h);
  }, [e, r, i, s, n, l, f, p]), a.useEffect(() => p, [p]), o ?? l;
}
function He(t) {
  return t?.ownerDocument || document;
}
const qn = typeof navigator < "u", Fs = eg(), _a = ng(), Ni = tg(), Oi = typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter:none"), Mi = (
  // iPads can claim to be MacIntel
  Fs.platform === "MacIntel" && Fs.maxTouchPoints > 1 ? !0 : /iP(hone|ad|od)|iOS/.test(Fs.platform)
), ic = qn && /firefox/i.test(Ni), Aa = qn && /apple/i.test(navigator.vendor), Bo = qn && /android/i.test(_a) || /android/i.test(Ni), ka = qn && _a.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints, Va = Ni.includes("jsdom/");
function eg() {
  if (!qn)
    return {
      platform: "",
      maxTouchPoints: -1
    };
  const t = navigator.userAgentData;
  return t?.platform ? {
    platform: t.platform,
    maxTouchPoints: navigator.maxTouchPoints
  } : {
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? -1
  };
}
function tg() {
  if (!qn)
    return "";
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? t.brands.map(({
    brand: e,
    version: n
  }) => `${e}/${n}`).join(" ") : navigator.userAgent;
}
function ng() {
  if (!qn)
    return "";
  const t = navigator.userAgentData;
  return t?.platform ? t.platform : navigator.platform ?? "";
}
const oi = "data-base-ui-focusable", Da = "active", Fa = "selected", La = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])", In = "ArrowLeft", Tn = "ArrowRight", _i = "ArrowUp", Ur = "ArrowDown";
function St(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot?.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Oe(t, e) {
  if (!t || !e)
    return !1;
  const n = e.getRootNode?.();
  if (t.contains(e))
    return !0;
  if (n && ur(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function pt(t) {
  return "composedPath" in t ? t.composedPath()[0] : t.target;
}
function Ho(t, e) {
  if (!We(t))
    return !1;
  const n = t;
  if (e.hasElement(n))
    return !n.hasAttribute("data-trigger-disabled");
  for (const [, r] of e.entries())
    if (Oe(r, n))
      return !r.hasAttribute("data-trigger-disabled");
  return !1;
}
function Gt(t, e) {
  if (e == null)
    return !1;
  if ("composedPath" in t)
    return t.composedPath().includes(e);
  const n = t;
  return n.target != null && e.contains(n.target);
}
function rg(t) {
  return t.matches("html,body");
}
function is(t) {
  return Qe(t) && t.matches(La);
}
function Ba(t) {
  return t?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${La}`) != null;
}
function si(t) {
  return t ? t.getAttribute("role") === "combobox" && is(t) : !1;
}
function Ha(t) {
  if (!t || Va)
    return !0;
  try {
    return t.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function kr(t) {
  return t ? t.hasAttribute(oi) ? t : t.querySelector(`[${oi}]`) || t : null;
}
function ln(t, e, n = !0) {
  return t.filter((o) => o.parentId === e).flatMap((o) => [...!n || o.context?.open ? [o] : [], ...ln(t, o.id, n)]);
}
function lc(t, e) {
  let n = [], r = t.find((o) => o.id === e)?.parentId;
  for (; r; ) {
    const o = t.find((s) => s.id === r);
    r = o?.parentId, o && (n = n.concat(o));
  }
  return n;
}
function ft(t) {
  t.preventDefault(), t.stopPropagation();
}
function og(t) {
  return "nativeEvent" in t;
}
function ja(t) {
  return t.pointerType === "" && t.isTrusted ? !0 : Bo && t.pointerType ? t.type === "click" && t.buttons === 1 : t.detail === 0 && !t.pointerType;
}
function $a(t) {
  return Va ? !1 : !Bo && t.width === 0 && t.height === 0 || Bo && t.width === 1 && t.height === 1 && t.pressure === 0 && t.detail === 0 && t.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  t.width < 1 && t.height < 1 && t.pressure === 0 && t.detail === 0 && t.pointerType === "touch";
}
function pr(t, e) {
  const n = ["mouse", "pen"];
  return e || n.push("", void 0), n.includes(t);
}
function Ua(t) {
  const e = t.type;
  return e === "click" || e === "mousedown" || e === "keydown" || e === "keyup";
}
const sg = ["top", "right", "bottom", "left"], mr = Math.min, Ft = Math.max, jo = Math.round, $n = Math.floor, cn = (t) => ({
  x: t,
  y: t
}), ig = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ii(t, e, n) {
  return Ft(t, mr(e, n));
}
function En(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Mt(t) {
  return t.split("-")[0];
}
function Dn(t) {
  return t.split("-")[1];
}
function Ai(t) {
  return t === "x" ? "y" : "x";
}
function ki(t) {
  return t === "y" ? "height" : "width";
}
function jt(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function Vi(t) {
  return Ai(jt(t));
}
function lg(t, e, n) {
  n === void 0 && (n = !1);
  const r = Dn(t), o = Vi(t), s = ki(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (l = $o(l)), [l, $o(l)];
}
function cg(t) {
  const e = $o(t);
  return [li(t), e, li(e)];
}
function li(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const cc = ["left", "right"], ac = ["right", "left"], ag = ["top", "bottom"], ug = ["bottom", "top"];
function fg(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? ac : cc : e ? cc : ac;
    case "left":
    case "right":
      return e ? ag : ug;
    default:
      return [];
  }
}
function dg(t, e, n, r) {
  const o = Dn(t);
  let s = fg(Mt(t), n === "start", r);
  return o && (s = s.map((l) => l + "-" + o), e && (s = s.concat(s.map(li)))), s;
}
function $o(t) {
  const e = Mt(t);
  return ig[e] + t.slice(e.length);
}
function pg(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Wa(t) {
  return typeof t != "number" ? pg(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Vr(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function co(t, e, n) {
  return Math.floor(t / e) !== n;
}
function Dr(t, e) {
  return e < 0 || e >= t.length;
}
function Mo(t, e) {
  return xt(t.current, {
    disabledIndices: e
  });
}
function ci(t, e) {
  return xt(t.current, {
    decrement: !0,
    startingIndex: t.current.length,
    disabledIndices: e
  });
}
function xt(t, {
  startingIndex: e = -1,
  decrement: n = !1,
  disabledIndices: r,
  amount: o = 1
} = {}) {
  let s = e;
  do
    s += n ? -o : o;
  while (s >= 0 && s <= t.length - 1 && bn(t, s, r));
  return s;
}
function Ka(t, {
  event: e,
  orientation: n,
  loopFocus: r,
  onLoop: o,
  rtl: s,
  cols: l,
  disabledIndices: i,
  minIndex: f,
  maxIndex: u,
  prevIndex: c,
  stopEvent: p = !1
}) {
  let h = c, g;
  if (e.key === _i ? g = "up" : e.key === Ur && (g = "down"), g) {
    const d = [], y = [];
    let b = !1, E = 0;
    {
      let M = null, A = -1;
      t.forEach((_, L) => {
        if (_ == null)
          return;
        E += 1;
        const N = _.closest('[role="row"]');
        N && (b = !0), (N !== M || A === -1) && (M = N, A += 1, d[A] = []), d[A].push(L), y[L] = A;
      });
    }
    let v = !1, m = 0;
    if (b)
      for (const M of d) {
        const A = M.length;
        A > m && (m = A), A !== l && (v = !0);
      }
    const C = v && E < t.length, x = m || l, R = (M) => {
      if (!v || c === -1)
        return;
      const A = y[c];
      if (A == null)
        return;
      const _ = d[A].indexOf(c), L = M === "up" ? -1 : 1;
      for (let N = A + L, P = 0; P < d.length; P += 1, N += L) {
        if (N < 0 || N >= d.length) {
          if (!r || C)
            return;
          if (N = N < 0 ? d.length - 1 : 0, o) {
            const O = Math.min(_, d[N].length - 1), V = d[N][O] ?? d[N][0], k = o(e, c, V);
            N = y[k] ?? N;
          }
        }
        const w = d[N];
        for (let O = Math.min(_, w.length - 1); O >= 0; O -= 1) {
          const V = w[O];
          if (!bn(t, V, i))
            return V;
        }
      }
    }, S = (M) => {
      if (!C || c === -1)
        return;
      const A = c % x, _ = M === "up" ? -x : x, L = u - u % x, N = $n(u / x) + 1;
      for (let P = c - A + _, w = 0; w < N; w += 1, P += _) {
        if (P < 0 || P > u) {
          if (!r)
            return;
          P = P < 0 ? L : 0;
        }
        const O = Math.min(P + x - 1, u);
        for (let V = Math.min(P + A, O); V >= P; V -= 1)
          if (!bn(t, V, i))
            return V;
      }
    };
    p && ft(e);
    const I = R(g) ?? S(g);
    if (I !== void 0)
      h = I;
    else if (c === -1)
      h = g === "up" ? u : f;
    else if (h = xt(t, {
      startingIndex: c,
      amount: x,
      decrement: g === "up",
      disabledIndices: i
    }), r) {
      if (g === "up" && (c - x < f || h < 0)) {
        const M = c % x, A = u % x, _ = u - (A - M);
        A === M ? h = u : h = A > M ? _ : _ - x, o && (h = o(e, c, h));
      }
      g === "down" && c + x > u && (h = xt(t, {
        startingIndex: c % x - x,
        amount: x,
        disabledIndices: i
      }), o && (h = o(e, c, h)));
    }
    Dr(t, h) && (h = c);
  }
  if (n === "both") {
    const d = $n(c / l);
    e.key === (s ? In : Tn) && (p && ft(e), c % l !== l - 1 ? (h = xt(t, {
      startingIndex: c,
      disabledIndices: i
    }), r && co(h, l, d) && (h = xt(t, {
      startingIndex: c - c % l - 1,
      disabledIndices: i
    }), o && (h = o(e, c, h)))) : r && (h = xt(t, {
      startingIndex: c - c % l - 1,
      disabledIndices: i
    }), o && (h = o(e, c, h))), co(h, l, d) && (h = c)), e.key === (s ? Tn : In) && (p && ft(e), c % l !== 0 ? (h = xt(t, {
      startingIndex: c,
      decrement: !0,
      disabledIndices: i
    }), r && co(h, l, d) && (h = xt(t, {
      startingIndex: c + (l - c % l),
      decrement: !0,
      disabledIndices: i
    }), o && (h = o(e, c, h)))) : r && (h = xt(t, {
      startingIndex: c + (l - c % l),
      decrement: !0,
      disabledIndices: i
    }), o && (h = o(e, c, h))), co(h, l, d) && (h = c));
    const y = $n(u / l) === d;
    Dr(t, h) && (r && y ? (h = e.key === (s ? Tn : In) ? u : xt(t, {
      startingIndex: c - c % l - 1,
      disabledIndices: i
    }), o && (h = o(e, c, h))) : h = c);
  }
  return h;
}
function Ga(t, e, n) {
  const r = [];
  let o = 0;
  return t.forEach(({
    width: s,
    height: l
  }, i) => {
    if (s > e && process.env.NODE_ENV !== "production")
      throw new Error(`[Floating UI]: Invalid grid - item width at index ${i} is greater than grid columns`);
    let f = !1;
    for (n && (o = 0); !f; ) {
      const u = [];
      for (let c = 0; c < s; c += 1)
        for (let p = 0; p < l; p += 1)
          u.push(o + c + p * e);
      o % e + s <= e && u.every((c) => r[c] == null) ? (u.forEach((c) => {
        r[c] = i;
      }), f = !0) : o += 1;
    }
  }), [...r];
}
function Ya(t, e, n, r, o) {
  if (t === -1)
    return -1;
  const s = n.indexOf(t), l = e[t];
  switch (o) {
    case "tl":
      return s;
    case "tr":
      return l ? s + l.width - 1 : s;
    case "bl":
      return l ? s + (l.height - 1) * r : s;
    case "br":
      return n.lastIndexOf(t);
    default:
      return -1;
  }
}
function za(t, e) {
  return e.flatMap((n, r) => t.includes(n) ? [r] : []);
}
function bn(t, e, n) {
  if (typeof n == "function" ? n(e) : n?.includes(e) ?? !1)
    return !0;
  const o = t[e];
  return o ? ls(o) ? !n && (o.hasAttribute("disabled") || o.getAttribute("aria-disabled") === "true") : !0 : !1;
}
function mg(t) {
  return t.visibility === "hidden" || t.visibility === "collapse";
}
function ls(t, e = t ? _t(t) : null) {
  return !t || !t.isConnected || !e || mg(e) ? !1 : typeof t.checkVisibility == "function" ? t.checkVisibility() : e.display !== "none" && e.display !== "contents";
}
const gg = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function hg(t) {
  const e = t.assignedSlot;
  if (e)
    return e;
  if (t.parentElement)
    return t.parentElement;
  const n = t.getRootNode();
  return ur(n) ? n.host : null;
}
function ai(t) {
  for (const e of Array.from(t.children))
    if (It(e) === "summary")
      return e;
  return null;
}
function bg(t, e) {
  const n = ai(e);
  return !!n && (t === n || Oe(n, t));
}
function qa(t) {
  const e = t ? It(t) : "";
  return t != null && t.matches(gg) && (e !== "summary" || t.parentElement != null && It(t.parentElement) === "details" && ai(t.parentElement) === t) && (e !== "details" || ai(t) == null) && (e !== "input" || t.type !== "hidden");
}
function Xa(t) {
  if (!qa(t) || !t.isConnected || t.matches(":disabled"))
    return !1;
  for (let e = t; e; e = hg(e)) {
    const n = e !== t, r = It(e) === "slot";
    if (e.hasAttribute("inert") || n && It(e) === "details" && !e.open && !bg(t, e) || e.hasAttribute("hidden") || !r && !yg(e, n))
      return !1;
  }
  return !0;
}
function yg(t, e) {
  const n = _t(t);
  return e ? n.display !== "none" : ls(t, n);
}
function Ja(t) {
  const e = t.tabIndex;
  if (e < 0) {
    const n = It(t);
    if (n === "details" || n === "audio" || n === "video" || Qe(t) && t.isContentEditable)
      return 0;
  }
  return e;
}
function Ls(t) {
  if (It(t) !== "input")
    return null;
  const e = t;
  return e.type === "radio" && e.name !== "" ? e : null;
}
function Eg(t, e) {
  const n = Ls(t);
  if (!n)
    return !0;
  const r = e.find((o) => {
    const s = Ls(o);
    return s?.name === n.name && s.form === n.form && s.checked;
  });
  return r ? r === n : e.find((o) => {
    const s = Ls(o);
    return s?.name === n.name && s.form === n.form;
  }) === n;
}
function Za(t) {
  if (Qe(t) && It(t) === "slot") {
    const e = t.assignedElements({
      flatten: !0
    });
    if (e.length > 0)
      return e;
  }
  return Qe(t) && t.shadowRoot ? Array.from(t.shadowRoot.children) : Array.from(t.children);
}
function Qa(t, e) {
  Za(t).forEach((n) => {
    qa(n) && e.push(n), Qa(n, e);
  });
}
function eu(t, e, n) {
  Za(t).forEach((r) => {
    Qe(r) && r.matches(e) && n.push(r), eu(r, e, n);
  });
}
function Di(t) {
  return Xa(t) && Ja(t) >= 0;
}
function tu(t) {
  const e = [];
  return Qa(t, e), e.filter(Xa);
}
function Wr(t) {
  const e = tu(t);
  return e.filter((n) => Ja(n) >= 0 && Eg(n, e));
}
function nu(t, e) {
  const n = Wr(t), r = n.length;
  if (r === 0)
    return;
  const o = St(He(t)), s = n.indexOf(o), l = s === -1 ? e === 1 ? 0 : r - 1 : s + e;
  return n[l];
}
function Fi(t) {
  return nu(He(t).body, 1) || t;
}
function ru(t) {
  return nu(He(t).body, -1) || t;
}
function ou(t, e) {
  if (!t)
    return null;
  const n = Wr(He(t).body), r = n.length;
  if (r === 0)
    return null;
  const o = n.indexOf(t);
  if (o === -1)
    return null;
  const s = (o + e + r) % r;
  return n[s];
}
function Rg(t) {
  return ou(t, 1);
}
function xg(t) {
  return ou(t, -1);
}
function cr(t, e) {
  const n = e || t.currentTarget, r = t.relatedTarget;
  return !r || !Oe(n, r);
}
function vg(t) {
  Wr(t).forEach((n) => {
    n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1");
  });
}
function uc(t) {
  const e = [];
  eu(t, "[data-tabindex]", e), e.forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
function Cg(t, e) {
  const n = Et(t);
  return pe(() => (e(n), () => {
    e(void 0);
  }), [n, e]), n;
}
function su(t = {}) {
  const {
    id: e,
    fallbackControlId: n,
    native: r = !1,
    setLabelId: o,
    focusControl: s
  } = t, {
    controlId: l,
    setLabelId: i
  } = Pt(), f = le((g) => {
    i(g), o?.(g);
  }), u = Cg(e, f), c = l ?? n;
  function p(g) {
    if (s) {
      s(g, c);
      return;
    }
    if (!c)
      return;
    const d = He(g.currentTarget).getElementById(c);
    Qe(d) && Sg(d);
  }
  function h(g) {
    pt(g.nativeEvent)?.closest("button,input,select,textarea") || (!g.defaultPrevented && g.detail > 1 && g.preventDefault(), !r && p(g));
  }
  return r ? {
    id: u,
    htmlFor: c ?? void 0,
    onMouseDown: h
  } : {
    id: u,
    onClick: h,
    onPointerDown(g) {
      g.preventDefault();
    }
  };
}
function Sg(t) {
  t.focus({
    // Available from Chrome 144+ (January 2026).
    // Safari and Firefox already support it.
    focusVisible: !0
  });
}
const Er = 0;
class $t {
  static create() {
    return new $t();
  }
  currentId = Er;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(e, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = Er, n();
    }, e);
  }
  isStarted() {
    return this.currentId !== Er;
  }
  clear = () => {
    this.currentId !== Er && (clearTimeout(this.currentId), this.currentId = Er);
  };
  disposeEffect = () => this.clear;
}
function dt() {
  const t = at($t.create).current;
  return ss(t.disposeEffect), t;
}
function Uo(t, e) {
  return {
    ...t,
    state: {
      ...t.state,
      valid: !e && t.state.valid
    }
  };
}
const _o = Object.keys(os);
function Ig(t) {
  if (!t || t.valid || !t.valueMissing)
    return !1;
  let e = !1;
  for (const n of _o)
    n !== "valid" && (n === "valueMissing" && (e = t[n]), t[n] && (e = !1));
  return e;
}
function Tg(t) {
  const {
    formRef: e,
    clearErrors: n
  } = Qt(), {
    setValidityData: r,
    validate: o,
    validityData: s,
    validationDebounceTime: l,
    invalid: i,
    markedDirtyRef: f,
    state: u,
    name: c,
    shouldValidateOnChange: p
  } = t, {
    controlId: h,
    getDescriptionProps: g
  } = Pt(), d = dt(), y = a.useRef(null), b = le(async (m, C = !1) => {
    const x = y.current;
    if (!x)
      return;
    if (C) {
      if (u.valid !== !1)
        return;
      const N = x.validity;
      if (!N.valueMissing) {
        const w = {
          value: m,
          state: {
            ...os,
            valid: !0
          },
          error: "",
          errors: [],
          initialValue: s.initialValue
        };
        if (x.setCustomValidity(""), h) {
          const O = e.current.fields.get(h);
          O && e.current.fields.set(h, {
            ...O,
            ...Uo(w, !1)
            // invalid = false
          });
        }
        r(w);
        return;
      }
      const P = _o.reduce((w, O) => (w[O] = N[O], w), {});
      if (!P.valid && !Ig(P))
        return;
    }
    function R(N) {
      const P = _o.reduce((O, V) => (O[V] = N.validity[V], O), {});
      let w = !1;
      for (const O of _o)
        if (O !== "valid") {
          if (O === "valueMissing" && P[O])
            w = !0;
          else if (P[O])
            return P;
        }
      return w && !f.current && (P.valid = !0, P.valueMissing = !1), P;
    }
    d.clear();
    let S = null, I = [];
    const M = R(x);
    let A;
    const _ = p();
    if (x.validationMessage && !_)
      A = x.validationMessage, I = [x.validationMessage];
    else {
      const N = Array.from(e.current.fields.values()).reduce((w, O) => (O.name && (w[O.name] = O.getValue()), w), {}), P = o(m, N);
      typeof P == "object" && P !== null && "then" in P ? S = await P : S = P, S !== null ? (M.valid = !1, M.customError = !0, Array.isArray(S) ? (I = S, x.setCustomValidity(S.join(`
`))) : S && (I = [S], x.setCustomValidity(S))) : _ && (x.setCustomValidity(""), M.customError = !1, x.validationMessage ? (A = x.validationMessage, I = [x.validationMessage]) : x.validity.valid && !M.valid && (M.valid = !0));
    }
    const L = {
      value: m,
      state: M,
      error: A ?? (Array.isArray(S) ? S[0] : S ?? ""),
      errors: I,
      initialValue: s.initialValue
    };
    if (h) {
      const N = e.current.fields.get(h);
      N && e.current.fields.set(h, {
        ...N,
        // Keep Form-level errors part of overall field validity for submit blocking/focus logic.
        ...Uo(L, i)
      });
    }
    r(L);
  }), E = a.useCallback((m = {}) => At(g, u.valid === !1 ? {
    "aria-invalid": !0
  } : et, m), [g, u.valid]), v = a.useCallback((m = {}) => At({
    onChange(C) {
      if (C.nativeEvent.defaultPrevented)
        return;
      if (n(c), !p()) {
        b(C.currentTarget.value, !0);
        return;
      }
      const x = C.currentTarget;
      if (x.value === "") {
        b(x.value);
        return;
      }
      d.clear(), l ? d.start(l, () => {
        b(x.value);
      }) : b(x.value);
    }
  }, E(m)), [E, n, c, d, b, l, p]);
  return a.useMemo(() => ({
    getValidationProps: E,
    getInputValidationProps: v,
    inputRef: y,
    commit: b
  }), [E, v, b]);
}
function wg(t) {
  const {
    commit: e,
    invalid: n,
    markedDirtyRef: r,
    name: o,
    setValidityData: s,
    validityData: l
  } = t, {
    formRef: i
  } = Qt(), f = a.useRef(null), u = a.useRef(null), c = a.useRef(null), p = le(() => {
    const b = u.current;
    if (b)
      return b.getValue ? b.getValue() : b.value;
  }), h = le((b = !0) => {
    const E = u.current;
    if (!E)
      return;
    let v = E.value;
    v === void 0 && (v = p()), r.current = !0, b ? Jt.flushSync(() => e(v)) : e(v);
  });
  function g() {
    const b = u.current;
    !b || !b.id || i.current.fields.set(b.id, {
      getValue: p,
      name: o,
      controlRef: b.controlRef ?? c,
      validityData: Uo(l, n),
      validate: h
    });
  }
  function d(b = u.current?.id) {
    b && i.current.fields.delete(b);
  }
  function y() {
    const b = u.current;
    if (!b)
      return;
    let E = b.value;
    E === void 0 && (E = p()), l.initialValue === null && E !== null && s((v) => ({
      ...v,
      initialValue: E
    }));
  }
  return pe(() => {
    const b = u.current;
    !b || !b.id || i.current.fields.set(b.id, {
      getValue: p,
      name: o,
      controlRef: b.controlRef ?? c,
      validityData: Uo(l, n),
      validate: h
    });
  }, [i, p, n, o, h, l]), pe(() => {
    const b = i.current.fields;
    return () => {
      const E = u.current?.id;
      E && b.delete(E);
    };
  }, [i]), le((b, E) => {
    if (!E) {
      f.current === b && (f.current = null, d(), u.current = null);
      return;
    }
    const v = u.current?.id;
    f.current = b, u.current = E, v && v !== E.id && d(v), y(), g();
  });
}
const iu = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    errors: r,
    validationMode: o,
    submitAttemptedRef: s
  } = Qt(), {
    render: l,
    className: i,
    validate: f,
    validationDebounceTime: u = 0,
    validationMode: c = o,
    name: p,
    disabled: h = !1,
    invalid: g,
    dirty: d,
    touched: y,
    actionsRef: b,
    style: E,
    ...v
  } = e, {
    disabled: m
  } = Oa(), C = le(f || (() => null)), x = m || h, [R, S] = a.useState(!1), [I, M] = a.useState(!1), [A, _] = a.useState(!1), [L, N] = a.useState(!1), P = d ?? I, w = y ?? R, O = a.useRef(!1), V = le((ue) => {
    d === void 0 && (ue && (O.current = !0), M(ue));
  }), k = le((ue) => {
    y === void 0 && S(ue);
  }), H = le(() => c === "onChange" || c === "onSubmit" && s.current), U = !!p && Object.hasOwn(r, p) && r[p] !== void 0, T = g === !0 || U, [D, $] = a.useState({
    state: os,
    error: "",
    errors: [],
    value: null,
    initialValue: null
  }), J = !T && D.state.valid, Z = a.useMemo(() => ({
    disabled: x,
    touched: w,
    dirty: P,
    valid: J,
    filled: A,
    focused: L
  }), [x, w, P, J, A, L]), q = Tg({
    setValidityData: $,
    validate: C,
    validityData: D,
    validationDebounceTime: u,
    invalid: T,
    markedDirtyRef: O,
    state: Z,
    name: p,
    shouldValidateOnChange: H
  }), B = a.useCallback(() => {
    O.current = !0, q.commit(D.value);
  }, [q, D]), Y = wg({
    commit: q.commit,
    invalid: T,
    markedDirtyRef: O,
    name: p,
    setValidityData: $,
    validityData: D
  });
  a.useImperativeHandle(b, () => ({
    validate: B
  }), [B]);
  const Q = a.useMemo(() => ({
    invalid: T,
    name: p,
    validityData: D,
    setValidityData: $,
    disabled: x,
    touched: w,
    setTouched: k,
    dirty: P,
    setDirty: V,
    filled: A,
    setFilled: _,
    focused: L,
    setFocused: N,
    validate: C,
    validationMode: c,
    validationDebounceTime: u,
    shouldValidateOnChange: H,
    state: Z,
    markedDirtyRef: O,
    registerFieldControl: Y,
    validation: q
  }), [T, p, D, x, w, k, P, V, A, _, L, N, C, c, u, H, Z, Y, q]), re = Be("div", e, {
    ref: n,
    state: Z,
    props: v,
    stateAttributesMapping: wt
  });
  return /* @__PURE__ */ X.jsx(Si.Provider, {
    value: Q,
    children: re
  });
});
process.env.NODE_ENV !== "production" && (iu.displayName = "FieldRootInner");
const lu = /* @__PURE__ */ a.forwardRef(function(e, n) {
  return /* @__PURE__ */ X.jsx(Ma, {
    children: /* @__PURE__ */ X.jsx(iu, {
      ...e,
      ref: n
    })
  });
});
process.env.NODE_ENV !== "production" && (lu.displayName = "FieldRoot");
const cu = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    id: l,
    nativeLabel: i = !0,
    ...f
  } = e, u = mt(!1), {
    labelId: c
  } = Pt(), p = a.useRef(null), h = su({
    id: c ?? l,
    native: i
  });
  return process.env.NODE_ENV !== "production" && a.useEffect(() => {
    if (!p.current)
      return;
    const d = p.current.tagName === "LABEL";
    if (i) {
      if (!d) {
        const y = _r.captureOwnerStack?.() || "";
        fr(`<Field.Label> expected a <label> element because the \`nativeLabel\` prop is true. Rendering a non-<label> disables native label association, so \`htmlFor\` will not work. Use a real <label> in the \`render\` prop, or set \`nativeLabel\` to \`false\`.${y}`);
      }
    } else if (d) {
      const y = _r.captureOwnerStack?.() || "";
      fr(`<Field.Label> expected a non-<label> element because the \`nativeLabel\` prop is false. Rendering a <label> assumes native label behavior while Base UI treats it as non-native, which can cause unexpected pointer behavior. Use a non-<label> in the \`render\` prop, or set \`nativeLabel\` to \`true\`.${y}`);
    }
  }, [i]), Be("label", e, {
    ref: [n, p],
    state: u.state,
    props: [h, f],
    stateAttributesMapping: wt
  });
});
process.env.NODE_ENV !== "production" && (cu.displayName = "FieldLabel");
const Pg = {
  ...wt,
  ...An
}, au = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    id: o,
    className: s,
    match: l,
    style: i,
    ...f
  } = e, u = Et(o), {
    validityData: c,
    state: p,
    name: h
  } = mt(!1), {
    setMessageIds: g
  } = Pt(), {
    errors: d
  } = Qt(), y = h ? d[h] : null, b = typeof l == "string";
  let E = !1;
  l === !0 ? E = !0 : b ? E = !!c.state[l] : E = !!y || c.state.valid === !1;
  const {
    mounted: v,
    transitionStatus: m,
    setMounted: C
  } = kn(E);
  pe(() => {
    if (!(!E || !u))
      return g((w) => w.concat(u)), () => {
        g((w) => w.filter((O) => O !== u));
      };
  }, [E, u, g]);
  const x = a.useRef(null), [R, S] = a.useState(null), [I, M] = a.useState(null), A = c.errors.length > 1 ? /* @__PURE__ */ X.jsx("ul", {
    children: c.errors.map((w) => /* @__PURE__ */ X.jsx("li", {
      children: w
    }, w))
  }) : c.error, _ = b ? A : y || A;
  let L = c.error;
  y != null ? L = Array.isArray(y) ? JSON.stringify(y) : y : c.errors.length > 1 && (L = JSON.stringify(c.errors)), E && L !== I && (M(L), S(_)), en({
    open: E,
    ref: x,
    onComplete() {
      E || C(!1);
    }
  });
  const N = {
    ...p,
    transitionStatus: m
  }, P = Be("div", e, {
    ref: [n, x],
    state: N,
    props: [{
      id: u,
      children: E ? _ : R
    }, f],
    stateAttributesMapping: Pg,
    enabled: v
  });
  return v ? P : null;
});
process.env.NODE_ENV !== "production" && (au.displayName = "FieldError");
const uu = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    id: o,
    className: s,
    style: l,
    ...i
  } = e, f = Et(o), u = mt(!1), {
    setMessageIds: c
  } = Pt();
  return pe(() => {
    if (f)
      return c((h) => h.concat(f)), () => {
        c((h) => h.filter((g) => g !== f));
      };
  }, [f, c]), Be("p", e, {
    ref: n,
    state: u.state,
    props: [{
      id: f
    }, i],
    stateAttributesMapping: wt
  });
});
process.env.NODE_ENV !== "production" && (uu.displayName = "FieldDescription");
const fu = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    id: s,
    name: l,
    value: i,
    disabled: f = !1,
    onValueChange: u,
    defaultValue: c,
    autoFocus: p = !1,
    style: h,
    ...g
  } = e, {
    state: d,
    name: y,
    disabled: b,
    setTouched: E,
    setDirty: v,
    validityData: m,
    setFocused: C,
    setFilled: x,
    validationMode: R,
    validation: S
  } = mt(), I = b || f, M = y ?? l, A = {
    ...d,
    disabled: I
  }, {
    labelId: _
  } = Pt(), L = Vn({
    id: s
  });
  pe(() => {
    const H = i != null;
    S.inputRef.current?.value || H && i !== "" ? x(!0) : H && i === "" && x(!1);
  }, [S.inputRef, x, i]);
  const N = a.useRef(null);
  pe(() => {
    p && N.current === St(He(N.current)) && C(!0);
  }, [p, C]);
  const [P] = Xt({
    controlled: i,
    default: c,
    name: "FieldControl",
    state: "value"
  }), w = i !== void 0, O = w ? P : void 0, V = le(() => S.inputRef.current?.value);
  return _n(S.inputRef, {
    id: L,
    value: O,
    getValue: V
  }), Be("input", e, {
    ref: [n, N],
    state: A,
    props: [{
      id: L,
      disabled: I,
      name: M,
      ref: S.inputRef,
      "aria-labelledby": _,
      autoFocus: p,
      ...w ? {
        value: O
      } : {
        defaultValue: c
      },
      onChange(H) {
        const U = H.currentTarget.value;
        u?.(U, ge(ct, H.nativeEvent)), v(U !== m.initialValue), x(U !== "");
      },
      onFocus() {
        C(!0);
      },
      onBlur(H) {
        E(!0), C(!1), R === "onBlur" && S.commit(H.currentTarget.value);
      },
      onKeyDown(H) {
        H.currentTarget.tagName === "INPUT" && H.key === "Enter" && (E(!0), S.commit(H.currentTarget.value));
      }
    }, S.getInputValidationProps(), g],
    stateAttributesMapping: wt
  });
});
process.env.NODE_ENV !== "production" && (fu.displayName = "FieldControl");
const Ng = "_Field_1tmky_3", Og = "_Label_1tmky_13", Mg = "_Input_1tmky_20", _g = "_Description_1tmky_56", Rr = {
  Field: Ng,
  Label: Og,
  Input: Mg,
  Error: "_Error_1tmky_50",
  Description: _g
};
function xR(t) {
  const e = Zt.c(69);
  let n, r, o, s, l, i, f, u, c, p, h, g, d, y;
  if (e[0] !== t) {
    const {
      error: A,
      description: _,
      label: L,
      innerProps: N,
      ...P
    } = t;
    f = A, s = _, p = L;
    let w;
    e[15] !== N ? (w = N === void 0 ? {} : N, e[15] = N, e[16] = w) : w = e[16];
    const O = w, {
      className: V,
      ...k
    } = P || {};
    d = k;
    let H;
    e[17] !== O.label ? (H = O.label || {}, e[17] = O.label, e[18] = H) : H = e[18], e[19] !== H ? ({
      className: h,
      ...g
    } = H, e[19] = H, e[20] = h, e[21] = g) : (h = e[20], g = e[21]);
    let U;
    e[22] !== O.control ? (U = O.control || {}, e[22] = O.control, e[23] = U) : U = e[23], e[24] !== U ? ({
      className: r,
      ...o
    } = U, e[24] = U, e[25] = r, e[26] = o) : (r = e[25], o = e[26]);
    let T;
    e[27] !== O.error ? (T = O.error || {}, e[27] = O.error, e[28] = T) : T = e[28], e[29] !== T ? ({
      className: u,
      ...c
    } = T, e[29] = T, e[30] = u, e[31] = c) : (u = e[30], c = e[31]);
    let D;
    e[32] !== O.description ? (D = O.description || {}, e[32] = O.description, e[33] = D) : D = e[33], e[34] !== D ? ({
      className: l,
      ...i
    } = D, e[34] = D, e[35] = l, e[36] = i) : (l = e[35], i = e[36]), n = lu, y = Fe(Rr.Field, V), e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = s, e[5] = l, e[6] = i, e[7] = f, e[8] = u, e[9] = c, e[10] = p, e[11] = h, e[12] = g, e[13] = d, e[14] = y;
  } else
    n = e[1], r = e[2], o = e[3], s = e[4], l = e[5], i = e[6], f = e[7], u = e[8], c = e[9], p = e[10], h = e[11], g = e[12], d = e[13], y = e[14];
  const b = !!f;
  let E;
  e[37] !== h ? (E = Fe(Rr.Label, h), e[37] = h, e[38] = E) : E = e[38];
  let v;
  e[39] !== p || e[40] !== g || e[41] !== E ? (v = /* @__PURE__ */ X.jsx(cu, { className: E, ...g, children: p }), e[39] = p, e[40] = g, e[41] = E, e[42] = v) : v = e[42];
  let m;
  e[43] !== r ? (m = Fe(Rr.Input, r), e[43] = r, e[44] = m) : m = e[44];
  let C;
  e[45] !== o || e[46] !== m ? (C = /* @__PURE__ */ X.jsx(fu, { className: m, ...o }), e[45] = o, e[46] = m, e[47] = C) : C = e[47];
  let x;
  e[48] !== u ? (x = Fe(Rr.Error, u), e[48] = u, e[49] = x) : x = e[49];
  let R;
  e[50] !== f || e[51] !== c || e[52] !== x ? (R = /* @__PURE__ */ X.jsx(au, { className: x, ...c, children: f }), e[50] = f, e[51] = c, e[52] = x, e[53] = R) : R = e[53];
  let S;
  e[54] !== l ? (S = Fe(Rr.Description, l), e[54] = l, e[55] = S) : S = e[55];
  let I;
  e[56] !== s || e[57] !== i || e[58] !== S ? (I = /* @__PURE__ */ X.jsx(uu, { className: S, ...i, children: s }), e[56] = s, e[57] = i, e[58] = S, e[59] = I) : I = e[59];
  let M;
  return e[60] !== n || e[61] !== d || e[62] !== y || e[63] !== I || e[64] !== b || e[65] !== v || e[66] !== C || e[67] !== R ? (M = /* @__PURE__ */ X.jsxs(n, { className: y, invalid: b, ...d, children: [
    v,
    C,
    R,
    I
  ] }), e[60] = n, e[61] = d, e[62] = y, e[63] = I, e[64] = b, e[65] = v, e[66] = C, e[67] = R, e[68] = M) : M = e[68], M;
}
const Li = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Li.displayName = "MenuPositionerContext");
function du(t) {
  const e = a.useContext(Li);
  if (e === void 0 && !t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: MenuPositionerContext is missing. MenuPositioner parts must be placed within <Menu.Positioner>." : ot(33));
  return e;
}
const Bi = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Bi.displayName = "MenuRootContext");
function Xn(t) {
  const e = a.useContext(Bi);
  if (e === void 0 && !t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: MenuRootContext is missing. Menu parts must be placed within <Menu.Root>." : ot(36));
  return e;
}
let Hi = (function(t) {
  return t.open = "data-open", t.closed = "data-closed", t[t.startingStyle = Ar.startingStyle] = "startingStyle", t[t.endingStyle = Ar.endingStyle] = "endingStyle", t.anchorHidden = "data-anchor-hidden", t.side = "data-side", t.align = "data-align", t;
})({}), Wo = /* @__PURE__ */ (function(t) {
  return t.popupOpen = "data-popup-open", t.pressed = "data-pressed", t;
})({});
const Ag = {
  [Wo.popupOpen]: ""
}, kg = {
  [Wo.popupOpen]: "",
  [Wo.pressed]: ""
}, Vg = {
  [Hi.open]: ""
}, Dg = {
  [Hi.closed]: ""
}, Fg = {
  [Hi.anchorHidden]: ""
}, ji = {
  open(t) {
    return t ? Ag : null;
  }
}, Ko = {
  open(t) {
    return t ? kg : null;
  }
}, cs = {
  open(t) {
    return t ? Vg : Dg;
  },
  anchorHidden(t) {
    return t ? Fg : null;
  }
}, pu = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (pu.displayName = "ContextMenuRootContext");
function as(t = !0) {
  const e = a.useContext(pu);
  if (e === void 0 && !t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ContextMenuRootContext is missing. ContextMenu parts must be placed within <ContextMenu.Root>." : ot(25));
  return e;
}
function Lg(t) {
  const {
    closeOnClick: e,
    highlighted: n,
    id: r,
    nodeId: o,
    store: s,
    typingRef: l,
    itemRef: i,
    itemMetadata: f
  } = t, {
    events: u
  } = s.useState("floatingTreeRoot"), c = as(!0), p = c !== void 0;
  return a.useMemo(() => ({
    id: r,
    role: "menuitem",
    tabIndex: n ? 0 : -1,
    onKeyDown(h) {
      h.key === " " && l?.current && h.preventDefault();
    },
    onMouseMove(h) {
      o && u.emit("itemhover", {
        nodeId: o,
        target: h.currentTarget
      });
    },
    onClick(h) {
      e && u.emit("close", {
        domEvent: h,
        reason: lr
      });
    },
    onMouseUp(h) {
      if (c) {
        const g = c.initialCursorPointRef.current;
        if (c.initialCursorPointRef.current = null, p && g && Math.abs(h.clientX - g.x) <= 1 && Math.abs(h.clientY - g.y) <= 1 || p && !ka && h.button === 2)
          return;
      }
      i.current && s.context.allowMouseUpTriggerRef.current && (!p || h.button === 2) && (!f || f.type === "regular-item") && i.current.click();
    }
  }), [e, n, r, u, o, s, l, i, c, p, f]);
}
const Bg = {
  type: "regular-item"
};
function Hg(t) {
  const {
    closeOnClick: e,
    disabled: n = !1,
    highlighted: r,
    id: o,
    store: s,
    typingRef: l = s.context.typingRef,
    nativeButton: i,
    itemMetadata: f,
    nodeId: u
  } = t, c = a.useRef(null), {
    getButtonProps: p,
    buttonRef: h
  } = Lt({
    disabled: n,
    focusableWhenDisabled: !0,
    native: i,
    composite: !0
  }), g = Lg({
    closeOnClick: e,
    highlighted: r,
    id: o,
    nodeId: u,
    store: s,
    typingRef: l,
    itemRef: c,
    itemMetadata: f
  }), d = a.useCallback((b) => At(g, {
    onMouseEnter() {
      f.type === "submenu-trigger" && f.setActive();
    }
  }, b, p), [g, p, f]), y = Tt(c, h);
  return a.useMemo(() => ({
    getItemProps: d,
    itemRef: y
  }), [d, y]);
}
const $i = /* @__PURE__ */ a.createContext({
  register: () => {
  },
  unregister: () => {
  },
  subscribeMapChange: () => () => {
  },
  elementsRef: {
    current: []
  },
  nextIndexRef: {
    current: 0
  }
});
process.env.NODE_ENV !== "production" && ($i.displayName = "CompositeListContext");
function jg() {
  return a.useContext($i);
}
let mu = /* @__PURE__ */ (function(t) {
  return t[t.None = 0] = "None", t[t.GuessFromOrder = 1] = "GuessFromOrder", t;
})({});
function Kr(t = {}) {
  const {
    label: e,
    metadata: n,
    textRef: r,
    indexGuessBehavior: o,
    index: s
  } = t, {
    register: l,
    unregister: i,
    subscribeMapChange: f,
    elementsRef: u,
    labelsRef: c,
    nextIndexRef: p
  } = jg(), h = a.useRef(-1), [g, d] = a.useState(s ?? (o === mu.GuessFromOrder ? () => {
    if (h.current === -1) {
      const E = p.current;
      p.current += 1, h.current = E;
    }
    return h.current;
  } : -1)), y = a.useRef(null), b = a.useCallback((E) => {
    if (y.current = E, g !== -1 && E !== null && (u.current[g] = E, c)) {
      const v = e !== void 0;
      c.current[g] = v ? e : r?.current?.textContent ?? E.textContent;
    }
  }, [g, u, c, e, r]);
  return pe(() => {
    if (s != null)
      return;
    const E = y.current;
    if (E)
      return l(E, n), () => {
        i(E);
      };
  }, [s, l, i, n]), pe(() => {
    if (s == null)
      return f((E) => {
        const v = y.current ? E.get(y.current)?.index : null;
        v != null && d(v);
      });
  }, [s, f, d]), a.useMemo(() => ({
    ref: b,
    index: g
  }), [g, b]);
}
const gu = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    id: s,
    label: l,
    nativeButton: i = !1,
    disabled: f = !1,
    closeOnClick: u = !0,
    style: c,
    ...p
  } = e, h = Kr({
    label: l
  }), g = du(!0), d = Et(s), {
    store: y
  } = Xn(), b = y.useState("isActive", h.index), E = y.useState("itemProps"), {
    getItemProps: v,
    itemRef: m
  } = Hg({
    closeOnClick: u,
    disabled: f,
    highlighted: b,
    id: d,
    store: y,
    nativeButton: i,
    nodeId: g?.context.nodeId,
    itemMetadata: Bg
  });
  return Be("div", e, {
    state: {
      disabled: f,
      highlighted: b
    },
    props: [E, p, v],
    ref: [m, n, h.ref]
  });
});
process.env.NODE_ENV !== "production" && (gu.displayName = "MenuItem");
function $g(t, e) {
  return e != null && !pr(e) ? 0 : typeof t == "function" ? t() : t;
}
function Go(t, e, n) {
  const r = $g(t, n);
  return typeof r == "number" ? r : r?.[e];
}
function fc(t) {
  return typeof t == "function" ? t() : t;
}
function hu(t, e) {
  return e || t === "click" || t === "mousedown";
}
const Ui = /* @__PURE__ */ a.createContext({
  hasProvider: !1,
  timeoutMs: 0,
  delayRef: {
    current: 0
  },
  initialDelayRef: {
    current: 0
  },
  timeout: new $t(),
  currentIdRef: {
    current: null
  },
  currentContextRef: {
    current: null
  }
});
process.env.NODE_ENV !== "production" && (Ui.displayName = "FloatingDelayGroupContext");
function Ug(t) {
  const {
    children: e,
    delay: n,
    timeoutMs: r = 0
  } = t, o = a.useRef(n), s = a.useRef(n), l = a.useRef(null), i = a.useRef(null), f = dt();
  return /* @__PURE__ */ X.jsx(Ui.Provider, {
    value: a.useMemo(() => ({
      hasProvider: !0,
      delayRef: o,
      initialDelayRef: s,
      currentIdRef: l,
      timeoutMs: r,
      currentContextRef: i,
      timeout: f
    }), [r, f]),
    children: e
  });
}
function Wg(t, e = {
  open: !1
}) {
  const n = "rootStore" in t ? t.rootStore : t, r = n.useState("floatingId"), {
    open: o
  } = e, s = a.useContext(Ui), {
    currentIdRef: l,
    delayRef: i,
    timeoutMs: f,
    initialDelayRef: u,
    currentContextRef: c,
    hasProvider: p,
    timeout: h
  } = s, [g, d] = a.useState(!1);
  return pe(() => {
    function y() {
      d(!1), c.current?.setIsInstantPhase(!1), l.current = null, c.current = null, i.current = u.current;
    }
    if (l.current && !o && l.current === r) {
      if (d(!1), f) {
        const b = r;
        return h.start(f, () => {
          n.select("open") || l.current && l.current !== b || y();
        }), () => {
          h.clear();
        };
      }
      y();
    }
  }, [o, r, l, i, f, u, c, h, n]), pe(() => {
    if (!o)
      return;
    const y = c.current, b = l.current;
    h.clear(), c.current = {
      onOpenChange: n.setOpen,
      setIsInstantPhase: d
    }, l.current = r, i.current = {
      open: 0,
      close: Go(u.current, "close")
    }, b !== null && b !== r ? (d(!0), y?.setIsInstantPhase(!0), y?.onOpenChange(!1, ge(ct))) : (d(!1), y?.setIsInstantPhase(!1));
  }, [o, r, n, l, i, f, u, c, h]), pe(() => () => {
    c.current = null;
  }, [c]), a.useMemo(() => ({
    hasProvider: p,
    delayRef: i,
    isInstantPhase: g
  }), [p, i, g]);
}
function $e(t, e, n, r) {
  return t.addEventListener(e, n, r), () => {
    t.removeEventListener(e, n, r);
  };
}
function an(...t) {
  return () => {
    for (let e = 0; e < t.length; e += 1) {
      const n = t[e];
      n && n();
    }
  };
}
function st(t) {
  const e = at(Kg, t).current;
  return e.next = t, pe(e.effect), e;
}
function Kg(t) {
  const e = {
    current: t,
    next: t,
    effect: () => {
      e.current = e.next;
    }
  };
  return e;
}
const Un = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const [r, o] = a.useState();
  pe(() => {
    Aa && o("button");
  }, []);
  const s = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role: r
  };
  return /* @__PURE__ */ X.jsx("span", {
    ...e,
    ref: n,
    style: yn,
    "aria-hidden": r ? void 0 : !0,
    ...s,
    "data-base-ui-focus-guard": ""
  });
});
process.env.NODE_ENV !== "production" && (Un.displayName = "FocusGuard");
function Fr(t) {
  return `data-base-ui-${t}`;
}
let ao = 0;
function Ao(t, e = {}) {
  const {
    preventScroll: n = !1,
    cancelPrevious: r = !0,
    sync: o = !1
  } = e;
  r && cancelAnimationFrame(ao);
  const s = () => t?.focus({
    preventScroll: n
  });
  if (o)
    return s(), Ze;
  const l = requestAnimationFrame(s);
  return ao = l, () => {
    ao === l && (cancelAnimationFrame(l), ao = 0);
  };
}
const Bs = {
  inert: /* @__PURE__ */ new WeakMap(),
  "aria-hidden": /* @__PURE__ */ new WeakMap()
}, dc = "data-base-ui-inert", ui = {
  inert: /* @__PURE__ */ new WeakSet(),
  "aria-hidden": /* @__PURE__ */ new WeakSet()
};
let xr = /* @__PURE__ */ new WeakMap(), Hs = 0;
function Gg(t) {
  return ui[t];
}
function bu(t) {
  return t ? ur(t) ? t.host : bu(t.parentNode) : null;
}
const js = (t, e) => e.map((n) => {
  if (t.contains(n))
    return n;
  const r = bu(n);
  return t.contains(r) ? r : null;
}).filter((n) => n != null), pc = (t) => {
  const e = /* @__PURE__ */ new Set();
  return t.forEach((n) => {
    let r = n;
    for (; r && !e.has(r); )
      e.add(r), r = r.parentNode;
  }), e;
}, mc = (t, e, n) => {
  const r = [], o = (s) => {
    !s || n.has(s) || Array.from(s.children).forEach((l) => {
      It(l) !== "script" && (e.has(l) ? o(l) : r.push(l));
    });
  };
  return o(t), r;
};
function Yg(t, e, n, r, {
  mark: o = !0,
  markerIgnoreElements: s = []
}) {
  const l = r ? "inert" : n ? "aria-hidden" : null;
  let i = null, f = null;
  const u = js(e, t), c = o ? js(e, s) : [], p = new Set(c), h = o ? mc(e, pc(u), new Set(u)).filter((y) => !p.has(y)) : [], g = [], d = [];
  if (l) {
    const y = Bs[l], b = Gg(l);
    f = b, i = y;
    const E = js(e, Array.from(e.querySelectorAll("[aria-live]"))), v = u.concat(E);
    mc(e, pc(v), new Set(v)).forEach((C) => {
      const x = C.getAttribute(l), R = x !== null && x !== "false", S = (y.get(C) || 0) + 1;
      y.set(C, S), g.push(C), S === 1 && R && b.add(C), R || C.setAttribute(l, l === "inert" ? "" : "true");
    });
  }
  return o && h.forEach((y) => {
    const b = (xr.get(y) || 0) + 1;
    xr.set(y, b), d.push(y), b === 1 && y.setAttribute(dc, "");
  }), Hs += 1, () => {
    i && g.forEach((y) => {
      const E = (i.get(y) || 0) - 1;
      i.set(y, E), E || (!f?.has(y) && l && y.removeAttribute(l), f?.delete(y));
    }), o && d.forEach((y) => {
      const b = (xr.get(y) || 0) - 1;
      xr.set(y, b), b || y.removeAttribute(dc);
    }), Hs -= 1, Hs || (Bs.inert = /* @__PURE__ */ new WeakMap(), Bs["aria-hidden"] = /* @__PURE__ */ new WeakMap(), ui.inert = /* @__PURE__ */ new WeakSet(), ui["aria-hidden"] = /* @__PURE__ */ new WeakSet(), xr = /* @__PURE__ */ new WeakMap());
  };
}
function gc(t, e = {}) {
  const {
    ariaHidden: n = !1,
    inert: r = !1,
    mark: o = !0,
    markerIgnoreElements: s = []
  } = e, l = He(t[0]).body;
  return Yg(t, l, n, r, {
    mark: o,
    markerIgnoreElements: s
  });
}
const zg = 500, qg = 500, Xg = {
  style: {
    transition: "none"
  }
}, Jg = "data-base-ui-click-trigger", yu = {
  fallbackAxisSide: "none"
}, Eu = {
  fallbackAxisSide: "end"
}, Zg = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
}, Wi = /* @__PURE__ */ a.createContext(null);
process.env.NODE_ENV !== "production" && (Wi.displayName = "PortalContext");
const Ru = () => a.useContext(Wi), Qg = Fr("portal");
function xu(t = {}) {
  const {
    ref: e,
    container: n,
    componentProps: r = et,
    elementProps: o
  } = t, s = zn(), i = Ru()?.portalNode, [f, u] = a.useState(null), [c, p] = a.useState(null), h = le((b) => {
    b !== null && p(b);
  }), g = a.useRef(null);
  pe(() => {
    if (n === null) {
      g.current && (g.current = null, p(null), u(null));
      return;
    }
    if (s == null)
      return;
    const b = (n && (bi(n) ? n : n.current)) ?? i ?? document.body;
    if (b == null) {
      g.current && (g.current = null, p(null), u(null));
      return;
    }
    g.current !== b && (g.current = b, p(null), u(b));
  }, [n, i, s]);
  const d = Be("div", r, {
    ref: [e, h],
    props: [{
      id: s,
      [Qg]: ""
    }, o]
  });
  return {
    portalNode: c,
    portalSubtree: f && d ? /* @__PURE__ */ Jt.createPortal(d, f) : null
  };
}
const Ki = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    children: r,
    container: o,
    className: s,
    render: l,
    renderGuards: i,
    style: f,
    ...u
  } = e, {
    portalNode: c,
    portalSubtree: p
  } = xu({
    container: o,
    ref: n,
    componentProps: e,
    elementProps: u
  }), h = a.useRef(null), g = a.useRef(null), d = a.useRef(null), y = a.useRef(null), [b, E] = a.useState(null), v = a.useRef(!1), m = b?.modal, C = b?.open, x = typeof i == "boolean" ? i : !!b && !b.modal && b.open && !!c;
  a.useEffect(() => {
    if (!c || m)
      return;
    function S(I) {
      c && I.relatedTarget && cr(I) && (I.type === "focusin" ? v.current && (uc(c), v.current = !1) : (vg(c), v.current = !0));
    }
    return an($e(c, "focusin", S, !0), $e(c, "focusout", S, !0));
  }, [c, m]), a.useEffect(() => {
    !c || C !== !1 || (uc(c), v.current = !1);
  }, [C, c]);
  const R = a.useMemo(() => ({
    beforeOutsideRef: h,
    afterOutsideRef: g,
    beforeInsideRef: d,
    afterInsideRef: y,
    portalNode: c,
    setFocusManagerState: E
  }), [c]);
  return /* @__PURE__ */ X.jsxs(a.Fragment, {
    children: [p, /* @__PURE__ */ X.jsxs(Wi.Provider, {
      value: R,
      children: [x && c && /* @__PURE__ */ X.jsx(Un, {
        "data-type": "outside",
        ref: h,
        onFocus: (S) => {
          if (cr(S, c))
            d.current?.focus();
          else {
            const I = b ? b.domReference : null;
            ru(I)?.focus();
          }
        }
      }), x && c && /* @__PURE__ */ X.jsx("span", {
        "aria-owns": c.id,
        style: Zg
      }), c && /* @__PURE__ */ Jt.createPortal(r, c), x && c && /* @__PURE__ */ X.jsx(Un, {
        "data-type": "outside",
        ref: g,
        onFocus: (S) => {
          if (cr(S, c))
            y.current?.focus();
          else {
            const I = b ? b.domReference : null;
            Fi(I)?.focus(), b?.closeOnFocusOut && b?.onOpenChange(!1, ge(On, S.nativeEvent));
          }
        }
      })]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ki.displayName = "FloatingPortal");
function vu() {
  const t = /* @__PURE__ */ new Map();
  return {
    emit(e, n) {
      t.get(e)?.forEach((r) => r(n));
    },
    on(e, n) {
      t.has(e) || t.set(e, /* @__PURE__ */ new Set()), t.get(e).add(n);
    },
    off(e, n) {
      t.get(e)?.delete(n);
    }
  };
}
class Gi {
  nodesRef = {
    current: []
  };
  events = vu();
  addNode(e) {
    this.nodesRef.current.push(e);
  }
  removeNode(e) {
    const n = this.nodesRef.current.findIndex((r) => r === e);
    n !== -1 && this.nodesRef.current.splice(n, 1);
  }
}
const Yi = /* @__PURE__ */ a.createContext(null);
process.env.NODE_ENV !== "production" && (Yi.displayName = "FloatingNodeContext");
const zi = /* @__PURE__ */ a.createContext(null);
process.env.NODE_ENV !== "production" && (zi.displayName = "FloatingTreeContext");
const xn = () => a.useContext(Yi)?.id || null, Fn = (t) => {
  const e = a.useContext(zi);
  return t ?? e;
};
function Cu(t) {
  const e = zn(), n = Fn(t), r = xn();
  return pe(() => {
    if (!e)
      return;
    const o = {
      id: e,
      parentId: r
    };
    return n?.addNode(o), () => {
      n?.removeNode(o);
    };
  }, [n, e, r]), e;
}
function eh(t) {
  const {
    children: e,
    id: n
  } = t, r = xn();
  return /* @__PURE__ */ X.jsx(Yi.Provider, {
    value: a.useMemo(() => ({
      id: n,
      parentId: r
    }), [n, r]),
    children: e
  });
}
function th(t) {
  const {
    children: e,
    externalTree: n
  } = t, r = at(() => n ?? new Gi()).current;
  return /* @__PURE__ */ X.jsx(zi.Provider, {
    value: r,
    children: e
  });
}
function nh(t, e) {
  const n = it(pt(t));
  return t instanceof n.KeyboardEvent ? "keyboard" : t instanceof n.FocusEvent ? e || "keyboard" : "pointerType" in t ? t.pointerType || "keyboard" : "touches" in t ? "touch" : t instanceof n.MouseEvent ? e || (t.detail === 0 ? "keyboard" : "mouse") : "";
}
const hc = 20;
let Sn = [];
function qi() {
  Sn = Sn.filter((t) => t.deref()?.isConnected);
}
function rh(t) {
  qi(), t && It(t) !== "body" && (Sn.push(new WeakRef(t)), Sn.length > hc && (Sn = Sn.slice(-hc)));
}
function $s() {
  return qi(), Sn[Sn.length - 1]?.deref();
}
function oh(t) {
  return t ? Di(t) ? t : Wr(t)[0] || t : null;
}
function bc(t, e) {
  if (t.hasAttribute("tabindex") && !t.hasAttribute("data-tabindex") || !e.current.includes("floating") && !t.getAttribute("role")?.includes("dialog"))
    return;
  const r = tu(t).filter((s) => {
    const l = s.getAttribute("data-tabindex") || "";
    return Di(s) || s.hasAttribute("data-tabindex") && !l.startsWith("-");
  }), o = t.getAttribute("tabindex");
  e.current.includes("floating") || r.length === 0 ? o !== "0" && t.setAttribute("tabindex", "0") : (o !== "-1" || t.hasAttribute("data-tabindex") && t.getAttribute("data-tabindex") !== "-1") && (t.setAttribute("tabindex", "-1"), t.setAttribute("data-tabindex", "-1"));
}
function Su(t) {
  const {
    context: e,
    children: n,
    disabled: r = !1,
    initialFocus: o = !0,
    returnFocus: s = !0,
    restoreFocus: l = !1,
    modal: i = !0,
    closeOnFocusOut: f = !0,
    openInteractionType: u = "",
    nextFocusableElement: c,
    previousFocusableElement: p,
    beforeContentFocusGuardRef: h,
    externalTree: g,
    getInsideElements: d
  } = t, y = "rootStore" in e ? e.rootStore : e, b = y.useState("open"), E = y.useState("domReferenceElement"), v = y.useState("floatingElement"), {
    events: m,
    dataRef: C
  } = y.context, x = le(() => C.current.floatingContext?.nodeId), R = o === !1, S = si(E) && R, I = a.useRef(["content"]), M = st(o), A = st(s), _ = st(u), L = Fn(g), N = Ru(), P = a.useRef(!1), w = a.useRef(!1), O = a.useRef(!1), V = a.useRef(null), k = a.useRef(""), H = a.useRef(""), U = a.useRef(null), T = a.useRef(null), D = Tt(U, h, N?.beforeInsideRef), $ = Tt(T, N?.afterInsideRef), J = dt(), Z = dt(), q = jr(), B = N != null, Y = kr(v), Q = le((z = Y) => z ? Wr(z) : []), re = le(() => d?.().filter((z) => z != null) ?? []);
  a.useEffect(() => {
    if (r || !i)
      return;
    function z(fe) {
      fe.key === "Tab" && Oe(Y, St(He(Y))) && Q().length === 0 && !S && ft(fe);
    }
    const se = He(Y);
    return $e(se, "keydown", z);
  }, [r, E, Y, i, I, S, Q]), a.useEffect(() => {
    if (r || !b)
      return;
    const z = He(Y);
    function se() {
      O.current = !1;
    }
    function fe(W) {
      const te = pt(W), ne = re(), ee = Oe(v, te) || Oe(E, te) || Oe(N?.portalNode, te) || ne.some((ae) => ae === te || Oe(ae, te));
      O.current = !ee, H.current = W.pointerType || "keyboard", te?.closest(`[${Jg}]`) && (w.current = !0);
    }
    function j() {
      H.current = "keyboard";
    }
    return an($e(z, "pointerdown", fe, !0), $e(z, "pointerup", se, !0), $e(z, "pointercancel", se, !0), $e(z, "keydown", j, !0));
  }, [r, v, E, Y, b, N, re]), a.useEffect(() => {
    if (r || !f)
      return;
    const z = He(Y);
    function se() {
      w.current = !0, Z.start(0, () => {
        w.current = !1;
      });
    }
    function fe(ne) {
      const ee = pt(ne);
      Di(ee) && (V.current = ee);
    }
    function j(ne) {
      const ee = ne.relatedTarget, ae = ne.currentTarget, G = pt(ne);
      queueMicrotask(() => {
        const oe = x(), F = y.context.triggerElements, K = re(), ce = ee?.hasAttribute(Fr("focus-guard")) && [U.current, T.current, N?.beforeInsideRef.current, N?.afterInsideRef.current, N?.beforeOutsideRef.current, N?.afterOutsideRef.current, mn(p), mn(c)].includes(ee), me = !(Oe(E, ee) || Oe(v, ee) || Oe(ee, v) || Oe(N?.portalNode, ee) || K.some((Re) => Re === ee || Oe(Re, ee)) || ee != null && F.hasElement(ee) || F.hasMatchingElement((Re) => Oe(Re, ee)) || ce || L && (ln(L.nodesRef.current, oe).find((Re) => Oe(Re.context?.elements.floating, ee) || Oe(Re.context?.elements.domReference, ee)) || lc(L.nodesRef.current, oe).find((Re) => [Re.context?.elements.floating, kr(Re.context?.elements.floating)].includes(ee) || Re.context?.elements.domReference === ee)));
        if (ae === E && Y && bc(Y, I), l && ae !== E && !ls(G) && St(z) === z.body) {
          if (Qe(Y) && (Y.focus(), l === "popup")) {
            q.request(() => {
              Y.focus();
            });
            return;
          }
          const Re = Q(), Ce = V.current, we = (Ce && Re.includes(Ce) ? Ce : null) || Re[Re.length - 1] || Y;
          Qe(we) && we.focus();
        }
        if (C.current.insideReactTree) {
          C.current.insideReactTree = !1;
          return;
        }
        (S || !i) && ee && me && !w.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        // For an "untrapped" typeable combobox (input role=combobox with
        // initialFocus=false), re-opening the popup and tabbing out should still close it even
        // when the previously focused element (e.g. the next tabbable outside the popup) is
        // focused again. Otherwise, the popup remains open on the second Tab sequence:
        // click input -> Tab (closes) -> click input -> Tab.
        // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
        (S || ee !== $s()) && (P.current = !0, y.setOpen(!1, ge(On, ne)));
      });
    }
    function W() {
      O.current || (C.current.insideReactTree = !0, J.start(0, () => {
        C.current.insideReactTree = !1;
      }));
    }
    const te = Qe(E) ? E : null;
    if (!(!v && !te))
      return an(te && $e(te, "focusout", j), te && $e(te, "pointerdown", se), v && $e(v, "focusin", fe), v && $e(v, "focusout", j), v && N && $e(v, "focusout", W, !0));
  }, [r, E, v, Y, i, L, N, y, f, l, Q, S, x, I, C, J, Z, q, c, p, re]), a.useEffect(() => {
    if (r || !v || !b)
      return;
    const z = Array.from(N?.portalNode?.querySelectorAll(`[${Fr("portal")}]`) || []), fe = (L ? lc(L.nodesRef.current, x()) : []).find((ae) => si(ae.context?.elements.domReference || null))?.context?.elements.domReference, W = [...[v, ...z, U.current, T.current, N?.beforeOutsideRef.current, N?.afterOutsideRef.current, ...re()], fe, mn(p), mn(c), S ? E : null].filter((ae) => ae != null), te = gc(W, {
      ariaHidden: i || S,
      mark: !1
    }), ne = [v, ...z].filter((ae) => ae != null), ee = gc(ne);
    return () => {
      ee(), te();
    };
  }, [b, r, E, v, i, I, N, S, L, x, c, p, re]), pe(() => {
    if (!b || r || !Qe(Y))
      return;
    const z = He(Y), se = St(z);
    queueMicrotask(() => {
      const fe = M.current, j = typeof fe == "function" ? fe(_.current || "") : fe;
      if (j === void 0 || j === !1 || Oe(Y, se))
        return;
      let te = null;
      const ne = () => (te == null && (te = Q(Y)), te[0] || Y);
      let ee;
      j === !0 || j === null ? ee = ne() : ee = mn(j), ee = ee || ne(), Ao(ee, {
        preventScroll: ee === Y
      });
    });
  }, [r, b, Y, R, Q, M, _]), pe(() => {
    if (r || !Y)
      return;
    const z = He(Y), se = St(z);
    rh(se);
    function fe(W) {
      if (W.open || (k.current = nh(W.nativeEvent, H.current)), W.reason === Ct && W.nativeEvent.type === "mouseleave" && (P.current = !0), W.reason === Br)
        if (W.nested)
          P.current = !1;
        else if (ja(W.nativeEvent) || $a(W.nativeEvent))
          P.current = !1;
        else {
          let te = !1;
          He(Y).createElement("div").focus({
            get preventScroll() {
              return te = !0, !1;
            }
          }), te ? P.current = !1 : P.current = !0;
        }
    }
    m.on("openchange", fe);
    function j() {
      const W = A.current;
      let te = typeof W == "function" ? W(k.current) : W;
      if (te === void 0 || te === !1)
        return null;
      if (te === null && (te = !0), typeof te == "boolean") {
        const ee = E || $s();
        return ee && ee.isConnected ? ee : null;
      }
      const ne = E || $s();
      return mn(te) || ne || null;
    }
    return () => {
      m.off("openchange", fe);
      const W = St(z), te = re(), ne = Oe(v, W) || te.some((G) => G === W || Oe(G, W)) || L && ln(L.nodesRef.current, x(), !1).some((G) => Oe(G.context?.elements.floating, W)), ee = A.current, ae = j();
      queueMicrotask(() => {
        const G = oh(ae), oe = typeof ee != "boolean";
        ee && !P.current && Qe(G) && // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        (!(!oe && G !== W && W !== z.body) || ne) && G.focus({
          preventScroll: !0
        }), P.current = !1;
      });
    };
  }, [r, v, Y, A, C, m, L, E, x, re]), pe(() => {
    if (!Oi || b || !v)
      return;
    const z = St(He(v));
    !Qe(z) || !is(z) || Oe(v, z) && z.blur();
  }, [b, v]), pe(() => {
    if (!(r || !N))
      return N.setFocusManagerState({
        modal: i,
        closeOnFocusOut: f,
        open: b,
        onOpenChange: y.setOpen,
        domReference: E
      }), () => {
        N.setFocusManagerState(null);
      };
  }, [r, N, i, b, y, f, E]), pe(() => {
    if (!(r || !Y))
      return bc(Y, I), () => {
        queueMicrotask(qi);
      };
  }, [r, Y, I]);
  const ue = !r && (i ? !S : !0) && (B || i);
  return /* @__PURE__ */ X.jsxs(a.Fragment, {
    children: [ue && /* @__PURE__ */ X.jsx(Un, {
      "data-type": "inside",
      ref: D,
      onFocus: (z) => {
        if (i) {
          const se = Q();
          Ao(se[se.length - 1]);
        } else N?.portalNode && (P.current = !1, cr(z, N.portalNode) ? Fi(E)?.focus() : mn(p ?? N.beforeOutsideRef)?.focus());
      }
    }), n, ue && /* @__PURE__ */ X.jsx(Un, {
      "data-type": "inside",
      ref: $,
      onFocus: (z) => {
        i ? Ao(Q()[0]) : N?.portalNode && (f && (P.current = !0), cr(z, N.portalNode) ? ru(E)?.focus() : mn(c ?? N.afterOutsideRef)?.focus());
      }
    })]
  });
}
function Xi(t, e = {}) {
  const n = "rootStore" in t ? t.rootStore : t, r = n.context.dataRef, {
    enabled: o = !0,
    event: s = "click",
    toggle: l = !0,
    ignoreMouse: i = !1,
    stickIfOpen: f = !0,
    touchOpenDelay: u = 0,
    reason: c = dr
  } = e, p = a.useRef(void 0), h = jr(), g = dt(), d = a.useMemo(() => ({
    onPointerDown(y) {
      p.current = y.pointerType;
    },
    onMouseDown(y) {
      const b = p.current, E = y.nativeEvent, v = n.select("open");
      if (y.button !== 0 || s === "click" || pr(b, !0) && i)
        return;
      const m = r.current.openEvent, C = m?.type, x = n.select("domReferenceElement") !== y.currentTarget, R = v && x || !(v && l && (!(m && f) || C === "click" || C === "mousedown")), S = pt(E);
      if (is(S)) {
        const M = ge(c, E, S);
        R && b === "touch" && u > 0 ? g.start(u, () => {
          n.setOpen(!0, M);
        }) : n.setOpen(R, M);
        return;
      }
      const I = y.currentTarget;
      h.request(() => {
        const M = ge(c, E, I);
        R && b === "touch" && u > 0 ? g.start(u, () => {
          n.setOpen(!0, M);
        }) : n.setOpen(R, M);
      });
    },
    onClick(y) {
      if (s === "mousedown-only")
        return;
      const b = p.current;
      if (s === "mousedown" && b) {
        p.current = void 0;
        return;
      }
      if (pr(b, !0) && i)
        return;
      const E = n.select("open"), v = r.current.openEvent, m = n.select("domReferenceElement") !== y.currentTarget, C = E && m || !(E && l && (!(v && f) || Ua(v))), x = ge(c, y.nativeEvent, y.currentTarget);
      C && b === "touch" && u > 0 ? g.start(u, () => {
        n.setOpen(!0, x);
      }) : n.setOpen(C, x);
    },
    onKeyDown() {
      p.current = void 0;
    }
  }), [r, s, i, n, f, l, h, g, u, c]);
  return a.useMemo(() => o ? {
    reference: d
  } : et, [o, d]);
}
function sh(t, e) {
  let n = null, r = null, o = !1;
  return {
    contextElement: t || void 0,
    getBoundingClientRect() {
      const s = t?.getBoundingClientRect() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      }, l = e.axis === "x" || e.axis === "both", i = e.axis === "y" || e.axis === "both", f = ["mouseenter", "mousemove"].includes(e.dataRef.current.openEvent?.type || "") && e.pointerType !== "touch";
      let u = s.width, c = s.height, p = s.x, h = s.y;
      return n == null && e.x && l && (n = s.x - e.x), r == null && e.y && i && (r = s.y - e.y), p -= n || 0, h -= r || 0, u = 0, c = 0, !o || f ? (u = e.axis === "y" ? s.width : 0, c = e.axis === "x" ? s.height : 0, p = l && e.x != null ? e.x : p, h = i && e.y != null ? e.y : h) : o && !f && (c = e.axis === "x" ? s.height : c, u = e.axis === "y" ? s.width : u), o = !0, {
        width: u,
        height: c,
        x: p,
        y: h,
        top: h,
        right: p + u,
        bottom: h + c,
        left: p
      };
    }
  };
}
function yc(t) {
  return t != null && t.clientX != null;
}
function ih(t, e = {}) {
  const n = "rootStore" in t ? t.rootStore : t, r = n.useState("open"), o = n.useState("floatingElement"), s = n.useState("domReferenceElement"), l = n.context.dataRef, {
    enabled: i = !0,
    axis: f = "both"
  } = e, u = a.useRef(!1), c = a.useRef(null), [p, h] = a.useState(), [g, d] = a.useState([]), y = le((C, x, R) => {
    u.current || l.current.openEvent && !yc(l.current.openEvent) || n.set("positionReference", sh(R ?? s, {
      x: C,
      y: x,
      axis: f,
      dataRef: l,
      pointerType: p
    }));
  }), b = le((C) => {
    r ? c.current || d([]) : y(C.clientX, C.clientY, C.currentTarget);
  }), E = pr(p) ? o : r, v = a.useCallback(() => {
    if (!E || !i)
      return;
    const C = it(o);
    function x(R) {
      const S = pt(R);
      Oe(o, S) ? (c.current?.(), c.current = null) : y(R.clientX, R.clientY);
    }
    if (!l.current.openEvent || yc(l.current.openEvent)) {
      const R = () => {
        c.current?.(), c.current = null;
      };
      return c.current = $e(C, "mousemove", x), R;
    }
    n.set("positionReference", s);
  }, [E, i, o, l, s, n, y]);
  a.useEffect(() => v(), [v, g]), a.useEffect(() => {
    i && !o && (u.current = !1);
  }, [i, o]), a.useEffect(() => {
    !i && r && (u.current = !0);
  }, [i, r]);
  const m = a.useMemo(() => {
    function C(x) {
      h(x.pointerType);
    }
    return {
      onPointerDown: C,
      onPointerEnter: C,
      onMouseMove: b,
      onMouseEnter: b
    };
  }, [b]);
  return a.useMemo(() => i ? {
    reference: m,
    trigger: m
  } : {}, [i, m]);
}
const lh = {
  intentional: "onClick",
  sloppy: "onPointerDown"
};
function ch() {
  return !1;
}
function ah(t) {
  return {
    escapeKey: typeof t == "boolean" ? t : t?.escapeKey ?? !1,
    outsidePress: typeof t == "boolean" ? t : t?.outsidePress ?? !0
  };
}
function us(t, e = {}) {
  const n = "rootStore" in t ? t.rootStore : t, r = n.useState("open"), o = n.useState("floatingElement"), {
    dataRef: s
  } = n.context, {
    enabled: l = !0,
    escapeKey: i = !0,
    outsidePress: f = !0,
    outsidePressEvent: u = "sloppy",
    referencePress: c = ch,
    referencePressEvent: p = "sloppy",
    bubbles: h,
    externalTree: g
  } = e, d = Fn(g), y = le(typeof f == "function" ? f : () => !1), b = typeof f == "function" ? y : f, E = b !== !1, v = le(() => u), m = a.useRef(!1), C = a.useRef(!1), x = a.useRef(!1), {
    escapeKey: R,
    outsidePress: S
  } = ah(h), I = a.useRef(null), M = dt(), A = dt(), _ = le(() => {
    A.clear(), s.current.insideReactTree = !1;
  }), L = a.useRef(!1), N = a.useRef(""), P = le(c), w = le((T) => {
    if (!r || !l || !i || T.key !== "Escape" || L.current)
      return;
    const D = s.current.floatingContext?.nodeId, $ = d ? ln(d.nodesRef.current, D) : [];
    if (!R && $.length > 0) {
      let q = !0;
      if ($.forEach((B) => {
        B.context?.open && !B.context.dataRef.current.__escapeKeyBubbles && (q = !1);
      }), !q)
        return;
    }
    const J = og(T) ? T.nativeEvent : T, Z = ge(Hr, J);
    n.setOpen(!1, Z), !R && !Z.isPropagationAllowed && T.stopPropagation();
  }), O = le(() => {
    s.current.insideReactTree = !0, A.start(0, _);
  });
  a.useEffect(() => {
    if (!r || !l)
      return;
    s.current.__escapeKeyBubbles = R, s.current.__outsidePressBubbles = S;
    const T = new $t(), D = new $t();
    function $() {
      T.clear(), L.current = !0;
    }
    function J() {
      T.start(
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        ns() ? 5 : 0,
        () => {
          L.current = !1;
        }
      );
    }
    function Z() {
      x.current = !0, D.start(0, () => {
        x.current = !1;
      });
    }
    function q() {
      m.current = !1, C.current = !1;
    }
    function B() {
      const F = N.current, K = F === "pen" || !F ? "mouse" : F, ce = v(), me = typeof ce == "function" ? ce() : ce;
      return typeof me == "string" ? me : me[K];
    }
    function Y(F) {
      const K = B();
      return K === "intentional" && F.type !== "click" || K === "sloppy" && F.type === "click";
    }
    function Q(F) {
      const K = s.current.floatingContext?.nodeId, ce = d && ln(d.nodesRef.current, K).some((me) => Gt(F, me.context?.elements.floating));
      return Gt(F, n.select("floatingElement")) || Gt(F, n.select("domReferenceElement")) || ce;
    }
    function re(F) {
      if (Y(F)) {
        _();
        return;
      }
      if (s.current.insideReactTree) {
        _();
        return;
      }
      const K = pt(F), ce = `[${Fr("inert")}]`, me = We(K) ? K.getRootNode() : null, Re = Array.from((ur(me) ? me : He(n.select("floatingElement"))).querySelectorAll(ce)), Ce = n.context.triggerElements;
      if (K && (Ce.hasElement(K) || Ce.hasMatchingElement((be) => Oe(be, K))))
        return;
      let we = We(K) ? K : null;
      for (; we && !sn(we); ) {
        const be = fn(we);
        if (sn(be) || !We(be))
          break;
        we = be;
      }
      if (Re.length && We(K) && !rg(K) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
      !Oe(K, n.select("floatingElement")) && // If the target root element contains none of the markers, then the
      // element was injected after the floating element rendered.
      Re.every((be) => !Oe(we, be)))
        return;
      if (Qe(K) && !("touches" in F)) {
        const be = sn(K), Ne = _t(K), Se = /auto|scroll/, Pe = be || Se.test(Ne.overflowX), Le = be || Se.test(Ne.overflowY), Me = Pe && K.clientWidth > 0 && K.scrollWidth > K.clientWidth, ye = Le && K.clientHeight > 0 && K.scrollHeight > K.clientHeight, Ie = Ne.direction === "rtl", xe = ye && (Ie ? F.offsetX <= K.offsetWidth - K.clientWidth : F.offsetX > K.clientWidth), Te = Me && F.offsetY > K.clientHeight;
        if (xe || Te)
          return;
      }
      if (Q(F))
        return;
      if (B() === "intentional" && x.current) {
        D.clear(), x.current = !1;
        return;
      }
      if (typeof b == "function" && !b(F))
        return;
      const Ee = s.current.floatingContext?.nodeId, he = d ? ln(d.nodesRef.current, Ee) : [];
      if (he.length > 0) {
        let be = !0;
        if (he.forEach((Ne) => {
          Ne.context?.open && !Ne.context.dataRef.current.__outsidePressBubbles && (be = !1);
        }), !be)
          return;
      }
      n.setOpen(!1, ge(Br, F)), _();
    }
    function ue(F) {
      B() !== "sloppy" || F.pointerType === "touch" || !n.select("open") || !l || Gt(F, n.select("floatingElement")) || Gt(F, n.select("domReferenceElement")) || re(F);
    }
    function z(F) {
      if (B() !== "sloppy" || !n.select("open") || !l || Gt(F, n.select("floatingElement")) || Gt(F, n.select("domReferenceElement")))
        return;
      const K = F.touches[0];
      K && (I.current = {
        startTime: Date.now(),
        startX: K.clientX,
        startY: K.clientY,
        dismissOnTouchEnd: !1,
        dismissOnMouseDown: !0
      }, M.start(1e3, () => {
        I.current && (I.current.dismissOnTouchEnd = !1, I.current.dismissOnMouseDown = !1);
      }));
    }
    function se(F, K) {
      const ce = pt(F);
      if (!ce)
        return;
      const me = $e(ce, F.type, () => {
        K(F), me();
      });
    }
    function fe(F) {
      N.current = "touch", se(F, z);
    }
    function j(F) {
      M.clear(), F.type === "pointerdown" && (N.current = F.pointerType), !(F.type === "mousedown" && I.current && !I.current.dismissOnMouseDown) && se(F, (K) => {
        K.type === "pointerdown" ? ue(K) : re(K);
      });
    }
    function W(F) {
      if (!m.current)
        return;
      const K = C.current;
      if (q(), B() === "intentional") {
        if (F.type === "pointercancel") {
          K && Z();
          return;
        }
        if (!Q(F)) {
          if (K) {
            Z();
            return;
          }
          typeof b == "function" && !b(F) || (D.clear(), x.current = !0, _());
        }
      }
    }
    function te(F) {
      if (B() !== "sloppy" || !I.current || Gt(F, n.select("floatingElement")) || Gt(F, n.select("domReferenceElement")))
        return;
      const K = F.touches[0];
      if (!K)
        return;
      const ce = Math.abs(K.clientX - I.current.startX), me = Math.abs(K.clientY - I.current.startY), Re = Math.sqrt(ce * ce + me * me);
      Re > 5 && (I.current.dismissOnTouchEnd = !0), Re > 10 && (re(F), M.clear(), I.current = null);
    }
    function ne(F) {
      se(F, te);
    }
    function ee(F) {
      B() !== "sloppy" || !I.current || Gt(F, n.select("floatingElement")) || Gt(F, n.select("domReferenceElement")) || (I.current.dismissOnTouchEnd && re(F), M.clear(), I.current = null);
    }
    function ae(F) {
      se(F, ee);
    }
    const G = He(o), oe = an(i && an($e(G, "keydown", w), $e(G, "compositionstart", $), $e(G, "compositionend", J)), E && an($e(G, "click", j, !0), $e(G, "pointerdown", j, !0), $e(G, "pointerup", W, !0), $e(G, "pointercancel", W, !0), $e(G, "mousedown", j, !0), $e(G, "mouseup", W, !0), $e(G, "touchstart", fe, !0), $e(G, "touchmove", ne, !0), $e(G, "touchend", ae, !0)));
    return () => {
      oe(), T.clear(), D.clear(), q(), x.current = !1;
    };
  }, [s, o, i, E, b, r, l, R, S, w, _, v, d, n, M]), a.useEffect(_, [b, _]);
  const V = a.useMemo(() => ({
    onKeyDown: w,
    [lh[p]]: (T) => {
      P() && n.setOpen(!1, ge(dr, T.nativeEvent));
    },
    ...p !== "intentional" && {
      onClick(T) {
        P() && n.setOpen(!1, ge(dr, T.nativeEvent));
      }
    }
  }), [w, n, p, P]), k = le((T) => {
    if (!r || !l || T.button !== 0)
      return;
    const D = pt(T.nativeEvent);
    Oe(n.select("floatingElement"), D) && (m.current || (m.current = !0, C.current = !1));
  }), H = le((T) => {
    !r || !l || (T.defaultPrevented || T.nativeEvent.defaultPrevented) && m.current && (C.current = !0);
  }), U = a.useMemo(() => ({
    onKeyDown: w,
    // `onMouseDown` may be blocked if `event.preventDefault()` is called in
    // `onPointerDown`, such as with <NumberField.ScrubArea>.
    // See https://github.com/mui/base-ui/pull/3379
    onPointerDown: H,
    onMouseDown: H,
    onClickCapture: O,
    onMouseDownCapture(T) {
      O(), k(T);
    },
    onPointerDownCapture(T) {
      O(), k(T);
    },
    onMouseUpCapture: O,
    onTouchEndCapture: O,
    onTouchMoveCapture: O
  }), [w, O, k, H]);
  return a.useMemo(() => l ? {
    reference: V,
    floating: U,
    trigger: V
  } : {}, [l, V, U]);
}
function Ec(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const s = jt(e), l = Vi(e), i = ki(l), f = Mt(e), u = s === "y", c = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let g;
  switch (f) {
    case "top":
      g = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Dn(e)) {
    case "start":
      g[l] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      g[l] += h * (n && u ? -1 : 1);
      break;
  }
  return g;
}
async function uh(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: l,
    elements: i,
    strategy: f
  } = t, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = En(e, t), d = Wa(g), b = i[h ? p === "floating" ? "reference" : "floating" : p], E = Vr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: f
  })), v = p === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, m = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), C = await (s.isElement == null ? void 0 : s.isElement(m)) ? await (s.getScale == null ? void 0 : s.getScale(m)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = Vr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: v,
    offsetParent: m,
    strategy: f
  }) : v);
  return {
    top: (E.top - x.top + d.top) / C.y,
    bottom: (x.bottom - E.bottom + d.bottom) / C.y,
    left: (E.left - x.left + d.left) / C.x,
    right: (x.right - E.right + d.right) / C.x
  };
}
const fh = 50, dh = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: l
  } = n, i = l.detectOverflow ? l : {
    ...l,
    detectOverflow: uh
  }, f = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let u = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: c,
    y: p
  } = Ec(u, r, f), h = r, g = 0;
  const d = {};
  for (let y = 0; y < s.length; y++) {
    const b = s[y];
    if (!b)
      continue;
    const {
      name: E,
      fn: v
    } = b, {
      x: m,
      y: C,
      data: x,
      reset: R
    } = await v({
      x: c,
      y: p,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: d,
      rects: u,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    c = m ?? c, p = C ?? p, d[E] = {
      ...d[E],
      ...x
    }, R && g < fh && (g++, typeof R == "object" && (R.placement && (h = R.placement), R.rects && (u = R.rects === !0 ? await l.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : R.rects), {
      x: c,
      y: p
    } = Ec(u, h, f)), y = -1);
  }
  return {
    x: c,
    y: p,
    placement: h,
    strategy: o,
    middlewareData: d
  };
}, ph = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: l,
        initialPlacement: i,
        platform: f,
        elements: u
      } = e, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: h,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: d = "none",
        flipAlignment: y = !0,
        ...b
      } = En(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const E = Mt(o), v = jt(i), m = Mt(i) === i, C = await (f.isRTL == null ? void 0 : f.isRTL(u.floating)), x = h || (m || !y ? [$o(i)] : cg(i)), R = d !== "none";
      !h && R && x.push(...dg(i, y, d, C));
      const S = [i, ...x], I = await f.detectOverflow(e, b), M = [];
      let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (c && M.push(I[E]), p) {
        const P = lg(o, l, C);
        M.push(I[P[0]], I[P[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: M
      }], !M.every((P) => P <= 0)) {
        var _, L;
        const P = (((_ = s.flip) == null ? void 0 : _.index) || 0) + 1, w = S[P];
        if (w && (!(p === "alignment" ? v !== jt(w) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((k) => jt(k.placement) === v ? k.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: A
            },
            reset: {
              placement: w
            }
          };
        let O = (L = A.filter((V) => V.overflows[0] <= 0).sort((V, k) => V.overflows[1] - k.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!O)
          switch (g) {
            case "bestFit": {
              var N;
              const V = (N = A.filter((k) => {
                if (R) {
                  const H = jt(k.placement);
                  return H === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((H) => H > 0).reduce((H, U) => H + U, 0)]).sort((k, H) => k[1] - H[1])[0]) == null ? void 0 : N[0];
              V && (O = V);
              break;
            }
            case "initialPlacement":
              O = i;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function Rc(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function xc(t) {
  return sg.some((e) => t[e] >= 0);
}
const mh = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n,
        platform: r
      } = e, {
        strategy: o = "referenceHidden",
        ...s
      } = En(t, e);
      switch (o) {
        case "referenceHidden": {
          const l = await r.detectOverflow(e, {
            ...s,
            elementContext: "reference"
          }), i = Rc(l, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: xc(i)
            }
          };
        }
        case "escaped": {
          const l = await r.detectOverflow(e, {
            ...s,
            altBoundary: !0
          }), i = Rc(l, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: xc(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Iu = /* @__PURE__ */ new Set(["left", "top"]);
async function gh(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = Mt(n), i = Dn(n), f = jt(n) === "y", u = Iu.has(l) ? -1 : 1, c = s && f ? -1 : 1, p = En(e, t);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: d
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof d == "number" && (g = i === "end" ? d * -1 : d), f ? {
    x: g * c,
    y: h * u
  } : {
    x: h * u,
    y: g * c
  };
}
const hh = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: l,
        middlewareData: i
      } = e, f = await gh(e, t);
      return l === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + f.x,
        y: s + f.y,
        data: {
          ...f,
          placement: l
        }
      };
    }
  };
}, bh = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: s
      } = e, {
        mainAxis: l = !0,
        crossAxis: i = !1,
        limiter: f = {
          fn: (E) => {
            let {
              x: v,
              y: m
            } = E;
            return {
              x: v,
              y: m
            };
          }
        },
        ...u
      } = En(t, e), c = {
        x: n,
        y: r
      }, p = await s.detectOverflow(e, u), h = jt(Mt(o)), g = Ai(h);
      let d = c[g], y = c[h];
      if (l) {
        const E = g === "y" ? "top" : "left", v = g === "y" ? "bottom" : "right", m = d + p[E], C = d - p[v];
        d = ii(m, d, C);
      }
      if (i) {
        const E = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", m = y + p[E], C = y - p[v];
        y = ii(m, y, C);
      }
      const b = f.fn({
        ...e,
        [g]: d,
        [h]: y
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [g]: l,
            [h]: i
          }
        }
      };
    }
  };
}, yh = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: l
      } = e, {
        offset: i = 0,
        mainAxis: f = !0,
        crossAxis: u = !0
      } = En(t, e), c = {
        x: n,
        y: r
      }, p = jt(o), h = Ai(p);
      let g = c[h], d = c[p];
      const y = En(i, e), b = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (f) {
        const m = h === "y" ? "height" : "width", C = s.reference[h] - s.floating[m] + b.mainAxis, x = s.reference[h] + s.reference[m] - b.mainAxis;
        g < C ? g = C : g > x && (g = x);
      }
      if (u) {
        var E, v;
        const m = h === "y" ? "width" : "height", C = Iu.has(Mt(o)), x = s.reference[p] - s.floating[m] + (C && ((E = l.offset) == null ? void 0 : E[p]) || 0) + (C ? 0 : b.crossAxis), R = s.reference[p] + s.reference[m] + (C ? 0 : ((v = l.offset) == null ? void 0 : v[p]) || 0) - (C ? b.crossAxis : 0);
        d < x ? d = x : d > R && (d = R);
      }
      return {
        [h]: g,
        [p]: d
      };
    }
  };
}, Eh = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: l,
        elements: i
      } = e, {
        apply: f = () => {
        },
        ...u
      } = En(t, e), c = await l.detectOverflow(e, u), p = Mt(o), h = Dn(o), g = jt(o) === "y", {
        width: d,
        height: y
      } = s.floating;
      let b, E;
      p === "top" || p === "bottom" ? (b = p, E = h === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (E = p, b = h === "end" ? "top" : "bottom");
      const v = y - c.top - c.bottom, m = d - c.left - c.right, C = mr(y - c[b], v), x = mr(d - c[E], m), R = !e.middlewareData.shift;
      let S = C, I = x;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (I = m), (r = e.middlewareData.shift) != null && r.enabled.y && (S = v), R && !h) {
        const A = Ft(c.left, 0), _ = Ft(c.right, 0), L = Ft(c.top, 0), N = Ft(c.bottom, 0);
        g ? I = d - 2 * (A !== 0 || _ !== 0 ? A + _ : Ft(c.left, c.right)) : S = y - 2 * (L !== 0 || N !== 0 ? L + N : Ft(c.top, c.bottom));
      }
      await f({
        ...e,
        availableWidth: I,
        availableHeight: S
      });
      const M = await l.getDimensions(i.floating);
      return d !== M.width || y !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Tu(t) {
  const e = _t(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = Qe(t), s = o ? t.offsetWidth : n, l = o ? t.offsetHeight : r, i = jo(n) !== s || jo(r) !== l;
  return i && (n = s, r = l), {
    width: n,
    height: r,
    $: i
  };
}
function Ji(t) {
  return We(t) ? t : t.contextElement;
}
function ar(t) {
  const e = Ji(t);
  if (!Qe(e))
    return cn(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Tu(e);
  let l = (s ? jo(n.width) : n.width) / r, i = (s ? jo(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Rh = /* @__PURE__ */ cn(0);
function wu(t) {
  const e = it(t);
  return !ns() || !e.visualViewport ? Rh : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function xh(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== it(t) ? !1 : e;
}
function Wn(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), s = Ji(t);
  let l = cn(1);
  e && (r ? We(r) && (l = ar(r)) : l = ar(t));
  const i = xh(s, n, r) ? wu(s) : cn(0);
  let f = (o.left + i.x) / l.x, u = (o.top + i.y) / l.y, c = o.width / l.x, p = o.height / l.y;
  if (s) {
    const h = it(s), g = r && We(r) ? it(r) : r;
    let d = h, y = Qs(d);
    for (; y && r && g !== d; ) {
      const b = ar(y), E = y.getBoundingClientRect(), v = _t(y), m = E.left + (y.clientLeft + parseFloat(v.paddingLeft)) * b.x, C = E.top + (y.clientTop + parseFloat(v.paddingTop)) * b.y;
      f *= b.x, u *= b.y, c *= b.x, p *= b.y, f += m, u += C, d = it(y), y = Qs(d);
    }
  }
  return Vr({
    width: c,
    height: p,
    x: f,
    y: u
  });
}
function fs(t, e) {
  const n = rs(t).scrollLeft;
  return e ? e.left + n : Wn(dn(t)).left + n;
}
function Pu(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - fs(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function vh(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const s = o === "fixed", l = dn(r), i = e ? ts(e.floating) : !1;
  if (r === l || i && s)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = cn(1);
  const c = cn(0), p = Qe(r);
  if ((p || !p && !s) && ((It(r) !== "body" || Mn(l)) && (f = rs(r)), p)) {
    const g = Wn(r);
    u = ar(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const h = l && !p && !s ? Pu(l, f) : cn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - f.scrollLeft * u.x + c.x + h.x,
    y: n.y * u.y - f.scrollTop * u.y + c.y + h.y
  };
}
function Ch(t) {
  return Array.from(t.getClientRects());
}
function Sh(t) {
  const e = dn(t), n = rs(t), r = t.ownerDocument.body, o = Ft(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), s = Ft(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + fs(t);
  const i = -n.scrollTop;
  return _t(r).direction === "rtl" && (l += Ft(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: l,
    y: i
  };
}
const vc = 25;
function Ih(t, e) {
  const n = it(t), r = dn(t), o = n.visualViewport;
  let s = r.clientWidth, l = r.clientHeight, i = 0, f = 0;
  if (o) {
    s = o.width, l = o.height;
    const c = ns();
    (!c || c && e === "fixed") && (i = o.offsetLeft, f = o.offsetTop);
  }
  const u = fs(r);
  if (u <= 0) {
    const c = r.ownerDocument, p = c.body, h = getComputedStyle(p), g = c.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, d = Math.abs(r.clientWidth - p.clientWidth - g);
    d <= vc && (s -= d);
  } else u <= vc && (s += u);
  return {
    width: s,
    height: l,
    x: i,
    y: f
  };
}
function Th(t, e) {
  const n = Wn(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, s = Qe(t) ? ar(t) : cn(1), l = t.clientWidth * s.x, i = t.clientHeight * s.y, f = o * s.x, u = r * s.y;
  return {
    width: l,
    height: i,
    x: f,
    y: u
  };
}
function Cc(t, e, n) {
  let r;
  if (e === "viewport")
    r = Ih(t, n);
  else if (e === "document")
    r = Sh(dn(t));
  else if (We(e))
    r = Th(e, n);
  else {
    const o = wu(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return Vr(r);
}
function Nu(t, e) {
  const n = fn(t);
  return n === e || !We(n) || sn(n) ? !1 : _t(n).position === "fixed" || Nu(n, e);
}
function wh(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Mr(t, [], !1).filter((i) => We(i) && It(i) !== "body"), o = null;
  const s = _t(t).position === "fixed";
  let l = s ? fn(t) : t;
  for (; We(l) && !sn(l); ) {
    const i = _t(l), f = yi(l);
    !f && i.position === "fixed" && (o = null), (s ? !f && !o : !f && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || Mn(l) && !f && Nu(t, l)) ? r = r.filter((c) => c !== l) : o = i, l = fn(l);
  }
  return e.set(t, r), r;
}
function Ph(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const l = [...n === "clippingAncestors" ? ts(e) ? [] : wh(e, this._c) : [].concat(n), r], i = Cc(e, l[0], o);
  let f = i.top, u = i.right, c = i.bottom, p = i.left;
  for (let h = 1; h < l.length; h++) {
    const g = Cc(e, l[h], o);
    f = Ft(g.top, f), u = mr(g.right, u), c = mr(g.bottom, c), p = Ft(g.left, p);
  }
  return {
    width: u - p,
    height: c - f,
    x: p,
    y: f
  };
}
function Nh(t) {
  const {
    width: e,
    height: n
  } = Tu(t);
  return {
    width: e,
    height: n
  };
}
function Oh(t, e, n) {
  const r = Qe(e), o = dn(e), s = n === "fixed", l = Wn(t, !0, s, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = cn(0);
  function u() {
    f.x = fs(o);
  }
  if (r || !r && !s)
    if ((It(e) !== "body" || Mn(o)) && (i = rs(e)), r) {
      const g = Wn(e, !0, s, e);
      f.x = g.x + e.clientLeft, f.y = g.y + e.clientTop;
    } else o && u();
  s && !r && o && u();
  const c = o && !r && !s ? Pu(o, i) : cn(0), p = l.left + i.scrollLeft - f.x - c.x, h = l.top + i.scrollTop - f.y - c.y;
  return {
    x: p,
    y: h,
    width: l.width,
    height: l.height
  };
}
function Us(t) {
  return _t(t).position === "static";
}
function Sc(t, e) {
  if (!Qe(t) || _t(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return dn(t) === n && (n = n.ownerDocument.body), n;
}
function Ou(t, e) {
  const n = it(t);
  if (ts(t))
    return n;
  if (!Qe(t)) {
    let o = fn(t);
    for (; o && !sn(o); ) {
      if (We(o) && !Us(o))
        return o;
      o = fn(o);
    }
    return n;
  }
  let r = Sc(t, e);
  for (; r && wp(r) && Us(r); )
    r = Sc(r, e);
  return r && sn(r) && Us(r) && !yi(r) ? n : r || Op(t) || n;
}
const Mh = async function(t) {
  const e = this.getOffsetParent || Ou, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: Oh(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function _h(t) {
  return _t(t).direction === "rtl";
}
const Mu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vh,
  getDocumentElement: dn,
  getClippingRect: Ph,
  getOffsetParent: Ou,
  getElementRects: Mh,
  getClientRects: Ch,
  getDimensions: Nh,
  getScale: ar,
  isElement: We,
  isRTL: _h
};
function _u(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Ah(t, e) {
  let n = null, r;
  const o = dn(t);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function l(i, f) {
    i === void 0 && (i = !1), f === void 0 && (f = 1), s();
    const u = t.getBoundingClientRect(), {
      left: c,
      top: p,
      width: h,
      height: g
    } = u;
    if (i || e(), !h || !g)
      return;
    const d = $n(p), y = $n(o.clientWidth - (c + h)), b = $n(o.clientHeight - (p + g)), E = $n(c), m = {
      rootMargin: -d + "px " + -y + "px " + -b + "px " + -E + "px",
      threshold: Ft(0, mr(1, f)) || 1
    };
    let C = !0;
    function x(R) {
      const S = R[0].intersectionRatio;
      if (S !== f) {
        if (!C)
          return l();
        S ? l(!1, S) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !_u(u, t.getBoundingClientRect()) && l(), C = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...m,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, m);
    }
    n.observe(t);
  }
  return l(!0), s;
}
function Ic(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = r, u = Ji(t), c = o || s ? [...u ? Mr(u) : [], ...e ? Mr(e) : []] : [];
  c.forEach((E) => {
    o && E.addEventListener("scroll", n, {
      passive: !0
    }), s && E.addEventListener("resize", n);
  });
  const p = u && i ? Ah(u, n) : null;
  let h = -1, g = null;
  l && (g = new ResizeObserver((E) => {
    let [v] = E;
    v && v.target === u && g && e && (g.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var m;
      (m = g) == null || m.observe(e);
    })), n();
  }), u && !f && g.observe(u), e && g.observe(e));
  let d, y = f ? Wn(t) : null;
  f && b();
  function b() {
    const E = Wn(t);
    y && !_u(y, E) && n(), y = E, d = requestAnimationFrame(b);
  }
  return n(), () => {
    var E;
    c.forEach((v) => {
      o && v.removeEventListener("scroll", n), s && v.removeEventListener("resize", n);
    }), p?.(), (E = g) == null || E.disconnect(), g = null, f && cancelAnimationFrame(d);
  };
}
const kh = hh, Vh = bh, Dh = ph, Fh = Eh, Lh = mh, Bh = yh, Hh = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Mu,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return dh(t, e, {
    ...o,
    platform: s
  });
};
var jh = typeof document < "u", $h = function() {
}, ko = jh ? Ep : $h;
function Yo(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let n, r, o;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (n = t.length, n !== e.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Yo(t[r], e[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(e, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && t.$$typeof) && !Yo(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function Au(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tc(t, e) {
  const n = Au(t);
  return Math.round(e * n) / n;
}
function Ws(t) {
  const e = a.useRef(t);
  return ko(() => {
    e.current = t;
  }), e;
}
function Uh(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: l
    } = {},
    transform: i = !0,
    whileElementsMounted: f,
    open: u
  } = t, [c, p] = a.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [h, g] = a.useState(r);
  Yo(h, r) || g(r);
  const [d, y] = a.useState(null), [b, E] = a.useState(null), v = a.useCallback((k) => {
    k !== R.current && (R.current = k, y(k));
  }, []), m = a.useCallback((k) => {
    k !== S.current && (S.current = k, E(k));
  }, []), C = s || d, x = l || b, R = a.useRef(null), S = a.useRef(null), I = a.useRef(c), M = f != null, A = Ws(f), _ = Ws(o), L = Ws(u), N = a.useCallback(() => {
    if (!R.current || !S.current)
      return;
    const k = {
      placement: e,
      strategy: n,
      middleware: h
    };
    _.current && (k.platform = _.current), Hh(R.current, S.current, k).then((H) => {
      const U = {
        ...H,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: L.current !== !1
      };
      P.current && !Yo(I.current, U) && (I.current = U, Jt.flushSync(() => {
        p(U);
      }));
    });
  }, [h, e, n, _, L]);
  ko(() => {
    u === !1 && I.current.isPositioned && (I.current.isPositioned = !1, p((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [u]);
  const P = a.useRef(!1);
  ko(() => (P.current = !0, () => {
    P.current = !1;
  }), []), ko(() => {
    if (C && (R.current = C), x && (S.current = x), C && x) {
      if (A.current)
        return A.current(C, x, N);
      N();
    }
  }, [C, x, N, A, M]);
  const w = a.useMemo(() => ({
    reference: R,
    floating: S,
    setReference: v,
    setFloating: m
  }), [v, m]), O = a.useMemo(() => ({
    reference: C,
    floating: x
  }), [C, x]), V = a.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return k;
    const H = Tc(O.floating, c.x), U = Tc(O.floating, c.y);
    return i ? {
      ...k,
      transform: "translate(" + H + "px, " + U + "px)",
      ...Au(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: H,
      top: U
    };
  }, [n, i, O.floating, c.x, c.y]);
  return a.useMemo(() => ({
    ...c,
    update: N,
    refs: w,
    elements: O,
    floatingStyles: V
  }), [c, N, w, O, V]);
}
const Wh = (t, e) => {
  const n = kh(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, Kh = (t, e) => {
  const n = Vh(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, Gh = (t, e) => ({
  fn: Bh(t).fn,
  options: [t, e]
}), Yh = (t, e) => {
  const n = Dh(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, zh = (t, e) => {
  const n = Fh(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, qh = (t, e) => {
  const n = Lh(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, ie = (t, e, n, r, o, s, ...l) => {
  if (l.length > 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "Unsupported number of selectors" : ot(1));
  let i;
  if (t)
    i = t;
  else
    throw (
      /* minify-error-disabled */
      new Error("Missing arguments")
    );
  return i;
};
var uo = { exports: {} }, Ks = {};
var wc;
function Xh() {
  if (wc) return Ks;
  wc = 1;
  var t = Gn;
  function e(p, h) {
    return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : e, r = t.useState, o = t.useEffect, s = t.useLayoutEffect, l = t.useDebugValue;
  function i(p, h) {
    var g = h(), d = r({ inst: { value: g, getSnapshot: h } }), y = d[0].inst, b = d[1];
    return s(
      function() {
        y.value = g, y.getSnapshot = h, f(y) && b({ inst: y });
      },
      [p, g, h]
    ), o(
      function() {
        return f(y) && b({ inst: y }), p(function() {
          f(y) && b({ inst: y });
        });
      },
      [p]
    ), l(g), g;
  }
  function f(p) {
    var h = p.getSnapshot;
    p = p.value;
    try {
      var g = h();
      return !n(p, g);
    } catch {
      return !0;
    }
  }
  function u(p, h) {
    return h();
  }
  var c = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : i;
  return Ks.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : c, Ks;
}
var Gs = {};
var Pc;
function Jh() {
  return Pc || (Pc = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(g, d) {
      return g === d && (g !== 0 || 1 / g === 1 / d) || g !== g && d !== d;
    }
    function e(g, d) {
      c || o.startTransition === void 0 || (c = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var y = d();
      if (!p) {
        var b = d();
        s(y, b) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      b = l({
        inst: { value: y, getSnapshot: d }
      });
      var E = b[0].inst, v = b[1];
      return f(
        function() {
          E.value = y, E.getSnapshot = d, n(E) && v({ inst: E });
        },
        [g, y, d]
      ), i(
        function() {
          return n(E) && v({ inst: E }), g(function() {
            n(E) && v({ inst: E });
          });
        },
        [g]
      ), u(y), y;
    }
    function n(g) {
      var d = g.getSnapshot;
      g = g.value;
      try {
        var y = d();
        return !s(g, y);
      } catch {
        return !0;
      }
    }
    function r(g, d) {
      return d();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Gn, s = typeof Object.is == "function" ? Object.is : t, l = o.useState, i = o.useEffect, f = o.useLayoutEffect, u = o.useDebugValue, c = !1, p = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : e;
    Gs.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Gs;
}
var Nc;
function Zi() {
  return Nc || (Nc = 1, process.env.NODE_ENV === "production" ? uo.exports = Xh() : uo.exports = Jh()), uo.exports;
}
var Qi = Zi(), fo = { exports: {} }, Ys = {};
var Oc;
function Zh() {
  if (Oc) return Ys;
  Oc = 1;
  var t = Gn, e = Zi();
  function n(u, c) {
    return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = e.useSyncExternalStore, s = t.useRef, l = t.useEffect, i = t.useMemo, f = t.useDebugValue;
  return Ys.useSyncExternalStoreWithSelector = function(u, c, p, h, g) {
    var d = s(null);
    if (d.current === null) {
      var y = { hasValue: !1, value: null };
      d.current = y;
    } else y = d.current;
    d = i(
      function() {
        function E(R) {
          if (!v) {
            if (v = !0, m = R, R = h(R), g !== void 0 && y.hasValue) {
              var S = y.value;
              if (g(S, R))
                return C = S;
            }
            return C = R;
          }
          if (S = C, r(m, R)) return S;
          var I = h(R);
          return g !== void 0 && g(S, I) ? (m = R, S) : (m = R, C = I);
        }
        var v = !1, m, C, x = p === void 0 ? null : p;
        return [
          function() {
            return E(c());
          },
          x === null ? void 0 : function() {
            return E(x());
          }
        ];
      },
      [c, p, h, g]
    );
    var b = o(u, d[0], d[1]);
    return l(
      function() {
        y.hasValue = !0, y.value = b;
      },
      [b]
    ), f(b), b;
  }, Ys;
}
var zs = {};
var Mc;
function Qh() {
  return Mc || (Mc = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(u, c) {
      return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var e = Gn, n = Zi(), r = typeof Object.is == "function" ? Object.is : t, o = n.useSyncExternalStore, s = e.useRef, l = e.useEffect, i = e.useMemo, f = e.useDebugValue;
    zs.useSyncExternalStoreWithSelector = function(u, c, p, h, g) {
      var d = s(null);
      if (d.current === null) {
        var y = { hasValue: !1, value: null };
        d.current = y;
      } else y = d.current;
      d = i(
        function() {
          function E(R) {
            if (!v) {
              if (v = !0, m = R, R = h(R), g !== void 0 && y.hasValue) {
                var S = y.value;
                if (g(S, R))
                  return C = S;
              }
              return C = R;
            }
            if (S = C, r(m, R))
              return S;
            var I = h(R);
            return g !== void 0 && g(S, I) ? (m = R, S) : (m = R, C = I);
          }
          var v = !1, m, C, x = p === void 0 ? null : p;
          return [
            function() {
              return E(c());
            },
            x === null ? void 0 : function() {
              return E(x());
            }
          ];
        },
        [c, p, h, g]
      );
      var b = o(u, d[0], d[1]);
      return l(
        function() {
          y.hasValue = !0, y.value = b;
        },
        [b]
      ), f(b), b;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), zs;
}
var _c;
function eb() {
  return _c || (_c = 1, process.env.NODE_ENV === "production" ? fo.exports = Zh() : fo.exports = Qh()), fo.exports;
}
var tb = eb();
const fi = [];
let di;
function nb() {
  return di;
}
function rb(t) {
  fi.push(t);
}
function el(t) {
  const e = (n, r) => {
    const o = at(ob).current;
    let s;
    try {
      di = o;
      for (const l of fi)
        l.before(o);
      s = t(n, r);
      for (const l of fi)
        l.after(o);
      o.didInitialize = !0;
    } finally {
      di = void 0;
    }
    return s;
  };
  return e.displayName = t.displayName || t.name, e;
}
function ku(t) {
  return /* @__PURE__ */ a.forwardRef(el(t));
}
function ob() {
  return {
    didInitialize: !1
  };
}
const sb = Ci(19), ib = sb ? cb : ab;
function de(t, e, n, r, o) {
  return ib(t, e, n, r, o);
}
function lb(t, e, n, r, o) {
  const s = a.useCallback(() => e(t.getSnapshot(), n, r, o), [t, e, n, r, o]);
  return Qi.useSyncExternalStore(t.subscribe, s, s);
}
rb({
  before(t) {
    t.syncIndex = 0, t.didInitialize || (t.syncTick = 1, t.syncHooks = [], t.didChangeStore = !0, t.getSnapshot = () => {
      let e = !1;
      for (let n = 0; n < t.syncHooks.length; n += 1) {
        const r = t.syncHooks[n], o = r.selector(r.store.state, r.a1, r.a2, r.a3);
        (r.didChange || !Object.is(r.value, o)) && (e = !0, r.value = o, r.didChange = !1);
      }
      return e && (t.syncTick += 1), t.syncTick;
    });
  },
  after(t) {
    t.syncHooks.length > 0 && (t.didChangeStore && (t.didChangeStore = !1, t.subscribe = (e) => {
      const n = /* @__PURE__ */ new Set();
      for (const o of t.syncHooks)
        n.add(o.store);
      const r = [];
      for (const o of n)
        r.push(o.subscribe(e));
      return () => {
        for (const o of r)
          o();
      };
    }), Qi.useSyncExternalStore(t.subscribe, t.getSnapshot, t.getSnapshot));
  }
});
function cb(t, e, n, r, o) {
  const s = nb();
  if (!s)
    return lb(t, e, n, r, o);
  const l = s.syncIndex;
  s.syncIndex += 1;
  let i;
  return s.didInitialize ? (i = s.syncHooks[l], (i.store !== t || i.selector !== e || !Object.is(i.a1, n) || !Object.is(i.a2, r) || !Object.is(i.a3, o)) && (i.store !== t && (s.didChangeStore = !0), i.store = t, i.selector = e, i.a1 = n, i.a2 = r, i.a3 = o, i.didChange = !0)) : (i = {
    store: t,
    selector: e,
    a1: n,
    a2: r,
    a3: o,
    value: e(t.getSnapshot(), n, r, o),
    didChange: !1
  }, s.syncHooks.push(i)), i.value;
}
function ab(t, e, n, r, o) {
  return tb.useSyncExternalStoreWithSelector(t.subscribe, t.getSnapshot, t.getSnapshot, (s) => e(s, n, r, o));
}
class tl {
  /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */
  // Internal state to handle recursive `setState()` calls
  constructor(e) {
    this.state = e, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
  }
  /**
   * Registers a listener that will be called whenever the store's state changes.
   *
   * @param fn The listener function to be called on state changes.
   * @returns A function to unsubscribe the listener.
   */
  subscribe = (e) => (this.listeners.add(e), () => {
    this.listeners.delete(e);
  });
  /**
   * Returns the current state of the store.
   */
  getSnapshot = () => this.state;
  /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */
  setState(e) {
    if (this.state === e)
      return;
    this.state = e, this.updateTick += 1;
    const n = this.updateTick;
    for (const r of this.listeners) {
      if (n !== this.updateTick)
        return;
      r(e);
    }
  }
  /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */
  update(e) {
    for (const n in e)
      if (!Object.is(this.state[n], e[n])) {
        this.setState({
          ...this.state,
          ...e
        });
        return;
      }
  }
  /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */
  set(e, n) {
    Object.is(this.state[e], n) || this.setState({
      ...this.state,
      [e]: n
    });
  }
  /**
   * Gives the state a new reference and updates all registered listeners.
   */
  notifyAll() {
    const e = {
      ...this.state
    };
    this.setState(e);
  }
  use(e, n, r, o) {
    return de(this, e, n, r, o);
  }
}
class nl extends tl {
  /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */
  constructor(e, n = {}, r) {
    super(e), this.context = n, this.selectors = r;
  }
  /**
   * Non-reactive values such as refs, callbacks, etc.
   */
  /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValue(e, n) {
    a.useDebugValue(e), pe(() => {
      this.state[e] !== n && this.set(e, n);
    }, [e, n]);
  }
  /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValueWithCleanup(e, n) {
    const r = this;
    pe(() => (r.state[e] !== n && r.set(e, n), () => {
      r.set(e, void 0);
    }), [r, e, n]);
  }
  /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */
  useSyncedValues(e) {
    const n = this;
    if (process.env.NODE_ENV !== "production") {
      a.useDebugValue(e, (l) => Object.keys(l));
      const o = a.useRef(Object.keys(e)).current, s = Object.keys(e);
      (o.length !== s.length || o.some((l, i) => l !== s[i])) && console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
    }
    const r = Object.values(e);
    pe(() => {
      n.update(e);
    }, [n, ...r]);
  }
  /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */
  useControlledProp(e, n) {
    a.useDebugValue(e);
    const r = n !== void 0;
    if (pe(() => {
      r && !Object.is(this.state[e], n) && super.setState({
        ...this.state,
        [e]: n
      });
    }, [e, n, r]), process.env.NODE_ENV !== "production") {
      const o = this.controlledValues ??= /* @__PURE__ */ new Map();
      o.has(e) || o.set(e, r);
      const s = o.get(e);
      s !== void 0 && s !== r && console.error(`A component is changing the ${r ? "" : "un"}controlled state of ${e.toString()} to be ${r ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
    }
  }
  /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */
  select(e, n, r, o) {
    const s = this.selectors[e];
    return s(this.state, n, r, o);
  }
  /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */
  useState(e, n, r, o) {
    return a.useDebugValue(e), de(this, this.selectors[e], n, r, o);
  }
  /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */
  useContextCallback(e, n) {
    a.useDebugValue(e);
    const r = le(n ?? Ze);
    this.context[e] = r;
  }
  /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */
  useStateSetter(e) {
    const n = a.useRef(void 0);
    return n.current === void 0 && (n.current = (r) => {
      this.set(e, r);
    }), n.current;
  }
  /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */
  observe(e, n) {
    let r;
    typeof e == "function" ? r = e : r = this.selectors[e];
    let o = r(this.state);
    return n(o, o, this), this.subscribe((s) => {
      const l = r(s);
      if (!Object.is(o, l)) {
        const i = o;
        o = l, n(l, i, this);
      }
    });
  }
}
function ub() {
  const [, t] = a.useState({});
  return a.useCallback(() => {
    t({});
  }, []);
}
const fb = {
  open: ie((t) => t.open),
  transitionStatus: ie((t) => t.transitionStatus),
  domReferenceElement: ie((t) => t.domReferenceElement),
  referenceElement: ie((t) => t.positionReference ?? t.referenceElement),
  floatingElement: ie((t) => t.floatingElement),
  floatingId: ie((t) => t.floatingId)
};
class rl extends nl {
  constructor(e) {
    const {
      syncOnly: n,
      nested: r,
      onOpenChange: o,
      triggerElements: s,
      ...l
    } = e;
    super({
      ...l,
      positionReference: l.referenceElement,
      domReferenceElement: l.referenceElement
    }, {
      onOpenChange: o,
      dataRef: {
        current: {}
      },
      events: vu(),
      nested: r,
      triggerElements: s
    }, fb), this.syncOnly = n;
  }
  /**
   * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
   */
  syncOpenEvent = (e, n) => {
    (!e || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
    // click events to upgrade a hover-open.
    n != null && Ua(n)) && (this.context.dataRef.current.openEvent = e ? n : void 0);
  };
  /**
   * Runs the root-owned side effects for an open state change.
   */
  dispatchOpenChange = (e, n) => {
    this.syncOpenEvent(e, n.event);
    const r = {
      open: e,
      reason: n.reason,
      nativeEvent: n.event,
      nested: this.context.nested,
      triggerElement: n.trigger
    };
    this.context.events.emit("openchange", r);
  };
  /**
   * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
   *
   * @param newOpen The new open state.
   * @param eventDetails Details about the event that triggered the open state change.
   */
  setOpen = (e, n) => {
    if (this.syncOnly) {
      this.context.onOpenChange?.(e, n);
      return;
    }
    this.dispatchOpenChange(e, n), this.context.onOpenChange?.(e, n);
  };
}
function db(t, e) {
  const n = a.useRef(null), r = a.useRef(null);
  return a.useCallback((o) => {
    if (t !== void 0) {
      if (n.current !== null) {
        const s = n.current, l = r.current, i = e.context.triggerElements.getById(s);
        l && i === l && e.context.triggerElements.delete(s), n.current = null, r.current = null;
      }
      o !== null && (n.current = t, r.current = o, e.context.triggerElements.add(t, o));
    }
  }, [e, t]);
}
function Vu(t, e, n, r) {
  const o = n.useState("isMountedByTrigger", t), s = db(t, n), l = le((i) => {
    if (s(i), !i || !n.select("open"))
      return;
    const f = n.select("activeTriggerId");
    if (f === t) {
      n.update({
        activeTriggerElement: i,
        ...r
      });
      return;
    }
    f == null && n.update({
      activeTriggerId: t,
      activeTriggerElement: i,
      ...r
    });
  });
  return pe(() => {
    o && n.update({
      activeTriggerElement: e.current,
      ...r
    });
  }, [o, n, e, ...Object.values(r)]), {
    registerTrigger: l,
    isMountedByThisTrigger: o
  };
}
function Du(t) {
  const e = t.useState("open");
  pe(() => {
    if (e && !t.select("activeTriggerId") && t.context.triggerElements.size === 1) {
      const n = t.context.triggerElements.entries().next();
      if (!n.done) {
        const [r, o] = n.value;
        t.update({
          activeTriggerId: r,
          activeTriggerElement: o
        });
      }
    }
  }, [e, t]);
}
function Fu(t, e, n) {
  const {
    mounted: r,
    setMounted: o,
    transitionStatus: s
  } = kn(t);
  e.useSyncedValues({
    mounted: r,
    transitionStatus: s
  });
  const l = le(() => {
    o(!1), e.update({
      activeTriggerId: null,
      activeTriggerElement: null,
      mounted: !1
    }), n?.(), e.context.onOpenChangeComplete?.(!1);
  }), i = e.useState("preventUnmountingOnClose");
  return en({
    enabled: !i,
    open: t,
    ref: e.context.popupRef,
    onComplete() {
      t || l();
    }
  }), {
    forceUnmount: l,
    transitionStatus: s
  };
}
class ds {
  constructor() {
    this.elementsSet = /* @__PURE__ */ new Set(), this.idMap = /* @__PURE__ */ new Map();
  }
  /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */
  add(e, n) {
    const r = this.idMap.get(e);
    if (r !== n && (r !== void 0 && this.elementsSet.delete(r), this.elementsSet.add(n), this.idMap.set(e, n), process.env.NODE_ENV !== "production" && this.elementsSet.size !== this.idMap.size))
      throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
  }
  /**
   * Removes the trigger element with the given ID.
   */
  delete(e) {
    const n = this.idMap.get(e);
    n && (this.elementsSet.delete(n), this.idMap.delete(e));
  }
  /**
   * Whether the given element is registered as a trigger.
   */
  hasElement(e) {
    return this.elementsSet.has(e);
  }
  /**
   * Whether there is a registered trigger element matching the given predicate.
   */
  hasMatchingElement(e) {
    for (const n of this.elementsSet)
      if (e(n))
        return !0;
    return !1;
  }
  /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */
  getById(e) {
    return this.idMap.get(e);
  }
  /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */
  entries() {
    return this.idMap.entries();
  }
  /**
   * Returns an iterable of all registered trigger elements.
   */
  elements() {
    return this.elementsSet.values();
  }
  /**
   * Returns the number of registered trigger elements.
   */
  get size() {
    return this.idMap.size;
  }
}
function pb() {
  return new rl({
    open: !1,
    transitionStatus: void 0,
    floatingElement: null,
    referenceElement: null,
    triggerElements: new ds(),
    floatingId: "",
    syncOnly: !1,
    nested: !1,
    onOpenChange: void 0
  });
}
function Lu() {
  return {
    open: !1,
    openProp: void 0,
    mounted: !1,
    transitionStatus: void 0,
    floatingRootContext: pb(),
    preventUnmountingOnClose: !1,
    payload: void 0,
    activeTriggerId: null,
    activeTriggerElement: null,
    triggerIdProp: void 0,
    popupElement: null,
    positionerElement: null,
    activeTriggerProps: et,
    inactiveTriggerProps: et,
    popupProps: et
  };
}
const po = ie((t) => t.triggerIdProp ?? t.activeTriggerId), Bu = {
  open: ie((t) => t.openProp ?? t.open),
  mounted: ie((t) => t.mounted),
  transitionStatus: ie((t) => t.transitionStatus),
  floatingRootContext: ie((t) => t.floatingRootContext),
  preventUnmountingOnClose: ie((t) => t.preventUnmountingOnClose),
  payload: ie((t) => t.payload),
  activeTriggerId: po,
  activeTriggerElement: ie((t) => t.mounted ? t.activeTriggerElement : null),
  /**
   * Whether the trigger with the given ID was used to open the popup.
   */
  isTriggerActive: ie((t, e) => e !== void 0 && po(t) === e),
  /**
   * Whether the popup is open and was activated by a trigger with the given ID.
   */
  isOpenedByTrigger: ie((t, e) => e !== void 0 && po(t) === e && t.open),
  /**
   * Whether the popup is mounted and was activated by a trigger with the given ID.
   */
  isMountedByTrigger: ie((t, e) => e !== void 0 && po(t) === e && t.mounted),
  triggerProps: ie((t, e) => e ? t.activeTriggerProps : t.inactiveTriggerProps),
  popupProps: ie((t) => t.popupProps),
  popupElement: ie((t) => t.popupElement),
  positionerElement: ie((t) => t.positionerElement)
};
function ol(t) {
  const {
    open: e = !1,
    onOpenChange: n,
    elements: r = {}
  } = t, o = zn(), s = xn() != null;
  if (process.env.NODE_ENV !== "production") {
    const i = r.reference;
    i && !We(i) && console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
  }
  const l = at(() => new rl({
    open: e,
    transitionStatus: void 0,
    onOpenChange: n,
    referenceElement: r.reference ?? null,
    floatingElement: r.floating ?? null,
    triggerElements: new ds(),
    floatingId: o,
    syncOnly: !1,
    nested: s
  })).current;
  return pe(() => {
    const i = {
      open: e,
      floatingId: o
    };
    r.reference !== void 0 && (i.referenceElement = r.reference, i.domReferenceElement = We(r.reference) ? r.reference : null), r.floating !== void 0 && (i.floatingElement = r.floating), l.update(i);
  }, [e, o, r.reference, r.floating, l]), l.context.onOpenChange = n, l.context.nested = s, l;
}
function mb(t = {}) {
  const {
    nodeId: e,
    externalTree: n
  } = t, r = ol(t), o = t.rootContext || r, s = {
    reference: o.useState("referenceElement"),
    floating: o.useState("floatingElement"),
    domReference: o.useState("domReferenceElement")
  }, [l, i] = a.useState(null), f = a.useRef(null), u = Fn(n);
  pe(() => {
    s.domReference && (f.current = s.domReference);
  }, [s.domReference]);
  const c = Uh({
    ...t,
    elements: {
      ...s,
      ...l && {
        reference: l
      }
    }
  }), p = a.useCallback((I) => {
    const M = We(I) ? {
      getBoundingClientRect: () => I.getBoundingClientRect(),
      getClientRects: () => I.getClientRects(),
      contextElement: I
    } : I;
    i(M), c.refs.setReference(M);
  }, [c.refs]), [h, g] = a.useState(void 0), [d, y] = a.useState(null);
  o.useSyncedValue("referenceElement", h ?? null);
  const b = We(h) ? h : null;
  o.useSyncedValue("domReferenceElement", h === void 0 ? s.domReference : b), o.useSyncedValue("floatingElement", d);
  const E = a.useCallback((I) => {
    (We(I) || I === null) && (f.current = I, g(I)), (We(c.refs.reference.current) || c.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    I !== null && !We(I)) && c.refs.setReference(I);
  }, [c.refs, g]), v = a.useCallback((I) => {
    y(I), c.refs.setFloating(I);
  }, [c.refs]), m = a.useMemo(() => ({
    ...c.refs,
    setReference: E,
    setFloating: v,
    setPositionReference: p,
    domReference: f
  }), [c.refs, E, v, p]), C = a.useMemo(() => ({
    ...c.elements,
    domReference: s.domReference
  }), [c.elements, s.domReference]), x = o.useState("open"), R = o.useState("floatingId"), S = a.useMemo(() => ({
    ...c,
    dataRef: o.context.dataRef,
    open: x,
    onOpenChange: o.setOpen,
    events: o.context.events,
    floatingId: R,
    refs: m,
    elements: C,
    nodeId: e,
    rootStore: o
  }), [c, m, C, e, o, x, R]);
  return pe(() => {
    o.context.dataRef.current.floatingContext = S;
    const I = u?.nodesRef.current.find((M) => M.id === e);
    I && (I.context = S);
  }), a.useMemo(() => ({
    ...c,
    context: S,
    refs: m,
    elements: C,
    rootStore: o
  }), [c, m, C, S, o]);
}
function Hu(t) {
  const {
    popupStore: e,
    treatPopupAsFloatingElement: n = !1,
    onOpenChange: r
  } = t, o = zn(), s = xn() != null, l = e.useState("open"), i = e.useState("activeTriggerElement"), f = e.useState(n ? "popupElement" : "positionerElement"), u = e.context.triggerElements, c = at(() => new rl({
    open: l,
    transitionStatus: void 0,
    referenceElement: i,
    floatingElement: f,
    triggerElements: u,
    onOpenChange: r,
    floatingId: o,
    syncOnly: !0,
    nested: s
  })).current;
  return pe(() => {
    const p = {
      open: l,
      floatingId: o,
      referenceElement: i,
      floatingElement: f
    };
    We(i) && (p.domReferenceElement = i), c.state.positionReference === c.state.referenceElement && (p.positionReference = i), c.update(p);
  }, [l, o, i, f, c]), c.context.onOpenChange = r, c.context.nested = s, c;
}
const qs = ka && Aa;
function ju(t, e = {}) {
  const n = "rootStore" in t ? t.rootStore : t, {
    events: r,
    dataRef: o
  } = n.context, {
    enabled: s = !0,
    delay: l
  } = e, i = a.useRef(!1), f = a.useRef(null), u = dt(), c = a.useRef(!0);
  a.useEffect(() => {
    const h = n.select("domReferenceElement");
    if (!s)
      return;
    const g = it(h);
    function d() {
      const E = n.select("domReferenceElement");
      !n.select("open") && Qe(E) && E === St(He(E)) && (i.current = !0);
    }
    function y() {
      c.current = !0;
    }
    function b() {
      c.current = !1;
    }
    return an($e(g, "blur", d), qs && $e(g, "keydown", y, !0), qs && $e(g, "pointerdown", b, !0));
  }, [n, s]), a.useEffect(() => {
    if (!s)
      return;
    function h(g) {
      if (g.reason === dr || g.reason === Hr) {
        const d = n.select("domReferenceElement");
        We(d) && (f.current = d, i.current = !0);
      }
    }
    return r.on("openchange", h), () => {
      r.off("openchange", h);
    };
  }, [r, s, n]);
  const p = a.useMemo(() => ({
    onMouseLeave() {
      i.current = !1, f.current = null;
    },
    onFocus(h) {
      const g = h.currentTarget;
      if (i.current) {
        if (f.current === g)
          return;
        i.current = !1, f.current = null;
      }
      const d = pt(h.nativeEvent);
      if (We(d)) {
        if (qs && !h.relatedTarget) {
          if (!c.current && !is(d))
            return;
        } else if (!Ha(d))
          return;
      }
      const y = Ho(h.relatedTarget, n.context.triggerElements), {
        nativeEvent: b,
        currentTarget: E
      } = h, v = typeof l == "function" ? l() : l;
      if (n.select("open") && y || v === 0 || v === void 0) {
        n.setOpen(!0, ge(ir, b, E));
        return;
      }
      u.start(v, () => {
        i.current || n.setOpen(!0, ge(ir, b, E));
      });
    },
    onBlur(h) {
      i.current = !1, f.current = null;
      const g = h.relatedTarget, d = h.nativeEvent, y = We(g) && g.hasAttribute(Fr("focus-guard")) && g.getAttribute("data-type") === "outside";
      u.start(0, () => {
        const b = n.select("domReferenceElement"), E = St(He(b));
        !g && E === b || Oe(o.current.floatingContext?.refs.floating.current, E) || Oe(b, E) || y || Ho(g ?? E, n.context.triggerElements) || n.setOpen(!1, ge(ir, d));
      });
    }
  }), [o, n, u, l]);
  return a.useMemo(() => s ? {
    reference: p,
    trigger: p
  } : {}, [s, p]);
}
class sl {
  constructor() {
    this.pointerType = void 0, this.interactedInside = !1, this.handler = void 0, this.blockMouseMove = !0, this.performedPointerEventsMutation = !1, this.pointerEventsScopeElement = null, this.pointerEventsReferenceElement = null, this.pointerEventsFloatingElement = null, this.restTimeoutPending = !1, this.openChangeTimeout = new $t(), this.restTimeout = new $t(), this.handleCloseOptions = void 0;
  }
  static create() {
    return new sl();
  }
  dispose = () => {
    this.openChangeTimeout.clear(), this.restTimeout.clear();
  };
  disposeEffect = () => this.dispose;
}
const zo = /* @__PURE__ */ new WeakMap();
function qo(t) {
  if (!t.performedPointerEventsMutation)
    return;
  const e = t.pointerEventsScopeElement;
  e && zo.get(e) === t && (t.pointerEventsScopeElement?.style.removeProperty("pointer-events"), t.pointerEventsReferenceElement?.style.removeProperty("pointer-events"), t.pointerEventsFloatingElement?.style.removeProperty("pointer-events"), zo.delete(e)), t.performedPointerEventsMutation = !1, t.pointerEventsScopeElement = null, t.pointerEventsReferenceElement = null, t.pointerEventsFloatingElement = null;
}
function $u(t, e) {
  const {
    scopeElement: n,
    referenceElement: r,
    floatingElement: o
  } = e, s = zo.get(n);
  s && s !== t && qo(s), qo(t), t.performedPointerEventsMutation = !0, t.pointerEventsScopeElement = n, t.pointerEventsReferenceElement = r, t.pointerEventsFloatingElement = o, zo.set(n, t), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", o.style.pointerEvents = "auto";
}
function Uu(t) {
  const e = at(sl.create).current, n = t.context.dataRef.current;
  return n.hoverInteractionState || (n.hoverInteractionState = e), ss(n.hoverInteractionState.disposeEffect), n.hoverInteractionState;
}
function Wu(t, e = {}) {
  const n = "rootStore" in t ? t.rootStore : t, r = n.useState("open"), o = n.useState("floatingElement"), s = n.useState("domReferenceElement"), {
    dataRef: l
  } = n.context, {
    enabled: i = !0,
    closeDelay: f = 0,
    nodeId: u
  } = e, c = Uu(n), p = Fn(), h = xn(), g = le(() => hu(l.current.openEvent?.type, c.interactedInside)), d = le(() => {
    const C = l.current.openEvent?.type;
    return C?.includes("mouse") && C !== "mousedown";
  }), y = le((C) => Ho(C, n.context.triggerElements)), b = a.useCallback((C) => {
    const x = Go(f, "close", c.pointerType), R = () => {
      n.setOpen(!1, ge(Ct, C)), p?.events.emit("floating.closed", C);
    };
    x ? c.openChangeTimeout.start(x, R) : (c.openChangeTimeout.clear(), R());
  }, [f, n, c, p]), E = le(() => {
    qo(c);
  }), v = le((C) => {
    const x = pt(C);
    if (!Ba(x)) {
      c.interactedInside = !1;
      return;
    }
    c.interactedInside = x?.closest("[aria-haspopup]") != null;
  });
  pe(() => {
    r || (c.pointerType = void 0, c.restTimeoutPending = !1, c.interactedInside = !1, E());
  }, [r, c, E]), a.useEffect(() => E, [E]), pe(() => {
    if (i && r && c.handleCloseOptions?.blockPointerEvents && d() && We(s) && o) {
      const C = s, x = o, R = He(o), S = p?.nodesRef.current.find((M) => M.id === h)?.context?.elements.floating;
      S && (S.style.pointerEvents = "");
      const I = c.handleCloseOptions?.getScope?.() ?? c.pointerEventsScopeElement ?? S ?? C.closest("[data-rootownerid]") ?? R.body;
      return $u(c, {
        scopeElement: I,
        referenceElement: C,
        floatingElement: x
      }), () => {
        E();
      };
    }
  }, [i, r, s, o, c, d, p, h, E]);
  const m = dt();
  a.useEffect(() => {
    if (!i)
      return;
    function C() {
      c.openChangeTimeout.clear(), m.clear(), p?.events.off("floating.closed", R), E();
    }
    function x(I) {
      if (p && h && ln(p.nodesRef.current, h).length > 0) {
        p.events.on("floating.closed", R);
        return;
      }
      if (y(I.relatedTarget))
        return;
      const M = l.current.floatingContext?.nodeId ?? u, A = I.relatedTarget;
      if (!(p && M && We(A) && ln(p.nodesRef.current, M, !1).some((L) => Oe(L.context?.elements.floating, A)))) {
        if (c.handler) {
          c.handler(I);
          return;
        }
        E(), g() || b(I);
      }
    }
    function R(I) {
      !p || !h || ln(p.nodesRef.current, h).length > 0 || m.start(0, () => {
        p.events.off("floating.closed", R), n.setOpen(!1, ge(Ct, I)), p.events.emit("floating.closed", I);
      });
    }
    const S = o;
    return an(S && $e(S, "mouseenter", C), S && $e(S, "mouseleave", x), S && $e(S, "pointerdown", v, !0), () => {
      p?.events.off("floating.closed", R);
    });
  }, [i, o, n, l, u, g, y, b, E, v, c, p, h, m]);
}
const gb = {
  current: null
};
function Ku(t, e = {}) {
  const n = "rootStore" in t ? t.rootStore : t, {
    dataRef: r,
    events: o
  } = n.context, {
    enabled: s = !0,
    delay: l = 0,
    handleClose: i = null,
    mouseOnly: f = !1,
    restMs: u = 0,
    move: c = !0,
    triggerElementRef: p = gb,
    externalTree: h,
    isActiveTrigger: g = !0,
    getHandleCloseContext: d,
    isClosing: y
  } = e, b = Fn(h), E = Uu(n), v = a.useRef(!1), m = st(i), C = st(l), x = st(u), R = st(s), S = st(y);
  g && (E.handleCloseOptions = m.current?.__options);
  const I = le(() => hu(r.current.openEvent?.type, E.interactedInside)), M = le((P) => Ho(P, n.context.triggerElements)), A = le((P, w, O) => {
    const V = n.context.triggerElements;
    if (V.hasElement(w))
      return !P || !Oe(P, w);
    if (!We(O))
      return !1;
    const k = O;
    return V.hasMatchingElement((H) => Oe(H, k)) && (!P || !Oe(P, k));
  }), _ = le((P, w = !0) => {
    const O = Go(C.current, "close", E.pointerType);
    O ? E.openChangeTimeout.start(O, () => {
      n.setOpen(!1, ge(Ct, P)), b?.events.emit("floating.closed", P);
    }) : w && (E.openChangeTimeout.clear(), n.setOpen(!1, ge(Ct, P)), b?.events.emit("floating.closed", P));
  }), L = le(() => {
    if (!E.handler)
      return;
    He(n.select("domReferenceElement")).removeEventListener("mousemove", E.handler), E.handler = void 0;
  }), N = le(() => {
    qo(E);
  });
  return a.useEffect(() => L, [L]), a.useEffect(() => {
    if (!s)
      return;
    function P(w) {
      w.open ? v.current = !1 : (v.current = w.reason === Ct, L(), E.openChangeTimeout.clear(), E.restTimeout.clear(), E.blockMouseMove = !0, E.restTimeoutPending = !1);
    }
    return o.on("openchange", P), () => {
      o.off("openchange", P);
    };
  }, [s, o, E, L]), a.useEffect(() => {
    if (!s)
      return;
    const P = p.current ?? (g ? n.select("domReferenceElement") : null);
    if (!We(P))
      return;
    function w(V) {
      if (E.openChangeTimeout.clear(), E.blockMouseMove = !1, f && !pr(E.pointerType))
        return;
      const k = fc(x.current), H = Go(C.current, "open", E.pointerType), U = pt(V), T = V.currentTarget ?? null, D = n.select("domReferenceElement");
      let $ = T;
      if (We(U) && !n.context.triggerElements.hasElement(U)) {
        for (const z of n.context.triggerElements.elements())
          if (Oe(z, U)) {
            $ = z;
            break;
          }
      }
      We(T) && We(D) && !n.context.triggerElements.hasElement(T) && Oe(T, D) && ($ = D);
      const J = $ == null ? !1 : A(D, $, U), Z = n.select("open"), q = S.current?.() ?? n.select("transitionStatus") === "ending", B = !Z && q && v.current, Y = !J && We($) && We(D) && Oe(D, $) && B, Q = k > 0 && !H, re = J && (Z || B) || Y, ue = !Z || J;
      if (re) {
        n.setOpen(!0, ge(Ct, V, $));
        return;
      }
      Q || (H ? E.openChangeTimeout.start(H, () => {
        ue && n.setOpen(!0, ge(Ct, V, $));
      }) : ue && n.setOpen(!0, ge(Ct, V, $)));
    }
    function O(V) {
      if (I()) {
        N();
        return;
      }
      L();
      const k = n.select("domReferenceElement"), H = He(k);
      E.restTimeout.clear(), E.restTimeoutPending = !1;
      const U = r.current.floatingContext ?? d?.();
      if (M(V.relatedTarget))
        return;
      if (m.current && U) {
        n.select("open") || E.openChangeTimeout.clear();
        const $ = p.current;
        E.handler = m.current({
          ...U,
          tree: b,
          x: V.clientX,
          y: V.clientY,
          onClose() {
            N(), L(), R.current && !I() && $ === n.select("domReferenceElement") && _(V, !0);
          }
        }), H.addEventListener("mousemove", E.handler), E.handler(V);
        return;
      }
      (E.pointerType !== "touch" || !Oe(n.select("floatingElement"), V.relatedTarget)) && _(V);
    }
    return c ? an($e(P, "mousemove", w, {
      once: !0
    }), $e(P, "mouseenter", w), $e(P, "mouseleave", O)) : an($e(P, "mouseenter", w), $e(P, "mouseleave", O));
  }, [L, N, r, C, _, n, s, m, E, g, A, I, M, f, c, x, p, b, R, d, S]), a.useMemo(() => {
    if (!s)
      return;
    function P(w) {
      E.pointerType = w.pointerType;
    }
    return {
      onPointerDown: P,
      onPointerEnter: P,
      onMouseMove(w) {
        const {
          nativeEvent: O
        } = w, V = w.currentTarget, k = n.select("domReferenceElement"), H = n.select("open"), U = A(k, V, w.target);
        if (f && !pr(E.pointerType))
          return;
        if (H && U && E.handleCloseOptions?.blockPointerEvents) {
          const $ = n.select("floatingElement");
          if ($) {
            const J = E.handleCloseOptions?.getScope?.() ?? V.ownerDocument.body;
            $u(E, {
              scopeElement: J,
              referenceElement: V,
              floatingElement: $
            });
          }
        }
        const T = fc(x.current);
        if (H && !U || T === 0 || !U && E.restTimeoutPending && w.movementX ** 2 + w.movementY ** 2 < 2)
          return;
        E.restTimeout.clear();
        function D() {
          if (E.restTimeoutPending = !1, I())
            return;
          const $ = n.select("open");
          !E.blockMouseMove && (!$ || U) && n.setOpen(!0, ge(Ct, O, V));
        }
        E.pointerType === "touch" ? Jt.flushSync(() => {
          D();
        }) : U && H ? D() : (E.restTimeoutPending = !0, E.restTimeout.start(T, D));
      }
    };
  }, [s, E, I, A, f, n, x]);
}
function Gr(t = []) {
  const e = t.map((u) => u?.reference), n = t.map((u) => u?.floating), r = t.map((u) => u?.item), o = t.map((u) => u?.trigger), s = a.useCallback(
    (u) => mo(u, t, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), l = a.useCallback(
    (u) => mo(u, t, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), i = a.useCallback(
    (u) => mo(u, t, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  ), f = a.useCallback(
    (u) => mo(u, t, "trigger"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    o
  );
  return a.useMemo(() => ({
    getReferenceProps: s,
    getFloatingProps: l,
    getItemProps: i,
    getTriggerProps: f
  }), [s, l, i, f]);
}
function mo(t, e, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item", s = {};
  n === "floating" && (s.tabIndex = -1, s[oi] = "");
  for (const l in t)
    o && t && (l === Da || l === Fa) || (s[l] = t[l]);
  for (let l = 0; l < e.length; l += 1) {
    let i;
    const f = e[l]?.[n];
    typeof f == "function" ? i = t ? f(t) : null : i = f, i && Ac(s, i, o, r);
  }
  return Ac(s, t, o, r), s;
}
function Ac(t, e, n, r) {
  for (const o in e) {
    const s = e[o];
    n && (o === Da || o === Fa) || (o.startsWith("on") ? (r.has(o) || r.set(o, []), typeof s == "function" && (r.get(o)?.push(s), t[o] = (...l) => r.get(o)?.map((i) => i(...l)).find((i) => i !== void 0))) : t[o] = s);
  }
}
const hb = "Escape";
function ps(t, e, n) {
  switch (t) {
    case "vertical":
      return e;
    case "horizontal":
      return n;
    default:
      return e || n;
  }
}
function go(t, e) {
  return ps(e, t === _i || t === Ur, t === In || t === Tn);
}
function Xs(t, e, n) {
  return ps(e, t === Ur, n ? t === In : t === Tn) || t === "Enter" || t === " " || t === "";
}
function bb(t, e, n) {
  return ps(e, n ? t === In : t === Tn, t === Ur);
}
function yb(t, e, n, r) {
  const o = n ? t === Tn : t === In, s = t === _i;
  return e === "both" || e === "horizontal" && r && r > 1 ? t === hb : ps(e, o, s);
}
function il(t, e) {
  const n = "rootStore" in t ? t.rootStore : t, r = n.useState("open"), o = n.useState("floatingElement"), s = n.useState("domReferenceElement"), l = n.context.dataRef, {
    listRef: i,
    activeIndex: f,
    onNavigate: u = () => {
    },
    enabled: c = !0,
    selectedIndex: p = null,
    allowEscape: h = !1,
    loopFocus: g = !1,
    nested: d = !1,
    rtl: y = !1,
    virtual: b = !1,
    focusItemOnOpen: E = "auto",
    focusItemOnHover: v = !0,
    openOnArrowKeyDown: m = !0,
    disabledIndices: C = void 0,
    orientation: x = "vertical",
    parentOrientation: R,
    cols: S = 1,
    id: I,
    resetOnPointerLeave: M = !0,
    externalTree: A
  } = e;
  process.env.NODE_ENV !== "production" && (h && (g || console.warn("`useListNavigation` looping must be enabled to allow escaping."), b || console.warn("`useListNavigation` must be virtual to allow escaping.")), x === "vertical" && S > 1 && console.warn("In grid list navigation mode (`cols` > 1), the `orientation` should", 'be either "horizontal" or "both".'));
  const _ = kr(o), L = st(_), N = xn(), P = Fn(A);
  pe(() => {
    l.current.orientation = x;
  }, [l, x]);
  const w = si(s), O = a.useRef(E), V = a.useRef(p ?? -1), k = a.useRef(null), H = a.useRef(!0), U = le((G) => {
    u(V.current === -1 ? null : V.current, G);
  }), T = a.useRef(U), D = a.useRef(!!o), $ = a.useRef(r), J = a.useRef(!1), Z = a.useRef(!1), q = a.useRef(null), B = st(C), Y = st(r), Q = st(p), re = st(M), ue = le(() => {
    function G(ce) {
      b ? P?.events.emit("virtualfocus", ce) : q.current = Ao(ce, {
        sync: J.current,
        preventScroll: !0
      });
    }
    const oe = i.current[V.current], F = Z.current;
    oe && G(oe), (J.current ? (ce) => ce() : requestAnimationFrame)(() => {
      const ce = i.current[V.current] || oe;
      if (!ce)
        return;
      oe || G(ce), // eslint-disable-next-line @typescript-eslint/no-use-before-define
      fe && (F || !H.current) && ce.scrollIntoView?.({
        block: "nearest",
        inline: "nearest"
      });
    });
  });
  pe(() => {
    c && (r && o ? (V.current = p ?? -1, O.current && p != null && (Z.current = !0, U())) : D.current && (V.current = -1, T.current()));
  }, [c, r, o, p, U]), pe(() => {
    if (c) {
      if (!r) {
        J.current = !1;
        return;
      }
      if (o)
        if (f == null) {
          if (J.current = !1, Q.current != null)
            return;
          if (D.current && (V.current = -1, ue()), (!$.current || !D.current) && O.current && (k.current != null || O.current === !0 && k.current == null)) {
            let G = 0;
            const oe = () => {
              i.current[0] == null ? (G < 2 && (G ? requestAnimationFrame : queueMicrotask)(oe), G += 1) : (V.current = k.current == null || Xs(k.current, x, y) || d ? Mo(i) : ci(i), k.current = null, U());
            };
            oe();
          }
        } else Dr(i.current, f) || (V.current = f, ue(), Z.current = !1);
    }
  }, [c, r, o, f, Q, d, i, x, y, U, ue, B]), pe(() => {
    if (!c || o || !P || b || !D.current)
      return;
    const G = P.nodesRef.current, oe = G.find((ce) => ce.id === N)?.context?.elements.floating, F = St(He(o)), K = G.some((ce) => ce.context && Oe(ce.context.elements.floating, F));
    oe && !K && H.current && oe.focus({
      preventScroll: !0
    });
  }, [c, o, P, N, b]), pe(() => {
    T.current = U, $.current = r, D.current = !!o;
  }), pe(() => {
    r || (k.current = null, O.current = E);
  }, [r, E]);
  const z = f != null, se = le((G) => {
    if (!Y.current)
      return;
    const oe = i.current.indexOf(G.currentTarget);
    oe !== -1 && (V.current !== oe || f !== oe) && (V.current = oe, U(G));
  }), fe = a.useMemo(() => ({
    onFocus(oe) {
      J.current = !0, se(oe);
    },
    onClick: ({
      currentTarget: oe
    }) => oe.focus({
      preventScroll: !0
    }),
    // Safari
    onMouseMove(oe) {
      J.current = !0, Z.current = !1, v && se(oe);
    },
    onPointerLeave(oe) {
      if (!Y.current || !H.current || oe.pointerType === "touch")
        return;
      J.current = !0;
      const F = oe.relatedTarget;
      if (!(!v || i.current.includes(F)) && re.current && (q.current?.(), q.current = null, V.current = -1, U(oe), !b)) {
        const K = L.current, ce = St(He(K));
        K && Oe(K, ce) && K.focus({
          preventScroll: !0
        });
      }
    }
  }), [se, Y, L, v, i, U, re, b]), j = a.useCallback(() => R ?? P?.nodesRef.current.find((G) => G.id === N)?.context?.dataRef?.current.orientation, [N, P, R]), W = le((G) => {
    if (H.current = !1, J.current = !0, G.which === 229 || !Y.current && G.currentTarget === L.current)
      return;
    if (d && yb(G.key, x, y, S)) {
      go(G.key, j()) || ft(G), n.setOpen(!1, ge(Pr, G.nativeEvent)), Qe(s) && (b ? P?.events.emit("virtualfocus", s) : s.focus());
      return;
    }
    const oe = V.current, F = Mo(i, C), K = ci(i, C);
    if (w || (G.key === "Home" && (ft(G), V.current = F, U(G)), G.key === "End" && (ft(G), V.current = K, U(G))), S > 1) {
      const ce = Array.from({
        length: i.current.length
      }, () => ({
        width: 1,
        height: 1
      })), me = Ga(ce, S, !1), Re = me.findIndex((Ee) => Ee != null && !bn(i.current, Ee, C)), Ce = me.reduce((Ee, he, be) => he != null && !bn(i.current, he, C) ? be : Ee, -1), we = me[Ka(me.map((Ee) => Ee != null ? i.current[Ee] : null), {
        event: G,
        orientation: x,
        loopFocus: g,
        rtl: y,
        cols: S,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: za([...(typeof C != "function" ? C : null) || i.current.map((Ee, he) => bn(i.current, he, C) ? he : void 0), void 0], me),
        minIndex: Re,
        maxIndex: Ce,
        prevIndex: Ya(
          V.current > K ? F : V.current,
          ce,
          me,
          S,
          // use a corner matching the edge closest to the direction
          // we're moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          // eslint-disable-next-line no-nested-ternary
          G.key === Ur ? "bl" : G.key === (y ? In : Tn) ? "tr" : "tl"
        ),
        stopEvent: !0
      })];
      if (we != null && (V.current = we, U(G)), x === "both")
        return;
    }
    if (go(G.key, x)) {
      if (ft(G), r && !b && St(G.currentTarget.ownerDocument) === G.currentTarget) {
        V.current = Xs(G.key, x, y) ? F : K, U(G);
        return;
      }
      Xs(G.key, x, y) ? g ? oe >= K ? h && oe !== i.current.length ? V.current = -1 : (J.current = !1, V.current = F) : V.current = xt(i.current, {
        startingIndex: oe,
        disabledIndices: C
      }) : V.current = Math.min(K, xt(i.current, {
        startingIndex: oe,
        disabledIndices: C
      })) : g ? oe <= F ? h && oe !== -1 ? V.current = i.current.length : (J.current = !1, V.current = K) : V.current = xt(i.current, {
        startingIndex: oe,
        decrement: !0,
        disabledIndices: C
      }) : V.current = Math.max(F, xt(i.current, {
        startingIndex: oe,
        decrement: !0,
        disabledIndices: C
      })), Dr(i.current, V.current) && (V.current = -1), U(G);
    }
  }), te = a.useMemo(() => b && r && z && {
    "aria-activedescendant": `${I}-${f}`
  }, [b, r, z, I, f]), ne = a.useMemo(() => ({
    "aria-orientation": x === "both" ? void 0 : x,
    ...w ? {} : te,
    onKeyDown(G) {
      if (G.key === "Tab" && G.shiftKey && r && !b) {
        const oe = pt(G.nativeEvent);
        if (oe && !Oe(L.current, oe))
          return;
        ft(G), n.setOpen(!1, ge(On, G.nativeEvent)), Qe(s) && s.focus();
        return;
      }
      W(G);
    },
    onPointerMove() {
      H.current = !0;
    }
  }), [te, W, L, x, w, n, r, b, s]), ee = a.useMemo(() => {
    function G(F) {
      E === "auto" && ja(F.nativeEvent) && (O.current = !b);
    }
    function oe(F) {
      O.current = E, E === "auto" && $a(F.nativeEvent) && (O.current = !0);
    }
    return {
      onKeyDown(F) {
        const K = n.select("open");
        H.current = !1;
        const ce = F.key.startsWith("Arrow"), me = bb(F.key, j(), y), Re = go(F.key, x), Ce = (d ? me : Re) || F.key === "Enter" || F.key.trim() === "";
        if (b && K)
          return W(F);
        if (!(!K && !m && ce)) {
          if (Ce) {
            const we = go(F.key, j());
            k.current = d && we ? null : F.key;
          }
          if (d) {
            me && (ft(F), K ? (V.current = Mo(i, B.current), U(F)) : n.setOpen(!0, ge(Pr, F.nativeEvent, F.currentTarget)));
            return;
          }
          Re && (Q.current != null && (V.current = Q.current), ft(F), !K && m ? n.setOpen(!0, ge(Pr, F.nativeEvent, F.currentTarget)) : W(F), K && U(F));
        }
      },
      onFocus(F) {
        n.select("open") && !b && (V.current = -1, U(F));
      },
      onPointerDown: oe,
      onPointerEnter: oe,
      onMouseDown: G,
      onClick: G
    };
  }, [W, B, E, i, d, U, n, m, x, j, y, Q, b]), ae = a.useMemo(() => ({
    ...te,
    ...ee
  }), [te, ee]);
  return a.useMemo(() => c ? {
    reference: ae,
    floating: ne,
    item: fe,
    trigger: ee
  } : {}, [c, ae, ne, ee, fe]);
}
const Eb = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Rb(t, e = {}) {
  const n = "rootStore" in t ? t.rootStore : t, r = n.useState("open"), o = n.useState("floatingId"), s = n.useState("domReferenceElement"), l = n.useState("floatingElement"), {
    role: i = "dialog"
  } = e, f = zn(), u = s?.id || f, c = a.useMemo(() => kr(l)?.id || o, [l, o]), p = Eb.get(i) ?? i, g = xn() != null, d = a.useMemo(() => p === "tooltip" || i === "label" ? et : {
    "aria-haspopup": p === "alertdialog" ? "dialog" : p,
    "aria-expanded": "false",
    ...p === "listbox" && {
      role: "combobox"
    },
    ...p === "menu" && g && {
      role: "menuitem"
    },
    ...i === "select" && {
      "aria-autocomplete": "none"
    },
    ...i === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [p, g, i]), y = a.useMemo(() => p === "tooltip" || i === "label" ? {
    [`aria-${i === "label" ? "labelledby" : "describedby"}`]: r ? c : void 0
  } : {
    ...d,
    "aria-expanded": r ? "true" : "false",
    "aria-controls": r ? c : void 0,
    ...p === "menu" && {
      id: u
    }
  }, [p, c, r, u, i, d]), b = a.useMemo(() => {
    const v = {
      id: c,
      ...p && {
        role: p
      }
    };
    return p === "tooltip" || i === "label" ? v : {
      ...v,
      ...p === "menu" && {
        "aria-labelledby": u
      }
    };
  }, [p, c, u, i]), E = a.useCallback(({
    active: v,
    selected: m
  }) => {
    const C = {
      role: "option",
      ...v && {
        id: `${c}-fui-option`
      }
    };
    switch (i) {
      case "select":
      case "combobox":
        return {
          ...C,
          "aria-selected": m
        };
    }
    return {};
  }, [c, i]);
  return a.useMemo(() => ({
    reference: y,
    floating: b,
    item: E,
    trigger: d
  }), [y, b, d, E]);
}
function Gu(t, e) {
  const n = "rootStore" in t ? t.rootStore : t, r = n.context.dataRef, o = n.useState("open"), {
    listRef: s,
    elementsRef: l,
    activeIndex: i,
    onMatch: f,
    onTypingChange: u,
    enabled: c = !0,
    resetMs: p = 750,
    selectedIndex: h = null
  } = e, g = dt(), d = a.useRef(""), y = a.useRef(h ?? i ?? -1), b = a.useRef(null);
  pe(() => {
    !o && h !== null || (g.clear(), b.current = null, d.current !== "" && (d.current = ""));
  }, [o, h, g]), pe(() => {
    o && d.current === "" && (y.current = h ?? i ?? -1);
  }, [o, h, i]);
  const E = le((R) => {
    R ? r.current.typing || (r.current.typing = R, u?.(R)) : r.current.typing && (r.current.typing = R, u?.(R));
  }), v = le((R) => {
    function S(w) {
      const O = l?.current[w];
      return !O || ls(O);
    }
    function I(w, O, V = 0) {
      if (w.length === 0)
        return -1;
      const k = (V % w.length + w.length) % w.length, H = O.toLocaleLowerCase();
      for (let U = 0; U < w.length; U += 1) {
        const T = (k + U) % w.length;
        if (!(!w[T]?.toLocaleLowerCase().startsWith(H) || !S(T)))
          return T;
      }
      return -1;
    }
    const M = s.current;
    if (d.current.length > 0 && R.key === " " && (ft(R), E(!0)), d.current.length > 0 && d.current[0] !== " " && I(M, d.current) === -1 && R.key !== " " && E(!1), M == null || // Character key.
    R.key.length !== 1 || // Modifier key.
    R.ctrlKey || R.metaKey || R.altKey)
      return;
    o && R.key !== " " && (ft(R), E(!0));
    const A = d.current === "";
    A && (y.current = h ?? i ?? -1), M.every((w) => w ? w[0]?.toLocaleLowerCase() !== w[1]?.toLocaleLowerCase() : !0) && d.current === R.key && (d.current = "", y.current = b.current), d.current += R.key, g.start(p, () => {
      d.current = "", y.current = b.current, E(!1);
    });
    const N = ((A ? h ?? i ?? -1 : y.current) ?? 0) + 1, P = I(M, d.current, N);
    P !== -1 ? (f?.(P), b.current = P) : R.key !== " " && (d.current = "", E(!1));
  }), m = le((R) => {
    const S = R.relatedTarget, I = n.select("domReferenceElement"), M = n.select("floatingElement"), A = Oe(I, S), _ = Oe(M, S);
    A || _ || (g.clear(), d.current = "", y.current = b.current, E(!1));
  }), C = a.useMemo(() => ({
    onKeyDown: v,
    onBlur: m
  }), [v, m]), x = a.useMemo(() => ({
    onKeyDown: v,
    onBlur: m
  }), [v, m]);
  return a.useMemo(() => c ? {
    reference: C,
    floating: x
  } : {}, [c, C, x]);
}
const kc = 0.1, xb = kc * kc, rt = 0.5;
function ho(t, e, n, r, o, s) {
  return r >= e != s >= e && t <= (o - n) * (e - r) / (s - r) + n;
}
function bo(t, e, n, r, o, s, l, i, f, u) {
  let c = !1;
  return ho(t, e, n, r, o, s) && (c = !c), ho(t, e, o, s, l, i) && (c = !c), ho(t, e, l, i, f, u) && (c = !c), ho(t, e, f, u, n, r) && (c = !c), c;
}
function vb(t, e, n) {
  return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
}
function yo(t, e, n, r, o, s) {
  const l = Math.min(n, o), i = Math.max(n, o), f = Math.min(r, s), u = Math.max(r, s);
  return t >= l && t <= i && e >= f && e <= u;
}
function Yu(t = {}) {
  const {
    blockPointerEvents: e = !1
  } = t, n = new $t(), r = ({
    x: o,
    y: s,
    placement: l,
    elements: i,
    onClose: f,
    nodeId: u,
    tree: c
  }) => {
    const p = l?.split("-")[0];
    let h = !1, g = null, d = null, y = typeof performance < "u" ? performance.now() : 0;
    function b(v, m) {
      const C = performance.now(), x = C - y;
      if (g === null || d === null || x === 0)
        return g = v, d = m, y = C, !1;
      const R = v - g, S = m - d, I = R * R + S * S, M = x * x * xb;
      return g = v, d = m, y = C, I < M;
    }
    function E() {
      n.clear(), f();
    }
    return function(m) {
      n.clear();
      const C = i.domReference, x = i.floating;
      if (!C || !x || p == null || o == null || s == null)
        return;
      const {
        clientX: R,
        clientY: S
      } = m, I = pt(m), M = m.type === "mouseleave", A = Oe(x, I), _ = Oe(C, I);
      if (A && (h = !0, !M))
        return;
      if (_ && (h = !1, !M)) {
        h = !0;
        return;
      }
      if (M && We(m.relatedTarget) && Oe(x, m.relatedTarget))
        return;
      function L() {
        return !!(c && ln(c.nodesRef.current, u).length > 0);
      }
      function N() {
        L() || E();
      }
      if (L())
        return;
      const P = C.getBoundingClientRect(), w = x.getBoundingClientRect(), O = o > w.right - w.width / 2, V = s > w.bottom - w.height / 2, k = w.width > P.width, H = w.height > P.height, U = (k ? P : w).left, T = (k ? P : w).right, D = (H ? P : w).top, $ = (H ? P : w).bottom;
      if (p === "top" && s >= P.bottom - 1 || p === "bottom" && s <= P.top + 1 || p === "left" && o >= P.right - 1 || p === "right" && o <= P.left + 1) {
        N();
        return;
      }
      let J = !1;
      switch (p) {
        case "top":
          J = yo(R, S, U, P.top + 1, T, w.bottom - 1);
          break;
        case "bottom":
          J = yo(R, S, U, w.top + 1, T, P.bottom - 1);
          break;
        case "left":
          J = yo(R, S, w.right - 1, $, P.left + 1, D);
          break;
        case "right":
          J = yo(R, S, P.right - 1, $, w.left + 1, D);
          break;
      }
      if (J)
        return;
      if (h && !vb(R, S, P)) {
        N();
        return;
      }
      if (!M && b(R, S)) {
        N();
        return;
      }
      let Z = !1;
      switch (p) {
        case "top": {
          const q = k ? rt / 2 : rt * 4, B = k || O ? o + q : o - q, Y = k ? o - q : O ? o + q : o - q, Q = s + rt + 1, re = O || k ? w.bottom - rt : w.top, ue = O ? k ? w.bottom - rt : w.top : w.bottom - rt;
          Z = bo(R, S, B, Q, Y, Q, w.left, re, w.right, ue);
          break;
        }
        case "bottom": {
          const q = k ? rt / 2 : rt * 4, B = k || O ? o + q : o - q, Y = k ? o - q : O ? o + q : o - q, Q = s - rt, re = O || k ? w.top + rt : w.bottom, ue = O ? k ? w.top + rt : w.bottom : w.top + rt;
          Z = bo(R, S, B, Q, Y, Q, w.left, re, w.right, ue);
          break;
        }
        case "left": {
          const q = H ? rt / 2 : rt * 4, B = H || V ? s + q : s - q, Y = H ? s - q : V ? s + q : s - q, Q = o + rt + 1, re = V || H ? w.right - rt : w.left, ue = V ? H ? w.right - rt : w.left : w.right - rt;
          Z = bo(R, S, re, w.top, ue, w.bottom, Q, B, Q, Y);
          break;
        }
        case "right": {
          const q = H ? rt / 2 : rt * 4, B = H || V ? s + q : s - q, Y = H ? s - q : V ? s + q : s - q, Q = o - rt, re = V || H ? w.left + rt : w.right, ue = V ? H ? w.left + rt : w.right : w.left + rt;
          Z = bo(R, S, Q, B, Q, Y, re, w.top, ue, w.bottom);
          break;
        }
      }
      Z ? h || n.start(40, N) : N();
    };
  };
  return r.__options = {
    ...t,
    blockPointerEvents: e
  }, r;
}
const zu = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (zu.displayName = "ToolbarRootContext");
function qu(t) {
  return a.useContext(zu);
}
const wn = "ArrowUp", hn = "ArrowDown", Kn = "ArrowLeft", Pn = "ArrowRight", Jn = "Home", Zn = "End", Xu = "PageUp", Ju = "PageDown", Zu = /* @__PURE__ */ new Set([Kn, Pn]), Cb = /* @__PURE__ */ new Set([Kn, Pn, Jn, Zn]), Qu = /* @__PURE__ */ new Set([wn, hn]), Sb = /* @__PURE__ */ new Set([wn, hn, Jn, Zn]), ef = /* @__PURE__ */ new Set([...Zu, ...Qu]), Ib = /* @__PURE__ */ new Set([...ef, Jn, Zn]), ll = /* @__PURE__ */ new Set([wn, hn, Kn, Pn, Jn, Zn]), tf = "Shift", Tb = "Control", wb = "Alt", Pb = "Meta", Nb = /* @__PURE__ */ new Set([tf, Tb, wb, Pb]);
function Ob(t) {
  return Qe(t) && t.tagName === "INPUT";
}
function Vc(t) {
  return !!(Ob(t) && t.selectionStart != null || Qe(t) && t.tagName === "TEXTAREA");
}
function Dc(t, e, n, r) {
  if (!t || !e || !e.scrollTo)
    return;
  let o = t.scrollLeft, s = t.scrollTop;
  const l = t.clientWidth < t.scrollWidth, i = t.clientHeight < t.scrollHeight;
  if (l && r !== "vertical") {
    const f = Fc(t, e, "left"), u = Eo(t), c = Eo(e);
    n === "ltr" && (f + e.offsetWidth + c.scrollMarginRight > t.scrollLeft + t.clientWidth - u.scrollPaddingRight ? o = f + e.offsetWidth + c.scrollMarginRight - t.clientWidth + u.scrollPaddingRight : f - c.scrollMarginLeft < t.scrollLeft + u.scrollPaddingLeft && (o = f - c.scrollMarginLeft - u.scrollPaddingLeft)), n === "rtl" && (f - c.scrollMarginRight < t.scrollLeft + u.scrollPaddingLeft ? o = f - c.scrollMarginLeft - u.scrollPaddingLeft : f + e.offsetWidth + c.scrollMarginRight > t.scrollLeft + t.clientWidth - u.scrollPaddingRight && (o = f + e.offsetWidth + c.scrollMarginRight - t.clientWidth + u.scrollPaddingRight));
  }
  if (i && r !== "horizontal") {
    const f = Fc(t, e, "top"), u = Eo(t), c = Eo(e);
    f - c.scrollMarginTop < t.scrollTop + u.scrollPaddingTop ? s = f - c.scrollMarginTop - u.scrollPaddingTop : f + e.offsetHeight + c.scrollMarginBottom > t.scrollTop + t.clientHeight - u.scrollPaddingBottom && (s = f + e.offsetHeight + c.scrollMarginBottom - t.clientHeight + u.scrollPaddingBottom);
  }
  t.scrollTo({
    left: o,
    top: s,
    behavior: "auto"
  });
}
function Fc(t, e, n) {
  const r = n === "left" ? "offsetLeft" : "offsetTop";
  let o = 0;
  for (; e.offsetParent && (o += e[r], e.offsetParent !== t); )
    e = e.offsetParent;
  return o;
}
function Eo(t) {
  const e = getComputedStyle(t);
  return {
    scrollMarginTop: parseFloat(e.scrollMarginTop) || 0,
    scrollMarginRight: parseFloat(e.scrollMarginRight) || 0,
    scrollMarginBottom: parseFloat(e.scrollMarginBottom) || 0,
    scrollMarginLeft: parseFloat(e.scrollMarginLeft) || 0,
    scrollPaddingTop: parseFloat(e.scrollPaddingTop) || 0,
    scrollPaddingRight: parseFloat(e.scrollPaddingRight) || 0,
    scrollPaddingBottom: parseFloat(e.scrollPaddingBottom) || 0,
    scrollPaddingLeft: parseFloat(e.scrollPaddingLeft) || 0
  };
}
function ms(t) {
  return t === "starting" ? Xg : et;
}
const Mb = {
  ...cs,
  ...An
}, nf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    finalFocus: l,
    ...i
  } = e, {
    store: f
  } = Xn(), {
    side: u,
    align: c
  } = du(), p = qu() != null, h = f.useState("open"), g = f.useState("transitionStatus"), d = f.useState("popupProps"), y = f.useState("mounted"), b = f.useState("instantType"), E = f.useState("activeTriggerElement"), v = f.useState("parent"), m = f.useState("lastOpenChangeReason"), C = f.useState("rootId"), x = f.useState("floatingRootContext"), R = f.useState("floatingTreeRoot"), S = f.useState("closeDelay"), I = f.useState("activeTriggerElement"), M = v.type === "context-menu";
  en({
    open: h,
    ref: f.context.popupRef,
    onComplete() {
      h && f.context.onOpenChangeComplete?.(!0);
    }
  }), a.useEffect(() => {
    function O(V) {
      f.setOpen(!1, ge(V.reason, V.domEvent));
    }
    return R.events.on("close", O), () => {
      R.events.off("close", O);
    };
  }, [R.events, f]);
  const A = f.useState("hoverEnabled"), _ = f.useState("disabled");
  Wu(x, {
    enabled: A && !_ && !M && v.type !== "menubar",
    closeDelay: S
  });
  const L = {
    transitionStatus: g,
    side: u,
    align: c,
    open: h,
    nested: v.type === "menu",
    instant: b
  }, N = a.useCallback((O) => {
    f.set("popupElement", O);
  }, [f]), P = Be("div", e, {
    state: L,
    ref: [n, f.context.popupRef, N],
    stateAttributesMapping: Mb,
    props: [d, {
      onKeyDown(O) {
        p && ll.has(O.key) && O.stopPropagation();
      }
    }, ms(g), i, {
      "data-rootownerid": C
    }]
  });
  let w = v.type === void 0 || M;
  return (E || v.type === "menubar" && m !== Br) && (w = !0), /* @__PURE__ */ X.jsx(Su, {
    context: x,
    modal: M,
    disabled: !y,
    returnFocus: l === void 0 ? w : l,
    initialFocus: v.type !== "menu",
    restoreFocus: !0,
    externalTree: v.type !== "menubar" ? R : void 0,
    previousFocusableElement: I,
    nextFocusableElement: v.type === void 0 ? f.context.triggerFocusTargetRef : void 0,
    beforeContentFocusGuardRef: v.type === void 0 ? f.context.beforeContentFocusGuardRef : void 0,
    children: P
  });
});
process.env.NODE_ENV !== "production" && (nf.displayName = "MenuPopup");
const cl = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (cl.displayName = "MenuPortalContext");
function _b() {
  const t = a.useContext(cl);
  if (t === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Menu.Portal> is missing." : ot(32));
  return t;
}
const rf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    keepMounted: r = !1,
    ...o
  } = e, {
    store: s
  } = Xn();
  return s.useState("mounted") || r ? /* @__PURE__ */ X.jsx(cl.Provider, {
    value: r,
    children: /* @__PURE__ */ X.jsx(Ki, {
      ref: n,
      ...o
    })
  }) : null;
});
process.env.NODE_ENV !== "production" && (rf.displayName = "MenuPortal");
function of(t) {
  return Ci(19) ? t : t ? "true" : void 0;
}
const sf = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (sf.displayName = "DirectionContext");
function Qn() {
  return a.useContext(sf)?.direction ?? "ltr";
}
const Ab = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: l,
      elements: i,
      middlewareData: f
    } = e, {
      element: u,
      padding: c = 0,
      offsetParent: p = "real"
    } = En(t, e) || {};
    if (u == null)
      return {};
    const h = Wa(c), g = {
      x: n,
      y: r
    }, d = Vi(o), y = ki(d), b = await l.getDimensions(u), E = d === "y", v = E ? "top" : "left", m = E ? "bottom" : "right", C = E ? "clientHeight" : "clientWidth", x = s.reference[y] + s.reference[d] - g[d] - s.floating[y], R = g[d] - s.reference[d], S = p === "real" ? await l.getOffsetParent?.(u) : i.floating;
    let I = i.floating[C] || s.floating[y];
    (!I || !await l.isElement?.(S)) && (I = i.floating[C] || s.floating[y]);
    const M = x / 2 - R / 2, A = I / 2 - b[y] / 2 - 1, _ = Math.min(h[v], A), L = Math.min(h[m], A), N = _, P = I - b[y] - L, w = I / 2 - b[y] / 2 + M, O = ii(N, w, P), V = !f.arrow && Dn(o) != null && w !== O && s.reference[y] / 2 - (w < N ? _ : L) - b[y] / 2 < 0, k = V ? w < N ? w - N : w - P : 0;
    return {
      [d]: g[d] + k,
      data: {
        [d]: O,
        centerOffset: w - O - k,
        ...V && {
          alignmentOffset: k
        }
      },
      reset: V
    };
  }
}), kb = (t, e) => ({
  ...Ab(t),
  options: [t, e]
}), Vb = {
  name: "hide",
  async fn(t) {
    const {
      width: e,
      height: n,
      x: r,
      y: o
    } = t.rects.reference, s = e === 0 && n === 0 && r === 0 && o === 0;
    return {
      data: {
        referenceHidden: (await qh().fn(t)).data?.referenceHidden || s
      }
    };
  }
}, Vo = {
  sideX: "left",
  sideY: "top"
}, lf = {
  name: "adaptiveOrigin",
  async fn(t) {
    const {
      x: e,
      y: n,
      rects: {
        floating: r
      },
      elements: {
        floating: o
      },
      platform: s,
      strategy: l,
      placement: i
    } = t, f = it(o), u = f.getComputedStyle(o);
    if (!(u.transitionDuration !== "0s" && u.transitionDuration !== ""))
      return {
        x: e,
        y: n,
        data: Vo
      };
    const p = await s.getOffsetParent?.(o);
    let h = {
      width: 0,
      height: 0
    };
    if (l === "fixed" && f?.visualViewport)
      h = {
        width: f.visualViewport.width,
        height: f.visualViewport.height
      };
    else if (p === f) {
      const v = He(o);
      h = {
        width: v.documentElement.clientWidth,
        height: v.documentElement.clientHeight
      };
    } else await s.isElement?.(p) && (h = await s.getDimensions(p));
    const g = Mt(i);
    let d = e, y = n;
    g === "left" && (d = h.width - (e + r.width)), g === "top" && (y = h.height - (n + r.height));
    const b = g === "left" ? "right" : Vo.sideX, E = g === "top" ? "bottom" : Vo.sideY;
    return {
      x: d,
      y,
      data: {
        sideX: b,
        sideY: E
      }
    };
  }
};
function cf(t, e, n) {
  const r = t === "inline-start" || t === "inline-end";
  return {
    top: "top",
    right: r ? n ? "inline-start" : "inline-end" : "right",
    bottom: "bottom",
    left: r ? n ? "inline-end" : "inline-start" : "left"
  }[e];
}
function Lc(t, e, n) {
  const {
    rects: r,
    placement: o
  } = t;
  return {
    side: cf(e, Mt(o), n),
    align: Dn(o) || "center",
    anchor: {
      width: r.reference.width,
      height: r.reference.height
    },
    positioner: {
      width: r.floating.width,
      height: r.floating.height
    }
  };
}
function al(t) {
  const {
    // Public parameters
    anchor: e,
    positionMethod: n = "absolute",
    side: r = "bottom",
    sideOffset: o = 0,
    align: s = "center",
    alignOffset: l = 0,
    collisionBoundary: i,
    collisionPadding: f = 5,
    sticky: u = !1,
    arrowPadding: c = 5,
    disableAnchorTracking: p = !1,
    // Private parameters
    keepMounted: h = !1,
    floatingRootContext: g,
    mounted: d,
    collisionAvoidance: y,
    shiftCrossAxis: b = !1,
    nodeId: E,
    adaptiveOrigin: v,
    lazyFlip: m = !1,
    externalTree: C
  } = t, [x, R] = a.useState(null);
  !d && x !== null && R(null);
  const S = y.side || "flip", I = y.align || "flip", M = y.fallbackAxisSide || "end", A = typeof e == "function" ? e : void 0, _ = le(A), L = A ? _ : e, N = st(e), P = st(d), O = Qn() === "rtl", V = x || {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    "inline-end": O ? "left" : "right",
    "inline-start": O ? "right" : "left"
  }[r], k = s === "center" ? V : `${V}-${s}`;
  let H = f;
  const U = 1, T = r === "bottom" ? U : 0, D = r === "top" ? U : 0, $ = r === "right" ? U : 0, J = r === "left" ? U : 0;
  typeof H == "number" ? H = {
    top: H + T,
    right: H + J,
    bottom: H + D,
    left: H + $
  } : H && (H = {
    top: (H.top || 0) + T,
    right: (H.right || 0) + J,
    bottom: (H.bottom || 0) + D,
    left: (H.left || 0) + $
  });
  const Z = {
    boundary: i === "clipping-ancestors" ? "clippingAncestors" : i,
    padding: H
  }, q = a.useRef(null), B = st(o), Y = st(l), ue = [Wh((ye) => {
    const Ie = Lc(ye, r, O), xe = typeof B.current == "function" ? B.current(Ie) : B.current, Te = typeof Y.current == "function" ? Y.current(Ie) : Y.current;
    return {
      mainAxis: xe,
      crossAxis: Te,
      alignmentAxis: Te
    };
  }, [typeof o != "function" ? o : 0, typeof l != "function" ? l : 0, O, r])], z = I === "none" && S !== "shift", se = !z && (u || b || S === "shift"), fe = S === "none" ? null : Yh({
    ...Z,
    // Ensure the popup flips if it's been limited by its --available-height and it resizes.
    // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
    padding: {
      top: H.top + U,
      right: H.right + U,
      bottom: H.bottom + U,
      left: H.left + U
    },
    mainAxis: !b && S === "flip",
    crossAxis: I === "flip" ? "alignment" : !1,
    fallbackAxisSideDirection: M
  }), j = z ? null : Kh((ye) => {
    const Ie = He(ye.elements.floating).documentElement;
    return {
      ...Z,
      // Use the Layout Viewport to avoid shifting around when pinch-zooming
      // for context menus.
      rootBoundary: b ? {
        x: 0,
        y: 0,
        width: Ie.clientWidth,
        height: Ie.clientHeight
      } : void 0,
      mainAxis: I !== "none",
      crossAxis: se,
      limiter: u || b ? void 0 : Gh((xe) => {
        if (!q.current)
          return {};
        const {
          width: Te,
          height: Ye
        } = q.current.getBoundingClientRect(), je = jt(Mt(xe.placement)), _e = je === "y" ? Te : Ye, ke = je === "y" ? H.left + H.right : H.top + H.bottom;
        return {
          offset: _e / 2 + ke / 2
        };
      })
    };
  }, [Z, u, b, H, I]);
  S === "shift" || I === "shift" || s === "center" ? ue.push(j, fe) : ue.push(fe, j), ue.push(zh({
    ...Z,
    apply({
      elements: {
        floating: ye
      },
      availableWidth: Ie,
      availableHeight: xe,
      rects: Te
    }) {
      if (!P.current)
        return;
      const Ye = ye.style;
      Ye.setProperty("--available-width", `${Ie}px`), Ye.setProperty("--available-height", `${xe}px`);
      const je = it(ye).devicePixelRatio || 1, {
        x: _e,
        y: ke,
        width: Ue,
        height: qe
      } = Te.reference, Je = (Math.round((_e + Ue) * je) - Math.round(_e * je)) / je, Nt = (Math.round((ke + qe) * je) - Math.round(ke * je)) / je;
      Ye.setProperty("--anchor-width", `${Je}px`), Ye.setProperty("--anchor-height", `${Nt}px`);
    }
  }), kb(() => ({
    // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
    // we'll create a fake element.
    element: q.current || He(q.current).createElement("div"),
    padding: c,
    offsetParent: "floating"
  }), [c]), {
    name: "transformOrigin",
    fn(ye) {
      const {
        elements: Ie,
        middlewareData: xe,
        placement: Te,
        rects: Ye,
        y: je
      } = ye, _e = Mt(Te), ke = jt(_e), Ue = q.current, qe = xe.arrow?.x || 0, Je = xe.arrow?.y || 0, Nt = Ue?.clientWidth || 0, ze = Ue?.clientHeight || 0, kt = qe + Nt / 2, ut = Je + ze / 2, lt = Math.abs(xe.shift?.y || 0), Ke = Ye.reference.height / 2, tt = typeof o == "function" ? o(Lc(ye, r, O)) : o, Rt = lt > tt, Vt = {
        top: `${kt}px calc(100% + ${tt}px)`,
        bottom: `${kt}px ${-tt}px`,
        left: `calc(100% + ${tt}px) ${ut}px`,
        right: `${-tt}px ${ut}px`
      }[_e], ht = `${kt}px ${Ye.reference.y + Ke - je}px`;
      return Ie.floating.style.setProperty("--transform-origin", se && ke === "y" && Rt ? ht : Vt), {};
    }
  }, Vb, v), pe(() => {
    !d && g && g.update({
      referenceElement: null,
      floatingElement: null,
      domReferenceElement: null,
      positionReference: null
    });
  }, [d, g]);
  const W = a.useMemo(() => ({
    elementResize: !p && typeof ResizeObserver < "u",
    layoutShift: !p && typeof IntersectionObserver < "u"
  }), [p]), {
    refs: te,
    elements: ne,
    x: ee,
    y: ae,
    middlewareData: G,
    update: oe,
    placement: F,
    context: K,
    isPositioned: ce,
    floatingStyles: me
  } = mb({
    rootContext: g,
    open: h ? d : void 0,
    placement: k,
    middleware: ue,
    strategy: n,
    whileElementsMounted: h ? void 0 : (...ye) => Ic(...ye, W),
    nodeId: E,
    externalTree: C
  }), {
    sideX: Re,
    sideY: Ce
  } = G.adaptiveOrigin || Vo, we = ce ? n : "fixed", Ee = a.useMemo(() => {
    const ye = v ? {
      position: we,
      [Re]: ee,
      [Ce]: ae
    } : {
      position: we,
      ...me
    };
    return ce || (ye.opacity = 0), ye;
  }, [v, we, Re, ee, Ce, ae, me, ce]), he = a.useRef(null);
  pe(() => {
    if (!d)
      return;
    const ye = N.current, Ie = typeof ye == "function" ? ye() : ye, Te = (Bc(Ie) ? Ie.current : Ie) || null || null;
    Te !== he.current && (te.setPositionReference(Te), he.current = Te);
  }, [d, te, L, N]), a.useEffect(() => {
    if (!d)
      return;
    const ye = N.current;
    typeof ye != "function" && Bc(ye) && ye.current !== he.current && (te.setPositionReference(ye.current), he.current = ye.current);
  }, [d, te, L, N]), a.useEffect(() => {
    if (h && d && ne.domReference && ne.floating)
      return Ic(ne.domReference, ne.floating, oe, W);
  }, [h, d, ne, oe, W]);
  const be = Mt(F), Ne = cf(r, be, O), Se = Dn(F) || "center", Pe = !!G.hide?.referenceHidden;
  pe(() => {
    m && d && ce && R(be);
  }, [m, d, ce, be]);
  const Le = a.useMemo(() => ({
    position: "absolute",
    top: G.arrow?.y,
    left: G.arrow?.x
  }), [G.arrow]), Me = G.arrow?.centerOffset !== 0;
  return a.useMemo(() => ({
    positionerStyles: Ee,
    arrowStyles: Le,
    arrowRef: q,
    arrowUncentered: Me,
    side: Ne,
    align: Se,
    physicalSide: be,
    anchorHidden: Pe,
    refs: te,
    context: K,
    isPositioned: ce,
    update: oe
  }), [Ee, Le, q, Me, Ne, Se, be, Pe, te, K, ce, oe]);
}
function Bc(t) {
  return t != null && "current" in t;
}
function Yr(t) {
  const {
    children: e,
    elementsRef: n,
    labelsRef: r,
    onMapChange: o
  } = t, s = le(o), l = a.useRef(0), i = at(Fb).current, f = at(Db).current, [u, c] = a.useState(0), p = a.useRef(u), h = le((E, v) => {
    f.set(E, v ?? null), p.current += 1, c(p.current);
  }), g = le((E) => {
    f.delete(E), p.current += 1, c(p.current);
  }), d = a.useMemo(() => {
    const E = /* @__PURE__ */ new Map();
    return Array.from(f.keys()).filter((m) => m.isConnected).sort(Lb).forEach((m, C) => {
      const x = f.get(m) ?? {};
      E.set(m, {
        ...x,
        index: C
      });
    }), E;
  }, [f, u]);
  pe(() => {
    if (typeof MutationObserver != "function" || d.size === 0)
      return;
    const E = new MutationObserver((v) => {
      const m = /* @__PURE__ */ new Set(), C = (x) => m.has(x) ? m.delete(x) : m.add(x);
      v.forEach((x) => {
        x.removedNodes.forEach(C), x.addedNodes.forEach(C);
      }), m.size === 0 && (p.current += 1, c(p.current));
    });
    return d.forEach((v, m) => {
      m.parentElement && E.observe(m.parentElement, {
        childList: !0
      });
    }), () => {
      E.disconnect();
    };
  }, [d]), pe(() => {
    p.current === u && (n.current.length !== d.size && (n.current.length = d.size), r && r.current.length !== d.size && (r.current.length = d.size), l.current = d.size), s(d);
  }, [s, d, n, r, u]), pe(() => () => {
    n.current = [];
  }, [n]), pe(() => () => {
    r && (r.current = []);
  }, [r]);
  const y = le((E) => (i.add(E), () => {
    i.delete(E);
  }));
  pe(() => {
    i.forEach((E) => E(d));
  }, [i, d]);
  const b = a.useMemo(() => ({
    register: h,
    unregister: g,
    subscribeMapChange: y,
    elementsRef: n,
    labelsRef: r,
    nextIndexRef: l
  }), [h, g, y, n, r, l]);
  return /* @__PURE__ */ X.jsx($i.Provider, {
    value: b,
    children: e
  });
}
function Db() {
  return /* @__PURE__ */ new Map();
}
function Fb() {
  return /* @__PURE__ */ new Set();
}
function Lb(t, e) {
  const n = t.compareDocumentPosition(e);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
const ul = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    cutout: r,
    ...o
  } = e;
  let s;
  if (r) {
    const l = r.getBoundingClientRect();
    s = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${l.left}px ${l.top}px,${l.left}px ${l.bottom}px,${l.right}px ${l.bottom}px,${l.right}px ${l.top}px,${l.left}px ${l.top}px)`;
  }
  return /* @__PURE__ */ X.jsx("div", {
    ref: n,
    role: "presentation",
    "data-base-ui-inert": "",
    ...o,
    style: {
      position: "fixed",
      inset: 0,
      userSelect: "none",
      WebkitUserSelect: "none",
      clipPath: s
    }
  });
});
process.env.NODE_ENV !== "production" && (ul.displayName = "InternalBackdrop");
function fl(t, e, {
  styles: n,
  transitionStatus: r,
  props: o,
  refs: s,
  hidden: l,
  inert: i = !1
}) {
  const f = {
    ...n
  };
  return i && (f.pointerEvents = "none"), Be("div", t, {
    state: e,
    ref: s,
    props: [{
      role: "presentation",
      hidden: l,
      style: f
    }, ms(r), o],
    stateAttributesMapping: cs
  });
}
let Hc = {}, jc = {}, $c = "";
function Bb(t) {
  if (typeof document > "u")
    return !1;
  const e = He(t);
  return it(e).innerWidth - e.documentElement.clientWidth > 0;
}
function Hb(t) {
  if (!(typeof CSS < "u" && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || typeof document > "u")
    return !1;
  const n = He(t), r = n.documentElement, o = n.body, s = Mn(r) ? r : o, l = s.style.overflowY, i = r.style.scrollbarGutter;
  r.style.scrollbarGutter = "stable", s.style.overflowY = "scroll";
  const f = s.offsetWidth;
  s.style.overflowY = "hidden";
  const u = s.offsetWidth;
  return s.style.overflowY = l, r.style.scrollbarGutter = i, f === u;
}
function jb(t) {
  const e = He(t), n = e.documentElement, r = e.body, o = Mn(n) ? n : r, s = {
    overflowY: o.style.overflowY,
    overflowX: o.style.overflowX
  };
  return Object.assign(o.style, {
    overflowY: "hidden",
    overflowX: "hidden"
  }), () => {
    Object.assign(o.style, s);
  };
}
function $b(t) {
  const e = He(t), n = e.documentElement, r = e.body, o = it(n);
  let s = 0, l = 0, i = !1;
  const f = rn.create();
  if (Oi && (o.visualViewport?.scale ?? 1) !== 1)
    return () => {
    };
  function u() {
    const g = o.getComputedStyle(n), d = o.getComputedStyle(r), E = (g.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
    s = n.scrollTop, l = n.scrollLeft, Hc = {
      scrollbarGutter: n.style.scrollbarGutter,
      overflowY: n.style.overflowY,
      overflowX: n.style.overflowX
    }, $c = n.style.scrollBehavior, jc = {
      position: r.style.position,
      height: r.style.height,
      width: r.style.width,
      boxSizing: r.style.boxSizing,
      overflowY: r.style.overflowY,
      overflowX: r.style.overflowX,
      scrollBehavior: r.style.scrollBehavior
    };
    const v = n.scrollHeight > n.clientHeight, m = n.scrollWidth > n.clientWidth, C = g.overflowY === "scroll" || d.overflowY === "scroll", x = g.overflowX === "scroll" || d.overflowX === "scroll", R = Math.max(0, o.innerWidth - r.clientWidth), S = Math.max(0, o.innerHeight - r.clientHeight), I = parseFloat(d.marginTop) + parseFloat(d.marginBottom), M = parseFloat(d.marginLeft) + parseFloat(d.marginRight), A = Mn(n) ? n : r;
    if (i = Hb(t), i) {
      n.style.scrollbarGutter = E, A.style.overflowY = "hidden", A.style.overflowX = "hidden";
      return;
    }
    Object.assign(n.style, {
      scrollbarGutter: E,
      overflowY: "hidden",
      overflowX: "hidden"
    }), (v || C) && (n.style.overflowY = "scroll"), (m || x) && (n.style.overflowX = "scroll"), Object.assign(r.style, {
      position: "relative",
      height: I || S ? `calc(100dvh - ${I + S}px)` : "100dvh",
      width: M || R ? `calc(100vw - ${M + R}px)` : "100vw",
      boxSizing: "border-box",
      overflow: "hidden",
      scrollBehavior: "unset"
    }), r.scrollTop = s, r.scrollLeft = l, n.setAttribute("data-base-ui-scroll-locked", ""), n.style.scrollBehavior = "unset";
  }
  function c() {
    Object.assign(n.style, Hc), Object.assign(r.style, jc), i || (n.scrollTop = s, n.scrollLeft = l, n.removeAttribute("data-base-ui-scroll-locked"), n.style.scrollBehavior = $c);
  }
  function p() {
    c(), f.request(u);
  }
  u();
  const h = $e(o, "resize", p);
  return () => {
    f.cancel(), c(), typeof o.removeEventListener == "function" && h();
  };
}
class Ub {
  lockCount = 0;
  restore = null;
  timeoutLock = $t.create();
  timeoutUnlock = $t.create();
  acquire(e) {
    return this.lockCount += 1, this.lockCount === 1 && this.restore === null && this.timeoutLock.start(0, () => this.lock(e)), this.release;
  }
  release = () => {
    this.lockCount -= 1, this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock);
  };
  unlock = () => {
    this.lockCount === 0 && this.restore && (this.restore?.(), this.restore = null);
  };
  lock(e) {
    if (this.lockCount === 0 || this.restore !== null)
      return;
    const r = He(e).documentElement, o = it(r).getComputedStyle(r).overflowY;
    if (o === "hidden" || o === "clip") {
      this.restore = Ze;
      return;
    }
    const s = Mi || !Bb(e);
    this.restore = s ? jb(e) : $b(e);
  }
}
const Wb = new Ub();
function Kb(t = !0, e = null) {
  pe(() => {
    if (t)
      return Wb.acquire(e);
  }, [t, e]);
}
const Gb = 20;
function af(t, e, n, r) {
  const [o, s] = a.useState(!1);
  pe(() => {
    if (!t || !e || n == null) {
      s(!1);
      return;
    }
    const l = He(n).documentElement.clientWidth, i = n.offsetWidth;
    s(l > 0 && i > 0 && i >= l - Gb);
  }, [t, e, n]), Kb(t && (!e || o), r);
}
const uf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    anchor: r,
    positionMethod: o = "absolute",
    className: s,
    render: l,
    side: i,
    align: f,
    sideOffset: u = 0,
    alignOffset: c = 0,
    collisionBoundary: p = "clipping-ancestors",
    collisionPadding: h = 5,
    arrowPadding: g = 5,
    sticky: d = !1,
    disableAnchorTracking: y = !1,
    collisionAvoidance: b = yu,
    style: E,
    ...v
  } = e, {
    store: m
  } = Xn(), C = _b(), x = as(!0), R = m.useState("parent"), S = m.useState("floatingRootContext"), I = m.useState("floatingTreeRoot"), M = m.useState("mounted"), A = m.useState("open"), _ = m.useState("modal"), L = m.useState("openMethod"), N = m.useState("activeTriggerElement"), P = m.useState("transitionStatus"), w = m.useState("positionerElement"), O = m.useState("instantType"), V = m.useState("hasViewport"), k = m.useState("lastOpenChangeReason"), H = m.useState("floatingNodeId"), U = m.useState("floatingParentNodeId"), T = S.useState("domReferenceElement"), D = a.useRef(null), $ = Ta(w, !1, !1);
  let J = r, Z = u, q = c, B = f, Y = b;
  R.type === "context-menu" && (J = r ?? R.context?.anchor, B = B ?? "start", !i && B !== "center" && (q = e.alignOffset ?? 2, Z = e.sideOffset ?? -5));
  let Q = i, re = B;
  R.type === "menu" ? (Q = Q ?? "inline-end", re = re ?? "start", Y = e.collisionAvoidance ?? Eu) : R.type === "menubar" && (Q = Q ?? "bottom", re = re ?? "start");
  const ue = R.type === "context-menu", z = al({
    anchor: J,
    floatingRootContext: S,
    positionMethod: x ? "fixed" : o,
    mounted: M,
    side: Q,
    sideOffset: Z,
    align: re,
    alignOffset: q,
    arrowPadding: ue ? 0 : g,
    collisionBoundary: p,
    collisionPadding: h,
    sticky: d,
    nodeId: H,
    keepMounted: C,
    disableAnchorTracking: y,
    collisionAvoidance: Y,
    shiftCrossAxis: ue && !("side" in Y && Y.side === "flip"),
    externalTree: I,
    adaptiveOrigin: V ? lf : void 0
  });
  a.useEffect(() => {
    function ae(G) {
      G.open && (G.parentNodeId === H && m.set("hoverEnabled", !1), G.nodeId !== H && G.parentNodeId === m.select("floatingParentNodeId") && m.setOpen(!1, ge(Ir)));
    }
    return I.events.on("menuopenchange", ae), () => {
      I.events.off("menuopenchange", ae);
    };
  }, [m, I.events, H]), a.useEffect(() => {
    if (m.select("floatingParentNodeId") == null)
      return;
    function ae(G) {
      if (G.open || G.nodeId !== m.select("floatingParentNodeId"))
        return;
      const oe = G.reason ?? Ir;
      m.setOpen(!1, ge(oe));
    }
    return I.events.on("menuopenchange", ae), () => {
      I.events.off("menuopenchange", ae);
    };
  }, [I.events, m]);
  const se = dt();
  a.useEffect(() => {
    A || se.clear();
  }, [A, se]), a.useEffect(() => {
    function ae(G) {
      if (!(!A || G.nodeId !== m.select("floatingParentNodeId")))
        if (G.target && N && N !== G.target) {
          const oe = m.select("closeDelay");
          oe > 0 ? se.isStarted() || se.start(oe, () => {
            m.setOpen(!1, ge(Ir));
          }) : m.setOpen(!1, ge(Ir));
        } else
          se.clear();
    }
    return I.events.on("itemhover", ae), () => {
      I.events.off("itemhover", ae);
    };
  }, [I.events, A, N, m, se]), a.useEffect(() => {
    const ae = {
      open: A,
      nodeId: H,
      parentNodeId: U,
      reason: m.select("lastOpenChangeReason")
    };
    I.events.emit("menuopenchange", ae);
  }, [I.events, A, m, H, U]), pe(() => {
    const ae = T, G = D.current;
    if (ae && (D.current = ae), G && ae && ae !== G) {
      m.set("instantType", void 0);
      const oe = new AbortController();
      return $(() => {
        m.set("instantType", "trigger-change");
      }, oe.signal), () => {
        oe.abort();
      };
    }
  }, [T, $, m]);
  const fe = {
    open: A,
    side: z.side,
    align: z.align,
    anchorHidden: z.anchorHidden,
    nested: R.type === "menu",
    instant: O
  }, j = R.type === "menubar" && R.context.modal;
  af(A && (j || _ && k !== Ct), L === "touch", w, N);
  const te = fl(e, fe, {
    styles: z.positionerStyles,
    transitionStatus: P,
    props: v,
    refs: [n, m.useStateSetter("positionerElement")],
    hidden: !M,
    inert: !A
  }), ne = M && R.type !== "menu" && (R.type !== "menubar" && _ && k !== Ct || R.type === "menubar" && R.context.modal);
  let ee = null;
  return R.type === "menubar" ? ee = R.context.contentElement : R.type === void 0 && (ee = N), /* @__PURE__ */ X.jsxs(Li.Provider, {
    value: z,
    children: [ne && /* @__PURE__ */ X.jsx(ul, {
      ref: R.type === "context-menu" || R.type === "nested-context-menu" ? R.context.internalBackdropRef : null,
      inert: of(!A),
      cutout: ee
    }), /* @__PURE__ */ X.jsx(eh, {
      id: H,
      children: /* @__PURE__ */ X.jsx(Yr, {
        elementsRef: m.context.itemDomElements,
        labelsRef: m.context.itemLabels,
        children: te
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (uf.displayName = "MenuPositioner");
function gs(t) {
  const e = a.useRef(!0);
  e.current && (e.current = !1, t());
}
const ff = /* @__PURE__ */ a.createContext(null);
process.env.NODE_ENV !== "production" && (ff.displayName = "MenubarContext");
function df(t) {
  return a.useContext(ff);
}
function Yb(t) {
  const e = a.useRef(""), n = a.useCallback((o) => {
    o.defaultPrevented || (e.current = o.pointerType, t(o, o.pointerType));
  }, [t]);
  return {
    onClick: a.useCallback((o) => {
      if (o.detail === 0) {
        t(o, "keyboard");
        return;
      }
      "pointerType" in o ? t(o, o.pointerType) : t(o, e.current), e.current = "";
    }, [t]),
    onPointerDown: n
  };
}
function dl(t) {
  const [e, n] = a.useState(null), r = le((l, i) => {
    t || n(i || // On iOS Safari, the hitslop around touch targets means tapping outside an element's
    // bounds does not fire `pointerdown` but does fire `mousedown`. The `interactionType`
    // will be "" in that case.
    (Mi ? "touch" : ""));
  });
  qt(t, (l) => {
    l && !t && n(null);
  });
  const {
    onClick: o,
    onPointerDown: s
  } = Yb(r);
  return a.useMemo(() => ({
    openMethod: e,
    triggerProps: {
      onClick: o,
      onPointerDown: s
    }
  }), [e, o, s]);
}
const zb = {
  ...Bu,
  disabled: ie((t) => t.parent.type === "menubar" && t.parent.context.disabled || t.disabled),
  modal: ie((t) => (t.parent.type === void 0 || t.parent.type === "context-menu") && (t.modal ?? !0)),
  openMethod: ie((t) => t.openMethod),
  allowMouseEnter: ie((t) => t.allowMouseEnter),
  stickIfOpen: ie((t) => t.stickIfOpen),
  parent: ie((t) => t.parent),
  rootId: ie((t) => t.parent.type === "menu" ? t.parent.store.select("rootId") : t.parent.type !== void 0 ? t.parent.context.rootId : t.rootId),
  activeIndex: ie((t) => t.activeIndex),
  isActive: ie((t, e) => t.activeIndex === e),
  hoverEnabled: ie((t) => t.hoverEnabled),
  instantType: ie((t) => t.instantType),
  lastOpenChangeReason: ie((t) => t.openChangeReason),
  floatingTreeRoot: ie((t) => t.parent.type === "menu" ? t.parent.store.select("floatingTreeRoot") : t.floatingTreeRoot),
  floatingNodeId: ie((t) => t.floatingNodeId),
  floatingParentNodeId: ie((t) => t.floatingParentNodeId),
  itemProps: ie((t) => t.itemProps),
  closeDelay: ie((t) => t.closeDelay),
  hasViewport: ie((t) => t.hasViewport),
  keyboardEventRelay: ie((t) => {
    if (t.keyboardEventRelay)
      return t.keyboardEventRelay;
    if (t.parent.type === "menu")
      return t.parent.store.select("keyboardEventRelay");
  })
};
class pl extends nl {
  constructor(e) {
    super({
      ...qb(),
      ...e
    }, {
      positionerRef: /* @__PURE__ */ a.createRef(),
      popupRef: /* @__PURE__ */ a.createRef(),
      typingRef: {
        current: !1
      },
      itemDomElements: {
        current: []
      },
      itemLabels: {
        current: []
      },
      allowMouseUpTriggerRef: {
        current: !1
      },
      triggerFocusTargetRef: /* @__PURE__ */ a.createRef(),
      beforeContentFocusGuardRef: /* @__PURE__ */ a.createRef(),
      onOpenChangeComplete: void 0,
      triggerElements: new ds()
    }, zb), this.unsubscribeParentListener = this.observe("parent", (n) => {
      if (this.unsubscribeParentListener?.(), n.type === "menu") {
        let r = n.store.select("rootId"), o = n.store.select("floatingTreeRoot"), s = n.store.select("keyboardEventRelay");
        this.unsubscribeParentListener = n.store.subscribe(() => {
          const l = n.store.select("rootId"), i = n.store.select("floatingTreeRoot"), f = n.store.select("keyboardEventRelay");
          r === l && o === i && s === f || (r = l, o = i, s = f, this.notifyAll());
        }), this.context.allowMouseUpTriggerRef = n.store.context.allowMouseUpTriggerRef;
        return;
      }
      n.type !== void 0 && (this.context.allowMouseUpTriggerRef = n.context.allowMouseUpTriggerRef), this.unsubscribeParentListener = null;
    });
  }
  setOpen(e, n) {
    this.state.floatingRootContext.context.events.emit("setOpen", {
      open: e,
      eventDetails: n
    });
  }
  static useStore(e, n) {
    const r = at(() => new pl(n)).current;
    return e ?? r;
  }
  unsubscribeParentListener = null;
}
function qb() {
  return {
    ...Lu(),
    disabled: !1,
    modal: !0,
    openMethod: null,
    allowMouseEnter: !1,
    stickIfOpen: !0,
    parent: {
      type: void 0
    },
    rootId: void 0,
    activeIndex: null,
    hoverEnabled: !0,
    instantType: void 0,
    openChangeReason: null,
    floatingTreeRoot: new Gi(),
    floatingNodeId: void 0,
    floatingParentNodeId: null,
    itemProps: et,
    keyboardEventRelay: void 0,
    closeDelay: 0,
    hasViewport: !1
  };
}
const pf = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (pf.displayName = "MenuSubmenuRootContext");
function Xb() {
  return a.useContext(pf);
}
const mf = el(function(e) {
  const {
    children: n,
    open: r,
    onOpenChange: o,
    onOpenChangeComplete: s,
    defaultOpen: l = !1,
    disabled: i = !1,
    modal: f,
    loopFocus: u = !0,
    orientation: c = "vertical",
    actionsRef: p,
    closeParentOnEsc: h = !1,
    handle: g,
    triggerId: d,
    defaultTriggerId: y = null,
    highlightItemOnHover: b = !0
  } = e, E = as(!0), v = Xn(!0), m = df(!0), C = Xb(), x = a.useMemo(() => C && v ? {
    type: "menu",
    store: v.store
  } : m ? {
    type: "menubar",
    context: m
  } : E && !v ? {
    type: "context-menu",
    context: E
  } : {
    type: void 0
  }, [E, v, m, C]), R = pl.useStore(g?.store, {
    open: l,
    openProp: r,
    activeTriggerId: y,
    triggerIdProp: d,
    parent: x
  });
  gs(() => {
    r === void 0 && R.state.open === !1 && l === !0 && R.update({
      open: !0,
      activeTriggerId: y
    });
  }), R.useControlledProp("openProp", r), R.useControlledProp("triggerIdProp", d), R.useContextCallback("onOpenChangeComplete", s);
  const S = R.useState("floatingTreeRoot"), I = Cu(S), M = xn();
  pe(() => {
    E && !v ? R.update({
      parent: {
        type: "context-menu",
        context: E
      },
      floatingNodeId: I,
      floatingParentNodeId: M
    }) : v && R.update({
      floatingNodeId: I,
      floatingParentNodeId: M
    });
  }, [E, v, I, M, R]);
  const A = R.useState("open"), _ = R.useState("activeTriggerElement"), L = R.useState("positionerElement"), N = R.useState("hoverEnabled"), P = R.useState("disabled"), w = R.useState("lastOpenChangeReason"), O = R.useState("parent"), V = R.useState("activeIndex"), k = R.useState("payload"), H = R.useState("floatingParentNodeId"), U = a.useRef(null), T = H != null;
  process.env.NODE_ENV !== "production" && O.type !== void 0 && f !== void 0 && console.warn("Base UI: The `modal` prop is not supported on nested menus. It will be ignored.");
  const {
    openMethod: D,
    triggerProps: $
  } = dl(A);
  R.useSyncedValues({
    disabled: i,
    modal: O.type === void 0 ? f : void 0,
    openMethod: D,
    rootId: zn()
  }), Du(R);
  const {
    forceUnmount: J
  } = Fu(A, R, () => {
    R.update({
      allowMouseEnter: !1,
      stickIfOpen: !0
    });
  }), Z = a.useRef(O.type !== "context-menu"), q = dt();
  a.useEffect(() => {
    if (A || (U.current = null), O.type === "context-menu") {
      if (!A) {
        q.clear(), Z.current = !1;
        return;
      }
      q.start(500, () => {
        Z.current = !0;
      });
    }
  }, [q, A, O.type]), pe(() => {
    !A && !N && R.set("hoverEnabled", !0);
  }, [A, N, R]);
  const B = a.useRef(!0), Y = dt(), Q = le((he, be) => {
    const Ne = be.reason;
    if (A === he && be.trigger === _ && w === Ne || (be.preventUnmountOnClose = () => {
      R.set("preventUnmountingOnClose", !0);
    }, !he && be.trigger == null && (be.trigger = _ ?? void 0), o?.(he, be), be.isCanceled))
      return;
    R.state.floatingRootContext.dispatchOpenChange(he, be);
    const Se = be.event;
    if (he === !1 && Se?.type === "click" && Se.pointerType === "touch" && !B.current)
      return;
    if (!he && V !== null) {
      const Ie = R.context.itemDomElements.current[V];
      queueMicrotask(() => {
        Ie?.setAttribute("tabindex", "-1");
      });
    }
    he && Ne === ir ? (B.current = !1, Y.start(300, () => {
      B.current = !0;
    })) : (B.current = !0, Y.clear());
    const Pe = (Ne === dr || Ne === lr) && Se.detail === 0 && Se?.isTrusted, Le = !he && (Ne === Hr || Ne == null), Me = {
      open: he,
      openChangeReason: Ne
    };
    U.current = be.event ?? null;
    const ye = be.trigger?.id ?? null;
    (ye || he) && (Me.activeTriggerId = ye, Me.activeTriggerElement = be.trigger ?? null), R.update(Me), O.type === "menubar" && (Ne === ir || Ne === On || Ne === Ct || Ne === Pr || Ne === Ir) ? R.set("instantType", "group") : Pe || Le ? R.set("instantType", Pe ? "click" : "dismiss") : R.set("instantType", void 0);
  }), re = a.useCallback(() => {
    R.setOpen(!1, ge(Sa));
  }, [R]);
  a.useImperativeHandle(p, () => ({
    unmount: J,
    close: re
  }), [J, re]);
  let ue;
  O.type === "context-menu" && (ue = O.context), a.useImperativeHandle(ue?.positionerRef, () => L, [L]), a.useImperativeHandle(ue?.actionsRef, () => ({
    setOpen: Q
  }), [Q]);
  const z = Hu({
    popupStore: R,
    onOpenChange: Q
  }), se = z.context.events;
  a.useEffect(() => {
    const he = ({
      open: be,
      eventDetails: Ne
    }) => Q(be, Ne);
    return se.on("setOpen", he), () => {
      se?.off("setOpen", he);
    };
  }, [se, Q]);
  const fe = us(z, {
    enabled: !P,
    bubbles: {
      escapeKey: h && O.type === "menu"
    },
    outsidePress() {
      return O.type !== "context-menu" || U.current?.type === "contextmenu" ? !0 : Z.current;
    },
    externalTree: T ? S : void 0
  }), j = Rb(z, {
    role: "menu"
  }), W = Qn(), te = a.useCallback((he) => {
    R.select("activeIndex") !== he && R.set("activeIndex", he);
  }, [R]), ne = il(z, {
    enabled: !P,
    listRef: R.context.itemDomElements,
    activeIndex: V,
    nested: O.type !== void 0,
    loopFocus: u,
    orientation: c,
    parentOrientation: O.type === "menubar" ? O.context.orientation : void 0,
    rtl: W === "rtl",
    disabledIndices: zt,
    onNavigate: te,
    openOnArrowKeyDown: O.type !== "context-menu",
    externalTree: T ? S : void 0,
    focusItemOnHover: b
  }), ee = a.useCallback((he) => {
    R.context.typingRef.current = he;
  }, [R]), ae = Gu(z, {
    listRef: R.context.itemLabels,
    elementsRef: R.context.itemDomElements,
    activeIndex: V,
    resetMs: zg,
    onMatch: (he) => {
      A && he !== V && R.set("activeIndex", he);
    },
    onTypingChange: ee
  }), {
    getReferenceProps: G,
    getFloatingProps: oe,
    getItemProps: F,
    getTriggerProps: K
  } = Gr([fe, j, ne, ae]), ce = a.useMemo(() => {
    const he = At(G(), {
      onMouseMove() {
        R.set("allowMouseEnter", !0);
      }
    }, $);
    return delete he.role, he;
  }, [G, R, $]), me = a.useMemo(() => {
    const he = K();
    if (!he)
      return he;
    const be = At(he, $);
    return delete be.role, delete be["aria-controls"], be;
  }, [K, $]), Re = a.useMemo(() => oe({
    onMouseMove() {
      R.set("allowMouseEnter", !0), O.type === "menu" && R.set("hoverEnabled", !1);
    },
    onClick() {
      R.select("hoverEnabled") && R.set("hoverEnabled", !1);
    },
    onKeyDown(he) {
      const be = R.select("keyboardEventRelay");
      be && !he.isPropagationStopped() && be(he);
    }
  }), [oe, O.type, R]), Ce = a.useMemo(() => F(), [F]);
  R.useSyncedValues({
    floatingRootContext: z,
    activeTriggerProps: ce,
    inactiveTriggerProps: me,
    popupProps: Re,
    itemProps: Ce
  });
  const we = a.useMemo(() => ({
    store: R,
    parent: x
  }), [R, x]), Ee = /* @__PURE__ */ X.jsx(Bi.Provider, {
    value: we,
    children: typeof n == "function" ? n({
      payload: k
    }) : n
  });
  return O.type === void 0 || O.type === "context-menu" ? /* @__PURE__ */ X.jsx(th, {
    externalTree: S,
    children: Ee
  }) : Ee;
});
process.env.NODE_ENV !== "production" && (mf.displayName = "MenuRoot");
function gf(t) {
  const e = t.getBoundingClientRect();
  if (process.env.NODE_ENV !== "production")
    return e;
  const n = it(t), r = n.getComputedStyle(t, "::before"), o = n.getComputedStyle(t, "::after");
  if (!(r.content !== "none" || o.content !== "none"))
    return e;
  const l = parseFloat(r.width) || 0, i = parseFloat(r.height) || 0, f = parseFloat(o.width) || 0, u = parseFloat(o.height) || 0, c = Math.max(e.width, l, f), p = Math.max(e.height, i, u), h = c - e.width, g = p - e.height;
  return {
    left: e.left - h / 2,
    right: e.right + h / 2,
    top: e.top - g / 2,
    bottom: e.bottom + g / 2
  };
}
function Jb(t = {}) {
  const {
    highlightItemOnHover: e,
    highlightedIndex: n,
    onHighlightedIndexChange: r
  } = vi(), {
    ref: o,
    index: s
  } = Kr(t), l = n === s, i = a.useRef(null), f = Tt(o, i);
  return {
    compositeProps: a.useMemo(() => ({
      tabIndex: l ? 0 : -1,
      onFocus() {
        r(s);
      },
      onMouseMove() {
        const c = i.current;
        if (!e || !c)
          return;
        const p = c.hasAttribute("disabled") || c.ariaDisabled === "true";
        !l && !p && c.focus();
      }
    }), [l, r, s, e]),
    compositeRef: f,
    index: s
  };
}
function hf(t) {
  const {
    render: e,
    className: n,
    style: r,
    state: o = et,
    props: s = zt,
    refs: l = zt,
    metadata: i,
    stateAttributesMapping: f,
    tag: u = "div",
    ...c
  } = t, {
    compositeProps: p,
    compositeRef: h
  } = Jb({
    metadata: i
  });
  return Be(u, t, {
    state: o,
    ref: [...l, h],
    props: [p, ...s, c],
    stateAttributesMapping: f
  });
}
function bf(t) {
  if (Qe(t) && t.hasAttribute("data-rootownerid"))
    return t.getAttribute("data-rootownerid") ?? void 0;
  if (!sn(t))
    return bf(fn(t));
}
function Zb(t, e) {
  const n = a.useRef(null), r = le((s) => {
    Jt.flushSync(() => {
      t.setOpen(!1, ge(On, s.nativeEvent, s.currentTarget));
    }), xg(n.current)?.focus();
  }), o = le((s) => {
    const l = t.select("positionerElement");
    if (l && cr(s, l))
      t.context.beforeContentFocusGuardRef.current?.focus();
    else {
      Jt.flushSync(() => {
        t.setOpen(!1, ge(On, s.nativeEvent, s.currentTarget));
      });
      let i = Rg(t.context.triggerFocusTargetRef.current || e.current);
      for (; i !== null && Oe(l, i); ) {
        const f = i;
        if (i = Fi(i), i === f)
          break;
      }
      i?.focus();
    }
  });
  return {
    preFocusGuardRef: n,
    handlePreFocusGuardFocus: r,
    handleFocusTargetFocus: o
  };
}
function Qb(t) {
  const {
    enabled: e = !0,
    mouseDownAction: n,
    open: r
  } = t, o = a.useRef(!1);
  return a.useMemo(() => e ? {
    onMouseDown: (s) => {
      (n === "open" && !r || n === "close" && r) && (o.current = !0, He(s.currentTarget).addEventListener("click", () => {
        o.current = !1;
      }, {
        once: !0
      }));
    },
    onClick: (s) => {
      o.current && (o.current = !1, s.preventBaseUIHandler());
    }
  } : et, [e, n, r]);
}
const Ro = 2, yf = ku(function(e, n) {
  const {
    render: r,
    className: o,
    disabled: s = !1,
    nativeButton: l = !0,
    id: i,
    openOnHover: f,
    delay: u = 100,
    closeDelay: c = 0,
    handle: p,
    payload: h,
    style: g,
    ...d
  } = e, y = Xn(!0), b = p?.store ?? y?.store;
  if (!b)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Menu.Trigger> must be either used within a <Menu.Root> component or provided with a handle." : ot(85));
  const E = Et(i), v = b.useState("isTriggerActive", E), m = b.useState("floatingRootContext"), C = b.useState("isOpenedByTrigger", E), x = a.useRef(null), R = ty(), S = vi(!0), I = Fn(), M = a.useMemo(() => I ?? new Gi(), [I]), A = Cu(M), _ = xn(), {
    registerTrigger: L,
    isMountedByThisTrigger: N
  } = Vu(E, x, b, {
    payload: h,
    closeDelay: c,
    parent: R,
    floatingTreeRoot: M,
    floatingNodeId: A,
    floatingParentNodeId: _,
    keyboardEventRelay: S?.relayKeyboardEvent
  }), P = R.type === "menubar", w = b.useState("disabled"), O = s || w || P && R.context.disabled, {
    getButtonProps: V,
    buttonRef: k
  } = Lt({
    disabled: O,
    native: l
  });
  a.useEffect(() => {
    !C && R.type === void 0 && (b.context.allowMouseUpTriggerRef.current = !1);
  }, [b, C, R.type]);
  const H = a.useRef(null), U = dt(), T = le((ne) => {
    if (!H.current)
      return;
    U.clear(), b.context.allowMouseUpTriggerRef.current = !1;
    const ee = ne.target;
    if (Oe(H.current, ee) || Oe(b.select("positionerElement"), ee) || ee === H.current || ee != null && bf(ee) === b.select("rootId"))
      return;
    const ae = gf(H.current);
    ne.clientX >= ae.left - Ro && ne.clientX <= ae.right + Ro && ne.clientY >= ae.top - Ro && ne.clientY <= ae.bottom + Ro || M.events.emit("close", {
      domEvent: ne,
      reason: Ca
    });
  });
  a.useEffect(() => {
    C && b.select("lastOpenChangeReason") === Ct && He(H.current).addEventListener("mouseup", T, {
      once: !0
    });
  }, [C, T, b]);
  const D = P && R.context.hasSubmenuOpen, J = Ku(m, {
    enabled: (f ?? D) && !O && R.type !== "context-menu" && (!P || D && !N),
    handleClose: Yu({
      blockPointerEvents: !P
    }),
    mouseOnly: !0,
    move: !1,
    restMs: R.type === void 0 ? u : void 0,
    delay: {
      close: c
    },
    triggerElementRef: x,
    externalTree: M,
    isActiveTrigger: v,
    isClosing: () => b.select("transitionStatus") === "ending"
  }), Z = ey(C, b.select("lastOpenChangeReason")), q = Xi(m, {
    enabled: !O && R.type !== "context-menu",
    event: C && P ? "click" : "mousedown",
    toggle: !0,
    ignoreMouse: !1,
    stickIfOpen: R.type === void 0 ? Z : !1
  }), B = ju(m, {
    enabled: !O && D
  }), Y = Qb({
    open: C,
    enabled: P,
    mouseDownAction: "open"
  }), Q = Gr([q, B]), re = {
    disabled: O,
    open: C
  }, ue = b.useState("triggerProps", N), z = [H, n, k, L, x], se = [Q.getReferenceProps(), J ?? et, ue, {
    "aria-haspopup": "menu",
    id: E,
    onMouseDown: (ne) => {
      if (b.select("open"))
        return;
      U.start(200, () => {
        b.context.allowMouseUpTriggerRef.current = !0;
      }), He(ne.currentTarget).addEventListener("mouseup", T, {
        once: !0
      });
    }
  }, P ? {
    role: "menuitem"
  } : {}, Y, d, V], {
    preFocusGuardRef: fe,
    handlePreFocusGuardFocus: j,
    handleFocusTargetFocus: W
  } = Zb(b, x), te = Be("button", e, {
    enabled: !P,
    stateAttributesMapping: Ko,
    state: re,
    ref: z,
    props: se
  });
  return P ? /* @__PURE__ */ X.jsx(hf, {
    tag: "button",
    render: r,
    className: o,
    style: g,
    state: re,
    refs: z,
    props: se,
    stateAttributesMapping: Ko
  }) : C ? /* @__PURE__ */ X.jsxs(a.Fragment, {
    children: [/* @__PURE__ */ X.jsx(Un, {
      ref: fe,
      onFocus: j
    }, `${E}-pre-focus-guard`), /* @__PURE__ */ X.jsx(a.Fragment, {
      children: te
    }, E), /* @__PURE__ */ X.jsx(Un, {
      ref: b.context.triggerFocusTargetRef,
      onFocus: W
    }, `${E}-post-focus-guard`)]
  }) : /* @__PURE__ */ X.jsx(a.Fragment, {
    children: te
  }, E);
});
process.env.NODE_ENV !== "production" && (yf.displayName = "MenuTrigger");
function ey(t, e) {
  const n = dt(), [r, o] = a.useState(!1);
  return pe(() => {
    t && e === "trigger-hover" ? (o(!0), n.start(qg, () => {
      o(!1);
    })) : t || (n.clear(), o(!1));
  }, [t, e, n]), r;
}
function ty() {
  const t = as(!0), e = Xn(!0), n = df();
  return a.useMemo(() => n ? {
    type: "menubar",
    context: n
  } : t && !e ? {
    type: "context-menu",
    context: t
  } : {
    type: void 0
  }, [t, e, n]);
}
function ny(t) {
  const [e, n] = a.useState({
    current: t,
    previous: null
  });
  return t !== e.current && n({
    current: t,
    previous: e.current
  }), e.previous;
}
function ry(t) {
  return t == null || t.hasAttribute("disabled") || t.getAttribute("aria-disabled") === "true";
}
const oy = "_Trigger_1171y_3", sy = "_Positioner_1171y_52", iy = "_Popup_1171y_56", ly = "_Item_1171y_79", xo = {
  Trigger: oy,
  Positioner: sy,
  Popup: iy,
  Item: ly
};
function vR(t) {
  const e = Zt.c(67);
  let n, r, o, s;
  e[0] !== t ? ({
    triggerContent: s,
    itemList: n,
    innerProps: o,
    ...r
  } = t, e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = s) : (n = e[1], r = e[2], o = e[3], s = e[4]);
  let l;
  e[5] !== o ? (l = o === void 0 ? {} : o, e[5] = o, e[6] = l) : l = e[6];
  const i = l;
  let f;
  e[7] !== i.trigger ? (f = i?.trigger || {}, e[7] = i.trigger, e[8] = f) : f = e[8];
  let u, c;
  e[9] !== f ? ({
    className: u,
    ...c
  } = f, e[9] = f, e[10] = u, e[11] = c) : (u = e[10], c = e[11]);
  let p;
  e[12] !== i.portal ? (p = i.portal || {}, e[12] = i.portal, e[13] = p) : p = e[13];
  let h, g;
  e[14] !== p ? ({
    className: h,
    ...g
  } = p, e[14] = p, e[15] = h, e[16] = g) : (h = e[15], g = e[16]);
  let d;
  e[17] !== i.positioner ? (d = i.positioner || {}, e[17] = i.positioner, e[18] = d) : d = e[18];
  let y, b;
  e[19] !== d ? ({
    className: y,
    ...b
  } = d, e[19] = d, e[20] = y, e[21] = b) : (y = e[20], b = e[21]);
  let E;
  e[22] !== i.popup ? (E = i.popup || {}, e[22] = i.popup, e[23] = E) : E = e[23];
  let v, m;
  e[24] !== E ? ({
    className: v,
    ...m
  } = E, e[24] = E, e[25] = v, e[26] = m) : (v = e[25], m = e[26]);
  let C;
  e[27] !== i.item ? (C = i.item || {}, e[27] = i.item, e[28] = C) : C = e[28];
  let x, R;
  e[29] !== C ? ({
    className: x,
    ...R
  } = C, e[29] = C, e[30] = x, e[31] = R) : (x = e[30], R = e[31]);
  let S;
  e[32] !== u ? (S = Fe(xo.Trigger, u), e[32] = u, e[33] = S) : S = e[33];
  let I;
  e[34] !== s ? (I = /* @__PURE__ */ X.jsx(ga, { children: s }), e[34] = s, e[35] = I) : I = e[35];
  let M;
  e[36] !== S || e[37] !== I || e[38] !== c ? (M = /* @__PURE__ */ X.jsx(yf, { className: S, ...c, children: I }), e[36] = S, e[37] = I, e[38] = c, e[39] = M) : M = e[39];
  let A;
  e[40] !== y ? (A = Fe(xo.Positioner, y), e[40] = y, e[41] = A) : A = e[41];
  let _;
  e[42] !== v ? (_ = Fe(xo.Popup, v), e[42] = v, e[43] = _) : _ = e[43];
  let L;
  if (e[44] !== x || e[45] !== n || e[46] !== R) {
    let V;
    e[48] !== x || e[49] !== R ? (V = (k, H) => {
      const {
        className: U,
        ...T
      } = k.itemListProps || {};
      return /* @__PURE__ */ X.jsx(gu, { className: Fe(xo.Item, x, U), ...R, ...T, children: k.content }, H);
    }, e[48] = x, e[49] = R, e[50] = V) : V = e[50], L = n.map(V), e[44] = x, e[45] = n, e[46] = R, e[47] = L;
  } else
    L = e[47];
  let N;
  e[51] !== m || e[52] !== _ || e[53] !== L ? (N = /* @__PURE__ */ X.jsx(nf, { className: _, ...m, children: L }), e[51] = m, e[52] = _, e[53] = L, e[54] = N) : N = e[54];
  let P;
  e[55] !== b || e[56] !== A || e[57] !== N ? (P = /* @__PURE__ */ X.jsx(uf, { className: A, sideOffset: 8, ...b, children: N }), e[55] = b, e[56] = A, e[57] = N, e[58] = P) : P = e[58];
  let w;
  e[59] !== h || e[60] !== g || e[61] !== P ? (w = /* @__PURE__ */ X.jsx(rf, { className: h, ...g, children: P }), e[59] = h, e[60] = g, e[61] = P, e[62] = w) : w = e[62];
  let O;
  return e[63] !== r || e[64] !== M || e[65] !== w ? (O = /* @__PURE__ */ X.jsxs(mf, { ...r, children: [
    M,
    w
  ] }), e[63] = r, e[64] = M, e[65] = w, e[66] = O) : O = e[66], O;
}
const ml = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (ml.displayName = "NumberFieldRootContext");
function hs() {
  const t = a.useContext(ml);
  if (t === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: NumberFieldRootContext is missing. NumberField parts must be placed within <NumberField.Root>." : ot(43));
  return t;
}
const zr = {
  inputValue: () => null,
  value: () => null,
  ...wt
}, Uc = /* @__PURE__ */ new Map();
function Lr(t, e) {
  const n = JSON.stringify({
    locale: t,
    options: e
  }), r = Uc.get(n);
  if (r)
    return r;
  const o = new Intl.NumberFormat(t, e);
  return Uc.set(n, o), o;
}
function un(t, e, n) {
  return t == null ? "" : Lr(e, n).format(t);
}
function Ef(t, e, n) {
  return un(t, e, {
    ...n,
    maximumFractionDigits: 20
  });
}
const cy = ["零", "〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"], ay = {
  零: "0",
  "〇": "0",
  一: "1",
  二: "2",
  三: "3",
  四: "4",
  五: "5",
  六: "6",
  七: "7",
  八: "8",
  九: "9"
}, Rf = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"], xf = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"], gl = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"], vf = ["%", "٪", "％", "﹪"], Cf = ["‰", "؉"], Sf = ["−", "－", "‒", "–", "—", "﹣"], If = ["＋", "﹢"], uy = "．", fy = "，", dy = new RegExp(`[${Rf.join("")}]`, "g"), py = new RegExp(`[${xf.join("")}]`, "g"), my = new RegExp(`[${gl.join("")}]`, "g"), gy = new RegExp(`[${cy.join("")}]`, "g"), hy = new RegExp(`[${vf.join("")}]`), by = new RegExp(`[${Cf.join("")}]`), pi = /[٠١٢٣٤٥٦٧٨٩]/, Tf = /[۰۱۲۳۴۵۶۷۸۹]/, mi = /[零〇一二三四五六七八九]/, Wc = new RegExp(`[${gl.join("")}]`), yy = [".", ",", uy, fy, "٫", "٬"], Kc = new RegExp("\\p{Zs}", "u"), Ey = ["+", ...If], Ry = ["-", ...Sf], vo = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), xy = (t) => t.replace(/[-\\\]^]/g, (e) => `\\${e}`), wf = (t) => `[${t.map(xy).join("")}]`, Pf = wf(["-"].concat(Sf)), Nf = wf(["+"].concat(If)), Of = new RegExp(Pf, "gu"), Mf = new RegExp(Nf, "gu"), vr = new RegExp(Pf), Co = new RegExp(Nf);
function hl(t, e) {
  const n = Lr(t, e).formatToParts(11111.1), r = {};
  return n.forEach((o) => {
    r[o.type] = o.value;
  }), Lr(t).formatToParts(0.1).forEach((o) => {
    o.type === "decimal" && (r[o.type] = o.value);
  }), r;
}
function Tr(t, e, n) {
  if (t == null)
    return null;
  let r = String(t).replace(new RegExp("\\p{Cf}", "gu"), "").trim();
  r = r.replace(Of, "-").replace(Mf, "+");
  let o = !1;
  const s = r.match(/([+-])\s*$/);
  s && (s[1] === "-" && (o = !0), r = r.replace(/([+-])\s*$/, ""));
  const l = r.match(/^\s*([+-])/);
  l && (l[1] === "-" && (o = !0), r = r.replace(/^\s*[+-]/, ""));
  let i = e;
  i === void 0 && (pi.test(r) || Tf.test(r) ? i = "ar" : mi.test(r) && (i = "zh"));
  const {
    group: f,
    decimal: u,
    currency: c
  } = hl(i, n), p = Lr(i, n).formatToParts(1).filter((S) => S.type === "unit").map((S) => vo(S.value)), h = p.length ? new RegExp(p.join("|"), "g") : null;
  let g = null;
  f && (new RegExp("\\p{Zs}", "u").test(f) ? g = new RegExp("\\p{Zs}", "gu") : f === "'" || f === "’" ? g = /['’]/g : g = new RegExp(vo(f), "g"));
  let y = [
    {
      regex: f ? g : null,
      replacement: ""
    },
    {
      regex: u ? new RegExp(vo(u), "g") : null,
      replacement: "."
    },
    // Fullwidth punctuation
    {
      regex: /．/g,
      replacement: "."
    },
    // FULLWIDTH_DECIMAL
    {
      regex: /，/g,
      replacement: ""
    },
    // FULLWIDTH_GROUP
    // Arabic punctuation
    {
      regex: /٫/g,
      replacement: "."
    },
    // ARABIC DECIMAL SEPARATOR (U+066B)
    {
      regex: /٬/g,
      replacement: ""
    },
    // ARABIC THOUSANDS SEPARATOR (U+066C)
    // Currency & unit labels
    {
      regex: c ? new RegExp(vo(c), "g") : null,
      replacement: ""
    },
    {
      regex: h,
      replacement: ""
    },
    // Numeral systems to ASCII digits
    {
      regex: dy,
      replacement: (S) => String(Rf.indexOf(S))
    },
    {
      regex: py,
      replacement: (S) => String(xf.indexOf(S))
    },
    {
      regex: my,
      replacement: (S) => String(gl.indexOf(S))
    },
    {
      regex: gy,
      replacement: (S) => ay[S]
    }
  ].reduce((S, {
    regex: I,
    replacement: M
  }) => I ? S.replace(I, M) : S, r);
  const b = y.lastIndexOf(".");
  if (b !== -1 && (y = `${y.slice(0, b).replace(/\./g, "")}.${y.slice(b + 1).replace(/\./g, "")}`), /^[-+]?Infinity$/i.test(r) || /[∞]/.test(r))
    return null;
  const E = (o ? "-" : "") + y;
  let v = parseFloat(E);
  const m = n?.style, C = m === "unit" && n?.unit === "percent", x = hy.test(t) || m === "percent";
  return by.test(t) ? v /= 1e3 : !C && x && (v /= 100), Number.isNaN(v) ? null : v;
}
const vy = 60, Cy = 400, Sy = 8, Xo = 1;
function yt(t, e = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(e, Math.min(t, n));
}
const Iy = 1e-10;
function Ty(t) {
  const e = Lr("en-US").resolvedOptions(), n = t?.minimumFractionDigits ?? e.minimumFractionDigits ?? 0;
  return {
    maximumFractionDigits: Math.max(t?.maximumFractionDigits ?? e.maximumFractionDigits ?? 20, n),
    minimumFractionDigits: n
  };
}
function wy(t, e) {
  if (!Number.isFinite(t))
    return t;
  const n = Math.min(Math.max(e, 0), 20);
  return Number(t.toFixed(n));
}
function Js(t, e) {
  const {
    maximumFractionDigits: n
  } = Ty(e);
  return wy(t, n);
}
function Py(t, e, n, r = "directional") {
  if (n === 0)
    return t;
  const o = Math.abs(n), s = Math.sign(n), l = o * Iy * s, i = r === "nearest" ? n : o, f = (t - e + l) / i;
  let u;
  return r === "nearest" ? u = Math.round(f) : s > 0 ? u = Math.floor(f) : u = Math.ceil(f), e + u * (r === "nearest" ? n : o);
}
function Ny(t, {
  step: e,
  minWithDefault: n,
  maxWithDefault: r,
  minWithZeroDefault: o,
  format: s,
  snapOnStep: l,
  small: i,
  clamp: f
}) {
  if (t === null)
    return t;
  const u = f ? yt(t, n, r) : t;
  if (e != null && l) {
    if (e === 0)
      return Js(u, s);
    let c = o;
    !i && n !== Number.MIN_SAFE_INTEGER && (c = n);
    const p = Py(u, c, e, i ? "nearest" : "directional");
    return Js(p, s);
  }
  return Js(u, s);
}
const _f = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    id: r,
    min: o,
    max: s,
    smallStep: l = 0.1,
    step: i = 1,
    largeStep: f = 10,
    required: u = !1,
    disabled: c = !1,
    readOnly: p = !1,
    form: h,
    name: g,
    defaultValue: d,
    value: y,
    onValueChange: b,
    onValueCommitted: E,
    allowWheelScrub: v = !1,
    snapOnStep: m = !1,
    allowOutOfRange: C = !1,
    format: x,
    locale: R,
    render: S,
    className: I,
    inputRef: M,
    style: A,
    ..._
  } = e, {
    setDirty: L,
    validityData: N,
    disabled: P,
    setFilled: w,
    invalid: O,
    name: V,
    state: k,
    validation: H,
    shouldValidateOnChange: U
  } = mt(), T = P || c, D = V ?? g, $ = i === "any" ? 1 : i, [J, Z] = a.useState(!1), q = o ?? Number.MIN_SAFE_INTEGER, B = s ?? Number.MAX_SAFE_INTEGER, Y = o ?? 0, Q = x?.style, re = a.useRef(null), ue = Tt(M, H.inputRef), z = Vn({
    id: r
  }), [se, fe] = Xt({
    controlled: y,
    default: d,
    name: "NumberField",
    state: "value"
  }), j = se ?? null, W = st(j);
  pe(() => {
    w(j !== null);
  }, [w, j]);
  const te = ub(), ne = st(x), ee = a.useRef(!1), ae = le((Se, Pe) => {
    ee.current = !1, E?.(Se, Pe);
  }), G = a.useRef(!0), oe = a.useRef(null), [F, K] = a.useState(() => y !== void 0 ? Gc(j, R, x) : un(j, R, x)), [ce, me] = a.useState("numeric"), Re = le(() => {
    const {
      decimal: Se,
      group: Pe,
      currency: Le,
      literal: Me
    } = hl(R, x), ye = /* @__PURE__ */ new Set();
    yy.forEach((Te) => ye.add(Te)), Se && ye.add(Se), Pe && (ye.add(Pe), Kc.test(Pe) && ye.add(" "));
    const Ie = Q === "percent" || Q === "unit" && x?.unit === "percent", xe = Q === "percent" || Q === "unit" && x?.unit === "permille";
    return Ie && vf.forEach((Te) => ye.add(Te)), xe && Cf.forEach((Te) => ye.add(Te)), Q === "currency" && Le && ye.add(Le), Me && (Array.from(Me).forEach((Te) => ye.add(Te)), Kc.test(Me) && ye.add(" ")), Ey.forEach((Te) => ye.add(Te)), q < 0 && Ry.forEach((Te) => ye.add(Te)), ye;
  }), Ce = le((Se) => Se?.altKey ? l : Se?.shiftKey ? f : $), we = le((Se, Pe) => {
    const Le = Pe.event, Me = Pe.direction, ye = Pe.reason, Ie = !C || !(ye === on || ye === Lo || ye === ri || ye === Dt || ye === ct), xe = Ny(Se, {
      step: Me ? Ce(Le) * Me : void 0,
      format: ne.current,
      minWithDefault: q,
      maxWithDefault: B,
      minWithZeroDefault: Y,
      snapOnStep: m,
      small: Le?.altKey ?? !1,
      clamp: Ie
    }), Te = Pe.reason === on || Pe.reason === Dt || Pe.reason === Lo || Pe.reason === ri || Pe.reason === ct, Ye = xe !== j || Te && (Se !== j || G.current === !1);
    if (Ye) {
      if (oe.current = xe, b?.(xe, Pe), Pe.isCanceled)
        return Ye;
      fe(xe), L(xe !== N.initialValue), ee.current = !0;
    }
    return G.current && K(un(xe, R, x)), te(), Ye;
  }), Ee = le((Se, {
    direction: Pe,
    currentValue: Le,
    event: Me,
    reason: ye
  }) => {
    const Ie = Le ?? W.current, xe = typeof Ie == "number" ? Ie + Se * Pe : Math.max(0, o ?? 0);
    return we(xe, ge(ye, Me, void 0, {
      direction: Pe
    }));
  });
  pe(function() {
    if (!G.current)
      return;
    const Pe = y !== void 0 ? Gc(j, R, x) : un(j, R, x);
    Pe !== F && K(Pe);
  }), pe(function() {
    if (!Mi)
      return;
    let Pe = "text";
    q >= 0 && (Pe = "decimal"), me(Pe);
  }, [q, Q]), a.useEffect(function() {
    const Pe = re.current;
    if (T || p || !v || !Pe)
      return;
    function Le(Me) {
      if (
        // Allow pinch-zooming.
        Me.ctrlKey || St(He(re.current)) !== re.current
      )
        return;
      Me.preventDefault();
      const ye = Ce(Me) ?? Xo;
      Ee(ye, {
        direction: Me.deltaY > 0 ? -1 : 1,
        event: Me,
        reason: "wheel"
      });
    }
    return $e(Pe, "wheel", Le);
  }, [v, Ee, T, p, f, $, Ce]);
  const he = a.useMemo(() => ({
    ...k,
    disabled: T,
    readOnly: p,
    required: u,
    value: j,
    inputValue: F,
    scrubbing: J
  }), [k, T, p, u, j, F, J]), be = a.useMemo(() => ({
    inputRef: re,
    inputValue: F,
    value: j,
    minWithDefault: q,
    maxWithDefault: B,
    disabled: T,
    readOnly: p,
    id: z,
    setValue: we,
    incrementValue: Ee,
    getStepAmount: Ce,
    allowInputSyncRef: G,
    formatOptionsRef: ne,
    valueRef: W,
    lastChangedValueRef: oe,
    hasPendingCommitRef: ee,
    name: D,
    required: u,
    invalid: O,
    inputMode: ce,
    getAllowedNonNumericKeys: Re,
    min: o,
    max: s,
    setInputValue: K,
    locale: R,
    isScrubbing: J,
    setIsScrubbing: Z,
    state: he,
    onValueCommitted: ae
  }), [re, F, j, q, B, T, p, z, we, Ee, Ce, ne, W, D, u, O, ce, Re, o, s, K, R, J, he, ae]), Ne = Be("div", e, {
    ref: n,
    state: he,
    props: _,
    stateAttributesMapping: zr
  });
  return /* @__PURE__ */ X.jsxs(ml.Provider, {
    value: be,
    children: [Ne, /* @__PURE__ */ X.jsx("input", {
      ...H.getInputValidationProps({
        onFocus() {
          re.current?.focus();
        },
        onChange(Se) {
          if (Se.nativeEvent.defaultPrevented)
            return;
          const Pe = Se.currentTarget.valueAsNumber, Le = Number.isNaN(Pe) ? null : Pe, Me = ge(ct, Se.nativeEvent);
          L(Le !== N.initialValue), we(Le, Me), U() && H.commit(Le);
        }
      }),
      ref: ue,
      type: "number",
      form: h,
      name: D,
      value: j ?? "",
      min: o,
      max: s,
      step: i,
      disabled: T,
      required: u,
      "aria-hidden": !0,
      tabIndex: -1,
      style: D ? Yn : yn,
      suppressHydrationWarning: !0
    })]
  });
});
process.env.NODE_ENV !== "production" && (_f.displayName = "NumberFieldRoot");
function Gc(t, e, n) {
  return n?.maximumFractionDigits != null || n?.minimumFractionDigits != null ? un(t, e, n) : Ef(t, e, n);
}
const Af = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, {
    state: i
  } = hs();
  return Be("div", e, {
    ref: n,
    state: i,
    props: [{
      role: "group"
    }, l],
    stateAttributesMapping: zr
  });
});
process.env.NODE_ENV !== "production" && (Af.displayName = "NumberFieldGroup");
const Yc = 0;
class bl extends $t {
  static create() {
    return new bl();
  }
  /**
   * Executes `fn` at `delay` interval, clearing any previously scheduled call.
   */
  start(e, n) {
    this.clear(), this.currentId = setInterval(() => {
      n();
    }, e);
  }
  clear = () => {
    this.currentId !== Yc && (clearInterval(this.currentId), this.currentId = Yc);
  };
}
function Oy() {
  const t = at(bl.create).current;
  return ss(t.disposeEffect), t;
}
const My = 60, _y = 400, Ay = 8, ky = 50, Vy = 3;
function Cr(t) {
  return t === "touch" || t === "pen";
}
function Dy(t) {
  const {
    disabled: e,
    readOnly: n = !1,
    tick: r,
    onStop: o,
    tickDelay: s = My,
    startDelay: l = _y,
    scrollDistance: i = Ay,
    elementRef: f
  } = t, u = dt(), c = Oy(), p = dt(), h = a.useRef(!1), g = a.useRef(0), d = a.useRef({
    x: 0,
    y: 0
  }), y = a.useRef(!1), b = a.useRef(!1), E = a.useRef(""), v = a.useRef(() => {
  }), m = le(() => {
    p.clear(), u.clear(), c.clear(), v.current(), g.current = 0;
  }), C = le((S) => {
    m();
    const I = f.current;
    if (!I)
      return;
    const M = it(I);
    function A(_) {
      _.preventDefault();
    }
    if (v.current = $e(M, "contextmenu", A), $e(M, "pointerup", (_) => {
      h.current = !1, m(), o?.(_);
    }, {
      once: !0
    }), !r(S)) {
      m();
      return;
    }
    u.start(l, () => {
      c.start(s, () => {
        r(S) || m();
      });
    });
  });
  a.useEffect(() => () => m(), [m]);
  const x = {
    onTouchStart() {
      y.current = !0;
    },
    onTouchEnd() {
      y.current = !1;
    },
    onPointerDown(S) {
      const I = !S.button || S.button === 0;
      if (S.defaultPrevented || !I || e || n)
        return;
      E.current = S.pointerType, b.current = !1, h.current = !0, d.current = {
        x: S.clientX,
        y: S.clientY
      }, Cr(S.pointerType) ? p.start(ky, () => {
        const A = g.current;
        g.current = 0, h.current && A < Vy ? (C(S.nativeEvent), b.current = !0) : (b.current = !1, m());
      }) : (S.preventDefault(), C(S.nativeEvent));
    },
    onPointerUp(S) {
      Cr(S.pointerType) && (h.current = !1);
    },
    onPointerMove(S) {
      if (e || n || !Cr(S.pointerType) || !h.current)
        return;
      g.current != null && (g.current += 1);
      const {
        x: I,
        y: M
      } = d.current, A = I - S.clientX, _ = M - S.clientY;
      A ** 2 + _ ** 2 > i ** 2 && m();
    },
    onMouseEnter(S) {
      S.defaultPrevented || e || n || !h.current || y.current || Cr(E.current) || C(S.nativeEvent);
    },
    onMouseLeave() {
      y.current || m();
    },
    onMouseUp() {
      y.current || m();
    }
  }, R = le((S) => S.defaultPrevented ? !0 : Cr(E.current) ? b.current : S.detail !== 0);
  return {
    pointerHandlers: x,
    shouldSkipClick: R
  };
}
function Fy(t) {
  return t === "touch" || t === "pen";
}
function kf(t) {
  const {
    allowInputSyncRef: e,
    disabled: n,
    formatOptionsRef: r,
    getStepAmount: o,
    id: s,
    incrementValue: l,
    inputRef: i,
    inputValue: f,
    isIncrement: u,
    locale: c,
    readOnly: p,
    setValue: h,
    valueRef: g,
    lastChangedValueRef: d,
    onValueCommitted: y
  } = t, b = u ? Tm : wm;
  function E(x) {
    e.current = !0;
    const R = Tr(f, c, r.current);
    R !== null && (g.current = R, h(R, ge(b, x, void 0, {
      direction: u ? 1 : -1
    })));
  }
  const {
    pointerHandlers: v,
    shouldSkipClick: m
  } = Dy({
    disabled: n || p,
    elementRef: i,
    tickDelay: vy,
    startDelay: Cy,
    scrollDistance: Sy,
    tick(x) {
      const R = o(x) ?? Xo;
      return l(R, {
        direction: u ? 1 : -1,
        event: x,
        reason: b
      });
    },
    onStop(x) {
      const R = d.current ?? g.current;
      y(R, Ht(b, x));
    }
  });
  return {
    disabled: n,
    "aria-readonly": p || void 0,
    "aria-label": u ? "Increase" : "Decrease",
    "aria-controls": s,
    // Keyboard users shouldn't have access to the buttons, since they can use the input element
    // to change the value. On the other hand, `aria-hidden` is not applied because touch screen
    // readers should be able to use the buttons.
    tabIndex: -1,
    style: {
      WebkitUserSelect: "none",
      userSelect: "none"
    },
    ...v,
    onClick(x) {
      const R = n || p;
      if (x.defaultPrevented || R || m(x))
        return;
      E(x.nativeEvent);
      const S = o(x) ?? Xo, I = g.current;
      l(S, {
        direction: u ? 1 : -1,
        event: x.nativeEvent,
        reason: b
      });
      const M = d.current ?? g.current;
      M !== I && y(M, Ht(b, x.nativeEvent));
    },
    onPointerDown(x) {
      const R = !x.button || x.button === 0;
      x.defaultPrevented || p || !R || n || (E(x.nativeEvent), Fy(x.pointerType) || i.current?.focus(), v.onPointerDown(x));
    }
  };
}
const Vf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    disabled: s = !1,
    nativeButton: l = !0,
    style: i,
    ...f
  } = e, {
    allowInputSyncRef: u,
    disabled: c,
    formatOptionsRef: p,
    getStepAmount: h,
    id: g,
    incrementValue: d,
    inputRef: y,
    inputValue: b,
    locale: E,
    maxWithDefault: v,
    readOnly: m,
    setValue: C,
    state: x,
    value: R,
    valueRef: S,
    lastChangedValueRef: I,
    onValueCommitted: M
  } = hs(), A = R != null && R >= v, _ = s || c || A, L = kf({
    isIncrement: !0,
    inputRef: y,
    inputValue: b,
    disabled: _,
    readOnly: m,
    id: g,
    setValue: C,
    getStepAmount: h,
    incrementValue: d,
    allowInputSyncRef: u,
    formatOptionsRef: p,
    valueRef: S,
    locale: E,
    lastChangedValueRef: I,
    onValueCommitted: M
  }), {
    getButtonProps: N,
    buttonRef: P
  } = Lt({
    disabled: _,
    native: l,
    focusableWhenDisabled: !0
  }), w = a.useMemo(() => ({
    ...x,
    disabled: _
  }), [x, _]);
  return Be("button", e, {
    ref: [n, P],
    state: w,
    props: [L, f, N],
    stateAttributesMapping: zr
  });
});
process.env.NODE_ENV !== "production" && (Vf.displayName = "NumberFieldIncrement");
const Df = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    disabled: s = !1,
    nativeButton: l = !0,
    style: i,
    ...f
  } = e, {
    allowInputSyncRef: u,
    disabled: c,
    formatOptionsRef: p,
    getStepAmount: h,
    id: g,
    incrementValue: d,
    inputRef: y,
    inputValue: b,
    minWithDefault: E,
    readOnly: v,
    setValue: m,
    state: C,
    value: x,
    valueRef: R,
    locale: S,
    lastChangedValueRef: I,
    onValueCommitted: M
  } = hs(), A = x != null && x <= E, _ = s || c || A, L = kf({
    isIncrement: !1,
    inputRef: y,
    inputValue: b,
    disabled: _,
    readOnly: v,
    id: g,
    setValue: m,
    getStepAmount: h,
    incrementValue: d,
    allowInputSyncRef: u,
    formatOptionsRef: p,
    valueRef: R,
    locale: S,
    lastChangedValueRef: I,
    onValueCommitted: M
  }), {
    getButtonProps: N,
    buttonRef: P
  } = Lt({
    disabled: _,
    native: l,
    focusableWhenDisabled: !0
  }), w = a.useMemo(() => ({
    ...C,
    disabled: _
  }), [C, _]);
  return Be("button", e, {
    ref: [n, P],
    state: w,
    props: [L, f, N],
    stateAttributesMapping: zr
  });
});
process.env.NODE_ENV !== "production" && (Df.displayName = "NumberFieldDecrement");
const Ly = {
  ...wt,
  ...zr
}, By = /* @__PURE__ */ new Set(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter", "Escape"]), Ff = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, {
    allowInputSyncRef: i,
    disabled: f,
    formatOptionsRef: u,
    getAllowedNonNumericKeys: c,
    getStepAmount: p,
    id: h,
    incrementValue: g,
    inputMode: d,
    inputValue: y,
    max: b,
    min: E,
    name: v,
    readOnly: m,
    required: C,
    setValue: x,
    state: R,
    setInputValue: S,
    locale: I,
    inputRef: M,
    value: A,
    onValueCommitted: _,
    lastChangedValueRef: L,
    hasPendingCommitRef: N,
    valueRef: P
  } = hs(), {
    clearErrors: w
  } = Qt(), {
    validationMode: O,
    setTouched: V,
    setFocused: k,
    invalid: H,
    shouldValidateOnChange: U,
    validation: T
  } = mt(), {
    labelId: D
  } = Pt(), $ = a.useRef(!1), J = a.useRef(!1);
  return _n(M, {
    id: h,
    value: A
  }), qt(A, (B) => {
    const Y = U();
    if (w(v), Y && T.commit(A), !(B === A || Y)) {
      if (J.current) {
        J.current = !1;
        return;
      }
      T.commit(A, !0);
    }
  }), Be("input", e, {
    ref: [n, M],
    state: R,
    props: [{
      id: h,
      required: C,
      disabled: f,
      readOnly: m,
      inputMode: d,
      value: y,
      type: "text",
      autoComplete: "off",
      autoCorrect: "off",
      spellCheck: "false",
      "aria-roledescription": "Number field",
      "aria-invalid": H || void 0,
      "aria-labelledby": D,
      // If the server's locale does not match the client's locale, the formatting may not match,
      // causing a hydration mismatch.
      suppressHydrationWarning: !0,
      onFocus(B) {
        if (B.defaultPrevented || m || f || (k(!0), $.current))
          return;
        $.current = !0;
        const Y = B.currentTarget, Q = Y.value.length;
        Y.setSelectionRange(Q, Q);
      },
      onBlur(B) {
        if (B.defaultPrevented || m || f)
          return;
        V(!0), k(!1);
        const Y = !i.current, Q = N.current;
        if (i.current = !0, y.trim() === "") {
          x(null, ge(Dt, B.nativeEvent)), O === "onBlur" && T.commit(null), _(null, Ht(Dt, B.nativeEvent));
          return;
        }
        const re = u.current, ue = Tr(y, I, re);
        if (ue === null)
          return;
        const z = re?.maximumFractionDigits != null || re?.minimumFractionDigits != null, se = re?.maximumFractionDigits, fe = z && typeof se == "number" ? Number(ue.toFixed(se)) : ue, j = Ht(Lo, B.nativeEvent), W = A !== fe, te = Y || W || Q;
        O === "onBlur" && T.commit(fe), W && (J.current = !0, x(fe, ge(Lo, B.nativeEvent))), te && _(fe, j);
        const ne = un(fe, I, re);
        !(!z && ue === A && y === Ef(ue, I, re)) && y !== ne && S(ne);
      },
      onChange(B) {
        if (B.nativeEvent.defaultPrevented)
          return;
        i.current = !1;
        const Y = B.currentTarget.value;
        if (Y.trim() === "") {
          S(Y), x(null, ge(Dt, B.nativeEvent));
          return;
        }
        const Q = c();
        if (!Array.from(Y).every((z) => {
          const se = z >= "0" && z <= "9", fe = pi.test(z), j = mi.test(z), W = Tf.test(z), te = Wc.test(z), ne = vr.test(z);
          return se || fe || j || W || te || ne || Q.has(z);
        }))
          return;
        const ue = Tr(Y, I, u.current);
        S(Y), ue !== null && x(ue, ge(on, B.nativeEvent));
      },
      onKeyDown(B) {
        if (B.defaultPrevented || m || f)
          return;
        const Y = B.nativeEvent;
        i.current = !0;
        const Q = c();
        let re = Q.has(B.key);
        const {
          decimal: ue,
          currency: z,
          percentSign: se
        } = hl(I, u.current), fe = B.currentTarget.selectionStart, j = B.currentTarget.selectionEnd, W = fe === 0 && j === y.length, te = (me) => fe != null && j != null && me >= fe && me < j;
        if (vr.test(B.key) && Array.from(Q).some((me) => vr.test(me || ""))) {
          const me = y.search(Of), Re = me != null && me !== -1 && te(me);
          re = !(vr.test(y) || Co.test(y)) || W || Re;
        }
        if (Co.test(B.key) && Array.from(Q).some((me) => Co.test(me || ""))) {
          const me = y.search(Mf), Re = me != null && me !== -1 && te(me);
          re = !(vr.test(y) || Co.test(y)) || W || Re;
        }
        [ue, z, se].forEach((me) => {
          if (B.key === me) {
            const Re = y.indexOf(me), Ce = te(Re);
            re = !y.includes(me) || W || Ce;
          }
        });
        const ne = B.key >= "0" && B.key <= "9", ee = pi.test(B.key), ae = mi.test(B.key), G = Wc.test(B.key), oe = By.has(B.key);
        if (
          // Allow composition events (e.g., pinyin)
          // event.nativeEvent.isComposing does not work in Safari:
          // https://bugs.webkit.org/show_bug.cgi?id=165004
          B.which === 229 || B.altKey || B.ctrlKey || B.metaKey || re || ne || ee || G || ae || oe
        )
          return;
        const F = Tr(y, I, u.current), K = p(B) ?? Xo;
        ft(B);
        const ce = Ht(or, Y);
        B.key === "ArrowUp" ? (g(K, {
          direction: 1,
          currentValue: F,
          event: Y,
          reason: or
        }), _(L.current ?? P.current, ce)) : B.key === "ArrowDown" ? (g(K, {
          direction: -1,
          currentValue: F,
          event: Y,
          reason: or
        }), _(L.current ?? P.current, ce)) : B.key === "Home" && E != null ? (x(E, ge(or, Y)), _(L.current ?? P.current, ce)) : B.key === "End" && b != null && (x(b, ge(or, Y)), _(L.current ?? P.current, ce));
      },
      onPaste(B) {
        if (B.defaultPrevented || m || f)
          return;
        B.preventDefault();
        const Q = (B.clipboardData || window.Clipboard).getData("text/plain"), re = Tr(Q, I, u.current);
        re !== null && (i.current = !1, x(re, ge(ri, B.nativeEvent)), S(Q));
      }
    }, T.getValidationProps(), l],
    stateAttributesMapping: Ly
  });
});
process.env.NODE_ENV !== "production" && (Ff.displayName = "NumberFieldInput");
const Hy = "_Field_7d343_3", jy = "_Label_7d343_14", $y = "_Group_7d343_22", Uy = "_Input_7d343_27", Wy = "_Decrement_7d343_58", Ky = "_Increment_7d343_59", nr = {
  Field: Hy,
  Label: jy,
  Group: $y,
  Input: Uy,
  Decrement: Wy,
  Increment: Ky
};
function CR(t) {
  const e = Zt.c(67);
  let n, r, o;
  e[0] !== t ? ({
    label: n,
    innerProps: o,
    ...r
  } = t, e[0] = t, e[1] = n, e[2] = r, e[3] = o) : (n = e[1], r = e[2], o = e[3]);
  let s;
  e[4] !== o ? (s = o === void 0 ? {} : o, e[4] = o, e[5] = s) : s = e[5];
  const l = s;
  let i;
  e[6] !== l.label ? (i = l.label || {}, e[6] = l.label, e[7] = i) : i = e[7];
  let f, u;
  e[8] !== i ? ({
    className: f,
    ...u
  } = i, e[8] = i, e[9] = f, e[10] = u) : (f = e[9], u = e[10]);
  let c;
  e[11] !== l.group ? (c = l.group || {}, e[11] = l.group, e[12] = c) : c = e[12];
  let p, h;
  e[13] !== c ? ({
    className: p,
    ...h
  } = c, e[13] = c, e[14] = p, e[15] = h) : (p = e[14], h = e[15]);
  let g;
  e[16] !== l.decrement ? (g = l.decrement || {}, e[16] = l.decrement, e[17] = g) : g = e[17];
  let d, y;
  e[18] !== g ? ({
    className: d,
    ...y
  } = g, e[18] = g, e[19] = d, e[20] = y) : (d = e[19], y = e[20]);
  let b;
  e[21] !== l.input ? (b = l.input || {}, e[21] = l.input, e[22] = b) : b = e[22];
  let E, v;
  e[23] !== b ? ({
    className: E,
    ...v
  } = b, e[23] = b, e[24] = E, e[25] = v) : (E = e[24], v = e[25]);
  let m;
  e[26] !== l.increment ? (m = l.increment || {}, e[26] = l.increment, e[27] = m) : m = e[27];
  let C, x;
  e[28] !== m ? ({
    className: C,
    ...x
  } = m, e[28] = m, e[29] = C, e[30] = x) : (C = e[29], x = e[30]);
  let R;
  e[31] !== f ? (R = Fe(nr.Label, f), e[31] = f, e[32] = R) : R = e[32];
  let S;
  e[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (S = Fe(nr.Field), e[33] = S) : S = e[33];
  let I;
  e[34] !== p ? (I = Fe(nr.Group, p), e[34] = p, e[35] = I) : I = e[35];
  let M;
  e[36] !== d ? (M = Fe(nr.Decrement, d), e[36] = d, e[37] = M) : M = e[37];
  let A;
  e[38] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = /* @__PURE__ */ X.jsx(Gm, { width: 16, height: 16 }), e[38] = A) : A = e[38];
  let _;
  e[39] !== y || e[40] !== M ? (_ = /* @__PURE__ */ X.jsx(Df, { className: M, ...y, children: A }), e[39] = y, e[40] = M, e[41] = _) : _ = e[41];
  let L;
  e[42] !== E ? (L = Fe(nr.Input, E), e[42] = E, e[43] = L) : L = e[43];
  let N;
  e[44] !== v || e[45] !== L ? (N = /* @__PURE__ */ X.jsx(Ff, { className: L, ...v }), e[44] = v, e[45] = L, e[46] = N) : N = e[46];
  let P;
  e[47] !== C ? (P = Fe(nr.Increment, C), e[47] = C, e[48] = P) : P = e[48];
  let w;
  e[49] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (w = /* @__PURE__ */ X.jsx(zm, { width: 16, height: 16 }), e[49] = w) : w = e[49];
  let O;
  e[50] !== x || e[51] !== P ? (O = /* @__PURE__ */ X.jsx(Vf, { className: P, ...x, children: w }), e[50] = x, e[51] = P, e[52] = O) : O = e[52];
  let V;
  e[53] !== h || e[54] !== I || e[55] !== _ || e[56] !== N || e[57] !== O ? (V = /* @__PURE__ */ X.jsxs(Af, { className: I, ...h, children: [
    _,
    N,
    O
  ] }), e[53] = h, e[54] = I, e[55] = _, e[56] = N, e[57] = O, e[58] = V) : V = e[58];
  let k;
  e[59] !== r || e[60] !== V ? (k = /* @__PURE__ */ X.jsx(_f, { className: S, ...r, children: V }), e[59] = r, e[60] = V, e[61] = k) : k = e[61];
  let H;
  return e[62] !== n || e[63] !== u || e[64] !== k || e[65] !== R ? (H = /* @__PURE__ */ X.jsxs("label", { className: R, ...u, children: [
    n,
    k
  ] }), e[62] = n, e[63] = u, e[64] = k, e[65] = R, e[66] = H) : H = e[66], H;
}
let zc = /* @__PURE__ */ (function(t) {
  return t.checked = "data-checked", t.unchecked = "data-unchecked", t.disabled = "data-disabled", t.readonly = "data-readonly", t.required = "data-required", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.filled = "data-filled", t.focused = "data-focused", t;
})({});
const gi = {
  checked(t) {
    return t ? {
      [zc.checked]: ""
    } : {
      [zc.unchecked]: ""
    };
  },
  ...An,
  ...wt
}, Lf = "data-composite-item-active", yl = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (yl.displayName = "RadioGroupContext");
function Gy() {
  return a.useContext(yl);
}
function Jo(t) {
  if (t == null)
    return "";
  if (typeof t == "string")
    return t;
  try {
    return JSON.stringify(t);
  } catch {
    return String(t);
  }
}
const El = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (El.displayName = "RadioRootContext");
function Yy() {
  const t = a.useContext(El);
  if (t === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: RadioRootContext is missing. Radio parts must be placed within <Radio.Root>." : ot(52));
  return t;
}
const Bf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    disabled: s = !1,
    readOnly: l = !1,
    required: i = !1,
    "aria-labelledby": f,
    value: u,
    inputRef: c,
    nativeButton: p = !1,
    id: h,
    style: g,
    ...d
  } = e, y = Gy(), {
    disabled: b,
    readOnly: E,
    required: v,
    form: m,
    checkedValue: C,
    touched: x = !1,
    validation: R,
    name: S
  } = y ?? {}, I = y?.setCheckedValue ?? Ze, M = y?.setTouched ?? Ze, A = y?.registerControlRef ?? Ze, _ = y?.registerInputRef ?? Ze, {
    setDirty: L,
    validityData: N,
    setTouched: P,
    setFilled: w,
    state: O,
    disabled: V
  } = mt(), k = Ea(), {
    labelId: H,
    getDescriptionProps: U
  } = Pt(), T = V || k.disabled || b || s, D = E || l, $ = v || i, J = m, Z = y ? C === u : u === "", q = a.useMemo(() => Jo(u), [u]), B = a.useRef(null), Y = a.useRef(null), Q = le((ce) => {
    ce && A(ce, T);
  }), re = Tt(c, Y, _);
  pe(() => {
    Y.current?.checked && w(!0);
  }, [w]), pe(() => {
    if (Y.current) {
      if (T && Z) {
        _(null);
        return;
      }
      B.current && A(B.current, T), _(Y.current);
    }
  }, [Z, T, A, _]);
  const ue = Et(), z = Vn({
    id: h,
    implicit: !1,
    controlRef: B
  }), se = p ? void 0 : z, fe = Ti(f, H, Y, !p, se), j = {
    role: "radio",
    "aria-checked": Z,
    "aria-required": $ || void 0,
    "aria-readonly": D || void 0,
    "aria-labelledby": fe,
    [Lf]: Z ? "" : void 0,
    id: p ? z : ue,
    onKeyDown(ce) {
      ce.key === "Enter" && ce.preventDefault();
    },
    onClick(ce) {
      ce.defaultPrevented || T || D || (ce.preventDefault(), Y.current?.dispatchEvent(new PointerEvent("click", {
        bubbles: !0,
        shiftKey: ce.shiftKey,
        ctrlKey: ce.ctrlKey,
        altKey: ce.altKey,
        metaKey: ce.metaKey
      })));
    },
    onFocus(ce) {
      ce.defaultPrevented || T || D || !x || (Y.current?.click(), M(!1));
    }
  }, {
    getButtonProps: W,
    buttonRef: te
  } = Lt({
    disabled: T,
    native: p
  }), ne = {
    type: "radio",
    ref: re,
    form: J,
    id: se,
    name: S,
    tabIndex: -1,
    style: S ? Yn : yn,
    "aria-hidden": !0,
    ...u !== void 0 ? {
      value: q
    } : et,
    disabled: T,
    checked: Z,
    required: $,
    readOnly: D,
    onChange(ce) {
      if (ce.nativeEvent.defaultPrevented || T || D || u === void 0)
        return;
      const me = ge(ct, ce.nativeEvent);
      me.isCanceled || (P(!0), L(u !== N.initialValue), w(!0), I(u, me));
    },
    onFocus() {
      B.current?.focus();
    }
  }, ee = a.useMemo(() => ({
    ...O,
    required: $,
    disabled: T,
    readOnly: D,
    checked: Z
  }), [O, T, D, Z, $]), ae = ee, G = y !== void 0, oe = [n, B, te, Q], F = [j, U, R?.getValidationProps ?? et, d, W], K = Be("span", e, {
    enabled: !G,
    state: ee,
    ref: oe,
    props: F,
    stateAttributesMapping: gi
  });
  return /* @__PURE__ */ X.jsxs(El.Provider, {
    value: ae,
    children: [G ? /* @__PURE__ */ X.jsx(hf, {
      tag: "span",
      render: r,
      className: o,
      style: g,
      state: ee,
      refs: oe,
      props: F,
      stateAttributesMapping: gi
    }) : K, /* @__PURE__ */ X.jsx("input", {
      ...ne,
      suppressHydrationWarning: !0
    })]
  });
});
process.env.NODE_ENV !== "production" && (Bf.displayName = "RadioRoot");
const Hf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    keepMounted: l = !1,
    ...i
  } = e, f = Yy(), u = f.checked, {
    mounted: c,
    transitionStatus: p,
    setMounted: h
  } = kn(u), g = {
    ...f,
    transitionStatus: p
  }, d = a.useRef(null), y = l || c, b = Be("span", e, {
    ref: [n, d],
    state: g,
    props: i,
    stateAttributesMapping: gi
  });
  return en({
    open: u,
    ref: d,
    onComplete() {
      u || h(!1);
    }
  }), y ? b : null;
});
process.env.NODE_ENV !== "production" && (Hf.displayName = "RadioIndicator");
const zy = [];
function qy(t) {
  const {
    itemSizes: e,
    cols: n = 1,
    loopFocus: r = !0,
    onLoop: o,
    dense: s = !1,
    orientation: l = "both",
    direction: i,
    highlightedIndex: f,
    onHighlightedIndexChange: u,
    rootRef: c,
    enableHomeAndEndKeys: p = !1,
    stopEventPropagation: h = !1,
    disabledIndices: g,
    modifierKeys: d = zy
  } = t, [y, b] = a.useState(0), E = n > 1, v = a.useRef(null), m = Tt(v, c), C = a.useRef([]), x = a.useRef(!1), R = f ?? y, S = le((_, L = !1) => {
    if ((u ?? b)(_), L) {
      const N = C.current[_];
      Dc(v.current, N, i, l);
    }
  }), I = le((_) => {
    if (_.size === 0 || x.current)
      return;
    x.current = !0;
    const L = Array.from(_.keys()), N = L.find((w) => w?.hasAttribute(Lf)) ?? null, P = N ? L.indexOf(N) : -1;
    P !== -1 && S(P), Dc(v.current, N, i, l);
  }), M = le((_, L, N) => o ? o?.(_, L, N, C) : N), A = a.useMemo(() => ({
    "aria-orientation": l === "both" ? void 0 : l,
    ref: m,
    onFocus(_) {
      const L = v.current, N = pt(_.nativeEvent);
      !L || N == null || !Vc(N) || N.setSelectionRange(0, N.value.length ?? 0);
    },
    onKeyDown(_) {
      const L = p ? Ib : ef;
      if (!L.has(_.key) || Xy(_, d) || !v.current)
        return;
      const P = i === "rtl", w = P ? Kn : Pn, O = {
        horizontal: w,
        vertical: hn,
        both: w
      }[l], V = P ? Pn : Kn, k = {
        horizontal: V,
        vertical: wn,
        both: V
      }[l], H = pt(_.nativeEvent);
      if (H != null && Vc(H) && !ry(H)) {
        const q = H.selectionStart, B = H.selectionEnd, Y = H.value ?? "";
        if (q == null || _.shiftKey || q !== B || _.key !== k && q < Y.length || _.key !== O && q > 0)
          return;
      }
      let U = R;
      const T = Mo(C, g), D = ci(C, g);
      if (E) {
        const q = e || Array.from({
          length: C.current.length
        }, () => ({
          width: 1,
          height: 1
        })), B = Ga(q, n, s), Y = B.findIndex((re) => re != null && !bn(C.current, re, g)), Q = B.reduce((re, ue, z) => ue != null && !bn(C.current, ue, g) ? z : re, -1);
        U = B[Ka(B.map((re) => re != null ? C.current[re] : null), {
          event: _,
          orientation: l,
          loopFocus: r,
          onLoop: M,
          cols: n,
          // treat undefined (empty grid spaces) as disabled indices so we
          // don't end up in them
          disabledIndices: za([...g || C.current.map((re, ue) => bn(C.current, ue) ? ue : void 0), void 0], B),
          minIndex: Y,
          maxIndex: Q,
          prevIndex: Ya(
            R > D ? T : R,
            q,
            B,
            n,
            // use a corner matching the edge closest to the direction we're
            // moving in so we don't end up in the same item. Prefer
            // top/left over bottom/right.
            // eslint-disable-next-line no-nested-ternary
            _.key === hn ? "bl" : _.key === Pn ? "tr" : "tl"
          ),
          rtl: P
        })];
      }
      const $ = {
        horizontal: [w],
        vertical: [hn],
        both: [w, hn]
      }[l], J = {
        horizontal: [V],
        vertical: [wn],
        both: [V, wn]
      }[l], Z = E ? L : {
        horizontal: p ? Cb : Zu,
        vertical: p ? Sb : Qu,
        both: L
      }[l];
      p && (_.key === Jn ? U = T : _.key === Zn && (U = D)), U === R && ($.includes(_.key) || J.includes(_.key)) && (r && U === D && $.includes(_.key) ? (U = T, o && (U = o(_, R, U, C))) : r && U === T && J.includes(_.key) ? (U = D, o && (U = o(_, R, U, C))) : U = xt(C.current, {
        startingIndex: U,
        decrement: J.includes(_.key),
        disabledIndices: g
      })), U !== R && !Dr(C.current, U) && (h && _.stopPropagation(), Z.has(_.key) && _.preventDefault(), S(U, !0), queueMicrotask(() => {
        C.current[U]?.focus();
      }));
    }
  }), [n, s, i, g, C, p, R, E, e, r, o, M, m, d, S, l, h]);
  return a.useMemo(() => ({
    props: A,
    highlightedIndex: R,
    onHighlightedIndexChange: S,
    elementsRef: C,
    disabledIndices: g,
    onMapChange: I,
    relayKeyboardEvent: A.onKeyDown
  }), [A, R, S, C, g, I]);
}
function Xy(t, e) {
  for (const n of Nb.values())
    if (!e.includes(n) && t.getModifierState(n))
      return !0;
  return !1;
}
function Jy(t) {
  const {
    render: e,
    className: n,
    style: r,
    refs: o = zt,
    props: s = zt,
    state: l = et,
    stateAttributesMapping: i,
    highlightedIndex: f,
    onHighlightedIndexChange: u,
    orientation: c,
    dense: p,
    itemSizes: h,
    loopFocus: g,
    onLoop: d,
    cols: y,
    enableHomeAndEndKeys: b,
    onMapChange: E,
    stopEventPropagation: v = !0,
    rootRef: m,
    disabledIndices: C,
    modifierKeys: x,
    highlightItemOnHover: R = !1,
    tag: S = "div",
    ...I
  } = t, M = Qn(), {
    props: A,
    highlightedIndex: _,
    onHighlightedIndexChange: L,
    elementsRef: N,
    onMapChange: P,
    relayKeyboardEvent: w
  } = qy({
    itemSizes: h,
    cols: y,
    loopFocus: g,
    onLoop: d,
    dense: p,
    orientation: c,
    highlightedIndex: f,
    onHighlightedIndexChange: u,
    rootRef: m,
    stopEventPropagation: v,
    enableHomeAndEndKeys: b,
    direction: M,
    disabledIndices: C,
    modifierKeys: x
  }), O = Be(S, t, {
    state: l,
    ref: o,
    props: [A, ...s, I],
    stateAttributesMapping: i
  }), V = a.useMemo(() => ({
    highlightedIndex: _,
    onHighlightedIndexChange: L,
    highlightItemOnHover: R,
    relayKeyboardEvent: w
  }), [_, L, R, w]);
  return /* @__PURE__ */ X.jsx(xi.Provider, {
    value: V,
    children: /* @__PURE__ */ X.jsx(Yr, {
      elementsRef: N,
      onMapChange: (k) => {
        E?.(k), P(k);
      },
      children: O
    })
  });
}
const Zy = [tf], jf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    disabled: s,
    readOnly: l,
    required: i,
    onValueChange: f,
    value: u,
    defaultValue: c,
    form: p,
    name: h,
    inputRef: g,
    id: d,
    style: y,
    ...b
  } = e, {
    setTouched: E,
    setFocused: v,
    shouldValidateOnChange: m,
    validationMode: C,
    name: x,
    disabled: R,
    state: S,
    validation: I,
    setDirty: M,
    setFilled: A,
    validityData: _
  } = mt(), {
    labelId: L
  } = Pt(), {
    clearErrors: N
  } = Qt(), P = Oa(!0), w = R || s, O = x ?? h, V = Et(d), [k, H] = Xt({
    controlled: u,
    default: c,
    name: "RadioGroup",
    state: "value"
  }), U = le(f), T = le((j, W) => {
    U(j, W), !W.isCanceled && H(j);
  }), D = a.useRef(null), $ = a.useRef(null), J = a.useRef(null);
  function Z(j) {
    let W;
    return g && (typeof g == "function" ? W = g(j) : g.current = j), $.current = j, I.inputRef.current = j, W;
  }
  const q = le((j, W = !1) => {
    if (j) {
      if (W) {
        D.current === j && (D.current = null);
        return;
      }
      D.current == null && (D.current = j);
    }
  }), B = le((j) => {
    if (!j || j.disabled)
      return;
    J.current || (J.current = j);
    const W = $.current;
    if (j.checked || W == null || W.disabled)
      return Z(j);
  }), Y = le(() => k ?? null);
  _n(D, {
    id: V,
    value: k,
    getValue: Y
  }), qt(k, () => {
    N(O), M(k !== _.initialValue), A(k != null), m() ? I.commit(k) : I.commit(k, !0);
    const j = J.current;
    k == null && j && !j.disabled && Z(j);
  });
  const [Q, re] = a.useState(!1), ue = b["aria-labelledby"] ?? L ?? P?.legendId, z = {
    ...S,
    disabled: w ?? !1,
    required: i ?? !1,
    readOnly: l ?? !1
  }, se = a.useMemo(() => ({
    ...S,
    checkedValue: k,
    disabled: w,
    form: p,
    validation: I,
    name: O,
    onValueChange: U,
    readOnly: l,
    registerControlRef: q,
    registerInputRef: B,
    required: i,
    setCheckedValue: T,
    setTouched: re,
    touched: Q
  }), [k, w, p, I, S, O, U, l, q, B, i, T, re, Q]), fe = {
    role: "radiogroup",
    "aria-required": i || void 0,
    "aria-disabled": w || void 0,
    "aria-readonly": l || void 0,
    "aria-labelledby": ue,
    onFocus() {
      v(!0);
    },
    onBlur(j) {
      Oe(j.currentTarget, j.relatedTarget) || (E(!0), v(!1), C === "onBlur" && I.commit(k));
    },
    onKeyDownCapture(j) {
      j.key.startsWith("Arrow") && (E(!0), re(!0), v(!0));
    }
  };
  return /* @__PURE__ */ X.jsx(yl.Provider, {
    value: se,
    children: /* @__PURE__ */ X.jsx(Jy, {
      render: r,
      className: o,
      style: y,
      state: z,
      props: [fe, I.getValidationProps, b],
      refs: [n],
      stateAttributesMapping: wt,
      enableHomeAndEndKeys: !1,
      modifierKeys: Zy
    })
  });
});
process.env.NODE_ENV !== "production" && (jf.displayName = "RadioGroup");
const Qy = "_RadioGroup_1f4dt_3", eE = "_Item_1f4dt_16", tE = "_Radio_1f4dt_3", nE = "_Indicator_1f4dt_52", So = {
  RadioGroup: Qy,
  Item: eE,
  Radio: tE,
  Indicator: nE
};
function SR(t) {
  const e = Zt.c(48);
  let n, r, o, s, l, i, f, u, c, p;
  if (e[0] !== t) {
    const {
      itemList: d,
      innerProps: y,
      ...b
    } = t;
    r = d;
    let E;
    e[11] !== y ? (E = y === void 0 ? {} : y, e[11] = y, e[12] = E) : E = e[12];
    const v = E, {
      className: m,
      ...C
    } = b || {};
    c = C;
    let x;
    e[13] !== v.listRoot ? (x = v.listRoot || {}, e[13] = v.listRoot, e[14] = x) : x = e[14], e[15] !== x ? ({
      className: f,
      ...u
    } = x, e[15] = x, e[16] = f, e[17] = u) : (f = e[16], u = e[17]);
    let R;
    e[18] !== v.listLabel ? (R = v.listLabel || {}, e[18] = v.listLabel, e[19] = R) : R = e[19], e[20] !== R ? ({
      className: l,
      ...i
    } = R, e[20] = R, e[21] = l, e[22] = i) : (l = e[21], i = e[22]);
    let S;
    e[23] !== v.listIndicator ? (S = v.listIndicator || {}, e[23] = v.listIndicator, e[24] = S) : S = e[24], e[25] !== S ? ({
      className: o,
      ...s
    } = S, e[25] = S, e[26] = o, e[27] = s) : (o = e[26], s = e[27]), n = jf, p = Fe(So.RadioGroup, m), e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = s, e[5] = l, e[6] = i, e[7] = f, e[8] = u, e[9] = c, e[10] = p;
  } else
    n = e[1], r = e[2], o = e[3], s = e[4], l = e[5], i = e[6], f = e[7], u = e[8], c = e[9], p = e[10];
  let h;
  if (e[28] !== r || e[29] !== o || e[30] !== s || e[31] !== l || e[32] !== i || e[33] !== f || e[34] !== u) {
    let d;
    e[36] !== o || e[37] !== s || e[38] !== l || e[39] !== i || e[40] !== f || e[41] !== u ? (d = (y) => {
      const {
        id: b,
        itemLabel: E,
        itemProps: v
      } = y, m = v === void 0 ? {} : v, {
        className: C,
        ...x
      } = m.label || {}, {
        className: R,
        ...S
      } = m.root || {}, {
        className: I,
        ...M
      } = m.indicator || {};
      return /* @__PURE__ */ X.jsxs("label", { className: Fe(So.Item, l, C), ...i, ...x, children: [
        /* @__PURE__ */ X.jsx(Bf, { value: b, className: Fe(So.Radio, f, R), ...u, ...S, children: /* @__PURE__ */ X.jsx(Hf, { className: Fe(So.Indicator, o, I), ...s, ...M, children: /* @__PURE__ */ X.jsx(Pi, { size: 12, strokeWidth: 3 }) }) }),
        E
      ] }, b);
    }, e[36] = o, e[37] = s, e[38] = l, e[39] = i, e[40] = f, e[41] = u, e[42] = d) : d = e[42], h = r.map(d), e[28] = r, e[29] = o, e[30] = s, e[31] = l, e[32] = i, e[33] = f, e[34] = u, e[35] = h;
  } else
    h = e[35];
  let g;
  return e[43] !== n || e[44] !== c || e[45] !== p || e[46] !== h ? (g = /* @__PURE__ */ X.jsx(n, { className: p, ...c, children: h }), e[43] = n, e[44] = c, e[45] = p, e[46] = h, e[47] = g) : g = e[47], g;
}
const Rl = /* @__PURE__ */ a.createContext(null);
process.env.NODE_ENV !== "production" && (Rl.displayName = "SelectRootContext");
const xl = /* @__PURE__ */ a.createContext(null);
process.env.NODE_ENV !== "production" && (xl.displayName = "SelectFloatingContext");
function pn() {
  const t = a.useContext(Rl);
  if (t === null)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: SelectRootContext is missing. Select parts must be placed within <Select.Root>." : ot(60));
  return t;
}
function $f() {
  const t = a.useContext(xl);
  if (t === null)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: SelectFloatingContext is missing. Select parts must be placed within <Select.Root>." : ot(61));
  return t;
}
const Uf = (t, e) => Object.is(t, e);
function Rn(t, e, n) {
  return t == null || e == null ? Object.is(t, e) : n(t, e);
}
function Wf(t, e, n) {
  return !t || t.length === 0 ? !1 : t.some((r) => r === void 0 ? !1 : Rn(e, r, n));
}
function Nn(t, e, n) {
  return !t || t.length === 0 ? -1 : t.findIndex((r) => r === void 0 ? !1 : Rn(r, e, n));
}
function Kf(t, e, n) {
  return t.filter((r) => !Rn(e, r, n));
}
function vl(t) {
  return t != null && t.length > 0 && typeof t[0] == "object" && t[0] != null && "items" in t[0];
}
function Gf(t) {
  if (!Array.isArray(t))
    return t != null && "null" in t;
  const e = t;
  if (vl(e)) {
    for (const n of e)
      for (const r of n.items)
        if (r && r.value == null && r.label != null)
          return !0;
    return !1;
  }
  for (const n of e)
    if (n && n.value == null && n.label != null)
      return !0;
  return !1;
}
function vt(t, e) {
  if (e && t != null)
    return e(t) ?? "";
  if (t && typeof t == "object") {
    if ("label" in t && t.label != null)
      return String(t.label);
    if ("value" in t)
      return String(t.value);
  }
  return Jo(t);
}
function Yt(t, e) {
  return e && t != null ? e(t) ?? "" : t && typeof t == "object" && "value" in t && "label" in t ? Jo(t.value) : Jo(t);
}
function Yf(t, e, n) {
  function r() {
    return vt(t, n);
  }
  if (n && t != null)
    return n(t);
  if (t && typeof t == "object" && "label" in t && t.label != null)
    return t.label;
  if (e && !Array.isArray(e))
    return e[t] ?? r();
  if (Array.isArray(e)) {
    const o = e, s = vl(o) ? o.flatMap((l) => l.items) : o;
    if (t == null || typeof t != "object") {
      const l = s.find((i) => i.value === t);
      return l && l.label != null ? l.label : r();
    }
    if ("value" in t) {
      const l = s.find((i) => i && i.value === t.value);
      if (l && l.label != null)
        return l.label;
    }
  }
  return r();
}
function rE(t, e, n) {
  return t.reduce((r, o, s) => (s > 0 && r.push(", "), r.push(/* @__PURE__ */ X.jsx(a.Fragment, {
    children: Yf(o, e, n)
  }, s)), r), []);
}
const Ve = {
  id: ie((t) => t.id),
  labelId: ie((t) => t.labelId),
  modal: ie((t) => t.modal),
  multiple: ie((t) => t.multiple),
  items: ie((t) => t.items),
  itemToStringLabel: ie((t) => t.itemToStringLabel),
  itemToStringValue: ie((t) => t.itemToStringValue),
  isItemEqualToValue: ie((t) => t.isItemEqualToValue),
  value: ie((t) => t.value),
  hasSelectedValue: ie((t) => {
    const {
      value: e,
      multiple: n,
      itemToStringValue: r
    } = t;
    return e == null ? !1 : n && Array.isArray(e) ? e.length > 0 : Yt(e, r) !== "";
  }),
  hasNullItemLabel: ie((t, e) => e ? Gf(t.items) : !1),
  open: ie((t) => t.open),
  mounted: ie((t) => t.mounted),
  forceMount: ie((t) => t.forceMount),
  transitionStatus: ie((t) => t.transitionStatus),
  openMethod: ie((t) => t.openMethod),
  activeIndex: ie((t) => t.activeIndex),
  selectedIndex: ie((t) => t.selectedIndex),
  isActive: ie((t, e) => t.activeIndex === e),
  isSelected: ie((t, e, n) => {
    const r = t.isItemEqualToValue, o = t.value;
    return t.multiple ? Array.isArray(o) && o.some((s) => Rn(n, s, r)) : t.selectedIndex === e && t.selectedIndex !== null ? !0 : Rn(n, o, r);
  }),
  isSelectedByFocus: ie((t, e) => t.selectedIndex === e),
  popupProps: ie((t) => t.popupProps),
  triggerProps: ie((t) => t.triggerProps),
  triggerElement: ie((t) => t.triggerElement),
  positionerElement: ie((t) => t.positionerElement),
  listElement: ie((t) => t.listElement),
  scrollUpArrowVisible: ie((t) => t.scrollUpArrowVisible),
  scrollDownArrowVisible: ie((t) => t.scrollDownArrowVisible),
  hasScrollArrows: ie((t) => t.hasScrollArrows)
}, gn = 1;
function zf(t, e) {
  return Math.max(0, t - e);
}
function oE(t, e) {
  if (e <= 0)
    return 0;
  const n = yt(t, 0, e), r = n, o = e - n, s = r <= gn, l = o <= gn;
  return s && l ? r <= o ? 0 : e : s ? 0 : l ? e : n;
}
function sE(t) {
  const {
    id: e,
    value: n,
    defaultValue: r = null,
    onValueChange: o,
    open: s,
    defaultOpen: l = !1,
    onOpenChange: i,
    name: f,
    form: u,
    autoComplete: c,
    disabled: p = !1,
    readOnly: h = !1,
    required: g = !1,
    modal: d = !0,
    actionsRef: y,
    inputRef: b,
    onOpenChangeComplete: E,
    items: v,
    multiple: m = !1,
    itemToStringLabel: C,
    itemToStringValue: x,
    isItemEqualToValue: R = Uf,
    highlightItemOnHover: S = !0,
    children: I
  } = t, {
    clearErrors: M
  } = Qt(), {
    setDirty: A,
    setTouched: _,
    setFocused: L,
    shouldValidateOnChange: N,
    validityData: P,
    setFilled: w,
    name: O,
    disabled: V,
    validation: k,
    validationMode: H
  } = mt(), U = Vn({
    id: e
  }), T = V || p, D = O ?? f, [$, J] = Xt({
    controlled: n,
    default: m ? r ?? zt : r,
    name: "Select",
    state: "value"
  }), [Z, q] = Xt({
    controlled: s,
    default: l,
    name: "Select",
    state: "open"
  }), B = a.useRef([]), Y = a.useRef([]), Q = a.useRef(null), re = a.useRef(null), ue = a.useRef(0), z = a.useRef(null), se = a.useRef([]), fe = a.useRef(!1), j = a.useRef(!1), W = a.useRef(null), te = a.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ne = a.useRef(!1), {
    mounted: ee,
    setMounted: ae,
    transitionStatus: G
  } = kn(Z), {
    openMethod: oe,
    triggerProps: F
  } = dl(Z), K = at(() => new tl({
    id: U,
    labelId: void 0,
    modal: d,
    multiple: m,
    itemToStringLabel: C,
    itemToStringValue: x,
    isItemEqualToValue: R,
    value: $,
    open: Z,
    mounted: ee,
    transitionStatus: G,
    items: v,
    forceMount: !1,
    openMethod: null,
    activeIndex: null,
    selectedIndex: null,
    popupProps: {},
    triggerProps: {},
    triggerElement: null,
    positionerElement: null,
    listElement: null,
    scrollUpArrowVisible: !1,
    scrollDownArrowVisible: !1,
    hasScrollArrows: !1
  })).current, ce = de(K, Ve.activeIndex), me = de(K, Ve.selectedIndex), Re = de(K, Ve.triggerElement), Ce = de(K, Ve.positionerElement), we = ny(oe), Ee = oe ?? we, he = a.useMemo(() => m && Array.isArray($) && $.length === 0 ? "" : Yt($, x), [m, $, x]), be = a.useMemo(() => m && Array.isArray($) ? $.map((Ke) => Yt(Ke, x)) : Yt($, x), [m, $, x]), Ne = st(K.state.triggerElement), Se = le(() => be);
  _n(Ne, {
    id: U,
    value: $,
    getValue: Se
  });
  const Pe = a.useRef($);
  pe(() => {
    $ !== Pe.current && K.set("forceMount", !0);
  }, [K, $]), pe(() => {
    w(m ? Array.isArray($) && $.length > 0 : $ != null);
  }, [m, $, w]), pe(function() {
    if (Z)
      return;
    const tt = se.current;
    if (m) {
      const Vt = Array.isArray($) ? $ : [];
      if (Vt.length === 0) {
        K.set("selectedIndex", null);
        return;
      }
      const ht = Vt[Vt.length - 1], Ut = Nn(tt, ht, R);
      K.set("selectedIndex", Ut === -1 ? null : Ut);
      return;
    }
    const Rt = Nn(tt, $, R);
    K.set("selectedIndex", Rt === -1 ? null : Rt);
  }, [m, Z, $, se, R, K]), qt($, () => {
    M(D), A($ !== P.initialValue), N() ? k.commit($) : k.commit($, !0);
  });
  const Le = le((Ke, tt) => {
    if (i?.(Ke, tt), !tt.isCanceled && (q(Ke), !Ke && (tt.reason === On || tt.reason === Br) && (_(!0), L(!1), H === "onBlur" && k.commit($)), !Ke && K.state.activeIndex !== null)) {
      const Rt = B.current[K.state.activeIndex];
      queueMicrotask(() => {
        Rt?.setAttribute("tabindex", "-1");
      });
    }
  }), Me = le(() => {
    ae(!1), K.update({
      activeIndex: null,
      openMethod: null
    }), E?.(!1);
  });
  en({
    enabled: !y,
    open: Z,
    ref: Q,
    onComplete() {
      Z || Me();
    }
  }), a.useImperativeHandle(y, () => ({
    unmount: Me
  }), [Me]);
  const ye = le((Ke, tt) => {
    o?.(Ke, tt), !tt.isCanceled && J(Ke);
  }), Ie = le(() => {
    const Ke = K.state.listElement || Q.current;
    if (!Ke)
      return;
    const tt = zf(Ke.scrollHeight, Ke.clientHeight), Rt = oE(Ke.scrollTop, tt), Vt = Rt > 0, ht = Rt < tt;
    K.state.scrollUpArrowVisible !== Vt && K.set("scrollUpArrowVisible", Vt), K.state.scrollDownArrowVisible !== ht && K.set("scrollDownArrowVisible", ht);
  }), xe = ol({
    open: Z,
    onOpenChange: Le,
    elements: {
      reference: Re,
      floating: Ce
    }
  }), Te = Xi(xe, {
    enabled: !h && !T,
    event: "mousedown"
  }), Ye = us(xe, {
    bubbles: !1
  }), je = il(xe, {
    enabled: !h && !T,
    listRef: B,
    activeIndex: ce,
    selectedIndex: me,
    disabledIndices: zt,
    onNavigate(Ke) {
      Ke === null && !Z || K.set("activeIndex", Ke);
    },
    focusItemOnHover: S
  }), _e = Gu(xe, {
    enabled: !h && !T && (Z || !m),
    listRef: Y,
    activeIndex: ce,
    selectedIndex: me,
    onMatch(Ke) {
      Z ? K.set("activeIndex", Ke) : ye(se.current[Ke], ge("none"));
    },
    onTypingChange(Ke) {
      fe.current = Ke;
    }
  }), {
    getReferenceProps: ke,
    getFloatingProps: Ue,
    getItemProps: qe
  } = Gr([Te, Ye, je, _e]), Je = a.useMemo(() => At(ke(), F, U ? {
    id: U
  } : et), [ke, F, U]);
  gs(() => {
    K.update({
      popupProps: Ue(),
      triggerProps: Je
    });
  }), pe(() => {
    K.update({
      id: U,
      modal: d,
      multiple: m,
      value: $,
      open: Z,
      mounted: ee,
      transitionStatus: G,
      popupProps: Ue(),
      triggerProps: Je,
      items: v,
      itemToStringLabel: C,
      itemToStringValue: x,
      isItemEqualToValue: R,
      openMethod: Ee
    });
  }, [K, U, d, m, $, Z, ee, G, Ue, Je, v, C, x, R, Ee]);
  const Nt = a.useMemo(() => ({
    store: K,
    name: D,
    required: g,
    disabled: T,
    readOnly: h,
    multiple: m,
    highlightItemOnHover: S,
    setValue: ye,
    setOpen: Le,
    listRef: B,
    popupRef: Q,
    scrollHandlerRef: re,
    handleScrollArrowVisibility: Ie,
    scrollArrowsMountedCountRef: ue,
    getItemProps: qe,
    events: xe.context.events,
    valueRef: z,
    valuesRef: se,
    labelsRef: Y,
    typingRef: fe,
    selectionRef: te,
    selectedItemTextRef: W,
    validation: k,
    onOpenChangeComplete: E,
    keyboardActiveRef: j,
    alignItemWithTriggerActiveRef: ne,
    initialValueRef: Pe
  }), [K, D, g, T, h, m, S, ye, Le, qe, xe.context.events, k, E, Ie]), ze = Tt(b, k.inputRef), kt = m && Array.isArray($) && $.length > 0, ut = m ? void 0 : D, lt = a.useMemo(() => !m || !Array.isArray($) || !D ? null : $.map((Ke) => {
    const tt = Yt(Ke, x);
    return /* @__PURE__ */ X.jsx("input", {
      type: "hidden",
      form: u,
      name: D,
      value: tt
    }, tt);
  }), [m, $, u, D, x]);
  return /* @__PURE__ */ X.jsx(Rl.Provider, {
    value: Nt,
    children: /* @__PURE__ */ X.jsxs(xl.Provider, {
      value: xe,
      children: [I, /* @__PURE__ */ X.jsx("input", {
        ...k.getInputValidationProps({
          onFocus() {
            K.state.triggerElement?.focus({
              // Supported in Chrome from 144 (January 2026)
              focusVisible: !0
            });
          },
          // Handle browser autofill.
          onChange(Ke) {
            if (Ke.nativeEvent.defaultPrevented)
              return;
            const tt = Ke.currentTarget.value, Rt = ge(ct, Ke.nativeEvent);
            function Vt() {
              if (m)
                return;
              const ht = se.current.find((Ut) => Yt(Ut, x).toLowerCase() === tt.toLowerCase() || vt(Ut, C).toLowerCase() === tt.toLowerCase());
              ht != null && (A(ht !== P.initialValue), ye(ht, Rt), N() && k.commit(ht));
            }
            K.set("forceMount", !0), queueMicrotask(Vt);
          }
        }),
        id: U && ut == null ? `${U}-hidden-input` : void 0,
        form: u,
        name: ut,
        autoComplete: c,
        value: he,
        disabled: T,
        required: g && !kt,
        readOnly: h,
        ref: ze,
        style: D ? Yn : yn,
        tabIndex: -1,
        "aria-hidden": !0,
        suppressHydrationWarning: !0
      }), lt]
    })
  });
}
function qf(t) {
  return t == null ? void 0 : `${t}-label`;
}
function Cl(t, e) {
  return t ?? e;
}
const Xf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, i = l;
  delete i.id;
  const f = mt(), {
    store: u
  } = pn(), c = de(u, Ve.triggerElement), p = de(u, Ve.id), h = qf(p), g = su({
    id: h,
    fallbackControlId: c?.id ?? p,
    setLabelId(d) {
      u.set("labelId", d);
    }
  });
  return Be("div", e, {
    ref: n,
    state: f.state,
    props: [g, l],
    stateAttributesMapping: wt
  });
});
process.env.NODE_ENV !== "production" && (Xf.displayName = "SelectLabel");
const Io = 2, iE = 400, qc = 200, lE = {
  ...Ko,
  ...wt,
  value: () => null
}, Jf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    id: s,
    disabled: l = !1,
    nativeButton: i = !0,
    style: f,
    ...u
  } = e, {
    setTouched: c,
    setFocused: p,
    validationMode: h,
    state: g,
    disabled: d
  } = mt(), {
    labelId: y
  } = Pt(), {
    store: b,
    setOpen: E,
    selectionRef: v,
    validation: m,
    readOnly: C,
    required: x,
    alignItemWithTriggerActiveRef: R,
    disabled: S,
    keyboardActiveRef: I
  } = pn(), M = d || S || l, A = de(b, Ve.open), _ = de(b, Ve.value), L = de(b, Ve.triggerProps), N = de(b, Ve.positionerElement), P = de(b, Ve.listElement), w = de(b, Ve.id), O = de(b, Ve.labelId), V = de(b, Ve.hasSelectedValue), k = !V && A, H = de(b, Ve.hasNullItemLabel, k), U = s ?? w, T = Cl(y, O);
  Vn({
    id: U
  });
  const D = st(N), $ = a.useRef(null), {
    getButtonProps: J,
    buttonRef: Z
  } = Lt({
    disabled: M,
    native: i
  }), q = le((j) => {
    b.set("triggerElement", j);
  }), B = Tt(n, $, Z, q), Y = dt(), Q = dt(), re = dt(), ue = dt();
  a.useEffect(() => {
    if (A)
      return !(V || H) ? re.start(iE, () => {
        v.current.allowUnselectedMouseUp = !0, v.current.allowSelectedMouseUp = !0;
      }) : ue.start(qc, () => {
        v.current.allowUnselectedMouseUp = !0, re.start(qc, () => {
          v.current.allowSelectedMouseUp = !0;
        });
      }), () => {
        re.clear(), ue.clear();
      };
    v.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    }, Q.clear();
  }, [A, V, H, v, Q, re, ue]);
  const z = a.useMemo(() => P?.id ?? kr(N)?.id, [P, N]), se = At(L, {
    id: U,
    role: "combobox",
    "aria-expanded": A ? "true" : "false",
    "aria-haspopup": "listbox",
    "aria-controls": A ? z : void 0,
    "aria-labelledby": T,
    "aria-readonly": C || void 0,
    "aria-required": x || void 0,
    tabIndex: M ? -1 : 0,
    ref: B,
    onFocus(j) {
      p(!0), A && R.current && E(!1, ge(ct, j.nativeEvent)), Y.start(0, () => {
        b.set("forceMount", !0);
      });
    },
    onBlur(j) {
      Oe(N, j.relatedTarget) || (c(!0), p(!1), h === "onBlur" && m.commit(_));
    },
    onPointerMove() {
      I.current = !1;
    },
    onKeyDown() {
      I.current = !0;
    },
    onMouseDown(j) {
      if (A)
        return;
      const W = He(j.currentTarget);
      function te(ne) {
        if (!$.current)
          return;
        const ee = ne.target;
        if (Oe($.current, ee) || Oe(D.current, ee) || ee === $.current)
          return;
        const ae = gf($.current);
        ne.clientX >= ae.left - Io && ne.clientX <= ae.right + Io && ne.clientY >= ae.top - Io && ne.clientY <= ae.bottom + Io || E(!1, ge(Ca, ne));
      }
      Q.start(0, () => {
        W.addEventListener("mouseup", te, {
          once: !0
        });
      });
    }
  }, m.getValidationProps, u, J);
  se.role = "combobox";
  const fe = {
    ...g,
    open: A,
    disabled: M,
    value: _,
    readOnly: C,
    placeholder: !V
  };
  return Be("button", e, {
    ref: [n, $],
    state: fe,
    stateAttributesMapping: lE,
    props: se
  });
});
process.env.NODE_ENV !== "production" && (Jf.displayName = "SelectTrigger");
const cE = {
  value: () => null
}, Zf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    className: r,
    render: o,
    children: s,
    placeholder: l,
    style: i,
    ...f
  } = e, {
    store: u,
    valueRef: c
  } = pn(), p = de(u, Ve.value), h = de(u, Ve.items), g = de(u, Ve.itemToStringLabel), d = de(u, Ve.hasSelectedValue), y = !d && l != null && s == null, b = de(u, Ve.hasNullItemLabel, y), E = {
    value: p,
    placeholder: !d
  };
  let v = null;
  return typeof s == "function" ? v = s(p) : s != null ? v = s : !d && l != null && !b ? v = l : Array.isArray(p) ? v = rE(p, h, g) : v = Yf(p, h, g), Be("span", e, {
    state: E,
    ref: [n, c],
    props: [{
      children: v
    }, f],
    stateAttributesMapping: cE
  });
});
process.env.NODE_ENV !== "production" && (Zf.displayName = "SelectValue");
const Qf = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    className: r,
    render: o,
    style: s,
    ...l
  } = e, {
    store: i
  } = pn(), u = {
    open: de(i, Ve.open)
  };
  return Be("span", e, {
    state: u,
    ref: n,
    props: [{
      "aria-hidden": !0,
      children: "▼"
    }, l],
    stateAttributesMapping: ji
  });
});
process.env.NODE_ENV !== "production" && (Qf.displayName = "SelectIcon");
const ed = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (ed.displayName = "SelectPortalContext");
const td = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    store: r
  } = pn(), o = de(r, Ve.mounted), s = de(r, Ve.forceMount);
  return o || s ? /* @__PURE__ */ X.jsx(ed.Provider, {
    value: !0,
    children: /* @__PURE__ */ X.jsx(Ki, {
      ref: n,
      ...e
    })
  }) : null;
});
process.env.NODE_ENV !== "production" && (td.displayName = "SelectPortal");
const Sl = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Sl.displayName = "SelectPositionerContext");
function nd() {
  const t = a.useContext(Sl);
  if (!t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: SelectPositionerContext is missing. SelectPositioner parts must be placed within <Select.Positioner>." : ot(59));
  return t;
}
function Zo(t, e) {
  t && Object.assign(t.style, e);
}
const rd = {
  position: "relative",
  maxHeight: "100%",
  overflowX: "hidden",
  overflowY: "auto"
}, aE = {
  position: "fixed"
}, od = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    anchor: r,
    positionMethod: o = "absolute",
    className: s,
    render: l,
    side: i = "bottom",
    align: f = "center",
    sideOffset: u = 0,
    alignOffset: c = 0,
    collisionBoundary: p = "clipping-ancestors",
    collisionPadding: h,
    arrowPadding: g = 5,
    sticky: d = !1,
    disableAnchorTracking: y,
    alignItemWithTrigger: b = !0,
    collisionAvoidance: E = yu,
    style: v,
    ...m
  } = e, {
    store: C,
    listRef: x,
    labelsRef: R,
    alignItemWithTriggerActiveRef: S,
    selectedItemTextRef: I,
    valuesRef: M,
    initialValueRef: A,
    popupRef: _,
    setValue: L
  } = pn(), N = $f(), P = de(C, Ve.open), w = de(C, Ve.mounted), O = de(C, Ve.modal), V = de(C, Ve.value), k = de(C, Ve.openMethod), H = de(C, Ve.positionerElement), U = de(C, Ve.triggerElement), T = de(C, Ve.isItemEqualToValue), D = de(C, Ve.transitionStatus), $ = a.useRef(null), J = a.useRef(null), [Z, q] = a.useState(b), B = w && Z && k !== "touch";
  !w && Z !== b && q(b), pe(() => {
    w || (Ve.scrollUpArrowVisible(C.state) && C.set("scrollUpArrowVisible", !1), Ve.scrollDownArrowVisible(C.state) && C.set("scrollDownArrowVisible", !1));
  }, [C, w]), a.useImperativeHandle(S, () => B), af((B || O) && P, k === "touch", H, U);
  const Y = al({
    anchor: r,
    floatingRootContext: N,
    positionMethod: o,
    mounted: w,
    side: i,
    sideOffset: u,
    align: f,
    alignOffset: c,
    arrowPadding: g,
    collisionBoundary: p,
    collisionPadding: h,
    sticky: d,
    disableAnchorTracking: y ?? B,
    collisionAvoidance: E,
    keepMounted: !0
  }), Q = B ? "none" : Y.side, re = B ? aE : Y.positionerStyles, ue = {
    open: P,
    side: Q,
    align: Y.align,
    anchorHidden: Y.anchorHidden
  }, z = le((te) => {
    C.set("positionerElement", te);
  }), se = fl(e, ue, {
    styles: re,
    transitionStatus: D,
    props: m,
    refs: [n, z],
    hidden: !w,
    inert: !P
  }), fe = a.useRef(0), j = le((te) => {
    if (te.size === 0 && fe.current === 0 || M.current.length === 0)
      return;
    const ne = fe.current;
    if (fe.current = te.size, te.size === ne)
      return;
    const ee = ge(ct);
    if (ne !== 0 && !C.state.multiple && V !== null && Nn(M.current, V, T) === -1) {
      const G = A.current, F = G != null && Nn(M.current, G, T) !== -1 ? G : null;
      L(F, ee), F === null && (C.set("selectedIndex", null), I.current = null);
    }
    if (ne !== 0 && C.state.multiple && Array.isArray(V)) {
      const ae = (oe) => Nn(M.current, oe, T) !== -1, G = V.filter((oe) => ae(oe));
      (G.length !== V.length || G.some((oe) => !Wf(V, oe, T))) && (L(G, ee), G.length === 0 && (C.set("selectedIndex", null), I.current = null));
    }
    if (P && B) {
      C.update({
        scrollUpArrowVisible: !1,
        scrollDownArrowVisible: !1
      });
      const ae = {
        height: ""
      };
      Zo(H, ae), Zo(_.current, ae);
    }
  }), W = a.useMemo(() => ({
    ...Y,
    side: Q,
    alignItemWithTriggerActive: B,
    setControlledAlignItemWithTrigger: q,
    scrollUpArrowRef: $,
    scrollDownArrowRef: J
  }), [Y, Q, B, q]);
  return /* @__PURE__ */ X.jsx(Yr, {
    elementsRef: x,
    labelsRef: R,
    onMapChange: j,
    children: /* @__PURE__ */ X.jsxs(Sl.Provider, {
      value: W,
      children: [w && O && /* @__PURE__ */ X.jsx(ul, {
        inert: of(!P),
        cutout: U
      }), se]
    })
  });
});
process.env.NODE_ENV !== "production" && (od.displayName = "SelectPositioner");
const To = "base-ui-disable-scrollbar", Qo = {
  className: To,
  getElement(t) {
    return /* @__PURE__ */ X.jsx("style", {
      nonce: t,
      href: To,
      precedence: "base-ui:low",
      children: `.${To}{scrollbar-width:none}.${To}::-webkit-scrollbar{display:none}`
    });
  }
};
process.env.NODE_ENV !== "production" && (Qo.getElement.displayName = "styleDisableScrollbar.getElement");
const sd = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (sd.displayName = "CSPContext");
const uE = {
  disableStyleElements: !1
};
function id() {
  return a.useContext(sd) ?? uE;
}
const fE = {
  ...cs,
  ...An
}, ld = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    finalFocus: l,
    ...i
  } = e, {
    store: f,
    popupRef: u,
    onOpenChangeComplete: c,
    setOpen: p,
    valueRef: h,
    selectedItemTextRef: g,
    keyboardActiveRef: d,
    multiple: y,
    handleScrollArrowVisibility: b,
    scrollHandlerRef: E,
    listRef: v,
    highlightItemOnHover: m
  } = pn(), {
    side: C,
    align: x,
    alignItemWithTriggerActive: R,
    isPositioned: S,
    setControlledAlignItemWithTrigger: I,
    scrollDownArrowRef: M,
    scrollUpArrowRef: A
  } = nd(), _ = qu() != null, L = $f(), N = Qn(), {
    nonce: P,
    disableStyleElements: w
  } = id(), O = de(f, Ve.id), V = de(f, Ve.open), k = de(f, Ve.mounted), H = de(f, Ve.popupProps), U = de(f, Ve.transitionStatus), T = de(f, Ve.triggerElement), D = de(f, Ve.positionerElement), $ = de(f, Ve.listElement), J = a.useRef(!1), Z = a.useRef(!1), q = a.useRef({}), B = jr(), Y = le((z) => {
    if (!D || !u.current || !Z.current)
      return;
    if (J.current || !R) {
      b();
      return;
    }
    const se = D.style.top === "0px", fe = D.style.bottom === "0px";
    if (!se && !fe) {
      b();
      return;
    }
    const j = Jc(D), W = wr(D.getBoundingClientRect().height, "y", j), te = He(D), ne = getComputedStyle(D), ee = parseFloat(ne.marginTop), ae = parseFloat(ne.marginBottom), G = Xc(getComputedStyle(u.current)), oe = Math.min(te.documentElement.clientHeight - ee - ae, G), F = z.scrollTop, K = wo(z);
    let ce = 0, me = null, Re = !1, Ce = !1;
    const we = (Ne) => {
      D.style.height = `${Ne}px`;
    }, Ee = (Ne, Se) => {
      const Pe = yt(Ne, 0, oe - W);
      Pe > 0 && we(W + Pe), z.scrollTop = Se, oe - (W + Pe) <= gn && (J.current = !0), b();
    }, he = se ? K - F : F, be = Math.min(W + he, oe);
    if (ce = be, he <= gn) {
      Ee(he, se ? K : 0);
      return;
    }
    if (oe - be > gn)
      se ? Ce = !0 : me = 0;
    else if (Re = !0, fe && F < K) {
      const Ne = W + he - oe;
      me = F - (he - Ne);
    }
    if (ce = Math.ceil(ce), ce !== 0 && we(ce), Ce || me != null) {
      const Ne = wo(z), Se = Ce ? Ne : yt(me, 0, Ne);
      Math.abs(z.scrollTop - Se) > gn && (z.scrollTop = Se);
    }
    (Re || ce >= oe - gn) && (J.current = !0), b();
  });
  a.useImperativeHandle(E, () => Y, [Y]), en({
    open: V,
    ref: u,
    onComplete() {
      V && c?.(!0);
    }
  });
  const Q = {
    open: V,
    transitionStatus: U,
    side: C,
    align: x
  };
  pe(() => {
    !D || !u.current || Object.keys(q.current).length || (q.current = {
      top: D.style.top || "0",
      left: D.style.left || "0",
      right: D.style.right,
      height: D.style.height,
      bottom: D.style.bottom,
      minHeight: D.style.minHeight,
      maxHeight: D.style.maxHeight,
      marginTop: D.style.marginTop,
      marginBottom: D.style.marginBottom
    });
  }, [u, D]), pe(() => {
    V || R || (Z.current = !1, J.current = !1, Zo(D, q.current));
  }, [V, R, D, u]), pe(() => {
    const z = u.current;
    if (!V || !T || !D || !z || R && !S || f.state.transitionStatus === "ending")
      return;
    if (!R) {
      Z.current = !0, B.request(b), z.style.removeProperty("--transform-origin");
      return;
    }
    const se = dE(z);
    z.style.removeProperty("--transform-origin");
    try {
      const fe = g.current, j = h.current, W = getComputedStyle(D), te = getComputedStyle(z), ne = He(T), ee = it(D), ae = Jc(T), G = Po(T.getBoundingClientRect(), ae), oe = Po(D.getBoundingClientRect(), ae), F = G.height, K = $ || z, ce = K.scrollHeight, me = parseFloat(te.borderBottomWidth), Re = parseFloat(W.marginTop) || 10, Ce = parseFloat(W.marginBottom) || 10, we = parseFloat(W.minHeight) || 100, Ee = Xc(te), he = 5, be = 5, Ne = 20, Se = ne.documentElement.clientHeight - Re - Ce, Pe = ne.documentElement.clientWidth, Le = Se - G.bottom + F;
      let Me, ye = N === "rtl" ? G.right - oe.width : G.left, Ie = 0;
      if (fe && j) {
        const ze = Po(j.getBoundingClientRect(), ae);
        Me = Po(fe.getBoundingClientRect(), ae), ye = oe.left + (N === "rtl" ? ze.right - Me.right : ze.left - Me.left);
        const kt = ze.top - G.top + ze.height / 2;
        Ie = Me.top - oe.top + Me.height / 2 - kt;
      }
      const xe = Le + Ie + Ce + me;
      let Te = Math.min(Se, xe);
      const Ye = Se - Re - Ce, je = xe - Te, _e = Pe - be;
      D.style.left = `${yt(ye, he, _e - oe.width)}px`, D.style.height = `${Te}px`, D.style.maxHeight = "auto", D.style.marginTop = `${Re}px`, D.style.marginBottom = `${Ce}px`, z.style.height = "100%";
      const ke = wo(K), Ue = je >= ke - gn;
      Ue && (Te = Math.min(Se, oe.height) - (je - ke));
      const qe = G.top < Ne || G.bottom > Se - Ne || Math.ceil(Te) + gn < Math.min(ce, we), Je = (ee.visualViewport?.scale ?? 1) !== 1 && Oi;
      if (qe || Je) {
        Z.current = !0, Zo(D, q.current), I(!1);
        return;
      }
      const Nt = Math.max(we, Te);
      if (Ue) {
        const ze = Math.max(0, Se - xe);
        D.style.top = oe.height >= Ye ? "0" : `${ze}px`, D.style.height = `${Te}px`, K.scrollTop = wo(K);
      } else
        D.style.bottom = "0", K.scrollTop = je;
      if (Me) {
        const ze = oe.top, kt = oe.height, ut = Me.top + Me.height / 2, lt = kt > 0 ? (ut - ze) / kt * 100 : 50, Ke = yt(lt, 0, 100);
        z.style.setProperty("--transform-origin", `50% ${Ke}%`);
      }
      (Nt === Se || Te >= Ee) && (J.current = !0), b(), m && f.state.selectedIndex === null && f.state.activeIndex === null && v.current[0] != null && f.set("activeIndex", 0), Z.current = !0;
    } finally {
      se();
    }
  }, [f, V, D, T, h, g, u, b, R, I, B, M, A, $, v, m, N, S]), a.useEffect(() => {
    if (!R || !D || !V)
      return;
    const z = it(D);
    function se(fe) {
      p(!1, ge(Om, fe));
    }
    return $e(z, "resize", se);
  }, [p, R, D, V]);
  const re = {
    ...$ ? {
      role: "presentation",
      "aria-orientation": void 0
    } : {
      role: "listbox",
      "aria-multiselectable": y || void 0,
      id: `${O}-list`
    },
    onKeyDown(z) {
      d.current = !0, _ && ll.has(z.key) && z.stopPropagation();
    },
    onMouseMove() {
      d.current = !1;
    },
    onScroll(z) {
      $ || Y(z.currentTarget);
    },
    ...R && {
      style: $ ? {
        height: "100%"
      } : rd
    }
  }, ue = Be("div", e, {
    ref: [n, u],
    state: Q,
    stateAttributesMapping: fE,
    props: [H, re, ms(U), {
      className: !$ && R ? Qo.className : void 0
    }, i]
  });
  return /* @__PURE__ */ X.jsxs(a.Fragment, {
    children: [!w && Qo.getElement(P), /* @__PURE__ */ X.jsx(Su, {
      context: L,
      modal: !1,
      disabled: !k,
      returnFocus: l,
      restoreFocus: !0,
      children: ue
    })]
  });
});
process.env.NODE_ENV !== "production" && (ld.displayName = "SelectPopup");
function Xc(t) {
  const e = t.maxHeight || "";
  return e.endsWith("px") && parseFloat(e) || 1 / 0;
}
function wo(t) {
  return zf(t.scrollHeight, t.clientHeight);
}
function Jc(t) {
  return Mu.getScale(t);
}
function wr(t, e, n) {
  return t / n[e];
}
function Po(t, e) {
  return Vr({
    x: wr(t.x, "x", e),
    y: wr(t.y, "y", e),
    width: wr(t.width, "x", e),
    height: wr(t.height, "y", e)
  });
}
const Zc = [["transform", "none"], ["scale", "1"], ["translate", "0 0"]];
function dE(t) {
  const {
    style: e
  } = t, n = {};
  for (const [r, o] of Zc)
    n[r] = e.getPropertyValue(r), e.setProperty(r, o, "important");
  return () => {
    for (const [r] of Zc) {
      const o = n[r];
      o ? e.setProperty(r, o) : e.removeProperty(r);
    }
  };
}
const cd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    className: r,
    render: o,
    style: s,
    ...l
  } = e, {
    store: i,
    scrollHandlerRef: f
  } = pn(), {
    alignItemWithTriggerActive: u
  } = nd(), c = de(i, Ve.hasScrollArrows), p = de(i, Ve.openMethod), h = de(i, Ve.multiple), d = {
    id: `${de(i, Ve.id)}-list`,
    role: "listbox",
    "aria-multiselectable": h || void 0,
    onScroll(b) {
      f.current?.(b.currentTarget);
    },
    ...u && {
      style: rd
    },
    className: c && p !== "touch" ? Qo.className : void 0
  }, y = le((b) => {
    i.set("listElement", b);
  });
  return Be("div", e, {
    ref: [n, y],
    props: [d, l]
  });
});
process.env.NODE_ENV !== "production" && (cd.displayName = "SelectList");
const Il = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Il.displayName = "SelectItemContext");
function Tl() {
  const t = a.useContext(Il);
  if (!t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: SelectItemContext is missing. SelectItem parts must be placed within <Select.Item>." : ot(57));
  return t;
}
const ad = /* @__PURE__ */ a.memo(/* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    value: s = null,
    label: l,
    disabled: i = !1,
    nativeButton: f = !1,
    style: u,
    ...c
  } = e, p = a.useRef(null), h = Kr({
    label: l,
    textRef: p,
    indexGuessBehavior: mu.GuessFromOrder
  }), {
    store: g,
    getItemProps: d,
    setOpen: y,
    setValue: b,
    selectionRef: E,
    typingRef: v,
    valuesRef: m,
    multiple: C,
    selectedItemTextRef: x
  } = pn(), R = de(g, Ve.isActive, h.index), S = de(g, Ve.isSelected, h.index, s), I = de(g, Ve.isSelectedByFocus, h.index), M = de(g, Ve.isItemEqualToValue), A = h.index, _ = A !== -1, L = a.useRef(null), N = st(A);
  pe(() => {
    if (!_)
      return;
    const Z = m.current;
    return Z[A] = s, () => {
      delete Z[A];
    };
  }, [_, A, s, m]), pe(() => {
    if (!_)
      return;
    const Z = g.state.value;
    let q = Z;
    C && Array.isArray(Z) && Z.length > 0 && (q = Z[Z.length - 1]), q !== void 0 && Rn(s, q, M) && (g.set("selectedIndex", A), p.current && (x.current = p.current));
  }, [_, A, C, M, g, s, x]);
  const P = {
    disabled: i,
    selected: S,
    highlighted: R
  }, w = d({
    active: R,
    selected: S
  });
  w.id = void 0;
  const O = a.useRef(null), V = a.useRef("mouse"), k = a.useRef(!1), {
    getButtonProps: H,
    buttonRef: U
  } = Lt({
    disabled: i,
    focusableWhenDisabled: !0,
    native: f,
    composite: !0
  });
  function T(Z) {
    const q = g.state.value;
    if (C) {
      const B = Array.isArray(q) ? q : [], Y = S ? Kf(B, s, M) : [...B, s];
      b(Y, ge(lr, Z));
    } else
      b(s, ge(lr, Z)), y(!1, ge(lr, Z));
  }
  const D = {
    role: "option",
    "aria-selected": S,
    tabIndex: R ? 0 : -1,
    onTouchStart() {
      E.current = {
        allowSelectedMouseUp: !1,
        allowUnselectedMouseUp: !1
      };
    },
    onKeyDown(Z) {
      O.current = Z.key, g.set("activeIndex", A), Z.key === " " && v.current && Z.preventDefault();
    },
    onClick(Z) {
      k.current = !1, !(Z.type === "keydown" && O.current === null) && (i || Z.type === "keydown" && O.current === " " && v.current || V.current !== "touch" && !R || (O.current = null, T(Z.nativeEvent)));
    },
    onPointerEnter(Z) {
      V.current = Z.pointerType;
    },
    onPointerDown(Z) {
      V.current = Z.pointerType, k.current = !0;
    },
    onMouseUp() {
      if (i)
        return;
      if (k.current) {
        k.current = !1;
        return;
      }
      const Z = !E.current.allowSelectedMouseUp && S, q = !E.current.allowUnselectedMouseUp && !S;
      Z || q || V.current !== "touch" && !R || L.current?.click();
    }
  }, $ = Be("div", e, {
    ref: [U, n, h.ref, L],
    state: P,
    props: [w, D, c, H]
  }), J = a.useMemo(() => ({
    selected: S,
    indexRef: N,
    textRef: p,
    selectedByFocus: I,
    hasRegistered: _
  }), [S, N, p, I, _]);
  return /* @__PURE__ */ X.jsx(Il.Provider, {
    value: J,
    children: $
  });
}));
process.env.NODE_ENV !== "production" && (ad.displayName = "SelectItem");
const ud = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const r = e.keepMounted ?? !1, {
    selected: o
  } = Tl();
  return r || o ? /* @__PURE__ */ X.jsx(fd, {
    ...e,
    ref: n
  }) : null;
});
process.env.NODE_ENV !== "production" && (ud.displayName = "SelectItemIndicator");
const fd = /* @__PURE__ */ a.memo(/* @__PURE__ */ a.forwardRef((t, e) => {
  const {
    render: n,
    className: r,
    style: o,
    keepMounted: s,
    ...l
  } = t, {
    selected: i
  } = Tl(), f = a.useRef(null), {
    transitionStatus: u,
    setMounted: c
  } = kn(i), h = Be("span", t, {
    ref: [e, f],
    state: {
      selected: i,
      transitionStatus: u
    },
    props: [{
      "aria-hidden": !0,
      children: "✔️"
    }, l],
    stateAttributesMapping: An
  });
  return en({
    open: i,
    ref: f,
    onComplete() {
      i || c(!1);
    }
  }), h;
}));
process.env.NODE_ENV !== "production" && (fd.displayName = "Inner");
const dd = /* @__PURE__ */ a.memo(/* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    indexRef: r,
    textRef: o,
    selectedByFocus: s,
    hasRegistered: l
  } = Tl(), {
    selectedItemTextRef: i
  } = pn(), {
    className: f,
    render: u,
    style: c,
    ...p
  } = e, h = a.useCallback((d) => {
    if (!d || !l)
      return;
    const y = i.current === null || !i.current.isConnected;
    (s || y && r.current === 0) && (i.current = d);
  }, [i, r, s, l]);
  return Be("div", e, {
    ref: [h, n, o],
    props: p
  });
}));
process.env.NODE_ENV !== "production" && (dd.displayName = "SelectItemText");
const pE = "_Label_uu3hm_10", mE = "_Value_uu3hm_19", gE = "_Select_uu3hm_23", hE = "_SelectIcon_uu3hm_66", bE = "_Positioner_uu3hm_70", yE = "_Popup_uu3hm_78", EE = "_List_uu3hm_107", RE = "_Item_uu3hm_155", xE = "_ItemIndicator_uu3hm_202", vE = "_ItemText_uu3hm_212", nn = {
  Label: pE,
  Value: mE,
  Select: gE,
  SelectIcon: hE,
  Positioner: bE,
  Popup: yE,
  List: EE,
  Item: RE,
  ItemIndicator: xE,
  ItemText: vE
};
function IR(t) {
  const e = Zt.c(123);
  let n, r, o, s;
  e[0] !== t ? ({
    itemList: n,
    label: r,
    innerProps: s,
    ...o
  } = t, e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = s) : (n = e[1], r = e[2], o = e[3], s = e[4]);
  let l;
  e[5] !== s ? (l = s === void 0 ? {} : s, e[5] = s, e[6] = l) : l = e[6];
  const i = l;
  let f;
  e[7] !== i.label ? (f = i.label || {}, e[7] = i.label, e[8] = f) : f = e[8];
  let u, c;
  e[9] !== f ? ({
    className: u,
    ...c
  } = f, e[9] = f, e[10] = u, e[11] = c) : (u = e[10], c = e[11]);
  let p;
  e[12] !== i.trigger ? (p = i.trigger || {}, e[12] = i.trigger, e[13] = p) : p = e[13];
  let h, g;
  e[14] !== p ? ({
    className: h,
    ...g
  } = p, e[14] = p, e[15] = h, e[16] = g) : (h = e[15], g = e[16]);
  let d;
  e[17] !== i.triggerValue ? (d = i.triggerValue || {}, e[17] = i.triggerValue, e[18] = d) : d = e[18];
  let y, b;
  e[19] !== d ? ({
    className: y,
    ...b
  } = d, e[19] = d, e[20] = y, e[21] = b) : (y = e[20], b = e[21]);
  let E;
  e[22] !== i.triggerIcon ? (E = i.triggerIcon || {}, e[22] = i.triggerIcon, e[23] = E) : E = e[23];
  let v, m;
  e[24] !== E ? ({
    className: v,
    ...m
  } = E, e[24] = E, e[25] = v, e[26] = m) : (v = e[25], m = e[26]);
  let C;
  e[27] !== i.positioner ? (C = i.positioner || {}, e[27] = i.positioner, e[28] = C) : C = e[28];
  let x, R;
  e[29] !== C ? ({
    className: x,
    ...R
  } = C, e[29] = C, e[30] = x, e[31] = R) : (x = e[30], R = e[31]);
  let S;
  e[32] !== i.popup ? (S = i.popup || {}, e[32] = i.popup, e[33] = S) : S = e[33];
  let I, M;
  e[34] !== S ? ({
    className: I,
    ...M
  } = S, e[34] = S, e[35] = I, e[36] = M) : (I = e[35], M = e[36]);
  let A;
  e[37] !== i.list ? (A = i.list || {}, e[37] = i.list, e[38] = A) : A = e[38];
  let _, L;
  e[39] !== A ? ({
    className: _,
    ...L
  } = A, e[39] = A, e[40] = _, e[41] = L) : (_ = e[40], L = e[41]);
  let N;
  e[42] !== i.item ? (N = i.item || {}, e[42] = i.item, e[43] = N) : N = e[43];
  let P, w;
  e[44] !== N ? ({
    className: P,
    ...w
  } = N, e[44] = N, e[45] = P, e[46] = w) : (P = e[45], w = e[46]);
  let O;
  e[47] !== i.itemIndicator ? (O = i.itemIndicator || {}, e[47] = i.itemIndicator, e[48] = O) : O = e[48];
  let V, k;
  e[49] !== O ? ({
    className: V,
    ...k
  } = O, e[49] = O, e[50] = V, e[51] = k) : (V = e[50], k = e[51]);
  let H;
  e[52] !== i.itemText ? (H = i.itemText || {}, e[52] = i.itemText, e[53] = H) : H = e[53];
  let U, T;
  e[54] !== H ? ({
    className: U,
    ...T
  } = H, e[54] = H, e[55] = U, e[56] = T) : (U = e[55], T = e[56]);
  let D;
  e[57] !== u ? (D = Fe(nn.Label, u), e[57] = u, e[58] = D) : D = e[58];
  let $;
  e[59] !== r || e[60] !== c || e[61] !== D ? ($ = /* @__PURE__ */ X.jsx(Xf, { className: D, ...c, children: r }), e[59] = r, e[60] = c, e[61] = D, e[62] = $) : $ = e[62];
  let J;
  e[63] !== h ? (J = Fe(nn.Select, h), e[63] = h, e[64] = J) : J = e[64];
  let Z;
  e[65] !== y ? (Z = Fe(nn.Value, y), e[65] = y, e[66] = Z) : Z = e[66];
  let q;
  e[67] !== Z || e[68] !== b ? (q = /* @__PURE__ */ X.jsx(Zf, { className: Z, ...b }), e[67] = Z, e[68] = b, e[69] = q) : q = e[69];
  let B;
  e[70] !== v ? (B = Fe(nn.SelectIcon, v), e[70] = v, e[71] = B) : B = e[71];
  let Y;
  e[72] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Y = /* @__PURE__ */ X.jsx(Wm, {}), e[72] = Y) : Y = e[72];
  let Q;
  e[73] !== B || e[74] !== m ? (Q = /* @__PURE__ */ X.jsx(Qf, { className: B, ...m, children: Y }), e[73] = B, e[74] = m, e[75] = Q) : Q = e[75];
  let re;
  e[76] !== J || e[77] !== q || e[78] !== Q || e[79] !== g ? (re = /* @__PURE__ */ X.jsxs(Jf, { className: J, ...g, children: [
    q,
    Q
  ] }), e[76] = J, e[77] = q, e[78] = Q, e[79] = g, e[80] = re) : re = e[80];
  const ue = i.portal;
  let z;
  e[81] !== x ? (z = Fe(nn.Positioner, x), e[81] = x, e[82] = z) : z = e[82];
  let se;
  e[83] !== I ? (se = Fe(nn.Popup, I), e[83] = I, e[84] = se) : se = e[84];
  let fe;
  e[85] !== _ ? (fe = Fe(nn.List, _), e[85] = _, e[86] = fe) : fe = e[86];
  let j;
  if (e[87] !== P || e[88] !== V || e[89] !== k || e[90] !== n || e[91] !== w || e[92] !== U || e[93] !== T) {
    let G;
    e[95] !== P || e[96] !== V || e[97] !== k || e[98] !== w || e[99] !== U || e[100] !== T ? (G = (oe) => {
      const {
        label: F,
        value: K,
        itemListProps: ce
      } = oe, me = ce === void 0 ? {} : ce, {
        className: Re,
        ...Ce
      } = me.item || {}, {
        className: we,
        ...Ee
      } = me.itemIndicator || {}, {
        className: he,
        ...be
      } = me.itemText || {};
      return /* @__PURE__ */ X.jsxs(ad, { value: K, className: Fe(nn.Item, P, Re), ...w, ...Ce, children: [
        /* @__PURE__ */ X.jsx(dd, { className: Fe(nn.ItemText, U, he), ...T, ...be, children: F }),
        /* @__PURE__ */ X.jsx(ud, { className: Fe(nn.ItemIndicator, V, we), ...k, ...Ee, children: /* @__PURE__ */ X.jsx(Pi, { size: 16, color: "#828282" }) })
      ] }, K);
    }, e[95] = P, e[96] = V, e[97] = k, e[98] = w, e[99] = U, e[100] = T, e[101] = G) : G = e[101], j = n.map(G), e[87] = P, e[88] = V, e[89] = k, e[90] = n, e[91] = w, e[92] = U, e[93] = T, e[94] = j;
  } else
    j = e[94];
  let W;
  e[102] !== L || e[103] !== fe || e[104] !== j ? (W = /* @__PURE__ */ X.jsx(cd, { className: fe, ...L, children: j }), e[102] = L, e[103] = fe, e[104] = j, e[105] = W) : W = e[105];
  let te;
  e[106] !== M || e[107] !== se || e[108] !== W ? (te = /* @__PURE__ */ X.jsx(ld, { className: se, ...M, children: W }), e[106] = M, e[107] = se, e[108] = W, e[109] = te) : te = e[109];
  let ne;
  e[110] !== R || e[111] !== z || e[112] !== te ? (ne = /* @__PURE__ */ X.jsx(od, { className: z, sideOffset: 8, ...R, children: te }), e[110] = R, e[111] = z, e[112] = te, e[113] = ne) : ne = e[113];
  let ee;
  e[114] !== i.portal || e[115] !== ne ? (ee = /* @__PURE__ */ X.jsx(td, { ...ue, children: ne }), e[114] = i.portal, e[115] = ne, e[116] = ee) : ee = e[116];
  let ae;
  return e[117] !== n || e[118] !== o || e[119] !== $ || e[120] !== re || e[121] !== ee ? (ae = /* @__PURE__ */ X.jsxs(sE, { items: n, ...o, children: [
    $,
    re,
    ee
  ] }), e[117] = n, e[118] = o, e[119] = $, e[120] = re, e[121] = ee, e[122] = ae) : ae = e[122], ae;
}
function pd(t, e, n = (r, o) => r === o) {
  return t.length === e.length && t.every((r, o) => n(r, e[o]));
}
function md(t, e) {
  return t - e;
}
function CE(t, e, n) {
  const r = t.slice();
  return r[e] = n, r.sort(md);
}
function gd(t, e, n, r, o, s) {
  let l = t;
  return l = yt(l, n, r), o && (l = CE(
    s,
    e,
    // Bound the new value to the thumb's neighbours.
    yt(l, s[e - 1] || -1 / 0, s[e + 1] || 1 / 0)
  )), l;
}
function hd(t, e, n) {
  if (!Array.isArray(t))
    return !0;
  const r = t.reduce((o, s, l, i) => (l === i.length - 1 || o.push(Math.abs(s - i[l + 1])), o), []);
  return Math.min(...r) >= e * n;
}
const qr = {
  activeThumbIndex: () => null,
  max: () => null,
  min: () => null,
  minStepsBetweenValues: () => null,
  step: () => null,
  values: () => null,
  ...wt
}, wl = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (wl.displayName = "SliderRootContext");
function bs() {
  const t = a.useContext(wl);
  if (t === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: SliderRootContext is missing. Slider parts must be placed within <Slider.Root>." : ot(62));
  return t;
}
function SE(t) {
  return "key" in t ? or : on;
}
function IE(t, e) {
  return typeof t == "number" && typeof e == "number" ? t === e : Array.isArray(t) && Array.isArray(e) ? pd(t, e) : !1;
}
const bd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    "aria-labelledby": r,
    className: o,
    defaultValue: s,
    disabled: l = !1,
    id: i,
    format: f,
    largeStep: u = 10,
    locale: c,
    render: p,
    max: h = 100,
    min: g = 0,
    minStepsBetweenValues: d = 0,
    form: y,
    name: b,
    onValueChange: E,
    onValueCommitted: v,
    orientation: m = "horizontal",
    step: C = 1,
    thumbCollisionBehavior: x = "push",
    thumbAlignment: R = "center",
    value: S,
    style: I,
    ...M
  } = e, A = Et(i), _ = qf(A), L = le(E), N = le(v), {
    clearErrors: P
  } = Qt(), {
    state: w,
    disabled: O,
    name: V,
    setTouched: k,
    setDirty: H,
    validityData: U,
    shouldValidateOnChange: T,
    validation: D
  } = mt(), {
    labelId: $
  } = Pt(), [J, Z] = a.useState(), q = r ?? Cl($, J), B = O || l, Y = V ?? b, [Q, re] = Xt({
    controlled: S,
    default: s ?? g,
    name: "Slider"
  }), ue = a.useRef(null), z = a.useRef(null), se = a.useRef([]), fe = a.useRef(null), j = a.useRef(null), W = a.useRef(-1), te = a.useRef(null), ne = a.useRef(null), ee = a.useRef("none"), ae = st(f), [G, oe] = a.useState(-1), [F, K] = a.useState(-1), [ce, me] = a.useState(!1), [Re, Ce] = a.useState(() => /* @__PURE__ */ new Map()), [we, Ee] = a.useState([void 0, void 0]), he = le((xe) => {
    oe(xe), xe !== -1 && K(xe);
  });
  _n(z, {
    id: A,
    value: Q
  }), qt(Q, () => {
    P(Y), T() ? D.commit(Q) : D.commit(Q, !0);
    const xe = U.initialValue;
    let Te;
    Array.isArray(Q) && Array.isArray(xe) ? Te = !pd(Q, xe) : Te = Q !== xe, H(Te);
  });
  const be = le((xe) => {
    xe && (z.current = xe);
  }), Ne = Array.isArray(Q), Se = a.useMemo(() => Ne ? Q.slice().sort(md) : [yt(Q, g, h)], [h, g, Ne, Q]), Pe = le((xe, Te) => {
    if (Number.isNaN(xe) || IE(xe, Q))
      return;
    const Ye = Te ?? ge(ct, void 0, void 0, {
      activeThumbIndex: -1
    });
    ee.current = Ye.reason;
    const je = Ye.event, _e = je.constructor ?? Event, ke = new _e(je.type, je);
    Object.defineProperty(ke, "target", {
      writable: !0,
      value: {
        value: xe,
        name: Y
      }
    }), Ye.event = ke, ne.current = xe, L(xe, Ye), !Ye.isCanceled && re(xe);
  }), Le = le((xe, Te, Ye) => {
    const je = gd(xe, Te, g, h, Ne, Se);
    if (hd(je, C, d)) {
      const _e = SE(Ye);
      Pe(je, ge(_e, Ye.nativeEvent, void 0, {
        activeThumbIndex: Te
      })), k(!0);
      const ke = ne.current ?? je;
      N(ke, Ht(_e, Ye.nativeEvent));
    }
  });
  process.env.NODE_ENV !== "production" && g >= h && da("Slider `max` must be greater than `min`."), pe(() => {
    const xe = St(He(ue.current));
    B && Oe(ue.current, xe) && xe.blur();
  }, [B]), B && G !== -1 && he(-1);
  const Me = a.useMemo(() => ({
    ...w,
    activeThumbIndex: G,
    disabled: B,
    dragging: ce,
    orientation: m,
    max: h,
    min: g,
    minStepsBetweenValues: d,
    step: C,
    values: Se
  }), [w, G, B, ce, h, g, d, m, C, Se]), ye = a.useMemo(() => ({
    active: G,
    controlRef: z,
    disabled: B,
    dragging: ce,
    validation: D,
    formatOptionsRef: ae,
    handleInputChange: Le,
    indicatorPosition: we,
    inset: R !== "center",
    labelId: q,
    rootLabelId: _,
    largeStep: u,
    lastUsedThumbIndex: F,
    lastChangedValueRef: ne,
    lastChangeReasonRef: ee,
    form: y,
    locale: c,
    max: h,
    min: g,
    minStepsBetweenValues: d,
    name: Y,
    onValueCommitted: N,
    orientation: m,
    pressedInputRef: fe,
    pressedThumbCenterOffsetRef: j,
    pressedThumbIndexRef: W,
    pressedValuesRef: te,
    registerFieldControlRef: be,
    renderBeforeHydration: R === "edge",
    setActive: he,
    setDragging: me,
    setIndicatorPosition: Ee,
    setLabelId: Z,
    setValue: Pe,
    state: Me,
    step: C,
    thumbCollisionBehavior: x,
    thumbMap: Re,
    thumbRefs: se,
    values: Se
  }), [G, z, q, _, B, ce, D, ae, Le, we, u, F, ne, ee, y, c, h, g, d, Y, N, m, fe, j, W, te, be, he, me, Ee, Z, Pe, Me, C, x, R, Re, se, Se]), Ie = Be("div", e, {
    state: Me,
    ref: [n, ue],
    props: [{
      "aria-labelledby": q,
      id: A,
      role: "group"
    }, D.getValidationProps, M],
    stateAttributesMapping: qr
  });
  return /* @__PURE__ */ X.jsx(wl.Provider, {
    value: ye,
    children: /* @__PURE__ */ X.jsx(Yr, {
      elementsRef: se,
      onMapChange: Ce,
      children: Ie
    })
  });
});
process.env.NODE_ENV !== "production" && (bd.displayName = "SliderRoot");
function yd(t) {
  const e = t.getBoundingClientRect();
  return {
    x: (e.left + e.right) / 2,
    y: (e.top + e.bottom) / 2
  };
}
function Nr(t) {
  if (t === 0)
    return 0;
  if (Math.abs(t) < 1) {
    const n = t.toExponential().split("e-"), r = n[0].split(".")[1];
    return (r ? r.length : 0) + parseInt(n[1], 10);
  }
  const e = t.toString().split(".")[1];
  return e ? e.length : 0;
}
function Ed(t, e, n) {
  const r = Math.round((t - n) / e) * e + n;
  return Number(r.toFixed(Math.max(Nr(e), Nr(n))));
}
function Qc({
  values: t,
  index: e,
  nextValue: n,
  min: r,
  max: o,
  step: s,
  minStepsBetweenValues: l,
  initialValues: i
}) {
  if (t.length === 0)
    return [];
  const f = t.slice(), u = s * l, c = f.length - 1, p = i ?? t, h = r + e * u, g = o - (c - e) * u;
  f[e] = yt(n, h, g);
  for (let d = e + 1; d <= c; d += 1) {
    const y = f[d - 1] + u, b = o - (c - d) * u, E = p[d] ?? f[d];
    let v = Math.max(f[d], y);
    E < v && (v = Math.max(E, y)), f[d] = yt(v, y, b);
  }
  for (let d = e - 1; d >= 0; d -= 1) {
    const y = f[d + 1] - u, b = r + d * u, E = p[d] ?? f[d];
    let v = Math.min(f[d], y);
    E > v && (v = Math.min(E, y)), f[d] = yt(v, b, y);
  }
  for (let d = 0; d <= c; d += 1)
    f[d] = Number(f[d].toFixed(12));
  return f;
}
function TE({
  behavior: t,
  values: e,
  currentValues: n,
  initialValues: r,
  pressedIndex: o,
  nextValue: s,
  min: l,
  max: i,
  step: f,
  minStepsBetweenValues: u
}) {
  const c = n ?? e, p = r ?? e;
  if (!(c.length > 1))
    return {
      value: s,
      thumbIndex: 0,
      didSwap: !1
    };
  const g = f * u;
  switch (t) {
    case "swap": {
      const d = c[o], y = 1e-7, b = c.slice(), E = b[o - 1], v = b[o + 1], m = E != null ? E + g : l, C = v != null ? v - g : i, x = yt(s, m, C), R = Number(x.toFixed(12));
      b[o] = R;
      const S = s > d, I = s < d, M = S && v != null && s >= v - y, A = I && E != null && s <= E + y;
      if (!M && !A)
        return {
          value: b,
          thumbIndex: o,
          didSwap: !1
        };
      const _ = M ? o + 1 : o - 1, L = b.map((O, V) => {
        if (V === o)
          return R;
        const k = p[V];
        return k ?? c[V];
      });
      let N = s;
      M ? N = Math.max(s, b[_]) : N = Math.min(s, b[_]);
      const P = Qc({
        values: b,
        index: _,
        nextValue: N,
        min: l,
        max: i,
        step: f,
        minStepsBetweenValues: u,
        initialValues: L
      }), w = M ? _ - 1 : _ + 1;
      if (w >= 0 && w < P.length) {
        const O = P[w - 1], V = P[w + 1];
        let k = O != null ? O + g : l;
        k = Math.max(k, l + w * g);
        let H = V != null ? V - g : i;
        H = Math.min(H, i - (P.length - 1 - w) * g);
        const U = yt(R, k, H);
        P[w] = Number(U.toFixed(12));
      }
      return {
        value: P,
        thumbIndex: _,
        didSwap: !0
      };
    }
    case "push":
      return {
        value: Qc({
          values: c,
          index: o,
          nextValue: s,
          min: l,
          max: i,
          step: f,
          minStepsBetweenValues: u
        }),
        thumbIndex: o,
        didSwap: !1
      };
    default: {
      const d = c.slice(), y = d[o - 1], b = d[o + 1], E = y != null ? y + g : l, v = b != null ? b - g : i, m = yt(s, E, v);
      return d[o] = Number(m.toFixed(12)), {
        value: d,
        thumbIndex: o,
        didSwap: !1
      };
    }
  }
}
const wE = 2;
function PE(t, e) {
  if (!t)
    return {
      start: 0,
      end: 0
    };
  function n(s) {
    const l = s != null ? parseFloat(s) : 0;
    return Number.isNaN(l) ? 0 : l;
  }
  const r = e ? "Top" : "InlineStart", o = e ? "Bottom" : "InlineEnd";
  return {
    start: n(t[`border${r}Width`]) + n(t[`padding${r}`]),
    end: n(t[`border${o}Width`]) + n(t[`padding${o}`])
  };
}
function No(t, e) {
  if (e.current != null && t.changedTouches) {
    const n = t;
    for (let r = 0; r < n.changedTouches.length; r += 1) {
      const o = n.changedTouches[r];
      if (o.identifier === e.current)
        return {
          x: o.clientX,
          y: o.clientY
        };
    }
    return null;
  }
  return {
    x: t.clientX,
    y: t.clientY
  };
}
const Rd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, {
    disabled: i,
    dragging: f,
    inset: u,
    lastChangedValueRef: c,
    lastChangeReasonRef: p,
    max: h,
    min: g,
    minStepsBetweenValues: d,
    onValueCommitted: y,
    orientation: b,
    pressedInputRef: E,
    pressedThumbCenterOffsetRef: v,
    pressedThumbIndexRef: m,
    pressedValuesRef: C,
    registerFieldControlRef: x,
    renderBeforeHydration: R,
    setActive: S,
    setDragging: I,
    setValue: M,
    state: A,
    step: _,
    thumbCollisionBehavior: L,
    thumbRefs: N,
    values: P
  } = bs(), w = Qn(), O = P.length > 1, V = b === "vertical", k = a.useRef(null), H = a.useRef(null), U = le((j) => {
    j && H.current == null && H.current == null && (H.current = getComputedStyle(j));
  }), T = a.useRef(null), D = a.useRef(0), $ = a.useRef(0), J = st(P), Z = le((j) => {
    m.current !== j && (m.current = j);
    const W = N.current[j];
    if (!W) {
      v.current = null, E.current = null;
      return;
    }
    E.current = W.querySelector('input[type="range"]');
  }), q = le((j) => {
    const W = k.current;
    if (!W)
      return null;
    const {
      width: te,
      height: ne,
      bottom: ee,
      left: ae,
      right: G
    } = W.getBoundingClientRect(), oe = PE(H.current, V), F = $.current, K = (V ? ne : te) - oe.start - oe.end - F * 2, ce = v.current ?? 0, me = j.x - ce, Re = j.y - ce, Ce = V ? ee - Re - oe.end : (w === "rtl" ? G - me : me - ae) - oe.start, we = yt((Ce - F) / K, 0, 1);
    let Ee = (h - g) * we + g;
    if (Ee = Ed(Ee, _, g), Ee = yt(Ee, g, h), !O)
      return {
        value: Ee,
        thumbIndex: 0,
        didSwap: !1
      };
    const he = m.current;
    if (he < 0)
      return null;
    const be = TE({
      behavior: L,
      values: P,
      currentValues: J.current ?? P,
      initialValues: C.current,
      pressedIndex: he,
      nextValue: Ee,
      min: g,
      max: h,
      step: _,
      minStepsBetweenValues: d
    });
    return L === "swap" && be.didSwap ? Z(be.thumbIndex) : m.current = be.thumbIndex, be;
  }), B = le((j) => {
    C.current = O ? P.slice() : null, J.current = P;
    const W = m.current;
    let te = W;
    if (W > -1 && W < P.length) {
      if (P[W] === h) {
        let ne = W;
        for (; ne > 0 && P[ne - 1] === h; )
          ne -= 1;
        te = ne;
      }
    } else {
      const ne = V ? "y" : "x";
      let ee;
      te = -1;
      for (let ae = 0; ae < N.current.length; ae += 1) {
        const G = N.current[ae];
        if (We(G)) {
          const oe = yd(G), F = Math.abs(j[ne] - oe[ne]);
          (ee === void 0 || F <= ee) && (te = ae, ee = F);
        }
      }
    }
    if (te > -1 && te !== W && Z(te), u) {
      const ne = N.current[te];
      if (We(ne)) {
        const ee = ne.getBoundingClientRect(), ae = V ? "height" : "width";
        $.current = ee[ae] / 2;
      }
    }
  }), Y = le((j) => {
    const W = N.current?.[j]?.querySelector('input[type="range"]');
    W && W.focus({
      preventScroll: !0,
      // Prevent pointer-driven focus rings in browsers that support this option.
      // Supported in Chrome from 144+.
      focusVisible: !1
    });
  }), Q = le((j) => {
    const W = No(j, T);
    if (W == null)
      return;
    if (D.current += 1, j.type === "pointermove" && j.buttons === 0) {
      re(j);
      return;
    }
    const te = q(W);
    te != null && hd(te.value, _, d) && (!f && D.current > wE && I(!0), M(te.value, ge(Pm, j, void 0, {
      activeThumbIndex: te.thumbIndex
    })), J.current = Array.isArray(te.value) ? te.value : [te.value], te.didSwap && Y(te.thumbIndex));
  });
  function re(j) {
    S(-1), I(!1), E.current = null, v.current = null;
    const W = No(j, T), te = W != null ? q(W) : null;
    if (te != null) {
      const ne = p.current;
      y(c.current ?? te.value, Ht(ne, j));
    }
    "pointerType" in j && k.current?.hasPointerCapture(j.pointerId) && k.current?.releasePointerCapture(j.pointerId), m.current = -1, T.current = null, C.current = null, z();
  }
  const ue = le((j) => {
    if (i)
      return;
    const W = j.changedTouches[0];
    W != null && (T.current = W.identifier);
    const te = No(j, T);
    if (te != null) {
      B(te);
      const ee = q(te);
      if (ee == null)
        return;
      Y(ee.thumbIndex), M(ee.value, ge(rc, j, void 0, {
        activeThumbIndex: ee.thumbIndex
      })), J.current = Array.isArray(ee.value) ? ee.value : [ee.value], ee.didSwap && Y(ee.thumbIndex);
    }
    D.current = 0;
    const ne = He(k.current);
    ne.addEventListener("touchmove", Q, {
      passive: !0
    }), ne.addEventListener("touchend", re, {
      passive: !0
    });
  }), z = le(() => {
    const j = He(k.current);
    j.removeEventListener("pointermove", Q), j.removeEventListener("pointerup", re), j.removeEventListener("touchmove", Q), j.removeEventListener("touchend", re), C.current = null;
  }), se = jr();
  return a.useEffect(() => {
    const j = k.current;
    if (!j)
      return () => z();
    const W = $e(j, "touchstart", ue, {
      passive: !0
    });
    return () => {
      W(), se.cancel(), z();
    };
  }, [z, ue, k, se]), a.useEffect(() => {
    i && z();
  }, [i, z]), Be("div", e, {
    state: A,
    ref: [n, x, k, U],
    props: [{
      "data-base-ui-slider-control": R ? "" : void 0,
      onPointerDown(j) {
        const W = k.current, te = pt(j.nativeEvent);
        if (!W || i || j.defaultPrevented || !We(te) || // Only handle left clicks
        j.button !== 0)
          return;
        const ne = No(j, T);
        if (ne != null) {
          B(ne);
          const ae = q(ne);
          if (ae == null)
            return;
          Oe(N.current[ae.thumbIndex], St(He(W))) ? j.preventDefault() : se.request(() => {
            Y(ae.thumbIndex);
          }), I(!0), v.current != null || (M(ae.value, ge(rc, j.nativeEvent, void 0, {
            activeThumbIndex: ae.thumbIndex
          })), J.current = Array.isArray(ae.value) ? ae.value : [ae.value], ae.didSwap && Y(ae.thumbIndex));
        }
        j.nativeEvent.pointerId && W.setPointerCapture(j.nativeEvent.pointerId), D.current = 0;
        const ee = He(k.current);
        ee.addEventListener("pointermove", Q, {
          passive: !0
        }), ee.addEventListener("pointerup", re, {
          once: !0
        });
      }
    }, l],
    stateAttributesMapping: qr
  });
});
process.env.NODE_ENV !== "production" && (Rd.displayName = "SliderControl");
const xd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, {
    state: i
  } = bs();
  return Be("div", e, {
    state: i,
    ref: n,
    props: [{
      style: {
        position: "relative"
      }
    }, l],
    stateAttributesMapping: qr
  });
});
process.env.NODE_ENV !== "production" && (xd.displayName = "SliderTrack");
function NE() {
  return Ze;
}
function OE() {
  return !1;
}
function ME() {
  return !0;
}
function vd() {
  return Qi.useSyncExternalStore(NE, OE, ME);
}
function hi(t, e, n) {
  return (t - e) * 100 / (n - e);
}
let _E = /* @__PURE__ */ (function(t) {
  return t.index = "data-index", t.dragging = "data-dragging", t.orientation = "data-orientation", t.disabled = "data-disabled", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.focused = "data-focused", t;
})({});
const AE = '!function(){const t=document.currentScript?.parentElement;if(!t)return;const e=t.closest("[data-base-ui-slider-control]");if(!e)return;const r=e.querySelector("[data-base-ui-slider-indicator]"),i=e.getBoundingClientRect(),n="vertical"===e.getAttribute("data-orientation")?"height":"width",o=e.querySelectorAll(\'input[type="range"]\'),l=o.length>1,s=o.length-1;let a=null,u=null;for(let t=0;t<o.length;t+=1){const e=o[t],y=parseFloat(e.getAttribute("value")??"");if(Number.isNaN(y))return;const c=e.parentElement;if(!c)return;const p=parseFloat(e.getAttribute("max")??"100"),g=parseFloat(e.getAttribute("min")??"0"),b=c?.getBoundingClientRect(),d=i[n]-b[n],m=100*(y-g)/(p-g),v=(b[n]/2+d*m/100)/i[n]*100;c.style.setProperty("--position",`${v}%`),Number.isFinite(v)&&(c.style.removeProperty("visibility"),r&&(0===t?(a=v,r.style.setProperty("--start-position",`${v}%`),l||r.style.removeProperty("visibility")):t===s&&(u=v-(a??0),r.style.setProperty("--end-position",`${v}%`),r.style.setProperty("--relative-size",`${u}%`),r.style.removeProperty("visibility"))))}}();', kE = /* @__PURE__ */ new Set([wn, hn, Kn, Pn, Jn, Zn, Xu, Ju]);
function VE(t, e, n, r) {
  if (!(e < 0))
    return t.length === 2 ? e === 0 ? `${un(t[e], r, n)} start range` : `${un(t[e], r, n)} end range` : n ? un(t[e], r, n) : void 0;
}
function rr(t, e, n, r, o) {
  const s = n === 1 ? t + e : t - e, l = Number(s.toFixed(Math.max(Nr(t), Nr(e), Nr(r))));
  return yt(l, r, o);
}
const Cd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    children: o,
    className: s,
    "aria-describedby": l,
    "aria-label": i,
    "aria-labelledby": f,
    disabled: u = !1,
    getAriaLabel: c,
    getAriaValueText: p,
    id: h,
    index: g,
    inputRef: d,
    onBlur: y,
    onFocus: b,
    onKeyDown: E,
    tabIndex: v,
    style: m,
    ...C
  } = e, {
    nonce: x
  } = id(), R = Et(h), {
    active: S,
    lastUsedThumbIndex: I,
    controlRef: M,
    disabled: A,
    validation: _,
    formatOptionsRef: L,
    handleInputChange: N,
    inset: P,
    labelId: w,
    largeStep: O,
    locale: V,
    max: k,
    min: H,
    minStepsBetweenValues: U,
    form: T,
    name: D,
    orientation: $,
    pressedInputRef: J,
    pressedThumbCenterOffsetRef: Z,
    pressedThumbIndexRef: q,
    renderBeforeHydration: B,
    setActive: Y,
    setIndicatorPosition: Q,
    state: re,
    step: ue,
    values: z
  } = bs(), se = Qn(), fe = u || A, j = z.length > 1, W = $ === "vertical", te = se === "rtl", {
    setTouched: ne,
    setFocused: ee,
    validationMode: ae
  } = mt(), G = a.useRef(null), oe = a.useRef(null), F = a.useRef(!1), K = Et(), ce = Vn(), me = j ? K : ce, Re = a.useMemo(() => ({
    inputId: me
  }), [me]), {
    ref: Ce,
    index: we
  } = Kr({
    metadata: Re
  }), Ee = j ? g ?? we : 0, he = Ee === z.length - 1, be = z[Ee], Ne = hi(be, H, k), [Se, Pe] = a.useState(), Le = vd(), Me = I >= 0 && I < z.length ? I : -1, ye = le(() => {
    const ke = M.current, Ue = G.current;
    if (!ke || !Ue)
      return;
    const qe = Ue.getBoundingClientRect(), Je = ke.getBoundingClientRect(), Nt = W ? "height" : "width", ze = Je[Nt] - qe[Nt], ut = (qe[Nt] / 2 + ze * Ne / 100) / Je[Nt] * 100, lt = Number.isFinite(ut) ? ut : void 0;
    Pe(lt), Ee === 0 ? Q((Ke) => [lt, Ke[1]]) : he && Q((Ke) => [Ke[0], lt]);
  });
  pe(() => {
    P && queueMicrotask(ye);
  }, [ye, P]), pe(() => {
    P && ye();
  }, [ye, P, Ne]), pe(() => {
    if (!P || typeof ResizeObserver != "function")
      return;
    const ke = M.current, Ue = G.current;
    if (!ke || !Ue)
      return;
    const qe = new ResizeObserver(ye);
    return qe.observe(ke), qe.observe(Ue), () => {
      qe.disconnect();
    };
  }, [M, ye, P]);
  const Ie = a.useCallback(() => {
    const ke = W ? "bottom" : "insetInlineStart", Ue = W ? "left" : "top";
    let qe;
    return j ? S === Ee ? qe = 2 : Me === Ee && (qe = 1) : S === Ee && (qe = 1), P ? {
      "--position": `${Se ?? 0}%`,
      visibility: B && Le || Se === void 0 ? "hidden" : void 0,
      position: "absolute",
      [ke]: "var(--position)",
      [Ue]: "50%",
      translate: `${(W || !te ? -1 : 1) * 50}% ${(W ? 1 : -1) * 50}%`,
      zIndex: qe
    } : Number.isFinite(Ne) ? {
      position: "absolute",
      [ke]: `${Ne}%`,
      [Ue]: "50%",
      translate: `${(W || !te ? -1 : 1) * 50}% ${(W ? 1 : -1) * 50}%`,
      zIndex: qe
    } : yn;
  }, [S, Ee, P, Le, Se, j, B, te, Me, Ne, W]);
  let xe;
  $ === "vertical" && (xe = te ? "vertical-rl" : "vertical-lr");
  const Te = typeof c == "function" ? c(Ee) : i, Ye = At({
    "aria-label": Te,
    "aria-labelledby": f ?? (Te == null ? w : void 0),
    "aria-describedby": l,
    "aria-orientation": $,
    "aria-valuenow": be,
    "aria-valuetext": typeof p == "function" ? p(un(be, V, L.current ?? void 0), be, Ee) : VE(z, Ee, L.current ?? void 0, V),
    disabled: fe,
    form: T,
    id: me,
    max: k,
    min: H,
    name: D,
    onChange(ke) {
      N(ke.currentTarget.valueAsNumber, Ee, ke);
    },
    onFocus(ke) {
      const Ue = F.current;
      F.current = !1, Y(Ee), ee(!0), Ue && ke.stopPropagation();
    },
    onBlur(ke) {
      if (F.current) {
        ke.stopPropagation();
        return;
      }
      G.current && (Y(-1), ne(!0), ee(!1), ae === "onBlur" && _.commit(gd(be, Ee, H, k, j, z)));
    },
    onKeyDown(ke) {
      if (!kE.has(ke.key))
        return;
      ll.has(ke.key) && ke.stopPropagation();
      let Ue = null;
      const qe = Ed(be, ue, H);
      switch (ke.key) {
        case wn:
          Ue = rr(qe, ke.shiftKey ? O : ue, 1, H, k);
          break;
        case Pn:
          Ue = rr(qe, ke.shiftKey ? O : ue, te ? -1 : 1, H, k);
          break;
        case hn:
          Ue = rr(qe, ke.shiftKey ? O : ue, -1, H, k);
          break;
        case Kn:
          Ue = rr(qe, ke.shiftKey ? O : ue, te ? 1 : -1, H, k);
          break;
        case Xu:
          Ue = rr(qe, O, 1, H, k);
          break;
        case Ju:
          Ue = rr(qe, O, -1, H, k);
          break;
        case Zn:
          Ue = k, j && (Ue = Number.isFinite(z[Ee + 1]) ? z[Ee + 1] - ue * U : k);
          break;
        case Jn:
          Ue = H, j && (Ue = Number.isFinite(z[Ee - 1]) ? z[Ee - 1] + ue * U : H);
          break;
      }
      if (Ue !== null) {
        const Je = ke.currentTarget;
        Ha(Je) || (F.current = !0, Je.blur(), Je.focus({
          preventScroll: !0,
          // Show `:focus-visible` after keyboard interaction, even if the
          // thumb was previously focused by a pointer.
          focusVisible: !0
        })), N(Ue, Ee, ke), ke.preventDefault();
      }
    },
    step: ue,
    style: {
      ...yn,
      // So that VoiceOver's focus indicator matches the thumb's dimensions
      width: "100%",
      height: "100%",
      writingMode: xe
    },
    tabIndex: v ?? void 0,
    type: "range",
    value: be ?? ""
  }, _.getInputValidationProps), je = Tt(oe, _.inputRef, d);
  return Be("div", e, {
    state: re,
    ref: [n, Ce, G],
    props: [{
      [_E.index]: Ee,
      children: /* @__PURE__ */ X.jsxs(a.Fragment, {
        children: [o, /* @__PURE__ */ X.jsx("input", {
          ref: je,
          ...Ye,
          suppressHydrationWarning: !0
        }), P && Le && B && // this must be rendered with the last thumb to ensure all
        // preceding thumbs are already rendered in the DOM
        he && /* @__PURE__ */ X.jsx("script", {
          nonce: x,
          dangerouslySetInnerHTML: {
            __html: AE
          },
          suppressHydrationWarning: !0
        })]
      }),
      id: R,
      onBlur: y,
      onFocus: b,
      onPointerDown(ke) {
        if (q.current = Ee, G.current != null) {
          const Ue = $ === "horizontal" ? "x" : "y", qe = yd(G.current), Je = ($ === "horizontal" ? ke.clientX : ke.clientY) - qe[Ue];
          Z.current = Je;
        }
        oe.current != null && J.current !== oe.current && (J.current = oe.current);
      },
      style: Ie(),
      suppressHydrationWarning: B || void 0
    }, C],
    stateAttributesMapping: qr
  });
});
process.env.NODE_ENV !== "production" && (Cd.displayName = "SliderThumb");
function DE(t, e, n, r, o, s) {
  const l = n === void 0 || e && r === void 0 ? "hidden" : void 0, i = t ? "bottom" : "insetInlineStart", f = t ? "height" : "width", c = {
    visibility: o && s ? "hidden" : l,
    position: t ? "absolute" : "relative",
    [t ? "width" : "height"]: "inherit"
  };
  return c["--start-position"] = `${n ?? 0}%`, e ? (c["--relative-size"] = `${(r ?? 0) - (n ?? 0)}%`, c[i] = "var(--start-position)", c[f] = "var(--relative-size)", c) : (c[i] = 0, c[f] = "var(--start-position)", c);
}
function FE(t, e, n, r) {
  const o = t ? "bottom" : "insetInlineStart", s = t ? "height" : "width", i = {
    position: t ? "absolute" : "relative",
    [t ? "width" : "height"]: "inherit"
  };
  if (!e)
    return i[o] = 0, i[s] = `${n}%`, i;
  const f = r - n;
  return i[o] = `${n}%`, i[s] = `${f}%`, i;
}
const Sd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, {
    indicatorPosition: i,
    inset: f,
    max: u,
    min: c,
    orientation: p,
    renderBeforeHydration: h,
    state: g,
    values: d
  } = bs(), y = vd(), b = p === "vertical", E = d.length > 1, v = f ? DE(b, E, i[0], i[1], h, y) : FE(b, E, hi(d[0], c, u), hi(d[d.length - 1], c, u));
  return Be("div", e, {
    state: g,
    ref: n,
    props: [{
      "data-base-ui-slider-indicator": h ? "" : void 0,
      style: v,
      suppressHydrationWarning: h || void 0
    }, l],
    stateAttributesMapping: qr
  });
});
process.env.NODE_ENV !== "production" && (Sd.displayName = "SliderIndicator");
const LE = "_Control_xg21c_3", BE = "_Track_xg21c_17", HE = "_Indicator_xg21c_25", jE = "_Thumb_xg21c_31", Oo = {
  Control: LE,
  Track: BE,
  Indicator: HE,
  Thumb: jE
};
function TR(t) {
  const e = Zt.c(51);
  let n, r;
  e[0] !== t ? ({
    innerProps: r,
    ...n
  } = t, e[0] = t, e[1] = n, e[2] = r) : (n = e[1], r = e[2]);
  let o;
  e[3] !== r ? (o = r === void 0 ? {} : r, e[3] = r, e[4] = o) : o = e[4];
  const s = o;
  let l;
  e[5] !== s.control ? (l = s.control || {}, e[5] = s.control, e[6] = l) : l = e[6];
  let i, f;
  e[7] !== l ? ({
    className: i,
    ...f
  } = l, e[7] = l, e[8] = i, e[9] = f) : (i = e[8], f = e[9]);
  let u;
  e[10] !== s.track ? (u = s.track || {}, e[10] = s.track, e[11] = u) : u = e[11];
  let c, p;
  e[12] !== u ? ({
    className: c,
    ...p
  } = u, e[12] = u, e[13] = c, e[14] = p) : (c = e[13], p = e[14]);
  let h;
  e[15] !== s.indicator ? (h = s.indicator || {}, e[15] = s.indicator, e[16] = h) : h = e[16];
  let g, d;
  e[17] !== h ? ({
    className: g,
    ...d
  } = h, e[17] = h, e[18] = g, e[19] = d) : (g = e[18], d = e[19]);
  let y;
  e[20] !== s.thumb ? (y = s.thumb || {}, e[20] = s.thumb, e[21] = y) : y = e[21];
  let b, E;
  e[22] !== y ? ({
    className: b,
    ...E
  } = y, e[22] = y, e[23] = b, e[24] = E) : (b = e[23], E = e[24]);
  let v;
  e[25] !== i ? (v = Fe(Oo.Control, i), e[25] = i, e[26] = v) : v = e[26];
  let m;
  e[27] !== c ? (m = Fe(Oo.Track, c), e[27] = c, e[28] = m) : m = e[28];
  let C;
  e[29] !== g ? (C = Fe(Oo.Indicator, g), e[29] = g, e[30] = C) : C = e[30];
  let x;
  e[31] !== d || e[32] !== C ? (x = /* @__PURE__ */ X.jsx(Sd, { className: C, ...d }), e[31] = d, e[32] = C, e[33] = x) : x = e[33];
  let R;
  e[34] !== b ? (R = Fe(Oo.Thumb, b), e[34] = b, e[35] = R) : R = e[35];
  let S;
  e[36] !== R || e[37] !== E ? (S = /* @__PURE__ */ X.jsx(Cd, { className: R, ...E }), e[36] = R, e[37] = E, e[38] = S) : S = e[38];
  let I;
  e[39] !== x || e[40] !== S || e[41] !== m || e[42] !== p ? (I = /* @__PURE__ */ X.jsxs(xd, { className: m, ...p, children: [
    x,
    S
  ] }), e[39] = x, e[40] = S, e[41] = m, e[42] = p, e[43] = I) : I = e[43];
  let M;
  e[44] !== f || e[45] !== I || e[46] !== v ? (M = /* @__PURE__ */ X.jsx(Rd, { className: v, ...f, children: I }), e[44] = f, e[45] = I, e[46] = v, e[47] = M) : M = e[47];
  let A;
  return e[48] !== n || e[49] !== M ? (A = /* @__PURE__ */ X.jsx(bd, { ...n, children: M }), e[48] = n, e[49] = M, e[50] = A) : A = e[50], A;
}
const Pl = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Pl.displayName = "SwitchRootContext");
function $E() {
  const t = a.useContext(Pl);
  if (t === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: SwitchRootContext is missing. Switch parts must be placed within <Switch.Root>." : ot(63));
  return t;
}
let ea = /* @__PURE__ */ (function(t) {
  return t.checked = "data-checked", t.unchecked = "data-unchecked", t.disabled = "data-disabled", t.readonly = "data-readonly", t.required = "data-required", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.filled = "data-filled", t.focused = "data-focused", t;
})({});
const Id = {
  ...wt,
  checked(t) {
    return t ? {
      [ea.checked]: ""
    } : {
      [ea.unchecked]: ""
    };
  }
}, Td = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    checked: r,
    className: o,
    defaultChecked: s,
    "aria-labelledby": l,
    form: i,
    id: f,
    inputRef: u,
    name: c,
    nativeButton: p = !1,
    onCheckedChange: h,
    readOnly: g = !1,
    required: d = !1,
    disabled: y = !1,
    render: b,
    uncheckedValue: E,
    value: v,
    style: m,
    ...C
  } = e, {
    clearErrors: x
  } = Qt(), {
    state: R,
    setTouched: S,
    setDirty: I,
    validityData: M,
    setFilled: A,
    setFocused: _,
    shouldValidateOnChange: L,
    validationMode: N,
    disabled: P,
    name: w,
    validation: O
  } = mt(), {
    labelId: V
  } = Pt(), k = P || y, H = w ?? c, U = le(h), T = a.useRef(null), D = Tt(T, u, O.inputRef), $ = a.useRef(null), J = Et(), Z = Vn({
    id: f,
    implicit: !1,
    controlRef: $
  }), q = p ? void 0 : Z, [B, Y] = Xt({
    controlled: r,
    default: !!s,
    name: "Switch",
    state: "checked"
  });
  _n($, {
    id: J,
    value: B
  }), pe(() => {
    T.current && A(T.current.checked);
  }, [T, A]), qt(B, () => {
    x(H), I(B !== M.initialValue), A(B), L() ? O.commit(B) : O.commit(B, !0);
  });
  const {
    getButtonProps: Q,
    buttonRef: re
  } = Lt({
    disabled: k,
    native: p
  }), ue = Ti(l, V, T, !p, q), z = {
    id: p ? Z : J,
    role: "switch",
    "aria-checked": B,
    "aria-readonly": g || void 0,
    "aria-required": d || void 0,
    "aria-labelledby": ue,
    onFocus() {
      k || _(!0);
    },
    onBlur() {
      const W = T.current;
      !W || k || (S(!0), _(!1), N === "onBlur" && O.commit(W.checked));
    },
    onClick(W) {
      g || k || (W.preventDefault(), T.current?.dispatchEvent(new PointerEvent("click", {
        bubbles: !0,
        shiftKey: W.shiftKey,
        ctrlKey: W.ctrlKey,
        altKey: W.altKey,
        metaKey: W.metaKey
      })));
    }
  }, se = a.useMemo(() => At(
    {
      checked: B,
      disabled: k,
      form: i,
      id: q,
      name: H,
      required: d,
      style: H ? Yn : yn,
      tabIndex: -1,
      type: "checkbox",
      "aria-hidden": !0,
      ref: D,
      onChange(W) {
        if (W.nativeEvent.defaultPrevented)
          return;
        if (g) {
          W.preventDefault();
          return;
        }
        const te = W.currentTarget.checked, ne = ge(ct, W.nativeEvent);
        U?.(te, ne), !ne.isCanceled && Y(te);
      },
      onFocus() {
        $.current?.focus();
      }
    },
    O.getInputValidationProps,
    // React <19 sets an empty value if `undefined` is passed explicitly
    // To avoid this, we only set the value if it's defined
    v !== void 0 ? {
      value: v
    } : et
  ), [B, k, i, D, q, H, U, g, d, Y, O, v]), fe = a.useMemo(() => ({
    ...R,
    checked: B,
    disabled: k,
    readOnly: g,
    required: d
  }), [R, B, k, g, d]), j = Be("span", e, {
    state: fe,
    ref: [n, $, re],
    props: [z, O.getValidationProps, C, Q],
    stateAttributesMapping: Id
  });
  return /* @__PURE__ */ X.jsxs(Pl.Provider, {
    value: fe,
    children: [j, !B && H && E !== void 0 && /* @__PURE__ */ X.jsx("input", {
      type: "hidden",
      form: i,
      name: H,
      value: E
    }), /* @__PURE__ */ X.jsx("input", {
      ...se,
      suppressHydrationWarning: !0
    })]
  });
});
process.env.NODE_ENV !== "production" && (Td.displayName = "SwitchRoot");
const wd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, {
    state: i
  } = mt(), f = $E(), u = {
    ...i,
    ...f
  };
  return Be("span", e, {
    state: u,
    ref: n,
    stateAttributesMapping: Id,
    props: l
  });
});
process.env.NODE_ENV !== "production" && (wd.displayName = "SwitchThumb");
const UE = "_Switch_1b2pf_3", WE = "_Thumb_1b2pf_62", ta = {
  Switch: UE,
  Thumb: WE
};
function wR(t) {
  const e = Zt.c(20);
  let n, r, o;
  e[0] !== t ? ({
    className: n,
    innerProps: r,
    ...o
  } = t, e[0] = t, e[1] = n, e[2] = r, e[3] = o) : (n = e[1], r = e[2], o = e[3]);
  let s;
  e[4] !== r?.thumb ? (s = r?.thumb || {}, e[4] = r?.thumb, e[5] = s) : s = e[5];
  let l, i;
  e[6] !== s ? ({
    className: l,
    ...i
  } = s, e[6] = s, e[7] = l, e[8] = i) : (l = e[7], i = e[8]);
  let f;
  e[9] !== n ? (f = Fe(ta.Switch, n), e[9] = n, e[10] = f) : f = e[10];
  let u;
  e[11] !== l ? (u = Fe(ta.Thumb, l), e[11] = l, e[12] = u) : u = e[12];
  let c;
  e[13] !== u || e[14] !== i ? (c = /* @__PURE__ */ X.jsx(wd, { className: u, ...i }), e[13] = u, e[14] = i, e[15] = c) : c = e[15];
  let p;
  return e[16] !== o || e[17] !== f || e[18] !== c ? (p = /* @__PURE__ */ X.jsx(Td, { className: f, ...o, children: c }), e[16] = o, e[17] = f, e[18] = c, e[19] = p) : p = e[19], p;
}
const Nl = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Nl.displayName = "ComboboxRootContext");
const Pd = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Pd.displayName = "ComboboxFloatingContext");
const Ol = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ol.displayName = "ComboboxDerivedItemsContext");
const Ml = /* @__PURE__ */ a.createContext("");
process.env.NODE_ENV !== "production" && (Ml.displayName = "ComboboxInputValueContext");
function er() {
  const t = a.useContext(Nl);
  if (!t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ComboboxRootContext is missing. Combobox parts must be placed within <Combobox.Root>." : ot(22));
  return t;
}
function Nd() {
  const t = a.useContext(Ol);
  if (!t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ComboboxItemsContext is missing. Combobox parts must be placed within <Combobox.Root>." : ot(24));
  return t;
}
function Od() {
  return a.useContext(Ml);
}
const De = {
  id: ie((t) => t.id),
  labelId: ie((t) => t.labelId),
  items: ie((t) => t.items),
  selectedValue: ie((t) => t.selectedValue),
  hasSelectionChips: ie((t) => {
    const e = t.selectedValue;
    return Array.isArray(e) && e.length > 0;
  }),
  hasSelectedValue: ie((t) => {
    const {
      selectedValue: e,
      selectionMode: n
    } = t;
    return e == null ? !1 : n === "multiple" && Array.isArray(e) ? e.length > 0 : !0;
  }),
  hasNullItemLabel: ie((t, e) => e ? Gf(t.items) : !1),
  open: ie((t) => t.open),
  mounted: ie((t) => t.mounted),
  forceMounted: ie((t) => t.forceMounted),
  inline: ie((t) => t.inline),
  activeIndex: ie((t) => t.activeIndex),
  selectedIndex: ie((t) => t.selectedIndex),
  isActive: ie((t, e) => t.activeIndex === e),
  isSelected: ie((t, e) => {
    const n = t.isItemEqualToValue, r = t.selectedValue;
    return Array.isArray(r) ? r.some((o) => Rn(e, o, n)) : Rn(e, r, n);
  }),
  transitionStatus: ie((t) => t.transitionStatus),
  popupProps: ie((t) => t.popupProps),
  inputProps: ie((t) => t.inputProps),
  triggerProps: ie((t) => t.triggerProps),
  getItemProps: ie((t) => t.getItemProps),
  positionerElement: ie((t) => t.positionerElement),
  listElement: ie((t) => t.listElement),
  triggerElement: ie((t) => t.triggerElement),
  inputElement: ie((t) => t.inputElement),
  inputGroupElement: ie((t) => t.inputGroupElement),
  popupSide: ie((t) => t.popupSide),
  openMethod: ie((t) => t.openMethod),
  inputInsidePopup: ie((t) => t.inputInsidePopup),
  selectionMode: ie((t) => t.selectionMode),
  name: ie((t) => t.name),
  form: ie((t) => t.form),
  disabled: ie((t) => t.disabled),
  readOnly: ie((t) => t.readOnly),
  required: ie((t) => t.required),
  grid: ie((t) => t.grid),
  virtualized: ie((t) => t.virtualized),
  itemToStringLabel: ie((t) => t.itemToStringLabel),
  isItemEqualToValue: ie((t) => t.isItemEqualToValue),
  modal: ie((t) => t.modal),
  autoHighlight: ie((t) => t.autoHighlight),
  submitOnItemClick: ie((t) => t.submitOnItemClick)
};
function KE(t, e) {
  return (n, r) => {
    if (n == null)
      return !1;
    const o = vt(n, e);
    return t.contains(o, r);
  };
}
function GE(t, e, n) {
  return (r, o) => {
    if (r == null)
      return !1;
    if (!o)
      return !0;
    const s = vt(r, e), l = n != null ? vt(n, e) : "";
    return l && t.contains(l, o) && l.length === o.length ? !0 : t.contains(s, o);
  };
}
const na = /* @__PURE__ */ new Map();
function YE(t = {}) {
  const e = {
    usage: "search",
    sensitivity: "base",
    ignorePunctuation: !0,
    ...t
  }, n = `${Md(t.locale)}|${JSON.stringify(e)}`, r = na.get(n);
  if (r)
    return r;
  const o = new Intl.Collator(t.locale, e), s = {
    contains(l, i, f) {
      if (!i)
        return !0;
      const u = vt(l, f);
      for (let c = 0; c <= u.length - i.length; c += 1)
        if (o.compare(u.slice(c, c + i.length), i) === 0)
          return !0;
      return !1;
    },
    startsWith(l, i, f) {
      if (!i)
        return !0;
      const u = vt(l, f);
      return o.compare(u.slice(0, i.length), i) === 0;
    },
    endsWith(l, i, f) {
      if (!i)
        return !0;
      const u = vt(l, f), c = i.length;
      return u.length >= c && o.compare(u.slice(u.length - c), i) === 0;
    }
  };
  return na.set(n, s), s;
}
function Md(t) {
  return Array.isArray(t) ? t.map((e) => Md(e)).join(",") : t == null ? "" : String(t);
}
const zE = YE, _d = /* @__PURE__ */ Symbol("none"), Hn = {
  value: _d,
  index: -1
};
function qE(t) {
  const {
    id: e,
    onOpenChangeComplete: n,
    defaultSelectedValue: r = null,
    selectedValue: o,
    onSelectedValueChange: s,
    defaultInputValue: l,
    inputValue: i,
    open: f,
    defaultOpen: u = !1,
    selectionMode: c = "none",
    onItemHighlighted: p,
    name: h,
    form: g,
    disabled: d = !1,
    readOnly: y = !1,
    required: b = !1,
    inputRef: E,
    grid: v = !1,
    items: m,
    filteredItems: C,
    filter: x,
    openOnInputClick: R = !0,
    autoHighlight: S = !1,
    keepHighlight: I = !1,
    highlightItemOnHover: M = !0,
    loopFocus: A = !0,
    itemToStringLabel: _,
    itemToStringValue: L,
    isItemEqualToValue: N = Uf,
    virtualized: P = !1,
    inline: w = !1,
    fillInputOnItemPress: O = !0,
    modal: V = !1,
    limit: k = -1,
    autoComplete: H = "list",
    formAutoComplete: U,
    locale: T,
    submitOnItemClick: D = !1
  } = t, {
    clearErrors: $
  } = Qt(), {
    setDirty: J,
    validityData: Z,
    shouldValidateOnChange: q,
    setFilled: B,
    name: Y,
    disabled: Q,
    setTouched: re,
    setFocused: ue,
    validationMode: z,
    validation: se
  } = mt(), fe = Vn({
    id: e
  }), j = zE({
    locale: T
  }), [W, te] = a.useState(!1), [ne, ee] = a.useState(null), ae = a.useRef([]), G = a.useRef([]), oe = a.useRef(null), F = a.useRef(null), K = a.useRef(null), ce = a.useRef(null), me = a.useRef(null), Re = a.useRef(!0), Ce = a.useRef(!1), we = a.useRef(null), Ee = a.useRef(null), he = a.useRef(null), be = a.useRef(Hn), Ne = a.useRef(null), Se = a.useRef([]), Pe = a.useRef([]), Le = Q || d, Me = Y ?? h, ye = c === "multiple", Ie = c === "single", xe = i !== void 0 || l !== void 0, Te = m !== void 0, Ye = C !== void 0;
  let je;
  S === "always" ? je = "always" : je = S ? "input-change" : !1;
  const [_e, ke] = Xt({
    controlled: o,
    default: ye ? r ?? zt : r,
    name: "Combobox",
    state: "selectedValue"
  }), Ue = a.useMemo(() => x === null ? () => !0 : x !== void 0 ? x : Ie && !W ? GE(j, _, _e) : KE(j, _), [x, Ie, _e, W, j, _]), qe = at(() => xe ? l ?? "" : Ie ? vt(_e, _) : "").current, [Je, Nt] = Xt({
    controlled: i,
    default: qe,
    name: "Combobox",
    state: "inputValue"
  }), [ze, kt] = Xt({
    controlled: f,
    default: u,
    name: "Combobox",
    state: "open"
  }), ut = vl(m), lt = ne ?? (Je === "" ? "" : String(Je).trim()), Ke = Ie ? vt(_e, _) : "", tt = Ie && !W && lt !== "" && Ke !== "" && Ke.length === lt.length && j.contains(Ke, lt), Rt = tt ? "" : lt, Vt = Te && Ye && tt, ht = a.useMemo(() => m ? ut ? m.flatMap((ve) => ve.items) : m : zt, [m, ut]), Ut = a.useMemo(() => {
    if (C && !Vt)
      return C;
    if (!m)
      return zt;
    if (ut) {
      const Ae = m, Xe = [];
      let nt = 0;
      for (const bt of Ae) {
        if (k > -1 && nt >= k)
          break;
        const gt = Rt === "" ? bt.items : bt.items.filter((no) => Ue(no, Rt, _));
        if (gt.length === 0)
          continue;
        const Ln = k > -1 ? k - nt : 1 / 0, Cn = gt.slice(0, Ln);
        if (Cn.length > 0) {
          const no = {
            ...bt,
            items: Cn
          };
          Xe.push(no), nt += Cn.length;
        }
      }
      return Xe;
    }
    if (Rt === "")
      return k > -1 ? ht.slice(0, k) : (
        // The cast here is done as `flatItems` is readonly.
        // valuesRef.current, a mutable ref, can be set to `flatFilteredItems`, which may
        // reference this exact readonly value, creating a mutation risk.
        // However, <Combobox.Item> can never mutate this value as the mutating effect
        // bails early when `items` is provided, and this is only ever returned
        // when `items` is provided due to the early return at the top of this hook.
        ht
      );
    const ve = [];
    for (const Ae of ht) {
      if (k > -1 && ve.length >= k)
        break;
      Ue(Ae, Rt, _) && ve.push(Ae);
    }
    return ve;
  }, [C, Vt, m, ut, Rt, k, Ue, _, ht]), Bt = a.useMemo(() => ut ? Ut.flatMap((Ae) => Ae.items) : Ut, [Ut, ut]), Ge = at(() => new tl({
    id: fe,
    labelId: void 0,
    selectedValue: _e,
    open: ze,
    filter: Ue,
    query: lt,
    items: m,
    selectionMode: c,
    listRef: ae,
    labelsRef: G,
    popupRef: oe,
    emptyRef: me,
    inputRef: F,
    startDismissRef: K,
    endDismissRef: ce,
    keyboardActiveRef: Re,
    chipsContainerRef: we,
    clearRef: Ee,
    valuesRef: Se,
    allValuesRef: Pe,
    selectionEventRef: he,
    name: Me,
    form: g,
    disabled: Le,
    readOnly: y,
    required: b,
    grid: v,
    isGrouped: ut,
    virtualized: P,
    openOnInputClick: R,
    itemToStringLabel: _,
    isItemEqualToValue: N,
    modal: V,
    autoHighlight: je,
    submitOnItemClick: D,
    hasInputValue: xe,
    mounted: !1,
    forceMounted: !1,
    transitionStatus: "idle",
    inline: w,
    activeIndex: null,
    selectedIndex: null,
    popupProps: {},
    inputProps: {},
    triggerProps: {},
    positionerElement: null,
    listElement: null,
    triggerElement: null,
    inputElement: null,
    inputGroupElement: null,
    popupSide: null,
    openMethod: null,
    inputInsidePopup: !0,
    onOpenChangeComplete: n || Ze,
    // Placeholder callbacks replaced on first render
    setOpen: Ze,
    setInputValue: Ze,
    setSelectedValue: Ze,
    setIndices: Ze,
    onItemHighlighted: Ze,
    handleSelection: Ze,
    getItemProps: () => et,
    forceMount: Ze,
    requestSubmit: Ze
  })).current, tr = c === "none" ? Je : _e, Jd = a.useMemo(() => c === "none" ? tr : Array.isArray(_e) ? _e.map((ve) => Yt(ve, L)) : Yt(_e, L), [tr, L, c, _e]), Es = le(p), Rs = le(n), Xr = de(Ge, De.activeIndex), Zd = de(Ge, De.selectedIndex), Jr = de(Ge, De.positionerElement), Bl = de(Ge, De.listElement), gr = de(Ge, De.triggerElement), Zr = de(Ge, De.inputElement), Qd = de(Ge, De.inputGroupElement), Wt = de(Ge, De.inline), vn = de(Ge, De.inputInsidePopup), ep = st(gr), {
    mounted: Hl,
    setMounted: tp,
    transitionStatus: xs
  } = kn(ze), {
    openMethod: jl,
    triggerProps: vs
  } = dl(ze), np = le(() => Jd);
  _n(vn ? ep : F, {
    id: fe,
    value: tr,
    getValue: np
  });
  const Qr = le(() => {
    m ? G.current = Bt.map((ve) => vt(ve, _)) : Ge.set("forceMounted", !0);
  }), rp = a.useRef(_e);
  pe(() => {
    _e !== rp.current && Qr();
  }, [Qr, _e]);
  const Kt = le((ve) => {
    Ge.update(ve);
    const Ae = ve.type || "none";
    if (ve.activeIndex !== void 0)
      if (ve.activeIndex === null)
        be.current !== Hn && (be.current = Hn, Es(void 0, Ht(Ae, void 0, {
          index: -1
        })));
      else {
        const Xe = Se.current[ve.activeIndex];
        be.current = {
          value: Xe,
          index: ve.activeIndex
        }, Es(Xe, Ht(Ae, void 0, {
          index: ve.activeIndex
        }));
      }
  }), tn = le((ve, Ae) => {
    if (Ce.current = Ae.reason === Dt, t.onInputValueChange?.(ve, Ae), !Ae.isCanceled) {
      if (Ae.reason === on) {
        const Xe = Ae.event, nt = Xe.inputType;
        if (Xe.type === "compositionend" || nt != null && nt !== "" && nt !== "insertReplacementText") {
          const gt = ve.trim() !== "";
          gt && te(!0), Ne.current = {
            hasQuery: gt
          }, gt && je && Ge.state.activeIndex == null && Ge.set("activeIndex", 0);
        }
      }
      Nt(ve);
    }
  }), hr = le((ve, Ae) => {
    if (ze !== ve && (Ae.reason === "escape-key" && Te && Bt.length === 0 && !Ge.state.emptyRef.current && Ae.allowPropagation(), t.onOpenChange?.(ve, Ae), !Ae.isCanceled && (!ve && W && (Ie ? (Wt || ee(lt), lt === "" && te(!1)) : ye && (Wt || vn ? Kt({
      activeIndex: null
    }) : ee(lt), tn("", ge(Dt, Ae.event)))), kt(ve), !ve && vn && (Ae.reason === On || Ae.reason === Br) && (re(!0), ue(!1), z === "onBlur")))) {
      const Xe = c === "none" ? Je : _e;
      se.commit(Xe);
    }
  }), eo = le((ve, Ae) => {
    if (s?.(ve, Ae), Ae.isCanceled)
      return;
    ke(ve), (c === "none" && oe.current && O || Ie && !Ge.state.inputInsidePopup) && tn(vt(ve, _), ge(Ae.reason, Ae.event)), Ie && ve != null && Ae.reason !== on && W && !Wt && ee(lt);
  }), op = le((ve, Ae) => {
    let Xe = Ae;
    if (Xe === void 0) {
      if (Xr === null)
        return;
      Xe = Se.current[Xr];
    }
    const nt = pt(ve), bt = he.current ?? ve;
    he.current = null;
    const gt = ge(lr, bt), Ln = nt?.closest("a")?.getAttribute("href");
    if (Ln) {
      Ln.startsWith("#") && hr(!1, gt);
      return;
    }
    if (ye) {
      const Cn = Array.isArray(_e) ? _e : [], hp = Wf(Cn, Xe, Ge.state.isItemEqualToValue) ? Kf(Cn, Xe, Ge.state.isItemEqualToValue) : [...Cn, Xe];
      if (eo(hp, gt), !(F.current ? F.current.value.trim() !== "" : !1))
        return;
      Ge.state.inputInsidePopup ? tn("", ge(Dt, gt.event)) : hr(!1, gt);
    } else
      eo(Xe, gt), hr(!1, gt);
  }), Cs = le(() => {
    if (!Ge.state.submitOnItemClick)
      return;
    const ve = se.inputRef.current?.form ?? Ge.state.inputElement?.form;
    ve && typeof ve.requestSubmit == "function" && ve.requestSubmit();
  }), Ss = le(() => {
    if (tp(!1), Rs?.(!1), te(!1), ee(null), Kt(c === "none" ? {
      activeIndex: null,
      selectedIndex: null
    } : {
      activeIndex: null
    }), ye && F.current && F.current.value !== "" && !Ce.current && tn("", ge(Dt)), Ie)
      if (Ge.state.inputInsidePopup)
        F.current && F.current.value !== "" && tn("", ge(Dt));
      else {
        const ve = vt(_e, _);
        F.current && F.current.value !== ve && tn(ve, ge(ve === "" ? Dt : ct));
      }
  }), sp = a.useMemo(() => Wt && Jr ? {
    current: Jr.closest('[role="dialog"]')
  } : oe, [Wt, Jr]);
  en({
    enabled: !t.actionsRef,
    open: ze,
    ref: sp,
    onComplete() {
      ze || Ss();
    }
  }), a.useImperativeHandle(t.actionsRef, () => ({
    unmount: Ss
  }), [Ss]), pe(function() {
    if (ze || c === "none")
      return;
    const Ae = m ? ht : Pe.current;
    if (ye) {
      const Xe = Array.isArray(_e) ? _e : [], nt = Xe[Xe.length - 1], bt = Nn(Ae, nt, N);
      Kt({
        selectedIndex: bt === -1 ? null : bt
      });
    } else {
      const Xe = Nn(Ae, _e, N);
      Kt({
        selectedIndex: Xe === -1 ? null : Xe
      });
    }
  }, [ze, _e, m, c, ht, ye, N, Kt]), pe(() => {
    m && (Se.current = Bt, ae.current.length = Bt.length);
  }, [m, Bt]), pe(() => {
    const ve = Ne.current;
    if (ve && (ve.hasQuery ? je && Ge.set("activeIndex", 0) : je === "always" && Ge.set("activeIndex", 0), Ne.current = null), !ze && !Wt)
      return;
    const Xe = Te || Ye ? Bt : Se.current, nt = Ge.state.activeIndex;
    if (nt == null) {
      if (je === "always" && Xe.length > 0) {
        Ge.set("activeIndex", 0);
        return;
      }
      be.current !== Hn && (be.current = Hn, Ge.state.onItemHighlighted(void 0, Ht(ct, void 0, {
        index: -1
      })));
      return;
    }
    if (nt >= Xe.length) {
      be.current !== Hn && (be.current = Hn, Ge.state.onItemHighlighted(void 0, Ht(ct, void 0, {
        index: -1
      }))), Ge.set("activeIndex", null);
      return;
    }
    const bt = Xe[nt], gt = be.current.value, Ln = gt !== _d && Rn(bt, gt, Ge.state.isItemEqualToValue);
    (be.current.index !== nt || !Ln) && (be.current = {
      value: bt,
      index: nt
    }, Ge.state.onItemHighlighted(bt, Ht(ct, void 0, {
      index: nt
    })));
  }, [Xr, je, Ye, Te, Bt, Wt, ze, Ge]), pe(() => {
    if (c === "none") {
      B(String(Je) !== "");
      return;
    }
    B(ye ? Array.isArray(_e) && _e.length > 0 : _e != null);
  }, [B, c, Je, _e, ye]), a.useEffect(() => {
    Te && je && Bt.length === 0 && Kt({
      activeIndex: null
    });
  }, [Te, je, Bt.length, Kt]), qt(lt, () => {
    !ze || lt === "" || lt === String(qe) || te(!0);
  }), qt(_e, () => {
    if (c !== "none" && ($(Me), J(_e !== Z.initialValue), q() ? se.commit(_e) : se.commit(_e, !0), Ie && !xe && !vn)) {
      const ve = vt(_e, _);
      Je !== ve && tn(ve, ge(ct));
    }
  }), qt(Je, () => {
    c === "none" && ($(Me), J(Je !== Z.initialValue), q() ? se.commit(Je) : se.commit(Je, !0));
  }), qt(m, () => {
    if (!Ie || xe || vn || W)
      return;
    const ve = vt(_e, _);
    Je !== ve && tn(ve, ge(ct));
  });
  const to = ol({
    open: Wt ? !0 : ze,
    onOpenChange: hr,
    elements: {
      reference: vn ? gr : Zr,
      floating: Jr
    }
  });
  let Is, Ts;
  Wt || (Is = v ? "grid" : "listbox", Ts = ze ? "true" : "false");
  const ip = a.useMemo(() => {
    const ve = Zr?.tagName === "INPUT", Ae = Zr == null || ve, Xe = Ae || ze, nt = Ae ? {
      autoComplete: "off",
      spellCheck: "false",
      autoCorrect: "off",
      autoCapitalize: "none"
    } : {};
    return Xe && (nt.role = "combobox", nt["aria-expanded"] = Ts, nt["aria-haspopup"] = Is, nt["aria-controls"] = ze ? Bl?.id : void 0, nt["aria-autocomplete"] = H), {
      reference: nt,
      floating: {
        role: "presentation"
      }
    };
  }, [Zr, ze, Ts, Is, Bl?.id, H]), lp = Xi(to, {
    enabled: !y && !Le && R,
    event: "mousedown-only",
    toggle: !1,
    // Apply a small delay for touch to let mobile viewport/keyboard positioning settle.
    // This avoids top-bottom flip flickers if the preferred position is "top" when first tapping.
    touchOpenDelay: vn ? 0 : 100,
    reason: va
  }), cp = us(to, {
    enabled: !y && !Le && !Wt,
    outsidePressEvent: {
      mouse: "sloppy",
      // The visual viewport (affected by the mobile software keyboard) can be
      // somewhat small. The user may want to scroll the screen to see more of
      // the popup.
      touch: "intentional"
    },
    // Without a popup, let the Escape key bubble the event up to other popups' handlers.
    bubbles: Wt ? !0 : void 0,
    outsidePress(ve) {
      const Ae = pt(ve);
      return !Oe(gr, Ae) && !Oe(Ee.current, Ae) && !Oe(we.current, Ae) && !Oe(Qd, Ae);
    }
  }), ap = il(to, {
    enabled: !y && !Le,
    id: fe,
    listRef: ae,
    activeIndex: Xr,
    selectedIndex: Zd,
    virtual: !0,
    loopFocus: A,
    allowEscape: A && !je,
    focusItemOnOpen: W || c === "none" && !je ? !1 : "auto",
    focusItemOnHover: M,
    resetOnPointerLeave: !I,
    // `cols` > 1 enables grid navigation.
    // Since <Combobox.Row> infers column sizes (and is required when building a grid),
    // it works correctly even with a value of `2`.
    // Floating UI tests don't require `role="row"` wrappers, so retains the number API.
    cols: v ? 2 : 1,
    orientation: v ? "horizontal" : void 0,
    disabledIndices: zt,
    onNavigate(ve, Ae) {
      !Ae && !ze || xs === "ending" || Kt(Ae ? {
        activeIndex: ve,
        type: Re.current ? "keyboard" : "pointer"
      } : {
        activeIndex: ve
      });
    }
  }), {
    getReferenceProps: ws,
    getFloatingProps: Ps,
    getItemProps: Ns
  } = Gr([ip, lp, cp, ap]);
  gs(() => {
    Ge.update({
      inline: w,
      popupProps: Ps(),
      inputProps: ws(),
      triggerProps: vs,
      getItemProps: Ns,
      setOpen: hr,
      setInputValue: tn,
      setSelectedValue: eo,
      setIndices: Kt,
      onItemHighlighted: Es,
      handleSelection: op,
      forceMount: Qr,
      requestSubmit: Cs
    });
  }), pe(() => {
    Ge.update({
      id: fe,
      selectedValue: _e,
      open: ze,
      mounted: Hl,
      transitionStatus: xs,
      items: m,
      inline: w,
      popupProps: Ps(),
      inputProps: ws(),
      triggerProps: vs,
      openMethod: jl,
      getItemProps: Ns,
      selectionMode: c,
      name: Me,
      form: g,
      disabled: Le,
      readOnly: y,
      required: b,
      grid: v,
      isGrouped: ut,
      virtualized: P,
      onOpenChangeComplete: Rs,
      openOnInputClick: R,
      itemToStringLabel: _,
      modal: V,
      autoHighlight: je,
      isItemEqualToValue: N,
      submitOnItemClick: D,
      hasInputValue: xe,
      requestSubmit: Cs
    });
  }, [Ge, fe, _e, ze, Hl, xs, m, Ps, ws, Ns, jl, vs, c, Me, Le, y, b, se, v, ut, P, Rs, R, _, V, N, D, xe, w, Cs, je, g]);
  const up = Tt(E, se.inputRef), fp = a.useMemo(() => ({
    query: lt,
    hasItems: Te,
    filteredItems: Ut,
    flatFilteredItems: Bt
  }), [lt, Te, Ut, Bt]), dp = a.useMemo(() => Array.isArray(tr) ? "" : Yt(tr, L), [tr, L]), pp = ye && Array.isArray(_e) && _e.length > 0, Os = ye || c === "none" ? void 0 : Me, mp = a.useMemo(() => !ye || !Array.isArray(_e) || !Me ? null : _e.map((ve) => {
    const Ae = Yt(ve, L);
    return /* @__PURE__ */ X.jsx("input", {
      type: "hidden",
      form: g,
      name: Me,
      value: Ae
    }, Ae);
  }), [ye, _e, g, Me, L]), gp = /* @__PURE__ */ X.jsxs(a.Fragment, {
    children: [t.children, /* @__PURE__ */ X.jsx("input", {
      ...se.getInputValidationProps({
        // Move focus when the hidden input is focused.
        onFocus() {
          if (vn) {
            gr?.focus();
            return;
          }
          (F.current || gr)?.focus();
        },
        // Handle browser autofill.
        onChange(ve) {
          if (ve.nativeEvent.defaultPrevented)
            return;
          const Ae = ve.currentTarget.value, Xe = ge(ct, ve.nativeEvent);
          function nt() {
            if (ye)
              return;
            if (c === "none") {
              J(Ae !== Z.initialValue), tn(Ae, Xe), q() && se.commit(Ae);
              return;
            }
            const bt = Se.current.find((gt) => Yt(gt, L).toLowerCase() === Ae.toLowerCase() || vt(gt, _).toLowerCase() === Ae.toLowerCase());
            bt != null && (J(bt !== Z.initialValue), eo?.(bt, Xe), q() && se.commit(bt));
          }
          m ? nt() : (Qr(), queueMicrotask(nt));
        }
      }),
      id: fe && Os == null ? `${fe}-hidden-input` : void 0,
      form: g,
      name: Os,
      autoComplete: U,
      disabled: Le,
      required: b && !pp,
      readOnly: y,
      value: dp,
      ref: up,
      style: Os ? Yn : yn,
      tabIndex: -1,
      "aria-hidden": !0,
      suppressHydrationWarning: !0
    }), mp]
  });
  return /* @__PURE__ */ X.jsx(Nl.Provider, {
    value: Ge,
    children: /* @__PURE__ */ X.jsx(Pd.Provider, {
      value: to,
      children: /* @__PURE__ */ X.jsx(Ol.Provider, {
        value: fp,
        children: /* @__PURE__ */ X.jsx(Ml.Provider, {
          value: Je,
          children: gp
        })
      })
    })
  });
}
function XE(t) {
  const {
    multiple: e = !1,
    defaultValue: n,
    value: r,
    onValueChange: o,
    autoComplete: s,
    ...l
  } = t;
  return /* @__PURE__ */ X.jsx(qE, {
    ...l,
    selectionMode: e ? "multiple" : "single",
    selectedValue: r,
    defaultSelectedValue: n,
    onSelectedValueChange: o,
    formAutoComplete: s
  });
}
const Ad = {
  ...Ko,
  ...wt,
  popupSide: (t) => t ? {
    "data-popup-side": t
  } : null,
  listEmpty: (t) => t ? {
    "data-list-empty": ""
  } : null
}, _l = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (_l.displayName = "ComboboxChipsContext");
function kd() {
  return a.useContext(_l);
}
const Vd = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Vd.displayName = "ComboboxPositionerContext");
function JE(t) {
  return a.useContext(Vd);
}
const Dd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const r = er(), {
    buttonRef: o,
    getButtonProps: s
  } = Lt({
    native: !1
  }), l = Tt(n, o), i = le((u) => {
    r.state.setOpen(!1, ge(Sm, u.nativeEvent, u.currentTarget));
  }), f = s({
    onClick: i
  });
  return /* @__PURE__ */ X.jsx("span", {
    ref: l,
    ...f,
    "aria-label": "Dismiss",
    tabIndex: void 0,
    style: Yn
  });
});
process.env.NODE_ENV !== "production" && (Dd.displayName = "ComboboxInternalDismissButton");
const Fd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    disabled: s = !1,
    id: l,
    style: i,
    ...f
  } = e, {
    state: u,
    disabled: c,
    setTouched: p,
    setFocused: h,
    validationMode: g,
    validation: d
  } = mt(), {
    labelId: y
  } = Pt(), b = kd(), v = !!JE(), m = er(), {
    filteredItems: C
  } = Nd(), x = Od(), R = Qn(), S = de(m, De.required), I = de(m, De.disabled), M = de(m, De.readOnly), A = de(m, De.name), _ = de(m, De.form), L = de(m, De.selectionMode), N = de(m, De.autoHighlight), P = de(m, De.inputProps), w = de(m, De.triggerProps), O = de(m, De.open), V = de(m, De.mounted), k = de(m, De.selectedValue), H = de(m, De.popupSide), U = de(m, De.positionerElement), T = de(m, De.id), D = de(m, De.inline), $ = de(m, De.modal), J = !!N, Z = V && U ? H : null, q = c || I || s, B = C.length === 0, Y = v || D, Q = !Y || $, re = Et(l ?? (Y ? void 0 : T)), ue = Cl(y, void 0), z = v ? sr : u, [se, fe] = a.useState(null), j = a.useRef(!1), W = a.useRef(null), te = a.useRef(!1), ne = le((F) => {
    const K = v || m.state.inline;
    K && !m.state.hasInputValue && m.state.setInputValue("", ge(ct)), m.update({
      inputElement: F,
      inputInsidePopup: K
    });
  }), ee = v || !d ? f : d.getValidationProps(f), ae = {
    ...z,
    open: O,
    disabled: q,
    readOnly: M,
    popupSide: Z,
    listEmpty: B
  };
  function G(F) {
    if (!b)
      return;
    let K;
    const {
      highlightedChipIndex: ce
    } = b, me = b.chipsRef.current.length;
    if (ce !== void 0) {
      if (F.key === "ArrowLeft")
        F.preventDefault(), ce > 0 ? K = ce - 1 : K = void 0;
      else if (F.key === "ArrowRight")
        F.preventDefault(), ce < me - 1 ? K = ce + 1 : K = void 0;
      else if (F.key === "Backspace" || F.key === "Delete") {
        F.preventDefault();
        const Re = ce >= k.length - 1 ? k.length - 2 : ce;
        K = Re >= 0 ? Re : void 0, m.state.setIndices({
          activeIndex: null,
          selectedIndex: null,
          type: "keyboard"
        });
      }
      return K;
    }
    return F.key === "ArrowLeft" && (F.currentTarget.selectionStart ?? 0) === 0 && k.length > 0 ? (F.preventDefault(), K = me > 0 ? me - 1 : void 0) : F.key === "Backspace" && F.currentTarget.value === "" && k.length > 0 && (m.state.setIndices({
      activeIndex: null,
      selectedIndex: null,
      type: "keyboard"
    }), F.preventDefault()), K;
  }
  const oe = Be("input", e, {
    state: ae,
    ref: [n, m.state.inputRef, ne],
    props: [P, w, {
      type: "text",
      value: e.value ?? se ?? x,
      "aria-readonly": M || void 0,
      "aria-required": S || void 0,
      "aria-labelledby": ue,
      disabled: q,
      readOnly: M,
      required: L === "none" ? S : void 0,
      form: _,
      ...L === "none" && A && {
        name: A
      },
      id: re,
      onFocus() {
        if (h(!0), !D || !te.current)
          return;
        te.current = !1;
        const F = W.current;
        F == null || // `valuesRef` can be sparse, so guard against restoring a removed slot.
        !Object.hasOwn(m.state.valuesRef.current, F) || m.state.setIndices({
          activeIndex: F
        });
      },
      onBlur() {
        p(!0), h(!1);
        const F = m.state.activeIndex;
        if (D && F !== null && N !== "always" && (W.current = F, te.current = !0, m.state.setIndices({
          activeIndex: null
        })), g === "onBlur") {
          const K = L === "none" ? x : k;
          d.commit(K);
        }
      },
      onCompositionStart(F) {
        Bo || (j.current = !0, fe(F.currentTarget.value));
      },
      onCompositionEnd(F) {
        j.current = !1;
        const K = F.currentTarget.value;
        fe(null), m.state.setInputValue(K, ge(on, F.nativeEvent));
      },
      onChange(F) {
        const K = F.nativeEvent.inputType, ce = !K || K === "insertReplacementText", me = j.current || !ce;
        if (j.current) {
          const Ee = F.currentTarget.value;
          fe(Ee), Ee === "" && !m.state.openOnInputClick && !m.state.inputInsidePopup && m.state.setOpen(!1, ge(Dt, F.nativeEvent));
          const he = Ee.trim(), be = J && he !== "";
          !M && !q && he && me && (m.state.setOpen(!0, ge(on, F.nativeEvent)), J || m.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type: m.state.keyboardActiveRef.current ? "keyboard" : "pointer"
          })), O && m.state.activeIndex !== null && !be && m.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type: m.state.keyboardActiveRef.current ? "keyboard" : "pointer"
          });
          return;
        }
        m.state.setInputValue(F.currentTarget.value, ge(on, F.nativeEvent));
        const Re = F.currentTarget.value === "", Ce = ge(Dt, F.nativeEvent);
        Re && !m.state.inputInsidePopup && (L === "single" && m.state.setSelectedValue(null, Ce), m.state.openOnInputClick || m.state.setOpen(!1, Ce));
        const we = F.currentTarget.value.trim();
        !M && !q && we && me && (m.state.setOpen(!0, ge(on, F.nativeEvent)), J || m.state.setIndices({
          activeIndex: null,
          selectedIndex: null,
          type: m.state.keyboardActiveRef.current ? "keyboard" : "pointer"
        })), O && m.state.activeIndex !== null && !J && m.state.setIndices({
          activeIndex: null,
          selectedIndex: null,
          type: m.state.keyboardActiveRef.current ? "keyboard" : "pointer"
        });
      },
      onKeyDown(F) {
        if (q || M || F.ctrlKey || F.shiftKey || F.altKey || F.metaKey)
          return;
        m.state.keyboardActiveRef.current = !0;
        const K = F.currentTarget, ce = K.scrollWidth - K.clientWidth, me = R === "rtl";
        if (F.key === "Home") {
          ft(F);
          const we = ic && me ? K.value.length : 0;
          K.setSelectionRange(we, we), K.scrollLeft = 0;
          return;
        }
        if (F.key === "End") {
          ft(F);
          const we = ic && me ? 0 : K.value.length;
          K.setSelectionRange(we, we), K.scrollLeft = me ? -ce : ce;
          return;
        }
        if (!V && F.key === "Escape") {
          const we = L === "multiple" && Array.isArray(k) ? k.length === 0 : k === null, Ee = ge(Hr, F.nativeEvent), he = L === "multiple" ? [] : null;
          m.state.setInputValue("", Ee), m.state.setSelectedValue(he, Ee), !we && !m.state.inline && !Ee.isPropagationAllowed && F.stopPropagation();
          return;
        }
        if (b && F.key === "Backspace" && K.value === "" && b.highlightedChipIndex === void 0 && Array.isArray(k) && k.length > 0) {
          const we = b.chipsRef.current.length, Ee = we > 0 ? we - 1 : k.length - 1, he = k.filter((be, Ne) => Ne !== Ee);
          m.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type: m.state.keyboardActiveRef.current ? "keyboard" : "pointer"
          }), m.state.setSelectedValue(he, ge(ct, F.nativeEvent));
          return;
        }
        const Re = b?.highlightedChipIndex !== void 0, Ce = G(F);
        if (b?.setHighlightedChipIndex(Ce), Ce !== void 0 ? b?.chipsRef.current[Ce]?.focus() : Re && m.state.inputRef.current?.focus(), F.which !== 229 && F.key === "Enter" && O) {
          const we = m.state.activeIndex, Ee = F.nativeEvent;
          if (we === null) {
            if (D)
              return;
            m.state.setOpen(!1, ge(ct, Ee));
            return;
          }
          ft(F);
          const he = m.state.listRef.current[we];
          he && (m.state.selectionEventRef.current = Ee, he.click(), m.state.selectionEventRef.current = null);
        }
      },
      onPointerMove() {
        m.state.keyboardActiveRef.current = !1;
      },
      onPointerDown() {
        m.state.keyboardActiveRef.current = !1;
      }
    }, ee],
    stateAttributesMapping: Ad
  });
  return /* @__PURE__ */ X.jsxs(a.Fragment, {
    children: [O && Q && /* @__PURE__ */ X.jsx(Dd, {
      ref: m.state.startDismissRef
    }), oe]
  });
});
process.env.NODE_ENV !== "production" && (Fd.displayName = "ComboboxInput");
function Ld(t, e, n, r, o) {
  if (t.baseUIHandlerPrevented || r)
    return;
  const s = pt(t.nativeEvent), l = We(s) ? s : null;
  l !== t.currentTarget && (o?.(l) || Ba(l)) || (t.preventDefault(), !n && (e.state.inputRef.current?.focus(), e.state.openOnInputClick && e.state.setOpen(!0, ge(va, t.nativeEvent))));
}
const Bd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, {
    state: i
  } = mt(), f = er(), {
    filteredItems: u
  } = Nd(), c = de(f, De.open), p = de(f, De.mounted), h = de(f, De.popupSide), g = de(f, De.positionerElement), d = de(f, De.disabled), y = de(f, De.readOnly), b = de(f, De.hasSelectedValue), E = de(f, De.selectionMode), v = p && g ? h : null, m = d, C = u.length === 0, R = {
    ...i,
    open: c,
    disabled: m,
    readOnly: y,
    popupSide: v,
    listEmpty: C,
    placeholder: E === "none" ? !1 : !b
  }, S = le((I) => {
    f.set("inputGroupElement", I);
  });
  return Be("div", e, {
    ref: [n, S],
    props: [{
      role: "group",
      onMouseDown(I) {
        Ld(I, f, m, y, (M) => Oe(f.state.chipsContainerRef.current, M));
      }
    }, l],
    state: R,
    stateAttributesMapping: Ad
  });
});
process.env.NODE_ENV !== "production" && (Bd.displayName = "ComboboxInputGroup");
const Hd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, i = er(), f = de(i, De.open), u = de(i, De.hasSelectionChips), [c, p] = a.useState(void 0);
  f && c !== void 0 && p(void 0);
  const h = a.useRef([]), g = Be("div", e, {
    ref: [n, i.state.chipsContainerRef],
    // NVDA enters browse mode instead of staying in focus mode when navigating with
    // arrow keys inside a container unless it has a toolbar role.
    props: [u ? {
      role: "toolbar"
    } : et, {
      onMouseDown(y) {
        Ld(y, i, i.state.disabled, i.state.readOnly);
      }
    }, l]
  }), d = a.useMemo(() => ({
    highlightedChipIndex: c,
    setHighlightedChipIndex: p,
    chipsRef: h
  }), [c, p, h]);
  return /* @__PURE__ */ X.jsx(_l.Provider, {
    value: d,
    children: /* @__PURE__ */ X.jsx(Yr, {
      elementsRef: h,
      children: g
    })
  });
});
process.env.NODE_ENV !== "production" && (Hd.displayName = "ComboboxChips");
const Al = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Al.displayName = "ComboboxChipContext");
function ZE() {
  const t = a.useContext(Al);
  if (!t)
    throw new Error(process.env.NODE_ENV !== "production" ? "useComboboxChipContext must be used within a ComboboxChip" : ot(17));
  return t;
}
const jd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    style: s,
    ...l
  } = e, i = er(), {
    setHighlightedChipIndex: f,
    chipsRef: u
  } = kd(), c = de(i, De.disabled), p = de(i, De.readOnly), h = de(i, De.selectedValue), {
    ref: g,
    index: d
  } = Kr();
  function y(m) {
    let C = d;
    if (m.key === "ArrowLeft")
      m.preventDefault(), d > 0 ? C = d - 1 : C = void 0;
    else if (m.key === "ArrowRight")
      m.preventDefault(), d < u.current.length - 1 ? C = d + 1 : C = void 0;
    else if (m.key === "Backspace" || m.key === "Delete") {
      const x = d >= h.length - 1 ? h.length - 2 : d;
      C = x >= 0 ? x : void 0, ft(m), i.state.setIndices({
        activeIndex: null,
        selectedIndex: null,
        type: "keyboard"
      }), i.state.setSelectedValue(h.filter((R, S) => S !== d), ge(ct, m.nativeEvent));
    } else m.key === "Enter" || m.key === " " ? (ft(m), C = void 0) : m.key === "ArrowDown" || m.key === "ArrowUp" ? (ft(m), i.state.setOpen(!0, ge(Pr, m.nativeEvent)), C = void 0) : (
      // Check for printable characters (letters, numbers, symbols)
      m.key.length === 1 && !m.ctrlKey && !m.metaKey && !m.altKey && (C = void 0)
    );
    return C;
  }
  const E = Be("div", e, {
    ref: [n, g],
    state: {
      disabled: c
    },
    props: [{
      tabIndex: -1,
      "aria-disabled": c || void 0,
      "aria-readonly": p || void 0,
      onKeyDown(m) {
        if (c || p)
          return;
        const C = y(m);
        Jt.flushSync(() => {
          f(C);
        }), C === void 0 ? i.state.inputRef.current?.focus() : u.current[C]?.focus();
      }
    }, l]
  }), v = a.useMemo(() => ({
    index: d
  }), [d]);
  return /* @__PURE__ */ X.jsx(Al.Provider, {
    value: v,
    children: E
  });
});
process.env.NODE_ENV !== "production" && (jd.displayName = "ComboboxChip");
const $d = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    disabled: s = !1,
    nativeButton: l = !0,
    style: i,
    ...f
  } = e, u = er(), {
    index: c
  } = ZE(), p = de(u, De.disabled), h = de(u, De.readOnly), g = de(u, De.selectedValue), d = de(u, De.isItemEqualToValue), y = p || s, {
    buttonRef: b,
    getButtonProps: E
  } = Lt({
    native: l,
    disabled: y || h,
    focusableWhenDisabled: !0
  }), v = {
    disabled: y
  };
  function m(R) {
    const S = u.state.activeIndex;
    if (S == null)
      return;
    const I = Nn(u.state.valuesRef.current, R, d);
    I !== -1 && S === I && u.state.setIndices({
      activeIndex: null,
      type: u.state.keyboardActiveRef.current ? "keyboard" : "pointer"
    });
  }
  function C(R) {
    const S = ge(Im, R.nativeEvent), I = g[c];
    return m(I), u.state.setSelectedValue(g.filter((M, A) => A !== c), S), u.state.inputRef.current?.focus(), S;
  }
  return Be("button", e, {
    ref: [n, b],
    state: v,
    props: [{
      tabIndex: -1,
      onMouseDown(R) {
        R.preventDefault();
      },
      onClick(R) {
        if (y || h)
          return;
        C(R).isPropagationAllowed || R.stopPropagation();
      },
      onKeyDown(R) {
        y || h || (R.key === "Enter" || R.key === " ") && (C(R).isPropagationAllowed || ft(R));
      }
    }, f, E]
  });
});
process.env.NODE_ENV !== "production" && ($d.displayName = "ComboboxChipRemove");
const QE = {
  ...An,
  ...ji
}, Ud = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    disabled: s = !1,
    nativeButton: l = !0,
    keepMounted: i = !1,
    style: f,
    ...u
  } = e, {
    disabled: c
  } = mt(), p = er(), h = de(p, De.selectionMode), g = de(p, De.disabled), d = de(p, De.readOnly), y = de(p, De.open), b = de(p, De.selectedValue), E = de(p, De.hasSelectionChips), v = Od();
  let m = !1;
  h === "none" ? m = v !== "" : h === "single" ? m = b != null : m = E;
  const C = c || g || s, {
    buttonRef: x,
    getButtonProps: R
  } = Lt({
    native: l,
    disabled: C
  }), {
    mounted: S,
    transitionStatus: I,
    setMounted: M
  } = kn(m), A = {
    disabled: C,
    open: y,
    transitionStatus: I
  };
  en({
    open: m,
    ref: p.state.clearRef,
    onComplete() {
      m || M(!1);
    }
  });
  const _ = Be("button", e, {
    state: A,
    ref: [n, x, p.state.clearRef],
    props: [{
      tabIndex: -1,
      children: "x",
      // Avoid stealing focus from the input.
      onMouseDown(N) {
        N.preventDefault();
      },
      onClick(N) {
        if (C || d)
          return;
        const P = p.state.keyboardActiveRef;
        p.state.setInputValue("", ge(nc, N.nativeEvent)), h !== "none" ? (p.state.setSelectedValue(Array.isArray(b) ? [] : null, ge(nc, N.nativeEvent)), p.state.setIndices({
          activeIndex: null,
          selectedIndex: null,
          type: P.current ? "keyboard" : "pointer"
        })) : p.state.setIndices({
          activeIndex: null,
          type: P.current ? "keyboard" : "pointer"
        }), p.state.inputRef.current?.focus();
      }
    }, u, R],
    stateAttributesMapping: QE
  });
  return i || S ? _ : null;
});
process.env.NODE_ENV !== "production" && (Ud.displayName = "ComboboxClear");
const eR = "_wrapper_1ey5z_1", tR = "_inputGroup_1ey5z_7", nR = "_chips_1ey5z_23", rR = "_chip_1ey5z_23", oR = "_chipRemove_1ey5z_46", sR = "_input_1ey5z_7", iR = "_clear_1ey5z_60", jn = {
  wrapper: eR,
  inputGroup: tR,
  chips: nR,
  chip: rR,
  chipRemove: oR,
  input: sR,
  clear: iR
};
function PR(t) {
  const e = Zt.c(101);
  let n, r, o, s, l, i, f;
  e[0] !== t ? ({
    innerProps: l,
    defaultState: i,
    defaultInput: f,
    addButton: n,
    onChangeValue: r,
    onValueChange: o,
    ...s
  } = t, e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = s, e[5] = l, e[6] = i, e[7] = f) : (n = e[1], r = e[2], o = e[3], s = e[4], l = e[5], i = e[6], f = e[7]);
  let u;
  e[8] !== l ? (u = l === void 0 ? {} : l, e[8] = l, e[9] = u) : u = e[9];
  const c = u;
  let p;
  e[10] !== i ? (p = i === void 0 ? [] : i, e[10] = i, e[11] = p) : p = e[11];
  const h = p, g = f === void 0 ? "" : f;
  let d;
  e[12] !== c.inputGroup ? (d = c.inputGroup || {}, e[12] = c.inputGroup, e[13] = d) : d = e[13];
  let y, b;
  e[14] !== d ? ({
    className: y,
    ...b
  } = d, e[14] = d, e[15] = y, e[16] = b) : (y = e[15], b = e[16]);
  let E;
  e[17] !== c.chips ? (E = c.chips || {}, e[17] = c.chips, e[18] = E) : E = e[18];
  let v, m;
  e[19] !== E ? ({
    className: v,
    ...m
  } = E, e[19] = E, e[20] = v, e[21] = m) : (v = e[20], m = e[21]);
  let C;
  e[22] !== c.chip ? (C = c.chip || {}, e[22] = c.chip, e[23] = C) : C = e[23];
  let x, R;
  e[24] !== C ? ({
    className: x,
    ...R
  } = C, e[24] = C, e[25] = x, e[26] = R) : (x = e[25], R = e[26]);
  let S;
  e[27] !== c.input ? (S = c.input || {}, e[27] = c.input, e[28] = S) : S = e[28];
  let I, M;
  e[29] !== S ? ({
    className: I,
    ...M
  } = S, e[29] = S, e[30] = I, e[31] = M) : (I = e[30], M = e[31]);
  let A;
  e[32] !== c.chipRemove ? (A = c.chipRemove || {}, e[32] = c.chipRemove, e[33] = A) : A = e[33];
  let _, L;
  e[34] !== A ? ({
    className: _,
    ...L
  } = A, e[34] = A, e[35] = _, e[36] = L) : (_ = e[35], L = e[36]);
  let N;
  e[37] !== c.clear ? (N = c.clear || {}, e[37] = c.clear, e[38] = N) : N = e[38];
  let P, w;
  e[39] !== N ? ({
    className: P,
    ...w
  } = N, e[39] = N, e[40] = P, e[41] = w) : (P = e[40], w = e[41]);
  const [O, V] = $l(h), [k, H] = $l(g);
  let U;
  e[42] !== k || e[43] !== O ? (U = () => {
    const ne = k.trim();
    if (ne !== "") {
      if (O.some((ee) => ee.toLowerCase() === ne.toLowerCase())) {
        H("");
        return;
      }
      V((ee) => ee.concat(ne)), H("");
    }
  }, e[42] = k, e[43] = O, e[44] = U) : U = e[44];
  const T = U;
  let D, $;
  e[45] !== r || e[46] !== O ? (D = () => {
    r && r(O);
  }, $ = [r, O], e[45] = r, e[46] = O, e[47] = D, e[48] = $) : (D = e[47], $ = e[48]), Rp(D, $);
  let J;
  e[49] !== o ? (J = (ne, ee) => {
    V(Array.isArray(ne) ? ne : []), o && o(Array.isArray(ne) ? ne.join("/") : ne, ee);
  }, e[49] = o, e[50] = J) : J = e[50];
  let Z;
  e[51] !== y ? (Z = Fe(jn.inputGroup, y), e[51] = y, e[52] = Z) : Z = e[52];
  let q;
  e[53] !== v ? (q = Fe(jn.chips, v), e[53] = v, e[54] = q) : q = e[54];
  let B;
  if (e[55] !== x || e[56] !== R || e[57] !== _ || e[58] !== L || e[59] !== O) {
    let ne;
    e[61] !== x || e[62] !== R || e[63] !== _ || e[64] !== L ? (ne = (ee) => /* @__PURE__ */ X.jsxs(jd, { className: Fe(jn.chip, x), ...R, children: [
      ee,
      /* @__PURE__ */ X.jsx($d, { className: Fe(jn.chipRemove, _), ...L, children: /* @__PURE__ */ X.jsx(Xm, { size: 9 }) })
    ] }, encodeURIComponent(ee).replaceAll("%", "")), e[61] = x, e[62] = R, e[63] = _, e[64] = L, e[65] = ne) : ne = e[65], B = O.map(ne), e[55] = x, e[56] = R, e[57] = _, e[58] = L, e[59] = O, e[60] = B;
  } else
    B = e[60];
  let Y;
  e[66] !== T ? (Y = (ne) => {
    ne.key === "Enter" && (ne.preventDefault(), ne.stopPropagation(), T());
  }, e[66] = T, e[67] = Y) : Y = e[67];
  let Q;
  e[68] !== I ? (Q = Fe(jn.input, I), e[68] = I, e[69] = Q) : Q = e[69];
  let re;
  e[70] !== M || e[71] !== Y || e[72] !== Q ? (re = /* @__PURE__ */ X.jsx(Fd, { onKeyDown: Y, className: Q, ...M }), e[70] = M, e[71] = Y, e[72] = Q, e[73] = re) : re = e[73];
  let ue;
  e[74] !== m || e[75] !== q || e[76] !== B || e[77] !== re ? (ue = /* @__PURE__ */ X.jsxs(Hd, { className: q, ...m, children: [
    B,
    re
  ] }), e[74] = m, e[75] = q, e[76] = B, e[77] = re, e[78] = ue) : ue = e[78];
  let z;
  e[79] !== P ? (z = Fe(jn.clear, P), e[79] = P, e[80] = z) : z = e[80];
  let se;
  e[81] !== w || e[82] !== z ? (se = /* @__PURE__ */ X.jsx(Ud, { className: z, ...w }), e[81] = w, e[82] = z, e[83] = se) : se = e[83];
  let fe;
  e[84] !== b || e[85] !== Z || e[86] !== ue || e[87] !== se ? (fe = /* @__PURE__ */ X.jsxs(Bd, { className: Z, ...b, children: [
    ue,
    se
  ] }), e[84] = b, e[85] = Z, e[86] = ue, e[87] = se, e[88] = fe) : fe = e[88];
  let j;
  e[89] !== k || e[90] !== s || e[91] !== J || e[92] !== fe || e[93] !== O ? (j = /* @__PURE__ */ X.jsx(XE, { items: O, multiple: !0, value: O, inputValue: k, open: !1, onValueChange: J, onInputValueChange: H, ...s, children: fe }), e[89] = k, e[90] = s, e[91] = J, e[92] = fe, e[93] = O, e[94] = j) : j = e[94];
  let W;
  e[95] !== n || e[96] !== T ? (W = n && /* @__PURE__ */ X.jsx(ga, { styleType: n.type, onClick: T, children: n.label }), e[95] = n, e[96] = T, e[97] = W) : W = e[97];
  let te;
  return e[98] !== j || e[99] !== W ? (te = /* @__PURE__ */ X.jsxs("div", { className: jn.wrapper, children: [
    j,
    W
  ] }), e[98] = j, e[99] = W, e[100] = te) : te = e[100], te;
}
const kl = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (kl.displayName = "TooltipRootContext");
function ys(t) {
  const e = a.useContext(kl);
  if (e === void 0 && !t)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>." : ot(72));
  return e;
}
const lR = {
  ...Bu,
  disabled: ie((t) => t.disabled),
  instantType: ie((t) => t.instantType),
  isInstantPhase: ie((t) => t.isInstantPhase),
  trackCursorAxis: ie((t) => t.trackCursorAxis),
  disableHoverablePopup: ie((t) => t.disableHoverablePopup),
  lastOpenChangeReason: ie((t) => t.openChangeReason),
  closeOnClick: ie((t) => t.closeOnClick),
  closeDelay: ie((t) => t.closeDelay),
  hasViewport: ie((t) => t.hasViewport)
};
class Vl extends nl {
  constructor(e) {
    super({
      ...cR(),
      ...e
    }, {
      popupRef: /* @__PURE__ */ a.createRef(),
      onOpenChange: void 0,
      onOpenChangeComplete: void 0,
      triggerElements: new ds()
    }, lR);
  }
  setOpen = (e, n) => {
    const r = n.reason, o = r === Ct, s = e && r === ir, l = !e && (r === dr || r === Hr);
    if (n.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", !0);
    }, this.context.onOpenChange?.(e, n), n.isCanceled)
      return;
    this.state.floatingRootContext.dispatchOpenChange(e, n);
    const i = () => {
      const f = {
        open: e,
        openChangeReason: r
      };
      s ? f.instantType = "focus" : l ? f.instantType = "dismiss" : r === Ct && (f.instantType = void 0);
      const u = n.trigger?.id ?? null;
      (u || e) && (f.activeTriggerId = u, f.activeTriggerElement = n.trigger ?? null), this.update(f);
    };
    o ? Jt.flushSync(i) : i();
  };
  static useStore(e, n) {
    const r = at(() => new Vl(n)).current, o = e ?? r, s = Hu({
      popupStore: o,
      onOpenChange: o.setOpen
    });
    return o.state.floatingRootContext = s, o;
  }
}
function cR() {
  return {
    ...Lu(),
    disabled: !1,
    instantType: void 0,
    isInstantPhase: !1,
    trackCursorAxis: "none",
    disableHoverablePopup: !1,
    openChangeReason: null,
    closeOnClick: !0,
    closeDelay: 0,
    hasViewport: !1
  };
}
const Wd = el(function(e) {
  const {
    disabled: n = !1,
    defaultOpen: r = !1,
    open: o,
    disableHoverablePopup: s = !1,
    trackCursorAxis: l = "none",
    actionsRef: i,
    onOpenChange: f,
    onOpenChangeComplete: u,
    handle: c,
    triggerId: p,
    defaultTriggerId: h = null,
    children: g
  } = e, d = Vl.useStore(c?.store, {
    open: r,
    openProp: o,
    activeTriggerId: h,
    triggerIdProp: p
  });
  gs(() => {
    o === void 0 && d.state.open === !1 && r === !0 && d.update({
      open: !0,
      activeTriggerId: h
    });
  }), d.useControlledProp("openProp", o), d.useControlledProp("triggerIdProp", p), d.useContextCallback("onOpenChange", f), d.useContextCallback("onOpenChangeComplete", u);
  const y = d.useState("open"), b = !n && y, E = d.useState("activeTriggerId"), v = d.useState("payload");
  d.useSyncedValues({
    trackCursorAxis: l,
    disableHoverablePopup: s
  }), pe(() => {
    y && n && d.setOpen(!1, ge(Nm));
  }, [y, n, d]), d.useSyncedValue("disabled", n), Du(d);
  const {
    forceUnmount: m,
    transitionStatus: C
  } = Fu(b, d), x = d.select("floatingRootContext"), R = d.useState("isInstantPhase"), S = d.useState("instantType"), I = d.useState("lastOpenChangeReason"), M = a.useRef(null);
  pe(() => {
    C === "ending" && I === ct || C !== "ending" && R ? (S !== "delay" && (M.current = S), d.set("instantType", "delay")) : M.current !== null && (d.set("instantType", M.current), M.current = null);
  }, [C, R, I, S, d]), pe(() => {
    b && E == null && d.set("payload", void 0);
  }, [d, E, b]);
  const A = a.useCallback(() => {
    d.setOpen(!1, ge(Sa));
  }, [d]);
  a.useImperativeHandle(i, () => ({
    unmount: m,
    close: A
  }), [m, A]);
  const _ = us(x, {
    enabled: !n,
    referencePress: () => d.select("closeOnClick")
  }), L = ih(x, {
    enabled: !n && l !== "none",
    axis: l === "none" ? void 0 : l
  }), {
    getReferenceProps: N,
    getFloatingProps: P,
    getTriggerProps: w
  } = Gr([_, L]), O = a.useMemo(() => N(), [N]), V = a.useMemo(() => w(), [w]), k = a.useMemo(() => P(), [P]);
  return d.useSyncedValues({
    activeTriggerProps: O,
    inactiveTriggerProps: V,
    popupProps: k
  }), /* @__PURE__ */ X.jsx(kl.Provider, {
    value: d,
    children: typeof g == "function" ? g({
      payload: v
    }) : g
  });
});
process.env.NODE_ENV !== "production" && (Wd.displayName = "TooltipRoot");
const Dl = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Dl.displayName = "TooltipProviderContext");
function aR() {
  return a.useContext(Dl);
}
let uR = (function(t) {
  return t[t.popupOpen = Wo.popupOpen] = "popupOpen", t.triggerDisabled = "data-trigger-disabled", t;
})({});
const fR = 600, Kd = ku(function(e, n) {
  const {
    className: r,
    render: o,
    handle: s,
    payload: l,
    disabled: i,
    delay: f,
    closeOnClick: u = !0,
    closeDelay: c,
    id: p,
    style: h,
    ...g
  } = e, d = ys(!0), y = s?.store ?? d;
  if (!y)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle." : ot(82));
  const b = Et(p), E = y.useState("isTriggerActive", b), v = y.useState("isOpenedByTrigger", b), m = y.useState("floatingRootContext"), C = a.useRef(null), x = f ?? fR, R = c ?? 0, {
    registerTrigger: S,
    isMountedByThisTrigger: I
  } = Vu(b, C, y, {
    payload: l,
    closeOnClick: u,
    closeDelay: R
  }), M = aR(), {
    delayRef: A,
    isInstantPhase: _,
    hasProvider: L
  } = Wg(m, {
    open: v
  });
  y.useSyncedValue("isInstantPhase", _);
  const N = y.useState("disabled"), P = i ?? N, w = y.useState("trackCursorAxis"), O = y.useState("disableHoverablePopup"), V = Ku(m, {
    enabled: !P,
    mouseOnly: !0,
    move: !1,
    handleClose: !O && w !== "both" ? Yu() : null,
    restMs() {
      const D = M?.delay, $ = typeof A.current == "object" ? A.current.open : void 0;
      let J = x;
      return L && ($ !== 0 ? J = f ?? D ?? x : J = 0), J;
    },
    delay() {
      const D = typeof A.current == "object" ? A.current.close : void 0;
      let $ = R;
      return c == null && L && ($ = D), {
        close: $
      };
    },
    triggerElementRef: C,
    isActiveTrigger: E,
    isClosing: () => y.select("transitionStatus") === "ending"
  }), k = ju(m, {
    enabled: !P
  }).reference, H = {
    open: v
  }, U = y.useState("triggerProps", I);
  return Be("button", e, {
    state: H,
    ref: [n, S, C],
    props: [V, k, U, {
      onPointerDown() {
        y.set("closeOnClick", u);
      },
      id: b,
      [uR.triggerDisabled]: P ? "" : void 0
    }, g],
    stateAttributesMapping: ji
  });
});
process.env.NODE_ENV !== "production" && (Kd.displayName = "TooltipTrigger");
const Fl = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Fl.displayName = "TooltipPortalContext");
function dR() {
  const t = a.useContext(Fl);
  if (t === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Tooltip.Portal> is missing." : ot(70));
  return t;
}
const Gd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    children: r,
    container: o,
    className: s,
    render: l,
    style: i,
    ...f
  } = e, {
    portalNode: u,
    portalSubtree: c
  } = xu({
    container: o,
    ref: n,
    componentProps: e,
    elementProps: f
  });
  return !c && !u ? null : /* @__PURE__ */ X.jsxs(a.Fragment, {
    children: [c, u && /* @__PURE__ */ Jt.createPortal(r, u)]
  });
});
process.env.NODE_ENV !== "production" && (Gd.displayName = "FloatingPortalLite");
const Yd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    keepMounted: r = !1,
    ...o
  } = e;
  return ys().useState("mounted") || r ? /* @__PURE__ */ X.jsx(Fl.Provider, {
    value: r,
    children: /* @__PURE__ */ X.jsx(Gd, {
      ref: n,
      ...o
    })
  }) : null;
});
process.env.NODE_ENV !== "production" && (Yd.displayName = "TooltipPortal");
const Ll = /* @__PURE__ */ a.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ll.displayName = "TooltipPositionerContext");
function pR() {
  const t = a.useContext(Ll);
  if (t === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>." : ot(71));
  return t;
}
const zd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    render: r,
    className: o,
    anchor: s,
    positionMethod: l = "absolute",
    side: i = "top",
    align: f = "center",
    sideOffset: u = 0,
    alignOffset: c = 0,
    collisionBoundary: p = "clipping-ancestors",
    collisionPadding: h = 5,
    arrowPadding: g = 5,
    sticky: d = !1,
    disableAnchorTracking: y = !1,
    collisionAvoidance: b = Eu,
    style: E,
    ...v
  } = e, m = ys(), C = dR(), x = m.useState("open"), R = m.useState("mounted"), S = m.useState("trackCursorAxis"), I = m.useState("disableHoverablePopup"), M = m.useState("floatingRootContext"), A = m.useState("instantType"), _ = m.useState("transitionStatus"), L = m.useState("hasViewport"), N = al({
    anchor: s,
    positionMethod: l,
    floatingRootContext: M,
    mounted: R,
    side: i,
    sideOffset: u,
    align: f,
    alignOffset: c,
    collisionBoundary: p,
    collisionPadding: h,
    sticky: d,
    arrowPadding: g,
    disableAnchorTracking: y,
    keepMounted: C,
    collisionAvoidance: b,
    adaptiveOrigin: L ? lf : void 0
  }), P = a.useMemo(() => ({
    open: x,
    side: N.side,
    align: N.align,
    anchorHidden: N.anchorHidden,
    instant: S !== "none" ? "tracking-cursor" : A
  }), [x, N.side, N.align, N.anchorHidden, S, A]), w = fl(e, P, {
    styles: N.positionerStyles,
    transitionStatus: _,
    props: v,
    refs: [n, m.useStateSetter("positionerElement")],
    hidden: !R,
    inert: !x || S === "both" || I
  });
  return /* @__PURE__ */ X.jsx(Ll.Provider, {
    value: N,
    children: w
  });
});
process.env.NODE_ENV !== "production" && (zd.displayName = "TooltipPositioner");
const mR = {
  ...cs,
  ...An
}, qd = /* @__PURE__ */ a.forwardRef(function(e, n) {
  const {
    className: r,
    render: o,
    style: s,
    ...l
  } = e, i = ys(), {
    side: f,
    align: u
  } = pR(), c = i.useState("open"), p = i.useState("instantType"), h = i.useState("transitionStatus"), g = i.useState("popupProps"), d = i.useState("floatingRootContext");
  en({
    open: c,
    ref: i.context.popupRef,
    onComplete() {
      c && i.context.onOpenChangeComplete?.(!0);
    }
  });
  const y = i.useState("disabled"), b = i.useState("closeDelay");
  return Wu(d, {
    enabled: !y,
    closeDelay: b
  }), Be("div", e, {
    state: {
      open: c,
      side: f,
      align: u,
      instant: p,
      transitionStatus: h
    },
    ref: [n, i.context.popupRef, i.useStateSetter("popupElement")],
    props: [g, ms(h), l],
    stateAttributesMapping: mR
  });
});
process.env.NODE_ENV !== "production" && (qd.displayName = "TooltipPopup");
const Xd = function(e) {
  const {
    delay: n,
    closeDelay: r,
    timeout: o = 400
  } = e, s = a.useMemo(() => ({
    delay: n,
    closeDelay: r
  }), [n, r]), l = a.useMemo(() => ({
    open: n,
    close: r
  }), [n, r]);
  return /* @__PURE__ */ X.jsx(Dl.Provider, {
    value: s,
    children: /* @__PURE__ */ X.jsx(Ug, {
      delay: l,
      timeoutMs: o,
      children: e.children
    })
  });
};
process.env.NODE_ENV !== "production" && (Xd.displayName = "TooltipProvider");
const gR = "_Button_cz3fr_11", hR = "_Popup_cz3fr_54", bR = "_Positioner_cz3fr_131", Zs = {
  Button: gR,
  Popup: hR,
  Positioner: bR
};
function NR(t) {
  const e = Zt.c(56);
  let n, r, o, s;
  e[0] !== t ? ({
    children: n,
    trigger: s,
    innerProps: o,
    ...r
  } = t, e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = s) : (n = e[1], r = e[2], o = e[3], s = e[4]);
  let l;
  e[5] !== o ? (l = o === void 0 ? {} : o, e[5] = o, e[6] = l) : l = e[6];
  const i = l;
  let f;
  e[7] !== i.trigger ? (f = i.trigger || {}, e[7] = i.trigger, e[8] = f) : f = e[8];
  let u, c;
  e[9] !== f ? ({
    className: u,
    ...c
  } = f, e[9] = f, e[10] = u, e[11] = c) : (u = e[10], c = e[11]);
  let p;
  e[12] !== i.portal ? (p = i.portal || {}, e[12] = i.portal, e[13] = p) : p = e[13];
  let h, g;
  e[14] !== p ? ({
    className: h,
    ...g
  } = p, e[14] = p, e[15] = h, e[16] = g) : (h = e[15], g = e[16]);
  let d;
  e[17] !== i.positioner ? (d = i.positioner || {}, e[17] = i.positioner, e[18] = d) : d = e[18];
  let y, b;
  e[19] !== d ? ({
    className: y,
    ...b
  } = d, e[19] = d, e[20] = y, e[21] = b) : (y = e[20], b = e[21]);
  let E;
  e[22] !== i.popup ? (E = i.popup || {}, e[22] = i.popup, e[23] = E) : E = e[23];
  let v, m;
  e[24] !== E ? ({
    className: v,
    ...m
  } = E, e[24] = E, e[25] = v, e[26] = m) : (v = e[25], m = e[26]);
  const C = i?.root;
  let x;
  e[27] !== u ? (x = Fe(Zs.Button, u), e[27] = u, e[28] = x) : x = e[28];
  let R;
  e[29] !== x || e[30] !== s || e[31] !== c ? (R = /* @__PURE__ */ X.jsx(Kd, { className: x, ...c, children: s }), e[29] = x, e[30] = s, e[31] = c, e[32] = R) : R = e[32];
  let S;
  e[33] !== y ? (S = Fe(Zs.Positioner, y), e[33] = y, e[34] = S) : S = e[34];
  let I;
  e[35] !== v ? (I = Fe(Zs.Popup, v), e[35] = v, e[36] = I) : I = e[36];
  let M;
  e[37] !== n || e[38] !== m || e[39] !== I ? (M = /* @__PURE__ */ X.jsx(qd, { className: I, ...m, children: n }), e[37] = n, e[38] = m, e[39] = I, e[40] = M) : M = e[40];
  let A;
  e[41] !== b || e[42] !== S || e[43] !== M ? (A = /* @__PURE__ */ X.jsx(zd, { className: S, ...b, children: M }), e[41] = b, e[42] = S, e[43] = M, e[44] = A) : A = e[44];
  let _;
  e[45] !== h || e[46] !== g || e[47] !== A ? (_ = /* @__PURE__ */ X.jsx(Yd, { className: h, ...g, children: A }), e[45] = h, e[46] = g, e[47] = A, e[48] = _) : _ = e[48];
  let L;
  e[49] !== _ || e[50] !== C || e[51] !== R ? (L = /* @__PURE__ */ X.jsxs(Wd, { ...C, children: [
    R,
    _
  ] }), e[49] = _, e[50] = C, e[51] = R, e[52] = L) : L = e[52];
  let N;
  return e[53] !== r || e[54] !== L ? (N = /* @__PURE__ */ X.jsx(Xd, { ...r, children: L }), e[53] = r, e[54] = L, e[55] = N) : N = e[55], N;
}
export {
  ga as SvButton,
  RR as SvCheckbox,
  xR as SvField,
  vR as SvMenu,
  CR as SvNumberField,
  SR as SvRadioGroup,
  IR as SvSelect,
  TR as SvSlider,
  wR as SvSwitch,
  PR as SvTagInput,
  NR as SvTooltip
};
