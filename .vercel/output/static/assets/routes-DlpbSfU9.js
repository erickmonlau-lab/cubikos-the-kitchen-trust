import {
  C as e,
  S as t,
  T as n,
  _ as r,
  a as i,
  b as a,
  c as o,
  d as s,
  f as c,
  g as l,
  h as u,
  i as d,
  l as f,
  m as p,
  n as m,
  o as h,
  p as g,
  r as _,
  s as v,
  t as ee,
  u as te,
  v as ne,
  w as re,
  x as ie,
  y,
} from "./index-CgeaJJtX.js";
function ae(e) {
  return l(e) ? e.get() : e;
}
var b = n(ie(), 1),
  oe = (0, b.createContext)({}),
  x = (0, b.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` }),
  S = (0, b.createContext)({});
function se(e, t) {
  if (c(e)) {
    let { initial: t, animate: n } = e;
    return { initial: t === !1 || p(t) ? t : void 0, animate: p(n) ? n : void 0 };
  }
  return e.inherit === !1 ? {} : t;
}
function C(e) {
  let { initial: t, animate: n } = se(e, (0, b.useContext)(S));
  return (0, b.useMemo)(() => ({ initial: t, animate: n }), [w(t), w(n)]);
}
function w(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var T = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function E(e, t, n) {
  for (let r in t) !l(t[r]) && !f(r, n) && (e[r] = t[r]);
}
function ce({ transformTemplate: e }, t) {
  return (0, b.useMemo)(() => {
    let n = T();
    return (te(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function le(e, t) {
  let n = e.style || {},
    r = {};
  return (E(r, n, e), Object.assign(r, ce(e, t)), r);
}
function ue(e, t) {
  let n = {},
    r = le(e, t);
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
var D = () => ({ ...T(), attrs: {} });
function de(e, t, n, r) {
  let i = (0, b.useMemo)(() => {
    let n = D();
    return (v(n, t, h(r), e.transformTemplate, e.style), { ...n.attrs, style: { ...n.style } });
  }, [t]);
  if (e.style) {
    let t = {};
    (E(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
var fe = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function O(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    fe.has(e)
  );
}
var pe = e({ default: () => k }),
  k,
  me = t(() => {
    throw (
      (k = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`,
      )
    );
  }),
  A = (e) => !O(e);
