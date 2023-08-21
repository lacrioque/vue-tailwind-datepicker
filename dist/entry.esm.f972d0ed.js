import { openBlock as z, createElementBlock as J, createElementVNode as A, withDirectives as ce, vShow as ve, toDisplayString as le, Fragment as ke, renderList as We, inject as oe, createVNode as ee, TransitionGroup as jt, withCtx as je, normalizeClass as _e, Transition as ft, unref as ue, createCommentVNode as he, withModifiers as Ve, cloneVNode as Et, h as pe, provide as se, ref as q, onMounted as et, watchEffect as we, computed as de, defineComponent as $e, onUnmounted as Xe, Teleport as Lt, reactive as vt, shallowRef as Bt, nextTick as Ie, watch as Ft, isProxy as Nt, createBlock as Re, renderSlot as It, mergeProps as Rt, vModelText as Ht } from "vue";
const Ut = { class: "flex justify-between items-center px-2 py-1.5" }, Wt = { class: "flex-shrink-0" }, zt = { class: "inline-flex rounded-full" }, Gt = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Zt = ["d"], Kt = { class: "px-1.5 space-x-1.5 flex flex-1" }, Jt = { class: "flex-1 flex rounded-md" }, qt = ["textContent"], Xt = { class: "flex-1 flex rounded-md" }, Qt = ["textContent"], er = { class: "flex-shrink-0" }, tr = { class: "inline-flex rounded-full" }, rr = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, nr = ["d"], ze = {
  __name: "Header",
  props: {
    asPrevOrNext: Boolean,
    panel: Object,
    calendar: Object
  },
  setup(t) {
    return (o, a) => (z(), J("div", Ut, [
      A("div", Wt, [
        ce(A("span", zt, [
          A("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[0] || (a[0] = (e) => t.panel.calendar ? t.calendar.onPrevious() : t.calendar.onPreviousYear())
          }, [
            (z(), J("svg", Gt, [
              A("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Zt)
            ]))
          ])
        ], 512), [
          [ve, t.panel.calendar || t.panel.year]
        ])
      ]),
      A("div", Kt, [
        A("span", Jt, [
          A("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: le(t.calendar.month),
            onClick: a[1] || (a[1] = (e) => t.calendar.openMonth())
          }, null, 8, qt)
        ]),
        A("span", Xt, [
          A("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: le(t.calendar.year),
            onClick: a[2] || (a[2] = (e) => t.calendar.openYear())
          }, null, 8, Qt)
        ])
      ]),
      A("div", er, [
        ce(A("span", tr, [
          A("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[3] || (a[3] = (e) => t.panel.calendar ? t.calendar.onNext() : t.calendar.onNextYear())
          }, [
            (z(), J("svg", rr, [
              A("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, nr)
            ]))
          ])
        ], 512), [
          [ve, t.panel.calendar || t.panel.year]
        ])
      ])
    ]));
  }
}, ar = { class: "flex flex-wrap mt-1.5" }, or = { class: "flex rounded-md mt-1.5" }, sr = ["textContent", "onClick"], Ge = {
  __name: "Month",
  props: {
    months: Array
  },
  emits: ["update:month"],
  setup(t, { emit: o }) {
    return (a, e) => (z(), J("div", ar, [
      (z(!0), J(ke, null, We(t.months, (l, s) => (z(), J("div", {
        key: s,
        class: "w-1/2 px-0.5"
      }, [
        A("span", or, [
          A("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: le(l),
            onClick: (x) => o("update:month", s)
          }, null, 8, sr)
        ])
      ]))), 128))
    ]));
  }
}, lr = { class: "grid grid-cols-7 py-2 mt-0.5" }, ur = ["textContent"], Ze = {
  __name: "Week",
  props: {
    weeks: Array
  },
  setup(t) {
    return (o, a) => (z(), J("div", lr, [
      (z(!0), J(ke, null, We(t.weeks, (e, l) => (z(), J("div", {
        key: l,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        A("span", {
          textContent: le(e)
        }, null, 8, ur)
      ]))), 128))
    ]));
  }
}, ir = { class: "flex flex-wrap" }, dr = { class: "flex rounded-md mt-1.5" }, cr = ["textContent", "onClick"], Ke = {
  __name: "Year",
  props: {
    asPrevOrNext: Boolean,
    years: Array
  },
  emits: ["update:year"],
  setup(t, { emit: o }) {
    return (a, e) => (z(), J("div", ir, [
      (z(!0), J(ke, null, We(t.years, (l, s) => (z(), J("div", {
        key: s,
        class: "w-1/2 px-0.5"
      }, [
        A("span", dr, [
          A("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: le(l),
            onClick: (x) => o("update:year", l, t.asPrevOrNext)
          }, null, 8, cr)
        ])
      ]))), 128))
    ]));
  }
}, fr = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, vr = ["data-tooltip"], pr = ["disabled", "onClick", "onMouseenter", "onFocusin", "textContent", "data-date"], Je = {
  __name: "Calendar",
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  emits: ["update:date"],
  setup(t, { emit: o }) {
    const a = oe("isBetweenRange"), e = oe("betweenRangeClasses"), l = oe("datepickerClasses"), s = oe("atMouseOver");
    return (x, u) => (z(), J("div", fr, [
      ee(jt, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: je(() => [
          (z(!0), J(ke, null, We(t.calendar.date(), (v, f) => (z(), J("div", {
            key: f,
            class: _e(["relative", { "vtd-tooltip": t.asRange && v.duration() }]),
            "data-tooltip": `${v.duration()}`
          }, [
            ee(ft, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: je(() => [
                ue(a)(v) || v.hovered() ? (z(), J("span", {
                  key: 0,
                  class: _e(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", ue(e)(v)])
                }, null, 2)) : he("", !0)
              ]),
              _: 2
            }, 1024),
            A("button", {
              type: "button",
              class: _e(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [ue(l)(v), t.asRange ? "transition-all" : "transition-colors"]]),
              disabled: v.disabled || v.inRange(),
              onClick: (M) => o("update:date", v, t.asPrevOrNext),
              onMouseenter: (M) => ue(s)(v),
              onFocusin: (M) => ue(s)(v),
              textContent: le(v.date()),
              "data-date": v.toDate()
            }, null, 42, pr)
          ], 10, vr))), 128))
        ]),
        _: 1
      })
    ]));
  }
}, mr = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, hr = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, yr = ["onClick", "textContent"], gr = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, it = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(t) {
    const o = t, a = oe("setToToday"), e = oe("setToYesterday"), l = oe("setToLastDay"), s = oe("setToThisMonth"), x = oe("setToLastMonth"), u = oe("setToCustomShortcut"), v = () => typeof o.shortcuts == "function" ? o.shortcuts() : !1;
    return (f, M) => o.asRange && o.asSingle || o.asRange && !o.asSingle ? (z(), J("div", mr, [
      v() ? (z(), J("ol", hr, [
        (z(!0), J(ke, null, We(v(), (w, V) => (z(), J("li", { key: V }, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Ve((Y) => ue(u)(w, t.close), ["prevent"]),
            textContent: le(w.label)
          }, null, 8, yr)
        ]))), 128))
      ])) : (z(), J("ol", gr, [
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: M[0] || (M[0] = Ve((w) => ue(a)(t.close), ["prevent"]))
          }, le(o.i18n.today), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: M[1] || (M[1] = Ve((w) => ue(e)(t.close), ["prevent"]))
          }, le(o.i18n.yesterday), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: M[2] || (M[2] = Ve((w) => ue(l)(7, t.close), ["prevent"]))
          }, le(o.i18n.past(7)), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: M[3] || (M[3] = Ve((w) => ue(l)(30, t.close), ["prevent"]))
          }, le(o.i18n.past(30)), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: M[4] || (M[4] = Ve((w) => ue(s)(t.close), ["prevent"]))
          }, le(o.i18n.currentMonth), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: M[5] || (M[5] = Ve((w) => ue(x)(t.close), ["prevent"]))
          }, le(o.i18n.pastMonth), 1)
        ])
      ]))
    ])) : he("", !0);
  }
};
function De(t, o, ...a) {
  if (t in o) {
    let l = o[t];
    return typeof l == "function" ? l(...a) : l;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(o).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, De), e;
}
var He = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(He || {}), br = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(br || {});
function Oe({ visible: t = !0, features: o = 0, ourProps: a, theirProps: e, ...l }) {
  var s;
  let x = mt(e, a), u = Object.assign(l, { props: x });
  if (t || o & 2 && x.static)
    return at(u);
  if (o & 1) {
    let v = (s = x.unmount) == null || s ? 0 : 1;
    return De(v, { [0]() {
      return null;
    }, [1]() {
      return at({ ...l, props: { ...x, hidden: !0, style: { display: "none" } } });
    } });
  }
  return at(u);
}
function at({ props: t, attrs: o, slots: a, slot: e, name: l }) {
  var s, x;
  let { as: u, ...v } = xr(t, ["unmount", "static"]), f = (s = a.default) == null ? void 0 : s.call(a, e), M = {};
  if (e) {
    let w = !1, V = [];
    for (let [Y, F] of Object.entries(e))
      typeof F == "boolean" && (w = !0), F === !0 && V.push(Y);
    w && (M["data-headlessui-state"] = V.join(" "));
  }
  if (u === "template") {
    if (f = pt(f != null ? f : []), Object.keys(v).length > 0 || Object.keys(o).length > 0) {
      let [w, ...V] = f != null ? f : [];
      if (!wr(w) || V.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(v).concat(Object.keys(o)).map(($) => $.trim()).filter(($, T, S) => S.indexOf($) === T).sort(($, T) => $.localeCompare(T)).map(($) => `  - ${$}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(($) => `  - ${$}`).join(`
`)].join(`
`));
      let Y = mt((x = w.props) != null ? x : {}, v), F = Et(w, Y);
      for (let $ in Y)
        $.startsWith("on") && (F.props || (F.props = {}), F.props[$] = Y[$]);
      return F;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return pe(u, Object.assign({}, v, M), { default: () => f });
}
function pt(t) {
  return t.flatMap((o) => o.type === ke ? pt(o.children) : [o]);
}
function mt(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let o = {}, a = {};
  for (let e of t)
    for (let l in e)
      l.startsWith("on") && typeof e[l] == "function" ? (a[l] != null || (a[l] = []), a[l].push(e[l])) : o[l] = e[l];
  if (o.disabled || o["aria-disabled"])
    return Object.assign(o, Object.fromEntries(Object.keys(a).map((e) => [e, void 0])));
  for (let e in a)
    Object.assign(o, { [e](l, ...s) {
      let x = a[e];
      for (let u of x) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        u(l, ...s);
      }
    } });
  return o;
}
function xr(t, o = []) {
  let a = Object.assign({}, t);
  for (let e of o)
    e in a && delete a[e];
  return a;
}
function wr(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
let kr = 0;
function $r() {
  return ++kr;
}
function Ee() {
  return $r();
}
var Pe = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(Pe || {});
function R(t) {
  var o;
  return t == null || t.value == null ? null : (o = t.value.$el) != null ? o : t.value;
}
let ht = Symbol("Context");
var Ye = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(Ye || {});
function yt() {
  return oe(ht, null);
}
function Mr(t) {
  se(ht, t);
}
function dt(t, o) {
  if (t)
    return t;
  let a = o != null ? o : "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function Sr(t, o) {
  let a = q(dt(t.value.type, t.value.as));
  return et(() => {
    a.value = dt(t.value.type, t.value.as);
  }), we(() => {
    var e;
    a.value || R(o) && R(o) instanceof HTMLButtonElement && !((e = R(o)) != null && e.hasAttribute("type")) && (a.value = "button");
  }), a;
}
var Dr = Object.defineProperty, Or = (t, o, a) => o in t ? Dr(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[o] = a, ct = (t, o, a) => (Or(t, typeof o != "symbol" ? o + "" : o, a), a);
class Pr {
  constructor() {
    ct(this, "current", this.detect()), ct(this, "currentId", 0);
  }
  set(o) {
    this.current !== o && (this.currentId = 0, this.current = o);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let tt = new Pr();
function Te(t) {
  if (tt.isServer)
    return null;
  if (t instanceof Node)
    return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let o = R(t);
    if (o)
      return o.ownerDocument;
  }
  return document;
}
let ot = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var Me = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(Me || {}), Qe = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(Qe || {}), _r = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(_r || {});
function rt(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(ot)).sort((o, a) => Math.sign((o.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var lt = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(lt || {});
function gt(t, o = 0) {
  var a;
  return t === ((a = Te(t)) == null ? void 0 : a.body) ? !1 : De(o, { [0]() {
    return t.matches(ot);
  }, [1]() {
    let e = t;
    for (; e !== null; ) {
      if (e.matches(ot))
        return !0;
      e = e.parentElement;
    }
    return !1;
  } });
}
var Tr = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(Tr || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (t) => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (t) => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let Vr = ["textarea", "input"].join(",");
function Cr(t) {
  var o, a;
  return (a = (o = t == null ? void 0 : t.matches) == null ? void 0 : o.call(t, Vr)) != null ? a : !1;
}
function Yr(t, o = (a) => a) {
  return t.slice().sort((a, e) => {
    let l = o(a), s = o(e);
    if (l === null || s === null)
      return 0;
    let x = l.compareDocumentPosition(s);
    return x & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : x & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ce(t, o, { sorted: a = !0, relativeTo: e = null, skipElements: l = [] } = {}) {
  var s;
  let x = (s = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? s : document, u = Array.isArray(t) ? a ? Yr(t) : t : rt(t);
  l.length > 0 && u.length > 1 && (u = u.filter((F) => !l.includes(F))), e = e != null ? e : x.activeElement;
  let v = (() => {
    if (o & 5)
      return 1;
    if (o & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (o & 1)
      return 0;
    if (o & 2)
      return Math.max(0, u.indexOf(e)) - 1;
    if (o & 4)
      return Math.max(0, u.indexOf(e)) + 1;
    if (o & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M = o & 32 ? { preventScroll: !0 } : {}, w = 0, V = u.length, Y;
  do {
    if (w >= V || w + V <= 0)
      return 0;
    let F = f + w;
    if (o & 16)
      F = (F + V) % V;
    else {
      if (F < 0)
        return 3;
      if (F >= V)
        return 1;
    }
    Y = u[F], Y == null || Y.focus(M), w += v;
  } while (Y !== x.activeElement);
  return o & 6 && Cr(Y) && Y.select(), 2;
}
function qe(t, o, a) {
  tt.isServer || we((e) => {
    document.addEventListener(t, o, a), e(() => document.removeEventListener(t, o, a));
  });
}
function bt(t, o, a) {
  tt.isServer || we((e) => {
    window.addEventListener(t, o, a), e(() => window.removeEventListener(t, o, a));
  });
}
function Ar(t, o, a = de(() => !0)) {
  function e(s, x) {
    if (!a.value || s.defaultPrevented)
      return;
    let u = x(s);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let v = function f(M) {
      return typeof M == "function" ? f(M()) : Array.isArray(M) || M instanceof Set ? M : [M];
    }(t);
    for (let f of v) {
      if (f === null)
        continue;
      let M = f instanceof HTMLElement ? f : R(f);
      if (M != null && M.contains(u) || s.composed && s.composedPath().includes(M))
        return;
    }
    return !gt(u, lt.Loose) && u.tabIndex !== -1 && s.preventDefault(), o(s, u);
  }
  let l = q(null);
  qe("pointerdown", (s) => {
    var x, u;
    a.value && (l.value = ((u = (x = s.composedPath) == null ? void 0 : x.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), qe("mousedown", (s) => {
    var x, u;
    a.value && (l.value = ((u = (x = s.composedPath) == null ? void 0 : x.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), qe("click", (s) => {
    l.value && (e(s, () => l.value), l.value = null);
  }, !0), qe("touchend", (s) => e(s, () => s.target instanceof HTMLElement ? s.target : null), !0), bt("blur", (s) => e(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Le = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Le || {});
let Ue = $e({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: o, attrs: a }) {
  return () => {
    let { features: e, ...l } = t, s = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return Oe({ ourProps: s, theirProps: l, slot: {}, attrs: a, slots: o, name: "Hidden" });
  };
} });
var Se = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Se || {});
function xt() {
  let t = q(0);
  return bt("keydown", (o) => {
    o.key === "Tab" && (t.value = o.shiftKey ? 1 : 0);
  }), t;
}
function jr(t, o, a, e) {
  tt.isServer || we((l) => {
    t = t != null ? t : window, t.addEventListener(o, a, e), l(() => t.removeEventListener(o, a, e));
  });
}
let wt = Symbol("ForcePortalRootContext");
function Er() {
  return oe(wt, !1);
}
$e({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(t, { slots: o, attrs: a }) {
  return se(wt, t.force), () => {
    let { force: e, ...l } = t;
    return Oe({ theirProps: l, ourProps: {}, slot: {}, slots: o, attrs: a, name: "ForcePortalRoot" });
  };
} });
function Lr(t) {
  let o = Te(t);
  if (!o) {
    if (t === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`);
  }
  let a = o.getElementById("headlessui-portal-root");
  if (a)
    return a;
  let e = o.createElement("div");
  return e.setAttribute("id", "headlessui-portal-root"), o.body.appendChild(e);
}
$e({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: o, attrs: a }) {
  let e = q(null), l = de(() => Te(e)), s = Er(), x = oe(kt, null), u = q(s === !0 || x == null ? Lr(e.value) : x.resolveTarget());
  we(() => {
    s || x != null && (u.value = x.resolveTarget());
  });
  let v = oe(st, null);
  return et(() => {
    let f = R(e);
    f && v && Xe(v.register(f));
  }), Xe(() => {
    var f, M;
    let w = (f = l.value) == null ? void 0 : f.getElementById("headlessui-portal-root");
    w && u.value === w && u.value.children.length <= 0 && ((M = u.value.parentElement) == null || M.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let f = { ref: e, "data-headlessui-portal": "" };
    return pe(Lt, { to: u.value }, Oe({ ourProps: f, theirProps: t, slot: {}, attrs: a, slots: o, name: "Portal" }));
  };
} });
let st = Symbol("PortalParentContext");
function Br() {
  let t = oe(st, null), o = q([]);
  function a(s) {
    return o.value.push(s), t && t.register(s), () => e(s);
  }
  function e(s) {
    let x = o.value.indexOf(s);
    x !== -1 && o.value.splice(x, 1), t && t.unregister(s);
  }
  let l = { register: a, unregister: e, portals: o };
  return [o, $e({ name: "PortalWrapper", setup(s, { slots: x }) {
    return se(st, l), () => {
      var u;
      return (u = x.default) == null ? void 0 : u.call(x);
    };
  } })];
}
let kt = Symbol("PortalGroupContext");
$e({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t, { attrs: o, slots: a }) {
  let e = vt({ resolveTarget() {
    return t.target;
  } });
  return se(kt, e), () => {
    let { target: l, ...s } = t;
    return Oe({ theirProps: s, ourProps: {}, slot: {}, attrs: o, slots: a, name: "PortalGroup" });
  };
} });
function Fr({ defaultContainers: t = [], portals: o, mainTreeNodeRef: a } = {}) {
  let e = q(null), l = Te(e);
  function s() {
    var x;
    let u = [];
    for (let v of t)
      v !== null && (v instanceof HTMLElement ? u.push(v) : "value" in v && v.value instanceof HTMLElement && u.push(v.value));
    if (o != null && o.value)
      for (let v of o.value)
        u.push(v);
    for (let v of (x = l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null ? x : [])
      v !== document.body && v !== document.head && v instanceof HTMLElement && v.id !== "headlessui-portal-root" && (v.contains(R(e)) || u.some((f) => v.contains(f)) || u.push(v));
    return u;
  }
  return { resolveContainers: s, contains(x) {
    return s().some((u) => u.contains(x));
  }, mainTreeNodeRef: e, MainTreeNode() {
    return a != null ? null : pe(Ue, { features: Le.Hidden, ref: e });
  } };
}
function Nr() {
  let t = q(null);
  return { mainTreeNodeRef: t, MainTreeNode() {
    return pe(Ue, { features: Le.Hidden, ref: t });
  } };
}
var Ir = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Ir || {});
let $t = Symbol("PopoverContext");
function nt(t) {
  let o = oe($t, null);
  if (o === null) {
    let a = new Error(`<${t} /> is missing a parent <${Ot.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, nt), a;
  }
  return o;
}
let Mt = Symbol("PopoverGroupContext");
function St() {
  return oe(Mt, null);
}
let Dt = Symbol("PopoverPanelContext");
function Rr() {
  return oe(Dt, null);
}
let Ot = $e({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: o, attrs: a, expose: e }) {
  var l;
  let s = q(null);
  e({ el: s, $el: s });
  let x = q(1), u = q(null), v = q(null), f = q(null), M = q(null), w = de(() => Te(s)), V = de(() => {
    var E, i;
    if (!R(u) || !R(M))
      return !1;
    for (let C of document.querySelectorAll("body > *"))
      if (Number(C == null ? void 0 : C.contains(R(u))) ^ Number(C == null ? void 0 : C.contains(R(M))))
        return !0;
    let r = rt(), g = r.indexOf(R(u)), j = (g + r.length - 1) % r.length, P = (g + 1) % r.length, W = r[j], K = r[P];
    return !((E = R(M)) != null && E.contains(W)) && !((i = R(M)) != null && i.contains(K));
  }), Y = { popoverState: x, buttonId: q(null), panelId: q(null), panel: M, button: u, isPortalled: V, beforePanelSentinel: v, afterPanelSentinel: f, togglePopover() {
    x.value = De(x.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    x.value !== 1 && (x.value = 1);
  }, close(E) {
    Y.closePopover();
    let i = (() => E ? E instanceof HTMLElement ? E : E.value instanceof HTMLElement ? R(E) : R(Y.button) : R(Y.button))();
    i == null || i.focus();
  } };
  se($t, Y), Mr(de(() => De(x.value, { [0]: Ye.Open, [1]: Ye.Closed })));
  let F = { buttonId: Y.buttonId, panelId: Y.panelId, close() {
    Y.closePopover();
  } }, $ = St(), T = $ == null ? void 0 : $.registerPopover, [S, O] = Br(), b = Fr({ mainTreeNodeRef: $ == null ? void 0 : $.mainTreeNodeRef, portals: S, defaultContainers: [u, M] });
  function I() {
    var E, i, r, g;
    return (g = $ == null ? void 0 : $.isFocusWithinPopoverGroup()) != null ? g : ((E = w.value) == null ? void 0 : E.activeElement) && (((i = R(u)) == null ? void 0 : i.contains(w.value.activeElement)) || ((r = R(M)) == null ? void 0 : r.contains(w.value.activeElement)));
  }
  return we(() => T == null ? void 0 : T(F)), jr((l = w.value) == null ? void 0 : l.defaultView, "focus", (E) => {
    var i, r;
    E.target !== window && E.target instanceof HTMLElement && x.value === 0 && (I() || u && M && (b.contains(E.target) || (i = R(Y.beforePanelSentinel)) != null && i.contains(E.target) || (r = R(Y.afterPanelSentinel)) != null && r.contains(E.target) || Y.closePopover()));
  }, !0), Ar(b.resolveContainers, (E, i) => {
    var r;
    Y.closePopover(), gt(i, lt.Loose) || (E.preventDefault(), (r = R(u)) == null || r.focus());
  }, de(() => x.value === 0)), () => {
    let E = { open: x.value === 0, close: Y.close };
    return pe(ke, [pe(O, {}, () => Oe({ theirProps: { ...t, ...a }, ourProps: { ref: s }, slot: E, slots: o, attrs: a, name: "Popover" })), pe(b.MainTreeNode)]);
  };
} }), Hr = $e({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Ee()}` } }, inheritAttrs: !1, setup(t, { attrs: o, slots: a, expose: e }) {
  let l = nt("PopoverButton"), s = de(() => Te(l.button));
  e({ el: l.button, $el: l.button }), et(() => {
    l.buttonId.value = t.id;
  }), Xe(() => {
    l.buttonId.value = null;
  });
  let x = St(), u = x == null ? void 0 : x.closeOthers, v = Rr(), f = de(() => v === null ? !1 : v.value === l.panelId.value), M = q(null), w = `headlessui-focus-sentinel-${Ee()}`;
  f.value || we(() => {
    l.button.value = M.value;
  });
  let V = Sr(de(() => ({ as: t.as, type: o.type })), M);
  function Y(b) {
    var I, E, i, r, g;
    if (f.value) {
      if (l.popoverState.value === 1)
        return;
      switch (b.key) {
        case Pe.Space:
        case Pe.Enter:
          b.preventDefault(), (E = (I = b.target).click) == null || E.call(I), l.closePopover(), (i = R(l.button)) == null || i.focus();
          break;
      }
    } else
      switch (b.key) {
        case Pe.Space:
        case Pe.Enter:
          b.preventDefault(), b.stopPropagation(), l.popoverState.value === 1 && (u == null || u(l.buttonId.value)), l.togglePopover();
          break;
        case Pe.Escape:
          if (l.popoverState.value !== 0)
            return u == null ? void 0 : u(l.buttonId.value);
          if (!R(l.button) || (r = s.value) != null && r.activeElement && !((g = R(l.button)) != null && g.contains(s.value.activeElement)))
            return;
          b.preventDefault(), b.stopPropagation(), l.closePopover();
          break;
      }
  }
  function F(b) {
    f.value || b.key === Pe.Space && b.preventDefault();
  }
  function $(b) {
    var I, E;
    t.disabled || (f.value ? (l.closePopover(), (I = R(l.button)) == null || I.focus()) : (b.preventDefault(), b.stopPropagation(), l.popoverState.value === 1 && (u == null || u(l.buttonId.value)), l.togglePopover(), (E = R(l.button)) == null || E.focus()));
  }
  function T(b) {
    b.preventDefault(), b.stopPropagation();
  }
  let S = xt();
  function O() {
    let b = R(l.panel);
    if (!b)
      return;
    function I() {
      De(S.value, { [Se.Forwards]: () => Ce(b, Me.First), [Se.Backwards]: () => Ce(b, Me.Last) }) === Qe.Error && Ce(rt().filter((E) => E.dataset.headlessuiFocusGuard !== "true"), De(S.value, { [Se.Forwards]: Me.Next, [Se.Backwards]: Me.Previous }), { relativeTo: R(l.button) });
    }
    I();
  }
  return () => {
    let b = l.popoverState.value === 0, I = { open: b }, { id: E, ...i } = t, r = f.value ? { ref: M, type: V.value, onKeydown: Y, onClick: $ } : { ref: M, id: E, type: V.value, "aria-expanded": l.popoverState.value === 0, "aria-controls": R(l.panel) ? l.panelId.value : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: Y, onKeyup: F, onClick: $, onMousedown: T };
    return pe(ke, [Oe({ ourProps: r, theirProps: { ...o, ...i }, slot: I, attrs: o, slots: a, name: "PopoverButton" }), b && !f.value && l.isPortalled.value && pe(Ue, { id: w, features: Le.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: O })]);
  };
} }), Ur = $e({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: o, slots: a }) {
  let e = nt("PopoverOverlay"), l = `headlessui-popover-overlay-${Ee()}`, s = yt(), x = de(() => s !== null ? (s.value & Ye.Open) === Ye.Open : e.popoverState.value === 0);
  function u() {
    e.closePopover();
  }
  return () => {
    let v = { open: e.popoverState.value === 0 };
    return Oe({ ourProps: { id: l, "aria-hidden": !0, onClick: u }, theirProps: t, slot: v, attrs: o, slots: a, features: He.RenderStrategy | He.Static, visible: x.value, name: "PopoverOverlay" });
  };
} }), Wr = $e({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Ee()}` } }, inheritAttrs: !1, setup(t, { attrs: o, slots: a, expose: e }) {
  let { focus: l } = t, s = nt("PopoverPanel"), x = de(() => Te(s.panel)), u = `headlessui-focus-sentinel-before-${Ee()}`, v = `headlessui-focus-sentinel-after-${Ee()}`;
  e({ el: s.panel, $el: s.panel }), et(() => {
    s.panelId.value = t.id;
  }), Xe(() => {
    s.panelId.value = null;
  }), se(Dt, s.panelId), we(() => {
    var T, S;
    if (!l || s.popoverState.value !== 0 || !s.panel)
      return;
    let O = (T = x.value) == null ? void 0 : T.activeElement;
    (S = R(s.panel)) != null && S.contains(O) || Ce(R(s.panel), Me.First);
  });
  let f = yt(), M = de(() => f !== null ? (f.value & Ye.Open) === Ye.Open : s.popoverState.value === 0);
  function w(T) {
    var S, O;
    switch (T.key) {
      case Pe.Escape:
        if (s.popoverState.value !== 0 || !R(s.panel) || x.value && !((S = R(s.panel)) != null && S.contains(x.value.activeElement)))
          return;
        T.preventDefault(), T.stopPropagation(), s.closePopover(), (O = R(s.button)) == null || O.focus();
        break;
    }
  }
  function V(T) {
    var S, O, b, I, E;
    let i = T.relatedTarget;
    i && R(s.panel) && ((S = R(s.panel)) != null && S.contains(i) || (s.closePopover(), ((b = (O = R(s.beforePanelSentinel)) == null ? void 0 : O.contains) != null && b.call(O, i) || (E = (I = R(s.afterPanelSentinel)) == null ? void 0 : I.contains) != null && E.call(I, i)) && i.focus({ preventScroll: !0 })));
  }
  let Y = xt();
  function F() {
    let T = R(s.panel);
    if (!T)
      return;
    function S() {
      De(Y.value, { [Se.Forwards]: () => {
        var O;
        Ce(T, Me.First) === Qe.Error && ((O = R(s.afterPanelSentinel)) == null || O.focus());
      }, [Se.Backwards]: () => {
        var O;
        (O = R(s.button)) == null || O.focus({ preventScroll: !0 });
      } });
    }
    S();
  }
  function $() {
    let T = R(s.panel);
    if (!T)
      return;
    function S() {
      De(Y.value, { [Se.Forwards]: () => {
        let O = R(s.button), b = R(s.panel);
        if (!O)
          return;
        let I = rt(), E = I.indexOf(O), i = I.slice(0, E + 1), r = [...I.slice(E + 1), ...i];
        for (let g of r.slice())
          if (g.dataset.headlessuiFocusGuard === "true" || b != null && b.contains(g)) {
            let j = r.indexOf(g);
            j !== -1 && r.splice(j, 1);
          }
        Ce(r, Me.First, { sorted: !1 });
      }, [Se.Backwards]: () => {
        var O;
        Ce(T, Me.Previous) === Qe.Error && ((O = R(s.button)) == null || O.focus());
      } });
    }
    S();
  }
  return () => {
    let T = { open: s.popoverState.value === 0, close: s.close }, { id: S, focus: O, ...b } = t, I = { ref: s.panel, id: S, onKeydown: w, onFocusout: l && s.popoverState.value === 0 ? V : void 0, tabIndex: -1 };
    return Oe({ ourProps: I, theirProps: { ...o, ...b }, attrs: o, slot: T, slots: { ...a, default: (...E) => {
      var i;
      return [pe(ke, [M.value && s.isPortalled.value && pe(Ue, { id: u, ref: s.beforePanelSentinel, features: Le.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: F }), (i = a.default) == null ? void 0 : i.call(a, ...E), M.value && s.isPortalled.value && pe(Ue, { id: v, ref: s.afterPanelSentinel, features: Le.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: $ })])];
    } }, features: He.RenderStrategy | He.Static, visible: M.value, name: "PopoverPanel" });
  };
} });
$e({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: o, slots: a, expose: e }) {
  let l = q(null), s = Bt([]), x = de(() => Te(l)), u = Nr();
  e({ el: l, $el: l });
  function v(V) {
    let Y = s.value.indexOf(V);
    Y !== -1 && s.value.splice(Y, 1);
  }
  function f(V) {
    return s.value.push(V), () => {
      v(V);
    };
  }
  function M() {
    var V;
    let Y = x.value;
    if (!Y)
      return !1;
    let F = Y.activeElement;
    return (V = R(l)) != null && V.contains(F) ? !0 : s.value.some(($) => {
      var T, S;
      return ((T = Y.getElementById($.buttonId.value)) == null ? void 0 : T.contains(F)) || ((S = Y.getElementById($.panelId.value)) == null ? void 0 : S.contains(F));
    });
  }
  function w(V) {
    for (let Y of s.value)
      Y.buttonId.value !== V && Y.close();
  }
  return se(Mt, { registerPopover: f, unregisterPopover: v, isFocusWithinPopoverGroup: M, closeOthers: w, mainTreeNodeRef: u.mainTreeNodeRef }), () => pe(ke, [Oe({ ourProps: { ref: l }, theirProps: { ...t, ...o }, slot: {}, attrs: o, slots: a, name: "PopoverGroup" }), pe(u.MainTreeNode)]);
} });
var Ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    var a = 1e3, e = 6e4, l = 36e5, s = "millisecond", x = "second", u = "minute", v = "hour", f = "day", M = "week", w = "month", V = "quarter", Y = "year", F = "date", $ = "Invalid Date", T = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, S = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, O = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(C) {
      var y = ["th", "st", "nd", "rd"], h = C % 100;
      return "[" + C + (y[(h - 20) % 10] || y[h] || y[0]) + "]";
    } }, b = function(C, y, h) {
      var D = String(C);
      return !D || D.length >= y ? C : "" + Array(y + 1 - D.length).join(h) + C;
    }, I = { s: b, z: function(C) {
      var y = -C.utcOffset(), h = Math.abs(y), D = Math.floor(h / 60), _ = h % 60;
      return (y <= 0 ? "+" : "-") + b(D, 2, "0") + ":" + b(_, 2, "0");
    }, m: function C(y, h) {
      if (y.date() < h.date())
        return -C(h, y);
      var D = 12 * (h.year() - y.year()) + (h.month() - y.month()), _ = y.clone().add(D, w), L = h - _ < 0, B = y.clone().add(D + (L ? -1 : 1), w);
      return +(-(D + (h - _) / (L ? _ - B : B - _)) || 0);
    }, a: function(C) {
      return C < 0 ? Math.ceil(C) || 0 : Math.floor(C);
    }, p: function(C) {
      return { M: w, y: Y, w: M, d: f, D: F, h: v, m: u, s: x, ms: s, Q: V }[C] || String(C || "").toLowerCase().replace(/s$/, "");
    }, u: function(C) {
      return C === void 0;
    } }, E = "en", i = {};
    i[E] = O;
    var r = function(C) {
      return C instanceof W;
    }, g = function C(y, h, D) {
      var _;
      if (!y)
        return E;
      if (typeof y == "string") {
        var L = y.toLowerCase();
        i[L] && (_ = L), h && (i[L] = h, _ = L);
        var B = y.split("-");
        if (!_ && B.length > 1)
          return C(B[0]);
      } else {
        var G = y.name;
        i[G] = y, _ = G;
      }
      return !D && _ && (E = _), _ || !D && E;
    }, j = function(C, y) {
      if (r(C))
        return C.clone();
      var h = typeof y == "object" ? y : {};
      return h.date = C, h.args = arguments, new W(h);
    }, P = I;
    P.l = g, P.i = r, P.w = function(C, y) {
      return j(C, { locale: y.$L, utc: y.$u, x: y.$x, $offset: y.$offset });
    };
    var W = function() {
      function C(h) {
        this.$L = g(h.locale, null, !0), this.parse(h);
      }
      var y = C.prototype;
      return y.parse = function(h) {
        this.$d = function(D) {
          var _ = D.date, L = D.utc;
          if (_ === null)
            return new Date(NaN);
          if (P.u(_))
            return new Date();
          if (_ instanceof Date)
            return new Date(_);
          if (typeof _ == "string" && !/Z$/i.test(_)) {
            var B = _.match(T);
            if (B) {
              var G = B[2] - 1 || 0, Z = (B[7] || "0").substring(0, 3);
              return L ? new Date(Date.UTC(B[1], G, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, Z)) : new Date(B[1], G, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, Z);
            }
          }
          return new Date(_);
        }(h), this.$x = h.x || {}, this.init();
      }, y.init = function() {
        var h = this.$d;
        this.$y = h.getFullYear(), this.$M = h.getMonth(), this.$D = h.getDate(), this.$W = h.getDay(), this.$H = h.getHours(), this.$m = h.getMinutes(), this.$s = h.getSeconds(), this.$ms = h.getMilliseconds();
      }, y.$utils = function() {
        return P;
      }, y.isValid = function() {
        return this.$d.toString() !== $;
      }, y.isSame = function(h, D) {
        var _ = j(h);
        return this.startOf(D) <= _ && _ <= this.endOf(D);
      }, y.isAfter = function(h, D) {
        return j(h) < this.startOf(D);
      }, y.isBefore = function(h, D) {
        return this.endOf(D) < j(h);
      }, y.$g = function(h, D, _) {
        return P.u(h) ? this[D] : this.set(_, h);
      }, y.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, y.valueOf = function() {
        return this.$d.getTime();
      }, y.startOf = function(h, D) {
        var _ = this, L = !!P.u(D) || D, B = P.p(h), G = function(ae, ne) {
          var fe = P.w(_.$u ? Date.UTC(_.$y, ne, ae) : new Date(_.$y, ne, ae), _);
          return L ? fe : fe.endOf(f);
        }, Z = function(ae, ne) {
          return P.w(_.toDate()[ae].apply(_.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), _);
        }, te = this.$W, re = this.$M, ie = this.$D, ge = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case Y:
            return L ? G(1, 0) : G(31, 11);
          case w:
            return L ? G(1, re) : G(0, re + 1);
          case M:
            var ye = this.$locale().weekStart || 0, be = (te < ye ? te + 7 : te) - ye;
            return G(L ? ie - be : ie + (6 - be), re);
          case f:
          case F:
            return Z(ge + "Hours", 0);
          case v:
            return Z(ge + "Minutes", 1);
          case u:
            return Z(ge + "Seconds", 2);
          case x:
            return Z(ge + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, y.endOf = function(h) {
        return this.startOf(h, !1);
      }, y.$set = function(h, D) {
        var _, L = P.p(h), B = "set" + (this.$u ? "UTC" : ""), G = (_ = {}, _[f] = B + "Date", _[F] = B + "Date", _[w] = B + "Month", _[Y] = B + "FullYear", _[v] = B + "Hours", _[u] = B + "Minutes", _[x] = B + "Seconds", _[s] = B + "Milliseconds", _)[L], Z = L === f ? this.$D + (D - this.$W) : D;
        if (L === w || L === Y) {
          var te = this.clone().set(F, 1);
          te.$d[G](Z), te.init(), this.$d = te.set(F, Math.min(this.$D, te.daysInMonth())).$d;
        } else
          G && this.$d[G](Z);
        return this.init(), this;
      }, y.set = function(h, D) {
        return this.clone().$set(h, D);
      }, y.get = function(h) {
        return this[P.p(h)]();
      }, y.add = function(h, D) {
        var _, L = this;
        h = Number(h);
        var B = P.p(D), G = function(re) {
          var ie = j(L);
          return P.w(ie.date(ie.date() + Math.round(re * h)), L);
        };
        if (B === w)
          return this.set(w, this.$M + h);
        if (B === Y)
          return this.set(Y, this.$y + h);
        if (B === f)
          return G(1);
        if (B === M)
          return G(7);
        var Z = (_ = {}, _[u] = e, _[v] = l, _[x] = a, _)[B] || 1, te = this.$d.getTime() + h * Z;
        return P.w(te, this);
      }, y.subtract = function(h, D) {
        return this.add(-1 * h, D);
      }, y.format = function(h) {
        var D = this, _ = this.$locale();
        if (!this.isValid())
          return _.invalidDate || $;
        var L = h || "YYYY-MM-DDTHH:mm:ssZ", B = P.z(this), G = this.$H, Z = this.$m, te = this.$M, re = _.weekdays, ie = _.months, ge = _.meridiem, ye = function(ne, fe, me, xe) {
          return ne && (ne[fe] || ne(D, L)) || me[fe].slice(0, xe);
        }, be = function(ne) {
          return P.s(G % 12 || 12, ne, "0");
        }, ae = ge || function(ne, fe, me) {
          var xe = ne < 12 ? "AM" : "PM";
          return me ? xe.toLowerCase() : xe;
        };
        return L.replace(S, function(ne, fe) {
          return fe || function(me) {
            switch (me) {
              case "YY":
                return String(D.$y).slice(-2);
              case "YYYY":
                return P.s(D.$y, 4, "0");
              case "M":
                return te + 1;
              case "MM":
                return P.s(te + 1, 2, "0");
              case "MMM":
                return ye(_.monthsShort, te, ie, 3);
              case "MMMM":
                return ye(ie, te);
              case "D":
                return D.$D;
              case "DD":
                return P.s(D.$D, 2, "0");
              case "d":
                return String(D.$W);
              case "dd":
                return ye(_.weekdaysMin, D.$W, re, 2);
              case "ddd":
                return ye(_.weekdaysShort, D.$W, re, 3);
              case "dddd":
                return re[D.$W];
              case "H":
                return String(G);
              case "HH":
                return P.s(G, 2, "0");
              case "h":
                return be(1);
              case "hh":
                return be(2);
              case "a":
                return ae(G, Z, !0);
              case "A":
                return ae(G, Z, !1);
              case "m":
                return String(Z);
              case "mm":
                return P.s(Z, 2, "0");
              case "s":
                return String(D.$s);
              case "ss":
                return P.s(D.$s, 2, "0");
              case "SSS":
                return P.s(D.$ms, 3, "0");
              case "Z":
                return B;
            }
            return null;
          }(ne) || B.replace(":", "");
        });
      }, y.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, y.diff = function(h, D, _) {
        var L, B = this, G = P.p(D), Z = j(h), te = (Z.utcOffset() - this.utcOffset()) * e, re = this - Z, ie = function() {
          return P.m(B, Z);
        };
        switch (G) {
          case Y:
            L = ie() / 12;
            break;
          case w:
            L = ie();
            break;
          case V:
            L = ie() / 3;
            break;
          case M:
            L = (re - te) / 6048e5;
            break;
          case f:
            L = (re - te) / 864e5;
            break;
          case v:
            L = re / l;
            break;
          case u:
            L = re / e;
            break;
          case x:
            L = re / a;
            break;
          default:
            L = re;
        }
        return _ ? L : P.a(L);
      }, y.daysInMonth = function() {
        return this.endOf(w).$D;
      }, y.$locale = function() {
        return i[this.$L];
      }, y.locale = function(h, D) {
        if (!h)
          return this.$L;
        var _ = this.clone(), L = g(h, D, !0);
        return L && (_.$L = L), _;
      }, y.clone = function() {
        return P.w(this.$d, this);
      }, y.toDate = function() {
        return new Date(this.valueOf());
      }, y.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, y.toISOString = function() {
        return this.$d.toISOString();
      }, y.toString = function() {
        return this.$d.toUTCString();
      }, C;
    }(), K = W.prototype;
    return j.prototype = K, [["$ms", s], ["$s", x], ["$m", u], ["$H", v], ["$W", f], ["$M", w], ["$y", Y], ["$D", F]].forEach(function(C) {
      K[C[1]] = function(y) {
        return this.$g(y, C[0], C[1]);
      };
    }), j.extend = function(C, y) {
      return C.$i || (C(y, W, j), C.$i = !0), j;
    }, j.locale = g, j.isDayjs = r, j.unix = function(C) {
      return j(1e3 * C);
    }, j.en = i[E], j.Ls = i, j.p = {}, j;
  });
})(Pt);
const d = Pt.exports;
var _t = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    return function(a, e, l) {
      var s = e.prototype, x = function(w) {
        return w && (w.indexOf ? w : w.s);
      }, u = function(w, V, Y, F, $) {
        var T = w.name ? w : w.$locale(), S = x(T[V]), O = x(T[Y]), b = S || O.map(function(E) {
          return E.slice(0, F);
        });
        if (!$)
          return b;
        var I = T.weekStart;
        return b.map(function(E, i) {
          return b[(i + (I || 0)) % 7];
        });
      }, v = function() {
        return l.Ls[l.locale()];
      }, f = function(w, V) {
        return w.formats[V] || function(Y) {
          return Y.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(F, $, T) {
            return $ || T.slice(1);
          });
        }(w.formats[V.toUpperCase()]);
      }, M = function() {
        var w = this;
        return { months: function(V) {
          return V ? V.format("MMMM") : u(w, "months");
        }, monthsShort: function(V) {
          return V ? V.format("MMM") : u(w, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return w.$locale().weekStart || 0;
        }, weekdays: function(V) {
          return V ? V.format("dddd") : u(w, "weekdays");
        }, weekdaysMin: function(V) {
          return V ? V.format("dd") : u(w, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(V) {
          return V ? V.format("ddd") : u(w, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(V) {
          return f(w.$locale(), V);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      s.localeData = function() {
        return M.bind(this)();
      }, l.localeData = function() {
        var w = v();
        return { firstDayOfWeek: function() {
          return w.weekStart || 0;
        }, weekdays: function() {
          return l.weekdays();
        }, weekdaysShort: function() {
          return l.weekdaysShort();
        }, weekdaysMin: function() {
          return l.weekdaysMin();
        }, months: function() {
          return l.months();
        }, monthsShort: function() {
          return l.monthsShort();
        }, longDateFormat: function(V) {
          return f(w, V);
        }, meridiem: w.meridiem, ordinal: w.ordinal };
      }, l.months = function() {
        return u(v(), "months");
      }, l.monthsShort = function() {
        return u(v(), "monthsShort", "months", 3);
      }, l.weekdays = function(w) {
        return u(v(), "weekdays", null, null, w);
      }, l.weekdaysShort = function(w) {
        return u(v(), "weekdaysShort", "weekdays", 3, w);
      }, l.weekdaysMin = function(w) {
        return u(v(), "weekdaysMin", "weekdays", 2, w);
      };
    };
  });
})(_t);
const zr = _t.exports;
var Tt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, l, s) {
      var x = l.prototype, u = x.format;
      s.en.formats = a, x.format = function(v) {
        v === void 0 && (v = "YYYY-MM-DDTHH:mm:ssZ");
        var f = this.$locale().formats, M = function(w, V) {
          return w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Y, F, $) {
            var T = $ && $.toUpperCase();
            return F || V[$] || a[$] || V[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(S, O, b) {
              return O || b.slice(1);
            });
          });
        }(v, f === void 0 ? {} : f);
        return u.call(this, M);
      };
    };
  });
})(Tt);
const Gr = Tt.exports;
var Vt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d\d/, s = /\d\d?/, x = /\d*[^-_:/,()\s\d]+/, u = {}, v = function($) {
      return ($ = +$) + ($ > 68 ? 1900 : 2e3);
    }, f = function($) {
      return function(T) {
        this[$] = +T;
      };
    }, M = [/[+-]\d\d:?(\d\d)?|Z/, function($) {
      (this.zone || (this.zone = {})).offset = function(T) {
        if (!T || T === "Z")
          return 0;
        var S = T.match(/([+-]|\d\d)/g), O = 60 * S[1] + (+S[2] || 0);
        return O === 0 ? 0 : S[0] === "+" ? -O : O;
      }($);
    }], w = function($) {
      var T = u[$];
      return T && (T.indexOf ? T : T.s.concat(T.f));
    }, V = function($, T) {
      var S, O = u.meridiem;
      if (O) {
        for (var b = 1; b <= 24; b += 1)
          if ($.indexOf(O(b, 0, T)) > -1) {
            S = b > 12;
            break;
          }
      } else
        S = $ === (T ? "pm" : "PM");
      return S;
    }, Y = { A: [x, function($) {
      this.afternoon = V($, !1);
    }], a: [x, function($) {
      this.afternoon = V($, !0);
    }], S: [/\d/, function($) {
      this.milliseconds = 100 * +$;
    }], SS: [l, function($) {
      this.milliseconds = 10 * +$;
    }], SSS: [/\d{3}/, function($) {
      this.milliseconds = +$;
    }], s: [s, f("seconds")], ss: [s, f("seconds")], m: [s, f("minutes")], mm: [s, f("minutes")], H: [s, f("hours")], h: [s, f("hours")], HH: [s, f("hours")], hh: [s, f("hours")], D: [s, f("day")], DD: [l, f("day")], Do: [x, function($) {
      var T = u.ordinal, S = $.match(/\d+/);
      if (this.day = S[0], T)
        for (var O = 1; O <= 31; O += 1)
          T(O).replace(/\[|\]/g, "") === $ && (this.day = O);
    }], M: [s, f("month")], MM: [l, f("month")], MMM: [x, function($) {
      var T = w("months"), S = (w("monthsShort") || T.map(function(O) {
        return O.slice(0, 3);
      })).indexOf($) + 1;
      if (S < 1)
        throw new Error();
      this.month = S % 12 || S;
    }], MMMM: [x, function($) {
      var T = w("months").indexOf($) + 1;
      if (T < 1)
        throw new Error();
      this.month = T % 12 || T;
    }], Y: [/[+-]?\d+/, f("year")], YY: [l, function($) {
      this.year = v($);
    }], YYYY: [/\d{4}/, f("year")], Z: M, ZZ: M };
    function F($) {
      var T, S;
      T = $, S = u && u.formats;
      for (var O = ($ = T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(j, P, W) {
        var K = W && W.toUpperCase();
        return P || S[W] || a[W] || S[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(C, y, h) {
          return y || h.slice(1);
        });
      })).match(e), b = O.length, I = 0; I < b; I += 1) {
        var E = O[I], i = Y[E], r = i && i[0], g = i && i[1];
        O[I] = g ? { regex: r, parser: g } : E.replace(/^\[|\]$/g, "");
      }
      return function(j) {
        for (var P = {}, W = 0, K = 0; W < b; W += 1) {
          var C = O[W];
          if (typeof C == "string")
            K += C.length;
          else {
            var y = C.regex, h = C.parser, D = j.slice(K), _ = y.exec(D)[0];
            h.call(P, _), j = j.replace(_, "");
          }
        }
        return function(L) {
          var B = L.afternoon;
          if (B !== void 0) {
            var G = L.hours;
            B ? G < 12 && (L.hours += 12) : G === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(P), P;
      };
    }
    return function($, T, S) {
      S.p.customParseFormat = !0, $ && $.parseTwoDigitYear && (v = $.parseTwoDigitYear);
      var O = T.prototype, b = O.parse;
      O.parse = function(I) {
        var E = I.date, i = I.utc, r = I.args;
        this.$u = i;
        var g = r[1];
        if (typeof g == "string") {
          var j = r[2] === !0, P = r[3] === !0, W = j || P, K = r[2];
          P && (K = r[2]), u = this.$locale(), !j && K && (u = S.Ls[K]), this.$d = function(D, _, L) {
            try {
              if (["x", "X"].indexOf(_) > -1)
                return new Date((_ === "X" ? 1e3 : 1) * D);
              var B = F(_)(D), G = B.year, Z = B.month, te = B.day, re = B.hours, ie = B.minutes, ge = B.seconds, ye = B.milliseconds, be = B.zone, ae = new Date(), ne = te || (G || Z ? 1 : ae.getDate()), fe = G || ae.getFullYear(), me = 0;
              G && !Z || (me = Z > 0 ? Z - 1 : ae.getMonth());
              var xe = re || 0, Be = ie || 0, Fe = ge || 0, Ne = ye || 0;
              return be ? new Date(Date.UTC(fe, me, ne, xe, Be, Fe, Ne + 60 * be.offset * 1e3)) : L ? new Date(Date.UTC(fe, me, ne, xe, Be, Fe, Ne)) : new Date(fe, me, ne, xe, Be, Fe, Ne);
            } catch {
              return new Date("");
            }
          }(E, g, i), this.init(), K && K !== !0 && (this.$L = this.locale(K).$L), W && E != this.format(g) && (this.$d = new Date("")), u = {};
        } else if (g instanceof Array)
          for (var C = g.length, y = 1; y <= C; y += 1) {
            r[1] = g[y - 1];
            var h = S.apply(this, r);
            if (h.isValid()) {
              this.$d = h.$d, this.$L = h.$L, this.init();
              break;
            }
            y === C && (this.$d = new Date(""));
          }
        else
          b.call(this, I);
      };
    };
  });
})(Vt);
const Zr = Vt.exports;
var Ct = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    return function(a, e, l) {
      e.prototype.isToday = function() {
        var s = "YYYY-MM-DD", x = l();
        return this.format(s) === x.format(s);
      };
    };
  });
})(Ct);
const Kr = Ct.exports;
var Yt = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    return function(a, e, l) {
      e.prototype.isBetween = function(s, x, u, v) {
        var f = l(s), M = l(x), w = (v = v || "()")[0] === "(", V = v[1] === ")";
        return (w ? this.isAfter(f, u) : !this.isBefore(f, u)) && (V ? this.isBefore(M, u) : !this.isAfter(M, u)) || (w ? this.isBefore(f, u) : !this.isAfter(f, u)) && (V ? this.isAfter(M, u) : !this.isBefore(M, u));
      };
    };
  });
})(Yt);
const Jr = Yt.exports;
var At = { exports: {} };
(function(t, o) {
  (function(a, e) {
    t.exports = e();
  })(Ae, function() {
    var a, e, l = 1e3, s = 6e4, x = 36e5, u = 864e5, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, f = 31536e6, M = 2592e6, w = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, V = { years: f, months: M, days: u, hours: x, minutes: s, seconds: l, milliseconds: 1, weeks: 6048e5 }, Y = function(i) {
      return i instanceof I;
    }, F = function(i, r, g) {
      return new I(i, g, r.$l);
    }, $ = function(i) {
      return e.p(i) + "s";
    }, T = function(i) {
      return i < 0;
    }, S = function(i) {
      return T(i) ? Math.ceil(i) : Math.floor(i);
    }, O = function(i) {
      return Math.abs(i);
    }, b = function(i, r) {
      return i ? T(i) ? { negative: !0, format: "" + O(i) + r } : { negative: !1, format: "" + i + r } : { negative: !1, format: "" };
    }, I = function() {
      function i(g, j, P) {
        var W = this;
        if (this.$d = {}, this.$l = P, g === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), j)
          return F(g * V[$(j)], this);
        if (typeof g == "number")
          return this.$ms = g, this.parseFromMilliseconds(), this;
        if (typeof g == "object")
          return Object.keys(g).forEach(function(y) {
            W.$d[$(y)] = g[y];
          }), this.calMilliseconds(), this;
        if (typeof g == "string") {
          var K = g.match(w);
          if (K) {
            var C = K.slice(2).map(function(y) {
              return y != null ? Number(y) : 0;
            });
            return this.$d.years = C[0], this.$d.months = C[1], this.$d.weeks = C[2], this.$d.days = C[3], this.$d.hours = C[4], this.$d.minutes = C[5], this.$d.seconds = C[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var r = i.prototype;
      return r.calMilliseconds = function() {
        var g = this;
        this.$ms = Object.keys(this.$d).reduce(function(j, P) {
          return j + (g.$d[P] || 0) * V[P];
        }, 0);
      }, r.parseFromMilliseconds = function() {
        var g = this.$ms;
        this.$d.years = S(g / f), g %= f, this.$d.months = S(g / M), g %= M, this.$d.days = S(g / u), g %= u, this.$d.hours = S(g / x), g %= x, this.$d.minutes = S(g / s), g %= s, this.$d.seconds = S(g / l), g %= l, this.$d.milliseconds = g;
      }, r.toISOString = function() {
        var g = b(this.$d.years, "Y"), j = b(this.$d.months, "M"), P = +this.$d.days || 0;
        this.$d.weeks && (P += 7 * this.$d.weeks);
        var W = b(P, "D"), K = b(this.$d.hours, "H"), C = b(this.$d.minutes, "M"), y = this.$d.seconds || 0;
        this.$d.milliseconds && (y += this.$d.milliseconds / 1e3);
        var h = b(y, "S"), D = g.negative || j.negative || W.negative || K.negative || C.negative || h.negative, _ = K.format || C.format || h.format ? "T" : "", L = (D ? "-" : "") + "P" + g.format + j.format + W.format + _ + K.format + C.format + h.format;
        return L === "P" || L === "-P" ? "P0D" : L;
      }, r.toJSON = function() {
        return this.toISOString();
      }, r.format = function(g) {
        var j = g || "YYYY-MM-DDTHH:mm:ss", P = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return j.replace(v, function(W, K) {
          return K || String(P[W]);
        });
      }, r.as = function(g) {
        return this.$ms / V[$(g)];
      }, r.get = function(g) {
        var j = this.$ms, P = $(g);
        return P === "milliseconds" ? j %= 1e3 : j = P === "weeks" ? S(j / V[P]) : this.$d[P], j === 0 ? 0 : j;
      }, r.add = function(g, j, P) {
        var W;
        return W = j ? g * V[$(j)] : Y(g) ? g.$ms : F(g, this).$ms, F(this.$ms + W * (P ? -1 : 1), this);
      }, r.subtract = function(g, j) {
        return this.add(g, j, !0);
      }, r.locale = function(g) {
        var j = this.clone();
        return j.$l = g, j;
      }, r.clone = function() {
        return F(this.$ms, this);
      }, r.humanize = function(g) {
        return a().add(this.$ms, "ms").locale(this.$l).fromNow(!g);
      }, r.valueOf = function() {
        return this.asMilliseconds();
      }, r.milliseconds = function() {
        return this.get("milliseconds");
      }, r.asMilliseconds = function() {
        return this.as("milliseconds");
      }, r.seconds = function() {
        return this.get("seconds");
      }, r.asSeconds = function() {
        return this.as("seconds");
      }, r.minutes = function() {
        return this.get("minutes");
      }, r.asMinutes = function() {
        return this.as("minutes");
      }, r.hours = function() {
        return this.get("hours");
      }, r.asHours = function() {
        return this.as("hours");
      }, r.days = function() {
        return this.get("days");
      }, r.asDays = function() {
        return this.as("days");
      }, r.weeks = function() {
        return this.get("weeks");
      }, r.asWeeks = function() {
        return this.as("weeks");
      }, r.months = function() {
        return this.get("months");
      }, r.asMonths = function() {
        return this.as("months");
      }, r.years = function() {
        return this.get("years");
      }, r.asYears = function() {
        return this.as("years");
      }, i;
    }(), E = function(i, r, g) {
      return i.add(r.years() * g, "y").add(r.months() * g, "M").add(r.days() * g, "d").add(r.hours() * g, "h").add(r.minutes() * g, "m").add(r.seconds() * g, "s").add(r.milliseconds() * g, "ms");
    };
    return function(i, r, g) {
      a = g, e = g().$utils(), g.duration = function(W, K) {
        var C = g.locale();
        return F(W, { $l: C }, K);
      }, g.isDuration = Y;
      var j = r.prototype.add, P = r.prototype.subtract;
      r.prototype.add = function(W, K) {
        return Y(W) ? E(this, W, 1) : j.bind(this)(W, K);
      }, r.prototype.subtract = function(W, K) {
        return Y(W) ? E(this, W, -1) : P.bind(this)(W, K);
      };
    };
  });
})(At);
const qr = At.exports;
function Xr() {
  const t = (u) => {
    const v = [], f = u.localeData().firstDayOfWeek();
    for (let M = 0; M <= u.date(0 - f).day(); M++)
      v.push(u.date(0).subtract(M, "day"));
    return v.sort((M, w) => M.date() - w.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (u) => Array.from(
      {
        length: u.daysInMonth()
      },
      (v, f) => u.date(f + 1)
    ),
    useNextDate: (u) => {
      const v = [];
      for (let f = 1; f <= 42 - (t(u).length + u.daysInMonth()); f++)
        v.push(u.date(f).month(u.month()).add(1, "month"));
      return v;
    },
    useDisableDate: (u, { disableDate: v }) => typeof v == "function" ? v(u.toDate()) : !1,
    useBetweenRange: (u, { previous: v, next: f }) => {
      let M;
      return v.isAfter(f, "date") ? M = "(]" : M = "[)", !!(u.isBetween(v, f, "date", M) && !u.off);
    },
    useToValueFromString: (u, { formatter: v }) => u.format(v.date),
    useToValueFromArray: ({ previous: u, next: v }, { formatter: f, separator: M }) => `${u.format(f.date)}${M}${v.format(f.date)}`
  };
}
function Qr() {
  return {
    useVisibleViewport: (o) => {
      if (o) {
        const { right: a } = o.getBoundingClientRect(), e = window.innerWidth || document.documentElement.clientWidth;
        return a > e;
      } else
        return null;
    }
  };
}
const en = ["disabled", "placeholder"], tn = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, rn = ["disabled"], nn = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, an = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, on = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, sn = { class: "flex flex-wrap lg:flex-nowrap" }, ln = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, un = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, dn = /* @__PURE__ */ A("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), cn = [
  dn
], fn = { class: "px-0.5 sm:px-2" }, vn = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, pn = { class: "px-0.5 sm:px-2" }, mn = { key: 0 }, hn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, yn = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, gn = ["disabled", "onClick", "textContent"], bn = ["onClick", "textContent"], xn = {
  key: 1,
  class: "sm:hidden"
}, wn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, kn = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, $n = ["onClick", "textContent"], Mn = {
  key: 1,
  class: "flex"
}, Sn = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, Dn = { class: "flex flex-wrap lg:flex-nowrap" }, On = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Pn = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, _n = /* @__PURE__ */ A("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), Tn = [
  _n
], Vn = { class: "px-0.5 sm:px-2" }, Cn = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, Yn = { class: "px-0.5 sm:px-2" }, An = { key: 0 }, jn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, En = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Ln = ["disabled", "textContent"], Bn = {
  __name: "VueTailwindDatePicker",
  props: {
    noInput: Boolean,
    overlay: Boolean,
    asSingle: Boolean,
    useRange: Boolean,
    placeholder: {
      type: [Boolean, String],
      default: !1
    },
    i18n: {
      type: String,
      default: "en"
    },
    inputClasses: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    disableInRange: {
      type: Boolean,
      default: !0
    },
    disableDate: {
      type: [Boolean, Array, Function],
      default: !1
    },
    autoApply: {
      type: Boolean,
      default: !0
    },
    shortcuts: {
      type: [Boolean, Function],
      default: !0
    },
    separator: {
      type: String,
      default: " ~ "
    },
    formatter: {
      type: Object,
      default: () => ({
        date: "YYYY-MM-DD HH:mm:ss",
        month: "MMM"
      })
    },
    modelValue: {
      type: [Array, Object, String],
      default: () => []
    },
    startFrom: {
      type: [Object, String],
      default: () => new Date()
    },
    weekdaysSize: {
      type: String,
      default: "short"
    },
    options: {
      type: Object,
      default: () => ({
        shortcuts: {
          today: "Today",
          yesterday: "Yesterday",
          past: (t) => `Last ${t} Days`,
          currentMonth: "This Month",
          pastMonth: "Last Month"
        },
        footer: {
          apply: "Apply",
          cancel: "Cancel"
        }
      })
    }
  },
  emits: [
    "update:modelValue",
    "select:month",
    "select:year",
    "select:right:month",
    "select:right:year",
    "click:prev",
    "click:next",
    "click:right:prev",
    "click:right:next"
  ],
  setup(t, { expose: o, emit: a }) {
    const e = t, {
      useCurrentDate: l,
      useDisableDate: s,
      useBetweenRange: x,
      useNextDate: u,
      usePreviousDate: v,
      useToValueFromArray: f,
      useToValueFromString: M
    } = Xr(), { useVisibleViewport: w } = Qr();
    d.extend(zr), d.extend(Gr), d.extend(Zr), d.extend(Kr), d.extend(Jr), d.extend(qr);
    const V = q(null), Y = q(null), F = q(null), $ = q(""), T = q(null), S = q(""), O = q([]), b = q([]), I = q(null), E = q(null), i = vt({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), r = q({
      previous: d(),
      next: d().add(1, "month"),
      year: {
        previous: d().year(),
        next: d().year()
      },
      weeks: e.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort(),
      months: e.formatter.month === "MMM" ? d.monthsShort() : d.months()
    }), g = de(() => r.value.weeks), j = de(() => r.value.months), P = de(() => {
      const { previous: c, next: p, year: k } = ue(r);
      return {
        previous: {
          date: () => v(c).concat(l(c)).concat(u(c)).map((n) => (n.today = n.isToday(), n.active = c.month() === n.month(), n.off = c.month() !== n.month(), n.sunday = n.day() === 0, n.disabled = s(n, e) && !_(n), n.inRange = () => {
            if (e.asSingle && !e.useRange)
              return c.month() !== n.month();
          }, n.hovered = () => D() && O.value.length > 1 ? (n.isBetween(O.value[0], O.value[1], "date", "()") || n.isBetween(O.value[1], O.value[0], "date", "(]")) && c.month() === n.month() : !1, n.duration = () => !1, n)),
          month: c && c.format(e.formatter.month),
          year: c && c.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (n, m) => k.previous + m
          ),
          onPrevious: () => {
            r.value.previous = c.subtract(1, "month"), a("click:prev", r.value.previous);
          },
          onNext: () => {
            r.value.previous = c.add(1, "month"), c.diff(p, "month") === -1 && (r.value.next = p.add(1, "month")), a("click:next", r.value.previous);
          },
          onPreviousYear: () => {
            r.value.year.previous = r.value.year.previous - 12;
          },
          onNextYear: () => {
            r.value.year.previous = r.value.year.previous + 12;
          },
          openMonth: () => {
            i.previous.month = !i.previous.month, i.previous.year = !1, i.previous.calendar = !i.previous.month;
          },
          setMount: (n) => {
            r.value.previous = c.month(n), i.previous.month = !i.previous.month, i.previous.year = !1, i.previous.calendar = !i.previous.month, a("select:month", r.value.previous), Ie(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.next = r.value.next.year();
            });
          },
          openYear: () => {
            i.previous.year = !i.previous.year, i.previous.month = !1, i.previous.calendar = !i.previous.year;
          },
          setYear: (n, m) => {
            m || (r.value.previous = c.year(n), i.previous.year = !i.previous.year, i.previous.calendar = !i.previous.year, a("select:year", r.value.previous), Ie(() => {
              (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        },
        next: {
          date: () => v(p).concat(l(p)).concat(u(p)).map((n) => (n.today = n.isToday(), n.active = p.month() === n.month(), n.off = p.month() !== n.month(), n.sunday = n.day() === 0, n.disabled = s(n, e) && !_(n), n.inRange = () => {
            if (e.asSingle && !e.useRange)
              return p.month() !== n.month();
          }, n.hovered = () => O.value.length > 1 ? (n.isBetween(O.value[0], O.value[1], "date", "()") || n.isBetween(O.value[1], O.value[0], "date", "(]")) && p.month() === n.month() : !1, n.duration = () => !1, n)),
          month: p && p.format(e.formatter.month),
          year: p && p.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (n, m) => k.next + m
          ),
          onPrevious: () => {
            r.value.next = p.subtract(1, "month"), p.diff(c, "month") === 1 && (r.value.previous = c.subtract(1, "month")), a("click:right:prev", r.value.next);
          },
          onNext: () => {
            r.value.next = p.add(1, "month"), a("click:right:next", r.value.next);
          },
          onPreviousYear: () => {
            r.value.year.next = r.value.year.next - 12;
          },
          onNextYear: () => {
            r.value.year.next = r.value.year.next + 12;
          },
          openMonth: () => {
            i.next.month = !i.next.month, i.next.year = !1, i.next.calendar = !i.next.month;
          },
          setMount: (n) => {
            r.value.next = p.month(n), i.next.month = !i.next.month, i.next.year = !1, i.next.calendar = !i.next.month, a("select:right:month", r.value.next), Ie(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year();
            });
          },
          openYear: () => {
            i.next.year = !i.next.year, i.next.month = !1, i.next.calendar = !i.next.year;
          },
          setYear: (n, m) => {
            m && (r.value.next = p.year(n), i.next.year = !i.next.year, i.next.month = !1, i.next.calendar = !i.next.year, a("select:right:year", r.value.next), Ie(() => {
              (r.value.previous.isSame(r.value.next, "month") || r.value.previous.isAfter(r.value.next)) && (r.value.previous = r.value.next.subtract(1, "month")), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year();
            }));
          }
        }
      };
    }), W = q(!1);
    setTimeout(() => {
      W.value = !0;
    }, 250);
    const K = () => d().localeData().firstDayOfWeek(), C = (c) => {
      const p = [...c], k = p.shift();
      return [...p, k];
    }, y = () => Array.isArray(e.modelValue), h = () => typeof e.modelValue == "object", D = () => !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle), _ = (c) => {
      if (e.disableInRange || S.value === "")
        return !1;
      let p, k;
      if (y()) {
        const [n, m] = e.modelValue;
        p = n, k = m;
      } else if (h()) {
        if (e.modelValue) {
          const [n, m] = Object.values(e.modelValue);
          p = n, k = m;
        }
      } else {
        const [n, m] = e.modelValue.split(e.separator);
        p = n, k = m;
      }
      return c.isBetween(d(p, e.formatter.date, !0), d(k, e.formatter.date, !0), "date", "[]");
    }, L = () => {
      I.value = null, E.value = null, O.value = [], T.value = null;
    }, B = () => {
      if (S.value = "", y())
        a("update:modelValue", []);
      else if (h()) {
        const c = {}, [p, k] = Object.keys(e.modelValue);
        c[p] = "", c[k] = "", a("update:modelValue", c);
      } else
        a("update:modelValue", "");
      b.value = [], Y.value && Y.value.focus();
    };
    o({ clearPicker: B });
    const G = () => {
      if (D()) {
        const [c, p] = S.value.split(e.separator), [k, n] = [d(c, e.formatter.date, !0), d(p, e.formatter.date, !0)];
        if (k.isValid() && n.isValid())
          if (Z(k), Z(n), y())
            a("update:modelValue", [c, p]);
          else if (h()) {
            const m = {}, [N, H] = Object.keys(e.modelValue);
            m[N] = c, m[H] = p, a("update:modelValue", m);
          } else
            a(
              "update:modelValue",
              f(
                {
                  previous: k,
                  next: n
                },
                e
              )
            );
      } else {
        const c = d(S.value, e.formatter.date, !0);
        if (c.isValid())
          if (Z(c), y())
            a("update:modelValue", [S.value]);
          else if (h()) {
            const p = {}, [k] = Object.keys(e.modelValue);
            p[k] = S.value, a("update:modelValue", p);
          } else
            a("update:modelValue", S.value);
      }
    }, Z = (c, p, k) => {
      if (D())
        if (I.value)
          if (E.value = c, e.autoApply) {
            c.isBefore(I.value) ? S.value = f(
              {
                previous: c,
                next: I.value
              },
              e
            ) : S.value = f(
              {
                previous: I.value,
                next: c
              },
              e
            );
            const [n, m] = S.value.split(e.separator);
            if (y())
              a("update:modelValue", [
                d(n, e.formatter.date, !0).format(e.formatter.date),
                d(m, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (h()) {
              const N = {}, [H, Q] = Object.keys(e.modelValue);
              N[H] = n, N[Q] = m, a("update:modelValue", N);
            } else
              a(
                "update:modelValue",
                f(
                  {
                    previous: d(n, e.formatter.date, !0),
                    next: d(m, e.formatter.date, !0)
                  },
                  e
                )
              );
            k && k(), b.value = [], d(n, e.formatter.date, !0).isSame(d(m, e.formatter.date, !0), "month") || (r.value.previous = d(n, e.formatter.date, !0), r.value.next = d(m, e.formatter.date, !0)), L();
          } else {
            I.value.isAfter(c, "month") ? b.value = [c, I.value] : b.value = [I.value, c];
            const [n, m] = b.value;
            n.isSame(m, "month") || (r.value.previous = n, r.value.next = m), L();
          }
        else
          b.value = [], I.value = c, T.value = c, O.value.push(c), b.value.push(c), p ? (r.value.next = c, r.value.previous.isSame(c, "month") && (r.value.next = c.add(1, "month"))) : (r.value.previous = c, r.value.next.isSame(c, "month") && (r.value.previous = r.value.next, r.value.next = c.add(1, "month")));
      else if (e.autoApply) {
        if (S.value = M(c, e), y())
          a("update:modelValue", [S.value]);
        else if (h()) {
          const n = {}, [m] = Object.keys(e.modelValue);
          n[m] = S.value, a("update:modelValue", n);
        } else
          a("update:modelValue", S.value);
        k && k(), b.value = [], L();
      } else
        b.value = [c], L();
    }, te = (c) => {
      if (b.value.length < 1)
        return !1;
      let p;
      if (D()) {
        const [k, n] = b.value;
        n.isBefore(k) ? p = f(
          {
            previous: n,
            next: k
          },
          e
        ) : p = f(
          {
            previous: k,
            next: n
          },
          e
        );
      } else {
        const [k] = b.value;
        p = k;
      }
      if (D()) {
        const [k, n] = p.split(e.separator);
        if (y())
          a("update:modelValue", [
            d(k, e.formatter.date, !0).format(e.formatter.date),
            d(n, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (h()) {
          const m = {}, [N, H] = Object.keys(e.modelValue);
          m[N] = k, m[H] = n, a("update:modelValue", m);
        } else
          a(
            "update:modelValue",
            f(
              {
                previous: d(k, e.formatter.date, !0),
                next: d(n, e.formatter.date, !0)
              },
              e
            )
          );
        S.value = p;
      } else if (S.value = p.format(e.formatter.date), y())
        a("update:modelValue", [S.value]);
      else if (h()) {
        const k = {}, [n] = Object.keys(e.modelValue);
        k[n] = S.value, a("update:modelValue", k);
      } else
        a("update:modelValue", S.value);
      c && c();
    }, re = (c) => {
      if (!D())
        return !1;
      if (I.value)
        O.value = [I.value, c];
      else
        return O.value = [], !1;
    }, ie = (c) => {
      if (I.value && e.autoApply)
        return !1;
      let p, k;
      if (O.value.length > 1) {
        const [n, m] = O.value;
        p = d(n, e.formatter.date, !0), k = d(m, e.formatter.date, !0);
      } else if (y())
        if (e.autoApply) {
          const [n, m] = e.modelValue;
          p = n && d(n, e.formatter.date, !0), k = m && d(m, e.formatter.date, !0);
        } else {
          const [n, m] = b.value;
          p = d(n, e.formatter.date, !0), k = d(m, e.formatter.date, !0);
        }
      else if (h())
        if (e.autoApply) {
          if (e.modelValue) {
            const [n, m] = Object.values(e.modelValue);
            p = n && d(n, e.formatter.date, !0), k = m && d(m, e.formatter.date, !0);
          }
        } else {
          const [n, m] = b.value;
          p = d(n, e.formatter.date, !0), k = d(m, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [n, m] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        p = n && d(n, e.formatter.date, !0), k = m && d(m, e.formatter.date, !0);
      } else {
        const [n, m] = b.value;
        p = d(n, e.formatter.date, !0), k = d(m, e.formatter.date, !0);
      }
      return p && k ? x(c, {
        previous: p,
        next: k
      }) : !1;
    }, ge = (c) => {
      const { today: p, active: k, off: n, disabled: m } = c;
      let N, H, Q;
      if (D())
        if (y())
          if (T.value) {
            const [U, X] = O.value;
            H = U && d(U, e.formatter.date, !0), Q = X && d(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue;
            H = U && d(U, e.formatter.date, !0), Q = X && d(X, e.formatter.date, !0);
          } else {
            const [U, X] = b.value;
            H = U && d(U, e.formatter.date, !0), Q = X && d(X, e.formatter.date, !0);
          }
        else if (h())
          if (T.value) {
            const [U, X] = O.value;
            H = U && d(U, e.formatter.date, !0), Q = X && d(X, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, X] = e.modelValue ? Object.values(e.modelValue) : [!1, !1];
            H = U && d(U, e.formatter.date, !0), Q = X && d(X, e.formatter.date, !0);
          } else {
            const [U, X] = b.value;
            H = U && d(U, e.formatter.date, !0), Q = X && d(X, e.formatter.date, !0);
          }
        else if (T.value) {
          const [U, X] = O.value;
          H = U && d(U, e.formatter.date, !0), Q = X && d(X, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [U, X] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
          H = U && d(U, e.formatter.date, !0), Q = X && d(X, e.formatter.date, !0);
        } else {
          const [U, X] = b.value;
          H = U && d(U, e.formatter.date, !0), Q = X && d(X, e.formatter.date, !0);
        }
      else if (y())
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [U] = e.modelValue;
            H = d(U, e.formatter.date, !0);
          }
        } else {
          const [U] = b.value;
          H = U && d(U, e.formatter.date, !0);
        }
      else if (h())
        if (e.autoApply) {
          if (e.modelValue) {
            const [U] = Object.values(e.modelValue);
            H = d(U, e.formatter.date, !0);
          }
        } else {
          const [U] = b.value;
          H = U && d(U, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [U] = e.modelValue.split(e.separator);
          H = d(U, e.formatter.date, !0);
        }
      } else {
        const [U] = b.value;
        H = U && d(U, e.formatter.date, !0);
      }
      return k && (N = p ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : m ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : c.isBetween(H, Q, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), n && (N = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), H && Q && !n ? (c.isSame(H, "date") && (N = Q.isAfter(H, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", H.isSame(Q, "date") && (N = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), c.isSame(Q, "date") && (N = Q.isAfter(H, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", H.isSame(Q, "date") && (N = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : H && c.isSame(H, "date") && !n && (N = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), N;
    }, ye = (c) => {
      let p, k, n;
      if (p = "", !D())
        return p;
      if (y())
        if (O.value.length > 1) {
          const [m, N] = O.value;
          k = m && d(m, e.formatter.date, !0), n = N && d(N, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [m, N] = e.modelValue;
          k = m && d(m, e.formatter.date, !0), n = N && d(N, e.formatter.date, !0);
        } else {
          const [m, N] = b.value;
          k = m && d(m, e.formatter.date, !0), n = N && d(N, e.formatter.date, !0);
        }
      else if (h())
        if (O.value.length > 1) {
          const [m, N] = O.value;
          k = m && d(m, e.formatter.date, !0), n = N && d(N, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [m, N] = Object.values(e.modelValue);
            k = m && d(m, e.formatter.date, !0), n = N && d(N, e.formatter.date, !0);
          }
        } else {
          const [m, N] = b.value;
          k = m && d(m, e.formatter.date, !0), n = N && d(N, e.formatter.date, !0);
        }
      else if (O.value.length > 1) {
        const [m, N] = O.value;
        k = m && d(m, e.formatter.date, !0), n = N && d(N, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [m, N] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        k = m && d(m, e.formatter.date, !0), n = N && d(N, e.formatter.date, !0);
      } else {
        const [m, N] = b.value;
        k = m && d(m, e.formatter.date, !0), n = N && d(N, e.formatter.date, !0);
      }
      return k && n && (c.isSame(k, "date") ? (n.isBefore(k) && (p += " rounded-r-full inset-0"), k.isBefore(n) && (p += " rounded-l-full inset-0")) : c.isSame(n, "date") ? (n.isBefore(k) && (p += " rounded-l-full inset-0"), k.isBefore(n) && (p += " rounded-r-full inset-0")) : p += " inset-0"), p;
    }, be = (c, p) => {
      r.value.previous = d(c, e.formatter.date, !0), r.value.next = d(p, e.formatter.date, !0), (d.duration(r.value.next.diff(r.value.previous)).$d.months === 2 || d.duration(r.value.next.diff(r.value.previous)).$d.months === 1 && d.duration(r.value.next.diff(r.value.previous)).$d.days === 7) && (r.value.next = r.value.next.subtract(1, "month")), (r.value.next.isSame(r.value.previous, "month") || r.value.next.isBefore(r.value.previous)) && (r.value.next = r.value.previous.add(1, "month"));
    }, ae = (c, p) => {
      if (D())
        if (e.autoApply) {
          if (y())
            a("update:modelValue", [c, p]);
          else if (h()) {
            const k = {}, [n, m] = Object.keys(e.modelValue);
            k[n] = c, k[m] = p, a("update:modelValue", k);
          } else
            a(
              "update:modelValue",
              f(
                {
                  previous: d(c, e.formatter.date, !0),
                  next: d(p, e.formatter.date, !0)
                },
                e
              )
            );
          S.value = `${c}${e.separator}${p}`;
        } else
          b.value = [d(c, e.formatter.date, !0), d(p, e.formatter.date, !0)];
      else if (e.autoApply) {
        if (y())
          a("update:modelValue", [c]);
        else if (h()) {
          const k = {}, [n] = Object.keys(e.modelValue);
          k[n] = c, a("update:modelValue", k);
        } else
          a("update:modelValue", c);
        S.value = c;
      } else
        b.value = [d(c, e.formatter.date, !0), d(p, e.formatter.date, !0)];
      be(c, p);
    }, ne = (c) => {
      const p = d().format(e.formatter.date), k = d().format(e.formatter.date);
      ae(p, k), c && c();
    }, fe = (c) => {
      const p = d().subtract(1, "day").format(e.formatter.date), k = d().subtract(1, "day").format(e.formatter.date);
      ae(p, k), c && c();
    }, me = (c, p) => {
      const k = d().subtract(c - 1, "day").format(e.formatter.date), n = d().format(e.formatter.date);
      ae(k, n), p && p();
    }, xe = (c) => {
      const p = d().date(1).format(e.formatter.date), k = d().date(d().daysInMonth()).format(e.formatter.date);
      ae(p, k), c && c();
    }, Be = (c) => {
      const p = d().date(1).subtract(1, "month").format(e.formatter.date), k = d().date(0).format(e.formatter.date);
      ae(p, k), c && c();
    }, Fe = (c, p) => {
      let k, n;
      const [m, N] = c.atClick();
      k = d(m).format(e.formatter.date), n = d(N).format(e.formatter.date), ae(k, n), p && p();
    };
    Ft(
      () => b.value,
      (c) => {
        c.length > 0 && (i.previous.calendar = !0, i.previous.month = !1, i.previous.year = !1, i.next.calendar = !0, i.next.month = !1, i.next.year = !1);
      }
    ), we(() => {
      e.placeholder ? $.value = e.placeholder : D() ? $.value = `${e.formatter.date}${e.separator}${e.formatter.date}` : $.value = e.formatter.date;
    }), we(() => {
      const c = e.i18n;
      Ie(() => {
        const p = /* @__PURE__ */ Object.assign({ "./locale/de-at.js": () => import("./de-at.bec9399d.js"), "./locale/de-ch.js": () => import("./de-ch.896339c4.js"), "./locale/de.js": () => import("./de.9e23c92c.js"), "./locale/en.js": () => import("./en.2ebd8b28.js"), "./locale/fr-ch.js": () => import("./fr-ch.a36d0fff.js"), "./locale/fr.js": () => import("./fr.e91e57b7.js"), "./locale/it-ch.js": () => import("./it-ch.7ac257da.js"), "./locale/it.js": () => import("./it.ca70da19.js"), "./locale/tr.js": () => import("./tr.baa43ecc.js") });
        for (const k in p)
          p[k]().then(() => {
            d.locale(c);
            let n, m;
            if (D()) {
              if (y()) {
                if (e.modelValue.length > 0) {
                  const [H, Q] = e.modelValue;
                  n = d(H, e.formatter.date, !0), m = d(Q, e.formatter.date, !0);
                }
              } else if (h()) {
                if (!Nt(e.modelValue))
                  try {
                    Object.keys(e.modelValue);
                  } catch {
                    console.warn(
                      "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                      "font-style: italic; color: #42b883;",
                      ", but you pass it undefined or null."
                    ), console.warn(
                      "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                      "font-style: italic; color: #42b883;",
                      ", but you can replace manually."
                    ), a("update:modelValue", {
                      startDate: "",
                      endDate: ""
                    });
                  }
                if (e.modelValue) {
                  const [H, Q] = Object.values(e.modelValue);
                  n = H && d(H, e.formatter.date, !0), m = Q && d(Q, e.formatter.date, !0);
                }
              } else if (e.modelValue) {
                const [H, Q] = e.modelValue.split(e.separator);
                n = d(H, e.formatter.date, !0), m = d(Q, e.formatter.date, !0);
              }
              n && m ? (S.value = f(
                {
                  previous: n,
                  next: m
                },
                e
              ), m.isBefore(n, "month") ? (r.value.previous = m, r.value.next = n, r.value.year.previous = m.year(), r.value.year.next = n.year()) : m.isSame(n, "month") ? (r.value.previous = n, r.value.next = m.add(1, "month"), r.value.year.previous = n.year(), r.value.year.next = n.add(1, "year").year()) : (r.value.previous = n, r.value.next = m, r.value.year.previous = n.year(), r.value.year.next = m.year()), e.autoApply || (b.value = [n, m])) : (r.value.previous = d(e.startFrom), r.value.next = d(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            } else {
              if (y()) {
                if (e.modelValue.length > 0) {
                  const [H] = e.modelValue;
                  n = d(H, e.formatter.date, !0);
                }
              } else if (h()) {
                if (e.modelValue) {
                  const [H] = Object.values(e.modelValue);
                  n = d(H, e.formatter.date, !0);
                }
              } else if (e.modelValue.length) {
                const [H] = e.modelValue.split(e.separator);
                n = d(H, e.formatter.date, !0);
              }
              n && n.isValid() ? (S.value = M(n, e), r.value.previous = n, r.value.next = n.add(1, "month"), r.value.year.previous = n.year(), r.value.year.next = n.add(1, "year").year(), e.autoApply || (b.value = [n])) : (r.value.previous = d(e.startFrom), r.value.next = d(e.startFrom).add(1, "month"), r.value.year.previous = r.value.previous.year(), r.value.year.next = r.value.next.year());
            }
            const N = e.weekdaysSize === "min" ? d.weekdaysMin() : d.weekdaysShort();
            r.value.weeks = K() ? C(N) : N, r.value.months = e.formatter.month === "MMM" ? d.monthsShort() : d.months();
          }).catch((n) => {
            console.warn(n.message);
          });
      });
    });
    const Ne = (c) => (c && F.value === null && (F.value = w(V.value)), c && F.value ? "place-right" : "place-left"), ut = (c) => (c && F.value === null && (F.value = w(V.value)), F.value ? "left-auto right-0" : "left-0 right-auto");
    return se("isBetweenRange", ie), se("betweenRangeClasses", ye), se("datepickerClasses", ge), se("atMouseOver", re), se("setToToday", ne), se("setToYesterday", fe), se("setToLastDay", me), se("setToThisMonth", xe), se("setToLastMonth", Be), se("setToCustomShortcut", Fe), (c, p) => e.noInput ? W.value ? (z(), J("div", Mn, [
      A("div", Sn, [
        A("div", Dn, [
          e.shortcuts ? (z(), Re(it, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": D(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : he("", !0),
          A("div", On, [
            D() && !e.asSingle ? (z(), J("div", Pn, Tn)) : he("", !0),
            A("div", {
              class: _e(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": D() && !e.asSingle
              }])
            }, [
              ee(ze, {
                panel: i.previous,
                calendar: P.value.previous
              }, null, 8, ["panel", "calendar"]),
              A("div", Vn, [
                ce(ee(Ge, {
                  months: j.value,
                  "onUpdate:month": P.value.previous.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ve, i.previous.month]
                ]),
                ce(ee(Ke, {
                  years: P.value.previous.years(),
                  "onUpdate:year": P.value.previous.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ve, i.previous.year]
                ]),
                ce(A("div", null, [
                  ee(Ze, { weeks: g.value }, null, 8, ["weeks"]),
                  ee(Je, {
                    calendar: P.value.previous,
                    weeks: g.value,
                    "as-range": D(),
                    "onUpdate:date": p[2] || (p[2] = (k, n) => Z(k, n))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ve, i.previous.calendar]
                ])
              ])
            ], 2),
            D() && !e.asSingle ? (z(), J("div", Cn, [
              ee(ze, {
                "as-prev-or-next": "",
                panel: i.next,
                calendar: P.value.next
              }, null, 8, ["panel", "calendar"]),
              A("div", Yn, [
                ce(ee(Ge, {
                  months: j.value,
                  "onUpdate:month": P.value.next.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ve, i.next.month]
                ]),
                ce(ee(Ke, {
                  "as-prev-or-next": "",
                  years: P.value.next.years(),
                  "onUpdate:year": P.value.next.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ve, i.next.year]
                ]),
                ce(A("div", null, [
                  ee(Ze, { weeks: g.value }, null, 8, ["weeks"]),
                  ee(Je, {
                    "as-prev-or-next": "",
                    calendar: P.value.next,
                    weeks: g.value,
                    "as-range": D(),
                    "onUpdate:date": p[3] || (p[3] = (k, n) => Z(k, n))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ve, i.next.calendar]
                ])
              ])
            ])) : he("", !0)
          ])
        ]),
        e.autoApply ? he("", !0) : (z(), J("div", An, [
          A("div", jn, [
            A("div", En, [
              A("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? b.value.length < 1 : b.value.length < 2,
                onClick: p[4] || (p[4] = (k) => te()),
                textContent: le(e.options.footer.apply)
              }, null, 8, Ln)
            ])
          ])
        ]))
      ])
    ])) : he("", !0) : (z(), Re(ue(Ot), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "relative w-full"
    }, {
      default: je(({ open: k }) => [
        e.overlay && !e.disabled ? (z(), Re(ue(Ur), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : he("", !0),
        ee(ue(Hr), {
          as: "label",
          class: "relative block"
        }, {
          default: je(() => [
            It(c.$slots, "default", {
              value: S.value,
              placeholder: $.value,
              clear: B
            }, () => [
              ce(A("input", Rt({
                ref_key: "VtdInputRef",
                ref: Y,
                type: "text",
                class: ["relative block w-full", [
                  e.disabled ? "cursor-default opacity-50" : "opacity-100",
                  t.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: e.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other"
              }, c.$attrs, {
                "onUpdate:modelValue": p[0] || (p[0] = (n) => S.value = n),
                placeholder: $.value,
                onKeyup: G
              }), null, 16, en), [
                [Ht, S.value]
              ]),
              A("div", tn, [
                A("button", {
                  type: "button",
                  disabled: e.disabled,
                  class: _e([e.disabled ? "cursor-default opacity-50" : "opacity-100", "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"]),
                  onClick: p[1] || (p[1] = (n) => e.disabled ? !1 : S.value ? B() : c.$refs.VtdInputRef.focus())
                }, [
                  (z(), J("svg", nn, [
                    S.value ? (z(), J("path", an)) : (z(), J("path", on))
                  ]))
                ], 10, rn)
              ])
            ])
          ]),
          _: 3
        }),
        ee(ft, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: je(() => [
            e.disabled ? he("", !0) : (z(), Re(ue(Wr), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: je(({ close: n }) => [
                A("div", {
                  class: _e(["absolute z-50 top-full sm:mt-2.5", ut(k)])
                }, [
                  A("div", {
                    ref_key: "VtdRef",
                    ref: V,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    A("div", {
                      class: _e(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", Ne(k)])
                    }, [
                      A("div", sn, [
                        e.shortcuts ? (z(), Re(it, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": D(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: n
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : he("", !0),
                        A("div", ln, [
                          D() && !e.asSingle ? (z(), J("div", un, cn)) : he("", !0),
                          A("div", {
                            class: _e(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": D() && !e.asSingle,
                              "w-full": !D() && e.asSingle
                            }])
                          }, [
                            ee(ze, {
                              panel: i.previous,
                              calendar: P.value.previous
                            }, null, 8, ["panel", "calendar"]),
                            A("div", fn, [
                              ce(ee(Ge, {
                                months: j.value,
                                "onUpdate:month": P.value.previous.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ve, i.previous.month]
                              ]),
                              ce(ee(Ke, {
                                years: P.value.previous.years(),
                                "onUpdate:year": P.value.previous.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ve, i.previous.year]
                              ]),
                              ce(A("div", null, [
                                ee(Ze, { weeks: g.value }, null, 8, ["weeks"]),
                                ee(Je, {
                                  calendar: P.value.previous,
                                  weeks: g.value,
                                  "as-range": D(),
                                  "onUpdate:date": (m, N) => Z(m, N, n)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ve, i.previous.calendar]
                              ])
                            ])
                          ], 2),
                          D() && !e.asSingle ? (z(), J("div", vn, [
                            ee(ze, {
                              "as-prev-or-next": "",
                              panel: i.next,
                              calendar: P.value.next
                            }, null, 8, ["panel", "calendar"]),
                            A("div", pn, [
                              ce(ee(Ge, {
                                months: j.value,
                                "onUpdate:month": P.value.next.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ve, i.next.month]
                              ]),
                              ce(ee(Ke, {
                                "as-prev-or-next": "",
                                years: P.value.next.years(),
                                "onUpdate:year": P.value.next.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ve, i.next.year]
                              ]),
                              ce(A("div", null, [
                                ee(Ze, { weeks: g.value }, null, 8, ["weeks"]),
                                ee(Je, {
                                  "as-prev-or-next": "",
                                  calendar: P.value.next,
                                  weeks: g.value,
                                  "as-range": D(),
                                  "onUpdate:date": (m, N) => Z(m, N, n)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ve, i.next.calendar]
                              ])
                            ])
                          ])) : he("", !0)
                        ])
                      ]),
                      e.autoApply ? (z(), J("div", xn, [
                        A("div", wn, [
                          A("div", kn, [
                            A("button", {
                              type: "button",
                              onClick: (m) => n(),
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: le(e.options.footer.cancel)
                            }, null, 8, $n)
                          ])
                        ])
                      ])) : (z(), J("div", mn, [
                        A("div", hn, [
                          A("div", yn, [
                            A("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? b.value.length < 1 : b.value.length < 2,
                              onClick: (m) => te(n),
                              textContent: le(e.options.footer.apply)
                            }, null, 8, gn),
                            A("button", {
                              type: "button",
                              onClick: (m) => n(),
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: le(e.options.footer.cancel)
                            }, null, 8, bn)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
}, Nn = /* @__PURE__ */ (() => {
  const t = Bn;
  return t.install = (o) => {
    o.component("VueTailwindDatepicker", t);
  }, t;
})();
export {
  d,
  Nn as e
};
