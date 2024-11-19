(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [946, 409],
  {
    9582: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 4243)),
        Promise.resolve().then(a.bind(a, 6568)),
        Promise.resolve().then(a.t.bind(a, 6861, 23)),
        Promise.resolve().then(a.t.bind(a, 2190, 23)),
        Promise.resolve().then(a.t.bind(a, 1665, 23));
    },
    4243: function (e, t, a) {
      "use strict";
      a.r(t);
      var r = a(3769),
        i = a(780),
        n = a(9290);
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
        let e = (0, i.useTranslations)("calculator"),
          [t, a] = (0, n.useState)({ x: null, y: null, z: null }),
          [l, o] = (0, n.useState)(["--", "--", "--"]),
          c = (e, r) => {
            let i = { ...t, [e]: r };
            a(i), d(i);
          };
        (0, n.useEffect)(() => {
          let e = {};
          Object.keys(s).forEach((t) => {
            e[t] = s[t][0].value;
          }),
            a(e),
            d(e);
        }, []);
        let d = (e) => {
          let t = parseInt(e.x || "NaN"),
            a = parseInt(e.y || "NaN"),
            r = parseInt(e.z || "NaN");
          isNaN(t) ||
            isNaN(a) ||
            isNaN(r) ||
            o([
              String(Math.abs(2 * t + 11)).padStart(2, "0"),
              String(Math.abs(2 * r + a - 5)).padStart(2, "0"),
              String(Math.abs(a + r - t)).padStart(2, "0"),
            ]);
        };
        return (0, r.jsxs)("div", {
          className:
            "max-w-7xl flex flex-col justify-start items-center space-y-4",
          children: [
            (0, r.jsx)("div", {
              className: "w-full flex justify-center space-x-8",
              children: Object.entries(s).map((e) => {
                let [a, i] = e;
                return (0, r.jsxs)(
                  "div",
                  {
                    className:
                      "flex flex-col items-center space-y-4 option-group text-4xl",
                    children: [
                      (0, r.jsxs)("span", {
                        className: "font-bold",
                        children: [a.toUpperCase(), ":"],
                      }),
                      (0, r.jsx)("div", {
                        className: "grid grid-cols-2 grid-rows-3 gap-3",
                        id: "".concat(a, "-selector"),
                        children: i.map((e) => {
                          let { id: i, value: n, imgSrc: s } = e;
                          return (0, r.jsxs)(
                            "div",
                            {
                              className:
                                "image-container flex flex-col items-center",
                              children: [
                                (0, r.jsx)("input", {
                                  type: "radio",
                                  id: i,
                                  name: a,
                                  value: n,
                                  className: "hidden",
                                  onChange: () => c(a, n),
                                }),
                                (0, r.jsxs)("label", {
                                  htmlFor: i,
                                  className:
                                    "relative cursor-pointer border-4 shadow-md bg-white w-20 h-20 ".concat(
                                      t[a] === n
                                        ? "border-blue-400"
                                        : "border-transparent"
                                    ),
                                  children: [
                                    (0, r.jsx)("img", {
                                      draggable: !1,
                                      src: s,
                                      alt: n,
                                      className:
                                        "absolute inset-0 w-20 h-20 transition-opacity duration-300 ".concat(
                                          t[a] === n
                                            ? "opacity-70"
                                            : "opacity-100"
                                        ),
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "absolute inset-0 bg-black transition-opacity duration-300 ".concat(
                                          t[a] === n
                                            ? "opacity-30"
                                            : "opacity-0"
                                        ),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            i
                          );
                        }),
                      }),
                    ],
                  },
                  a
                );
              }),
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col items-center space-y-4",
              children: [
                (0, r.jsx)("span", {
                  className:
                    "font-semibold text-center text-3xl text-[#636262]",
                  children: e("answer"),
                }),
                (0, r.jsx)("div", {
                  className: "answer flex space-x-8",
                  children: l.map((e, t) =>
                    (0, r.jsx)(
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
    6568: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          Separator: function () {
            return l;
          },
        });
      var r = a(3769),
        i = a(9290),
        n = a(3197),
        s = a(5875);
      let l = i.forwardRef((e, t) => {
        let {
          className: a,
          orientation: i = "horizontal",
          decorative: l = !0,
          ...o
        } = e;
        return (0, r.jsx)(n.f, {
          ref: t,
          decorative: l,
          orientation: i,
          className: (0, s.cn)(
            "shrink-0 bg-border",
            "horizontal" === i ? "h-[1px] w-full" : "h-full w-[1px]",
            a
          ),
          ...o,
        });
      });
      l.displayName = n.f.displayName;
    },
    5875: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return n;
        },
      });
      var r = a(2856),
        i = a(7598);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, i.m6)((0, r.W)(t));
      }
    },
    581: function (e, t, a) {
      "use strict";
      a.d(t, {
        WV: function () {
          return l;
        },
        jH: function () {
          return o;
        },
      });
      var r = a(9290),
        i = a(3209),
        n = a(6812),
        s = a(3769),
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
          let a = r.forwardRef((e, a) => {
            let { asChild: r, ...i } = e,
              l = r ? n.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, s.jsx)(l, { ...i, ref: a })
            );
          });
          return (a.displayName = `Primitive.${t}`), { ...e, [t]: a };
        }, {});
      function o(e, t) {
        e && i.flushSync(() => e.dispatchEvent(t));
      }
    },
    3197: function (e, t, a) {
      "use strict";
      a.d(t, {
        f: function () {
          return c;
        },
      });
      var r = a(9290),
        i = a(581),
        n = a(3769),
        s = "horizontal",
        l = ["horizontal", "vertical"],
        o = r.forwardRef((e, t) => {
          let { decorative: a, orientation: r = s, ...o } = e,
            c = l.includes(r) ? r : s;
          return (0, n.jsx)(i.WV.div, {
            "data-orientation": c,
            ...(a
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
      return e((e.s = 9582));
    }),
      (_N_E = e.O());
  },
]);
