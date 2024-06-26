import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __publicField
} from "./chunk-TNMWGZAV.js";

// node_modules/cally/dist/cally.js
var _t, _e;
var oe = class {
  /**
   * @param {T} current
   */
  constructor(t) {
    /**
     * @type {T}
     */
    __privateAdd(this, _t, void 0);
    __privateAdd(this, _e, /* @__PURE__ */ new Set());
    __privateSet(this, _t, t);
  }
  /**
   * @return {T}
   */
  get current() {
    return __privateGet(this, _t);
  }
  /**
   * @param {T} value
   */
  set current(t) {
    __privateGet(this, _t) != t && (__privateSet(this, _t, t), __privateGet(this, _e).forEach((s) => s(t)));
  }
  /**
   * @type {import("hooks").Ref["on"]}
   */
  on(t) {
    return __privateGet(this, _e).add(t), () => __privateGet(this, _e).delete(t);
  }
};
_t = new WeakMap();
_e = new WeakMap();
var Nt = (e) => new oe(e);
var Q = Symbol.for("atomico.hooks");
globalThis[Q] = globalThis[Q] || {};
var N = globalThis[Q];
var re = Symbol.for("Atomico.suspense");
var Pt = Symbol.for("Atomico.effect");
var ie = Symbol.for("Atomico.layoutEffect");
var Ot = Symbol.for("Atomico.insertionEffect");
var O = (e, t, s) => {
  const { i: n, hooks: o } = N.c, r = o[n] = o[n] || {};
  return r.value = e(r.value), r.effect = t, r.tag = s, N.c.i++, o[n].value;
};
var ae = (e) => O((t = Nt(e)) => t);
var U = () => O((e = Nt(N.c.host)) => e);
var kt = () => N.c.update;
var ce = (e, t, s = 0) => {
  let n = {}, o = false;
  const r = () => o, i = (l, c) => {
    for (const h in n) {
      const a = n[h];
      a.effect && a.tag === l && (a.value = a.effect(a.value, c));
    }
  };
  return { load: (l) => {
    N.c = { host: t, hooks: n, update: e, i: 0, id: s };
    let c;
    try {
      o = false, c = l();
    } catch (h) {
      if (h !== re)
        throw h;
      o = true;
    } finally {
      N.c = null;
    }
    return c;
  }, cleanEffects: (l) => (i(Ot, l), () => (i(ie, l), () => {
    i(Pt, l);
  })), isSuspense: r };
};
var k = Symbol.for;
function Mt(e, t) {
  const s = e.length;
  if (s !== t.length)
    return false;
  for (let n = 0; n < s; n++) {
    let o = e[n], r = t[n];
    if (o !== r)
      return false;
  }
  return true;
}
var S = (e) => typeof e == "function";
var R = (e) => typeof e == "object";
var { isArray: ue } = Array;
var V = (e, t) => (t ? e instanceof HTMLStyleElement : true) && "hydrate" in ((e == null ? void 0 : e.dataset) || {});
function At(e, t) {
  let s;
  const n = (o) => {
    let { length: r } = o;
    for (let i = 0; i < r; i++) {
      const f = o[i];
      if (f && Array.isArray(f))
        n(f);
      else {
        const u = typeof f;
        if (f == null || u === "function" || u === "boolean")
          continue;
        u === "string" || u === "number" ? (s == null && (s = ""), s += f) : (s != null && (t(s), s = null), t(f));
      }
    }
  };
  n(e), s != null && t(s);
}
var Rt = (e, t, s) => (e.addEventListener(t, s), () => e.removeEventListener(t, s));
var Ft = class {
  /**
   *
   * @param {HTMLElement} target
   * @param {string} message
   * @param {string} value
   */
  constructor(t, s, n) {
    this.message = s, this.target = t, this.value = n;
  }
};
var It = class extends Ft {
};
var le = class extends Ft {
};
var Y = "Custom";
var fe = null;
var de = { true: 1, "": 1, 1: 1 };
function he(e, t, s, n, o) {
  const {
    type: r,
    reflect: i,
    event: f,
    value: u,
    attr: l = me(t)
  } = (s == null ? void 0 : s.name) != Y && R(s) && s != fe ? s : { type: s }, c = (r == null ? void 0 : r.name) === Y && r.map, h = u != null ? r == Function || !S(u) ? () => u : u : null;
  Object.defineProperty(e, t, {
    configurable: true,
    /**
     * @this {import("dom").AtomicoThisInternal}
     * @param {any} newValue
     */
    set(a) {
      const d = this[t];
      h && r != Boolean && a == null && (a = h());
      const { error: y, value: D } = (c ? be : ge)(
        r,
        a
      );
      if (y && D != null)
        throw new It(
          this,
          `The value defined for prop '${t}' must be of type '${r.name}'`,
          D
        );
      d != D && (this._props[t] = D ?? void 0, this.update(), f && xt(this, f), this.updated.then(() => {
        i && (this._ignoreAttr = l, ye(this, r, l, this[t]), this._ignoreAttr = null);
      }));
    },
    /**
     * @this {import("dom").AtomicoThisInternal}
     */
    get() {
      return this._props[t];
    }
  }), h && (o[t] = h()), n[l] = { prop: t, type: r };
}
var xt = (e, { type: t, base: s = CustomEvent, ...n }) => e.dispatchEvent(new s(t, n));
var me = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase();
var ye = (e, t, s, n) => n == null || t == Boolean && !n ? e.removeAttribute(s) : e.setAttribute(
  s,
  (t == null ? void 0 : t.name) === Y && (t == null ? void 0 : t.serialize) ? t == null ? void 0 : t.serialize(n) : R(n) ? JSON.stringify(n) : t == Boolean ? "" : n
);
var pe = (e, t) => e == Boolean ? !!de[t] : e == Number ? Number(t) : e == String ? t : e == Array || e == Object ? JSON.parse(t) : e.name == Y ? t : (
  // TODO: If when defining reflect the prop can also be of type string?
  new e(t)
);
var be = ({ map: e }, t) => {
  try {
    return { value: e(t), error: false };
  } catch {
    return { value: t, error: true };
  }
};
var ge = (e, t) => e == null || t == null ? { value: t, error: false } : e != String && t === "" ? { value: void 0, error: false } : e == Object || e == Array || e == Symbol ? {
  value: t,
  error: {}.toString.call(t) !== `[object ${e.name}]`
} : t instanceof e ? {
  value: t,
  error: e == Number && Number.isNaN(t.valueOf())
} : e == String || e == Number || e == Boolean ? {
  value: t,
  error: e == Number ? typeof t != "number" ? true : Number.isNaN(t) : e == String ? typeof t != "string" : typeof t != "boolean"
} : { value: t, error: true };
var De = 0;
var we = (e) => {
  var _a;
  const t = ((_a = (e == null ? void 0 : e.dataset) || {}) == null ? void 0 : _a.hydrate) || "";
  return t || "c" + De++;
};
var $ = (e, t = HTMLElement) => {
  const s = {}, n = {}, o = "prototype" in t && t.prototype instanceof Element, r = o ? t : "base" in t ? t.base : HTMLElement, { props: i, styles: f } = o ? e : t;
  class u extends r {
    constructor() {
      super(), this._setup(), this._render = () => e({ ...this._props });
      for (const c in n)
        this[c] = n[c];
    }
    /**
     * @returns {import("core").Sheets[]}
     */
    static get styles() {
      return [super.styles, f];
    }
    async _setup() {
      if (this._props)
        return;
      this._props = {};
      let c, h;
      this.mounted = new Promise(
        (m) => this.mount = () => {
          m(), c != this.parentNode && (h != c ? this.unmounted.then(this.update) : this.update()), c = this.parentNode;
        }
      ), this.unmounted = new Promise(
        (m) => this.unmount = () => {
          m(), (c != this.parentNode || !this.isConnected) && (a.cleanEffects(true)()(), h = this.parentNode, c = null);
        }
      ), this.symbolId = this.symbolId || Symbol(), this.symbolIdParent = Symbol();
      const a = ce(
        () => this.update(),
        this,
        we(this)
      );
      let d, y = true;
      const D = V(this);
      this.update = () => (d || (d = true, this.updated = (this.updated || this.mounted).then(() => {
        try {
          const m = a.load(this._render), w = a.cleanEffects();
          return m && //@ts-ignore
          m.render(this, this.symbolId, D), d = false, y && !a.isSuspense() && (y = false, !D && Ee(this)), w();
        } finally {
          d = false;
        }
      }).then(
        /**
         * @param {import("internal/hooks.js").CleanUseEffects} [cleanUseEffect]
         */
        (m) => {
          m && m();
        }
      )), this.updated), this.update();
    }
    connectedCallback() {
      this.mount(), super.connectedCallback && super.connectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback && super.disconnectedCallback(), this.unmount();
    }
    /**
     * @this {import("dom").AtomicoThisInternal}
     * @param {string} attr
     * @param {(string|null)} oldValue
     * @param {(string|null)} value
     */
    attributeChangedCallback(c, h, a) {
      if (s[c]) {
        if (c === this._ignoreAttr || h === a)
          return;
        const { prop: d, type: y } = s[c];
        try {
          this[d] = pe(y, a);
        } catch {
          throw new le(
            this,
            `The value defined as attr '${c}' cannot be parsed by type '${y.name}'`,
            a
          );
        }
      } else
        super.attributeChangedCallback(c, h, a);
    }
    static get props() {
      return { ...super.props, ...i };
    }
    static get observedAttributes() {
      const c = super.observedAttributes || [];
      for (const h in i)
        he(this.prototype, h, i[h], s, n);
      return Object.keys(s).concat(c);
    }
  }
  return u;
};
function Ee(e) {
  const { styles: t } = e.constructor, { shadowRoot: s } = e;
  if (s && t.length) {
    const n = [];
    At(t, (o) => {
      o && (o instanceof Element ? s.appendChild(o.cloneNode(true)) : n.push(o));
    }), n.length && (s.adoptedStyleSheets = n);
  }
}
var Ut = (e) => (t, s) => {
  O(
    /**
     * Clean the effect hook
     * @type {import("internal/hooks.js").CollectorEffect}
     */
    ([n, o] = []) => ((o || !o) && (o && Mt(o, s) ? n = n || true : (S(n) && n(), n = null)), [n, s]),
    /**
     * @returns {any}
     */
    ([n, o], r) => r ? (S(n) && n(), []) : [n || t(), o],
    e
  );
};
var j = Ut(Pt);
var Se = Ut(Ot);
var _t2 = class extends Array {
  /**
   *
   * @param {any} initialState
   * @param {(nextState: any, state:any[], mount: boolean )=>void} mapState
   */
  constructor(t, s) {
    let n = true;
    const o = (r) => {
      try {
        s(r, this, n);
      } finally {
        n = false;
      }
    };
    super(void 0, o, s), o(t);
  }
  /**
   * The following code allows a mutable approach to useState
   * and useProp this with the idea of allowing an alternative
   * approach similar to Vue or Qwik of state management
   * @todo pending review with the community
   */
  // get value() {
  //     return this[0];
  // }
  // set value(nextState) {
  //     this[2](nextState, this);
  // }
};
var it = (e) => {
  const t = kt();
  return O(
    (s = new _t2(e, (n, o, r) => {
      n = S(n) ? n(o[0]) : n, n !== o[0] && (o[0] = n, r || t());
    })) => s
  );
};
var P = (e, t) => {
  const [s] = O(([n, o, r = 0] = []) => ((!o || o && !Mt(o, t)) && (n = e()), [n, t, r]));
  return s;
};
var Lt = (e) => {
  const { current: t } = U();
  if (!(e in t))
    throw new It(
      t,
      `For useProp("${e}"), the prop does not exist on the host.`,
      e
    );
  return O(
    (s = new _t2(t[e], (n, o) => {
      n = S(n) ? n(t[e]) : n, t[e] = n;
    })) => (s[0] = t[e], s)
  );
};
var v = (e, t = {}) => {
  const s = U();
  return s[e] || (s[e] = (n = t.detail) => xt(s.current, {
    type: e,
    ...t,
    detail: n
  })), s[e];
};
var tt = k("atomico/options");
globalThis[tt] = globalThis[tt] || {
  sheet: !!document.adoptedStyleSheets
};
var Yt = globalThis[tt];
var ve = {
  checked: 1,
  value: 1,
  selected: 1
};
var Te = {
  list: 1,
  type: 1,
  size: 1,
  form: 1,
  width: 1,
  height: 1,
  src: 1,
  href: 1,
  slot: 1
};
var Ce = {
  shadowDom: 1,
  staticNode: 1,
  cloneNode: 1,
  children: 1,
  key: 1
};
var L = {};
var et = [];
var nt = class extends Text {
};
var Ne = k("atomico/id");
var F = k("atomico/type");
var J = k("atomico/ref");
var $t = k("atomico/vnode");
var Pe = () => {
};
function Oe(e, t, s) {
  return qt(this, e, t, s);
}
var jt = (e, t, ...s) => {
  const n = t || L;
  let { children: o } = n;
  if (o = o ?? (s.length ? s : et), e === Pe)
    return o;
  const r = e ? e instanceof Node ? 1 : (
    //@ts-ignore
    e.prototype instanceof HTMLElement && 2
  ) : 0;
  if (r === false && e instanceof Function)
    return e(
      o != et ? { children: o, ...n } : n
    );
  const i = Yt.render || Oe;
  return {
    [F]: $t,
    type: e,
    props: n,
    children: o,
    key: n.key,
    // key for lists by keys
    // define if the node declares its shadowDom
    shadow: n.shadowDom,
    // allows renderings to run only once
    static: n.staticNode,
    // defines whether the type is a childNode `1` or a constructor `2`
    raw: r,
    // defines whether to use the second parameter for document.createElement
    is: n.is,
    // clone the node if it comes from a reference
    clone: n.cloneNode,
    render: i
  };
};
function qt(e, t, s = Ne, n, o) {
  let r;
  if (t && t[s] && t[s].vnode == e || e[F] != $t)
    return t;
  (e || !t) && (o = o || e.type == "svg", r = e.type != "host" && (e.raw == 1 ? (t && e.clone ? t[J] : t) != e.type : e.raw == 2 ? !(t instanceof e.type) : t ? t[J] || t.localName != e.type : !t), r && e.type != null && (e.raw == 1 && e.clone ? (n = true, t = e.type.cloneNode(true), t[J] = e.type) : t = e.raw == 1 ? e.type : e.raw == 2 ? new e.type() : o ? document.createElementNS(
    "http://www.w3.org/2000/svg",
    e.type
  ) : document.createElement(
    e.type,
    e.is ? { is: e.is } : void 0
  )));
  const i = t[s] ? t[s] : L, { vnode: f = L, cycle: u = 0 } = i;
  let { fragment: l, handlers: c } = i;
  const { children: h = et, props: a = L } = f;
  if (c = r ? {} : c || {}, e.static && !r)
    return t;
  if (e.shadow && !t.shadowRoot && // @ts-ignore
  t.attachShadow({ mode: "open", ...e.shadow }), e.props != a && Ae(t, a, e.props, c, o), e.children !== h) {
    const d = e.shadow ? t.shadowRoot : t;
    l = Me(
      e.children,
      /**
       * @todo for hydration use attribute and send childNodes
       */
      l,
      d,
      s,
      // add support to foreignObject, children will escape from svg
      !u && n,
      o && e.type == "foreignObject" ? false : o
    );
  }
  return t[s] = { vnode: e, handlers: c, fragment: l, cycle: u + 1 }, t;
}
function ke(e, t) {
  const s = new nt(""), n = new nt("");
  let o;
  if (e[t ? "prepend" : "append"](s), t) {
    let { lastElementChild: r } = e;
    for (; r; ) {
      const { previousElementSibling: i } = r;
      if (V(r, true) && !V(i, true)) {
        o = r;
        break;
      }
      r = i;
    }
  }
  return o ? o.before(n) : e.append(n), {
    markStart: s,
    markEnd: n
  };
}
function Me(e, t, s, n, o, r) {
  e = e == null ? null : ue(e) ? e : [e];
  const i = t || ke(s, o), { markStart: f, markEnd: u, keyes: l } = i;
  let c;
  const h = l && /* @__PURE__ */ new Set();
  let a = f;
  if (e && At(e, (d) => {
    if (typeof d == "object" && !d[F])
      return;
    const y = d[F] && d.key, D = l && y != null && l.get(y);
    a != u && a === D ? h.delete(a) : a = a == u ? u : a.nextSibling;
    const m = l ? D : a;
    let w = m;
    if (d[F])
      w = qt(d, m, n, o, r);
    else {
      const M = d + "";
      !(w instanceof Text) || w instanceof nt ? w = new Text(M) : w.data != M && (w.data = M);
    }
    w != a && (l && h.delete(w), !m || l ? (s.insertBefore(w, a), l && a != u && h.add(a)) : m == u ? s.insertBefore(w, u) : (s.replaceChild(w, m), a = w)), y != null && (c = c || /* @__PURE__ */ new Map(), c.set(y, w));
  }), a = a == u ? u : a.nextSibling, t && a != u)
    for (; a != u; ) {
      const d = a;
      a = a.nextSibling, d.remove();
    }
  return h && h.forEach((d) => d.remove()), i.keyes = c, i;
}
function Ae(e, t, s, n, o) {
  for (const r in t)
    !(r in s) && pt(e, r, t[r], null, o, n);
  for (const r in s)
    pt(e, r, t[r], s[r], o, n);
}
function pt(e, t, s, n, o, r) {
  if (t = t == "class" && !o ? "className" : t, s = s ?? null, n = n ?? null, t in e && ve[t] && (s = e[t]), !(n === s || Ce[t] || t[0] == "_"))
    if (t[0] == "o" && t[1] == "n" && (S(n) || S(s)))
      Re(e, t.slice(2), n, r);
    else if (t == "ref")
      n && (S(n) ? n(e) : n.current = e);
    else if (t == "style") {
      const { style: i } = e;
      s = s || "", n = n || "";
      const f = R(s), u = R(n);
      if (f)
        for (const l in s)
          if (u)
            !(l in n) && bt(i, l, null);
          else
            break;
      if (u)
        for (const l in n) {
          const c = n[l];
          f && s[l] === c || bt(i, l, c);
        }
      else
        i.cssText = n;
    } else {
      const i = t[0] == "$" ? t.slice(1) : t;
      i === t && (!o && !Te[t] && t in e || S(n) || S(s)) ? e[t] = n ?? "" : n == null ? e.removeAttribute(i) : e.setAttribute(
        i,
        R(n) ? JSON.stringify(n) : n
      );
    }
}
function Re(e, t, s, n) {
  if (n.handleEvent || (n.handleEvent = (o) => n[o.type].call(e, o)), s) {
    if (!n[t]) {
      const o = s.capture || s.once || s.passive ? Object.assign({}, s) : null;
      e.addEventListener(t, n, o);
    }
    n[t] = s;
  } else
    n[t] && (e.removeEventListener(t, n), delete n[t]);
}
function bt(e, t, s) {
  let n = "setProperty";
  s == null && (n = "removeProperty", s = null), ~t.indexOf("-") ? e[n](t, s) : e[t] = s;
}
var gt = {};
function q(e, ...t) {
  const s = (e.raw || e).reduce(
    (n, o, r) => n + o + (t[r] || ""),
    ""
  );
  return gt[s] = gt[s] || Fe(s);
}
function Fe(e) {
  if (Yt.sheet) {
    const t = new CSSStyleSheet();
    return t.replaceSync(e), t;
  } else {
    const t = document.createElement("style");
    return t.textContent = e, t;
  }
}
var Ie = jt("host", { style: "display: contents" });
var Z = k("atomico/context");
var xe = (e, t) => {
  const s = U();
  Se(
    () => Rt(
      s.current,
      "ConnectContext",
      /**
       * @param {CustomEvent<import("context").DetailConnectContext>} event
       */
      (n) => {
        e === n.detail.id && (n.stopPropagation(), n.detail.connect(t));
      }
    ),
    [e]
  );
};
var Ue = (e) => {
  const t = v("ConnectContext", {
    bubbles: true,
    composed: true
  }), s = () => {
    let r;
    return t({
      id: e,
      connect(i) {
        r = i;
      }
    }), r;
  }, [n, o] = it(
    s
  );
  return j(() => {
    n || (e[Z] || (e[Z] = customElements.whenDefined(
      new e().localName
    )), e[Z].then(
      () => o(s)
    ));
  }, [e]), n;
};
var _e2 = (e) => {
  const t = Ue(e), s = kt();
  return j(() => {
    if (t)
      return Rt(t, "UpdatedValue", s);
  }, [t]), (t || e).value;
};
var Le = (e) => {
  const t = $(
    () => (xe(t, U().current), Ie),
    {
      props: {
        value: {
          type: Object,
          event: { type: "UpdatedValue" },
          value: () => e
        }
      }
    }
  );
  return t.value = e, t;
};
var p = (e, t, s) => (t == null ? t = { key: s } : t.key = s, jt(e, t));
var I = p;
var zt = q`*,*:before,*:after{box-sizing:border-box}button{padding:0;touch-action:manipulation}`;
var Bt = q`.vh{position:absolute;transform:scale(0)}`;
function at() {
  return g.from(/* @__PURE__ */ new Date());
}
function ct(e, t = 0) {
  const s = e.toDate(), n = s.getUTCDay(), o = (n < t ? 7 : 0) + n - t;
  return s.setUTCDate(s.getUTCDate() - o), g.from(s);
}
function Ht(e, t = 0) {
  return ct(e, t).add({ days: 6 });
}
function ut(e) {
  return g.from(new Date(Date.UTC(e.year, e.month, 0)));
}
function Wt(e, t) {
  const s = e.toDate(), n = t.toDate();
  return s < n ? -1 : s > n ? 1 : 0;
}
function z(e, t, s) {
  return t && g.compare(e, t) < 0 ? t : s && g.compare(e, s) > 0 ? s : e;
}
function st(e, t, s) {
  return z(e, t, s) === e;
}
function Ye(e, t) {
  const s = { days: 1 }, n = [e];
  for (; !e.equals(t); )
    e = e.add(s), n.push(e);
  return n;
}
function $e(e, t) {
  const s = [];
  for (let n = 0; n < e.length; n += t)
    s.push(e.slice(n, n + t));
  return s;
}
function je(e, t = 0) {
  const s = ct(e.toPlainDate(), t), n = Ht(ut(e), t);
  return $e(Ye(s, n), 7);
}
var qe = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/;
var Kt = "years";
var Jt = "months";
var Zt = "days";
function ze(e) {
  if (Kt in e)
    return { years: -e.years };
  if (Jt in e)
    return { months: -e.months };
  if (Zt in e)
    return { days: -e.days };
  throw new TypeError();
}
function Be(e, t) {
  return g.from(new Date(Date.UTC(e.year, e.month - 1, t)));
}
function He(e, t) {
  const s = new g(t, e.month, 1), n = ut(s), o = e.toDate();
  return o.setUTCFullYear(t), z(g.from(o), s, n);
}
function We(e, t) {
  const s = new g(e.year, t, 1), n = ut(s), o = e.toDate();
  return o.setUTCMonth(t - 1), z(g.from(o), s, n);
}
function Dt(e, t) {
  return Zt in t ? Be(e, e.day + t.days) : Jt in t ? We(e, e.month + t.months) : Kt in t ? He(e, e.year + t.years) : e;
}
var X = (e, t) => e.toString().padStart(t, "0");
var g = class _g {
  constructor(t, s, n) {
    this.year = t, this.month = s, this.day = n;
  }
  add(t) {
    return Dt(this, t);
  }
  subtract(t) {
    return Dt(this, ze(t));
  }
  toString() {
    return `${X(this.year, 4)}-${X(this.month, 2)}-${X(this.day, 2)}`;
  }
  toDate() {
    return new Date(Date.UTC(this.year, this.month - 1, this.day, 0, 0, 0));
  }
  toPlainYearMonth() {
    return new C(this.year, this.month);
  }
  equals(t) {
    return this.year === t.year && this.month === t.month && this.day === t.day;
  }
  static compare(t, s) {
    return Wt(t, s);
  }
  static from(t) {
    return typeof t == "string" ? this.fromString(t) : this.fromDate(t);
  }
  static fromString(t) {
    const s = t.match(qe);
    if (!s)
      throw new TypeError(t);
    const [, n, o, r] = s;
    return new _g(
      parseInt(n, 10),
      parseInt(o, 10),
      parseInt(r, 10)
    );
  }
  static fromDate(t) {
    return new _g(
      t.getUTCFullYear(),
      t.getUTCMonth() + 1,
      t.getUTCDate()
    );
  }
};
function wt(e) {
  return (e.months ?? 0) + (e.years ?? 0) * 12;
}
function Et(e, t) {
  const s = e.toDate();
  return s.setUTCMonth(s.getUTCMonth() + t), new C(s.getUTCFullYear(), s.getUTCMonth() + 1);
}
var C = class {
  constructor(t, s) {
    this.year = t, this.month = s;
  }
  add(t) {
    return Et(this, wt(t));
  }
  subtract(t) {
    return Et(this, -wt(t));
  }
  toDate() {
    return new Date(Date.UTC(this.year, this.month - 1, 1));
  }
  equals(t) {
    return this.year === t.year && this.month === t.month;
  }
  toPlainDate() {
    return new g(this.year, this.month, 1);
  }
  static compare(t, s) {
    const n = t instanceof g ? t.toPlainYearMonth() : t, o = s instanceof g ? s.toPlainYearMonth() : s;
    return Wt(n, o);
  }
};
function ot(e, t) {
  if (t)
    try {
      return e.from(t);
    } catch {
    }
}
function rt(e) {
  const [t, s] = Lt(e);
  return [P(() => ot(g, t), [t]), (r) => s(r.toString())];
}
function Ke(e) {
  if (e) {
    const [t, s] = e.split("/"), n = ot(g, t), o = ot(g, s);
    if (n && o)
      return [n, o];
  }
  return [];
}
function Je(e, t) {
  return `${e}/${t}`;
}
function Ze(e) {
  const [t, s] = Lt(e);
  return [P(() => Ke(t), [t]), (r) => s(Je(r[0], r[1]))];
}
function x(e, t) {
  return P(
    () => new Intl.DateTimeFormat(t, { timeZone: "UTC", ...e }),
    [t, e]
  );
}
function St(e, t, s) {
  const n = x(e, s);
  return P(() => {
    const o = [], r = /* @__PURE__ */ new Date();
    for (var i = 0; i < 7; i++) {
      const f = (r.getDay() - t + 7) % 7;
      o[f] = n.format(r), r.setDate(r.getDate() + 1);
    }
    return o;
  }, [t, n]);
}
function Xe(e) {
  let t = "";
  for (const s in e)
    e[s] && (t += ` ${s}`);
  return t;
}
var vt = (e) => e.target.matches(":dir(ltr)");
var Ge = { month: "long", day: "numeric" };
var Qe = { month: "long" };
var Ve = { weekday: "narrow" };
var tn = { weekday: "long" };
var G = { bubbles: true };
function en({ props: e, context: t }) {
  const { offset: s } = e, { firstDayOfWeek: n, isDateDisallowed: o, min: r, max: i, dateWindow: f, locale: u } = t, l = at(), c = St(tn, n, u), h = St(Ve, n, u), a = x(Ge, u), d = x(Qe, u), { focusedDate: y } = f, D = P(
    () => f.start.add({ months: s }),
    [f, s]
  ), m = P(
    () => je(D, n),
    [D, n]
  ), w = v("focusday", G), M = v("selectday", G), te = v("hoverday", G);
  function ft(b) {
    w(z(b, r, i));
  }
  function ee(b) {
    let E;
    switch (b.key) {
      case "ArrowRight":
        E = y.add({ days: vt(b) ? 1 : -1 });
        break;
      case "ArrowLeft":
        E = y.add({ days: vt(b) ? -1 : 1 });
        break;
      case "ArrowDown":
        E = y.add({ days: 7 });
        break;
      case "ArrowUp":
        E = y.add({ days: -7 });
        break;
      case "PageUp":
        E = y.add(b.shiftKey ? { years: -1 } : { months: -1 });
        break;
      case "PageDown":
        E = y.add(b.shiftKey ? { years: 1 } : { months: 1 });
        break;
      case "Home":
        E = ct(y, n);
        break;
      case "End":
        E = Ht(y, n);
        break;
      default:
        return;
    }
    ft(E), b.preventDefault();
  }
  function ne(b) {
    var _a;
    const E = D.equals(b), se = b.equals(y), dt = b.equals(l), ht = b.toDate(), _ = o == null ? void 0 : o(ht), mt = !st(b, r, i);
    let A = false, yt = false, B = false, H = false;
    if ("highlightedRange" in t) {
      const [W, K] = t.highlightedRange;
      yt = true, B = (W == null ? void 0 : W.equals(b)) ?? false, H = (K == null ? void 0 : K.equals(b)) ?? false, A = W && K ? st(b, W, K) : false;
    } else
      "value" in t && (A = ((_a = t.value) == null ? void 0 : _a.equals(b)) ?? false);
    return {
      part: Xe({
        button: true,
        day: true,
        selected: E && A,
        today: dt,
        disallowed: _,
        outside: !E,
        "range-start": B,
        "range-end": H,
        "range-inner": yt && A && !B && !H
      }),
      tabindex: E && se ? 0 : -1,
      disabled: mt,
      "aria-disabled": _ ? "true" : void 0,
      "aria-pressed": E && A,
      "aria-current": dt ? "date" : void 0,
      "aria-label": a.format(ht),
      onkeydown: ee,
      onclick() {
        _ || M(b), ft(b);
      },
      onmouseover() {
        !_ && !mt && te(b);
      }
    };
  }
  return {
    weeks: m,
    yearMonth: D,
    dayNamesLong: c,
    dayNamesShort: h,
    monthFormatter: d,
    getDayProps: ne
  };
}
var T = class _T {
  constructor(t, s, n) {
    __publicField(this, "end");
    this.start = t, this.duration = s, this.focusedDate = n, this.end = t.add({ months: s.months - 1 });
  }
  contains(t) {
    return C.compare(t, this.start) >= 0 && C.compare(t, this.end) <= 0;
  }
  adjust(t) {
    const { start: s, duration: n } = this, o = C.compare(s, t) > 0;
    let r = new _T(s, n, t);
    for (; !r.contains(t); )
      r = new _T(
        o ? r.start.subtract(n) : r.start.add(n),
        n,
        t
      );
    return r;
  }
  next() {
    return new _T(
      this.start.add(this.duration),
      this.duration,
      this.focusedDate.add(this.duration)
    );
  }
  prev() {
    return new _T(
      this.start.subtract(this.duration),
      this.duration,
      this.focusedDate.subtract(this.duration)
    );
  }
};
var Tt = at();
var lt = Le({
  firstDayOfWeek: 0,
  isDateDisallowed: () => false,
  dateWindow: new T(Tt.toPlainYearMonth(), { months: 1 }, Tt)
});
customElements.define("calendar-month-ctx", lt);
var nn = $(
  (e) => {
    const t = _e2(lt), s = ae(), n = en({ props: e, context: t });
    function o() {
      var _a;
      (_a = s.current.querySelector("button[tabindex='0']")) == null ? void 0 : _a.focus();
    }
    return I("host", { shadowDom: true, focus: o, children: [
      p("div", { id: "heading", part: "heading", children: n.monthFormatter.format(n.yearMonth.toDate()) }),
      I("table", { ref: s, "aria-labelledby": "heading", part: "table", children: [
        p("thead", { children: p("tr", { part: "tr head", children: n.dayNamesLong.map((r, i) => I("th", { part: "th", scope: "col", children: [
          p("span", { class: "vh", children: r }),
          p("span", { "aria-hidden": "true", children: n.dayNamesShort[i] })
        ] })) }) }),
        p("tbody", { children: n.weeks.map((r, i) => p("tr", { part: "tr week", children: r.map((f, u) => {
          const l = n.yearMonth.equals(f), c = t.showOutsideDays || l;
          return p("td", { part: "td", children: c && p("button", { ...n.getDayProps(f), children: f.day }) }, u);
        }) }, i)) })
      ] })
    ] });
  },
  {
    props: {
      offset: {
        type: Number,
        value: 0
      }
    },
    styles: [
      zt,
      Bt,
      q`:host{--color-accent: black;--color-text-on-accent: white;display:flex;flex-direction:column;gap:.25rem;text-align:center;inline-size:fit-content}table{border-collapse:collapse;border-spacing:0;table-layout:fixed;inline-size:max-content;font-size:.875rem}th{font-weight:700;block-size:2.25rem}td{padding-inline:0;padding-block:1px}button{color:inherit;font-size:inherit;background:transparent;border:0;cursor:pointer;font-variant-numeric:tabular-nums;block-size:2.25rem;inline-size:2.25rem}button:hover:where(:not(:disabled)){background:#0000000d}button:is([aria-pressed=true],:focus-visible){background:var(--color-accent);color:var(--color-text-on-accent)}button:focus-visible{outline:1px solid var(--color-text-on-accent);outline-offset:-2px}button:disabled,:host::part(outside),:host::part(disallowed){cursor:default;opacity:.5}`
    ]
  }
);
customElements.define("calendar-month", nn);
function Xt(e) {
  const t = e.dateWindow.start.toDate(), s = e.dateWindow.end.toDate();
  return I("div", { role: "group", "aria-labelledby": "label", part: "container", children: [
    p("div", { id: "label", class: "vh", "aria-live": "polite", "aria-atomic": "true", children: e.formatVerbose.formatRange(t, s) }),
    I("div", { class: "header", part: "header", children: [
      p(
        "button",
        {
          part: `button previous ${e.previous ? "" : "disabled"}`,
          onclick: e.previous,
          "aria-disabled": e.previous ? null : "true",
          children: p("slot", { name: "previous", children: "Previous" })
        }
      ),
      p("div", { id: "heading", part: "heading", "aria-hidden": "true", children: e.format.formatRange(t, s) }),
      p(
        "button",
        {
          part: `button next ${e.next ? "" : "disabled"}`,
          onclick: e.next,
          "aria-disabled": e.next ? null : "true",
          children: p("slot", { name: "next", children: "Next" })
        }
      )
    ] }),
    p(
      lt,
      {
        value: e,
        onselectday: e.onSelect,
        onfocusday: e.onFocus,
        onhoverday: e.onHover,
        children: p("slot", {})
      }
    )
  ] });
}
var Gt = {
  value: {
    type: String,
    value: ""
  },
  min: {
    type: String,
    value: ""
  },
  max: {
    type: String,
    value: ""
  },
  isDateDisallowed: {
    type: Function,
    value: (e) => false
  },
  firstDayOfWeek: {
    type: Number,
    value: () => 1
  },
  showOutsideDays: {
    type: Boolean,
    value: () => false
  },
  locale: {
    type: String,
    value: () => {
    }
  },
  months: {
    type: Number,
    value: 1
  }
};
var Qt = [
  zt,
  Bt,
  q`:host{display:block;inline-size:fit-content}[role=group]{display:flex;flex-direction:column;gap:1em}.header{display:flex;align-items:center;justify-content:space-between}#heading{font-weight:700;font-size:1.25em}button{cursor:pointer;user-select:none;display:flex;align-items:center;justify-content:center}button[aria-disabled]{cursor:default;opacity:.4}`
];
var sn = { year: "numeric" };
var on = { year: "numeric", month: "long" };
function Vt({ months: e, locale: t }) {
  const [s] = rt("min"), [n] = rt("max"), o = v("focusday"), r = v("change"), [i, f] = it(() => {
    const m = at(), w = e === 12 ? new C(m.year, 1) : m.toPlainYearMonth();
    return new T(w, { months: e }, m);
  });
  function u(m) {
    f(m), o(m.focusedDate.toDate());
  }
  function l(m) {
    f(i.adjust(m));
  }
  const c = U();
  function h() {
    c.current.querySelectorAll("calendar-month").forEach((m) => m.focus());
  }
  const a = x(sn, t), d = x(on, t), y = n == null || !i.contains(n), D = s == null || !i.contains(s);
  return {
    format: a,
    formatVerbose: d,
    dateWindow: i,
    dispatch: r,
    handleFocus(m) {
      m.stopPropagation(), l(m.detail), o(m.detail.toDate()), setTimeout(h);
    },
    setFocusedDate: l,
    min: s,
    max: n,
    next: y ? () => u(i.next()) : void 0,
    previous: D ? () => u(i.prev()) : void 0,
    focus: h
  };
}
var rn = $(
  (e) => {
    const [t, s] = rt("value"), n = Vt(e);
    j(() => {
      t && n.setFocusedDate(t);
    }, [t]);
    function o(r) {
      s(r.detail), n.dispatch();
    }
    return p("host", { shadowDom: true, focus: n.focus, children: p(
      Xt,
      {
        ...e,
        ...n,
        value: t,
        onFocus: n.handleFocus,
        onSelect: o
      }
    ) });
  },
  { props: Gt, styles: Qt }
);
customElements.define("calendar-date", rn);
var Ct = (e, t) => g.compare(e, t) < 0 ? [e, t] : [t, e];
var an = $(
  (e) => {
    const [t, s] = Ze("value"), n = Vt(e), o = v("rangestart"), r = v("rangeend"), [i, f] = it();
    j(() => {
      t.length && !st(n.dateWindow.focusedDate, t[0], t[1]) && n.setFocusedDate(t[1]);
    }, [t]);
    async function u(a) {
      n.handleFocus(a), l(a);
    }
    function l(a) {
      a.stopPropagation(), f((d) => d && { ...d, second: a.detail });
    }
    function c(a) {
      const d = a.detail;
      a.stopPropagation(), i ? (s(Ct(i.first, d)), f(void 0), r(d.toDate()), n.dispatch()) : (f({ first: d, second: d }), o(d.toDate()));
    }
    const h = i ? Ct(i.first, i.second) : t;
    return p("host", { shadowDom: true, focus: n.focus, children: p(
      Xt,
      {
        ...e,
        ...n,
        highlightedRange: h,
        onFocus: u,
        onHover: l,
        onSelect: c
      }
    ) });
  },
  { props: Gt, styles: Qt }
);
customElements.define("calendar-range", an);
export {
  rn as CalendarDate,
  nn as CalendarMonth,
  an as CalendarRange
};
//# sourceMappingURL=cally.js.map
