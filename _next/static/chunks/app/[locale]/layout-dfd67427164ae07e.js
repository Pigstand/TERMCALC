(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [203],
  {
    7102: function (e, t, r) {
      "use strict";
      function a(e, t) {
        var r = t && t.cache ? t.cache : l,
          a = t && t.serializer ? t.serializer : i;
        return (
          t && t.strategy
            ? t.strategy
            : function (e, t) {
                var r,
                  a,
                  i = 1 === e.length ? o : n;
                return (
                  (r = t.cache.create()),
                  (a = t.serializer),
                  i.bind(this, e, r, a)
                );
              }
        )(e, { cache: r, serializer: a });
      }
      function o(e, t, r, a) {
        var o =
            null == a || "number" == typeof a || "boolean" == typeof a
              ? a
              : r(a),
          n = t.get(o);
        return void 0 === n && ((n = e.call(this, a)), t.set(o, n)), n;
      }
      function n(e, t, r) {
        var a = Array.prototype.slice.call(arguments, 3),
          o = r(a),
          n = t.get(o);
        return void 0 === n && ((n = e.apply(this, a)), t.set(o, n)), n;
      }
      r.r(t),
        r.d(t, {
          memoize: function () {
            return a;
          },
          strategies: function () {
            return c;
          },
        });
      var i = function () {
        return JSON.stringify(arguments);
      };
      function s() {
        this.cache = Object.create(null);
      }
      (s.prototype.get = function (e) {
        return this.cache[e];
      }),
        (s.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var l = {
          create: function () {
            return new s();
          },
        },
        c = {
          variadic: function (e, t) {
            var r, a;
            return (
              (r = t.cache.create()), (a = t.serializer), n.bind(this, e, r, a)
            );
          },
          monadic: function (e, t) {
            var r, a;
            return (
              (r = t.cache.create()), (a = t.serializer), o.bind(this, e, r, a)
            );
          },
        };
    },
    2766: function (e, t, r) {
      "use strict";
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r)
                  ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }).apply(null, arguments);
      }
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        });
      var o = r(9290),
        n = r(6319);
      function i(e) {
        let { locale: t, ...r } = e;
        if (!t)
          throw Error(
            "Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale"
          );
        return o.createElement(n.IntlProvider, a({ locale: t }, r));
      }
    },
    2710: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 1872, 23)),
        Promise.resolve().then(r.bind(r, 2639)),
        Promise.resolve().then(r.bind(r, 2766)),
        Promise.resolve().then(r.t.bind(r, 6861, 23)),
        Promise.resolve().then(r.t.bind(r, 2190, 23)),
        Promise.resolve().then(r.t.bind(r, 1665, 23)),
        Promise.resolve().then(r.bind(r, 2200)),
        Promise.resolve().then(r.bind(r, 1810)),
        Promise.resolve().then(r.bind(r, 6879));
    },
    2639: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AppContext: function () {
            return c;
          },
          AppContextProvider: function () {
            return u;
          },
          useAppContext: function () {
            return l;
          },
        });
      var a = r(3769);
      let o = () => Date.parse(new Date().toUTCString()) / 1e3,
        n = (e) => {
          let t = localStorage.getItem(e);
          if (!t) return null;
          let r = t.split(":");
          if (!r || r.length < 2) return null;
          let a = Number(r[0]),
            n = o();
          if (-1 !== a && a < n) return i(e), null;
          let s = r[0] + ":";
          return t.replace(s, "");
        },
        i = (e) => {
          localStorage.removeItem(e);
        };
      var s = r(9290);
      let l = () => (0, s.useContext)(c),
        c = (0, s.createContext)({}),
        u = (e) => {
          let { children: t } = e,
            [r, o] = (0, s.useState)("light"),
            [i, l] = (0, s.useState)(
              window.localStorage.getItem("locale") || "en"
            ),
            [u, d] = (0, s.useState)(!1),
            [p, f] = (0, s.useState)(!1),
            [m, g] = (0, s.useState)(null),
            [h, y] = (0, s.useState)(null),
            [b, v] = (0, s.useState)([]),
            [x, w] = (0, s.useState)(!1),
            E = async () => {
              try {
                let e = await fetch("/api/get-user-credits", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                  }),
                  { data: t } = await e.json();
                if ((console.log("user credits", t), t)) {
                  y(t);
                  let e = t.temporary_credits > 0;
                  w(e);
                }
              } catch (e) {
                console.log("get user credits failed:", e);
              }
            };
          return (
            (0, s.useEffect)(() => {
              i &&
                (window.localStorage.setItem("locale", i),
                console.log("Locale updated:", i));
            }, [i]),
            (0, s.useEffect)(() => {
              let e = n("THEME");
              if (e && ["dark", "light"].includes(e)) {
                o(e);
                return;
              }
              let t = window.matchMedia("(prefers-color-scheme: dark)");
              o(t.matches ? "dark" : "light");
              let r = () => {
                o(t.matches ? "dark" : "light");
              };
              return (
                t.addListener(r),
                () => {
                  t.removeListener(r);
                }
              );
            }, []),
            (0, s.useEffect)(() => {
              h && w(h.temporary_credits > 0);
            }, [h]),
            (0, a.jsx)(c.Provider, {
              value: {
                theme: r,
                setTheme: o,
                locale: i,
                setLocale: l,
                isSiderOpen: u,
                setIsSiderOpen: d,
                isShowSignPanel: p,
                setIsShowSignPanel: f,
                user: m,
                setUser: g,
                userCredits: h,
                setUserCredits: y,
                predictions: b,
                setPredictions: v,
                fetchUserCredits: E,
                isPaidUser: x,
                setIsPaidUser: w,
              },
              children: t,
            })
          );
        };
    },
    1810: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          NextAuthSessionProvider: function () {
            return n;
          },
        });
      var a = r(3769),
        o = r(833);
      function n(e) {
        let { children: t } = e;
        return (0, a.jsx)(o.eA, { children: t });
      }
    },
    6879: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ThemeProvider: function () {
            return i;
          },
        });
      var a = r(3769),
        o = r(2639),
        n = r(9290);
      function i(e) {
        let { children: t } = e,
          { theme: r } = (0, n.useContext)(o.AppContext);
        return (0, a.jsx)("body", {
          className: "w-screen h-screen",
          "data-theme": r,
          children: t,
        });
      }
    },
    1872: function () {},
    1094: function (e, t, r) {
      "use strict";
      let a = r(9290).createContext(void 0);
      t.IntlContext = a;
    },
    6319: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = r(9290),
        o = r(4490),
        n = r(1094);
      r(7102);
      var i = a && a.__esModule ? a : { default: a };
      t.IntlProvider = function (e) {
        let {
            children: t,
            defaultTranslationValues: r,
            formats: s,
            getMessageFallback: l,
            locale: c,
            messages: u,
            now: d,
            onError: p,
            timeZone: f,
          } = e,
          m = a.useMemo(() => o.createCache(), [c]),
          g = a.useMemo(() => o.createIntlFormatters(m), [m]),
          h = a.useMemo(
            () => ({
              ...o.initializeConfig({
                locale: c,
                defaultTranslationValues: r,
                formats: s,
                getMessageFallback: l,
                messages: u,
                now: d,
                onError: p,
                timeZone: f,
              }),
              formatters: g,
              cache: m,
            }),
            [m, r, s, g, l, c, u, d, p, f]
          );
        return i.default.createElement(n.IntlContext.Provider, { value: h }, t);
      };
    },
    4490: function (e, t, r) {
      "use strict";
      var a = r(7102);
      function o() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return t.filter(Boolean).join(".");
      }
      function n(e) {
        return o(e.namespace, e.key);
      }
      function i(e) {
        console.error(e);
      }
      function s(e, t) {
        return a.memoize(e, {
          cache: {
            create: () => ({
              get: (e) => t[e],
              set(e, r) {
                t[e] = r;
              },
            }),
          },
          strategy: a.strategies.variadic,
        });
      }
      function l(e, t) {
        return s(function () {
          for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)
            r[a] = arguments[a];
          return new e(...r);
        }, t);
      }
      (t.createCache = function () {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {},
        };
      }),
        (t.createIntlFormatters = function (e) {
          return {
            getDateTimeFormat: l(Intl.DateTimeFormat, e.dateTime),
            getNumberFormat: l(Intl.NumberFormat, e.number),
            getPluralRules: l(Intl.PluralRules, e.pluralRules),
            getRelativeTimeFormat: l(Intl.RelativeTimeFormat, e.relativeTime),
            getListFormat: l(Intl.ListFormat, e.list),
            getDisplayNames: l(Intl.DisplayNames, e.displayNames),
          };
        }),
        (t.defaultGetMessageFallback = n),
        (t.defaultOnError = i),
        (t.initializeConfig = function (e) {
          let { getMessageFallback: t, messages: r, onError: a, ...o } = e;
          return {
            ...o,
            messages: r,
            onError: a || i,
            getMessageFallback: t || n,
          };
        }),
        (t.joinPath = o),
        (t.memoFn = s);
    },
    2200: function (e, t, r) {
      "use strict";
      let a, o;
      r.r(t),
        r.d(t, {
          CheckmarkIcon: function () {
            return K;
          },
          ErrorIcon: function () {
            return Z;
          },
          LoaderIcon: function () {
            return G;
          },
          ToastBar: function () {
            return es;
          },
          ToastIcon: function () {
            return et;
          },
          Toaster: function () {
            return ed;
          },
          default: function () {
            return ep;
          },
          resolveValue: function () {
            return C;
          },
          toast: function () {
            return _;
          },
          useToaster: function () {
            return H;
          },
          useToasterStore: function () {
            return A;
          },
        });
      var n,
        i = r(9290);
      let s = { data: "" },
        l = (e) =>
          "object" == typeof window
            ? (
                (e ? e.querySelector("#_goober") : window._goober) ||
                Object.assign(
                  (e || document.head).appendChild(
                    document.createElement("style")
                  ),
                  { innerHTML: " ", id: "_goober" }
                )
              ).firstChild
            : e || s,
        c = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        u = /\/\*[^]*?\*\/|  +/g,
        d = /\n+/g,
        p = (e, t) => {
          let r = "",
            a = "",
            o = "";
          for (let n in e) {
            let i = e[n];
            "@" == n[0]
              ? "i" == n[1]
                ? (r = n + " " + i + ";")
                : (a +=
                    "f" == n[1]
                      ? p(i, n)
                      : n + "{" + p(i, "k" == n[1] ? "" : t) + "}")
              : "object" == typeof i
              ? (a += p(
                  i,
                  t
                    ? t.replace(/([^,])+/g, (e) =>
                        n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t) =>
                          /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t
                        )
                      )
                    : n
                ))
              : null != i &&
                ((n = /^--/.test(n)
                  ? n
                  : n.replace(/[A-Z]/g, "-$&").toLowerCase()),
                (o += p.p ? p.p(n, i) : n + ":" + i + ";"));
          }
          return r + (t && o ? t + "{" + o + "}" : o) + a;
        },
        f = {},
        m = (e) => {
          if ("object" == typeof e) {
            let t = "";
            for (let r in e) t += r + m(e[r]);
            return t;
          }
          return e;
        },
        g = (e, t, r, a, o) => {
          var n;
          let i = m(e),
            s =
              f[i] ||
              (f[i] = ((e) => {
                let t = 0,
                  r = 11;
                for (; t < e.length; ) r = (101 * r + e.charCodeAt(t++)) >>> 0;
                return "go" + r;
              })(i));
          if (!f[s]) {
            let t =
              i !== e
                ? e
                : ((e) => {
                    let t,
                      r,
                      a = [{}];
                    for (; (t = c.exec(e.replace(u, ""))); )
                      t[4]
                        ? a.shift()
                        : t[3]
                        ? ((r = t[3].replace(d, " ").trim()),
                          a.unshift((a[0][r] = a[0][r] || {})))
                        : (a[0][t[1]] = t[2].replace(d, " ").trim());
                    return a[0];
                  })(e);
            f[s] = p(o ? { ["@keyframes " + s]: t } : t, r ? "" : "." + s);
          }
          let l = r && f.g ? f.g : null;
          return (
            r && (f.g = f[s]),
            (n = f[s]),
            l
              ? (t.data = t.data.replace(l, n))
              : -1 === t.data.indexOf(n) &&
                (t.data = a ? n + t.data : t.data + n),
            s
          );
        },
        h = (e, t, r) =>
          e.reduce((e, a, o) => {
            let n = t[o];
            if (n && n.call) {
              let e = n(r),
                t = (e && e.props && e.props.className) || (/^go/.test(e) && e);
              n = t
                ? "." + t
                : e && "object" == typeof e
                ? e.props
                  ? ""
                  : p(e, "")
                : !1 === e
                ? ""
                : e;
            }
            return e + a + (null == n ? "" : n);
          }, "");
      function y(e) {
        let t = this || {},
          r = e.call ? e(t.p) : e;
        return g(
          r.unshift
            ? r.raw
              ? h(r, [].slice.call(arguments, 1), t.p)
              : r.reduce(
                  (e, r) => Object.assign(e, r && r.call ? r(t.p) : r),
                  {}
                )
            : r,
          l(t.target),
          t.g,
          t.o,
          t.k
        );
      }
      y.bind({ g: 1 });
      let b,
        v,
        x,
        w = y.bind({ k: 1 });
      function E(e, t) {
        let r = this || {};
        return function () {
          let a = arguments;
          function o(n, i) {
            let s = Object.assign({}, n),
              l = s.className || o.className;
            (r.p = Object.assign({ theme: v && v() }, s)),
              (r.o = / *go\d+/.test(l)),
              (s.className = y.apply(r, a) + (l ? " " + l : "")),
              t && (s.ref = i);
            let c = e;
            return (
              e[0] && ((c = s.as || e), delete s.as), x && c[0] && x(s), b(c, s)
            );
          }
          return t ? t(o) : o;
        };
      }
      var k = (e) => "function" == typeof e,
        C = (e, t) => (k(e) ? e(t) : e),
        P = ((a = 0), () => (++a).toString()),
        I = () => {
          if (void 0 === o && "u" > typeof window) {
            let e = matchMedia("(prefers-reduced-motion: reduce)");
            o = !e || e.matches;
          }
          return o;
        },
        T = new Map(),
        N = (e) => {
          if (T.has(e)) return;
          let t = setTimeout(() => {
            T.delete(e), z({ type: 4, toastId: e });
          }, 1e3);
          T.set(e, t);
        },
        j = (e) => {
          let t = T.get(e);
          t && clearTimeout(t);
        },
        O = (e, t) => {
          switch (t.type) {
            case 0:
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 20) };
            case 1:
              return (
                t.toast.id && j(t.toast.id),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === t.toast.id ? { ...e, ...t.toast } : e
                  ),
                }
              );
            case 2:
              let { toast: r } = t;
              return e.toasts.find((e) => e.id === r.id)
                ? O(e, { type: 1, toast: r })
                : O(e, { type: 0, toast: r });
            case 3:
              let { toastId: a } = t;
              return (
                a
                  ? N(a)
                  : e.toasts.forEach((e) => {
                      N(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === a || void 0 === a ? { ...e, visible: !1 } : e
                  ),
                }
              );
            case 4:
              return void 0 === t.toastId
                ? { ...e, toasts: [] }
                : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
            case 5:
              return { ...e, pausedAt: t.time };
            case 6:
              let o = t.time - (e.pausedAt || 0);
              return {
                ...e,
                pausedAt: void 0,
                toasts: e.toasts.map((e) => ({
                  ...e,
                  pauseDuration: e.pauseDuration + o,
                })),
              };
          }
        },
        S = [],
        F = { toasts: [], pausedAt: void 0 },
        z = (e) => {
          (F = O(F, e)),
            S.forEach((e) => {
              e(F);
            });
        },
        $ = {
          blank: 4e3,
          error: 4e3,
          success: 2e3,
          loading: 1 / 0,
          custom: 4e3,
        },
        A = (e = {}) => {
          let [t, r] = (0, i.useState)(F);
          (0, i.useEffect)(
            () => (
              S.push(r),
              () => {
                let e = S.indexOf(r);
                e > -1 && S.splice(e, 1);
              }
            ),
            [t]
          );
          let a = t.toasts.map((t) => {
            var r, a;
            return {
              ...e,
              ...e[t.type],
              ...t,
              duration:
                t.duration ||
                (null == (r = e[t.type]) ? void 0 : r.duration) ||
                (null == e ? void 0 : e.duration) ||
                $[t.type],
              style: {
                ...e.style,
                ...(null == (a = e[t.type]) ? void 0 : a.style),
                ...t.style,
              },
            };
          });
          return { ...t, toasts: a };
        },
        M = (e, t = "blank", r) => ({
          createdAt: Date.now(),
          visible: !0,
          type: t,
          ariaProps: { role: "status", "aria-live": "polite" },
          message: e,
          pauseDuration: 0,
          ...r,
          id: (null == r ? void 0 : r.id) || P(),
        }),
        D = (e) => (t, r) => {
          let a = M(t, e, r);
          return z({ type: 2, toast: a }), a.id;
        },
        _ = (e, t) => D("blank")(e, t);
      (_.error = D("error")),
        (_.success = D("success")),
        (_.loading = D("loading")),
        (_.custom = D("custom")),
        (_.dismiss = (e) => {
          z({ type: 3, toastId: e });
        }),
        (_.remove = (e) => z({ type: 4, toastId: e })),
        (_.promise = (e, t, r) => {
          let a = _.loading(t.loading, {
            ...r,
            ...(null == r ? void 0 : r.loading),
          });
          return (
            e
              .then(
                (e) => (
                  _.success(C(t.success, e), {
                    id: a,
                    ...r,
                    ...(null == r ? void 0 : r.success),
                  }),
                  e
                )
              )
              .catch((e) => {
                _.error(C(t.error, e), {
                  id: a,
                  ...r,
                  ...(null == r ? void 0 : r.error),
                });
              }),
            e
          );
        });
      var L = (e, t) => {
          z({ type: 1, toast: { id: e, height: t } });
        },
        R = () => {
          z({ type: 5, time: Date.now() });
        },
        H = (e) => {
          let { toasts: t, pausedAt: r } = A(e);
          (0, i.useEffect)(() => {
            if (r) return;
            let e = Date.now(),
              a = t.map((t) => {
                if (t.duration === 1 / 0) return;
                let r = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                if (r < 0) {
                  t.visible && _.dismiss(t.id);
                  return;
                }
                return setTimeout(() => _.dismiss(t.id), r);
              });
            return () => {
              a.forEach((e) => e && clearTimeout(e));
            };
          }, [t, r]);
          let a = (0, i.useCallback)(() => {
              r && z({ type: 6, time: Date.now() });
            }, [r]),
            o = (0, i.useCallback)(
              (e, r) => {
                let {
                    reverseOrder: a = !1,
                    gutter: o = 8,
                    defaultPosition: n,
                  } = r || {},
                  i = t.filter(
                    (t) => (t.position || n) === (e.position || n) && t.height
                  ),
                  s = i.findIndex((t) => t.id === e.id),
                  l = i.filter((e, t) => t < s && e.visible).length;
                return i
                  .filter((e) => e.visible)
                  .slice(...(a ? [l + 1] : [0, l]))
                  .reduce((e, t) => e + (t.height || 0) + o, 0);
              },
              [t]
            );
          return {
            toasts: t,
            handlers: {
              updateHeight: L,
              startPause: R,
              endPause: a,
              calculateOffset: o,
            },
          };
        },
        B = w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
        U = w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
        V = w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
        Z = E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${V} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
        q = w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
        G = E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${q} 1s linear infinite;
