import { a as e, i as t, n, o as r, r as i, s as a, t as o } from "./index-DS6a7H3j.js";
function s(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function c(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var l = (e, t, n) => (n > t ? t : n < e ? e : n),
  u = {},
  d = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  f = (e) => typeof e == `object` && !!e,
  p = (e) => /^0[^.\s]+$/u.test(e);
function m(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var h = (e) => e,
  g = (...e) => e.reduce((e, t) => (n) => t(e(n))),
  _ = (e, t, n) => {
    let r = t - e;
    return r ? (n - e) / r : 1;
  },
  v = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return (s(this.subscriptions, e), () => c(this.subscriptions, e));
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let r = this.subscriptions[i];
            r && r(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  y = (e) => e * 1e3,
  b = (e) => e / 1e3,
  x = (e, t) => (t ? (1e3 / t) * e : 0),
  S = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  C = 1e-7,
  w = 12;
function ee(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = S(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > C && ++s < w);
  return o;
}
function T(e, t, n, r) {
  if (e === t && n === r) return h;
  let i = (t) => ee(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : S(i(e), t, r));
}
var te = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  ne = (e) => (t) => 1 - e(1 - t),
  re = T(0.33, 1.53, 0.69, 0.99),
  ie = ne(re),
  ae = te(ie),
  oe = (e) => (e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * ie(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  se = (e) => 1 - Math.sin(Math.acos(e)),
  ce = ne(se),
  le = te(se),
  ue = T(0.42, 0, 1, 1),
  de = T(0, 0, 0.58, 1),
  fe = T(0.42, 0, 0.58, 1),
  pe = (e) => Array.isArray(e) && typeof e[0] == `number`,
  me = (e) => Array.isArray(e) && typeof e[0] != `number`,
  he = {
    linear: h,
    easeIn: ue,
    easeInOut: fe,
    easeOut: de,
    circIn: se,
    circInOut: le,
    circOut: ce,
    backIn: ie,
    backInOut: ae,
    backOut: re,
    anticipate: oe,
  },
  ge = (e) => typeof e == `string`,
  _e = (e) => {
    if (pe(e)) {
      e.length;
      let [t, n, r, i] = e;
      return T(t, n, r, i);
    } else if (ge(e)) return (he[e], `${e}`, he[e]);
    return e;
  },
  ve = [
    `setup`,
    `read`,
    `resolveKeyframes`,
    `preUpdate`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ];
function ye(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      ((t = n), (n = a), t.forEach(s), t.clear(), (r = !1), i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var be = 40;
function xe(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = ve.reduce((e, t) => ((e[t] = ye(a)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: d,
      update: f,
      preRender: p,
      render: m,
      postRender: h,
    } = o,
    g = () => {
      let a = u.useManualTiming,
        o = a ? i.timestamp : performance.now();
      ((n = !1),
        a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, be), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        h.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g)));
    },
    _ = () => {
      ((n = !0), (r = !0), i.isProcessing || e(g));
    };
  return {
    schedule: ve.reduce((e, t) => {
      let r = o[t];
      return ((e[t] = (e, t = !1, i = !1) => (n || _(), r.schedule(e, t, i))), e);
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < ve.length; t++) o[ve[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: E,
    cancel: D,
    state: O,
    steps: Se,
  } = xe(typeof requestAnimationFrame < `u` ? requestAnimationFrame : h, !0),
  Ce;
function we() {
  Ce = void 0;
}
var k = {
    now: () => (
      Ce === void 0 && k.set(O.isProcessing || u.useManualTiming ? O.timestamp : performance.now()),
      Ce
    ),
    set: (e) => {
      ((Ce = e), queueMicrotask(we));
    },
  },
  Te = (e) => (t) => typeof t == `string` && t.startsWith(e),
  Ee = Te(`--`),
  De = Te(`var(--`),
  Oe = (e) => (De(e) ? ke.test(e.split(`/*`)[0].trim()) : !1),
  ke = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ae(e) {
  return typeof e == `string` ? e.split(`/*`)[0].includes(`var(--`) : !1;
}
var je = { test: (e) => typeof e == `number`, parse: parseFloat, transform: (e) => e },
  Me = { ...je, transform: (e) => l(0, 1, e) },
  Ne = { ...je, default: 1 },
  Pe = (e) => Math.round(e * 1e5) / 1e5,
  Fe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ie(e) {
  return e == null;
}
var Le =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Re = (e, t) => (n) =>
    !!(
      (typeof n == `string` && Le.test(n) && n.startsWith(e)) ||
      (t && !Ie(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ze = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Fe);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  Be = (e) => l(0, 255, e),
  Ve = { ...je, transform: (e) => Math.round(Be(e)) },
  He = {
    test: Re(`rgb`, `red`),
    parse: ze(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      Ve.transform(e) +
      `, ` +
      Ve.transform(t) +
      `, ` +
      Ve.transform(n) +
      `, ` +
      Pe(Me.transform(r)) +
      `)`,
  };
function Ue(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var We = { test: Re(`#`), parse: Ue, transform: He.transform },
  Ge = (e) => ({
    test: (t) => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  A = Ge(`deg`),
  j = Ge(`%`),
  M = Ge(`px`),
  Ke = Ge(`vh`),
  qe = Ge(`vw`),
  Je = { ...j, parse: (e) => j.parse(e) / 100, transform: (e) => j.transform(e * 100) },
  Ye = {
    test: Re(`hsl`, `hue`),
    parse: ze(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      j.transform(Pe(t)) +
      `, ` +
      j.transform(Pe(n)) +
      `, ` +
      Pe(Me.transform(r)) +
      `)`,
  },
  N = {
    test: (e) => He.test(e) || We.test(e) || Ye.test(e),
    parse: (e) => (He.test(e) ? He.parse(e) : Ye.test(e) ? Ye.parse(e) : We.parse(e)),
    transform: (e) =>
      typeof e == `string` ? e : e.hasOwnProperty(`red`) ? He.transform(e) : Ye.transform(e),
    getAnimatableNone: (e) => {
      let t = N.parse(e);
      return ((t.alpha = 0), N.transform(t));
    },
  },
  Xe =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ze(e) {
  return (
    isNaN(e) && typeof e == `string` && (e.match(Fe)?.length || 0) + (e.match(Xe)?.length || 0) > 0
  );
}
var Qe = `number`,
  $e = `color`,
  et = `var`,
  tt = `var(`,
  nt = "${}",
  rt =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function it(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        rt,
        (e) => (
          N.test(e)
            ? (r.color.push(a), i.push($e), n.push(N.parse(e)))
            : e.startsWith(tt)
              ? (r.var.push(a), i.push(et), n.push(e))
              : (r.number.push(a), i.push(Qe), n.push(parseFloat(e))),
          ++a,
          nt
        ),
      )
      .split(nt),
    indexes: r,
    types: i,
  };
}
function at(e) {
  return it(e).values;
}
function ot({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        e === Qe ? (i += Pe(r[a])) : e === $e ? (i += N.transform(r[a])) : (i += r[a]);
      }
    return i;
  };
}
function st(e) {
  return ot(it(e));
}
var ct = (e) => (typeof e == `number` ? 0 : N.test(e) ? N.getAnimatableNone(e) : e),
  lt = (e, t) => (typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : ct(e));
function ut(e) {
  let t = it(e);
  return ot(t)(t.values.map((e, n) => lt(e, t.split[n])));
}
var P = { test: Ze, parse: at, createTransformer: st, getAnimatableNone: ut };
function dt(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ft({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = dt(s, r, e + 1 / 3)), (a = dt(s, r, e)), (o = dt(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function pt(e, t) {
  return (n) => (n > 0 ? t : e);
}
var F = (e, t, n) => e + (t - e) * n,
  mt = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  ht = [We, He, Ye],
  gt = (e) => ht.find((t) => t.test(e));
function _t(e) {
  let t = gt(e);
  if ((`${e}`, !t)) return !1;
  let n = t.parse(e);
  return (t === Ye && (n = ft(n)), n);
}
var vt = (e, t) => {
    let n = _t(e),
      r = _t(t);
    if (!n || !r) return pt(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = mt(n.red, r.red, e)),
      (i.green = mt(n.green, r.green, e)),
      (i.blue = mt(n.blue, r.blue, e)),
      (i.alpha = F(n.alpha, r.alpha, e)),
      He.transform(i)
    );
  },
  yt = new Set([`none`, `hidden`]);
function bt(e, t) {
  return yt.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function xt(e, t) {
  return (n) => F(e, t, n);
}
function St(e) {
  return typeof e == `number`
    ? xt
    : typeof e == `string`
      ? Oe(e)
        ? pt
        : N.test(e)
          ? vt
          : Et
      : Array.isArray(e)
        ? Ct
        : typeof e == `object`
          ? N.test(e)
            ? vt
            : wt
          : pt;
}
function Ct(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => St(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function wt(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = St(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function Tt(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]];
    ((n[i] = e.values[o] ?? 0), r[a]++);
  }
  return n;
}
var Et = (e, t) => {
  let n = P.createTransformer(t),
    r = it(e),
    i = it(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (yt.has(e) && !i.values.length) || (yt.has(t) && !r.values.length)
      ? bt(e, t)
      : g(Ct(Tt(r, i), i.values), n)
    : (`${e}${t}`, pt(e, t));
};
function Dt(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? F(e, t, n)
    : St(e)(e, t);
}
var Ot = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: (e = !0) => E.update(t, e),
      stop: () => D(t),
      now: () => (O.isProcessing ? O.timestamp : k.now()),
    };
  },
  kt = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  At = 2e4;
function jt(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4; ) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function Mt(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(jt(r), At);
  return { type: `keyframes`, ease: (e) => r.next(i * e).value / t, duration: b(i) };
}
var I = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Nt(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var Pt = 12;
function Ft(e, t, n) {
  let r = n;
  for (let n = 1; n < Pt; n++) r -= e(r) / t(r);
  return r;
}
var It = 0.001;
function Lt({
  duration: e = I.duration,
  bounce: t = I.bounce,
  velocity: n = I.velocity,
  mass: r = I.mass,
}) {
  let i, a;
  I.maxDuration;
  let o = 1 - t;
  ((o = l(I.minDamping, I.maxDamping, o)),
    (e = l(I.minDuration, I.maxDuration, b(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = Nt(t, o),
            c = Math.exp(-i);
          return It - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = Nt(t ** 2, o);
          return ((-i(t) + It > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = Ft(i, a, s);
  if (((e = y(e)), isNaN(c))) return { stiffness: I.stiffness, damping: I.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var Rt = [`duration`, `bounce`],
  zt = [`stiffness`, `damping`, `mass`];
function Bt(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function Vt(e) {
  let t = {
    velocity: I.velocity,
    stiffness: I.stiffness,
    damping: I.damping,
    mass: I.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Bt(e, zt) && Bt(e, Rt))
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * l(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: I.mass, stiffness: i, damping: a };
    } else {
      let n = Lt({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: I.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Ht(e = I.visualDuration, t = I.bounce) {
  let n = typeof e == `object` ? e : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = Vt({ ...n, velocity: -b(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = b(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? I.restSpeed.granular : I.restSpeed.default),
    (i ||= v ? I.restDelta.granular : I.restDelta.default));
  let x, S, C, w, ee, T;
  if (h < 1)
    ((C = Nt(_, h)),
      (w = (m + h * _ * g) / C),
      (x = (e) => o - Math.exp(-h * _ * e) * (w * Math.sin(C * e) + g * Math.cos(C * e))),
      (ee = h * _ * w + g * C),
      (T = h * _ * g - w * C),
      (S = (e) => Math.exp(-h * _ * e) * (ee * Math.sin(C * e) + T * Math.cos(C * e))));
  else if (h === 1) {
    x = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
    let e = m + _ * g;
    S = (t) => Math.exp(-_ * t) * (_ * e * t - m);
  } else {
    let e = _ * Math.sqrt(h * h - 1);
    x = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e;
    };
    let t = (m + h * _ * g) / e,
      n = h * _ * t - g * e,
      r = h * _ * g - t * e;
    S = (t) => {
      let i = Math.exp(-h * _ * t),
        a = Math.min(e * t, 300);
      return i * (n * Math.sinh(a) + r * Math.cosh(a));
    };
  }
  let te = {
    calculatedDuration: (p && d) || null,
    velocity: (e) => y(S(e)),
    next: (e) => {
      if (!p && h < 1) {
        let t = Math.exp(-h * _ * e),
          n = Math.sin(C * e),
          a = Math.cos(C * e),
          c = o - t * (w * n + g * a),
          l = y(t * (ee * n + T * a));
        return ((s.done = Math.abs(l) <= r && Math.abs(o - c) <= i), (s.value = s.done ? o : c), s);
      }
      let t = x(e);
      if (p) s.done = e >= d;
      else {
        let n = y(S(e));
        s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(jt(te), At),
        t = kt((t) => te.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
    toTransition: () => {},
  };
  return te;
}
Ht.applyToOptions = (e) => {
  let t = Mt(e, 100, Ht);
  return ((e.ease = t.ease), (e.duration = y(t.duration)), (e.type = `keyframes`), e);
};
var Ut = 5;
function Wt(e, t, n) {
  let r = Math.max(t - Ut, 0);
  return x(n - e(r), t - r);
}
function Gt({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) => (s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c),
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = Ht({
          keyframes: [f.value, m(f.value)],
          velocity: Wt(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
function Kt(e, t, n) {
  let r = [],
    i = n || u.mix || Dt,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = g(Array.isArray(t) ? t[n] || h : t, a)), r.push(a));
  }
  return r;
}
function qt(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = Kt(t, r, i),
    c = s.length,
    u = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = _(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => u(l(e[0], e[a - 1], t)) : u;
}
function Jt(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = _(0, t, r);
    e.push(F(n, 1, i));
  }
}
function Yt(e) {
  let t = [0];
  return (Jt(t, e.length - 1), t);
}
function Xt(e, t) {
  return e.map((e) => e * t);
}
function Zt(e, t) {
  return e.map(() => t || fe).splice(0, e.length - 1);
}
function Qt({ duration: e = 300, keyframes: t, times: n, ease: r = `easeInOut` }) {
  let i = me(r) ? r.map(_e) : _e(r),
    a = { done: !1, value: t[0] },
    o = qt(Xt(n && n.length === t.length ? n : Yt(t), e), t, {
      ease: Array.isArray(i) ? i : Zt(t, i),
    });
  return { calculatedDuration: e, next: (t) => ((a.value = o(t)), (a.done = t >= e), a) };
}
var $t = (e) => e !== null;
function en(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter($t),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
var tn = { decay: Gt, inertia: Gt, tween: Qt, keyframes: Qt, spring: Ht };
function nn(e) {
  typeof e.type == `string` && (e.type = tn[e.type]);
}
var rn = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((e) => {
        this.resolve = e;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
  },
  an = (e) => e / 100,
  on = class extends rn {
    constructor(e) {
      (super(),
        (this.state = `idle`),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          let { motionValue: e } = this.options;
          (e && e.updatedAt !== k.now() && this.tick(k.now()),
            (this.isStopped = !0),
            this.state !== `idle` && (this.teardown(), this.options.onStop?.()));
        }),
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause());
    }
    initAnimation() {
      let { options: e } = this;
      nn(e);
      let { type: t = Qt, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e,
        { keyframes: o } = e,
        s = t || Qt;
      s !== Qt &&
        typeof o[0] != `number` &&
        ((this.mixKeyframes = g(an, Dt(o[0], o[1]))), (o = [0, 100]));
      let c = s({ ...e, keyframes: o });
      (i === `mirror` &&
        (this.mirroredGenerator = s({ ...e, keyframes: [...o].reverse(), velocity: -a })),
        c.calculatedDuration === null && (c.calculatedDuration = jt(c)));
      let { calculatedDuration: l } = c;
      ((this.calculatedDuration = l),
        (this.resolvedDuration = l + r),
        (this.totalDuration = this.resolvedDuration * (n + 1) - r),
        (this.generator = c));
    }
    updateTime(e) {
      let t = Math.round(e - this.startTime) * this.playbackSpeed;
      this.holdTime === null ? (this.currentTime = t) : (this.currentTime = this.holdTime);
    }
    tick(e, t = !1) {
      let {
        generator: n,
        totalDuration: r,
        mixKeyframes: i,
        mirroredGenerator: a,
        resolvedDuration: o,
        calculatedDuration: s,
      } = this;
      if (this.startTime === null) return n.next(0);
      let {
        delay: c = 0,
        keyframes: u,
        repeat: d,
        repeatType: f,
        repeatDelay: p,
        type: m,
        onUpdate: h,
        finalKeyframe: g,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)),
        t ? (this.currentTime = e) : this.updateTime(e));
      let _ = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        v = this.playbackSpeed >= 0 ? _ < 0 : _ > r;
      ((this.currentTime = Math.max(_, 0)),
        this.state === `finished` && this.holdTime === null && (this.currentTime = r));
      let y = this.currentTime,
        b = n;
      if (d) {
        let e = Math.min(this.currentTime, r) / o,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, d + 1)),
          t % 2 && (f === `reverse` ? ((n = 1 - n), p && (n -= p / o)) : f === `mirror` && (b = a)),
          (y = l(0, 1, n) * o));
      }
      let x;
      (v ? ((this.delayState.value = u[0]), (x = this.delayState)) : (x = b.next(y)),
        i && !v && (x.value = i(x.value)));
      let { done: S } = x;
      !v &&
        s !== null &&
        (S = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
      let C =
        this.holdTime === null && (this.state === `finished` || (this.state === `running` && S));
      return (
        C && m !== Gt && (x.value = en(u, this.options, g, this.speed)),
        h && h(x.value),
        C && this.finish(),
        x
      );
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
    get duration() {
      return b(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + b(e);
    }
    get time() {
      return b(this.currentTime);
    }
    set time(e) {
      ((e = y(e)),
        (this.currentTime = e),
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0), (this.state = `paused`), (this.holdTime = e), this.tick(e)));
    }
    getGeneratorVelocity() {
      let e = this.currentTime;
      if (e <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(e);
      let t = this.generator.next(e).value;
      return Wt((e) => this.generator.next(e).value, e, t);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (t && this.driver && this.updateTime(k.now()),
        (this.playbackSpeed = e),
        t && this.driver && (this.time = b(this.currentTime)));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e = Ot, startTime: t } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
      let n = this.driver.now();
      (this.state === `finished`
        ? (this.updateFinished(), (this.startTime = n))
        : this.holdTime === null
          ? (this.startTime ||= t ?? n)
          : (this.startTime = n - this.holdTime),
        this.state === `finished` && this.speed < 0 && (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      ((this.state = `paused`), this.updateTime(k.now()), (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== `running` && this.play(), (this.state = `finished`), (this.holdTime = null));
    }
    finish() {
      (this.notifyFinished(),
        this.teardown(),
        (this.state = `finished`),
        this.options.onComplete?.());
    }
    cancel() {
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.());
    }
    teardown() {
      ((this.state = `idle`), this.stopDriver(), (this.startTime = this.holdTime = null));
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
    attachTimeline(e) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = `keyframes`), (this.options.ease = `linear`), this.initAnimation()),
        this.driver?.stop(),
        e.observe(this)
      );
    }
  };
function sn(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
var cn = (e) => (e * 180) / Math.PI,
  ln = (e) => dn(cn(Math.atan2(e[1], e[0]))),
  un = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: ln,
    rotateZ: ln,
    skewX: (e) => cn(Math.atan(e[1])),
    skewY: (e) => cn(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  dn = (e) => ((e %= 360), e < 0 && (e += 360), e),
  fn = ln,
  pn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  mn = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  hn = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: pn,
    scaleY: mn,
    scale: (e) => (pn(e) + mn(e)) / 2,
    rotateX: (e) => dn(cn(Math.atan2(e[6], e[5]))),
    rotateY: (e) => dn(cn(Math.atan2(-e[2], e[0]))),
    rotateZ: fn,
    rotate: fn,
    skewX: (e) => cn(Math.atan(e[4])),
    skewY: (e) => cn(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function gn(e) {
  return +!!e.includes(`scale`);
}
function _n(e, t) {
  if (!e || e === `none`) return gn(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = hn), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = un), (i = t));
  }
  if (!i) return gn(t);
  let a = r[t],
    o = i[1].split(`,`).map(yn);
  return typeof a == `function` ? a(o) : o[a];
}
var vn = (e, t) => {
  let { transform: n = `none` } = getComputedStyle(e);
  return _n(n, t);
};
function yn(e) {
  return parseFloat(e.trim());
}
var bn = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  xn = new Set([...bn, `pathRotation`]),
  Sn = (e) => e === je || e === M,
  Cn = new Set([`x`, `y`, `z`]),
  wn = bn.filter((e) => !Cn.has(e));
function Tn(e) {
  let t = [];
  return (
    wn.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var L = {
  width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r }) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r }) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => _n(t, `x`),
  y: (e, { transform: t }) => _n(t, `y`),
};
((L.translateX = L.x), (L.translateY = L.y));
var R = new Set(),
  En = !1,
  Dn = !1,
  On = !1;
function kn() {
  if (Dn) {
    let e = Array.from(R).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = Tn(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((Dn = !1), (En = !1), R.forEach((e) => e.complete(On)), R.clear());
}
function An() {
  R.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Dn = !0));
  });
}
function jn() {
  ((On = !0), An(), kn(), (On = !1));
}
var Mn = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.state = `pending`),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.state = `scheduled`),
        this.isAsync
          ? (R.add(this), En || ((En = !0), E.read(An), E.resolveKeyframes(kn)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
      if (e[0] === null) {
        let i = r?.get(),
          a = e[e.length - 1];
        if (i !== void 0) e[0] = i;
        else if (n && t) {
          let r = n.readValue(t, a);
          r != null && (e[0] = r);
        }
        (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
      }
      sn(e);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
      ((this.state = `complete`),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        R.delete(this));
    }
    cancel() {
      this.state === `scheduled` && (R.delete(this), (this.state = `pending`));
    }
    resume() {
      this.state === `pending` && this.scheduleResolve();
    }
  },
  Nn = (e) => e.startsWith(`--`);
function Pn(e, t, n) {
  Nn(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
var Fn = {};
function In(e, t) {
  let n = m(e);
  return () => Fn[t] ?? n();
}
var Ln = In(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
  Rn = In(() => {
    try {
      document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  zn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Bn = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: zn([0, 0.65, 0.55, 1]),
    circOut: zn([0.55, 0, 1, 0.45]),
    backIn: zn([0.31, 0.01, 0.66, -0.59]),
    backOut: zn([0.33, 1.53, 0.69, 0.99]),
  };
function Vn(e, t) {
  if (e)
    return typeof e == `function`
      ? Rn()
        ? kt(e, t)
        : `ease-out`
      : pe(e)
        ? zn(e)
        : Array.isArray(e)
          ? e.map((e) => Vn(e, t) || Bn.easeOut)
          : Bn[e];
}
function Hn(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0,
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = Vn(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  return (l && (f.pseudoElement = l), e.animate(u, f));
}
function Un(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function Wn({ type: e, ...t }) {
  return Un(e) && Rn() ? e.applyToOptions(t) : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
var Gn = class extends rn {
    constructor(e) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !e)
      )
        return;
      let {
        element: t,
        name: n,
        keyframes: r,
        pseudoElement: i,
        allowFlatten: a = !1,
        finalKeyframe: o,
        onComplete: s,
      } = e;
      ((this.isPseudoElement = !!i), (this.allowFlatten = a), (this.options = e), e.type);
      let c = Wn(e);
      ((this.animation = Hn(t, n, r, c, i)),
        c.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !i)) {
            let e = en(r, this.options, o, this.speed);
            (this.updateMotionValue && this.updateMotionValue(e),
              Pn(t, n, e),
              this.animation.cancel());
          }
          (s?.(), this.notifyFinished());
        }));
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === `finished` && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      let { state: e } = this;
      e === `idle` ||
        e === `finished` ||
        (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let e = this.options?.element;
      !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
    }
    get duration() {
      let e = this.animation.effect?.getComputedTiming?.().duration || 0;
      return b(Number(e));
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + b(e);
    }
    get time() {
      return b(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      let t = this.finishedTime !== null;
      ((this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = y(e)),
        t && this.animation.pause());
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e) {
      (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e;
    }
    attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
      return (
        this.allowFlatten && this.animation.effect?.updateTiming({ easing: `linear` }),
        (this.animation.onfinish = null),
        e && Ln()
          ? ((this.animation.timeline = e),
            t && (this.animation.rangeStart = t),
            n && (this.animation.rangeEnd = n),
            h)
          : r(this)
      );
    }
  },
  Kn = { anticipate: oe, backInOut: ae, circInOut: le };
function qn(e) {
  return e in Kn;
}
function Jn(e) {
  typeof e.ease == `string` && qn(e.ease) && (e.ease = Kn[e.ease]);
}
var Yn = 10,
  Xn = class extends Gn {
    constructor(e) {
      (Jn(e),
        nn(e),
        super(e),
        e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
        (this.options = e));
    }
    updateMotionValue(e) {
      let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
      if (!t) return;
      if (e !== void 0) {
        t.set(e);
        return;
      }
      let o = new on({ ...a, autoplay: !1 }),
        s = Math.max(Yn, k.now() - this.startTime),
        c = l(0, Yn, s - Yn),
        u = o.sample(s).value,
        { name: d } = this.options;
      (i && d && Pn(i, d, u),
        t.setWithVelocity(o.sample(Math.max(0, s - c)).value, u, c),
        o.stop());
    }
  },
  Zn = (e, t) =>
    t === `zIndex`
      ? !1
      : !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` && (P.test(e) || e === `0`) && !e.startsWith(`url(`))
        );
function Qn(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function $n(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Zn(i, t),
    s = Zn(a, t);
  return (`${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : Qn(e) || ((n === `spring` || Un(n)) && r));
}
function er(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
var tr = new Set([`opacity`, `clipPath`, `filter`, `transform`]),
  nr = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function rr(e) {
  for (let t = 0; t < e.length; t++) if (typeof e[t] == `string` && nr.test(e[t])) return !0;
  return !1;
}
var ir = new Set([
    `color`,
    `backgroundColor`,
    `outlineColor`,
    `fill`,
    `stroke`,
    `borderColor`,
    `borderTopColor`,
    `borderRightColor`,
    `borderBottomColor`,
    `borderLeftColor`,
  ]),
  ar = m(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function or(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s,
  } = e;
  if (!(t?.owner?.current instanceof HTMLElement)) return !1;
  let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return (
    ar() &&
    n &&
    (tr.has(n) || (ir.has(n) && rr(s))) &&
    (n !== `transform` || !l) &&
    !c &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
var sr = 40,
  cr = class extends rn {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      keyframes: o,
      name: s,
      motionValue: c,
      element: l,
      ...u
    }) {
      (super(),
        (this.stop = () => {
          (this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel());
        }),
        (this.createdAt = k.now()));
      let d = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          name: s,
          motionValue: c,
          element: l,
          ...u,
        },
        f = l?.KeyframeResolver || Mn;
      ((this.keyframeResolver = new f(
        o,
        (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
        s,
        c,
        l,
      )),
        this.keyframeResolver?.scheduleResolve());
    }
    onKeyframesResolved(e, t, n, r) {
      this.keyframeResolver = void 0;
      let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
      this.resolvedAt = k.now();
      let d = !0;
      $n(e, i, a, o) ||
        ((d = !1),
        (u.instantAnimations || !s) && l?.(en(e, n, t)),
        (e[0] = e[e.length - 1]),
        er(n),
        (n.repeat = 0));
      let f = {
          startTime: r
            ? this.resolvedAt && this.resolvedAt - this.createdAt > sr
              ? this.resolvedAt
              : this.createdAt
            : void 0,
          finalKeyframe: t,
          ...n,
          keyframes: e,
        },
        p = d && !c && or(f),
        m = f.motionValue?.owner?.current,
        g;
      if (p)
        try {
          g = new Xn({ ...f, element: m });
        } catch {
          g = new on(f);
        }
      else g = new on(f);
      (g.finished
        .then(() => {
          this.notifyFinished();
        })
        .catch(h),
        (this.pendingTimeline &&=
          ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)), void 0)),
        (this._animation = g));
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e, t) {
      return this.finished.finally(e).then(() => {});
    }
    get animation() {
      return (this._animation || (this.keyframeResolver?.resume(), jn()), this._animation);
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(e))
          : (this.pendingTimeline = e),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
    }
  };
function lr(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function ur(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : lr(n, e);
}
var dr = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  fr = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  pr = { type: `keyframes`, duration: 0.8 },
  mr = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  hr = (e, { keyframes: t }) =>
    t.length > 2 ? pr : xn.has(e) ? (e.startsWith(`scale`) ? fr(t[1]) : dr) : mr,
  gr = new Set([
    `when`,
    `delay`,
    `delayChildren`,
    `staggerChildren`,
    `staggerDirection`,
    `repeat`,
    `repeatType`,
    `repeatDelay`,
    `from`,
    `elapsed`,
  ]);
function _r(e) {
  for (let t in e) if (!gr.has(t)) return !0;
  return !1;
}
var vr =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = ur(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l -= y(c);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: `easeOut`,
      velocity: t.getVelocity(),
      ...s,
      delay: -l,
      onUpdate: (e) => {
        (t.set(e), s.onUpdate && s.onUpdate(e));
      },
      onComplete: () => {
        (o(), s.onComplete && s.onComplete());
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i,
    };
    (_r(s) || Object.assign(d, hr(e, d)),
      (d.duration &&= y(d.duration)),
      (d.repeatDelay &&= y(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from));
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        (er(d), d.delay === 0 && (f = !0)),
      (u.instantAnimations || u.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) &&
        ((f = !0), er(d), (d.delay = 0)),
      (d.allowFlatten = !s.type && !s.ease),
      f && !a && t.get() !== void 0)
    ) {
      let e = en(d.keyframes, s);
      if (e !== void 0) {
        E.update(() => {
          (d.onUpdate(e), d.onComplete());
        });
        return;
      }
    }
    return s.isSync ? new on(d) : new cr(d);
  };
function yr(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var br = `data-` + yr(`framerAppearId`),
  { schedule: xr, cancel: Sr } = xe(queueMicrotask, !1),
  z = { x: !1, y: !1 };
function Cr() {
  return z.x || z.y;
}
function wr(e) {
  return e === `x` || e === `y`
    ? z[e]
      ? null
      : ((z[e] = !0),
        () => {
          z[e] = !1;
        })
    : z.x || z.y
      ? null
      : ((z.x = z.y = !0),
        () => {
          z.x = z.y = !1;
        });
}
function Tr(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
function Er(e, t) {
  let n = Tr(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function Dr(e) {
  return !(e.pointerType === `touch` || Cr());
}
function Or(e, t, n = {}) {
  let [r, i, a] = Er(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u);
        },
        s = (e) => {
          ((a &&= (a(e), void 0)), o());
        },
        c = (e) => {
          ((n = !1),
            window.removeEventListener(`pointerup`, c),
            window.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)));
        },
        l = () => {
          ((n = !0),
            window.addEventListener(`pointerup`, c, i),
            window.addEventListener(`pointercancel`, c, i));
        },
        u = (e) => {
          if (e.pointerType !== `touch`) {
            if (n) {
              r = !0;
              return;
            }
            s(e);
          }
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!Dr(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` && ((a = o), e.addEventListener(`pointerleave`, u, i));
        },
        i,
      ),
        e.addEventListener(`pointerdown`, l, i));
    }),
    a
  );
}
function kr(e) {
  return f(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
var Ar = (e, t) => (t ? (e === t ? !0 : Ar(e, t.parentElement)) : !1),
  jr = (e) =>
    e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== !1,
  Mr = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function Nr(e) {
  return Mr.has(e.tagName) || e.isContentEditable === !0;
}
var Pr = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function Fr(e) {
  return Pr.has(e.tagName) || e.isContentEditable === !0;
}
var Ir = new WeakSet();
function Lr(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function Rr(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }));
}
var zr = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = Lr(() => {
    if (Ir.has(n)) return;
    Rr(n, `down`);
    let e = Lr(() => {
      Rr(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => Rr(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function Br(e) {
  return jr(e) && !Cr();
}
var Vr = new WeakSet();
function Hr(e, t, n = {}) {
  let [r, i, a] = Er(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!Br(e) || Vr.has(e)) return;
      (Ir.add(r), n.stopPropagation && Vr.add(e));
      let a = t(r, e),
        o = { ...i, capture: !0 },
        s = (e, t) => {
          (window.removeEventListener(`pointerup`, c, o),
            window.removeEventListener(`pointercancel`, l, o),
            Ir.has(r) && Ir.delete(r),
            Br(e) && typeof a == `function` && a(e, { success: t }));
        },
        c = (e) => {
          s(e, r === window || r === document || n.useGlobalTarget || Ar(r, e.target));
        },
        l = (e) => {
          s(e, !1);
        };
      (window.addEventListener(`pointerup`, c, o), window.addEventListener(`pointercancel`, l, o));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        kr(e) &&
          (e.addEventListener(`focus`, (e) => zr(e, i)),
          !Nr(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
function Ur(e) {
  return f(e) && `ownerSVGElement` in e;
}
var Wr = new WeakMap(),
  Gr,
  Kr = (e, t, n) => (r, i) =>
    i && i[0] ? i[0][e + `Size`] : Ur(r) && `getBBox` in r ? r.getBBox()[t] : r[n],
  qr = Kr(`inline`, `width`, `offsetWidth`),
  Jr = Kr(`block`, `height`, `offsetHeight`);
function Yr({ target: e, borderBoxSize: t }) {
  Wr.get(e)?.forEach((n) => {
    n(e, {
      get width() {
        return qr(e, t);
      },
      get height() {
        return Jr(e, t);
      },
    });
  });
}
function Xr(e) {
  e.forEach(Yr);
}
function Zr() {
  typeof ResizeObserver > `u` || (Gr = new ResizeObserver(Xr));
}
function Qr(e, t) {
  Gr || Zr();
  let n = Tr(e);
  return (
    n.forEach((e) => {
      let n = Wr.get(e);
      (n || ((n = new Set()), Wr.set(e, n)), n.add(t), Gr?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Wr.get(e);
        (n?.delete(t), n?.size || Gr?.unobserve(e));
      });
    }
  );
}
var $r = new Set(),
  ei;
function ti() {
  ((ei = () => {
    let e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    $r.forEach((t) => t(e));
  }),
    window.addEventListener(`resize`, ei));
}
function ni(e) {
  return (
    $r.add(e),
    ei || ti(),
    () => {
      ($r.delete(e),
        !$r.size &&
          typeof ei == `function` &&
          (window.removeEventListener(`resize`, ei), (ei = void 0)));
    }
  );
}
function ri(e, t) {
  return typeof e == `function` ? ni(e) : Qr(e, t);
}
var B = (e) => !!(e && e.getVelocity);
function ii(e) {
  return !!(B(e) && e.add);
}
function ai(e, t) {
  let n = e.getValue(`willChange`);
  if (ii(n)) return n.add(t);
  if (!n && u.WillChange) {
    let n = new u.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
var V = class {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
};
function oi({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function si({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ci(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function li(e) {
  return e === void 0 || e === 1;
}
function ui({ scale: e, scaleX: t, scaleY: n }) {
  return !li(e) || !li(t) || !li(n);
}
function H(e) {
  return ui(e) || di(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function di(e) {
  return fi(e.x) || fi(e.y);
}
function fi(e) {
  return e && e !== `0%`;
}
function pi(e, t, n) {
  return n + t * (e - n);
}
function mi(e, t, n, r, i) {
  return (i !== void 0 && (e = pi(e, i, r)), pi(e, n, r) + t);
}
function hi(e, t = 0, n = 1, r, i) {
  ((e.min = mi(e.min, t, n, r, i)), (e.max = mi(e.max, t, n, r, i)));
}
function gi(e, { x: t, y: n }) {
  (hi(e.x, t.translate, t.scale, t.originPoint), hi(e.y, n.translate, n.scale, n.originPoint));
}
var _i = 0.999999999999,
  vi = 1.0000000000001;
function yi(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (U(e.x, -a.scroll.offset.x), U(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), gi(e, o)),
      r && H(a.latestValues) && Si(e, a.latestValues, a.layout?.layoutBox));
  }
  (t.x < vi && t.x > _i && (t.x = 1), t.y < vi && t.y > _i && (t.y = 1));
}
function U(e, t) {
  ((e.min += t), (e.max += t));
}
function bi(e, t, n, r, i = 0.5) {
  hi(e, t, n, F(e.min, e.max, i), r);
}
function xi(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Si(e, t, n) {
  let r = n ?? e;
  (bi(e.x, xi(t.x, r.x), t.scaleX, t.scale, t.originX),
    bi(e.y, xi(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function Ci(e, t) {
  return oi(ci(e.getBoundingClientRect(), t));
}
function wi(e, t, n) {
  let r = Ci(e, n),
    { scroll: i } = t;
  return (i && (U(r.x, i.offset.x), U(r.y, i.offset.y)), r);
}
var Ti = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...bn]),
  Ei = { test: (e) => e === `auto`, parse: (e) => e },
  Di = (e) => (t) => t.test(e),
  Oi = [je, M, j, A, qe, Ke, Ei],
  ki = (e) => Oi.find(Di(e)),
  Ai = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ji(e) {
  let t = Ai.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Mi(e, t, n = 1) {
  `${e}`;
  let [r, i] = ji(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return d(e) ? parseFloat(e) : e;
  }
  return Oe(i) ? Mi(i, t, n + 1) : i;
}
function Ni(e) {
  return typeof e == `number` ? e === 0 : e === null ? !0 : e === `none` || e === `0` || p(e);
}
var Pi = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function Fi(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Fe) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!Pi.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var Ii = /\b([a-z-]*)\(.*?\)/gu,
  Li = {
    ...P,
    getAnimatableNone: (e) => {
      let t = e.match(Ii);
      return t ? t.map(Fi).join(` `) : e;
    },
  },
  Ri = {
    ...P,
    getAnimatableNone: (e) => {
      let t = P.parse(e);
      return P.createTransformer(e)(
        t.map((e) => (typeof e == `number` ? 0 : typeof e == `object` ? { ...e, alpha: 1 } : e)),
      );
    },
  },
  zi = { ...je, transform: Math.round },
  Bi = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    inset: M,
    insetBlock: M,
    insetBlockStart: M,
    insetBlockEnd: M,
    insetInline: M,
    insetInlineStart: M,
    insetInlineEnd: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    paddingBlock: M,
    paddingBlockStart: M,
    paddingBlockEnd: M,
    paddingInline: M,
    paddingInlineStart: M,
    paddingInlineEnd: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    marginBlock: M,
    marginBlockStart: M,
    marginBlockEnd: M,
    marginInline: M,
    marginInlineStart: M,
    marginInlineEnd: M,
    fontSize: M,
    backgroundPositionX: M,
    backgroundPositionY: M,
    rotate: A,
    pathRotation: A,
    rotateX: A,
    rotateY: A,
    rotateZ: A,
    scale: Ne,
    scaleX: Ne,
    scaleY: Ne,
    scaleZ: Ne,
    skew: A,
    skewX: A,
    skewY: A,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Me,
    originX: Je,
    originY: Je,
    originZ: M,
    zIndex: zi,
    fillOpacity: Me,
    strokeOpacity: Me,
    numOctaves: zi,
  },
  Vi = {
    ...Bi,
    color: N,
    backgroundColor: N,
    outlineColor: N,
    fill: N,
    stroke: N,
    borderColor: N,
    borderTopColor: N,
    borderRightColor: N,
    borderBottomColor: N,
    borderLeftColor: N,
    filter: Li,
    WebkitFilter: Li,
    mask: Ri,
    WebkitMask: Ri,
  },
  Hi = (e) => Vi[e],
  Ui = new Set([Li, Ri]);
function Wi(e, t) {
  let n = Hi(e);
  return (Ui.has(n) || (n = P), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0);
}
var Gi = new Set([`auto`, `none`, `0`]);
function Ki(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let t = e[r];
    (typeof t == `string` && !Gi.has(t) && it(t).values.length && (i = e[r]), r++);
  }
  if (i && n) for (let r of t) e[r] = Wi(n, i);
}
var qi = class extends Mn {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), Oe(r))) {
          let i = Mi(r, t.current);
          (i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !Ti.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = ki(r),
        o = ki(i);
      if (Ae(r) !== Ae(i) && L[n]) {
        this.needsMeasurement = !0;
        return;
      }
      if (a !== o)
        if (Sn(a) && Sn(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else L[n] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++) (e[t] === null || Ni(e[t])) && n.push(t);
      n.length && Ki(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = L[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      ((n[i] = L[t](e.measureViewportBox(), window.getComputedStyle(e.current))),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Ji = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Yi = () => ({ x: Ji(), y: Ji() }),
  Xi = () => ({ min: 0, max: 0 }),
  W = () => ({ x: Xi(), y: Xi() }),
  Zi = 30,
  Qi = (e) => !isNaN(parseFloat(e)),
  $i = { current: void 0 },
  ea = class {
    constructor(e, t = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e) => {
          let t = k.now();
          if (
            (this.updatedAt !== t && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              (this.events.change?.notify(this.current), this.dependents))
          )
            for (let e of this.dependents) e.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = k.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = Qi(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new v());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              E.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e) {
      this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(e) {
      ((this.dependents ||= new Set()), this.dependents.add(e));
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return ($i.current && $i.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = k.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Zi)
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, Zi);
      return x(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function ta(e, t) {
  return new ea(e, t);
}
var na = [...Oi, N, P],
  ra = (e) => na.find(Di(e)),
  ia = new WeakMap();
function aa(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function oa(e) {
  return typeof e == `string` || Array.isArray(e);
}
var sa = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `exit`],
  ca = [`initial`, ...sa];
function la(e) {
  return aa(e.animate) || ca.some((t) => oa(e[t]));
}
function ua(e) {
  return !!(la(e) || e.variants);
}
function da(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (B(i)) e.addValue(r, i);
    else if (B(a)) e.addValue(r, ta(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, ta(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var fa = { current: null },
  pa = { current: !1 },
  ma = typeof window < `u`;
function ha() {
  if (((pa.current = !0), ma))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (fa.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else fa.current = !1;
}
function ga(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function _a(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = ga(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if ((typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`)) {
    let [i, a] = ga(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
var va = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  ya = {};
function ba(e) {
  ya = e;
}
function xa() {
  return ya;
}
var Sa = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        skipAnimations: i,
        blockInitialAnimation: a,
        visualState: o,
      },
      s = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = Mn),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = k.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), E.render(this.render, !1, !0));
        }));
      let { latestValues: c, renderState: l } = o;
      ((this.latestValues = c),
        (this.baseTarget = { ...c }),
        (this.initialValues = t.initial ? { ...c } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.skipAnimationsConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = !!a),
        (this.isControllingVariants = la(t)),
        (this.isVariantNode = ua(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
      for (let e in d) {
        let t = d[e];
        c[e] !== void 0 && B(t) && t.set(c[e]);
      }
    }
    mount(e) {
      if (this.hasBeenMounted)
        for (let e in this.initialValues)
          (this.values.get(e)?.jump(this.initialValues[e]),
            (this.latestValues[e] = this.initialValues[e]));
      ((this.current = e),
        ia.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        this.reducedMotionConfig === `never`
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === `always`
            ? (this.shouldReduceMotion = !0)
            : (pa.current || ha(), (this.shouldReduceMotion = fa.current)),
        (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0));
    }
    unmount() {
      (this.projection && this.projection.unmount(),
        D(this.notifyUpdate),
        D(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    addChild(e) {
      (this.children.add(e), (this.enteringChildren ??= new Set()), this.enteringChildren.add(e));
    }
    removeChild(e) {
      (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
    }
    bindToMotionValue(e, t) {
      if (
        (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
        t.accelerate && tr.has(e) && this.current instanceof HTMLElement)
      ) {
        let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate,
          s = new Gn({
            element: this.current,
            name: e,
            keyframes: r,
            times: i,
            ease: a,
            duration: y(o),
          }),
          c = n(s);
        this.valueSubscriptions.set(e, () => {
          (c(), s.cancel());
        });
        return;
      }
      let n = xn.has(e);
      n && this.onBindTransform && this.onBindTransform();
      let r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && E.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        }),
        i;
      (typeof window < `u` &&
        window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i && i());
        }));
    }
    sortNodePosition(e) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in ya) {
        let t = ya[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : W();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < va.length; t++) {
        let n = va[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = da(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e));
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e]) return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = ta(t === null ? void 0 : t, { owner: this })), this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (d(n) || p(n))
            ? (n = parseFloat(n))
            : !ra(n) && P.test(t) && (n = Wi(e, t)),
          this.setBaseTarget(e, B(n) ? n.get() : n)),
        B(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = _a(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !B(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (this.events[e] || (this.events[e] = new v()), this.events[e].add(t));
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
    scheduleRenderMicrotask() {
      xr.render(this.render);
    }
  },
  Ca = class extends Sa {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = qi));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      let n = e.style;
      return n ? n[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      B(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  },
  wa = (e, t) => (t && typeof e == `number` ? t.transform(e) : e),
  Ta = { x: `translateX`, y: `translateY`, z: `translateZ`, transformPerspective: `perspective` },
  Ea = bn.length;
function Da(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Ea; a++) {
    let o = bn[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = wa(s, Bi[o]);
      if (!c) {
        i = !1;
        let t = Ta[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${wa(a, Bi.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function Oa(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (xn.has(e)) {
      o = !0;
      continue;
    } else if (Ee(e)) {
      i[e] = n;
      continue;
    } else {
      let t = wa(n, Bi[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform || (o || n ? (r.transform = Da(t, e.transform, n)) : (r.transform &&= `none`)), s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function ka(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function Aa(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var ja = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if (M.test(e)) e = parseFloat(e);
        else return e;
      return `${Aa(e, t.target.x)}% ${Aa(e, t.target.y)}%`;
    },
  },
  Ma = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = P.parse(e);
      if (i.length > 5) return r;
      let a = P.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = F(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  Na = {
    borderRadius: {
      ...ja,
      applyTo: [
        `borderTopLeftRadius`,
        `borderTopRightRadius`,
        `borderBottomLeftRadius`,
        `borderBottomRightRadius`,
      ],
    },
    borderTopLeftRadius: ja,
    borderTopRightRadius: ja,
    borderBottomLeftRadius: ja,
    borderBottomRightRadius: ja,
    boxShadow: Ma,
  };
function Pa(e, { layout: t, layoutId: n }) {
  return (
    xn.has(e) || e.startsWith(`origin`) || ((t || n !== void 0) && (!!Na[e] || e === `opacity`))
  );
}
function Fa(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    (B(r[t]) || (i && B(i[t])) || Pa(t, e) || n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function Ia(e) {
  return window.getComputedStyle(e);
}
var La = class extends Ca {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = ka));
    }
    readValueFromInstance(e, t) {
      if (xn.has(t)) return this.projection?.isProjecting ? gn(t) : vn(e, t);
      {
        let n = Ia(e),
          r = (Ee(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Ci(e, t);
    }
    build(e, t, n) {
      Oa(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Fa(e, t, n);
    }
  },
  Ra = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  za = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function Ba(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? Ra : za;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
var Va = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];
function Ha(
  e,
  { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s },
  c,
  l,
  u,
) {
  if ((Oa(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? `50% 50%`), delete d.transformOrigin),
    f.transform && ((f.transformBox = u?.transformBox ?? `fill-box`), delete d.transformBox));
  for (let e of Va) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && Ba(d, i, a, o, !1));
}
var Ua = new Set([
    `baseFrequency`,
    `diffuseConstant`,
    `kernelMatrix`,
    `kernelUnitLength`,
    `keySplines`,
    `keyTimes`,
    `limitingConeAngle`,
    `markerHeight`,
    `markerWidth`,
    `numOctaves`,
    `targetX`,
    `targetY`,
    `surfaceScale`,
    `specularConstant`,
    `specularExponent`,
    `stdDeviation`,
    `tableValues`,
    `viewBox`,
    `gradientTransform`,
    `pathLength`,
    `startOffset`,
    `textLength`,
    `lengthAdjust`,
  ]),
  Wa = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function Ga(e, t, n, r) {
  ka(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(Ua.has(n) ? n : yr(n), t.attrs[n]);
}
function Ka(e, t, n) {
  let r = Fa(e, t, n);
  for (let n in e)
    if (B(e[n]) || B(t[n])) {
      let t = bn.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
var qa = class extends Ca {
  constructor() {
    (super(...arguments),
      (this.type = `svg`),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = W));
  }
  getBaseTargetFromProps(e, t) {
    return e[t];
  }
  readValueFromInstance(e, t) {
    if (xn.has(t)) {
      let e = Hi(t);
      return (e && e.default) || 0;
    }
    return ((t = Ua.has(t) ? t : yr(t)), e.getAttribute(t));
  }
  scrapeMotionValuesFromProps(e, t, n) {
    return Ka(e, t, n);
  }
  build(e, t, n) {
    Ha(e, t, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(e, t, n, r) {
    Ga(e, t, n, r);
  }
  mount(e) {
    ((this.isSVGTag = Wa(e.tagName)), super.mount(e));
  }
};
function Ja(e, t, n) {
  let r = e.getProps();
  return _a(r, t, n === void 0 ? r.custom : n, e);
}
var Ya = (e) => Array.isArray(e);
function Xa(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ta(n));
}
function Za(e) {
  return Ya(e) ? e[e.length - 1] || 0 : e;
}
function Qa(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = Ja(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) Xa(e, t, Za(i[t]));
}
function $a(e) {
  return e.props[br];
}
function eo({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function to(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition();
  a = a ? lr(a, c) : c;
  let l = a?.reduceMotion,
    u = a?.skipAnimations;
  r && (a = r);
  let d = [],
    f = i && e.animationState && e.animationState.getState()[i],
    p = a?.path;
  p && p.animateVisualElement(e, s, a, n, d);
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (f && eo(f, t))) continue;
    let o = { delay: n, ...ur(a || {}, t) };
    u && (o.skipAnimations = !0);
    let c = r.get();
    if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
      E.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (window.MotionHandoffAnimation) {
      let n = $a(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, E);
        e !== null && ((o.startTime = e), (p = !0));
      }
    }
    ai(e, t);
    let m = l ?? e.shouldReduceMotion;
    r.start(vr(t, r, i, m && Ti.has(t) ? { type: !1 } : o, e, p));
    let h = r.animation;
    h && d.push(h);
  }
  if (o) {
    let t = () =>
      E.update(() => {
        o && Qa(e, o);
      });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
function no(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
function ro(e, t, n = {}) {
  let r = Ja(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(to(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
            return io(e, t, r, a, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  } else return Promise.all([a(), o(n.delay)]);
}
function io(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = [];
  for (let c of e.variantChildren)
    (c.notify(`AnimationStart`, t),
      s.push(
        ro(c, t, {
          ...o,
          delay: n + (typeof r == `function` ? 0 : r) + no(e.variantChildren, c, r, i, a),
        }).then(() => c.notify(`AnimationComplete`, t)),
      ));
  return Promise.all(s);
}
function ao(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => ro(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = ro(e, t, n);
  else {
    let i = typeof t == `function` ? Ja(e, t, n.custom) : t;
    r = Promise.all(to(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var oo = ca.length;
function so(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && so(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < oo; n++) {
    let r = ca[n],
      i = e.props[r];
    (oa(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function co(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var lo = [...sa].reverse(),
  uo = sa.length;
function fo(e) {
  return (t) => Promise.all(t.map(({ animation: t, options: n }) => ao(e, t, n)));
}
function po(e) {
  let t = fo(e),
    n = go(),
    r = !0,
    i = !1,
    a = (t) => (n, r) => {
      let i = Ja(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function o(n) {
    t = n(e);
  }
  function s(o) {
    let { props: s } = e,
      c = so(e.parent) || {},
      l = [],
      u = new Set(),
      d = {},
      f = 1 / 0;
    for (let t = 0; t < uo; t++) {
      let p = lo[t],
        m = n[p],
        h = s[p] === void 0 ? c[p] : s[p],
        g = oa(h),
        _ = p === o ? m.isActive : null;
      _ === !1 && (f = t);
      let v = h === c[p] && h !== s[p] && g;
      if (
        (v && (r || i) && e.manuallyAnimateOnMount && (v = !1),
        (m.protectedKeys = { ...d }),
        (!m.isActive && _ === null) || (!h && !m.prevProp) || aa(h) || typeof h == `boolean`)
      )
        continue;
      if (p === `exit` && m.isActive && _ !== !0) {
        m.prevResolvedValues && (d = { ...d, ...m.prevResolvedValues });
        continue;
      }
      let y = mo(m.prevProp, h),
        b = y || (p === o && m.isActive && !v && g) || (t > f && g),
        x = !1,
        S = Array.isArray(h) ? h : [h],
        C = S.reduce(a(p), {});
      _ === !1 && (C = {});
      let { prevResolvedValues: w = {} } = m,
        ee = { ...w, ...C },
        T = (t) => {
          ((b = !0), u.has(t) && ((x = !0), u.delete(t)), (m.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in ee) {
        let t = C[e],
          n = w[e];
        if (d.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = Ya(t) && Ya(n) ? !co(t, n) || y : t !== n),
          r
            ? t == null
              ? u.add(e)
              : T(e)
            : t !== void 0 && u.has(e)
              ? T(e)
              : (m.protectedKeys[e] = !0));
      }
      ((m.prevProp = h),
        (m.prevResolvedValues = C),
        m.isActive && (d = { ...d, ...C }),
        (r || i) && e.blockInitialAnimation && (b = !1));
      let te = v && y;
      b &&
        (!te || x) &&
        l.push(
          ...S.map((t) => {
            let n = { type: p };
            if (typeof t == `string` && (r || i) && !te && e.manuallyAnimateOnMount && e.parent) {
              let { parent: r } = e,
                i = Ja(r, t);
              if (r.enteringChildren && i) {
                let { delayChildren: t } = i.transition || {};
                n.delay = no(r.enteringChildren, e, t);
              }
            }
            return { animation: t, options: n };
          }),
        );
    }
    if (u.size) {
      let t = {};
      if (typeof s.initial != `boolean`) {
        let n = Ja(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
        n && n.transition && (t.transition = n.transition);
      }
      (u.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        l.push({ animation: t }));
    }
    let p = !!l.length;
    return (
      r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1),
      (r = !1),
      (i = !1),
      p ? t(l) : Promise.resolve()
    );
  }
  function c(t, r) {
    if (n[t].isActive === r) return Promise.resolve();
    (e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), (n[t].isActive = r));
    let i = s(t);
    for (let e in n) n[e].protectedKeys = {};
    return i;
  }
  return {
    animateChanges: s,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = go()), (i = !0));
    },
  };
}
function mo(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !co(t, e) : !1;
}
function ho(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function go() {
  return {
    animate: ho(!0),
    whileInView: ho(),
    whileHover: ho(),
    whileTap: ho(),
    whileDrag: ho(),
    whileFocus: ho(),
    exit: ho(),
  };
}
var _o = 0.9999,
  vo = 1.0001,
  yo = -0.01,
  bo = 0.01;
function G(e) {
  return e.max - e.min;
}
function xo(e, t, n) {
  return Math.abs(e - t) <= n;
}
function So(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = F(t.min, t.max, e.origin)),
    (e.scale = G(n) / G(t)),
    (e.translate = F(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= _o && e.scale <= vo) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= yo && e.translate <= bo) || isNaN(e.translate)) && (e.translate = 0));
}
function Co(e, t, n, r) {
  (So(e.x, t.x, n.x, r ? r.originX : void 0), So(e.y, t.y, n.y, r ? r.originY : void 0));
}
function wo(e, t, n, r = 0) {
  ((e.min = (r ? F(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + G(t)));
}
function To(e, t, n, r) {
  (wo(e.x, t.x, n.x, r?.x), wo(e.y, t.y, n.y, r?.y));
}
function Eo(e, t, n, r = 0) {
  let i = r ? F(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + G(t)));
}
function Do(e, t, n, r) {
  (Eo(e.x, t.x, n.x, r?.x), Eo(e.y, t.y, n.y, r?.y));
}
function K(e) {
  return [e(`x`), e(`y`)];
}
function Oo(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r));
}
function ko(e) {
  return B(e) ? e.get() : e;
}
function Ao(e, t, n) {
  let r = B(e) ? e : ta(e);
  return (r.start(vr(``, r, t, n)), r.animation);
}
var jo = { value: null, addProjectionMetrics: null };
function Mo(e, t) {
  let n = k.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (D(r), e(a - t));
    };
  return (E.setup(r, !0), () => D(r));
}
function No(e) {
  return Ur(e) && e.tagName === `svg`;
}
var Po = [
    `borderTopLeftRadius`,
    `borderTopRightRadius`,
    `borderBottomLeftRadius`,
    `borderBottomRightRadius`,
  ],
  Fo = Po.length,
  Io = (e) => (typeof e == `string` ? parseFloat(e) : e),
  Lo = (e) => typeof e == `number` || M.test(e);
function Ro(e, t, n, r, i, a) {
  i
    ? ((e.opacity = F(0, n.opacity ?? 1, Bo(r))), (e.opacityExit = F(t.opacity ?? 1, 0, Vo(r))))
    : a && (e.opacity = F(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let i = 0; i < Fo; i++) {
    let a = Po[i],
      o = zo(t, a),
      s = zo(n, a);
    (o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || Lo(o) === Lo(s)
        ? ((e[a] = Math.max(F(Io(o), Io(s), r), 0)), (j.test(s) || j.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = F(t.rotate || 0, n.rotate || 0, r));
}
function zo(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var Bo = Ho(0, 0.5, ce),
  Vo = Ho(0.5, 0.95, h);
function Ho(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(_(e, t, r)));
}
function Uo(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function q(e, t) {
  (Uo(e.x, t.x), Uo(e.y, t.y));
}
function Wo(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function Go(e, t, n, r, i) {
  return ((e -= t), (e = pi(e, 1 / n, r)), i !== void 0 && (e = pi(e, 1 / i, r)), e);
}
function Ko(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (j.test(t) && ((t = parseFloat(t)), (t = F(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = F(a.min, a.max, r);
  (e === a && (s -= t), (e.min = Go(e.min, t, n, s, i)), (e.max = Go(e.max, t, n, s, i)));
}
function qo(e, t, [n, r, i], a, o) {
  Ko(e, t[n], t[r], t[i], t.scale, a, o);
}
var Jo = [`x`, `scaleX`, `originX`],
  Yo = [`y`, `scaleY`, `originY`];
function Xo(e, t, n, r) {
  (qo(e.x, t, Jo, n ? n.x : void 0, r ? r.x : void 0),
    qo(e.y, t, Yo, n ? n.y : void 0, r ? r.y : void 0));
}
function Zo(e) {
  return e.translate === 0 && e.scale === 1;
}
function Qo(e) {
  return Zo(e.x) && Zo(e.y);
}
function $o(e, t) {
  return e.min === t.min && e.max === t.max;
}
function es(e, t) {
  return $o(e.x, t.x) && $o(e.y, t.y);
}
function ts(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ns(e, t) {
  return ts(e.x, t.x) && ts(e.y, t.y);
}
function rs(e) {
  return G(e.x) / G(e.y);
}
function is(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
var as = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    s(this.members, e);
    for (let t = this.members.length - 1; t >= 0; t--) {
      let n = this.members[t];
      if (n === e || n === this.lead || n === this.prevLead) continue;
      let r = n.instance;
      (!r || r.isConnected === !1) && !n.snapshot && (c(this.members, n), n.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if ((c(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
      let e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(e) {
    for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
      let e = this.members[t];
      if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return (this.promote(e), !0);
    }
    return !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      (n.updateSnapshot(), e.scheduleRender());
      let { layoutDependency: r } = n.options,
        { layoutDependency: i } = e.options;
      ((r === void 0 || r !== i) &&
        ((e.resumeFrom = n),
        t && (n.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root?.isUpdating && (e.isLayoutDirty = !0)),
        e.options.crossfade === !1 && n.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      (e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
};
function os(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      pathRotation: i,
      rotateX: a,
      rotateY: o,
      skewX: s,
      skewY: c,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotate(${i}deg) `),
      a && (r += `rotateX(${a}deg) `),
      o && (r += `rotateY(${o}deg) `),
      s && (r += `skewX(${s}deg) `),
      c && (r += `skewY(${c}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var ss = (e, t) => e.depth - t.depth,
  cs = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (s(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (c(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(ss), (this.isDirty = !1), this.children.forEach(e));
    }
  },
  ls = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  us = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  ds = [``, `X`, `Y`, `Z`],
  fs = 1e3,
  ps = 0;
function ms(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function hs(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = $a(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, E, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && hs(r);
}
function gs({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = ps++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            jo.value && (us.nodes = us.calculatedTargetDeltas = us.calculatedProjections = 0),
            this.nodes.forEach(ys),
            this.nodes.forEach(Os),
            this.nodes.forEach(ks),
            this.nodes.forEach(bs),
            jo.addProjectionMetrics && jo.addProjectionMetrics(us));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new cs());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new v()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = Ur(t) && !No(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (E.read(() => {
          r = window.innerWidth;
        }),
          e(t, () => {
            let e = window.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = Mo(i, 250)),
              ls.hasAnimatedSinceResize &&
                ((ls.hasAnimatedSinceResize = !1), this.nodes.forEach(Ds)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || Is,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(),
                c = !this.targetLayout || !ns(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = { ...ur(a, `layout`), onPlay: o, onComplete: s };
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l, t.path));
              } else
                (t || Ds(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        D(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(As), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && hs(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(Cs),
          this.nodes.forEach(Ss));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ws);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Ts),
            this.nodes.forEach(Es),
            this.nodes.forEach(_s),
            this.nodes.forEach(vs))
          : this.nodes.forEach(ws),
        this.clearAllSnapshots());
      let e = k.now();
      ((O.delta = l(0, 1e3 / 60, e - O.timestamp)),
        (O.timestamp = e),
        (O.isProcessing = !0),
        Se.update.process(O),
        Se.preRender.process(O),
        Se.render.process(O),
        (O.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), xr.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(xs), this.sharedNodes.forEach(js));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), E.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      E.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !G(this.snapshot.measuredBox.x) &&
          !G(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected ||= W()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0);
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !Qo(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || H(this.latestValues) || a) &&
        (i(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        Bs(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return W();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Hs))) {
        let { scroll: e } = this.root;
        e && (U(t.x, e.offset.x), U(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = W();
      if ((q(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && q(t, e), U(t.x, i.offset.x), U(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1, n) {
      let r = n || W();
      q(r, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        (!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (U(r.x, -n.scroll.offset.x), U(r.y, -n.scroll.offset.y)),
          H(n.latestValues) && Si(r, n.latestValues, n.layout?.layoutBox));
      }
      return (H(this.latestValues) && Si(r, this.latestValues, this.layout?.layoutBox), r);
    }
    removeTransform(e) {
      let t = W();
      q(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!H(n.latestValues)) continue;
        let r;
        (n.instance &&
          (ui(n.latestValues) && n.updateSnapshot(), (r = W()), q(r, n.measurePageBox())),
          Xo(t, n.latestValues, n.snapshot?.layoutBox, r));
      }
      return (H(this.latestValues) && Xo(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 ? !0 : e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== O.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!this.layout || !(r || i)) return;
      this.resolvedRelativeTargetAt = O.timestamp;
      let a = this.getClosestProjectingParent();
      (a &&
        this.linkedParentVersion !== a.layoutVersion &&
        !a.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && a && a.layout
            ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = W()), (this.targetWithTransforms = W())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              To(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : q(this.target, this.layout.layoutBox),
                gi(this.target, this.targetDelta))
              : q(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            a &&
            !!a.resumingFrom == !!this.resumingFrom &&
            !a.options.layoutScroll &&
            a.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(a, this.target, a.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          jo.value && us.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ui(this.parent.latestValues) || di(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = W()),
        (this.relativeTargetOrigin = W()),
        Do(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0),
        q(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
        this.resolvedRelativeTargetAt === O.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      q(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (yi(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = W())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Wo(this.prevProjectionDelta.x, this.projectionDelta.x),
          Wo(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Co(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !is(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !is(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        jo.value && us.calculatedProjections++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      if ((this.options.visualElement?.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Yi()),
        (this.projectionDelta = Yi()),
        (this.projectionDeltaWithTransform = Yi()));
    }
    setAnimationOrigin(e, t = !1, n) {
      let r = this.snapshot,
        i = r ? r.latestValues : {},
        a = { ...this.latestValues },
        o = Yi();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let s = W(),
        c = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
        l = this.getStack(),
        u = !l || l.members.length <= 1,
        d = !!(c && !u && this.options.crossfade === !0 && !this.path.some(Fs));
      this.animationProgress = 0;
      let f,
        p = n?.interpolateProjection(e);
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3,
          r = p?.(n);
        (r
          ? ((o.x.translate = r.x),
            (o.x.scale = F(e.x.scale, 1, n)),
            (o.x.origin = e.x.origin),
            (o.x.originPoint = e.x.originPoint),
            (o.y.translate = r.y),
            (o.y.scale = F(e.y.scale, 1, n)),
            (o.y.origin = e.y.origin),
            (o.y.originPoint = e.y.originPoint))
          : (Ms(o.x, e.x, n), Ms(o.y, e.y, n)),
          this.setTargetDelta(o),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Do(
              s,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            Ps(this.relativeTarget, this.relativeTargetOrigin, s, n),
            f && es(this.relativeTarget, f) && (this.isProjectionDirty = !1),
            (f ||= W()),
            q(f, this.relativeTarget)),
          c && ((this.animationValues = a), Ro(a, i, this.latestValues, n, d, u)),
          r &&
            r.rotate !== void 0 &&
            ((this.animationValues ||= a), (this.animationValues.pathRotation = r.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        (this.pendingAnimation &&= (D(this.pendingAnimation), void 0)),
        (this.pendingAnimation = E.update(() => {
          ((ls.hasAnimatedSinceResize = !0),
            (this.motionValue ||= ta(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Ao(this.motionValue, [0, 1e3], {
              ...e,
              velocity: 0,
              isSync: !0,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(fs), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          Vs(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || W();
          let t = G(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = G(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (q(t, n), Si(t, i), Co(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new as()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return e ? e.lead === this : !0;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && ms(`z`, e, r, this.animationValues);
      for (let t = 0; t < ds.length; t++)
        (ms(`rotate${ds[t]}`, e, r, this.animationValues),
          ms(`skew${ds[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = ko(t?.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity),
          (e.pointerEvents = ko(t?.pointerEvents) || ``)),
          this.hasProjected &&
            !H(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = os(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        r.animationValues
          ? (e.opacity =
              r === this
                ? (i.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : i.opacityExit)
          : (e.opacity =
              r === this
                ? i.opacity === void 0
                  ? ``
                  : i.opacity
                : i.opacityExit === void 0
                  ? 0
                  : i.opacityExit));
      for (let t in Na) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = Na[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId && (e.pointerEvents = r === this ? ko(t?.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Ss),
        this.root.sharedNodes.clear());
    }
  };
}
function _s(e) {
  e.updateLayout();
}
function vs(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    if (i === `size`)
      K((e) => {
        let r = a ? t.measuredBox[e] : t.layoutBox[e],
          i = G(r);
        ((r.min = n[e].min), (r.max = r.min + i));
      });
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      Uo(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
    } else
      Vs(i, t.layoutBox, n) &&
        K((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = G(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = Yi();
    Co(o, n, t.layoutBox);
    let s = Yi();
    a ? Co(s, e.applyTransform(r, !0), t.measuredBox) : Co(s, n, t.layoutBox);
    let c = !Qo(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = W();
          Do(s, t.layoutBox, i.layoutBox, o);
          let c = W();
          (Do(c, n, a.layoutBox, o),
            ns(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c), (e.relativeTargetOrigin = s), (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function ys(e) {
  (jo.value && us.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function bs(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function xs(e) {
  e.clearSnapshot();
}
function Ss(e) {
  e.clearMeasurements();
}
function Cs(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function ws(e) {
  e.isLayoutDirty = !1;
}
function Ts(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function Es(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform());
}
function Ds(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Os(e) {
  e.resolveTargetDelta();
}
function ks(e) {
  e.calcProjection();
}
function As(e) {
  e.resetSkewAndRotation();
}
function js(e) {
  e.removeLeadSnapshot();
}
function Ms(e, t, n) {
  ((e.translate = F(t.translate, 0, n)),
    (e.scale = F(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Ns(e, t, n, r) {
  ((e.min = F(t.min, n.min, r)), (e.max = F(t.max, n.max, r)));
}
function Ps(e, t, n, r) {
  (Ns(e.x, t.x, n.x, r), Ns(e.y, t.y, n.y, r));
}
function Fs(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Is = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ls = (e) =>
    typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  Rs = Ls(`applewebkit/`) && !Ls(`chrome/`) ? Math.round : h;
function zs(e) {
  ((e.min = Rs(e.min)), (e.max = Rs(e.max)));
}
function Bs(e) {
  (zs(e.x), zs(e.y));
}
function Vs(e, t, n) {
  return e === `position` || (e === `preserve-aspect` && !xo(rs(t), rs(n), 0.2));
}
function Hs(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var Us = gs({
    attachResizeListener: (e, t) => Oo(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ws = { current: void 0 },
  Gs = gs({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ws.current) {
        let e = new Us({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ws.current = e));
      }
      return Ws.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  Ks = [
    `animate`,
    `circle`,
    `defs`,
    `desc`,
    `ellipse`,
    `g`,
    `image`,
    `line`,
    `filter`,
    `marker`,
    `mask`,
    `metadata`,
    `path`,
    `pattern`,
    `polygon`,
    `polyline`,
    `rect`,
    `stop`,
    `switch`,
    `symbol`,
    `svg`,
    `text`,
    `tspan`,
    `use`,
    `view`,
  ];
function qs(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(Ks.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
var J = a(i(), 1),
  Js = (e, t) =>
    (t.isSVG ?? qs(e)) ? new qa(t) : new La(t, { allowProjection: e !== J.Fragment }),
  Ys = (0, J.createContext)({}),
  Xs = (0, J.createContext)({ strict: !1 }),
  Zs = (0, J.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` }),
  Qs = (0, J.createContext)({});
function $s(e, t) {
  if (la(e)) {
    let { initial: t, animate: n } = e;
    return { initial: t === !1 || oa(t) ? t : void 0, animate: oa(n) ? n : void 0 };
  }
  return e.inherit === !1 ? {} : t;
}
function ec(e) {
  let { initial: t, animate: n } = $s(e, (0, J.useContext)(Qs));
  return (0, J.useMemo)(() => ({ initial: t, animate: n }), [tc(t), tc(n)]);
}
function tc(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var nc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function rc(e, t, n) {
  for (let r in t) !B(t[r]) && !Pa(r, n) && (e[r] = t[r]);
}
function ic({ transformTemplate: e }, t) {
  return (0, J.useMemo)(() => {
    let n = nc();
    return (Oa(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function ac(e, t) {
  let n = e.style || {},
    r = {};
  return (rc(r, n, e), Object.assign(r, ic(e, t)), r);
}
function oc(e, t) {
  let n = {},
    r = ac(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
var sc = () => ({ ...nc(), attrs: {} });
function cc(e, t, n, r) {
  let i = (0, J.useMemo)(() => {
    let n = sc();
    return (Ha(n, t, Wa(r), e.transformTemplate, e.style), { ...n.attrs, style: { ...n.style } });
  }, [t]);
  if (e.style) {
    let t = {};
    (rc(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
var lc = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function uc(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    lc.has(e)
  );
}
var dc = e({ default: () => fc }),
  fc,
  pc = t(() => {
    throw (
      (fc = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`,
      )
    );
  }),
  mc = (e) => !uc(e);
function hc(e) {
  typeof e == `function` && (mc = (t) => (t.startsWith(`on`) ? !uc(t) : e(t)));
}
try {
  hc((pc(), r(dc)).default);
} catch {}
function gc(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      B(e[i]) ||
      ((mc(i) ||
        (n === !0 && uc(i)) ||
        (!t && !uc(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
function _c(e, t, n, { latestValues: r }, i, a = !1, o) {
  let s = ((o ?? qs(e)) ? cc : oc)(t, r, i, e),
    c = gc(t, typeof e == `string`, a),
    l = e === J.Fragment ? {} : { ...c, ...s, ref: n },
    { children: u } = t,
    d = (0, J.useMemo)(() => (B(u) ? u.get() : u), [u]);
  return (0, J.createElement)(e, { ...l, children: d });
}
var vc = (0, J.createContext)(null);
function yc(e) {
  let t = (0, J.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
function bc({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: xc(n, r, i, e), renderState: t() };
}
function xc(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = ko(a[e]);
  let { initial: o, animate: s } = e,
    c = la(e),
    l = ua(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !aa(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = _a(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var Sc = (e) => (t, n) => {
    let r = (0, J.useContext)(Qs),
      i = (0, J.useContext)(vc),
      a = () => bc(e, t, r, i);
    return n ? a() : yc(a);
  },
  Cc = Sc({ scrapeMotionValuesFromProps: Fa, createRenderState: nc }),
  wc = Sc({ scrapeMotionValuesFromProps: Ka, createRenderState: sc }),
  Tc = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  Ec = !1;
function Dc() {
  if (Ec) return;
  let e = {};
  for (let t in Tc) e[t] = { isEnabled: (e) => Tc[t].some((t) => !!e[t]) };
  (ba(e), (Ec = !0));
}
function Oc() {
  return (Dc(), xa());
}
function kc(e) {
  let t = Oc();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  ba(t);
}
var Ac = Symbol.for(`motionComponentSymbol`);
function jc(e, t, n) {
  let r = (0, J.useRef)(n);
  (0, J.useInsertionEffect)(() => {
    r.current = n;
  });
  let i = (0, J.useRef)(null);
  return (0, J.useCallback)(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let a = r.current;
      if (typeof a == `function`)
        if (n) {
          let e = a(n);
          typeof e == `function` && (i.current = e);
        } else i.current ? (i.current(), (i.current = null)) : a(n);
      else a && (a.current = n);
    },
    [t],
  );
}
var Mc = (0, J.createContext)({});
function Nc(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
var Pc = typeof window < `u` ? J.useLayoutEffect : J.useEffect;
function Fc(e, t, n, r, i, a) {
  let { visualElement: o } = (0, J.useContext)(Qs),
    s = (0, J.useContext)(Xs),
    c = (0, J.useContext)(vc),
    l = (0, J.useContext)(Zs),
    u = l.reducedMotion,
    d = l.skipAnimations,
    f = (0, J.useRef)(null),
    p = (0, J.useRef)(!1);
  ((r ||= s.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: d,
        isSVG: a,
      })),
      p.current && f.current && (f.current.manuallyAnimateOnMount = !0)));
  let m = f.current,
    h = (0, J.useContext)(Mc);
  m && !m.projection && i && (m.type === `html` || m.type === `svg`) && Ic(f.current, n, i, h);
  let g = (0, J.useRef)(!1);
  (0, J.useInsertionEffect)(() => {
    m && g.current && m.update(n, c);
  });
  let _ = n[br],
    v = (0, J.useRef)(
      !!_ &&
        typeof window < `u` &&
        !window.MotionHandoffIsComplete?.(_) &&
        window.MotionHasOptimisedAnimation?.(_),
    );
  return (
    Pc(() => {
      ((p.current = !0),
        m &&
          ((g.current = !0),
          (window.MotionIsMounted = !0),
          m.updateFeatures(),
          m.scheduleRenderMicrotask(),
          v.current && m.animationState && m.animationState.animateChanges()));
    }),
    (0, J.useEffect)(() => {
      m &&
        (!v.current && m.animationState && m.animationState.animateChanges(),
        (v.current &&=
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(_);
          }),
          !1)),
        (m.enteringChildren = void 0));
    }),
    m
  );
}
function Ic(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t;
  ((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : Lc(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && Nc(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function Lc(e) {
  if (e) return e.options.allowProjection === !1 ? Lc(e.parent) : e.projection;
}
var Y = n();
function Rc(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && kc(r);
  let a = n ? n === `svg` : qs(e),
    o = a ? wc : Cc;
  function s(n, s) {
    let c,
      l = { ...(0, J.useContext)(Zs), ...n, layoutId: zc(n) },
      { isStatic: u } = l,
      d = ec(n),
      f = o(n, u);
    if (!u && typeof window < `u`) {
      Bc(l, r);
      let t = Vc(l);
      ((c = t.MeasureLayout), (d.visualElement = Fc(e, f, l, i, t.ProjectionNode, a)));
    }
    return (0, Y.jsxs)(Qs.Provider, {
      value: d,
      children: [
        c && d.visualElement ? (0, Y.jsx)(c, { visualElement: d.visualElement, ...l }) : null,
        _c(e, n, jc(f, d.visualElement, s), f, u, t, a),
      ],
    });
  }
  s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let c = (0, J.forwardRef)(s);
  return ((c[Ac] = e), c);
}
function zc({ layoutId: e }) {
  let t = (0, J.useContext)(Ys).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function Bc(e, t) {
  (0, J.useContext)(Xs).strict;
}
function Vc(e) {
  let { drag: t, layout: n } = Oc();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function Hc(e, t) {
  if (typeof Proxy > `u`) return Rc;
  let n = new Map(),
    r = (n, r) => Rc(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => (a === `create` ? r : (n.has(a) || n.set(a, Rc(a, void 0, e, t)), n.get(a))),
  });
}
var Uc = class extends V {
    constructor(e) {
      (super(e), (e.animationState ||= po(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      aa(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      (this.node.animationState.reset(), this.unmountControls?.());
    }
  },
  Wc = 0,
  Gc = {
    animation: { Feature: Uc },
    exit: {
      Feature: class extends V {
        constructor() {
          (super(...arguments), (this.id = Wc++), (this.isExitComplete = !1));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          if (e && n === !1) {
            if (this.isExitComplete) {
              let { initial: e, custom: t } = this.node.getProps();
              if (typeof e == `string` || (typeof e == `object` && e && !Array.isArray(e))) {
                let n = Ja(this.node, e, t);
                if (n) {
                  let { transition: e, transitionEnd: t, ...r } = n;
                  for (let e in r) this.node.getValue(e)?.jump(r[e]);
                }
              }
              (this.node.animationState.reset(), this.node.animationState.animateChanges());
            } else this.node.animationState.setActive(`exit`, !1);
            this.isExitComplete = !1;
            return;
          }
          let r = this.node.animationState.setActive(`exit`, !e);
          t &&
            !e &&
            r.then(() => {
              ((this.isExitComplete = !0), t(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } = this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      },
    },
  };
function Kc(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var qc = (e) => (t) => jr(t) && e(t, Kc(t));
function Jc(e, t, n, r) {
  return Oo(e, t, qc(n), r);
}
var Yc = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Xc = (e, t) => Math.abs(e - t);
function Zc(e, t) {
  let n = Xc(e.x, t.x),
    r = Xc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var Qc = new Set([`auto`, `scroll`]),
  $c = class {
    constructor(
      e,
      t,
      {
        transformPagePoint: n,
        contextWindow: r = window,
        dragSnapToOrigin: i = !1,
        distanceThreshold: a = 3,
        element: o,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (e) => {
          this.handleScroll(e.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          this.lastRawMoveEventInfo &&
            (this.lastMoveEventInfo = el(this.lastRawMoveEventInfo, this.transformPagePoint));
          let e = nl(this.lastMoveEventInfo, this.history),
            t = this.startEvent !== null,
            n = Zc(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!t && !n) return;
          let { point: r } = e,
            { timestamp: i } = O;
          this.history.push({ ...r, timestamp: i });
          let { onStart: a, onMove: o } = this.handlers;
          (t || (a && a(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
            o && o(this.lastMoveEvent, e));
        }),
        (this.handlePointerMove = (e, t) => {
          ((this.lastMoveEvent = e),
            (this.lastRawMoveEventInfo = t),
            (this.lastMoveEventInfo = el(t, this.transformPagePoint)),
            E.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (e, t) => {
          this.end();
          let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let a = nl(
            e.type === `pointercancel` ? this.lastMoveEventInfo : el(t, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && n && n(e, a), r && r(e, a));
        }),
        !jr(e))
      )
        return;
      ((this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.distanceThreshold = a),
        (this.contextWindow = r || window));
      let s = el(Kc(e), this.transformPagePoint),
        { point: c } = s,
        { timestamp: l } = O;
      this.history = [{ ...c, timestamp: l }];
      let { onSessionStart: u } = t;
      u && u(e, nl(s, this.history));
      let d = { passive: !0, capture: !0 };
      ((this.removeListeners = g(
        Jc(this.contextWindow, `pointermove`, this.handlePointerMove, d),
        Jc(this.contextWindow, `pointerup`, this.handlePointerUp, d),
        Jc(this.contextWindow, `pointercancel`, this.handlePointerUp, d),
      )),
        o && this.startScrollTracking(o));
    }
    startScrollTracking(e) {
      let t = e.parentElement;
      for (; t; ) {
        let e = getComputedStyle(t);
        ((Qc.has(e.overflowX) || Qc.has(e.overflowY)) &&
          this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
          (t = t.parentElement));
      }
      (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
        window.addEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
        window.addEventListener(`scroll`, this.onWindowScroll),
        (this.removeScrollListeners = () => {
          (window.removeEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
            window.removeEventListener(`scroll`, this.onWindowScroll));
        }));
    }
    handleScroll(e) {
      let t = this.scrollPositions.get(e);
      if (!t) return;
      let n = e === window,
        r = n ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
        i = { x: r.x - t.x, y: r.y - t.y };
      (i.x === 0 && i.y === 0) ||
        (n
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += i.x), (this.lastMoveEventInfo.point.y += i.y))
          : this.history.length > 0 && ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
        this.scrollPositions.set(e, r),
        E.update(this.updatePoint, !0));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        D(this.updatePoint));
    }
  };
function el(e, t) {
  return t ? { point: t(e.point) } : e;
}
function tl(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function nl({ point: e }, t) {
  return { point: e, delta: tl(e, il(t)), offset: tl(e, rl(t)), velocity: al(t, 0.1) };
}
function rl(e) {
  return e[0];
}
function il(e) {
  return e[e.length - 1];
}
function al(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = il(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > y(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] && e.length > 2 && i.timestamp - r.timestamp > y(t) * 2 && (r = e[1]);
  let a = b(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function ol(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? F(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? F(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function sl(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function cl(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: sl(e.x, n, i), y: sl(e.y, t, r) };
}
function ll(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function ul(e, t) {
  return { x: ll(e.x, t.x), y: ll(e.y, t.y) };
}
function dl(e, t) {
  let n = 0.5,
    r = G(e),
    i = G(t);
  return (
    i > r ? (n = _(t.min, t.max - r, e.min)) : r > i && (n = _(e.min, e.max - i, t.min)),
    l(0, 1, n)
  );
}
function fl(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var pl = 0.35;
function ml(e = pl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = pl),
    { x: hl(e, `left`, `right`), y: hl(e, `top`, `bottom`) }
  );
}
function hl(e, t, n) {
  return { min: gl(e, t), max: gl(e, n) };
}
function gl(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var _l = new WeakMap(),
  vl = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = W()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
      let { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      let i = (e) => {
          (t && this.snapToCursor(Kc(e).point), this.stopAnimation());
        },
        a = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = wr(n)),
            !this.openDragLock)
          )
            return;
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            K((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (j.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = G(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && E.update(() => i(e, t), !1, !0),
            ai(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        o = (e, t) => {
          ((this.latestPointerEvent = e), (this.latestPanInfo = t));
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = Sl(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && E.update(() => a(e, t), !1, !0));
        },
        s = (e, t) => {
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            this.stop(e, t),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null));
        },
        c = () => {
          let { dragSnapToOrigin: e } = this.getProps();
          (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new $c(
        e,
        { onSessionStart: i, onStart: a, onMove: o, onSessionEnd: s, resumeAnimation: c },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          distanceThreshold: n,
          contextWindow: Yc(this.visualElement),
          element: this.visualElement.current,
        },
      );
    }
    stop(e, t) {
      let n = e || this.latestPointerEvent,
        r = t || this.latestPanInfo,
        i = this.isDragging;
      if ((this.cancel(), !i || !r || !n)) return;
      let { velocity: a } = r;
      this.startAnimation(a);
      let { onDragEnd: o } = this.getProps();
      o && E.postRender(() => o(n, r));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1), this.endPanSession());
      let { dragPropagation: n } = this.getProps();
      (!n && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    endPanSession() {
      (this.panSession && this.panSession.end(), (this.panSession = void 0));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !xl(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints && this.constraints[e] && (a = ol(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && Nc(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : e && n
          ? (this.constraints = cl(n.layoutBox, e))
          : (this.constraints = !1),
        (this.elastic = ml(t)),
        r !== this.constraints &&
          !Nc(e) &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          K((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = fl(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Nc(e)) return !1;
      let n = e.current,
        { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      r.root && ((r.root.scroll = void 0), r.root.updateScroll());
      let i = wi(n, r.root, this.visualElement.getTransformPagePoint()),
        a = ul(r.layout.layoutBox, i);
      if (t) {
        let e = t(si(a));
        ((this.hasMutatedConstraints = !!e), e && (a = oi(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = K((o) => {
          if (!xl(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          (a === !0 || a === o) && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (ai(this.visualElement, e), n.start(vr(e, n, 0, t, this.visualElement, !1)));
    }
    stopAnimation() {
      K((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`;
      return (
        this.visualElement.getProps()[t] ||
        this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0)
      );
    }
    snapToCursor(e) {
      K((t) => {
        let { drag: n } = this.getProps();
        if (!xl(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t],
            o = i.get() || 0;
          i.set(e[t] - F(n, a, 0.5) + o);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Nc(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      K((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = dl({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        K((t) => {
          if (!xl(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(F(i, a, r[t]));
        }),
        this.visualElement.render());
    }
    addListeners() {
      if (!this.visualElement.current) return;
      _l.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Jc(e, `pointerdown`, (t) => {
          let { drag: n, dragListener: r = !0 } = this.getProps(),
            i = t.target,
            a = i !== e && Fr(i);
          n && r && !a && this.start(t);
        }),
        n,
        r = () => {
          let { dragConstraints: t } = this.getProps();
          Nc(t) &&
            t.current &&
            ((this.constraints = this.resolveRefConstraints()),
            (n ||= bl(e, t.current, () => this.scalePositionWithinConstraints())));
        },
        { projection: i } = this.visualElement,
        a = i.addEventListener(`measure`, r);
      (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), E.read(r));
      let o = Oo(window, `resize`, () => this.scalePositionWithinConstraints()),
        s = i.addEventListener(`didUpdate`, ({ delta: e, hasLayoutChanged: t }) => {
          this.isDragging &&
            t &&
            (K((t) => {
              let n = this.getAxisMotionValue(t);
              n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate));
            }),
            this.visualElement.render());
        });
      return () => {
        (o(), t(), a(), s && s(), n && n());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = pl,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function yl(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function bl(e, t, n) {
  let r = ri(e, yl(n)),
    i = ri(t, yl(n));
  return () => {
    (r(), i());
  };
}
function xl(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Sl(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var Cl = class extends V {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = h),
        (this.removeListeners = h),
        (this.controls = new vl(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || h));
    }
    update() {
      let { dragControls: e } = this.node.getProps(),
        { dragControls: t } = this.node.prevProps || {};
      e !== t &&
        (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      (this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession());
    }
  },
  wl = (e) => (t, n) => {
    e && E.update(() => e(t, n), !1, !0);
  },
  Tl = class extends V {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = h));
    }
    onPointerDown(e) {
      this.session = new $c(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Yc(this.node),
      });
    }
    createPanHandlers() {
      let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
      return {
        onSessionStart: wl(e),
        onStart: wl(t),
        onMove: wl(n),
        onEnd: (e, t) => {
          (delete this.session, r && E.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Jc(this.node.current, `pointerdown`, (e) =>
        this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  };
function El(e = !0) {
  let t = (0, J.useContext)(vc);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, J.useId)();
  (0, J.useEffect)(() => {
    if (e) return i(a);
  }, [e]);
  let o = (0, J.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var Dl = !1,
  Ol = class extends J.Component {
    componentDidMount() {
      let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
        { projection: i } = e;
      (i &&
        (t.group && t.group.add(i),
        n && n.register && r && n.register(i),
        Dl && i.root.didUpdate(),
        i.addEventListener(`animationComplete`, () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (ls.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props,
        { projection: a } = n;
      return a
        ? ((a.isPresent = i),
          e.layoutDependency !== t && a.setOptions({ ...a.options, layoutDependency: t }),
          (Dl = !0),
          r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                E.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { visualElement: e, layoutAnchor: t } = this.props,
        { projection: n } = e;
      n &&
        ((n.options.layoutAnchor = t),
        n.root.didUpdate(),
        xr.postRender(() => {
          !n.currentAnimation && n.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
        { projection: r } = e;
      ((Dl = !0),
        r &&
          (r.scheduleCheckAfterUnmount(),
          t && t.group && t.group.remove(r),
          n && n.deregister && n.deregister(r)));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function kl(e) {
  let [t, n] = El(),
    r = (0, J.useContext)(Ys);
  return (0, Y.jsx)(Ol, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, J.useContext)(Mc),
    isPresent: t,
    safeToRemove: n,
  });
}
var Al = { pan: { Feature: Tl }, drag: { Feature: Cl, ProjectionNode: Gs, MeasureLayout: kl } };
function jl(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && E.postRender(() => i(t, Kc(t)));
}
var Ml = class extends V {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = Or(
          e,
          (e, t) => (jl(this.node, t, `Start`), (e) => jl(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  Nl = class extends V {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0), (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1), (this.isActive = !1));
    }
    mount() {
      this.unmount = g(
        Oo(this.node.current, `focus`, () => this.onFocus()),
        Oo(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function Pl(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && E.postRender(() => i(t, Kc(t)));
}
var Fl = class extends V {
    mount() {
      let { current: e } = this.node;
      if (!e) return;
      let { globalTapTarget: t, propagate: n } = this.node.props;
      this.unmount = Hr(
        e,
        (e, t) => (
          Pl(this.node, t, `Start`),
          (e, { success: t }) => Pl(this.node, e, t ? `End` : `Cancel`)
        ),
        { useGlobalTarget: t, stopPropagation: n?.tap === !1 },
      );
    }
    unmount() {}
  },
  Il = new WeakMap(),
  Ll = new WeakMap(),
  Rl = (e) => {
    let t = Il.get(e.target);
    t && t(e);
  },
  zl = (e) => {
    e.forEach(Rl);
  };
function Bl({ root: e, ...t }) {
  let n = e || document;
  Ll.has(n) || Ll.set(n, {});
  let r = Ll.get(n),
    i = JSON.stringify(t);
  return (r[i] || (r[i] = new IntersectionObserver(zl, { root: e, ...t })), r[i]);
}
function Vl(e, t, n) {
  let r = Bl(t);
  return (
    Il.set(e, n),
    r.observe(e),
    () => {
      (Il.delete(e), r.unobserve(e));
    }
  );
}
var Hl = { some: 0, all: 1 },
  Ul = class extends V {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.stopObserver?.();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : Hl[r],
        },
        o = (e) => {
          let { isIntersecting: t } = e;
          if (this.isInView === t || ((this.isInView = t), i && !t && this.hasEnteredView)) return;
          (t && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive(`whileInView`, t));
          let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
            a = t ? n : r;
          a && a(e);
        };
      this.stopObserver = Vl(this.node.current, a, o);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(Wl(e, t)) && this.startObserver();
    }
    unmount() {
      (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
    }
  };
function Wl({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var Gl = {
    inView: { Feature: Ul },
    tap: { Feature: Fl },
    focus: { Feature: Nl },
    hover: { Feature: Ml },
  },
  Kl = { layout: { ProjectionNode: Gs, MeasureLayout: kl } },
  X = Hc({ ...Gc, ...Gl, ...Al, ...Kl }, Js),
  ql = { some: 0, all: 1 };
function Jl(e, t, { root: n, margin: r, amount: i = `some` } = {}) {
  let a = Tr(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e.target, e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else typeof n == `function` && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : ql[i] },
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Yl(e, { root: t, margin: n, amount: r, once: i = !1, initial: a = !1 } = {}) {
  let [o, s] = (0, J.useState)(a);
  return (
    (0, J.useEffect)(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        c = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Jl(e.current, a, c);
    }, [t, e, n, i, r]),
    o
  );
}
var Xl = `/assets/hero-worker-hq-ZMCYrJ5u.webp`,
  Zl = `/assets/gallery-3-D4iac3Io.webp`,
  Ql = `/assets/gallery-1-CnDt7Dz4.webp`,
  Z = {
    Star: (e) =>
      (0, Y.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "aria-hidden": !0,
        ...e,
        children: (0, Y.jsx)(`path`, {
          d: `M12 2l2.95 6.6 7.05.7-5.3 4.8 1.6 7-6.3-3.7-6.3 3.7 1.6-7-5.3-4.8 7.05-.7L12 2z`,
        }),
      }),
    Check: (e) =>
      (0, Y.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, Y.jsx)(`path`, { d: `M5 12.5l4.5 4.5L19 7` }),
      }),
    Close: (e) =>
      (0, Y.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, Y.jsx)(`path`, { d: `M6 6l12 12M18 6l-6 12` }),
      }),
    Arrow: (e) =>
      (0, Y.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.6`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, Y.jsx)(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
      }),
    Menu: (e) =>
      (0, Y.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.6`,
        strokeLinecap: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, Y.jsx)(`path`, { d: `M4 7h16M4 12h16M4 17h16` }),
      }),
    Plus: (e) =>
      (0, Y.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.6`,
        strokeLinecap: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, Y.jsx)(`path`, { d: `M12 5v14M5 12h14` }),
      }),
    Drag: (e) =>
      (0, Y.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, Y.jsx)(`path`, { d: `M8 9l-4 3 4 3M16 9l4 3-4 3` }),
      }),
  },
  $l = ({ className: e = `` }) =>
    (0, Y.jsxs)(`div`, {
      className: `flex items-center gap-2 ${e}`,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `relative font-display font-black tracking-normal`,
          style: { fontSize: `1.4em`, lineHeight: 1, letterSpacing: `0.05em` },
          children: [
            `C`,
            (0, Y.jsxs)(`span`, {
              className: `relative inline-block`,
              children: [
                `U`,
                (0, Y.jsx)(`span`, {
                  className: `absolute left-[5%] right-[5%] bottom-[-0.15em] h-[0.08em] bg-current`,
                }),
              ],
            }),
            `BIK`,
            (0, Y.jsxs)(`span`, {
              className: `relative inline-block`,
              children: [
                `O`,
                (0, Y.jsx)(`span`, {
                  className: `absolute left-[5%] right-[5%] bottom-[-0.15em] h-[0.08em] bg-current`,
                }),
              ],
            }),
            `S`,
          ],
        }),
        (0, Y.jsxs)(`svg`, {
          viewBox: `0 0 32 36`,
          className: `h-[1.6em] w-auto`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2.5`,
          strokeLinejoin: `round`,
          strokeLinecap: `round`,
          children: [
            (0, Y.jsx)(`polygon`, { points: `16,2 30,10 30,26 16,34 2,26 2,10`, fill: `none` }),
            (0, Y.jsx)(`polyline`, { points: `2,10 16,18 30,10`, fill: `none` }),
            (0, Y.jsx)(`line`, { x1: `16`, y1: `18`, x2: `16`, y2: `34`, fill: `none` }),
          ],
        }),
      ],
    }),
  Q = ({ children: e, delay: t = 0, className: n = `` }) =>
    (0, Y.jsx)(X.div, {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0, margin: `-10%` },
      transition: { duration: 0.6, delay: t, ease: [0.2, 0.8, 0.2, 1] },
      className: n,
      children: e,
    }),
  eu = ({ children: e, delay: t = 0 }) =>
    (0, Y.jsx)(`div`, {
      className: `overflow-hidden`,
      children: (0, Y.jsx)(X.div, {
        initial: { y: `100%` },
        whileInView: { y: 0 },
        viewport: { once: !0, margin: `-10%` },
        transition: { duration: 0.6, delay: t, ease: [0.2, 0.8, 0.2, 1] },
        children: e,
      }),
    });
function tu({ to: e, suffix: t = ``, duration: n = 2 }) {
  let [r, i] = (0, J.useState)(0),
    a = (0, J.useRef)(null),
    o = Yl(a, { once: !0, margin: `-10%` });
  return (
    (0, J.useEffect)(() => {
      if (o) {
        let t,
          r = (a) => {
            t ||= a;
            let o = Math.min((a - t) / (n * 1e3), 1),
              s = 1 - (1 - o) ** 4;
            (i(Math.floor(s * e)), o < 1 ? window.requestAnimationFrame(r) : i(e));
          };
        window.requestAnimationFrame(r);
      }
    }, [o, e, n]),
    (0, Y.jsxs)(`span`, { ref: a, children: [r.toLocaleString(`es-ES`), t] })
  );
}
function nu() {
  let [e, t] = (0, J.useState)(!1),
    [n, r] = (0, J.useState)(!1);
  (0, J.useEffect)(() => {
    let e = () => t(window.scrollY > 50);
    return (
      e(),
      window.addEventListener(`scroll`, e, { passive: !0 }),
      () => window.removeEventListener(`scroll`, e)
    );
  }, []);
  let i = [
    { label: `Método`, href: `#metodo` },
    { label: `Proyectos`, href: `#proyectos` },
    { label: `Opiniones`, href: `#opiniones` },
    { label: `Contacto`, href: `#contacto` },
  ];
  return (0, Y.jsxs)(`header`, {
    className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] ${e ? `py-4` : `py-6`}`,
    children: [
      (0, Y.jsxs)(`div`, {
        className: `container-x flex items-center justify-between`,
        children: [
          (0, Y.jsx)(`a`, {
            href: `#top`,
            className: `text-brand transition-transform hover:scale-105 duration-300`,
            children: (0, Y.jsx)($l, { className: `text-[22px] md:text-[26px]` }),
          }),
          (0, Y.jsx)(`nav`, {
            className: `hidden items-center gap-14 lg:flex`,
            children: i.map((e) =>
              (0, Y.jsxs)(
                `a`,
                {
                  href: e.href,
                  className: `group relative text-[17px] font-medium tracking-wide transition-colors text-ink hover:text-brand`,
                  children: [
                    e.label,
                    (0, Y.jsx)(`span`, {
                      className: `absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full`,
                    }),
                  ],
                },
                e.href,
              ),
            ),
          }),
          (0, Y.jsx)(`div`, {
            className: `hidden lg:block`,
            children: (0, Y.jsxs)(`a`, {
              href: `#contacto`,
              className: `group relative overflow-hidden flex items-center justify-center px-8 h-12 rounded-full font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-300 bg-gradient-to-r from-[#FFDE00] to-[#F39C12] text-white shadow-[0_5px_20px_rgba(243,156,18,0.4)] hover:shadow-[0_10px_30px_rgba(243,156,18,0.6)] hover:-translate-y-0.5`,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out`,
                }),
                (0, Y.jsx)(`span`, {
                  className: `relative z-10 drop-shadow-md`,
                  children: `Solicitar presupuesto`,
                }),
              ],
            }),
          }),
          (0, Y.jsx)(`button`, {
            "aria-label": `Abrir menú`,
            onClick: () => r(!n),
            className: `grid h-12 w-12 place-items-center lg:hidden text-ink`,
            children: n
              ? (0, Y.jsx)(Z.Close, { className: `h-8 w-8` })
              : (0, Y.jsx)(Z.Menu, { className: `h-8 w-8` }),
          }),
        ],
      }),
      n &&
        (0, Y.jsx)(X.div, {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          className: `lg:hidden bg-background absolute top-full w-full left-0 border-b border-line pb-6`,
          children: (0, Y.jsxs)(`div`, {
            className: `container-x flex flex-col gap-2 pt-4`,
            children: [
              i.map((e) =>
                (0, Y.jsx)(
                  `a`,
                  {
                    href: e.href,
                    onClick: () => r(!1),
                    className: `py-4 text-xl font-bold text-ink border-b border-line/50`,
                    children: e.label,
                  },
                  e.href,
                ),
              ),
              (0, Y.jsx)(`a`, {
                href: `#contacto`,
                onClick: () => r(!1),
                className: `btn-primary mt-6 w-full`,
                children: `Solicitar presupuesto`,
              }),
            ],
          }),
        }),
    ],
  });
}
var ru = ({ className: e, delay: t }) =>
    (0, Y.jsxs)(X.div, {
      initial: { scale: 0, opacity: 0 },
      whileInView: { scale: [0, 1.6, 1], opacity: 1 },
      viewport: { once: !0 },
      transition: { delay: t, duration: 0.4, times: [0, 0.6, 1], ease: [`easeOut`, `backOut`] },
      className: `absolute w-3 h-3 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-500 border border-neutral-600 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.4)] flex items-center justify-center z-10 ${e}`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `w-1.5 h-[1.5px] bg-neutral-700/80 rotate-45 rounded-full`,
        }),
        (0, Y.jsx)(`div`, {
          className: `absolute w-1.5 h-[1.5px] bg-neutral-700/80 -rotate-45 rounded-full`,
        }),
      ],
    }),
  iu = ({ className: e, delay: t }) =>
    (0, Y.jsx)(X.div, {
      initial: { opacity: 0, rotate: -45, x: -30, y: -30 },
      whileInView: {
        opacity: [0, 1, 1, 0],
        rotate: [-45, -60, 20, 20],
        x: [-30, -40, 0, 10],
        y: [-30, -40, 0, 20],
      },
      viewport: { once: !0 },
      transition: { duration: 0.6, delay: t - 0.25, times: [0, 0.4, 0.6, 1], ease: `easeInOut` },
      className: `absolute z-30 pointer-events-none ${e}`,
      children: (0, Y.jsxs)(`svg`, {
        width: `40`,
        height: `40`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        className: `text-ink drop-shadow-2xl fill-white/90`,
        children: [
          (0, Y.jsx)(`path`, { d: `m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L13.586 10.586` }),
          (0, Y.jsx)(`path`, { d: `m18 11.5-4.5-4.5` }),
          (0, Y.jsx)(`path`, { d: `M14 6h3l5 5v3h-3l-5-5Z` }),
        ],
      }),
    });
function au() {
  return (0, Y.jsxs)(`section`, {
    id: `top`,
    className: `relative min-h-[100svh] flex flex-col bg-ink pb-32 md:pb-40`,
    children: [
      (0, Y.jsxs)(X.div, {
        initial: { scale: 1.05 },
        animate: { scale: 1 },
        transition: { duration: 1.5, ease: `easeOut` },
        className: `absolute inset-0 z-0 overflow-hidden`,
        children: [
          (0, Y.jsx)(`svg`, {
            className: `hidden`,
            children: (0, Y.jsx)(`filter`, {
              id: `crisp-sharpen`,
              children: (0, Y.jsx)(`feConvolveMatrix`, {
                order: `3`,
                preserveAlpha: `true`,
                kernelMatrix: `0 -1 0 -1 5 -1 0 -1 0`,
              }),
            }),
          }),
          (0, Y.jsx)(`img`, {
            src: Xl,
            alt: `Montador profesional ajustando cocina premium`,
            className: `absolute inset-0 w-full h-full object-cover object-[85%_center] sm:object-[65%_center] md:object-[55%_center] contrast-[1.10] saturate-[1.05]`,
            style: { filter: `url(#crisp-sharpen)` },
          }),
          (0, Y.jsx)(`div`, {
            className: `absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.45)_0%,transparent_65%)] md:bg-[radial-gradient(circle_at_25%_50%,rgba(0,0,0,0.55)_0%,transparent_50%)]`,
          }),
          (0, Y.jsx)(`div`, {
            className: `absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent md:hidden`,
          }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: `relative z-10 w-full flex flex-col container-x my-auto pt-24 pb-10 md:pt-32 md:pb-16`,
        children: (0, Y.jsxs)(`div`, {
          className: `w-full max-w-[480px]`,
          children: [
            (0, Y.jsx)(eu, {
              children: (0, Y.jsxs)(`h1`, {
                className: `font-display font-black text-[clamp(1.9rem,5.5vw,2.6rem)] md:text-[clamp(2.8rem,4vw,3.6rem)] text-white tracking-tighter leading-[1.05]`,
                children: [
                  (0, Y.jsx)(`span`, { className: `block`, children: `Una cocina` }),
                  (0, Y.jsx)(`span`, { className: `block`, children: `perfecta` }),
                  (0, Y.jsx)(`span`, {
                    className: `block text-white/90`,
                    children: `empieza con un`,
                  }),
                  (0, Y.jsxs)(`span`, {
                    className: `block`,
                    children: [
                      `montaje perfecto`,
                      (0, Y.jsx)(`span`, { className: `text-brand`, children: `.` }),
                    ],
                  }),
                ],
              }),
            }),
            (0, Y.jsx)(Q, {
              delay: 0.2,
              className: `mt-4 md:mt-5 max-w-[440px]`,
              children: (0, Y.jsx)(`p`, {
                className: `text-lg md:text-[20px] text-white/95 font-medium tracking-wide leading-relaxed text-balance antialiased drop-shadow-sm`,
                children: `Más de 30 años instalando cocinas en toda Cataluña con precisión milimétrica y acabados impecables.`,
              }),
            }),
            (0, Y.jsxs)(Q, {
              delay: 0.4,
              className: `flex flex-col sm:flex-row items-center gap-5 sm:gap-6`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `relative w-full sm:w-auto`,
                  children: [
                    (0, Y.jsx)(X.div, {
                      animate: { scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] },
                      transition: { repeat: 1 / 0, duration: 2, repeatDelay: 2 },
                      className: `absolute inset-0 rounded-full border-[2px] border-brand pointer-events-none`,
                    }),
                    (0, Y.jsxs)(`a`, {
                      href: `#contacto`,
                      className: `group relative overflow-hidden w-full sm:w-auto flex items-center justify-center px-10 h-16 rounded-full bg-gradient-to-r from-[#FFDE00] to-[#F39C12] text-white font-black text-[14px] md:text-[16px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_40px_rgba(243,156,18,0.5)] hover:shadow-[0_20px_60px_rgba(243,156,18,0.8)] hover:-translate-y-1`,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: `absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.2s] ease-in-out`,
                        }),
                        (0, Y.jsx)(`span`, {
                          className: `relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`,
                          children: `Solicitar presupuesto`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Y.jsx)(`a`, {
                  href: `#proyectos`,
                  className: `group relative overflow-hidden w-full sm:w-auto flex items-center justify-center px-10 h-16 rounded-full bg-white text-ink font-bold text-[14px] md:text-[15px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1`,
                  children: (0, Y.jsx)(`span`, {
                    className: `relative z-10`,
                    children: `Ver proyectos`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, Y.jsx)(`div`, {
        className: `absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-[90%] max-w-[900px]`,
        children: (0, Y.jsx)(Q, {
          delay: 0.6,
          children: (0, Y.jsxs)(`div`, {
            className: `relative rounded-3xl p-8 md:px-14 md:py-12 shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/20`,
            style: {
              backgroundImage: `url('/wood-panel.webp')`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            },
            children: [
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 rounded-3xl shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] pointer-events-none`,
              }),
              (0, Y.jsx)(iu, { className: `top-0 left-0`, delay: 1 }),
              (0, Y.jsx)(ru, { className: `top-4 left-4 -rotate-12`, delay: 1 }),
              (0, Y.jsx)(iu, { className: `top-0 right-0`, delay: 1.2 }),
              (0, Y.jsx)(ru, { className: `top-4 right-4 rotate-45`, delay: 1.2 }),
              (0, Y.jsx)(iu, { className: `bottom-0 left-0`, delay: 1.4 }),
              (0, Y.jsx)(ru, { className: `bottom-4 left-4 rotate-90`, delay: 1.4 }),
              (0, Y.jsx)(iu, { className: `bottom-0 right-0`, delay: 1.6 }),
              (0, Y.jsx)(ru, { className: `bottom-4 right-4 -rotate-45`, delay: 1.6 }),
              (0, Y.jsxs)(`div`, {
                className: `relative z-10 grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 px-2 py-2`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: `text-[32px] md:text-[44px] font-black text-ink leading-none tracking-tighter`,
                        children: `30+`,
                      }),
                      (0, Y.jsxs)(`span`, {
                        className: `relative inline-block mt-2`,
                        children: [
                          (0, Y.jsx)(`span`, {
                            className: `absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm`,
                          }),
                          (0, Y.jsx)(`span`, {
                            className: `relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]`,
                            children: `Años`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: `text-[32px] md:text-[44px] font-black text-ink leading-none tracking-tighter`,
                        children: `500+`,
                      }),
                      (0, Y.jsxs)(`span`, {
                        className: `relative inline-block mt-2`,
                        children: [
                          (0, Y.jsx)(`span`, {
                            className: `absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm`,
                          }),
                          (0, Y.jsx)(`span`, {
                            className: `relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]`,
                            children: `Cocinas`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: `text-[26px] md:text-[34px] font-black text-ink leading-none tracking-tight pt-1 md:pt-2`,
                        children: `Cataluña`,
                      }),
                      (0, Y.jsxs)(`span`, {
                        className: `relative inline-block mt-2`,
                        children: [
                          (0, Y.jsx)(`span`, {
                            className: `absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm`,
                          }),
                          (0, Y.jsx)(`span`, {
                            className: `relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]`,
                            children: `Cobertura`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: `text-[26px] md:text-[34px] font-black text-ink leading-none tracking-tight pt-1 md:pt-2`,
                        children: `Garantía`,
                      }),
                      (0, Y.jsxs)(`span`, {
                        className: `relative inline-block mt-2`,
                        children: [
                          (0, Y.jsx)(`span`, {
                            className: `absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm`,
                          }),
                          (0, Y.jsx)(`span`, {
                            className: `relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]`,
                            children: `Profesional`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function ou() {
  let [e, t] = (0, J.useState)(50),
    [n, r] = (0, J.useState)({ x: 0, y: 0 }),
    [i, a] = (0, J.useState)(!1),
    o = (0, J.useRef)(null),
    s = (0, J.useRef)(!1),
    c = (e) => {
      if (!o.current) return;
      let n = o.current.getBoundingClientRect();
      t((Math.max(0, Math.min(e - n.left, n.width)) / n.width) * 100);
    };
  return (0, Y.jsx)(`section`, {
    id: `metodo`,
    className: `bg-background text-ink py-32 md:py-48`,
    children: (0, Y.jsxs)(`div`, {
      className: `container-x`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `max-w-5xl mb-24 text-center md:text-left`,
          children: (0, Y.jsxs)(eu, {
            children: [
              (0, Y.jsx)(`span`, {
                className: `eyebrow text-ink-soft`,
                children: `El montaje decide el resultado final`,
              }),
              (0, Y.jsx)(`h2`, {
                className: `font-display font-black text-[3.5rem] md:text-[5.5rem] leading-[0.95] tracking-tighter mt-6 text-balance`,
                children: `Una cocina de 25.000€ puede parecer de 5.000€ si el montaje falla.`,
              }),
            ],
          }),
        }),
        (0, Y.jsxs)(`div`, {
          className: `max-w-6xl mx-auto`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `flex justify-between items-center mb-6 px-4 md:px-0`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `font-display font-black text-lg md:text-2xl uppercase tracking-widest text-ink flex items-center gap-2`,
                  children: [
                    (0, Y.jsx)(Z.Close, { className: `h-5 w-5 text-red-500` }),
                    ` Error Habitual`,
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `font-display font-black text-lg md:text-2xl uppercase tracking-widest text-brand flex items-center gap-2`,
                  children: [
                    (0, Y.jsx)(Z.Check, { className: `h-5 w-5 text-brand` }),
                    ` Método Cubikos`,
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              ref: o,
              className: `relative w-full aspect-square md:aspect-[21/9] bg-[#E8E6E1] overflow-hidden cursor-none select-none touch-none shadow-premium`,
              onMouseMove: (e) => {
                if ((c(e.clientX), o.current)) {
                  let t = o.current.getBoundingClientRect();
                  r({ x: e.clientX - t.left, y: e.clientY - t.top });
                }
              },
              onTouchMove: (e) => {
                if ((c(e.touches[0].clientX), o.current)) {
                  let t = o.current.getBoundingClientRect();
                  r({ x: e.touches[0].clientX - t.left, y: e.touches[0].clientY - t.top });
                }
              },
              onMouseEnter: () => a(!0),
              onMouseLeave: () => {
                (a(!1), (s.current = !1));
              },
              onMouseDown: () => (s.current = !0),
              onMouseUp: () => (s.current = !1),
              children: [
                (0, Y.jsx)(X.div, {
                  className: `absolute pointer-events-none z-50 flex items-center justify-center`,
                  style: { left: n.x, top: n.y, x: `-50%`, y: `-50%` },
                  initial: { opacity: 0 },
                  animate: { opacity: +!!i },
                  transition: { duration: 0.15 },
                  children: (0, Y.jsxs)(`svg`, {
                    width: `32`,
                    height: `32`,
                    viewBox: `0 0 32 32`,
                    fill: `none`,
                    stroke: `#F39C12`,
                    strokeWidth: `1.5`,
                    children: [
                      (0, Y.jsx)(`line`, { x1: `16`, y1: `0`, x2: `16`, y2: `32` }),
                      (0, Y.jsx)(`line`, { x1: `0`, y1: `16`, x2: `32`, y2: `16` }),
                      (0, Y.jsx)(`circle`, {
                        cx: `16`,
                        cy: `16`,
                        r: `4`,
                        fill: `#F39C12`,
                        stroke: `none`,
                      }),
                    ],
                  }),
                }),
                (0, Y.jsx)(`img`, {
                  src: Ql,
                  alt: `Método Cubikos perfecto`,
                  className: `absolute inset-0 w-full h-full object-cover pointer-events-none`,
                }),
                (0, Y.jsx)(`div`, {
                  className: `absolute inset-0 w-full h-full overflow-hidden pointer-events-none`,
                  style: { clipPath: `inset(0 ${100 - e}% 0 0)` },
                  children: (0, Y.jsx)(`img`, {
                    src: Zl,
                    alt: `Ejemplo de mala ejecución`,
                    className: `absolute inset-0 w-full h-full object-cover grayscale pointer-events-none`,
                  }),
                }),
                (0, Y.jsx)(`div`, {
                  className: `absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none`,
                  style: { left: `${e}%`, transform: `translateX(-50%)` },
                  children: (0, Y.jsx)(`div`, {
                    className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-ink`,
                    children: (0, Y.jsx)(Z.Drag, { className: `h-5 w-5` }),
                  }),
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `grid grid-cols-2 mt-8 md:mt-12 gap-8 px-4 md:px-0`,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `text-left`,
                  children: (0, Y.jsxs)(`ul`, {
                    className: `space-y-4 font-medium text-lg md:text-xl text-ink-soft`,
                    children: [
                      (0, Y.jsxs)(`li`, {
                        className: `flex items-start gap-3`,
                        children: [
                          (0, Y.jsx)(`span`, { className: `text-ink mt-1`, children: `•` }),
                          ` Puertas torcidas`,
                        ],
                      }),
                      (0, Y.jsxs)(`li`, {
                        className: `flex items-start gap-3`,
                        children: [
                          (0, Y.jsx)(`span`, { className: `text-ink mt-1`, children: `•` }),
                          ` Holguras visibles`,
                        ],
                      }),
                      (0, Y.jsxs)(`li`, {
                        className: `flex items-start gap-3`,
                        children: [
                          (0, Y.jsx)(`span`, { className: `text-ink mt-1`, children: `•` }),
                          ` Desniveles`,
                        ],
                      }),
                    ],
                  }),
                }),
                (0, Y.jsx)(`div`, {
                  className: `text-right`,
                  children: (0, Y.jsxs)(`ul`, {
                    className: `space-y-4 font-medium text-lg md:text-xl text-ink inline-block text-left`,
                    children: [
                      (0, Y.jsxs)(`li`, {
                        className: `flex items-start gap-3`,
                        children: [
                          (0, Y.jsx)(`span`, { className: `text-brand mt-1`, children: `•` }),
                          ` Ajuste láser`,
                        ],
                      }),
                      (0, Y.jsxs)(`li`, {
                        className: `flex items-start gap-3`,
                        children: [
                          (0, Y.jsx)(`span`, { className: `text-brand mt-1`, children: `•` }),
                          ` Nivelación perfecta`,
                        ],
                      }),
                      (0, Y.jsxs)(`li`, {
                        className: `flex items-start gap-3`,
                        children: [
                          (0, Y.jsx)(`span`, { className: `text-brand mt-1`, children: `•` }),
                          ` Acabados premium`,
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var su = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  cu = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  lu = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  uu = (e) => {
    let t = lu(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  du = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  fu = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  pu = (0, J.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, J.createElement)(
        `svg`,
        {
          ref: c,
          ...du,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: su(`lucide`, i),
          ...(!a && !fu(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [...o.map(([e, t]) => (0, J.createElement)(e, t)), ...(Array.isArray(a) ? a : [a])],
      ),
  ),
  mu = (e, t) => {
    let n = (0, J.forwardRef)(({ className: n, ...r }, i) =>
      (0, J.createElement)(pu, {
        ref: i,
        iconNode: t,
        className: su(`lucide-${cu(uu(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = uu(e)), n);
  },
  hu = mu(`circle-check-big`, [
    [`path`, { d: `M21.801 10A10 10 0 1 1 17 3.335`, key: `yps3ct` }],
    [`path`, { d: `m9 11 3 3L22 4`, key: `1pflzl` }],
  ]),
  gu = mu(`file-search`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`circle`, { cx: `11.5`, cy: `14.5`, r: `2.5`, key: `1bq0ko` }],
    [`path`, { d: `M13.3 16.3 15 18`, key: `2quom7` }],
  ]),
  _u = mu(`hammer`, [
    [`path`, { d: `m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9`, key: `1hayfq` }],
    [`path`, { d: `m18 15 4-4`, key: `16gjal` }],
    [
      `path`,
      {
        d: `m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5`,
        key: `15ts47`,
      },
    ],
  ]),
  vu = mu(`phone-call`, [
    [`path`, { d: `M13 2a9 9 0 0 1 9 9`, key: `1itnx2` }],
    [`path`, { d: `M13 6a5 5 0 0 1 5 5`, key: `11nki7` }],
    [
      `path`,
      {
        d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
        key: `9njp5v`,
      },
    ],
  ]),
  yu = mu(`ruler`, [
    [
      `path`,
      {
        d: `M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z`,
        key: `icamh8`,
      },
    ],
    [`path`, { d: `m14.5 12.5 2-2`, key: `inckbg` }],
    [`path`, { d: `m11.5 9.5 2-2`, key: `fmmyf7` }],
    [`path`, { d: `m8.5 6.5 2-2`, key: `vc6u1g` }],
    [`path`, { d: `m17.5 15.5 2-2`, key: `wo5hmg` }],
  ]),
  bu = `/assets/showcase-1-VjeLoU0L.png`,
  xu = `/assets/showcase-2-9OYfbOaq.jpg`,
  Su = `/assets/showcase-3-Cin858Re.png`,
  Cu = `/assets/gallery-5-BUWLZ2B8.webp`,
  wu = [0.22, 1, 0.36, 1],
  $ = ({ children: e, delay: t = 0, className: n = `` }) =>
    (0, Y.jsx)(X.div, {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0, margin: `-10%` },
      transition: { duration: 0.8, delay: t, ease: wu },
      className: n,
      children: e,
    }),
  Tu = ({ children: e, delay: t = 0, className: n = `` }) =>
    (0, Y.jsx)(X.div, {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: !0, margin: `-10%` },
      transition: { duration: 0.8, delay: t, ease: wu },
      className: n,
      children: e,
    }),
  Eu = ({ value: e, className: t = `` }) =>
    (0, Y.jsx)(`div`, {
      className: `flex items-baseline ${t}`,
      children: e.split(``).map((e, t) => {
        if (isNaN(parseInt(e)))
          return (0, Y.jsx)(
            X.span,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: 1.2 },
              children: e,
            },
            t,
          );
        let n = parseInt(e),
          r = n === 0 ? 10 : n;
        return (0, Y.jsxs)(
          `div`,
          {
            className: `relative inline-block overflow-hidden`,
            style: { height: `1em` },
            children: [
              (0, Y.jsx)(`span`, { className: `invisible px-[2px]`, children: n }),
              (0, Y.jsx)(X.div, {
                initial: { y: 0 },
                whileInView: { y: `calc(-100% * ${r} / 11)` },
                viewport: { once: !0 },
                transition: { duration: 1.2, ease: `easeOut` },
                className: `absolute top-0 left-0 flex flex-col`,
                style: { height: `1100%` },
                children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, t) =>
                  (0, Y.jsx)(
                    `span`,
                    {
                      className: `flex items-center justify-center leading-none px-[2px]`,
                      style: { height: `${100 / 11}%` },
                      children: e,
                    },
                    t,
                  ),
                ),
              }),
            ],
          },
          t,
        );
      }),
    });
function Du() {
  return (0, Y.jsxs)(`section`, {
    id: `experiencia`,
    className: `relative bg-[#050505] text-[#FAFAF8] py-32 md:py-48 overflow-hidden z-10`,
    children: [
      (0, Y.jsx)(`div`, {
        className: `absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none`,
        style: {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")`,
        },
      }),
      (0, Y.jsx)(`div`, {
        className: `absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] pointer-events-none`,
      }),
      (0, Y.jsx)(`div`, {
        className: `container-x relative z-10`,
        children: (0, Y.jsxs)(`div`, {
          className: `grid lg:grid-cols-12 gap-16 lg:gap-12`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `lg:col-span-5 flex flex-col justify-start`,
              children: [
                (0, Y.jsx)(Tu, {
                  children: (0, Y.jsx)(`div`, {
                    className: `font-display font-black leading-none tracking-tighter text-brand text-[8rem] sm:text-[11rem] md:text-[14rem] lg:text-[15rem]`,
                    children: (0, Y.jsx)(Eu, { value: `30+` }),
                  }),
                }),
                (0, Y.jsx)($, {
                  delay: 0.2,
                  className: `mt-8`,
                  children: (0, Y.jsxs)(`p`, {
                    className: `font-sans text-[22px] font-medium text-[#FAFAF8] max-w-sm leading-snug`,
                    children: [
                      `Especialistas exclusivamente`,
                      (0, Y.jsx)(`br`, {}),
                      `en montaje de cocinas.`,
                    ],
                  }),
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `lg:col-span-7 lg:pl-12 flex flex-col justify-center pt-4 lg:pt-12`,
              children: [
                (0, Y.jsx)($, {
                  delay: 0.1,
                  children: (0, Y.jsx)(`h2`, {
                    className: `font-display font-bold text-[40px] md:text-[56px] leading-[1.1] text-[#FAFAF8] text-balance`,
                    children: `Tres décadas perfeccionando un único oficio.`,
                  }),
                }),
                (0, Y.jsxs)($, {
                  delay: 0.3,
                  className: `mt-12 space-y-6 text-xl md:text-[22px] text-[#EDEBE8] font-medium leading-relaxed max-w-3xl`,
                  children: [
                    (0, Y.jsx)(`p`, {
                      children: `Mientras otras empresas reparten su atención entre reformas, coordinación de gremios y decenas de servicios distintos, Cubikos ha dedicado más de treinta años a una sola misión:`,
                    }),
                    (0, Y.jsx)(`p`, {
                      className: `font-bold text-[#FAFAF8]`,
                      children: `Montar cocinas con precisión absoluta.`,
                    }),
                    (0, Y.jsxs)(`div`, {
                      children: [
                        (0, Y.jsx)(`p`, { children: `Cada ajuste.` }),
                        (0, Y.jsx)(`p`, { children: `Cada nivelación.` }),
                        (0, Y.jsx)(`p`, { children: `Cada encuentro.` }),
                        (0, Y.jsx)(`p`, { children: `Cada acabado.` }),
                      ],
                    }),
                    (0, Y.jsx)(`p`, {
                      className: `text-brand font-bold pt-4`,
                      children: `Perfeccionados tras más de 10.000 instalaciones.`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Ou() {
  return (0, Y.jsx)(`section`, {
    className: `bg-[#FAFAF8] py-16 md:py-24 border-b border-[#E5E0D8]`,
    children: (0, Y.jsx)(`div`, {
      className: `container-x`,
      children: (0, Y.jsxs)(`div`, {
        className: `grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0`,
        children: [
          (0, Y.jsxs)($, {
            delay: 0,
            className: `flex flex-col items-center md:items-start px-4 md:px-8 border-r border-[#E5E0D8] py-4`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `font-display font-black text-[clamp(3rem,6vw,5rem)] text-brand leading-none`,
                children: (0, Y.jsx)(tu, { to: 30, duration: 1.5, suffix: `+` }),
              }),
              (0, Y.jsx)(`div`, {
                className: `mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left`,
                children: `Años de experiencia`,
              }),
              (0, Y.jsx)(X.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0, margin: `-10%` },
                transition: { duration: 0.6, delay: 0 },
                style: { originX: 0 },
                className: `h-[2px] w-[40px] bg-brand mt-5`,
              }),
            ],
          }),
          (0, Y.jsxs)($, {
            delay: 0.15,
            className: `flex flex-col items-center md:items-start px-4 md:px-8 md:border-r border-[#E5E0D8] py-4`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `font-display font-black text-[clamp(3rem,6vw,5rem)] text-brand leading-none`,
                children: (0, Y.jsx)(tu, { to: 1e4, duration: 2, suffix: `+` }),
              }),
              (0, Y.jsx)(`div`, {
                className: `mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left`,
                children: `Cocinas montadas`,
              }),
              (0, Y.jsx)(X.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0, margin: `-10%` },
                transition: { duration: 0.6, delay: 0.15 },
                style: { originX: 0 },
                className: `h-[2px] w-[40px] bg-brand mt-5`,
              }),
            ],
          }),
          (0, Y.jsxs)($, {
            delay: 0.3,
            className: `flex flex-col items-center md:items-start px-4 md:px-8 border-r border-[#E5E0D8] py-4`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `font-display font-black text-[clamp(3rem,6vw,5rem)] text-brand leading-none`,
                children: (0, Y.jsx)(tu, { to: 5, duration: 1, suffix: `/5` }),
              }),
              (0, Y.jsx)(`div`, {
                className: `mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left`,
                children: `Valoración`,
              }),
              (0, Y.jsx)(X.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0, margin: `-10%` },
                transition: { duration: 0.6, delay: 0.3 },
                style: { originX: 0 },
                className: `h-[2px] w-[40px] bg-brand mt-5`,
              }),
            ],
          }),
          (0, Y.jsxs)($, {
            delay: 0.45,
            className: `flex flex-col items-center md:items-start px-4 md:px-8 py-4`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `font-display font-black text-[clamp(3rem,6vw,5rem)] text-brand leading-none`,
                children: (0, Y.jsx)(tu, { to: 100, duration: 1.5, suffix: `%` }),
              }),
              (0, Y.jsx)(`div`, {
                className: `mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left`,
                children: `Garantía`,
              }),
              (0, Y.jsx)(X.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0, margin: `-10%` },
                transition: { duration: 0.6, delay: 0.45 },
                style: { originX: 0 },
                className: `h-[2px] w-[40px] bg-brand mt-5`,
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var ku = [
    { n: `01`, t: `CONTACTO`, d: `Valoración inicial del proyecto.`, icon: vu },
    { n: `02`, t: `REVISIÓN`, d: `Auditoría de planos y materiales.`, icon: gu },
    { n: `03`, t: `PLANIFICACIÓN`, d: `Coordinación milimétrica.`, icon: yu },
    { n: `04`, t: `MONTAJE`, d: `Ejecución precisa y limpia.`, icon: _u },
    { n: `05`, t: `ENTREGA`, d: `Repaso final exhaustivo.`, icon: hu },
  ],
  Au = () =>
    (0, Y.jsx)(`div`, {
      className: `w-full max-w-4xl mx-auto mt-12 md:mt-24 mb-16 lg:mb-24 relative px-4 lg:px-0`,
      children: (0, Y.jsxs)(`svg`, {
        viewBox: `100 0 640 400`,
        className: `w-full h-auto drop-shadow-xl overflow-visible`,
        children: [
          (0, Y.jsx)(X.rect, {
            x: `70`,
            y: `360`,
            width: `700`,
            height: `12`,
            fill: `#E5E7EB`,
            rx: `6`,
            initial: { opacity: 0, scaleX: 0 },
            whileInView: { opacity: 1, scaleX: 1 },
            viewport: { once: !0, margin: `-10%` },
            transition: { duration: 0.8, ease: `easeOut` },
            style: { originX: `420px` },
          }),
          (0, Y.jsx)(X.rect, {
            x: `130`,
            y: `60`,
            width: `580`,
            height: `300`,
            fill: `#FBBF24`,
            rx: `8`,
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 1, delay: 0.3 },
          }),
          (0, Y.jsx)(X.g, {
            initial: { opacity: 0 },
            whileInView: { opacity: 0.1 },
            viewport: { once: !0 },
            transition: { duration: 1, delay: 0.8 },
            children: (0, Y.jsx)(`path`, {
              d: `M 130 200 H 550 M 130 220 H 550 M 130 180 H 550 M 130 160 H 550`,
              stroke: `#FFF`,
              strokeWidth: `2`,
              strokeDasharray: `20 20`,
            }),
          }),
          (0, Y.jsx)(X.rect, {
            x: `150`,
            y: `350`,
            width: `410`,
            height: `10`,
            fill: `#1F2937`,
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.5 },
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0, y: -50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { type: `spring`, delay: 0.5, bounce: 0.4 },
            children: [
              (0, Y.jsx)(`rect`, {
                x: `150`,
                y: `240`,
                width: `130`,
                height: `120`,
                fill: `#FFFFFF`,
              }),
              (0, Y.jsx)(`line`, {
                x1: `215`,
                y1: `240`,
                x2: `215`,
                y2: `360`,
                stroke: `#E5E7EB`,
                strokeWidth: `2`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `170`,
                y: `242`,
                width: `20`,
                height: `3`,
                fill: `#374151`,
                rx: `1`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `240`,
                y: `242`,
                width: `20`,
                height: `3`,
                fill: `#374151`,
                rx: `1`,
              }),
            ],
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0, y: -50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { type: `spring`, delay: 0.6, bounce: 0.4 },
            children: [
              (0, Y.jsx)(`rect`, {
                x: `430`,
                y: `240`,
                width: `130`,
                height: `120`,
                fill: `#FFFFFF`,
              }),
              (0, Y.jsx)(`line`, {
                x1: `495`,
                y1: `240`,
                x2: `495`,
                y2: `360`,
                stroke: `#E5E7EB`,
                strokeWidth: `2`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `450`,
                y: `242`,
                width: `20`,
                height: `3`,
                fill: `#374151`,
                rx: `1`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `520`,
                y: `242`,
                width: `20`,
                height: `3`,
                fill: `#374151`,
                rx: `1`,
              }),
            ],
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0, y: -50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { type: `spring`, delay: 0.7, bounce: 0.4 },
            children: [
              (0, Y.jsx)(`rect`, {
                x: `280`,
                y: `240`,
                width: `150`,
                height: `120`,
                fill: `#FFFFFF`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `295`,
                y: `270`,
                width: `120`,
                height: `70`,
                fill: `#020617`,
                rx: `8`,
              }),
              (0, Y.jsx)(`path`, {
                d: `M 295 300 L 330 270 H 350 L 305 310 Z`,
                fill: `#FFF`,
                opacity: `0.1`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `295`,
                y: `250`,
                width: `120`,
                height: `15`,
                fill: `#374151`,
                rx: `4`,
              }),
              (0, Y.jsx)(`circle`, { cx: `310`, cy: `257.5`, r: `3`, fill: `#F8FAFC` }),
              (0, Y.jsx)(`circle`, { cx: `325`, cy: `257.5`, r: `3`, fill: `#F8FAFC` }),
              (0, Y.jsx)(`circle`, { cx: `400`, cy: `257.5`, r: `3`, fill: `#F8FAFC` }),
            ],
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0, scaleX: 0 },
            whileInView: { opacity: 1, scaleX: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.5, delay: 1, ease: `easeOut` },
            style: { originX: `350px` },
            children: [
              (0, Y.jsx)(`rect`, {
                x: `140`,
                y: `230`,
                width: `420`,
                height: `10`,
                fill: `#D4A373`,
                rx: `2`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `140`,
                y: `240`,
                width: `420`,
                height: `3`,
                fill: `#C08D5D`,
              }),
            ],
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0, y: -20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { type: `spring`, delay: 1.2, bounce: 0.5 },
            children: [
              (0, Y.jsx)(`rect`, { x: `460`, y: `230`, width: `70`, height: `8`, fill: `#94A3B8` }),
              (0, Y.jsx)(`path`, {
                d: `M 495 230 V 205 Q 495 190 475 195 V 210`,
                stroke: `#CBD5E1`,
                fill: `none`,
                strokeWidth: `6`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `505`,
                y: `222`,
                width: `8`,
                height: `8`,
                fill: `#CBD5E1`,
                rx: `2`,
              }),
            ],
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0, y: -100 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { type: `spring`, delay: 1.4, bounce: 0.3 },
            children: [
              (0, Y.jsx)(`rect`, {
                x: `570`,
                y: `80`,
                width: `120`,
                height: `280`,
                fill: `#E5E7EB`,
                rx: `6`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `570`,
                y: `80`,
                width: `12`,
                height: `280`,
                fill: `#000`,
                opacity: `0.05`,
                rx: `6`,
              }),
              (0, Y.jsx)(`line`, {
                x1: `570`,
                y1: `230`,
                x2: `690`,
                y2: `230`,
                stroke: `#D1D5DB`,
                strokeWidth: `4`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `585`,
                y: `150`,
                width: `4`,
                height: `60`,
                fill: `#9CA3AF`,
                rx: `2`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `585`,
                y: `245`,
                width: `4`,
                height: `40`,
                fill: `#9CA3AF`,
                rx: `2`,
              }),
            ],
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0, y: -50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { type: `spring`, delay: 1.6, bounce: 0.4 },
            children: [
              (0, Y.jsx)(`rect`, { x: `340`, y: `60`, width: `30`, height: `80`, fill: `#D1D5DB` }),
              (0, Y.jsx)(`rect`, {
                x: `320`,
                y: `140`,
                width: `70`,
                height: `10`,
                fill: `#9CA3AF`,
                rx: `2`,
              }),
              (0, Y.jsx)(`path`, {
                d: `M 330 140 L 340 100 H 370 L 380 140 Z`,
                fill: `#FFF`,
                opacity: `0.2`,
              }),
            ],
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: !0 },
            transition: { type: `spring`, delay: 1.8, bounce: 0.3 },
            children: [
              (0, Y.jsx)(`rect`, {
                x: `150`,
                y: `80`,
                width: `130`,
                height: `90`,
                fill: `#FFFFFF`,
                stroke: `#E5E7EB`,
                strokeWidth: `4`,
              }),
              (0, Y.jsx)(`line`, {
                x1: `215`,
                y1: `80`,
                x2: `215`,
                y2: `170`,
                stroke: `#E5E7EB`,
                strokeWidth: `4`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `170`,
                y: `165`,
                width: `20`,
                height: `3`,
                fill: `#374151`,
                rx: `1`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `240`,
                y: `165`,
                width: `20`,
                height: `3`,
                fill: `#374151`,
                rx: `1`,
              }),
            ],
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0, x: 50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: !0 },
            transition: { type: `spring`, delay: 1.9, bounce: 0.3 },
            children: [
              (0, Y.jsx)(`rect`, {
                x: `430`,
                y: `80`,
                width: `130`,
                height: `90`,
                fill: `#FFFFFF`,
                stroke: `#E5E7EB`,
                strokeWidth: `4`,
              }),
              (0, Y.jsx)(`line`, {
                x1: `495`,
                y1: `80`,
                x2: `495`,
                y2: `170`,
                stroke: `#E5E7EB`,
                strokeWidth: `4`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `450`,
                y: `165`,
                width: `20`,
                height: `3`,
                fill: `#374151`,
                rx: `1`,
              }),
              (0, Y.jsx)(`rect`, {
                x: `520`,
                y: `165`,
                width: `20`,
                height: `3`,
                fill: `#374151`,
                rx: `1`,
              }),
            ],
          }),
          (0, Y.jsxs)(X.g, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 2.1 },
            children: [
              (0, Y.jsx)(X.rect, {
                x: `370`,
                y: `80`,
                width: `50`,
                height: `90`,
                fill: `#3E2723`,
                rx: `2`,
                initial: { opacity: 0, y: -30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { type: `spring`, delay: 2.1 },
              }),
              (0, Y.jsx)(X.path, {
                d: `M 370 102 H 420 M 370 124 H 420 M 370 146 H 420`,
                stroke: `#5D4037`,
                strokeWidth: `2`,
                initial: { pathLength: 0 },
                whileInView: { pathLength: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.4, delay: 2.4 },
              }),
              (0, Y.jsx)(X.path, {
                d: `M 386 80 V 170 M 403 80 V 170`,
                stroke: `#5D4037`,
                strokeWidth: `2`,
                initial: { pathLength: 0 },
                whileInView: { pathLength: 1 },
                viewport: { once: !0 },
                transition: { duration: 0.4, delay: 2.7 },
              }),
              (0, Y.jsxs)(X.g, {
                initial: { opacity: 0, scale: 0 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: !0 },
                transition: { type: `spring`, delay: 3, bounce: 0.6 },
                style: { originX: `378px`, originY: `100px` },
                children: [
                  (0, Y.jsx)(`rect`, {
                    x: `375`,
                    y: `85`,
                    width: `6`,
                    height: `15`,
                    fill: `#1B5E20`,
                    rx: `2`,
                  }),
                  (0, Y.jsx)(`rect`, {
                    x: `376`,
                    y: `83`,
                    width: `4`,
                    height: `4`,
                    fill: `#1B5E20`,
                  }),
                  (0, Y.jsx)(`rect`, {
                    x: `376.5`,
                    y: `82`,
                    width: `3`,
                    height: `2`,
                    fill: `#D4AF37`,
                  }),
                ],
              }),
              (0, Y.jsxs)(X.g, {
                initial: { opacity: 0, scale: 0 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: !0 },
                transition: { type: `spring`, delay: 3.2, bounce: 0.6 },
                style: { originX: `411px`, originY: `122px` },
                children: [
                  (0, Y.jsx)(`rect`, {
                    x: `408`,
                    y: `107`,
                    width: `6`,
                    height: `15`,
                    fill: `#4A148C`,
                    rx: `2`,
                  }),
                  (0, Y.jsx)(`rect`, {
                    x: `409`,
                    y: `105`,
                    width: `4`,
                    height: `4`,
                    fill: `#4A148C`,
                  }),
                  (0, Y.jsx)(`rect`, {
                    x: `409.5`,
                    y: `104`,
                    width: `3`,
                    height: `2`,
                    fill: `#D4AF37`,
                  }),
                ],
              }),
              (0, Y.jsxs)(X.g, {
                initial: { opacity: 0, scale: 0 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: !0 },
                transition: { type: `spring`, delay: 3.4, bounce: 0.6 },
                style: { originX: `394px`, originY: `166px` },
                children: [
                  (0, Y.jsx)(`rect`, {
                    x: `391`,
                    y: `151`,
                    width: `6`,
                    height: `15`,
                    fill: `#B71C1C`,
                    rx: `2`,
                  }),
                  (0, Y.jsx)(`rect`, {
                    x: `392`,
                    y: `149`,
                    width: `4`,
                    height: `4`,
                    fill: `#B71C1C`,
                  }),
                  (0, Y.jsx)(`rect`, {
                    x: `392.5`,
                    y: `148`,
                    width: `3`,
                    height: `2`,
                    fill: `#D4AF37`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  ju = ({ Icon: e, index: t }) =>
    (0, Y.jsx)(`div`, {
      className: `flex items-center text-brand ml-3 opacity-90`,
      children: (0, Y.jsx)(X.div, {
        animate: { rotate: [-10, 15, -10], scale: [1, 1.1, 1], y: [0, -2, 0] },
        transition: { repeat: 1 / 0, duration: 1.5, delay: t * 0.2, ease: `easeInOut` },
        children: (0, Y.jsx)(e, { size: 20, strokeWidth: 2.5 }),
      }),
    });
function Mu() {
  return (0, Y.jsx)(`section`, {
    id: `proceso`,
    className: `bg-[#FAFAF8] py-[120px] overflow-hidden`,
    children: (0, Y.jsxs)(`div`, {
      className: `mx-auto w-[90%] max-w-[1600px]`,
      children: [
        (0, Y.jsxs)(X.div, {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: `-10%` },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          children: [
            (0, Y.jsxs)(`div`, {
              className: `flex items-center gap-4 mb-6`,
              children: [
                (0, Y.jsx)(`div`, { className: `h-[1px] w-12 bg-brand` }),
                (0, Y.jsx)(`span`, {
                  className: `text-[12px] font-semibold tracking-[0.3em] uppercase text-brand`,
                  children: `Metodología`,
                }),
              ],
            }),
            (0, Y.jsx)(`h2`, {
              className: `font-display font-black text-[clamp(64px,6vw,96px)] leading-[0.95] text-ink max-w-[900px] text-balance`,
              children: `Precisión en cada fase.`,
            }),
          ],
        }),
        (0, Y.jsx)(Au, {}),
        (0, Y.jsxs)(`div`, {
          className: `mt-[40px] relative`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `absolute top-[10px] left-0 w-full h-[2px] bg-[#DADADA] hidden lg:block`,
            }),
            (0, Y.jsx)(`div`, {
              className: `grid lg:grid-cols-5 gap-8 lg:gap-6`,
              children: ku.map((e, t) =>
                (0, Y.jsxs)(
                  X.div,
                  {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0, margin: `-10%` },
                    transition: { duration: 0.7, delay: t * 0.1, ease: [0.22, 1, 0.36, 1] },
                    className: `relative pt-0 lg:pt-0`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `hidden lg:flex absolute top-[11px] left-6 -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-white border-[4px] border-brand z-10`,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `absolute left-[24px] top-[40px] bottom-[-32px] w-[2px] bg-[#DADADA] lg:hidden`,
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `bg-white p-[24px] rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 ease-out mt-8 lg:mt-12 relative z-10 ml-12 lg:ml-0 flex flex-col justify-between h-[calc(100%-2rem)] lg:h-auto`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `lg:hidden absolute left-[-48px] top-[24px] w-[20px] h-[20px] rounded-full bg-brand border-[4px] border-white shadow-[0_0_0_1px_rgba(218,218,218,1)] z-10`,
                          }),
                          (0, Y.jsxs)(`div`, {
                            children: [
                              (0, Y.jsxs)(`div`, {
                                className: `flex items-center mb-2`,
                                children: [
                                  (0, Y.jsxs)(`span`, {
                                    className: `font-display text-sm font-black text-brand`,
                                    children: [e.n, ` `, e.t],
                                  }),
                                  (0, Y.jsx)(ju, { Icon: e.icon, index: t }),
                                ],
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `text-lg font-medium text-ink-soft leading-snug`,
                                children: e.d,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.n,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function Nu() {
  return (0, Y.jsx)(`section`, {
    id: `opiniones`,
    className: `bg-background py-32 md:py-48 overflow-hidden`,
    children: (0, Y.jsx)(`div`, {
      className: `container-x`,
      children: (0, Y.jsxs)(`div`, {
        className: `max-w-6xl mx-auto flex flex-col items-center text-center`,
        children: [
          (0, Y.jsxs)(Q, {
            className: `flex flex-col items-center`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 shadow-premium`,
                children: (0, Y.jsx)(`img`, {
                  src: Cu,
                  alt: `Cliente Cubikos`,
                  className: `w-full h-full object-cover`,
                }),
              }),
              (0, Y.jsx)(`div`, {
                className: `flex gap-2 text-ink mb-12`,
                children: Array.from({ length: 5 }).map((e, t) =>
                  (0, Y.jsx)(Z.Star, { className: `h-6 w-6 md:h-8 md:w-8` }, t),
                ),
              }),
            ],
          }),
          (0, Y.jsxs)(Q, {
            delay: 0.2,
            className: `relative`,
            children: [
              (0, Y.jsx)(`span`, {
                className: `absolute -top-12 -left-8 text-8xl md:text-[12rem] font-display font-black text-line opacity-30 leading-none`,
                children: `"`,
              }),
              (0, Y.jsxs)(`blockquote`, {
                className: `font-display text-4xl md:text-5xl lg:text-7xl font-bold text-ink leading-tight tracking-tighter text-balance`,
                children: [
                  `Impecable.`,
                  (0, Y.jsx)(`br`, {}),
                  `Cumplieron fechas,`,
                  (0, Y.jsx)(`br`, {}),
                  `fueron extremadamente limpios`,
                  (0, Y.jsx)(`br`, {}),
                  `y los acabados son perfectos.`,
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(Q, {
            delay: 0.4,
            className: `mt-16`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `font-display font-black text-2xl tracking-widest uppercase text-ink`,
                children: `Marta Sala`,
              }),
              (0, Y.jsx)(`div`, {
                className: `mt-2 text-lg font-bold text-ink-soft`,
                children: `Barcelona`,
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Pu() {
  return (0, Y.jsx)(`section`, {
    className: `relative bg-[#0D0D0D] text-[#FAFAF8] py-24 md:py-40 overflow-hidden z-20`,
    children: (0, Y.jsx)(`div`, {
      className: `container-x`,
      children: (0, Y.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `flex flex-col justify-center`,
            children: (0, Y.jsxs)($, {
              delay: 0,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `text-brand font-bold uppercase tracking-widest text-sm mb-4`,
                  children: `La firma de un artesano`,
                }),
                (0, Y.jsx)(`h2`, {
                  className: `font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8`,
                  children: `El Arte del Ensamblaje`,
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed mb-6 font-light`,
                  children: `Un botellero a medida no admite márgenes de error. Cada balda y cada separador debe encajar con tolerancias milimétricas para garantizar la estabilidad y una estética perfecta.`,
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed font-light`,
                  children: `Es en estos pequeños detalles donde la verdadera calidad de un montaje sale a relucir. No instalamos cocinas; construimos mobiliario de precisión.`,
                }),
              ],
            }),
          }),
          (0, Y.jsxs)(`div`, {
            className: `relative aspect-[4/5] md:aspect-square lg:aspect-square w-full rounded-2xl flex items-center justify-center overflow-visible`,
            children: [
              (0, Y.jsx)(X.div, {
                initial: { opacity: 0, y: 60 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: `-10%` },
                transition: { duration: 1, ease: wu },
                className: `absolute left-0 bottom-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10 border-[6px] border-[#0D0D0D]`,
                children: (0, Y.jsx)(`img`, {
                  src: bu,
                  alt: `Montaje de estantería iluminada`,
                  className: `w-full h-full object-cover`,
                }),
              }),
              (0, Y.jsx)(X.div, {
                initial: { opacity: 0, x: 40, y: -40 },
                whileInView: { opacity: 1, x: 0, y: 0 },
                viewport: { once: !0, margin: `-10%` },
                transition: { duration: 1, delay: 0.2, ease: wu },
                className: `absolute right-0 top-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-xl z-20 border-[6px] border-[#0D0D0D]`,
                children: (0, Y.jsx)(`img`, {
                  src: xu,
                  alt: `Isla de cocina premium`,
                  className: `w-full h-full object-cover`,
                }),
              }),
              (0, Y.jsx)(X.div, {
                initial: { opacity: 0, x: 40, y: 40 },
                whileInView: { opacity: 1, x: 0, y: 0 },
                viewport: { once: !0, margin: `-10%` },
                transition: { duration: 1, delay: 0.4, ease: wu },
                className: `absolute right-12 bottom-8 w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-30 border-[6px] border-[#0D0D0D]`,
                children: (0, Y.jsx)(`img`, {
                  src: Su,
                  alt: `Detalle de montaje en columna`,
                  className: `w-full h-full object-cover object-left-top`,
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var Fu = [
  {
    src: Ql,
    title: `Alineación perfecta de frentes`,
    subtitle: `Planimetría e integración de electrodomésticos`,
    span: `lg:col-span-2 lg:row-span-2`,
    aspect: `aspect-[4/3] lg:aspect-auto`,
  },
  {
    src: `/assets/gallery-2-BQiW42pO.webp`,
    title: `Tolerancia < 1mm`,
    subtitle: `Unión de encimeras`,
    span: `lg:col-span-1 lg:row-span-1`,
    aspect: `aspect-square`,
  },
  {
    src: `/assets/gallery-4-BiAkCuIg.webp`,
    title: `Nivelación láser`,
    subtitle: `Ajuste de módulos base`,
    span: `lg:col-span-1 lg:row-span-1`,
    aspect: `aspect-square`,
  },
  {
    src: Cu,
    title: `Mecanizados exactos`,
    subtitle: `Encastres al milímetro`,
    span: `lg:col-span-1 lg:row-span-1`,
    aspect: `aspect-square`,
  },
  {
    src: `/assets/gallery-6-DlOklZ2x.webp`,
    title: `Remates invisibles`,
    subtitle: `Sellado y terminaciones perimetrales`,
    span: `lg:col-span-2 lg:row-span-1`,
    aspect: `aspect-[21/9] lg:aspect-auto`,
  },
];
function Iu() {
  return (0, Y.jsxs)(`section`, {
    id: `proyectos`,
    className: `bg-[#111111] text-[#FAFAF8] py-16 md:py-48`,
    children: [
      (0, Y.jsx)(`div`, {
        className: `container-x mb-12 md:mb-24`,
        children: (0, Y.jsxs)(Q, {
          children: [
            (0, Y.jsx)(`h2`, {
              className: `font-display font-black text-[clamp(48px,8vw,80px)] leading-[0.95] tracking-tighter text-[#FAFAF8] text-balance`,
              children: `Casos de estudio.`,
            }),
            (0, Y.jsx)(`p`, {
              className: `mt-6 md:mt-8 text-lg md:text-2xl text-[#EDEBE8] font-medium leading-relaxed text-balance max-w-2xl`,
              children: `La excelencia no se demuestra en un plano general, sino en la perfección de cada detalle, unión y remate.`,
            }),
          ],
        }),
      }),
      (0, Y.jsx)(`div`, {
        className: `container-x`,
        children: (0, Y.jsx)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:auto-rows-[350px]`,
          children: Fu.map((e, t) =>
            (0, Y.jsxs)(
              Q,
              {
                delay: t * 0.1,
                className: `group relative overflow-hidden bg-[#1a1a1a] ${e.span} ${e.aspect || ``}`,
                children: [
                  (0, Y.jsx)(`img`, {
                    src: e.src,
                    alt: e.title,
                    loading: `lazy`,
                    className: `absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `absolute inset-0 flex flex-col justify-end p-8 md:p-10 pointer-events-none`,
                    children: (0, Y.jsxs)(`div`, {
                      className: `border-l-2 border-brand pl-6 transform transition-transform duration-500 ease-out group-hover:translate-x-2`,
                      children: [
                        (0, Y.jsx)(`h3`, {
                          className: `font-display text-2xl md:text-3xl font-black text-white`,
                          children: e.title,
                        }),
                        (0, Y.jsx)(`p`, {
                          className: `mt-2 text-lg font-medium text-[#D1CFCC]`,
                          children: e.subtitle,
                        }),
                      ],
                    }),
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      }),
    ],
  });
}
var Lu = [
  {
    q: `¿Trabajáis en toda Cataluña?`,
    a: `Sí. Cubrimos las cuatro provincias y nos desplazamos a cualquier población de Cataluña con nuestro propio equipo.`,
  },
  {
    q: `¿Montáis cualquier tipo de cocina?`,
    a: `Instalamos firmas italianas de lujo, mobiliario de estudios de interiorismo, proyectos a medida y firmas comerciales de gama alta.`,
  },
  {
    q: `¿Gestionáis los imprevistos de obra?`,
    a: `Nuestra fase de revisión previa y auditoría de planos minimiza imprevistos. Si surgen desviaciones en obra, tenemos la capacidad técnica para resolverlas in situ.`,
  },
  {
    q: `¿Cuánto tarda un montaje premium?`,
    a: `Depende de la planimetría y el volumen, pero la excelencia requiere tiempo. Un montaje estándar de alta gama dura entre 3 y 5 días. La revisión final es innegociable.`,
  },
];
function Ru() {
  let [e, t] = (0, J.useState)(0);
  return (0, Y.jsx)(`section`, {
    className: `bg-surface py-32 md:py-48`,
    children: (0, Y.jsxs)(`div`, {
      className: `container-x grid md:grid-cols-12 gap-16`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `md:col-span-4`,
          children: (0, Y.jsxs)(Q, {
            children: [
              (0, Y.jsx)(`span`, { className: `eyebrow`, children: `FAQ` }),
              (0, Y.jsx)(`h2`, { className: `headline-lg mt-4`, children: `Claridad absoluta.` }),
            ],
          }),
        }),
        (0, Y.jsx)(`div`, {
          className: `md:col-span-8`,
          children: (0, Y.jsx)(`ul`, {
            className: `border-t border-ink`,
            children: Lu.map((n, r) => {
              let i = e === r;
              return (0, Y.jsxs)(
                `li`,
                {
                  className: `border-b border-line`,
                  children: [
                    (0, Y.jsxs)(`button`, {
                      onClick: () => t(i ? null : r),
                      className: `flex w-full items-center justify-between gap-6 py-8 text-left hover:text-brand transition-colors duration-300 group`,
                      children: [
                        (0, Y.jsx)(`span`, {
                          className: `font-display text-2xl md:text-3xl font-black text-ink group-hover:text-brand transition-colors`,
                          children: n.q,
                        }),
                        (0, Y.jsx)(`span`, {
                          className: `flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${i ? `rotate-45` : ``}`,
                          children: (0, Y.jsx)(Z.Plus, {
                            className: `h-8 w-8 text-ink group-hover:text-brand`,
                          }),
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]`,
                      style: { maxHeight: i ? 400 : 0, opacity: +!!i },
                      children: (0, Y.jsx)(`p`, {
                        className: `pb-12 pr-12 text-xl font-medium text-ink-soft leading-relaxed max-w-3xl`,
                        children: n.a,
                      }),
                    }),
                  ],
                },
                n.q,
              );
            }),
          }),
        }),
      ],
    }),
  });
}
function zu() {
  let [e, t] = (0, J.useState)(!1);
  return (0, Y.jsxs)(`section`, {
    id: `contacto`,
    className: `relative min-h-[100svh] bg-ink flex items-center py-24 overflow-hidden`,
    children: [
      (0, Y.jsx)(`div`, {
        className: `absolute inset-0 z-0 bg-fixed bg-center bg-cover`,
        style: { backgroundImage: `url(${o})` },
      }),
      (0, Y.jsx)(`div`, { className: `absolute inset-0 z-0 bg-black/75` }),
      (0, Y.jsx)(`div`, {
        className: `container-x relative z-10 w-full`,
        children: (0, Y.jsxs)(`div`, {
          className: `grid lg:grid-cols-12 gap-16 lg:gap-8 items-center`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `lg:col-span-7 flex flex-col justify-center`,
              children: [
                (0, Y.jsxs)(X.div, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: `-10%` },
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: `flex items-center gap-4 mb-8`,
                      children: [
                        (0, Y.jsx)(`div`, { className: `h-[2px] w-12 bg-brand` }),
                        (0, Y.jsx)(`span`, {
                          className: `font-display font-black text-sm uppercase tracking-widest text-brand`,
                          children: `Valoración Técnica`,
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`h2`, {
                      className: `font-display font-black text-[clamp(4rem,7vw,7rem)] leading-[0.95] text-white tracking-tighter text-balance max-w-2xl`,
                      children: `INICIEMOS TU PROYECTO`,
                    }),
                    (0, Y.jsx)(`p`, {
                      className: `mt-8 text-xl md:text-2xl font-medium text-[#EDEBE8] max-w-[550px] leading-relaxed`,
                      children: `Solicita una valoración técnica sin compromiso y descubre cómo podemos materializar tu proyecto.`,
                    }),
                  ],
                }),
                (0, Y.jsxs)(X.div, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: `-10%` },
                  transition: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
                  className: `mt-16 flex flex-col sm:flex-row gap-8 lg:gap-12`,
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: `flex items-start gap-4`,
                      children: [
                        (0, Y.jsx)(Z.Check, { className: `w-6 h-6 text-brand shrink-0` }),
                        (0, Y.jsxs)(`div`, {
                          children: [
                            (0, Y.jsx)(`div`, {
                              className: `font-bold text-white text-lg`,
                              children: `Sin compromiso`,
                            }),
                            (0, Y.jsx)(`div`, {
                              className: `text-sm text-white/70 mt-1`,
                              children: `Respuesta en 24-48h`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: `flex items-start gap-4`,
                      children: [
                        (0, Y.jsx)(Z.Check, { className: `w-6 h-6 text-brand shrink-0` }),
                        (0, Y.jsxs)(`div`, {
                          children: [
                            (0, Y.jsx)(`div`, {
                              className: `font-bold text-white text-lg`,
                              children: `Confidencial`,
                            }),
                            (0, Y.jsx)(`div`, {
                              className: `text-sm text-white/70 mt-1`,
                              children: `Tus datos protegidos`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: `flex items-start gap-4`,
                      children: [
                        (0, Y.jsx)(Z.Check, { className: `w-6 h-6 text-brand shrink-0` }),
                        (0, Y.jsxs)(`div`, {
                          children: [
                            (0, Y.jsx)(`div`, {
                              className: `font-bold text-white text-lg`,
                              children: `Experiencia`,
                            }),
                            (0, Y.jsx)(`div`, {
                              className: `text-sm text-white/70 mt-1`,
                              children: `Más de 10 años`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: `lg:col-span-5 lg:col-start-8`,
              children: (0, Y.jsx)(X.div, {
                initial: { opacity: 0, x: -40, scale: 0.95 },
                whileInView: { opacity: 1, x: 0, scale: 1 },
                viewport: { once: !0, margin: `-10%` },
                transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                children: e
                  ? (0, Y.jsxs)(`div`, {
                      className: `bg-[rgba(20,20,20,0.92)] backdrop-blur-[20px] border border-white/15 rounded-[24px] p-12 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,0.4)]`,
                      children: [
                        (0, Y.jsx)(Z.Check, { className: `h-16 w-16 text-brand mx-auto mb-8` }),
                        (0, Y.jsx)(`h3`, {
                          className: `font-display text-3xl font-black uppercase tracking-widest`,
                          children: `Recibido`,
                        }),
                        (0, Y.jsx)(`p`, {
                          className: `mt-6 text-lg font-medium text-[#EDEBE8]`,
                          children: `Nuestro equipo técnico revisará tu solicitud y te contactará en breve.`,
                        }),
                      ],
                    })
                  : (0, Y.jsx)(`form`, {
                      onSubmit: (e) => {
                        (e.preventDefault(), t(!0));
                      },
                      className: `bg-[rgba(20,20,20,0.92)] backdrop-blur-[20px] border border-white/15 rounded-[24px] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.4)]`,
                      children: (0, Y.jsxs)(`div`, {
                        className: `space-y-10`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `group relative`,
                            children: [
                              (0, Y.jsx)(`label`, {
                                className: `text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2`,
                                children: `Nombre`,
                              }),
                              (0, Y.jsx)(`input`, {
                                required: !0,
                                type: `text`,
                                className: `w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px]`,
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `group relative`,
                            children: [
                              (0, Y.jsx)(`label`, {
                                className: `text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2`,
                                children: `Teléfono / Email`,
                              }),
                              (0, Y.jsx)(`input`, {
                                required: !0,
                                type: `text`,
                                className: `w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px]`,
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `group relative`,
                            children: [
                              (0, Y.jsx)(`label`, {
                                className: `text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2`,
                                children: `Detalles de la Obra (Opcional)`,
                              }),
                              (0, Y.jsx)(`textarea`, {
                                rows: 2,
                                className: `w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px] resize-none`,
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`button`, {
                            type: `submit`,
                            className: `group relative overflow-hidden flex items-center justify-center w-full h-16 bg-gradient-to-r from-[#FFDE00] to-[#F39C12] text-white font-black text-[15px] md:text-[16px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(243,156,18,0.4)] hover:shadow-[0_20px_60px_rgba(243,156,18,0.7)] hover:-translate-y-1`,
                            children: [
                              (0, Y.jsx)(`div`, {
                                className: `absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.2s] ease-in-out`,
                              }),
                              (0, Y.jsx)(`span`, {
                                className: `relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`,
                                children: `Solicitar Valoración`,
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `flex items-center justify-center gap-2 text-xs text-[#D1CFCC] opacity-80 pt-2`,
                            children: [
                              (0, Y.jsxs)(`svg`, {
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                className: `w-4 h-4`,
                                children: [
                                  (0, Y.jsx)(`rect`, {
                                    x: `3`,
                                    y: `11`,
                                    width: `18`,
                                    height: `11`,
                                    rx: `2`,
                                    ry: `2`,
                                  }),
                                  (0, Y.jsx)(`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4` }),
                                ],
                              }),
                              `Tu información está protegida y nunca será compartida.`,
                            ],
                          }),
                        ],
                      }),
                    }),
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Bu() {
  return (0, Y.jsx)(`footer`, {
    className: `bg-[#0a0a0a] text-[#FAFAF8] pt-24 pb-12 border-t border-white/10`,
    children: (0, Y.jsxs)(`div`, {
      className: `container-x`,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `md:col-span-5 lg:col-span-4`,
              children: [
                (0, Y.jsx)($l, { className: `text-[24px] text-brand mb-8` }),
                (0, Y.jsx)(`p`, {
                  className: `text-lg text-[#D1CFCC] max-w-sm font-medium leading-relaxed`,
                  children: `Especialistas en montaje de mobiliario de cocina. Desde proyectos a medida hasta grandes firmas comerciales. Precisión técnica en toda Cataluña.`,
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `md:col-span-3 lg:col-start-7 lg:col-span-2`,
              children: [
                (0, Y.jsx)(`h4`, {
                  className: `font-display font-black tracking-widest uppercase text-xs mb-8 text-[#777]`,
                  children: `Explorar`,
                }),
                (0, Y.jsxs)(`ul`, {
                  className: `space-y-4 text-[#EDEBE8] font-bold text-sm tracking-widest uppercase`,
                  children: [
                    (0, Y.jsx)(`li`, {
                      children: (0, Y.jsx)(`a`, {
                        href: `#metodo`,
                        className: `hover:text-brand transition-colors`,
                        children: `Método`,
                      }),
                    }),
                    (0, Y.jsx)(`li`, {
                      children: (0, Y.jsx)(`a`, {
                        href: `#experiencia`,
                        className: `hover:text-brand transition-colors`,
                        children: `Experiencia`,
                      }),
                    }),
                    (0, Y.jsx)(`li`, {
                      children: (0, Y.jsx)(`a`, {
                        href: `#proyectos`,
                        className: `hover:text-brand transition-colors`,
                        children: `Proyectos`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `md:col-span-4 lg:col-span-3`,
              children: [
                (0, Y.jsx)(`h4`, {
                  className: `font-display font-black tracking-widest uppercase text-xs mb-8 text-[#777]`,
                  children: `Contacto`,
                }),
                (0, Y.jsxs)(`ul`, {
                  className: `space-y-4 text-[#EDEBE8] font-medium text-lg`,
                  children: [
                    (0, Y.jsx)(`li`, {
                      children: (0, Y.jsx)(`a`, {
                        href: `mailto:cubikos25@gmail.com`,
                        className: `hover:text-brand transition-colors`,
                        children: `cubikos25@gmail.com`,
                      }),
                    }),
                    (0, Y.jsx)(`li`, {
                      children: (0, Y.jsxs)(`a`, {
                        href: `https://wa.me/34666871144`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `hover:text-brand transition-colors`,
                        children: [
                          `+34 666 87 11 44 `,
                          (0, Y.jsx)(`span`, {
                            className: `text-xs text-[#777] ml-2 uppercase tracking-widest`,
                            children: `(WhatsApp)`,
                          }),
                        ],
                      }),
                    }),
                    (0, Y.jsx)(`li`, {
                      className: `text-[#D1CFCC] text-sm font-bold tracking-widest uppercase pt-2`,
                      children: `Cataluña, España`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: `flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-bold uppercase tracking-widest text-[#777]`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `order-2 md:order-1 mt-6 md:mt-0`,
              children: [
                `© `,
                new Date().getFullYear(),
                ` CUBIKOS. Todos los derechos reservados.`,
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `order-1 md:order-2 flex flex-wrap justify-center gap-8`,
              children: [
                (0, Y.jsx)(`a`, {
                  href: `https://www.instagram.com/raphael_gs68?igsh=MzdhdGxwamZwNGY1`,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `hover:text-[#FAFAF8] transition-colors`,
                  children: `Instagram`,
                }),
                (0, Y.jsx)(`a`, {
                  href: `#`,
                  className: `hover:text-[#FAFAF8] transition-colors`,
                  children: `Aviso Legal`,
                }),
                (0, Y.jsx)(`a`, {
                  href: `#`,
                  className: `hover:text-[#FAFAF8] transition-colors`,
                  children: `Privacidad`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Vu() {
  return (0, Y.jsxs)(`div`, {
    className: `font-sans antialiased bg-background text-ink`,
    children: [
      (0, Y.jsx)(nu, {}),
      (0, Y.jsxs)(`main`, {
        children: [
          (0, Y.jsx)(au, {}),
          (0, Y.jsx)(ou, {}),
          (0, Y.jsx)(Du, {}),
          (0, Y.jsx)(Ou, {}),
          (0, Y.jsx)(Mu, {}),
          (0, Y.jsx)(Pu, {}),
          (0, Y.jsx)(Iu, {}),
          (0, Y.jsx)(Nu, {}),
          (0, Y.jsx)(Ru, {}),
          (0, Y.jsx)(zu, {}),
        ],
      }),
      (0, Y.jsx)(Bu, {}),
    ],
  });
}
export { Vu as component };
