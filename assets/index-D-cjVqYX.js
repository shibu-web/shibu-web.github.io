(async () => {
  (function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
    new MutationObserver((s) => {
      for (const f of s) if (f.type === "childList") for (const h of f.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && o(h);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function c(s) {
      const f = {};
      return s.integrity && (f.integrity = s.integrity), s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? f.credentials = "include" : s.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
    }
    function o(s) {
      if (s.ep) return;
      s.ep = true;
      const f = c(s);
      fetch(s.href, f);
    }
  })();
  var hc = {
    exports: {}
  }, tu = {};
  var Jh;
  function yv() {
    if (Jh) return tu;
    Jh = 1;
    var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
    function c(o, s, f) {
      var h = null;
      if (f !== void 0 && (h = "" + f), s.key !== void 0 && (h = "" + s.key), "key" in s) {
        f = {};
        for (var g in s) g !== "key" && (f[g] = s[g]);
      } else f = s;
      return s = f.ref, {
        $$typeof: a,
        type: o,
        key: h,
        ref: s !== void 0 ? s : null,
        props: f
      };
    }
    return tu.Fragment = i, tu.jsx = c, tu.jsxs = c, tu;
  }
  var $h;
  function gv() {
    return $h || ($h = 1, hc.exports = yv()), hc.exports;
  }
  var G = gv(), mc = {
    exports: {}
  }, re = {};
  var Fh;
  function vv() {
    if (Fh) return re;
    Fh = 1;
    var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), h = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.iterator;
    function w(S) {
      return S === null || typeof S != "object" ? null : (S = E && S[E] || S["@@iterator"], typeof S == "function" ? S : null);
    }
    var q = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, T = Object.assign, U = {};
    function M(S, Y, K) {
      this.props = S, this.context = Y, this.refs = U, this.updater = K || q;
    }
    M.prototype.isReactComponent = {}, M.prototype.setState = function(S, Y) {
      if (typeof S != "object" && typeof S != "function" && S != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, S, Y, "setState");
    }, M.prototype.forceUpdate = function(S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    };
    function H() {
    }
    H.prototype = M.prototype;
    function V(S, Y, K) {
      this.props = S, this.context = Y, this.refs = U, this.updater = K || q;
    }
    var Z = V.prototype = new H();
    Z.constructor = V, T(Z, M.prototype), Z.isPureReactComponent = true;
    var ue = Array.isArray, J = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null
    }, fe = Object.prototype.hasOwnProperty;
    function ye(S, Y, K, X, F, he) {
      return K = he.ref, {
        $$typeof: a,
        type: S,
        key: Y,
        ref: K !== void 0 ? K : null,
        props: he
      };
    }
    function $(S, Y) {
      return ye(S.type, Y, void 0, void 0, void 0, S.props);
    }
    function de(S) {
      return typeof S == "object" && S !== null && S.$$typeof === a;
    }
    function Qe(S) {
      var Y = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + S.replace(/[=:]/g, function(K) {
        return Y[K];
      });
    }
    var nt = /\/+/g;
    function Be(S, Y) {
      return typeof S == "object" && S !== null && S.key != null ? Qe("" + S.key) : Y.toString(36);
    }
    function Lt() {
    }
    function Ct(S) {
      switch (S.status) {
        case "fulfilled":
          return S.value;
        case "rejected":
          throw S.reason;
        default:
          switch (typeof S.status == "string" ? S.then(Lt, Lt) : (S.status = "pending", S.then(function(Y) {
            S.status === "pending" && (S.status = "fulfilled", S.value = Y);
          }, function(Y) {
            S.status === "pending" && (S.status = "rejected", S.reason = Y);
          })), S.status) {
            case "fulfilled":
              return S.value;
            case "rejected":
              throw S.reason;
          }
      }
      throw S;
    }
    function Me(S, Y, K, X, F) {
      var he = typeof S;
      (he === "undefined" || he === "boolean") && (S = null);
      var ae = false;
      if (S === null) ae = true;
      else switch (he) {
        case "bigint":
        case "string":
        case "number":
          ae = true;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case i:
              ae = true;
              break;
            case v:
              return ae = S._init, Me(ae(S._payload), Y, K, X, F);
          }
      }
      if (ae) return F = F(S), ae = X === "" ? "." + Be(S, 0) : X, ue(F) ? (K = "", ae != null && (K = ae.replace(nt, "$&/") + "/"), Me(F, Y, K, "", function(dt) {
        return dt;
      })) : F != null && (de(F) && (F = $(F, K + (F.key == null || S && S.key === F.key ? "" : ("" + F.key).replace(nt, "$&/") + "/") + ae)), Y.push(F)), 1;
      ae = 0;
      var ve = X === "" ? "." : X + ":";
      if (ue(S)) for (var we = 0; we < S.length; we++) X = S[we], he = ve + Be(X, we), ae += Me(X, Y, K, he, F);
      else if (we = w(S), typeof we == "function") for (S = we.call(S), we = 0; !(X = S.next()).done; ) X = X.value, he = ve + Be(X, we++), ae += Me(X, Y, K, he, F);
      else if (he === "object") {
        if (typeof S.then == "function") return Me(Ct(S), Y, K, X, F);
        throw Y = String(S), Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.");
      }
      return ae;
    }
    function D(S, Y, K) {
      if (S == null) return S;
      var X = [], F = 0;
      return Me(S, X, "", "", function(he) {
        return Y.call(K, he, F++);
      }), X;
    }
    function Q(S) {
      if (S._status === -1) {
        var Y = S._result;
        Y = Y(), Y.then(function(K) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = K);
        }, function(K) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = K);
        }), S._status === -1 && (S._status = 0, S._result = Y);
      }
      if (S._status === 1) return S._result.default;
      throw S._result;
    }
    var k = typeof reportError == "function" ? reportError : function(S) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var Y = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
          error: S
        });
        if (!window.dispatchEvent(Y)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", S);
        return;
      }
      console.error(S);
    };
    function xe() {
    }
    return re.Children = {
      map: D,
      forEach: function(S, Y, K) {
        D(S, function() {
          Y.apply(this, arguments);
        }, K);
      },
      count: function(S) {
        var Y = 0;
        return D(S, function() {
          Y++;
        }), Y;
      },
      toArray: function(S) {
        return D(S, function(Y) {
          return Y;
        }) || [];
      },
      only: function(S) {
        if (!de(S)) throw Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
    }, re.Component = M, re.Fragment = c, re.Profiler = s, re.PureComponent = V, re.StrictMode = o, re.Suspense = y, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, re.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(S) {
        return J.H.useMemoCache(S);
      }
    }, re.cache = function(S) {
      return function() {
        return S.apply(null, arguments);
      };
    }, re.cloneElement = function(S, Y, K) {
      if (S == null) throw Error("The argument must be a React element, but you passed " + S + ".");
      var X = T({}, S.props), F = S.key, he = void 0;
      if (Y != null) for (ae in Y.ref !== void 0 && (he = void 0), Y.key !== void 0 && (F = "" + Y.key), Y) !fe.call(Y, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && Y.ref === void 0 || (X[ae] = Y[ae]);
      var ae = arguments.length - 2;
      if (ae === 1) X.children = K;
      else if (1 < ae) {
        for (var ve = Array(ae), we = 0; we < ae; we++) ve[we] = arguments[we + 2];
        X.children = ve;
      }
      return ye(S.type, F, void 0, void 0, he, X);
    }, re.createContext = function(S) {
      return S = {
        $$typeof: h,
        _currentValue: S,
        _currentValue2: S,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, S.Provider = S, S.Consumer = {
        $$typeof: f,
        _context: S
      }, S;
    }, re.createElement = function(S, Y, K) {
      var X, F = {}, he = null;
      if (Y != null) for (X in Y.key !== void 0 && (he = "" + Y.key), Y) fe.call(Y, X) && X !== "key" && X !== "__self" && X !== "__source" && (F[X] = Y[X]);
      var ae = arguments.length - 2;
      if (ae === 1) F.children = K;
      else if (1 < ae) {
        for (var ve = Array(ae), we = 0; we < ae; we++) ve[we] = arguments[we + 2];
        F.children = ve;
      }
      if (S && S.defaultProps) for (X in ae = S.defaultProps, ae) F[X] === void 0 && (F[X] = ae[X]);
      return ye(S, he, void 0, void 0, null, F);
    }, re.createRef = function() {
      return {
        current: null
      };
    }, re.forwardRef = function(S) {
      return {
        $$typeof: g,
        render: S
      };
    }, re.isValidElement = de, re.lazy = function(S) {
      return {
        $$typeof: v,
        _payload: {
          _status: -1,
          _result: S
        },
        _init: Q
      };
    }, re.memo = function(S, Y) {
      return {
        $$typeof: p,
        type: S,
        compare: Y === void 0 ? null : Y
      };
    }, re.startTransition = function(S) {
      var Y = J.T, K = {};
      J.T = K;
      try {
        var X = S(), F = J.S;
        F !== null && F(K, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then(xe, k);
      } catch (he) {
        k(he);
      } finally {
        J.T = Y;
      }
    }, re.unstable_useCacheRefresh = function() {
      return J.H.useCacheRefresh();
    }, re.use = function(S) {
      return J.H.use(S);
    }, re.useActionState = function(S, Y, K) {
      return J.H.useActionState(S, Y, K);
    }, re.useCallback = function(S, Y) {
      return J.H.useCallback(S, Y);
    }, re.useContext = function(S) {
      return J.H.useContext(S);
    }, re.useDebugValue = function() {
    }, re.useDeferredValue = function(S, Y) {
      return J.H.useDeferredValue(S, Y);
    }, re.useEffect = function(S, Y, K) {
      var X = J.H;
      if (typeof K == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return X.useEffect(S, Y);
    }, re.useId = function() {
      return J.H.useId();
    }, re.useImperativeHandle = function(S, Y, K) {
      return J.H.useImperativeHandle(S, Y, K);
    }, re.useInsertionEffect = function(S, Y) {
      return J.H.useInsertionEffect(S, Y);
    }, re.useLayoutEffect = function(S, Y) {
      return J.H.useLayoutEffect(S, Y);
    }, re.useMemo = function(S, Y) {
      return J.H.useMemo(S, Y);
    }, re.useOptimistic = function(S, Y) {
      return J.H.useOptimistic(S, Y);
    }, re.useReducer = function(S, Y, K) {
      return J.H.useReducer(S, Y, K);
    }, re.useRef = function(S) {
      return J.H.useRef(S);
    }, re.useState = function(S) {
      return J.H.useState(S);
    }, re.useSyncExternalStore = function(S, Y, K) {
      return J.H.useSyncExternalStore(S, Y, K);
    }, re.useTransition = function() {
      return J.H.useTransition();
    }, re.version = "19.1.0", re;
  }
  var Wh;
  function Yi() {
    return Wh || (Wh = 1, mc.exports = vv()), mc.exports;
  }
  var z = Yi(), pc = {
    exports: {}
  }, lu = {}, yc = {
    exports: {}
  }, gc = {};
  var Ph;
  function bv() {
    return Ph || (Ph = 1, function(a) {
      function i(D, Q) {
        var k = D.length;
        D.push(Q);
        e: for (; 0 < k; ) {
          var xe = k - 1 >>> 1, S = D[xe];
          if (0 < s(S, Q)) D[xe] = Q, D[k] = S, k = xe;
          else break e;
        }
      }
      function c(D) {
        return D.length === 0 ? null : D[0];
      }
      function o(D) {
        if (D.length === 0) return null;
        var Q = D[0], k = D.pop();
        if (k !== Q) {
          D[0] = k;
          e: for (var xe = 0, S = D.length, Y = S >>> 1; xe < Y; ) {
            var K = 2 * (xe + 1) - 1, X = D[K], F = K + 1, he = D[F];
            if (0 > s(X, k)) F < S && 0 > s(he, X) ? (D[xe] = he, D[F] = k, xe = F) : (D[xe] = X, D[K] = k, xe = K);
            else if (F < S && 0 > s(he, k)) D[xe] = he, D[F] = k, xe = F;
            else break e;
          }
        }
        return Q;
      }
      function s(D, Q) {
        var k = D.sortIndex - Q.sortIndex;
        return k !== 0 ? k : D.id - Q.id;
      }
      if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var f = performance;
        a.unstable_now = function() {
          return f.now();
        };
      } else {
        var h = Date, g = h.now();
        a.unstable_now = function() {
          return h.now() - g;
        };
      }
      var y = [], p = [], v = 1, E = null, w = 3, q = false, T = false, U = false, M = false, H = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
      function ue(D) {
        for (var Q = c(p); Q !== null; ) {
          if (Q.callback === null) o(p);
          else if (Q.startTime <= D) o(p), Q.sortIndex = Q.expirationTime, i(y, Q);
          else break;
          Q = c(p);
        }
      }
      function J(D) {
        if (U = false, ue(D), !T) if (c(y) !== null) T = true, fe || (fe = true, Be());
        else {
          var Q = c(p);
          Q !== null && Me(J, Q.startTime - D);
        }
      }
      var fe = false, ye = -1, $ = 5, de = -1;
      function Qe() {
        return M ? true : !(a.unstable_now() - de < $);
      }
      function nt() {
        if (M = false, fe) {
          var D = a.unstable_now();
          de = D;
          var Q = true;
          try {
            e: {
              T = false, U && (U = false, V(ye), ye = -1), q = true;
              var k = w;
              try {
                t: {
                  for (ue(D), E = c(y); E !== null && !(E.expirationTime > D && Qe()); ) {
                    var xe = E.callback;
                    if (typeof xe == "function") {
                      E.callback = null, w = E.priorityLevel;
                      var S = xe(E.expirationTime <= D);
                      if (D = a.unstable_now(), typeof S == "function") {
                        E.callback = S, ue(D), Q = true;
                        break t;
                      }
                      E === c(y) && o(y), ue(D);
                    } else o(y);
                    E = c(y);
                  }
                  if (E !== null) Q = true;
                  else {
                    var Y = c(p);
                    Y !== null && Me(J, Y.startTime - D), Q = false;
                  }
                }
                break e;
              } finally {
                E = null, w = k, q = false;
              }
              Q = void 0;
            }
          } finally {
            Q ? Be() : fe = false;
          }
        }
      }
      var Be;
      if (typeof Z == "function") Be = function() {
        Z(nt);
      };
      else if (typeof MessageChannel < "u") {
        var Lt = new MessageChannel(), Ct = Lt.port2;
        Lt.port1.onmessage = nt, Be = function() {
          Ct.postMessage(null);
        };
      } else Be = function() {
        H(nt, 0);
      };
      function Me(D, Q) {
        ye = H(function() {
          D(a.unstable_now());
        }, Q);
      }
      a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, a.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < D ? Math.floor(1e3 / D) : 5;
      }, a.unstable_getCurrentPriorityLevel = function() {
        return w;
      }, a.unstable_next = function(D) {
        switch (w) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = w;
        }
        var k = w;
        w = Q;
        try {
          return D();
        } finally {
          w = k;
        }
      }, a.unstable_requestPaint = function() {
        M = true;
      }, a.unstable_runWithPriority = function(D, Q) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var k = w;
        w = D;
        try {
          return Q();
        } finally {
          w = k;
        }
      }, a.unstable_scheduleCallback = function(D, Q, k) {
        var xe = a.unstable_now();
        switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? xe + k : xe) : k = xe, D) {
          case 1:
            var S = -1;
            break;
          case 2:
            S = 250;
            break;
          case 5:
            S = 1073741823;
            break;
          case 4:
            S = 1e4;
            break;
          default:
            S = 5e3;
        }
        return S = k + S, D = {
          id: v++,
          callback: Q,
          priorityLevel: D,
          startTime: k,
          expirationTime: S,
          sortIndex: -1
        }, k > xe ? (D.sortIndex = k, i(p, D), c(y) === null && D === c(p) && (U ? (V(ye), ye = -1) : U = true, Me(J, k - xe))) : (D.sortIndex = S, i(y, D), T || q || (T = true, fe || (fe = true, Be()))), D;
      }, a.unstable_shouldYield = Qe, a.unstable_wrapCallback = function(D) {
        var Q = w;
        return function() {
          var k = w;
          w = Q;
          try {
            return D.apply(this, arguments);
          } finally {
            w = k;
          }
        };
      };
    }(gc)), gc;
  }
  var Ih;
  function Sv() {
    return Ih || (Ih = 1, yc.exports = bv()), yc.exports;
  }
  var vc = {
    exports: {}
  }, tt = {};
  var em;
  function xv() {
    if (em) return tt;
    em = 1;
    var a = Yi();
    function i(y) {
      var p = "https://react.dev/errors/" + y;
      if (1 < arguments.length) {
        p += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var v = 2; v < arguments.length; v++) p += "&args[]=" + encodeURIComponent(arguments[v]);
      }
      return "Minified React error #" + y + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function c() {
    }
    var o = {
      d: {
        f: c,
        r: function() {
          throw Error(i(522));
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c
      },
      p: 0,
      findDOMNode: null
    }, s = Symbol.for("react.portal");
    function f(y, p, v) {
      var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: s,
        key: E == null ? null : "" + E,
        children: y,
        containerInfo: p,
        implementation: v
      };
    }
    var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(y, p) {
      if (y === "font") return "";
      if (typeof p == "string") return p === "use-credentials" ? p : "";
    }
    return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, tt.createPortal = function(y, p) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(i(299));
      return f(y, p, null, v);
    }, tt.flushSync = function(y) {
      var p = h.T, v = o.p;
      try {
        if (h.T = null, o.p = 2, y) return y();
      } finally {
        h.T = p, o.p = v, o.d.f();
      }
    }, tt.preconnect = function(y, p) {
      typeof y == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(y, p));
    }, tt.prefetchDNS = function(y) {
      typeof y == "string" && o.d.D(y);
    }, tt.preinit = function(y, p) {
      if (typeof y == "string" && p && typeof p.as == "string") {
        var v = p.as, E = g(v, p.crossOrigin), w = typeof p.integrity == "string" ? p.integrity : void 0, q = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style" ? o.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
          crossOrigin: E,
          integrity: w,
          fetchPriority: q
        }) : v === "script" && o.d.X(y, {
          crossOrigin: E,
          integrity: w,
          fetchPriority: q,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0
        });
      }
    }, tt.preinitModule = function(y, p) {
      if (typeof y == "string") if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var v = g(p.as, p.crossOrigin);
          o.d.M(y, {
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && o.d.M(y);
    }, tt.preload = function(y, p) {
      if (typeof y == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
        var v = p.as, E = g(v, p.crossOrigin);
        o.d.L(y, v, {
          crossOrigin: E,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0
        });
      }
    }, tt.preloadModule = function(y, p) {
      if (typeof y == "string") if (p) {
        var v = g(p.as, p.crossOrigin);
        o.d.m(y, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else o.d.m(y);
    }, tt.requestFormReset = function(y) {
      o.d.r(y);
    }, tt.unstable_batchedUpdates = function(y, p) {
      return y(p);
    }, tt.useFormState = function(y, p, v) {
      return h.H.useFormState(y, p, v);
    }, tt.useFormStatus = function() {
      return h.H.useHostTransitionStatus();
    }, tt.version = "19.1.0", tt;
  }
  var tm;
  function Hm() {
    if (tm) return vc.exports;
    tm = 1;
    function a() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
    }
    return a(), vc.exports = xv(), vc.exports;
  }
  var lm;
  function Ev() {
    if (lm) return lu;
    lm = 1;
    var a = Sv(), i = Yi(), c = Hm();
    function o(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function s(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function f(e) {
      var t = e, l = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? l : null;
    }
    function h(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function g(e) {
      if (f(e) !== e) throw Error(o(188));
    }
    function y(e) {
      var t = e.alternate;
      if (!t) {
        if (t = f(e), t === null) throw Error(o(188));
        return t !== e ? null : e;
      }
      for (var l = e, n = t; ; ) {
        var u = l.return;
        if (u === null) break;
        var r = u.alternate;
        if (r === null) {
          if (n = u.return, n !== null) {
            l = n;
            continue;
          }
          break;
        }
        if (u.child === r.child) {
          for (r = u.child; r; ) {
            if (r === l) return g(u), e;
            if (r === n) return g(u), t;
            r = r.sibling;
          }
          throw Error(o(188));
        }
        if (l.return !== n.return) l = u, n = r;
        else {
          for (var d = false, m = u.child; m; ) {
            if (m === l) {
              d = true, l = u, n = r;
              break;
            }
            if (m === n) {
              d = true, n = u, l = r;
              break;
            }
            m = m.sibling;
          }
          if (!d) {
            for (m = r.child; m; ) {
              if (m === l) {
                d = true, l = r, n = u;
                break;
              }
              if (m === n) {
                d = true, n = r, l = u;
                break;
              }
              m = m.sibling;
            }
            if (!d) throw Error(o(189));
          }
        }
        if (l.alternate !== n) throw Error(o(190));
      }
      if (l.tag !== 3) throw Error(o(188));
      return l.stateNode.current === l ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = p(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var v = Object.assign, E = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), V = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), ye = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), Qe = Symbol.for("react.memo_cache_sentinel"), nt = Symbol.iterator;
    function Be(e) {
      return e === null || typeof e != "object" ? null : (e = nt && e[nt] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Lt = Symbol.for("react.client.reference");
    function Ct(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === Lt ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case M:
          return "Profiler";
        case U:
          return "StrictMode";
        case J:
          return "Suspense";
        case fe:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case q:
          return "Portal";
        case Z:
          return (e.displayName || "Context") + ".Provider";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case ue:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ye:
          return t = e.displayName || null, t !== null ? t : Ct(e.type) || "Memo";
        case $:
          t = e._payload, e = e._init;
          try {
            return Ct(e(t));
          } catch {
          }
      }
      return null;
    }
    var Me = Array.isArray, D = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, xe = [], S = -1;
    function Y(e) {
      return {
        current: e
      };
    }
    function K(e) {
      0 > S || (e.current = xe[S], xe[S] = null, S--);
    }
    function X(e, t) {
      S++, xe[S] = e.current, e.current = t;
    }
    var F = Y(null), he = Y(null), ae = Y(null), ve = Y(null);
    function we(e, t) {
      switch (X(ae, t), X(he, e), X(F, null), t.nodeType) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Eh(e) : 0;
          break;
        default:
          if (e = t.tagName, t = t.namespaceURI) t = Eh(t), e = Rh(t, e);
          else switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
      }
      K(F), X(F, e);
    }
    function dt() {
      K(F), K(he), K(ae);
    }
    function hl(e) {
      e.memoizedState !== null && X(ve, e);
      var t = F.current, l = Rh(t, e.type);
      t !== l && (X(he, e), X(F, l));
    }
    function ml(e) {
      he.current === e && (K(F), K(he)), ve.current === e && (K(ve), Fa._currentValue = k);
    }
    var pl = Object.prototype.hasOwnProperty, Ii = a.unstable_scheduleCallback, er = a.unstable_cancelCallback, Jp = a.unstable_shouldYield, $p = a.unstable_requestPaint, qt = a.unstable_now, Fp = a.unstable_getCurrentPriorityLevel, ts = a.unstable_ImmediatePriority, ls = a.unstable_UserBlockingPriority, mu = a.unstable_NormalPriority, Wp = a.unstable_LowPriority, ns = a.unstable_IdlePriority, Pp = a.log, Ip = a.unstable_setDisableYieldValue, aa = null, ht = null;
    function yl(e) {
      if (typeof Pp == "function" && Ip(e), ht && typeof ht.setStrictMode == "function") try {
        ht.setStrictMode(aa, e);
      } catch {
      }
    }
    var mt = Math.clz32 ? Math.clz32 : ly, ey = Math.log, ty = Math.LN2;
    function ly(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (ey(e) / ty | 0) | 0;
    }
    var pu = 256, yu = 4194304;
    function Yl(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function gu(e, t, l) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var u = 0, r = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var m = n & 134217727;
      return m !== 0 ? (n = m & ~r, n !== 0 ? u = Yl(n) : (d &= m, d !== 0 ? u = Yl(d) : l || (l = m & ~e, l !== 0 && (u = Yl(l))))) : (m = n & ~r, m !== 0 ? u = Yl(m) : d !== 0 ? u = Yl(d) : l || (l = n & ~e, l !== 0 && (u = Yl(l)))), u === 0 ? 0 : t !== 0 && t !== u && (t & r) === 0 && (r = u & -u, l = t & -t, r >= l || r === 32 && (l & 4194048) !== 0) ? t : u;
    }
    function ua(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function ny(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function as() {
      var e = pu;
      return pu <<= 1, (pu & 4194048) === 0 && (pu = 256), e;
    }
    function us() {
      var e = yu;
      return yu <<= 1, (yu & 62914560) === 0 && (yu = 4194304), e;
    }
    function tr(e) {
      for (var t = [], l = 0; 31 > l; l++) t.push(e);
      return t;
    }
    function ia(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function ay(e, t, l, n, u, r) {
      var d = e.pendingLanes;
      e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
      var m = e.entanglements, b = e.expirationTimes, O = e.hiddenUpdates;
      for (l = d & ~l; 0 < l; ) {
        var j = 31 - mt(l), L = 1 << j;
        m[j] = 0, b[j] = -1;
        var _ = O[j];
        if (_ !== null) for (O[j] = null, j = 0; j < _.length; j++) {
          var N = _[j];
          N !== null && (N.lane &= -536870913);
        }
        l &= ~L;
      }
      n !== 0 && is(e, n, 0), r !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(d & ~t));
    }
    function is(e, t, l) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var n = 31 - mt(t);
      e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
    }
    function rs(e, t) {
      var l = e.entangledLanes |= t;
      for (e = e.entanglements; l; ) {
        var n = 31 - mt(l), u = 1 << n;
        u & t | e[n] & t && (e[n] |= t), l &= ~u;
      }
    }
    function lr(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function nr(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function os() {
      var e = Q.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : kh(e.type));
    }
    function uy(e, t) {
      var l = Q.p;
      try {
        return Q.p = e, t();
      } finally {
        Q.p = l;
      }
    }
    var gl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + gl, ut = "__reactProps$" + gl, dn = "__reactContainer$" + gl, ar = "__reactEvents$" + gl, iy = "__reactListeners$" + gl, ry = "__reactHandles$" + gl, cs = "__reactResources$" + gl, ra = "__reactMarker$" + gl;
    function ur(e) {
      delete e[Ie], delete e[ut], delete e[ar], delete e[iy], delete e[ry];
    }
    function hn(e) {
      var t = e[Ie];
      if (t) return t;
      for (var l = e.parentNode; l; ) {
        if (t = l[dn] || l[Ie]) {
          if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for (e = wh(e); e !== null; ) {
            if (l = e[Ie]) return l;
            e = wh(e);
          }
          return t;
        }
        e = l, l = e.parentNode;
      }
      return null;
    }
    function mn(e) {
      if (e = e[Ie] || e[dn]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function oa(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(o(33));
    }
    function pn(e) {
      var t = e[cs];
      return t || (t = e[cs] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function Ze(e) {
      e[ra] = true;
    }
    var ss = /* @__PURE__ */ new Set(), fs = {};
    function kl(e, t) {
      yn(e, t), yn(e + "Capture", t);
    }
    function yn(e, t) {
      for (fs[e] = t, e = 0; e < t.length; e++) ss.add(t[e]);
    }
    var oy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ds = {}, hs = {};
    function cy(e) {
      return pl.call(hs, e) ? true : pl.call(ds, e) ? false : oy.test(e) ? hs[e] = true : (ds[e] = true, false);
    }
    function vu(e, t, l) {
      if (cy(t)) if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
    }
    function bu(e, t, l) {
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, "" + l);
      }
    }
    function Jt(e, t, l, n) {
      if (n === null) e.removeAttribute(l);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(l);
            return;
        }
        e.setAttributeNS(t, l, "" + n);
      }
    }
    var ir, ms;
    function gn(e) {
      if (ir === void 0) try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ir = t && t[1] || "", ms = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + ir + e + ms;
    }
    var rr = false;
    function or(e, t) {
      if (!e || rr) return "";
      rr = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var n = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var L = function() {
                  throw Error();
                };
                if (Object.defineProperty(L.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(L, []);
                  } catch (N) {
                    var _ = N;
                  }
                  Reflect.construct(e, [], L);
                } else {
                  try {
                    L.call();
                  } catch (N) {
                    _ = N;
                  }
                  e.call(L.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (N) {
                  _ = N;
                }
                (L = e()) && typeof L.catch == "function" && L.catch(function() {
                });
              }
            } catch (N) {
              if (N && _ && typeof N.stack == "string") return [
                N.stack,
                _.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var u = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
        u && u.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var r = n.DetermineComponentFrameRoot(), d = r[0], m = r[1];
        if (d && m) {
          var b = d.split(`
`), O = m.split(`
`);
          for (u = n = 0; n < b.length && !b[n].includes("DetermineComponentFrameRoot"); ) n++;
          for (; u < O.length && !O[u].includes("DetermineComponentFrameRoot"); ) u++;
          if (n === b.length || u === O.length) for (n = b.length - 1, u = O.length - 1; 1 <= n && 0 <= u && b[n] !== O[u]; ) u--;
          for (; 1 <= n && 0 <= u; n--, u--) if (b[n] !== O[u]) {
            if (n !== 1 || u !== 1) do
              if (n--, u--, 0 > u || b[n] !== O[u]) {
                var j = `
` + b[n].replace(" at new ", " at ");
                return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
              }
            while (1 <= n && 0 <= u);
            break;
          }
        }
      } finally {
        rr = false, Error.prepareStackTrace = l;
      }
      return (l = e ? e.displayName || e.name : "") ? gn(l) : "";
    }
    function sy(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return gn(e.type);
        case 16:
          return gn("Lazy");
        case 13:
          return gn("Suspense");
        case 19:
          return gn("SuspenseList");
        case 0:
        case 15:
          return or(e.type, false);
        case 11:
          return or(e.type.render, false);
        case 1:
          return or(e.type, true);
        case 31:
          return gn("Activity");
        default:
          return "";
      }
    }
    function ps(e) {
      try {
        var t = "";
        do
          t += sy(e), e = e.return;
        while (e);
        return t;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    function Et(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function ys(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function fy(e) {
      var t = ys(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
        var u = l.get, r = l.set;
        return Object.defineProperty(e, t, {
          configurable: true,
          get: function() {
            return u.call(this);
          },
          set: function(d) {
            n = "" + d, r.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: l.enumerable
        }), {
          getValue: function() {
            return n;
          },
          setValue: function(d) {
            n = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Su(e) {
      e._valueTracker || (e._valueTracker = fy(e));
    }
    function gs(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var l = t.getValue(), n = "";
      return e && (n = ys(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), true) : false;
    }
    function xu(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var dy = /[\n"\\]/g;
    function Rt(e) {
      return e.replace(dy, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function cr(e, t, l, n, u, r, d, m) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? sr(e, d, Et(t)) : l != null ? sr(e, d, Et(l)) : n != null && e.removeAttribute("value"), u == null && r != null && (e.defaultChecked = !!r), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + Et(m) : e.removeAttribute("name");
    }
    function vs(e, t, l, n, u, r, d, m) {
      if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || l != null) {
        if (!(r !== "submit" && r !== "reset" || t != null)) return;
        l = l != null ? "" + Et(l) : "", t = t != null ? "" + Et(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
      }
      n = n ?? u, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d);
    }
    function sr(e, t, l) {
      t === "number" && xu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
    }
    function vn(e, t, l, n) {
      if (e = e.options, t) {
        t = {};
        for (var u = 0; u < l.length; u++) t["$" + l[u]] = true;
        for (l = 0; l < e.length; l++) u = t.hasOwnProperty("$" + e[l].value), e[l].selected !== u && (e[l].selected = u), u && n && (e[l].defaultSelected = true);
      } else {
        for (l = "" + Et(l), t = null, u = 0; u < e.length; u++) {
          if (e[u].value === l) {
            e[u].selected = true, n && (e[u].defaultSelected = true);
            return;
          }
          t !== null || e[u].disabled || (t = e[u]);
        }
        t !== null && (t.selected = true);
      }
    }
    function bs(e, t, l) {
      if (t != null && (t = "" + Et(t), t !== e.value && (e.value = t), l == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = l != null ? "" + Et(l) : "";
    }
    function Ss(e, t, l, n) {
      if (t == null) {
        if (n != null) {
          if (l != null) throw Error(o(92));
          if (Me(n)) {
            if (1 < n.length) throw Error(o(93));
            n = n[0];
          }
          l = n;
        }
        l == null && (l = ""), t = l;
      }
      l = Et(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n);
    }
    function bn(e, t) {
      if (t) {
        var l = e.firstChild;
        if (l && l === e.lastChild && l.nodeType === 3) {
          l.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var hy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function xs(e, t, l) {
      var n = t.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || hy.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
    }
    function Es(e, t, l) {
      if (t != null && typeof t != "object") throw Error(o(62));
      if (e = e.style, l != null) {
        for (var n in l) !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
        for (var u in t) n = t[u], t.hasOwnProperty(u) && l[u] !== n && xs(e, u, n);
      } else for (var r in t) t.hasOwnProperty(r) && xs(e, r, t[r]);
    }
    function fr(e) {
      if (e.indexOf("-") === -1) return false;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var my = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), py = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Eu(e) {
      return py.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    var dr = null;
    function hr(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Sn = null, xn = null;
    function Rs(e) {
      var t = mn(e);
      if (t && (e = t.stateNode)) {
        var l = e[ut] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (cr(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
              for (l = e; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + Rt("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                var n = l[t];
                if (n !== e && n.form === e.form) {
                  var u = n[ut] || null;
                  if (!u) throw Error(o(90));
                  cr(n, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                }
              }
              for (t = 0; t < l.length; t++) n = l[t], n.form === e.form && gs(n);
            }
            break e;
          case "textarea":
            bs(e, l.value, l.defaultValue);
            break e;
          case "select":
            t = l.value, t != null && vn(e, !!l.multiple, t, false);
        }
      }
    }
    var mr = false;
    function Ts(e, t, l) {
      if (mr) return e(t, l);
      mr = true;
      try {
        var n = e(t);
        return n;
      } finally {
        if (mr = false, (Sn !== null || xn !== null) && (ri(), Sn && (t = Sn, e = xn, xn = Sn = null, Rs(t), e))) for (t = 0; t < e.length; t++) Rs(e[t]);
      }
    }
    function ca(e, t) {
      var l = e.stateNode;
      if (l === null) return null;
      var n = l[ut] || null;
      if (n === null) return null;
      l = n[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (l && typeof l != "function") throw Error(o(231, t, typeof l));
      return l;
    }
    var $t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pr = false;
    if ($t) try {
      var sa = {};
      Object.defineProperty(sa, "passive", {
        get: function() {
          pr = true;
        }
      }), window.addEventListener("test", sa, sa), window.removeEventListener("test", sa, sa);
    } catch {
      pr = false;
    }
    var vl = null, yr = null, Ru = null;
    function As() {
      if (Ru) return Ru;
      var e, t = yr, l = t.length, n, u = "value" in vl ? vl.value : vl.textContent, r = u.length;
      for (e = 0; e < l && t[e] === u[e]; e++) ;
      var d = l - e;
      for (n = 1; n <= d && t[l - n] === u[r - n]; n++) ;
      return Ru = u.slice(e, 1 < n ? 1 - n : void 0);
    }
    function Tu(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Au() {
      return true;
    }
    function Os() {
      return false;
    }
    function it(e) {
      function t(l, n, u, r, d) {
        this._reactName = l, this._targetInst = u, this.type = n, this.nativeEvent = r, this.target = d, this.currentTarget = null;
        for (var m in e) e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(r) : r[m]);
        return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === false) ? Au : Os, this.isPropagationStopped = Os, this;
      }
      return v(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = Au);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = Au);
        },
        persist: function() {
        },
        isPersistent: Au
      }), t;
    }
    var Vl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ou = it(Vl), fa = v({}, Vl, {
      view: 0,
      detail: 0
    }), yy = it(fa), gr, vr, da, wu = v({}, fa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Sr,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== da && (da && e.type === "mousemove" ? (gr = e.screenX - da.screenX, vr = e.screenY - da.screenY) : vr = gr = 0, da = e), gr);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : vr;
      }
    }), ws = it(wu), gy = v({}, wu, {
      dataTransfer: 0
    }), vy = it(gy), by = v({}, fa, {
      relatedTarget: 0
    }), br = it(by), Sy = v({}, Vl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), xy = it(Sy), Ey = v({}, Vl, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ry = it(Ey), Ty = v({}, Vl, {
      data: 0
    }), _s = it(Ty), Ay = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Oy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, wy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function _y(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = wy[e]) ? !!t[e] : false;
    }
    function Sr() {
      return _y;
    }
    var zy = v({}, fa, {
      key: function(e) {
        if (e.key) {
          var t = Ay[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Tu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Oy[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sr,
      charCode: function(e) {
        return e.type === "keypress" ? Tu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Tu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ny = it(zy), My = v({}, wu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), zs = it(My), Cy = v({}, fa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sr
    }), Dy = it(Cy), Uy = v({}, Vl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), jy = it(Uy), By = v({}, wu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Hy = it(By), Ly = v({}, Vl, {
      newState: 0,
      oldState: 0
    }), qy = it(Ly), Gy = [
      9,
      13,
      27,
      32
    ], xr = $t && "CompositionEvent" in window, ha = null;
    $t && "documentMode" in document && (ha = document.documentMode);
    var Yy = $t && "TextEvent" in window && !ha, Ns = $t && (!xr || ha && 8 < ha && 11 >= ha), Ms = " ", Cs = false;
    function Ds(e, t) {
      switch (e) {
        case "keyup":
          return Gy.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Us(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var En = false;
    function ky(e, t) {
      switch (e) {
        case "compositionend":
          return Us(t);
        case "keypress":
          return t.which !== 32 ? null : (Cs = true, Ms);
        case "textInput":
          return e = t.data, e === Ms && Cs ? null : e;
        default:
          return null;
      }
    }
    function Vy(e, t) {
      if (En) return e === "compositionend" || !xr && Ds(e, t) ? (e = As(), Ru = yr = vl = null, En = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ns && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Xy = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function js(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Xy[e.type] : t === "textarea";
    }
    function Bs(e, t, l, n) {
      Sn ? xn ? xn.push(n) : xn = [
        n
      ] : Sn = n, t = hi(t, "onChange"), 0 < t.length && (l = new Ou("onChange", "change", null, l, n), e.push({
        event: l,
        listeners: t
      }));
    }
    var ma = null, pa = null;
    function Qy(e) {
      gh(e, 0);
    }
    function _u(e) {
      var t = oa(e);
      if (gs(t)) return e;
    }
    function Hs(e, t) {
      if (e === "change") return t;
    }
    var Ls = false;
    if ($t) {
      var Er;
      if ($t) {
        var Rr = "oninput" in document;
        if (!Rr) {
          var qs = document.createElement("div");
          qs.setAttribute("oninput", "return;"), Rr = typeof qs.oninput == "function";
        }
        Er = Rr;
      } else Er = false;
      Ls = Er && (!document.documentMode || 9 < document.documentMode);
    }
    function Gs() {
      ma && (ma.detachEvent("onpropertychange", Ys), pa = ma = null);
    }
    function Ys(e) {
      if (e.propertyName === "value" && _u(pa)) {
        var t = [];
        Bs(t, pa, e, hr(e)), Ts(Qy, t);
      }
    }
    function Zy(e, t, l) {
      e === "focusin" ? (Gs(), ma = t, pa = l, ma.attachEvent("onpropertychange", Ys)) : e === "focusout" && Gs();
    }
    function Ky(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return _u(pa);
    }
    function Jy(e, t) {
      if (e === "click") return _u(t);
    }
    function $y(e, t) {
      if (e === "input" || e === "change") return _u(t);
    }
    function Fy(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var pt = typeof Object.is == "function" ? Object.is : Fy;
    function ya(e, t) {
      if (pt(e, t)) return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
      var l = Object.keys(e), n = Object.keys(t);
      if (l.length !== n.length) return false;
      for (n = 0; n < l.length; n++) {
        var u = l[n];
        if (!pl.call(t, u) || !pt(e[u], t[u])) return false;
      }
      return true;
    }
    function ks(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Vs(e, t) {
      var l = ks(e);
      e = 0;
      for (var n; l; ) {
        if (l.nodeType === 3) {
          if (n = e + l.textContent.length, e <= t && n >= t) return {
            node: l,
            offset: t - e
          };
          e = n;
        }
        e: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break e;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = ks(l);
      }
    }
    function Xs(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Xs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function Qs(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = xu(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var l = typeof t.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) e = t.contentWindow;
        else break;
        t = xu(e.document);
      }
      return t;
    }
    function Tr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    var Wy = $t && "documentMode" in document && 11 >= document.documentMode, Rn = null, Ar = null, ga = null, Or = false;
    function Zs(e, t, l) {
      var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Or || Rn == null || Rn !== xu(n) || (n = Rn, "selectionStart" in n && Tr(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
      } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
      }), ga && ya(ga, n) || (ga = n, n = hi(Ar, "onSelect"), 0 < n.length && (t = new Ou("onSelect", "select", null, t, l), e.push({
        event: t,
        listeners: n
      }), t.target = Rn)));
    }
    function Xl(e, t) {
      var l = {};
      return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
    }
    var Tn = {
      animationend: Xl("Animation", "AnimationEnd"),
      animationiteration: Xl("Animation", "AnimationIteration"),
      animationstart: Xl("Animation", "AnimationStart"),
      transitionrun: Xl("Transition", "TransitionRun"),
      transitionstart: Xl("Transition", "TransitionStart"),
      transitioncancel: Xl("Transition", "TransitionCancel"),
      transitionend: Xl("Transition", "TransitionEnd")
    }, wr = {}, Ks = {};
    $t && (Ks = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
    function Ql(e) {
      if (wr[e]) return wr[e];
      if (!Tn[e]) return e;
      var t = Tn[e], l;
      for (l in t) if (t.hasOwnProperty(l) && l in Ks) return wr[e] = t[l];
      return e;
    }
    var Js = Ql("animationend"), $s = Ql("animationiteration"), Fs = Ql("animationstart"), Py = Ql("transitionrun"), Iy = Ql("transitionstart"), eg = Ql("transitioncancel"), Ws = Ql("transitionend"), Ps = /* @__PURE__ */ new Map(), _r = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    _r.push("scrollEnd");
    function Dt(e, t) {
      Ps.set(e, t), kl(t, [
        e
      ]);
    }
    var Is = /* @__PURE__ */ new WeakMap();
    function Tt(e, t) {
      if (typeof e == "object" && e !== null) {
        var l = Is.get(e);
        return l !== void 0 ? l : (t = {
          value: e,
          source: t,
          stack: ps(t)
        }, Is.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: ps(t)
      };
    }
    var At = [], An = 0, zr = 0;
    function zu() {
      for (var e = An, t = zr = An = 0; t < e; ) {
        var l = At[t];
        At[t++] = null;
        var n = At[t];
        At[t++] = null;
        var u = At[t];
        At[t++] = null;
        var r = At[t];
        if (At[t++] = null, n !== null && u !== null) {
          var d = n.pending;
          d === null ? u.next = u : (u.next = d.next, d.next = u), n.pending = u;
        }
        r !== 0 && ef(l, u, r);
      }
    }
    function Nu(e, t, l, n) {
      At[An++] = e, At[An++] = t, At[An++] = l, At[An++] = n, zr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
    }
    function Nr(e, t, l, n) {
      return Nu(e, t, l, n), Mu(e);
    }
    function On(e, t) {
      return Nu(e, null, null, t), Mu(e);
    }
    function ef(e, t, l) {
      e.lanes |= l;
      var n = e.alternate;
      n !== null && (n.lanes |= l);
      for (var u = false, r = e.return; r !== null; ) r.childLanes |= l, n = r.alternate, n !== null && (n.childLanes |= l), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (u = true)), e = r, r = r.return;
      return e.tag === 3 ? (r = e.stateNode, u && t !== null && (u = 31 - mt(l), e = r.hiddenUpdates, n = e[u], n === null ? e[u] = [
        t
      ] : n.push(t), t.lane = l | 536870912), r) : null;
    }
    function Mu(e) {
      if (50 < ka) throw ka = 0, Ho = null, Error(o(185));
      for (var t = e.return; t !== null; ) e = t, t = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var wn = {};
    function tg(e, t, l, n) {
      this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function yt(e, t, l, n) {
      return new tg(e, t, l, n);
    }
    function Mr(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Ft(e, t) {
      var l = e.alternate;
      return l === null ? (l = yt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
    }
    function tf(e, t) {
      e.flags &= 65011714;
      var l = e.alternate;
      return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), e;
    }
    function Cu(e, t, l, n, u, r) {
      var d = 0;
      if (n = e, typeof e == "function") Mr(e) && (d = 1);
      else if (typeof e == "string") d = nv(e, l, F.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case de:
          return e = yt(31, l, t, u), e.elementType = de, e.lanes = r, e;
        case T:
          return Zl(l.children, u, r, t);
        case U:
          d = 8, u |= 24;
          break;
        case M:
          return e = yt(12, l, t, u | 2), e.elementType = M, e.lanes = r, e;
        case J:
          return e = yt(13, l, t, u), e.elementType = J, e.lanes = r, e;
        case fe:
          return e = yt(19, l, t, u), e.elementType = fe, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case H:
            case Z:
              d = 10;
              break e;
            case V:
              d = 9;
              break e;
            case ue:
              d = 11;
              break e;
            case ye:
              d = 14;
              break e;
            case $:
              d = 16, n = null;
              break e;
          }
          d = 29, l = Error(o(130, e === null ? "null" : typeof e, "")), n = null;
      }
      return t = yt(d, l, t, u), t.elementType = e, t.type = n, t.lanes = r, t;
    }
    function Zl(e, t, l, n) {
      return e = yt(7, e, n, t), e.lanes = l, e;
    }
    function Cr(e, t, l) {
      return e = yt(6, e, null, t), e.lanes = l, e;
    }
    function Dr(e, t, l) {
      return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    var _n = [], zn = 0, Du = null, Uu = 0, Ot = [], wt = 0, Kl = null, Wt = 1, Pt = "";
    function Jl(e, t) {
      _n[zn++] = Uu, _n[zn++] = Du, Du = e, Uu = t;
    }
    function lf(e, t, l) {
      Ot[wt++] = Wt, Ot[wt++] = Pt, Ot[wt++] = Kl, Kl = e;
      var n = Wt;
      e = Pt;
      var u = 32 - mt(n) - 1;
      n &= ~(1 << u), l += 1;
      var r = 32 - mt(t) + u;
      if (30 < r) {
        var d = u - u % 5;
        r = (n & (1 << d) - 1).toString(32), n >>= d, u -= d, Wt = 1 << 32 - mt(t) + u | l << u | n, Pt = r + e;
      } else Wt = 1 << r | l << u | n, Pt = e;
    }
    function Ur(e) {
      e.return !== null && (Jl(e, 1), lf(e, 1, 0));
    }
    function jr(e) {
      for (; e === Du; ) Du = _n[--zn], _n[zn] = null, Uu = _n[--zn], _n[zn] = null;
      for (; e === Kl; ) Kl = Ot[--wt], Ot[wt] = null, Pt = Ot[--wt], Ot[wt] = null, Wt = Ot[--wt], Ot[wt] = null;
    }
    var at = null, Ue = null, Se = false, $l = null, Gt = false, Br = Error(o(519));
    function Fl(e) {
      var t = Error(o(418, ""));
      throw Sa(Tt(t, e)), Br;
    }
    function nf(e) {
      var t = e.stateNode, l = e.type, n = e.memoizedProps;
      switch (t[Ie] = e, t[ut] = n, l) {
        case "dialog":
          pe("cancel", t), pe("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          pe("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Xa.length; l++) pe(Xa[l], t);
          break;
        case "source":
          pe("error", t);
          break;
        case "img":
        case "image":
        case "link":
          pe("error", t), pe("load", t);
          break;
        case "details":
          pe("toggle", t);
          break;
        case "input":
          pe("invalid", t), vs(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, true), Su(t);
          break;
        case "select":
          pe("invalid", t);
          break;
        case "textarea":
          pe("invalid", t), Ss(t, n.value, n.defaultValue, n.children), Su(t);
      }
      l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === true || xh(t.textContent, l) ? (n.popover != null && (pe("beforetoggle", t), pe("toggle", t)), n.onScroll != null && pe("scroll", t), n.onScrollEnd != null && pe("scrollend", t), n.onClick != null && (t.onclick = mi), t = true) : t = false, t || Fl(e);
    }
    function af(e) {
      for (at = e.return; at; ) switch (at.tag) {
        case 5:
        case 13:
          Gt = false;
          return;
        case 27:
        case 3:
          Gt = true;
          return;
        default:
          at = at.return;
      }
    }
    function va(e) {
      if (e !== at) return false;
      if (!Se) return af(e), Se = true, false;
      var t = e.tag, l;
      if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Io(e.type, e.memoizedProps)), l = !l), l && Ue && Fl(e), af(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) if (l = e.data, l === "/$") {
              if (t === 0) {
                Ue = jt(e.nextSibling);
                break e;
              }
              t--;
            } else l !== "$" && l !== "$!" && l !== "$?" || t++;
            e = e.nextSibling;
          }
          Ue = null;
        }
      } else t === 27 ? (t = Ue, Ul(e.type) ? (e = nc, nc = null, Ue = e) : Ue = t) : Ue = at ? jt(e.stateNode.nextSibling) : null;
      return true;
    }
    function ba() {
      Ue = at = null, Se = false;
    }
    function uf() {
      var e = $l;
      return e !== null && (ct === null ? ct = e : ct.push.apply(ct, e), $l = null), e;
    }
    function Sa(e) {
      $l === null ? $l = [
        e
      ] : $l.push(e);
    }
    var Hr = Y(null), Wl = null, It = null;
    function bl(e, t, l) {
      X(Hr, t._currentValue), t._currentValue = l;
    }
    function el(e) {
      e._currentValue = Hr.current, K(Hr);
    }
    function Lr(e, t, l) {
      for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
        e = e.return;
      }
    }
    function qr(e, t, l, n) {
      var u = e.child;
      for (u !== null && (u.return = e); u !== null; ) {
        var r = u.dependencies;
        if (r !== null) {
          var d = u.child;
          r = r.firstContext;
          e: for (; r !== null; ) {
            var m = r;
            r = u;
            for (var b = 0; b < t.length; b++) if (m.context === t[b]) {
              r.lanes |= l, m = r.alternate, m !== null && (m.lanes |= l), Lr(r.return, l, e), n || (d = null);
              break e;
            }
            r = m.next;
          }
        } else if (u.tag === 18) {
          if (d = u.return, d === null) throw Error(o(341));
          d.lanes |= l, r = d.alternate, r !== null && (r.lanes |= l), Lr(d, l, e), d = null;
        } else d = u.child;
        if (d !== null) d.return = u;
        else for (d = u; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (u = d.sibling, u !== null) {
            u.return = d.return, d = u;
            break;
          }
          d = d.return;
        }
        u = d;
      }
    }
    function xa(e, t, l, n) {
      e = null;
      for (var u = t, r = false; u !== null; ) {
        if (!r) {
          if ((u.flags & 524288) !== 0) r = true;
          else if ((u.flags & 262144) !== 0) break;
        }
        if (u.tag === 10) {
          var d = u.alternate;
          if (d === null) throw Error(o(387));
          if (d = d.memoizedProps, d !== null) {
            var m = u.type;
            pt(u.pendingProps.value, d.value) || (e !== null ? e.push(m) : e = [
              m
            ]);
          }
        } else if (u === ve.current) {
          if (d = u.alternate, d === null) throw Error(o(387));
          d.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Fa) : e = [
            Fa
          ]);
        }
        u = u.return;
      }
      e !== null && qr(t, e, l, n), t.flags |= 262144;
    }
    function ju(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!pt(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function Pl(e) {
      Wl = e, It = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function et(e) {
      return rf(Wl, e);
    }
    function Bu(e, t) {
      return Wl === null && Pl(e), rf(e, t);
    }
    function rf(e, t) {
      var l = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: l,
        next: null
      }, It === null) {
        if (e === null) throw Error(o(308));
        It = t, e.dependencies = {
          lanes: 0,
          firstContext: t
        }, e.flags |= 524288;
      } else It = It.next = t;
      return l;
    }
    var lg = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: false,
        addEventListener: function(l, n) {
          e.push(n);
        }
      };
      this.abort = function() {
        t.aborted = true, e.forEach(function(l) {
          return l();
        });
      };
    }, ng = a.unstable_scheduleCallback, ag = a.unstable_NormalPriority, ke = {
      $$typeof: Z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function Gr() {
      return {
        controller: new lg(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Ea(e) {
      e.refCount--, e.refCount === 0 && ng(ag, function() {
        e.controller.abort();
      });
    }
    var Ra = null, Yr = 0, Nn = 0, Mn = null;
    function ug(e, t) {
      if (Ra === null) {
        var l = Ra = [];
        Yr = 0, Nn = Xo(), Mn = {
          status: "pending",
          value: void 0,
          then: function(n) {
            l.push(n);
          }
        };
      }
      return Yr++, t.then(of, of), t;
    }
    function of() {
      if (--Yr === 0 && Ra !== null) {
        Mn !== null && (Mn.status = "fulfilled");
        var e = Ra;
        Ra = null, Nn = 0, Mn = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ig(e, t) {
      var l = [], n = {
        status: "pending",
        value: null,
        reason: null,
        then: function(u) {
          l.push(u);
        }
      };
      return e.then(function() {
        n.status = "fulfilled", n.value = t;
        for (var u = 0; u < l.length; u++) (0, l[u])(t);
      }, function(u) {
        for (n.status = "rejected", n.reason = u, u = 0; u < l.length; u++) (0, l[u])(void 0);
      }), n;
    }
    var cf = D.S;
    D.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && ug(e, t), cf !== null && cf(e, t);
    };
    var Il = Y(null);
    function kr() {
      var e = Il.current;
      return e !== null ? e : ze.pooledCache;
    }
    function Hu(e, t) {
      t === null ? X(Il, Il.current) : X(Il, t.pool);
    }
    function sf() {
      var e = kr();
      return e === null ? null : {
        parent: ke._currentValue,
        pool: e
      };
    }
    var Ta = Error(o(460)), ff = Error(o(474)), Lu = Error(o(542)), Vr = {
      then: function() {
      }
    };
    function df(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function qu() {
    }
    function hf(e, t, l) {
      switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(qu, qu), t = l), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, pf(e), e;
        default:
          if (typeof t.status == "string") t.then(qu, qu);
          else {
            if (e = ze, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
            e = t, e.status = "pending", e.then(function(n) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = n;
              }
            }, function(n) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = n;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, pf(e), e;
          }
          throw Aa = t, Ta;
      }
    }
    var Aa = null;
    function mf() {
      if (Aa === null) throw Error(o(459));
      var e = Aa;
      return Aa = null, e;
    }
    function pf(e) {
      if (e === Ta || e === Lu) throw Error(o(483));
    }
    var Sl = false;
    function Xr(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function Qr(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function xl(e) {
      return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function El(e, t, l) {
      var n = e.updateQueue;
      if (n === null) return null;
      if (n = n.shared, (Ee & 2) !== 0) {
        var u = n.pending;
        return u === null ? t.next = t : (t.next = u.next, u.next = t), n.pending = t, t = Mu(e), ef(e, null, l), t;
      }
      return Nu(e, n, t, l), Mu(e);
    }
    function Oa(e, t, l) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes, l |= n, t.lanes = l, rs(e, l);
      }
    }
    function Zr(e, t) {
      var l = e.updateQueue, n = e.alternate;
      if (n !== null && (n = n.updateQueue, l === n)) {
        var u = null, r = null;
        if (l = l.firstBaseUpdate, l !== null) {
          do {
            var d = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null
            };
            r === null ? u = r = d : r = r.next = d, l = l.next;
          } while (l !== null);
          r === null ? u = r = t : r = r.next = t;
        } else u = r = t;
        l = {
          baseState: n.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: r,
          shared: n.shared,
          callbacks: n.callbacks
        }, e.updateQueue = l;
        return;
      }
      e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
    }
    var Kr = false;
    function wa() {
      if (Kr) {
        var e = Mn;
        if (e !== null) throw e;
      }
    }
    function _a(e, t, l, n) {
      Kr = false;
      var u = e.updateQueue;
      Sl = false;
      var r = u.firstBaseUpdate, d = u.lastBaseUpdate, m = u.shared.pending;
      if (m !== null) {
        u.shared.pending = null;
        var b = m, O = b.next;
        b.next = null, d === null ? r = O : d.next = O, d = b;
        var j = e.alternate;
        j !== null && (j = j.updateQueue, m = j.lastBaseUpdate, m !== d && (m === null ? j.firstBaseUpdate = O : m.next = O, j.lastBaseUpdate = b));
      }
      if (r !== null) {
        var L = u.baseState;
        d = 0, j = O = b = null, m = r;
        do {
          var _ = m.lane & -536870913, N = _ !== m.lane;
          if (N ? (ge & _) === _ : (n & _) === _) {
            _ !== 0 && _ === Nn && (Kr = true), j !== null && (j = j.next = {
              lane: 0,
              tag: m.tag,
              payload: m.payload,
              callback: null,
              next: null
            });
            e: {
              var ne = e, te = m;
              _ = t;
              var Oe = l;
              switch (te.tag) {
                case 1:
                  if (ne = te.payload, typeof ne == "function") {
                    L = ne.call(Oe, L, _);
                    break e;
                  }
                  L = ne;
                  break e;
                case 3:
                  ne.flags = ne.flags & -65537 | 128;
                case 0:
                  if (ne = te.payload, _ = typeof ne == "function" ? ne.call(Oe, L, _) : ne, _ == null) break e;
                  L = v({}, L, _);
                  break e;
                case 2:
                  Sl = true;
              }
            }
            _ = m.callback, _ !== null && (e.flags |= 64, N && (e.flags |= 8192), N = u.callbacks, N === null ? u.callbacks = [
              _
            ] : N.push(_));
          } else N = {
            lane: _,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, j === null ? (O = j = N, b = L) : j = j.next = N, d |= _;
          if (m = m.next, m === null) {
            if (m = u.shared.pending, m === null) break;
            N = m, m = N.next, N.next = null, u.lastBaseUpdate = N, u.shared.pending = null;
          }
        } while (true);
        j === null && (b = L), u.baseState = b, u.firstBaseUpdate = O, u.lastBaseUpdate = j, r === null && (u.shared.lanes = 0), Nl |= d, e.lanes = d, e.memoizedState = L;
      }
    }
    function yf(e, t) {
      if (typeof e != "function") throw Error(o(191, e));
      e.call(t);
    }
    function gf(e, t) {
      var l = e.callbacks;
      if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) yf(l[e], t);
    }
    var Cn = Y(null), Gu = Y(0);
    function vf(e, t) {
      e = rl, X(Gu, e), X(Cn, t), rl = e | t.baseLanes;
    }
    function Jr() {
      X(Gu, rl), X(Cn, Cn.current);
    }
    function $r() {
      rl = Gu.current, K(Cn), K(Gu);
    }
    var Rl = 0, oe = null, Te = null, qe = null, Yu = false, Dn = false, en = false, ku = 0, za = 0, Un = null, rg = 0;
    function He() {
      throw Error(o(321));
    }
    function Fr(e, t) {
      if (t === null) return false;
      for (var l = 0; l < t.length && l < e.length; l++) if (!pt(e[l], t[l])) return false;
      return true;
    }
    function Wr(e, t, l, n, u, r) {
      return Rl = r, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? td : ld, en = false, r = l(n, u), en = false, Dn && (r = Sf(t, l, n, u)), bf(e), r;
    }
    function bf(e) {
      D.H = Ju;
      var t = Te !== null && Te.next !== null;
      if (Rl = 0, qe = Te = oe = null, Yu = false, za = 0, Un = null, t) throw Error(o(300));
      e === null || Ke || (e = e.dependencies, e !== null && ju(e) && (Ke = true));
    }
    function Sf(e, t, l, n) {
      oe = e;
      var u = 0;
      do {
        if (Dn && (Un = null), za = 0, Dn = false, 25 <= u) throw Error(o(301));
        if (u += 1, qe = Te = null, e.updateQueue != null) {
          var r = e.updateQueue;
          r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
        }
        D.H = mg, r = t(l, n);
      } while (Dn);
      return r;
    }
    function og() {
      var e = D.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Na(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (oe.flags |= 1024), t;
    }
    function Pr() {
      var e = ku !== 0;
      return ku = 0, e;
    }
    function Ir(e, t, l) {
      t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
    }
    function eo(e) {
      if (Yu) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Yu = false;
      }
      Rl = 0, qe = Te = oe = null, Dn = false, za = ku = 0, Un = null;
    }
    function rt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return qe === null ? oe.memoizedState = qe = e : qe = qe.next = e, qe;
    }
    function Ge() {
      if (Te === null) {
        var e = oe.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Te.next;
      var t = qe === null ? oe.memoizedState : qe.next;
      if (t !== null) qe = t, Te = e;
      else {
        if (e === null) throw oe.alternate === null ? Error(o(467)) : Error(o(310));
        Te = e, e = {
          memoizedState: Te.memoizedState,
          baseState: Te.baseState,
          baseQueue: Te.baseQueue,
          queue: Te.queue,
          next: null
        }, qe === null ? oe.memoizedState = qe = e : qe = qe.next = e;
      }
      return qe;
    }
    function to() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function Na(e) {
      var t = za;
      return za += 1, Un === null && (Un = []), e = hf(Un, e, t), t = oe, (qe === null ? t.memoizedState : qe.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? td : ld), e;
    }
    function Vu(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Na(e);
        if (e.$$typeof === Z) return et(e);
      }
      throw Error(o(438, String(e)));
    }
    function lo(e) {
      var t = null, l = oe.updateQueue;
      if (l !== null && (t = l.memoCache), t == null) {
        var n = oe.alternate;
        n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
          data: n.data.map(function(u) {
            return u.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = {
        data: [],
        index: 0
      }), l === null && (l = to(), oe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = Qe;
      return t.index++, l;
    }
    function tl(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Xu(e) {
      var t = Ge();
      return no(t, Te, e);
    }
    function no(e, t, l) {
      var n = e.queue;
      if (n === null) throw Error(o(311));
      n.lastRenderedReducer = l;
      var u = e.baseQueue, r = n.pending;
      if (r !== null) {
        if (u !== null) {
          var d = u.next;
          u.next = r.next, r.next = d;
        }
        t.baseQueue = u = r, n.pending = null;
      }
      if (r = e.baseState, u === null) e.memoizedState = r;
      else {
        t = u.next;
        var m = d = null, b = null, O = t, j = false;
        do {
          var L = O.lane & -536870913;
          if (L !== O.lane ? (ge & L) === L : (Rl & L) === L) {
            var _ = O.revertLane;
            if (_ === 0) b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), L === Nn && (j = true);
            else if ((Rl & _) === _) {
              O = O.next, _ === Nn && (j = true);
              continue;
            } else L = {
              lane: 0,
              revertLane: O.revertLane,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, b === null ? (m = b = L, d = r) : b = b.next = L, oe.lanes |= _, Nl |= _;
            L = O.action, en && l(r, L), r = O.hasEagerState ? O.eagerState : l(r, L);
          } else _ = {
            lane: L,
            revertLane: O.revertLane,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, b === null ? (m = b = _, d = r) : b = b.next = _, oe.lanes |= L, Nl |= L;
          O = O.next;
        } while (O !== null && O !== t);
        if (b === null ? d = r : b.next = m, !pt(r, e.memoizedState) && (Ke = true, j && (l = Mn, l !== null))) throw l;
        e.memoizedState = r, e.baseState = d, e.baseQueue = b, n.lastRenderedState = r;
      }
      return u === null && (n.lanes = 0), [
        e.memoizedState,
        n.dispatch
      ];
    }
    function ao(e) {
      var t = Ge(), l = t.queue;
      if (l === null) throw Error(o(311));
      l.lastRenderedReducer = e;
      var n = l.dispatch, u = l.pending, r = t.memoizedState;
      if (u !== null) {
        l.pending = null;
        var d = u = u.next;
        do
          r = e(r, d.action), d = d.next;
        while (d !== u);
        pt(r, t.memoizedState) || (Ke = true), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), l.lastRenderedState = r;
      }
      return [
        r,
        n
      ];
    }
    function xf(e, t, l) {
      var n = oe, u = Ge(), r = Se;
      if (r) {
        if (l === void 0) throw Error(o(407));
        l = l();
      } else l = t();
      var d = !pt((Te || u).memoizedState, l);
      d && (u.memoizedState = l, Ke = true), u = u.queue;
      var m = Tf.bind(null, n, u, e);
      if (Ma(2048, 8, m, [
        e
      ]), u.getSnapshot !== t || d || qe !== null && qe.memoizedState.tag & 1) {
        if (n.flags |= 2048, jn(9, Qu(), Rf.bind(null, n, u, l, t), null), ze === null) throw Error(o(349));
        r || (Rl & 124) !== 0 || Ef(n, t, l);
      }
      return l;
    }
    function Ef(e, t, l) {
      e.flags |= 16384, e = {
        getSnapshot: t,
        value: l
      }, t = oe.updateQueue, t === null ? (t = to(), oe.updateQueue = t, t.stores = [
        e
      ]) : (l = t.stores, l === null ? t.stores = [
        e
      ] : l.push(e));
    }
    function Rf(e, t, l, n) {
      t.value = l, t.getSnapshot = n, Af(t) && Of(e);
    }
    function Tf(e, t, l) {
      return l(function() {
        Af(t) && Of(e);
      });
    }
    function Af(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var l = t();
        return !pt(e, l);
      } catch {
        return true;
      }
    }
    function Of(e) {
      var t = On(e, 2);
      t !== null && xt(t, e, 2);
    }
    function uo(e) {
      var t = rt();
      if (typeof e == "function") {
        var l = e;
        if (e = l(), en) {
          yl(true);
          try {
            l();
          } finally {
            yl(false);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: e
      }, t;
    }
    function wf(e, t, l, n) {
      return e.baseState = l, no(e, Te, typeof n == "function" ? n : tl);
    }
    function cg(e, t, l, n, u) {
      if (Ku(e)) throw Error(o(485));
      if (e = t.action, e !== null) {
        var r = {
          payload: u,
          action: e,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            r.listeners.push(d);
          }
        };
        D.T !== null ? l(true) : r.isTransition = false, n(r), l = t.pending, l === null ? (r.next = t.pending = r, _f(t, r)) : (r.next = l.next, t.pending = l.next = r);
      }
    }
    function _f(e, t) {
      var l = t.action, n = t.payload, u = e.state;
      if (t.isTransition) {
        var r = D.T, d = {};
        D.T = d;
        try {
          var m = l(u, n), b = D.S;
          b !== null && b(d, m), zf(e, t, m);
        } catch (O) {
          io(e, t, O);
        } finally {
          D.T = r;
        }
      } else try {
        r = l(u, n), zf(e, t, r);
      } catch (O) {
        io(e, t, O);
      }
    }
    function zf(e, t, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
        Nf(e, t, n);
      }, function(n) {
        return io(e, t, n);
      }) : Nf(e, t, l);
    }
    function Nf(e, t, l) {
      t.status = "fulfilled", t.value = l, Mf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, _f(e, l)));
    }
    function io(e, t, l) {
      var n = e.pending;
      if (e.pending = null, n !== null) {
        n = n.next;
        do
          t.status = "rejected", t.reason = l, Mf(t), t = t.next;
        while (t !== n);
      }
      e.action = null;
    }
    function Mf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Cf(e, t) {
      return t;
    }
    function Df(e, t) {
      if (Se) {
        var l = ze.formState;
        if (l !== null) {
          e: {
            var n = oe;
            if (Se) {
              if (Ue) {
                t: {
                  for (var u = Ue, r = Gt; u.nodeType !== 8; ) {
                    if (!r) {
                      u = null;
                      break t;
                    }
                    if (u = jt(u.nextSibling), u === null) {
                      u = null;
                      break t;
                    }
                  }
                  r = u.data, u = r === "F!" || r === "F" ? u : null;
                }
                if (u) {
                  Ue = jt(u.nextSibling), n = u.data === "F!";
                  break e;
                }
              }
              Fl(n);
            }
            n = false;
          }
          n && (t = l[0]);
        }
      }
      return l = rt(), l.memoizedState = l.baseState = t, n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cf,
        lastRenderedState: t
      }, l.queue = n, l = Pf.bind(null, oe, n), n.dispatch = l, n = uo(false), r = fo.bind(null, oe, false, n.queue), n = rt(), u = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, n.queue = u, l = cg.bind(null, oe, u, r, l), u.dispatch = l, n.memoizedState = e, [
        t,
        l,
        false
      ];
    }
    function Uf(e) {
      var t = Ge();
      return jf(t, Te, e);
    }
    function jf(e, t, l) {
      if (t = no(e, t, Cf)[0], e = Xu(tl)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var n = Na(t);
      } catch (d) {
        throw d === Ta ? Lu : d;
      }
      else n = t;
      t = Ge();
      var u = t.queue, r = u.dispatch;
      return l !== t.memoizedState && (oe.flags |= 2048, jn(9, Qu(), sg.bind(null, u, l), null)), [
        n,
        r,
        e
      ];
    }
    function sg(e, t) {
      e.action = t;
    }
    function Bf(e) {
      var t = Ge(), l = Te;
      if (l !== null) return jf(t, l, e);
      Ge(), t = t.memoizedState, l = Ge();
      var n = l.queue.dispatch;
      return l.memoizedState = e, [
        t,
        n,
        false
      ];
    }
    function jn(e, t, l, n) {
      return e = {
        tag: e,
        create: l,
        deps: n,
        inst: t,
        next: null
      }, t = oe.updateQueue, t === null && (t = to(), oe.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
    }
    function Qu() {
      return {
        destroy: void 0,
        resource: void 0
      };
    }
    function Hf() {
      return Ge().memoizedState;
    }
    function Zu(e, t, l, n) {
      var u = rt();
      n = n === void 0 ? null : n, oe.flags |= e, u.memoizedState = jn(1 | t, Qu(), l, n);
    }
    function Ma(e, t, l, n) {
      var u = Ge();
      n = n === void 0 ? null : n;
      var r = u.memoizedState.inst;
      Te !== null && n !== null && Fr(n, Te.memoizedState.deps) ? u.memoizedState = jn(t, r, l, n) : (oe.flags |= e, u.memoizedState = jn(1 | t, r, l, n));
    }
    function Lf(e, t) {
      Zu(8390656, 8, e, t);
    }
    function qf(e, t) {
      Ma(2048, 8, e, t);
    }
    function Gf(e, t) {
      return Ma(4, 2, e, t);
    }
    function Yf(e, t) {
      return Ma(4, 4, e, t);
    }
    function kf(e, t) {
      if (typeof t == "function") {
        e = e();
        var l = t(e);
        return function() {
          typeof l == "function" ? l() : t(null);
        };
      }
      if (t != null) return e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function Vf(e, t, l) {
      l = l != null ? l.concat([
        e
      ]) : null, Ma(4, 4, kf.bind(null, t, e), l);
    }
    function ro() {
    }
    function Xf(e, t) {
      var l = Ge();
      t = t === void 0 ? null : t;
      var n = l.memoizedState;
      return t !== null && Fr(t, n[1]) ? n[0] : (l.memoizedState = [
        e,
        t
      ], e);
    }
    function Qf(e, t) {
      var l = Ge();
      t = t === void 0 ? null : t;
      var n = l.memoizedState;
      if (t !== null && Fr(t, n[1])) return n[0];
      if (n = e(), en) {
        yl(true);
        try {
          e();
        } finally {
          yl(false);
        }
      }
      return l.memoizedState = [
        n,
        t
      ], n;
    }
    function oo(e, t, l) {
      return l === void 0 || (Rl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Jd(), oe.lanes |= e, Nl |= e, l);
    }
    function Zf(e, t, l, n) {
      return pt(l, t) ? l : Cn.current !== null ? (e = oo(e, l, n), pt(e, t) || (Ke = true), e) : (Rl & 42) === 0 ? (Ke = true, e.memoizedState = l) : (e = Jd(), oe.lanes |= e, Nl |= e, t);
    }
    function Kf(e, t, l, n, u) {
      var r = Q.p;
      Q.p = r !== 0 && 8 > r ? r : 8;
      var d = D.T, m = {};
      D.T = m, fo(e, false, t, l);
      try {
        var b = u(), O = D.S;
        if (O !== null && O(m, b), b !== null && typeof b == "object" && typeof b.then == "function") {
          var j = ig(b, n);
          Ca(e, t, j, St(e));
        } else Ca(e, t, n, St(e));
      } catch (L) {
        Ca(e, t, {
          then: function() {
          },
          status: "rejected",
          reason: L
        }, St());
      } finally {
        Q.p = r, D.T = d;
      }
    }
    function fg() {
    }
    function co(e, t, l, n) {
      if (e.tag !== 5) throw Error(o(476));
      var u = Jf(e).queue;
      Kf(e, u, t, k, l === null ? fg : function() {
        return $f(e), l(n);
      });
    }
    function Jf(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: k,
        baseState: k,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: tl,
          lastRenderedState: k
        },
        next: null
      };
      var l = {};
      return t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: tl,
          lastRenderedState: l
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function $f(e) {
      var t = Jf(e).next.queue;
      Ca(e, t, {}, St());
    }
    function so() {
      return et(Fa);
    }
    function Ff() {
      return Ge().memoizedState;
    }
    function Wf() {
      return Ge().memoizedState;
    }
    function dg(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var l = St();
            e = xl(l);
            var n = El(t, e, l);
            n !== null && (xt(n, t, l), Oa(n, t, l)), t = {
              cache: Gr()
            }, e.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function hg(e, t, l) {
      var n = St();
      l = {
        lane: n,
        revertLane: 0,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Ku(e) ? If(t, l) : (l = Nr(e, t, l, n), l !== null && (xt(l, e, n), ed(l, t, n)));
    }
    function Pf(e, t, l) {
      var n = St();
      Ca(e, t, l, n);
    }
    function Ca(e, t, l, n) {
      var u = {
        lane: n,
        revertLane: 0,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Ku(e)) If(t, u);
      else {
        var r = e.alternate;
        if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null)) try {
          var d = t.lastRenderedState, m = r(d, l);
          if (u.hasEagerState = true, u.eagerState = m, pt(m, d)) return Nu(e, t, u, 0), ze === null && zu(), false;
        } catch {
        } finally {
        }
        if (l = Nr(e, t, u, n), l !== null) return xt(l, e, n), ed(l, t, n), true;
      }
      return false;
    }
    function fo(e, t, l, n) {
      if (n = {
        lane: 2,
        revertLane: Xo(),
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Ku(e)) {
        if (t) throw Error(o(479));
      } else t = Nr(e, l, n, 2), t !== null && xt(t, e, 2);
    }
    function Ku(e) {
      var t = e.alternate;
      return e === oe || t !== null && t === oe;
    }
    function If(e, t) {
      Dn = Yu = true;
      var l = e.pending;
      l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
    }
    function ed(e, t, l) {
      if ((l & 4194048) !== 0) {
        var n = t.lanes;
        n &= e.pendingLanes, l |= n, t.lanes = l, rs(e, l);
      }
    }
    var Ju = {
      readContext: et,
      use: Vu,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useLayoutEffect: He,
      useInsertionEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useSyncExternalStore: He,
      useId: He,
      useHostTransitionStatus: He,
      useFormState: He,
      useActionState: He,
      useOptimistic: He,
      useMemoCache: He,
      useCacheRefresh: He
    }, td = {
      readContext: et,
      use: Vu,
      useCallback: function(e, t) {
        return rt().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      },
      useContext: et,
      useEffect: Lf,
      useImperativeHandle: function(e, t, l) {
        l = l != null ? l.concat([
          e
        ]) : null, Zu(4194308, 4, kf.bind(null, t, e), l);
      },
      useLayoutEffect: function(e, t) {
        return Zu(4194308, 4, e, t);
      },
      useInsertionEffect: function(e, t) {
        Zu(4, 2, e, t);
      },
      useMemo: function(e, t) {
        var l = rt();
        t = t === void 0 ? null : t;
        var n = e();
        if (en) {
          yl(true);
          try {
            e();
          } finally {
            yl(false);
          }
        }
        return l.memoizedState = [
          n,
          t
        ], n;
      },
      useReducer: function(e, t, l) {
        var n = rt();
        if (l !== void 0) {
          var u = l(t);
          if (en) {
            yl(true);
            try {
              l(t);
            } finally {
              yl(false);
            }
          }
        } else u = t;
        return n.memoizedState = n.baseState = u, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: u
        }, n.queue = e, e = e.dispatch = hg.bind(null, oe, e), [
          n.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var t = rt();
        return e = {
          current: e
        }, t.memoizedState = e;
      },
      useState: function(e) {
        e = uo(e);
        var t = e.queue, l = Pf.bind(null, oe, t);
        return t.dispatch = l, [
          e.memoizedState,
          l
        ];
      },
      useDebugValue: ro,
      useDeferredValue: function(e, t) {
        var l = rt();
        return oo(l, e, t);
      },
      useTransition: function() {
        var e = uo(false);
        return e = Kf.bind(null, oe, e.queue, true, false), rt().memoizedState = e, [
          false,
          e
        ];
      },
      useSyncExternalStore: function(e, t, l) {
        var n = oe, u = rt();
        if (Se) {
          if (l === void 0) throw Error(o(407));
          l = l();
        } else {
          if (l = t(), ze === null) throw Error(o(349));
          (ge & 124) !== 0 || Ef(n, t, l);
        }
        u.memoizedState = l;
        var r = {
          value: l,
          getSnapshot: t
        };
        return u.queue = r, Lf(Tf.bind(null, n, r, e), [
          e
        ]), n.flags |= 2048, jn(9, Qu(), Rf.bind(null, n, r, l, t), null), l;
      },
      useId: function() {
        var e = rt(), t = ze.identifierPrefix;
        if (Se) {
          var l = Pt, n = Wt;
          l = (n & ~(1 << 32 - mt(n) - 1)).toString(32) + l, t = "\xAB" + t + "R" + l, l = ku++, 0 < l && (t += "H" + l.toString(32)), t += "\xBB";
        } else l = rg++, t = "\xAB" + t + "r" + l.toString(32) + "\xBB";
        return e.memoizedState = t;
      },
      useHostTransitionStatus: so,
      useFormState: Df,
      useActionState: Df,
      useOptimistic: function(e) {
        var t = rt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = fo.bind(null, oe, true, l), l.dispatch = t, [
          e,
          t
        ];
      },
      useMemoCache: lo,
      useCacheRefresh: function() {
        return rt().memoizedState = dg.bind(null, oe);
      }
    }, ld = {
      readContext: et,
      use: Vu,
      useCallback: Xf,
      useContext: et,
      useEffect: qf,
      useImperativeHandle: Vf,
      useInsertionEffect: Gf,
      useLayoutEffect: Yf,
      useMemo: Qf,
      useReducer: Xu,
      useRef: Hf,
      useState: function() {
        return Xu(tl);
      },
      useDebugValue: ro,
      useDeferredValue: function(e, t) {
        var l = Ge();
        return Zf(l, Te.memoizedState, e, t);
      },
      useTransition: function() {
        var e = Xu(tl)[0], t = Ge().memoizedState;
        return [
          typeof e == "boolean" ? e : Na(e),
          t
        ];
      },
      useSyncExternalStore: xf,
      useId: Ff,
      useHostTransitionStatus: so,
      useFormState: Uf,
      useActionState: Uf,
      useOptimistic: function(e, t) {
        var l = Ge();
        return wf(l, Te, e, t);
      },
      useMemoCache: lo,
      useCacheRefresh: Wf
    }, mg = {
      readContext: et,
      use: Vu,
      useCallback: Xf,
      useContext: et,
      useEffect: qf,
      useImperativeHandle: Vf,
      useInsertionEffect: Gf,
      useLayoutEffect: Yf,
      useMemo: Qf,
      useReducer: ao,
      useRef: Hf,
      useState: function() {
        return ao(tl);
      },
      useDebugValue: ro,
      useDeferredValue: function(e, t) {
        var l = Ge();
        return Te === null ? oo(l, e, t) : Zf(l, Te.memoizedState, e, t);
      },
      useTransition: function() {
        var e = ao(tl)[0], t = Ge().memoizedState;
        return [
          typeof e == "boolean" ? e : Na(e),
          t
        ];
      },
      useSyncExternalStore: xf,
      useId: Ff,
      useHostTransitionStatus: so,
      useFormState: Bf,
      useActionState: Bf,
      useOptimistic: function(e, t) {
        var l = Ge();
        return Te !== null ? wf(l, Te, e, t) : (l.baseState = e, [
          e,
          l.queue.dispatch
        ]);
      },
      useMemoCache: lo,
      useCacheRefresh: Wf
    }, Bn = null, Da = 0;
    function $u(e) {
      var t = Da;
      return Da += 1, Bn === null && (Bn = []), hf(Bn, e, t);
    }
    function Ua(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Fu(e, t) {
      throw t.$$typeof === E ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
    }
    function nd(e) {
      var t = e._init;
      return t(e._payload);
    }
    function ad(e) {
      function t(R, x) {
        if (e) {
          var A = R.deletions;
          A === null ? (R.deletions = [
            x
          ], R.flags |= 16) : A.push(x);
        }
      }
      function l(R, x) {
        if (!e) return null;
        for (; x !== null; ) t(R, x), x = x.sibling;
        return null;
      }
      function n(R) {
        for (var x = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? x.set(R.key, R) : x.set(R.index, R), R = R.sibling;
        return x;
      }
      function u(R, x) {
        return R = Ft(R, x), R.index = 0, R.sibling = null, R;
      }
      function r(R, x, A) {
        return R.index = A, e ? (A = R.alternate, A !== null ? (A = A.index, A < x ? (R.flags |= 67108866, x) : A) : (R.flags |= 67108866, x)) : (R.flags |= 1048576, x);
      }
      function d(R) {
        return e && R.alternate === null && (R.flags |= 67108866), R;
      }
      function m(R, x, A, B) {
        return x === null || x.tag !== 6 ? (x = Cr(A, R.mode, B), x.return = R, x) : (x = u(x, A), x.return = R, x);
      }
      function b(R, x, A, B) {
        var W = A.type;
        return W === T ? j(R, x, A.props.children, B, A.key) : x !== null && (x.elementType === W || typeof W == "object" && W !== null && W.$$typeof === $ && nd(W) === x.type) ? (x = u(x, A.props), Ua(x, A), x.return = R, x) : (x = Cu(A.type, A.key, A.props, null, R.mode, B), Ua(x, A), x.return = R, x);
      }
      function O(R, x, A, B) {
        return x === null || x.tag !== 4 || x.stateNode.containerInfo !== A.containerInfo || x.stateNode.implementation !== A.implementation ? (x = Dr(A, R.mode, B), x.return = R, x) : (x = u(x, A.children || []), x.return = R, x);
      }
      function j(R, x, A, B, W) {
        return x === null || x.tag !== 7 ? (x = Zl(A, R.mode, B, W), x.return = R, x) : (x = u(x, A), x.return = R, x);
      }
      function L(R, x, A) {
        if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return x = Cr("" + x, R.mode, A), x.return = R, x;
        if (typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case w:
              return A = Cu(x.type, x.key, x.props, null, R.mode, A), Ua(A, x), A.return = R, A;
            case q:
              return x = Dr(x, R.mode, A), x.return = R, x;
            case $:
              var B = x._init;
              return x = B(x._payload), L(R, x, A);
          }
          if (Me(x) || Be(x)) return x = Zl(x, R.mode, A, null), x.return = R, x;
          if (typeof x.then == "function") return L(R, $u(x), A);
          if (x.$$typeof === Z) return L(R, Bu(R, x), A);
          Fu(R, x);
        }
        return null;
      }
      function _(R, x, A, B) {
        var W = x !== null ? x.key : null;
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return W !== null ? null : m(R, x, "" + A, B);
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case w:
              return A.key === W ? b(R, x, A, B) : null;
            case q:
              return A.key === W ? O(R, x, A, B) : null;
            case $:
              return W = A._init, A = W(A._payload), _(R, x, A, B);
          }
          if (Me(A) || Be(A)) return W !== null ? null : j(R, x, A, B, null);
          if (typeof A.then == "function") return _(R, x, $u(A), B);
          if (A.$$typeof === Z) return _(R, x, Bu(R, A), B);
          Fu(R, A);
        }
        return null;
      }
      function N(R, x, A, B, W) {
        if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return R = R.get(A) || null, m(x, R, "" + B, W);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case w:
              return R = R.get(B.key === null ? A : B.key) || null, b(x, R, B, W);
            case q:
              return R = R.get(B.key === null ? A : B.key) || null, O(x, R, B, W);
            case $:
              var se = B._init;
              return B = se(B._payload), N(R, x, A, B, W);
          }
          if (Me(B) || Be(B)) return R = R.get(A) || null, j(x, R, B, W, null);
          if (typeof B.then == "function") return N(R, x, A, $u(B), W);
          if (B.$$typeof === Z) return N(R, x, A, Bu(x, B), W);
          Fu(x, B);
        }
        return null;
      }
      function ne(R, x, A, B) {
        for (var W = null, se = null, ee = x, le = x = 0, $e = null; ee !== null && le < A.length; le++) {
          ee.index > le ? ($e = ee, ee = null) : $e = ee.sibling;
          var be = _(R, ee, A[le], B);
          if (be === null) {
            ee === null && (ee = $e);
            break;
          }
          e && ee && be.alternate === null && t(R, ee), x = r(be, x, le), se === null ? W = be : se.sibling = be, se = be, ee = $e;
        }
        if (le === A.length) return l(R, ee), Se && Jl(R, le), W;
        if (ee === null) {
          for (; le < A.length; le++) ee = L(R, A[le], B), ee !== null && (x = r(ee, x, le), se === null ? W = ee : se.sibling = ee, se = ee);
          return Se && Jl(R, le), W;
        }
        for (ee = n(ee); le < A.length; le++) $e = N(ee, R, le, A[le], B), $e !== null && (e && $e.alternate !== null && ee.delete($e.key === null ? le : $e.key), x = r($e, x, le), se === null ? W = $e : se.sibling = $e, se = $e);
        return e && ee.forEach(function(ql) {
          return t(R, ql);
        }), Se && Jl(R, le), W;
      }
      function te(R, x, A, B) {
        if (A == null) throw Error(o(151));
        for (var W = null, se = null, ee = x, le = x = 0, $e = null, be = A.next(); ee !== null && !be.done; le++, be = A.next()) {
          ee.index > le ? ($e = ee, ee = null) : $e = ee.sibling;
          var ql = _(R, ee, be.value, B);
          if (ql === null) {
            ee === null && (ee = $e);
            break;
          }
          e && ee && ql.alternate === null && t(R, ee), x = r(ql, x, le), se === null ? W = ql : se.sibling = ql, se = ql, ee = $e;
        }
        if (be.done) return l(R, ee), Se && Jl(R, le), W;
        if (ee === null) {
          for (; !be.done; le++, be = A.next()) be = L(R, be.value, B), be !== null && (x = r(be, x, le), se === null ? W = be : se.sibling = be, se = be);
          return Se && Jl(R, le), W;
        }
        for (ee = n(ee); !be.done; le++, be = A.next()) be = N(ee, R, le, be.value, B), be !== null && (e && be.alternate !== null && ee.delete(be.key === null ? le : be.key), x = r(be, x, le), se === null ? W = be : se.sibling = be, se = be);
        return e && ee.forEach(function(pv) {
          return t(R, pv);
        }), Se && Jl(R, le), W;
      }
      function Oe(R, x, A, B) {
        if (typeof A == "object" && A !== null && A.type === T && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case w:
              e: {
                for (var W = A.key; x !== null; ) {
                  if (x.key === W) {
                    if (W = A.type, W === T) {
                      if (x.tag === 7) {
                        l(R, x.sibling), B = u(x, A.props.children), B.return = R, R = B;
                        break e;
                      }
                    } else if (x.elementType === W || typeof W == "object" && W !== null && W.$$typeof === $ && nd(W) === x.type) {
                      l(R, x.sibling), B = u(x, A.props), Ua(B, A), B.return = R, R = B;
                      break e;
                    }
                    l(R, x);
                    break;
                  } else t(R, x);
                  x = x.sibling;
                }
                A.type === T ? (B = Zl(A.props.children, R.mode, B, A.key), B.return = R, R = B) : (B = Cu(A.type, A.key, A.props, null, R.mode, B), Ua(B, A), B.return = R, R = B);
              }
              return d(R);
            case q:
              e: {
                for (W = A.key; x !== null; ) {
                  if (x.key === W) if (x.tag === 4 && x.stateNode.containerInfo === A.containerInfo && x.stateNode.implementation === A.implementation) {
                    l(R, x.sibling), B = u(x, A.children || []), B.return = R, R = B;
                    break e;
                  } else {
                    l(R, x);
                    break;
                  }
                  else t(R, x);
                  x = x.sibling;
                }
                B = Dr(A, R.mode, B), B.return = R, R = B;
              }
              return d(R);
            case $:
              return W = A._init, A = W(A._payload), Oe(R, x, A, B);
          }
          if (Me(A)) return ne(R, x, A, B);
          if (Be(A)) {
            if (W = Be(A), typeof W != "function") throw Error(o(150));
            return A = W.call(A), te(R, x, A, B);
          }
          if (typeof A.then == "function") return Oe(R, x, $u(A), B);
          if (A.$$typeof === Z) return Oe(R, x, Bu(R, A), B);
          Fu(R, A);
        }
        return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, x !== null && x.tag === 6 ? (l(R, x.sibling), B = u(x, A), B.return = R, R = B) : (l(R, x), B = Cr(A, R.mode, B), B.return = R, R = B), d(R)) : l(R, x);
      }
      return function(R, x, A, B) {
        try {
          Da = 0;
          var W = Oe(R, x, A, B);
          return Bn = null, W;
        } catch (ee) {
          if (ee === Ta || ee === Lu) throw ee;
          var se = yt(29, ee, null, R.mode);
          return se.lanes = B, se.return = R, se;
        } finally {
        }
      };
    }
    var Hn = ad(true), ud = ad(false), _t = Y(null), Yt = null;
    function Tl(e) {
      var t = e.alternate;
      X(Ve, Ve.current & 1), X(_t, e), Yt === null && (t === null || Cn.current !== null || t.memoizedState !== null) && (Yt = e);
    }
    function id(e) {
      if (e.tag === 22) {
        if (X(Ve, Ve.current), X(_t, e), Yt === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Yt = e);
        }
      } else Al();
    }
    function Al() {
      X(Ve, Ve.current), X(_t, _t.current);
    }
    function ll(e) {
      K(_t), Yt === e && (Yt = null), K(Ve);
    }
    var Ve = Y(0);
    function Wu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var l = t.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || lc(l))) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function ho(e, t, l, n) {
      t = e.memoizedState, l = l(n, t), l = l == null ? t : v({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    var mo = {
      enqueueSetState: function(e, t, l) {
        e = e._reactInternals;
        var n = St(), u = xl(n);
        u.payload = t, l != null && (u.callback = l), t = El(e, u, n), t !== null && (xt(t, e, n), Oa(t, e, n));
      },
      enqueueReplaceState: function(e, t, l) {
        e = e._reactInternals;
        var n = St(), u = xl(n);
        u.tag = 1, u.payload = t, l != null && (u.callback = l), t = El(e, u, n), t !== null && (xt(t, e, n), Oa(t, e, n));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var l = St(), n = xl(l);
        n.tag = 2, t != null && (n.callback = t), t = El(e, n, l), t !== null && (xt(t, e, l), Oa(t, e, l));
      }
    };
    function rd(e, t, l, n, u, r, d) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, r, d) : t.prototype && t.prototype.isPureReactComponent ? !ya(l, n) || !ya(u, r) : true;
    }
    function od(e, t, l, n) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && mo.enqueueReplaceState(t, t.state, null);
    }
    function tn(e, t) {
      var l = t;
      if ("ref" in t) {
        l = {};
        for (var n in t) n !== "ref" && (l[n] = t[n]);
      }
      if (e = e.defaultProps) {
        l === t && (l = v({}, l));
        for (var u in e) l[u] === void 0 && (l[u] = e[u]);
      }
      return l;
    }
    var Pu = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    };
    function cd(e) {
      Pu(e);
    }
    function sd(e) {
      console.error(e);
    }
    function fd(e) {
      Pu(e);
    }
    function Iu(e, t) {
      try {
        var l = e.onUncaughtError;
        l(t.value, {
          componentStack: t.stack
        });
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    function dd(e, t, l) {
      try {
        var n = e.onCaughtError;
        n(l.value, {
          componentStack: l.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (u) {
        setTimeout(function() {
          throw u;
        });
      }
    }
    function po(e, t, l) {
      return l = xl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        Iu(e, t);
      }, l;
    }
    function hd(e) {
      return e = xl(e), e.tag = 3, e;
    }
    function md(e, t, l, n) {
      var u = l.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var r = n.value;
        e.payload = function() {
          return u(r);
        }, e.callback = function() {
          dd(t, l, n);
        };
      }
      var d = l.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        dd(t, l, n), typeof u != "function" && (Ml === null ? Ml = /* @__PURE__ */ new Set([
          this
        ]) : Ml.add(this));
        var m = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: m !== null ? m : ""
        });
      });
    }
    function pg(e, t, l, n, u) {
      if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
        if (t = l.alternate, t !== null && xa(t, l, u, true), l = _t.current, l !== null) {
          switch (l.tag) {
            case 13:
              return Yt === null ? qo() : l.alternate === null && je === 0 && (je = 3), l.flags &= -257, l.flags |= 65536, l.lanes = u, n === Vr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([
                n
              ]) : t.add(n), Yo(e, n, u)), false;
            case 22:
              return l.flags |= 65536, n === Vr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  n
                ])
              }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([
                n
              ]) : l.add(n)), Yo(e, n, u)), false;
          }
          throw Error(o(435, l.tag));
        }
        return Yo(e, n, u), qo(), false;
      }
      if (Se) return t = _t.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, n !== Br && (e = Error(o(422), {
        cause: n
      }), Sa(Tt(e, l)))) : (n !== Br && (t = Error(o(423), {
        cause: n
      }), Sa(Tt(t, l))), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, n = Tt(n, l), u = po(e.stateNode, n, u), Zr(e, u), je !== 4 && (je = 2)), false;
      var r = Error(o(520), {
        cause: n
      });
      if (r = Tt(r, l), Ya === null ? Ya = [
        r
      ] : Ya.push(r), je !== 4 && (je = 2), t === null) return true;
      n = Tt(n, l), l = t;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, e = u & -u, l.lanes |= e, e = po(l.stateNode, n, e), Zr(l, e), false;
          case 1:
            if (t = l.type, r = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Ml === null || !Ml.has(r)))) return l.flags |= 65536, u &= -u, l.lanes |= u, u = hd(u), md(u, e, l, n), Zr(l, u), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var pd = Error(o(461)), Ke = false;
    function Fe(e, t, l, n) {
      t.child = e === null ? ud(t, null, l, n) : Hn(t, e.child, l, n);
    }
    function yd(e, t, l, n, u) {
      l = l.render;
      var r = t.ref;
      if ("ref" in n) {
        var d = {};
        for (var m in n) m !== "ref" && (d[m] = n[m]);
      } else d = n;
      return Pl(t), n = Wr(e, t, l, d, r, u), m = Pr(), e !== null && !Ke ? (Ir(e, t, u), nl(e, t, u)) : (Se && m && Ur(t), t.flags |= 1, Fe(e, t, n, u), t.child);
    }
    function gd(e, t, l, n, u) {
      if (e === null) {
        var r = l.type;
        return typeof r == "function" && !Mr(r) && r.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = r, vd(e, t, r, n, u)) : (e = Cu(l.type, null, n, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (r = e.child, !Ro(e, u)) {
        var d = r.memoizedProps;
        if (l = l.compare, l = l !== null ? l : ya, l(d, n) && e.ref === t.ref) return nl(e, t, u);
      }
      return t.flags |= 1, e = Ft(r, n), e.ref = t.ref, e.return = t, t.child = e;
    }
    function vd(e, t, l, n, u) {
      if (e !== null) {
        var r = e.memoizedProps;
        if (ya(r, n) && e.ref === t.ref) if (Ke = false, t.pendingProps = n = r, Ro(e, u)) (e.flags & 131072) !== 0 && (Ke = true);
        else return t.lanes = e.lanes, nl(e, t, u);
      }
      return yo(e, t, l, n, u);
    }
    function bd(e, t, l) {
      var n = t.pendingProps, u = n.children, r = e !== null ? e.memoizedState : null;
      if (n.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (n = r !== null ? r.baseLanes | l : l, e !== null) {
            for (u = t.child = e.child, r = 0; u !== null; ) r = r | u.lanes | u.childLanes, u = u.sibling;
            t.childLanes = r & ~n;
          } else t.childLanes = 0, t.child = null;
          return Sd(e, t, n, l);
        }
        if ((l & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, e !== null && Hu(t, r !== null ? r.cachePool : null), r !== null ? vf(t, r) : Jr(), id(t);
        else return t.lanes = t.childLanes = 536870912, Sd(e, t, r !== null ? r.baseLanes | l : l, l);
      } else r !== null ? (Hu(t, r.cachePool), vf(t, r), Al(), t.memoizedState = null) : (e !== null && Hu(t, null), Jr(), Al());
      return Fe(e, t, u, l), t.child;
    }
    function Sd(e, t, l, n) {
      var u = kr();
      return u = u === null ? null : {
        parent: ke._currentValue,
        pool: u
      }, t.memoizedState = {
        baseLanes: l,
        cachePool: u
      }, e !== null && Hu(t, null), Jr(), id(t), e !== null && xa(e, t, n, true), null;
    }
    function ei(e, t) {
      var l = t.ref;
      if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(o(284));
        (e === null || e.ref !== l) && (t.flags |= 4194816);
      }
    }
    function yo(e, t, l, n, u) {
      return Pl(t), l = Wr(e, t, l, n, void 0, u), n = Pr(), e !== null && !Ke ? (Ir(e, t, u), nl(e, t, u)) : (Se && n && Ur(t), t.flags |= 1, Fe(e, t, l, u), t.child);
    }
    function xd(e, t, l, n, u, r) {
      return Pl(t), t.updateQueue = null, l = Sf(t, n, l, u), bf(e), n = Pr(), e !== null && !Ke ? (Ir(e, t, r), nl(e, t, r)) : (Se && n && Ur(t), t.flags |= 1, Fe(e, t, l, r), t.child);
    }
    function Ed(e, t, l, n, u) {
      if (Pl(t), t.stateNode === null) {
        var r = wn, d = l.contextType;
        typeof d == "object" && d !== null && (r = et(d)), r = new l(n, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = mo, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = n, r.state = t.memoizedState, r.refs = {}, Xr(t), d = l.contextType, r.context = typeof d == "object" && d !== null ? et(d) : wn, r.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && (ho(t, l, d, n), r.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (d = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), d !== r.state && mo.enqueueReplaceState(r, r.state, null), _a(t, n, r, u), wa(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = true;
      } else if (e === null) {
        r = t.stateNode;
        var m = t.memoizedProps, b = tn(l, m);
        r.props = b;
        var O = r.context, j = l.contextType;
        d = wn, typeof j == "object" && j !== null && (d = et(j));
        var L = l.getDerivedStateFromProps;
        j = typeof L == "function" || typeof r.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, j || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m || O !== d) && od(t, r, n, d), Sl = false;
        var _ = t.memoizedState;
        r.state = _, _a(t, n, r, u), wa(), O = t.memoizedState, m || _ !== O || Sl ? (typeof L == "function" && (ho(t, l, L, n), O = t.memoizedState), (b = Sl || rd(t, l, b, n, _, O, d)) ? (j || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = O), r.props = n, r.state = O, r.context = d, n = b) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = false);
      } else {
        r = t.stateNode, Qr(e, t), d = t.memoizedProps, j = tn(l, d), r.props = j, L = t.pendingProps, _ = r.context, O = l.contextType, b = wn, typeof O == "object" && O !== null && (b = et(O)), m = l.getDerivedStateFromProps, (O = typeof m == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (d !== L || _ !== b) && od(t, r, n, b), Sl = false, _ = t.memoizedState, r.state = _, _a(t, n, r, u), wa();
        var N = t.memoizedState;
        d !== L || _ !== N || Sl || e !== null && e.dependencies !== null && ju(e.dependencies) ? (typeof m == "function" && (ho(t, l, m, n), N = t.memoizedState), (j = Sl || rd(t, l, j, n, _, N, b) || e !== null && e.dependencies !== null && ju(e.dependencies)) ? (O || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(n, N, b), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(n, N, b)), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = N), r.props = n, r.state = N, r.context = b, n = j) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), n = false);
      }
      return r = n, ei(e, t), n = (t.flags & 128) !== 0, r || n ? (r = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && n ? (t.child = Hn(t, e.child, null, u), t.child = Hn(t, null, l, u)) : Fe(e, t, l, u), t.memoizedState = r.state, e = t.child) : e = nl(e, t, u), e;
    }
    function Rd(e, t, l, n) {
      return ba(), t.flags |= 256, Fe(e, t, l, n), t.child;
    }
    var go = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function vo(e) {
      return {
        baseLanes: e,
        cachePool: sf()
      };
    }
    function bo(e, t, l) {
      return e = e !== null ? e.childLanes & ~l : 0, t && (e |= zt), e;
    }
    function Td(e, t, l) {
      var n = t.pendingProps, u = false, r = (t.flags & 128) !== 0, d;
      if ((d = r) || (d = e !== null && e.memoizedState === null ? false : (Ve.current & 2) !== 0), d && (u = true, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Se) {
          if (u ? Tl(t) : Al(), Se) {
            var m = Ue, b;
            if (b = m) {
              e: {
                for (b = m, m = Gt; b.nodeType !== 8; ) {
                  if (!m) {
                    m = null;
                    break e;
                  }
                  if (b = jt(b.nextSibling), b === null) {
                    m = null;
                    break e;
                  }
                }
                m = b;
              }
              m !== null ? (t.memoizedState = {
                dehydrated: m,
                treeContext: Kl !== null ? {
                  id: Wt,
                  overflow: Pt
                } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, b = yt(18, null, null, 0), b.stateNode = m, b.return = t, t.child = b, at = t, Ue = null, b = true) : b = false;
            }
            b || Fl(t);
          }
          if (m = t.memoizedState, m !== null && (m = m.dehydrated, m !== null)) return lc(m) ? t.lanes = 32 : t.lanes = 536870912, null;
          ll(t);
        }
        return m = n.children, n = n.fallback, u ? (Al(), u = t.mode, m = ti({
          mode: "hidden",
          children: m
        }, u), n = Zl(n, u, l, null), m.return = t, n.return = t, m.sibling = n, t.child = m, u = t.child, u.memoizedState = vo(l), u.childLanes = bo(e, d, l), t.memoizedState = go, n) : (Tl(t), So(t, m));
      }
      if (b = e.memoizedState, b !== null && (m = b.dehydrated, m !== null)) {
        if (r) t.flags & 256 ? (Tl(t), t.flags &= -257, t = xo(e, t, l)) : t.memoizedState !== null ? (Al(), t.child = e.child, t.flags |= 128, t = null) : (Al(), u = n.fallback, m = t.mode, n = ti({
          mode: "visible",
          children: n.children
        }, m), u = Zl(u, m, l, null), u.flags |= 2, n.return = t, u.return = t, n.sibling = u, t.child = n, Hn(t, e.child, null, l), n = t.child, n.memoizedState = vo(l), n.childLanes = bo(e, d, l), t.memoizedState = go, t = u);
        else if (Tl(t), lc(m)) {
          if (d = m.nextSibling && m.nextSibling.dataset, d) var O = d.dgst;
          d = O, n = Error(o(419)), n.stack = "", n.digest = d, Sa({
            value: n,
            source: null,
            stack: null
          }), t = xo(e, t, l);
        } else if (Ke || xa(e, t, l, false), d = (l & e.childLanes) !== 0, Ke || d) {
          if (d = ze, d !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : lr(n), n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== b.retryLane)) throw b.retryLane = n, On(e, n), xt(d, e, n), pd;
          m.data === "$?" || qo(), t = xo(e, t, l);
        } else m.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, Ue = jt(m.nextSibling), at = t, Se = true, $l = null, Gt = false, e !== null && (Ot[wt++] = Wt, Ot[wt++] = Pt, Ot[wt++] = Kl, Wt = e.id, Pt = e.overflow, Kl = t), t = So(t, n.children), t.flags |= 4096);
        return t;
      }
      return u ? (Al(), u = n.fallback, m = t.mode, b = e.child, O = b.sibling, n = Ft(b, {
        mode: "hidden",
        children: n.children
      }), n.subtreeFlags = b.subtreeFlags & 65011712, O !== null ? u = Ft(O, u) : (u = Zl(u, m, l, null), u.flags |= 2), u.return = t, n.return = t, n.sibling = u, t.child = n, n = u, u = t.child, m = e.child.memoizedState, m === null ? m = vo(l) : (b = m.cachePool, b !== null ? (O = ke._currentValue, b = b.parent !== O ? {
        parent: O,
        pool: O
      } : b) : b = sf(), m = {
        baseLanes: m.baseLanes | l,
        cachePool: b
      }), u.memoizedState = m, u.childLanes = bo(e, d, l), t.memoizedState = go, n) : (Tl(t), l = e.child, e = l.sibling, l = Ft(l, {
        mode: "visible",
        children: n.children
      }), l.return = t, l.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [
        e
      ], t.flags |= 16) : d.push(e)), t.child = l, t.memoizedState = null, l);
    }
    function So(e, t) {
      return t = ti({
        mode: "visible",
        children: t
      }, e.mode), t.return = e, e.child = t;
    }
    function ti(e, t) {
      return e = yt(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function xo(e, t, l) {
      return Hn(t, e.child, null, l), e = So(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Ad(e, t, l) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t), Lr(e.return, t, l);
    }
    function Eo(e, t, l, n, u) {
      var r = e.memoizedState;
      r === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: l,
        tailMode: u
      } : (r.isBackwards = t, r.rendering = null, r.renderingStartTime = 0, r.last = n, r.tail = l, r.tailMode = u);
    }
    function Od(e, t, l) {
      var n = t.pendingProps, u = n.revealOrder, r = n.tail;
      if (Fe(e, t, n.children, l), n = Ve.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ad(e, l, t);
          else if (e.tag === 19) Ad(e, l, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        n &= 1;
      }
      switch (X(Ve, n), u) {
        case "forwards":
          for (l = t.child, u = null; l !== null; ) e = l.alternate, e !== null && Wu(e) === null && (u = l), l = l.sibling;
          l = u, l === null ? (u = t.child, t.child = null) : (u = l.sibling, l.sibling = null), Eo(t, false, u, l, r);
          break;
        case "backwards":
          for (l = null, u = t.child, t.child = null; u !== null; ) {
            if (e = u.alternate, e !== null && Wu(e) === null) {
              t.child = u;
              break;
            }
            e = u.sibling, u.sibling = l, l = u, u = e;
          }
          Eo(t, true, l, null, r);
          break;
        case "together":
          Eo(t, false, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function nl(e, t, l) {
      if (e !== null && (t.dependencies = e.dependencies), Nl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
        if (xa(e, t, l, false), (l & t.childLanes) === 0) return null;
      } else return null;
      if (e !== null && t.child !== e.child) throw Error(o(153));
      if (t.child !== null) {
        for (e = t.child, l = Ft(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; ) e = e.sibling, l = l.sibling = Ft(e, e.pendingProps), l.return = t;
        l.sibling = null;
      }
      return t.child;
    }
    function Ro(e, t) {
      return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && ju(e)));
    }
    function yg(e, t, l) {
      switch (t.tag) {
        case 3:
          we(t, t.stateNode.containerInfo), bl(t, ke, e.memoizedState.cache), ba();
          break;
        case 27:
        case 5:
          hl(t);
          break;
        case 4:
          we(t, t.stateNode.containerInfo);
          break;
        case 10:
          bl(t, t.type, t.memoizedProps.value);
          break;
        case 13:
          var n = t.memoizedState;
          if (n !== null) return n.dehydrated !== null ? (Tl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Td(e, t, l) : (Tl(t), e = nl(e, t, l), e !== null ? e.sibling : null);
          Tl(t);
          break;
        case 19:
          var u = (e.flags & 128) !== 0;
          if (n = (l & t.childLanes) !== 0, n || (xa(e, t, l, false), n = (l & t.childLanes) !== 0), u) {
            if (n) return Od(e, t, l);
            t.flags |= 128;
          }
          if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), X(Ve, Ve.current), n) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, bd(e, t, l);
        case 24:
          bl(t, ke, e.memoizedState.cache);
      }
      return nl(e, t, l);
    }
    function wd(e, t, l) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps) Ke = true;
      else {
        if (!Ro(e, l) && (t.flags & 128) === 0) return Ke = false, yg(e, t, l);
        Ke = (e.flags & 131072) !== 0;
      }
      else Ke = false, Se && (t.flags & 1048576) !== 0 && lf(t, Uu, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: {
            e = t.pendingProps;
            var n = t.elementType, u = n._init;
            if (n = u(n._payload), t.type = n, typeof n == "function") Mr(n) ? (e = tn(n, e), t.tag = 1, t = Ed(null, t, n, e, l)) : (t.tag = 0, t = yo(null, t, n, e, l));
            else {
              if (n != null) {
                if (u = n.$$typeof, u === ue) {
                  t.tag = 11, t = yd(null, t, n, e, l);
                  break e;
                } else if (u === ye) {
                  t.tag = 14, t = gd(null, t, n, e, l);
                  break e;
                }
              }
              throw t = Ct(n) || n, Error(o(306, t, ""));
            }
          }
          return t;
        case 0:
          return yo(e, t, t.type, t.pendingProps, l);
        case 1:
          return n = t.type, u = tn(n, t.pendingProps), Ed(e, t, n, u, l);
        case 3:
          e: {
            if (we(t, t.stateNode.containerInfo), e === null) throw Error(o(387));
            n = t.pendingProps;
            var r = t.memoizedState;
            u = r.element, Qr(e, t), _a(t, n, null, l);
            var d = t.memoizedState;
            if (n = d.cache, bl(t, ke, n), n !== r.cache && qr(t, [
              ke
            ], l, true), wa(), n = d.element, r.isDehydrated) if (r = {
              element: n,
              isDehydrated: false,
              cache: d.cache
            }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
              t = Rd(e, t, n, l);
              break e;
            } else if (n !== u) {
              u = Tt(Error(o(424)), t), Sa(u), t = Rd(e, t, n, l);
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ue = jt(e.firstChild), at = t, Se = true, $l = null, Gt = true, l = ud(t, null, n, l), t.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
            else {
              if (ba(), n === u) {
                t = nl(e, t, l);
                break e;
              }
              Fe(e, t, n, l);
            }
            t = t.child;
          }
          return t;
        case 26:
          return ei(e, t), e === null ? (l = Mh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : Se || (l = t.type, e = t.pendingProps, n = pi(ae.current).createElement(l), n[Ie] = t, n[ut] = e, Pe(n, l, e), Ze(n), t.stateNode = n) : t.memoizedState = Mh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return hl(t), e === null && Se && (n = t.stateNode = _h(t.type, t.pendingProps, ae.current), at = t, Gt = true, u = Ue, Ul(t.type) ? (nc = u, Ue = jt(n.firstChild)) : Ue = u), Fe(e, t, t.pendingProps.children, l), ei(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && Se && ((u = n = Ue) && (n = Xg(n, t.type, t.pendingProps, Gt), n !== null ? (t.stateNode = n, at = t, Ue = jt(n.firstChild), Gt = false, u = true) : u = false), u || Fl(t)), hl(t), u = t.type, r = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = r.children, Io(u, r) ? n = null : d !== null && Io(u, d) && (t.flags |= 32), t.memoizedState !== null && (u = Wr(e, t, og, null, null, l), Fa._currentValue = u), ei(e, t), Fe(e, t, n, l), t.child;
        case 6:
          return e === null && Se && ((e = l = Ue) && (l = Qg(l, t.pendingProps, Gt), l !== null ? (t.stateNode = l, at = t, Ue = null, e = true) : e = false), e || Fl(t)), null;
        case 13:
          return Td(e, t, l);
        case 4:
          return we(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Hn(t, null, n, l) : Fe(e, t, n, l), t.child;
        case 11:
          return yd(e, t, t.type, t.pendingProps, l);
        case 7:
          return Fe(e, t, t.pendingProps, l), t.child;
        case 8:
          return Fe(e, t, t.pendingProps.children, l), t.child;
        case 12:
          return Fe(e, t, t.pendingProps.children, l), t.child;
        case 10:
          return n = t.pendingProps, bl(t, t.type, n.value), Fe(e, t, n.children, l), t.child;
        case 9:
          return u = t.type._context, n = t.pendingProps.children, Pl(t), u = et(u), n = n(u), t.flags |= 1, Fe(e, t, n, l), t.child;
        case 14:
          return gd(e, t, t.type, t.pendingProps, l);
        case 15:
          return vd(e, t, t.type, t.pendingProps, l);
        case 19:
          return Od(e, t, l);
        case 31:
          return n = t.pendingProps, l = t.mode, n = {
            mode: n.mode,
            children: n.children
          }, e === null ? (l = ti(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Ft(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
        case 22:
          return bd(e, t, l);
        case 24:
          return Pl(t), n = et(ke), e === null ? (u = kr(), u === null && (u = ze, r = Gr(), u.pooledCache = r, r.refCount++, r !== null && (u.pooledCacheLanes |= l), u = r), t.memoizedState = {
            parent: n,
            cache: u
          }, Xr(t), bl(t, ke, u)) : ((e.lanes & l) !== 0 && (Qr(e, t), _a(t, null, null, l), wa()), u = e.memoizedState, r = t.memoizedState, u.parent !== n ? (u = {
            parent: n,
            cache: n
          }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), bl(t, ke, n)) : (n = r.cache, bl(t, ke, n), n !== u.cache && qr(t, [
            ke
          ], l, true))), Fe(e, t, t.pendingProps.children, l), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(o(156, t.tag));
    }
    function al(e) {
      e.flags |= 4;
    }
    function _d(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
      else if (e.flags |= 16777216, !Bh(t)) {
        if (t = _t.current, t !== null && ((ge & 4194048) === ge ? Yt !== null : (ge & 62914560) !== ge && (ge & 536870912) === 0 || t !== Yt)) throw Aa = Vr, ff;
        e.flags |= 8192;
      }
    }
    function li(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? us() : 536870912, e.lanes |= t, Yn |= t);
    }
    function ja(e, t) {
      if (!Se) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; ) t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; ) l.alternate !== null && (n = l), l = l.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
    }
    function Ce(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
      if (t) for (var u = e.child; u !== null; ) l |= u.lanes | u.childLanes, n |= u.subtreeFlags & 65011712, n |= u.flags & 65011712, u.return = e, u = u.sibling;
      else for (u = e.child; u !== null; ) l |= u.lanes | u.childLanes, n |= u.subtreeFlags, n |= u.flags, u.return = e, u = u.sibling;
      return e.subtreeFlags |= n, e.childLanes = l, t;
    }
    function gg(e, t, l) {
      var n = t.pendingProps;
      switch (jr(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ce(t), null;
        case 1:
          return Ce(t), null;
        case 3:
          return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), el(ke), dt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (va(t) ? al(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, uf())), Ce(t), null;
        case 26:
          return l = t.memoizedState, e === null ? (al(t), l !== null ? (Ce(t), _d(t, l)) : (Ce(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (al(t), Ce(t), _d(t, l)) : (Ce(t), t.flags &= -16777217) : (e.memoizedProps !== n && al(t), Ce(t), t.flags &= -16777217), null;
        case 27:
          ml(t), l = ae.current;
          var u = t.type;
          if (e !== null && t.stateNode != null) e.memoizedProps !== n && al(t);
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(o(166));
              return Ce(t), null;
            }
            e = F.current, va(t) ? nf(t) : (e = _h(u, n, l), t.stateNode = e, al(t));
          }
          return Ce(t), null;
        case 5:
          if (ml(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && al(t);
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(o(166));
              return Ce(t), null;
            }
            if (e = F.current, va(t)) nf(t);
            else {
              switch (u = pi(ae.current), e) {
                case 1:
                  e = u.createElementNS("http://www.w3.org/2000/svg", l);
                  break;
                case 2:
                  e = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                  break;
                default:
                  switch (l) {
                    case "svg":
                      e = u.createElementNS("http://www.w3.org/2000/svg", l);
                      break;
                    case "math":
                      e = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                      break;
                    case "script":
                      e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof n.is == "string" ? u.createElement("select", {
                        is: n.is
                      }) : u.createElement("select"), n.multiple ? e.multiple = true : n.size && (e.size = n.size);
                      break;
                    default:
                      e = typeof n.is == "string" ? u.createElement(l, {
                        is: n.is
                      }) : u.createElement(l);
                  }
              }
              e[Ie] = t, e[ut] = n;
              e: for (u = t.child; u !== null; ) {
                if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
                else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                  u.child.return = u, u = u.child;
                  continue;
                }
                if (u === t) break e;
                for (; u.sibling === null; ) {
                  if (u.return === null || u.return === t) break e;
                  u = u.return;
                }
                u.sibling.return = u.return, u = u.sibling;
              }
              t.stateNode = e;
              e: switch (Pe(e, l, n), l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!n.autoFocus;
                  break e;
                case "img":
                  e = true;
                  break e;
                default:
                  e = false;
              }
              e && al(t);
            }
          }
          return Ce(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== n && al(t);
          else {
            if (typeof n != "string" && t.stateNode === null) throw Error(o(166));
            if (e = ae.current, va(t)) {
              if (e = t.stateNode, l = t.memoizedProps, n = null, u = at, u !== null) switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
              e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === true || xh(e.nodeValue, l)), e || Fl(t);
            } else e = pi(e).createTextNode(n), e[Ie] = t, t.stateNode = e;
          }
          return Ce(t), null;
        case 13:
          if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (u = va(t), n !== null && n.dehydrated !== null) {
              if (e === null) {
                if (!u) throw Error(o(318));
                if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
                u[Ie] = t;
              } else ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Ce(t), u = false;
            } else u = uf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = true;
            if (!u) return t.flags & 256 ? (ll(t), t) : (ll(t), null);
          }
          if (ll(t), (t.flags & 128) !== 0) return t.lanes = l, t;
          if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
            n = t.child, u = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (u = n.alternate.memoizedState.cachePool.pool);
            var r = null;
            n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== u && (n.flags |= 2048);
          }
          return l !== e && l && (t.child.flags |= 8192), li(t, t.updateQueue), Ce(t), null;
        case 4:
          return dt(), e === null && Jo(t.stateNode.containerInfo), Ce(t), null;
        case 10:
          return el(t.type), Ce(t), null;
        case 19:
          if (K(Ve), u = t.memoizedState, u === null) return Ce(t), null;
          if (n = (t.flags & 128) !== 0, r = u.rendering, r === null) if (n) ja(u, false);
          else {
            if (je !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (r = Wu(e), r !== null) {
                for (t.flags |= 128, ja(u, false), e = r.updateQueue, t.updateQueue = e, li(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; ) tf(l, e), l = l.sibling;
                return X(Ve, Ve.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
            u.tail !== null && qt() > ui && (t.flags |= 128, n = true, ja(u, false), t.lanes = 4194304);
          }
          else {
            if (!n) if (e = Wu(r), e !== null) {
              if (t.flags |= 128, n = true, e = e.updateQueue, t.updateQueue = e, li(t, e), ja(u, true), u.tail === null && u.tailMode === "hidden" && !r.alternate && !Se) return Ce(t), null;
            } else 2 * qt() - u.renderingStartTime > ui && l !== 536870912 && (t.flags |= 128, n = true, ja(u, false), t.lanes = 4194304);
            u.isBackwards ? (r.sibling = t.child, t.child = r) : (e = u.last, e !== null ? e.sibling = r : t.child = r, u.last = r);
          }
          return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = qt(), t.sibling = null, e = Ve.current, X(Ve, n ? e & 1 | 2 : e & 1), t) : (Ce(t), null);
        case 22:
        case 23:
          return ll(t), $r(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), l = t.updateQueue, l !== null && li(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && K(Il), null;
        case 24:
          return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), el(ke), Ce(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, t.tag));
    }
    function vg(e, t) {
      switch (jr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return el(ke), dt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return ml(t), null;
        case 13:
          if (ll(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(o(340));
            ba();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return K(Ve), null;
        case 4:
          return dt(), null;
        case 10:
          return el(t.type), null;
        case 22:
        case 23:
          return ll(t), $r(), e !== null && K(Il), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24:
          return el(ke), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function zd(e, t) {
      switch (jr(t), t.tag) {
        case 3:
          el(ke), dt();
          break;
        case 26:
        case 27:
        case 5:
          ml(t);
          break;
        case 4:
          dt();
          break;
        case 13:
          ll(t);
          break;
        case 19:
          K(Ve);
          break;
        case 10:
          el(t.type);
          break;
        case 22:
        case 23:
          ll(t), $r(), e !== null && K(Il);
          break;
        case 24:
          el(ke);
      }
    }
    function Ba(e, t) {
      try {
        var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
        if (n !== null) {
          var u = n.next;
          l = u;
          do {
            if ((l.tag & e) === e) {
              n = void 0;
              var r = l.create, d = l.inst;
              n = r(), d.destroy = n;
            }
            l = l.next;
          } while (l !== u);
        }
      } catch (m) {
        _e(t, t.return, m);
      }
    }
    function Ol(e, t, l) {
      try {
        var n = t.updateQueue, u = n !== null ? n.lastEffect : null;
        if (u !== null) {
          var r = u.next;
          n = r;
          do {
            if ((n.tag & e) === e) {
              var d = n.inst, m = d.destroy;
              if (m !== void 0) {
                d.destroy = void 0, u = t;
                var b = l, O = m;
                try {
                  O();
                } catch (j) {
                  _e(u, b, j);
                }
              }
            }
            n = n.next;
          } while (n !== r);
        }
      } catch (j) {
        _e(t, t.return, j);
      }
    }
    function Nd(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var l = e.stateNode;
        try {
          gf(t, l);
        } catch (n) {
          _e(e, e.return, n);
        }
      }
    }
    function Md(e, t, l) {
      l.props = tn(e.type, e.memoizedProps), l.state = e.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (n) {
        _e(e, t, n);
      }
    }
    function Ha(e, t) {
      try {
        var l = e.ref;
        if (l !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var n = e.stateNode;
              break;
            case 30:
              n = e.stateNode;
              break;
            default:
              n = e.stateNode;
          }
          typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
        }
      } catch (u) {
        _e(e, t, u);
      }
    }
    function kt(e, t) {
      var l = e.ref, n = e.refCleanup;
      if (l !== null) if (typeof n == "function") try {
        n();
      } catch (u) {
        _e(e, t, u);
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (u) {
        _e(e, t, u);
      }
      else l.current = null;
    }
    function Cd(e) {
      var t = e.type, l = e.memoizedProps, n = e.stateNode;
      try {
        e: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            l.autoFocus && n.focus();
            break e;
          case "img":
            l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
        }
      } catch (u) {
        _e(e, e.return, u);
      }
    }
    function To(e, t, l) {
      try {
        var n = e.stateNode;
        qg(n, e.type, l, t), n[ut] = t;
      } catch (u) {
        _e(e, e.return, u);
      }
    }
    function Dd(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ul(e.type) || e.tag === 4;
    }
    function Ao(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Dd(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Ul(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Oo(e, t, l) {
      var n = e.tag;
      if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = mi));
      else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for (Oo(e, t, l), e = e.sibling; e !== null; ) Oo(e, t, l), e = e.sibling;
    }
    function ni(e, t, l) {
      var n = e.tag;
      if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
      else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode), e = e.child, e !== null)) for (ni(e, t, l), e = e.sibling; e !== null; ) ni(e, t, l), e = e.sibling;
    }
    function Ud(e) {
      var t = e.stateNode, l = e.memoizedProps;
      try {
        for (var n = e.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
        Pe(t, n, l), t[Ie] = e, t[ut] = l;
      } catch (r) {
        _e(e, e.return, r);
      }
    }
    var ul = false, Le = false, wo = false, jd = typeof WeakSet == "function" ? WeakSet : Set, Je = null;
    function bg(e, t) {
      if (e = e.containerInfo, Wo = xi, e = Qs(e), Tr(e)) {
        if ("selectionStart" in e) var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var u = n.anchorOffset, r = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, r.nodeType;
            } catch {
              l = null;
              break e;
            }
            var d = 0, m = -1, b = -1, O = 0, j = 0, L = e, _ = null;
            t: for (; ; ) {
              for (var N; L !== l || u !== 0 && L.nodeType !== 3 || (m = d + u), L !== r || n !== 0 && L.nodeType !== 3 || (b = d + n), L.nodeType === 3 && (d += L.nodeValue.length), (N = L.firstChild) !== null; ) _ = L, L = N;
              for (; ; ) {
                if (L === e) break t;
                if (_ === l && ++O === u && (m = d), _ === r && ++j === n && (b = d), (N = L.nextSibling) !== null) break;
                L = _, _ = L.parentNode;
              }
              L = N;
            }
            l = m === -1 || b === -1 ? null : {
              start: m,
              end: b
            };
          } else l = null;
        }
        l = l || {
          start: 0,
          end: 0
        };
      } else l = null;
      for (Po = {
        focusedElem: e,
        selectionRange: l
      }, xi = false, Je = t; Je !== null; ) if (t = Je, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Je = e;
      else for (; Je !== null; ) {
        switch (t = Je, r = t.alternate, e = t.flags, t.tag) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((e & 1024) !== 0 && r !== null) {
              e = void 0, l = t, u = r.memoizedProps, r = r.memoizedState, n = l.stateNode;
              try {
                var ne = tn(l.type, u, l.elementType === l.type);
                e = n.getSnapshotBeforeUpdate(ne, r), n.__reactInternalSnapshotBeforeUpdate = e;
              } catch (te) {
                _e(l, l.return, te);
              }
            }
            break;
          case 3:
            if ((e & 1024) !== 0) {
              if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) tc(e);
              else if (l === 1) switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  tc(e);
                  break;
                default:
                  e.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((e & 1024) !== 0) throw Error(o(163));
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, Je = e;
          break;
        }
        Je = t.return;
      }
    }
    function Bd(e, t, l) {
      var n = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          wl(e, l), n & 4 && Ba(5, l);
          break;
        case 1:
          if (wl(e, l), n & 4) if (e = l.stateNode, t === null) try {
            e.componentDidMount();
          } catch (d) {
            _e(l, l.return, d);
          }
          else {
            var u = tn(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              _e(l, l.return, d);
            }
          }
          n & 64 && Nd(l), n & 512 && Ha(l, l.return);
          break;
        case 3:
          if (wl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
            if (t = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
            try {
              gf(e, t);
            } catch (d) {
              _e(l, l.return, d);
            }
          }
          break;
        case 27:
          t === null && n & 4 && Ud(l);
        case 26:
        case 5:
          wl(e, l), t === null && n & 4 && Cd(l), n & 512 && Ha(l, l.return);
          break;
        case 12:
          wl(e, l);
          break;
        case 13:
          wl(e, l), n & 4 && qd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = _g.bind(null, l), Zg(e, l))));
          break;
        case 22:
          if (n = l.memoizedState !== null || ul, !n) {
            t = t !== null && t.memoizedState !== null || Le, u = ul;
            var r = Le;
            ul = n, (Le = t) && !r ? _l(e, l, (l.subtreeFlags & 8772) !== 0) : wl(e, l), ul = u, Le = r;
          }
          break;
        case 30:
          break;
        default:
          wl(e, l);
      }
    }
    function Hd(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Hd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ur(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var Ne = null, ot = false;
    function il(e, t, l) {
      for (l = l.child; l !== null; ) Ld(e, t, l), l = l.sibling;
    }
    function Ld(e, t, l) {
      if (ht && typeof ht.onCommitFiberUnmount == "function") try {
        ht.onCommitFiberUnmount(aa, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          Le || kt(l, t), il(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          Le || kt(l, t);
          var n = Ne, u = ot;
          Ul(l.type) && (Ne = l.stateNode, ot = false), il(e, t, l), Za(l.stateNode), Ne = n, ot = u;
          break;
        case 5:
          Le || kt(l, t);
        case 6:
          if (n = Ne, u = ot, Ne = null, il(e, t, l), Ne = n, ot = u, Ne !== null) if (ot) try {
            (Ne.nodeType === 9 ? Ne.body : Ne.nodeName === "HTML" ? Ne.ownerDocument.body : Ne).removeChild(l.stateNode);
          } catch (r) {
            _e(l, t, r);
          }
          else try {
            Ne.removeChild(l.stateNode);
          } catch (r) {
            _e(l, t, r);
          }
          break;
        case 18:
          Ne !== null && (ot ? (e = Ne, Oh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), eu(e)) : Oh(Ne, l.stateNode));
          break;
        case 4:
          n = Ne, u = ot, Ne = l.stateNode.containerInfo, ot = true, il(e, t, l), Ne = n, ot = u;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Le || Ol(2, l, t), Le || Ol(4, l, t), il(e, t, l);
          break;
        case 1:
          Le || (kt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && Md(l, t, n)), il(e, t, l);
          break;
        case 21:
          il(e, t, l);
          break;
        case 22:
          Le = (n = Le) || l.memoizedState !== null, il(e, t, l), Le = n;
          break;
        default:
          il(e, t, l);
      }
    }
    function qd(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        eu(e);
      } catch (l) {
        _e(t, t.return, l);
      }
    }
    function Sg(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new jd()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new jd()), t;
        default:
          throw Error(o(435, e.tag));
      }
    }
    function _o(e, t) {
      var l = Sg(e);
      t.forEach(function(n) {
        var u = zg.bind(null, e, n);
        l.has(n) || (l.add(n), n.then(u, u));
      });
    }
    function gt(e, t) {
      var l = t.deletions;
      if (l !== null) for (var n = 0; n < l.length; n++) {
        var u = l[n], r = e, d = t, m = d;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Ul(m.type)) {
                Ne = m.stateNode, ot = false;
                break e;
              }
              break;
            case 5:
              Ne = m.stateNode, ot = false;
              break e;
            case 3:
            case 4:
              Ne = m.stateNode.containerInfo, ot = true;
              break e;
          }
          m = m.return;
        }
        if (Ne === null) throw Error(o(160));
        Ld(r, d, u), Ne = null, ot = false, r = u.alternate, r !== null && (r.return = null), u.return = null;
      }
      if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) Gd(t, e), t = t.sibling;
    }
    var Ut = null;
    function Gd(e, t) {
      var l = e.alternate, n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          gt(t, e), vt(e), n & 4 && (Ol(3, e, e.return), Ba(3, e), Ol(5, e, e.return));
          break;
        case 1:
          gt(t, e), vt(e), n & 512 && (Le || l === null || kt(l, l.return)), n & 64 && ul && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
          break;
        case 26:
          var u = Ut;
          if (gt(t, e), vt(e), n & 512 && (Le || l === null || kt(l, l.return)), n & 4) {
            var r = l !== null ? l.memoizedState : null;
            if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
              e: {
                n = e.type, l = e.memoizedProps, u = u.ownerDocument || u;
                t: switch (n) {
                  case "title":
                    r = u.getElementsByTagName("title")[0], (!r || r[ra] || r[Ie] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = u.createElement(n), u.head.insertBefore(r, u.querySelector("head > title"))), Pe(r, n, l), r[Ie] = e, Ze(r), n = r;
                    break e;
                  case "link":
                    var d = Uh("link", "href", u).get(n + (l.href || ""));
                    if (d) {
                      for (var m = 0; m < d.length; m++) if (r = d[m], r.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && r.getAttribute("rel") === (l.rel == null ? null : l.rel) && r.getAttribute("title") === (l.title == null ? null : l.title) && r.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        d.splice(m, 1);
                        break t;
                      }
                    }
                    r = u.createElement(n), Pe(r, n, l), u.head.appendChild(r);
                    break;
                  case "meta":
                    if (d = Uh("meta", "content", u).get(n + (l.content || ""))) {
                      for (m = 0; m < d.length; m++) if (r = d[m], r.getAttribute("content") === (l.content == null ? null : "" + l.content) && r.getAttribute("name") === (l.name == null ? null : l.name) && r.getAttribute("property") === (l.property == null ? null : l.property) && r.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && r.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        d.splice(m, 1);
                        break t;
                      }
                    }
                    r = u.createElement(n), Pe(r, n, l), u.head.appendChild(r);
                    break;
                  default:
                    throw Error(o(468, n));
                }
                r[Ie] = e, Ze(r), n = r;
              }
              e.stateNode = n;
            } else jh(u, e.type, e.stateNode);
            else e.stateNode = Dh(u, n, e.memoizedProps);
            else r !== n ? (r === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : r.count--, n === null ? jh(u, e.type, e.stateNode) : Dh(u, n, e.memoizedProps)) : n === null && e.stateNode !== null && To(e, e.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          gt(t, e), vt(e), n & 512 && (Le || l === null || kt(l, l.return)), l !== null && n & 4 && To(e, e.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (gt(t, e), vt(e), n & 512 && (Le || l === null || kt(l, l.return)), e.flags & 32) {
            u = e.stateNode;
            try {
              bn(u, "");
            } catch (N) {
              _e(e, e.return, N);
            }
          }
          n & 4 && e.stateNode != null && (u = e.memoizedProps, To(e, u, l !== null ? l.memoizedProps : u)), n & 1024 && (wo = true);
          break;
        case 6:
          if (gt(t, e), vt(e), n & 4) {
            if (e.stateNode === null) throw Error(o(162));
            n = e.memoizedProps, l = e.stateNode;
            try {
              l.nodeValue = n;
            } catch (N) {
              _e(e, e.return, N);
            }
          }
          break;
        case 3:
          if (vi = null, u = Ut, Ut = yi(t.containerInfo), gt(t, e), Ut = u, vt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
            eu(t.containerInfo);
          } catch (N) {
            _e(e, e.return, N);
          }
          wo && (wo = false, Yd(e));
          break;
        case 4:
          n = Ut, Ut = yi(e.stateNode.containerInfo), gt(t, e), vt(e), Ut = n;
          break;
        case 12:
          gt(t, e), vt(e);
          break;
        case 13:
          gt(t, e), vt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Uo = qt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _o(e, n)));
          break;
        case 22:
          u = e.memoizedState !== null;
          var b = l !== null && l.memoizedState !== null, O = ul, j = Le;
          if (ul = O || u, Le = j || b, gt(t, e), Le = j, ul = O, vt(e), n & 8192) e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (l === null || b || ul || Le || ln(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                b = l = t;
                try {
                  if (r = b.stateNode, u) d = r.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    m = b.stateNode;
                    var L = b.memoizedProps.style, _ = L != null && L.hasOwnProperty("display") ? L.display : null;
                    m.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (N) {
                  _e(b, b.return, N);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = u ? "" : b.memoizedProps;
                } catch (N) {
                  _e(b, b.return, N);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
          n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, _o(e, l))));
          break;
        case 19:
          gt(t, e), vt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _o(e, n)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          gt(t, e), vt(e);
      }
    }
    function vt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var l, n = e.return; n !== null; ) {
            if (Dd(n)) {
              l = n;
              break;
            }
            n = n.return;
          }
          if (l == null) throw Error(o(160));
          switch (l.tag) {
            case 27:
              var u = l.stateNode, r = Ao(e);
              ni(e, r, u);
              break;
            case 5:
              var d = l.stateNode;
              l.flags & 32 && (bn(d, ""), l.flags &= -33);
              var m = Ao(e);
              ni(e, m, d);
              break;
            case 3:
            case 4:
              var b = l.stateNode.containerInfo, O = Ao(e);
              Oo(e, O, b);
              break;
            default:
              throw Error(o(161));
          }
        } catch (j) {
          _e(e, e.return, j);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Yd(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
        var t = e;
        Yd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
    }
    function wl(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Bd(e, t.alternate, t), t = t.sibling;
    }
    function ln(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ol(4, t, t.return), ln(t);
            break;
          case 1:
            kt(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && Md(t, t.return, l), ln(t);
            break;
          case 27:
            Za(t.stateNode);
          case 26:
          case 5:
            kt(t, t.return), ln(t);
            break;
          case 22:
            t.memoizedState === null && ln(t);
            break;
          case 30:
            ln(t);
            break;
          default:
            ln(t);
        }
        e = e.sibling;
      }
    }
    function _l(e, t, l) {
      for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var n = t.alternate, u = e, r = t, d = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            _l(u, r, l), Ba(4, r);
            break;
          case 1:
            if (_l(u, r, l), n = r, u = n.stateNode, typeof u.componentDidMount == "function") try {
              u.componentDidMount();
            } catch (O) {
              _e(n, n.return, O);
            }
            if (n = r, u = n.updateQueue, u !== null) {
              var m = n.stateNode;
              try {
                var b = u.shared.hiddenCallbacks;
                if (b !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < b.length; u++) yf(b[u], m);
              } catch (O) {
                _e(n, n.return, O);
              }
            }
            l && d & 64 && Nd(r), Ha(r, r.return);
            break;
          case 27:
            Ud(r);
          case 26:
          case 5:
            _l(u, r, l), l && n === null && d & 4 && Cd(r), Ha(r, r.return);
            break;
          case 12:
            _l(u, r, l);
            break;
          case 13:
            _l(u, r, l), l && d & 4 && qd(u, r);
            break;
          case 22:
            r.memoizedState === null && _l(u, r, l), Ha(r, r.return);
            break;
          case 30:
            break;
          default:
            _l(u, r, l);
        }
        t = t.sibling;
      }
    }
    function zo(e, t) {
      var l = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ea(l));
    }
    function No(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ea(e));
    }
    function Vt(e, t, l, n) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) kd(e, t, l, n), t = t.sibling;
    }
    function kd(e, t, l, n) {
      var u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Vt(e, t, l, n), u & 2048 && Ba(9, t);
          break;
        case 1:
          Vt(e, t, l, n);
          break;
        case 3:
          Vt(e, t, l, n), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ea(e)));
          break;
        case 12:
          if (u & 2048) {
            Vt(e, t, l, n), e = t.stateNode;
            try {
              var r = t.memoizedProps, d = r.id, m = r.onPostCommit;
              typeof m == "function" && m(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (b) {
              _e(t, t.return, b);
            }
          } else Vt(e, t, l, n);
          break;
        case 13:
          Vt(e, t, l, n);
          break;
        case 23:
          break;
        case 22:
          r = t.stateNode, d = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? Vt(e, t, l, n) : La(e, t) : r._visibility & 2 ? Vt(e, t, l, n) : (r._visibility |= 2, Ln(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), u & 2048 && zo(d, t);
          break;
        case 24:
          Vt(e, t, l, n), u & 2048 && No(t.alternate, t);
          break;
        default:
          Vt(e, t, l, n);
      }
    }
    function Ln(e, t, l, n, u) {
      for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
        var r = e, d = t, m = l, b = n, O = d.flags;
        switch (d.tag) {
          case 0:
          case 11:
          case 15:
            Ln(r, d, m, b, u), Ba(8, d);
            break;
          case 23:
            break;
          case 22:
            var j = d.stateNode;
            d.memoizedState !== null ? j._visibility & 2 ? Ln(r, d, m, b, u) : La(r, d) : (j._visibility |= 2, Ln(r, d, m, b, u)), u && O & 2048 && zo(d.alternate, d);
            break;
          case 24:
            Ln(r, d, m, b, u), u && O & 2048 && No(d.alternate, d);
            break;
          default:
            Ln(r, d, m, b, u);
        }
        t = t.sibling;
      }
    }
    function La(e, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var l = e, n = t, u = n.flags;
        switch (n.tag) {
          case 22:
            La(l, n), u & 2048 && zo(n.alternate, n);
            break;
          case 24:
            La(l, n), u & 2048 && No(n.alternate, n);
            break;
          default:
            La(l, n);
        }
        t = t.sibling;
      }
    }
    var qa = 8192;
    function qn(e) {
      if (e.subtreeFlags & qa) for (e = e.child; e !== null; ) Vd(e), e = e.sibling;
    }
    function Vd(e) {
      switch (e.tag) {
        case 26:
          qn(e), e.flags & qa && e.memoizedState !== null && uv(Ut, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          qn(e);
          break;
        case 3:
        case 4:
          var t = Ut;
          Ut = yi(e.stateNode.containerInfo), qn(e), Ut = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = qa, qa = 16777216, qn(e), qa = t) : qn(e));
          break;
        default:
          qn(e);
      }
    }
    function Xd(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Ga(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Je = n, Zd(n, e);
        }
        Xd(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Qd(e), e = e.sibling;
    }
    function Qd(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ga(e), e.flags & 2048 && Ol(9, e, e.return);
          break;
        case 3:
          Ga(e);
          break;
        case 12:
          Ga(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ai(e)) : Ga(e);
          break;
        default:
          Ga(e);
      }
    }
    function ai(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Je = n, Zd(n, e);
        }
        Xd(e);
      }
      for (e = e.child; e !== null; ) {
        switch (t = e, t.tag) {
          case 0:
          case 11:
          case 15:
            Ol(8, t, t.return), ai(t);
            break;
          case 22:
            l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, ai(t));
            break;
          default:
            ai(t);
        }
        e = e.sibling;
      }
    }
    function Zd(e, t) {
      for (; Je !== null; ) {
        var l = Je;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Ol(8, l, t);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var n = l.memoizedState.cachePool.pool;
              n != null && n.refCount++;
            }
            break;
          case 24:
            Ea(l.memoizedState.cache);
        }
        if (n = l.child, n !== null) n.return = l, Je = n;
        else e: for (l = e; Je !== null; ) {
          n = Je;
          var u = n.sibling, r = n.return;
          if (Hd(n), n === l) {
            Je = null;
            break e;
          }
          if (u !== null) {
            u.return = r, Je = u;
            break e;
          }
          Je = r;
        }
      }
    }
    var xg = {
      getCacheForType: function(e) {
        var t = et(ke), l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l;
      }
    }, Eg = typeof WeakMap == "function" ? WeakMap : Map, Ee = 0, ze = null, me = null, ge = 0, Re = 0, bt = null, zl = false, Gn = false, Mo = false, rl = 0, je = 0, Nl = 0, nn = 0, Co = 0, zt = 0, Yn = 0, Ya = null, ct = null, Do = false, Uo = 0, ui = 1 / 0, ii = null, Ml = null, We = 0, Cl = null, kn = null, Vn = 0, jo = 0, Bo = null, Kd = null, ka = 0, Ho = null;
    function St() {
      if ((Ee & 2) !== 0 && ge !== 0) return ge & -ge;
      if (D.T !== null) {
        var e = Nn;
        return e !== 0 ? e : Xo();
      }
      return os();
    }
    function Jd() {
      zt === 0 && (zt = (ge & 536870912) === 0 || Se ? as() : 536870912);
      var e = _t.current;
      return e !== null && (e.flags |= 32), zt;
    }
    function xt(e, t, l) {
      (e === ze && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) && (Xn(e, 0), Dl(e, ge, zt, false)), ia(e, l), ((Ee & 2) === 0 || e !== ze) && (e === ze && ((Ee & 2) === 0 && (nn |= l), je === 4 && Dl(e, ge, zt, false)), Xt(e));
    }
    function $d(e, t, l) {
      if ((Ee & 6) !== 0) throw Error(o(327));
      var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ua(e, t), u = n ? Ag(e, t) : Go(e, t, true), r = n;
      do {
        if (u === 0) {
          Gn && !n && Dl(e, t, 0, false);
          break;
        } else {
          if (l = e.current.alternate, r && !Rg(l)) {
            u = Go(e, t, false), r = false;
            continue;
          }
          if (u === 2) {
            if (r = t, e.errorRecoveryDisabledLanes & r) var d = 0;
            else d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                var m = e;
                u = Ya;
                var b = m.current.memoizedState.isDehydrated;
                if (b && (Xn(m, d).flags |= 256), d = Go(m, d, false), d !== 2) {
                  if (Mo && !b) {
                    m.errorRecoveryDisabledLanes |= r, nn |= r, u = 4;
                    break e;
                  }
                  r = ct, ct = u, r !== null && (ct === null ? ct = r : ct.push.apply(ct, r));
                }
                u = d;
              }
              if (r = false, u !== 2) continue;
            }
          }
          if (u === 1) {
            Xn(e, 0), Dl(e, t, 0, true);
            break;
          }
          e: {
            switch (n = e, r = u, r) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Dl(n, t, zt, !zl);
                break e;
              case 2:
                ct = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((t & 62914560) === t && (u = Uo + 300 - qt(), 10 < u)) {
              if (Dl(n, t, zt, !zl), gu(n, 0, true) !== 0) break e;
              n.timeoutHandle = Th(Fd.bind(null, n, l, ct, ii, Do, t, zt, nn, Yn, zl, r, 2, -0, 0), u);
              break e;
            }
            Fd(n, l, ct, ii, Do, t, zt, nn, Yn, zl, r, 0, -0, 0);
          }
        }
        break;
      } while (true);
      Xt(e);
    }
    function Fd(e, t, l, n, u, r, d, m, b, O, j, L, _, N) {
      if (e.timeoutHandle = -1, L = t.subtreeFlags, (L & 8192 || (L & 16785408) === 16785408) && ($a = {
        stylesheets: null,
        count: 0,
        unsuspend: av
      }, Vd(t), L = iv(), L !== null)) {
        e.cancelPendingCommit = L(nh.bind(null, e, t, r, l, n, u, d, m, b, j, 1, _, N)), Dl(e, r, d, !O);
        return;
      }
      nh(e, t, r, l, n, u, d, m, b);
    }
    function Rg(e) {
      for (var t = e; ; ) {
        var l = t.tag;
        if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for (var n = 0; n < l.length; n++) {
          var u = l[n], r = u.getSnapshot;
          u = u.value;
          try {
            if (!pt(r(), u)) return false;
          } catch {
            return false;
          }
        }
        if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function Dl(e, t, l, n) {
      t &= ~Co, t &= ~nn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
      for (var u = t; 0 < u; ) {
        var r = 31 - mt(u), d = 1 << r;
        n[r] = -1, u &= ~d;
      }
      l !== 0 && is(e, l, t);
    }
    function ri() {
      return (Ee & 6) === 0 ? (Va(0), false) : true;
    }
    function Lo() {
      if (me !== null) {
        if (Re === 0) var e = me.return;
        else e = me, It = Wl = null, eo(e), Bn = null, Da = 0, e = me;
        for (; e !== null; ) zd(e.alternate, e), e = e.return;
        me = null;
      }
    }
    function Xn(e, t) {
      var l = e.timeoutHandle;
      l !== -1 && (e.timeoutHandle = -1, Yg(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Lo(), ze = e, me = l = Ft(e.current, null), ge = t, Re = 0, bt = null, zl = false, Gn = ua(e, t), Mo = false, Yn = zt = Co = nn = Nl = je = 0, ct = Ya = null, Do = false, (t & 8) !== 0 && (t |= t & 32);
      var n = e.entangledLanes;
      if (n !== 0) for (e = e.entanglements, n &= t; 0 < n; ) {
        var u = 31 - mt(n), r = 1 << u;
        t |= e[u], n &= ~r;
      }
      return rl = t, zu(), l;
    }
    function Wd(e, t) {
      oe = null, D.H = Ju, t === Ta || t === Lu ? (t = mf(), Re = 3) : t === ff ? (t = mf(), Re = 4) : Re = t === pd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, bt = t, me === null && (je = 1, Iu(e, Tt(t, e.current)));
    }
    function Pd() {
      var e = D.H;
      return D.H = Ju, e === null ? Ju : e;
    }
    function Id() {
      var e = D.A;
      return D.A = xg, e;
    }
    function qo() {
      je = 4, zl || (ge & 4194048) !== ge && _t.current !== null || (Gn = true), (Nl & 134217727) === 0 && (nn & 134217727) === 0 || ze === null || Dl(ze, ge, zt, false);
    }
    function Go(e, t, l) {
      var n = Ee;
      Ee |= 2;
      var u = Pd(), r = Id();
      (ze !== e || ge !== t) && (ii = null, Xn(e, t)), t = false;
      var d = je;
      e: do
        try {
          if (Re !== 0 && me !== null) {
            var m = me, b = bt;
            switch (Re) {
              case 8:
                Lo(), d = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                _t.current === null && (t = true);
                var O = Re;
                if (Re = 0, bt = null, Qn(e, m, b, O), l && Gn) {
                  d = 0;
                  break e;
                }
                break;
              default:
                O = Re, Re = 0, bt = null, Qn(e, m, b, O);
            }
          }
          Tg(), d = je;
          break;
        } catch (j) {
          Wd(e, j);
        }
      while (true);
      return t && e.shellSuspendCounter++, It = Wl = null, Ee = n, D.H = u, D.A = r, me === null && (ze = null, ge = 0, zu()), d;
    }
    function Tg() {
      for (; me !== null; ) eh(me);
    }
    function Ag(e, t) {
      var l = Ee;
      Ee |= 2;
      var n = Pd(), u = Id();
      ze !== e || ge !== t ? (ii = null, ui = qt() + 500, Xn(e, t)) : Gn = ua(e, t);
      e: do
        try {
          if (Re !== 0 && me !== null) {
            t = me;
            var r = bt;
            t: switch (Re) {
              case 1:
                Re = 0, bt = null, Qn(e, t, r, 1);
                break;
              case 2:
              case 9:
                if (df(r)) {
                  Re = 0, bt = null, th(t);
                  break;
                }
                t = function() {
                  Re !== 2 && Re !== 9 || ze !== e || (Re = 7), Xt(e);
                }, r.then(t, t);
                break e;
              case 3:
                Re = 7;
                break e;
              case 4:
                Re = 5;
                break e;
              case 7:
                df(r) ? (Re = 0, bt = null, th(t)) : (Re = 0, bt = null, Qn(e, t, r, 7));
                break;
              case 5:
                var d = null;
                switch (me.tag) {
                  case 26:
                    d = me.memoizedState;
                  case 5:
                  case 27:
                    var m = me;
                    if (!d || Bh(d)) {
                      Re = 0, bt = null;
                      var b = m.sibling;
                      if (b !== null) me = b;
                      else {
                        var O = m.return;
                        O !== null ? (me = O, oi(O)) : me = null;
                      }
                      break t;
                    }
                }
                Re = 0, bt = null, Qn(e, t, r, 5);
                break;
              case 6:
                Re = 0, bt = null, Qn(e, t, r, 6);
                break;
              case 8:
                Lo(), je = 6;
                break e;
              default:
                throw Error(o(462));
            }
          }
          Og();
          break;
        } catch (j) {
          Wd(e, j);
        }
      while (true);
      return It = Wl = null, D.H = n, D.A = u, Ee = l, me !== null ? 0 : (ze = null, ge = 0, zu(), je);
    }
    function Og() {
      for (; me !== null && !Jp(); ) eh(me);
    }
    function eh(e) {
      var t = wd(e.alternate, e, rl);
      e.memoizedProps = e.pendingProps, t === null ? oi(e) : me = t;
    }
    function th(e) {
      var t = e, l = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = xd(l, t, t.pendingProps, t.type, void 0, ge);
          break;
        case 11:
          t = xd(l, t, t.pendingProps, t.type.render, t.ref, ge);
          break;
        case 5:
          eo(t);
        default:
          zd(l, t), t = me = tf(t, rl), t = wd(l, t, rl);
      }
      e.memoizedProps = e.pendingProps, t === null ? oi(e) : me = t;
    }
    function Qn(e, t, l, n) {
      It = Wl = null, eo(t), Bn = null, Da = 0;
      var u = t.return;
      try {
        if (pg(e, u, t, l, ge)) {
          je = 1, Iu(e, Tt(l, e.current)), me = null;
          return;
        }
      } catch (r) {
        if (u !== null) throw me = u, r;
        je = 1, Iu(e, Tt(l, e.current)), me = null;
        return;
      }
      t.flags & 32768 ? (Se || n === 1 ? e = true : Gn || (ge & 536870912) !== 0 ? e = false : (zl = e = true, (n === 2 || n === 9 || n === 3 || n === 6) && (n = _t.current, n !== null && n.tag === 13 && (n.flags |= 16384))), lh(t, e)) : oi(t);
    }
    function oi(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          lh(t, zl);
          return;
        }
        e = t.return;
        var l = gg(t.alternate, t, rl);
        if (l !== null) {
          me = l;
          return;
        }
        if (t = t.sibling, t !== null) {
          me = t;
          return;
        }
        me = t = e;
      } while (t !== null);
      je === 0 && (je = 5);
    }
    function lh(e, t) {
      do {
        var l = vg(e.alternate, e);
        if (l !== null) {
          l.flags &= 32767, me = l;
          return;
        }
        if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
          me = e;
          return;
        }
        me = e = l;
      } while (e !== null);
      je = 6, me = null;
    }
    function nh(e, t, l, n, u, r, d, m, b) {
      e.cancelPendingCommit = null;
      do
        ci();
      while (We !== 0);
      if ((Ee & 6) !== 0) throw Error(o(327));
      if (t !== null) {
        if (t === e.current) throw Error(o(177));
        if (r = t.lanes | t.childLanes, r |= zr, ay(e, l, r, d, m, b), e === ze && (me = ze = null, ge = 0), kn = t, Cl = e, Vn = l, jo = r, Bo = u, Kd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ng(mu, function() {
          return oh(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
          n = D.T, D.T = null, u = Q.p, Q.p = 2, d = Ee, Ee |= 4;
          try {
            bg(e, t, l);
          } finally {
            Ee = d, Q.p = u, D.T = n;
          }
        }
        We = 1, ah(), uh(), ih();
      }
    }
    function ah() {
      if (We === 1) {
        We = 0;
        var e = Cl, t = kn, l = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || l) {
          l = D.T, D.T = null;
          var n = Q.p;
          Q.p = 2;
          var u = Ee;
          Ee |= 4;
          try {
            Gd(t, e);
            var r = Po, d = Qs(e.containerInfo), m = r.focusedElem, b = r.selectionRange;
            if (d !== m && m && m.ownerDocument && Xs(m.ownerDocument.documentElement, m)) {
              if (b !== null && Tr(m)) {
                var O = b.start, j = b.end;
                if (j === void 0 && (j = O), "selectionStart" in m) m.selectionStart = O, m.selectionEnd = Math.min(j, m.value.length);
                else {
                  var L = m.ownerDocument || document, _ = L && L.defaultView || window;
                  if (_.getSelection) {
                    var N = _.getSelection(), ne = m.textContent.length, te = Math.min(b.start, ne), Oe = b.end === void 0 ? te : Math.min(b.end, ne);
                    !N.extend && te > Oe && (d = Oe, Oe = te, te = d);
                    var R = Vs(m, te), x = Vs(m, Oe);
                    if (R && x && (N.rangeCount !== 1 || N.anchorNode !== R.node || N.anchorOffset !== R.offset || N.focusNode !== x.node || N.focusOffset !== x.offset)) {
                      var A = L.createRange();
                      A.setStart(R.node, R.offset), N.removeAllRanges(), te > Oe ? (N.addRange(A), N.extend(x.node, x.offset)) : (A.setEnd(x.node, x.offset), N.addRange(A));
                    }
                  }
                }
              }
              for (L = [], N = m; N = N.parentNode; ) N.nodeType === 1 && L.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
              for (typeof m.focus == "function" && m.focus(), m = 0; m < L.length; m++) {
                var B = L[m];
                B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
              }
            }
            xi = !!Wo, Po = Wo = null;
          } finally {
            Ee = u, Q.p = n, D.T = l;
          }
        }
        e.current = t, We = 2;
      }
    }
    function uh() {
      if (We === 2) {
        We = 0;
        var e = Cl, t = kn, l = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || l) {
          l = D.T, D.T = null;
          var n = Q.p;
          Q.p = 2;
          var u = Ee;
          Ee |= 4;
          try {
            Bd(e, t.alternate, t);
          } finally {
            Ee = u, Q.p = n, D.T = l;
          }
        }
        We = 3;
      }
    }
    function ih() {
      if (We === 4 || We === 3) {
        We = 0, $p();
        var e = Cl, t = kn, l = Vn, n = Kd;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0, kn = Cl = null, rh(e, e.pendingLanes));
        var u = e.pendingLanes;
        if (u === 0 && (Ml = null), nr(l), t = t.stateNode, ht && typeof ht.onCommitFiberRoot == "function") try {
          ht.onCommitFiberRoot(aa, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (n !== null) {
          t = D.T, u = Q.p, Q.p = 2, D.T = null;
          try {
            for (var r = e.onRecoverableError, d = 0; d < n.length; d++) {
              var m = n[d];
              r(m.value, {
                componentStack: m.stack
              });
            }
          } finally {
            D.T = t, Q.p = u;
          }
        }
        (Vn & 3) !== 0 && ci(), Xt(e), u = e.pendingLanes, (l & 4194090) !== 0 && (u & 42) !== 0 ? e === Ho ? ka++ : (ka = 0, Ho = e) : ka = 0, Va(0);
      }
    }
    function rh(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ea(t)));
    }
    function ci(e) {
      return ah(), uh(), ih(), oh();
    }
    function oh() {
      if (We !== 5) return false;
      var e = Cl, t = jo;
      jo = 0;
      var l = nr(Vn), n = D.T, u = Q.p;
      try {
        Q.p = 32 > l ? 32 : l, D.T = null, l = Bo, Bo = null;
        var r = Cl, d = Vn;
        if (We = 0, kn = Cl = null, Vn = 0, (Ee & 6) !== 0) throw Error(o(331));
        var m = Ee;
        if (Ee |= 4, Qd(r.current), kd(r, r.current, d, l), Ee = m, Va(0, false), ht && typeof ht.onPostCommitFiberRoot == "function") try {
          ht.onPostCommitFiberRoot(aa, r);
        } catch {
        }
        return true;
      } finally {
        Q.p = u, D.T = n, rh(e, t);
      }
    }
    function ch(e, t, l) {
      t = Tt(l, t), t = po(e.stateNode, t, 2), e = El(e, t, 2), e !== null && (ia(e, 2), Xt(e));
    }
    function _e(e, t, l) {
      if (e.tag === 3) ch(e, e, l);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          ch(t, e, l);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ml === null || !Ml.has(n))) {
            e = Tt(l, e), l = hd(2), n = El(t, l, 2), n !== null && (md(l, n, t, e), ia(n, 2), Xt(n));
            break;
          }
        }
        t = t.return;
      }
    }
    function Yo(e, t, l) {
      var n = e.pingCache;
      if (n === null) {
        n = e.pingCache = new Eg();
        var u = /* @__PURE__ */ new Set();
        n.set(t, u);
      } else u = n.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), n.set(t, u));
      u.has(l) || (Mo = true, u.add(l), e = wg.bind(null, e, t, l), t.then(e, e));
    }
    function wg(e, t, l) {
      var n = e.pingCache;
      n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, ze === e && (ge & l) === l && (je === 4 || je === 3 && (ge & 62914560) === ge && 300 > qt() - Uo ? (Ee & 2) === 0 && Xn(e, 0) : Co |= l, Yn === ge && (Yn = 0)), Xt(e);
    }
    function sh(e, t) {
      t === 0 && (t = us()), e = On(e, t), e !== null && (ia(e, t), Xt(e));
    }
    function _g(e) {
      var t = e.memoizedState, l = 0;
      t !== null && (l = t.retryLane), sh(e, l);
    }
    function zg(e, t) {
      var l = 0;
      switch (e.tag) {
        case 13:
          var n = e.stateNode, u = e.memoizedState;
          u !== null && (l = u.retryLane);
          break;
        case 19:
          n = e.stateNode;
          break;
        case 22:
          n = e.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      n !== null && n.delete(t), sh(e, l);
    }
    function Ng(e, t) {
      return Ii(e, t);
    }
    var si = null, Zn = null, ko = false, fi = false, Vo = false, an = 0;
    function Xt(e) {
      e !== Zn && e.next === null && (Zn === null ? si = Zn = e : Zn = Zn.next = e), fi = true, ko || (ko = true, Cg());
    }
    function Va(e, t) {
      if (!Vo && fi) {
        Vo = true;
        do
          for (var l = false, n = si; n !== null; ) {
            if (e !== 0) {
              var u = n.pendingLanes;
              if (u === 0) var r = 0;
              else {
                var d = n.suspendedLanes, m = n.pingedLanes;
                r = (1 << 31 - mt(42 | e) + 1) - 1, r &= u & ~(d & ~m), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
              }
              r !== 0 && (l = true, mh(n, r));
            } else r = ge, r = gu(n, n === ze ? r : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (r & 3) === 0 || ua(n, r) || (l = true, mh(n, r));
            n = n.next;
          }
        while (l);
        Vo = false;
      }
    }
    function Mg() {
      fh();
    }
    function fh() {
      fi = ko = false;
      var e = 0;
      an !== 0 && (Gg() && (e = an), an = 0);
      for (var t = qt(), l = null, n = si; n !== null; ) {
        var u = n.next, r = dh(n, t);
        r === 0 ? (n.next = null, l === null ? si = u : l.next = u, u === null && (Zn = l)) : (l = n, (e !== 0 || (r & 3) !== 0) && (fi = true)), n = u;
      }
      Va(e);
    }
    function dh(e, t) {
      for (var l = e.suspendedLanes, n = e.pingedLanes, u = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
        var d = 31 - mt(r), m = 1 << d, b = u[d];
        b === -1 ? ((m & l) === 0 || (m & n) !== 0) && (u[d] = ny(m, t)) : b <= t && (e.expiredLanes |= m), r &= ~m;
      }
      if (t = ze, l = ge, l = gu(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && er(n), e.callbackNode = null, e.callbackPriority = 0;
      if ((l & 3) === 0 || ua(e, l)) {
        if (t = l & -l, t === e.callbackPriority) return t;
        switch (n !== null && er(n), nr(l)) {
          case 2:
          case 8:
            l = ls;
            break;
          case 32:
            l = mu;
            break;
          case 268435456:
            l = ns;
            break;
          default:
            l = mu;
        }
        return n = hh.bind(null, e), l = Ii(l, n), e.callbackPriority = t, e.callbackNode = l, t;
      }
      return n !== null && n !== null && er(n), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function hh(e, t) {
      if (We !== 0 && We !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var l = e.callbackNode;
      if (ci() && e.callbackNode !== l) return null;
      var n = ge;
      return n = gu(e, e === ze ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : ($d(e, n, t), dh(e, qt()), e.callbackNode != null && e.callbackNode === l ? hh.bind(null, e) : null);
    }
    function mh(e, t) {
      if (ci()) return null;
      $d(e, t, true);
    }
    function Cg() {
      kg(function() {
        (Ee & 6) !== 0 ? Ii(ts, Mg) : fh();
      });
    }
    function Xo() {
      return an === 0 && (an = as()), an;
    }
    function ph(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Eu("" + e);
    }
    function yh(e, t) {
      var l = t.ownerDocument.createElement("input");
      return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
    }
    function Dg(e, t, l, n, u) {
      if (t === "submit" && l && l.stateNode === u) {
        var r = ph((u[ut] || null).action), d = n.submitter;
        d && (t = (t = d[ut] || null) ? ph(t.formAction) : d.getAttribute("formAction"), t !== null && (r = t, d = null));
        var m = new Ou("action", "action", null, n, u);
        e.push({
          event: m,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (n.defaultPrevented) {
                  if (an !== 0) {
                    var b = d ? yh(u, d) : new FormData(u);
                    co(l, {
                      pending: true,
                      data: b,
                      method: u.method,
                      action: r
                    }, null, b);
                  }
                } else typeof r == "function" && (m.preventDefault(), b = d ? yh(u, d) : new FormData(u), co(l, {
                  pending: true,
                  data: b,
                  method: u.method,
                  action: r
                }, r, b));
              },
              currentTarget: u
            }
          ]
        });
      }
    }
    for (var Qo = 0; Qo < _r.length; Qo++) {
      var Zo = _r[Qo], Ug = Zo.toLowerCase(), jg = Zo[0].toUpperCase() + Zo.slice(1);
      Dt(Ug, "on" + jg);
    }
    Dt(Js, "onAnimationEnd"), Dt($s, "onAnimationIteration"), Dt(Fs, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(Py, "onTransitionRun"), Dt(Iy, "onTransitionStart"), Dt(eg, "onTransitionCancel"), Dt(Ws, "onTransitionEnd"), yn("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), yn("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), yn("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), yn("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), kl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), kl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), kl("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), kl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), kl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), kl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xa));
    function gh(e, t) {
      t = (t & 4) !== 0;
      for (var l = 0; l < e.length; l++) {
        var n = e[l], u = n.event;
        n = n.listeners;
        e: {
          var r = void 0;
          if (t) for (var d = n.length - 1; 0 <= d; d--) {
            var m = n[d], b = m.instance, O = m.currentTarget;
            if (m = m.listener, b !== r && u.isPropagationStopped()) break e;
            r = m, u.currentTarget = O;
            try {
              r(u);
            } catch (j) {
              Pu(j);
            }
            u.currentTarget = null, r = b;
          }
          else for (d = 0; d < n.length; d++) {
            if (m = n[d], b = m.instance, O = m.currentTarget, m = m.listener, b !== r && u.isPropagationStopped()) break e;
            r = m, u.currentTarget = O;
            try {
              r(u);
            } catch (j) {
              Pu(j);
            }
            u.currentTarget = null, r = b;
          }
        }
      }
    }
    function pe(e, t) {
      var l = t[ar];
      l === void 0 && (l = t[ar] = /* @__PURE__ */ new Set());
      var n = e + "__bubble";
      l.has(n) || (vh(t, e, 2, false), l.add(n));
    }
    function Ko(e, t, l) {
      var n = 0;
      t && (n |= 4), vh(l, e, n, t);
    }
    var di = "_reactListening" + Math.random().toString(36).slice(2);
    function Jo(e) {
      if (!e[di]) {
        e[di] = true, ss.forEach(function(l) {
          l !== "selectionchange" && (Bg.has(l) || Ko(l, false, e), Ko(l, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[di] || (t[di] = true, Ko("selectionchange", false, t));
      }
    }
    function vh(e, t, l, n) {
      switch (kh(t)) {
        case 2:
          var u = cv;
          break;
        case 8:
          u = sv;
          break;
        default:
          u = oc;
      }
      l = u.bind(null, t, l, e), u = void 0, !pr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = true), n ? u !== void 0 ? e.addEventListener(t, l, {
        capture: true,
        passive: u
      }) : e.addEventListener(t, l, true) : u !== void 0 ? e.addEventListener(t, l, {
        passive: u
      }) : e.addEventListener(t, l, false);
    }
    function $o(e, t, l, n, u) {
      var r = n;
      if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (; ; ) {
        if (n === null) return;
        var d = n.tag;
        if (d === 3 || d === 4) {
          var m = n.stateNode.containerInfo;
          if (m === u) break;
          if (d === 4) for (d = n.return; d !== null; ) {
            var b = d.tag;
            if ((b === 3 || b === 4) && d.stateNode.containerInfo === u) return;
            d = d.return;
          }
          for (; m !== null; ) {
            if (d = hn(m), d === null) return;
            if (b = d.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              n = r = d;
              continue e;
            }
            m = m.parentNode;
          }
        }
        n = n.return;
      }
      Ts(function() {
        var O = r, j = hr(l), L = [];
        e: {
          var _ = Ps.get(e);
          if (_ !== void 0) {
            var N = Ou, ne = e;
            switch (e) {
              case "keypress":
                if (Tu(l) === 0) break e;
              case "keydown":
              case "keyup":
                N = Ny;
                break;
              case "focusin":
                ne = "focus", N = br;
                break;
              case "focusout":
                ne = "blur", N = br;
                break;
              case "beforeblur":
              case "afterblur":
                N = br;
                break;
              case "click":
                if (l.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                N = ws;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                N = vy;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                N = Dy;
                break;
              case Js:
              case $s:
              case Fs:
                N = xy;
                break;
              case Ws:
                N = jy;
                break;
              case "scroll":
              case "scrollend":
                N = yy;
                break;
              case "wheel":
                N = Hy;
                break;
              case "copy":
              case "cut":
              case "paste":
                N = Ry;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                N = zs;
                break;
              case "toggle":
              case "beforetoggle":
                N = qy;
            }
            var te = (t & 4) !== 0, Oe = !te && (e === "scroll" || e === "scrollend"), R = te ? _ !== null ? _ + "Capture" : null : _;
            te = [];
            for (var x = O, A; x !== null; ) {
              var B = x;
              if (A = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || A === null || R === null || (B = ca(x, R), B != null && te.push(Qa(x, B, A))), Oe) break;
              x = x.return;
            }
            0 < te.length && (_ = new N(_, ne, null, l, j), L.push({
              event: _,
              listeners: te
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (_ = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", _ && l !== dr && (ne = l.relatedTarget || l.fromElement) && (hn(ne) || ne[dn])) break e;
            if ((N || _) && (_ = j.window === j ? j : (_ = j.ownerDocument) ? _.defaultView || _.parentWindow : window, N ? (ne = l.relatedTarget || l.toElement, N = O, ne = ne ? hn(ne) : null, ne !== null && (Oe = f(ne), te = ne.tag, ne !== Oe || te !== 5 && te !== 27 && te !== 6) && (ne = null)) : (N = null, ne = O), N !== ne)) {
              if (te = ws, B = "onMouseLeave", R = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (te = zs, B = "onPointerLeave", R = "onPointerEnter", x = "pointer"), Oe = N == null ? _ : oa(N), A = ne == null ? _ : oa(ne), _ = new te(B, x + "leave", N, l, j), _.target = Oe, _.relatedTarget = A, B = null, hn(j) === O && (te = new te(R, x + "enter", ne, l, j), te.target = A, te.relatedTarget = Oe, B = te), Oe = B, N && ne) t: {
                for (te = N, R = ne, x = 0, A = te; A; A = Kn(A)) x++;
                for (A = 0, B = R; B; B = Kn(B)) A++;
                for (; 0 < x - A; ) te = Kn(te), x--;
                for (; 0 < A - x; ) R = Kn(R), A--;
                for (; x--; ) {
                  if (te === R || R !== null && te === R.alternate) break t;
                  te = Kn(te), R = Kn(R);
                }
                te = null;
              }
              else te = null;
              N !== null && bh(L, _, N, te, false), ne !== null && Oe !== null && bh(L, Oe, ne, te, true);
            }
          }
          e: {
            if (_ = O ? oa(O) : window, N = _.nodeName && _.nodeName.toLowerCase(), N === "select" || N === "input" && _.type === "file") var W = Hs;
            else if (js(_)) if (Ls) W = $y;
            else {
              W = Ky;
              var se = Zy;
            }
            else N = _.nodeName, !N || N.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? O && fr(O.elementType) && (W = Hs) : W = Jy;
            if (W && (W = W(e, O))) {
              Bs(L, W, l, j);
              break e;
            }
            se && se(e, _, O), e === "focusout" && O && _.type === "number" && O.memoizedProps.value != null && sr(_, "number", _.value);
          }
          switch (se = O ? oa(O) : window, e) {
            case "focusin":
              (js(se) || se.contentEditable === "true") && (Rn = se, Ar = O, ga = null);
              break;
            case "focusout":
              ga = Ar = Rn = null;
              break;
            case "mousedown":
              Or = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Or = false, Zs(L, l, j);
              break;
            case "selectionchange":
              if (Wy) break;
            case "keydown":
            case "keyup":
              Zs(L, l, j);
          }
          var ee;
          if (xr) e: {
            switch (e) {
              case "compositionstart":
                var le = "onCompositionStart";
                break e;
              case "compositionend":
                le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                le = "onCompositionUpdate";
                break e;
            }
            le = void 0;
          }
          else En ? Ds(e, l) && (le = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (le = "onCompositionStart");
          le && (Ns && l.locale !== "ko" && (En || le !== "onCompositionStart" ? le === "onCompositionEnd" && En && (ee = As()) : (vl = j, yr = "value" in vl ? vl.value : vl.textContent, En = true)), se = hi(O, le), 0 < se.length && (le = new _s(le, e, null, l, j), L.push({
            event: le,
            listeners: se
          }), ee ? le.data = ee : (ee = Us(l), ee !== null && (le.data = ee)))), (ee = Yy ? ky(e, l) : Vy(e, l)) && (le = hi(O, "onBeforeInput"), 0 < le.length && (se = new _s("onBeforeInput", "beforeinput", null, l, j), L.push({
            event: se,
            listeners: le
          }), se.data = ee)), Dg(L, e, O, l, j);
        }
        gh(L, t);
      });
    }
    function Qa(e, t, l) {
      return {
        instance: e,
        listener: t,
        currentTarget: l
      };
    }
    function hi(e, t) {
      for (var l = t + "Capture", n = []; e !== null; ) {
        var u = e, r = u.stateNode;
        if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || r === null || (u = ca(e, l), u != null && n.unshift(Qa(e, u, r)), u = ca(e, t), u != null && n.push(Qa(e, u, r))), e.tag === 3) return n;
        e = e.return;
      }
      return [];
    }
    function Kn(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function bh(e, t, l, n, u) {
      for (var r = t._reactName, d = []; l !== null && l !== n; ) {
        var m = l, b = m.alternate, O = m.stateNode;
        if (m = m.tag, b !== null && b === n) break;
        m !== 5 && m !== 26 && m !== 27 || O === null || (b = O, u ? (O = ca(l, r), O != null && d.unshift(Qa(l, O, b))) : u || (O = ca(l, r), O != null && d.push(Qa(l, O, b)))), l = l.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    var Hg = /\r\n?/g, Lg = /\u0000|\uFFFD/g;
    function Sh(e) {
      return (typeof e == "string" ? e : "" + e).replace(Hg, `
`).replace(Lg, "");
    }
    function xh(e, t) {
      return t = Sh(t), Sh(e) === t;
    }
    function mi() {
    }
    function Ae(e, t, l, n, u, r) {
      switch (l) {
        case "children":
          typeof n == "string" ? t === "body" || t === "textarea" && n === "" || bn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && bn(e, "" + n);
          break;
        case "className":
          bu(e, "class", n);
          break;
        case "tabIndex":
          bu(e, "tabindex", n);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          bu(e, l, n);
          break;
        case "style":
          Es(e, n, r);
          break;
        case "data":
          if (t !== "object") {
            bu(e, "data", n);
            break;
          }
        case "src":
        case "href":
          if (n === "" && (t !== "a" || l !== "href")) {
            e.removeAttribute(l);
            break;
          }
          if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
            e.removeAttribute(l);
            break;
          }
          n = Eu("" + n), e.setAttribute(l, n);
          break;
        case "action":
        case "formAction":
          if (typeof n == "function") {
            e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof r == "function" && (l === "formAction" ? (t !== "input" && Ae(e, t, "name", u.name, u, null), Ae(e, t, "formEncType", u.formEncType, u, null), Ae(e, t, "formMethod", u.formMethod, u, null), Ae(e, t, "formTarget", u.formTarget, u, null)) : (Ae(e, t, "encType", u.encType, u, null), Ae(e, t, "method", u.method, u, null), Ae(e, t, "target", u.target, u, null)));
          if (n == null || typeof n == "symbol" || typeof n == "boolean") {
            e.removeAttribute(l);
            break;
          }
          n = Eu("" + n), e.setAttribute(l, n);
          break;
        case "onClick":
          n != null && (e.onclick = mi);
          break;
        case "onScroll":
          n != null && pe("scroll", e);
          break;
        case "onScrollEnd":
          n != null && pe("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
            if (l = n.__html, l != null) {
              if (u.children != null) throw Error(o(60));
              e.innerHTML = l;
            }
          }
          break;
        case "multiple":
          e.multiple = n && typeof n != "function" && typeof n != "symbol";
          break;
        case "muted":
          e.muted = n && typeof n != "function" && typeof n != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          l = Eu("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
          break;
        case "capture":
        case "download":
          n === true ? e.setAttribute(l, "") : n !== false && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
          break;
        case "popover":
          pe("beforetoggle", e), pe("toggle", e), vu(e, "popover", n);
          break;
        case "xlinkActuate":
          Jt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
          break;
        case "xlinkArcrole":
          Jt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
          break;
        case "xlinkRole":
          Jt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
          break;
        case "xlinkShow":
          Jt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
          break;
        case "xlinkTitle":
          Jt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
          break;
        case "xlinkType":
          Jt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
          break;
        case "xmlBase":
          Jt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
          break;
        case "xmlLang":
          Jt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
          break;
        case "xmlSpace":
          Jt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
          break;
        case "is":
          vu(e, "is", n);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = my.get(l) || l, vu(e, l, n));
      }
    }
    function Fo(e, t, l, n, u, r) {
      switch (l) {
        case "style":
          Es(e, n, r);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
            if (l = n.__html, l != null) {
              if (u.children != null) throw Error(o(60));
              e.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof n == "string" ? bn(e, n) : (typeof n == "number" || typeof n == "bigint") && bn(e, "" + n);
          break;
        case "onScroll":
          n != null && pe("scroll", e);
          break;
        case "onScrollEnd":
          n != null && pe("scrollend", e);
          break;
        case "onClick":
          n != null && (e.onclick = mi);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!fs.hasOwnProperty(l)) e: {
            if (l[0] === "o" && l[1] === "n" && (u = l.endsWith("Capture"), t = l.slice(2, u ? l.length - 7 : void 0), r = e[ut] || null, r = r != null ? r[l] : null, typeof r == "function" && e.removeEventListener(t, r, u), typeof n == "function")) {
              typeof r != "function" && r !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, u);
              break e;
            }
            l in e ? e[l] = n : n === true ? e.setAttribute(l, "") : vu(e, l, n);
          }
      }
    }
    function Pe(e, t, l) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          pe("error", e), pe("load", e);
          var n = false, u = false, r;
          for (r in l) if (l.hasOwnProperty(r)) {
            var d = l[r];
            if (d != null) switch (r) {
              case "src":
                n = true;
                break;
              case "srcSet":
                u = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ae(e, t, r, d, l, null);
            }
          }
          u && Ae(e, t, "srcSet", l.srcSet, l, null), n && Ae(e, t, "src", l.src, l, null);
          return;
        case "input":
          pe("invalid", e);
          var m = r = d = u = null, b = null, O = null;
          for (n in l) if (l.hasOwnProperty(n)) {
            var j = l[n];
            if (j != null) switch (n) {
              case "name":
                u = j;
                break;
              case "type":
                d = j;
                break;
              case "checked":
                b = j;
                break;
              case "defaultChecked":
                O = j;
                break;
              case "value":
                r = j;
                break;
              case "defaultValue":
                m = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(o(137, t));
                break;
              default:
                Ae(e, t, n, j, l, null);
            }
          }
          vs(e, r, m, b, O, d, u, false), Su(e);
          return;
        case "select":
          pe("invalid", e), n = d = r = null;
          for (u in l) if (l.hasOwnProperty(u) && (m = l[u], m != null)) switch (u) {
            case "value":
              r = m;
              break;
            case "defaultValue":
              d = m;
              break;
            case "multiple":
              n = m;
            default:
              Ae(e, t, u, m, l, null);
          }
          t = r, l = d, e.multiple = !!n, t != null ? vn(e, !!n, t, false) : l != null && vn(e, !!n, l, true);
          return;
        case "textarea":
          pe("invalid", e), r = u = n = null;
          for (d in l) if (l.hasOwnProperty(d) && (m = l[d], m != null)) switch (d) {
            case "value":
              n = m;
              break;
            case "defaultValue":
              u = m;
              break;
            case "children":
              r = m;
              break;
            case "dangerouslySetInnerHTML":
              if (m != null) throw Error(o(91));
              break;
            default:
              Ae(e, t, d, m, l, null);
          }
          Ss(e, n, u, r), Su(e);
          return;
        case "option":
          for (b in l) if (l.hasOwnProperty(b) && (n = l[b], n != null)) switch (b) {
            case "selected":
              e.selected = n && typeof n != "function" && typeof n != "symbol";
              break;
            default:
              Ae(e, t, b, n, l, null);
          }
          return;
        case "dialog":
          pe("beforetoggle", e), pe("toggle", e), pe("cancel", e), pe("close", e);
          break;
        case "iframe":
        case "object":
          pe("load", e);
          break;
        case "video":
        case "audio":
          for (n = 0; n < Xa.length; n++) pe(Xa[n], e);
          break;
        case "image":
          pe("error", e), pe("load", e);
          break;
        case "details":
          pe("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          pe("error", e), pe("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (O in l) if (l.hasOwnProperty(O) && (n = l[O], n != null)) switch (O) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, t));
            default:
              Ae(e, t, O, n, l, null);
          }
          return;
        default:
          if (fr(t)) {
            for (j in l) l.hasOwnProperty(j) && (n = l[j], n !== void 0 && Fo(e, t, j, n, l, void 0));
            return;
          }
      }
      for (m in l) l.hasOwnProperty(m) && (n = l[m], n != null && Ae(e, t, m, n, l, null));
    }
    function qg(e, t, l, n) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var u = null, r = null, d = null, m = null, b = null, O = null, j = null;
          for (N in l) {
            var L = l[N];
            if (l.hasOwnProperty(N) && L != null) switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = L;
              default:
                n.hasOwnProperty(N) || Ae(e, t, N, null, n, L);
            }
          }
          for (var _ in n) {
            var N = n[_];
            if (L = l[_], n.hasOwnProperty(_) && (N != null || L != null)) switch (_) {
              case "type":
                r = N;
                break;
              case "name":
                u = N;
                break;
              case "checked":
                O = N;
                break;
              case "defaultChecked":
                j = N;
                break;
              case "value":
                d = N;
                break;
              case "defaultValue":
                m = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(o(137, t));
                break;
              default:
                N !== L && Ae(e, t, _, N, n, L);
            }
          }
          cr(e, d, m, b, O, j, r, u);
          return;
        case "select":
          N = d = m = _ = null;
          for (r in l) if (b = l[r], l.hasOwnProperty(r) && b != null) switch (r) {
            case "value":
              break;
            case "multiple":
              N = b;
            default:
              n.hasOwnProperty(r) || Ae(e, t, r, null, n, b);
          }
          for (u in n) if (r = n[u], b = l[u], n.hasOwnProperty(u) && (r != null || b != null)) switch (u) {
            case "value":
              _ = r;
              break;
            case "defaultValue":
              m = r;
              break;
            case "multiple":
              d = r;
            default:
              r !== b && Ae(e, t, u, r, n, b);
          }
          t = m, l = d, n = N, _ != null ? vn(e, !!l, _, false) : !!n != !!l && (t != null ? vn(e, !!l, t, true) : vn(e, !!l, l ? [] : "", false));
          return;
        case "textarea":
          N = _ = null;
          for (m in l) if (u = l[m], l.hasOwnProperty(m) && u != null && !n.hasOwnProperty(m)) switch (m) {
            case "value":
              break;
            case "children":
              break;
            default:
              Ae(e, t, m, null, n, u);
          }
          for (d in n) if (u = n[d], r = l[d], n.hasOwnProperty(d) && (u != null || r != null)) switch (d) {
            case "value":
              _ = u;
              break;
            case "defaultValue":
              N = u;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(o(91));
              break;
            default:
              u !== r && Ae(e, t, d, u, n, r);
          }
          bs(e, _, N);
          return;
        case "option":
          for (var ne in l) if (_ = l[ne], l.hasOwnProperty(ne) && _ != null && !n.hasOwnProperty(ne)) switch (ne) {
            case "selected":
              e.selected = false;
              break;
            default:
              Ae(e, t, ne, null, n, _);
          }
          for (b in n) if (_ = n[b], N = l[b], n.hasOwnProperty(b) && _ !== N && (_ != null || N != null)) switch (b) {
            case "selected":
              e.selected = _ && typeof _ != "function" && typeof _ != "symbol";
              break;
            default:
              Ae(e, t, b, _, n, N);
          }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var te in l) _ = l[te], l.hasOwnProperty(te) && _ != null && !n.hasOwnProperty(te) && Ae(e, t, te, null, n, _);
          for (O in n) if (_ = n[O], N = l[O], n.hasOwnProperty(O) && _ !== N && (_ != null || N != null)) switch (O) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (_ != null) throw Error(o(137, t));
              break;
            default:
              Ae(e, t, O, _, n, N);
          }
          return;
        default:
          if (fr(t)) {
            for (var Oe in l) _ = l[Oe], l.hasOwnProperty(Oe) && _ !== void 0 && !n.hasOwnProperty(Oe) && Fo(e, t, Oe, void 0, n, _);
            for (j in n) _ = n[j], N = l[j], !n.hasOwnProperty(j) || _ === N || _ === void 0 && N === void 0 || Fo(e, t, j, _, n, N);
            return;
          }
      }
      for (var R in l) _ = l[R], l.hasOwnProperty(R) && _ != null && !n.hasOwnProperty(R) && Ae(e, t, R, null, n, _);
      for (L in n) _ = n[L], N = l[L], !n.hasOwnProperty(L) || _ === N || _ == null && N == null || Ae(e, t, L, _, n, N);
    }
    var Wo = null, Po = null;
    function pi(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Eh(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Rh(e, t) {
      if (e === 0) switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return e === 1 && t === "foreignObject" ? 0 : e;
    }
    function Io(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ec = null;
    function Gg() {
      var e = window.event;
      return e && e.type === "popstate" ? e === ec ? false : (ec = e, true) : (ec = null, false);
    }
    var Th = typeof setTimeout == "function" ? setTimeout : void 0, Yg = typeof clearTimeout == "function" ? clearTimeout : void 0, Ah = typeof Promise == "function" ? Promise : void 0, kg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ah < "u" ? function(e) {
      return Ah.resolve(null).then(e).catch(Vg);
    } : Th;
    function Vg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ul(e) {
      return e === "head";
    }
    function Oh(e, t) {
      var l = t, n = 0, u = 0;
      do {
        var r = l.nextSibling;
        if (e.removeChild(l), r && r.nodeType === 8) if (l = r.data, l === "/$") {
          if (0 < n && 8 > n) {
            l = n;
            var d = e.ownerDocument;
            if (l & 1 && Za(d.documentElement), l & 2 && Za(d.body), l & 4) for (l = d.head, Za(l), d = l.firstChild; d; ) {
              var m = d.nextSibling, b = d.nodeName;
              d[ra] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && d.rel.toLowerCase() === "stylesheet" || l.removeChild(d), d = m;
            }
          }
          if (u === 0) {
            e.removeChild(r), eu(t);
            return;
          }
          u--;
        } else l === "$" || l === "$?" || l === "$!" ? u++ : n = l.charCodeAt(0) - 48;
        else n = 0;
        l = r;
      } while (l);
      eu(t);
    }
    function tc(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var l = t;
        switch (t = t.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            tc(l), ur(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(l);
      }
    }
    function Xg(e, t, l, n) {
      for (; e.nodeType === 1; ) {
        var u = l;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (n) {
          if (!e[ra]) switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence")) break;
              if (r !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title)) break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (r = e.getAttribute("src"), (r !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
              return e;
            default:
              return e;
          }
        } else if (t === "input" && e.type === "hidden") {
          var r = u.name == null ? null : "" + u.name;
          if (u.type === "hidden" && e.getAttribute("name") === r) return e;
        } else return e;
        if (e = jt(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Qg(e, t, l) {
      if (t === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = jt(e.nextSibling), e === null)) return null;
      return e;
    }
    function lc(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
    }
    function Zg(e, t) {
      var l = e.ownerDocument;
      if (e.data !== "$?" || l.readyState === "complete") t();
      else {
        var n = function() {
          t(), l.removeEventListener("DOMContentLoaded", n);
        };
        l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
      }
    }
    function jt(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    var nc = null;
    function wh(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === "$" || l === "$!" || l === "$?") {
            if (t === 0) return e;
            t--;
          } else l === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function _h(e, t, l) {
      switch (t = pi(l), e) {
        case "html":
          if (e = t.documentElement, !e) throw Error(o(452));
          return e;
        case "head":
          if (e = t.head, !e) throw Error(o(453));
          return e;
        case "body":
          if (e = t.body, !e) throw Error(o(454));
          return e;
        default:
          throw Error(o(451));
      }
    }
    function Za(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      ur(e);
    }
    var Nt = /* @__PURE__ */ new Map(), zh = /* @__PURE__ */ new Set();
    function yi(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var ol = Q.d;
    Q.d = {
      f: Kg,
      r: Jg,
      D: $g,
      C: Fg,
      L: Wg,
      m: Pg,
      X: ev,
      S: Ig,
      M: tv
    };
    function Kg() {
      var e = ol.f(), t = ri();
      return e || t;
    }
    function Jg(e) {
      var t = mn(e);
      t !== null && t.tag === 5 && t.type === "form" ? $f(t) : ol.r(e);
    }
    var Jn = typeof document > "u" ? null : document;
    function Nh(e, t, l) {
      var n = Jn;
      if (n && typeof t == "string" && t) {
        var u = Rt(t);
        u = 'link[rel="' + e + '"][href="' + u + '"]', typeof l == "string" && (u += '[crossorigin="' + l + '"]'), zh.has(u) || (zh.add(u), e = {
          rel: e,
          crossOrigin: l,
          href: t
        }, n.querySelector(u) === null && (t = n.createElement("link"), Pe(t, "link", e), Ze(t), n.head.appendChild(t)));
      }
    }
    function $g(e) {
      ol.D(e), Nh("dns-prefetch", e, null);
    }
    function Fg(e, t) {
      ol.C(e, t), Nh("preconnect", e, t);
    }
    function Wg(e, t, l) {
      ol.L(e, t, l);
      var n = Jn;
      if (n && e && t) {
        var u = 'link[rel="preload"][as="' + Rt(t) + '"]';
        t === "image" && l && l.imageSrcSet ? (u += '[imagesrcset="' + Rt(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (u += '[imagesizes="' + Rt(l.imageSizes) + '"]')) : u += '[href="' + Rt(e) + '"]';
        var r = u;
        switch (t) {
          case "style":
            r = $n(e);
            break;
          case "script":
            r = Fn(e);
        }
        Nt.has(r) || (e = v({
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        }, l), Nt.set(r, e), n.querySelector(u) !== null || t === "style" && n.querySelector(Ka(r)) || t === "script" && n.querySelector(Ja(r)) || (t = n.createElement("link"), Pe(t, "link", e), Ze(t), n.head.appendChild(t)));
      }
    }
    function Pg(e, t) {
      ol.m(e, t);
      var l = Jn;
      if (l && e) {
        var n = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Rt(n) + '"][href="' + Rt(e) + '"]', r = u;
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            r = Fn(e);
        }
        if (!Nt.has(r) && (e = v({
          rel: "modulepreload",
          href: e
        }, t), Nt.set(r, e), l.querySelector(u) === null)) {
          switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(Ja(r))) return;
          }
          n = l.createElement("link"), Pe(n, "link", e), Ze(n), l.head.appendChild(n);
        }
      }
    }
    function Ig(e, t, l) {
      ol.S(e, t, l);
      var n = Jn;
      if (n && e) {
        var u = pn(n).hoistableStyles, r = $n(e);
        t = t || "default";
        var d = u.get(r);
        if (!d) {
          var m = {
            loading: 0,
            preload: null
          };
          if (d = n.querySelector(Ka(r))) m.loading = 5;
          else {
            e = v({
              rel: "stylesheet",
              href: e,
              "data-precedence": t
            }, l), (l = Nt.get(r)) && ac(e, l);
            var b = d = n.createElement("link");
            Ze(b), Pe(b, "link", e), b._p = new Promise(function(O, j) {
              b.onload = O, b.onerror = j;
            }), b.addEventListener("load", function() {
              m.loading |= 1;
            }), b.addEventListener("error", function() {
              m.loading |= 2;
            }), m.loading |= 4, gi(d, t, n);
          }
          d = {
            type: "stylesheet",
            instance: d,
            count: 1,
            state: m
          }, u.set(r, d);
        }
      }
    }
    function ev(e, t) {
      ol.X(e, t);
      var l = Jn;
      if (l && e) {
        var n = pn(l).hoistableScripts, u = Fn(e), r = n.get(u);
        r || (r = l.querySelector(Ja(u)), r || (e = v({
          src: e,
          async: true
        }, t), (t = Nt.get(u)) && uc(e, t), r = l.createElement("script"), Ze(r), Pe(r, "link", e), l.head.appendChild(r)), r = {
          type: "script",
          instance: r,
          count: 1,
          state: null
        }, n.set(u, r));
      }
    }
    function tv(e, t) {
      ol.M(e, t);
      var l = Jn;
      if (l && e) {
        var n = pn(l).hoistableScripts, u = Fn(e), r = n.get(u);
        r || (r = l.querySelector(Ja(u)), r || (e = v({
          src: e,
          async: true,
          type: "module"
        }, t), (t = Nt.get(u)) && uc(e, t), r = l.createElement("script"), Ze(r), Pe(r, "link", e), l.head.appendChild(r)), r = {
          type: "script",
          instance: r,
          count: 1,
          state: null
        }, n.set(u, r));
      }
    }
    function Mh(e, t, l, n) {
      var u = (u = ae.current) ? yi(u) : null;
      if (!u) throw Error(o(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (t = $n(l.href), l = pn(u).hoistableStyles, n = l.get(t), n || (n = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, l.set(t, n)), n) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
            e = $n(l.href);
            var r = pn(u).hoistableStyles, d = r.get(e);
            if (d || (u = u.ownerDocument || u, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, r.set(e, d), (r = u.querySelector(Ka(e))) && !r._p && (d.instance = r, d.state.loading = 5), Nt.has(e) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Nt.set(e, l), r || lv(u, e, l, d.state))), t && n === null) throw Error(o(528, ""));
            return d;
          }
          if (t && n !== null) throw Error(o(529, ""));
          return null;
        case "script":
          return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Fn(l), l = pn(u).hoistableScripts, n = l.get(t), n || (n = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, l.set(t, n)), n) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(o(444, e));
      }
    }
    function $n(e) {
      return 'href="' + Rt(e) + '"';
    }
    function Ka(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ch(e) {
      return v({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function lv(e, t, l, n) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
        return n.loading |= 1;
      }), t.addEventListener("error", function() {
        return n.loading |= 2;
      }), Pe(t, "link", l), Ze(t), e.head.appendChild(t));
    }
    function Fn(e) {
      return '[src="' + Rt(e) + '"]';
    }
    function Ja(e) {
      return "script[async]" + e;
    }
    function Dh(e, t, l) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + Rt(l.href) + '"]');
          if (n) return t.instance = n, Ze(n), n;
          var u = v({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement("style"), Ze(n), Pe(n, "style", u), gi(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          u = $n(l.href);
          var r = e.querySelector(Ka(u));
          if (r) return t.state.loading |= 4, t.instance = r, Ze(r), r;
          n = Ch(l), (u = Nt.get(u)) && ac(n, u), r = (e.ownerDocument || e).createElement("link"), Ze(r);
          var d = r;
          return d._p = new Promise(function(m, b) {
            d.onload = m, d.onerror = b;
          }), Pe(r, "link", n), t.state.loading |= 4, gi(r, l.precedence, e), t.instance = r;
        case "script":
          return r = Fn(l.src), (u = e.querySelector(Ja(r))) ? (t.instance = u, Ze(u), u) : (n = l, (u = Nt.get(r)) && (n = v({}, l), uc(n, u)), e = e.ownerDocument || e, u = e.createElement("script"), Ze(u), Pe(u, "link", n), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, gi(n, l.precedence, e));
      return t.instance;
    }
    function gi(e, t, l) {
      for (var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = n.length ? n[n.length - 1] : null, r = u, d = 0; d < n.length; d++) {
        var m = n[d];
        if (m.dataset.precedence === t) r = m;
        else if (r !== u) break;
      }
      r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
    }
    function ac(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function uc(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    var vi = null;
    function Uh(e, t, l) {
      if (vi === null) {
        var n = /* @__PURE__ */ new Map(), u = vi = /* @__PURE__ */ new Map();
        u.set(l, n);
      } else u = vi, n = u.get(l), n || (n = /* @__PURE__ */ new Map(), u.set(l, n));
      if (n.has(e)) return n;
      for (n.set(e, null), l = l.getElementsByTagName(e), u = 0; u < l.length; u++) {
        var r = l[u];
        if (!(r[ra] || r[Ie] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
          var d = r.getAttribute(t) || "";
          d = e + d;
          var m = n.get(d);
          m ? m.push(r) : n.set(d, [
            r
          ]);
        }
      }
      return n;
    }
    function jh(e, t, l) {
      e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
    }
    function nv(e, t, l) {
      if (l === 1 || t.itemProp != null) return false;
      switch (e) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
          switch (t.rel) {
            case "stylesheet":
              return e = t.disabled, typeof t.precedence == "string" && e == null;
            default:
              return true;
          }
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
      }
      return false;
    }
    function Bh(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    var $a = null;
    function av() {
    }
    function uv(e, t, l) {
      if ($a === null) throw Error(o(475));
      var n = $a;
      if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== false) && (t.state.loading & 4) === 0) {
        if (t.instance === null) {
          var u = $n(l.href), r = e.querySelector(Ka(u));
          if (r) {
            e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = bi.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = r, Ze(r);
            return;
          }
          r = e.ownerDocument || e, l = Ch(l), (u = Nt.get(u)) && ac(l, u), r = r.createElement("link"), Ze(r);
          var d = r;
          d._p = new Promise(function(m, b) {
            d.onload = m, d.onerror = b;
          }), Pe(r, "link", l), t.instance = r;
        }
        n.stylesheets === null && (n.stylesheets = /* @__PURE__ */ new Map()), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = bi.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function iv() {
      if ($a === null) throw Error(o(475));
      var e = $a;
      return e.stylesheets && e.count === 0 && ic(e, e.stylesheets), 0 < e.count ? function(t) {
        var l = setTimeout(function() {
          if (e.stylesheets && ic(e, e.stylesheets), e.unsuspend) {
            var n = e.unsuspend;
            e.unsuspend = null, n();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(l);
        };
      } : null;
    }
    function bi() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets) ic(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    var Si = null;
    function ic(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Si = /* @__PURE__ */ new Map(), t.forEach(rv, e), Si = null, bi.call(e));
    }
    function rv(e, t) {
      if (!(t.state.loading & 4)) {
        var l = Si.get(e);
        if (l) var n = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), Si.set(e, l);
          for (var u = e.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < u.length; r++) {
            var d = u[r];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (l.set(d.dataset.precedence, d), n = d);
          }
          n && l.set(null, n);
        }
        u = t.instance, d = u.getAttribute("data-precedence"), r = l.get(d) || n, r === n && l.set(null, u), l.set(d, u), this.count++, n = bi.bind(this), u.addEventListener("load", n), u.addEventListener("error", n), r ? r.parentNode.insertBefore(u, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
      }
    }
    var Fa = {
      $$typeof: Z,
      Provider: null,
      Consumer: null,
      _currentValue: k,
      _currentValue2: k,
      _threadCount: 0
    };
    function ov(e, t, l, n, u, r, d, m) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tr(0), this.hiddenUpdates = tr(null), this.identifierPrefix = n, this.onUncaughtError = u, this.onCaughtError = r, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Hh(e, t, l, n, u, r, d, m, b, O, j, L) {
      return e = new ov(e, t, l, d, m, b, O, L), t = 1, r === true && (t |= 24), r = yt(3, null, null, t), e.current = r, r.stateNode = e, t = Gr(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
        element: n,
        isDehydrated: l,
        cache: t
      }, Xr(r), e;
    }
    function Lh(e) {
      return e ? (e = wn, e) : wn;
    }
    function qh(e, t, l, n, u, r) {
      u = Lh(u), n.context === null ? n.context = u : n.pendingContext = u, n = xl(t), n.payload = {
        element: l
      }, r = r === void 0 ? null : r, r !== null && (n.callback = r), l = El(e, n, t), l !== null && (xt(l, e, t), Oa(l, e, t));
    }
    function Gh(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var l = e.retryLane;
        e.retryLane = l !== 0 && l < t ? l : t;
      }
    }
    function rc(e, t) {
      Gh(e, t), (e = e.alternate) && Gh(e, t);
    }
    function Yh(e) {
      if (e.tag === 13) {
        var t = On(e, 67108864);
        t !== null && xt(t, e, 67108864), rc(e, 67108864);
      }
    }
    var xi = true;
    function cv(e, t, l, n) {
      var u = D.T;
      D.T = null;
      var r = Q.p;
      try {
        Q.p = 2, oc(e, t, l, n);
      } finally {
        Q.p = r, D.T = u;
      }
    }
    function sv(e, t, l, n) {
      var u = D.T;
      D.T = null;
      var r = Q.p;
      try {
        Q.p = 8, oc(e, t, l, n);
      } finally {
        Q.p = r, D.T = u;
      }
    }
    function oc(e, t, l, n) {
      if (xi) {
        var u = cc(n);
        if (u === null) $o(e, t, n, Ei, l), Vh(e, n);
        else if (dv(u, e, t, l, n)) n.stopPropagation();
        else if (Vh(e, n), t & 4 && -1 < fv.indexOf(e)) {
          for (; u !== null; ) {
            var r = mn(u);
            if (r !== null) switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var d = Yl(r.pendingLanes);
                  if (d !== 0) {
                    var m = r;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; d; ) {
                      var b = 1 << 31 - mt(d);
                      m.entanglements[1] |= b, d &= ~b;
                    }
                    Xt(r), (Ee & 6) === 0 && (ui = qt() + 500, Va(0));
                  }
                }
                break;
              case 13:
                m = On(r, 2), m !== null && xt(m, r, 2), ri(), rc(r, 2);
            }
            if (r = cc(n), r === null && $o(e, t, n, Ei, l), r === u) break;
            u = r;
          }
          u !== null && n.stopPropagation();
        } else $o(e, t, n, null, l);
      }
    }
    function cc(e) {
      return e = hr(e), sc(e);
    }
    var Ei = null;
    function sc(e) {
      if (Ei = null, e = hn(e), e !== null) {
        var t = f(e);
        if (t === null) e = null;
        else {
          var l = t.tag;
          if (l === 13) {
            if (e = h(t), e !== null) return e;
            e = null;
          } else if (l === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Ei = e, null;
    }
    function kh(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (Fp()) {
            case ts:
              return 2;
            case ls:
              return 8;
            case mu:
            case Wp:
              return 32;
            case ns:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var fc = false, jl = null, Bl = null, Hl = null, Wa = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new Map(), Ll = [], fv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Vh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          jl = null;
          break;
        case "dragenter":
        case "dragleave":
          Bl = null;
          break;
        case "mouseover":
        case "mouseout":
          Hl = null;
          break;
        case "pointerover":
        case "pointerout":
          Wa.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pa.delete(t.pointerId);
      }
    }
    function Ia(e, t, l, n, u, r) {
      return e === null || e.nativeEvent !== r ? (e = {
        blockedOn: t,
        domEventName: l,
        eventSystemFlags: n,
        nativeEvent: r,
        targetContainers: [
          u
        ]
      }, t !== null && (t = mn(t), t !== null && Yh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
    }
    function dv(e, t, l, n, u) {
      switch (t) {
        case "focusin":
          return jl = Ia(jl, e, t, l, n, u), true;
        case "dragenter":
          return Bl = Ia(Bl, e, t, l, n, u), true;
        case "mouseover":
          return Hl = Ia(Hl, e, t, l, n, u), true;
        case "pointerover":
          var r = u.pointerId;
          return Wa.set(r, Ia(Wa.get(r) || null, e, t, l, n, u)), true;
        case "gotpointercapture":
          return r = u.pointerId, Pa.set(r, Ia(Pa.get(r) || null, e, t, l, n, u)), true;
      }
      return false;
    }
    function Xh(e) {
      var t = hn(e.target);
      if (t !== null) {
        var l = f(t);
        if (l !== null) {
          if (t = l.tag, t === 13) {
            if (t = h(l), t !== null) {
              e.blockedOn = t, uy(e.priority, function() {
                if (l.tag === 13) {
                  var n = St();
                  n = lr(n);
                  var u = On(l, n);
                  u !== null && xt(u, l, n), rc(l, n);
                }
              });
              return;
            }
          } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ri(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var l = cc(e.nativeEvent);
        if (l === null) {
          l = e.nativeEvent;
          var n = new l.constructor(l.type, l);
          dr = n, l.target.dispatchEvent(n), dr = null;
        } else return t = mn(l), t !== null && Yh(t), e.blockedOn = l, false;
        t.shift();
      }
      return true;
    }
    function Qh(e, t, l) {
      Ri(e) && l.delete(t);
    }
    function hv() {
      fc = false, jl !== null && Ri(jl) && (jl = null), Bl !== null && Ri(Bl) && (Bl = null), Hl !== null && Ri(Hl) && (Hl = null), Wa.forEach(Qh), Pa.forEach(Qh);
    }
    function Ti(e, t) {
      e.blockedOn === t && (e.blockedOn = null, fc || (fc = true, a.unstable_scheduleCallback(a.unstable_NormalPriority, hv)));
    }
    var Ai = null;
    function Zh(e) {
      Ai !== e && (Ai = e, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
        Ai === e && (Ai = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], u = e[t + 2];
          if (typeof n != "function") {
            if (sc(n || l) === null) continue;
            break;
          }
          var r = mn(l);
          r !== null && (e.splice(t, 3), t -= 3, co(r, {
            pending: true,
            data: u,
            method: l.method,
            action: n
          }, n, u));
        }
      }));
    }
    function eu(e) {
      function t(b) {
        return Ti(b, e);
      }
      jl !== null && Ti(jl, e), Bl !== null && Ti(Bl, e), Hl !== null && Ti(Hl, e), Wa.forEach(t), Pa.forEach(t);
      for (var l = 0; l < Ll.length; l++) {
        var n = Ll[l];
        n.blockedOn === e && (n.blockedOn = null);
      }
      for (; 0 < Ll.length && (l = Ll[0], l.blockedOn === null); ) Xh(l), l.blockedOn === null && Ll.shift();
      if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for (n = 0; n < l.length; n += 3) {
        var u = l[n], r = l[n + 1], d = u[ut] || null;
        if (typeof r == "function") d || Zh(l);
        else if (d) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (u = r, d = r[ut] || null) m = d.formAction;
            else if (sc(u) !== null) continue;
          } else m = d.action;
          typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), Zh(l);
        }
      }
    }
    function dc(e) {
      this._internalRoot = e;
    }
    Oi.prototype.render = dc.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var l = t.current, n = St();
      qh(l, n, e, t, null, null);
    }, Oi.prototype.unmount = dc.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        qh(e.current, 2, null, e, null, null), ri(), t[dn] = null;
      }
    };
    function Oi(e) {
      this._internalRoot = e;
    }
    Oi.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = os();
        e = {
          blockedOn: null,
          target: e,
          priority: t
        };
        for (var l = 0; l < Ll.length && t !== 0 && t < Ll[l].priority; l++) ;
        Ll.splice(l, 0, e), l === 0 && Xh(e);
      }
    };
    var Kh = i.version;
    if (Kh !== "19.1.0") throw Error(o(527, Kh, "19.1.0"));
    Q.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
      return e = y(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var mv = {
      bundleType: 0,
      version: "19.1.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: D,
      reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!wi.isDisabled && wi.supportsFiber) try {
        aa = wi.inject(mv), ht = wi;
      } catch {
      }
    }
    return lu.createRoot = function(e, t) {
      if (!s(e)) throw Error(o(299));
      var l = false, n = "", u = cd, r = sd, d = fd, m = null;
      return t != null && (t.unstable_strictMode === true && (l = true), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)), t = Hh(e, 1, false, null, null, l, n, u, r, d, m, null), e[dn] = t.current, Jo(e), new dc(t);
    }, lu.hydrateRoot = function(e, t, l) {
      if (!s(e)) throw Error(o(299));
      var n = false, u = "", r = cd, d = sd, m = fd, b = null, O = null;
      return l != null && (l.unstable_strictMode === true && (n = true), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (r = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (b = l.unstable_transitionCallbacks), l.formState !== void 0 && (O = l.formState)), t = Hh(e, 1, true, t, l ?? null, n, u, r, d, m, b, O), t.context = Lh(null), l = t.current, n = St(), n = lr(n), u = xl(n), u.callback = null, El(l, u, n), l = n, t.current.lanes = l, ia(t, l), Xt(t), e[dn] = t.current, Jo(e), new Oi(t);
    }, lu.version = "19.1.0", lu;
  }
  var nm;
  function Rv() {
    if (nm) return pc.exports;
    nm = 1;
    function a() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
    }
    return a(), pc.exports = Ev(), pc.exports;
  }
  var Tv = Rv(), nu = {}, am;
  function Av() {
    if (am) return nu;
    am = 1, Object.defineProperty(nu, "__esModule", {
      value: true
    }), nu.parse = h, nu.serialize = p;
    const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, i = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, o = /^[\u0020-\u003A\u003D-\u007E]*$/, s = Object.prototype.toString, f = (() => {
      const w = function() {
      };
      return w.prototype = /* @__PURE__ */ Object.create(null), w;
    })();
    function h(w, q) {
      const T = new f(), U = w.length;
      if (U < 2) return T;
      const M = (q == null ? void 0 : q.decode) || v;
      let H = 0;
      do {
        const V = w.indexOf("=", H);
        if (V === -1) break;
        const Z = w.indexOf(";", H), ue = Z === -1 ? U : Z;
        if (V > ue) {
          H = w.lastIndexOf(";", V - 1) + 1;
          continue;
        }
        const J = g(w, H, V), fe = y(w, V, J), ye = w.slice(J, fe);
        if (T[ye] === void 0) {
          let $ = g(w, V + 1, ue), de = y(w, ue, $);
          const Qe = M(w.slice($, de));
          T[ye] = Qe;
        }
        H = ue + 1;
      } while (H < U);
      return T;
    }
    function g(w, q, T) {
      do {
        const U = w.charCodeAt(q);
        if (U !== 32 && U !== 9) return q;
      } while (++q < T);
      return T;
    }
    function y(w, q, T) {
      for (; q > T; ) {
        const U = w.charCodeAt(--q);
        if (U !== 32 && U !== 9) return q + 1;
      }
      return T;
    }
    function p(w, q, T) {
      const U = (T == null ? void 0 : T.encode) || encodeURIComponent;
      if (!a.test(w)) throw new TypeError(`argument name is invalid: ${w}`);
      const M = U(q);
      if (!i.test(M)) throw new TypeError(`argument val is invalid: ${q}`);
      let H = w + "=" + M;
      if (!T) return H;
      if (T.maxAge !== void 0) {
        if (!Number.isInteger(T.maxAge)) throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);
        H += "; Max-Age=" + T.maxAge;
      }
      if (T.domain) {
        if (!c.test(T.domain)) throw new TypeError(`option domain is invalid: ${T.domain}`);
        H += "; Domain=" + T.domain;
      }
      if (T.path) {
        if (!o.test(T.path)) throw new TypeError(`option path is invalid: ${T.path}`);
        H += "; Path=" + T.path;
      }
      if (T.expires) {
        if (!E(T.expires) || !Number.isFinite(T.expires.valueOf())) throw new TypeError(`option expires is invalid: ${T.expires}`);
        H += "; Expires=" + T.expires.toUTCString();
      }
      if (T.httpOnly && (H += "; HttpOnly"), T.secure && (H += "; Secure"), T.partitioned && (H += "; Partitioned"), T.priority) switch (typeof T.priority == "string" ? T.priority.toLowerCase() : void 0) {
        case "low":
          H += "; Priority=Low";
          break;
        case "medium":
          H += "; Priority=Medium";
          break;
        case "high":
          H += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${T.priority}`);
      }
      if (T.sameSite) switch (typeof T.sameSite == "string" ? T.sameSite.toLowerCase() : T.sameSite) {
        case true:
        case "strict":
          H += "; SameSite=Strict";
          break;
        case "lax":
          H += "; SameSite=Lax";
          break;
        case "none":
          H += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${T.sameSite}`);
      }
      return H;
    }
    function v(w) {
      if (w.indexOf("%") === -1) return w;
      try {
        return decodeURIComponent(w);
      } catch {
        return w;
      }
    }
    function E(w) {
      return s.call(w) === "[object Date]";
    }
    return nu;
  }
  Av();
  var um = "popstate";
  function Ov(a = {}) {
    function i(o, s) {
      let { pathname: f, search: h, hash: g } = o.location;
      return _c("", {
        pathname: f,
        search: h,
        hash: g
      }, s.state && s.state.usr || null, s.state && s.state.key || "default");
    }
    function c(o, s) {
      return typeof s == "string" ? s : ru(s);
    }
    return _v(i, c, null, a);
  }
  function De(a, i) {
    if (a === false || a === null || typeof a > "u") throw new Error(i);
  }
  function Zt(a, i) {
    if (!a) {
      typeof console < "u" && console.warn(i);
      try {
        throw new Error(i);
      } catch {
      }
    }
  }
  function wv() {
    return Math.random().toString(36).substring(2, 10);
  }
  function im(a, i) {
    return {
      usr: a.state,
      key: a.key,
      idx: i
    };
  }
  function _c(a, i, c = null, o) {
    return {
      pathname: typeof a == "string" ? a : a.pathname,
      search: "",
      hash: "",
      ...typeof i == "string" ? Pn(i) : i,
      state: c,
      key: i && i.key || o || wv()
    };
  }
  function ru({ pathname: a = "/", search: i = "", hash: c = "" }) {
    return i && i !== "?" && (a += i.charAt(0) === "?" ? i : "?" + i), c && c !== "#" && (a += c.charAt(0) === "#" ? c : "#" + c), a;
  }
  function Pn(a) {
    let i = {};
    if (a) {
      let c = a.indexOf("#");
      c >= 0 && (i.hash = a.substring(c), a = a.substring(0, c));
      let o = a.indexOf("?");
      o >= 0 && (i.search = a.substring(o), a = a.substring(0, o)), a && (i.pathname = a);
    }
    return i;
  }
  function _v(a, i, c, o = {}) {
    let { window: s = document.defaultView, v5Compat: f = false } = o, h = s.history, g = "POP", y = null, p = v();
    p == null && (p = 0, h.replaceState({
      ...h.state,
      idx: p
    }, ""));
    function v() {
      return (h.state || {
        idx: null
      }).idx;
    }
    function E() {
      g = "POP";
      let M = v(), H = M == null ? null : M - p;
      p = M, y && y({
        action: g,
        location: U.location,
        delta: H
      });
    }
    function w(M, H) {
      g = "PUSH";
      let V = _c(U.location, M, H);
      p = v() + 1;
      let Z = im(V, p), ue = U.createHref(V);
      try {
        h.pushState(Z, "", ue);
      } catch (J) {
        if (J instanceof DOMException && J.name === "DataCloneError") throw J;
        s.location.assign(ue);
      }
      f && y && y({
        action: g,
        location: U.location,
        delta: 1
      });
    }
    function q(M, H) {
      g = "REPLACE";
      let V = _c(U.location, M, H);
      p = v();
      let Z = im(V, p), ue = U.createHref(V);
      h.replaceState(Z, "", ue), f && y && y({
        action: g,
        location: U.location,
        delta: 0
      });
    }
    function T(M) {
      let H = s.location.origin !== "null" ? s.location.origin : s.location.href, V = typeof M == "string" ? M : ru(M);
      return V = V.replace(/ $/, "%20"), De(H, `No window.location.(origin|href) available to create URL for href: ${V}`), new URL(V, H);
    }
    let U = {
      get action() {
        return g;
      },
      get location() {
        return a(s, h);
      },
      listen(M) {
        if (y) throw new Error("A history only accepts one active listener");
        return s.addEventListener(um, E), y = M, () => {
          s.removeEventListener(um, E), y = null;
        };
      },
      createHref(M) {
        return i(s, M);
      },
      createURL: T,
      encodeLocation(M) {
        let H = T(M);
        return {
          pathname: H.pathname,
          search: H.search,
          hash: H.hash
        };
      },
      push: w,
      replace: q,
      go(M) {
        return h.go(M);
      }
    };
    return U;
  }
  function Lm(a, i, c = "/") {
    return zv(a, i, c, false);
  }
  function zv(a, i, c, o) {
    let s = typeof i == "string" ? Pn(i) : i, f = fl(s.pathname || "/", c);
    if (f == null) return null;
    let h = qm(a);
    Nv(h);
    let g = null;
    for (let y = 0; g == null && y < h.length; ++y) {
      let p = Yv(f);
      g = qv(h[y], p, o);
    }
    return g;
  }
  function qm(a, i = [], c = [], o = "") {
    let s = (f, h, g) => {
      let y = {
        relativePath: g === void 0 ? f.path || "" : g,
        caseSensitive: f.caseSensitive === true,
        childrenIndex: h,
        route: f
      };
      y.relativePath.startsWith("/") && (De(y.relativePath.startsWith(o), `Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), y.relativePath = y.relativePath.slice(o.length));
      let p = sl([
        o,
        y.relativePath
      ]), v = c.concat(y);
      f.children && f.children.length > 0 && (De(f.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${p}".`), qm(f.children, i, v, p)), !(f.path == null && !f.index) && i.push({
        path: p,
        score: Hv(p, f.index),
        routesMeta: v
      });
    };
    return a.forEach((f, h) => {
      var _a;
      if (f.path === "" || !((_a = f.path) == null ? void 0 : _a.includes("?"))) s(f, h);
      else for (let g of Gm(f.path)) s(f, h, g);
    }), i;
  }
  function Gm(a) {
    let i = a.split("/");
    if (i.length === 0) return [];
    let [c, ...o] = i, s = c.endsWith("?"), f = c.replace(/\?$/, "");
    if (o.length === 0) return s ? [
      f,
      ""
    ] : [
      f
    ];
    let h = Gm(o.join("/")), g = [];
    return g.push(...h.map((y) => y === "" ? f : [
      f,
      y
    ].join("/"))), s && g.push(...h), g.map((y) => a.startsWith("/") && y === "" ? "/" : y);
  }
  function Nv(a) {
    a.sort((i, c) => i.score !== c.score ? c.score - i.score : Lv(i.routesMeta.map((o) => o.childrenIndex), c.routesMeta.map((o) => o.childrenIndex)));
  }
  var Mv = /^:[\w-]+$/, Cv = 3, Dv = 2, Uv = 1, jv = 10, Bv = -2, rm = (a) => a === "*";
  function Hv(a, i) {
    let c = a.split("/"), o = c.length;
    return c.some(rm) && (o += Bv), i && (o += Dv), c.filter((s) => !rm(s)).reduce((s, f) => s + (Mv.test(f) ? Cv : f === "" ? Uv : jv), o);
  }
  function Lv(a, i) {
    return a.length === i.length && a.slice(0, -1).every((o, s) => o === i[s]) ? a[a.length - 1] - i[i.length - 1] : 0;
  }
  function qv(a, i, c = false) {
    let { routesMeta: o } = a, s = {}, f = "/", h = [];
    for (let g = 0; g < o.length; ++g) {
      let y = o[g], p = g === o.length - 1, v = f === "/" ? i : i.slice(f.length) || "/", E = Hi({
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: p
      }, v), w = y.route;
      if (!E && p && c && !o[o.length - 1].route.index && (E = Hi({
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: false
      }, v)), !E) return null;
      Object.assign(s, E.params), h.push({
        params: s,
        pathname: sl([
          f,
          E.pathname
        ]),
        pathnameBase: Qv(sl([
          f,
          E.pathnameBase
        ])),
        route: w
      }), E.pathnameBase !== "/" && (f = sl([
        f,
        E.pathnameBase
      ]));
    }
    return h;
  }
  function Hi(a, i) {
    typeof a == "string" && (a = {
      path: a,
      caseSensitive: false,
      end: true
    });
    let [c, o] = Gv(a.path, a.caseSensitive, a.end), s = i.match(c);
    if (!s) return null;
    let f = s[0], h = f.replace(/(.)\/+$/, "$1"), g = s.slice(1);
    return {
      params: o.reduce((p, { paramName: v, isOptional: E }, w) => {
        if (v === "*") {
          let T = g[w] || "";
          h = f.slice(0, f.length - T.length).replace(/(.)\/+$/, "$1");
        }
        const q = g[w];
        return E && !q ? p[v] = void 0 : p[v] = (q || "").replace(/%2F/g, "/"), p;
      }, {}),
      pathname: f,
      pathnameBase: h,
      pattern: a
    };
  }
  function Gv(a, i = false, c = true) {
    Zt(a === "*" || !a.endsWith("*") || a.endsWith("/*"), `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`);
    let o = [], s = "^" + a.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, g, y) => (o.push({
      paramName: g,
      isOptional: y != null
    }), y ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return a.endsWith("*") ? (o.push({
      paramName: "*"
    }), s += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? s += "\\/*$" : a !== "" && a !== "/" && (s += "(?:(?=\\/|$))"), [
      new RegExp(s, i ? void 0 : "i"),
      o
    ];
  }
  function Yv(a) {
    try {
      return a.split("/").map((i) => decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
    } catch (i) {
      return Zt(false, `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), a;
    }
  }
  function fl(a, i) {
    if (i === "/") return a;
    if (!a.toLowerCase().startsWith(i.toLowerCase())) return null;
    let c = i.endsWith("/") ? i.length - 1 : i.length, o = a.charAt(c);
    return o && o !== "/" ? null : a.slice(c) || "/";
  }
  function kv(a, i = "/") {
    let { pathname: c, search: o = "", hash: s = "" } = typeof a == "string" ? Pn(a) : a;
    return {
      pathname: c ? c.startsWith("/") ? c : Vv(c, i) : i,
      search: Zv(o),
      hash: Kv(s)
    };
  }
  function Vv(a, i) {
    let c = i.replace(/\/+$/, "").split("/");
    return a.split("/").forEach((s) => {
      s === ".." ? c.length > 1 && c.pop() : s !== "." && c.push(s);
    }), c.length > 1 ? c.join("/") : "/";
  }
  function bc(a, i, c, o) {
    return `Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Xv(a) {
    return a.filter((i, c) => c === 0 || i.route.path && i.route.path.length > 0);
  }
  function Ym(a) {
    let i = Xv(a);
    return i.map((c, o) => o === i.length - 1 ? c.pathname : c.pathnameBase);
  }
  function km(a, i, c, o = false) {
    let s;
    typeof a == "string" ? s = Pn(a) : (s = {
      ...a
    }, De(!s.pathname || !s.pathname.includes("?"), bc("?", "pathname", "search", s)), De(!s.pathname || !s.pathname.includes("#"), bc("#", "pathname", "hash", s)), De(!s.search || !s.search.includes("#"), bc("#", "search", "hash", s)));
    let f = a === "" || s.pathname === "", h = f ? "/" : s.pathname, g;
    if (h == null) g = c;
    else {
      let E = i.length - 1;
      if (!o && h.startsWith("..")) {
        let w = h.split("/");
        for (; w[0] === ".."; ) w.shift(), E -= 1;
        s.pathname = w.join("/");
      }
      g = E >= 0 ? i[E] : "/";
    }
    let y = kv(s, g), p = h && h !== "/" && h.endsWith("/"), v = (f || h === ".") && c.endsWith("/");
    return !y.pathname.endsWith("/") && (p || v) && (y.pathname += "/"), y;
  }
  var sl = (a) => a.join("/").replace(/\/\/+/g, "/"), Qv = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"), Zv = (a) => !a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a, Kv = (a) => !a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a;
  function Jv(a) {
    return a != null && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.internal == "boolean" && "data" in a;
  }
  var Vm = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(Vm);
  var $v = [
    "GET",
    ...Vm
  ];
  new Set($v);
  var In = z.createContext(null);
  In.displayName = "DataRouter";
  var ki = z.createContext(null);
  ki.displayName = "DataRouterState";
  var Xm = z.createContext({
    isTransitioning: false
  });
  Xm.displayName = "ViewTransition";
  var Fv = z.createContext(/* @__PURE__ */ new Map());
  Fv.displayName = "Fetchers";
  var Wv = z.createContext(null);
  Wv.displayName = "Await";
  var Kt = z.createContext(null);
  Kt.displayName = "Navigation";
  var cu = z.createContext(null);
  cu.displayName = "Location";
  var dl = z.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  dl.displayName = "Route";
  var Xc = z.createContext(null);
  Xc.displayName = "RouteError";
  function Pv(a, { relative: i } = {}) {
    De(su(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: c, navigator: o } = z.useContext(Kt), { hash: s, pathname: f, search: h } = fu(a, {
      relative: i
    }), g = f;
    return c !== "/" && (g = f === "/" ? c : sl([
      c,
      f
    ])), o.createHref({
      pathname: g,
      search: h,
      hash: s
    });
  }
  function su() {
    return z.useContext(cu) != null;
  }
  function fn() {
    return De(su(), "useLocation() may be used only in the context of a <Router> component."), z.useContext(cu).location;
  }
  var Qm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function Zm(a) {
    z.useContext(Kt).static || z.useLayoutEffect(a);
  }
  function Iv() {
    let { isDataRoute: a } = z.useContext(dl);
    return a ? d0() : e0();
  }
  function e0() {
    De(su(), "useNavigate() may be used only in the context of a <Router> component.");
    let a = z.useContext(In), { basename: i, navigator: c } = z.useContext(Kt), { matches: o } = z.useContext(dl), { pathname: s } = fn(), f = JSON.stringify(Ym(o)), h = z.useRef(false);
    return Zm(() => {
      h.current = true;
    }), z.useCallback((y, p = {}) => {
      if (Zt(h.current, Qm), !h.current) return;
      if (typeof y == "number") {
        c.go(y);
        return;
      }
      let v = km(y, JSON.parse(f), s, p.relative === "path");
      a == null && i !== "/" && (v.pathname = v.pathname === "/" ? i : sl([
        i,
        v.pathname
      ])), (p.replace ? c.replace : c.push)(v, p.state, p);
    }, [
      i,
      c,
      f,
      s,
      a
    ]);
  }
  z.createContext(null);
  function fu(a, { relative: i } = {}) {
    let { matches: c } = z.useContext(dl), { pathname: o } = fn(), s = JSON.stringify(Ym(c));
    return z.useMemo(() => km(a, JSON.parse(s), o, i === "path"), [
      a,
      s,
      o,
      i
    ]);
  }
  function t0(a, i) {
    return Km(a, i);
  }
  function Km(a, i, c, o) {
    var _a;
    De(su(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: s, static: f } = z.useContext(Kt), { matches: h } = z.useContext(dl), g = h[h.length - 1], y = g ? g.params : {}, p = g ? g.pathname : "/", v = g ? g.pathnameBase : "/", E = g && g.route;
    {
      let V = E && E.path || "";
      Jm(p, !E || V.endsWith("*") || V.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`);
    }
    let w = fn(), q;
    if (i) {
      let V = typeof i == "string" ? Pn(i) : i;
      De(v === "/" || ((_a = V.pathname) == null ? void 0 : _a.startsWith(v)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${V.pathname}" was given in the \`location\` prop.`), q = V;
    } else q = w;
    let T = q.pathname || "/", U = T;
    if (v !== "/") {
      let V = v.replace(/^\//, "").split("/");
      U = "/" + T.replace(/^\//, "").split("/").slice(V.length).join("/");
    }
    let M = !f && c && c.matches && c.matches.length > 0 ? c.matches : Lm(a, {
      pathname: U
    });
    Zt(E || M != null, `No routes matched location "${q.pathname}${q.search}${q.hash}" `), Zt(M == null || M[M.length - 1].route.element !== void 0 || M[M.length - 1].route.Component !== void 0 || M[M.length - 1].route.lazy !== void 0, `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let H = i0(M && M.map((V) => Object.assign({}, V, {
      params: Object.assign({}, y, V.params),
      pathname: sl([
        v,
        s.encodeLocation ? s.encodeLocation(V.pathname).pathname : V.pathname
      ]),
      pathnameBase: V.pathnameBase === "/" ? v : sl([
        v,
        s.encodeLocation ? s.encodeLocation(V.pathnameBase).pathname : V.pathnameBase
      ])
    })), h, c, o);
    return i && H ? z.createElement(cu.Provider, {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...q
        },
        navigationType: "POP"
      }
    }, H) : H;
  }
  function l0() {
    let a = f0(), i = Jv(a) ? `${a.status} ${a.statusText}` : a instanceof Error ? a.message : JSON.stringify(a), c = a instanceof Error ? a.stack : null, o = "rgba(200,200,200, 0.5)", s = {
      padding: "0.5rem",
      backgroundColor: o
    }, f = {
      padding: "2px 4px",
      backgroundColor: o
    }, h = null;
    return console.error("Error handled by React Router default ErrorBoundary:", a), h = z.createElement(z.Fragment, null, z.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), z.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", z.createElement("code", {
      style: f
    }, "ErrorBoundary"), " or", " ", z.createElement("code", {
      style: f
    }, "errorElement"), " prop on your route.")), z.createElement(z.Fragment, null, z.createElement("h2", null, "Unexpected Application Error!"), z.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, i), c ? z.createElement("pre", {
      style: s
    }, c) : null, h);
  }
  var n0 = z.createElement(l0, null), a0 = class extends z.Component {
    constructor(a) {
      super(a), this.state = {
        location: a.location,
        revalidation: a.revalidation,
        error: a.error
      };
    }
    static getDerivedStateFromError(a) {
      return {
        error: a
      };
    }
    static getDerivedStateFromProps(a, i) {
      return i.location !== a.location || i.revalidation !== "idle" && a.revalidation === "idle" ? {
        error: a.error,
        location: a.location,
        revalidation: a.revalidation
      } : {
        error: a.error !== void 0 ? a.error : i.error,
        location: i.location,
        revalidation: a.revalidation || i.revalidation
      };
    }
    componentDidCatch(a, i) {
      console.error("React Router caught the following error during render", a, i);
    }
    render() {
      return this.state.error !== void 0 ? z.createElement(dl.Provider, {
        value: this.props.routeContext
      }, z.createElement(Xc.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  };
  function u0({ routeContext: a, match: i, children: c }) {
    let o = z.useContext(In);
    return o && o.static && o.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = i.route.id), z.createElement(dl.Provider, {
      value: a
    }, c);
  }
  function i0(a, i = [], c = null, o = null) {
    if (a == null) {
      if (!c) return null;
      if (c.errors) a = c.matches;
      else if (i.length === 0 && !c.initialized && c.matches.length > 0) a = c.matches;
      else return null;
    }
    let s = a, f = c == null ? void 0 : c.errors;
    if (f != null) {
      let y = s.findIndex((p) => p.route.id && (f == null ? void 0 : f[p.route.id]) !== void 0);
      De(y >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), s = s.slice(0, Math.min(s.length, y + 1));
    }
    let h = false, g = -1;
    if (c) for (let y = 0; y < s.length; y++) {
      let p = s[y];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (g = y), p.route.id) {
        let { loaderData: v, errors: E } = c, w = p.route.loader && !v.hasOwnProperty(p.route.id) && (!E || E[p.route.id] === void 0);
        if (p.route.lazy || w) {
          h = true, g >= 0 ? s = s.slice(0, g + 1) : s = [
            s[0]
          ];
          break;
        }
      }
    }
    return s.reduceRight((y, p, v) => {
      let E, w = false, q = null, T = null;
      c && (E = f && p.route.id ? f[p.route.id] : void 0, q = p.route.errorElement || n0, h && (g < 0 && v === 0 ? (Jm("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), w = true, T = null) : g === v && (w = true, T = p.route.hydrateFallbackElement || null)));
      let U = i.concat(s.slice(0, v + 1)), M = () => {
        let H;
        return E ? H = q : w ? H = T : p.route.Component ? H = z.createElement(p.route.Component, null) : p.route.element ? H = p.route.element : H = y, z.createElement(u0, {
          match: p,
          routeContext: {
            outlet: y,
            matches: U,
            isDataRoute: c != null
          },
          children: H
        });
      };
      return c && (p.route.ErrorBoundary || p.route.errorElement || v === 0) ? z.createElement(a0, {
        location: c.location,
        revalidation: c.revalidation,
        component: q,
        error: E,
        children: M(),
        routeContext: {
          outlet: null,
          matches: U,
          isDataRoute: true
        }
      }) : M();
    }, null);
  }
  function Qc(a) {
    return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function r0(a) {
    let i = z.useContext(In);
    return De(i, Qc(a)), i;
  }
  function o0(a) {
    let i = z.useContext(ki);
    return De(i, Qc(a)), i;
  }
  function c0(a) {
    let i = z.useContext(dl);
    return De(i, Qc(a)), i;
  }
  function Zc(a) {
    let i = c0(a), c = i.matches[i.matches.length - 1];
    return De(c.route.id, `${a} can only be used on routes that contain a unique "id"`), c.route.id;
  }
  function s0() {
    return Zc("useRouteId");
  }
  function f0() {
    var _a;
    let a = z.useContext(Xc), i = o0("useRouteError"), c = Zc("useRouteError");
    return a !== void 0 ? a : (_a = i.errors) == null ? void 0 : _a[c];
  }
  function d0() {
    let { router: a } = r0("useNavigate"), i = Zc("useNavigate"), c = z.useRef(false);
    return Zm(() => {
      c.current = true;
    }), z.useCallback(async (s, f = {}) => {
      Zt(c.current, Qm), c.current && (typeof s == "number" ? a.navigate(s) : await a.navigate(s, {
        fromRouteId: i,
        ...f
      }));
    }, [
      a,
      i
    ]);
  }
  var om = {};
  function Jm(a, i, c) {
    !i && !om[a] && (om[a] = true, Zt(false, c));
  }
  z.memo(h0);
  function h0({ routes: a, future: i, state: c }) {
    return Km(a, void 0, c, i);
  }
  function $m(a) {
    De(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  }
  function m0({ basename: a = "/", children: i = null, location: c, navigationType: o = "POP", navigator: s, static: f = false }) {
    De(!su(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let h = a.replace(/^\/*/, "/"), g = z.useMemo(() => ({
      basename: h,
      navigator: s,
      static: f,
      future: {}
    }), [
      h,
      s,
      f
    ]);
    typeof c == "string" && (c = Pn(c));
    let { pathname: y = "/", search: p = "", hash: v = "", state: E = null, key: w = "default" } = c, q = z.useMemo(() => {
      let T = fl(y, h);
      return T == null ? null : {
        location: {
          pathname: T,
          search: p,
          hash: v,
          state: E,
          key: w
        },
        navigationType: o
      };
    }, [
      h,
      y,
      p,
      v,
      E,
      w,
      o
    ]);
    return Zt(q != null, `<Router basename="${h}"> is not able to match the URL "${y}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`), q == null ? null : z.createElement(Kt.Provider, {
      value: g
    }, z.createElement(cu.Provider, {
      children: i,
      value: q
    }));
  }
  function p0({ children: a, location: i }) {
    return t0(zc(a), i);
  }
  function zc(a, i = []) {
    let c = [];
    return z.Children.forEach(a, (o, s) => {
      if (!z.isValidElement(o)) return;
      let f = [
        ...i,
        s
      ];
      if (o.type === z.Fragment) {
        c.push.apply(c, zc(o.props.children, f));
        return;
      }
      De(o.type === $m, `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), De(!o.props.index || !o.props.children, "An index route cannot have child routes.");
      let h = {
        id: o.props.id || f.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary: o.props.hasErrorBoundary === true || o.props.ErrorBoundary != null || o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy
      };
      o.props.children && (h.children = zc(o.props.children, f)), c.push(h);
    }), c;
  }
  var Ci = "get", Di = "application/x-www-form-urlencoded";
  function Vi(a) {
    return a != null && typeof a.tagName == "string";
  }
  function y0(a) {
    return Vi(a) && a.tagName.toLowerCase() === "button";
  }
  function g0(a) {
    return Vi(a) && a.tagName.toLowerCase() === "form";
  }
  function v0(a) {
    return Vi(a) && a.tagName.toLowerCase() === "input";
  }
  function b0(a) {
    return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
  }
  function S0(a, i) {
    return a.button === 0 && (!i || i === "_self") && !b0(a);
  }
  var _i = null;
  function x0() {
    if (_i === null) try {
      new FormData(document.createElement("form"), 0), _i = false;
    } catch {
      _i = true;
    }
    return _i;
  }
  var E0 = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function Sc(a) {
    return a != null && !E0.has(a) ? (Zt(false, `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Di}"`), null) : a;
  }
  function R0(a, i) {
    let c, o, s, f, h;
    if (g0(a)) {
      let g = a.getAttribute("action");
      o = g ? fl(g, i) : null, c = a.getAttribute("method") || Ci, s = Sc(a.getAttribute("enctype")) || Di, f = new FormData(a);
    } else if (y0(a) || v0(a) && (a.type === "submit" || a.type === "image")) {
      let g = a.form;
      if (g == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let y = a.getAttribute("formaction") || g.getAttribute("action");
      if (o = y ? fl(y, i) : null, c = a.getAttribute("formmethod") || g.getAttribute("method") || Ci, s = Sc(a.getAttribute("formenctype")) || Sc(g.getAttribute("enctype")) || Di, f = new FormData(g, a), !x0()) {
        let { name: p, type: v, value: E } = a;
        if (v === "image") {
          let w = p ? `${p}.` : "";
          f.append(`${w}x`, "0"), f.append(`${w}y`, "0");
        } else p && f.append(p, E);
      }
    } else {
      if (Vi(a)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      c = Ci, o = null, s = Di, h = a;
    }
    return f && s === "text/plain" && (h = f, f = void 0), {
      action: o,
      method: c.toLowerCase(),
      encType: s,
      formData: f,
      body: h
    };
  }
  function Kc(a, i) {
    if (a === false || a === null || typeof a > "u") throw new Error(i);
  }
  async function T0(a, i) {
    if (a.id in i) return i[a.id];
    try {
      let c = await import(a.module).then(async (m) => {
        await m.__tla;
        return m;
      });
      return i[a.id] = c, c;
    } catch (c) {
      return console.error(`Error loading route module \`${a.module}\`, reloading page...`), console.error(c), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
      });
    }
  }
  function A0(a) {
    return a == null ? false : a.href == null ? a.rel === "preload" && typeof a.imageSrcSet == "string" && typeof a.imageSizes == "string" : typeof a.rel == "string" && typeof a.href == "string";
  }
  async function O0(a, i, c) {
    let o = await Promise.all(a.map(async (s) => {
      let f = i.routes[s.route.id];
      if (f) {
        let h = await T0(f, c);
        return h.links ? h.links() : [];
      }
      return [];
    }));
    return N0(o.flat(1).filter(A0).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map((s) => s.rel === "stylesheet" ? {
      ...s,
      rel: "prefetch",
      as: "style"
    } : {
      ...s,
      rel: "prefetch"
    }));
  }
  function cm(a, i, c, o, s, f) {
    let h = (y, p) => c[p] ? y.route.id !== c[p].route.id : true, g = (y, p) => {
      var _a;
      return c[p].pathname !== y.pathname || ((_a = c[p].route.path) == null ? void 0 : _a.endsWith("*")) && c[p].params["*"] !== y.params["*"];
    };
    return f === "assets" ? i.filter((y, p) => h(y, p) || g(y, p)) : f === "data" ? i.filter((y, p) => {
      var _a;
      let v = o.routes[y.route.id];
      if (!v || !v.hasLoader) return false;
      if (h(y, p) || g(y, p)) return true;
      if (y.route.shouldRevalidate) {
        let E = y.route.shouldRevalidate({
          currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
          currentParams: ((_a = c[0]) == null ? void 0 : _a.params) || {},
          nextUrl: new URL(a, window.origin),
          nextParams: y.params,
          defaultShouldRevalidate: true
        });
        if (typeof E == "boolean") return E;
      }
      return true;
    }) : [];
  }
  function w0(a, i, { includeHydrateFallback: c } = {}) {
    return _0(a.map((o) => {
      let s = i.routes[o.route.id];
      if (!s) return [];
      let f = [
        s.module
      ];
      return s.clientActionModule && (f = f.concat(s.clientActionModule)), s.clientLoaderModule && (f = f.concat(s.clientLoaderModule)), c && s.hydrateFallbackModule && (f = f.concat(s.hydrateFallbackModule)), s.imports && (f = f.concat(s.imports)), f;
    }).flat(1));
  }
  function _0(a) {
    return [
      ...new Set(a)
    ];
  }
  function z0(a) {
    let i = {}, c = Object.keys(a).sort();
    for (let o of c) i[o] = a[o];
    return i;
  }
  function N0(a, i) {
    let c = /* @__PURE__ */ new Set();
    return new Set(i), a.reduce((o, s) => {
      let f = JSON.stringify(z0(s));
      return c.has(f) || (c.add(f), o.push({
        key: f,
        link: s
      })), o;
    }, []);
  }
  var M0 = /* @__PURE__ */ new Set([
    100,
    101,
    204,
    205
  ]);
  function C0(a, i) {
    let c = typeof a == "string" ? new URL(a, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : a;
    return c.pathname === "/" ? c.pathname = "_root.data" : i && fl(c.pathname, i) === "/" ? c.pathname = `${i.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
  }
  function Fm() {
    let a = z.useContext(In);
    return Kc(a, "You must render this element inside a <DataRouterContext.Provider> element"), a;
  }
  function D0() {
    let a = z.useContext(ki);
    return Kc(a, "You must render this element inside a <DataRouterStateContext.Provider> element"), a;
  }
  var Jc = z.createContext(void 0);
  Jc.displayName = "FrameworkContext";
  function Wm() {
    let a = z.useContext(Jc);
    return Kc(a, "You must render this element inside a <HydratedRouter> element"), a;
  }
  function U0(a, i) {
    let c = z.useContext(Jc), [o, s] = z.useState(false), [f, h] = z.useState(false), { onFocus: g, onBlur: y, onMouseEnter: p, onMouseLeave: v, onTouchStart: E } = i, w = z.useRef(null);
    z.useEffect(() => {
      if (a === "render" && h(true), a === "viewport") {
        let U = (H) => {
          H.forEach((V) => {
            h(V.isIntersecting);
          });
        }, M = new IntersectionObserver(U, {
          threshold: 0.5
        });
        return w.current && M.observe(w.current), () => {
          M.disconnect();
        };
      }
    }, [
      a
    ]), z.useEffect(() => {
      if (o) {
        let U = setTimeout(() => {
          h(true);
        }, 100);
        return () => {
          clearTimeout(U);
        };
      }
    }, [
      o
    ]);
    let q = () => {
      s(true);
    }, T = () => {
      s(false), h(false);
    };
    return c ? a !== "intent" ? [
      f,
      w,
      {}
    ] : [
      f,
      w,
      {
        onFocus: au(g, q),
        onBlur: au(y, T),
        onMouseEnter: au(p, q),
        onMouseLeave: au(v, T),
        onTouchStart: au(E, q)
      }
    ] : [
      false,
      w,
      {}
    ];
  }
  function au(a, i) {
    return (c) => {
      a && a(c), c.defaultPrevented || i(c);
    };
  }
  function j0({ page: a, ...i }) {
    let { router: c } = Fm(), o = z.useMemo(() => Lm(c.routes, a, c.basename), [
      c.routes,
      a,
      c.basename
    ]);
    return o ? z.createElement(H0, {
      page: a,
      matches: o,
      ...i
    }) : null;
  }
  function B0(a) {
    let { manifest: i, routeModules: c } = Wm(), [o, s] = z.useState([]);
    return z.useEffect(() => {
      let f = false;
      return O0(a, i, c).then((h) => {
        f || s(h);
      }), () => {
        f = true;
      };
    }, [
      a,
      i,
      c
    ]), o;
  }
  function H0({ page: a, matches: i, ...c }) {
    let o = fn(), { manifest: s, routeModules: f } = Wm(), { basename: h } = Fm(), { loaderData: g, matches: y } = D0(), p = z.useMemo(() => cm(a, i, y, s, o, "data"), [
      a,
      i,
      y,
      s,
      o
    ]), v = z.useMemo(() => cm(a, i, y, s, o, "assets"), [
      a,
      i,
      y,
      s,
      o
    ]), E = z.useMemo(() => {
      if (a === o.pathname + o.search + o.hash) return [];
      let T = /* @__PURE__ */ new Set(), U = false;
      if (i.forEach((H) => {
        var _a;
        let V = s.routes[H.route.id];
        !V || !V.hasLoader || (!p.some((Z) => Z.route.id === H.route.id) && H.route.id in g && ((_a = f[H.route.id]) == null ? void 0 : _a.shouldRevalidate) || V.hasClientLoader ? U = true : T.add(H.route.id));
      }), T.size === 0) return [];
      let M = C0(a, h);
      return U && T.size > 0 && M.searchParams.set("_routes", i.filter((H) => T.has(H.route.id)).map((H) => H.route.id).join(",")), [
        M.pathname + M.search
      ];
    }, [
      h,
      g,
      o,
      s,
      p,
      i,
      a,
      f
    ]), w = z.useMemo(() => w0(v, s), [
      v,
      s
    ]), q = B0(v);
    return z.createElement(z.Fragment, null, E.map((T) => z.createElement("link", {
      key: T,
      rel: "prefetch",
      as: "fetch",
      href: T,
      ...c
    })), w.map((T) => z.createElement("link", {
      key: T,
      rel: "modulepreload",
      href: T,
      ...c
    })), q.map(({ key: T, link: U }) => z.createElement("link", {
      key: T,
      ...U
    })));
  }
  function L0(...a) {
    return (i) => {
      a.forEach((c) => {
        typeof c == "function" ? c(i) : c != null && (c.current = i);
      });
    };
  }
  var Pm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  try {
    Pm && (window.__reactRouterVersion = "7.5.2");
  } catch {
  }
  function q0({ basename: a, children: i, window: c }) {
    let o = z.useRef();
    o.current == null && (o.current = Ov({
      window: c,
      v5Compat: true
    }));
    let s = o.current, [f, h] = z.useState({
      action: s.action,
      location: s.location
    }), g = z.useCallback((y) => {
      z.startTransition(() => h(y));
    }, [
      h
    ]);
    return z.useLayoutEffect(() => s.listen(g), [
      s,
      g
    ]), z.createElement(m0, {
      basename: a,
      children: i,
      location: f.location,
      navigationType: f.action,
      navigator: s
    });
  }
  var Im = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Li = z.forwardRef(function({ onClick: i, discover: c = "render", prefetch: o = "none", relative: s, reloadDocument: f, replace: h, state: g, target: y, to: p, preventScrollReset: v, viewTransition: E, ...w }, q) {
    let { basename: T } = z.useContext(Kt), U = typeof p == "string" && Im.test(p), M, H = false;
    if (typeof p == "string" && U && (M = p, Pm)) try {
      let de = new URL(window.location.href), Qe = p.startsWith("//") ? new URL(de.protocol + p) : new URL(p), nt = fl(Qe.pathname, T);
      Qe.origin === de.origin && nt != null ? p = nt + Qe.search + Qe.hash : H = true;
    } catch {
      Zt(false, `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    let V = Pv(p, {
      relative: s
    }), [Z, ue, J] = U0(o, w), fe = V0(p, {
      replace: h,
      state: g,
      target: y,
      preventScrollReset: v,
      relative: s,
      viewTransition: E
    });
    function ye(de) {
      i && i(de), de.defaultPrevented || fe(de);
    }
    let $ = z.createElement("a", {
      ...w,
      ...J,
      href: M || V,
      onClick: H || f ? i : ye,
      ref: L0(q, ue),
      target: y,
      "data-discover": !U && c === "render" ? "true" : void 0
    });
    return Z && !U ? z.createElement(z.Fragment, null, $, z.createElement(j0, {
      page: V
    })) : $;
  });
  Li.displayName = "Link";
  var G0 = z.forwardRef(function({ "aria-current": i = "page", caseSensitive: c = false, className: o = "", end: s = false, style: f, to: h, viewTransition: g, children: y, ...p }, v) {
    let E = fu(h, {
      relative: p.relative
    }), w = fn(), q = z.useContext(ki), { navigator: T, basename: U } = z.useContext(Kt), M = q != null && J0(E) && g === true, H = T.encodeLocation ? T.encodeLocation(E).pathname : E.pathname, V = w.pathname, Z = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    c || (V = V.toLowerCase(), Z = Z ? Z.toLowerCase() : null, H = H.toLowerCase()), Z && U && (Z = fl(Z, U) || Z);
    const ue = H !== "/" && H.endsWith("/") ? H.length - 1 : H.length;
    let J = V === H || !s && V.startsWith(H) && V.charAt(ue) === "/", fe = Z != null && (Z === H || !s && Z.startsWith(H) && Z.charAt(H.length) === "/"), ye = {
      isActive: J,
      isPending: fe,
      isTransitioning: M
    }, $ = J ? i : void 0, de;
    typeof o == "function" ? de = o(ye) : de = [
      o,
      J ? "active" : null,
      fe ? "pending" : null,
      M ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Qe = typeof f == "function" ? f(ye) : f;
    return z.createElement(Li, {
      ...p,
      "aria-current": $,
      className: de,
      ref: v,
      style: Qe,
      to: h,
      viewTransition: g
    }, typeof y == "function" ? y(ye) : y);
  });
  G0.displayName = "NavLink";
  var Y0 = z.forwardRef(({ discover: a = "render", fetcherKey: i, navigate: c, reloadDocument: o, replace: s, state: f, method: h = Ci, action: g, onSubmit: y, relative: p, preventScrollReset: v, viewTransition: E, ...w }, q) => {
    let T = Z0(), U = K0(g, {
      relative: p
    }), M = h.toLowerCase() === "get" ? "get" : "post", H = typeof g == "string" && Im.test(g), V = (Z) => {
      if (y && y(Z), Z.defaultPrevented) return;
      Z.preventDefault();
      let ue = Z.nativeEvent.submitter, J = (ue == null ? void 0 : ue.getAttribute("formmethod")) || h;
      T(ue || Z.currentTarget, {
        fetcherKey: i,
        method: J,
        navigate: c,
        replace: s,
        state: f,
        relative: p,
        preventScrollReset: v,
        viewTransition: E
      });
    };
    return z.createElement("form", {
      ref: q,
      method: M,
      action: U,
      onSubmit: o ? y : V,
      ...w,
      "data-discover": !H && a === "render" ? "true" : void 0
    });
  });
  Y0.displayName = "Form";
  function k0(a) {
    return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function ep(a) {
    let i = z.useContext(In);
    return De(i, k0(a)), i;
  }
  function V0(a, { target: i, replace: c, state: o, preventScrollReset: s, relative: f, viewTransition: h } = {}) {
    let g = Iv(), y = fn(), p = fu(a, {
      relative: f
    });
    return z.useCallback((v) => {
      if (S0(v, i)) {
        v.preventDefault();
        let E = c !== void 0 ? c : ru(y) === ru(p);
        g(a, {
          replace: E,
          state: o,
          preventScrollReset: s,
          relative: f,
          viewTransition: h
        });
      }
    }, [
      y,
      g,
      p,
      c,
      o,
      i,
      a,
      s,
      f,
      h
    ]);
  }
  var X0 = 0, Q0 = () => `__${String(++X0)}__`;
  function Z0() {
    let { router: a } = ep("useSubmit"), { basename: i } = z.useContext(Kt), c = s0();
    return z.useCallback(async (o, s = {}) => {
      let { action: f, method: h, encType: g, formData: y, body: p } = R0(o, i);
      if (s.navigate === false) {
        let v = s.fetcherKey || Q0();
        await a.fetch(v, c, s.action || f, {
          preventScrollReset: s.preventScrollReset,
          formData: y,
          body: p,
          formMethod: s.method || h,
          formEncType: s.encType || g,
          flushSync: s.flushSync
        });
      } else await a.navigate(s.action || f, {
        preventScrollReset: s.preventScrollReset,
        formData: y,
        body: p,
        formMethod: s.method || h,
        formEncType: s.encType || g,
        replace: s.replace,
        state: s.state,
        fromRouteId: c,
        flushSync: s.flushSync,
        viewTransition: s.viewTransition
      });
    }, [
      a,
      i,
      c
    ]);
  }
  function K0(a, { relative: i } = {}) {
    let { basename: c } = z.useContext(Kt), o = z.useContext(dl);
    De(o, "useFormAction must be used inside a RouteContext");
    let [s] = o.matches.slice(-1), f = {
      ...fu(a || ".", {
        relative: i
      })
    }, h = fn();
    if (a == null) {
      f.search = h.search;
      let g = new URLSearchParams(f.search), y = g.getAll("index");
      if (y.some((v) => v === "")) {
        g.delete("index"), y.filter((E) => E).forEach((E) => g.append("index", E));
        let v = g.toString();
        f.search = v ? `?${v}` : "";
      }
    }
    return (!a || a === ".") && s.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (f.pathname = f.pathname === "/" ? c : sl([
      c,
      f.pathname
    ])), ru(f);
  }
  function J0(a, i = {}) {
    let c = z.useContext(Xm);
    De(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: o } = ep("useViewTransitionState"), s = fu(a, {
      relative: i.relative
    });
    if (!c.isTransitioning) return false;
    let f = fl(c.currentLocation.pathname, o) || c.currentLocation.pathname, h = fl(c.nextLocation.pathname, o) || c.nextLocation.pathname;
    return Hi(s.pathname, h) != null || Hi(s.pathname, f) != null;
  }
  new TextEncoder();
  [
    ...M0
  ];
  Hm();
  function tp(a) {
    var i, c, o = "";
    if (typeof a == "string" || typeof a == "number") o += a;
    else if (typeof a == "object") if (Array.isArray(a)) {
      var s = a.length;
      for (i = 0; i < s; i++) a[i] && (c = tp(a[i])) && (o && (o += " "), o += c);
    } else for (c in a) a[c] && (o && (o += " "), o += c);
    return o;
  }
  function lp() {
    for (var a, i, c = 0, o = "", s = arguments.length; c < s; c++) (a = arguments[c]) && (i = tp(a)) && (o && (o += " "), o += i);
    return o;
  }
  const $c = "-", $0 = (a) => {
    const i = W0(a), { conflictingClassGroups: c, conflictingClassGroupModifiers: o } = a;
    return {
      getClassGroupId: (h) => {
        const g = h.split($c);
        return g[0] === "" && g.length !== 1 && g.shift(), np(g, i) || F0(h);
      },
      getConflictingClassGroupIds: (h, g) => {
        const y = c[h] || [];
        return g && o[h] ? [
          ...y,
          ...o[h]
        ] : y;
      }
    };
  }, np = (a, i) => {
    var _a;
    if (a.length === 0) return i.classGroupId;
    const c = a[0], o = i.nextPart.get(c), s = o ? np(a.slice(1), o) : void 0;
    if (s) return s;
    if (i.validators.length === 0) return;
    const f = a.join($c);
    return (_a = i.validators.find(({ validator: h }) => h(f))) == null ? void 0 : _a.classGroupId;
  }, sm = /^\[(.+)\]$/, F0 = (a) => {
    if (sm.test(a)) {
      const i = sm.exec(a)[1], c = i == null ? void 0 : i.substring(0, i.indexOf(":"));
      if (c) return "arbitrary.." + c;
    }
  }, W0 = (a) => {
    const { theme: i, classGroups: c } = a, o = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    for (const s in c) Nc(c[s], o, s, i);
    return o;
  }, Nc = (a, i, c, o) => {
    a.forEach((s) => {
      if (typeof s == "string") {
        const f = s === "" ? i : fm(i, s);
        f.classGroupId = c;
        return;
      }
      if (typeof s == "function") {
        if (P0(s)) {
          Nc(s(o), i, c, o);
          return;
        }
        i.validators.push({
          validator: s,
          classGroupId: c
        });
        return;
      }
      Object.entries(s).forEach(([f, h]) => {
        Nc(h, fm(i, f), c, o);
      });
    });
  }, fm = (a, i) => {
    let c = a;
    return i.split($c).forEach((o) => {
      c.nextPart.has(o) || c.nextPart.set(o, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      }), c = c.nextPart.get(o);
    }), c;
  }, P0 = (a) => a.isThemeGetter, I0 = (a) => {
    if (a < 1) return {
      get: () => {
      },
      set: () => {
      }
    };
    let i = 0, c = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
    const s = (f, h) => {
      c.set(f, h), i++, i > a && (i = 0, o = c, c = /* @__PURE__ */ new Map());
    };
    return {
      get(f) {
        let h = c.get(f);
        if (h !== void 0) return h;
        if ((h = o.get(f)) !== void 0) return s(f, h), h;
      },
      set(f, h) {
        c.has(f) ? c.set(f, h) : s(f, h);
      }
    };
  }, Mc = "!", Cc = ":", eb = Cc.length, tb = (a) => {
    const { prefix: i, experimentalParseClassName: c } = a;
    let o = (s) => {
      const f = [];
      let h = 0, g = 0, y = 0, p;
      for (let T = 0; T < s.length; T++) {
        let U = s[T];
        if (h === 0 && g === 0) {
          if (U === Cc) {
            f.push(s.slice(y, T)), y = T + eb;
            continue;
          }
          if (U === "/") {
            p = T;
            continue;
          }
        }
        U === "[" ? h++ : U === "]" ? h-- : U === "(" ? g++ : U === ")" && g--;
      }
      const v = f.length === 0 ? s : s.substring(y), E = lb(v), w = E !== v, q = p && p > y ? p - y : void 0;
      return {
        modifiers: f,
        hasImportantModifier: w,
        baseClassName: E,
        maybePostfixModifierPosition: q
      };
    };
    if (i) {
      const s = i + Cc, f = o;
      o = (h) => h.startsWith(s) ? f(h.substring(s.length)) : {
        isExternal: true,
        modifiers: [],
        hasImportantModifier: false,
        baseClassName: h,
        maybePostfixModifierPosition: void 0
      };
    }
    if (c) {
      const s = o;
      o = (f) => c({
        className: f,
        parseClassName: s
      });
    }
    return o;
  }, lb = (a) => a.endsWith(Mc) ? a.substring(0, a.length - 1) : a.startsWith(Mc) ? a.substring(1) : a, nb = (a) => {
    const i = Object.fromEntries(a.orderSensitiveModifiers.map((o) => [
      o,
      true
    ]));
    return (o) => {
      if (o.length <= 1) return o;
      const s = [];
      let f = [];
      return o.forEach((h) => {
        h[0] === "[" || i[h] ? (s.push(...f.sort(), h), f = []) : f.push(h);
      }), s.push(...f.sort()), s;
    };
  }, ab = (a) => ({
    cache: I0(a.cacheSize),
    parseClassName: tb(a),
    sortModifiers: nb(a),
    ...$0(a)
  }), ub = /\s+/, ib = (a, i) => {
    const { parseClassName: c, getClassGroupId: o, getConflictingClassGroupIds: s, sortModifiers: f } = i, h = [], g = a.trim().split(ub);
    let y = "";
    for (let p = g.length - 1; p >= 0; p -= 1) {
      const v = g[p], { isExternal: E, modifiers: w, hasImportantModifier: q, baseClassName: T, maybePostfixModifierPosition: U } = c(v);
      if (E) {
        y = v + (y.length > 0 ? " " + y : y);
        continue;
      }
      let M = !!U, H = o(M ? T.substring(0, U) : T);
      if (!H) {
        if (!M) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (H = o(T), !H) {
          y = v + (y.length > 0 ? " " + y : y);
          continue;
        }
        M = false;
      }
      const V = f(w).join(":"), Z = q ? V + Mc : V, ue = Z + H;
      if (h.includes(ue)) continue;
      h.push(ue);
      const J = s(H, M);
      for (let fe = 0; fe < J.length; ++fe) {
        const ye = J[fe];
        h.push(Z + ye);
      }
      y = v + (y.length > 0 ? " " + y : y);
    }
    return y;
  };
  function rb() {
    let a = 0, i, c, o = "";
    for (; a < arguments.length; ) (i = arguments[a++]) && (c = ap(i)) && (o && (o += " "), o += c);
    return o;
  }
  const ap = (a) => {
    if (typeof a == "string") return a;
    let i, c = "";
    for (let o = 0; o < a.length; o++) a[o] && (i = ap(a[o])) && (c && (c += " "), c += i);
    return c;
  };
  function ob(a, ...i) {
    let c, o, s, f = h;
    function h(y) {
      const p = i.reduce((v, E) => E(v), a());
      return c = ab(p), o = c.cache.get, s = c.cache.set, f = g, g(y);
    }
    function g(y) {
      const p = o(y);
      if (p) return p;
      const v = ib(y, c);
      return s(y, v), v;
    }
    return function() {
      return f(rb.apply(null, arguments));
    };
  }
  const Xe = (a) => {
    const i = (c) => c[a] || [];
    return i.isThemeGetter = true, i;
  }, up = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ip = /^\((?:(\w[\w-]*):)?(.+)\)$/i, cb = /^\d+\/\d+$/, sb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, fb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, db = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, hb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Wn = (a) => cb.test(a), ce = (a) => !!a && !Number.isNaN(Number(a)), Gl = (a) => !!a && Number.isInteger(Number(a)), xc = (a) => a.endsWith("%") && ce(a.slice(0, -1)), cl = (a) => sb.test(a), pb = () => true, yb = (a) => fb.test(a) && !db.test(a), rp = () => false, gb = (a) => hb.test(a), vb = (a) => mb.test(a), bb = (a) => !P(a) && !I(a), Sb = (a) => ea(a, sp, rp), P = (a) => up.test(a), un = (a) => ea(a, fp, yb), Ec = (a) => ea(a, Ab, ce), dm = (a) => ea(a, op, rp), xb = (a) => ea(a, cp, vb), zi = (a) => ea(a, dp, gb), I = (a) => ip.test(a), uu = (a) => ta(a, fp), Eb = (a) => ta(a, Ob), hm = (a) => ta(a, op), Rb = (a) => ta(a, sp), Tb = (a) => ta(a, cp), Ni = (a) => ta(a, dp, true), ea = (a, i, c) => {
    const o = up.exec(a);
    return o ? o[1] ? i(o[1]) : c(o[2]) : false;
  }, ta = (a, i, c = false) => {
    const o = ip.exec(a);
    return o ? o[1] ? i(o[1]) : c : false;
  }, op = (a) => a === "position" || a === "percentage", cp = (a) => a === "image" || a === "url", sp = (a) => a === "length" || a === "size" || a === "bg-size", fp = (a) => a === "length", Ab = (a) => a === "number", Ob = (a) => a === "family-name", dp = (a) => a === "shadow", wb = () => {
    const a = Xe("color"), i = Xe("font"), c = Xe("text"), o = Xe("font-weight"), s = Xe("tracking"), f = Xe("leading"), h = Xe("breakpoint"), g = Xe("container"), y = Xe("spacing"), p = Xe("radius"), v = Xe("shadow"), E = Xe("inset-shadow"), w = Xe("text-shadow"), q = Xe("drop-shadow"), T = Xe("blur"), U = Xe("perspective"), M = Xe("aspect"), H = Xe("ease"), V = Xe("animate"), Z = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ], ue = () => [
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      "left-top",
      "top-right",
      "right-top",
      "bottom-right",
      "right-bottom",
      "bottom-left",
      "left-bottom"
    ], J = () => [
      ...ue(),
      I,
      P
    ], fe = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], ye = () => [
      "auto",
      "contain",
      "none"
    ], $ = () => [
      I,
      P,
      y
    ], de = () => [
      Wn,
      "full",
      "auto",
      ...$()
    ], Qe = () => [
      Gl,
      "none",
      "subgrid",
      I,
      P
    ], nt = () => [
      "auto",
      {
        span: [
          "full",
          Gl,
          I,
          P
        ]
      },
      Gl,
      I,
      P
    ], Be = () => [
      Gl,
      "auto",
      I,
      P
    ], Lt = () => [
      "auto",
      "min",
      "max",
      "fr",
      I,
      P
    ], Ct = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
      "baseline",
      "center-safe",
      "end-safe"
    ], Me = () => [
      "start",
      "end",
      "center",
      "stretch",
      "center-safe",
      "end-safe"
    ], D = () => [
      "auto",
      ...$()
    ], Q = () => [
      Wn,
      "auto",
      "full",
      "dvw",
      "dvh",
      "lvw",
      "lvh",
      "svw",
      "svh",
      "min",
      "max",
      "fit",
      ...$()
    ], k = () => [
      a,
      I,
      P
    ], xe = () => [
      ...ue(),
      hm,
      dm,
      {
        position: [
          I,
          P
        ]
      }
    ], S = () => [
      "no-repeat",
      {
        repeat: [
          "",
          "x",
          "y",
          "space",
          "round"
        ]
      }
    ], Y = () => [
      "auto",
      "cover",
      "contain",
      Rb,
      Sb,
      {
        size: [
          I,
          P
        ]
      }
    ], K = () => [
      xc,
      uu,
      un
    ], X = () => [
      "",
      "none",
      "full",
      p,
      I,
      P
    ], F = () => [
      "",
      ce,
      uu,
      un
    ], he = () => [
      "solid",
      "dashed",
      "dotted",
      "double"
    ], ae = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ], ve = () => [
      ce,
      xc,
      hm,
      dm
    ], we = () => [
      "",
      "none",
      T,
      I,
      P
    ], dt = () => [
      "none",
      ce,
      I,
      P
    ], hl = () => [
      "none",
      ce,
      I,
      P
    ], ml = () => [
      ce,
      I,
      P
    ], pl = () => [
      Wn,
      "full",
      ...$()
    ];
    return {
      cacheSize: 500,
      theme: {
        animate: [
          "spin",
          "ping",
          "pulse",
          "bounce"
        ],
        aspect: [
          "video"
        ],
        blur: [
          cl
        ],
        breakpoint: [
          cl
        ],
        color: [
          pb
        ],
        container: [
          cl
        ],
        "drop-shadow": [
          cl
        ],
        ease: [
          "in",
          "out",
          "in-out"
        ],
        font: [
          bb
        ],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black"
        ],
        "inset-shadow": [
          cl
        ],
        leading: [
          "none",
          "tight",
          "snug",
          "normal",
          "relaxed",
          "loose"
        ],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none"
        ],
        radius: [
          cl
        ],
        shadow: [
          cl
        ],
        spacing: [
          "px",
          ce
        ],
        text: [
          cl
        ],
        "text-shadow": [
          cl
        ],
        tracking: [
          "tighter",
          "tight",
          "normal",
          "wide",
          "wider",
          "widest"
        ]
      },
      classGroups: {
        aspect: [
          {
            aspect: [
              "auto",
              "square",
              Wn,
              P,
              I,
              M
            ]
          }
        ],
        container: [
          "container"
        ],
        columns: [
          {
            columns: [
              ce,
              P,
              I,
              g
            ]
          }
        ],
        "break-after": [
          {
            "break-after": Z()
          }
        ],
        "break-before": [
          {
            "break-before": Z()
          }
        ],
        "break-inside": [
          {
            "break-inside": [
              "auto",
              "avoid",
              "avoid-page",
              "avoid-column"
            ]
          }
        ],
        "box-decoration": [
          {
            "box-decoration": [
              "slice",
              "clone"
            ]
          }
        ],
        box: [
          {
            box: [
              "border",
              "content"
            ]
          }
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        sr: [
          "sr-only",
          "not-sr-only"
        ],
        float: [
          {
            float: [
              "right",
              "left",
              "none",
              "start",
              "end"
            ]
          }
        ],
        clear: [
          {
            clear: [
              "left",
              "right",
              "both",
              "none",
              "start",
              "end"
            ]
          }
        ],
        isolation: [
          "isolate",
          "isolation-auto"
        ],
        "object-fit": [
          {
            object: [
              "contain",
              "cover",
              "fill",
              "none",
              "scale-down"
            ]
          }
        ],
        "object-position": [
          {
            object: J()
          }
        ],
        overflow: [
          {
            overflow: fe()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": fe()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": fe()
          }
        ],
        overscroll: [
          {
            overscroll: ye()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": ye()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": ye()
          }
        ],
        position: [
          "static",
          "fixed",
          "absolute",
          "relative",
          "sticky"
        ],
        inset: [
          {
            inset: de()
          }
        ],
        "inset-x": [
          {
            "inset-x": de()
          }
        ],
        "inset-y": [
          {
            "inset-y": de()
          }
        ],
        start: [
          {
            start: de()
          }
        ],
        end: [
          {
            end: de()
          }
        ],
        top: [
          {
            top: de()
          }
        ],
        right: [
          {
            right: de()
          }
        ],
        bottom: [
          {
            bottom: de()
          }
        ],
        left: [
          {
            left: de()
          }
        ],
        visibility: [
          "visible",
          "invisible",
          "collapse"
        ],
        z: [
          {
            z: [
              Gl,
              "auto",
              I,
              P
            ]
          }
        ],
        basis: [
          {
            basis: [
              Wn,
              "full",
              "auto",
              g,
              ...$()
            ]
          }
        ],
        "flex-direction": [
          {
            flex: [
              "row",
              "row-reverse",
              "col",
              "col-reverse"
            ]
          }
        ],
        "flex-wrap": [
          {
            flex: [
              "nowrap",
              "wrap",
              "wrap-reverse"
            ]
          }
        ],
        flex: [
          {
            flex: [
              ce,
              Wn,
              "auto",
              "initial",
              "none",
              P
            ]
          }
        ],
        grow: [
          {
            grow: [
              "",
              ce,
              I,
              P
            ]
          }
        ],
        shrink: [
          {
            shrink: [
              "",
              ce,
              I,
              P
            ]
          }
        ],
        order: [
          {
            order: [
              Gl,
              "first",
              "last",
              "none",
              I,
              P
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": Qe()
          }
        ],
        "col-start-end": [
          {
            col: nt()
          }
        ],
        "col-start": [
          {
            "col-start": Be()
          }
        ],
        "col-end": [
          {
            "col-end": Be()
          }
        ],
        "grid-rows": [
          {
            "grid-rows": Qe()
          }
        ],
        "row-start-end": [
          {
            row: nt()
          }
        ],
        "row-start": [
          {
            "row-start": Be()
          }
        ],
        "row-end": [
          {
            "row-end": Be()
          }
        ],
        "grid-flow": [
          {
            "grid-flow": [
              "row",
              "col",
              "dense",
              "row-dense",
              "col-dense"
            ]
          }
        ],
        "auto-cols": [
          {
            "auto-cols": Lt()
          }
        ],
        "auto-rows": [
          {
            "auto-rows": Lt()
          }
        ],
        gap: [
          {
            gap: $()
          }
        ],
        "gap-x": [
          {
            "gap-x": $()
          }
        ],
        "gap-y": [
          {
            "gap-y": $()
          }
        ],
        "justify-content": [
          {
            justify: [
              ...Ct(),
              "normal"
            ]
          }
        ],
        "justify-items": [
          {
            "justify-items": [
              ...Me(),
              "normal"
            ]
          }
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              ...Me()
            ]
          }
        ],
        "align-content": [
          {
            content: [
              "normal",
              ...Ct()
            ]
          }
        ],
        "align-items": [
          {
            items: [
              ...Me(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "align-self": [
          {
            self: [
              "auto",
              ...Me(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "place-content": [
          {
            "place-content": Ct()
          }
        ],
        "place-items": [
          {
            "place-items": [
              ...Me(),
              "baseline"
            ]
          }
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              ...Me()
            ]
          }
        ],
        p: [
          {
            p: $()
          }
        ],
        px: [
          {
            px: $()
          }
        ],
        py: [
          {
            py: $()
          }
        ],
        ps: [
          {
            ps: $()
          }
        ],
        pe: [
          {
            pe: $()
          }
        ],
        pt: [
          {
            pt: $()
          }
        ],
        pr: [
          {
            pr: $()
          }
        ],
        pb: [
          {
            pb: $()
          }
        ],
        pl: [
          {
            pl: $()
          }
        ],
        m: [
          {
            m: D()
          }
        ],
        mx: [
          {
            mx: D()
          }
        ],
        my: [
          {
            my: D()
          }
        ],
        ms: [
          {
            ms: D()
          }
        ],
        me: [
          {
            me: D()
          }
        ],
        mt: [
          {
            mt: D()
          }
        ],
        mr: [
          {
            mr: D()
          }
        ],
        mb: [
          {
            mb: D()
          }
        ],
        ml: [
          {
            ml: D()
          }
        ],
        "space-x": [
          {
            "space-x": $()
          }
        ],
        "space-x-reverse": [
          "space-x-reverse"
        ],
        "space-y": [
          {
            "space-y": $()
          }
        ],
        "space-y-reverse": [
          "space-y-reverse"
        ],
        size: [
          {
            size: Q()
          }
        ],
        w: [
          {
            w: [
              g,
              "screen",
              ...Q()
            ]
          }
        ],
        "min-w": [
          {
            "min-w": [
              g,
              "screen",
              "none",
              ...Q()
            ]
          }
        ],
        "max-w": [
          {
            "max-w": [
              g,
              "screen",
              "none",
              "prose",
              {
                screen: [
                  h
                ]
              },
              ...Q()
            ]
          }
        ],
        h: [
          {
            h: [
              "screen",
              ...Q()
            ]
          }
        ],
        "min-h": [
          {
            "min-h": [
              "screen",
              "none",
              ...Q()
            ]
          }
        ],
        "max-h": [
          {
            "max-h": [
              "screen",
              ...Q()
            ]
          }
        ],
        "font-size": [
          {
            text: [
              "base",
              c,
              uu,
              un
            ]
          }
        ],
        "font-smoothing": [
          "antialiased",
          "subpixel-antialiased"
        ],
        "font-style": [
          "italic",
          "not-italic"
        ],
        "font-weight": [
          {
            font: [
              o,
              I,
              Ec
            ]
          }
        ],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              xc,
              P
            ]
          }
        ],
        "font-family": [
          {
            font: [
              Eb,
              P,
              i
            ]
          }
        ],
        "fvn-normal": [
          "normal-nums"
        ],
        "fvn-ordinal": [
          "ordinal"
        ],
        "fvn-slashed-zero": [
          "slashed-zero"
        ],
        "fvn-figure": [
          "lining-nums",
          "oldstyle-nums"
        ],
        "fvn-spacing": [
          "proportional-nums",
          "tabular-nums"
        ],
        "fvn-fraction": [
          "diagonal-fractions",
          "stacked-fractions"
        ],
        tracking: [
          {
            tracking: [
              s,
              I,
              P
            ]
          }
        ],
        "line-clamp": [
          {
            "line-clamp": [
              ce,
              "none",
              I,
              Ec
            ]
          }
        ],
        leading: [
          {
            leading: [
              f,
              ...$()
            ]
          }
        ],
        "list-image": [
          {
            "list-image": [
              "none",
              I,
              P
            ]
          }
        ],
        "list-style-position": [
          {
            list: [
              "inside",
              "outside"
            ]
          }
        ],
        "list-style-type": [
          {
            list: [
              "disc",
              "decimal",
              "none",
              I,
              P
            ]
          }
        ],
        "text-alignment": [
          {
            text: [
              "left",
              "center",
              "right",
              "justify",
              "start",
              "end"
            ]
          }
        ],
        "placeholder-color": [
          {
            placeholder: k()
          }
        ],
        "text-color": [
          {
            text: k()
          }
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [
          {
            decoration: [
              ...he(),
              "wavy"
            ]
          }
        ],
        "text-decoration-thickness": [
          {
            decoration: [
              ce,
              "from-font",
              "auto",
              I,
              un
            ]
          }
        ],
        "text-decoration-color": [
          {
            decoration: k()
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              ce,
              "auto",
              I,
              P
            ]
          }
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": [
          "truncate",
          "text-ellipsis",
          "text-clip"
        ],
        "text-wrap": [
          {
            text: [
              "wrap",
              "nowrap",
              "balance",
              "pretty"
            ]
          }
        ],
        indent: [
          {
            indent: $()
          }
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              I,
              P
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [
          {
            break: [
              "normal",
              "words",
              "all",
              "keep"
            ]
          }
        ],
        wrap: [
          {
            wrap: [
              "break-word",
              "anywhere",
              "normal"
            ]
          }
        ],
        hyphens: [
          {
            hyphens: [
              "none",
              "manual",
              "auto"
            ]
          }
        ],
        content: [
          {
            content: [
              "none",
              I,
              P
            ]
          }
        ],
        "bg-attachment": [
          {
            bg: [
              "fixed",
              "local",
              "scroll"
            ]
          }
        ],
        "bg-clip": [
          {
            "bg-clip": [
              "border",
              "padding",
              "content",
              "text"
            ]
          }
        ],
        "bg-origin": [
          {
            "bg-origin": [
              "border",
              "padding",
              "content"
            ]
          }
        ],
        "bg-position": [
          {
            bg: xe()
          }
        ],
        "bg-repeat": [
          {
            bg: S()
          }
        ],
        "bg-size": [
          {
            bg: Y()
          }
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  {
                    to: [
                      "t",
                      "tr",
                      "r",
                      "br",
                      "b",
                      "bl",
                      "l",
                      "tl"
                    ]
                  },
                  Gl,
                  I,
                  P
                ],
                radial: [
                  "",
                  I,
                  P
                ],
                conic: [
                  Gl,
                  I,
                  P
                ]
              },
              Tb,
              xb
            ]
          }
        ],
        "bg-color": [
          {
            bg: k()
          }
        ],
        "gradient-from-pos": [
          {
            from: K()
          }
        ],
        "gradient-via-pos": [
          {
            via: K()
          }
        ],
        "gradient-to-pos": [
          {
            to: K()
          }
        ],
        "gradient-from": [
          {
            from: k()
          }
        ],
        "gradient-via": [
          {
            via: k()
          }
        ],
        "gradient-to": [
          {
            to: k()
          }
        ],
        rounded: [
          {
            rounded: X()
          }
        ],
        "rounded-s": [
          {
            "rounded-s": X()
          }
        ],
        "rounded-e": [
          {
            "rounded-e": X()
          }
        ],
        "rounded-t": [
          {
            "rounded-t": X()
          }
        ],
        "rounded-r": [
          {
            "rounded-r": X()
          }
        ],
        "rounded-b": [
          {
            "rounded-b": X()
          }
        ],
        "rounded-l": [
          {
            "rounded-l": X()
          }
        ],
        "rounded-ss": [
          {
            "rounded-ss": X()
          }
        ],
        "rounded-se": [
          {
            "rounded-se": X()
          }
        ],
        "rounded-ee": [
          {
            "rounded-ee": X()
          }
        ],
        "rounded-es": [
          {
            "rounded-es": X()
          }
        ],
        "rounded-tl": [
          {
            "rounded-tl": X()
          }
        ],
        "rounded-tr": [
          {
            "rounded-tr": X()
          }
        ],
        "rounded-br": [
          {
            "rounded-br": X()
          }
        ],
        "rounded-bl": [
          {
            "rounded-bl": X()
          }
        ],
        "border-w": [
          {
            border: F()
          }
        ],
        "border-w-x": [
          {
            "border-x": F()
          }
        ],
        "border-w-y": [
          {
            "border-y": F()
          }
        ],
        "border-w-s": [
          {
            "border-s": F()
          }
        ],
        "border-w-e": [
          {
            "border-e": F()
          }
        ],
        "border-w-t": [
          {
            "border-t": F()
          }
        ],
        "border-w-r": [
          {
            "border-r": F()
          }
        ],
        "border-w-b": [
          {
            "border-b": F()
          }
        ],
        "border-w-l": [
          {
            "border-l": F()
          }
        ],
        "divide-x": [
          {
            "divide-x": F()
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": F()
          }
        ],
        "divide-y-reverse": [
          "divide-y-reverse"
        ],
        "border-style": [
          {
            border: [
              ...he(),
              "hidden",
              "none"
            ]
          }
        ],
        "divide-style": [
          {
            divide: [
              ...he(),
              "hidden",
              "none"
            ]
          }
        ],
        "border-color": [
          {
            border: k()
          }
        ],
        "border-color-x": [
          {
            "border-x": k()
          }
        ],
        "border-color-y": [
          {
            "border-y": k()
          }
        ],
        "border-color-s": [
          {
            "border-s": k()
          }
        ],
        "border-color-e": [
          {
            "border-e": k()
          }
        ],
        "border-color-t": [
          {
            "border-t": k()
          }
        ],
        "border-color-r": [
          {
            "border-r": k()
          }
        ],
        "border-color-b": [
          {
            "border-b": k()
          }
        ],
        "border-color-l": [
          {
            "border-l": k()
          }
        ],
        "divide-color": [
          {
            divide: k()
          }
        ],
        "outline-style": [
          {
            outline: [
              ...he(),
              "none",
              "hidden"
            ]
          }
        ],
        "outline-offset": [
          {
            "outline-offset": [
              ce,
              I,
              P
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              "",
              ce,
              uu,
              un
            ]
          }
        ],
        "outline-color": [
          {
            outline: k()
          }
        ],
        shadow: [
          {
            shadow: [
              "",
              "none",
              v,
              Ni,
              zi
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: k()
          }
        ],
        "inset-shadow": [
          {
            "inset-shadow": [
              "none",
              E,
              Ni,
              zi
            ]
          }
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": k()
          }
        ],
        "ring-w": [
          {
            ring: F()
          }
        ],
        "ring-w-inset": [
          "ring-inset"
        ],
        "ring-color": [
          {
            ring: k()
          }
        ],
        "ring-offset-w": [
          {
            "ring-offset": [
              ce,
              un
            ]
          }
        ],
        "ring-offset-color": [
          {
            "ring-offset": k()
          }
        ],
        "inset-ring-w": [
          {
            "inset-ring": F()
          }
        ],
        "inset-ring-color": [
          {
            "inset-ring": k()
          }
        ],
        "text-shadow": [
          {
            "text-shadow": [
              "none",
              w,
              Ni,
              zi
            ]
          }
        ],
        "text-shadow-color": [
          {
            "text-shadow": k()
          }
        ],
        opacity: [
          {
            opacity: [
              ce,
              I,
              P
            ]
          }
        ],
        "mix-blend": [
          {
            "mix-blend": [
              ...ae(),
              "plus-darker",
              "plus-lighter"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": ae()
          }
        ],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          },
          "mask-no-clip"
        ],
        "mask-composite": [
          {
            mask: [
              "add",
              "subtract",
              "intersect",
              "exclude"
            ]
          }
        ],
        "mask-image-linear-pos": [
          {
            "mask-linear": [
              ce
            ]
          }
        ],
        "mask-image-linear-from-pos": [
          {
            "mask-linear-from": ve()
          }
        ],
        "mask-image-linear-to-pos": [
          {
            "mask-linear-to": ve()
          }
        ],
        "mask-image-linear-from-color": [
          {
            "mask-linear-from": k()
          }
        ],
        "mask-image-linear-to-color": [
          {
            "mask-linear-to": k()
          }
        ],
        "mask-image-t-from-pos": [
          {
            "mask-t-from": ve()
          }
        ],
        "mask-image-t-to-pos": [
          {
            "mask-t-to": ve()
          }
        ],
        "mask-image-t-from-color": [
          {
            "mask-t-from": k()
          }
        ],
        "mask-image-t-to-color": [
          {
            "mask-t-to": k()
          }
        ],
        "mask-image-r-from-pos": [
          {
            "mask-r-from": ve()
          }
        ],
        "mask-image-r-to-pos": [
          {
            "mask-r-to": ve()
          }
        ],
        "mask-image-r-from-color": [
          {
            "mask-r-from": k()
          }
        ],
        "mask-image-r-to-color": [
          {
            "mask-r-to": k()
          }
        ],
        "mask-image-b-from-pos": [
          {
            "mask-b-from": ve()
          }
        ],
        "mask-image-b-to-pos": [
          {
            "mask-b-to": ve()
          }
        ],
        "mask-image-b-from-color": [
          {
            "mask-b-from": k()
          }
        ],
        "mask-image-b-to-color": [
          {
            "mask-b-to": k()
          }
        ],
        "mask-image-l-from-pos": [
          {
            "mask-l-from": ve()
          }
        ],
        "mask-image-l-to-pos": [
          {
            "mask-l-to": ve()
          }
        ],
        "mask-image-l-from-color": [
          {
            "mask-l-from": k()
          }
        ],
        "mask-image-l-to-color": [
          {
            "mask-l-to": k()
          }
        ],
        "mask-image-x-from-pos": [
          {
            "mask-x-from": ve()
          }
        ],
        "mask-image-x-to-pos": [
          {
            "mask-x-to": ve()
          }
        ],
        "mask-image-x-from-color": [
          {
            "mask-x-from": k()
          }
        ],
        "mask-image-x-to-color": [
          {
            "mask-x-to": k()
          }
        ],
        "mask-image-y-from-pos": [
          {
            "mask-y-from": ve()
          }
        ],
        "mask-image-y-to-pos": [
          {
            "mask-y-to": ve()
          }
        ],
        "mask-image-y-from-color": [
          {
            "mask-y-from": k()
          }
        ],
        "mask-image-y-to-color": [
          {
            "mask-y-to": k()
          }
        ],
        "mask-image-radial": [
          {
            "mask-radial": [
              I,
              P
            ]
          }
        ],
        "mask-image-radial-from-pos": [
          {
            "mask-radial-from": ve()
          }
        ],
        "mask-image-radial-to-pos": [
          {
            "mask-radial-to": ve()
          }
        ],
        "mask-image-radial-from-color": [
          {
            "mask-radial-from": k()
          }
        ],
        "mask-image-radial-to-color": [
          {
            "mask-radial-to": k()
          }
        ],
        "mask-image-radial-shape": [
          {
            "mask-radial": [
              "circle",
              "ellipse"
            ]
          }
        ],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              {
                closest: [
                  "side",
                  "corner"
                ],
                farthest: [
                  "side",
                  "corner"
                ]
              }
            ]
          }
        ],
        "mask-image-radial-pos": [
          {
            "mask-radial-at": ue()
          }
        ],
        "mask-image-conic-pos": [
          {
            "mask-conic": [
              ce
            ]
          }
        ],
        "mask-image-conic-from-pos": [
          {
            "mask-conic-from": ve()
          }
        ],
        "mask-image-conic-to-pos": [
          {
            "mask-conic-to": ve()
          }
        ],
        "mask-image-conic-from-color": [
          {
            "mask-conic-from": k()
          }
        ],
        "mask-image-conic-to-color": [
          {
            "mask-conic-to": k()
          }
        ],
        "mask-mode": [
          {
            mask: [
              "alpha",
              "luminance",
              "match"
            ]
          }
        ],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          }
        ],
        "mask-position": [
          {
            mask: xe()
          }
        ],
        "mask-repeat": [
          {
            mask: S()
          }
        ],
        "mask-size": [
          {
            mask: Y()
          }
        ],
        "mask-type": [
          {
            "mask-type": [
              "alpha",
              "luminance"
            ]
          }
        ],
        "mask-image": [
          {
            mask: [
              "none",
              I,
              P
            ]
          }
        ],
        filter: [
          {
            filter: [
              "",
              "none",
              I,
              P
            ]
          }
        ],
        blur: [
          {
            blur: we()
          }
        ],
        brightness: [
          {
            brightness: [
              ce,
              I,
              P
            ]
          }
        ],
        contrast: [
          {
            contrast: [
              ce,
              I,
              P
            ]
          }
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              q,
              Ni,
              zi
            ]
          }
        ],
        "drop-shadow-color": [
          {
            "drop-shadow": k()
          }
        ],
        grayscale: [
          {
            grayscale: [
              "",
              ce,
              I,
              P
            ]
          }
        ],
        "hue-rotate": [
          {
            "hue-rotate": [
              ce,
              I,
              P
            ]
          }
        ],
        invert: [
          {
            invert: [
              "",
              ce,
              I,
              P
            ]
          }
        ],
        saturate: [
          {
            saturate: [
              ce,
              I,
              P
            ]
          }
        ],
        sepia: [
          {
            sepia: [
              "",
              ce,
              I,
              P
            ]
          }
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none",
              I,
              P
            ]
          }
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": we()
          }
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              ce,
              I,
              P
            ]
          }
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              ce,
              I,
              P
            ]
          }
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              "",
              ce,
              I,
              P
            ]
          }
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              ce,
              I,
              P
            ]
          }
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              "",
              ce,
              I,
              P
            ]
          }
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              ce,
              I,
              P
            ]
          }
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              ce,
              I,
              P
            ]
          }
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              "",
              ce,
              I,
              P
            ]
          }
        ],
        "border-collapse": [
          {
            border: [
              "collapse",
              "separate"
            ]
          }
        ],
        "border-spacing": [
          {
            "border-spacing": $()
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": $()
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": $()
          }
        ],
        "table-layout": [
          {
            table: [
              "auto",
              "fixed"
            ]
          }
        ],
        caption: [
          {
            caption: [
              "top",
              "bottom"
            ]
          }
        ],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              I,
              P
            ]
          }
        ],
        "transition-behavior": [
          {
            transition: [
              "normal",
              "discrete"
            ]
          }
        ],
        duration: [
          {
            duration: [
              ce,
              "initial",
              I,
              P
            ]
          }
        ],
        ease: [
          {
            ease: [
              "linear",
              "initial",
              H,
              I,
              P
            ]
          }
        ],
        delay: [
          {
            delay: [
              ce,
              I,
              P
            ]
          }
        ],
        animate: [
          {
            animate: [
              "none",
              V,
              I,
              P
            ]
          }
        ],
        backface: [
          {
            backface: [
              "hidden",
              "visible"
            ]
          }
        ],
        perspective: [
          {
            perspective: [
              U,
              I,
              P
            ]
          }
        ],
        "perspective-origin": [
          {
            "perspective-origin": J()
          }
        ],
        rotate: [
          {
            rotate: dt()
          }
        ],
        "rotate-x": [
          {
            "rotate-x": dt()
          }
        ],
        "rotate-y": [
          {
            "rotate-y": dt()
          }
        ],
        "rotate-z": [
          {
            "rotate-z": dt()
          }
        ],
        scale: [
          {
            scale: hl()
          }
        ],
        "scale-x": [
          {
            "scale-x": hl()
          }
        ],
        "scale-y": [
          {
            "scale-y": hl()
          }
        ],
        "scale-z": [
          {
            "scale-z": hl()
          }
        ],
        "scale-3d": [
          "scale-3d"
        ],
        skew: [
          {
            skew: ml()
          }
        ],
        "skew-x": [
          {
            "skew-x": ml()
          }
        ],
        "skew-y": [
          {
            "skew-y": ml()
          }
        ],
        transform: [
          {
            transform: [
              I,
              P,
              "",
              "none",
              "gpu",
              "cpu"
            ]
          }
        ],
        "transform-origin": [
          {
            origin: J()
          }
        ],
        "transform-style": [
          {
            transform: [
              "3d",
              "flat"
            ]
          }
        ],
        translate: [
          {
            translate: pl()
          }
        ],
        "translate-x": [
          {
            "translate-x": pl()
          }
        ],
        "translate-y": [
          {
            "translate-y": pl()
          }
        ],
        "translate-z": [
          {
            "translate-z": pl()
          }
        ],
        "translate-none": [
          "translate-none"
        ],
        accent: [
          {
            accent: k()
          }
        ],
        appearance: [
          {
            appearance: [
              "none",
              "auto"
            ]
          }
        ],
        "caret-color": [
          {
            caret: k()
          }
        ],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              I,
              P
            ]
          }
        ],
        "field-sizing": [
          {
            "field-sizing": [
              "fixed",
              "content"
            ]
          }
        ],
        "pointer-events": [
          {
            "pointer-events": [
              "auto",
              "none"
            ]
          }
        ],
        resize: [
          {
            resize: [
              "none",
              "",
              "y",
              "x"
            ]
          }
        ],
        "scroll-behavior": [
          {
            scroll: [
              "auto",
              "smooth"
            ]
          }
        ],
        "scroll-m": [
          {
            "scroll-m": $()
          }
        ],
        "scroll-mx": [
          {
            "scroll-mx": $()
          }
        ],
        "scroll-my": [
          {
            "scroll-my": $()
          }
        ],
        "scroll-ms": [
          {
            "scroll-ms": $()
          }
        ],
        "scroll-me": [
          {
            "scroll-me": $()
          }
        ],
        "scroll-mt": [
          {
            "scroll-mt": $()
          }
        ],
        "scroll-mr": [
          {
            "scroll-mr": $()
          }
        ],
        "scroll-mb": [
          {
            "scroll-mb": $()
          }
        ],
        "scroll-ml": [
          {
            "scroll-ml": $()
          }
        ],
        "scroll-p": [
          {
            "scroll-p": $()
          }
        ],
        "scroll-px": [
          {
            "scroll-px": $()
          }
        ],
        "scroll-py": [
          {
            "scroll-py": $()
          }
        ],
        "scroll-ps": [
          {
            "scroll-ps": $()
          }
        ],
        "scroll-pe": [
          {
            "scroll-pe": $()
          }
        ],
        "scroll-pt": [
          {
            "scroll-pt": $()
          }
        ],
        "scroll-pr": [
          {
            "scroll-pr": $()
          }
        ],
        "scroll-pb": [
          {
            "scroll-pb": $()
          }
        ],
        "scroll-pl": [
          {
            "scroll-pl": $()
          }
        ],
        "snap-align": [
          {
            snap: [
              "start",
              "end",
              "center",
              "align-none"
            ]
          }
        ],
        "snap-stop": [
          {
            snap: [
              "normal",
              "always"
            ]
          }
        ],
        "snap-type": [
          {
            snap: [
              "none",
              "x",
              "y",
              "both"
            ]
          }
        ],
        "snap-strictness": [
          {
            snap: [
              "mandatory",
              "proximity"
            ]
          }
        ],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "manipulation"
            ]
          }
        ],
        "touch-x": [
          {
            "touch-pan": [
              "x",
              "left",
              "right"
            ]
          }
        ],
        "touch-y": [
          {
            "touch-pan": [
              "y",
              "up",
              "down"
            ]
          }
        ],
        "touch-pz": [
          "touch-pinch-zoom"
        ],
        select: [
          {
            select: [
              "none",
              "text",
              "all",
              "auto"
            ]
          }
        ],
        "will-change": [
          {
            "will-change": [
              "auto",
              "scroll",
              "contents",
              "transform",
              I,
              P
            ]
          }
        ],
        fill: [
          {
            fill: [
              "none",
              ...k()
            ]
          }
        ],
        "stroke-w": [
          {
            stroke: [
              ce,
              uu,
              un,
              Ec
            ]
          }
        ],
        stroke: [
          {
            stroke: [
              "none",
              ...k()
            ]
          }
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": [
              "auto",
              "none"
            ]
          }
        ]
      },
      conflictingClassGroups: {
        overflow: [
          "overflow-x",
          "overflow-y"
        ],
        overscroll: [
          "overscroll-x",
          "overscroll-y"
        ],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": [
          "right",
          "left"
        ],
        "inset-y": [
          "top",
          "bottom"
        ],
        flex: [
          "basis",
          "grow",
          "shrink"
        ],
        gap: [
          "gap-x",
          "gap-y"
        ],
        p: [
          "px",
          "py",
          "ps",
          "pe",
          "pt",
          "pr",
          "pb",
          "pl"
        ],
        px: [
          "pr",
          "pl"
        ],
        py: [
          "pt",
          "pb"
        ],
        m: [
          "mx",
          "my",
          "ms",
          "me",
          "mt",
          "mr",
          "mb",
          "ml"
        ],
        mx: [
          "mr",
          "ml"
        ],
        my: [
          "mt",
          "mb"
        ],
        size: [
          "w",
          "h"
        ],
        "font-size": [
          "leading"
        ],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": [
          "fvn-normal"
        ],
        "fvn-slashed-zero": [
          "fvn-normal"
        ],
        "fvn-figure": [
          "fvn-normal"
        ],
        "fvn-spacing": [
          "fvn-normal"
        ],
        "fvn-fraction": [
          "fvn-normal"
        ],
        "line-clamp": [
          "display",
          "overflow"
        ],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": [
          "rounded-ss",
          "rounded-es"
        ],
        "rounded-e": [
          "rounded-se",
          "rounded-ee"
        ],
        "rounded-t": [
          "rounded-tl",
          "rounded-tr"
        ],
        "rounded-r": [
          "rounded-tr",
          "rounded-br"
        ],
        "rounded-b": [
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-l": [
          "rounded-tl",
          "rounded-bl"
        ],
        "border-spacing": [
          "border-spacing-x",
          "border-spacing-y"
        ],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": [
          "border-w-r",
          "border-w-l"
        ],
        "border-w-y": [
          "border-w-t",
          "border-w-b"
        ],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": [
          "border-color-r",
          "border-color-l"
        ],
        "border-color-y": [
          "border-color-t",
          "border-color-b"
        ],
        translate: [
          "translate-x",
          "translate-y",
          "translate-none"
        ],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": [
          "scroll-mr",
          "scroll-ml"
        ],
        "scroll-my": [
          "scroll-mt",
          "scroll-mb"
        ],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": [
          "scroll-pr",
          "scroll-pl"
        ],
        "scroll-py": [
          "scroll-pt",
          "scroll-pb"
        ],
        touch: [
          "touch-x",
          "touch-y",
          "touch-pz"
        ],
        "touch-x": [
          "touch"
        ],
        "touch-y": [
          "touch"
        ],
        "touch-pz": [
          "touch"
        ]
      },
      conflictingClassGroupModifiers: {
        "font-size": [
          "leading"
        ]
      },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection"
      ]
    };
  }, _b = ob(wb);
  function Mt(...a) {
    return _b(lp(a));
  }
  function Dc({ className: a, ...i }) {
    return G.jsx("div", {
      "data-slot": "card",
      className: Mt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", a),
      ...i
    });
  }
  function Uc({ className: a, ...i }) {
    return G.jsx("div", {
      "data-slot": "card-header",
      className: Mt("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", a),
      ...i
    });
  }
  function jc({ className: a, ...i }) {
    return G.jsx("div", {
      "data-slot": "card-title",
      className: Mt("leading-none font-semibold", a),
      ...i
    });
  }
  function mm({ className: a, ...i }) {
    return G.jsx("div", {
      "data-slot": "card-description",
      className: Mt("text-muted-foreground text-sm", a),
      ...i
    });
  }
  function Bc({ className: a, ...i }) {
    return G.jsx("div", {
      "data-slot": "card-content",
      className: Mt("px-6", a),
      ...i
    });
  }
  function pm({ className: a, type: i, ...c }) {
    return G.jsx("input", {
      type: i,
      "data-slot": "input",
      className: Mt("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", a),
      ...c
    });
  }
  function ym(a, i) {
    if (typeof a == "function") return a(i);
    a != null && (a.current = i);
  }
  function zb(...a) {
    return (i) => {
      let c = false;
      const o = a.map((s) => {
        const f = ym(s, i);
        return !c && typeof f == "function" && (c = true), f;
      });
      if (c) return () => {
        for (let s = 0; s < o.length; s++) {
          const f = o[s];
          typeof f == "function" ? f() : ym(a[s], null);
        }
      };
    };
  }
  function hp(a) {
    const i = Nb(a), c = z.forwardRef((o, s) => {
      const { children: f, ...h } = o, g = z.Children.toArray(f), y = g.find(Cb);
      if (y) {
        const p = y.props.children, v = g.map((E) => E === y ? z.Children.count(p) > 1 ? z.Children.only(null) : z.isValidElement(p) ? p.props.children : null : E);
        return G.jsx(i, {
          ...h,
          ref: s,
          children: z.isValidElement(p) ? z.cloneElement(p, void 0, v) : null
        });
      }
      return G.jsx(i, {
        ...h,
        ref: s,
        children: f
      });
    });
    return c.displayName = `${a}.Slot`, c;
  }
  var mp = hp("Slot");
  function Nb(a) {
    const i = z.forwardRef((c, o) => {
      const { children: s, ...f } = c;
      if (z.isValidElement(s)) {
        const h = Ub(s), g = Db(f, s.props);
        return s.type !== z.Fragment && (g.ref = o ? zb(o, h) : h), z.cloneElement(s, g);
      }
      return z.Children.count(s) > 1 ? z.Children.only(null) : null;
    });
    return i.displayName = `${a}.SlotClone`, i;
  }
  var Mb = Symbol("radix.slottable");
  function Cb(a) {
    return z.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === Mb;
  }
  function Db(a, i) {
    const c = {
      ...i
    };
    for (const o in i) {
      const s = a[o], f = i[o];
      /^on[A-Z]/.test(o) ? s && f ? c[o] = (...g) => {
        f(...g), s(...g);
      } : s && (c[o] = s) : o === "style" ? c[o] = {
        ...s,
        ...f
      } : o === "className" && (c[o] = [
        s,
        f
      ].filter(Boolean).join(" "));
    }
    return {
      ...a,
      ...c
    };
  }
  function Ub(a) {
    var _a, _b2;
    let i = (_a = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : _a.get, c = i && "isReactWarning" in i && i.isReactWarning;
    return c ? a.ref : (i = (_b2 = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : _b2.get, c = i && "isReactWarning" in i && i.isReactWarning, c ? a.props.ref : a.props.ref || a.ref);
  }
  const gm = (a) => typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a, vm = lp, pp = (a, i) => (c) => {
    var o;
    if ((i == null ? void 0 : i.variants) == null) return vm(a, c == null ? void 0 : c.class, c == null ? void 0 : c.className);
    const { variants: s, defaultVariants: f } = i, h = Object.keys(s).map((p) => {
      const v = c == null ? void 0 : c[p], E = f == null ? void 0 : f[p];
      if (v === null) return null;
      const w = gm(v) || gm(E);
      return s[p][w];
    }), g = c && Object.entries(c).reduce((p, v) => {
      let [E, w] = v;
      return w === void 0 || (p[E] = w), p;
    }, {}), y = i == null || (o = i.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, v) => {
      let { class: E, className: w, ...q } = v;
      return Object.entries(q).every((T) => {
        let [U, M] = T;
        return Array.isArray(M) ? M.includes({
          ...f,
          ...g
        }[U]) : {
          ...f,
          ...g
        }[U] === M;
      }) ? [
        ...p,
        E,
        w
      ] : p;
    }, []);
    return vm(a, h, y, c == null ? void 0 : c.class, c == null ? void 0 : c.className);
  }, jb = pp("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  });
  function rn({ className: a, variant: i, size: c, asChild: o = false, ...s }) {
    const f = o ? mp : "button";
    return G.jsx(f, {
      "data-slot": "button",
      className: Mt(jb({
        variant: i,
        size: c,
        className: a
      })),
      ...s
    });
  }
  function yp(a, i) {
    return function() {
      return a.apply(i, arguments);
    };
  }
  const { toString: Bb } = Object.prototype, { getPrototypeOf: Fc } = Object, { iterator: Xi, toStringTag: gp } = Symbol, Qi = /* @__PURE__ */ ((a) => (i) => {
    const c = Bb.call(i);
    return a[c] || (a[c] = c.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), Ht = (a) => (a = a.toLowerCase(), (i) => Qi(i) === a), Zi = (a) => (i) => typeof i === a, { isArray: la } = Array, ou = Zi("undefined");
  function Hb(a) {
    return a !== null && !ou(a) && a.constructor !== null && !ou(a.constructor) && st(a.constructor.isBuffer) && a.constructor.isBuffer(a);
  }
  const vp = Ht("ArrayBuffer");
  function Lb(a) {
    let i;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(a) : i = a && a.buffer && vp(a.buffer), i;
  }
  const qb = Zi("string"), st = Zi("function"), bp = Zi("number"), Ki = (a) => a !== null && typeof a == "object", Gb = (a) => a === true || a === false, Ui = (a) => {
    if (Qi(a) !== "object") return false;
    const i = Fc(a);
    return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(gp in a) && !(Xi in a);
  }, Yb = Ht("Date"), kb = Ht("File"), Vb = Ht("Blob"), Xb = Ht("FileList"), Qb = (a) => Ki(a) && st(a.pipe), Zb = (a) => {
    let i;
    return a && (typeof FormData == "function" && a instanceof FormData || st(a.append) && ((i = Qi(a)) === "formdata" || i === "object" && st(a.toString) && a.toString() === "[object FormData]"));
  }, Kb = Ht("URLSearchParams"), [Jb, $b, Fb, Wb] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
  ].map(Ht), Pb = (a) => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function du(a, i, { allOwnKeys: c = false } = {}) {
    if (a === null || typeof a > "u") return;
    let o, s;
    if (typeof a != "object" && (a = [
      a
    ]), la(a)) for (o = 0, s = a.length; o < s; o++) i.call(null, a[o], o, a);
    else {
      const f = c ? Object.getOwnPropertyNames(a) : Object.keys(a), h = f.length;
      let g;
      for (o = 0; o < h; o++) g = f[o], i.call(null, a[g], g, a);
    }
  }
  function Sp(a, i) {
    i = i.toLowerCase();
    const c = Object.keys(a);
    let o = c.length, s;
    for (; o-- > 0; ) if (s = c[o], i === s.toLowerCase()) return s;
    return null;
  }
  const on = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, xp = (a) => !ou(a) && a !== on;
  function Hc() {
    const { caseless: a } = xp(this) && this || {}, i = {}, c = (o, s) => {
      const f = a && Sp(i, s) || s;
      Ui(i[f]) && Ui(o) ? i[f] = Hc(i[f], o) : Ui(o) ? i[f] = Hc({}, o) : la(o) ? i[f] = o.slice() : i[f] = o;
    };
    for (let o = 0, s = arguments.length; o < s; o++) arguments[o] && du(arguments[o], c);
    return i;
  }
  const Ib = (a, i, c, { allOwnKeys: o } = {}) => (du(i, (s, f) => {
    c && st(s) ? a[f] = yp(s, c) : a[f] = s;
  }, {
    allOwnKeys: o
  }), a), e1 = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a), t1 = (a, i, c, o) => {
    a.prototype = Object.create(i.prototype, o), a.prototype.constructor = a, Object.defineProperty(a, "super", {
      value: i.prototype
    }), c && Object.assign(a.prototype, c);
  }, l1 = (a, i, c, o) => {
    let s, f, h;
    const g = {};
    if (i = i || {}, a == null) return i;
    do {
      for (s = Object.getOwnPropertyNames(a), f = s.length; f-- > 0; ) h = s[f], (!o || o(h, a, i)) && !g[h] && (i[h] = a[h], g[h] = true);
      a = c !== false && Fc(a);
    } while (a && (!c || c(a, i)) && a !== Object.prototype);
    return i;
  }, n1 = (a, i, c) => {
    a = String(a), (c === void 0 || c > a.length) && (c = a.length), c -= i.length;
    const o = a.indexOf(i, c);
    return o !== -1 && o === c;
  }, a1 = (a) => {
    if (!a) return null;
    if (la(a)) return a;
    let i = a.length;
    if (!bp(i)) return null;
    const c = new Array(i);
    for (; i-- > 0; ) c[i] = a[i];
    return c;
  }, u1 = /* @__PURE__ */ ((a) => (i) => a && i instanceof a)(typeof Uint8Array < "u" && Fc(Uint8Array)), i1 = (a, i) => {
    const o = (a && a[Xi]).call(a);
    let s;
    for (; (s = o.next()) && !s.done; ) {
      const f = s.value;
      i.call(a, f[0], f[1]);
    }
  }, r1 = (a, i) => {
    let c;
    const o = [];
    for (; (c = a.exec(i)) !== null; ) o.push(c);
    return o;
  }, o1 = Ht("HTMLFormElement"), c1 = (a) => a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(c, o, s) {
    return o.toUpperCase() + s;
  }), bm = (({ hasOwnProperty: a }) => (i, c) => a.call(i, c))(Object.prototype), s1 = Ht("RegExp"), Ep = (a, i) => {
    const c = Object.getOwnPropertyDescriptors(a), o = {};
    du(c, (s, f) => {
      let h;
      (h = i(s, f, a)) !== false && (o[f] = h || s);
    }), Object.defineProperties(a, o);
  }, f1 = (a) => {
    Ep(a, (i, c) => {
      if (st(a) && [
        "arguments",
        "caller",
        "callee"
      ].indexOf(c) !== -1) return false;
      const o = a[c];
      if (st(o)) {
        if (i.enumerable = false, "writable" in i) {
          i.writable = false;
          return;
        }
        i.set || (i.set = () => {
          throw Error("Can not rewrite read-only method '" + c + "'");
        });
      }
    });
  }, d1 = (a, i) => {
    const c = {}, o = (s) => {
      s.forEach((f) => {
        c[f] = true;
      });
    };
    return la(a) ? o(a) : o(String(a).split(i)), c;
  }, h1 = () => {
  }, m1 = (a, i) => a != null && Number.isFinite(a = +a) ? a : i;
  function p1(a) {
    return !!(a && st(a.append) && a[gp] === "FormData" && a[Xi]);
  }
  const y1 = (a) => {
    const i = new Array(10), c = (o, s) => {
      if (Ki(o)) {
        if (i.indexOf(o) >= 0) return;
        if (!("toJSON" in o)) {
          i[s] = o;
          const f = la(o) ? [] : {};
          return du(o, (h, g) => {
            const y = c(h, s + 1);
            !ou(y) && (f[g] = y);
          }), i[s] = void 0, f;
        }
      }
      return o;
    };
    return c(a, 0);
  }, g1 = Ht("AsyncFunction"), v1 = (a) => a && (Ki(a) || st(a)) && st(a.then) && st(a.catch), Rp = ((a, i) => a ? setImmediate : i ? ((c, o) => (on.addEventListener("message", ({ source: s, data: f }) => {
    s === on && f === c && o.length && o.shift()();
  }, false), (s) => {
    o.push(s), on.postMessage(c, "*");
  }))(`axios@${Math.random()}`, []) : (c) => setTimeout(c))(typeof setImmediate == "function", st(on.postMessage)), b1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(on) : typeof process < "u" && process.nextTick || Rp, S1 = (a) => a != null && st(a[Xi]), C = {
    isArray: la,
    isArrayBuffer: vp,
    isBuffer: Hb,
    isFormData: Zb,
    isArrayBufferView: Lb,
    isString: qb,
    isNumber: bp,
    isBoolean: Gb,
    isObject: Ki,
    isPlainObject: Ui,
    isReadableStream: Jb,
    isRequest: $b,
    isResponse: Fb,
    isHeaders: Wb,
    isUndefined: ou,
    isDate: Yb,
    isFile: kb,
    isBlob: Vb,
    isRegExp: s1,
    isFunction: st,
    isStream: Qb,
    isURLSearchParams: Kb,
    isTypedArray: u1,
    isFileList: Xb,
    forEach: du,
    merge: Hc,
    extend: Ib,
    trim: Pb,
    stripBOM: e1,
    inherits: t1,
    toFlatObject: l1,
    kindOf: Qi,
    kindOfTest: Ht,
    endsWith: n1,
    toArray: a1,
    forEachEntry: i1,
    matchAll: r1,
    isHTMLForm: o1,
    hasOwnProperty: bm,
    hasOwnProp: bm,
    reduceDescriptors: Ep,
    freezeMethods: f1,
    toObjectSet: d1,
    toCamelCase: c1,
    noop: h1,
    toFiniteNumber: m1,
    findKey: Sp,
    global: on,
    isContextDefined: xp,
    isSpecCompliantForm: p1,
    toJSONObject: y1,
    isAsyncFn: g1,
    isThenable: v1,
    setImmediate: Rp,
    asap: b1,
    isIterable: S1
  };
  function ie(a, i, c, o, s) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = a, this.name = "AxiosError", i && (this.code = i), c && (this.config = c), o && (this.request = o), s && (this.response = s, this.status = s.status ? s.status : null);
  }
  C.inherits(ie, Error, {
    toJSON: function() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: C.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  const Tp = ie.prototype, Ap = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
  ].forEach((a) => {
    Ap[a] = {
      value: a
    };
  });
  Object.defineProperties(ie, Ap);
  Object.defineProperty(Tp, "isAxiosError", {
    value: true
  });
  ie.from = (a, i, c, o, s, f) => {
    const h = Object.create(Tp);
    return C.toFlatObject(a, h, function(y) {
      return y !== Error.prototype;
    }, (g) => g !== "isAxiosError"), ie.call(h, a.message, i, c, o, s), h.cause = a, h.name = a.name, f && Object.assign(h, f), h;
  };
  const x1 = null;
  function Lc(a) {
    return C.isPlainObject(a) || C.isArray(a);
  }
  function Op(a) {
    return C.endsWith(a, "[]") ? a.slice(0, -2) : a;
  }
  function Sm(a, i, c) {
    return a ? a.concat(i).map(function(s, f) {
      return s = Op(s), !c && f ? "[" + s + "]" : s;
    }).join(c ? "." : "") : i;
  }
  function E1(a) {
    return C.isArray(a) && !a.some(Lc);
  }
  const R1 = C.toFlatObject(C, {}, null, function(i) {
    return /^is[A-Z]/.test(i);
  });
  function Ji(a, i, c) {
    if (!C.isObject(a)) throw new TypeError("target must be an object");
    i = i || new FormData(), c = C.toFlatObject(c, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function(U, M) {
      return !C.isUndefined(M[U]);
    });
    const o = c.metaTokens, s = c.visitor || v, f = c.dots, h = c.indexes, y = (c.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(i);
    if (!C.isFunction(s)) throw new TypeError("visitor must be a function");
    function p(T) {
      if (T === null) return "";
      if (C.isDate(T)) return T.toISOString();
      if (!y && C.isBlob(T)) throw new ie("Blob is not supported. Use a Buffer instead.");
      return C.isArrayBuffer(T) || C.isTypedArray(T) ? y && typeof Blob == "function" ? new Blob([
        T
      ]) : Buffer.from(T) : T;
    }
    function v(T, U, M) {
      let H = T;
      if (T && !M && typeof T == "object") {
        if (C.endsWith(U, "{}")) U = o ? U : U.slice(0, -2), T = JSON.stringify(T);
        else if (C.isArray(T) && E1(T) || (C.isFileList(T) || C.endsWith(U, "[]")) && (H = C.toArray(T))) return U = Op(U), H.forEach(function(Z, ue) {
          !(C.isUndefined(Z) || Z === null) && i.append(h === true ? Sm([
            U
          ], ue, f) : h === null ? U : U + "[]", p(Z));
        }), false;
      }
      return Lc(T) ? true : (i.append(Sm(M, U, f), p(T)), false);
    }
    const E = [], w = Object.assign(R1, {
      defaultVisitor: v,
      convertValue: p,
      isVisitable: Lc
    });
    function q(T, U) {
      if (!C.isUndefined(T)) {
        if (E.indexOf(T) !== -1) throw Error("Circular reference detected in " + U.join("."));
        E.push(T), C.forEach(T, function(H, V) {
          (!(C.isUndefined(H) || H === null) && s.call(i, H, C.isString(V) ? V.trim() : V, U, w)) === true && q(H, U ? U.concat(V) : [
            V
          ]);
        }), E.pop();
      }
    }
    if (!C.isObject(a)) throw new TypeError("data must be an object");
    return q(a), i;
  }
  function xm(a) {
    const i = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function(o) {
      return i[o];
    });
  }
  function Wc(a, i) {
    this._pairs = [], a && Ji(a, this, i);
  }
  const wp = Wc.prototype;
  wp.append = function(i, c) {
    this._pairs.push([
      i,
      c
    ]);
  };
  wp.toString = function(i) {
    const c = i ? function(o) {
      return i.call(this, o, xm);
    } : xm;
    return this._pairs.map(function(s) {
      return c(s[0]) + "=" + c(s[1]);
    }, "").join("&");
  };
  function T1(a) {
    return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function _p(a, i, c) {
    if (!i) return a;
    const o = c && c.encode || T1;
    C.isFunction(c) && (c = {
      serialize: c
    });
    const s = c && c.serialize;
    let f;
    if (s ? f = s(i, c) : f = C.isURLSearchParams(i) ? i.toString() : new Wc(i, c).toString(o), f) {
      const h = a.indexOf("#");
      h !== -1 && (a = a.slice(0, h)), a += (a.indexOf("?") === -1 ? "?" : "&") + f;
    }
    return a;
  }
  class Em {
    constructor() {
      this.handlers = [];
    }
    use(i, c, o) {
      return this.handlers.push({
        fulfilled: i,
        rejected: c,
        synchronous: o ? o.synchronous : false,
        runWhen: o ? o.runWhen : null
      }), this.handlers.length - 1;
    }
    eject(i) {
      this.handlers[i] && (this.handlers[i] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(i) {
      C.forEach(this.handlers, function(o) {
        o !== null && i(o);
      });
    }
  }
  const zp = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  }, A1 = typeof URLSearchParams < "u" ? URLSearchParams : Wc, O1 = typeof FormData < "u" ? FormData : null, w1 = typeof Blob < "u" ? Blob : null, _1 = {
    isBrowser: true,
    classes: {
      URLSearchParams: A1,
      FormData: O1,
      Blob: w1
    },
    protocols: [
      "http",
      "https",
      "file",
      "blob",
      "url",
      "data"
    ]
  }, Pc = typeof window < "u" && typeof document < "u", qc = typeof navigator == "object" && navigator || void 0, z1 = Pc && (!qc || [
    "ReactNative",
    "NativeScript",
    "NS"
  ].indexOf(qc.product) < 0), N1 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", M1 = Pc && window.location.href || "http://localhost", C1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Pc,
    hasStandardBrowserEnv: z1,
    hasStandardBrowserWebWorkerEnv: N1,
    navigator: qc,
    origin: M1
  }, Symbol.toStringTag, {
    value: "Module"
  })), lt = {
    ...C1,
    ..._1
  };
  function D1(a, i) {
    return Ji(a, new lt.classes.URLSearchParams(), Object.assign({
      visitor: function(c, o, s, f) {
        return lt.isNode && C.isBuffer(c) ? (this.append(o, c.toString("base64")), false) : f.defaultVisitor.apply(this, arguments);
      }
    }, i));
  }
  function U1(a) {
    return C.matchAll(/\w+|\[(\w*)]/g, a).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
  }
  function j1(a) {
    const i = {}, c = Object.keys(a);
    let o;
    const s = c.length;
    let f;
    for (o = 0; o < s; o++) f = c[o], i[f] = a[f];
    return i;
  }
  function Np(a) {
    function i(c, o, s, f) {
      let h = c[f++];
      if (h === "__proto__") return true;
      const g = Number.isFinite(+h), y = f >= c.length;
      return h = !h && C.isArray(s) ? s.length : h, y ? (C.hasOwnProp(s, h) ? s[h] = [
        s[h],
        o
      ] : s[h] = o, !g) : ((!s[h] || !C.isObject(s[h])) && (s[h] = []), i(c, o, s[h], f) && C.isArray(s[h]) && (s[h] = j1(s[h])), !g);
    }
    if (C.isFormData(a) && C.isFunction(a.entries)) {
      const c = {};
      return C.forEachEntry(a, (o, s) => {
        i(U1(o), s, c, 0);
      }), c;
    }
    return null;
  }
  function B1(a, i, c) {
    if (C.isString(a)) try {
      return (i || JSON.parse)(a), C.trim(a);
    } catch (o) {
      if (o.name !== "SyntaxError") throw o;
    }
    return (c || JSON.stringify)(a);
  }
  const hu = {
    transitional: zp,
    adapter: [
      "xhr",
      "http",
      "fetch"
    ],
    transformRequest: [
      function(i, c) {
        const o = c.getContentType() || "", s = o.indexOf("application/json") > -1, f = C.isObject(i);
        if (f && C.isHTMLForm(i) && (i = new FormData(i)), C.isFormData(i)) return s ? JSON.stringify(Np(i)) : i;
        if (C.isArrayBuffer(i) || C.isBuffer(i) || C.isStream(i) || C.isFile(i) || C.isBlob(i) || C.isReadableStream(i)) return i;
        if (C.isArrayBufferView(i)) return i.buffer;
        if (C.isURLSearchParams(i)) return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), i.toString();
        let g;
        if (f) {
          if (o.indexOf("application/x-www-form-urlencoded") > -1) return D1(i, this.formSerializer).toString();
          if ((g = C.isFileList(i)) || o.indexOf("multipart/form-data") > -1) {
            const y = this.env && this.env.FormData;
            return Ji(g ? {
              "files[]": i
            } : i, y && new y(), this.formSerializer);
          }
        }
        return f || s ? (c.setContentType("application/json", false), B1(i)) : i;
      }
    ],
    transformResponse: [
      function(i) {
        const c = this.transitional || hu.transitional, o = c && c.forcedJSONParsing, s = this.responseType === "json";
        if (C.isResponse(i) || C.isReadableStream(i)) return i;
        if (i && C.isString(i) && (o && !this.responseType || s)) {
          const h = !(c && c.silentJSONParsing) && s;
          try {
            return JSON.parse(i);
          } catch (g) {
            if (h) throw g.name === "SyntaxError" ? ie.from(g, ie.ERR_BAD_RESPONSE, this, null, this.response) : g;
          }
        }
        return i;
      }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: lt.classes.FormData,
      Blob: lt.classes.Blob
    },
    validateStatus: function(i) {
      return i >= 200 && i < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  C.forEach([
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch"
  ], (a) => {
    hu.headers[a] = {};
  });
  const H1 = C.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]), L1 = (a) => {
    const i = {};
    let c, o, s;
    return a && a.split(`
`).forEach(function(h) {
      s = h.indexOf(":"), c = h.substring(0, s).trim().toLowerCase(), o = h.substring(s + 1).trim(), !(!c || i[c] && H1[c]) && (c === "set-cookie" ? i[c] ? i[c].push(o) : i[c] = [
        o
      ] : i[c] = i[c] ? i[c] + ", " + o : o);
    }), i;
  }, Rm = Symbol("internals");
  function iu(a) {
    return a && String(a).trim().toLowerCase();
  }
  function ji(a) {
    return a === false || a == null ? a : C.isArray(a) ? a.map(ji) : String(a);
  }
  function q1(a) {
    const i = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; o = c.exec(a); ) i[o[1]] = o[2];
    return i;
  }
  const G1 = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
  function Rc(a, i, c, o, s) {
    if (C.isFunction(o)) return o.call(this, i, c);
    if (s && (i = c), !!C.isString(i)) {
      if (C.isString(o)) return i.indexOf(o) !== -1;
      if (C.isRegExp(o)) return o.test(i);
    }
  }
  function Y1(a) {
    return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, c, o) => c.toUpperCase() + o);
  }
  function k1(a, i) {
    const c = C.toCamelCase(" " + i);
    [
      "get",
      "set",
      "has"
    ].forEach((o) => {
      Object.defineProperty(a, o + c, {
        value: function(s, f, h) {
          return this[o].call(this, i, s, f, h);
        },
        configurable: true
      });
    });
  }
  class ft {
    constructor(i) {
      i && this.set(i);
    }
    set(i, c, o) {
      const s = this;
      function f(g, y, p) {
        const v = iu(y);
        if (!v) throw new Error("header name must be a non-empty string");
        const E = C.findKey(s, v);
        (!E || s[E] === void 0 || p === true || p === void 0 && s[E] !== false) && (s[E || y] = ji(g));
      }
      const h = (g, y) => C.forEach(g, (p, v) => f(p, v, y));
      if (C.isPlainObject(i) || i instanceof this.constructor) h(i, c);
      else if (C.isString(i) && (i = i.trim()) && !G1(i)) h(L1(i), c);
      else if (C.isObject(i) && C.isIterable(i)) {
        let g = {}, y, p;
        for (const v of i) {
          if (!C.isArray(v)) throw TypeError("Object iterator must return a key-value pair");
          g[p = v[0]] = (y = g[p]) ? C.isArray(y) ? [
            ...y,
            v[1]
          ] : [
            y,
            v[1]
          ] : v[1];
        }
        h(g, c);
      } else i != null && f(c, i, o);
      return this;
    }
    get(i, c) {
      if (i = iu(i), i) {
        const o = C.findKey(this, i);
        if (o) {
          const s = this[o];
          if (!c) return s;
          if (c === true) return q1(s);
          if (C.isFunction(c)) return c.call(this, s, o);
          if (C.isRegExp(c)) return c.exec(s);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(i, c) {
      if (i = iu(i), i) {
        const o = C.findKey(this, i);
        return !!(o && this[o] !== void 0 && (!c || Rc(this, this[o], o, c)));
      }
      return false;
    }
    delete(i, c) {
      const o = this;
      let s = false;
      function f(h) {
        if (h = iu(h), h) {
          const g = C.findKey(o, h);
          g && (!c || Rc(o, o[g], g, c)) && (delete o[g], s = true);
        }
      }
      return C.isArray(i) ? i.forEach(f) : f(i), s;
    }
    clear(i) {
      const c = Object.keys(this);
      let o = c.length, s = false;
      for (; o--; ) {
        const f = c[o];
        (!i || Rc(this, this[f], f, i, true)) && (delete this[f], s = true);
      }
      return s;
    }
    normalize(i) {
      const c = this, o = {};
      return C.forEach(this, (s, f) => {
        const h = C.findKey(o, f);
        if (h) {
          c[h] = ji(s), delete c[f];
          return;
        }
        const g = i ? Y1(f) : String(f).trim();
        g !== f && delete c[f], c[g] = ji(s), o[g] = true;
      }), this;
    }
    concat(...i) {
      return this.constructor.concat(this, ...i);
    }
    toJSON(i) {
      const c = /* @__PURE__ */ Object.create(null);
      return C.forEach(this, (o, s) => {
        o != null && o !== false && (c[s] = i && C.isArray(o) ? o.join(", ") : o);
      }), c;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([i, c]) => i + ": " + c).join(`
`);
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(i) {
      return i instanceof this ? i : new this(i);
    }
    static concat(i, ...c) {
      const o = new this(i);
      return c.forEach((s) => o.set(s)), o;
    }
    static accessor(i) {
      const o = (this[Rm] = this[Rm] = {
        accessors: {}
      }).accessors, s = this.prototype;
      function f(h) {
        const g = iu(h);
        o[g] || (k1(s, h), o[g] = true);
      }
      return C.isArray(i) ? i.forEach(f) : f(i), this;
    }
  }
  ft.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
  ]);
  C.reduceDescriptors(ft.prototype, ({ value: a }, i) => {
    let c = i[0].toUpperCase() + i.slice(1);
    return {
      get: () => a,
      set(o) {
        this[c] = o;
      }
    };
  });
  C.freezeMethods(ft);
  function Tc(a, i) {
    const c = this || hu, o = i || c, s = ft.from(o.headers);
    let f = o.data;
    return C.forEach(a, function(g) {
      f = g.call(c, f, s.normalize(), i ? i.status : void 0);
    }), s.normalize(), f;
  }
  function Mp(a) {
    return !!(a && a.__CANCEL__);
  }
  function na(a, i, c) {
    ie.call(this, a ?? "canceled", ie.ERR_CANCELED, i, c), this.name = "CanceledError";
  }
  C.inherits(na, ie, {
    __CANCEL__: true
  });
  function Cp(a, i, c) {
    const o = c.config.validateStatus;
    !c.status || !o || o(c.status) ? a(c) : i(new ie("Request failed with status code " + c.status, [
      ie.ERR_BAD_REQUEST,
      ie.ERR_BAD_RESPONSE
    ][Math.floor(c.status / 100) - 4], c.config, c.request, c));
  }
  function V1(a) {
    const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
    return i && i[1] || "";
  }
  function X1(a, i) {
    a = a || 10;
    const c = new Array(a), o = new Array(a);
    let s = 0, f = 0, h;
    return i = i !== void 0 ? i : 1e3, function(y) {
      const p = Date.now(), v = o[f];
      h || (h = p), c[s] = y, o[s] = p;
      let E = f, w = 0;
      for (; E !== s; ) w += c[E++], E = E % a;
      if (s = (s + 1) % a, s === f && (f = (f + 1) % a), p - h < i) return;
      const q = v && p - v;
      return q ? Math.round(w * 1e3 / q) : void 0;
    };
  }
  function Q1(a, i) {
    let c = 0, o = 1e3 / i, s, f;
    const h = (p, v = Date.now()) => {
      c = v, s = null, f && (clearTimeout(f), f = null), a.apply(null, p);
    };
    return [
      (...p) => {
        const v = Date.now(), E = v - c;
        E >= o ? h(p, v) : (s = p, f || (f = setTimeout(() => {
          f = null, h(s);
        }, o - E)));
      },
      () => s && h(s)
    ];
  }
  const qi = (a, i, c = 3) => {
    let o = 0;
    const s = X1(50, 250);
    return Q1((f) => {
      const h = f.loaded, g = f.lengthComputable ? f.total : void 0, y = h - o, p = s(y), v = h <= g;
      o = h;
      const E = {
        loaded: h,
        total: g,
        progress: g ? h / g : void 0,
        bytes: y,
        rate: p || void 0,
        estimated: p && g && v ? (g - h) / p : void 0,
        event: f,
        lengthComputable: g != null,
        [i ? "download" : "upload"]: true
      };
      a(E);
    }, c);
  }, Tm = (a, i) => {
    const c = a != null;
    return [
      (o) => i[0]({
        lengthComputable: c,
        total: a,
        loaded: o
      }),
      i[1]
    ];
  }, Am = (a) => (...i) => C.asap(() => a(...i)), Z1 = lt.hasStandardBrowserEnv ? /* @__PURE__ */ ((a, i) => (c) => (c = new URL(c, lt.origin), a.protocol === c.protocol && a.host === c.host && (i || a.port === c.port)))(new URL(lt.origin), lt.navigator && /(msie|trident)/i.test(lt.navigator.userAgent)) : () => true, K1 = lt.hasStandardBrowserEnv ? {
    write(a, i, c, o, s, f) {
      const h = [
        a + "=" + encodeURIComponent(i)
      ];
      C.isNumber(c) && h.push("expires=" + new Date(c).toGMTString()), C.isString(o) && h.push("path=" + o), C.isString(s) && h.push("domain=" + s), f === true && h.push("secure"), document.cookie = h.join("; ");
    },
    read(a) {
      const i = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
      return i ? decodeURIComponent(i[3]) : null;
    },
    remove(a) {
      this.write(a, "", Date.now() - 864e5);
    }
  } : {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  };
  function J1(a) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
  }
  function $1(a, i) {
    return i ? a.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : a;
  }
  function Dp(a, i, c) {
    let o = !J1(i);
    return a && (o || c == false) ? $1(a, i) : i;
  }
  const Om = (a) => a instanceof ft ? {
    ...a
  } : a;
  function sn(a, i) {
    i = i || {};
    const c = {};
    function o(p, v, E, w) {
      return C.isPlainObject(p) && C.isPlainObject(v) ? C.merge.call({
        caseless: w
      }, p, v) : C.isPlainObject(v) ? C.merge({}, v) : C.isArray(v) ? v.slice() : v;
    }
    function s(p, v, E, w) {
      if (C.isUndefined(v)) {
        if (!C.isUndefined(p)) return o(void 0, p, E, w);
      } else return o(p, v, E, w);
    }
    function f(p, v) {
      if (!C.isUndefined(v)) return o(void 0, v);
    }
    function h(p, v) {
      if (C.isUndefined(v)) {
        if (!C.isUndefined(p)) return o(void 0, p);
      } else return o(void 0, v);
    }
    function g(p, v, E) {
      if (E in i) return o(p, v);
      if (E in a) return o(void 0, p);
    }
    const y = {
      url: f,
      method: f,
      data: f,
      baseURL: h,
      transformRequest: h,
      transformResponse: h,
      paramsSerializer: h,
      timeout: h,
      timeoutMessage: h,
      withCredentials: h,
      withXSRFToken: h,
      adapter: h,
      responseType: h,
      xsrfCookieName: h,
      xsrfHeaderName: h,
      onUploadProgress: h,
      onDownloadProgress: h,
      decompress: h,
      maxContentLength: h,
      maxBodyLength: h,
      beforeRedirect: h,
      transport: h,
      httpAgent: h,
      httpsAgent: h,
      cancelToken: h,
      socketPath: h,
      responseEncoding: h,
      validateStatus: g,
      headers: (p, v, E) => s(Om(p), Om(v), E, true)
    };
    return C.forEach(Object.keys(Object.assign({}, a, i)), function(v) {
      const E = y[v] || s, w = E(a[v], i[v], v);
      C.isUndefined(w) && E !== g || (c[v] = w);
    }), c;
  }
  const Up = (a) => {
    const i = sn({}, a);
    let { data: c, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: f, headers: h, auth: g } = i;
    i.headers = h = ft.from(h), i.url = _p(Dp(i.baseURL, i.url, i.allowAbsoluteUrls), a.params, a.paramsSerializer), g && h.set("Authorization", "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : "")));
    let y;
    if (C.isFormData(c)) {
      if (lt.hasStandardBrowserEnv || lt.hasStandardBrowserWebWorkerEnv) h.setContentType(void 0);
      else if ((y = h.getContentType()) !== false) {
        const [p, ...v] = y ? y.split(";").map((E) => E.trim()).filter(Boolean) : [];
        h.setContentType([
          p || "multipart/form-data",
          ...v
        ].join("; "));
      }
    }
    if (lt.hasStandardBrowserEnv && (o && C.isFunction(o) && (o = o(i)), o || o !== false && Z1(i.url))) {
      const p = s && f && K1.read(f);
      p && h.set(s, p);
    }
    return i;
  }, F1 = typeof XMLHttpRequest < "u", W1 = F1 && function(a) {
    return new Promise(function(c, o) {
      const s = Up(a);
      let f = s.data;
      const h = ft.from(s.headers).normalize();
      let { responseType: g, onUploadProgress: y, onDownloadProgress: p } = s, v, E, w, q, T;
      function U() {
        q && q(), T && T(), s.cancelToken && s.cancelToken.unsubscribe(v), s.signal && s.signal.removeEventListener("abort", v);
      }
      let M = new XMLHttpRequest();
      M.open(s.method.toUpperCase(), s.url, true), M.timeout = s.timeout;
      function H() {
        if (!M) return;
        const Z = ft.from("getAllResponseHeaders" in M && M.getAllResponseHeaders()), J = {
          data: !g || g === "text" || g === "json" ? M.responseText : M.response,
          status: M.status,
          statusText: M.statusText,
          headers: Z,
          config: a,
          request: M
        };
        Cp(function(ye) {
          c(ye), U();
        }, function(ye) {
          o(ye), U();
        }, J), M = null;
      }
      "onloadend" in M ? M.onloadend = H : M.onreadystatechange = function() {
        !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout(H);
      }, M.onabort = function() {
        M && (o(new ie("Request aborted", ie.ECONNABORTED, a, M)), M = null);
      }, M.onerror = function() {
        o(new ie("Network Error", ie.ERR_NETWORK, a, M)), M = null;
      }, M.ontimeout = function() {
        let ue = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
        const J = s.transitional || zp;
        s.timeoutErrorMessage && (ue = s.timeoutErrorMessage), o(new ie(ue, J.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED, a, M)), M = null;
      }, f === void 0 && h.setContentType(null), "setRequestHeader" in M && C.forEach(h.toJSON(), function(ue, J) {
        M.setRequestHeader(J, ue);
      }), C.isUndefined(s.withCredentials) || (M.withCredentials = !!s.withCredentials), g && g !== "json" && (M.responseType = s.responseType), p && ([w, T] = qi(p, true), M.addEventListener("progress", w)), y && M.upload && ([E, q] = qi(y), M.upload.addEventListener("progress", E), M.upload.addEventListener("loadend", q)), (s.cancelToken || s.signal) && (v = (Z) => {
        M && (o(!Z || Z.type ? new na(null, a, M) : Z), M.abort(), M = null);
      }, s.cancelToken && s.cancelToken.subscribe(v), s.signal && (s.signal.aborted ? v() : s.signal.addEventListener("abort", v)));
      const V = V1(s.url);
      if (V && lt.protocols.indexOf(V) === -1) {
        o(new ie("Unsupported protocol " + V + ":", ie.ERR_BAD_REQUEST, a));
        return;
      }
      M.send(f || null);
    });
  }, P1 = (a, i) => {
    const { length: c } = a = a ? a.filter(Boolean) : [];
    if (i || c) {
      let o = new AbortController(), s;
      const f = function(p) {
        if (!s) {
          s = true, g();
          const v = p instanceof Error ? p : this.reason;
          o.abort(v instanceof ie ? v : new na(v instanceof Error ? v.message : v));
        }
      };
      let h = i && setTimeout(() => {
        h = null, f(new ie(`timeout ${i} of ms exceeded`, ie.ETIMEDOUT));
      }, i);
      const g = () => {
        a && (h && clearTimeout(h), h = null, a.forEach((p) => {
          p.unsubscribe ? p.unsubscribe(f) : p.removeEventListener("abort", f);
        }), a = null);
      };
      a.forEach((p) => p.addEventListener("abort", f));
      const { signal: y } = o;
      return y.unsubscribe = () => C.asap(g), y;
    }
  }, I1 = function* (a, i) {
    let c = a.byteLength;
    if (c < i) {
      yield a;
      return;
    }
    let o = 0, s;
    for (; o < c; ) s = o + i, yield a.slice(o, s), o = s;
  }, eS = async function* (a, i) {
    for await (const c of tS(a)) yield* I1(c, i);
  }, tS = async function* (a) {
    if (a[Symbol.asyncIterator]) {
      yield* a;
      return;
    }
    const i = a.getReader();
    try {
      for (; ; ) {
        const { done: c, value: o } = await i.read();
        if (c) break;
        yield o;
      }
    } finally {
      await i.cancel();
    }
  }, wm = (a, i, c, o) => {
    const s = eS(a, i);
    let f = 0, h, g = (y) => {
      h || (h = true, o && o(y));
    };
    return new ReadableStream({
      async pull(y) {
        try {
          const { done: p, value: v } = await s.next();
          if (p) {
            g(), y.close();
            return;
          }
          let E = v.byteLength;
          if (c) {
            let w = f += E;
            c(w);
          }
          y.enqueue(new Uint8Array(v));
        } catch (p) {
          throw g(p), p;
        }
      },
      cancel(y) {
        return g(y), s.return();
      }
    }, {
      highWaterMark: 2
    });
  }, $i = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", jp = $i && typeof ReadableStream == "function", lS = $i && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((a) => (i) => a.encode(i))(new TextEncoder()) : async (a) => new Uint8Array(await new Response(a).arrayBuffer())), Bp = (a, ...i) => {
    try {
      return !!a(...i);
    } catch {
      return false;
    }
  }, nS = jp && Bp(() => {
    let a = false;
    const i = new Request(lt.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return a = true, "half";
      }
    }).headers.has("Content-Type");
    return a && !i;
  }), _m = 64 * 1024, Gc = jp && Bp(() => C.isReadableStream(new Response("").body)), Gi = {
    stream: Gc && ((a) => a.body)
  };
  $i && ((a) => {
    [
      "text",
      "arrayBuffer",
      "blob",
      "formData",
      "stream"
    ].forEach((i) => {
      !Gi[i] && (Gi[i] = C.isFunction(a[i]) ? (c) => c[i]() : (c, o) => {
        throw new ie(`Response type '${i}' is not supported`, ie.ERR_NOT_SUPPORT, o);
      });
    });
  })(new Response());
  const aS = async (a) => {
    if (a == null) return 0;
    if (C.isBlob(a)) return a.size;
    if (C.isSpecCompliantForm(a)) return (await new Request(lt.origin, {
      method: "POST",
      body: a
    }).arrayBuffer()).byteLength;
    if (C.isArrayBufferView(a) || C.isArrayBuffer(a)) return a.byteLength;
    if (C.isURLSearchParams(a) && (a = a + ""), C.isString(a)) return (await lS(a)).byteLength;
  }, uS = async (a, i) => {
    const c = C.toFiniteNumber(a.getContentLength());
    return c ?? aS(i);
  }, iS = $i && (async (a) => {
    let { url: i, method: c, data: o, signal: s, cancelToken: f, timeout: h, onDownloadProgress: g, onUploadProgress: y, responseType: p, headers: v, withCredentials: E = "same-origin", fetchOptions: w } = Up(a);
    p = p ? (p + "").toLowerCase() : "text";
    let q = P1([
      s,
      f && f.toAbortSignal()
    ], h), T;
    const U = q && q.unsubscribe && (() => {
      q.unsubscribe();
    });
    let M;
    try {
      if (y && nS && c !== "get" && c !== "head" && (M = await uS(v, o)) !== 0) {
        let J = new Request(i, {
          method: "POST",
          body: o,
          duplex: "half"
        }), fe;
        if (C.isFormData(o) && (fe = J.headers.get("content-type")) && v.setContentType(fe), J.body) {
          const [ye, $] = Tm(M, qi(Am(y)));
          o = wm(J.body, _m, ye, $);
        }
      }
      C.isString(E) || (E = E ? "include" : "omit");
      const H = "credentials" in Request.prototype;
      T = new Request(i, {
        ...w,
        signal: q,
        method: c.toUpperCase(),
        headers: v.normalize().toJSON(),
        body: o,
        duplex: "half",
        credentials: H ? E : void 0
      });
      let V = await fetch(T);
      const Z = Gc && (p === "stream" || p === "response");
      if (Gc && (g || Z && U)) {
        const J = {};
        [
          "status",
          "statusText",
          "headers"
        ].forEach((de) => {
          J[de] = V[de];
        });
        const fe = C.toFiniteNumber(V.headers.get("content-length")), [ye, $] = g && Tm(fe, qi(Am(g), true)) || [];
        V = new Response(wm(V.body, _m, ye, () => {
          $ && $(), U && U();
        }), J);
      }
      p = p || "text";
      let ue = await Gi[C.findKey(Gi, p) || "text"](V, a);
      return !Z && U && U(), await new Promise((J, fe) => {
        Cp(J, fe, {
          data: ue,
          headers: ft.from(V.headers),
          status: V.status,
          statusText: V.statusText,
          config: a,
          request: T
        });
      });
    } catch (H) {
      throw U && U(), H && H.name === "TypeError" && /Load failed|fetch/i.test(H.message) ? Object.assign(new ie("Network Error", ie.ERR_NETWORK, a, T), {
        cause: H.cause || H
      }) : ie.from(H, H && H.code, a, T);
    }
  }), Yc = {
    http: x1,
    xhr: W1,
    fetch: iS
  };
  C.forEach(Yc, (a, i) => {
    if (a) {
      try {
        Object.defineProperty(a, "name", {
          value: i
        });
      } catch {
      }
      Object.defineProperty(a, "adapterName", {
        value: i
      });
    }
  });
  const zm = (a) => `- ${a}`, rS = (a) => C.isFunction(a) || a === null || a === false, Hp = {
    getAdapter: (a) => {
      a = C.isArray(a) ? a : [
        a
      ];
      const { length: i } = a;
      let c, o;
      const s = {};
      for (let f = 0; f < i; f++) {
        c = a[f];
        let h;
        if (o = c, !rS(c) && (o = Yc[(h = String(c)).toLowerCase()], o === void 0)) throw new ie(`Unknown adapter '${h}'`);
        if (o) break;
        s[h || "#" + f] = o;
      }
      if (!o) {
        const f = Object.entries(s).map(([g, y]) => `adapter ${g} ` + (y === false ? "is not supported by the environment" : "is not available in the build"));
        let h = i ? f.length > 1 ? `since :
` + f.map(zm).join(`
`) : " " + zm(f[0]) : "as no adapter specified";
        throw new ie("There is no suitable adapter to dispatch the request " + h, "ERR_NOT_SUPPORT");
      }
      return o;
    },
    adapters: Yc
  };
  function Ac(a) {
    if (a.cancelToken && a.cancelToken.throwIfRequested(), a.signal && a.signal.aborted) throw new na(null, a);
  }
  function Nm(a) {
    return Ac(a), a.headers = ft.from(a.headers), a.data = Tc.call(a, a.transformRequest), [
      "post",
      "put",
      "patch"
    ].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", false), Hp.getAdapter(a.adapter || hu.adapter)(a).then(function(o) {
      return Ac(a), o.data = Tc.call(a, a.transformResponse, o), o.headers = ft.from(o.headers), o;
    }, function(o) {
      return Mp(o) || (Ac(a), o && o.response && (o.response.data = Tc.call(a, a.transformResponse, o.response), o.response.headers = ft.from(o.response.headers))), Promise.reject(o);
    });
  }
  const Lp = "1.9.0", Fi = {};
  [
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
  ].forEach((a, i) => {
    Fi[a] = function(o) {
      return typeof o === a || "a" + (i < 1 ? "n " : " ") + a;
    };
  });
  const Mm = {};
  Fi.transitional = function(i, c, o) {
    function s(f, h) {
      return "[Axios v" + Lp + "] Transitional option '" + f + "'" + h + (o ? ". " + o : "");
    }
    return (f, h, g) => {
      if (i === false) throw new ie(s(h, " has been removed" + (c ? " in " + c : "")), ie.ERR_DEPRECATED);
      return c && !Mm[h] && (Mm[h] = true, console.warn(s(h, " has been deprecated since v" + c + " and will be removed in the near future"))), i ? i(f, h, g) : true;
    };
  };
  Fi.spelling = function(i) {
    return (c, o) => (console.warn(`${o} is likely a misspelling of ${i}`), true);
  };
  function oS(a, i, c) {
    if (typeof a != "object") throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(a);
    let s = o.length;
    for (; s-- > 0; ) {
      const f = o[s], h = i[f];
      if (h) {
        const g = a[f], y = g === void 0 || h(g, f, a);
        if (y !== true) throw new ie("option " + f + " must be " + y, ie.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (c !== true) throw new ie("Unknown option " + f, ie.ERR_BAD_OPTION);
    }
  }
  const Bi = {
    assertOptions: oS,
    validators: Fi
  }, Qt = Bi.validators;
  class cn {
    constructor(i) {
      this.defaults = i || {}, this.interceptors = {
        request: new Em(),
        response: new Em()
      };
    }
    async request(i, c) {
      try {
        return await this._request(i, c);
      } catch (o) {
        if (o instanceof Error) {
          let s = {};
          Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
          const f = s.stack ? s.stack.replace(/^.+\n/, "") : "";
          try {
            o.stack ? f && !String(o.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + f) : o.stack = f;
          } catch {
          }
        }
        throw o;
      }
    }
    _request(i, c) {
      typeof i == "string" ? (c = c || {}, c.url = i) : c = i || {}, c = sn(this.defaults, c);
      const { transitional: o, paramsSerializer: s, headers: f } = c;
      o !== void 0 && Bi.assertOptions(o, {
        silentJSONParsing: Qt.transitional(Qt.boolean),
        forcedJSONParsing: Qt.transitional(Qt.boolean),
        clarifyTimeoutError: Qt.transitional(Qt.boolean)
      }, false), s != null && (C.isFunction(s) ? c.paramsSerializer = {
        serialize: s
      } : Bi.assertOptions(s, {
        encode: Qt.function,
        serialize: Qt.function
      }, true)), c.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : c.allowAbsoluteUrls = true), Bi.assertOptions(c, {
        baseUrl: Qt.spelling("baseURL"),
        withXsrfToken: Qt.spelling("withXSRFToken")
      }, true), c.method = (c.method || this.defaults.method || "get").toLowerCase();
      let h = f && C.merge(f.common, f[c.method]);
      f && C.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
      ], (T) => {
        delete f[T];
      }), c.headers = ft.concat(h, f);
      const g = [];
      let y = true;
      this.interceptors.request.forEach(function(U) {
        typeof U.runWhen == "function" && U.runWhen(c) === false || (y = y && U.synchronous, g.unshift(U.fulfilled, U.rejected));
      });
      const p = [];
      this.interceptors.response.forEach(function(U) {
        p.push(U.fulfilled, U.rejected);
      });
      let v, E = 0, w;
      if (!y) {
        const T = [
          Nm.bind(this),
          void 0
        ];
        for (T.unshift.apply(T, g), T.push.apply(T, p), w = T.length, v = Promise.resolve(c); E < w; ) v = v.then(T[E++], T[E++]);
        return v;
      }
      w = g.length;
      let q = c;
      for (E = 0; E < w; ) {
        const T = g[E++], U = g[E++];
        try {
          q = T(q);
        } catch (M) {
          U.call(this, M);
          break;
        }
      }
      try {
        v = Nm.call(this, q);
      } catch (T) {
        return Promise.reject(T);
      }
      for (E = 0, w = p.length; E < w; ) v = v.then(p[E++], p[E++]);
      return v;
    }
    getUri(i) {
      i = sn(this.defaults, i);
      const c = Dp(i.baseURL, i.url, i.allowAbsoluteUrls);
      return _p(c, i.params, i.paramsSerializer);
    }
  }
  C.forEach([
    "delete",
    "get",
    "head",
    "options"
  ], function(i) {
    cn.prototype[i] = function(c, o) {
      return this.request(sn(o || {}, {
        method: i,
        url: c,
        data: (o || {}).data
      }));
    };
  });
  C.forEach([
    "post",
    "put",
    "patch"
  ], function(i) {
    function c(o) {
      return function(f, h, g) {
        return this.request(sn(g || {}, {
          method: i,
          headers: o ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: f,
          data: h
        }));
      };
    }
    cn.prototype[i] = c(), cn.prototype[i + "Form"] = c(true);
  });
  class Ic {
    constructor(i) {
      if (typeof i != "function") throw new TypeError("executor must be a function.");
      let c;
      this.promise = new Promise(function(f) {
        c = f;
      });
      const o = this;
      this.promise.then((s) => {
        if (!o._listeners) return;
        let f = o._listeners.length;
        for (; f-- > 0; ) o._listeners[f](s);
        o._listeners = null;
      }), this.promise.then = (s) => {
        let f;
        const h = new Promise((g) => {
          o.subscribe(g), f = g;
        }).then(s);
        return h.cancel = function() {
          o.unsubscribe(f);
        }, h;
      }, i(function(f, h, g) {
        o.reason || (o.reason = new na(f, h, g), c(o.reason));
      });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(i) {
      if (this.reason) {
        i(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(i) : this._listeners = [
        i
      ];
    }
    unsubscribe(i) {
      if (!this._listeners) return;
      const c = this._listeners.indexOf(i);
      c !== -1 && this._listeners.splice(c, 1);
    }
    toAbortSignal() {
      const i = new AbortController(), c = (o) => {
        i.abort(o);
      };
      return this.subscribe(c), i.signal.unsubscribe = () => this.unsubscribe(c), i.signal;
    }
    static source() {
      let i;
      return {
        token: new Ic(function(s) {
          i = s;
        }),
        cancel: i
      };
    }
  }
  function cS(a) {
    return function(c) {
      return a.apply(null, c);
    };
  }
  function sS(a) {
    return C.isObject(a) && a.isAxiosError === true;
  }
  const kc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(kc).forEach(([a, i]) => {
    kc[i] = a;
  });
  function qp(a) {
    const i = new cn(a), c = yp(cn.prototype.request, i);
    return C.extend(c, cn.prototype, i, {
      allOwnKeys: true
    }), C.extend(c, i, null, {
      allOwnKeys: true
    }), c.create = function(s) {
      return qp(sn(a, s));
    }, c;
  }
  const Ye = qp(hu);
  Ye.Axios = cn;
  Ye.CanceledError = na;
  Ye.CancelToken = Ic;
  Ye.isCancel = Mp;
  Ye.VERSION = Lp;
  Ye.toFormData = Ji;
  Ye.AxiosError = ie;
  Ye.Cancel = Ye.CanceledError;
  Ye.all = function(i) {
    return Promise.all(i);
  };
  Ye.spread = cS;
  Ye.isAxiosError = sS;
  Ye.mergeConfig = sn;
  Ye.AxiosHeaders = ft;
  Ye.formToJSON = (a) => Np(C.isHTMLForm(a) ? new FormData(a) : a);
  Ye.getAdapter = Hp.getAdapter;
  Ye.HttpStatusCode = kc;
  Ye.default = Ye;
  var Oc = {
    exports: {}
  }, wc = {};
  var Cm;
  function fS() {
    if (Cm) return wc;
    Cm = 1;
    var a = Yi();
    function i(E, w) {
      return E === w && (E !== 0 || 1 / E === 1 / w) || E !== E && w !== w;
    }
    var c = typeof Object.is == "function" ? Object.is : i, o = a.useState, s = a.useEffect, f = a.useLayoutEffect, h = a.useDebugValue;
    function g(E, w) {
      var q = w(), T = o({
        inst: {
          value: q,
          getSnapshot: w
        }
      }), U = T[0].inst, M = T[1];
      return f(function() {
        U.value = q, U.getSnapshot = w, y(U) && M({
          inst: U
        });
      }, [
        E,
        q,
        w
      ]), s(function() {
        return y(U) && M({
          inst: U
        }), E(function() {
          y(U) && M({
            inst: U
          });
        });
      }, [
        E
      ]), h(q), q;
    }
    function y(E) {
      var w = E.getSnapshot;
      E = E.value;
      try {
        var q = w();
        return !c(E, q);
      } catch {
        return true;
      }
    }
    function p(E, w) {
      return w();
    }
    var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : g;
    return wc.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : v, wc;
  }
  var Dm;
  function dS() {
    return Dm || (Dm = 1, Oc.exports = fS()), Oc.exports;
  }
  var hS = dS();
  const mS = (a, i, c) => Ye.get(`/api/v1/test/${a}`, {
    ...c,
    params: {
      ...i,
      ...c == null ? void 0 : c.params
    }
  }), pS = () => {
    const [a, i] = z.useState(""), [c, o] = z.useState(0), s = async () => {
      const f = await mS(a, {
        testNumber: c
      });
      console.log(f);
    };
    return G.jsx("div", {
      className: "flex flex-col items-center justify-center h-screen",
      children: G.jsxs(Dc, {
        children: [
          G.jsx(Uc, {
            children: G.jsx(jc, {
              children: "Home"
            })
          }),
          G.jsxs(Bc, {
            children: [
              G.jsx(pm, {
                type: "text",
                placeholder: "Enter your name",
                value: a,
                onChange: (f) => i(f.target.value)
              }),
              G.jsx(pm, {
                type: "number",
                placeholder: "Enter your number",
                value: c,
                onChange: (f) => o(Number(f.target.value))
              }),
              G.jsx(rn, {
                onClick: s,
                children: "\u9001\u4FE1"
              })
            ]
          })
        ]
      })
    });
  };
  function yS(a, i = []) {
    let c = [];
    function o(f, h) {
      const g = z.createContext(h), y = c.length;
      c = [
        ...c,
        h
      ];
      const p = (E) => {
        var _a;
        const { scope: w, children: q, ...T } = E, U = ((_a = w == null ? void 0 : w[a]) == null ? void 0 : _a[y]) || g, M = z.useMemo(() => T, Object.values(T));
        return G.jsx(U.Provider, {
          value: M,
          children: q
        });
      };
      p.displayName = f + "Provider";
      function v(E, w) {
        var _a;
        const q = ((_a = w == null ? void 0 : w[a]) == null ? void 0 : _a[y]) || g, T = z.useContext(q);
        if (T) return T;
        if (h !== void 0) return h;
        throw new Error(`\`${E}\` must be used within \`${f}\``);
      }
      return [
        p,
        v
      ];
    }
    const s = () => {
      const f = c.map((h) => z.createContext(h));
      return function(g) {
        const y = (g == null ? void 0 : g[a]) || f;
        return z.useMemo(() => ({
          [`__scope${a}`]: {
            ...g,
            [a]: y
          }
        }), [
          g,
          y
        ]);
      };
    };
    return s.scopeName = a, [
      o,
      gS(s, ...i)
    ];
  }
  function gS(...a) {
    const i = a[0];
    if (a.length === 1) return i;
    const c = () => {
      const o = a.map((s) => ({
        useScope: s(),
        scopeName: s.scopeName
      }));
      return function(f) {
        const h = o.reduce((g, { useScope: y, scopeName: p }) => {
          const E = y(f)[`__scope${p}`];
          return {
            ...g,
            ...E
          };
        }, {});
        return z.useMemo(() => ({
          [`__scope${i.scopeName}`]: h
        }), [
          h
        ]);
      };
    };
    return c.scopeName = i.scopeName, c;
  }
  function vS(a) {
    const i = z.useRef(a);
    return z.useEffect(() => {
      i.current = a;
    }), z.useMemo(() => (...c) => {
      var _a;
      return (_a = i.current) == null ? void 0 : _a.call(i, ...c);
    }, []);
  }
  var Vc = (globalThis == null ? void 0 : globalThis.document) ? z.useLayoutEffect : () => {
  }, bS = [
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
    "select",
    "span",
    "svg",
    "ul"
  ], Wi = bS.reduce((a, i) => {
    const c = hp(`Primitive.${i}`), o = z.forwardRef((s, f) => {
      const { asChild: h, ...g } = s, y = h ? c : i;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), G.jsx(y, {
        ...g,
        ref: f
      });
    });
    return o.displayName = `Primitive.${i}`, {
      ...a,
      [i]: o
    };
  }, {});
  function SS() {
    return hS.useSyncExternalStore(xS, () => true, () => false);
  }
  function xS() {
    return () => {
    };
  }
  var es = "Avatar", [ES, PS] = yS(es), [RS, Gp] = ES(es), Yp = z.forwardRef((a, i) => {
    const { __scopeAvatar: c, ...o } = a, [s, f] = z.useState("idle");
    return G.jsx(RS, {
      scope: c,
      imageLoadingStatus: s,
      onImageLoadingStatusChange: f,
      children: G.jsx(Wi.span, {
        ...o,
        ref: i
      })
    });
  });
  Yp.displayName = es;
  var kp = "AvatarImage", Vp = z.forwardRef((a, i) => {
    const { __scopeAvatar: c, src: o, onLoadingStatusChange: s = () => {
    }, ...f } = a, h = Gp(kp, c), g = TS(o, f), y = vS((p) => {
      s(p), h.onImageLoadingStatusChange(p);
    });
    return Vc(() => {
      g !== "idle" && y(g);
    }, [
      g,
      y
    ]), g === "loaded" ? G.jsx(Wi.img, {
      ...f,
      ref: i,
      src: o
    }) : null;
  });
  Vp.displayName = kp;
  var Xp = "AvatarFallback", Qp = z.forwardRef((a, i) => {
    const { __scopeAvatar: c, delayMs: o, ...s } = a, f = Gp(Xp, c), [h, g] = z.useState(o === void 0);
    return z.useEffect(() => {
      if (o !== void 0) {
        const y = window.setTimeout(() => g(true), o);
        return () => window.clearTimeout(y);
      }
    }, [
      o
    ]), h && f.imageLoadingStatus !== "loaded" ? G.jsx(Wi.span, {
      ...s,
      ref: i
    }) : null;
  });
  Qp.displayName = Xp;
  function Um(a, i) {
    return a ? i ? (a.src !== i && (a.src = i), a.complete && a.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
  }
  function TS(a, { referrerPolicy: i, crossOrigin: c }) {
    const o = SS(), s = z.useRef(null), f = o ? (s.current || (s.current = new window.Image()), s.current) : null, [h, g] = z.useState(() => Um(f, a));
    return Vc(() => {
      g(Um(f, a));
    }, [
      f,
      a
    ]), Vc(() => {
      const y = (E) => () => {
        g(E);
      };
      if (!f) return;
      const p = y("loaded"), v = y("error");
      return f.addEventListener("load", p), f.addEventListener("error", v), i && (f.referrerPolicy = i), typeof c == "string" && (f.crossOrigin = c), () => {
        f.removeEventListener("load", p), f.removeEventListener("error", v);
      };
    }, [
      f,
      c,
      i
    ]), h;
  }
  var AS = Yp, OS = Vp, wS = Qp;
  function _S({ className: a, ...i }) {
    return G.jsx(AS, {
      "data-slot": "avatar",
      className: Mt("relative flex size-8 shrink-0 overflow-hidden rounded-full", a),
      ...i
    });
  }
  function zS({ className: a, ...i }) {
    return G.jsx(OS, {
      "data-slot": "avatar-image",
      className: Mt("aspect-square size-full", a),
      ...i
    });
  }
  function NS({ className: a, ...i }) {
    return G.jsx(wS, {
      "data-slot": "avatar-fallback",
      className: Mt("bg-muted flex size-full items-center justify-center rounded-full", a),
      ...i
    });
  }
  const MS = pp("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  });
  function Bt({ className: a, variant: i, asChild: c = false, ...o }) {
    const s = c ? mp : "span";
    return G.jsx(s, {
      "data-slot": "badge",
      className: Mt(MS({
        variant: i
      }), a),
      ...o
    });
  }
  var CS = "Separator", jm = "horizontal", DS = [
    "horizontal",
    "vertical"
  ], Zp = z.forwardRef((a, i) => {
    const { decorative: c, orientation: o = jm, ...s } = a, f = US(o) ? o : jm, g = c ? {
      role: "none"
    } : {
      "aria-orientation": f === "vertical" ? f : void 0,
      role: "separator"
    };
    return G.jsx(Wi.div, {
      "data-orientation": f,
      ...g,
      ...s,
      ref: i
    });
  });
  Zp.displayName = CS;
  function US(a) {
    return DS.includes(a);
  }
  var jS = Zp;
  function Mi({ className: a, orientation: i = "horizontal", decorative: c = true, ...o }) {
    return G.jsx(jS, {
      "data-slot": "separator-root",
      decorative: c,
      orientation: i,
      className: Mt("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", a),
      ...o
    });
  }
  const BS = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), HS = (a) => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, c, o) => o ? o.toUpperCase() : c.toLowerCase()), Bm = (a) => {
    const i = HS(a);
    return i.charAt(0).toUpperCase() + i.slice(1);
  }, Kp = (...a) => a.filter((i, c, o) => !!i && i.trim() !== "" && o.indexOf(i) === c).join(" ").trim(), LS = (a) => {
    for (const i in a) if (i.startsWith("aria-") || i === "role" || i === "title") return true;
  };
  var qS = {
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
  const GS = z.forwardRef(({ color: a = "currentColor", size: i = 24, strokeWidth: c = 2, absoluteStrokeWidth: o, className: s = "", children: f, iconNode: h, ...g }, y) => z.createElement("svg", {
    ref: y,
    ...qS,
    width: i,
    height: i,
    stroke: a,
    strokeWidth: o ? Number(c) * 24 / Number(i) : c,
    className: Kp("lucide", s),
    ...!f && !LS(g) && {
      "aria-hidden": "true"
    },
    ...g
  }, [
    ...h.map(([p, v]) => z.createElement(p, v)),
    ...Array.isArray(f) ? f : [
      f
    ]
  ]));
  const Pi = (a, i) => {
    const c = z.forwardRef(({ className: o, ...s }, f) => z.createElement(GS, {
      ref: f,
      iconNode: i,
      className: Kp(`lucide-${BS(Bm(a))}`, `lucide-${a}`, o),
      ...s
    }));
    return c.displayName = Bm(a), c;
  };
  const YS = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
      }
    ],
    [
      "path",
      {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
      }
    ]
  ], kS = Pi("github", YS);
  const VS = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ],
    [
      "path",
      {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
        key: "13o1zl"
      }
    ],
    [
      "path",
      {
        d: "M2 12h20",
        key: "9i4pu4"
      }
    ]
  ], XS = Pi("globe", VS);
  const QS = [
    [
      "rect",
      {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
      }
    ],
    [
      "path",
      {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
      }
    ]
  ], ZS = Pi("mail", QS);
  const KS = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6"
      }
    ]
  ], JS = Pi("twitter", KS);
  function $S() {
    return G.jsx("div", {
      className: "container mx-auto px-4 py-8 max-w-4xl",
      children: G.jsxs(Dc, {
        children: [
          G.jsxs(Uc, {
            className: "text-center",
            children: [
              G.jsx("div", {
                className: "flex justify-center mb-4",
                children: G.jsxs(_S, {
                  className: "w-32 h-32",
                  children: [
                    G.jsx(zS, {
                      src: "/shibu-avatar.jpg",
                      alt: "Shibu"
                    }),
                    G.jsx(NS, {
                      className: "text-4xl",
                      children: "S"
                    })
                  ]
                })
              }),
              G.jsx(jc, {
                className: "text-3xl",
                children: "Shibu"
              }),
              G.jsx(mm, {
                className: "text-lg",
                children: "\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC"
              })
            ]
          }),
          G.jsxs(Bc, {
            className: "space-y-6",
            children: [
              G.jsxs("section", {
                children: [
                  G.jsx("h2", {
                    className: "text-xl font-semibold mb-2",
                    children: "\u81EA\u5DF1\u7D39\u4ECB"
                  }),
                  G.jsxs("p", {
                    className: "text-muted-foreground",
                    children: [
                      "\u3053\u3093\u306B\u3061\u306F\u3001Shibu\u3067\u3059\u3002\u81EA\u5DF1\u7D39\u4ECB\u5F8C\u3067\u4F5C\u308A\u307E\u3059\u306D\u3002",
                      G.jsx("span", {
                        className: "text-sm block mt-2 italic"
                      })
                    ]
                  })
                ]
              }),
              G.jsx(Mi, {}),
              G.jsxs("section", {
                children: [
                  G.jsx("h2", {
                    className: "text-xl font-semibold mb-3",
                    children: "\u30B9\u30AD\u30EB"
                  }),
                  G.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      G.jsx(Bt, {
                        children: "React"
                      }),
                      G.jsx(Bt, {
                        children: "TypeScript"
                      }),
                      G.jsx(Bt, {
                        children: "Node.js"
                      }),
                      G.jsx(Bt, {
                        children: "Next.js"
                      }),
                      G.jsx(Bt, {
                        children: "GraphQL"
                      }),
                      G.jsx(Bt, {
                        children: "PostgreSQL"
                      }),
                      G.jsx(Bt, {
                        children: "Docker"
                      }),
                      G.jsx(Bt, {
                        children: "AWS"
                      }),
                      G.jsx(Bt, {
                        variant: "outline",
                        className: "text-muted-foreground",
                        children: "\u203B\u305D\u306E\u4ED6\u306E\u30B9\u30AD\u30EB\u306F\u5F8C\u3067\u8FFD\u52A0"
                      })
                    ]
                  })
                ]
              }),
              G.jsx(Mi, {}),
              G.jsxs("section", {
                children: [
                  G.jsx("h2", {
                    className: "text-xl font-semibold mb-3",
                    children: "\u7D4C\u6B74"
                  }),
                  G.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      G.jsxs("div", {
                        children: [
                          G.jsx("h3", {
                            className: "font-medium",
                            children: "\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC"
                          }),
                          G.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "2025\u5E742\u6708 - \u73FE\u5728 | \u682A\u5F0F\u4F1A\u793EUnyte"
                          }),
                          G.jsx("p", {
                            className: "text-sm mt-1"
                          })
                        ]
                      }),
                      G.jsxs("div", {
                        children: [
                          G.jsx("h3", {
                            className: "font-medium",
                            children: "\u5236\u5FA1\u30FB\u77E5\u80FD\u5316\u30B7\u30B9\u30C6\u30E0\u958B\u767A\u30A8\u30F3\u30B8\u30CB\u30A2"
                          }),
                          G.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "2023\u5E744\u6708 - 2025\u5E742\u6708 | \u524D\u8077\u5165\u308C\u308B\u304B\u8FF7\u3046\u306A\u3042"
                          }),
                          G.jsx("p", {
                            className: "text-sm mt-1",
                            children: "\u5236\u5FA1\u30FB\u77E5\u80FD\u5316\u30B7\u30B9\u30C6\u30E0\u306E\u958B\u767A\u3092\u62C5\u5F53"
                          })
                        ]
                      }),
                      G.jsx("p", {
                        className: "text-sm italic text-muted-foreground"
                      })
                    ]
                  })
                ]
              }),
              G.jsx(Mi, {}),
              G.jsxs("section", {
                children: [
                  G.jsx("h2", {
                    className: "text-xl font-semibold mb-3",
                    children: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8"
                  }),
                  G.jsxs("div", {
                    className: "grid gap-3",
                    children: [
                      G.jsxs(Dc, {
                        children: [
                          G.jsxs(Uc, {
                            className: "pb-3",
                            children: [
                              G.jsx(jc, {
                                className: "text-lg",
                                children: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\uFF08\u5F8C\u3067\u8FFD\u52A0\uFF09"
                              }),
                              G.jsx(mm, {})
                            ]
                          }),
                          G.jsx(Bc, {
                            children: G.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                G.jsx(Bt, {
                                  variant: "secondary",
                                  children: "React"
                                }),
                                G.jsx(Bt, {
                                  variant: "secondary",
                                  children: "TypeScript"
                                })
                              ]
                            })
                          })
                        ]
                      }),
                      G.jsx("p", {
                        className: "text-sm italic text-muted-foreground text-center",
                        children: "\u203B\u5143\u6C17\u304C\u3042\u308C\u3070\u5F8C\u3067\u8FFD\u52A0\u3057\u307E\u3059\u3002"
                      })
                    ]
                  })
                ]
              }),
              G.jsx(Mi, {}),
              G.jsxs("section", {
                children: [
                  G.jsx("h2", {
                    className: "text-xl font-semibold mb-3",
                    children: "\u9023\u7D61\u5148"
                  }),
                  G.jsxs("div", {
                    className: "flex flex-wrap gap-3",
                    children: [
                      G.jsxs(rn, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          G.jsx(ZS, {
                            className: "mr-2 h-4 w-4"
                          }),
                          "\u30E1\u30FC\u30EB\uFF08\u5F8C\u3067\u8FFD\u52A0\uFF09"
                        ]
                      }),
                      G.jsxs(rn, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          G.jsx(kS, {
                            className: "mr-2 h-4 w-4"
                          }),
                          "GitHub\uFF08\u5F8C\u3067\u8FFD\u52A0\uFF09"
                        ]
                      }),
                      G.jsxs(rn, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          G.jsx(JS, {
                            className: "mr-2 h-4 w-4"
                          }),
                          "Twitter\uFF08\u5F8C\u3067\u8FFD\u52A0\uFF09"
                        ]
                      }),
                      G.jsxs(rn, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          G.jsx(XS, {
                            className: "mr-2 h-4 w-4"
                          }),
                          "\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\uFF08\u5F8C\u3067\u8FFD\u52A0\uFF09"
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  const FS = [
    {
      path: "/",
      Component: pS
    },
    {
      path: "/profile",
      Component: $S
    }
  ];
  function WS() {
    return G.jsx(q0, {
      children: G.jsxs("div", {
        className: "min-h-screen",
        children: [
          G.jsx("nav", {
            className: "border-b",
            children: G.jsx("div", {
              className: "container mx-auto px-4 py-4",
              children: G.jsxs("div", {
                className: "flex gap-4",
                children: [
                  G.jsx(Li, {
                    to: "/",
                    children: G.jsx(rn, {
                      variant: "ghost",
                      children: "\u30DB\u30FC\u30E0"
                    })
                  }),
                  G.jsx(Li, {
                    to: "/profile",
                    children: G.jsx(rn, {
                      variant: "ghost",
                      children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"
                    })
                  })
                ]
              })
            })
          }),
          G.jsx("main", {
            children: G.jsx(p0, {
              children: FS.map(({ path: a, Component: i }, c) => i ? G.jsx($m, {
                path: a,
                element: G.jsx(i, {})
              }, c) : null)
            })
          })
        ]
      })
    });
  }
  Tv.createRoot(document.getElementById("root")).render(G.jsx(z.StrictMode, {
    children: G.jsx(WS, {})
  }));
})();