`,
        J = w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
        Y = w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
        K = E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
        Q = E("div")`
  position: absolute;
`,
        W = E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
        X = w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
        ee = E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
        et = ({ toast: e }) => {
          let { icon: t, type: r, iconTheme: a } = e;
          return void 0 !== t
            ? "string" == typeof t
              ? i.createElement(ee, null, t)
              : t
            : "blank" === r
            ? null
            : i.createElement(
                W,
                null,
                i.createElement(G, { ...a }),
                "loading" !== r &&
                  i.createElement(
                    Q,
                    null,
                    "error" === r
                      ? i.createElement(Z, { ...a })
                      : i.createElement(K, { ...a })
                  )
              );
        },
        er = (e) => `
0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
        ea = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}
`,
        eo = E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
        en = E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
        ei = (e, t) => {
          let r = e.includes("top") ? 1 : -1,
            [a, o] = I()
              ? [
                  "0%{opacity:0;} 100%{opacity:1;}",
                  "0%{opacity:1;} 100%{opacity:0;}",
                ]
              : [er(r), ea(r)];
          return {
            animation: t
              ? `${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
              : `${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
          };
        },
        es = i.memo(({ toast: e, position: t, style: r, children: a }) => {
          let o = e.height
              ? ei(e.position || t || "top-center", e.visible)
              : { opacity: 0 },
            n = i.createElement(et, { toast: e }),
            s = i.createElement(en, { ...e.ariaProps }, C(e.message, e));
          return i.createElement(
            eo,
            { className: e.className, style: { ...o, ...r, ...e.style } },
            "function" == typeof a
              ? a({ icon: n, message: s })
              : i.createElement(i.Fragment, null, n, s)
          );
        });
      (n = i.createElement),
        (p.p = void 0),
        (b = n),
        (v = void 0),
        (x = void 0);
      var el = ({
          id: e,
          className: t,
          style: r,
          onHeightUpdate: a,
          children: o,
        }) => {
          let n = i.useCallback(
            (t) => {
              if (t) {
                let r = () => {
                  a(e, t.getBoundingClientRect().height);
                };
                r(),
                  new MutationObserver(r).observe(t, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                  });
              }
            },
            [e, a]
          );
          return i.createElement("div", { ref: n, className: t, style: r }, o);
        },
        ec = (e, t) => {
          let r = e.includes("top"),
            a = e.includes("center")
              ? { justifyContent: "center" }
              : e.includes("right")
              ? { justifyContent: "flex-end" }
              : {};
          return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: I() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t * (r ? 1 : -1)}px)`,
            ...(r ? { top: 0 } : { bottom: 0 }),
            ...a,
          };
        },
        eu = y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
        ed = ({
          reverseOrder: e,
          position: t = "top-center",
          toastOptions: r,
          gutter: a,
          children: o,
          containerStyle: n,
          containerClassName: s,
        }) => {
          let { toasts: l, handlers: c } = H(r);
          return i.createElement(
            "div",
            {
              style: {
                position: "fixed",
                zIndex: 9999,
                top: 16,
                left: 16,
                right: 16,
                bottom: 16,
                pointerEvents: "none",
                ...n,
              },
              className: s,
              onMouseEnter: c.startPause,
              onMouseLeave: c.endPause,
            },
            l.map((r) => {
              let n = r.position || t,
                s = ec(
                  n,
                  c.calculateOffset(r, {
                    reverseOrder: e,
                    gutter: a,
                    defaultPosition: t,
                  })
                );
              return i.createElement(
                el,
                {
                  id: r.id,
                  key: r.id,
                  onHeightUpdate: c.updateHeight,
                  className: r.visible ? eu : "",
                  style: s,
                },
                "custom" === r.type
                  ? C(r.message, r)
                  : o
                  ? o(r)
                  : i.createElement(es, { toast: r, position: n })
              );
            })
          );
        },
        ep = _;
    },
  },
  function (e) {
    e.O(0, [833, 898, 6, 983, 744], function () {
      return e((e.s = 2710));
    }),
      (_N_E = e.O());
  },
]);