function he(e) {
  typeof e == `function` && (A = (t) => (t.startsWith(`on`) ? !O(t) : e(t)));
}
try {
  he((me(), re(pe)).default);
} catch {}
function ge(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      l(e[i]) ||
      ((A(i) || (n === !0 && O(i)) || (!t && !O(i)) || (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
function _e(e, t, n, { latestValues: r }, i, a = !1, o) {
  let s = ((o ?? m(e)) ? de : ue)(t, r, i, e),
    c = ge(t, typeof e == `string`, a),
    u = e === b.Fragment ? {} : { ...c, ...s, ref: n },
    { children: d } = t,
    f = (0, b.useMemo)(() => (l(d) ? d.get() : d), [d]);
  return (0, b.createElement)(e, { ...u, children: f });
}
var j = (0, b.createContext)(null);
function ve(e) {
  let t = (0, b.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
function ye({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: be(n, r, i, e), renderState: t() };
}
function be(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = ae(a[e]);
  let { initial: o, animate: l } = e,
    d = c(e),
    f = g(e);
  t &&
    f &&
    !d &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let p = n ? n.initial === !1 : !1;
  p = p || o === !1;
  let m = p ? l : o;
  if (m && typeof m != `boolean` && !u(m)) {
    let t = Array.isArray(m) ? m : [m];
    for (let n = 0; n < t.length; n++) {
      let r = s(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = p ? t.length - 1 : 0;
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
var M = (e) => (t, n) => {
    let r = (0, b.useContext)(S),
      i = (0, b.useContext)(j),
      a = () => ye(e, t, r, i);
    return n ? a() : ve(a);
  },
  N = M({ scrapeMotionValuesFromProps: o, createRenderState: T }),
  xe = M({ scrapeMotionValuesFromProps: i, createRenderState: D }),
  Se = Symbol.for(`motionComponentSymbol`);
function Ce(e, t, n) {
  let r = (0, b.useRef)(n);
  (0, b.useInsertionEffect)(() => {
    r.current = n;
  });
  let i = (0, b.useRef)(null);
  return (0, b.useCallback)(
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
var we = (0, b.createContext)({});
function Te(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
var Ee = typeof window < `u` ? b.useLayoutEffect : b.useEffect;
function De(e, t, n, r, i, a) {
  let { visualElement: o } = (0, b.useContext)(S),
    s = (0, b.useContext)(y),
    c = (0, b.useContext)(j),
    l = (0, b.useContext)(x),
    u = l.reducedMotion,
    d = l.skipAnimations,
    f = (0, b.useRef)(null),
    p = (0, b.useRef)(!1);
  ((r = r || s.renderer),
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
    h = (0, b.useContext)(we);
  m && !m.projection && i && (m.type === `html` || m.type === `svg`) && Oe(f.current, n, i, h);
  let g = (0, b.useRef)(!1);
  (0, b.useInsertionEffect)(() => {
    m && g.current && m.update(n, c);
  });
  let _ = n[ne],
    v = (0, b.useRef)(
      !!_ &&
        typeof window < `u` &&
        !window.MotionHandoffIsComplete?.(_) &&
        window.MotionHasOptimisedAnimation?.(_),
    );
  return (
    Ee(() => {
      ((p.current = !0),
        m &&
          ((g.current = !0),
          (window.MotionIsMounted = !0),
          m.updateFeatures(),
          m.scheduleRenderMicrotask(),
          v.current && m.animationState && m.animationState.animateChanges()));
    }),
    (0, b.useEffect)(() => {
      m &&
        (!v.current && m.animationState && m.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(_);
          }),
          (v.current = !1)),
        (m.enteringChildren = void 0));
    }),
    m
  );
}
function Oe(e, t, n, r) {
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
  ((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : P(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && Te(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function P(e) {
  if (e) return e.options.allowProjection === !1 ? P(e.parent) : e.projection;
}
var F = a();
function I(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && _(r);
  let a = n ? n === `svg` : m(e),
    o = a ? xe : N;
  function s(n, s) {
    let c,
      l = { ...(0, b.useContext)(x), ...n, layoutId: ke(n) },
      { isStatic: u } = l,
      d = C(n),
      f = o(n, u);
    if (!u && typeof window < `u`) {
      Ae(l, r);
      let t = je(l);
      ((c = t.MeasureLayout), (d.visualElement = De(e, f, l, i, t.ProjectionNode, a)));
    }
    return (0, F.jsxs)(S.Provider, {
      value: d,
      children: [
        c && d.visualElement ? (0, F.jsx)(c, { visualElement: d.visualElement, ...l }) : null,
        _e(e, n, Ce(f, d.visualElement, s), f, u, t, a),
      ],
    });
  }
  s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let c = (0, b.forwardRef)(s);
  return ((c[Se] = e), c);
}
function ke({ layoutId: e }) {
  let t = (0, b.useContext)(oe).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function Ae(e, t) {
  (0, b.useContext)(y).strict;
}
function je(e) {
  let { drag: t, layout: n } = d();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function Me(e, t) {
  if (typeof Proxy > `u`) return I;
  let n = new Map(),
    r = (n, r) => I(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => (a === `create` ? r : (n.has(a) || n.set(a, I(a, void 0, e, t)), n.get(a))),
  });
}
var L = Me(),
  Ne = { some: 0, all: 1 };
function Pe(e, t, { root: n, margin: i, amount: a = `some` } = {}) {
  let o = r(e),
    s = new WeakMap(),
    c = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = s.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e.target, e);
              typeof n == `function` ? s.set(e.target, n) : c.unobserve(e.target);
            } else typeof n == `function` && (n(e), s.delete(e.target));
        });
      },
      { root: n, rootMargin: i, threshold: typeof a == `number` ? a : Ne[a] },
    );
  return (o.forEach((e) => c.observe(e)), () => c.disconnect());
}
function Fe(e, { root: t, margin: n, amount: r, once: i = !1, initial: a = !1 } = {}) {
  let [o, s] = (0, b.useState)(a);
  return (
    (0, b.useEffect)(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        c = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Pe(e.current, a, c);
    }, [t, e, n, i, r]),
    o
  );
}
var Ie = `/assets/hero-worker-hq-ZMCYrJ5u.webp`,
  Le = `/assets/gallery-3-D4iac3Io.webp`,
  R = `/assets/gallery-1-CnDt7Dz4.webp`,
  z = {
    Star: (e) =>
      (0, F.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "aria-hidden": !0,
        ...e,
        children: (0, F.jsx)(`path`, {
          d: `M12 2l2.95 6.6 7.05.7-5.3 4.8 1.6 7-6.3-3.7-6.3 3.7 1.6-7-5.3-4.8 7.05-.7L12 2z`,
        }),
      }),
    Check: (e) =>
      (0, F.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, F.jsx)(`path`, { d: `M5 12.5l4.5 4.5L19 7` }),
      }),
    Close: (e) =>
      (0, F.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, F.jsx)(`path`, { d: `M6 6l12 12M18 6l-6 12` }),
      }),
    Arrow: (e) =>
      (0, F.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.6`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, F.jsx)(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
      }),
    Menu: (e) =>
      (0, F.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.6`,
        strokeLinecap: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, F.jsx)(`path`, { d: `M4 7h16M4 12h16M4 17h16` }),
      }),
    Plus: (e) =>
      (0, F.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `1.6`,
        strokeLinecap: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, F.jsx)(`path`, { d: `M12 5v14M5 12h14` }),
      }),
    Drag: (e) =>
      (0, F.jsx)(`svg`, {
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        "aria-hidden": !0,
        ...e,
        children: (0, F.jsx)(`path`, { d: `M8 9l-4 3 4 3M16 9l4 3-4 3` }),
      }),
  },
  B = ({ className: e = `` }) =>
    (0, F.jsxs)(`div`, {
      className: `flex items-center gap-2 ${e}`,
      children: [
        (0, F.jsxs)(`div`, {
          className: `relative font-display font-black tracking-normal`,
          style: { fontSize: `1.4em`, lineHeight: 1, letterSpacing: `0.05em` },
          children: [
            `C`,
            (0, F.jsxs)(`span`, {
              className: `relative inline-block`,
              children: [
                `U`,
                (0, F.jsx)(`span`, {
                  className: `absolute left-[5%] right-[5%] bottom-[-0.15em] h-[0.08em] bg-current`,
                }),
              ],
            }),
            `BIK`,
            (0, F.jsxs)(`span`, {
              className: `relative inline-block`,
              children: [
                `O`,
                (0, F.jsx)(`span`, {
                  className: `absolute left-[5%] right-[5%] bottom-[-0.15em] h-[0.08em] bg-current`,
                }),
              ],
            }),
            `S`,
          ],
        }),
        (0, F.jsxs)(`svg`, {
          viewBox: `0 0 32 36`,
          className: `h-[1.6em] w-auto`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2.5`,
          strokeLinejoin: `round`,
          strokeLinecap: `round`,
          children: [
            (0, F.jsx)(`polygon`, { points: `16,2 30,10 30,26 16,34 2,26 2,10`, fill: `none` }),
            (0, F.jsx)(`polyline`, { points: `2,10 16,18 30,10`, fill: `none` }),
            (0, F.jsx)(`line`, { x1: `16`, y1: `18`, x2: `16`, y2: `34`, fill: `none` }),
          ],
        }),
      ],
    }),
  V = ({ children: e, delay: t = 0, className: n = `` }) =>
    (0, F.jsx)(L.div, {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0, amount: 0.15 },
      transition: { duration: 0.6, delay: t, ease: [0.2, 0.8, 0.2, 1] },
      className: n,
      children: e,
    }),
  H = ({ children: e, delay: t = 0 }) =>
    (0, F.jsx)(`div`, {
      className: `overflow-hidden`,
      children: (0, F.jsx)(L.div, {
        initial: { y: `100%` },
        whileInView: { y: 0 },
        viewport: { once: !0, amount: 0.15 },
        transition: { duration: 0.6, delay: t, ease: [0.2, 0.8, 0.2, 1] },
        children: e,
      }),
    });
function U({ to: e, suffix: t = ``, duration: n = 2 }) {
  let [r, i] = (0, b.useState)(0),
    a = (0, b.useRef)(null),
    o = Fe(a, { once: !0, margin: `-10%` });
  return (
    (0, b.useEffect)(() => {
      if (o) {
        let t,
          r = (a) => {
            t || (t = a);
            let o = Math.min((a - t) / (n * 1e3), 1),
              s = 1 - (1 - o) ** 4;
            (i(Math.floor(s * e)), o < 1 ? window.requestAnimationFrame(r) : i(e));
          };
        window.requestAnimationFrame(r);
      }
    }, [o, e, n]),
    (0, F.jsxs)(`span`, { ref: a, children: [r.toLocaleString(`es-ES`), t] })
  );
}
var W = [
    { label: `Método`, href: `#metodo` },
    { label: `Proyectos`, href: `#proyectos` },
    { label: `Opiniones`, href: `#opiniones` },
    { label: `Contacto`, href: `#contacto` },
  ],
  Re = React.memo(() => {
    let [e, t] = (0, b.useState)(!1),
      [n, r] = (0, b.useState)(!1);
    return (
      (0, b.useEffect)(() => {
        let e = () => t(window.scrollY > 50);
        return (
          e(),
          window.addEventListener(`scroll`, e, { passive: !0 }),
          () => window.removeEventListener(`scroll`, e)
        );
      }, []),
      (0, F.jsxs)(`header`, {
        className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] ${e ? `py-4` : `py-6`}`,
        children: [
          (0, F.jsxs)(`div`, {
            className: `container-x flex items-center justify-between`,
            children: [
              (0, F.jsx)(`a`, {
                href: `#top`,
                className: `text-brand transition-transform hover:scale-105 duration-300`,
                children: (0, F.jsx)(B, { className: `text-[22px] md:text-[26px]` }),
              }),
              (0, F.jsx)(`nav`, {
                className: `hidden items-center gap-14 lg:flex`,
                children: W.map((e) =>
                  (0, F.jsxs)(
                    `a`,
                    {
                      href: e.href,
                      className: `group relative text-[17px] font-medium tracking-wide transition-colors text-ink hover:text-brand`,
                      children: [
                        e.label,
                        (0, F.jsx)(`span`, {
                          className: `absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full`,
                        }),
                      ],
                    },
                    e.href,
                  ),
                ),
              }),
              (0, F.jsx)(`div`, {
                className: `hidden lg:block`,
                children: (0, F.jsxs)(`a`, {
                  href: `#contacto`,
                  className: `group relative overflow-hidden flex items-center justify-center px-8 h-12 rounded-full font-bold text-[13px] uppercase tracking-[0.15em] transition-all duration-300 bg-gradient-to-r from-[#FFDE00] to-[#F39C12] text-white shadow-[0_5px_20px_rgba(243,156,18,0.4)] hover:shadow-[0_10px_30px_rgba(243,156,18,0.6)] hover:-translate-y-0.5`,
                  children: [
                    (0, F.jsx)(`div`, {
                      className: `absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out`,
                    }),
                    (0, F.jsx)(`span`, {
                      className: `relative z-10 drop-shadow-md`,
                      children: `Solicitar presupuesto`,
                    }),
                  ],
                }),
              }),
              (0, F.jsx)(`button`, {
                "aria-label": `Abrir menÃº`,
                onClick: () => r(!n),
                className: `grid h-12 w-12 place-items-center lg:hidden text-ink`,
                children: n
                  ? (0, F.jsx)(z.Close, { className: `h-8 w-8` })
                  : (0, F.jsx)(z.Menu, { className: `h-8 w-8` }),
              }),
            ],
          }),
          n &&
            (0, F.jsx)(L.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.3 },
              className: `fixed inset-0 bg-black/60 z-[90] lg:hidden`,
              onClick: () => r(!1),
            }),
          (0, F.jsxs)(L.div, {
            initial: { x: `100%` },
            animate: { x: n ? `0%` : `100%` },
            transition: { duration: 0.3, ease: `easeOut` },
            className: `fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#111] z-[100] p-6 flex flex-col shadow-2xl lg:hidden`,
            children: [
              (0, F.jsxs)(`div`, {
                className: `flex justify-between items-center mb-10`,
                children: [
                  (0, F.jsx)(`span`, {
                    className: `text-brand font-black text-xl tracking-widest uppercase`,
                    children: `Cubikos`,
                  }),
                  (0, F.jsx)(`button`, {
                    onClick: () => r(!1),
                    "aria-label": `Cerrar menÃº`,
                    className: `text-white hover:text-brand transition-colors p-2`,
                    children: (0, F.jsx)(z.Close, { className: `h-7 w-7` }),
                  }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: `flex flex-col gap-6`,
                children: [
                  W.map((e) =>
                    (0, F.jsx)(
                      `a`,
                      {
                        href: e.href,
                        onClick: () => r(!1),
                        className: `text-white font-medium text-lg border-b border-white/10 pb-4 hover:text-brand transition-colors`,
                        children: e.label,
                      },
                      e.href,
                    ),
                  ),
                  (0, F.jsx)(`a`, {
                    href: `#contacto`,
                    onClick: () => r(!1),
                    className: `mt-4 flex items-center justify-center h-14 rounded-full bg-gradient-to-r from-[#FFDE00] to-[#F39C12] text-white font-bold text-sm uppercase tracking-widest shadow-[0_5px_20px_rgba(243,156,18,0.4)]`,
                    children: `Solicitar presupuesto`,
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  }),
  G = ({ className: e, delay: t }) =>
    (0, F.jsxs)(L.div, {
      initial: { scale: 0, opacity: 0 },
      whileInView: { scale: [0, 1.6, 1], opacity: 1 },
      viewport: { once: !0, amount: 0.15 },
      transition: { delay: t, duration: 0.4, times: [0, 0.6, 1], ease: [`easeOut`, `backOut`] },
      className: `absolute w-3 h-3 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-500 border border-neutral-600 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.4)] flex items-center justify-center z-10 ${e}`,
      children: [
        (0, F.jsx)(`div`, {
          className: `w-1.5 h-[1.5px] bg-neutral-700/80 rotate-45 rounded-full`,
        }),
        (0, F.jsx)(`div`, {
          className: `absolute w-1.5 h-[1.5px] bg-neutral-700/80 -rotate-45 rounded-full`,
        }),
      ],
    }),
  K = ({ className: e, delay: t }) =>
    (0, F.jsx)(L.div, {
      initial: { opacity: 0, rotate: -45, x: -30, y: -30 },
      whileInView: {
        opacity: [0, 1, 1, 0],
        rotate: [-45, -60, 20, 20],
        x: [-30, -40, 0, 10],
        y: [-30, -40, 0, 20],
      },
      viewport: { once: !0, amount: 0.15 },
      transition: { duration: 0.6, delay: t - 0.25, times: [0, 0.4, 0.6, 1], ease: `easeInOut` },
      className: `absolute z-30 pointer-events-none ${e}`,
      children: (0, F.jsxs)(`svg`, {
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
          (0, F.jsx)(`path`, { d: `m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L13.586 10.586` }),
          (0, F.jsx)(`path`, { d: `m18 11.5-4.5-4.5` }),
          (0, F.jsx)(`path`, { d: `M14 6h3l5 5v3h-3l-5-5Z` }),
        ],
      }),
    });
function ze() {
  return (0, F.jsxs)(`section`, {
    id: `top`,
    className: `relative min-h-[100svh] flex flex-col bg-ink pb-32 md:pb-40`,
    children: [
      (0, F.jsxs)(L.div, {
        initial: { scale: 1.05 },
        animate: { scale: 1 },
        transition: { duration: 1.5, ease: `easeOut` },
        className: `absolute inset-0 z-0 overflow-hidden`,
        children: [
          (0, F.jsx)(`svg`, {
            className: `hidden`,
            children: (0, F.jsx)(`filter`, {
              id: `crisp-sharpen`,
              children: (0, F.jsx)(`feConvolveMatrix`, {
                order: `3`,
                preserveAlpha: `true`,
                kernelMatrix: `0 -1 0 -1 5 -1 0 -1 0`,
              }),
            }),
          }),
          (0, F.jsx)(`img`, {
            src: Ie,
            alt: `Montador profesional ajustando cocina premium`,
            fetchPriority: `high`,
            loading: `eager`,
            className: `absolute inset-0 w-full h-full object-cover object-[85%_center] sm:object-[65%_center] md:object-[55%_center] contrast-[1.10] saturate-[1.05]`,
            style: { filter: `url(#crisp-sharpen)` },
          }),
          (0, F.jsx)(`div`, {
            className: `absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.45)_0%,transparent_65%)] md:bg-[radial-gradient(circle_at_25%_50%,rgba(0,0,0,0.55)_0%,transparent_50%)]`,
          }),
          (0, F.jsx)(`div`, {
            className: `absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent md:hidden`,
          }),
        ],
      }),
      (0, F.jsx)(`div`, {
        className: `relative z-10 w-full flex flex-col container-x my-auto pt-24 pb-10 md:pt-32 md:pb-16`,
        children: (0, F.jsxs)(`div`, {
          className: `w-full max-w-[480px]`,
          children: [
            (0, F.jsx)(H, {
              children: (0, F.jsxs)(`h1`, {
                className: `font-display font-black text-[clamp(1.9rem,5.5vw,2.6rem)] md:text-[clamp(2.8rem,4vw,3.6rem)] text-white tracking-tighter leading-[1.05]`,
                children: [
                  (0, F.jsx)(`span`, { className: `block`, children: `Una cocina` }),
                  (0, F.jsx)(`span`, { className: `block`, children: `perfecta` }),
                  (0, F.jsx)(`span`, {
                    className: `block text-white/90`,
                    children: `empieza con un`,
                  }),
                  (0, F.jsxs)(`span`, {
                    className: `block`,
                    children: [
                      `montaje perfecto`,
                      (0, F.jsx)(`span`, { className: `text-brand`, children: `.` }),
                    ],
                  }),
                ],
              }),
            }),
            (0, F.jsx)(V, {
              delay: 0.2,
              className: `mt-4 md:mt-5 max-w-[440px]`,
              children: (0, F.jsx)(`p`, {
                className: `text-lg md:text-[20px] text-white/95 font-medium tracking-wide leading-relaxed text-balance antialiased drop-shadow-sm`,
                children: `MÃ¡s de 30 Años instalando cocinas en toda Cataluña con precisiÃ³n milimÃ©trica y acabados impecables.`,
              }),
            }),
            (0, F.jsxs)(V, {
              delay: 0.4,
              className: `flex flex-col sm:flex-row items-center gap-5 sm:gap-6`,
              children: [
                (0, F.jsxs)(`div`, {
                  className: `relative w-full sm:w-auto`,
                  children: [
                    (0, F.jsx)(L.div, {
                      animate: { scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] },
                      transition: { repeat: 1 / 0, duration: 2, repeatDelay: 2 },
                      className: `absolute inset-0 rounded-full border-[2px] border-brand pointer-events-none`,
                    }),
                    (0, F.jsxs)(`a`, {
                      href: `#contacto`,
                      className: `group relative overflow-hidden w-full sm:w-auto flex items-center justify-center px-10 h-16 rounded-full bg-gradient-to-r from-[#FFDE00] to-[#F39C12] text-white font-black text-[14px] md:text-[16px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_40px_rgba(243,156,18,0.5)] hover:shadow-[0_20px_60px_rgba(243,156,18,0.8)] hover:-translate-y-1`,
                      children: [
                        (0, F.jsx)(`div`, {
                          className: `absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.2s] ease-in-out`,
                        }),
                        (0, F.jsx)(`span`, {
                          className: `relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`,
                          children: `Solicitar presupuesto`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, F.jsx)(`a`, {
                  href: `#proyectos`,
                  className: `group relative overflow-hidden w-full sm:w-auto flex items-center justify-center px-10 h-16 rounded-full bg-white text-ink font-bold text-[14px] md:text-[15px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1`,
                  children: (0, F.jsx)(`span`, {
                    className: `relative z-10`,
                    children: `Ver proyectos`,
                  }),
                }),
              ],
            }),
            (0, F.jsx)(V, {
              delay: 0.5,
              className: `mt-6`,
              children: (0, F.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, F.jsxs)(`div`, {
                    className: `flex -space-x-2`,
                    children: [
                      (0, F.jsx)(`div`, {
                        className: `w-8 h-8 rounded-full bg-brand flex items-center justify-center text-[10px] font-bold text-white border-2 border-white/20`,
                        children: `MR`,
                      }),
                      (0, F.jsx)(`div`, {
                        className: `w-8 h-8 rounded-full bg-[#444] flex items-center justify-center text-[10px] font-bold text-white border-2 border-white/20`,
                        children: `AC`,
                      }),
                      (0, F.jsx)(`div`, {
                        className: `w-8 h-8 rounded-full bg-[#666] flex items-center justify-center text-[10px] font-bold text-white border-2 border-white/20`,
                        children: `JP`,
                      }),
                    ],
                  }),
                  (0, F.jsxs)(`span`, {
                    className: `text-white/80 text-sm font-medium`,
                    children: [
                      `â˜…â˜…â˜…â˜…â˜… `,
                      (0, F.jsx)(`strong`, { className: `text-white`, children: `4.9` }),
                      ` Â· 47 reseÃ±as verificadas`,
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      (0, F.jsx)(`div`, {
        className: `absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-[90%] max-w-[900px]`,
        children: (0, F.jsx)(V, {
          delay: 0.6,
          children: (0, F.jsxs)(`div`, {
            className: `relative rounded-3xl p-8 md:px-14 md:py-12 shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/20`,
            style: {
              backgroundImage: `url('/wood-panel.webp')`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
            },
            children: [
              (0, F.jsx)(`div`, {
                className: `absolute inset-0 rounded-3xl shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] pointer-events-none`,
              }),
              (0, F.jsx)(K, { className: `top-0 left-0`, delay: 1 }),
              (0, F.jsx)(G, { className: `top-4 left-4 -rotate-12`, delay: 1 }),
              (0, F.jsx)(K, { className: `top-0 right-0`, delay: 1.2 }),
              (0, F.jsx)(G, { className: `top-4 right-4 rotate-45`, delay: 1.2 }),
              (0, F.jsx)(K, { className: `bottom-0 left-0`, delay: 1.4 }),
              (0, F.jsx)(G, { className: `bottom-4 left-4 rotate-90`, delay: 1.4 }),
              (0, F.jsx)(K, { className: `bottom-0 right-0`, delay: 1.6 }),
              (0, F.jsx)(G, { className: `bottom-4 right-4 -rotate-45`, delay: 1.6 }),
              (0, F.jsxs)(`div`, {
                className: `relative z-10 grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 px-2 py-2`,
                children: [
                  (0, F.jsxs)(`div`, {
                    className: `group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`,
                    children: [
                      (0, F.jsx)(`span`, {
                        className: `text-[32px] md:text-[44px] font-black text-ink leading-none tracking-tighter`,
                        children: `30+`,
                      }),
                      (0, F.jsxs)(`span`, {
                        className: `relative inline-block mt-2`,
                        children: [
                          (0, F.jsx)(`span`, {
                            className: `absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm`,
                          }),
                          (0, F.jsx)(`span`, {
                            className: `relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]`,
                            children: `Años`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, F.jsxs)(`div`, {
                    className: `group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`,
                    children: [
                      (0, F.jsx)(`span`, {
                        className: `text-[32px] md:text-[44px] font-black text-ink leading-none tracking-tighter`,
                        children: `500+`,
                      }),
                      (0, F.jsxs)(`span`, {
                        className: `relative inline-block mt-2`,
                        children: [
                          (0, F.jsx)(`span`, {
                            className: `absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm`,
                          }),
                          (0, F.jsx)(`span`, {
                            className: `relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]`,
                            children: `Cocinas`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, F.jsxs)(`div`, {
                    className: `group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`,
                    children: [
                      (0, F.jsx)(`span`, {
                        className: `text-[26px] md:text-[34px] font-black text-ink leading-none tracking-tight pt-1 md:pt-2`,
                        children: `Cataluña`,
                      }),
                      (0, F.jsxs)(`span`, {
                        className: `relative inline-block mt-2`,
                        children: [
                          (0, F.jsx)(`span`, {
                            className: `absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm`,
                          }),
                          (0, F.jsx)(`span`, {
                            className: `relative z-10 text-[11px] md:text-[13px] font-bold text-ink uppercase tracking-[0.2em]`,
                            children: `Cobertura`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, F.jsxs)(`div`, {
                    className: `group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 shadow-md border border-white/50 cursor-default transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl`,
                    children: [
                      (0, F.jsx)(`span`, {
                        className: `text-[26px] md:text-[34px] font-black text-ink leading-none tracking-tight pt-1 md:pt-2`,
                        children: `Garantía`,
                      }),
                      (0, F.jsxs)(`span`, {
                        className: `relative inline-block mt-2`,
                        children: [
                          (0, F.jsx)(`span`, {
                            className: `absolute bottom-[-2px] -left-1 -right-1 h-[4px] bg-yellow-400 group-hover:h-full group-hover:bottom-0 transition-all duration-300 rounded-sm`,
                          }),
                          (0, F.jsx)(`span`, {
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
function Be() {
  let [e, t] = (0, b.useState)(50),
    [n, r] = (0, b.useState)({ x: 0, y: 0 }),
    [i, a] = (0, b.useState)(!1),
    o = (0, b.useRef)(null),
    s = (0, b.useRef)(!1);
  return (
    (0, b.useEffect)(() => {
      let e = o.current;
      if (!e) return;
      let n = (n) => {
          let r = e.getBoundingClientRect();
          t((Math.max(0, Math.min(n - r.left, r.width)) / r.width) * 100);
        },
        i = (t) => {
          n(t.clientX);
          let i = e.getBoundingClientRect();
          r({ x: t.clientX - i.left, y: t.clientY - i.top });
        },
        c = (t) => {
          n(t.touches[0].clientX);
          let i = e.getBoundingClientRect();
          r({ x: t.touches[0].clientX - i.left, y: t.touches[0].clientY - i.top });
        },
        l = () => a(!0),
        u = () => {
          (a(!1), (s.current = !1));
        },
        d = () => (s.current = !0),
        f = () => (s.current = !1);
      return (
        e.addEventListener(`mousemove`, i),
        e.addEventListener(`touchmove`, c, { passive: !0 }),
        e.addEventListener(`mouseenter`, l),
        e.addEventListener(`mouseleave`, u),
        e.addEventListener(`mousedown`, d),
        e.addEventListener(`mouseup`, f),
        e.addEventListener(`touchend`, u),
        () => {
          (e.removeEventListener(`mousemove`, i),
            e.removeEventListener(`touchmove`, c),
            e.removeEventListener(`mouseenter`, l),
            e.removeEventListener(`mouseleave`, u),
            e.removeEventListener(`mousedown`, d),
            e.removeEventListener(`mouseup`, f),
            e.removeEventListener(`touchend`, u));
        }
      );
    }, []),
    (0, F.jsx)(`section`, {
      id: `metodo`,
      className: `bg-background text-ink py-32 md:py-48`,
      children: (0, F.jsxs)(`div`, {
        className: `container-x`,
        children: [
          (0, F.jsx)(`div`, {
            className: `max-w-5xl mb-24 text-center md:text-left`,
            children: (0, F.jsxs)(H, {
              children: [
                (0, F.jsx)(`span`, {
                  className: `eyebrow text-ink-soft`,
                  children: `El montaje decide el resultado final`,
                }),
                (0, F.jsx)(`h2`, {
                  className: `font-display font-black text-[3.5rem] md:text-[5.5rem] leading-[0.95] tracking-tighter mt-6 text-balance`,
                  children: `Una cocina de 25.000€ puede parecer de 5.000€ si el montaje falla.`,
                }),
              ],
            }),
          }),
          (0, F.jsxs)(`div`, {
            className: `max-w-6xl mx-auto`,
            children: [
              (0, F.jsxs)(`div`, {
                className: `flex justify-between items-center mb-6 px-4 md:px-0`,
                children: [
                  (0, F.jsxs)(`div`, {
                    className: `font-display font-black text-lg md:text-2xl uppercase tracking-widest text-ink flex items-center gap-2`,
                    children: [
                      (0, F.jsx)(z.Close, { className: `h-5 w-5 text-red-500` }),
                      ` Error Habitual`,
                    ],
                  }),
                  (0, F.jsxs)(`div`, {
                    className: `font-display font-black text-lg md:text-2xl uppercase tracking-widest text-brand flex items-center gap-2`,
                    children: [
                      (0, F.jsx)(z.Check, { className: `h-5 w-5 text-brand` }),
                      ` Método Cubikos`,
                    ],
                  }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                ref: o,
                className: `relative w-full aspect-square md:aspect-[21/9] bg-[#E8E6E1] overflow-hidden cursor-none select-none touch-none shadow-premium`,
                children: [
                  (0, F.jsx)(L.div, {
                    className: `absolute pointer-events-none z-50 flex items-center justify-center`,
                    style: { left: n.x, top: n.y, x: `-50%`, y: `-50%` },
                    initial: { opacity: 0 },
                    animate: { opacity: +!!i },
                    transition: { duration: 0.15 },
                    children: (0, F.jsxs)(`svg`, {
                      width: `32`,
                      height: `32`,
                      viewBox: `0 0 32 32`,
                      fill: `none`,
                      stroke: `#F39C12`,
                      strokeWidth: `1.5`,
                      children: [
                        (0, F.jsx)(`line`, { x1: `16`, y1: `0`, x2: `16`, y2: `32` }),
                        (0, F.jsx)(`line`, { x1: `0`, y1: `16`, x2: `32`, y2: `16` }),
                        (0, F.jsx)(`circle`, {
                          cx: `16`,
                          cy: `16`,
                          r: `4`,
                          fill: `#F39C12`,
                          stroke: `none`,
                        }),
                      ],
                    }),
                  }),
                  (0, F.jsx)(`img`, {
                    src: R,
                    alt: `Método Cubikos perfecto`,
                    className: `absolute inset-0 w-full h-full object-cover pointer-events-none`,
                  }),
                  (0, F.jsx)(`div`, {
                    className: `absolute inset-0 w-full h-full overflow-hidden pointer-events-none`,
                    style: { clipPath: `inset(0 ${100 - e}% 0 0)` },
                    children: (0, F.jsx)(`img`, {
                      src: Le,
                      alt: `Ejemplo de mala ejecución`,
                      className: `absolute inset-0 w-full h-full object-cover grayscale pointer-events-none`,
                    }),
                  }),
                  (0, F.jsx)(`div`, {
                    className: `absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none`,
                    style: { left: `${e}%`, transform: `translateX(-50%)` },
                    children: (0, F.jsx)(`div`, {
                      className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-ink`,
                      children: (0, F.jsx)(z.Drag, { className: `h-5 w-5` }),
                    }),
                  }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: `grid grid-cols-2 mt-8 md:mt-12 gap-8 px-4 md:px-0`,
                children: [
                  (0, F.jsx)(`div`, {
                    className: `text-left`,
                    children: (0, F.jsxs)(`ul`, {
                      className: `space-y-4 font-medium text-lg md:text-xl text-ink-soft`,
                      children: [
                        (0, F.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, F.jsx)(`span`, { className: `text-ink mt-1`, children: `•` }),
                            ` Puertas torcidas`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, F.jsx)(`span`, { className: `text-ink mt-1`, children: `•` }),
                            ` Holguras visibles`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, F.jsx)(`span`, { className: `text-ink mt-1`, children: `•` }),
                            ` Desniveles`,
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, F.jsx)(`div`, {
                    className: `text-right`,
                    children: (0, F.jsxs)(`ul`, {
                      className: `space-y-4 font-medium text-lg md:text-xl text-ink inline-block text-left`,
                      children: [
                        (0, F.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, F.jsx)(`span`, { className: `text-brand mt-1`, children: `•` }),
                            ` Ajuste láser`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, F.jsx)(`span`, { className: `text-brand mt-1`, children: `•` }),
                            ` Nivelación perfecta`,
                          ],
                        }),
                        (0, F.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, F.jsx)(`span`, { className: `text-brand mt-1`, children: `•` }),
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
    })
  );
}
var Ve = [
  {
    src: R,
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
    subtitle: `Ajuste de mÃ³dulos base`,
    span: `lg:col-span-1 lg:row-span-1`,
    aspect: `aspect-square`,
  },
  {
    src: `/assets/gallery-5-BUWLZ2B8.webp`,
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
function He() {
  return (0, F.jsxs)(`section`, {
    id: `proyectos`,
    className: `bg-[#111111] text-[#FAFAF8] py-16 md:py-48`,
    children: [
      (0, F.jsx)(`div`, {
        className: `container-x mb-12 md:mb-24`,
        children: (0, F.jsxs)(V, {
          children: [
            (0, F.jsx)(`h2`, {
              className: `font-display font-black text-[clamp(48px,8vw,80px)] leading-[0.95] tracking-tighter text-[#FAFAF8] text-balance`,
              children: `Casos de estudio.`,
            }),
            (0, F.jsx)(`p`, {
              className: `mt-6 md:mt-8 text-lg md:text-2xl text-[#EDEBE8] font-medium leading-relaxed text-balance max-w-2xl`,
              children: `La excelencia no se demuestra en un plano general, sino en la perfección de cada detalle, Unión y remate.`,
            }),
          ],
        }),
      }),
      (0, F.jsx)(`div`, {
        className: `container-x`,
        children: (0, F.jsx)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:auto-rows-[350px]`,
          children: Ve.map((e, t) =>
            (0, F.jsxs)(
              V,
              {
                delay: t * 0.1,
                className: `group relative overflow-hidden bg-[#1a1a1a] ${e.span} ${e.aspect || ``}`,
                children: [
                  (0, F.jsx)(`img`, {
                    loading: `lazy`,
                    src: e.src,
                    alt: e.title,
                    loading: `lazy`,
                    className: `absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]`,
                  }),
                  (0, F.jsx)(`div`, {
                    className: `absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none`,
                  }),
                  (0, F.jsx)(`div`, {
                    className: `absolute inset-0 flex flex-col justify-end p-8 md:p-10 pointer-events-none`,
                    children: (0, F.jsxs)(`div`, {
                      className: `border-l-2 border-brand pl-6 transform transition-transform duration-500 ease-out group-hover:translate-x-2`,
                      children: [
                        (0, F.jsx)(`h3`, {
                          className: `font-display text-2xl md:text-3xl font-black text-white`,
                          children: e.title,
                        }),
                        (0, F.jsx)(`p`, {
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
var Ue = [
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
    a: `Depende de la Planimetría y el volumen, pero la excelencia requiere tiempo. Un montaje estándar de alta gama dura entre 3 y 5 días. La revisión final es innegociable.`,
  },
];
function We() {
  let [e, t] = (0, b.useState)(0);
  return (0, F.jsx)(`section`, {
    className: `bg-surface py-32 md:py-48`,
    children: (0, F.jsxs)(`div`, {
      className: `container-x grid md:grid-cols-12 gap-16`,
      children: [
        (0, F.jsx)(`div`, {
          className: `md:col-span-4`,
          children: (0, F.jsxs)(V, {
            children: [
              (0, F.jsx)(`span`, { className: `eyebrow`, children: `FAQ` }),
              (0, F.jsx)(`h2`, { className: `headline-lg mt-4`, children: `Claridad absoluta.` }),
            ],
          }),
        }),
        (0, F.jsx)(`div`, {
          className: `md:col-span-8`,
          children: (0, F.jsx)(`ul`, {
            className: `border-t border-ink`,
            children: Ue.map((n, r) => {
              let i = e === r;
              return (0, F.jsxs)(
                `li`,
                {
                  className: `border-b border-line`,
                  children: [
                    (0, F.jsxs)(`button`, {
                      onClick: () => t(i ? null : r),
                      className: `flex w-full items-center justify-between gap-6 py-8 text-left hover:text-brand transition-colors duration-300 group`,
                      children: [
                        (0, F.jsx)(`span`, {
                          className: `font-display text-2xl md:text-3xl font-black text-ink group-hover:text-brand transition-colors`,
                          children: n.q,
                        }),
                        (0, F.jsx)(`span`, {
                          className: `flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${i ? `rotate-45` : ``}`,
                          children: (0, F.jsx)(z.Plus, {
                            className: `h-8 w-8 text-ink group-hover:text-brand`,
                          }),
                        }),
                      ],
                    }),
                    (0, F.jsx)(`div`, {
                      className: `overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]`,
                      style: { maxHeight: i ? 400 : 0, opacity: +!!i },
                      children: (0, F.jsx)(`p`, {
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
function Ge() {
  let [e, t] = (0, b.useState)(!1),
    n = (0, b.useCallback)((e) => {
      (e.preventDefault(), t(!0));
    }, []);
  return (0, F.jsxs)(`section`, {
    id: `contacto`,
    className: `relative min-h-[100svh] bg-ink flex items-center py-24 overflow-hidden`,
    children: [
      (0, F.jsx)(`div`, {
        className: `absolute inset-0 z-0 bg-fixed bg-center bg-cover`,
        style: { backgroundImage: `url(${ee})` },
      }),
      (0, F.jsx)(`div`, { className: `absolute inset-0 z-0 bg-black/75` }),
      (0, F.jsx)(`div`, {
        className: `container-x relative z-10 w-full`,
        children: (0, F.jsxs)(`div`, {
          className: `grid lg:grid-cols-12 gap-16 lg:gap-8 items-center`,
          children: [
            (0, F.jsxs)(`div`, {
              className: `lg:col-span-7 flex flex-col justify-center`,
              children: [
                (0, F.jsxs)(L.div, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.15 },
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  children: [
                    (0, F.jsxs)(`div`, {
                      className: `flex items-center gap-4 mb-8`,
                      children: [
                        (0, F.jsx)(`div`, { className: `h-[2px] w-12 bg-brand` }),
                        (0, F.jsx)(`span`, {
                          className: `font-display font-black text-sm uppercase tracking-widest text-brand`,
                          children: `Valoración técnica`,
                        }),
                      ],
                    }),
                    (0, F.jsx)(`h2`, {
                      className: `font-display font-black text-[clamp(4rem,7vw,7rem)] leading-[0.95] text-white tracking-tighter text-balance max-w-2xl`,
                      children: `INICIEMOS TU PROYECTO`,
                    }),
                    (0, F.jsx)(`p`, {
                      className: `mt-8 text-xl md:text-2xl font-medium text-[#EDEBE8] max-w-[550px] leading-relaxed`,
                      children: `Solicita una Valoración técnica sin compromiso y descubre cómo podemos materializar tu proyecto.`,
                    }),
                  ],
                }),
                (0, F.jsxs)(L.div, {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.15 },
                  transition: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
                  className: `mt-16 flex flex-col sm:flex-row gap-8 lg:gap-12`,
                  children: [
                    (0, F.jsxs)(`div`, {
                      className: `flex items-start gap-4`,
                      children: [
                        (0, F.jsx)(z.Check, { className: `w-6 h-6 text-brand shrink-0` }),
                        (0, F.jsxs)(`div`, {
                          children: [
                            (0, F.jsx)(`div`, {
                              className: `font-bold text-white text-lg`,
                              children: `Sin compromiso`,
                            }),
                            (0, F.jsx)(`div`, {
                              className: `text-sm text-white/70 mt-1`,
                              children: `Respuesta en 24-48h`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, F.jsxs)(`div`, {
                      className: `flex items-start gap-4`,
                      children: [
                        (0, F.jsx)(z.Check, { className: `w-6 h-6 text-brand shrink-0` }),
                        (0, F.jsxs)(`div`, {
                          children: [
                            (0, F.jsx)(`div`, {
                              className: `font-bold text-white text-lg`,
                              children: `Confidencial`,
                            }),
                            (0, F.jsx)(`div`, {
                              className: `text-sm text-white/70 mt-1`,
                              children: `Tus datos protegidos`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, F.jsxs)(`div`, {
                      className: `flex items-start gap-4`,
                      children: [
                        (0, F.jsx)(z.Check, { className: `w-6 h-6 text-brand shrink-0` }),
                        (0, F.jsxs)(`div`, {
                          children: [
                            (0, F.jsx)(`div`, {
                              className: `font-bold text-white text-lg`,
                              children: `Experiencia`,
                            }),
                            (0, F.jsx)(`div`, {
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
            (0, F.jsx)(`div`, {
              className: `lg:col-span-5 lg:col-start-8`,
              children: (0, F.jsx)(L.div, {
                initial: { opacity: 0, x: -40, scale: 0.95 },
                whileInView: { opacity: 1, x: 0, scale: 1 },
                viewport: { once: !0, amount: 0.15 },
                transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                children: e
                  ? (0, F.jsxs)(`div`, {
                      className: `bg-[rgba(20,20,20,0.92)] backdrop-blur-[20px] border border-white/15 rounded-[24px] p-12 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,0.4)]`,
                      children: [
                        (0, F.jsx)(z.Check, { className: `h-16 w-16 text-brand mx-auto mb-8` }),
                        (0, F.jsx)(`h3`, {
                          className: `font-display text-3xl font-black uppercase tracking-widest`,
                          children: `Recibido`,
                        }),
                        (0, F.jsx)(`p`, {
                          className: `mt-6 text-lg font-medium text-[#EDEBE8]`,
                          children: `Nuestro equipo técnico revisará tu solicitud y te contactará en breve.`,
                        }),
                      ],
                    })
                  : (0, F.jsx)(`form`, {
                      onSubmit: n,
                      className: `bg-[rgba(20,20,20,0.92)] backdrop-blur-[20px] border border-white/15 rounded-[24px] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.4)]`,
                      children: (0, F.jsxs)(`div`, {
                        className: `space-y-10`,
                        children: [
                          (0, F.jsxs)(`div`, {
                            className: `group relative`,
                            children: [
                              (0, F.jsx)(`label`, {
                                className: `text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2`,
                                children: `Nombre`,
                              }),
                              (0, F.jsx)(`input`, {
                                required: !0,
                                type: `text`,
                                className: `w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px]`,
                              }),
                            ],
                          }),
                          (0, F.jsxs)(`div`, {
                            className: `group relative`,
                            children: [
                              (0, F.jsx)(`label`, {
                                className: `text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2`,
                                children: `Teléfono / Email`,
                              }),
                              (0, F.jsx)(`input`, {
                                required: !0,
                                type: `text`,
                                className: `w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px]`,
                              }),
                            ],
                          }),
                          (0, F.jsxs)(`div`, {
                            className: `group relative`,
                            children: [
                              (0, F.jsx)(`label`, {
                                className: `text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2`,
                                children: `¿Qué tipo de cocina necesitas montar?`,
                              }),
                              (0, F.jsxs)(`select`, {
                                required: !0,
                                className: `w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px] cursor-pointer appearance-none`,
                                children: [
                                  (0, F.jsx)(`option`, {
                                    value: ``,
                                    disabled: !0,
                                    selected: !0,
                                    className: `bg-[#111] text-white/50`,
                                    children: `Selecciona una opción`,
                                  }),
                                  (0, F.jsx)(`option`, {
                                    value: `ikea`,
                                    className: `bg-[#111] text-white`,
                                    children: `IKEA`,
                                  }),
                                  (0, F.jsx)(`option`, {
                                    value: `bauhaus`,
                                    className: `bg-[#111] text-white`,
                                    children: `Bauhaus`,
                                  }),
                                  (0, F.jsx)(`option`, {
                                    value: `santos`,
                                    className: `bg-[#111] text-white`,
                                    children: `Santos`,
                                  }),
                                  (0, F.jsx)(`option`, {
                                    value: `amedida`,
                                    className: `bg-[#111] text-white`,
                                    children: `A medida`,
                                  }),
                                  (0, F.jsx)(`option`, {
                                    value: `otros`,
                                    className: `bg-[#111] text-white`,
                                    children: `Otros`,
                                  }),
                                ],
                              }),
                              (0, F.jsx)(`div`, {
                                className: `absolute right-0 top-9 pointer-events-none text-white/50`,
                                children: (0, F.jsx)(`svg`, {
                                  className: `w-5 h-5`,
                                  fill: `none`,
                                  stroke: `currentColor`,
                                  viewBox: `0 0 24 24`,
                                  children: (0, F.jsx)(`path`, {
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    strokeWidth: `2`,
                                    d: `M19 9l-7 7-7-7`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, F.jsxs)(`div`, {
                            className: `group relative`,
                            children: [
                              (0, F.jsx)(`label`, {
                                className: `text-xs font-bold uppercase tracking-widest text-[#EDEBE8] block mb-2`,
                                children: `Detalles de la Obra (Opcional)`,
                              }),
                              (0, F.jsx)(`textarea`, {
                                rows: 2,
                                className: `w-full bg-transparent border-b border-white/20 py-2 text-xl font-medium text-white focus:outline-none focus:border-white hover:border-white transition-all duration-300 focus:-translate-y-[2px] resize-none`,
                              }),
                            ],
                          }),
                          (0, F.jsxs)(`button`, {
                            type: `submit`,
                            className: `group relative overflow-hidden flex items-center justify-center w-full h-16 bg-gradient-to-r from-[#FFDE00] to-[#F39C12] text-white font-black text-[15px] md:text-[16px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(243,156,18,0.4)] hover:shadow-[0_20px_60px_rgba(243,156,18,0.7)] hover:-translate-y-1`,
                            children: [
                              (0, F.jsx)(`div`, {
                                className: `absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.2s] ease-in-out`,
                              }),
                              (0, F.jsx)(`span`, {
                                className: `relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`,
                                children: `Solicitar Valoración`,
                              }),
                            ],
                          }),
                          (0, F.jsxs)(`div`, {
                            className: `flex items-center justify-center gap-2 text-xs text-[#D1CFCC] opacity-80 pt-2`,
                            children: [
                              (0, F.jsxs)(`svg`, {
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                className: `w-4 h-4`,
                                children: [
                                  (0, F.jsx)(`rect`, {
                                    x: `3`,
                                    y: `11`,
                                    width: `18`,
                                    height: `11`,
                                    rx: `2`,
                                    ry: `2`,
                                  }),
                                  (0, F.jsx)(`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4` }),
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
var Ke = b.memo(() =>
    (0, F.jsx)(`footer`, {
      className: `bg-ink text-white py-12 md:py-16 border-t border-white/10`,
      children: (0, F.jsxs)(`div`, {
        className: `container-x`,
        children: [
          (0, F.jsxs)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24`,
            children: [
              (0, F.jsxs)(`div`, {
                className: `md:col-span-5 lg:col-span-4`,
                children: [
                  (0, F.jsx)(B, { className: `text-[24px] text-brand mb-8` }),
                  (0, F.jsx)(`p`, {
                    className: `text-lg text-[#D1CFCC] max-w-sm font-medium leading-relaxed`,
                    children: `Especialistas en montaje de mobiliario de cocina. Desde proyectos a medida hasta grandes firmas comerciales. Precisión técnica en toda Cataluña.`,
                  }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: `md:col-span-3 lg:col-start-7 lg:col-span-2`,
                children: [
                  (0, F.jsx)(`h4`, {
                    className: `font-display font-black tracking-widest uppercase text-xs mb-8 text-[#777]`,
                    children: `Explorar`,
                  }),
                  (0, F.jsxs)(`ul`, {
                    className: `space-y-4 text-[#EDEBE8] font-bold text-sm tracking-widest uppercase`,
                    children: [
                      (0, F.jsx)(`li`, {
                        children: (0, F.jsx)(`a`, {
                          href: `#metodo`,
                          className: `hover:text-brand transition-colors`,
                          children: `MÃ©todo`,
                        }),
                      }),
                      (0, F.jsx)(`li`, {
                        children: (0, F.jsx)(`a`, {
                          href: `#experiencia`,
                          className: `hover:text-brand transition-colors`,
                          children: `Experiencia`,
                        }),
                      }),
                      (0, F.jsx)(`li`, {
                        children: (0, F.jsx)(`a`, {
                          href: `#proyectos`,
                          className: `hover:text-brand transition-colors`,
                          children: `Proyectos`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: `md:col-span-4 lg:col-span-3`,
                children: [
                  (0, F.jsx)(`h4`, {
                    className: `font-display font-black tracking-widest uppercase text-xs mb-8 text-[#777]`,
                    children: `Contacto`,
                  }),
                  (0, F.jsxs)(`ul`, {
                    className: `space-y-4 text-[#EDEBE8] font-medium text-lg`,
                    children: [
                      (0, F.jsx)(`li`, {
                        children: (0, F.jsx)(`a`, {
                          href: `mailto:cubikos25@gmail.com`,
                          className: `hover:text-brand transition-colors`,
                          children: `cubikos25@gmail.com`,
                        }),
                      }),
                      (0, F.jsx)(`li`, {
                        children: (0, F.jsxs)(`a`, {
                          href: `https://wa.me/34666871144`,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `hover:text-brand transition-colors`,
                          children: [
                            `+34 666 87 11 44`,
                            ` `,
                            (0, F.jsx)(`span`, {
                              className: `text-xs text-[#777] ml-2 uppercase tracking-widest`,
                              children: `(WhatsApp)`,
                            }),
                          ],
                        }),
                      }),
                      (0, F.jsx)(`li`, {
                        className: `text-[#D1CFCC] text-sm font-bold tracking-widest uppercase pt-2`,
                        children: `Cataluña, España`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, F.jsxs)(`div`, {
            className: `flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-bold uppercase tracking-widest text-[#777]`,
            children: [
              (0, F.jsxs)(`div`, {
                className: `order-2 md:order-1 mt-6 md:mt-0`,
                children: [
                  `© `,
                  new Date().getFullYear(),
                  ` CUBIKOS. Todos los derechos reservados.`,
                ],
              }),
              (0, F.jsxs)(`div`, {
                className: `order-1 md:order-2 flex flex-wrap justify-center gap-8`,
                children: [
                  (0, F.jsx)(`a`, {
                    href: `https://www.instagram.com/raphael_gs68?igsh=MzdhdGxwamZwNGY1`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `hover:text-[#FAFAF8] transition-colors`,
                    children: `Instagram`,
                  }),
                  (0, F.jsx)(`a`, {
                    href: `#`,
                    className: `hover:text-[#FAFAF8] transition-colors`,
                    children: `Aviso Legal`,
                  }),
                  (0, F.jsx)(`a`, {
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
    }),
  ),
  q = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  qe = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  Je = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  J = (e) => {
    let t = Je(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Ye = {
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
  Xe = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  Ze = (0, b.forwardRef)(
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
      (0, b.createElement)(
        `svg`,
        {
          ref: c,
          ...Ye,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: q(`lucide`, i),
          ...(!a && !Xe(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [...o.map(([e, t]) => (0, b.createElement)(e, t)), ...(Array.isArray(a) ? a : [a])],
      ),
  ),
  Y = (e, t) => {
    let n = (0, b.forwardRef)(({ className: n, ...r }, i) =>
      (0, b.createElement)(Ze, {
        ref: i,
        iconNode: t,
        className: q(`lucide-${qe(J(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = J(e)), n);
  },
  Qe = Y(`circle-check-big`, [
    [`path`, { d: `M21.801 10A10 10 0 1 1 17 3.335`, key: `yps3ct` }],
    [`path`, { d: `m9 11 3 3L22 4`, key: `1pflzl` }],
  ]),
  $e = Y(`file-search`, [
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
  et = Y(`hammer`, [
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
  tt = Y(`phone-call`, [
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
  nt = Y(`ruler`, [
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
  rt = `/assets/showcase-1-CnzRdg_V.webp`,
  it = `/assets/showcase-2-DI3TxOkS.webp`,
  X = `/assets/showcase-3-BkU2u6qm.webp`,
  Z = [0.22, 1, 0.36, 1],
  Q = ({ children: e, delay: t = 0, className: n = `` }) =>
    (0, F.jsx)(L.div, {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0, amount: 0.15 },
      transition: { duration: 0.8, delay: t, ease: Z },
      className: n,
      children: e,
    }),
  $ = ({ children: e, delay: t = 0, className: n = `` }) =>
    (0, F.jsx)(L.div, {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: !0, amount: 0.15 },
      transition: { duration: 0.8, delay: t, ease: Z },
      className: n,
      children: e,
    }),
  at = ({ value: e, className: t = `` }) =>
    (0, F.jsx)(`div`, {
      className: `flex items-baseline ${t}`,
      children: e.split(``).map((e, t) => {
        if (isNaN(parseInt(e)))
          return (0, F.jsx)(
            L.span,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: !0, amount: 0.15 },
              transition: { duration: 0.5, delay: 1.2 },
              children: e,
            },
            t,
          );
        let n = parseInt(e),
          r = n === 0 ? 10 : n;
        return (0, F.jsxs)(
          `div`,
          {
            className: `relative inline-block overflow-hidden`,
            style: { height: `1em` },
            children: [
              (0, F.jsx)(`span`, { className: `invisible px-[2px]`, children: n }),
              (0, F.jsx)(L.div, {
                initial: { y: 0 },
                whileInView: { y: `calc(-100% * ${r} / 11)` },
                viewport: { once: !0, amount: 0.15 },
                transition: { duration: 1.2, ease: `easeOut` },
                className: `absolute top-0 left-0 flex flex-col`,
                style: { height: `1100%` },
                children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, t) =>
                  (0, F.jsx)(
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
function ot() {
  return (0, F.jsxs)(`section`, {
    id: `experiencia`,
    className: `relative bg-[#050505] text-[#FAFAF8] py-32 md:py-48 overflow-hidden z-10`,
    children: [
      (0, F.jsx)(`div`, {
        className: `absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none`,
        style: {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")`,
        },
      }),
      (0, F.jsx)(`div`, {
        className: `absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] pointer-events-none`,
      }),
      (0, F.jsx)(`div`, {
        className: `container-x relative z-10`,
        children: (0, F.jsxs)(`div`, {
          className: `grid lg:grid-cols-12 gap-16 lg:gap-12`,
          children: [
            (0, F.jsxs)(`div`, {
              className: `lg:col-span-5 flex flex-col justify-start`,
              children: [
                (0, F.jsx)($, {
                  children: (0, F.jsx)(`div`, {
                    className: `font-display font-black leading-none tracking-tighter text-brand text-[8rem] sm:text-[11rem] md:text-[14rem] lg:text-[15rem]`,
                    children: (0, F.jsx)(at, { value: `30+` }),
                  }),
                }),
                (0, F.jsx)(Q, {
                  delay: 0.2,
                  className: `mt-8`,
                  children: (0, F.jsxs)(`p`, {
                    className: `font-sans text-[22px] font-medium text-[#FAFAF8] max-w-sm leading-snug`,
                    children: [
                      `Especialistas exclusivamente`,
                      (0, F.jsx)(`br`, {}),
                      `en montaje de cocinas.`,
                    ],
                  }),
                }),
              ],
            }),
            (0, F.jsxs)(`div`, {
              className: `lg:col-span-7 lg:pl-12 flex flex-col justify-center pt-4 lg:pt-12`,
              children: [
                (0, F.jsx)(Q, {
                  delay: 0.1,
                  children: (0, F.jsx)(`h2`, {
                    className: `font-display font-bold text-[40px] md:text-[56px] leading-[1.1] text-[#FAFAF8] text-balance`,
                    children: `Tres décadas perfeccionando un único oficio.`,
                  }),
                }),
                (0, F.jsxs)(Q, {
                  delay: 0.3,
                  className: `mt-12 space-y-6 text-xl md:text-[22px] text-[#EDEBE8] font-medium leading-relaxed max-w-3xl`,
                  children: [
                    (0, F.jsx)(`p`, {
                      children: `Mientras otras empresas reparten su atención entre reformas, Coordinación de gremios y decenas de servicios distintos, Cubikos ha dedicado más de treinta años a una sola misión:`,
                    }),
                    (0, F.jsx)(`p`, {
                      className: `font-bold text-[#FAFAF8]`,
                      children: `Montar cocinas con precisión absoluta.`,
                    }),
                    (0, F.jsxs)(`div`, {
                      children: [
                        (0, F.jsx)(`p`, { children: `Cada ajuste.` }),
                        (0, F.jsx)(`p`, { children: `Cada nivelación.` }),
                        (0, F.jsx)(`p`, { children: `Cada encuentro.` }),
                        (0, F.jsx)(`p`, { children: `Cada acabado.` }),
                      ],
                    }),
                    (0, F.jsx)(`p`, {
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
function st() {
  return (0, F.jsx)(`section`, {
    className: `bg-[#FAFAF8] py-16 md:py-24 border-b border-[#E5E0D8]`,
    children: (0, F.jsx)(`div`, {
      className: `container-x`,
      children: (0, F.jsxs)(`div`, {
        className: `grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0`,
        children: [
          (0, F.jsxs)(Q, {
            delay: 0,
            className: `flex flex-col items-center md:items-start px-4 md:px-8 border-r border-[#E5E0D8] py-4`,
            children: [
              (0, F.jsx)(`div`, {
                className: `font-display font-black text-[clamp(2.5rem,3.5vw,4.5rem)] xl:text-[5rem] tracking-tighter text-brand leading-none`,
                children: (0, F.jsx)(U, { to: 30, duration: 1.5, suffix: `+` }),
              }),
              (0, F.jsx)(`div`, {
                className: `mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left`,
                children: `años de experiencia`,
              }),
              (0, F.jsx)(L.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0, amount: 0.15 },
                transition: { duration: 0.6, delay: 0 },
                style: { originX: 0 },
                className: `h-[2px] w-[40px] bg-brand mt-5`,
              }),
            ],
          }),
          (0, F.jsxs)(Q, {
            delay: 0.15,
            className: `flex flex-col items-center md:items-start px-4 md:px-8 md:border-r border-[#E5E0D8] py-4`,
            children: [
              (0, F.jsx)(`div`, {
                className: `font-display font-black text-[clamp(2.5rem,3.5vw,4.5rem)] xl:text-[5rem] tracking-tighter text-brand leading-none`,
                children: (0, F.jsx)(U, { to: 1e4, duration: 2, suffix: `+` }),
              }),
              (0, F.jsx)(`div`, {
                className: `mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left`,
                children: `Cocinas montadas`,
              }),
              (0, F.jsx)(L.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0, amount: 0.15 },
                transition: { duration: 0.6, delay: 0.15 },
                style: { originX: 0 },
                className: `h-[2px] w-[40px] bg-brand mt-5`,
              }),
            ],
          }),
          (0, F.jsxs)(Q, {
            delay: 0.3,
            className: `flex flex-col items-center md:items-start px-4 md:px-8 border-r border-[#E5E0D8] py-4`,
            children: [
              (0, F.jsx)(`div`, {
                className: `font-display font-black text-[clamp(2.5rem,3.5vw,4.5rem)] xl:text-[5rem] tracking-tighter text-brand leading-none`,
                children: (0, F.jsx)(U, { to: 5, duration: 1, suffix: `/5` }),
              }),
              (0, F.jsx)(`div`, {
                className: `mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left`,
                children: `Valoración`,
              }),
              (0, F.jsx)(L.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0, amount: 0.15 },
                transition: { duration: 0.6, delay: 0.3 },
                style: { originX: 0 },
                className: `h-[2px] w-[40px] bg-brand mt-5`,
              }),
            ],
          }),
          (0, F.jsxs)(Q, {
            delay: 0.45,
            className: `flex flex-col items-center md:items-start px-4 md:px-8 py-4`,
            children: [
              (0, F.jsx)(`div`, {
                className: `font-display font-black text-[clamp(2.5rem,3.5vw,4.5rem)] xl:text-[5rem] tracking-tighter text-brand leading-none`,
                children: (0, F.jsx)(U, { to: 100, duration: 1.5, suffix: `%` }),
              }),
              (0, F.jsx)(`div`, {
                className: `mt-4 text-[#888] text-[11px] font-bold uppercase tracking-widest text-center md:text-left`,
                children: `Garantía`,
              }),
              (0, F.jsx)(L.div, {
                initial: { scaleX: 0 },
                whileInView: { scaleX: 1 },
                viewport: { once: !0, amount: 0.15 },
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
var ct = [
    { n: `01`, t: `CONTACTO`, d: `Valoración inicial del proyecto.`, icon: tt },
    { n: `02`, t: `REVISIÓN`, d: `Auditoría de planos y materiales.`, icon: $e },
    { n: `03`, t: `PLANIFICACIÓN`, d: `Coordinación milimétrica.`, icon: nt },
    { n: `04`, t: `MONTAJE`, d: `Ejecución precisa y limpia.`, icon: et },
    { n: `05`, t: `ENTREGA`, d: `Repaso final exhaustivo.`, icon: Qe },
  ],
  lt = () =>
    (0, F.jsx)(`div`, {
      className: `w-full max-w-5xl mx-auto mt-12 md:mt-24 mb-16 lg:mb-24 relative px-4 lg:px-0`,
      children: (0, F.jsxs)(L.div, {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: !0, amount: 0.15 },
        transition: { duration: 0.8, ease: `easeOut` },
        className: `relative aspect-video rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[4px] border-white`,
        children: [
          (0, F.jsx)(`img`, {
            loading: `lazy`,
            src: X,
            alt: `Cocina terminada con precisión milimétrica`,
            loading: `lazy`,
            className: `w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out`,
          }),
          (0, F.jsx)(`div`, {
            className: `absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none`,
          }),
        ],
      }),
    }),
  ut = ({ Icon: e, index: t }) =>
    (0, F.jsx)(`div`, {
      className: `flex items-center text-brand ml-3 opacity-90`,
      children: (0, F.jsx)(L.div, {
        animate: { rotate: [-10, 15, -10], scale: [1, 1.1, 1], y: [0, -2, 0] },
        transition: { repeat: 1 / 0, duration: 1.5, delay: t * 0.2, ease: `easeInOut` },
        children: (0, F.jsx)(e, { size: 20, strokeWidth: 2.5 }),
      }),
    });
function dt() {
  return (0, F.jsx)(`section`, {
    id: `proceso`,
    className: `bg-[#FAFAF8] py-[120px] overflow-hidden`,
    children: (0, F.jsxs)(`div`, {
      className: `mx-auto w-[90%] max-w-[1600px]`,
      children: [
        (0, F.jsxs)(L.div, {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, amount: 0.15 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          children: [
            (0, F.jsxs)(`div`, {
              className: `flex items-center gap-4 mb-6`,
              children: [
                (0, F.jsx)(`div`, { className: `h-[1px] w-12 bg-brand` }),
                (0, F.jsx)(`span`, {
                  className: `text-[12px] font-semibold tracking-[0.3em] uppercase text-brand`,
                  children: `Metodología`,
                }),
              ],
            }),
            (0, F.jsx)(`h2`, {
              className: `font-display font-black text-[clamp(64px,6vw,96px)] leading-[0.95] text-ink max-w-[900px] text-balance`,
              children: `precisión en cada fase.`,
            }),
          ],
        }),
        (0, F.jsx)(lt, {}),
        (0, F.jsxs)(`div`, {
          className: `mt-[40px] relative`,
          children: [
            (0, F.jsx)(`div`, {
              className: `absolute top-[10px] left-0 w-full h-[2px] bg-[#DADADA] hidden lg:block`,
            }),
            (0, F.jsx)(`div`, {
              className: `grid lg:grid-cols-5 gap-8 lg:gap-6`,
              children: ct.map((e, t) =>
                (0, F.jsxs)(
                  L.div,
                  {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0, amount: 0.15 },
                    transition: { duration: 0.7, delay: t * 0.1, ease: [0.22, 1, 0.36, 1] },
                    className: `relative pt-0 lg:pt-0`,
                    children: [
                      (0, F.jsx)(`div`, {
                        className: `hidden lg:flex absolute top-[11px] left-6 -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-white border-[4px] border-brand z-10`,
                      }),
                      (0, F.jsx)(`div`, {
                        className: `absolute left-[24px] top-[40px] bottom-[-32px] w-[2px] bg-[#DADADA] lg:hidden`,
                      }),
                      (0, F.jsxs)(`div`, {
                        className: `bg-white p-[24px] rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-500 ease-out mt-8 lg:mt-12 relative z-10 ml-12 lg:ml-0 flex flex-col justify-between h-[calc(100%-2rem)] lg:h-auto`,
                        children: [
                          (0, F.jsx)(`div`, {
                            className: `lg:hidden absolute left-[-48px] top-[24px] w-[20px] h-[20px] rounded-full bg-brand border-[4px] border-white shadow-[0_0_0_1px_rgba(218,218,218,1)] z-10`,
                          }),
                          (0, F.jsxs)(`div`, {
                            children: [
                              (0, F.jsxs)(`div`, {
                                className: `flex items-center mb-2`,
                                children: [
                                  (0, F.jsxs)(`span`, {
                                    className: `font-display text-sm font-black text-brand`,
                                    children: [e.n, ` `, e.t],
                                  }),
                                  (0, F.jsx)(ut, { Icon: e.icon, index: t }),
                                ],
                              }),
                              (0, F.jsx)(`p`, {
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
function ft() {
  return (0, F.jsx)(`section`, {
    id: `opiniones`,
    className: `bg-background py-32 md:py-48 overflow-hidden`,
    children: (0, F.jsx)(`div`, {
      className: `container-x`,
      children: (0, F.jsxs)(`div`, {
        className: `max-w-6xl mx-auto flex flex-col items-center text-center`,
        children: [
          (0, F.jsxs)(V, {
            className: `flex flex-col items-center`,
            children: [
              (0, F.jsx)(`div`, {
                className: `w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 shadow-premium flex items-center justify-center bg-[#d8a843] text-[#111]`,
                children: (0, F.jsx)(`span`, {
                  className: `font-display font-black text-4xl md:text-5xl tracking-widest`,
                  children: `MS`,
                }),
              }),
              (0, F.jsx)(`div`, {
                className: `flex gap-2 text-ink mb-12`,
                children: Array.from({ length: 5 }).map((e, t) =>
                  (0, F.jsx)(z.Star, { className: `h-6 w-6 md:h-8 md:w-8` }, t),
                ),
              }),
            ],
          }),
          (0, F.jsxs)(V, {
            delay: 0.2,
            className: `relative`,
            children: [
              (0, F.jsx)(`span`, {
                className: `absolute -top-12 -left-8 text-8xl md:text-[12rem] font-display font-black text-line opacity-30 leading-none`,
                children: `"`,
              }),
              (0, F.jsxs)(`blockquote`, {
                className: `font-display text-4xl md:text-5xl lg:text-7xl font-bold text-ink leading-tight tracking-tighter text-balance`,
                children: [
                  `Impecable.`,
                  (0, F.jsx)(`br`, {}),
                  `Cumplieron fechas,`,
                  (0, F.jsx)(`br`, {}),
                  `fueron extremadamente limpios`,
                  (0, F.jsx)(`br`, {}),
                  `y los acabados son perfectos.`,
                ],
              }),
            ],
          }),
          (0, F.jsxs)(V, {
            delay: 0.4,
            className: `mt-16`,
            children: [
              (0, F.jsx)(`div`, {
                className: `font-display font-black text-2xl tracking-widest uppercase text-ink`,
                children: `Marta Sala`,
              }),
              (0, F.jsx)(`div`, {
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
function pt() {
  return (0, F.jsx)(`section`, {
    className: `relative bg-[#0D0D0D] text-[#FAFAF8] py-24 md:py-40 overflow-hidden z-20`,
    children: (0, F.jsx)(`div`, {
      className: `container-x`,
      children: (0, F.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`,
        children: [
          (0, F.jsx)(`div`, {
            className: `flex flex-col justify-center`,
            children: (0, F.jsxs)(Q, {
              delay: 0,
              children: [
                (0, F.jsx)(`div`, {
                  className: `text-brand font-bold uppercase tracking-widest text-sm mb-4`,
                  children: `La firma de un artesano`,
                }),
                (0, F.jsx)(`h2`, {
                  className: `font-display font-black text-[clamp(2rem,8vw,4rem)] tracking-tight leading-tight mb-8 text-[#FAFAF8] text-balance`,
                  children: `El Arte del Ensamblaje`,
                }),
                (0, F.jsx)(`p`, {
                  className: `text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed mb-6 font-light`,
                  children: `Un botellero a medida no admite márgenes de error. Cada balda y cada separador debe encajar con tolerancias milimétricas para garantizar la estabilidad y una estética perfecta.`,
                }),
                (0, F.jsx)(`p`, {
                  className: `text-[#EDEBE8]/80 text-lg md:text-xl leading-relaxed font-light`,
                  children: `Es en estos pequeños detalles donde la verdadera calidad de un montaje sale a relucir. No instalamos cocinas; construimos mobiliario de precisión.`,
                }),
              ],
            }),
          }),
          (0, F.jsxs)(`div`, {
            className: `relative aspect-[4/5] md:aspect-square lg:aspect-square w-full rounded-2xl flex items-center justify-center overflow-visible`,
            children: [
              (0, F.jsx)(L.div, {
                initial: { opacity: 0, y: 60 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, amount: 0.15 },
                transition: { duration: 1, ease: Z },
                className: `absolute left-0 bottom-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10 border-[6px] border-[#0D0D0D]`,
                children: (0, F.jsx)(`img`, {
                  loading: `lazy`,
                  src: rt,
                  alt: `Montaje de estantería iluminada`,
                  className: `w-full h-full object-cover`,
                }),
              }),
              (0, F.jsx)(L.div, {
                initial: { opacity: 0, x: 40, y: -40 },
                whileInView: { opacity: 1, x: 0, y: 0 },
                viewport: { once: !0, amount: 0.15 },
                transition: { duration: 1, delay: 0.2, ease: Z },
                className: `absolute right-0 top-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-xl z-20 border-[6px] border-[#0D0D0D]`,
                children: (0, F.jsx)(`img`, {
                  loading: `lazy`,
                  src: it,
                  alt: `Isla de cocina premium`,
                  className: `w-full h-full object-cover`,
                }),
              }),
              (0, F.jsx)(L.div, {
                initial: { opacity: 0, x: 40, y: 40 },
                whileInView: { opacity: 1, x: 0, y: 0 },
                viewport: { once: !0, amount: 0.15 },
                transition: { duration: 1, delay: 0.4, ease: Z },
                className: `absolute right-12 bottom-8 w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-30 border-[6px] border-[#0D0D0D]`,
                children: (0, F.jsx)(`img`, {
                  loading: `lazy`,
                  src: X,
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
function mt() {
  let e = (0, b.useRef)(null);
  return (
    (0, b.useEffect)(() => {
      let t = setTimeout(() => {
        e.current &&
          ((e.current.style.opacity = `1`), (e.current.style.transform = `translateY(0)`));
      }, 3e3);
      return () => clearTimeout(t);
    }, []),
    (0, F.jsxs)(F.Fragment, {
      children: [
        (0, F.jsxs)(`a`, {
          ref: e,
          href: `https://wa.me/34666871144?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto%20para%20montaje%20de%20cocina`,
          target: `_blank`,
          rel: `noopener noreferrer`,
          "aria-label": `Contactar por WhatsApp`,
          className: `fixed bottom-6 right-6 z-[9999] flex items-center gap-3 bg-[#25D366] text-white font-bold text-sm px-5 py-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.7)] hover:-translate-y-1 transition-all duration-300`,
          style: { opacity: 0, transform: `translateY(20px)` },
          children: [
            (0, F.jsx)(`svg`, {
              width: `24`,
              height: `24`,
              viewBox: `0 0 24 24`,
              fill: `currentColor`,
              children: (0, F.jsx)(`path`, {
                d: `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z`,
              }),
            }),
            (0, F.jsx)(`span`, { children: `WhatsApp` }),
          ],
        }),
        (0, F.jsxs)(`div`, {
          className: `lg:hidden fixed bottom-0 left-0 w-full h-16 bg-[#111] z-[100] border-t border-brand flex`,
          children: [
            (0, F.jsx)(`a`, {
              href: `tel:+34666871144`,
              className: `flex-1 flex items-center justify-center text-white font-medium border-r border-white/10 hover:bg-white/5 transition-colors`,
              children: `Llamar ahora`,
            }),
            (0, F.jsx)(`a`, {
              href: `#contacto`,
              className: `flex-1 flex items-center justify-center text-brand font-bold hover:bg-white/5 transition-colors`,
              children: `Presupuesto gratis`,
            }),
          ],
        }),
      ],
    })
  );
}
function ht() {
  return (0, F.jsxs)(`div`, {
    className: `font-sans antialiased bg-background text-ink pb-16 lg:pb-0`,
    children: [
      (0, F.jsx)(`a`, {
        href: `#main`,
        className: `sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:p-4 focus:bg-white focus:text-black`,
        children: `Saltar al contenido`,
      }),
      (0, F.jsx)(Re, {}),
      (0, F.jsx)(mt, {}),
      (0, F.jsxs)(`main`, {
        id: `main`,
        children: [
          (0, F.jsx)(ze, {}),
          (0, F.jsx)(Be, {}),
          (0, F.jsx)(ot, {}),
          (0, F.jsx)(st, {}),
          (0, F.jsx)(dt, {}),
          (0, F.jsx)(pt, {}),
          (0, F.jsx)(He, {}),
          (0, F.jsx)(ft, {}),
          (0, F.jsx)(We, {}),
          (0, F.jsx)(Ge, {}),
        ],
      }),
      (0, F.jsx)(Ke, {}),
    ],
  });
}
export { ht as component };
