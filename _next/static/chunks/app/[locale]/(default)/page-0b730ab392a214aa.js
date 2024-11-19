(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [815],
  {
    2766: function (e, t, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var a = r(9290),
        i = r(6319);
      function s(e) {
        let { locale: t, ...r } = e;
        if (!t)
          throw Error(
            "Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale"
          );
        return a.createElement(i.IntlProvider, n({ locale: t }, r));
      }
    },
    5199: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 4243)),
        Promise.resolve().then(r.bind(r, 6568)),
        Promise.resolve().then(r.bind(r, 2766)),
        Promise.resolve().then(r.t.bind(r, 6861, 23)),
        Promise.resolve().then(r.t.bind(r, 2190, 23)),
        Promise.resolve().then(r.t.bind(r, 1665, 23));
    },
    4243: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(3769),
        a = r(780),
        i = r(9290);
      let s = {
        x: [
          { id: "x1", value: "00", imgSrc: "note/00.svg" },
          { id: "x2", value: "11", imgSrc: "note/11.svg" },
          { id: "x3", value: "10", imgSrc: "note/10.svg" },
          { id: "x4", value: "22", imgSrc: "note/22.svg" },
          { id: "x5", value: "21", imgSrc: "note/21.svg" },
          { id: "x6", value: "20", imgSrc: "note/20.svg" },
        ],
        y: [
          { id: "y1", value: "00", imgSrc: "note/00.svg" },
          { id: "y2", value: "11", imgSrc: "note/11.svg" },
          { id: "y3", value: "10", imgSrc: "note/10.svg" },
          { id: "y4", value: "22", imgSrc: "note/22.svg" },
          { id: "y5", value: "21", imgSrc: "note/21.svg" },
          { id: "y6", value: "20", imgSrc: "note/20.svg" },
        ],
        z: [
          { id: "z1", value: "00", imgSrc: "note/00.svg" },
          { id: "z2", value: "11", imgSrc: "note/11.svg" },
          { id: "z3", value: "10", imgSrc: "note/10.svg" },
          { id: "z4", value: "22", imgSrc: "note/22.svg" },
          { id: "z5", value: "21", imgSrc: "note/21.svg" },
          { id: "z6", value: "20", imgSrc: "note/20.svg" },
        ],
      };
      t.default = () => {
        let e = (0, a.useTranslations)("calculator"),
          [t, r] = (0, i.useState)({ x: null, y: null, z: null }),
          [l, o] = (0, i.useState)(["--", "--", "--"]),
          c = (e, n) => {
            let a = { ...t, [e]: n };
            r(a), d(a);
          };
        (0, i.useEffect)(() => {
          let e = {};
          Object.keys(s).forEach((t) => {
            e[t] = s[t][0].value;
          }),
            r(e),
            d(e);
        }, []);
        let d = (e) => {
          let t = parseInt(e.x || "NaN"),
            r = parseInt(e.y || "NaN"),
            n = parseInt(e.z || "NaN");
          isNaN(t) ||
            isNaN(r) ||
            isNaN(n) ||
            o([
              String(Math.abs(2 * t + 11)).padStart(2, "0"),
              String(Math.abs(2 * n + r - 5)).padStart(2, "0"),
              String(Math.abs(r + n - t)).padStart(2, "0"),
            ]);
        };
        return (0, n.jsxs)("div", {
          className:
            "max-w-7xl flex flex-col justify-start items-center space-y-4",
          children: [
            (0, n.jsx)("div", {
              className: "w-full flex justify-center space-x-8",
              children: Object.entries(s).map((e) => {
                let [r, a] = e;
                return (0, n.jsxs)(
                  "div",
                  {
                    className:
                      "flex flex-col items-center space-y-4 option-group text-4xl",
                    children: [
                      (0, n.jsxs)("span", {
                        className: "font-bold",
                        children: [r.toUpperCase(), ":"],
                      }),
                      (0, n.jsx)("div", {
                        className: "grid grid-cols-2 grid-rows-3 gap-3",
                        id: "".concat(r, "-selector"),
                        children: a.map((e) => {
                          let { id: a, value: i, imgSrc: s } = e;
                          return (0, n.jsxs)(
                            "div",
                            {
                              className:
                                "image-container flex flex-col items-center",
                              children: [
                                (0, n.jsx)("input", {
                                  type: "radio",
                                  id: a,
                                  name: r,
                                  value: i,
                                  className: "hidden",
                                  onChange: () => c(r, i),
                                }),
                                (0, n.jsxs)("label", {
                                  htmlFor: a,
                                  className:
                                    "relative cursor-pointer border-4 shadow-md bg-white w-20 h-20 ".concat(
                                      t[r] === i
                                        ? "border-blue-400"
                                        : "border-transparent"
                                    ),
                                  children: [
                                    (0, n.jsx)("img", {
                                      draggable: !1,
                                      src: s,
                                      alt: i,
                                      className:
                                        "absolute inset-0 w-20 h-20 transition-opacity duration-300 ".concat(
                                          t[r] === i
                                            ? "opacity-70"
                                            : "opacity-100"
                                        ),
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "absolute inset-0 bg-black transition-opacity duration-300 ".concat(
                                          t[r] === i
                                            ? "opacity-30"
                                            : "opacity-0"
                                        ),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            a
                          );
                        }),
                      }),
                    ],
                  },
                  r
                );
              }),
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col items-center space-y-4",
              children: [
                (0, n.jsx)("span", {
                  className:
                    "font-semibold text-center text-3xl text-[#636262]",
                  children: e("answer"),
                }),
                (0, n.jsx)("div", {
                  className: "answer flex space-x-8",
                  children: l.map((e, t) =>
                    (0, n.jsx)(
                      "span",
                      {
                        id: "ans".concat(t + 1),
                        className:
                          "text-5xl font-bold text-primary underline underline-offset-8",
                        children: e,
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      };
    },
    6568: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Separator: function () {
            return l;
          },
        });
      var n = r(3769),
        a = r(9290),
        i = r(3197),
        s = r(5875);
      let l = a.forwardRef((e, t) => {
        let {
          className: r,
          orientation: a = "horizontal",
          decorative: l = !0,
          ...o
        } = e;
        return (0, n.jsx)(i.f, {
          ref: t,
          decorative: l,
          orientation: a,
          className: (0, s.cn)(
            "shrink-0 bg-border",
            "horizontal" === a ? "h-[1px] w-full" : "h-full w-[1px]",
            r
          ),
          ...o,
        });
      });
      l.displayName = i.f.displayName;
    },
    5875: function (e, t, r) {
      "use strict";
      r.d(t, {
        cn: function () {
          return i;
        },
      });
      var n = r(2856),
        a = r(7598);
      function i() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, a.m6)((0, n.W)(t));
      }
    },
    581: function (e, t, r) {
      "use strict";
      r.d(t, {
        WV: function () {
          return l;
        },
        jH: function () {
          return o;
        },
      });
      var n = r(9290),
        a = r(3209),
        i = r(6812),
        s = r(3769),
        l = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = n.forwardRef((e, r) => {
            let { asChild: n, ...a } = e,
              l = n ? i.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, s.jsx)(l, { ...a, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {});
      function o(e, t) {
        e && a.flushSync(() => e.dispatchEvent(t));
      }
    },
    3197: function (e, t, r) {
      "use strict";
      r.d(t, {
        f: function () {
          return c;
        },
      });
      var n = r(9290),
        a = r(581),
        i = r(3769),
        s = "horizontal",
        l = ["horizontal", "vertical"],
        o = n.forwardRef((e, t) => {
          let { decorative: r, orientation: n = s, ...o } = e,
            c = l.includes(n) ? n : s;
          return (0, i.jsx)(a.WV.div, {
            "data-orientation": c,
            ...(r
              ? { role: "none" }
              : {
                  "aria-orientation": "vertical" === c ? c : void 0,
                  role: "separator",
                }),
            ...o,
            ref: t,
          });
        });
      o.displayName = "Separator";
      var c = o;
    },
  },
  function (e) {
    e.O(0, [541, 6, 983, 744], function () {
      return e((e.s = 5199));
    }),
      (_N_E = e.O());
  },
]);
