import "./chunk-YAMVRKMQ.js";

// node_modules/@lordicon/web/dist/index.js
var gr = Object.defineProperty;
var vr = Object.defineProperties;
var yr = Object.getOwnPropertyDescriptors;
var qi = Object.getOwnPropertySymbols;
var br = Object.prototype.hasOwnProperty;
var _r = Object.prototype.propertyIsEnumerable;
var hi = (t, e, i) => e in t ? gr(t, e, { enumerable: true, configurable: true, writable: true, value: i }) : t[e] = i;
var ke = (t, e) => {
  for (var i in e || (e = {}))
    br.call(e, i) && hi(t, i, e[i]);
  if (qi)
    for (var i of qi(e))
      _r.call(e, i) && hi(t, i, e[i]);
  return t;
};
var Hi = (t, e) => vr(t, yr(e));
var Et = (t, e, i) => hi(t, typeof e != "symbol" ? e + "" : e, i);
function Pr(t) {
  return document.createElement(t);
}
function st(t, e) {
  var i, s = t.length, r2;
  for (i = 0; i < s; i += 1) {
    r2 = t[i].prototype;
    for (var a in r2)
      Object.prototype.hasOwnProperty.call(r2, a) && (e.prototype[a] = r2[a]);
  }
}
function Ae(t, e) {
  return Object.getOwnPropertyDescriptor(t, e);
}
function kr(t) {
  function e() {
  }
  return e.prototype = t, e;
}
var rt = /* @__PURE__ */ (function() {
  function t(i, s) {
    var r2 = 0, a = [], n;
    switch (i) {
      case "int16":
      case "uint8c":
        n = 1;
        break;
      default:
        n = 1.1;
        break;
    }
    for (r2 = 0; r2 < s; r2 += 1)
      a.push(n);
    return a;
  }
  function e(i, s) {
    return i === "float32" ? new Float32Array(s) : i === "int16" ? new Int16Array(s) : i === "uint8c" ? new Uint8ClampedArray(s) : t(i, s);
  }
  return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
})();
function mt(t) {
  return Array.apply(null, { length: t });
}
var ds = true;
var gs = null;
var vs = null;
var ys = "";
var Ft = Math.pow;
var Xi = Math.sqrt;
var Vt = Math.floor;
var Ar = Math.min;
var zt = {};
(function() {
  var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], e, i = t.length;
  for (e = 0; e < i; e += 1)
    zt[t[e]] = Math[t[e]];
})();
zt.random = Math.random;
zt.abs = function(t) {
  var e = typeof t;
  if (e === "object" && t.length) {
    var i = mt(t.length), s, r2 = t.length;
    for (s = 0; s < r2; s += 1)
      i[s] = Math.abs(t[s]);
    return i;
  }
  return Math.abs(t);
};
var bs = 150;
var lt = Math.PI / 180;
var Ut = 0.5519;
function mi(t, e, i, s) {
  this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1;
}
function Ui(t, e) {
  this.type = t, this.direction = e < 0 ? -1 : 1;
}
function Wi(t, e, i, s) {
  this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1;
}
function $i(t, e, i) {
  this.type = t, this.firstFrame = e, this.totalFrames = i;
}
function Yi(t, e) {
  this.type = t, this.target = e;
}
function Er(t, e) {
  this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
}
function wr(t) {
  this.type = "configError", this.nativeError = t;
}
var vt = /* @__PURE__ */ (function() {
  var t = 0;
  return function() {
    return t += 1, ys + "__lottie_element_" + t;
  };
})();
var Sr = (function() {
  var t = [], e, i;
  for (e = 0; e < 256; e += 1)
    i = e.toString(16), t[e] = i.length === 1 ? "0" + i : i;
  return function(s, r2, a) {
    return s < 0 && (s = 0), r2 < 0 && (r2 = 0), a < 0 && (a = 0), "#" + t[s] + t[r2] + t[a];
  };
})();
var xr = (t) => {
  ds = !!t;
};
var Dr = () => ds;
var _s = (t) => {
  gs = t;
};
var Ze = () => gs;
var Cr = (t) => {
  vs = t;
};
var Mr = () => vs;
var Be = (t) => {
  bs = t;
};
var qe = () => bs;
var Ir = (t) => {
  ys = t;
};
function Ps() {
}
Ps.prototype = {
  triggerEvent: function(t, e) {
    if (this._cbs[t])
      for (var i = this._cbs[t], s = 0; s < i.length; s += 1)
        i[s](e);
  },
  addEventListener: function(t, e) {
    return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function() {
      this.removeEventListener(t, e);
    }.bind(this);
  },
  removeEventListener: function(t, e) {
    if (!e)
      this._cbs[t] = null;
    else if (this._cbs[t]) {
      for (var i = 0, s = this._cbs[t].length; i < s; )
        this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
      this._cbs[t].length || (this._cbs[t] = null);
    }
  }
};
var ks = "";
var He = -999999;
var Tr = (t) => {
  ks = t;
};
var At = () => ks;
var Je = /* @__PURE__ */ (function() {
  var t = 1, e = [], i, s, r2 = {
    onmessage: function() {
    },
    postMessage: function(c) {
      i({
        data: c
      });
    }
  }, a = {
    postMessage: function(c) {
      r2.onmessage({
        data: c
      });
    }
  };
  function n(c) {
    return i = c, r2;
  }
  function f() {
    s || (s = n(function(c) {
      function v2() {
        function d3(C2, T2) {
          var F2, M2, _2 = C2.length, w2, I2, z, nt;
          for (M2 = 0; M2 < _2; M2 += 1)
            if (F2 = C2[M2], "ks" in F2 && !F2.completed) {
              if (F2.completed = true, F2.hasMask) {
                var Q = F2.masksProperties;
                for (I2 = Q.length, w2 = 0; w2 < I2; w2 += 1)
                  if (Q[w2].pt.k.i)
                    m2(Q[w2].pt.k);
                  else
                    for (nt = Q[w2].pt.k.length, z = 0; z < nt; z += 1)
                      Q[w2].pt.k[z].s && m2(Q[w2].pt.k[z].s[0]), Q[w2].pt.k[z].e && m2(Q[w2].pt.k[z].e[0]);
              }
              F2.ty === 0 ? (F2.layers = h(F2.refId, T2), d3(F2.layers, T2)) : F2.ty === 4 ? p2(F2.shapes) : F2.ty === 5 && Y(F2);
            }
        }
        function k2(C2, T2) {
          if (C2) {
            var F2 = 0, M2 = C2.length;
            for (F2 = 0; F2 < M2; F2 += 1)
              C2[F2].t === 1 && (C2[F2].data.layers = h(C2[F2].data.refId, T2), d3(C2[F2].data.layers, T2));
          }
        }
        function l(C2, T2) {
          for (var F2 = 0, M2 = T2.length; F2 < M2; ) {
            if (T2[F2].id === C2)
              return T2[F2];
            F2 += 1;
          }
          return null;
        }
        function h(C2, T2) {
          var F2 = l(C2, T2);
          return F2 ? F2.layers.__used ? JSON.parse(JSON.stringify(F2.layers)) : (F2.layers.__used = true, F2.layers) : null;
        }
        function p2(C2) {
          var T2, F2 = C2.length, M2, _2;
          for (T2 = F2 - 1; T2 >= 0; T2 -= 1)
            if (C2[T2].ty === "sh")
              if (C2[T2].ks.k.i)
                m2(C2[T2].ks.k);
              else
                for (_2 = C2[T2].ks.k.length, M2 = 0; M2 < _2; M2 += 1)
                  C2[T2].ks.k[M2].s && m2(C2[T2].ks.k[M2].s[0]), C2[T2].ks.k[M2].e && m2(C2[T2].ks.k[M2].e[0]);
            else C2[T2].ty === "gr" && p2(C2[T2].it);
        }
        function m2(C2) {
          var T2, F2 = C2.i.length;
          for (T2 = 0; T2 < F2; T2 += 1)
            C2.i[T2][0] += C2.v[T2][0], C2.i[T2][1] += C2.v[T2][1], C2.o[T2][0] += C2.v[T2][0], C2.o[T2][1] += C2.v[T2][1];
        }
        function b2(C2, T2) {
          var F2 = T2 ? T2.split(".") : [100, 100, 100];
          return C2[0] > F2[0] ? true : F2[0] > C2[0] ? false : C2[1] > F2[1] ? true : F2[1] > C2[1] ? false : C2[2] > F2[2] ? true : F2[2] > C2[2] ? false : null;
        }
        var E = /* @__PURE__ */ (function() {
          var C2 = [4, 4, 14];
          function T2(M2) {
            var _2 = M2.t.d;
            M2.t.d = {
              k: [
                {
                  s: _2,
                  t: 0
                }
              ]
            };
          }
          function F2(M2) {
            var _2, w2 = M2.length;
            for (_2 = 0; _2 < w2; _2 += 1)
              M2[_2].ty === 5 && T2(M2[_2]);
          }
          return function(M2) {
            if (b2(C2, M2.v) && (F2(M2.layers), M2.assets)) {
              var _2, w2 = M2.assets.length;
              for (_2 = 0; _2 < w2; _2 += 1)
                M2.assets[_2].layers && F2(M2.assets[_2].layers);
            }
          };
        })(), x2 = /* @__PURE__ */ (function() {
          var C2 = [4, 7, 99];
          return function(T2) {
            if (T2.chars && !b2(C2, T2.v)) {
              var F2, M2 = T2.chars.length;
              for (F2 = 0; F2 < M2; F2 += 1) {
                var _2 = T2.chars[F2];
                _2.data && _2.data.shapes && (p2(_2.data.shapes), _2.data.ip = 0, _2.data.op = 99999, _2.data.st = 0, _2.data.sr = 1, _2.data.ks = {
                  p: { k: [0, 0], a: 0 },
                  s: { k: [100, 100], a: 0 },
                  a: { k: [0, 0], a: 0 },
                  r: { k: 0, a: 0 },
                  o: { k: 100, a: 0 }
                }, T2.chars[F2].t || (_2.data.shapes.push(
                  {
                    ty: "no"
                  }
                ), _2.data.shapes[0].it.push(
                  {
                    p: { k: [0, 0], a: 0 },
                    s: { k: [100, 100], a: 0 },
                    a: { k: [0, 0], a: 0 },
                    r: { k: 0, a: 0 },
                    o: { k: 100, a: 0 },
                    sk: { k: 0, a: 0 },
                    sa: { k: 0, a: 0 },
                    ty: "tr"
                  }
                )));
              }
            }
          };
        })(), S2 = /* @__PURE__ */ (function() {
          var C2 = [5, 7, 15];
          function T2(M2) {
            var _2 = M2.t.p;
            typeof _2.a == "number" && (_2.a = {
              a: 0,
              k: _2.a
            }), typeof _2.p == "number" && (_2.p = {
              a: 0,
              k: _2.p
            }), typeof _2.r == "number" && (_2.r = {
              a: 0,
              k: _2.r
            });
          }
          function F2(M2) {
            var _2, w2 = M2.length;
            for (_2 = 0; _2 < w2; _2 += 1)
              M2[_2].ty === 5 && T2(M2[_2]);
          }
          return function(M2) {
            if (b2(C2, M2.v) && (F2(M2.layers), M2.assets)) {
              var _2, w2 = M2.assets.length;
              for (_2 = 0; _2 < w2; _2 += 1)
                M2.assets[_2].layers && F2(M2.assets[_2].layers);
            }
          };
        })(), O2 = /* @__PURE__ */ (function() {
          var C2 = [4, 1, 9];
          function T2(M2) {
            var _2, w2 = M2.length, I2, z;
            for (_2 = 0; _2 < w2; _2 += 1)
              if (M2[_2].ty === "gr")
                T2(M2[_2].it);
              else if (M2[_2].ty === "fl" || M2[_2].ty === "st")
                if (M2[_2].c.k && M2[_2].c.k[0].i)
                  for (z = M2[_2].c.k.length, I2 = 0; I2 < z; I2 += 1)
                    M2[_2].c.k[I2].s && (M2[_2].c.k[I2].s[0] /= 255, M2[_2].c.k[I2].s[1] /= 255, M2[_2].c.k[I2].s[2] /= 255, M2[_2].c.k[I2].s[3] /= 255), M2[_2].c.k[I2].e && (M2[_2].c.k[I2].e[0] /= 255, M2[_2].c.k[I2].e[1] /= 255, M2[_2].c.k[I2].e[2] /= 255, M2[_2].c.k[I2].e[3] /= 255);
                else
                  M2[_2].c.k[0] /= 255, M2[_2].c.k[1] /= 255, M2[_2].c.k[2] /= 255, M2[_2].c.k[3] /= 255;
          }
          function F2(M2) {
            var _2, w2 = M2.length;
            for (_2 = 0; _2 < w2; _2 += 1)
              M2[_2].ty === 4 && T2(M2[_2].shapes);
          }
          return function(M2) {
            if (b2(C2, M2.v) && (F2(M2.layers), M2.assets)) {
              var _2, w2 = M2.assets.length;
              for (_2 = 0; _2 < w2; _2 += 1)
                M2.assets[_2].layers && F2(M2.assets[_2].layers);
            }
          };
        })(), j = /* @__PURE__ */ (function() {
          var C2 = [4, 4, 18];
          function T2(M2) {
            var _2, w2 = M2.length, I2, z;
            for (_2 = w2 - 1; _2 >= 0; _2 -= 1)
              if (M2[_2].ty === "sh")
                if (M2[_2].ks.k.i)
                  M2[_2].ks.k.c = M2[_2].closed;
                else
                  for (z = M2[_2].ks.k.length, I2 = 0; I2 < z; I2 += 1)
                    M2[_2].ks.k[I2].s && (M2[_2].ks.k[I2].s[0].c = M2[_2].closed), M2[_2].ks.k[I2].e && (M2[_2].ks.k[I2].e[0].c = M2[_2].closed);
              else M2[_2].ty === "gr" && T2(M2[_2].it);
          }
          function F2(M2) {
            var _2, w2, I2 = M2.length, z, nt, Q, pt;
            for (w2 = 0; w2 < I2; w2 += 1) {
              if (_2 = M2[w2], _2.hasMask) {
                var A2 = _2.masksProperties;
                for (nt = A2.length, z = 0; z < nt; z += 1)
                  if (A2[z].pt.k.i)
                    A2[z].pt.k.c = A2[z].cl;
                  else
                    for (pt = A2[z].pt.k.length, Q = 0; Q < pt; Q += 1)
                      A2[z].pt.k[Q].s && (A2[z].pt.k[Q].s[0].c = A2[z].cl), A2[z].pt.k[Q].e && (A2[z].pt.k[Q].e[0].c = A2[z].cl);
              }
              _2.ty === 4 && T2(_2.shapes);
            }
          }
          return function(M2) {
            if (b2(C2, M2.v) && (F2(M2.layers), M2.assets)) {
              var _2, w2 = M2.assets.length;
              for (_2 = 0; _2 < w2; _2 += 1)
                M2.assets[_2].layers && F2(M2.assets[_2].layers);
            }
          };
        })();
        function X(C2) {
          C2.__complete || (O2(C2), E(C2), x2(C2), S2(C2), j(C2), d3(C2.layers, C2.assets), k2(C2.chars, C2.assets), C2.__complete = true);
        }
        function Y(C2) {
          C2.t.a.length === 0 && "m" in C2.t.p;
        }
        var L2 = {};
        return L2.completeData = X, L2.checkColors = O2, L2.checkChars = x2, L2.checkPathProperties = S2, L2.checkShapes = j, L2.completeLayers = d3, L2;
      }
      if (a.dataManager || (a.dataManager = v2()), a.assetLoader || (a.assetLoader = /* @__PURE__ */ (function() {
        function d3(l) {
          var h = l.getResponseHeader("content-type");
          return h && l.responseType === "json" && h.indexOf("json") !== -1 || l.response && typeof l.response == "object" ? l.response : l.response && typeof l.response == "string" ? JSON.parse(l.response) : l.responseText ? JSON.parse(l.responseText) : null;
        }
        function k2(l, h, p2, m2) {
          var b2, E = new XMLHttpRequest();
          try {
            E.responseType = "json";
          } catch (x2) {
          }
          E.onreadystatechange = function() {
            if (E.readyState === 4)
              if (E.status === 200)
                b2 = d3(E), p2(b2);
              else
                try {
                  b2 = d3(E), p2(b2);
                } catch (x2) {
                  m2 && m2(x2);
                }
          };
          try {
            E.open(["G", "E", "T"].join(""), l, true);
          } catch (x2) {
            E.open(["G", "E", "T"].join(""), h + "/" + l, true);
          }
          E.send();
        }
        return {
          load: k2
        };
      })()), c.data.type === "loadAnimation")
        a.assetLoader.load(
          c.data.path,
          c.data.fullPath,
          function(d3) {
            a.dataManager.completeData(d3), a.postMessage({
              id: c.data.id,
              payload: d3,
              status: "success"
            });
          },
          function() {
            a.postMessage({
              id: c.data.id,
              status: "error"
            });
          }
        );
      else if (c.data.type === "complete") {
        var g2 = c.data.animation;
        a.dataManager.completeData(g2), a.postMessage({
          id: c.data.id,
          payload: g2,
          status: "success"
        });
      } else c.data.type === "loadData" && a.assetLoader.load(
        c.data.path,
        c.data.fullPath,
        function(d3) {
          a.postMessage({
            id: c.data.id,
            payload: d3,
            status: "success"
          });
        },
        function() {
          a.postMessage({
            id: c.data.id,
            status: "error"
          });
        }
      );
    }), s.onmessage = function(c) {
      var v2 = c.data, g2 = v2.id, d3 = e[g2];
      e[g2] = null, v2.status === "success" ? d3.onComplete(v2.payload) : d3.onError && d3.onError();
    });
  }
  function o2(c, v2) {
    t += 1;
    var g2 = "processId_" + t;
    return e[g2] = {
      onComplete: c,
      onError: v2
    }, g2;
  }
  function u2(c, v2, g2) {
    f();
    var d3 = o2(v2, g2);
    s.postMessage({
      type: "loadAnimation",
      path: c,
      fullPath: window.location.origin + window.location.pathname,
      id: d3
    });
  }
  function y2(c, v2, g2) {
    f();
    var d3 = o2(v2, g2);
    s.postMessage({
      type: "loadData",
      path: c,
      fullPath: window.location.origin + window.location.pathname,
      id: d3
    });
  }
  function P2(c, v2, g2) {
    f();
    var d3 = o2(v2, g2);
    s.postMessage({
      type: "complete",
      animation: c,
      id: d3
    });
  }
  return {
    loadAnimation: u2,
    loadData: y2,
    completeAnimation: P2
  };
})();
var Fr = /* @__PURE__ */ (function() {
  function t(e) {
    for (var i = e.split(`\r
`), s = {}, r2, a = 0, n = 0; n < i.length; n += 1)
      r2 = i[n].split(":"), r2.length === 2 && (s[r2[0]] = r2[1].trim(), a += 1);
    if (a === 0)
      throw new Error();
    return s;
  }
  return function(e) {
    for (var i = [], s = 0; s < e.length; s += 1) {
      var r2 = e[s], a = {
        time: r2.tm,
        duration: r2.dr
      };
      try {
        a.payload = JSON.parse(e[s].cm);
      } catch (n) {
        try {
          a.payload = t(e[s].cm);
        } catch (f) {
          a.payload = {
            name: e[s].cm
          };
        }
      }
      i.push(a);
    }
    return i;
  };
})();
var Vr = /* @__PURE__ */ (function() {
  function t(e) {
    this.compositions.push(e);
  }
  return function() {
    function e(i) {
      for (var s = 0, r2 = this.compositions.length; s < r2; ) {
        if (this.compositions[s].data && this.compositions[s].data.nm === i)
          return this.compositions[s].prepareFrame && this.compositions[s].data.xt && this.compositions[s].prepareFrame(this.currentFrame), this.compositions[s].compInterface;
        s += 1;
      }
      return null;
    }
    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
  };
})();
var xe = {};
var Lr = (t, e) => {
  xe[t] = e;
};
function Rr(t) {
  return xe[t];
}
function Or() {
  if (xe.canvas)
    return "canvas";
  for (const t in xe)
    if (xe[t])
      return t;
  return "";
}
var J = function() {
  this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = vt(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = Dr(), this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = Vr(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new mi("drawnFrame", 0, 0, 0), this.expressionsPlugin = Ze();
};
st([Ps], J);
J.prototype.setParams = function(t) {
  (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
  var e = "svg";
  t.animType ? e = t.animType : t.renderer && (e = t.renderer);
  const i = Rr(e);
  this.renderer = new i(this, t.rendererSettings), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === true ? this.loop = true : t.loop === false ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : true, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : true, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), Je.loadAnimation(
    t.path,
    this.configAnimation,
    this.onSetupError
  ));
};
J.prototype.onSetupError = function() {
  this.trigger("data_failed");
};
J.prototype.setupAnimation = function(t) {
  Je.completeAnimation(
    t,
    this.configAnimation
  );
};
J.prototype.setData = function(t, e) {
  e && typeof e != "object" && (e = JSON.parse(e));
  var i = {
    wrapper: t,
    animationData: e
  }, s = t.attributes;
  i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : Or() || "canvas";
  var r2 = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
  r2 === "false" ? i.loop = false : r2 === "true" ? i.loop = true : r2 !== "" && (i.loop = parseInt(r2, 10));
  var a = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : s.getNamedItem("bm-autoplay") ? s.getNamedItem("bm-autoplay").value : true;
  i.autoplay = a !== "false", i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "";
  var n = s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "";
  n === "false" && (i.prerender = false), i.path ? this.setParams(i) : this.trigger("destroy");
};
J.prototype.includeLayers = function(t) {
  t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
  var e = this.animationData.layers, i, s = e.length, r2 = t.layers, a, n = r2.length;
  for (a = 0; a < n; a += 1)
    for (i = 0; i < s; ) {
      if (e[i].id === r2[a].id) {
        e[i] = r2[a];
        break;
      }
      i += 1;
    }
  if (t.assets)
    for (s = t.assets.length, i = 0; i < s; i += 1)
      this.animationData.assets.push(t.assets[i]);
  this.animationData.__complete = false, Je.completeAnimation(
    this.animationData,
    this.onSegmentComplete
  );
};
J.prototype.onSegmentComplete = function(t) {
  this.animationData = t;
  var e = Ze();
  e && e.initExpressions(this), this.loadNextSegment();
};
J.prototype.loadNextSegment = function() {
  var t = this.animationData.segments;
  if (!t || t.length === 0 || !this.autoloadSegments) {
    this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
    return;
  }
  var e = t.shift();
  this.timeCompleted = e.time * this.frameRate;
  var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
  this.segmentPos += 1, Je.loadData(i, this.includeLayers.bind(this), function() {
    this.trigger("data_failed");
  }.bind(this));
};
J.prototype.loadSegments = function() {
  var t = this.animationData.segments;
  t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
};
J.prototype.configAnimation = function(t) {
  if (this.renderer)
    try {
      this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = Fr(t.markers || []), this.trigger("config_ready"), this.loadSegments(), this.updaFrameModifier(), this.checkLoaded();
    } catch (e) {
      this.triggerConfigError(e);
    }
};
J.prototype.checkLoaded = function() {
  if (!this.isLoaded) {
    this.isLoaded = true;
    var t = Ze();
    t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
      this.trigger("DOMLoaded");
    }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
  }
};
J.prototype.resize = function(t, e) {
  var i = typeof t == "number" ? t : void 0, s = typeof e == "number" ? e : void 0;
  this.renderer.updateContainerSize(i, s);
};
J.prototype.setSubframe = function(t) {
  this.isSubframeEnabled = !!t;
};
J.prototype.gotoFrame = function() {
  this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
};
J.prototype.renderFrame = function() {
  if (!(this.isLoaded === false || !this.renderer))
    try {
      this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
    } catch (t) {
      this.triggerRenderFrameError(t);
    }
};
J.prototype.play = function(t) {
  t && this.name !== t || this.isPaused === true && (this.isPaused = false, this.trigger("_play"), this._idle && (this._idle = false, this.trigger("_active")));
};
J.prototype.pause = function(t) {
  t && this.name !== t || this.isPaused === false && (this.isPaused = true, this.trigger("_pause"), this._idle = true, this.trigger("_idle"));
};
J.prototype.togglePause = function(t) {
  t && this.name !== t || (this.isPaused === true ? this.play() : this.pause());
};
J.prototype.stop = function(t) {
  t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
};
J.prototype.getMarkerData = function(t) {
  for (var e, i = 0; i < this.markers.length; i += 1)
    if (e = this.markers[i], e.payload && e.payload.name === t)
      return e;
  return null;
};
J.prototype.goToAndStop = function(t, e, i) {
  if (!(i && this.name !== i)) {
    var s = Number(t);
    if (isNaN(s)) {
      var r2 = this.getMarkerData(t);
      r2 && this.goToAndStop(r2.time, true);
    } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
    this.pause();
  }
};
J.prototype.goToAndPlay = function(t, e, i) {
  if (!(i && this.name !== i)) {
    var s = Number(t);
    if (isNaN(s)) {
      var r2 = this.getMarkerData(t);
      r2 && (r2.duration ? this.playSegments([r2.time, r2.time + r2.duration], true) : this.goToAndStop(r2.time, true));
    } else
      this.goToAndStop(s, e, i);
    this.play();
  }
};
J.prototype.advanceTime = function(t) {
  if (!(this.isPaused === true || this.isLoaded === false)) {
    var e = this.currentRawFrame + t * this.frameModifier, i = false;
    e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = true, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== true) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true) : (i = true, e = 0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
  }
};
J.prototype.adjustSegment = function(t, e) {
  this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
};
J.prototype.setSegment = function(t, e) {
  var i = -1;
  this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, i !== -1 && this.goToAndStop(i, true);
};
J.prototype.playSegments = function(t, e) {
  if (e && (this.segments.length = 0), typeof t[0] == "object") {
    var i, s = t.length;
    for (i = 0; i < s; i += 1)
      this.segments.push(t[i]);
  } else
    this.segments.push(t);
  this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
};
J.prototype.resetSegments = function(t) {
  this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
};
J.prototype.checkSegments = function(t) {
  return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), true) : false;
};
J.prototype.destroy = function(t) {
  t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.projectInterface = null);
};
J.prototype.setCurrentRawFrameValue = function(t) {
  this.currentRawFrame = t, this.gotoFrame();
};
J.prototype.setSpeed = function(t) {
  this.playSpeed = t, this.updaFrameModifier();
};
J.prototype.setDirection = function(t) {
  this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
};
J.prototype.setLoop = function(t) {
  this.loop = t;
};
J.prototype.updaFrameModifier = function() {
  this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
};
J.prototype.getPath = function() {
  return this.path;
};
J.prototype.getAssetsPath = function(t) {
  var e = "";
  return t.e ? e = t.p : (e = this.path, e += t.u ? t.u : "", e += t.p), e;
};
J.prototype.getAssetData = function(t) {
  for (var e = 0, i = this.assets.length; e < i; ) {
    if (t === this.assets[e].id)
      return this.assets[e];
    e += 1;
  }
  return null;
};
J.prototype.hide = function() {
  this.renderer.hide();
};
J.prototype.show = function() {
  this.renderer.show();
};
J.prototype.getDuration = function(t) {
  return t ? this.totalFrames : this.totalFrames / this.frameRate;
};
J.prototype.updateDocumentData = function(t, e, i) {
  try {
    var s = this.renderer.getElementByPath(t);
    s.updateDocumentData(e, i);
  } catch (r2) {
  }
};
J.prototype.trigger = function(t) {
  if (this._cbs && this._cbs[t])
    switch (t) {
      case "enterFrame":
        this.triggerEvent(t, new mi(t, this.currentFrame, this.totalFrames, this.frameModifier));
        break;
      case "drawnFrame":
        this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
        break;
      case "loopComplete":
        this.triggerEvent(t, new Wi(t, this.loop, this.playCount, this.frameMult));
        break;
      case "complete":
        this.triggerEvent(t, new Ui(t, this.frameMult));
        break;
      case "segmentStart":
        this.triggerEvent(t, new $i(t, this.firstFrame, this.totalFrames));
        break;
      case "destroy":
        this.triggerEvent(t, new Yi(t, this));
        break;
      default:
        this.triggerEvent(t);
    }
  t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new mi(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new Wi(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new Ui(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new $i(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new Yi(t, this));
};
J.prototype.triggerRenderFrameError = function(t) {
  var e = new Er(t, this.currentFrame);
  this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
};
J.prototype.triggerConfigError = function(t) {
  var e = new wr(t, this.currentFrame);
  this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
};
var Pt = (function() {
  var t = {}, e = [], i = 0, s = 0, r2 = 0, a = true, n = false;
  function f(L2) {
    for (var C2 = 0, T2 = L2.target; C2 < s; )
      e[C2].animation === T2 && (e.splice(C2, 1), C2 -= 1, s -= 1, T2.isPaused || P2()), C2 += 1;
  }
  function o2(L2, C2) {
    if (!L2)
      return null;
    for (var T2 = 0; T2 < s; ) {
      if (e[T2].elem === L2 && e[T2].elem !== null)
        return e[T2].animation;
      T2 += 1;
    }
    var F2 = new J();
    return c(F2, L2), F2.setData(L2, C2), F2;
  }
  function u2() {
    var L2, C2 = e.length, T2 = [];
    for (L2 = 0; L2 < C2; L2 += 1)
      T2.push(e[L2].animation);
    return T2;
  }
  function y2() {
    r2 += 1, j();
  }
  function P2() {
    r2 -= 1;
  }
  function c(L2, C2) {
    L2.addEventListener("destroy", f), L2.addEventListener("_active", y2), L2.addEventListener("_idle", P2), e.push({ elem: C2, animation: L2 }), s += 1;
  }
  function v2(L2) {
    var C2 = new J();
    return c(C2, null), C2.setParams(L2), C2;
  }
  function g2(L2, C2) {
    var T2;
    for (T2 = 0; T2 < s; T2 += 1)
      e[T2].animation.setSpeed(L2, C2);
  }
  function d3(L2, C2) {
    var T2;
    for (T2 = 0; T2 < s; T2 += 1)
      e[T2].animation.setDirection(L2, C2);
  }
  function k2(L2) {
    var C2;
    for (C2 = 0; C2 < s; C2 += 1)
      e[C2].animation.play(L2);
  }
  function l(L2) {
    var C2 = L2 - i, T2;
    for (T2 = 0; T2 < s; T2 += 1)
      e[T2].animation.advanceTime(C2);
    i = L2, r2 && !n ? window.requestAnimationFrame(l) : a = true;
  }
  function h(L2) {
    i = L2, window.requestAnimationFrame(l);
  }
  function p2(L2) {
    var C2;
    for (C2 = 0; C2 < s; C2 += 1)
      e[C2].animation.pause(L2);
  }
  function m2(L2, C2, T2) {
    var F2;
    for (F2 = 0; F2 < s; F2 += 1)
      e[F2].animation.goToAndStop(L2, C2, T2);
  }
  function b2(L2) {
    var C2;
    for (C2 = 0; C2 < s; C2 += 1)
      e[C2].animation.stop(L2);
  }
  function E(L2) {
    var C2;
    for (C2 = 0; C2 < s; C2 += 1)
      e[C2].animation.togglePause(L2);
  }
  function x2(L2) {
    var C2;
    for (C2 = s - 1; C2 >= 0; C2 -= 1)
      e[C2].animation.destroy(L2);
  }
  function S2(L2, C2, T2) {
    var F2 = [].concat(
      [].slice.call(document.getElementsByClassName("lottie")),
      [].slice.call(document.getElementsByClassName("bodymovin"))
    ), M2, _2 = F2.length;
    for (M2 = 0; M2 < _2; M2 += 1)
      T2 && F2[M2].setAttribute("data-bm-type", T2), o2(F2[M2], L2);
    if (C2 && _2 === 0) {
      T2 || (T2 = "svg");
      var w2 = document.getElementsByTagName("body")[0];
      w2.innerText = "";
      var I2 = Pr("div");
      I2.style.width = "100%", I2.style.height = "100%", I2.setAttribute("data-bm-type", T2), w2.appendChild(I2), o2(I2, L2);
    }
  }
  function O2() {
    var L2;
    for (L2 = 0; L2 < s; L2 += 1)
      e[L2].animation.resize();
  }
  function j() {
    !n && r2 && a && (window.requestAnimationFrame(h), a = false);
  }
  function X() {
    n = true;
  }
  function Y() {
    n = false, j();
  }
  return t.registerAnimation = o2, t.loadAnimation = v2, t.setSpeed = g2, t.setDirection = d3, t.play = k2, t.pause = p2, t.stop = b2, t.togglePause = E, t.searchAnimations = S2, t.resize = O2, t.goToAndStop = m2, t.destroy = x2, t.freeze = X, t.unfreeze = Y, t.getRegisteredAnimations = u2, t;
})();
var re = (function() {
  var t = {};
  t.getBezierEasing = i;
  var e = {};
  function i(h, p2, m2, b2, E) {
    var x2 = E || ("bez_" + h + "_" + p2 + "_" + m2 + "_" + b2).replace(/\./g, "p");
    if (e[x2])
      return e[x2];
    var S2 = new l([h, p2, m2, b2]);
    return e[x2] = S2, S2;
  }
  var s = 4, r2 = 1e-3, a = 1e-7, n = 10, f = 11, o2 = 1 / (f - 1), u2 = typeof Float32Array == "function";
  function y2(h, p2) {
    return 1 - 3 * p2 + 3 * h;
  }
  function P2(h, p2) {
    return 3 * p2 - 6 * h;
  }
  function c(h) {
    return 3 * h;
  }
  function v2(h, p2, m2) {
    return ((y2(p2, m2) * h + P2(p2, m2)) * h + c(p2)) * h;
  }
  function g2(h, p2, m2) {
    return 3 * y2(p2, m2) * h * h + 2 * P2(p2, m2) * h + c(p2);
  }
  function d3(h, p2, m2, b2, E) {
    var x2, S2, O2 = 0;
    do
      S2 = p2 + (m2 - p2) / 2, x2 = v2(S2, b2, E) - h, x2 > 0 ? m2 = S2 : p2 = S2;
    while (Math.abs(x2) > a && ++O2 < n);
    return S2;
  }
  function k2(h, p2, m2, b2) {
    for (var E = 0; E < s; ++E) {
      var x2 = g2(p2, m2, b2);
      if (x2 === 0) return p2;
      var S2 = v2(p2, m2, b2) - h;
      p2 -= S2 / x2;
    }
    return p2;
  }
  function l(h) {
    this._p = h, this._mSampleValues = u2 ? new Float32Array(f) : new Array(f), this._precomputed = false, this.get = this.get.bind(this);
  }
  return l.prototype = {
    get: function(h) {
      var p2 = this._p[0], m2 = this._p[1], b2 = this._p[2], E = this._p[3];
      return this._precomputed || this._precompute(), p2 === m2 && b2 === E ? h : h === 0 ? 0 : h === 1 ? 1 : v2(this._getTForX(h), m2, E);
    },
    // Private part
    _precompute: function() {
      var h = this._p[0], p2 = this._p[1], m2 = this._p[2], b2 = this._p[3];
      this._precomputed = true, (h !== p2 || m2 !== b2) && this._calcSampleValues();
    },
    _calcSampleValues: function() {
      for (var h = this._p[0], p2 = this._p[2], m2 = 0; m2 < f; ++m2)
        this._mSampleValues[m2] = v2(m2 * o2, h, p2);
    },
    /**
         * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
         */
    _getTForX: function(h) {
      for (var p2 = this._p[0], m2 = this._p[2], b2 = this._mSampleValues, E = 0, x2 = 1, S2 = f - 1; x2 !== S2 && b2[x2] <= h; ++x2)
        E += o2;
      --x2;
      var O2 = (h - b2[x2]) / (b2[x2 + 1] - b2[x2]), j = E + O2 * o2, X = g2(j, p2, m2);
      return X >= r2 ? k2(h, j, p2, m2) : X === 0 ? j : d3(h, E, E + o2, p2, m2);
    }
  }, t;
})();
var As = /* @__PURE__ */ (function() {
  function t(e) {
    return e.concat(mt(e.length));
  }
  return {
    double: t
  };
})();
var Ke = /* @__PURE__ */ (function() {
  return function(t, e, i) {
    var s = 0, r2 = t, a = mt(r2), n = {
      newElement: f,
      release: o2
    };
    function f() {
      var u2;
      return s ? (s -= 1, u2 = a[s]) : u2 = e(), u2;
    }
    function o2(u2) {
      s === r2 && (a = As.double(a), r2 *= 2), i && i(u2), a[s] = u2, s += 1;
    }
    return n;
  };
})();
var Es = (function() {
  function t() {
    return {
      addedLength: 0,
      percents: rt("float32", qe()),
      lengths: rt("float32", qe())
    };
  }
  return Ke(8, t);
})();
var ws = (function() {
  function t() {
    return {
      lengths: [],
      totalLength: 0
    };
  }
  function e(i) {
    var s, r2 = i.lengths.length;
    for (s = 0; s < r2; s += 1)
      Es.release(i.lengths[s]);
    i.lengths.length = 0;
  }
  return Ke(8, t, e);
})();
function zr() {
  var t = Math;
  function e(c, v2, g2, d3, k2, l) {
    var h = c * d3 + v2 * k2 + g2 * l - k2 * d3 - l * c - g2 * v2;
    return h > -1e-3 && h < 1e-3;
  }
  function i(c, v2, g2, d3, k2, l, h, p2, m2) {
    if (g2 === 0 && l === 0 && m2 === 0)
      return e(c, v2, d3, k2, h, p2);
    var b2 = t.sqrt(t.pow(d3 - c, 2) + t.pow(k2 - v2, 2) + t.pow(l - g2, 2)), E = t.sqrt(t.pow(h - c, 2) + t.pow(p2 - v2, 2) + t.pow(m2 - g2, 2)), x2 = t.sqrt(t.pow(h - d3, 2) + t.pow(p2 - k2, 2) + t.pow(m2 - l, 2)), S2;
    return b2 > E ? b2 > x2 ? S2 = b2 - E - x2 : S2 = x2 - E - b2 : x2 > E ? S2 = x2 - E - b2 : S2 = E - b2 - x2, S2 > -1e-4 && S2 < 1e-4;
  }
  var s = /* @__PURE__ */ (function() {
    return function(c, v2, g2, d3) {
      var k2 = qe(), l, h, p2, m2, b2, E = 0, x2, S2 = [], O2 = [], j = Es.newElement();
      for (p2 = g2.length, l = 0; l < k2; l += 1) {
        for (b2 = l / (k2 - 1), x2 = 0, h = 0; h < p2; h += 1)
          m2 = Ft(1 - b2, 3) * c[h] + 3 * Ft(1 - b2, 2) * b2 * g2[h] + 3 * (1 - b2) * Ft(b2, 2) * d3[h] + Ft(b2, 3) * v2[h], S2[h] = m2, O2[h] !== null && (x2 += Ft(S2[h] - O2[h], 2)), O2[h] = S2[h];
        x2 && (x2 = Xi(x2), E += x2), j.percents[l] = b2, j.lengths[l] = E;
      }
      return j.addedLength = E, j;
    };
  })();
  function r2(c) {
    var v2 = ws.newElement(), g2 = c.c, d3 = c.v, k2 = c.o, l = c.i, h, p2 = c._length, m2 = v2.lengths, b2 = 0;
    for (h = 0; h < p2 - 1; h += 1)
      m2[h] = s(d3[h], d3[h + 1], k2[h], l[h + 1]), b2 += m2[h].addedLength;
    return g2 && p2 && (m2[h] = s(d3[h], d3[0], k2[h], l[0]), b2 += m2[h].addedLength), v2.totalLength = b2, v2;
  }
  function a(c) {
    this.segmentLength = 0, this.points = new Array(c);
  }
  function n(c, v2) {
    this.partialLength = c, this.point = v2;
  }
  var f = /* @__PURE__ */ (function() {
    var c = {};
    return function(v2, g2, d3, k2) {
      var l = (v2[0] + "_" + v2[1] + "_" + g2[0] + "_" + g2[1] + "_" + d3[0] + "_" + d3[1] + "_" + k2[0] + "_" + k2[1]).replace(/\./g, "p");
      if (!c[l]) {
        var h = qe(), p2, m2, b2, E, x2, S2 = 0, O2, j, X = null;
        v2.length === 2 && (v2[0] !== g2[0] || v2[1] !== g2[1]) && e(v2[0], v2[1], g2[0], g2[1], v2[0] + d3[0], v2[1] + d3[1]) && e(v2[0], v2[1], g2[0], g2[1], g2[0] + k2[0], g2[1] + k2[1]) && (h = 2);
        var Y = new a(h);
        for (b2 = d3.length, p2 = 0; p2 < h; p2 += 1) {
          for (j = mt(b2), x2 = p2 / (h - 1), O2 = 0, m2 = 0; m2 < b2; m2 += 1)
            E = Ft(1 - x2, 3) * v2[m2] + 3 * Ft(1 - x2, 2) * x2 * (v2[m2] + d3[m2]) + 3 * (1 - x2) * Ft(x2, 2) * (g2[m2] + k2[m2]) + Ft(x2, 3) * g2[m2], j[m2] = E, X !== null && (O2 += Ft(j[m2] - X[m2], 2));
          O2 = Xi(O2), S2 += O2, Y.points[p2] = new n(O2, j), X = j;
        }
        Y.segmentLength = S2, c[l] = Y;
      }
      return c[l];
    };
  })();
  function o2(c, v2) {
    var g2 = v2.percents, d3 = v2.lengths, k2 = g2.length, l = Vt((k2 - 1) * c), h = c * v2.addedLength, p2 = 0;
    if (l === k2 - 1 || l === 0 || h === d3[l])
      return g2[l];
    for (var m2 = d3[l] > h ? -1 : 1, b2 = true; b2; )
      if (d3[l] <= h && d3[l + 1] > h ? (p2 = (h - d3[l]) / (d3[l + 1] - d3[l]), b2 = false) : l += m2, l < 0 || l >= k2 - 1) {
        if (l === k2 - 1)
          return g2[l];
        b2 = false;
      }
    return g2[l] + (g2[l + 1] - g2[l]) * p2;
  }
  function u2(c, v2, g2, d3, k2, l) {
    var h = o2(k2, l), p2 = 1 - h, m2 = t.round((p2 * p2 * p2 * c[0] + (h * p2 * p2 + p2 * h * p2 + p2 * p2 * h) * g2[0] + (h * h * p2 + p2 * h * h + h * p2 * h) * d3[0] + h * h * h * v2[0]) * 1e3) / 1e3, b2 = t.round((p2 * p2 * p2 * c[1] + (h * p2 * p2 + p2 * h * p2 + p2 * p2 * h) * g2[1] + (h * h * p2 + p2 * h * h + h * p2 * h) * d3[1] + h * h * h * v2[1]) * 1e3) / 1e3;
    return [m2, b2];
  }
  var y2 = rt("float32", 8);
  function P2(c, v2, g2, d3, k2, l, h) {
    k2 < 0 ? k2 = 0 : k2 > 1 && (k2 = 1);
    var p2 = o2(k2, h);
    l = l > 1 ? 1 : l;
    var m2 = o2(l, h), b2, E = c.length, x2 = 1 - p2, S2 = 1 - m2, O2 = x2 * x2 * x2, j = p2 * x2 * x2 * 3, X = p2 * p2 * x2 * 3, Y = p2 * p2 * p2, L2 = x2 * x2 * S2, C2 = p2 * x2 * S2 + x2 * p2 * S2 + x2 * x2 * m2, T2 = p2 * p2 * S2 + x2 * p2 * m2 + p2 * x2 * m2, F2 = p2 * p2 * m2, M2 = x2 * S2 * S2, _2 = p2 * S2 * S2 + x2 * m2 * S2 + x2 * S2 * m2, w2 = p2 * m2 * S2 + x2 * m2 * m2 + p2 * S2 * m2, I2 = p2 * m2 * m2, z = S2 * S2 * S2, nt = m2 * S2 * S2 + S2 * m2 * S2 + S2 * S2 * m2, Q = m2 * m2 * S2 + S2 * m2 * m2 + m2 * S2 * m2, pt = m2 * m2 * m2;
    for (b2 = 0; b2 < E; b2 += 1)
      y2[b2 * 4] = t.round((O2 * c[b2] + j * g2[b2] + X * d3[b2] + Y * v2[b2]) * 1e3) / 1e3, y2[b2 * 4 + 1] = t.round((L2 * c[b2] + C2 * g2[b2] + T2 * d3[b2] + F2 * v2[b2]) * 1e3) / 1e3, y2[b2 * 4 + 2] = t.round((M2 * c[b2] + _2 * g2[b2] + w2 * d3[b2] + I2 * v2[b2]) * 1e3) / 1e3, y2[b2 * 4 + 3] = t.round((z * c[b2] + nt * g2[b2] + Q * d3[b2] + pt * v2[b2]) * 1e3) / 1e3;
    return y2;
  }
  return {
    getSegmentsLength: r2,
    getNewSegment: P2,
    getPointInSegment: u2,
    buildBezierData: f,
    pointOnLine2D: e,
    pointOnLine3D: i
  };
}
var Lt = zr();
var ae = He;
var Zi = Math.abs;
function Ss(t, e) {
  var i = this.offsetTime, s;
  this.propType === "multidimensional" && (s = rt("float32", this.pv.length));
  for (var r2 = e.lastIndex, a = r2, n = this.keyframes.length - 1, f = true, o2, u2, y2; f; ) {
    if (o2 = this.keyframes[a], u2 = this.keyframes[a + 1], a === n - 1 && t >= u2.t - i) {
      o2.h && (o2 = u2), r2 = 0;
      break;
    }
    if (u2.t - i > t) {
      r2 = a;
      break;
    }
    a < n - 1 ? a += 1 : (r2 = 0, f = false);
  }
  y2 = this.keyframesMetadata[a] || {};
  var P2, c, v2, g2, d3, k2, l = u2.t - i, h = o2.t - i, p2;
  if (o2.to) {
    y2.bezierData || (y2.bezierData = Lt.buildBezierData(o2.s, u2.s || o2.e, o2.to, o2.ti));
    var m2 = y2.bezierData;
    if (t >= l || t < h) {
      var b2 = t >= l ? m2.points.length - 1 : 0;
      for (c = m2.points[b2].point.length, P2 = 0; P2 < c; P2 += 1)
        s[P2] = m2.points[b2].point[P2];
    } else {
      y2.__fnct ? k2 = y2.__fnct : (k2 = re.getBezierEasing(o2.o.x, o2.o.y, o2.i.x, o2.i.y, o2.n).get, y2.__fnct = k2), v2 = k2((t - h) / (l - h));
      var E = m2.segmentLength * v2, x2, S2 = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
      for (d3 = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, f = true, g2 = m2.points.length; f; ) {
        if (S2 += m2.points[d3].partialLength, E === 0 || v2 === 0 || d3 === m2.points.length - 1) {
          for (c = m2.points[d3].point.length, P2 = 0; P2 < c; P2 += 1)
            s[P2] = m2.points[d3].point[P2];
          break;
        } else if (E >= S2 && E < S2 + m2.points[d3 + 1].partialLength) {
          for (x2 = (E - S2) / m2.points[d3 + 1].partialLength, c = m2.points[d3].point.length, P2 = 0; P2 < c; P2 += 1)
            s[P2] = m2.points[d3].point[P2] + (m2.points[d3 + 1].point[P2] - m2.points[d3].point[P2]) * x2;
          break;
        }
        d3 < g2 - 1 ? d3 += 1 : f = false;
      }
      e._lastPoint = d3, e._lastAddedLength = S2 - m2.points[d3].partialLength, e._lastKeyframeIndex = a;
    }
  } else {
    var O2, j, X, Y, L2;
    if (n = o2.s.length, p2 = u2.s || o2.e, this.sh && o2.h !== 1)
      if (t >= l)
        s[0] = p2[0], s[1] = p2[1], s[2] = p2[2];
      else if (t <= h)
        s[0] = o2.s[0], s[1] = o2.s[1], s[2] = o2.s[2];
      else {
        var C2 = Ji(o2.s), T2 = Ji(p2), F2 = (t - h) / (l - h);
        Br(s, Gr(C2, T2, F2));
      }
    else
      for (a = 0; a < n; a += 1)
        o2.h !== 1 && (t >= l ? v2 = 1 : t < h ? v2 = 0 : (o2.o.x.constructor === Array ? (y2.__fnct || (y2.__fnct = []), y2.__fnct[a] ? k2 = y2.__fnct[a] : (O2 = o2.o.x[a] === void 0 ? o2.o.x[0] : o2.o.x[a], j = o2.o.y[a] === void 0 ? o2.o.y[0] : o2.o.y[a], X = o2.i.x[a] === void 0 ? o2.i.x[0] : o2.i.x[a], Y = o2.i.y[a] === void 0 ? o2.i.y[0] : o2.i.y[a], k2 = re.getBezierEasing(O2, j, X, Y).get, y2.__fnct[a] = k2)) : y2.__fnct ? k2 = y2.__fnct : (O2 = o2.o.x, j = o2.o.y, X = o2.i.x, Y = o2.i.y, k2 = re.getBezierEasing(O2, j, X, Y).get, o2.keyframeMetadata = k2), v2 = k2((t - h) / (l - h)))), p2 = u2.s || o2.e, L2 = o2.h === 1 ? o2.s[a] : o2.s[a] + (p2[a] - o2.s[a]) * v2, this.propType === "multidimensional" ? s[a] = L2 : s = L2;
  }
  return e.lastIndex = r2, s;
}
function Gr(t, e, i) {
  var s = [], r2 = t[0], a = t[1], n = t[2], f = t[3], o2 = e[0], u2 = e[1], y2 = e[2], P2 = e[3], c, v2, g2, d3, k2;
  return v2 = r2 * o2 + a * u2 + n * y2 + f * P2, v2 < 0 && (v2 = -v2, o2 = -o2, u2 = -u2, y2 = -y2, P2 = -P2), 1 - v2 > 1e-6 ? (c = Math.acos(v2), g2 = Math.sin(c), d3 = Math.sin((1 - i) * c) / g2, k2 = Math.sin(i * c) / g2) : (d3 = 1 - i, k2 = i), s[0] = d3 * r2 + k2 * o2, s[1] = d3 * a + k2 * u2, s[2] = d3 * n + k2 * y2, s[3] = d3 * f + k2 * P2, s;
}
function Br(t, e) {
  var i = e[0], s = e[1], r2 = e[2], a = e[3], n = Math.atan2(2 * s * a - 2 * i * r2, 1 - 2 * s * s - 2 * r2 * r2), f = Math.asin(2 * i * s + 2 * r2 * a), o2 = Math.atan2(2 * i * a - 2 * s * r2, 1 - 2 * i * i - 2 * r2 * r2);
  t[0] = n / lt, t[1] = f / lt, t[2] = o2 / lt;
}
function Ji(t) {
  var e = t[0] * lt, i = t[1] * lt, s = t[2] * lt, r2 = Math.cos(e / 2), a = Math.cos(i / 2), n = Math.cos(s / 2), f = Math.sin(e / 2), o2 = Math.sin(i / 2), u2 = Math.sin(s / 2), y2 = r2 * a * n - f * o2 * u2, P2 = f * o2 * n + r2 * a * u2, c = f * a * n + r2 * o2 * u2, v2 = r2 * o2 * n - f * a * u2;
  return [P2, c, v2, y2];
}
function xs() {
  var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
  if (!(t === this._caching.lastFrame || this._caching.lastFrame !== ae && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
    this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
    var s = this.interpolateValue(t, this._caching);
    this.pv = s;
  }
  return this._caching.lastFrame = t, this.pv;
}
function Qe(t) {
  var e;
  if (this.propType === "unidimensional")
    e = t * this.mult, Zi(this.v - e) > 1e-5 && (this.v = e, this._mdf = true);
  else
    for (var i = 0, s = this.v.length; i < s; )
      e = t[i] * this.mult, Zi(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = true), i += 1;
}
function ti() {
  if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
    if (this.lock) {
      this.setVValue(this.pv);
      return;
    }
    this.lock = true, this._mdf = this._isFirstFrame;
    var t, e = this.effectsSequence.length, i = this.kf ? this.pv : this.data.k;
    for (t = 0; t < e; t += 1)
      i = this.effectsSequence[t](i);
    this.setVValue(i), this._isFirstFrame = false, this.lock = false, this.frameId = this.elem.globalData.frameId;
  }
}
function ei(t) {
  this.effectsSequence.push(t), this.container.addDynamicProperty(this);
}
function Nr(t, e, i, s) {
  this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = false, this.elem = t, this.container = s, this.comp = t.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = ti, this.setVValue = Qe, this.addEffect = ei;
}
function jr(t, e, i, s) {
  this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = false, this.elem = t, this.container = s, this.comp = t.comp, this.k = false, this.kf = false, this.frameId = -1;
  var r2, a = e.k.length;
  for (this.v = rt("float32", a), this.pv = rt("float32", a), this.vel = rt("float32", a), r2 = 0; r2 < a; r2 += 1)
    this.v[r2] = e.k[r2] * this.mult, this.pv[r2] = e.k[r2];
  this._isFirstFrame = true, this.effectsSequence = [], this.getValue = ti, this.setVValue = Qe, this.addEffect = ei;
}
function qr(t, e, i, s) {
  this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
    lastFrame: ae,
    lastIndex: 0,
    value: 0,
    _lastKeyframeIndex: -1
  }, this.k = true, this.kf = true, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = ae, this.pv = ae, this._isFirstFrame = true, this.getValue = ti, this.setVValue = Qe, this.interpolateValue = Ss, this.effectsSequence = [xs.bind(this)], this.addEffect = ei;
}
function Hr(t, e, i, s) {
  this.propType = "multidimensional";
  var r2, a = e.k.length, n, f, o2, u2;
  for (r2 = 0; r2 < a - 1; r2 += 1)
    e.k[r2].to && e.k[r2].s && e.k[r2 + 1] && e.k[r2 + 1].s && (n = e.k[r2].s, f = e.k[r2 + 1].s, o2 = e.k[r2].to, u2 = e.k[r2].ti, (n.length === 2 && !(n[0] === f[0] && n[1] === f[1]) && Lt.pointOnLine2D(n[0], n[1], f[0], f[1], n[0] + o2[0], n[1] + o2[1]) && Lt.pointOnLine2D(n[0], n[1], f[0], f[1], f[0] + u2[0], f[1] + u2[1]) || n.length === 3 && !(n[0] === f[0] && n[1] === f[1] && n[2] === f[2]) && Lt.pointOnLine3D(n[0], n[1], n[2], f[0], f[1], f[2], n[0] + o2[0], n[1] + o2[1], n[2] + o2[2]) && Lt.pointOnLine3D(n[0], n[1], n[2], f[0], f[1], f[2], f[0] + u2[0], f[1] + u2[1], f[2] + u2[2])) && (e.k[r2].to = null, e.k[r2].ti = null), n[0] === f[0] && n[1] === f[1] && o2[0] === 0 && o2[1] === 0 && u2[0] === 0 && u2[1] === 0 && (n.length === 2 || n[2] === f[2] && o2[2] === 0 && u2[2] === 0) && (e.k[r2].to = null, e.k[r2].ti = null));
  this.effectsSequence = [xs.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = ti, this.setVValue = Qe, this.interpolateValue = Ss, this.frameId = -1;
  var y2 = e.k[0].s.length;
  for (this.v = rt("float32", y2), this.pv = rt("float32", y2), r2 = 0; r2 < y2; r2 += 1)
    this.v[r2] = ae, this.pv[r2] = ae;
  this._caching = { lastFrame: ae, lastIndex: 0, value: rt("float32", y2) }, this.addEffect = ei;
}
var N = /* @__PURE__ */ (function() {
  function t(i, s, r2, a, n) {
    s.sid && (s = i.globalData.slotManager.getProp(s));
    var f;
    if (!s.k.length)
      f = new Nr(i, s, a, n);
    else if (typeof s.k[0] == "number")
      f = new jr(i, s, a, n);
    else
      switch (r2) {
        case 0:
          f = new qr(i, s, a, n);
          break;
        case 1:
          f = new Hr(i, s, a, n);
          break;
      }
    return f.effectsSequence.length && n.addDynamicProperty(f), f;
  }
  var e = {
    getProp: t
  };
  return e;
})();
function _t() {
}
_t.prototype = {
  addDynamicProperty: function(t) {
    this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = true);
  },
  iterateDynamicProperties: function() {
    this._mdf = false;
    var t, e = this.dynamicProperties.length;
    for (t = 0; t < e; t += 1)
      this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = true);
  },
  initDynamicPropertyContainer: function(t) {
    this.container = t, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
  }
};
var ne = (function() {
  function t() {
    return rt("float32", 2);
  }
  return Ke(8, t);
})();
function Gt() {
  this.c = false, this._length = 0, this._maxLength = 8, this.v = mt(this._maxLength), this.o = mt(this._maxLength), this.i = mt(this._maxLength);
}
Gt.prototype.setPathData = function(t, e) {
  this.c = t, this.setLength(e);
  for (var i = 0; i < e; )
    this.v[i] = ne.newElement(), this.o[i] = ne.newElement(), this.i[i] = ne.newElement(), i += 1;
};
Gt.prototype.setLength = function(t) {
  for (; this._maxLength < t; )
    this.doubleArrayLength();
  this._length = t;
};
Gt.prototype.doubleArrayLength = function() {
  this.v = this.v.concat(mt(this._maxLength)), this.i = this.i.concat(mt(this._maxLength)), this.o = this.o.concat(mt(this._maxLength)), this._maxLength *= 2;
};
Gt.prototype.setXYAt = function(t, e, i, s, r2) {
  var a;
  switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
    case "v":
      a = this.v;
      break;
    case "i":
      a = this.i;
      break;
    case "o":
      a = this.o;
      break;
    default:
      a = [];
      break;
  }
  (!a[s] || a[s] && !r2) && (a[s] = ne.newElement()), a[s][0] = t, a[s][1] = e;
};
Gt.prototype.setTripleAt = function(t, e, i, s, r2, a, n, f) {
  this.setXYAt(t, e, "v", n, f), this.setXYAt(i, s, "o", n, f), this.setXYAt(r2, a, "i", n, f);
};
Gt.prototype.reverse = function() {
  var t = new Gt();
  t.setPathData(this.c, this._length);
  var e = this.v, i = this.o, s = this.i, r2 = 0;
  this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, false), r2 = 1);
  var a = this._length - 1, n = this._length, f;
  for (f = r2; f < n; f += 1)
    t.setTripleAt(e[a][0], e[a][1], s[a][0], s[a][1], i[a][0], i[a][1], f, false), a -= 1;
  return t;
};
Gt.prototype.length = function() {
  return this._length;
};
var gt = (function() {
  function t() {
    return new Gt();
  }
  function e(r2) {
    var a = r2._length, n;
    for (n = 0; n < a; n += 1)
      ne.release(r2.v[n]), ne.release(r2.i[n]), ne.release(r2.o[n]), r2.v[n] = null, r2.i[n] = null, r2.o[n] = null;
    r2._length = 0, r2.c = false;
  }
  function i(r2) {
    var a = s.newElement(), n, f = r2._length === void 0 ? r2.v.length : r2._length;
    for (a.setLength(f), a.c = r2.c, n = 0; n < f; n += 1)
      a.setTripleAt(r2.v[n][0], r2.v[n][1], r2.o[n][0], r2.o[n][1], r2.i[n][0], r2.i[n][1], n);
    return a;
  }
  var s = Ke(4, t, e);
  return s.clone = i, s;
})();
function gi() {
  this._length = 0, this._maxLength = 4, this.shapes = mt(this._maxLength);
}
gi.prototype.addShape = function(t) {
  this._length === this._maxLength && (this.shapes = this.shapes.concat(mt(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
};
gi.prototype.releaseShapes = function() {
  var t;
  for (t = 0; t < this._length; t += 1)
    gt.release(this.shapes[t]);
  this._length = 0;
};
var me = (function() {
  var t = {
    newShapeCollection: r2,
    release: a
  }, e = 0, i = 4, s = mt(i);
  function r2() {
    var n;
    return e ? (e -= 1, n = s[e]) : n = new gi(), n;
  }
  function a(n) {
    var f, o2 = n._length;
    for (f = 0; f < o2; f += 1)
      gt.release(n.shapes[f]);
    n._length = 0, e === i && (s = As.double(s), i *= 2), s[e] = n, e += 1;
  }
  return t;
})();
var Wt = (function() {
  var t = -999999;
  function e(l, h, p2) {
    var m2 = p2.lastIndex, b2, E, x2, S2, O2, j, X, Y, L2, C2 = this.keyframes;
    if (l < C2[0].t - this.offsetTime)
      b2 = C2[0].s[0], x2 = true, m2 = 0;
    else if (l >= C2[C2.length - 1].t - this.offsetTime)
      b2 = C2[C2.length - 1].s ? C2[C2.length - 1].s[0] : C2[C2.length - 2].e[0], x2 = true;
    else {
      for (var T2 = m2, F2 = C2.length - 1, M2 = true, _2, w2, I2; M2 && (_2 = C2[T2], w2 = C2[T2 + 1], !(w2.t - this.offsetTime > l)); )
        T2 < F2 - 1 ? T2 += 1 : M2 = false;
      if (I2 = this.keyframesMetadata[T2] || {}, x2 = _2.h === 1, m2 = T2, !x2) {
        if (l >= w2.t - this.offsetTime)
          Y = 1;
        else if (l < _2.t - this.offsetTime)
          Y = 0;
        else {
          var z;
          I2.__fnct ? z = I2.__fnct : (z = re.getBezierEasing(_2.o.x, _2.o.y, _2.i.x, _2.i.y).get, I2.__fnct = z), Y = z((l - (_2.t - this.offsetTime)) / (w2.t - this.offsetTime - (_2.t - this.offsetTime)));
        }
        E = w2.s ? w2.s[0] : _2.e[0];
      }
      b2 = _2.s[0];
    }
    for (j = h._length, X = b2.i[0].length, p2.lastIndex = m2, S2 = 0; S2 < j; S2 += 1)
      for (O2 = 0; O2 < X; O2 += 1)
        L2 = x2 ? b2.i[S2][O2] : b2.i[S2][O2] + (E.i[S2][O2] - b2.i[S2][O2]) * Y, h.i[S2][O2] = L2, L2 = x2 ? b2.o[S2][O2] : b2.o[S2][O2] + (E.o[S2][O2] - b2.o[S2][O2]) * Y, h.o[S2][O2] = L2, L2 = x2 ? b2.v[S2][O2] : b2.v[S2][O2] + (E.v[S2][O2] - b2.v[S2][O2]) * Y, h.v[S2][O2] = L2;
  }
  function i() {
    var l = this.comp.renderedFrame - this.offsetTime, h = this.keyframes[0].t - this.offsetTime, p2 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, m2 = this._caching.lastFrame;
    return m2 !== t && (m2 < h && l < h || m2 > p2 && l > p2) || (this._caching.lastIndex = m2 < l ? this._caching.lastIndex : 0, this.interpolateShape(l, this.pv, this._caching)), this._caching.lastFrame = l, this.pv;
  }
  function s() {
    this.paths = this.localShapeCollection;
  }
  function r2(l, h) {
    if (l._length !== h._length || l.c !== h.c)
      return false;
    var p2, m2 = l._length;
    for (p2 = 0; p2 < m2; p2 += 1)
      if (l.v[p2][0] !== h.v[p2][0] || l.v[p2][1] !== h.v[p2][1] || l.o[p2][0] !== h.o[p2][0] || l.o[p2][1] !== h.o[p2][1] || l.i[p2][0] !== h.i[p2][0] || l.i[p2][1] !== h.i[p2][1])
        return false;
    return true;
  }
  function a(l) {
    r2(this.v, l) || (this.v = gt.clone(l), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
  }
  function n() {
    if (this.elem.globalData.frameId !== this.frameId) {
      if (!this.effectsSequence.length) {
        this._mdf = false;
        return;
      }
      if (this.lock) {
        this.setVValue(this.pv);
        return;
      }
      this.lock = true, this._mdf = false;
      var l;
      this.kf ? l = this.pv : this.data.ks ? l = this.data.ks.k : l = this.data.pt.k;
      var h, p2 = this.effectsSequence.length;
      for (h = 0; h < p2; h += 1)
        l = this.effectsSequence[h](l);
      this.setVValue(l), this.lock = false, this.frameId = this.elem.globalData.frameId;
    }
  }
  function f(l, h, p2) {
    this.propType = "shape", this.comp = l.comp, this.container = l, this.elem = l, this.data = h, this.k = false, this.kf = false, this._mdf = false;
    var m2 = p2 === 3 ? h.pt.k : h.ks.k;
    this.v = gt.clone(m2), this.pv = gt.clone(this.v), this.localShapeCollection = me.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = [];
  }
  function o2(l) {
    this.effectsSequence.push(l), this.container.addDynamicProperty(this);
  }
  f.prototype.interpolateShape = e, f.prototype.getValue = n, f.prototype.setVValue = a, f.prototype.addEffect = o2;
  function u2(l, h, p2) {
    this.propType = "shape", this.comp = l.comp, this.elem = l, this.container = l, this.offsetTime = l.data.st, this.keyframes = p2 === 3 ? h.pt.k : h.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
    var m2 = this.keyframes[0].s[0].i.length;
    this.v = gt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, m2), this.pv = gt.clone(this.v), this.localShapeCollection = me.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [i.bind(this)];
  }
  u2.prototype.getValue = n, u2.prototype.interpolateShape = e, u2.prototype.setVValue = a, u2.prototype.addEffect = o2;
  var y2 = (function() {
    var l = Ut;
    function h(p2, m2) {
      this.v = gt.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = me.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = m2.d, this.elem = p2, this.comp = p2.comp, this.frameId = -1, this.initDynamicPropertyContainer(p2), this.p = N.getProp(p2, m2.p, 1, 0, this), this.s = N.getProp(p2, m2.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
    }
    return h.prototype = {
      reset: s,
      getValue: function() {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
      },
      convertEllToPath: function() {
        var p2 = this.p.v[0], m2 = this.p.v[1], b2 = this.s.v[0] / 2, E = this.s.v[1] / 2, x2 = this.d !== 3, S2 = this.v;
        S2.v[0][0] = p2, S2.v[0][1] = m2 - E, S2.v[1][0] = x2 ? p2 + b2 : p2 - b2, S2.v[1][1] = m2, S2.v[2][0] = p2, S2.v[2][1] = m2 + E, S2.v[3][0] = x2 ? p2 - b2 : p2 + b2, S2.v[3][1] = m2, S2.i[0][0] = x2 ? p2 - b2 * l : p2 + b2 * l, S2.i[0][1] = m2 - E, S2.i[1][0] = x2 ? p2 + b2 : p2 - b2, S2.i[1][1] = m2 - E * l, S2.i[2][0] = x2 ? p2 + b2 * l : p2 - b2 * l, S2.i[2][1] = m2 + E, S2.i[3][0] = x2 ? p2 - b2 : p2 + b2, S2.i[3][1] = m2 + E * l, S2.o[0][0] = x2 ? p2 + b2 * l : p2 - b2 * l, S2.o[0][1] = m2 - E, S2.o[1][0] = x2 ? p2 + b2 : p2 - b2, S2.o[1][1] = m2 + E * l, S2.o[2][0] = x2 ? p2 - b2 * l : p2 + b2 * l, S2.o[2][1] = m2 + E, S2.o[3][0] = x2 ? p2 - b2 : p2 + b2, S2.o[3][1] = m2 - E * l;
      }
    }, st([_t], h), h;
  })(), P2 = (function() {
    function l(h, p2) {
      this.v = gt.newElement(), this.v.setPathData(true, 0), this.elem = h, this.comp = h.comp, this.data = p2, this.frameId = -1, this.d = p2.d, this.initDynamicPropertyContainer(h), p2.sy === 1 ? (this.ir = N.getProp(h, p2.ir, 0, 0, this), this.is = N.getProp(h, p2.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = N.getProp(h, p2.pt, 0, 0, this), this.p = N.getProp(h, p2.p, 1, 0, this), this.r = N.getProp(h, p2.r, 0, lt, this), this.or = N.getProp(h, p2.or, 0, 0, this), this.os = N.getProp(h, p2.os, 0, 0.01, this), this.localShapeCollection = me.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
    }
    return l.prototype = {
      reset: s,
      getValue: function() {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
      },
      convertStarToPath: function() {
        var h = Math.floor(this.pt.v) * 2, p2 = Math.PI * 2 / h, m2 = true, b2 = this.or.v, E = this.ir.v, x2 = this.os.v, S2 = this.is.v, O2 = 2 * Math.PI * b2 / (h * 2), j = 2 * Math.PI * E / (h * 2), X, Y, L2, C2, T2 = -Math.PI / 2;
        T2 += this.r.v;
        var F2 = this.data.d === 3 ? -1 : 1;
        for (this.v._length = 0, X = 0; X < h; X += 1) {
          Y = m2 ? b2 : E, L2 = m2 ? x2 : S2, C2 = m2 ? O2 : j;
          var M2 = Y * Math.cos(T2), _2 = Y * Math.sin(T2), w2 = M2 === 0 && _2 === 0 ? 0 : _2 / Math.sqrt(M2 * M2 + _2 * _2), I2 = M2 === 0 && _2 === 0 ? 0 : -M2 / Math.sqrt(M2 * M2 + _2 * _2);
          M2 += +this.p.v[0], _2 += +this.p.v[1], this.v.setTripleAt(M2, _2, M2 - w2 * C2 * L2 * F2, _2 - I2 * C2 * L2 * F2, M2 + w2 * C2 * L2 * F2, _2 + I2 * C2 * L2 * F2, X, true), m2 = !m2, T2 += p2 * F2;
        }
      },
      convertPolygonToPath: function() {
        var h = Math.floor(this.pt.v), p2 = Math.PI * 2 / h, m2 = this.or.v, b2 = this.os.v, E = 2 * Math.PI * m2 / (h * 4), x2, S2 = -Math.PI * 0.5, O2 = this.data.d === 3 ? -1 : 1;
        for (S2 += this.r.v, this.v._length = 0, x2 = 0; x2 < h; x2 += 1) {
          var j = m2 * Math.cos(S2), X = m2 * Math.sin(S2), Y = j === 0 && X === 0 ? 0 : X / Math.sqrt(j * j + X * X), L2 = j === 0 && X === 0 ? 0 : -j / Math.sqrt(j * j + X * X);
          j += +this.p.v[0], X += +this.p.v[1], this.v.setTripleAt(j, X, j - Y * E * b2 * O2, X - L2 * E * b2 * O2, j + Y * E * b2 * O2, X + L2 * E * b2 * O2, x2, true), S2 += p2 * O2;
        }
        this.paths.length = 0, this.paths[0] = this.v;
      }
    }, st([_t], l), l;
  })(), c = (function() {
    function l(h, p2) {
      this.v = gt.newElement(), this.v.c = true, this.localShapeCollection = me.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = h, this.comp = h.comp, this.frameId = -1, this.d = p2.d, this.initDynamicPropertyContainer(h), this.p = N.getProp(h, p2.p, 1, 0, this), this.s = N.getProp(h, p2.s, 1, 0, this), this.r = N.getProp(h, p2.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
    }
    return l.prototype = {
      convertRectToPath: function() {
        var h = this.p.v[0], p2 = this.p.v[1], m2 = this.s.v[0] / 2, b2 = this.s.v[1] / 2, E = Ar(m2, b2, this.r.v), x2 = E * (1 - Ut);
        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + m2, p2 - b2 + E, h + m2, p2 - b2 + E, h + m2, p2 - b2 + x2, 0, true), this.v.setTripleAt(h + m2, p2 + b2 - E, h + m2, p2 + b2 - x2, h + m2, p2 + b2 - E, 1, true), E !== 0 ? (this.v.setTripleAt(h + m2 - E, p2 + b2, h + m2 - E, p2 + b2, h + m2 - x2, p2 + b2, 2, true), this.v.setTripleAt(h - m2 + E, p2 + b2, h - m2 + x2, p2 + b2, h - m2 + E, p2 + b2, 3, true), this.v.setTripleAt(h - m2, p2 + b2 - E, h - m2, p2 + b2 - E, h - m2, p2 + b2 - x2, 4, true), this.v.setTripleAt(h - m2, p2 - b2 + E, h - m2, p2 - b2 + x2, h - m2, p2 - b2 + E, 5, true), this.v.setTripleAt(h - m2 + E, p2 - b2, h - m2 + E, p2 - b2, h - m2 + x2, p2 - b2, 6, true), this.v.setTripleAt(h + m2 - E, p2 - b2, h + m2 - x2, p2 - b2, h + m2 - E, p2 - b2, 7, true)) : (this.v.setTripleAt(h - m2, p2 + b2, h - m2 + x2, p2 + b2, h - m2, p2 + b2, 2), this.v.setTripleAt(h - m2, p2 - b2, h - m2, p2 - b2 + x2, h - m2, p2 - b2, 3))) : (this.v.setTripleAt(h + m2, p2 - b2 + E, h + m2, p2 - b2 + x2, h + m2, p2 - b2 + E, 0, true), E !== 0 ? (this.v.setTripleAt(h + m2 - E, p2 - b2, h + m2 - E, p2 - b2, h + m2 - x2, p2 - b2, 1, true), this.v.setTripleAt(h - m2 + E, p2 - b2, h - m2 + x2, p2 - b2, h - m2 + E, p2 - b2, 2, true), this.v.setTripleAt(h - m2, p2 - b2 + E, h - m2, p2 - b2 + E, h - m2, p2 - b2 + x2, 3, true), this.v.setTripleAt(h - m2, p2 + b2 - E, h - m2, p2 + b2 - x2, h - m2, p2 + b2 - E, 4, true), this.v.setTripleAt(h - m2 + E, p2 + b2, h - m2 + E, p2 + b2, h - m2 + x2, p2 + b2, 5, true), this.v.setTripleAt(h + m2 - E, p2 + b2, h + m2 - x2, p2 + b2, h + m2 - E, p2 + b2, 6, true), this.v.setTripleAt(h + m2, p2 + b2 - E, h + m2, p2 + b2 - E, h + m2, p2 + b2 - x2, 7, true)) : (this.v.setTripleAt(h - m2, p2 - b2, h - m2 + x2, p2 - b2, h - m2, p2 - b2, 1, true), this.v.setTripleAt(h - m2, p2 + b2, h - m2, p2 + b2 - x2, h - m2, p2 + b2, 2, true), this.v.setTripleAt(h + m2, p2 + b2, h + m2 - x2, p2 + b2, h + m2, p2 + b2, 3, true)));
      },
      getValue: function() {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
      },
      reset: s
    }, st([_t], l), l;
  })();
  function v2(l, h, p2) {
    var m2;
    if (p2 === 3 || p2 === 4) {
      var b2 = p2 === 3 ? h.pt : h.ks, E = b2.k;
      E.length ? m2 = new u2(l, h, p2) : m2 = new f(l, h, p2);
    } else p2 === 5 ? m2 = new c(l, h) : p2 === 6 ? m2 = new y2(l, h) : p2 === 7 && (m2 = new P2(l, h));
    return m2.k && l.addDynamicProperty(m2), m2;
  }
  function g2() {
    return f;
  }
  function d3() {
    return u2;
  }
  var k2 = {};
  return k2.getShapeProp = v2, k2.getConstructorFunction = g2, k2.getKeyframedConstructorFunction = d3, k2;
})();
var ut = /* @__PURE__ */ (function() {
  var t = Math.cos, e = Math.sin, i = Math.tan, s = Math.round;
  function r2() {
    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
  }
  function a(_2) {
    if (_2 === 0)
      return this;
    var w2 = t(_2), I2 = e(_2);
    return this._t(w2, -I2, 0, 0, I2, w2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  function n(_2) {
    if (_2 === 0)
      return this;
    var w2 = t(_2), I2 = e(_2);
    return this._t(1, 0, 0, 0, 0, w2, -I2, 0, 0, I2, w2, 0, 0, 0, 0, 1);
  }
  function f(_2) {
    if (_2 === 0)
      return this;
    var w2 = t(_2), I2 = e(_2);
    return this._t(w2, 0, I2, 0, 0, 1, 0, 0, -I2, 0, w2, 0, 0, 0, 0, 1);
  }
  function o2(_2) {
    if (_2 === 0)
      return this;
    var w2 = t(_2), I2 = e(_2);
    return this._t(w2, -I2, 0, 0, I2, w2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  function u2(_2, w2) {
    return this._t(1, w2, _2, 1, 0, 0);
  }
  function y2(_2, w2) {
    return this.shear(i(_2), i(w2));
  }
  function P2(_2, w2) {
    var I2 = t(w2), z = e(w2);
    return this._t(I2, z, 0, 0, -z, I2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(_2), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(I2, -z, 0, 0, z, I2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  function c(_2, w2, I2) {
    return !I2 && I2 !== 0 && (I2 = 1), _2 === 1 && w2 === 1 && I2 === 1 ? this : this._t(_2, 0, 0, 0, 0, w2, 0, 0, 0, 0, I2, 0, 0, 0, 0, 1);
  }
  function v2(_2, w2, I2, z, nt, Q, pt, A2, D2, R2, q2, V2, W, Z, K, ot) {
    return this.props[0] = _2, this.props[1] = w2, this.props[2] = I2, this.props[3] = z, this.props[4] = nt, this.props[5] = Q, this.props[6] = pt, this.props[7] = A2, this.props[8] = D2, this.props[9] = R2, this.props[10] = q2, this.props[11] = V2, this.props[12] = W, this.props[13] = Z, this.props[14] = K, this.props[15] = ot, this;
  }
  function g2(_2, w2, I2) {
    return I2 = I2 || 0, _2 !== 0 || w2 !== 0 || I2 !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, _2, w2, I2, 1) : this;
  }
  function d3(_2, w2, I2, z, nt, Q, pt, A2, D2, R2, q2, V2, W, Z, K, ot) {
    var H = this.props;
    if (_2 === 1 && w2 === 0 && I2 === 0 && z === 0 && nt === 0 && Q === 1 && pt === 0 && A2 === 0 && D2 === 0 && R2 === 0 && q2 === 1 && V2 === 0)
      return H[12] = H[12] * _2 + H[15] * W, H[13] = H[13] * Q + H[15] * Z, H[14] = H[14] * q2 + H[15] * K, H[15] *= ot, this._identityCalculated = false, this;
    var jt = H[0], ct = H[1], he = H[2], le = H[3], pe = H[4], fe = H[5], ue = H[6], qt = H[7], Zt = H[8], Ht = H[9], Jt = H[10], Kt = H[11], Qt = H[12], te = H[13], ee = H[14], ie = H[15];
    return H[0] = jt * _2 + ct * nt + he * D2 + le * W, H[1] = jt * w2 + ct * Q + he * R2 + le * Z, H[2] = jt * I2 + ct * pt + he * q2 + le * K, H[3] = jt * z + ct * A2 + he * V2 + le * ot, H[4] = pe * _2 + fe * nt + ue * D2 + qt * W, H[5] = pe * w2 + fe * Q + ue * R2 + qt * Z, H[6] = pe * I2 + fe * pt + ue * q2 + qt * K, H[7] = pe * z + fe * A2 + ue * V2 + qt * ot, H[8] = Zt * _2 + Ht * nt + Jt * D2 + Kt * W, H[9] = Zt * w2 + Ht * Q + Jt * R2 + Kt * Z, H[10] = Zt * I2 + Ht * pt + Jt * q2 + Kt * K, H[11] = Zt * z + Ht * A2 + Jt * V2 + Kt * ot, H[12] = Qt * _2 + te * nt + ee * D2 + ie * W, H[13] = Qt * w2 + te * Q + ee * R2 + ie * Z, H[14] = Qt * I2 + te * pt + ee * q2 + ie * K, H[15] = Qt * z + te * A2 + ee * V2 + ie * ot, this._identityCalculated = false, this;
  }
  function k2(_2) {
    var w2 = _2.props;
    return this.transform(
      w2[0],
      w2[1],
      w2[2],
      w2[3],
      w2[4],
      w2[5],
      w2[6],
      w2[7],
      w2[8],
      w2[9],
      w2[10],
      w2[11],
      w2[12],
      w2[13],
      w2[14],
      w2[15]
    );
  }
  function l() {
    return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = true), this._identity;
  }
  function h(_2) {
    for (var w2 = 0; w2 < 16; ) {
      if (_2.props[w2] !== this.props[w2])
        return false;
      w2 += 1;
    }
    return true;
  }
  function p2(_2) {
    var w2;
    for (w2 = 0; w2 < 16; w2 += 1)
      _2.props[w2] = this.props[w2];
    return _2;
  }
  function m2(_2) {
    var w2;
    for (w2 = 0; w2 < 16; w2 += 1)
      this.props[w2] = _2[w2];
  }
  function b2(_2, w2, I2) {
    return {
      x: _2 * this.props[0] + w2 * this.props[4] + I2 * this.props[8] + this.props[12],
      y: _2 * this.props[1] + w2 * this.props[5] + I2 * this.props[9] + this.props[13],
      z: _2 * this.props[2] + w2 * this.props[6] + I2 * this.props[10] + this.props[14]
    };
  }
  function E(_2, w2, I2) {
    return _2 * this.props[0] + w2 * this.props[4] + I2 * this.props[8] + this.props[12];
  }
  function x2(_2, w2, I2) {
    return _2 * this.props[1] + w2 * this.props[5] + I2 * this.props[9] + this.props[13];
  }
  function S2(_2, w2, I2) {
    return _2 * this.props[2] + w2 * this.props[6] + I2 * this.props[10] + this.props[14];
  }
  function O2() {
    var _2 = this.props[0] * this.props[5] - this.props[1] * this.props[4], w2 = this.props[5] / _2, I2 = -this.props[1] / _2, z = -this.props[4] / _2, nt = this.props[0] / _2, Q = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / _2, pt = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / _2, A2 = new ut();
    return A2.props[0] = w2, A2.props[1] = I2, A2.props[4] = z, A2.props[5] = nt, A2.props[12] = Q, A2.props[13] = pt, A2;
  }
  function j(_2) {
    var w2 = this.getInverseMatrix();
    return w2.applyToPointArray(_2[0], _2[1], _2[2] || 0);
  }
  function X(_2) {
    var w2, I2 = _2.length, z = [];
    for (w2 = 0; w2 < I2; w2 += 1)
      z[w2] = j(_2[w2]);
    return z;
  }
  function Y(_2, w2, I2) {
    var z = rt("float32", 6);
    if (this.isIdentity())
      z[0] = _2[0], z[1] = _2[1], z[2] = w2[0], z[3] = w2[1], z[4] = I2[0], z[5] = I2[1];
    else {
      var nt = this.props[0], Q = this.props[1], pt = this.props[4], A2 = this.props[5], D2 = this.props[12], R2 = this.props[13];
      z[0] = _2[0] * nt + _2[1] * pt + D2, z[1] = _2[0] * Q + _2[1] * A2 + R2, z[2] = w2[0] * nt + w2[1] * pt + D2, z[3] = w2[0] * Q + w2[1] * A2 + R2, z[4] = I2[0] * nt + I2[1] * pt + D2, z[5] = I2[0] * Q + I2[1] * A2 + R2;
    }
    return z;
  }
  function L2(_2, w2, I2) {
    var z;
    return this.isIdentity() ? z = [_2, w2, I2] : z = [
      _2 * this.props[0] + w2 * this.props[4] + I2 * this.props[8] + this.props[12],
      _2 * this.props[1] + w2 * this.props[5] + I2 * this.props[9] + this.props[13],
      _2 * this.props[2] + w2 * this.props[6] + I2 * this.props[10] + this.props[14]
    ], z;
  }
  function C2(_2, w2) {
    if (this.isIdentity())
      return _2 + "," + w2;
    var I2 = this.props;
    return Math.round((_2 * I2[0] + w2 * I2[4] + I2[12]) * 100) / 100 + "," + Math.round((_2 * I2[1] + w2 * I2[5] + I2[13]) * 100) / 100;
  }
  function T2() {
    for (var _2 = 0, w2 = this.props, I2 = "matrix3d(", z = 1e4; _2 < 16; )
      I2 += s(w2[_2] * z) / z, I2 += _2 === 15 ? ")" : ",", _2 += 1;
    return I2;
  }
  function F2(_2) {
    var w2 = 1e4;
    return _2 < 1e-6 && _2 > 0 || _2 > -1e-6 && _2 < 0 ? s(_2 * w2) / w2 : _2;
  }
  function M2() {
    var _2 = this.props, w2 = F2(_2[0]), I2 = F2(_2[1]), z = F2(_2[4]), nt = F2(_2[5]), Q = F2(_2[12]), pt = F2(_2[13]);
    return "matrix(" + w2 + "," + I2 + "," + z + "," + nt + "," + Q + "," + pt + ")";
  }
  return function() {
    this.reset = r2, this.rotate = a, this.rotateX = n, this.rotateY = f, this.rotateZ = o2, this.skew = y2, this.skewFromAxis = P2, this.shear = u2, this.scale = c, this.setTransform = v2, this.translate = g2, this.transform = d3, this.multiply = k2, this.applyToPoint = b2, this.applyToX = E, this.applyToY = x2, this.applyToZ = S2, this.applyToPointArray = L2, this.applyToTriplePoints = Y, this.applyToPointStringified = C2, this.toCSS = T2, this.to2dCSS = M2, this.clone = p2, this.cloneFromProps = m2, this.equals = h, this.inversePoints = X, this.inversePoint = j, this.getInverseMatrix = O2, this._t = this.transform, this.isIdentity = l, this._identity = true, this._identityCalculated = false, this.props = rt("float32", 16), this.reset();
  };
})();
var ht = {};
function Xr(t) {
  Tr(t);
}
function Ur() {
  Pt.searchAnimations();
}
function Wr(t) {
  xr(t);
}
function $r(t) {
  Ir(t);
}
function Yr(t) {
  return Pt.loadAnimation(t);
}
function Zr(t) {
  if (typeof t == "string")
    switch (t) {
      case "high":
        Be(200);
        break;
      default:
      case "medium":
        Be(50);
        break;
      case "low":
        Be(10);
        break;
    }
  else !isNaN(t) && t > 1 && Be(t);
}
function Jr() {
  return typeof navigator < "u";
}
function Kr(t, e) {
  t === "expressions" && _s(e);
}
function Qr(t) {
  switch (t) {
    case "propertyFactory":
      return N;
    case "shapePropertyFactory":
      return Wt;
    case "matrix":
      return ut;
    default:
      return null;
  }
}
ht.play = Pt.play;
ht.pause = Pt.pause;
ht.setLocationHref = Xr;
ht.togglePause = Pt.togglePause;
ht.setSpeed = Pt.setSpeed;
ht.setDirection = Pt.setDirection;
ht.stop = Pt.stop;
ht.searchAnimations = Ur;
ht.registerAnimation = Pt.registerAnimation;
ht.loadAnimation = Yr;
ht.setSubframeRendering = Wr;
ht.resize = Pt.resize;
ht.goToAndStop = Pt.goToAndStop;
ht.destroy = Pt.destroy;
ht.setQuality = Zr;
ht.inBrowser = Jr;
ht.installPlugin = Kr;
ht.freeze = Pt.freeze;
ht.unfreeze = Pt.unfreeze;
ht.getRegisteredAnimations = Pt.getRegisteredAnimations;
ht.setIDPrefix = $r;
ht.__getFactory = Qr;
ht.version = "[[BM_VERSION]]";
var $t = (function() {
  var t = {}, e = {};
  t.registerModifier = i, t.getModifier = s;
  function i(r2, a) {
    e[r2] || (e[r2] = a);
  }
  function s(r2, a, n) {
    return new e[r2](a, n);
  }
  return t;
})();
function xt() {
}
xt.prototype.initModifierProperties = function() {
};
xt.prototype.addShapeToModifier = function() {
};
xt.prototype.addShape = function(t) {
  if (!this.closed) {
    t.sh.container.addDynamicProperty(t.sh);
    var e = { shape: t.sh, data: t, localShapeCollection: me.newShapeCollection() };
    this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
  }
};
xt.prototype.init = function(t, e) {
  this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = He, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
};
xt.prototype.processKeys = function() {
  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
};
st([_t], xt);
function Mt() {
}
st([xt], Mt);
Mt.prototype.initModifierProperties = function(t, e) {
  this.s = N.getProp(t, e.s, 0, 0.01, this), this.e = N.getProp(t, e.e, 0, 0.01, this), this.o = N.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
};
Mt.prototype.addShapeToModifier = function(t) {
  t.pathsData = [];
};
Mt.prototype.calculateShapeEdges = function(t, e, i, s, r2) {
  var a = [];
  e <= 1 ? a.push({
    s: t,
    e
  }) : t >= 1 ? a.push({
    s: t - 1,
    e: e - 1
  }) : (a.push({
    s: t,
    e: 1
  }), a.push({
    s: 0,
    e: e - 1
  }));
  var n = [], f, o2 = a.length, u2;
  for (f = 0; f < o2; f += 1)
    if (u2 = a[f], !(u2.e * r2 < s || u2.s * r2 > s + i)) {
      var y2, P2;
      u2.s * r2 <= s ? y2 = 0 : y2 = (u2.s * r2 - s) / i, u2.e * r2 >= s + i ? P2 = 1 : P2 = (u2.e * r2 - s) / i, n.push([y2, P2]);
    }
  return n.length || n.push([0, 0]), n;
};
Mt.prototype.releasePathsData = function(t) {
  var e, i = t.length;
  for (e = 0; e < i; e += 1)
    ws.release(t[e]);
  return t.length = 0, t;
};
Mt.prototype.processShapes = function(t) {
  var e, i;
  if (this._mdf || t) {
    var s = this.o.v % 360 / 360;
    if (s < 0 && (s += 1), this.s.v > 1 ? e = 1 + s : this.s.v < 0 ? e = 0 + s : e = this.s.v + s, this.e.v > 1 ? i = 1 + s : this.e.v < 0 ? i = 0 + s : i = this.e.v + s, e > i) {
      var r2 = e;
      e = i, i = r2;
    }
    e = Math.round(e * 1e4) * 1e-4, i = Math.round(i * 1e4) * 1e-4, this.sValue = e, this.eValue = i;
  } else
    e = this.sValue, i = this.eValue;
  var a, n, f = this.shapes.length, o2, u2, y2, P2, c, v2 = 0;
  if (i === e)
    for (n = 0; n < f; n += 1)
      this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = true, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
  else if (i === 1 && e === 0 || i === 0 && e === 1) {
    if (this._mdf)
      for (n = 0; n < f; n += 1)
        this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = true;
  } else {
    var g2 = [], d3, k2;
    for (n = 0; n < f; n += 1)
      if (d3 = this.shapes[n], !d3.shape._mdf && !this._mdf && !t && this.m !== 2)
        d3.shape.paths = d3.localShapeCollection;
      else {
        if (a = d3.shape.paths, u2 = a._length, c = 0, !d3.shape._mdf && d3.pathsData.length)
          c = d3.totalShapeLength;
        else {
          for (y2 = this.releasePathsData(d3.pathsData), o2 = 0; o2 < u2; o2 += 1)
            P2 = Lt.getSegmentsLength(a.shapes[o2]), y2.push(P2), c += P2.totalLength;
          d3.totalShapeLength = c, d3.pathsData = y2;
        }
        v2 += c, d3.shape._mdf = true;
      }
    var l = e, h = i, p2 = 0, m2;
    for (n = f - 1; n >= 0; n -= 1)
      if (d3 = this.shapes[n], d3.shape._mdf) {
        for (k2 = d3.localShapeCollection, k2.releaseShapes(), this.m === 2 && f > 1 ? (m2 = this.calculateShapeEdges(e, i, d3.totalShapeLength, p2, v2), p2 += d3.totalShapeLength) : m2 = [[l, h]], u2 = m2.length, o2 = 0; o2 < u2; o2 += 1) {
          l = m2[o2][0], h = m2[o2][1], g2.length = 0, h <= 1 ? g2.push({
            s: d3.totalShapeLength * l,
            e: d3.totalShapeLength * h
          }) : l >= 1 ? g2.push({
            s: d3.totalShapeLength * (l - 1),
            e: d3.totalShapeLength * (h - 1)
          }) : (g2.push({
            s: d3.totalShapeLength * l,
            e: d3.totalShapeLength
          }), g2.push({
            s: 0,
            e: d3.totalShapeLength * (h - 1)
          }));
          var b2 = this.addShapes(d3, g2[0]);
          if (g2[0].s !== g2[0].e) {
            if (g2.length > 1) {
              var E = d3.shape.paths.shapes[d3.shape.paths._length - 1];
              if (E.c) {
                var x2 = b2.pop();
                this.addPaths(b2, k2), b2 = this.addShapes(d3, g2[1], x2);
              } else
                this.addPaths(b2, k2), b2 = this.addShapes(d3, g2[1]);
            }
            this.addPaths(b2, k2);
          }
        }
        d3.shape.paths = k2;
      }
  }
};
Mt.prototype.addPaths = function(t, e) {
  var i, s = t.length;
  for (i = 0; i < s; i += 1)
    e.addShape(t[i]);
};
Mt.prototype.addSegment = function(t, e, i, s, r2, a, n) {
  r2.setXYAt(e[0], e[1], "o", a), r2.setXYAt(i[0], i[1], "i", a + 1), n && r2.setXYAt(t[0], t[1], "v", a), r2.setXYAt(s[0], s[1], "v", a + 1);
};
Mt.prototype.addSegmentFromArray = function(t, e, i, s) {
  e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
};
Mt.prototype.addShapes = function(t, e, i) {
  var s = t.pathsData, r2 = t.shape.paths.shapes, a, n = t.shape.paths._length, f, o2, u2 = 0, y2, P2, c, v2, g2 = [], d3, k2 = true;
  for (i ? (P2 = i._length, d3 = i._length) : (i = gt.newElement(), P2 = 0, d3 = 0), g2.push(i), a = 0; a < n; a += 1) {
    for (c = s[a].lengths, i.c = r2[a].c, o2 = r2[a].c ? c.length : c.length + 1, f = 1; f < o2; f += 1)
      if (y2 = c[f - 1], u2 + y2.addedLength < e.s)
        u2 += y2.addedLength, i.c = false;
      else if (u2 > e.e) {
        i.c = false;
        break;
      } else
        e.s <= u2 && e.e >= u2 + y2.addedLength ? (this.addSegment(r2[a].v[f - 1], r2[a].o[f - 1], r2[a].i[f], r2[a].v[f], i, P2, k2), k2 = false) : (v2 = Lt.getNewSegment(r2[a].v[f - 1], r2[a].v[f], r2[a].o[f - 1], r2[a].i[f], (e.s - u2) / y2.addedLength, (e.e - u2) / y2.addedLength, c[f - 1]), this.addSegmentFromArray(v2, i, P2, k2), k2 = false, i.c = false), u2 += y2.addedLength, P2 += 1;
    if (r2[a].c && c.length) {
      if (y2 = c[f - 1], u2 <= e.e) {
        var l = c[f - 1].addedLength;
        e.s <= u2 && e.e >= u2 + l ? (this.addSegment(r2[a].v[f - 1], r2[a].o[f - 1], r2[a].i[0], r2[a].v[0], i, P2, k2), k2 = false) : (v2 = Lt.getNewSegment(r2[a].v[f - 1], r2[a].v[0], r2[a].o[f - 1], r2[a].i[0], (e.s - u2) / l, (e.e - u2) / l, c[f - 1]), this.addSegmentFromArray(v2, i, P2, k2), k2 = false, i.c = false);
      } else
        i.c = false;
      u2 += y2.addedLength, P2 += 1;
    }
    if (i._length && (i.setXYAt(i.v[d3][0], i.v[d3][1], "i", d3), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), u2 > e.e)
      break;
    a < n - 1 && (i = gt.newElement(), k2 = true, g2.push(i), P2 = 0);
  }
  return g2;
};
function Me() {
}
st([xt], Me);
Me.prototype.initModifierProperties = function(t, e) {
  this.getValue = this.processKeys, this.amount = N.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
};
Me.prototype.processPath = function(t, e) {
  var i = e / 100, s = [0, 0], r2 = t._length, a = 0;
  for (a = 0; a < r2; a += 1)
    s[0] += t.v[a][0], s[1] += t.v[a][1];
  s[0] /= r2, s[1] /= r2;
  var n = gt.newElement();
  n.c = t.c;
  var f, o2, u2, y2, P2, c;
  for (a = 0; a < r2; a += 1)
    f = t.v[a][0] + (s[0] - t.v[a][0]) * i, o2 = t.v[a][1] + (s[1] - t.v[a][1]) * i, u2 = t.o[a][0] + (s[0] - t.o[a][0]) * -i, y2 = t.o[a][1] + (s[1] - t.o[a][1]) * -i, P2 = t.i[a][0] + (s[0] - t.i[a][0]) * -i, c = t.i[a][1] + (s[1] - t.i[a][1]) * -i, n.setTripleAt(f, o2, u2, y2, P2, c, a);
  return n;
};
Me.prototype.processShapes = function(t) {
  var e, i, s = this.shapes.length, r2, a, n = this.amount.v;
  if (n !== 0) {
    var f, o2;
    for (i = 0; i < s; i += 1) {
      if (f = this.shapes[i], o2 = f.localShapeCollection, !(!f.shape._mdf && !this._mdf && !t))
        for (o2.releaseShapes(), f.shape._mdf = true, e = f.shape.paths.shapes, a = f.shape.paths._length, r2 = 0; r2 < a; r2 += 1)
          o2.addShape(this.processPath(e[r2], n));
      f.shape.paths = f.localShapeCollection;
    }
  }
  this.dynamicProperties.length || (this._mdf = false);
};
var De = (function() {
  var t = [0, 0];
  function e(o2) {
    var u2 = this._mdf;
    this.iterateDynamicProperties(), this._mdf = this._mdf || u2, this.a && o2.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o2.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o2.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o2.rotate(-this.r.v) : o2.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o2.translate(this.px.v, this.py.v, -this.pz.v) : o2.translate(this.px.v, this.py.v, 0) : o2.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
  }
  function i(o2) {
    if (this.elem.globalData.frameId !== this.frameId) {
      if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || o2) {
        var u2;
        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
          var y2, P2;
          if (u2 = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
            this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (y2 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / u2, 0), P2 = this.p.getValueAtTime(this.p.keyframes[0].t / u2, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (y2 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / u2, 0), P2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / u2, 0)) : (y2 = this.p.pv, P2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / u2, this.p.offsetTime));
          else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
            y2 = [], P2 = [];
            var c = this.px, v2 = this.py;
            c._caching.lastFrame + c.offsetTime <= c.keyframes[0].t ? (y2[0] = c.getValueAtTime((c.keyframes[0].t + 0.01) / u2, 0), y2[1] = v2.getValueAtTime((v2.keyframes[0].t + 0.01) / u2, 0), P2[0] = c.getValueAtTime(c.keyframes[0].t / u2, 0), P2[1] = v2.getValueAtTime(v2.keyframes[0].t / u2, 0)) : c._caching.lastFrame + c.offsetTime >= c.keyframes[c.keyframes.length - 1].t ? (y2[0] = c.getValueAtTime(c.keyframes[c.keyframes.length - 1].t / u2, 0), y2[1] = v2.getValueAtTime(v2.keyframes[v2.keyframes.length - 1].t / u2, 0), P2[0] = c.getValueAtTime((c.keyframes[c.keyframes.length - 1].t - 0.01) / u2, 0), P2[1] = v2.getValueAtTime((v2.keyframes[v2.keyframes.length - 1].t - 0.01) / u2, 0)) : (y2 = [c.pv, v2.pv], P2[0] = c.getValueAtTime((c._caching.lastFrame + c.offsetTime - 0.01) / u2, c.offsetTime), P2[1] = v2.getValueAtTime((v2._caching.lastFrame + v2.offsetTime - 0.01) / u2, v2.offsetTime));
          } else
            P2 = t, y2 = P2;
          this.v.rotate(-Math.atan2(y2[1] - P2[1], y2[0] - P2[0]));
        }
        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      this.frameId = this.elem.globalData.frameId;
    }
  }
  function s() {
    if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length)
      this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
    else
      return;
    if (!this.s.effectsSequence.length)
      this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
    else
      return;
    if (this.sk)
      if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length)
        this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
      else
        return;
    this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
  }
  function r2() {
  }
  function a(o2) {
    this._addDynamicProperty(o2), this.elem.addDynamicProperty(o2), this._isDirty = true;
  }
  function n(o2, u2, y2) {
    if (this.elem = o2, this.frameId = -1, this.propType = "transform", this.data = u2, this.v = new ut(), this.pre = new ut(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(y2 || o2), u2.p && u2.p.s ? (this.px = N.getProp(o2, u2.p.x, 0, 0, this), this.py = N.getProp(o2, u2.p.y, 0, 0, this), u2.p.z && (this.pz = N.getProp(o2, u2.p.z, 0, 0, this))) : this.p = N.getProp(o2, u2.p || { k: [0, 0, 0] }, 1, 0, this), u2.rx) {
      if (this.rx = N.getProp(o2, u2.rx, 0, lt, this), this.ry = N.getProp(o2, u2.ry, 0, lt, this), this.rz = N.getProp(o2, u2.rz, 0, lt, this), u2.or.k[0].ti) {
        var P2, c = u2.or.k.length;
        for (P2 = 0; P2 < c; P2 += 1)
          u2.or.k[P2].to = null, u2.or.k[P2].ti = null;
      }
      this.or = N.getProp(o2, u2.or, 1, lt, this), this.or.sh = true;
    } else
      this.r = N.getProp(o2, u2.r || { k: 0 }, 0, lt, this);
    u2.sk && (this.sk = N.getProp(o2, u2.sk, 0, lt, this), this.sa = N.getProp(o2, u2.sa, 0, lt, this)), this.a = N.getProp(o2, u2.a || { k: [0, 0, 0] }, 1, 0, this), this.s = N.getProp(o2, u2.s || { k: [100, 100, 100] }, 1, 0.01, this), u2.o ? this.o = N.getProp(o2, u2.o, 0, 0.01, o2) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
  }
  n.prototype = {
    applyToMatrix: e,
    getValue: i,
    precalculateMatrix: s,
    autoOrient: r2
  }, st([_t], n), n.prototype.addDynamicProperty = a, n.prototype._addDynamicProperty = _t.prototype.addDynamicProperty;
  function f(o2, u2, y2) {
    return new n(o2, u2, y2);
  }
  return {
    getTransformProperty: f
  };
})();
function Rt() {
}
st([xt], Rt);
Rt.prototype.initModifierProperties = function(t, e) {
  this.getValue = this.processKeys, this.c = N.getProp(t, e.c, 0, null, this), this.o = N.getProp(t, e.o, 0, null, this), this.tr = De.getTransformProperty(t, e.tr, this), this.so = N.getProp(t, e.tr.so, 0, 0.01, this), this.eo = N.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new ut(), this.rMatrix = new ut(), this.sMatrix = new ut(), this.tMatrix = new ut(), this.matrix = new ut();
};
Rt.prototype.applyTransforms = function(t, e, i, s, r2, a) {
  var n = a ? -1 : 1, f = s.s.v[0] + (1 - s.s.v[0]) * (1 - r2), o2 = s.s.v[1] + (1 - s.s.v[1]) * (1 - r2);
  t.translate(s.p.v[0] * n * r2, s.p.v[1] * n * r2, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * n * r2), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(a ? 1 / f : f, a ? 1 / o2 : o2), i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
};
Rt.prototype.init = function(t, e, i, s) {
  for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0; )
    i -= 1, this._elements.unshift(e[i]);
  this.dynamicProperties.length ? this.k = true : this.getValue(true);
};
Rt.prototype.resetElements = function(t) {
  var e, i = t.length;
  for (e = 0; e < i; e += 1)
    t[e]._processed = false, t[e].ty === "gr" && this.resetElements(t[e].it);
};
Rt.prototype.cloneElements = function(t) {
  var e = JSON.parse(JSON.stringify(t));
  return this.resetElements(e), e;
};
Rt.prototype.changeGroupRender = function(t, e) {
  var i, s = t.length;
  for (i = 0; i < s; i += 1)
    t[i]._render = e, t[i].ty === "gr" && this.changeGroupRender(t[i].it, e);
};
Rt.prototype.processShapes = function(t) {
  var e, i, s, r2, a, n = false;
  if (this._mdf || t) {
    var f = Math.ceil(this.c.v);
    if (this._groups.length < f) {
      for (; this._groups.length < f; ) {
        var o2 = {
          it: this.cloneElements(this._elements),
          ty: "gr"
        };
        o2.it.push({
          a: { a: 0, ix: 1, k: [0, 0] },
          nm: "Transform",
          o: { a: 0, ix: 7, k: 100 },
          p: { a: 0, ix: 2, k: [0, 0] },
          r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] },
          s: { a: 0, ix: 3, k: [100, 100] },
          sa: { a: 0, ix: 5, k: 0 },
          sk: { a: 0, ix: 4, k: 0 },
          ty: "tr"
        }), this.arr.splice(0, 0, o2), this._groups.splice(0, 0, o2), this._currentCopies += 1;
      }
      this.elem.reloadShapes(), n = true;
    }
    a = 0;
    var u2;
    for (s = 0; s <= this._groups.length - 1; s += 1) {
      if (u2 = a < f, this._groups[s]._render = u2, this.changeGroupRender(this._groups[s].it, u2), !u2) {
        var y2 = this.elemsData[s].it, P2 = y2[y2.length - 1];
        P2.transform.op.v !== 0 ? (P2.transform.op._mdf = true, P2.transform.op.v = 0) : P2.transform.op._mdf = false;
      }
      a += 1;
    }
    this._currentCopies = f;
    var c = this.o.v, v2 = c % 1, g2 = c > 0 ? Math.floor(c) : Math.ceil(c), d3 = this.pMatrix.props, k2 = this.rMatrix.props, l = this.sMatrix.props;
    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
    var h = 0;
    if (c > 0) {
      for (; h < g2; )
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), h += 1;
      v2 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, v2, false), h += v2);
    } else if (c < 0) {
      for (; h > g2; )
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), h -= 1;
      v2 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -v2, true), h -= v2);
    }
    s = this.data.m === 1 ? 0 : this._currentCopies - 1, r2 = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
    for (var p2, m2; a; ) {
      if (e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, m2 = i.length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), h !== 0) {
        for ((s !== 0 && r2 === 1 || s !== this._currentCopies - 1 && r2 === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(k2[0], k2[1], k2[2], k2[3], k2[4], k2[5], k2[6], k2[7], k2[8], k2[9], k2[10], k2[11], k2[12], k2[13], k2[14], k2[15]), this.matrix.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], l[12], l[13], l[14], l[15]), this.matrix.transform(d3[0], d3[1], d3[2], d3[3], d3[4], d3[5], d3[6], d3[7], d3[8], d3[9], d3[10], d3[11], d3[12], d3[13], d3[14], d3[15]), p2 = 0; p2 < m2; p2 += 1)
          i[p2] = this.matrix.props[p2];
        this.matrix.reset();
      } else
        for (this.matrix.reset(), p2 = 0; p2 < m2; p2 += 1)
          i[p2] = this.matrix.props[p2];
      h += 1, a -= 1, s += r2;
    }
  } else
    for (a = this._currentCopies, s = 0, r2 = 1; a; )
      e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, a -= 1, s += r2;
  return n;
};
Rt.prototype.addShape = function() {
};
function Ie() {
}
st([xt], Ie);
Ie.prototype.initModifierProperties = function(t, e) {
  this.getValue = this.processKeys, this.rd = N.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
};
Ie.prototype.processPath = function(t, e) {
  var i = gt.newElement();
  i.c = t.c;
  var s, r2 = t._length, a, n, f, o2, u2, y2, P2 = 0, c, v2, g2, d3, k2, l;
  for (s = 0; s < r2; s += 1)
    a = t.v[s], f = t.o[s], n = t.i[s], a[0] === f[0] && a[1] === f[1] && a[0] === n[0] && a[1] === n[1] ? (s === 0 || s === r2 - 1) && !t.c ? (i.setTripleAt(a[0], a[1], f[0], f[1], n[0], n[1], P2), P2 += 1) : (s === 0 ? o2 = t.v[r2 - 1] : o2 = t.v[s - 1], u2 = Math.sqrt(Math.pow(a[0] - o2[0], 2) + Math.pow(a[1] - o2[1], 2)), y2 = u2 ? Math.min(u2 / 2, e) / u2 : 0, k2 = a[0] + (o2[0] - a[0]) * y2, c = k2, l = a[1] - (a[1] - o2[1]) * y2, v2 = l, g2 = c - (c - a[0]) * Ut, d3 = v2 - (v2 - a[1]) * Ut, i.setTripleAt(c, v2, g2, d3, k2, l, P2), P2 += 1, s === r2 - 1 ? o2 = t.v[0] : o2 = t.v[s + 1], u2 = Math.sqrt(Math.pow(a[0] - o2[0], 2) + Math.pow(a[1] - o2[1], 2)), y2 = u2 ? Math.min(u2 / 2, e) / u2 : 0, g2 = a[0] + (o2[0] - a[0]) * y2, c = g2, d3 = a[1] + (o2[1] - a[1]) * y2, v2 = d3, k2 = c - (c - a[0]) * Ut, l = v2 - (v2 - a[1]) * Ut, i.setTripleAt(c, v2, g2, d3, k2, l, P2), P2 += 1) : (i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], P2), P2 += 1);
  return i;
};
Ie.prototype.processShapes = function(t) {
  var e, i, s = this.shapes.length, r2, a, n = this.rd.v;
  if (n !== 0) {
    var f, o2;
    for (i = 0; i < s; i += 1) {
      if (f = this.shapes[i], o2 = f.localShapeCollection, !(!f.shape._mdf && !this._mdf && !t))
        for (o2.releaseShapes(), f.shape._mdf = true, e = f.shape.paths.shapes, a = f.shape.paths._length, r2 = 0; r2 < a; r2 += 1)
          o2.addShape(this.processPath(e[r2], n));
      f.shape.paths = f.localShapeCollection;
    }
  }
  this.dynamicProperties.length || (this._mdf = false);
};
function Xe(t, e) {
  return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
}
function di(t) {
  return Math.abs(t) <= 1e-5;
}
function Ki(t, e, i) {
  return t * (1 - i) + e * i;
}
function Xt(t, e, i) {
  return [Ki(t[0], e[0], i), Ki(t[1], e[1], i)];
}
function ta(t, e, i) {
  if (t === 0) return [];
  var s = e * e - 4 * t * i;
  if (s < 0) return [];
  var r2 = -e / (2 * t);
  if (s === 0) return [r2];
  var a = Math.sqrt(s) / (2 * t);
  return [r2 - a, r2 + a];
}
function Qi(t, e, i, s) {
  return [
    -t + 3 * e - 3 * i + s,
    3 * t - 6 * e + 3 * i,
    -3 * t + 3 * e,
    t
  ];
}
function ts(t) {
  return new ft(t, t, t, t, false);
}
function ft(t, e, i, s, r2) {
  r2 && ge(t, e) && (e = Xt(t, s, 1 / 3)), r2 && ge(i, s) && (i = Xt(t, s, 2 / 3));
  var a = Qi(t[0], e[0], i[0], s[0]), n = Qi(t[1], e[1], i[1], s[1]);
  this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, i, s];
}
ft.prototype.point = function(t) {
  return [
    ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
    ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]
  ];
};
ft.prototype.derivative = function(t) {
  return [
    (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
    (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]
  ];
};
ft.prototype.tangentAngle = function(t) {
  var e = this.derivative(t);
  return Math.atan2(e[1], e[0]);
};
ft.prototype.normalAngle = function(t) {
  var e = this.derivative(t);
  return Math.atan2(e[0], e[1]);
};
ft.prototype.inflectionPoints = function() {
  var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
  if (di(t)) return [];
  var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
  if (i < 0) return [];
  var s = Math.sqrt(i);
  return di(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter(function(r2) {
    return r2 > 0 && r2 < 1;
  });
};
ft.prototype.split = function(t) {
  if (t <= 0) return [ts(this.points[0]), this];
  if (t >= 1) return [this, ts(this.points[this.points.length - 1])];
  var e = Xt(this.points[0], this.points[1], t), i = Xt(this.points[1], this.points[2], t), s = Xt(this.points[2], this.points[3], t), r2 = Xt(e, i, t), a = Xt(i, s, t), n = Xt(r2, a, t);
  return [
    new ft(this.points[0], e, r2, n, true),
    new ft(n, a, s, this.points[3], true)
  ];
};
function es(t, e) {
  var i = t.points[0][e], s = t.points[t.points.length - 1][e];
  if (i > s) {
    var r2 = s;
    s = i, i = r2;
  }
  for (var a = ta(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
    if (a[n] > 0 && a[n] < 1) {
      var f = t.point(a[n])[e];
      f < i ? i = f : f > s && (s = f);
    }
  return {
    min: i,
    max: s
  };
}
ft.prototype.bounds = function() {
  return {
    x: es(this, 0),
    y: es(this, 1)
  };
};
ft.prototype.boundingBox = function() {
  var t = this.bounds();
  return {
    left: t.x.min,
    right: t.x.max,
    top: t.y.min,
    bottom: t.y.max,
    width: t.x.max - t.x.min,
    height: t.y.max - t.y.min,
    cx: (t.x.max + t.x.min) / 2,
    cy: (t.y.max + t.y.min) / 2
  };
};
function Ue(t, e, i) {
  var s = t.boundingBox();
  return {
    cx: s.cx,
    cy: s.cy,
    width: s.width,
    height: s.height,
    bez: t,
    t: (e + i) / 2,
    t1: e,
    t2: i
  };
}
function is(t) {
  var e = t.bez.split(0.5);
  return [
    Ue(e[0], t.t1, t.t),
    Ue(e[1], t.t, t.t2)
  ];
}
function ea(t, e) {
  return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
}
function Ee(t, e, i, s, r2, a) {
  if (ea(t, e)) {
    if (i >= a || t.width <= s && t.height <= s && e.width <= s && e.height <= s) {
      r2.push([t.t, e.t]);
      return;
    }
    var n = is(t), f = is(e);
    Ee(n[0], f[0], i + 1, s, r2, a), Ee(n[0], f[1], i + 1, s, r2, a), Ee(n[1], f[0], i + 1, s, r2, a), Ee(n[1], f[1], i + 1, s, r2, a);
  }
}
ft.prototype.intersections = function(t, e, i) {
  e === void 0 && (e = 2), i === void 0 && (i = 7);
  var s = [];
  return Ee(Ue(this, 0, 1), Ue(t, 0, 1), 0, e, s, i), s;
};
ft.shapeSegment = function(t, e) {
  var i = (e + 1) % t.length();
  return new ft(t.v[e], t.o[e], t.i[i], t.v[i], true);
};
ft.shapeSegmentInverted = function(t, e) {
  var i = (e + 1) % t.length();
  return new ft(t.v[i], t.i[i], t.o[e], t.v[e], true);
};
function li(t, e) {
  return [
    t[1] * e[2] - t[2] * e[1],
    t[2] * e[0] - t[0] * e[2],
    t[0] * e[1] - t[1] * e[0]
  ];
}
function We(t, e, i, s) {
  var r2 = [t[0], t[1], 1], a = [e[0], e[1], 1], n = [i[0], i[1], 1], f = [s[0], s[1], 1], o2 = li(
    li(r2, a),
    li(n, f)
  );
  return di(o2[2]) ? null : [o2[0] / o2[2], o2[1] / o2[2]];
}
function de(t, e, i) {
  return [
    t[0] + Math.cos(e) * i,
    t[1] - Math.sin(e) * i
  ];
}
function pi(t, e) {
  return Math.hypot(t[0] - e[0], t[1] - e[1]);
}
function ge(t, e) {
  return Xe(t[0], e[0]) && Xe(t[1], e[1]);
}
function Te() {
}
st([xt], Te);
Te.prototype.initModifierProperties = function(t, e) {
  this.getValue = this.processKeys, this.amplitude = N.getProp(t, e.s, 0, null, this), this.frequency = N.getProp(t, e.r, 0, null, this), this.pointsType = N.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
};
function Ds(t, e, i, s, r2, a, n) {
  var f = i - Math.PI / 2, o2 = i + Math.PI / 2, u2 = e[0] + Math.cos(i) * s * r2, y2 = e[1] - Math.sin(i) * s * r2;
  t.setTripleAt(
    u2,
    y2,
    u2 + Math.cos(f) * a,
    y2 - Math.sin(f) * a,
    u2 + Math.cos(o2) * n,
    y2 - Math.sin(o2) * n,
    t.length()
  );
}
function ia(t, e) {
  var i = [
    e[0] - t[0],
    e[1] - t[1]
  ], s = -Math.PI * 0.5, r2 = [
    Math.cos(s) * i[0] - Math.sin(s) * i[1],
    Math.sin(s) * i[0] + Math.cos(s) * i[1]
  ];
  return r2;
}
function sa(t, e) {
  var i = e === 0 ? t.length() - 1 : e - 1, s = (e + 1) % t.length(), r2 = t.v[i], a = t.v[s], n = ia(r2, a);
  return Math.atan2(0, 1) - Math.atan2(n[1], n[0]);
}
function ss(t, e, i, s, r2, a, n) {
  var f = sa(e, i), o2 = e.v[i % e._length], u2 = e.v[i === 0 ? e._length - 1 : i - 1], y2 = e.v[(i + 1) % e._length], P2 = a === 2 ? Math.sqrt(Math.pow(o2[0] - u2[0], 2) + Math.pow(o2[1] - u2[1], 2)) : 0, c = a === 2 ? Math.sqrt(Math.pow(o2[0] - y2[0], 2) + Math.pow(o2[1] - y2[1], 2)) : 0;
  Ds(
    t,
    e.v[i % e._length],
    f,
    n,
    s,
    c / ((r2 + 1) * 2),
    P2 / ((r2 + 1) * 2)
  );
}
function ra(t, e, i, s, r2, a) {
  for (var n = 0; n < s; n += 1) {
    var f = (n + 1) / (s + 1), o2 = r2 === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, u2 = e.normalAngle(f), y2 = e.point(f);
    Ds(
      t,
      y2,
      u2,
      a,
      i,
      o2 / ((s + 1) * 2),
      o2 / ((s + 1) * 2)
    ), a = -a;
  }
  return a;
}
Te.prototype.processPath = function(t, e, i, s) {
  var r2 = t._length, a = gt.newElement();
  if (a.c = t.c, t.c || (r2 -= 1), r2 === 0) return a;
  var n = -1, f = ft.shapeSegment(t, 0);
  ss(a, t, 0, e, i, s, n);
  for (var o2 = 0; o2 < r2; o2 += 1)
    n = ra(a, f, e, i, s, -n), o2 === r2 - 1 && !t.c ? f = null : f = ft.shapeSegment(t, (o2 + 1) % r2), ss(a, t, o2 + 1, e, i, s, n);
  return a;
};
Te.prototype.processShapes = function(t) {
  var e, i, s = this.shapes.length, r2, a, n = this.amplitude.v, f = Math.max(0, Math.round(this.frequency.v)), o2 = this.pointsType.v;
  if (n !== 0) {
    var u2, y2;
    for (i = 0; i < s; i += 1) {
      if (u2 = this.shapes[i], y2 = u2.localShapeCollection, !(!u2.shape._mdf && !this._mdf && !t))
        for (y2.releaseShapes(), u2.shape._mdf = true, e = u2.shape.paths.shapes, a = u2.shape.paths._length, r2 = 0; r2 < a; r2 += 1)
          y2.addShape(this.processPath(e[r2], n, f, o2));
      u2.shape.paths = u2.localShapeCollection;
    }
  }
  this.dynamicProperties.length || (this._mdf = false);
};
function fi(t, e, i) {
  var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
  return [
    de(t, s, i),
    de(e, s, i)
  ];
}
function ce(t, e) {
  var i, s, r2, a, n, f, o2;
  o2 = fi(t.points[0], t.points[1], e), i = o2[0], s = o2[1], o2 = fi(t.points[1], t.points[2], e), r2 = o2[0], a = o2[1], o2 = fi(t.points[2], t.points[3], e), n = o2[0], f = o2[1];
  var u2 = We(i, s, r2, a);
  u2 === null && (u2 = s);
  var y2 = We(n, f, r2, a);
  return y2 === null && (y2 = n), new ft(i, u2, y2, f);
}
function rs(t, e, i, s, r2) {
  var a = e.points[3], n = i.points[0];
  if (s === 3 || ge(a, n)) return a;
  if (s === 2) {
    var f = -e.tangentAngle(1), o2 = -i.tangentAngle(0) + Math.PI, u2 = We(
      a,
      de(a, f + Math.PI / 2, 100),
      n,
      de(n, f + Math.PI / 2, 100)
    ), y2 = u2 ? pi(u2, a) : pi(a, n) / 2, P2 = de(a, f, 2 * y2 * Ut);
    return t.setXYAt(P2[0], P2[1], "o", t.length() - 1), P2 = de(n, o2, 2 * y2 * Ut), t.setTripleAt(n[0], n[1], n[0], n[1], P2[0], P2[1], t.length()), n;
  }
  var c = ge(a, e.points[2]) ? e.points[0] : e.points[2], v2 = ge(n, i.points[1]) ? i.points[3] : i.points[1], g2 = We(c, a, n, v2);
  return g2 && pi(g2, a) < r2 ? (t.setTripleAt(
    g2[0],
    g2[1],
    g2[0],
    g2[1],
    g2[0],
    g2[1],
    t.length()
  ), g2) : a;
}
function as(t, e) {
  const i = t.intersections(e);
  return i.length && Xe(i[0][0], 1) && i.shift(), i.length ? i[0] : null;
}
function ns(t, e) {
  var i = t.slice(), s = e.slice(), r2 = as(t[t.length - 1], e[0]);
  return r2 && (i[t.length - 1] = t[t.length - 1].split(r2[0])[0], s[0] = e[0].split(r2[1])[1]), t.length > 1 && e.length > 1 && (r2 = as(t[0], e[e.length - 1]), r2) ? [
    [t[0].split(r2[0])[0]],
    [e[e.length - 1].split(r2[1])[1]]
  ] : [i, s];
}
function aa(t) {
  for (var e, i = 1; i < t.length; i += 1)
    e = ns(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
  return t.length > 1 && (e = ns(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
}
function os(t, e) {
  var i = t.inflectionPoints(), s, r2, a, n;
  if (i.length === 0)
    return [ce(t, e)];
  if (i.length === 1 || Xe(i[1], 1))
    return a = t.split(i[0]), s = a[0], r2 = a[1], [
      ce(s, e),
      ce(r2, e)
    ];
  a = t.split(i[0]), s = a[0];
  var f = (i[1] - i[0]) / (1 - i[0]);
  return a = a[1].split(f), n = a[0], r2 = a[1], [
    ce(s, e),
    ce(n, e),
    ce(r2, e)
  ];
}
function Fe() {
}
st([xt], Fe);
Fe.prototype.initModifierProperties = function(t, e) {
  this.getValue = this.processKeys, this.amount = N.getProp(t, e.a, 0, null, this), this.miterLimit = N.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
};
Fe.prototype.processPath = function(t, e, i, s) {
  var r2 = gt.newElement();
  r2.c = t.c;
  var a = t.length();
  t.c || (a -= 1);
  var n, f, o2, u2 = [];
  for (n = 0; n < a; n += 1)
    o2 = ft.shapeSegment(t, n), u2.push(os(o2, e));
  if (!t.c)
    for (n = a - 1; n >= 0; n -= 1)
      o2 = ft.shapeSegmentInverted(t, n), u2.push(os(o2, e));
  u2 = aa(u2);
  var y2 = null, P2 = null;
  for (n = 0; n < u2.length; n += 1) {
    var c = u2[n];
    for (P2 && (y2 = rs(r2, P2, c[0], i, s)), P2 = c[c.length - 1], f = 0; f < c.length; f += 1)
      o2 = c[f], y2 && ge(o2.points[0], y2) ? r2.setXYAt(o2.points[1][0], o2.points[1][1], "o", r2.length() - 1) : r2.setTripleAt(
        o2.points[0][0],
        o2.points[0][1],
        o2.points[1][0],
        o2.points[1][1],
        o2.points[0][0],
        o2.points[0][1],
        r2.length()
      ), r2.setTripleAt(
        o2.points[3][0],
        o2.points[3][1],
        o2.points[3][0],
        o2.points[3][1],
        o2.points[2][0],
        o2.points[2][1],
        r2.length()
      ), y2 = o2.points[3];
  }
  return u2.length && rs(r2, P2, u2[0][0], i, s), r2;
};
Fe.prototype.processShapes = function(t) {
  var e, i, s = this.shapes.length, r2, a, n = this.amount.v, f = this.miterLimit.v, o2 = this.lineJoin;
  if (n !== 0) {
    var u2, y2;
    for (i = 0; i < s; i += 1) {
      if (u2 = this.shapes[i], y2 = u2.localShapeCollection, !(!u2.shape._mdf && !this._mdf && !t))
        for (y2.releaseShapes(), u2.shape._mdf = true, e = u2.shape.paths.shapes, a = u2.shape.paths._length, r2 = 0; r2 < a; r2 += 1)
          y2.addShape(this.processPath(e[r2], n, o2, f));
      u2.shape.paths = u2.localShapeCollection;
    }
  }
  this.dynamicProperties.length || (this._mdf = false);
};
var na = "http://www.w3.org/2000/svg";
function B(t) {
  return document.createElementNS(na, t);
}
function St() {
}
St.prototype.checkLayers = function(t) {
  var e, i = this.layers.length, s;
  for (this.completeLayers = true, e = i - 1; e >= 0; e -= 1)
    this.elements[e] || (s = this.layers[e], s.ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : false;
  this.checkPendingElements();
};
St.prototype.createItem = function(t) {
  switch (t.ty) {
    case 0:
      return this.createComp(t);
    case 1:
      return this.createSolid(t);
    case 3:
      return this.createNull(t);
    case 4:
      return this.createShape(t);
    default:
      return this.createNull(t);
  }
};
St.prototype.buildAllItems = function() {
  var t, e = this.layers.length;
  for (t = 0; t < e; t += 1)
    this.buildItem(t);
  this.checkPendingElements();
};
St.prototype.includeLayers = function(t) {
  this.completeLayers = false;
  var e, i = t.length, s, r2 = this.layers.length;
  for (e = 0; e < i; e += 1)
    for (s = 0; s < r2; ) {
      if (this.layers[s].id === t[e].id) {
        this.layers[s] = t[e];
        break;
      }
      s += 1;
    }
};
St.prototype.setProjectInterface = function(t) {
  this.globalData.projectInterface = t;
};
St.prototype.initItems = function() {
  this.globalData.progressiveLoad || this.buildAllItems();
};
St.prototype.buildElementParenting = function(t, e, i) {
  for (var s = this.elements, r2 = this.layers, a = 0, n = r2.length; a < n; )
    r2[a].ind == e && (!s[a] || s[a] === true ? (this.buildItem(a), this.addPendingElement(t)) : (i.push(s[a]), s[a].setAsParent(), r2[a].parent !== void 0 ? this.buildElementParenting(t, r2[a].parent, i) : t.setHierarchy(i))), a += 1;
};
St.prototype.addPendingElement = function(t) {
  this.pendingElements.push(t);
};
St.prototype.searchExtraCompositions = function(t) {
  var e, i = t.length;
  for (e = 0; e < i; e += 1)
    if (t[e].xt) {
      var s = this.createComp(t[e]);
      s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
    }
};
St.prototype.getElementById = function(t) {
  var e, i = this.elements.length;
  for (e = 0; e < i; e += 1)
    if (this.elements[e].data.ind === t)
      return this.elements[e];
  return null;
};
St.prototype.getElementByPath = function(t) {
  var e = t.shift(), i;
  if (typeof e == "number")
    i = this.elements[e];
  else {
    var s, r2 = this.elements.length;
    for (s = 0; s < r2; s += 1)
      if (this.elements[s].data.nm === e) {
        i = this.elements[s];
        break;
      }
  }
  return t.length === 0 ? i : i.getElementByPath(t);
};
St.prototype.setupGlobalData = function(t, e) {
  this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
    w: t.w,
    h: t.h
  };
};
var vi = /* @__PURE__ */ (function() {
  var t = {
    0: "source-over",
    1: "multiply",
    2: "screen",
    3: "overlay",
    4: "darken",
    5: "lighten",
    6: "color-dodge",
    7: "color-burn",
    8: "hard-light",
    9: "soft-light",
    10: "difference",
    11: "exclusion",
    12: "hue",
    13: "saturation",
    14: "color",
    15: "luminosity"
  };
  return function(e) {
    return t[e] || "";
  };
})();
function oa(t, e, i) {
  this.p = N.getProp(e, t.v, 0, 0, i);
}
function ha(t, e, i) {
  this.p = N.getProp(e, t.v, 0, 0, i);
}
function la(t, e, i) {
  this.p = N.getProp(e, t.v, 1, 0, i);
}
function pa(t, e, i) {
  this.p = N.getProp(e, t.v, 1, 0, i);
}
function fa(t, e, i) {
  this.p = N.getProp(e, t.v, 0, 0, i);
}
function ua(t, e, i) {
  this.p = N.getProp(e, t.v, 0, 0, i);
}
function ca(t, e, i) {
  this.p = N.getProp(e, t.v, 0, 0, i);
}
function ma() {
  this.p = {};
}
function Cs(t, e) {
  var i = t.ef || [];
  this.effectElements = [];
  var s, r2 = i.length, a;
  for (s = 0; s < r2; s += 1)
    a = new Ce(i[s], e), this.effectElements.push(a);
}
function Ce(t, e) {
  this.init(t, e);
}
st([_t], Ce);
Ce.prototype.getValue = Ce.prototype.iterateDynamicProperties;
Ce.prototype.init = function(t, e) {
  this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
  var i, s = this.data.ef.length, r2, a = this.data.ef;
  for (i = 0; i < s; i += 1) {
    switch (r2 = null, a[i].ty) {
      case 0:
        r2 = new oa(a[i], e, this);
        break;
      case 1:
        r2 = new ha(a[i], e, this);
        break;
      case 2:
        r2 = new la(a[i], e, this);
        break;
      case 3:
        r2 = new pa(a[i], e, this);
        break;
      case 4:
      case 7:
        r2 = new ca(a[i], e, this);
        break;
      case 10:
        r2 = new fa(a[i], e, this);
        break;
      case 11:
        r2 = new ua(a[i], e, this);
        break;
      case 5:
        r2 = new Cs(a[i], e);
        break;
      // case 6:
      default:
        r2 = new ma(a[i]);
        break;
    }
    r2 && this.effectElements.push(r2);
  }
};
function Ve() {
}
Ve.prototype = {
  checkMasks: function() {
    if (!this.data.hasMask)
      return false;
    for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
      if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== false)
        return true;
      t += 1;
    }
    return false;
  },
  initExpressions: function() {
    const t = Mr();
    if (!t)
      return;
    const e = t("layer"), i = t("effects"), s = t("shape"), r2 = t("comp");
    this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
    var a = i.createEffectsInterface(this, this.layerInterface);
    this.layerInterface.registerEffectsInterface(a), this.data.ty === 0 || this.data.xt ? this.compInterface = r2(this) : this.data.ty === 4 && (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface);
  },
  setBlendMode: function() {
    var t = vi(this.data.bm), e = this.baseElement || this.layerElement;
    e.style["mix-blend-mode"] = t;
  },
  initBaseData: function(t, e, i) {
    this.globalData = e, this.comp = i, this.data = t, this.layerId = vt(), this.data.sr || (this.data.sr = 1), this.effectsManager = new Cs(this.data, this, this.dynamicProperties);
  },
  getType: function() {
    return this.type;
  },
  sourceRectAtTime: function() {
  }
};
var Ms = {
  TRANSFORM_EFFECT: "transformEFfect"
};
function Le() {
}
Le.prototype = {
  initTransform: function() {
    var t = new ut();
    this.finalTransform = {
      mProp: this.data.ks ? De.getTransformProperty(this, this.data.ks, this) : { o: 0 },
      _matMdf: false,
      _localMatMdf: false,
      _opMdf: false,
      mat: t,
      localMat: t,
      localOpacity: 1
    }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
  },
  renderTransform: function() {
    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
      var t, e = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
      if (!this.finalTransform._matMdf)
        for (; i < s; ) {
          if (this.hierarchy[i].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = true;
            break;
          }
          i += 1;
        }
      if (this.finalTransform._matMdf)
        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1)
          e.multiply(this.hierarchy[i].finalTransform.mProp.v);
    }
    (!this.localTransforms || this.finalTransform._matMdf) && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
  },
  renderLocalTransform: function() {
    if (this.localTransforms) {
      var t = 0, e = this.localTransforms.length;
      if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
        for (; t < e; )
          this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = true), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = true), t += 1;
      if (this.finalTransform._localMatMdf) {
        var i = this.finalTransform.localMat;
        for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
          var s = this.localTransforms[t].matrix;
          i.multiply(s);
        }
        i.multiply(this.finalTransform.mat);
      }
      if (this.finalTransform._opMdf) {
        var r2 = this.finalTransform.localOpacity;
        for (t = 0; t < e; t += 1)
          r2 *= this.localTransforms[t].opacity * 0.01;
        this.finalTransform.localOpacity = r2;
      }
    }
  },
  searchEffectTransforms: function() {
    if (this.renderableEffectsManager) {
      var t = this.renderableEffectsManager.getEffects(Ms.TRANSFORM_EFFECT);
      if (t.length) {
        this.localTransforms = [], this.finalTransform.localMat = new ut();
        var e = 0, i = t.length;
        for (e = 0; e < i; e += 1)
          this.localTransforms.push(t[e]);
      }
    }
  },
  globalToLocal: function(t) {
    var e = [];
    e.push(this.finalTransform);
    for (var i = true, s = this.comp; i; )
      s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : i = false;
    var r2, a = e.length, n;
    for (r2 = 0; r2 < a; r2 += 1)
      n = e[r2].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
    return t;
  },
  mHelper: new ut()
};
function oe(t, e, i) {
  this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
  var s = this.globalData.defs, r2, a = this.masksProperties ? this.masksProperties.length : 0;
  this.viewData = mt(a), this.solidPath = "";
  var n, f = this.masksProperties, o2 = 0, u2 = [], y2, P2, c = vt(), v2, g2, d3, k2, l = "clipPath", h = "clip-path";
  for (r2 = 0; r2 < a; r2 += 1)
    if ((f[r2].mode !== "a" && f[r2].mode !== "n" || f[r2].inv || f[r2].o.k !== 100 || f[r2].o.x) && (l = "mask", h = "mask"), (f[r2].mode === "s" || f[r2].mode === "i") && o2 === 0 ? (v2 = B("rect"), v2.setAttribute("fill", "#ffffff"), v2.setAttribute("width", this.element.comp.data.w || 0), v2.setAttribute("height", this.element.comp.data.h || 0), u2.push(v2)) : v2 = null, n = B("path"), f[r2].mode === "n")
      this.viewData[r2] = {
        op: N.getProp(this.element, f[r2].o, 0, 0.01, this.element),
        prop: Wt.getShapeProp(this.element, f[r2], 3),
        elem: n,
        lastPath: ""
      }, s.appendChild(n);
    else {
      o2 += 1, n.setAttribute("fill", f[r2].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
      var p2;
      if (f[r2].x.k !== 0 ? (l = "mask", h = "mask", k2 = N.getProp(this.element, f[r2].x, 0, null, this.element), p2 = vt(), g2 = B("filter"), g2.setAttribute("id", p2), d3 = B("feMorphology"), d3.setAttribute("operator", "erode"), d3.setAttribute("in", "SourceGraphic"), d3.setAttribute("radius", "0"), g2.appendChild(d3), s.appendChild(g2), n.setAttribute("stroke", f[r2].mode === "s" ? "#000000" : "#ffffff")) : (d3 = null, k2 = null), this.storedData[r2] = {
        elem: n,
        x: k2,
        expan: d3,
        lastPath: "",
        lastOperator: "",
        filterId: p2,
        lastRadius: 0
      }, f[r2].mode === "i") {
        P2 = u2.length;
        var m2 = B("g");
        for (y2 = 0; y2 < P2; y2 += 1)
          m2.appendChild(u2[y2]);
        var b2 = B("mask");
        b2.setAttribute("mask-type", "alpha"), b2.setAttribute("id", c + "_" + o2), b2.appendChild(n), s.appendChild(b2), m2.setAttribute("mask", "url(" + At() + "#" + c + "_" + o2 + ")"), u2.length = 0, u2.push(m2);
      } else
        u2.push(n);
      f[r2].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r2] = {
        elem: n,
        lastPath: "",
        op: N.getProp(this.element, f[r2].o, 0, 0.01, this.element),
        prop: Wt.getShapeProp(this.element, f[r2], 3),
        invRect: v2
      }, this.viewData[r2].prop.k || this.drawPath(f[r2], this.viewData[r2].prop.v, this.viewData[r2]);
    }
  for (this.maskElement = B(l), a = u2.length, r2 = 0; r2 < a; r2 += 1)
    this.maskElement.appendChild(u2[r2]);
  o2 > 0 && (this.maskElement.setAttribute("id", c), this.element.maskedElement.setAttribute(h, "url(" + At() + "#" + c + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
}
oe.prototype.getMaskProperty = function(t) {
  return this.viewData[t].prop;
};
oe.prototype.renderFrame = function(t) {
  var e = this.element.finalTransform.mat, i, s = this.masksProperties.length;
  for (i = 0; i < s; i += 1)
    if ((this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), this.masksProperties[i].mode !== "n" && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[i].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || t))) {
      var r2 = this.storedData[i].expan;
      this.storedData[i].x.v < 0 ? (this.storedData[i].lastOperator !== "erode" && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + At() + "#" + this.storedData[i].filterId + ")")), r2.setAttribute("radius", -this.storedData[i].x.v)) : (this.storedData[i].lastOperator !== "dilate" && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2));
    }
};
oe.prototype.getMaskelement = function() {
  return this.maskElement;
};
oe.prototype.createLayerSolidPath = function() {
  var t = "M0,0 ";
  return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
};
oe.prototype.drawPath = function(t, e, i) {
  var s = " M" + e.v[0][0] + "," + e.v[0][1], r2, a;
  for (a = e._length, r2 = 1; r2 < a; r2 += 1)
    s += " C" + e.o[r2 - 1][0] + "," + e.o[r2 - 1][1] + " " + e.i[r2][0] + "," + e.i[r2][1] + " " + e.v[r2][0] + "," + e.v[r2][1];
  if (e.c && a > 1 && (s += " C" + e.o[r2 - 1][0] + "," + e.o[r2 - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
    var n = "";
    i.elem && (e.c && (n = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", n)), i.lastPath = s;
  }
};
oe.prototype.destroy = function() {
  this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
};
var we = (function() {
  var t = {};
  t.createFilter = e, t.createAlphaToLuminanceFilter = i;
  function e(s, r2) {
    var a = B("filter");
    return a.setAttribute("id", s), r2 !== true && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a;
  }
  function i() {
    var s = B("feColorMatrix");
    return s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), s;
  }
  return t;
})();
var hs = (function() {
  var t = {
    maskType: true,
    svgLumaHidden: true,
    offscreenCanvas: typeof OffscreenCanvas < "u"
  };
  return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = false), t;
})();
var Ne = {};
var ls = "filter_result_";
function yi(t) {
  var e, i = "SourceGraphic", s = t.data.ef ? t.data.ef.length : 0, r2 = vt(), a = we.createFilter(r2, true), n = 0;
  this.filters = [];
  var f;
  for (e = 0; e < s; e += 1) {
    f = null;
    var o2 = t.data.ef[e].ty;
    if (Ne[o2]) {
      var u2 = Ne[o2].effect;
      f = new u2(a, t.effectsManager.effectElements[e], t, ls + n, i), i = ls + n, Ne[o2].countsAsEffect && (n += 1);
    }
    f && this.filters.push(f);
  }
  n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + At() + "#" + r2 + ")")), this.filters.length && t.addRenderableComponent(this);
}
yi.prototype.renderFrame = function(t) {
  var e, i = this.filters.length;
  for (e = 0; e < i; e += 1)
    this.filters[e].renderFrame(t);
};
yi.prototype.getEffects = function(t) {
  var e, i = this.filters.length, s = [];
  for (e = 0; e < i; e += 1)
    this.filters[e].type === t && s.push(this.filters[e]);
  return s;
};
function Bt(t, e, i) {
  Ne[t] = {
    effect: e,
    countsAsEffect: i
  };
}
function ii() {
}
ii.prototype = {
  initRendererElement: function() {
    this.layerElement = B("g");
  },
  createContainerElements: function() {
    this.matteElement = B("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
    var t = null;
    if (this.data.td) {
      this.matteMasks = {};
      var e = B("g");
      e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e);
    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
      var i = B("clipPath"), s = B("path");
      s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
      var r2 = vt();
      if (i.setAttribute("id", r2), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
        var a = B("g");
        a.setAttribute("clip-path", "url(" + At() + "#" + r2 + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
      } else
        this.layerElement.setAttribute("clip-path", "url(" + At() + "#" + r2 + ")");
    }
    this.data.bm !== 0 && this.setBlendMode();
  },
  renderElement: function() {
    this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
  },
  destroyBaseElement: function() {
    this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
  },
  getBaseElement: function() {
    return this.data.hd ? null : this.baseElement;
  },
  createRenderableComponents: function() {
    this.maskManager = new oe(this.data, this, this.globalData), this.renderableEffectsManager = new yi(this), this.searchEffectTransforms();
  },
  getMatte: function(t) {
    if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
      var e = this.layerId + "_" + t, i, s, r2, a;
      if (t === 1 || t === 3) {
        var n = B("mask");
        n.setAttribute("id", e), n.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), r2 = B("use"), r2.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(r2), this.globalData.defs.appendChild(n), !hs.maskType && t === 1 && (n.setAttribute("mask-type", "luminance"), i = vt(), s = we.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(we.createAlphaToLuminanceFilter()), a = B("g"), a.appendChild(r2), n.appendChild(a), a.setAttribute("filter", "url(" + At() + "#" + i + ")"));
      } else if (t === 2) {
        const c = this.comp.data.w === this.globalData.compSize.w && this.comp.data.h === this.globalData.compSize.h;
        var f = B("mask");
        f.setAttribute("id", e), f.setAttribute("mask-type", "alpha"), c && f.setAttribute("maskUnits", "userSpaceOnUse");
        var o2 = B("g");
        f.appendChild(o2), i = vt(), s = we.createFilter(i);
        var u2 = B("feComponentTransfer");
        u2.setAttribute("in", "SourceGraphic"), s.appendChild(u2);
        var y2 = B("feFuncA");
        y2.setAttribute("type", "table"), y2.setAttribute("tableValues", "1.0 0.0"), u2.appendChild(y2), this.globalData.defs.appendChild(s);
        var P2 = B("rect");
        P2.setAttribute("width", this.comp.data.w), P2.setAttribute("height", this.comp.data.h), P2.setAttribute("x", "0"), P2.setAttribute("y", "0"), P2.setAttribute("fill", "#ffffff"), P2.setAttribute("opacity", "0"), o2.setAttribute("filter", "url(" + At() + "#" + i + ")"), o2.appendChild(P2), r2 = B("use"), r2.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o2.appendChild(r2), hs.maskType || (f.setAttribute("mask-type", "luminance"), s.appendChild(we.createAlphaToLuminanceFilter()), a = B("g"), o2.appendChild(P2), a.appendChild(this.layerElement), o2.appendChild(a)), this.globalData.defs.appendChild(f);
      }
      this.matteMasks[t] = e;
    }
    return this.matteMasks[t];
  },
  setMatte: function(t) {
    this.matteElement && this.matteElement.setAttribute("mask", "url(" + At() + "#" + t + ")");
  }
};
function Re() {
}
Re.prototype = {
  /**
     * @function
     * Initializes hierarchy properties
     *
     */
  initHierarchy: function() {
    this.hierarchy = [], this._isParent = false, this.checkParenting();
  },
  /**
     * @function
     * Sets layer's hierarchy.
     * @param {array} hierarch
     * layer's parent list
     *
     */
  setHierarchy: function(t) {
    this.hierarchy = t;
  },
  /**
     * @function
     * Sets layer as parent.
     *
     */
  setAsParent: function() {
    this._isParent = true;
  },
  /**
     * @function
     * Searches layer's parenting chain
     *
     */
  checkParenting: function() {
    this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
  }
};
function Oe() {
}
Oe.prototype = {
  /**
     * @function
     * Initializes frame related properties.
     *
     */
  initFrame: function() {
    this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
  },
  /**
     * @function
     * Calculates all dynamic values
     *
     * @param {number} num
     * current frame number in Layer's time
     * @param {boolean} isVisible
     * if layers is currently in range
     *
     */
  prepareProperties: function(t, e) {
    var i, s = this.dynamicProperties.length;
    for (i = 0; i < s; i += 1)
      (e || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = true, this._mdf = true));
  },
  addDynamicProperty: function(t) {
    this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t);
  }
};
function Is() {
}
Is.prototype = {
  initRenderable: function() {
    this.isInRange = false, this.hidden = false, this.isTransparent = false, this.renderableComponents = [];
  },
  addRenderableComponent: function(t) {
    this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t);
  },
  removeRenderableComponent: function(t) {
    this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
  },
  prepareRenderableFrame: function(t) {
    this.checkLayerLimits(t);
  },
  checkTransparency: function() {
    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = true, this.hide()) : this.isTransparent && (this.isTransparent = false, this.show());
  },
  /**
     * @function
     * Initializes frame related properties.
     *
     * @param {number} num
     * current frame number in Layer's time
     *
     */
  checkLayerLimits: function(t) {
    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== true && (this.globalData._mdf = true, this._mdf = true, this.isInRange = true, this.show()) : this.isInRange !== false && (this.globalData._mdf = true, this.isInRange = false, this.hide());
  },
  renderRenderable: function() {
    var t, e = this.renderableComponents.length;
    for (t = 0; t < e; t += 1)
      this.renderableComponents[t].renderFrame(this._isFirstFrame);
  },
  sourceRectAtTime: function() {
    return {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    };
  },
  getLayerSize: function() {
    return this.data.ty === 5 ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
  }
};
function si() {
}
(function() {
  var t = {
    initElement: function(e, i, s) {
      this.initFrame(), this.initBaseData(e, i, s), this.initTransform(e, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
    },
    hide: function() {
      if (!this.hidden && (!this.isInRange || this.isTransparent)) {
        var e = this.baseElement || this.layerElement;
        e.style.display = "none", this.hidden = true;
      }
    },
    show: function() {
      if (this.isInRange && !this.isTransparent) {
        if (!this.data.hd) {
          var e = this.baseElement || this.layerElement;
          e.style.display = "block";
        }
        this.hidden = false, this._isFirstFrame = true;
      }
    },
    renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
    },
    renderInnerContent: function() {
    },
    prepareFrame: function(e) {
      this._mdf = false, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency();
    },
    destroy: function() {
      this.innerElem = null, this.destroyBaseElement();
    }
  };
  st([Is, kr(t)], si);
})();
function da(t, e) {
  this.elem = t, this.pos = e;
}
function Ts() {
}
Ts.prototype = {
  addShapeToModifiers: function(t) {
    var e, i = this.shapeModifiers.length;
    for (e = 0; e < i; e += 1)
      this.shapeModifiers[e].addShape(t);
  },
  isShapeInAnimatedModifiers: function(t) {
    for (var e = 0, i = this.shapeModifiers.length; e < i; )
      if (this.shapeModifiers[e].isAnimatedWithShape(t))
        return true;
    return false;
  },
  renderModifiers: function() {
    if (this.shapeModifiers.length) {
      var t, e = this.shapes.length;
      for (t = 0; t < e; t += 1)
        this.shapes[t].sh.reset();
      e = this.shapeModifiers.length;
      var i;
      for (t = e - 1; t >= 0 && (i = this.shapeModifiers[t].processShapes(this._isFirstFrame), !i); t -= 1)
        ;
    }
  },
  searchProcessedElement: function(t) {
    for (var e = this.processedElements, i = 0, s = e.length; i < s; ) {
      if (e[i].elem === t)
        return e[i].pos;
      i += 1;
    }
    return 0;
  },
  addProcessedElement: function(t, e) {
    for (var i = this.processedElements, s = i.length; s; )
      if (s -= 1, i[s].elem === t) {
        i[s].pos = e;
        return;
      }
    i.push(new da(t, e));
  },
  prepareFrame: function(t) {
    this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
  }
};
var Fs = {
  1: "butt",
  2: "round",
  3: "square"
};
var Vs = {
  1: "miter",
  2: "round",
  3: "bevel"
};
function Ls(t, e, i) {
  this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
  for (var s = 0, r2 = t.length; s < r2; ) {
    if (t[s].mProps.dynamicProperties.length) {
      this._isAnimated = true;
      break;
    }
    s += 1;
  }
}
Ls.prototype.setAsAnimated = function() {
  this._isAnimated = true;
};
function Rs(t, e) {
  this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = t.hd === true, this.pElem = B("path"), this.msElem = null;
}
Rs.prototype.reset = function() {
  this.d = "", this._mdf = false;
};
function ri(t, e, i, s) {
  this.elem = t, this.frameId = -1, this.dataProps = mt(e.length), this.renderer = i, this.k = false, this.dashStr = "", this.dashArray = rt("float32", e.length ? e.length - 1 : 0), this.dashoffset = rt("float32", 1), this.initDynamicPropertyContainer(s);
  var r2, a = e.length || 0, n;
  for (r2 = 0; r2 < a; r2 += 1)
    n = N.getProp(t, e[r2].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[r2] = { n: e[r2].n, p: n };
  this.k || this.getValue(true), this._isAnimated = this.k;
}
ri.prototype.getValue = function(t) {
  if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
    var e = 0, i = this.dataProps.length;
    for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < i; e += 1)
      this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
  }
};
st([_t], ri);
function Os(t, e, i) {
  this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = N.getProp(t, e.o, 0, 0.01, this), this.w = N.getProp(t, e.w, 0, null, this), this.d = new ri(t, e.d || {}, "svg", this), this.c = N.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
}
st([_t], Os);
function zs(t, e, i) {
  this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = N.getProp(t, e.o, 0, 0.01, this), this.c = N.getProp(t, e.c, 1, 255, this), this.style = i;
}
st([_t], zs);
function Gs(t, e, i) {
  this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i;
}
st([_t], Gs);
function ze(t, e, i) {
  this.data = e, this.c = rt("uint8c", e.p * 4);
  var s = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
  this.o = rt("float32", s), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = N.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
}
ze.prototype.comparePoints = function(t, e) {
  for (var i = 0, s = this.o.length / 2, r2; i < s; ) {
    if (r2 = Math.abs(t[i * 4] - t[e * 4 + i * 2]), r2 > 0.01)
      return false;
    i += 1;
  }
  return true;
};
ze.prototype.checkCollapsable = function() {
  if (this.o.length / 2 !== this.c.length / 4)
    return false;
  if (this.data.k.k[0].s)
    for (var t = 0, e = this.data.k.k.length; t < e; ) {
      if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
        return false;
      t += 1;
    }
  else if (!this.comparePoints(this.data.k.k, this.data.p))
    return false;
  return true;
};
ze.prototype.getValue = function(t) {
  if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
    var e, i = this.data.p * 4, s, r2;
    for (e = 0; e < i; e += 1)
      s = e % 4 === 0 ? 100 : 255, r2 = Math.round(this.prop.v[e] * s), this.c[e] !== r2 && (this.c[e] = r2, this._cmdf = !t);
    if (this.o.length)
      for (i = this.prop.v.length, e = this.data.p * 4; e < i; e += 1)
        s = e % 2 === 0 ? 100 : 1, r2 = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== r2 && (this.o[e - this.data.p * 4] = r2, this._omdf = !t);
    this._mdf = !t;
  }
};
st([_t], ze);
function ye(t, e, i) {
  this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
}
ye.prototype.initGradientData = function(t, e, i) {
  this.o = N.getProp(t, e.o, 0, 0.01, this), this.s = N.getProp(t, e.s, 1, null, this), this.e = N.getProp(t, e.e, 1, null, this), this.h = N.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = N.getProp(t, e.a || { k: 0 }, 0, lt, this), this.g = new ze(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
};
ye.prototype.setGradientData = function(t, e) {
  var i = vt(), s = B(e.t === 1 ? "linearGradient" : "radialGradient");
  s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
  var r2 = [], a, n, f;
  for (f = e.g.p * 4, n = 0; n < f; n += 4)
    a = B("stop"), s.appendChild(a), r2.push(a);
  t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + At() + "#" + i + ")"), this.gf = s, this.cst = r2;
};
ye.prototype.setGradientOpacity = function(t, e) {
  if (this.g._hasOpacity && !this.g._collapsable) {
    var i, s, r2, a = B("mask"), n = B("path");
    a.appendChild(n);
    var f = vt(), o2 = vt();
    a.setAttribute("id", o2);
    var u2 = B(t.t === 1 ? "linearGradient" : "radialGradient");
    u2.setAttribute("id", f), u2.setAttribute("spreadMethod", "pad"), u2.setAttribute("gradientUnits", "userSpaceOnUse"), r2 = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
    var y2 = this.stops;
    for (s = t.g.p * 4; s < r2; s += 2)
      i = B("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), u2.appendChild(i), y2.push(i);
    n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + At() + "#" + f + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", Fs[t.lc || 2]), n.setAttribute("stroke-linejoin", Vs[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = u2, this.ms = a, this.ost = y2, this.maskId = o2, e.msElem = n;
  }
};
st([_t], ye);
function Bs(t, e, i) {
  this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = N.getProp(t, e.w, 0, null, this), this.d = new ri(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
}
st([ye, _t], Bs);
function ga() {
  this.it = [], this.prevViewData = [], this.gr = B("g");
}
function va(t, e, i) {
  this.transform = {
    mProps: t,
    op: e,
    container: i
  }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
}
var ya = function(t, e, i, s) {
  if (e === 0)
    return "";
  var r2 = t.o, a = t.i, n = t.v, f, o2 = " M" + s.applyToPointStringified(n[0][0], n[0][1]);
  for (f = 1; f < e; f += 1)
    o2 += " C" + s.applyToPointStringified(r2[f - 1][0], r2[f - 1][1]) + " " + s.applyToPointStringified(a[f][0], a[f][1]) + " " + s.applyToPointStringified(n[f][0], n[f][1]);
  return i && e && (o2 += " C" + s.applyToPointStringified(r2[f - 1][0], r2[f - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]), o2 += "z"), o2;
};
var ba = (function() {
  var t = new ut(), e = new ut(), i = {
    createRenderFunction: s
  };
  function s(P2) {
    switch (P2.ty) {
      case "fl":
        return f;
      case "gf":
        return u2;
      case "gs":
        return o2;
      case "st":
        return y2;
      case "sh":
      case "el":
      case "rc":
      case "sr":
        return n;
      case "tr":
        return r2;
      case "no":
        return a;
      default:
        return null;
    }
  }
  function r2(P2, c, v2) {
    (v2 || c.transform.op._mdf) && c.transform.container.setAttribute("opacity", c.transform.op.v), (v2 || c.transform.mProps._mdf) && c.transform.container.setAttribute("transform", c.transform.mProps.v.to2dCSS());
  }
  function a() {
  }
  function n(P2, c, v2) {
    var g2, d3, k2, l, h, p2, m2 = c.styles.length, b2 = c.lvl, E, x2, S2, O2;
    for (p2 = 0; p2 < m2; p2 += 1) {
      if (l = c.sh._mdf || v2, c.styles[p2].lvl < b2) {
        for (x2 = e.reset(), S2 = b2 - c.styles[p2].lvl, O2 = c.transformers.length - 1; !l && S2 > 0; )
          l = c.transformers[O2].mProps._mdf || l, S2 -= 1, O2 -= 1;
        if (l)
          for (S2 = b2 - c.styles[p2].lvl, O2 = c.transformers.length - 1; S2 > 0; )
            x2.multiply(c.transformers[O2].mProps.v), S2 -= 1, O2 -= 1;
      } else
        x2 = t;
      if (E = c.sh.paths, d3 = E._length, l) {
        for (k2 = "", g2 = 0; g2 < d3; g2 += 1)
          h = E.shapes[g2], h && h._length && (k2 += ya(h, h._length, h.c, x2));
        c.caches[p2] = k2;
      } else
        k2 = c.caches[p2];
      c.styles[p2].d += P2.hd === true ? "" : k2, c.styles[p2]._mdf = l || c.styles[p2]._mdf;
    }
  }
  function f(P2, c, v2) {
    var g2 = c.style;
    (c.c._mdf || v2) && g2.pElem.setAttribute("fill", "rgb(" + Vt(c.c.v[0]) + "," + Vt(c.c.v[1]) + "," + Vt(c.c.v[2]) + ")"), (c.o._mdf || v2) && g2.pElem.setAttribute("fill-opacity", c.o.v);
  }
  function o2(P2, c, v2) {
    u2(P2, c, v2), y2(P2, c, v2);
  }
  function u2(P2, c, v2) {
    var g2 = c.gf, d3 = c.g._hasOpacity, k2 = c.s.v, l = c.e.v;
    if (c.o._mdf || v2) {
      var h = P2.ty === "gf" ? "fill-opacity" : "stroke-opacity";
      c.style.pElem.setAttribute(h, c.o.v);
    }
    if (c.s._mdf || v2) {
      var p2 = P2.t === 1 ? "x1" : "cx", m2 = p2 === "x1" ? "y1" : "cy";
      g2.setAttribute(p2, k2[0]), g2.setAttribute(m2, k2[1]), d3 && !c.g._collapsable && (c.of.setAttribute(p2, k2[0]), c.of.setAttribute(m2, k2[1]));
    }
    var b2, E, x2, S2;
    if (c.g._cmdf || v2) {
      b2 = c.cst;
      var O2 = c.g.c;
      for (x2 = b2.length, E = 0; E < x2; E += 1)
        S2 = b2[E], S2.setAttribute("offset", O2[E * 4] + "%"), S2.setAttribute("stop-color", "rgb(" + O2[E * 4 + 1] + "," + O2[E * 4 + 2] + "," + O2[E * 4 + 3] + ")");
    }
    if (d3 && (c.g._omdf || v2)) {
      var j = c.g.o;
      for (c.g._collapsable ? b2 = c.cst : b2 = c.ost, x2 = b2.length, E = 0; E < x2; E += 1)
        S2 = b2[E], c.g._collapsable || S2.setAttribute("offset", j[E * 2] + "%"), S2.setAttribute("stop-opacity", j[E * 2 + 1]);
    }
    if (P2.t === 1)
      (c.e._mdf || v2) && (g2.setAttribute("x2", l[0]), g2.setAttribute("y2", l[1]), d3 && !c.g._collapsable && (c.of.setAttribute("x2", l[0]), c.of.setAttribute("y2", l[1])));
    else {
      var X;
      if ((c.s._mdf || c.e._mdf || v2) && (X = Math.sqrt(Math.pow(k2[0] - l[0], 2) + Math.pow(k2[1] - l[1], 2)), g2.setAttribute("r", X), d3 && !c.g._collapsable && c.of.setAttribute("r", X)), c.s._mdf || c.e._mdf || c.h._mdf || c.a._mdf || v2) {
        X || (X = Math.sqrt(Math.pow(k2[0] - l[0], 2) + Math.pow(k2[1] - l[1], 2)));
        var Y = Math.atan2(l[1] - k2[1], l[0] - k2[0]), L2 = c.h.v;
        L2 >= 1 ? L2 = 0.99 : L2 <= -1 && (L2 = -0.99);
        var C2 = X * L2, T2 = Math.cos(Y + c.a.v) * C2 + k2[0], F2 = Math.sin(Y + c.a.v) * C2 + k2[1];
        g2.setAttribute("fx", T2), g2.setAttribute("fy", F2), d3 && !c.g._collapsable && (c.of.setAttribute("fx", T2), c.of.setAttribute("fy", F2));
      }
    }
  }
  function y2(P2, c, v2) {
    var g2 = c.style, d3 = c.d;
    d3 && (d3._mdf || v2) && d3.dashStr && (g2.pElem.setAttribute("stroke-dasharray", d3.dashStr), g2.pElem.setAttribute("stroke-dashoffset", d3.dashoffset[0])), c.c && (c.c._mdf || v2) && g2.pElem.setAttribute("stroke", "rgb(" + Vt(c.c.v[0]) + "," + Vt(c.c.v[1]) + "," + Vt(c.c.v[2]) + ")"), (c.o._mdf || v2) && g2.pElem.setAttribute("stroke-opacity", c.o.v), (c.w._mdf || v2) && (g2.pElem.setAttribute("stroke-width", c.w.v), g2.msElem && g2.msElem.setAttribute("stroke-width", c.w.v));
  }
  return i;
})();
function dt(t, e, i) {
  this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
}
st([Ve, Le, ii, Ts, Re, Oe, si], dt);
dt.prototype.initSecondaryElement = function() {
};
dt.prototype.identityMatrix = new ut();
dt.prototype.buildExpressionInterface = function() {
};
dt.prototype.createContent = function() {
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
};
dt.prototype.filterUniqueShapes = function() {
  var t, e = this.shapes.length, i, s, r2 = this.stylesList.length, a, n = [], f = false;
  for (s = 0; s < r2; s += 1) {
    for (a = this.stylesList[s], f = false, n.length = 0, t = 0; t < e; t += 1)
      i = this.shapes[t], i.styles.indexOf(a) !== -1 && (n.push(i), f = i._isAnimated || f);
    n.length > 1 && f && this.setShapesAsAnimated(n);
  }
};
dt.prototype.setShapesAsAnimated = function(t) {
  var e, i = t.length;
  for (e = 0; e < i; e += 1)
    t[e].setAsAnimated();
};
dt.prototype.createStyleElement = function(t, e) {
  var i, s = new Rs(t, e), r2 = s.pElem;
  if (t.ty === "st")
    i = new Os(this, t, s);
  else if (t.ty === "fl")
    i = new zs(this, t, s);
  else if (t.ty === "gf" || t.ty === "gs") {
    var a = t.ty === "gf" ? ye : Bs;
    i = new a(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), r2.setAttribute("mask", "url(" + At() + "#" + i.maskId + ")"));
  } else t.ty === "no" && (i = new Gs(this, t, s));
  return (t.ty === "st" || t.ty === "gs") && (r2.setAttribute("stroke-linecap", Fs[t.lc || 2]), r2.setAttribute("stroke-linejoin", Vs[t.lj || 2]), r2.setAttribute("fill-opacity", "0"), t.lj === 1 && r2.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && r2.setAttribute("fill-rule", "evenodd"), t.ln && r2.setAttribute("id", t.ln), t.cl && r2.setAttribute("class", t.cl), t.bm && (r2.style["mix-blend-mode"] = vi(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i;
};
dt.prototype.createGroupElement = function(t) {
  var e = new ga();
  return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = vi(t.bm)), e;
};
dt.prototype.createTransformElement = function(t, e) {
  var i = De.getTransformProperty(this, t, this), s = new va(i, i.o, e);
  return this.addToAnimatedContents(t, s), s;
};
dt.prototype.createShapeElement = function(t, e, i) {
  var s = 4;
  t.ty === "rc" ? s = 5 : t.ty === "el" ? s = 6 : t.ty === "sr" && (s = 7);
  var r2 = Wt.getShapeProp(this, t, s, this), a = new Ls(e, i, r2);
  return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
};
dt.prototype.addToAnimatedContents = function(t, e) {
  for (var i = 0, s = this.animatedContents.length; i < s; ) {
    if (this.animatedContents[i].element === e)
      return;
    i += 1;
  }
  this.animatedContents.push({
    fn: ba.createRenderFunction(t),
    element: e,
    data: t
  });
};
dt.prototype.setElementStyles = function(t) {
  var e = t.styles, i, s = this.stylesList.length;
  for (i = 0; i < s; i += 1)
    e.indexOf(this.stylesList[i]) === -1 && !this.stylesList[i].closed && e.push(this.stylesList[i]);
};
dt.prototype.reloadShapes = function() {
  this._isFirstFrame = true;
  var t, e = this.itemsData.length;
  for (t = 0; t < e; t += 1)
    this.prevViewData[t] = this.itemsData[t];
  for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
    this.dynamicProperties[t].getValue();
  this.renderModifiers();
};
dt.prototype.searchShapes = function(t, e, i, s, r2, a, n) {
  var f = [].concat(a), o2, u2 = t.length - 1, y2, P2, c = [], v2 = [], g2, d3, k2;
  for (o2 = u2; o2 >= 0; o2 -= 1) {
    if (k2 = this.searchProcessedElement(t[o2]), k2 ? e[o2] = i[k2 - 1] : t[o2]._render = n, t[o2].ty === "fl" || t[o2].ty === "st" || t[o2].ty === "gf" || t[o2].ty === "gs" || t[o2].ty === "no")
      k2 ? e[o2].style.closed = t[o2].hd : e[o2] = this.createStyleElement(t[o2], r2), t[o2]._render && e[o2].style.pElem.parentNode !== s && s.appendChild(e[o2].style.pElem), c.push(e[o2].style);
    else if (t[o2].ty === "gr") {
      if (!k2)
        e[o2] = this.createGroupElement(t[o2]);
      else
        for (P2 = e[o2].it.length, y2 = 0; y2 < P2; y2 += 1)
          e[o2].prevViewData[y2] = e[o2].it[y2];
      this.searchShapes(t[o2].it, e[o2].it, e[o2].prevViewData, e[o2].gr, r2 + 1, f, n), t[o2]._render && e[o2].gr.parentNode !== s && s.appendChild(e[o2].gr);
    } else t[o2].ty === "tr" ? (k2 || (e[o2] = this.createTransformElement(t[o2], s)), g2 = e[o2].transform, f.push(g2)) : t[o2].ty === "sh" || t[o2].ty === "rc" || t[o2].ty === "el" || t[o2].ty === "sr" ? (k2 || (e[o2] = this.createShapeElement(t[o2], f, r2)), this.setElementStyles(e[o2])) : t[o2].ty === "tm" || t[o2].ty === "rd" || t[o2].ty === "ms" || t[o2].ty === "pb" || t[o2].ty === "zz" || t[o2].ty === "op" ? (k2 ? (d3 = e[o2], d3.closed = false) : (d3 = $t.getModifier(t[o2].ty), d3.init(this, t[o2]), e[o2] = d3, this.shapeModifiers.push(d3)), v2.push(d3)) : t[o2].ty === "rp" && (k2 ? (d3 = e[o2], d3.closed = true) : (d3 = $t.getModifier(t[o2].ty), e[o2] = d3, d3.init(this, t, o2, e), this.shapeModifiers.push(d3), n = false), v2.push(d3));
    this.addProcessedElement(t[o2], o2 + 1);
  }
  for (u2 = c.length, o2 = 0; o2 < u2; o2 += 1)
    c[o2].closed = true;
  for (u2 = v2.length, o2 = 0; o2 < u2; o2 += 1)
    v2[o2].closed = true;
};
dt.prototype.renderInnerContent = function() {
  this.renderModifiers();
  var t, e = this.stylesList.length;
  for (t = 0; t < e; t += 1)
    this.stylesList[t].reset();
  for (this.renderShape(), t = 0; t < e; t += 1)
    (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
};
dt.prototype.renderShape = function() {
  var t, e = this.animatedContents.length, i;
  for (t = 0; t < e; t += 1)
    i = this.animatedContents[t], (this._isFirstFrame || i.element._isAnimated) && i.data !== true && i.fn(i.data, i.element, this._isFirstFrame);
};
dt.prototype.destroy = function() {
  this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
};
function bi(t, e, i) {
  this.initElement(t, e, i);
}
st([Ve, Le, ii, Re, Oe, si], bi);
bi.prototype.createContent = function() {
  var t = B("rect");
  t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
};
function Yt(t, e, i) {
  this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
}
Yt.prototype.prepareFrame = function(t) {
  this.prepareProperties(t, true);
};
Yt.prototype.renderFrame = function() {
};
Yt.prototype.getBaseElement = function() {
  return null;
};
Yt.prototype.destroy = function() {
};
Yt.prototype.sourceRectAtTime = function() {
};
Yt.prototype.hide = function() {
};
st([Ve, Le, Re, Oe], Yt);
function yt() {
}
st([St], yt);
yt.prototype.createNull = function(t) {
  return new Yt(t, this.globalData, this);
};
yt.prototype.createShape = function(t) {
  return new dt(t, this.globalData, this);
};
yt.prototype.createSolid = function(t) {
  return new bi(t, this.globalData, this);
};
yt.prototype.configAnimation = function(t) {
  this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
  var e = this.globalData.defs;
  this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
  var i = B("clipPath"), s = B("rect");
  s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
  var r2 = vt();
  i.setAttribute("id", r2), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + At() + "#" + r2 + ")"), e.appendChild(i), this.layers = t.layers, this.elements = mt(t.layers.length);
};
yt.prototype.destroy = function() {
  this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
  var t, e = this.layers ? this.layers.length : 0;
  for (t = 0; t < e; t += 1)
    this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
  this.elements.length = 0, this.destroyed = true, this.animationItem = null;
};
yt.prototype.updateContainerSize = function() {
};
yt.prototype.findIndexByInd = function(t) {
  var e = 0, i = this.layers.length;
  for (e = 0; e < i; e += 1)
    if (this.layers[e].ind === t)
      return e;
  return -1;
};
yt.prototype.buildItem = function(t) {
  var e = this.elements;
  if (!(e[t] || this.layers[t].ty === 99)) {
    e[t] = true;
    var i = this.createItem(this.layers[t]);
    if (e[t] = i, Ze() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
      var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
      if (s === -1)
        return;
      if (!this.elements[s] || this.elements[s] === true)
        this.buildItem(s), this.addPendingElement(i);
      else {
        var r2 = e[s], a = r2.getMatte(this.layers[t].tt);
        i.setMatte(a);
      }
    }
  }
};
yt.prototype.checkPendingElements = function() {
  for (; this.pendingElements.length; ) {
    var t = this.pendingElements.pop();
    if (t.checkParenting(), t.data.tt)
      for (var e = 0, i = this.elements.length; e < i; ) {
        if (this.elements[e] === t) {
          var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, r2 = this.elements[s], a = r2.getMatte(this.layers[e].tt);
          t.setMatte(a);
          break;
        }
        e += 1;
      }
  }
};
yt.prototype.renderFrame = function(t) {
  if (!(this.renderedFrame === t || this.destroyed)) {
    t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
    var e, i = this.layers.length;
    for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)
      (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
    if (this.globalData._mdf)
      for (e = 0; e < i; e += 1)
        (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
  }
};
yt.prototype.appendElementInPos = function(t, e) {
  var i = t.getBaseElement();
  if (i) {
    for (var s = 0, r2; s < e; )
      this.elements[s] && this.elements[s] !== true && this.elements[s].getBaseElement() && (r2 = this.elements[s].getBaseElement()), s += 1;
    r2 ? this.layerElement.insertBefore(i, r2) : this.layerElement.appendChild(i);
  }
};
yt.prototype.hide = function() {
  this.layerElement.style.display = "none";
};
yt.prototype.show = function() {
  this.layerElement.style.display = "block";
};
function Nt() {
}
st([Ve, Le, Re, Oe, si], Nt);
Nt.prototype.initElement = function(t, e, i) {
  this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
};
Nt.prototype.prepareFrame = function(t) {
  if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
    if (this.tm._placeholder)
      this.renderedFrame = t / this.data.sr;
    else {
      var e = this.tm.v;
      e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
    }
    var i, s = this.elements.length;
    for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1)
      (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = true));
  }
};
Nt.prototype.renderInnerContent = function() {
  var t, e = this.layers.length;
  for (t = 0; t < e; t += 1)
    (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
};
Nt.prototype.setElements = function(t) {
  this.elements = t;
};
Nt.prototype.getElements = function() {
  return this.elements;
};
Nt.prototype.destroyElements = function() {
  var t, e = this.layers.length;
  for (t = 0; t < e; t += 1)
    this.elements[t] && this.elements[t].destroy();
};
Nt.prototype.destroy = function() {
  this.destroyElements(), this.destroyBaseElement();
};
function $e(t, e, i) {
  this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? mt(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? N.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
}
st([yt, Nt, ii], $e);
$e.prototype.createComp = function(t) {
  return new $e(t, this.globalData, this);
};
function _i(t, e) {
  this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = B("svg");
  var i = "";
  if (e && e.title) {
    var s = B("title"), r2 = vt();
    s.setAttribute("id", r2), s.textContent = e.title, this.svgElement.appendChild(s), i += r2;
  }
  if (e && e.description) {
    var a = B("desc"), n = vt();
    a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), i += " " + n;
  }
  i && this.svgElement.setAttribute("aria-labelledby", i);
  var f = B("defs");
  this.svgElement.appendChild(f);
  var o2 = B("g");
  this.svgElement.appendChild(o2), this.layerElement = o2, this.renderConfig = {
    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
    contentVisibility: e && e.contentVisibility || "visible",
    progressiveLoad: e && e.progressiveLoad || false,
    hideOnTransparent: !(e && e.hideOnTransparent === false),
    viewBoxOnly: e && e.viewBoxOnly || false,
    viewBoxSize: e && e.viewBoxSize || false,
    className: e && e.className || "",
    id: e && e.id || "",
    focusable: e && e.focusable,
    filterSize: {
      width: e && e.filterSize && e.filterSize.width || "100%",
      height: e && e.filterSize && e.filterSize.height || "100%",
      x: e && e.filterSize && e.filterSize.x || "0%",
      y: e && e.filterSize && e.filterSize.y || "0%"
    },
    width: e && e.width,
    height: e && e.height,
    runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
  }, this.globalData = {
    _mdf: false,
    frameNum: -1,
    defs: f,
    renderConfig: this.renderConfig
  }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
}
st([yt], _i);
_i.prototype.createComp = function(t) {
  return new $e(t, this.globalData, this);
};
Lr("svg", _i);
$t.registerModifier("tm", Mt);
$t.registerModifier("pb", Me);
$t.registerModifier("rp", Rt);
$t.registerModifier("rd", Ie);
$t.registerModifier("zz", Te);
$t.registerModifier("op", Fe);
var Ns = /* @__PURE__ */ (function() {
  return function(t) {
    function e(i) {
      for (var s = 0, r2 = t.layers.length; s < r2; ) {
        if (t.layers[s].nm === i || t.layers[s].ind === i)
          return t.elements[s].layerInterface;
        s += 1;
      }
      return null;
    }
    return Object.defineProperty(e, "_name", { value: t.data.nm }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
  };
})();
var ps = {
  SHAPE: "shape"
};
var _a = /thisComp.layer\('([^']+)'\).effect\('([^']+)'\)\('Menu'\)\s*==\s*([0-9]+)\)[\s\S]*?\$bm_rt\s*=\s*([0-9]+);[\s\S]*?\$bm_rt\s*=\s*([0-9]+)/;
var Pa = /comp\('([^']+)'\)\.layer\('([^']+)'\)\.effect\('([^']+)'\)\('Color'\)/;
var ka = /\$bm_mul\(\$bm_div\(value,\s*([0-9]+(?:\.[0-9]+)?)\),\s*comp\('([^']+)'\)\.layer\('([^']+)'\)\.effect\('([^']+)'\)\('([^']+)'\)\)/;
var Aa = /\$bm_mul\(thisComp\.layer\('([^']+)'\)\.effect\((\d+)\)\('([^']+)'\),\s*([0-9]+(?:\.[0-9]+)?)\)/;
var Ea = /thisComp\.layer\('([^']+)'\)\.effect\('Scale'\)\('Slider'\)/;
var wa = /thisComp\.layer\('([^']+)'\)\.effect\('Axis'\)\('Point'\)/;
var Sa = /effect\('Axis'\)\('Point'\)/;
var xa = /thisComp\.layer\('([^']+)'\)\.effect\('([^']+)'\)\('Color'\)/;
var Da = /thisComp\.layer\('02092020'\)\.effect\('([^']+)'\)\('([^']+)'\)/;
function se(t) {
  return t.map((e) => e.startsWith("'") && e.endsWith("'") || e.startsWith('"') && e.endsWith('"') ? e.slice(1, -1) : e);
}
function Ca(t) {
  const e = t.match(Pa);
  if (e) {
    const o2 = se(e.slice(1));
    return (u2) => {
      var y2;
      const { comp: P2 } = u2;
      return (y2 = P2(o2[0]).layer(o2[1]).effect(o2[2])) == null ? void 0 : y2("Color");
    };
  }
  const i = t.match(ka);
  if (i) {
    const o2 = se(i.slice(1));
    return (u2) => {
      var y2;
      const { comp: P2, $bm_div: c, $bm_mul: v2, value: g2 } = u2;
      return v2(
        c(g2, +o2[0]),
        (y2 = P2(o2[1]).layer(o2[2]).effect(o2[3])) == null ? void 0 : y2(o2[4])
      );
    };
  }
  const s = t.match(_a);
  if (s) {
    const o2 = se(s.slice(1));
    return (u2) => {
      const { thisComp: y2 } = u2;
      return y2.layer(o2[0]).effect(o2[1])("Menu") == +o2[2] ? +o2[3] : +o2[4];
    };
  }
  const r2 = t.match(Aa);
  if (r2) {
    const o2 = se(r2.slice(1));
    return (u2) => {
      const { thisComp: y2, $bm_mul: P2 } = u2;
      return P2(
        y2.layer(o2[0]).effect(+o2[1])(o2[2]),
        +o2[3]
      );
    };
  }
  const a = t.match(Ea);
  if (a) {
    const o2 = se(a.slice(1));
    return (u2) => {
      const { thisComp: y2 } = u2, P2 = y2.layer(o2[0]).effect("Scale")("Slider");
      return [P2, P2];
    };
  }
  const n = t.match(wa);
  if (n) {
    const o2 = se(n.slice(1));
    return (u2) => {
      const { thisComp: y2 } = u2;
      return y2.layer(o2[0]).effect("Axis")("Point");
    };
  }
  if (t.match(Sa))
    return (o2) => {
      const { effect: u2 } = o2;
      return u2("Axis")("Point");
    };
  const f = t.match(xa);
  if (f) {
    const o2 = se(f.slice(1));
    return (u2) => {
      const { thisComp: y2 } = u2;
      return y2.layer(o2[0]).effect(o2[1])("Color");
    };
  }
  return t.match(Da) ? (o2) => 0 : null;
}
var Pi = (function() {
  var t = {}, e = zt, i = null, s = null, r2 = null, a = null, n = null, f = {};
  function o2() {
    f = {};
  }
  function u2(A2) {
    return A2.constructor === Array || A2.constructor === Float32Array;
  }
  function y2(A2, D2) {
    return A2 === "number" || D2 instanceof Number || A2 === "boolean" || A2 === "string";
  }
  function P2(A2) {
    var D2 = typeof A2;
    if (D2 === "number" || A2 instanceof Number || D2 === "boolean")
      return -A2;
    if (u2(A2)) {
      var R2, q2 = A2.length, V2 = [];
      for (R2 = 0; R2 < q2; R2 += 1)
        V2[R2] = -A2[R2];
      return V2;
    }
    return A2.propType ? A2.v : -A2;
  }
  var c = re.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, v2 = re.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, g2 = re.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
  function d3(A2, D2) {
    var R2 = typeof A2, q2 = typeof D2;
    if (y2(R2, A2) && y2(q2, D2) || R2 === "string" || q2 === "string")
      return A2 + D2;
    if (u2(A2) && y2(q2, D2))
      return A2 = A2.slice(0), A2[0] += D2, A2;
    if (y2(R2, A2) && u2(D2))
      return D2 = D2.slice(0), D2[0] = A2 + D2[0], D2;
    if (u2(A2) && u2(D2)) {
      for (var V2 = 0, W = A2.length, Z = D2.length, K = []; V2 < W || V2 < Z; )
        (typeof A2[V2] == "number" || A2[V2] instanceof Number) && (typeof D2[V2] == "number" || D2[V2] instanceof Number) ? K[V2] = A2[V2] + D2[V2] : K[V2] = D2[V2] === void 0 ? A2[V2] : A2[V2] || D2[V2], V2 += 1;
      return K;
    }
    return 0;
  }
  var k2 = d3;
  function l(A2, D2) {
    var R2 = typeof A2, q2 = typeof D2;
    if (y2(R2, A2) && y2(q2, D2))
      return R2 === "string" && (A2 = parseInt(A2, 10)), q2 === "string" && (D2 = parseInt(D2, 10)), A2 - D2;
    if (u2(A2) && y2(q2, D2))
      return A2 = A2.slice(0), A2[0] -= D2, A2;
    if (y2(R2, A2) && u2(D2))
      return D2 = D2.slice(0), D2[0] = A2 - D2[0], D2;
    if (u2(A2) && u2(D2)) {
      for (var V2 = 0, W = A2.length, Z = D2.length, K = []; V2 < W || V2 < Z; )
        (typeof A2[V2] == "number" || A2[V2] instanceof Number) && (typeof D2[V2] == "number" || D2[V2] instanceof Number) ? K[V2] = A2[V2] - D2[V2] : K[V2] = D2[V2] === void 0 ? A2[V2] : A2[V2] || D2[V2], V2 += 1;
      return K;
    }
    return 0;
  }
  function h(A2, D2) {
    var R2 = typeof A2, q2 = typeof D2, V2;
    if (y2(R2, A2) && y2(q2, D2))
      return A2 * D2;
    var W, Z;
    if (u2(A2) && y2(q2, D2)) {
      for (Z = A2.length, V2 = rt("float32", Z), W = 0; W < Z; W += 1)
        V2[W] = A2[W] * D2;
      return V2;
    }
    if (y2(R2, A2) && u2(D2)) {
      for (Z = D2.length, V2 = rt("float32", Z), W = 0; W < Z; W += 1)
        V2[W] = A2 * D2[W];
      return V2;
    }
    return 0;
  }
  function p2(A2, D2) {
    var R2 = typeof A2, q2 = typeof D2, V2;
    if (y2(R2, A2) && y2(q2, D2))
      return A2 / D2;
    var W, Z;
    if (u2(A2) && y2(q2, D2)) {
      for (Z = A2.length, V2 = rt("float32", Z), W = 0; W < Z; W += 1)
        V2[W] = A2[W] / D2;
      return V2;
    }
    if (y2(R2, A2) && u2(D2)) {
      for (Z = D2.length, V2 = rt("float32", Z), W = 0; W < Z; W += 1)
        V2[W] = A2 / D2[W];
      return V2;
    }
    return 0;
  }
  function m2(A2, D2) {
    return typeof A2 == "string" && (A2 = parseInt(A2, 10)), typeof D2 == "string" && (D2 = parseInt(D2, 10)), A2 % D2;
  }
  var b2 = d3, E = l, x2 = h, S2 = p2, O2 = m2;
  function j(A2, D2, R2) {
    if (D2 > R2) {
      var q2 = R2;
      R2 = D2, D2 = q2;
    }
    return e.min(e.max(A2, D2), R2);
  }
  function X(A2) {
    return A2 / lt;
  }
  var Y = X;
  function L2(A2) {
    return A2 * lt;
  }
  var C2 = X, T2 = [0, 0, 0, 0, 0, 0];
  function F2(A2, D2) {
    if (typeof A2 == "number" || A2 instanceof Number)
      return D2 = D2 || 0, e.abs(A2 - D2);
    D2 || (D2 = T2);
    var R2, q2 = e.min(A2.length, D2.length), V2 = 0;
    for (R2 = 0; R2 < q2; R2 += 1)
      V2 += e.pow(D2[R2] - A2[R2], 2);
    return e.sqrt(V2);
  }
  function M2(A2) {
    return p2(A2, F2(A2));
  }
  function _2(A2) {
    var D2 = A2[0], R2 = A2[1], q2 = A2[2], V2 = e.max(D2, R2, q2), W = e.min(D2, R2, q2), Z, K, ot = (V2 + W) / 2;
    if (V2 === W)
      Z = 0, K = 0;
    else {
      var H = V2 - W;
      switch (K = ot > 0.5 ? H / (2 - V2 - W) : H / (V2 + W), V2) {
        case D2:
          Z = (R2 - q2) / H + (R2 < q2 ? 6 : 0);
          break;
        case R2:
          Z = (q2 - D2) / H + 2;
          break;
        case q2:
          Z = (D2 - R2) / H + 4;
          break;
      }
      Z /= 6;
    }
    return [Z, K, ot, A2[3]];
  }
  function w2(A2, D2, R2) {
    return R2 < 0 && (R2 += 1), R2 > 1 && (R2 -= 1), R2 < 1 / 6 ? A2 + (D2 - A2) * 6 * R2 : R2 < 1 / 2 ? D2 : R2 < 2 / 3 ? A2 + (D2 - A2) * (2 / 3 - R2) * 6 : A2;
  }
  function I2(A2) {
    var D2 = A2[0], R2 = A2[1], q2 = A2[2], V2, W, Z;
    if (R2 === 0)
      V2 = q2, Z = q2, W = q2;
    else {
      var K = q2 < 0.5 ? q2 * (1 + R2) : q2 + R2 - q2 * R2, ot = 2 * q2 - K;
      V2 = w2(ot, K, D2 + 1 / 3), W = w2(ot, K, D2), Z = w2(ot, K, D2 - 1 / 3);
    }
    return [V2, W, Z, A2[3]];
  }
  function z(A2, D2, R2, q2, V2) {
    if ((q2 === void 0 || V2 === void 0) && (q2 = D2, V2 = R2, D2 = 0, R2 = 1), R2 < D2) {
      var W = R2;
      R2 = D2, D2 = W;
    }
    if (A2 <= D2)
      return q2;
    if (A2 >= R2)
      return V2;
    var Z = R2 === D2 ? 0 : (A2 - D2) / (R2 - D2);
    if (!q2.length)
      return q2 + (V2 - q2) * Z;
    var K, ot = q2.length, H = rt("float32", ot);
    for (K = 0; K < ot; K += 1)
      H[K] = q2[K] + (V2[K] - q2[K]) * Z;
    return H;
  }
  function nt(A2, D2) {
    if (D2 === void 0 && (A2 === void 0 ? (A2 = 0, D2 = 1) : (D2 = A2, A2 = void 0)), D2.length) {
      var R2, q2 = D2.length;
      A2 || (A2 = rt("float32", q2));
      var V2 = rt("float32", q2), W = zt.random();
      for (R2 = 0; R2 < q2; R2 += 1)
        V2[R2] = A2[R2] + W * (D2[R2] - A2[R2]);
      return V2;
    }
    A2 === void 0 && (A2 = 0);
    var Z = zt.random();
    return A2 + Z * (D2 - A2);
  }
  function Q(A2, D2, R2, q2) {
    var V2, W = A2.length, Z = gt.newElement();
    Z.setPathData(!!q2, W);
    var K = [0, 0], ot, H;
    for (V2 = 0; V2 < W; V2 += 1)
      ot = D2 && D2[V2] ? D2[V2] : K, H = R2 && R2[V2] ? R2[V2] : K, Z.setTripleAt(A2[V2][0], A2[V2][1], H[0] + A2[V2][0], H[1] + A2[V2][1], ot[0] + A2[V2][0], ot[1] + A2[V2][1], V2, true);
    return Z;
  }
  function pt(A2, D2, R2) {
    function q2(U) {
      return U;
    }
    if (!A2.globalData.renderConfig.runExpressions)
      return q2;
    var V2 = D2.x, W = /velocity(?![\w\d])/.test(V2), Z = A2.data.ty, K, ot, H, jt, ct = R2;
    ct._name = A2.data.nm, ct.valueAtTime = ct.getValueAtTime, Object.defineProperty(ct, "value", {
      get: function() {
        return ct.v;
      }
    }), A2.comp.frameDuration = 1 / A2.comp.globalData.frameRate, A2.comp.displayStartTime = 0;
    var he = A2.data.ip / A2.comp.globalData.frameRate, le = A2.data.op / A2.comp.globalData.frameRate, pe = A2.data.sw ? A2.data.sw : 0, fe = A2.data.sh ? A2.data.sh : 0, ue = A2.data.nm, qt, Zt, Ht, Jt, Kt, Qt, te, ee, ie, xi, $s, Ys, Di, Zs, bt, ni, Ci, Mi, Ii, Ti = V2, Fi = Ca(Ti);
    if (!Fi)
      return q2;
    var Js = R2.kf ? D2.k.length : 0, Ks = !this.data || this.data.hd !== true, Qs = function(U, G) {
      var at, et, it = this.pv.length ? this.pv.length : 1, Dt = rt("float32", it);
      U = 5;
      var Ge = e.floor(Ot * U);
      for (at = 0, et = 0; at < Ge; ) {
        for (et = 0; et < it; et += 1)
          Dt[et] += -G + G * 2 * zt.random();
        at += 1;
      }
      var Tt = Ot * U, _e = Tt - e.floor(Tt), Pe = rt("float32", it);
      if (it > 1) {
        for (et = 0; et < it; et += 1)
          Pe[et] = this.pv[et] + Dt[et] + (-G + G * 2 * zt.random()) * _e;
        return Pe;
      }
      return this.pv + Dt[0] + (-G + G * 2 * zt.random()) * _e;
    }.bind(this);
    ct.loopIn && (qt = ct.loopIn.bind(ct), Zt = qt), ct.loopOut && (Ht = ct.loopOut.bind(ct), Jt = Ht), ct.smooth && (Kt = ct.smooth.bind(ct));
    function tr(U, G) {
      return qt(U, G, true);
    }
    function er(U, G) {
      return Ht(U, G, true);
    }
    this.getValueAtTime && (Mi = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (Ii = this.getVelocityAtTime.bind(this));
    var Vi = A2.comp.globalData.projectInterface.bind(A2.comp.globalData.projectInterface);
    function ir(U, G) {
      var at = [G[0] - U[0], G[1] - U[1], G[2] - U[2]], et = e.atan2(at[0], e.sqrt(at[1] * at[1] + at[2] * at[2])) / lt, it = -e.atan2(at[1], at[2]) / lt;
      return [it, et, 0];
    }
    function sr(U, G, at, et, it) {
      return oi(v2, U, G, at, et, it);
    }
    function rr(U, G, at, et, it) {
      return oi(c, U, G, at, et, it);
    }
    function ar(U, G, at, et, it) {
      return oi(g2, U, G, at, et, it);
    }
    function oi(U, G, at, et, it, Dt) {
      it === void 0 ? (it = at, Dt = et) : G = (G - at) / (et - at), G > 1 ? G = 1 : G < 0 && (G = 0);
      var Ge = U(G);
      if (u2(it)) {
        var Tt, _e = it.length, Pe = rt("float32", _e);
        for (Tt = 0; Tt < _e; Tt += 1)
          Pe[Tt] = (Dt[Tt] - it[Tt]) * Ge + it[Tt];
        return Pe;
      }
      return (Dt - it) * Ge + it;
    }
    function nr(U) {
      var G, at = D2.k.length, et, it;
      if (!D2.k.length || typeof D2.k[0] == "number")
        et = 0, it = 0;
      else if (et = -1, U *= A2.comp.globalData.frameRate, U < D2.k[0].t)
        et = 1, it = D2.k[0].t;
      else {
        for (G = 0; G < at - 1; G += 1)
          if (U === D2.k[G].t) {
            et = G + 1, it = D2.k[G].t;
            break;
          } else if (U > D2.k[G].t && U < D2.k[G + 1].t) {
            U - D2.k[G].t > D2.k[G + 1].t - U ? (et = G + 2, it = D2.k[G + 1].t) : (et = G + 1, it = D2.k[G].t);
            break;
          }
        et === -1 && (et = G + 1, it = D2.k[G].t);
      }
      var Dt = {};
      return Dt.index = et, Dt.time = it / A2.comp.globalData.frameRate, Dt;
    }
    function or(U) {
      var G, at, et;
      if (!D2.k.length || typeof D2.k[0] == "number")
        throw new Error("The property has no keyframe at index " + U);
      U -= 1, G = {
        time: D2.k[U].t / A2.comp.globalData.frameRate,
        value: []
      };
      var it = Object.prototype.hasOwnProperty.call(D2.k[U], "s") ? D2.k[U].s : D2.k[U - 1].e;
      for (et = it.length, at = 0; at < et; at += 1)
        G[at] = it[at], G.value[at] = it[at];
      return G;
    }
    function hr(U, G) {
      return G || (G = A2.comp.globalData.frameRate), U / G;
    }
    function lr(U, G) {
      return !U && U !== 0 && (U = Ot), G || (G = A2.comp.globalData.frameRate), U * G;
    }
    function pr() {
      return A2.sourceRectAtTime();
    }
    function fr(U, G) {
      return typeof It == "string" ? G === void 0 ? It.substring(U) : It.substring(U, G) : "";
    }
    function ur(U, G) {
      return typeof It == "string" ? G === void 0 ? It.substr(U) : It.substr(U, G) : "";
    }
    function cr(U) {
      Ot = U === 0 ? 0 : e.floor(Ot * U) / U, It = Mi(Ot);
    }
    var Ot, Li, It, Ri, Oi, zi, Gi, mr = A2.data.ind, Bi = !!(A2.hierarchy && A2.hierarchy.length), Ni, dr = A2.globalData;
    function ji(U) {
      if (It = U, this.frameExpressionId === A2.globalData.frameId && this.propType !== "textSelector")
        return It;
      this.propType === "textSelector" && (Oi = this.textIndex, zi = this.textTotal, Gi = this.selectorValue), bt || (Ri = A2.layerInterface.text, bt = A2.layerInterface, ni = A2.comp.compInterface, Qt = bt.toWorld.bind(bt), te = bt.fromWorld.bind(bt), ee = bt.fromComp.bind(bt), ie = bt.toComp.bind(bt), Ci = bt.mask ? bt.mask.bind(bt) : null, xi = ee), K || (K = A2.layerInterface("ADBE Transform Group"), ot = K, K && (Di = K.anchorPoint)), Z === 4 && !H && (H = bt("ADBE Root Vectors Group")), jt || (jt = bt(4)), Bi = !!(A2.hierarchy && A2.hierarchy.length), Bi && !Ni && (Ni = A2.hierarchy[0].layerInterface), Ot = this.comp.renderedFrame / this.comp.globalData.frameRate, W && (Li = Ii(Ot)), this.frameExpressionId = A2.globalData.frameId;
      try {
        let G = Fi({
          $bm_neg: P2,
          add: k2,
          $bm_sum: b2,
          $bm_sub: E,
          $bm_mul: x2,
          $bm_div: S2,
          $bm_mod: O2,
          clamp: j,
          radians_to_degrees: Y,
          degreesToRadians: L2,
          degrees_to_radians: C2,
          normalize: M2,
          rgbToHsl: _2,
          hslToRgb: I2,
          linear: z,
          random: nt,
          createPath: Q,
          comp: Vi,
          value: It,
          thisComp: ni,
          effect: jt
        });
        return (G == null ? void 0 : G.propType) === ps.SHAPE ? G.v : G;
      } catch (G) {
        console.error(G, Ti);
      }
      return scoped_bm_rt = scoped_bm_rt.propType === ps.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt;
    }
    return ji.__preventDeadCodeRemoval = [ot, Di, Ot, Li, he, le, pe, fe, ue, Zt, Jt, Kt, ie, xi, Qt, te, Ci, $s, Ys, Zs, ni, Js, Ks, Qs, tr, er, Vi, ir, sr, rr, ar, nr, or, Ri, Oi, zi, Gi, hr, lr, pr, fr, ur, cr, mr, dr], ji;
  }
  return t.initiateExpression = pt, t.__preventDeadCodeRemoval = [i, s, r2, a, n, P2, k2, b2, E, x2, S2, O2, j, Y, L2, C2, M2, _2, I2, z, nt, Q, f], t.resetFrame = o2, t;
})();
var Ma = (function() {
  var t = {};
  t.initExpressions = e, t.resetFrame = Pi.resetFrame;
  function e(i) {
    var s = 0, r2 = [];
    function a() {
      s += 1;
    }
    function n() {
      s -= 1, s === 0 && o2();
    }
    function f(u2) {
      r2.indexOf(u2) === -1 && r2.push(u2);
    }
    function o2() {
      var u2, y2 = r2.length;
      for (u2 = 0; u2 < y2; u2 += 1)
        r2[u2].release();
      r2.length = 0;
    }
    i.renderer.compInterface = Ns(i.renderer), i.renderer.globalData.projectInterface.registerComposition(i.renderer), i.renderer.globalData.pushExpression = a, i.renderer.globalData.popExpression = n, i.renderer.globalData.registerExpressionProperty = f;
  }
  return t;
})();
var Ia = (function() {
  function t(i, s) {
    this._mask = i, this._data = s;
  }
  Object.defineProperty(t.prototype, "maskPath", {
    get: function() {
      return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
    }
  }), Object.defineProperty(t.prototype, "maskOpacity", {
    get: function() {
      return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100;
    }
  });
  var e = function(i) {
    var s = mt(i.viewData.length), r2, a = i.viewData.length;
    for (r2 = 0; r2 < a; r2 += 1)
      s[r2] = new t(i.viewData[r2], i.masksProperties[r2]);
    var n = function(f) {
      for (r2 = 0; r2 < a; ) {
        if (i.masksProperties[r2].nm === f)
          return s[r2];
        r2 += 1;
      }
      return null;
    };
    return n;
  };
  return e;
})();
var $ = /* @__PURE__ */ (function() {
  var t = { pv: 0, v: 0, mult: 1 }, e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
  function i(n, f, o2) {
    Object.defineProperty(n, "velocity", {
      get: function() {
        return f.getVelocityAtTime(f.comp.currentFrame);
      }
    }), n.numKeys = f.keyframes ? f.keyframes.length : 0, n.key = function(u2) {
      if (!n.numKeys)
        return 0;
      var y2 = "";
      "s" in f.keyframes[u2 - 1] ? y2 = f.keyframes[u2 - 1].s : "e" in f.keyframes[u2 - 2] ? y2 = f.keyframes[u2 - 2].e : y2 = f.keyframes[u2 - 2].s;
      var P2 = o2 === "unidimensional" ? new Number(y2) : Object.assign({}, y2);
      return P2.time = f.keyframes[u2 - 1].t / f.elem.comp.globalData.frameRate, P2.value = o2 === "unidimensional" ? y2[0] : y2, P2;
    }, n.valueAtTime = f.getValueAtTime, n.speedAtTime = f.getSpeedAtTime, n.velocityAtTime = f.getVelocityAtTime, n.propertyGroup = f.propertyGroup;
  }
  function s(n) {
    (!n || !("pv" in n)) && (n = t);
    var f = 1 / n.mult, o2 = n.pv * f, u2 = new Number(o2);
    return u2.value = o2, i(u2, n, "unidimensional"), function() {
      return n.k && n.getValue(), o2 = n.v * f, u2.value !== o2 && (u2 = new Number(o2), u2.value = o2, u2[0] = o2, i(u2, n, "unidimensional")), u2;
    };
  }
  function r2(n) {
    (!n || !("pv" in n)) && (n = e);
    var f = 1 / n.mult, o2 = n.data && n.data.l || n.pv.length, u2 = rt("float32", o2), y2 = rt("float32", o2);
    return u2.value = y2, i(u2, n, "multidimensional"), function() {
      n.k && n.getValue();
      for (var P2 = 0; P2 < o2; P2 += 1)
        y2[P2] = n.v[P2] * f, u2[P2] = y2[P2];
      return u2;
    };
  }
  function a() {
    return t;
  }
  return function(n) {
    return n ? n.propType === "unidimensional" ? s(n) : r2(n) : a;
  };
})();
var Ta = /* @__PURE__ */ (function() {
  return function(t) {
    function e(n) {
      switch (n) {
        case "scale":
        case "Scale":
        case "ADBE Scale":
        case 6:
          return e.scale;
        case "rotation":
        case "Rotation":
        case "ADBE Rotation":
        case "ADBE Rotate Z":
        case 10:
          return e.rotation;
        case "ADBE Rotate X":
          return e.xRotation;
        case "ADBE Rotate Y":
          return e.yRotation;
        case "position":
        case "Position":
        case "ADBE Position":
        case 2:
          return e.position;
        case "ADBE Position_0":
          return e.xPosition;
        case "ADBE Position_1":
          return e.yPosition;
        case "ADBE Position_2":
          return e.zPosition;
        case "anchorPoint":
        case "AnchorPoint":
        case "Anchor Point":
        case "ADBE AnchorPoint":
        case 1:
          return e.anchorPoint;
        case "opacity":
        case "Opacity":
        case 11:
          return e.opacity;
        default:
          return null;
      }
    }
    Object.defineProperty(e, "rotation", {
      get: $(t.r || t.rz)
    }), Object.defineProperty(e, "zRotation", {
      get: $(t.rz || t.r)
    }), Object.defineProperty(e, "xRotation", {
      get: $(t.rx)
    }), Object.defineProperty(e, "yRotation", {
      get: $(t.ry)
    }), Object.defineProperty(e, "scale", {
      get: $(t.s)
    });
    var i, s, r2, a;
    return t.p ? a = $(t.p) : (i = $(t.px), s = $(t.py), t.pz && (r2 = $(t.pz))), Object.defineProperty(e, "position", {
      get: function() {
        return t.p ? a() : [
          i(),
          s(),
          r2 ? r2() : 0
        ];
      }
    }), Object.defineProperty(e, "xPosition", {
      get: $(t.px)
    }), Object.defineProperty(e, "yPosition", {
      get: $(t.py)
    }), Object.defineProperty(e, "zPosition", {
      get: $(t.pz)
    }), Object.defineProperty(e, "anchorPoint", {
      get: $(t.a)
    }), Object.defineProperty(e, "opacity", {
      get: $(t.o)
    }), Object.defineProperty(e, "skew", {
      get: $(t.sk)
    }), Object.defineProperty(e, "skewAxis", {
      get: $(t.sa)
    }), Object.defineProperty(e, "orientation", {
      get: $(t.or)
    }), e;
  };
})();
var Fa = /* @__PURE__ */ (function() {
  function t(u2) {
    var y2 = new ut();
    if (u2 !== void 0) {
      var P2 = this._elem.finalTransform.mProp.getValueAtTime(u2);
      P2.clone(y2);
    } else {
      var c = this._elem.finalTransform.mProp;
      c.applyToMatrix(y2);
    }
    return y2;
  }
  function e(u2, y2) {
    var P2 = this.getMatrix(y2);
    return P2.props[12] = 0, P2.props[13] = 0, P2.props[14] = 0, this.applyPoint(P2, u2);
  }
  function i(u2, y2) {
    var P2 = this.getMatrix(y2);
    return this.applyPoint(P2, u2);
  }
  function s(u2, y2) {
    var P2 = this.getMatrix(y2);
    return P2.props[12] = 0, P2.props[13] = 0, P2.props[14] = 0, this.invertPoint(P2, u2);
  }
  function r2(u2, y2) {
    var P2 = this.getMatrix(y2);
    return this.invertPoint(P2, u2);
  }
  function a(u2, y2) {
    if (this._elem.hierarchy && this._elem.hierarchy.length) {
      var P2, c = this._elem.hierarchy.length;
      for (P2 = 0; P2 < c; P2 += 1)
        this._elem.hierarchy[P2].finalTransform.mProp.applyToMatrix(u2);
    }
    return u2.applyToPointArray(y2[0], y2[1], y2[2] || 0);
  }
  function n(u2, y2) {
    if (this._elem.hierarchy && this._elem.hierarchy.length) {
      var P2, c = this._elem.hierarchy.length;
      for (P2 = 0; P2 < c; P2 += 1)
        this._elem.hierarchy[P2].finalTransform.mProp.applyToMatrix(u2);
    }
    return u2.inversePoint(y2);
  }
  function f(u2) {
    var y2 = new ut();
    if (y2.reset(), this._elem.finalTransform.mProp.applyToMatrix(y2), this._elem.hierarchy && this._elem.hierarchy.length) {
      var P2, c = this._elem.hierarchy.length;
      for (P2 = 0; P2 < c; P2 += 1)
        this._elem.hierarchy[P2].finalTransform.mProp.applyToMatrix(y2);
      return y2.inversePoint(u2);
    }
    return y2.inversePoint(u2);
  }
  function o2() {
    return [1, 1, 1, 1];
  }
  return function(u2) {
    var y2;
    function P2(d3) {
      v2.mask = new Ia(d3, u2);
    }
    function c(d3) {
      v2.effect = d3;
    }
    function v2(d3) {
      switch (d3) {
        case "ADBE Root Vectors Group":
        case "Contents":
        case 2:
          return v2.shapeInterface;
        case 1:
        case 6:
        case "Transform":
        case "transform":
        case "ADBE Transform Group":
          return y2;
        case 4:
        case "ADBE Effect Parade":
        case "effects":
        case "Effects":
          return v2.effect;
        case "ADBE Text Properties":
          return v2.textInterface;
        default:
          return null;
      }
    }
    v2.getMatrix = t, v2.invertPoint = n, v2.applyPoint = a, v2.toWorld = i, v2.toWorldVec = e, v2.fromWorld = r2, v2.fromWorldVec = s, v2.toComp = i, v2.fromComp = f, v2.sampleImage = o2, v2.sourceRectAtTime = u2.sourceRectAtTime.bind(u2), v2._elem = u2, y2 = Ta(u2.finalTransform.mProp);
    var g2 = Ae(y2, "anchorPoint");
    return Object.defineProperties(v2, {
      hasParent: {
        get: function() {
          return u2.hierarchy.length;
        }
      },
      parent: {
        get: function() {
          return u2.hierarchy[0].layerInterface;
        }
      },
      rotation: Ae(y2, "rotation"),
      scale: Ae(y2, "scale"),
      position: Ae(y2, "position"),
      opacity: Ae(y2, "opacity"),
      anchorPoint: g2,
      anchor_point: g2,
      transform: {
        get: function() {
          return y2;
        }
      },
      active: {
        get: function() {
          return u2.isInRange;
        }
      }
    }), v2.startTime = u2.data.st, v2.index = u2.data.ind, v2.source = u2.data.refId, v2.height = u2.data.ty === 0 ? u2.data.h : 100, v2.width = u2.data.ty === 0 ? u2.data.w : 100, v2.inPoint = u2.data.ip / u2.comp.globalData.frameRate, v2.outPoint = u2.data.op / u2.comp.globalData.frameRate, v2._name = u2.data.nm, v2.registerMaskInterface = P2, v2.registerEffectsInterface = c, v2;
  };
})();
var kt = /* @__PURE__ */ (function() {
  return function(t, e) {
    return function(i) {
      return i = i === void 0 ? 1 : i, i <= 0 ? t : e(i - 1);
    };
  };
})();
var tt = /* @__PURE__ */ (function() {
  return function(t, e) {
    var i = {
      _name: t
    };
    function s(r2) {
      return r2 = r2 === void 0 ? 1 : r2, r2 <= 0 ? i : e(r2 - 1);
    }
    return s;
  };
})();
var Va = /* @__PURE__ */ (function() {
  var t = {
    createEffectsInterface: e
  };
  function e(r2, a) {
    if (r2.effectsManager) {
      var n = [], f = r2.data.ef, o2, u2 = r2.effectsManager.effectElements.length;
      for (o2 = 0; o2 < u2; o2 += 1)
        n.push(i(f[o2], r2.effectsManager.effectElements[o2], a, r2));
      var y2 = r2.data.ef || [], P2 = function(c) {
        for (o2 = 0, u2 = y2.length; o2 < u2; ) {
          if (c === y2[o2].nm || c === y2[o2].mn || c === y2[o2].ix)
            return n[o2];
          o2 += 1;
        }
        return null;
      };
      return Object.defineProperty(P2, "numProperties", {
        get: function() {
          return y2.length;
        }
      }), P2;
    }
    return null;
  }
  function i(r2, a, n, f) {
    function o2(v2) {
      for (var g2 = r2.ef, d3 = 0, k2 = g2.length; d3 < k2; ) {
        if (v2 === g2[d3].nm || v2 === g2[d3].mn || v2 === g2[d3].ix)
          return g2[d3].ty === 5 ? y2[d3] : y2[d3]();
        d3 += 1;
      }
      throw new Error();
    }
    var u2 = kt(o2, n), y2 = [], P2, c = r2.ef.length;
    for (P2 = 0; P2 < c; P2 += 1)
      r2.ef[P2].ty === 5 ? y2.push(i(r2.ef[P2], a.effectElements[P2], a.effectElements[P2].propertyGroup, f)) : y2.push(s(a.effectElements[P2], r2.ef[P2].ty, f, u2));
    return r2.mn === "ADBE Color Control" && Object.defineProperty(o2, "color", {
      get: function() {
        return y2[0]();
      }
    }), Object.defineProperties(o2, {
      numProperties: {
        get: function() {
          return r2.np;
        }
      },
      _name: { value: r2.nm },
      propertyGroup: { value: u2 }
    }), o2.enabled = r2.en !== 0, o2.active = o2.enabled, o2;
  }
  function s(r2, a, n, f) {
    var o2 = $(r2.p);
    function u2() {
      return a === 10 ? n.comp.compInterface(r2.p.v) : o2();
    }
    return r2.p.setGroupProperty && r2.p.setGroupProperty(tt("", f)), u2;
  }
  return t;
})();
var La = /* @__PURE__ */ (function() {
  return function(t, e, i) {
    var s = e.sh;
    function r2(n) {
      return n === "Shape" || n === "shape" || n === "Path" || n === "path" || n === "ADBE Vector Shape" || n === 2 ? r2.path : null;
    }
    var a = kt(r2, i);
    return s.setGroupProperty(tt("Path", a)), Object.defineProperties(r2, {
      path: {
        get: function() {
          return s.k && s.getValue(), s;
        }
      },
      shape: {
        get: function() {
          return s.k && s.getValue(), s;
        }
      },
      _name: { value: t.nm },
      ix: { value: t.ix },
      propertyIndex: { value: t.ix },
      mn: { value: t.mn },
      propertyGroup: { value: i }
    }), r2;
  };
})();
var Ra = /* @__PURE__ */ (function() {
  function t(g2, d3, k2) {
    var l = [], h, p2 = g2 ? g2.length : 0;
    for (h = 0; h < p2; h += 1)
      g2[h].ty === "gr" ? l.push(i(g2[h], d3[h], k2)) : g2[h].ty === "fl" ? l.push(s(g2[h], d3[h], k2)) : g2[h].ty === "st" ? l.push(n(g2[h], d3[h], k2)) : g2[h].ty === "tm" ? l.push(f(g2[h], d3[h], k2)) : g2[h].ty === "tr" || (g2[h].ty === "el" ? l.push(u2(g2[h], d3[h], k2)) : g2[h].ty === "sr" ? l.push(y2(g2[h], d3[h], k2)) : g2[h].ty === "sh" ? l.push(La(g2[h], d3[h], k2)) : g2[h].ty === "rc" ? l.push(P2(g2[h], d3[h], k2)) : g2[h].ty === "rd" ? l.push(c(g2[h], d3[h], k2)) : g2[h].ty === "rp" ? l.push(v2(g2[h], d3[h], k2)) : g2[h].ty === "gf" ? l.push(r2(g2[h], d3[h], k2)) : l.push(a(g2[h], d3[h])));
    return l;
  }
  function e(g2, d3, k2) {
    var l, h = function(m2) {
      for (var b2 = 0, E = l.length; b2 < E; ) {
        if (l[b2]._name === m2 || l[b2].mn === m2 || l[b2].propertyIndex === m2 || l[b2].ix === m2 || l[b2].ind === m2)
          return l[b2];
        b2 += 1;
      }
      return typeof m2 == "number" ? l[m2 - 1] : null;
    };
    h.propertyGroup = kt(h, k2), l = t(g2.it, d3.it, h.propertyGroup), h.numProperties = l.length;
    var p2 = o2(g2.it[g2.it.length - 1], d3.it[d3.it.length - 1], h.propertyGroup);
    return h.transform = p2, h.propertyIndex = g2.cix, h._name = g2.nm, h;
  }
  function i(g2, d3, k2) {
    var l = function(m2) {
      switch (m2) {
        case "ADBE Vectors Group":
        case "Contents":
        case 2:
          return l.content;
        // Not necessary for now. Keeping them here in case a new case appears
        // case 'ADBE Vector Transform Group':
        // case 3:
        default:
          return l.transform;
      }
    };
    l.propertyGroup = kt(l, k2);
    var h = e(g2, d3, l.propertyGroup), p2 = o2(g2.it[g2.it.length - 1], d3.it[d3.it.length - 1], l.propertyGroup);
    return l.content = h, l.transform = p2, Object.defineProperty(l, "_name", {
      get: function() {
        return g2.nm;
      }
    }), l.numProperties = g2.np, l.propertyIndex = g2.ix, l.nm = g2.nm, l.mn = g2.mn, l;
  }
  function s(g2, d3, k2) {
    function l(h) {
      return h === "Color" || h === "color" ? l.color : h === "Opacity" || h === "opacity" ? l.opacity : null;
    }
    return Object.defineProperties(l, {
      color: {
        get: $(d3.c)
      },
      opacity: {
        get: $(d3.o)
      },
      _name: { value: g2.nm },
      mn: { value: g2.mn }
    }), d3.c.setGroupProperty(tt("Color", k2)), d3.o.setGroupProperty(tt("Opacity", k2)), l;
  }
  function r2(g2, d3, k2) {
    function l(h) {
      return h === "Start Point" || h === "start point" ? l.startPoint : h === "End Point" || h === "end point" ? l.endPoint : h === "Opacity" || h === "opacity" ? l.opacity : null;
    }
    return Object.defineProperties(l, {
      startPoint: {
        get: $(d3.s)
      },
      endPoint: {
        get: $(d3.e)
      },
      opacity: {
        get: $(d3.o)
      },
      type: {
        get: function() {
          return "a";
        }
      },
      _name: { value: g2.nm },
      mn: { value: g2.mn }
    }), d3.s.setGroupProperty(tt("Start Point", k2)), d3.e.setGroupProperty(tt("End Point", k2)), d3.o.setGroupProperty(tt("Opacity", k2)), l;
  }
  function a() {
    function g2() {
      return null;
    }
    return g2;
  }
  function n(g2, d3, k2) {
    var l = kt(x2, k2), h = kt(E, l);
    function p2(S2) {
      Object.defineProperty(E, g2.d[S2].nm, {
        get: $(d3.d.dataProps[S2].p)
      });
    }
    var m2, b2 = g2.d ? g2.d.length : 0, E = {};
    for (m2 = 0; m2 < b2; m2 += 1)
      p2(m2), d3.d.dataProps[m2].p.setGroupProperty(h);
    function x2(S2) {
      return S2 === "Color" || S2 === "color" ? x2.color : S2 === "Opacity" || S2 === "opacity" ? x2.opacity : S2 === "Stroke Width" || S2 === "stroke width" ? x2.strokeWidth : null;
    }
    return Object.defineProperties(x2, {
      color: {
        get: $(d3.c)
      },
      opacity: {
        get: $(d3.o)
      },
      strokeWidth: {
        get: $(d3.w)
      },
      dash: {
        get: function() {
          return E;
        }
      },
      _name: { value: g2.nm },
      mn: { value: g2.mn }
    }), d3.c.setGroupProperty(tt("Color", l)), d3.o.setGroupProperty(tt("Opacity", l)), d3.w.setGroupProperty(tt("Stroke Width", l)), x2;
  }
  function f(g2, d3, k2) {
    function l(p2) {
      return p2 === g2.e.ix || p2 === "End" || p2 === "end" ? l.end : p2 === g2.s.ix ? l.start : p2 === g2.o.ix ? l.offset : null;
    }
    var h = kt(l, k2);
    return l.propertyIndex = g2.ix, d3.s.setGroupProperty(tt("Start", h)), d3.e.setGroupProperty(tt("End", h)), d3.o.setGroupProperty(tt("Offset", h)), l.propertyIndex = g2.ix, l.propertyGroup = k2, Object.defineProperties(l, {
      start: {
        get: $(d3.s)
      },
      end: {
        get: $(d3.e)
      },
      offset: {
        get: $(d3.o)
      },
      _name: { value: g2.nm }
    }), l.mn = g2.mn, l;
  }
  function o2(g2, d3, k2) {
    function l(p2) {
      return g2.a.ix === p2 || p2 === "Anchor Point" ? l.anchorPoint : g2.o.ix === p2 || p2 === "Opacity" ? l.opacity : g2.p.ix === p2 || p2 === "Position" ? l.position : g2.r.ix === p2 || p2 === "Rotation" || p2 === "ADBE Vector Rotation" ? l.rotation : g2.s.ix === p2 || p2 === "Scale" ? l.scale : g2.sk && g2.sk.ix === p2 || p2 === "Skew" ? l.skew : g2.sa && g2.sa.ix === p2 || p2 === "Skew Axis" ? l.skewAxis : null;
    }
    var h = kt(l, k2);
    return d3.transform.mProps.o.setGroupProperty(tt("Opacity", h)), d3.transform.mProps.p.setGroupProperty(tt("Position", h)), d3.transform.mProps.a.setGroupProperty(tt("Anchor Point", h)), d3.transform.mProps.s.setGroupProperty(tt("Scale", h)), d3.transform.mProps.r.setGroupProperty(tt("Rotation", h)), d3.transform.mProps.sk && (d3.transform.mProps.sk.setGroupProperty(tt("Skew", h)), d3.transform.mProps.sa.setGroupProperty(tt("Skew Angle", h))), d3.transform.op.setGroupProperty(tt("Opacity", h)), Object.defineProperties(l, {
      opacity: {
        get: $(d3.transform.mProps.o)
      },
      position: {
        get: $(d3.transform.mProps.p)
      },
      anchorPoint: {
        get: $(d3.transform.mProps.a)
      },
      scale: {
        get: $(d3.transform.mProps.s)
      },
      rotation: {
        get: $(d3.transform.mProps.r)
      },
      skew: {
        get: $(d3.transform.mProps.sk)
      },
      skewAxis: {
        get: $(d3.transform.mProps.sa)
      },
      _name: { value: g2.nm }
    }), l.ty = "tr", l.mn = g2.mn, l.propertyGroup = k2, l;
  }
  function u2(g2, d3, k2) {
    function l(m2) {
      return g2.p.ix === m2 ? l.position : g2.s.ix === m2 ? l.size : null;
    }
    var h = kt(l, k2);
    l.propertyIndex = g2.ix;
    var p2 = d3.sh.ty === "tm" ? d3.sh.prop : d3.sh;
    return p2.s.setGroupProperty(tt("Size", h)), p2.p.setGroupProperty(tt("Position", h)), Object.defineProperties(l, {
      size: {
        get: $(p2.s)
      },
      position: {
        get: $(p2.p)
      },
      _name: { value: g2.nm }
    }), l.mn = g2.mn, l;
  }
  function y2(g2, d3, k2) {
    function l(m2) {
      return g2.p.ix === m2 ? l.position : g2.r.ix === m2 ? l.rotation : g2.pt.ix === m2 ? l.points : g2.or.ix === m2 || m2 === "ADBE Vector Star Outer Radius" ? l.outerRadius : g2.os.ix === m2 ? l.outerRoundness : g2.ir && (g2.ir.ix === m2 || m2 === "ADBE Vector Star Inner Radius") ? l.innerRadius : g2.is && g2.is.ix === m2 ? l.innerRoundness : null;
    }
    var h = kt(l, k2), p2 = d3.sh.ty === "tm" ? d3.sh.prop : d3.sh;
    return l.propertyIndex = g2.ix, p2.or.setGroupProperty(tt("Outer Radius", h)), p2.os.setGroupProperty(tt("Outer Roundness", h)), p2.pt.setGroupProperty(tt("Points", h)), p2.p.setGroupProperty(tt("Position", h)), p2.r.setGroupProperty(tt("Rotation", h)), g2.ir && (p2.ir.setGroupProperty(tt("Inner Radius", h)), p2.is.setGroupProperty(tt("Inner Roundness", h))), Object.defineProperties(l, {
      position: {
        get: $(p2.p)
      },
      rotation: {
        get: $(p2.r)
      },
      points: {
        get: $(p2.pt)
      },
      outerRadius: {
        get: $(p2.or)
      },
      outerRoundness: {
        get: $(p2.os)
      },
      innerRadius: {
        get: $(p2.ir)
      },
      innerRoundness: {
        get: $(p2.is)
      },
      _name: { value: g2.nm }
    }), l.mn = g2.mn, l;
  }
  function P2(g2, d3, k2) {
    function l(m2) {
      return g2.p.ix === m2 ? l.position : g2.r.ix === m2 ? l.roundness : g2.s.ix === m2 || m2 === "Size" || m2 === "ADBE Vector Rect Size" ? l.size : null;
    }
    var h = kt(l, k2), p2 = d3.sh.ty === "tm" ? d3.sh.prop : d3.sh;
    return l.propertyIndex = g2.ix, p2.p.setGroupProperty(tt("Position", h)), p2.s.setGroupProperty(tt("Size", h)), p2.r.setGroupProperty(tt("Rotation", h)), Object.defineProperties(l, {
      position: {
        get: $(p2.p)
      },
      roundness: {
        get: $(p2.r)
      },
      size: {
        get: $(p2.s)
      },
      _name: { value: g2.nm }
    }), l.mn = g2.mn, l;
  }
  function c(g2, d3, k2) {
    function l(m2) {
      return g2.r.ix === m2 || m2 === "Round Corners 1" ? l.radius : null;
    }
    var h = kt(l, k2), p2 = d3;
    return l.propertyIndex = g2.ix, p2.rd.setGroupProperty(tt("Radius", h)), Object.defineProperties(l, {
      radius: {
        get: $(p2.rd)
      },
      _name: { value: g2.nm }
    }), l.mn = g2.mn, l;
  }
  function v2(g2, d3, k2) {
    function l(m2) {
      return g2.c.ix === m2 || m2 === "Copies" ? l.copies : g2.o.ix === m2 || m2 === "Offset" ? l.offset : null;
    }
    var h = kt(l, k2), p2 = d3;
    return l.propertyIndex = g2.ix, p2.c.setGroupProperty(tt("Copies", h)), p2.o.setGroupProperty(tt("Offset", h)), Object.defineProperties(l, {
      copies: {
        get: $(p2.c)
      },
      offset: {
        get: $(p2.o)
      },
      _name: { value: g2.nm }
    }), l.mn = g2.mn, l;
  }
  return function(g2, d3, k2) {
    var l;
    function h(m2) {
      if (typeof m2 == "number")
        return m2 = m2 === void 0 ? 1 : m2, m2 === 0 ? k2 : l[m2 - 1];
      for (var b2 = 0, E = l.length; b2 < E; ) {
        if (l[b2]._name === m2)
          return l[b2];
        b2 += 1;
      }
      return null;
    }
    function p2() {
      return k2;
    }
    return h.propertyGroup = kt(h, p2), l = t(g2, d3, h.propertyGroup), h.numProperties = l.length, h._name = "Contents", h;
  };
})();
var Oa = /* @__PURE__ */ (function() {
  var t = function(i) {
    var s = "", r2 = i.getFootageData();
    function a() {
      return s = "", r2 = i.getFootageData(), n;
    }
    function n(f) {
      if (r2[f])
        return s = f, r2 = r2[f], typeof r2 == "object" ? n : r2;
      var o2 = f.indexOf(s);
      if (o2 !== -1) {
        var u2 = parseInt(f.substr(o2 + s.length), 10);
        return r2 = r2[u2], typeof r2 == "object" ? n : r2;
      }
      return "";
    }
    return a;
  }, e = function(i) {
    function s(r2) {
      return r2 === "Outline" ? s.outlineInterface() : null;
    }
    return s._name = "Outline", s.outlineInterface = t(i), s;
  };
  return function(i) {
    function s(r2) {
      return r2 === "Data" ? s.dataInterface : null;
    }
    return s._name = "Data", s.dataInterface = e(i), s;
  };
})();
var za = {
  layer: Fa,
  effects: Va,
  comp: Ns,
  shape: Ra,
  footage: Oa
};
function Ga(t) {
  return za[t] || null;
}
var Ct = /* @__PURE__ */ (function() {
  function t(n, f, o2) {
    f.x && (o2.k = true, o2.x = true, o2.initiateExpression = Pi.initiateExpression, o2.effectsSequence.push(o2.initiateExpression(n, f, o2).bind(o2)));
  }
  function e(n) {
    return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value;
  }
  function i(n) {
    var f = -0.01, o2 = this.getValueAtTime(n), u2 = this.getValueAtTime(n + f), y2 = 0;
    if (o2.length) {
      var P2;
      for (P2 = 0; P2 < o2.length; P2 += 1)
        y2 += Math.pow(u2[P2] - o2[P2], 2);
      y2 = Math.sqrt(y2) * 100;
    } else
      y2 = 0;
    return y2;
  }
  function s(n) {
    if (this.vel !== void 0)
      return this.vel;
    var f = -1e-3, o2 = this.getValueAtTime(n), u2 = this.getValueAtTime(n + f), y2;
    if (o2.length) {
      y2 = rt("float32", o2.length);
      var P2;
      for (P2 = 0; P2 < o2.length; P2 += 1)
        y2[P2] = (u2[P2] - o2[P2]) / f;
    } else
      y2 = (u2 - o2) / f;
    return y2;
  }
  function r2() {
    return this.pv;
  }
  function a(n) {
    this.propertyGroup = n;
  }
  return {
    searchExpressions: t,
    getSpeedAtTime: i,
    getVelocityAtTime: s,
    getValueAtTime: e,
    getStaticValueAtTime: r2,
    setGroupProperty: a
  };
})();
function Ba() {
  function t(c, v2, g2) {
    if (!this.k || !this.keyframes)
      return this.pv;
    c = c ? c.toLowerCase() : "";
    var d3 = this.comp.renderedFrame, k2 = this.keyframes, l = k2[k2.length - 1].t;
    if (d3 <= l)
      return this.pv;
    var h, p2;
    g2 ? (v2 ? h = Math.abs(l - this.elem.comp.globalData.frameRate * v2) : h = Math.max(0, l - this.elem.data.ip), p2 = l - h) : ((!v2 || v2 > k2.length - 1) && (v2 = k2.length - 1), p2 = k2[k2.length - 1 - v2].t, h = l - p2);
    var m2, b2, E;
    if (c === "pingpong") {
      var x2 = Math.floor((d3 - p2) / h);
      if (x2 % 2 !== 0)
        return this.getValueAtTime((h - (d3 - p2) % h + p2) / this.comp.globalData.frameRate, 0);
    } else if (c === "offset") {
      var S2 = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), O2 = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), j = this.getValueAtTime(((d3 - p2) % h + p2) / this.comp.globalData.frameRate, 0), X = Math.floor((d3 - p2) / h);
      if (this.pv.length) {
        for (E = new Array(S2.length), b2 = E.length, m2 = 0; m2 < b2; m2 += 1)
          E[m2] = (O2[m2] - S2[m2]) * X + j[m2];
        return E;
      }
      return (O2 - S2) * X + j;
    } else if (c === "continue") {
      var Y = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), L2 = this.getValueAtTime((l - 1e-3) / this.comp.globalData.frameRate, 0);
      if (this.pv.length) {
        for (E = new Array(Y.length), b2 = E.length, m2 = 0; m2 < b2; m2 += 1)
          E[m2] = Y[m2] + (Y[m2] - L2[m2]) * ((d3 - l) / this.comp.globalData.frameRate) / 5e-4;
        return E;
      }
      return Y + (Y - L2) * ((d3 - l) / 1e-3);
    }
    return this.getValueAtTime(((d3 - p2) % h + p2) / this.comp.globalData.frameRate, 0);
  }
  function e(c, v2, g2) {
    if (!this.k)
      return this.pv;
    c = c ? c.toLowerCase() : "";
    var d3 = this.comp.renderedFrame, k2 = this.keyframes, l = k2[0].t;
    if (d3 >= l)
      return this.pv;
    var h, p2;
    g2 ? (v2 ? h = Math.abs(this.elem.comp.globalData.frameRate * v2) : h = Math.max(0, this.elem.data.op - l), p2 = l + h) : ((!v2 || v2 > k2.length - 1) && (v2 = k2.length - 1), p2 = k2[v2].t, h = p2 - l);
    var m2, b2, E;
    if (c === "pingpong") {
      var x2 = Math.floor((l - d3) / h);
      if (x2 % 2 === 0)
        return this.getValueAtTime(((l - d3) % h + l) / this.comp.globalData.frameRate, 0);
    } else if (c === "offset") {
      var S2 = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), O2 = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), j = this.getValueAtTime((h - (l - d3) % h + l) / this.comp.globalData.frameRate, 0), X = Math.floor((l - d3) / h) + 1;
      if (this.pv.length) {
        for (E = new Array(S2.length), b2 = E.length, m2 = 0; m2 < b2; m2 += 1)
          E[m2] = j[m2] - (O2[m2] - S2[m2]) * X;
        return E;
      }
      return j - (O2 - S2) * X;
    } else if (c === "continue") {
      var Y = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), L2 = this.getValueAtTime((l + 1e-3) / this.comp.globalData.frameRate, 0);
      if (this.pv.length) {
        for (E = new Array(Y.length), b2 = E.length, m2 = 0; m2 < b2; m2 += 1)
          E[m2] = Y[m2] + (Y[m2] - L2[m2]) * (l - d3) / 1e-3;
        return E;
      }
      return Y + (Y - L2) * (l - d3) / 1e-3;
    }
    return this.getValueAtTime((h - ((l - d3) % h + l)) / this.comp.globalData.frameRate, 0);
  }
  function i(c, v2) {
    if (!this.k)
      return this.pv;
    if (c = (c || 0.4) * 0.5, v2 = Math.floor(v2 || 5), v2 <= 1)
      return this.pv;
    var g2 = this.comp.renderedFrame / this.comp.globalData.frameRate, d3 = g2 - c, k2 = g2 + c, l = v2 > 1 ? (k2 - d3) / (v2 - 1) : 1, h = 0, p2 = 0, m2;
    this.pv.length ? m2 = rt("float32", this.pv.length) : m2 = 0;
    for (var b2; h < v2; ) {
      if (b2 = this.getValueAtTime(d3 + h * l), this.pv.length)
        for (p2 = 0; p2 < this.pv.length; p2 += 1)
          m2[p2] += b2[p2];
      else
        m2 += b2;
      h += 1;
    }
    if (this.pv.length)
      for (p2 = 0; p2 < this.pv.length; p2 += 1)
        m2[p2] /= v2;
    else
      m2 /= v2;
    return m2;
  }
  function s(c) {
    this._transformCachingAtTime || (this._transformCachingAtTime = {
      v: new ut()
    });
    var v2 = this._transformCachingAtTime.v;
    if (v2.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
      var g2 = this.a.getValueAtTime(c);
      v2.translate(
        -g2[0] * this.a.mult,
        -g2[1] * this.a.mult,
        g2[2] * this.a.mult
      );
    }
    if (this.appliedTransformations < 2) {
      var d3 = this.s.getValueAtTime(c);
      v2.scale(
        d3[0] * this.s.mult,
        d3[1] * this.s.mult,
        d3[2] * this.s.mult
      );
    }
    if (this.sk && this.appliedTransformations < 3) {
      var k2 = this.sk.getValueAtTime(c), l = this.sa.getValueAtTime(c);
      v2.skewFromAxis(-k2 * this.sk.mult, l * this.sa.mult);
    }
    if (this.r && this.appliedTransformations < 4) {
      var h = this.r.getValueAtTime(c);
      v2.rotate(-h * this.r.mult);
    } else if (!this.r && this.appliedTransformations < 4) {
      var p2 = this.rz.getValueAtTime(c), m2 = this.ry.getValueAtTime(c), b2 = this.rx.getValueAtTime(c), E = this.or.getValueAtTime(c);
      v2.rotateZ(-p2 * this.rz.mult).rotateY(m2 * this.ry.mult).rotateX(b2 * this.rx.mult).rotateZ(-E[2] * this.or.mult).rotateY(E[1] * this.or.mult).rotateX(E[0] * this.or.mult);
    }
    if (this.data.p && this.data.p.s) {
      var x2 = this.px.getValueAtTime(c), S2 = this.py.getValueAtTime(c);
      if (this.data.p.z) {
        var O2 = this.pz.getValueAtTime(c);
        v2.translate(
          x2 * this.px.mult,
          S2 * this.py.mult,
          -O2 * this.pz.mult
        );
      } else
        v2.translate(x2 * this.px.mult, S2 * this.py.mult, 0);
    } else {
      var j = this.p.getValueAtTime(c);
      v2.translate(
        j[0] * this.p.mult,
        j[1] * this.p.mult,
        -j[2] * this.p.mult
      );
    }
    return v2;
  }
  function r2() {
    return this.v.clone(new ut());
  }
  var a = De.getTransformProperty;
  De.getTransformProperty = function(c, v2, g2) {
    var d3 = a(c, v2, g2);
    return d3.dynamicProperties.length ? d3.getValueAtTime = s.bind(d3) : d3.getValueAtTime = r2.bind(d3), d3.setGroupProperty = Ct.setGroupProperty, d3;
  };
  var n = N.getProp;
  N.getProp = function(c, v2, g2, d3, k2) {
    var l = n(c, v2, g2, d3, k2);
    l.kf ? l.getValueAtTime = Ct.getValueAtTime.bind(l) : l.getValueAtTime = Ct.getStaticValueAtTime.bind(l), l.setGroupProperty = Ct.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = Ct.getVelocityAtTime.bind(l), l.getSpeedAtTime = Ct.getSpeedAtTime.bind(l), l.numKeys = v2.a === 1 ? v2.k.length : 0, l.propertyIndex = v2.ix;
    var h = 0;
    return g2 !== 0 && (h = rt("float32", v2.a === 1 ? v2.k[0].s.length : v2.k.length)), l._cachingAtTime = {
      lastFrame: He,
      lastIndex: 0,
      value: h
    }, Ct.searchExpressions(c, v2, l), l.k && k2.addDynamicProperty(l), l;
  };
  function f(c) {
    return this._cachingAtTime || (this._cachingAtTime = {
      shapeValue: gt.clone(this.pv),
      lastIndex: 0,
      lastTime: He
    }), c *= this.elem.globalData.frameRate, c -= this.offsetTime, c !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < c ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = c, this.interpolateShape(c, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
  }
  var o2 = Wt.getConstructorFunction(), u2 = Wt.getKeyframedConstructorFunction();
  function y2() {
  }
  y2.prototype = {
    vertices: function(c, v2) {
      this.k && this.getValue();
      var g2 = this.v;
      v2 !== void 0 && (g2 = this.getValueAtTime(v2, 0));
      var d3, k2 = g2._length, l = g2[c], h = g2.v, p2 = mt(k2);
      for (d3 = 0; d3 < k2; d3 += 1)
        c === "i" || c === "o" ? p2[d3] = [l[d3][0] - h[d3][0], l[d3][1] - h[d3][1]] : p2[d3] = [l[d3][0], l[d3][1]];
      return p2;
    },
    points: function(c) {
      return this.vertices("v", c);
    },
    inTangents: function(c) {
      return this.vertices("i", c);
    },
    outTangents: function(c) {
      return this.vertices("o", c);
    },
    isClosed: function() {
      return this.v.c;
    },
    pointOnPath: function(c, v2) {
      var g2 = this.v;
      v2 !== void 0 && (g2 = this.getValueAtTime(v2, 0)), this._segmentsLength || (this._segmentsLength = Lt.getSegmentsLength(g2));
      for (var d3 = this._segmentsLength, k2 = d3.lengths, l = d3.totalLength * c, h = 0, p2 = k2.length, m2 = 0, b2; h < p2; ) {
        if (m2 + k2[h].addedLength > l) {
          var E = h, x2 = g2.c && h === p2 - 1 ? 0 : h + 1, S2 = (l - m2) / k2[h].addedLength;
          b2 = Lt.getPointInSegment(g2.v[E], g2.v[x2], g2.o[E], g2.i[x2], S2, k2[h]);
          break;
        } else
          m2 += k2[h].addedLength;
        h += 1;
      }
      return b2 || (b2 = g2.c ? [g2.v[0][0], g2.v[0][1]] : [g2.v[g2._length - 1][0], g2.v[g2._length - 1][1]]), b2;
    },
    vectorOnPath: function(c, v2, g2) {
      c == 1 ? c = this.v.c : c == 0 && (c = 0.999);
      var d3 = this.pointOnPath(c, v2), k2 = this.pointOnPath(c + 1e-3, v2), l = k2[0] - d3[0], h = k2[1] - d3[1], p2 = Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
      if (p2 === 0)
        return [0, 0];
      var m2 = g2 === "tangent" ? [l / p2, h / p2] : [-h / p2, l / p2];
      return m2;
    },
    tangentOnPath: function(c, v2) {
      return this.vectorOnPath(c, v2, "tangent");
    },
    normalOnPath: function(c, v2) {
      return this.vectorOnPath(c, v2, "normal");
    },
    setGroupProperty: Ct.setGroupProperty,
    getValueAtTime: Ct.getStaticValueAtTime
  }, st([y2], o2), st([y2], u2), u2.prototype.getValueAtTime = f, u2.prototype.initiateExpression = Pi.initiateExpression;
  var P2 = Wt.getShapeProp;
  Wt.getShapeProp = function(c, v2, g2, d3, k2) {
    var l = P2(c, v2, g2, d3, k2);
    return l.propertyIndex = v2.ix, l.lock = false, g2 === 3 ? Ct.searchExpressions(c, v2.pt, l) : g2 === 4 && Ct.searchExpressions(c, v2.ks, l), l.k && c.addDynamicProperty(l), l;
  };
}
function Na() {
  Ba();
}
function ki() {
}
ki.prototype = {
  createMergeNode: (t, e) => {
    var i = B("feMerge");
    i.setAttribute("result", t);
    var s, r2;
    for (r2 = 0; r2 < e.length; r2 += 1)
      s = B("feMergeNode"), s.setAttribute("in", e[r2]), i.appendChild(s), i.appendChild(s);
    return i;
  }
};
var js = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
function Ai(t, e, i, s, r2) {
  this.filterManager = e;
  var a = B("feColorMatrix");
  a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", js + " 1 0"), this.linearFilter = a, a.setAttribute("result", s + "_tint_1"), t.appendChild(a), a = B("feColorMatrix"), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", s + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
  var n = this.createMergeNode(
    s,
    [
      r2,
      s + "_tint_1",
      s + "_tint_2"
    ]
  );
  t.appendChild(n);
}
st([ki], Ai);
Ai.prototype.renderFrame = function(t) {
  if (t || this.filterManager._mdf) {
    var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, s = this.filterManager.effectElements[2].p.v / 100;
    this.linearFilter.setAttribute("values", js + " " + s + " 0"), this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0");
  }
};
function qs(t, e, i, s) {
  this.filterManager = e;
  var r2 = B("feColorMatrix");
  r2.setAttribute("type", "matrix"), r2.setAttribute("color-interpolation-filters", "sRGB"), r2.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r2.setAttribute("result", s), t.appendChild(r2), this.matrixFilter = r2;
}
qs.prototype.renderFrame = function(t) {
  if (t || this.filterManager._mdf) {
    var e = this.filterManager.effectElements[2].p.v, i = this.filterManager.effectElements[6].p.v;
    this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
  }
};
function Ei(t, e, i) {
  this.initialized = false, this.filterManager = e, this.elem = i, this.paths = [];
}
Ei.prototype.initialize = function() {
  var t = this.elem.layerElement.children || this.elem.layerElement.childNodes, e, i, s, r2;
  for (this.filterManager.effectElements[1].p.v === 1 ? (r2 = this.elem.maskManager.masksProperties.length, s = 0) : (s = this.filterManager.effectElements[0].p.v - 1, r2 = s + 1), i = B("g"), i.setAttribute("fill", "none"), i.setAttribute("stroke-linecap", "round"), i.setAttribute("stroke-dashoffset", 1), s; s < r2; s += 1)
    e = B("path"), i.appendChild(e), this.paths.push({ p: e, m: s });
  if (this.filterManager.effectElements[10].p.v === 3) {
    var a = B("mask"), n = vt();
    a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(i), this.elem.globalData.defs.appendChild(a);
    var f = B("g");
    for (f.setAttribute("mask", "url(" + At() + "#" + n + ")"); t[0]; )
      f.appendChild(t[0]);
    this.elem.layerElement.appendChild(f), this.masker = a, i.setAttribute("stroke", "#fff");
  } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
    if (this.filterManager.effectElements[10].p.v === 2)
      for (t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length; )
        this.elem.layerElement.removeChild(t[0]);
    this.elem.layerElement.appendChild(i), this.elem.layerElement.removeAttribute("mask"), i.setAttribute("stroke", "#fff");
  }
  this.initialized = true, this.pathMasker = i;
};
Ei.prototype.renderFrame = function(t) {
  this.initialized || this.initialize();
  var e, i = this.paths.length, s, r2;
  for (e = 0; e < i; e += 1)
    if (this.paths[e].m !== -1 && (s = this.elem.maskManager.viewData[this.paths[e].m], r2 = this.paths[e].p, (t || this.filterManager._mdf || s.prop._mdf) && r2.setAttribute("d", s.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || s.prop._mdf)) {
      var a;
      if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
        var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, f = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, o2 = r2.getTotalLength();
        a = "0 0 0 " + o2 * n + " ";
        var u2 = o2 * (f - n), y2 = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01, P2 = Math.floor(u2 / y2), c;
        for (c = 0; c < P2; c += 1)
          a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
        a += "0 " + o2 * 10 + " 0 0";
      } else
        a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
      r2.setAttribute("stroke-dasharray", a);
    }
  if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
    var v2 = this.filterManager.effectElements[3].p.v;
    this.pathMasker.setAttribute("stroke", "rgb(" + Vt(v2[0] * 255) + "," + Vt(v2[1] * 255) + "," + Vt(v2[2] * 255) + ")");
  }
};
function Hs(t, e, i, s) {
  this.filterManager = e;
  var r2 = B("feColorMatrix");
  r2.setAttribute("type", "matrix"), r2.setAttribute("color-interpolation-filters", "linearRGB"), r2.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(r2);
  var a = B("feComponentTransfer");
  a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", s), this.matrixFilter = a;
  var n = B("feFuncR");
  n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
  var f = B("feFuncG");
  f.setAttribute("type", "table"), a.appendChild(f), this.feFuncG = f;
  var o2 = B("feFuncB");
  o2.setAttribute("type", "table"), a.appendChild(o2), this.feFuncB = o2, t.appendChild(a);
}
Hs.prototype.renderFrame = function(t) {
  if (t || this.filterManager._mdf) {
    var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, s = this.filterManager.effectElements[2].p.v, r2 = s[0] + " " + i[0] + " " + e[0], a = s[1] + " " + i[1] + " " + e[1], n = s[2] + " " + i[2] + " " + e[2];
    this.feFuncR.setAttribute("tableValues", r2), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
  }
};
function ai(t, e, i, s) {
  this.filterManager = e;
  var r2 = this.filterManager.effectElements, a = B("feComponentTransfer");
  (r2[10].p.k || r2[10].p.v !== 0 || r2[11].p.k || r2[11].p.v !== 1 || r2[12].p.k || r2[12].p.v !== 1 || r2[13].p.k || r2[13].p.v !== 0 || r2[14].p.k || r2[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (r2[17].p.k || r2[17].p.v !== 0 || r2[18].p.k || r2[18].p.v !== 1 || r2[19].p.k || r2[19].p.v !== 1 || r2[20].p.k || r2[20].p.v !== 0 || r2[21].p.k || r2[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (r2[24].p.k || r2[24].p.v !== 0 || r2[25].p.k || r2[25].p.v !== 1 || r2[26].p.k || r2[26].p.v !== 1 || r2[27].p.k || r2[27].p.v !== 0 || r2[28].p.k || r2[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (r2[31].p.k || r2[31].p.v !== 0 || r2[32].p.k || r2[32].p.v !== 1 || r2[33].p.k || r2[33].p.v !== 1 || r2[34].p.k || r2[34].p.v !== 0 || r2[35].p.k || r2[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (r2[3].p.k || r2[3].p.v !== 0 || r2[4].p.k || r2[4].p.v !== 1 || r2[5].p.k || r2[5].p.v !== 1 || r2[6].p.k || r2[6].p.v !== 0 || r2[7].p.k || r2[7].p.v !== 1) && (a = B("feComponentTransfer"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", s), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a));
}
ai.prototype.createFeFunc = function(t, e) {
  var i = B(t);
  return i.setAttribute("type", "table"), e.appendChild(i), i;
};
ai.prototype.getTableValue = function(t, e, i, s, r2) {
  for (var a = 0, n = 256, f, o2 = Math.min(t, e), u2 = Math.max(t, e), y2 = Array.call(null, { length: n }), P2, c = 0, v2 = r2 - s, g2 = e - t; a <= 256; )
    f = a / 256, f <= o2 ? P2 = g2 < 0 ? r2 : s : f >= u2 ? P2 = g2 < 0 ? s : r2 : P2 = s + v2 * Math.pow((f - t) / g2, 1 / i), y2[c] = P2, c += 1, a += 256 / (n - 1);
  return y2.join(" ");
};
ai.prototype.renderFrame = function(t) {
  if (t || this.filterManager._mdf) {
    var e, i = this.filterManager.effectElements;
    this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e));
  }
};
function wi(t, e, i, s, r2) {
  var a = e.container.globalData.renderConfig.filterSize, n = e.data.fs || a;
  t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
  var f = B("feGaussianBlur");
  f.setAttribute("in", "SourceAlpha"), f.setAttribute("result", s + "_drop_shadow_1"), f.setAttribute("stdDeviation", "0"), this.feGaussianBlur = f, t.appendChild(f);
  var o2 = B("feOffset");
  o2.setAttribute("dx", "25"), o2.setAttribute("dy", "0"), o2.setAttribute("in", s + "_drop_shadow_1"), o2.setAttribute("result", s + "_drop_shadow_2"), this.feOffset = o2, t.appendChild(o2);
  var u2 = B("feFlood");
  u2.setAttribute("flood-color", "#00ff00"), u2.setAttribute("flood-opacity", "1"), u2.setAttribute("result", s + "_drop_shadow_3"), this.feFlood = u2, t.appendChild(u2);
  var y2 = B("feComposite");
  y2.setAttribute("in", s + "_drop_shadow_3"), y2.setAttribute("in2", s + "_drop_shadow_2"), y2.setAttribute("operator", "in"), y2.setAttribute("result", s + "_drop_shadow_4"), t.appendChild(y2);
  var P2 = this.createMergeNode(
    s,
    [
      s + "_drop_shadow_4",
      r2
    ]
  );
  t.appendChild(P2);
}
st([ki], wi);
wi.prototype.renderFrame = function(t) {
  if (t || this.filterManager._mdf) {
    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
      var e = this.filterManager.effectElements[0].p.v;
      this.feFlood.setAttribute("flood-color", Sr(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)));
    }
    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
      var i = this.filterManager.effectElements[3].p.v, s = (this.filterManager.effectElements[2].p.v - 90) * lt, r2 = i * Math.cos(s), a = i * Math.sin(s);
      this.feOffset.setAttribute("dx", r2), this.feOffset.setAttribute("dy", a);
    }
  }
};
var je = [];
function be(t, e, i) {
  this.initialized = false, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = B("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement;
}
be.prototype.findSymbol = function(t) {
  for (var e = 0, i = je.length; e < i; ) {
    if (je[e] === t)
      return je[e];
    e += 1;
  }
  return null;
};
be.prototype.replaceInParent = function(t, e) {
  var i = t.layerElement.parentNode;
  if (i) {
    for (var s = i.children, r2 = 0, a = s.length; r2 < a && s[r2] !== t.layerElement; )
      r2 += 1;
    var n;
    r2 <= a - 2 && (n = s[r2 + 1]);
    var f = B("use");
    f.setAttribute("href", "#" + e), n ? i.insertBefore(f, n) : i.appendChild(f);
  }
};
be.prototype.setElementAsMask = function(t, e) {
  if (!this.findSymbol(e)) {
    var i = vt(), s = B("mask");
    s.setAttribute("id", e.layerId), s.setAttribute("mask-type", "alpha"), je.push(e);
    var r2 = t.globalData.defs;
    r2.appendChild(s);
    var a = B("symbol");
    a.setAttribute("id", i), this.replaceInParent(e, i), a.appendChild(e.layerElement), r2.appendChild(a);
    var n = B("use");
    n.setAttribute("href", "#" + i), s.appendChild(n), e.data.hd = false, e.show();
  }
  t.setMatte(e.layerId);
};
be.prototype.initialize = function() {
  for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, s = e.length; i < s; )
    e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
  this.initialized = true;
};
be.prototype.renderFrame = function() {
  this.initialized || this.initialize();
};
function Xs(t, e, i, s) {
  t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
  var r2 = B("feGaussianBlur");
  r2.setAttribute("result", s), t.appendChild(r2), this.feGaussianBlur = r2;
}
Xs.prototype.renderFrame = function(t) {
  if (t || this.filterManager._mdf) {
    var e = 0.3, i = this.filterManager.effectElements[0].p.v * e, s = this.filterManager.effectElements[1].p.v, r2 = s == 3 ? 0 : i, a = s == 2 ? 0 : i;
    this.feGaussianBlur.setAttribute("stdDeviation", r2 + " " + a);
    var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
    this.feGaussianBlur.setAttribute("edgeMode", n);
  }
};
function Si() {
}
Si.prototype.init = function(t) {
  this.effectsManager = t, this.type = Ms.TRANSFORM_EFFECT, this.matrix = new ut(), this.opacity = -1, this._mdf = false, this._opMdf = false;
};
Si.prototype.renderFrame = function(t) {
  if (this._opMdf = false, this._mdf = false, t || this.effectsManager._mdf) {
    var e = this.effectsManager.effectElements, i = e[0].p.v, s = e[1].p.v, r2 = e[2].p.v === 1, a = e[3].p.v, n = r2 ? a : e[4].p.v, f = e[5].p.v, o2 = e[6].p.v, u2 = e[7].p.v;
    this.matrix.reset(), this.matrix.translate(-i[0], -i[1], i[2]), this.matrix.scale(n * 0.01, a * 0.01, 1), this.matrix.rotate(-u2 * lt), this.matrix.skewFromAxis(-f * lt, (o2 + 90) * lt), this.matrix.translate(s[0], s[1], 0), this._mdf = true, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = true);
  }
};
function Us(t, e) {
  this.init(e);
}
st([Si], Us);
_s(Ma);
Cr(Ga);
Na();
Bt(20, Ai, true);
Bt(21, qs, true);
Bt(22, Ei, false);
Bt(23, Hs, true);
Bt(24, ai, true);
Bt(25, wi, true);
Bt(28, be, false);
Bt(29, Xs, true);
Bt(35, Us, false);
function ja(t) {
  return ht.loadAnimation(ke({
    renderer: "svg"
  }, t));
}
var qa = {
  loadAnimation: ja
};
var Ha = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  "indianred ": "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370d8",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#d87093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Xa(t) {
  return t.startsWith("#") ? t.length === 4 ? `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}` : t : Ha[t.toLowerCase()] || "#000000";
}
function fs(t) {
  if (t === "light" || t === 1 || t === "1")
    return 1;
  if (t === "regular" || t === 2 || t === "2")
    return 2;
  if (t === "bold" || t === 3 || t === "3")
    return 3;
}
function us(t) {
  return structuredClone(t);
}
function cs(t) {
  return t == null;
}
function Ua(t) {
  return t !== null && typeof t == "object";
}
function Ws(t, e, i) {
  const s = Array.isArray(e) ? e : e.split(".");
  let r2 = t;
  for (const a of s) {
    if (!Ua(r2) || !(a in r2))
      return i;
    r2 = r2[a];
  }
  return r2 === void 0 ? i : r2;
}
function wt(t, e, i) {
  let s = t;
  const r2 = Array.isArray(e) ? e : e.split(".");
  for (let a = 0; a < r2.length; ++a)
    a === r2.length - 1 ? s[r2[a]] = i : s = s[r2[a]];
}
function ui(t) {
  const e = t.toString(16);
  return e.length == 1 ? "0" + e : e;
}
function ve(t) {
  return Math.round(t / 255 * 1e3) / 1e3;
}
function ci(t) {
  return Math.round(t * 255);
}
function Wa(t) {
  return "#" + ui(t.r) + ui(t.g) + ui(t.b);
}
function $a(t) {
  let e = parseInt(t[0] != "#" ? t : t.substring(1), 16);
  return {
    r: e >> 16 & 255,
    g: e >> 8 & 255,
    b: e & 255
  };
}
function Ya(t) {
  const {
    r: e,
    g: i,
    b: s
  } = $a(t);
  return [ve(e), ve(i), ve(s)];
}
function Za(t) {
  const e = {
    r: ci(t[0]),
    g: ci(t[1]),
    b: ci(t[2])
  };
  return Wa(e);
}
function ms(t, { lottieInstance: e } = {}) {
  const i = [];
  return !t || !t.layers || t.layers.forEach((s, r2) => {
    !s.nm || !s.ef || s.ef.forEach((a, n) => {
      var P2, c, v2;
      const f = (v2 = (c = (P2 = a == null ? void 0 : a.ef) == null ? void 0 : P2[0]) == null ? void 0 : c.v) == null ? void 0 : v2.k;
      if (f === void 0)
        return;
      let o2;
      e ? o2 = `renderer.elements.${r2}.effectsManager.effectElements.${n}.effectElements.0.p.v` : o2 = `layers.${r2}.ef.${n}.ef.0.v.k`;
      let u2;
      if (a.mn === "ADBE Color Control" ? u2 = "color" : a.mn === "ADBE Slider Control" ? u2 = "slider" : a.mn === "ADBE Point Control" ? u2 = "point" : a.mn === "ADBE Checkbox Control" ? u2 = "checkbox" : a.mn.startsWith("Pseudo/") && (u2 = "feature"), !u2)
        return;
      const y2 = a.nm.toLowerCase();
      i.push({
        name: y2,
        path: o2,
        value: f,
        type: u2
      });
    });
  }), i;
}
function Ye(t, e) {
  for (const i of e)
    wt(t, i.path, i.value);
}
function Se(t, e, i) {
  for (const s of e)
    s.type === "color" ? typeof i == "object" && "r" in i && "g" in i && "b" in i ? wt(t, s.path, [ve(i.r), ve(i.g), ve(i.b)]) : Array.isArray(i) ? wt(t, s.path, i) : typeof i == "string" && wt(t, s.path, Ya(Xa(i))) : s.type === "point" ? typeof i == "object" && "x" in i && "y" in i ? (wt(t, s.path + ".0", i.x), wt(t, s.path + ".1", i.y)) : Array.isArray(i) && (wt(t, s.path + ".0", i[0]), wt(t, s.path + ".1", i[1])) : wt(t, s.path, i);
}
var Ja = {
  loop: false,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet",
    progressiveLoad: true,
    hideOnTransparent: true
  }
};
var Ka = ["default"];
function Qa() {
  return new Proxy(this, {
    set: (t, e, i, s) => (typeof e == "string" && (i ? Se(
      this.lottieInstance,
      this.lottieProperties.filter((r2) => r2.type === "color" && r2.name === e),
      i
    ) : Ye(
      this.lottieInstance,
      this.lottieProperties.filter((r2) => r2.type === "color" && r2.name === e)
    ), t.refresh()), true),
    get: (t, e, i) => {
      for (const s of t.lottieProperties)
        if (s.type == "color" && typeof e == "string" && e == s.name) {
          const r2 = Ws(this.lottieInstance, s.path);
          if (r2)
            return Za(r2);
        }
    },
    deleteProperty: (t, e) => (typeof e == "string" && (Ye(
      this.lottieInstance,
      this.lottieProperties.filter((i) => i.type === "color" && i.name === e)
    ), t.refresh()), true),
    ownKeys: (t) => t.lottieProperties.filter((e) => e.type == "color").map((e) => e.name),
    has: (t, e) => {
      for (const i of t.lottieProperties)
        if (i.type == "color" && typeof e == "string" && e == i.name)
          return true;
      return false;
    },
    getOwnPropertyDescriptor: (t) => ({
      enumerable: true,
      configurable: true
    })
  });
}
var en = class {
  /**
   * Creates a new Player instance.
   * @param container The DOM element where the animation will be rendered.
   * @param data Lottie animation data.
   * @param properties Initial icon properties (colors, stroke, state, etc.).
   * @param options Additional options (e.g., autoInit).
   */
  constructor(e, i, s, r2 = { autoInit: true }) {
    Et(this, "_container");
    Et(this, "_iconData");
    Et(this, "_initialProperties");
    Et(this, "_lottieInstance");
    Et(this, "_ready", false);
    Et(this, "_colorsProxy");
    Et(this, "_direction", 1);
    Et(this, "_speed", 1);
    Et(this, "_lottieProperties");
    Et(this, "_eventHandlers", {});
    Et(this, "_state");
    Et(this, "_availableStates");
    if (this._container = e, this._iconData = i, this._initialProperties = s || {}, this._availableStates = (i.markers || []).map((a) => {
      const n = a.cm.split(":"), f = {
        time: a.tm,
        duration: a.dr,
        name: "",
        default: false,
        params: []
      };
      for (; Ka.includes(n[0]); ) {
        switch (n[0]) {
          case "default":
            f.default = true;
            break;
          default:
            throw new Error(`Unsupported state flag: ${n[0]}`);
        }
        n.shift();
      }
      return f.name = n[0], f.params = n.slice(1, n.length), f.name === this._initialProperties.state ? this._state = f : f.default && cs(this._initialProperties.state) && (this._state = f), f;
    }).filter((a) => a.duration > 0), this._availableStates.length && (this._initialProperties.stroke && ![1, 2, 3, "light", "regular", "bold"].includes(this._initialProperties.stroke) && delete this._initialProperties.stroke, this._initialProperties.state && !this._state && (this._state = this._availableStates.filter((a) => a.default)[0])), !this._availableStates.length) {
      this._iconData = us(this._iconData);
      const a = ms(this._iconData, { lottieInstance: false });
      if (a && this._initialProperties.state) {
        const n = `state-${this._initialProperties.state.toLowerCase()}`;
        Se(
          this._iconData,
          a.filter((f) => f.name.startsWith("state-")),
          0
        ), Se(
          this._iconData,
          a.filter((f) => f.name === n),
          1
        );
      }
      if (a && this._initialProperties.stroke) {
        const n = a.filter((f) => f.name === "stroke")[0];
        if (n) {
          const f = n.value / 50, o2 = this._initialProperties.stroke * f;
          wt(this._iconData, n.path, o2);
        }
      }
      if (a && this._initialProperties.scale) {
        const n = a.filter((f) => f.name === "scale")[0];
        if (n) {
          const f = n.value / 50, o2 = this._initialProperties.scale * f;
          wt(this._iconData, n.path, o2);
        }
      }
      if (a && this._initialProperties.axisX && this._initialProperties.axisY) {
        const n = a.filter((f) => f.name === "axis")[0];
        if (n) {
          const f = (n.value[0] + n.value[1]) / 2 / 50;
          wt(this._iconData, n.path + ".0", this._initialProperties.axisX * f), wt(this._iconData, n.path + ".1", this._initialProperties.axisY * f);
        }
      }
    }
    r2.autoInit && this.init();
  }
  /**
   * Initializes the player and connects it to the DOM element.
   * Throws an error if already initialized.
   */
  init() {
    if (this._lottieInstance)
      throw new Error("Already connected player!");
    const e = {}, i = {};
    if (this._state && (i.initialSegment = [this._state.time, this._state.time + this._state.duration + 1]), this._availableStates.length) {
      const s = this._availableStates[0], r2 = this._availableStates[this._availableStates.length - 1];
      e.ip = s.time, e.op = r2.time + r2.duration + 1;
    }
    this._lottieInstance = qa.loadAnimation(Hi(ke(ke({}, Ja), i), {
      container: this._container,
      animationData: Object.assign(us(this._iconData), e)
    })), this._initialProperties.colors && (this.colors = this._initialProperties.colors), this._initialProperties.stroke && (this.stroke = this._initialProperties.stroke), this._lottieInstance.addEventListener("complete", () => {
      this.triggerEvent("complete");
    }), this._lottieInstance.addEventListener("loopComplete", () => {
      this.triggerEvent("complete");
    }), this._lottieInstance.addEventListener("enterFrame", () => {
      this.triggerEvent("frame");
    }), this._lottieInstance.isLoaded ? (this._ready = true, this.triggerEvent("ready")) : this._lottieInstance.addEventListener("config_ready", () => {
      this._ready = true, this.triggerEvent("ready");
    });
  }
  /**
   * Destroys the player and releases all resources.
   * Throws an error if not initialized.
   */
  destroy() {
    if (!this._lottieInstance)
      throw new Error("Not connected player!");
    this._ready = false, this._lottieInstance.destroy(), this._lottieInstance = void 0, this._colorsProxy = void 0, this._lottieProperties = void 0;
  }
  /**
   * Registers an event listener for a player event.
   * @param name Event name (e.g., 'complete', 'frame', 'ready').
   * @param handler Handler function to call when the event is triggered.
   * @returns Function to remove the listener.
   */
  addEventListener(e, i) {
    return this._eventHandlers[e] || (this._eventHandlers[e] = []), this._eventHandlers[e].push(i), () => {
      this.removeEventListener(e, i);
    };
  }
  /**
   * Removes an event listener for a player event.
   * @param name Event name.
   * @param handler Handler function to remove. If not provided, removes all handlers for the event.
   */
  removeEventListener(e, i) {
    if (!i)
      this._eventHandlers[e] = null;
    else if (this._eventHandlers[e]) {
      let s = 0, r2 = this._eventHandlers[e].length;
      for (; s < r2; )
        this._eventHandlers[e][s] === i && (this._eventHandlers[e].splice(s, 1), s -= 1, r2 -= 1), s += 1;
      this._eventHandlers[e].length || (this._eventHandlers[e] = null);
    }
  }
  /**
   * Triggers a player event and invokes all registered callbacks.
   * @param name Event name.
   * @param args Optional arguments to pass to the callbacks.
   */
  triggerEvent(e, i) {
    if (this._eventHandlers[e]) {
      const s = this._eventHandlers[e];
      for (let r2 = 0; r2 < s.length; r2 += 1)
        s[r2](i);
    }
  }
  /**
   * Forces a re-render of the animation.
   */
  refresh() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    this._lottieInstance.renderer.renderFrame(null), this.triggerEvent("refresh");
  }
  /**
   * Starts playing the animation from the current frame.
   * Note: If the animation is finished, it cannot be played again from the last frame.
   */
  play() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    this._lottieInstance.setDirection(this._direction), this._lottieInstance.play();
  }
  /**
   * Plays the animation from the beginning of the current state or from the start if no state is set.
   */
  playFromStart() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    this._lottieInstance.setDirection(1), this._state ? this._lottieInstance.playSegments([this._state.time, this._state.time + this._state.duration + 1], true) : this._lottieInstance.goToAndPlay(0);
  }
  /**
   * Pauses the animation at the current frame.
   */
  pause() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    this._lottieInstance.pause();
  }
  /**
   * Stop the animation.
   */
  stop() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    this._lottieInstance.stop();
  }
  /**
   * Moves the animation to a specific frame and stops.
   * @param frame Frame number to seek to.
   */
  seek(e) {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    this._lottieInstance.goToAndStop(e, true);
  }
  /**
   * Moves the animation to the first frame and stops.
   */
  seekToStart() {
    this.seek(0);
  }
  /**
   * Moves the animation to the last frame and stops.
   */
  seekToEnd() {
    this.seek(Math.max(0, this.frameCount));
  }
  /**
   * Sets the animation segment to play.
   * If no segment is provided, resets to the default segment.
   * @param segment Optional segment as [start, end] frame numbers.
   */
  switchSegment(e) {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    e ? this._lottieInstance.setSegment(e[0], e[1]) : this._lottieInstance.resetSegments(true), this._lottieInstance.goToAndStop(0, true);
  }
  /**
   * Sets multiple icon properties at once. 
   * Any property not provided will be reset to its default value.
   * @param properties Properties to assign.
   */
  set properties(e) {
    this.colors = e.colors || null, this.stroke = e.stroke || null, this.state = e.state || null;
  }
  /**
   * Gets the current icon properties (colors, stroke, state).
   * @returns The current properties.
   */
  get properties() {
    const e = {};
    return this.lottieProperties.filter((i) => i.type === "color").length && (e.colors = ke({}, this.colors)), this.lottieProperties.filter((i) => i.name === "stroke" || i.name === "stroke-layers").length && (e.stroke = this.stroke), this._availableStates.length && (e.state = this.state), e;
  }
  /**
   * Sets all customizable colors at once. 
   * Pass null to reset all colors to default.
   * @param colors Color map or null.
   */
  set colors(e) {
    if (Ye(
      this._lottieInstance,
      this.lottieProperties.filter((i) => i.type === "color")
    ), e)
      for (const [i, s] of Object.entries(e))
        Se(
          this._lottieInstance,
          this.lottieProperties.filter((r2) => r2.type === "color" && r2.name === i),
          s
        );
    this.refresh();
  }
  /**
   * Provides a proxy for reading or updating individual colors by name.
   * 
   * Example:
   *   player.colors.primary = '#ff0000';
   *   delete player.colors.secondary;
   */
  get colors() {
    return this._colorsProxy || (this._colorsProxy = Qa.call(this)), this._colorsProxy;
  }
  /**
   * Sets the stroke width for the icon.
   * Pass null to reset to default.
   * @param stroke Stroke value or null.
   */
  set stroke(e) {
    Ye(
      this._lottieInstance,
      this.lottieProperties.filter((s) => s.name === "stroke" || s.name === "stroke-layers")
    );
    const i = fs(e);
    i && Se(
      this._lottieInstance,
      this.lottieProperties.filter((s) => s.name === "stroke" || s.name === "stroke-layers"),
      i
    ), this.refresh();
  }
  /**
   * Gets the current stroke width of the icon.
   * @returns Stroke value or null if not set.
   */
  get stroke() {
    const e = this.lottieProperties.filter((i) => i.name === "stroke" || i.name === "stroke-layers")[0];
    if (e) {
      let i = +Ws(this._lottieInstance, e.path);
      return fs(i) || null;
    }
    return null;
  }
  /**
   * Sets the current state (animation segment) of the icon.
   * If the state does not exist, falls back to the default state.
   * @param state State name or null for default.
   */
  set state(e) {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    if (e === this.state)
      return;
    const i = this.playing;
    this._state = void 0, cs(e) ? this._state = this._availableStates.filter((s) => s.default)[0] : e && (this._state = this._availableStates.filter((s) => s.name === e)[0], this._state || (this._state = this._availableStates.filter((s) => s.default)[0])), this.switchSegment(
      this._state ? [this._state.time, this._state.time + this._state.duration + 1] : void 0
    ), i && (this.pause(), this.play());
  }
  /**
   * Gets the current state (animation segment) of the icon.
   * @returns State name or null if not set.
   */
  get state() {
    return this._state ? this._state.name : "";
  }
  /**
   * Sets the playback speed of the animation.
   * @param speed Playback speed (1 = normal).
   */
  set speed(e) {
    var i;
    this._speed = e, (i = this._lottieInstance) == null || i.setSpeed(e);
  }
  /**
   * Gets the current playback speed.
   * @returns Playback speed.
   */
  get speed() {
    return this._speed;
  }
  /**
   * Sets the playback direction.
   * @param direction 1 for forward, -1 for reverse.
   */
  set direction(e) {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    this._direction = e, this._lottieInstance.setDirection(e);
  }
  /**
   * Gets the current playback direction.
   * @returns Playback direction.
   */
  get direction() {
    return this._direction;
  }
  /**
   * Enables or disables looping of the animation.
   * @param loop True to loop, false otherwise.
   */
  set loop(e) {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    this._lottieInstance.loop = e;
  }
  /**
   * Gets whether the animation is set to loop.
   * @returns True if looping, false otherwise.
   */
  get loop() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    return !!this._lottieInstance.loop;
  }
  /**
   * Sets the current frame of the animation.
   * @param frame Frame number.
   */
  set frame(e) {
    this.seek(Math.max(0, Math.min(this.frameCount, e)));
  }
  /**
   * Gets the current frame of the animation.
   * @returns Current frame number.
   */
  get frame() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    return this._lottieInstance.currentFrame;
  }
  /**
   * Gets the list of available states for the icon.
   * @returns Array of available states.
   */
  get availableStates() {
    return this._availableStates;
  }
  /**
   * Returns true if the animation is currently playing.
   */
  get playing() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    return !this._lottieInstance.isPaused;
  }
  /**
   * Returns true if the player is ready for interaction.
   */
  get ready() {
    return this._ready;
  }
  /**
   * Gets the total number of frames in the animation.
   * @returns Frame count.
   */
  get frameCount() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    return this._lottieInstance.getDuration(true) - 1;
  }
  /**
   * Gets the current segment of the animation as [start, end] frame numbers.
   * @returns Segment as [start, end].
   */
  get segment() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    return [
      this._lottieInstance.firstFrame,
      this._lottieInstance.firstFrame + this._lottieInstance.totalFrames
    ];
  }
  /**
   * Gets the duration of the animation in seconds.
   * @returns Duration in seconds.
   */
  get duration() {
    if (!this._lottieInstance) throw new Error("Player not initialized");
    return this._lottieInstance.getDuration(false);
  }
  /**
   * Provides access to the underlying Lottie player instance.
   * @returns LottieAnimationInstance.
   */
  get lottieInstance() {
    return this._lottieInstance;
  }
  /**
   * Gets all customizable properties for the icon.
   * @returns Array of LottieProperty.
   */
  get lottieProperties() {
    return this._lottieProperties || (this._lottieProperties = ms(this._iconData, { lottieInstance: true }), !this._availableStates.length && this._lottieProperties && (this._lottieProperties = this._lottieProperties.filter((e) => e.name !== "scale" && e.name !== "axis" && e.name !== "stroke" && !e.name.startsWith("state-")))), this._lottieProperties || [];
  }
};

// node_modules/@lordicon/element/dist/index.js
var T = Object.defineProperty;
var S = (n, i, e) => i in n ? T(n, i, { enumerable: true, configurable: true, writable: true, value: e }) : n[i] = e;
var r = (n, i, e) => S(n, typeof i != "symbol" ? i + "" : i, e);
var y = (n, i, e) => new Promise((t, s) => {
  var a = (h) => {
    try {
      c(e.next(h));
    } catch (f) {
      s(f);
    }
  }, l = (h) => {
    try {
      c(e.throw(h));
    } catch (f) {
      s(f);
    }
  }, c = (h) => h.done ? t(h.value) : Promise.resolve(h.value).then(a, l);
  c((e = e.apply(n, i)).next());
});
var I = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  "indianred ": "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370d8",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#d87093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function k(n) {
  return n.startsWith("#") ? n.length === 4 ? `#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}` : n : I[n.toLowerCase()] || "#000000";
}
function m(n) {
  return !n || typeof n != "string" ? void 0 : n.split(",").filter((e) => e).map((e) => e.split(":")).filter((e) => e.length == 2).reduce((e, t) => {
    const s = t[0];
    return e[s.toLowerCase()] = k(t[1]), e;
  }, {});
}
function p(n) {
  if (n === "light" || n === 1 || n === "1")
    return 1;
  if (n === "regular" || n === 2 || n === "2")
    return 2;
  if (n === "bold" || n === 3 || n === "3")
    return 3;
}
function _(n) {
  if (typeof n == "string")
    return n;
}
var b = ["click", "mouseenter", "mouseleave"];
var C = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var v = `
    :host {
        position: relative;
        display: inline-block;
        width: 32px;
        height: 32px;
        transform: translate3d(0px, 0px, 0px);
    }

    :host(.current-color) svg path[fill] {
        fill: currentColor;
    }

    :host(.current-color) svg path[stroke] {
        stroke: currentColor;
    }

    svg {
        position: absolute;
        pointer-events: none;
        display: block;
        transform: unset!important;
    }

    ::slotted(*) {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;
var u = null;
var O = [
  "colors",
  "src",
  "state",
  "trigger",
  "loading",
  "target",
  "stroke",
  "speed"
];
var d = class d2 extends HTMLElement {
  constructor() {
    super(...arguments);
    r(this, "_root");
    r(this, "_isConnected", false);
    r(this, "_ready", false);
    r(this, "_assignedIconData");
    r(this, "_loadedIconData");
    r(this, "_triggerInstance");
    r(this, "_playerInstance");
    r(this, "_animationContainer");
    r(this, "delayedLoading", null);
  }
  /**
   * Returns the current version of the element.
   */
  static get version() {
    return "__BUILD_VERSION__";
  }
  /**
   * Returns the list of attributes to observe for changes.
   */
  static get observedAttributes() {
    return O;
  }
  /**
   * Registers a custom trigger for icon interaction.
   * Triggers define how the icon responds to user actions.
   * @param name The name of the trigger.
   * @param triggerClass The trigger class constructor.
   */
  static defineTrigger(e, t) {
    d2._definedTriggers.set(e, t);
  }
  /**
   * Handles changes to observed attributes and delegates to the appropriate handler.
   * @param name The attribute name.
   * @param oldValue The previous value.
   * @param newValue The new value.
   */
  attributeChangedCallback(e, t, s) {
    this[`${e}Changed`].call(this);
  }
  /**
   * Called when the element is added to the DOM.
   * Sets up shadow DOM, styles, and loading strategy.
   */
  connectedCallback() {
    if (this._root || this.createElements(), this.loading === "lazy") {
      let e;
      this.delayedLoading = (s) => {
        e.unobserve(this), e = void 0, this.delayedLoading = null, s || this.createPlayer();
      };
      const t = (s, a) => {
        s.forEach((l) => {
          l.isIntersecting && e && this.delayedLoading && this.delayedLoading();
        });
      };
      e = new IntersectionObserver(t), e.observe(this);
    } else if (this.loading === "interaction") {
      let e;
      this.delayedLoading = (a) => {
        for (const l of b)
          (t || this).removeEventListener(l, s);
        this.delayedLoading = null, a || this.createPlayer().then(() => {
          e && (t || this).dispatchEvent(new Event(e));
        });
      };
      const t = this.target ? this.findTarget(this.target) : null;
      let s = (a) => {
        const l = a == null ? void 0 : a.type;
        e ? e = l : (e = l, this.delayedLoading && this.delayedLoading());
      };
      s = s.bind(this);
      for (const a of b)
        (t || this).addEventListener(a, s);
    } else if (this.loading === "delay") {
      this.delayedLoading = (t) => {
        this.delayedLoading = null, t || this.createPlayer();
      };
      const e = this.hasAttribute("loading-delay") ? +this.getAttribute("loading-delay") : 0;
      setTimeout(() => {
        this.delayedLoading && this.delayedLoading();
      }, e);
    } else
      this.createPlayer();
    this._isConnected = true;
  }
  /**
   * Called when the element is removed from the DOM.
   * Cleans up any resources and event listeners.
   */
  disconnectedCallback() {
    this.delayedLoading && this.delayedLoading(true), this.destroyPlayer(), this._isConnected = false;
  }
  /**
   * Finds a target element by traversing up the DOM tree.
   * It first attempts to find the target using `closest()`. If that fails,
   * it falls back to a method that can traverse across Shadow DOM boundaries.
   * @param selector The CSS selector for the target element.
   * @returns The found HTMLElement or null.
   */
  findTarget(e) {
    const t = this.closest(e);
    if (t)
      return t;
    const s = this.getRootNode();
    return s instanceof ShadowRoot && s.host ? this.findTargetAcrossShadowBoundaries(s.host, e) : null;
  }
  /**
   * Helper method to find a target by traversing up from a starting element,
   * crossing shadow boundaries if necessary.
   * @param startElement The element to start searching from.
   * @param selector The CSS selector for the target element.
   * @returns The found HTMLElement or null.
   */
  findTargetAcrossShadowBoundaries(e, t) {
    let s = e;
    for (; s; ) {
      if (s.nodeType === Node.ELEMENT_NODE && s.matches(t))
        return s;
      if (s.parentNode)
        s = s.parentNode;
      else {
        const a = s.getRootNode();
        if (a instanceof ShadowRoot)
          s = a.host;
        else
          break;
      }
    }
    return null;
  }
  /**
   * Creates the shadow DOM structure and attaches styles and slots.
   */
  createElements() {
    if (this._root = this.attachShadow({
      mode: "open"
    }), C)
      u || (u = new CSSStyleSheet(), u.replaceSync(v)), this._root.adoptedStyleSheets = [u];
    else {
      const t = document.createElement("style");
      t.innerHTML = v, this._root.appendChild(t);
    }
    const e = document.createElement("div");
    e.classList.add("body"), this._root.appendChild(e), this._animationContainer = e, this.createSlot();
  }
  /**
   * Creates a slot element inside the shadow DOM for projecting light DOM content.
   */
  createSlot() {
    const e = document.createElement("slot");
    this._root.appendChild(e);
  }
  /**
   * Destroys the slot element from the shadow DOM.
   */
  destroySlot() {
    const e = this._root.querySelector("slot");
    e && this._root.removeChild(e);
  }
  /**
   * Factory method for creating a Player instance.
   * Can be overridden for custom player instantiation.
   */
  playerFactory(e, t, s) {
    return new en(
      e,
      t,
      s,
      {
        autoInit: false
      }
    );
  }
  /**
   * Instantiates the Player and sets up dynamic styles, triggers, and event listeners.
   * Handles asynchronous icon data loading.
   */
  createPlayer() {
    return y(this, null, function* () {
      if (this.delayedLoading)
        return;
      const e = yield this.loadIconData();
      if (!e)
        return;
      this._playerInstance = this.playerFactory(
        this.animationContainer,
        e,
        {
          state: _(this.state),
          stroke: p(this.stroke),
          colors: m(this.colors),
          // legacy properties
          scale: parseFloat("" + this.getAttribute("scale") || ""),
          axisX: parseFloat("" + this.getAttribute("axis-x") || ""),
          axisY: parseFloat("" + this.getAttribute("axis-y") || "")
        }
      );
      const t = Object.entries(this._playerInstance.colors || {});
      if (t.length) {
        let s = "";
        for (const [l, c] of t)
          s += `
                    :host(:not(.current-color)) svg path[fill].${l} {
                        fill: var(--lord-icon-${l}, var(--lord-icon-${l}-base, #000));
                    }
        
                    :host(:not(.current-color)) svg path[stroke].${l} {
                        stroke: var(--lord-icon-${l}, var(--lord-icon-${l}-base, #000));
                    }
                `;
        const a = document.createElement("style");
        a.innerHTML = s, this.animationContainer.appendChild(a);
      }
      this._playerInstance.init(), this._playerInstance.addEventListener("ready", () => {
        this._triggerInstance && this._triggerInstance.onReady && this._triggerInstance.onReady();
      }), this._playerInstance.addEventListener("refresh", () => {
        this.refresh(), this._triggerInstance && this._triggerInstance.onRefresh && this._triggerInstance.onRefresh();
      }), this._playerInstance.addEventListener("complete", () => {
        this._triggerInstance && this._triggerInstance.onComplete && this._triggerInstance.onComplete();
      }), this._playerInstance.addEventListener("frame", () => {
        this._triggerInstance && this._triggerInstance.onFrame && this._triggerInstance.onFrame();
      }), this.refresh(), this.triggerChanged(), yield new Promise((s, a) => {
        this._playerInstance.ready ? s() : this._playerInstance.addEventListener("ready", s);
      }), this.destroySlot(), this._ready = true, this.dispatchEvent(new CustomEvent("ready"));
    });
  }
  /**
   * Destroys the Player and Trigger instances, cleaning up all resources.
   * Called when the icon data changes or the element is disconnected.
   */
  destroyPlayer() {
    this._ready = false, this._loadedIconData = void 0, this._triggerInstance && (this._triggerInstance.onDisconnected && this._triggerInstance.onDisconnected(), this._triggerInstance = void 0), this._playerInstance && (this._playerInstance.destroy(), this._playerInstance = void 0, this.createSlot());
  }
  /**
   * Loads icon data from the 'src' attribute or uses the assigned icon data.
   * Returns the icon data object or undefined if loading fails.
   */
  loadIconData() {
    return y(this, null, function* () {
      let e = this.icon;
      if (!e && this.src) {
        const t = yield fetch(this.src);
        this._loadedIconData = e = yield t.json();
      }
      return e;
    });
  }
  /**
   * Synchronizes the element's state with the Player instance.
   * Updates CSS variables and other dynamic properties.
   */
  refresh() {
    this.movePaletteToCssVariables();
  }
  /**
   * Updates CSS variables for icon colors based on the Player's palette.
   * CSS variables take precedence over other color assignments.
   */
  movePaletteToCssVariables() {
    for (const [e, t] of Object.entries(this._playerInstance.colors || {}))
      t ? this.animationContainer.style.setProperty(`--lord-icon-${e}-base`, t) : this.animationContainer.style.removeProperty(`--lord-icon-${e}-base`);
  }
  /**
   * Called when the 'target' attribute changes.
   * Reloads the trigger to use the new target element.
   */
  targetChanged() {
    this.triggerChanged();
  }
  /**
   * Called when the 'loading' attribute changes.
   */
  loadingChanged() {
  }
  /**
   * Called when the 'trigger' attribute changes.
   * Disconnects the old trigger and instantiates the new one.
   */
  triggerChanged() {
    var s;
    if (this._triggerInstance && (this._triggerInstance.onDisconnected && this._triggerInstance.onDisconnected(), this._triggerInstance = void 0, (s = this._playerInstance) == null || s.pause()), !this.trigger || !this._playerInstance)
      return;
    const e = d2._definedTriggers.get(this.trigger);
    if (!e)
      throw new Error(`Can't use unregistered trigger: '${this.trigger}'!`);
    const t = this.target ? this.findTarget(this.target) : null;
    this._triggerInstance = new e(
      this._playerInstance,
      this,
      t || this
    ), this._triggerInstance.onConnected && this._triggerInstance.onConnected(), this._playerInstance.ready && this._triggerInstance.onReady && this._triggerInstance.onReady();
  }
  /**
   * Called when the 'colors' attribute changes.
   * Updates the Player's color palette.
   */
  colorsChanged() {
    this._playerInstance && (this._playerInstance.colors = m(this.colors) || null);
  }
  /**
   * Called when the 'stroke' attribute changes.
   * Updates the Player's stroke width.
   */
  strokeChanged() {
    this._playerInstance && (this._playerInstance.stroke = p(this.stroke) || null);
  }
  /**
   * Called when the 'speed' attribute changes.
   * Updates the Player's animation speed.
   */
  speedChanged() {
    if (!this._playerInstance)
      return;
    const e = this.getAttribute("speed");
    if (e) {
      const t = parseFloat(e);
      isNaN(t) ? this._playerInstance.speed = 1 : this._playerInstance.speed = t;
    } else
      this._playerInstance.speed = 1;
  }
  /**
   * Called when the 'state' attribute changes.
   * Updates the Player's animation state.
   */
  stateChanged() {
    var e, t;
    this._playerInstance && (this._playerInstance.state = this.state, (t = (e = this._triggerInstance) == null ? void 0 : e.onState) == null || t.call(e));
  }
  /**
   * Called when the 'icon' attribute changes.
   * Reloads the Player with the new icon.
   */
  iconChanged() {
    this._isConnected && (this.destroyPlayer(), this.createPlayer());
  }
  /**
   * Called when the 'src' attribute changes.
   * Reloads the Player with the new icon source.
   */
  srcChanged() {
    this._isConnected && (this.destroyPlayer(), this.createPlayer());
  }
  /**
   * Directly assigns icon data to the element.
   * Triggers a reload if the data changes.
   */
  set icon(e) {
    e !== this._assignedIconData && (this._assignedIconData = e, this._loadedIconData = void 0, this.iconChanged());
  }
  /**
   * Gets the currently assigned or loaded icon data.
   */
  get icon() {
    return this._assignedIconData || this._loadedIconData;
  }
  /**
   * Sets the 'src' attribute for loading icon data from a URL.
   */
  set src(e) {
    e ? this.setAttribute("src", e) : this.removeAttribute("src");
  }
  /**
   * Gets the current 'src' attribute value.
   */
  get src() {
    return this.getAttribute("src");
  }
  /**
   * Sets the animation state for the icon.
   * You can check available states from the player instance.
   */
  set state(e) {
    e ? this.setAttribute("state", e) : this.removeAttribute("state");
  }
  /**
   * Gets the current animation state.
   */
  get state() {
    return this.getAttribute("state");
  }
  /**
   * Sets the color palette for the icon.
   * Accepts a comma-separated string, e.g. 'primary:#fdd394,secondary:#03a9f4'.
   */
  set colors(e) {
    e ? this.setAttribute("colors", e) : this.removeAttribute("colors");
  }
  /**
   * Gets the current color palette string.
   */
  get colors() {
    return this.getAttribute("colors");
  }
  /**
   * Sets the trigger name for icon interaction.
   * The trigger must be registered beforehand.
   */
  set trigger(e) {
    e ? this.setAttribute("trigger", e) : this.removeAttribute("trigger");
  }
  /**
   * Gets the current trigger name.
   */
  get trigger() {
    return this.getAttribute("trigger");
  }
  /**
   * Sets the loading strategy for the icon.
   * Options: 'lazy', 'interaction', or 'delay'.
   */
  set loading(e) {
    e ? this.setAttribute("loading", e) : this.removeAttribute("loading");
  }
  /**
   * Gets the current loading strategy.
   */
  get loading() {
    if (this.getAttribute("loading")) {
      const e = this.getAttribute("loading").toLowerCase();
      if (e === "lazy")
        return "lazy";
      if (e === "interaction")
        return "interaction";
      if (e === "delay")
        return "delay";
    }
    return null;
  }
  /**
   * Sets the CSS selector for the target element used for event listening.
   */
  set target(e) {
    e ? this.setAttribute("target", e) : this.removeAttribute("target");
  }
  /**
   * Gets the current target selector.
   */
  get target() {
    return this.getAttribute("target");
  }
  /**
   * Sets the stroke style for the icon (e.g., 1, 2, 3, light, regular, bold).
   */
  set stroke(e) {
    e ? this.setAttribute("stroke", e) : this.removeAttribute("stroke");
  }
  /**
   * Gets the current stroke width.
   */
  get stroke() {
    return this.hasAttribute("stroke") ? this.getAttribute("stroke") : null;
  }
  /**
   * Sets the animation speed for the icon.
   * Accepts a number or a string that can be parsed to a number.
   */
  set speed(e) {
    e ? this.setAttribute("speed", String(e)) : this.removeAttribute("speed");
  }
  /**
   * Gets the current animation speed.
   * Returns 1 if not set or invalid.
   */
  get speed() {
    const e = this.getAttribute("speed");
    if (e) {
      const t = parseFloat(e);
      if (!isNaN(t))
        return t;
    }
    return 1;
  }
  /**
   * Returns true if the element is fully initialized and ready for interaction.
   * You can listen for the 'ready' event to detect readiness.
   */
  get ready() {
    return this._ready;
  }
  /**
   * Returns a promise that resolves when the element is ready.
   * Useful for awaiting initialization in external code.
   */
  get readyPromise() {
    return this._ready ? Promise.resolve() : new Promise((e) => {
      this.addEventListener("ready", () => {
        e();
      }, { once: true });
    });
  }
  /**
   * Returns the Player instance associated with this element.
   */
  get playerInstance() {
    return this._playerInstance;
  }
  /**
   * Returns the Trigger instance associated with this element.
   */
  get triggerInstance() {
    return this._triggerInstance;
  }
  /**
   * Returns the animation container element inside the shadow DOM.
   */
  get animationContainer() {
    return this._animationContainer;
  }
};
r(d, "_definedTriggers", /* @__PURE__ */ new Map());
var o = d;
var L = class {
  constructor(i, e, t) {
    r(this, "segments");
    r(this, "queue", []);
    r(this, "connected", false);
    r(this, "targetState");
    r(this, "delayTimer", null);
    r(this, "intersectionObserver");
    this.player = i, this.element = e, this.targetElement = t, this.onClick = this.onClick.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.handleState(), this.replay();
  }
  onConnected() {
    this.connected = true, this.targetElement.addEventListener("click", this.onClick), this.targetElement.addEventListener("mouseenter", this.onMouseEnter), this.targetState && (this.loading ? this.play(true) : this.initIntersectionObserver());
  }
  onDisconnected() {
    this.connected = false, this.targetElement.removeEventListener("click", this.onClick), this.targetElement.removeEventListener("mouseenter", this.onMouseEnter), this.cleanup();
  }
  onMouseEnter() {
    this.queue.push(0), this.queue.push(1), this.handleQueue();
  }
  onComplete() {
    this.targetState ? this.resetState() : this.handleQueue();
  }
  onState() {
    this.handleState();
  }
  onClick() {
    this.clickToReplay && this.replay();
  }
  play(i) {
    this.player.playing || this.delayTimer || (i && this.delay > 0 ? this.scheduleDelayedPlay() : this.player.playFromStart());
  }
  replay() {
    this.player.playing || !this.player.state || !this.intro || (this.targetState = this.player.state, this.player.state = this.intro, this.connected && this.play());
  }
  scheduleDelayedPlay() {
    this.resetDelayTimer(), this.delayTimer = setTimeout(() => {
      this.player.playFromStart(), this.delayTimer = null;
    }, this.delay);
  }
  /**
   * Processes the segment queue and plays the next segment if the player is not currently playing.
   */
  handleQueue() {
    var e;
    if (this.player.playing || !this.queue.length)
      return;
    const i = this.queue.shift();
    if (this.segments) {
      const t = (e = this.segments) == null ? void 0 : e[i];
      this.player.direction = 1, this.player.switchSegment(t);
    } else
      this.player.direction = i === 0 ? 1 : -1;
    this.player.play();
  }
  /**
   * Updates the animation segments based on the current player state and parameters.
   */
  handleState() {
    this.segments = void 0;
    const i = this.player.availableStates.find((a) => a.name === this.player.state);
    if (!i)
      return;
    let e = 0;
    if (i.params.length) {
      const a = parseFloat(i.params[0]);
      !isNaN(a) && a > 0 && a <= 1 && (e = a);
    }
    if (!e)
      return;
    const t = [
      i.time,
      i.time + Math.floor((i.duration + 1) * e)
    ], s = [
      t[1],
      i.time + i.duration + 1
    ];
    this.segments = [
      t,
      s
    ];
  }
  initIntersectionObserver() {
    if (this.intersectionObserver)
      return;
    const i = (e) => {
      e.forEach((t) => {
        t.isIntersecting && (this.play(true), this.resetIntersectionObserver());
      });
    };
    this.intersectionObserver = new IntersectionObserver(i, { threshold: 0.5 }), this.intersectionObserver.observe(this.element);
  }
  resetIntersectionObserver() {
    this.intersectionObserver && (this.intersectionObserver.unobserve(this.element), this.intersectionObserver = void 0);
  }
  resetDelayTimer() {
    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
  }
  resetState() {
    return this.targetState ? (this.player.state = this.targetState, this.targetState = void 0, true) : false;
  }
  resetPlayer() {
    this.player.direction = 1, this.segments && (this.player.switchSegment([
      this.segments[0][0],
      this.segments[1][1]
    ]), this.segments = void 0, this.queue = []);
  }
  cleanup() {
    this.resetPlayer(), this.resetIntersectionObserver(), this.resetDelayTimer(), this.resetState();
  }
  get intro() {
    if (!this.element.hasAttribute("intro"))
      return null;
    const e = this.element.getAttribute("intro");
    let t = this.player.availableStates.find((s) => s.name === e);
    return t || (t = this.player.availableStates.find((s) => s.name.startsWith("in-"))), (t == null ? void 0 : t.name) || null;
  }
  get delay() {
    const i = this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    return Math.max(i, 0);
  }
  get loading() {
    return this.element.hasAttribute("loading");
  }
  get clickToReplay() {
    return this.element.hasAttribute("click-to-replay");
  }
};
var D = class {
  constructor(i, e, t) {
    r(this, "connected", false);
    r(this, "targetState");
    r(this, "delayTimer", null);
    r(this, "intersectionObserver");
    this.player = i, this.element = e, this.targetElement = t, this.onClick = this.onClick.bind(this), this.replay();
  }
  onConnected() {
    this.connected = true, this.targetElement.addEventListener("click", this.onClick), this.targetState && (this.loading ? this.play(true) : this.initIntersectionObserver());
  }
  onDisconnected() {
    this.connected = false, this.targetElement.removeEventListener("click", this.onClick), this.cleanup();
  }
  onComplete() {
    this.resetState();
  }
  onClick() {
    this.player.playing || this.player.playFromStart();
  }
  play(i) {
    this.player.playing || this.delayTimer || (i && this.delay > 0 ? this.scheduleDelayedPlay() : this.player.playFromStart());
  }
  replay() {
    this.player.playing || !this.player.state || !this.intro || (this.targetState = this.player.state, this.player.state = this.intro, this.connected && this.play());
  }
  scheduleDelayedPlay() {
    this.resetDelayTimer(), this.delayTimer = setTimeout(() => {
      this.player.playFromStart(), this.delayTimer = null;
    }, this.delay);
  }
  initIntersectionObserver() {
    if (this.intersectionObserver)
      return;
    const i = (e) => {
      e.forEach((t) => {
        t.isIntersecting && (this.play(true), this.resetIntersectionObserver());
      });
    };
    this.intersectionObserver = new IntersectionObserver(i, { threshold: 0.5 }), this.intersectionObserver.observe(this.element);
  }
  resetIntersectionObserver() {
    this.intersectionObserver && (this.intersectionObserver.unobserve(this.element), this.intersectionObserver = void 0);
  }
  resetDelayTimer() {
    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
  }
  resetState() {
    this.targetState && (this.player.state = this.targetState, this.targetState = void 0);
  }
  cleanup() {
    this.resetIntersectionObserver(), this.resetDelayTimer(), this.resetState();
  }
  get intro() {
    if (!this.element.hasAttribute("intro"))
      return null;
    const e = this.element.getAttribute("intro");
    let t = this.player.availableStates.find((s) => s.name === e);
    return t || (t = this.player.availableStates.find((s) => s.name.startsWith("in-"))), (t == null ? void 0 : t.name) || null;
  }
  get delay() {
    const i = this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    return Math.max(i, 0);
  }
  get loading() {
    return this.element.hasAttribute("loading");
  }
};
var A = class {
  constructor(i, e, t) {
    r(this, "connected", false);
    r(this, "targetState");
    r(this, "delayTimer", null);
    r(this, "intersectionObserver");
    this.player = i, this.element = e, this.targetElement = t, this.onHover = this.onHover.bind(this), this.onClick = this.onClick.bind(this), this.replay();
  }
  onConnected() {
    this.connected = true, this.targetElement.addEventListener("click", this.onClick), this.targetElement.addEventListener("mouseenter", this.onHover), this.targetState && (this.loading ? this.play(true) : this.initIntersectionObserver());
  }
  onDisconnected() {
    this.connected = false, this.targetElement.removeEventListener("click", this.onClick), this.targetElement.removeEventListener("mouseenter", this.onHover), this.cleanup();
  }
  onComplete() {
    this.resetState();
  }
  onHover() {
    this.targetState || this.play();
  }
  onClick() {
    this.clickToReplay && this.replay();
  }
  play(i) {
    this.player.playing || this.delayTimer || (i && this.delay > 0 ? this.scheduleDelayedPlay() : this.player.playFromStart());
  }
  replay() {
    this.player.playing || !this.player.state || !this.intro || (this.targetState = this.player.state, this.player.state = this.intro, this.connected && this.play());
  }
  scheduleDelayedPlay() {
    this.resetDelayTimer(), this.delayTimer = setTimeout(() => {
      this.player.playFromStart(), this.delayTimer = null;
    }, this.delay);
  }
  initIntersectionObserver() {
    if (this.intersectionObserver)
      return;
    const i = (e) => {
      e.forEach((t) => {
        t.isIntersecting && (this.play(true), this.resetIntersectionObserver());
      });
    };
    this.intersectionObserver = new IntersectionObserver(i, { threshold: 0.5 }), this.intersectionObserver.observe(this.element);
  }
  resetIntersectionObserver() {
    this.intersectionObserver && (this.intersectionObserver.unobserve(this.element), this.intersectionObserver = void 0);
  }
  resetDelayTimer() {
    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
  }
  resetState() {
    this.targetState && (this.player.state = this.targetState, this.targetState = void 0);
  }
  cleanup() {
    this.resetIntersectionObserver(), this.resetDelayTimer(), this.resetState();
  }
  get intro() {
    if (!this.element.hasAttribute("intro"))
      return null;
    const e = this.element.getAttribute("intro");
    let t = this.player.availableStates.find((s) => s.name === e);
    return t || (t = this.player.availableStates.find((s) => s.name.startsWith("in-"))), (t == null ? void 0 : t.name) || null;
  }
  get delay() {
    const i = this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    return Math.max(i, 0);
  }
  get loading() {
    return this.element.hasAttribute("loading");
  }
  get clickToReplay() {
    return this.element.hasAttribute("click-to-replay");
  }
};
var w = class {
  constructor(i, e, t) {
    r(this, "connected", false);
    r(this, "delayTimer", null);
    r(this, "intersectionObserver");
    this.player = i, this.element = e, this.targetElement = t, this.onClick = this.onClick.bind(this);
  }
  onConnected() {
    this.connected = true, this.targetElement.addEventListener("click", this.onClick), this.loading ? this.play(true) : this.initIntersectionObserver();
  }
  onDisconnected() {
    this.connected = false, this.targetElement.removeEventListener("click", this.onClick), this.cleanup();
  }
  onClick() {
    this.clickToReplay && this.play();
  }
  play(i) {
    this.player.playing || this.delayTimer || (i && this.delay > 0 ? this.scheduleDelayedPlay() : this.player.playFromStart());
  }
  scheduleDelayedPlay() {
    this.resetDelayTimer(), this.delayTimer = setTimeout(() => {
      this.player.playFromStart(), this.delayTimer = null;
    }, this.delay);
  }
  initIntersectionObserver() {
    if (this.intersectionObserver)
      return;
    const i = (e) => {
      e.forEach((t) => {
        t.isIntersecting && (this.play(true), this.resetIntersectionObserver());
      });
    };
    this.intersectionObserver = new IntersectionObserver(i, { threshold: 0.5 }), this.intersectionObserver.observe(this.element);
  }
  resetIntersectionObserver() {
    this.intersectionObserver && (this.intersectionObserver.unobserve(this.element), this.intersectionObserver = void 0);
  }
  resetDelayTimer() {
    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
  }
  cleanup() {
    this.resetIntersectionObserver(), this.resetDelayTimer();
  }
  get delay() {
    const i = this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    return Math.max(i, 0);
  }
  get loading() {
    return this.element.hasAttribute("loading");
  }
  get clickToReplay() {
    return this.element.hasAttribute("click-to-replay");
  }
};
var M = class {
  constructor(i, e, t) {
    r(this, "delayTimer", null);
    this.player = i, this.element = e, this.targetElement = t;
  }
  onReady() {
    this.play();
  }
  onComplete() {
    this.play();
  }
  onDisconnected() {
    this.resetDelayTimer();
  }
  play() {
    this.player.playing || this.delayTimer || (this.delay > 0 ? this.scheduleDelayedPlay() : this.player.playFromStart());
  }
  scheduleDelayedPlay() {
    this.resetDelayTimer(), this.delayTimer = setTimeout(() => {
      this.player.playFromStart(), this.delayTimer = null;
    }, this.delay);
  }
  resetDelayTimer() {
    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
  }
  get delay() {
    const i = this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    return Math.max(i, 0);
  }
};
var P = class {
  constructor(i, e, t) {
    r(this, "delayTimer", null);
    r(this, "mouseIn", false);
    this.player = i, this.element = e, this.targetElement = t, this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onConnected() {
    this.targetElement.addEventListener("mouseenter", this.onMouseEnter), this.targetElement.addEventListener("mouseleave", this.onMouseLeave);
  }
  onDisconnected() {
    this.targetElement.removeEventListener("mouseenter", this.onMouseEnter), this.targetElement.removeEventListener("mouseleave", this.onMouseLeave), this.resetDelayTimer();
  }
  onMouseEnter() {
    this.mouseIn = true, this.play();
  }
  onMouseLeave() {
    this.mouseIn = false, this.resetDelayTimer();
  }
  onComplete() {
    this.play();
  }
  play() {
    this.player.playing || this.delayTimer || this.mouseIn && (this.delay > 0 ? this.scheduleDelayedPlay() : this.player.playFromStart());
  }
  scheduleDelayedPlay() {
    this.resetDelayTimer(), this.delayTimer = setTimeout(() => {
      this.player.playFromStart(), this.delayTimer = null;
    }, this.delay);
  }
  resetDelayTimer() {
    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
  }
  get delay() {
    const i = this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    return Math.max(i, 0);
  }
};
var q = { attributes: true, childList: false, subtree: false, attributeOldValue: true };
var F = class {
  constructor(i, e, t) {
    r(this, "segments");
    r(this, "queue", []);
    r(this, "mouseIn", false);
    r(this, "connected", false);
    r(this, "targetState");
    r(this, "delayTimer", null);
    r(this, "mutationTimer", null);
    r(this, "intersectionObserver");
    r(this, "observer");
    this.player = i, this.element = e, this.targetElement = t, this.onClick = this.onClick.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), this.handleState(), this.replay();
  }
  onConnected() {
    this.connected = true, this.targetElement.addEventListener("click", this.onClick), this.targetElement.addEventListener("mouseenter", this.onMouseEnter), this.targetElement.addEventListener("mouseleave", this.onMouseLeave), this.mode[0] === "class" && this.initMutationObserver(), this.targetState && (this.loading ? this.play(true) : this.initIntersectionObserver());
  }
  onDisconnected() {
    this.connected = false, this.targetElement.removeEventListener("click", this.onClick), this.targetElement.removeEventListener("mouseenter", this.onMouseEnter), this.targetElement.removeEventListener("mouseleave", this.onMouseLeave), this.cleanup();
  }
  onMouseEnter() {
    this.mode[0] === "hover" && (this.mouseIn = true, this.triggerEnter());
  }
  onMouseLeave() {
    this.mode[0] === "hover" && (this.mouseIn = false, this.triggerLeave());
  }
  onComplete() {
    this.targetState ? (this.resetState(), this.mouseIn && (this.queue.push(0), this.handleQueue())) : this.handleQueue();
  }
  onState() {
    this.handleState();
  }
  onClick() {
    this.clickToReplay && this.replay();
  }
  play(i) {
    this.player.playing || this.delayTimer || (i && this.delay > 0 ? this.scheduleDelayedPlay() : this.player.playFromStart());
  }
  replay() {
    this.player.playing || !this.player.state || !this.intro || (this.targetState = this.player.state, this.player.state = this.intro, this.connected && this.play());
  }
  triggerEnter() {
    this.queue.push(0), this.handleQueue();
  }
  triggerLeave() {
    this.queue.push(1), this.handleQueue();
  }
  scheduleDelayedPlay() {
    this.resetDelayTimer(), this.delayTimer = setTimeout(() => {
      this.player.playFromStart(), this.delayTimer = null;
    }, this.delay);
  }
  /**
   * Processes the segment queue and plays the next segment if the player is not currently playing.
   */
  handleQueue() {
    var e;
    if (this.player.playing)
      return;
    if (this.queue.length >= 2) {
      const t = Math.floor(this.queue.length / 2) * 2;
      for (let s = 0; s < t; s++)
        this.queue.shift();
    }
    if (!this.queue.length)
      return;
    const i = this.queue.shift();
    if (this.segments) {
      const t = (e = this.segments) == null ? void 0 : e[i];
      this.player.direction = 1, this.player.switchSegment(t);
    } else
      this.player.direction = i === 0 ? 1 : -1;
    this.player.play();
  }
  /**
   * Updates the animation segments based on the current player state and parameters.
   */
  handleState() {
    this.segments = void 0;
    const i = this.player.availableStates.find((l) => l.name === this.player.state);
    if (!i)
      return;
    let e = 0;
    if (i.params.length) {
      const l = parseFloat(i.params[0]);
      !isNaN(l) && l > 0 && l <= 1 && (e = l);
    }
    if (!e)
      return;
    const t = [
      i.time,
      i.time + Math.floor((i.duration + 1) * e)
    ], s = [
      t[1],
      i.time + i.duration + 1
    ];
    this.segments = [
      t,
      s
    ];
    const a = this.mode;
    a[0] === "class" && this.targetElement.classList.contains(a[1]) && (this.player.switchSegment(t), this.player.frame = t[0]);
  }
  initIntersectionObserver() {
    if (this.intersectionObserver)
      return;
    const i = (e) => {
      e.forEach((t) => {
        t.isIntersecting && (this.play(true), this.resetIntersectionObserver());
      });
    };
    this.intersectionObserver = new IntersectionObserver(i, { threshold: 0.5 }), this.intersectionObserver.observe(this.element);
  }
  resetIntersectionObserver() {
    this.intersectionObserver && (this.intersectionObserver.unobserve(this.element), this.intersectionObserver = void 0);
  }
  initMutationObserver() {
    this.observer || (this.observer = new MutationObserver((i) => {
      const e = this.mode;
      if (e[0] !== "class")
        return;
      const t = e[1] || "";
      for (const s of i)
        if (s.type === "attributes" && ["class"].includes(s.attributeName)) {
          const a = (s.oldValue || "").split(" ").includes(t), l = (this.targetElement.getAttribute("class") || "").split(" ").includes(t);
          a !== l && (clearTimeout(this.mutationTimer), this.mutationTimer = setTimeout(() => {
            l ? this.triggerEnter() : this.triggerLeave();
          }, 10));
        }
    })), this.observer.observe(this.targetElement, q);
  }
  resetMutationObserver() {
    clearTimeout(this.mutationTimer), this.mutationTimer = null, this.observer && (this.observer.disconnect(), this.observer = void 0);
  }
  resetDelayTimer() {
    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
  }
  resetState() {
    return this.targetState ? (this.player.state = this.targetState, this.targetState = void 0, true) : false;
  }
  resetPlayer() {
    this.player.direction = 1, this.segments && (this.player.switchSegment([
      this.segments[0][0],
      this.segments[1][1]
    ]), this.segments = void 0, this.queue = []);
  }
  cleanup() {
    this.resetPlayer(), this.resetIntersectionObserver(), this.resetMutationObserver(), this.resetDelayTimer(), this.resetState();
  }
  get intro() {
    if (!this.element.hasAttribute("intro"))
      return null;
    const e = this.element.getAttribute("intro");
    let t = this.player.availableStates.find((s) => s.name === e);
    return t || (t = this.player.availableStates.find((s) => s.name.startsWith("in-"))), (t == null ? void 0 : t.name) || null;
  }
  get delay() {
    const i = this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    return Math.max(i, 0);
  }
  get loading() {
    return this.element.hasAttribute("loading");
  }
  get clickToReplay() {
    return this.element.hasAttribute("click-to-replay");
  }
  get mode() {
    if (this.element.hasAttribute("mode")) {
      const i = this.element.getAttribute("mode"), e = (i == null ? void 0 : i.split(":")) || [];
      if (e.length > 0 && ["hover", "class", "manual"].includes(e[0]))
        return e[0] === "class" ? [e[0], e[1] || "active"] : [e[0]];
    }
    return ["hover"];
  }
};
var g = /^\d*(\.\d+)?$/;
var R = { attributes: true, childList: false, subtree: false };
var x = class {
  constructor(i, e, t) {
    r(this, "sequenceIndex", 0);
    r(this, "frameState", null);
    r(this, "frameDelayFirst", null);
    r(this, "frameDelayLast", null);
    r(this, "timer");
    r(this, "observer");
    this.player = i, this.element = e, this.targetElement = t, this.observer = new MutationObserver((s) => {
      for (const a of s)
        a.type === "attributes" && ["sequence", "speed"].includes(a.attributeName) && (this.reset(), this.step());
    });
  }
  onReady() {
    this.step();
  }
  onComplete() {
    this.timer = setTimeout(() => {
      this.timer = null, this.frameDelayLast = null, this.step();
    }, this.frameDelayLast || 0);
  }
  onConnected() {
    this.observer.observe(this.element, R), this.player.speed = this.speed;
  }
  onDisconnected() {
    this.observer.disconnect(), this.timer && (clearTimeout(this.timer), this.timer = null), this.player.speed = 1;
  }
  reset() {
    this.player.pause(), this.player.speed = this.speed, this.sequenceIndex = 0, this.frameState = this.frameDelayFirst = this.frameDelayLast = null, this.timer && (clearTimeout(this.timer), this.timer = null);
  }
  takeStep() {
    const i = this.sequence.split(","), e = i[this.sequenceIndex];
    this.sequenceIndex++, this.sequenceIndex >= i.length && (this.sequenceIndex = 0);
    const [t, ...s] = e.split(":");
    return { action: t, params: s };
  }
  handleStep(i, e) {
    if (i === "play")
      this.frameState !== null && (this.player.state = this.frameState, this.frameState = null), e.includes("reverse") ? (this.player.seekToEnd(), this.player.direction = -1) : (this.player.seekToStart(), this.player.direction = 1), this.timer = setTimeout(() => {
        this.timer = null, this.frameDelayFirst = null, this.player.play();
      }, this.frameDelayFirst || 0);
    else if (i === "frame") {
      this.frameState !== null && (this.player.state = this.frameState, this.frameState = null);
      let t = 0, s = 0;
      e.length >= 1 && e[0].match(g) && (t = +e[0]), e.length >= 2 && e[1].match(g) ? s = Math.max(0, t, +e[1]) : s = t;
      const a = [t, s], l = this.player.availableStates.find((c) => c.name === this.player.state);
      l && (a[0] += l.time, a[1] += l.time), t === s ? (this.player.frame = t, this.timer = setTimeout(() => {
        this.timer = null, this.frameDelayFirst = null, this.step();
      }, this.frameDelayFirst || 0)) : this.timer = setTimeout(() => {
        this.timer = null, this.frameDelayFirst = null, this.player.switchSegment(a), this.player.play();
      }, this.frameDelayFirst || 0);
    } else if (i === "state")
      this.frameState = e[0] || null, this.step();
    else if (i === "delay") {
      let t = null;
      for (const s of e)
        s && s.match(g) && (t = +s);
      t && t > 0 && (e.includes("first") && e.includes("last") ? (this.frameDelayFirst = t, this.frameDelayLast = t) : e.includes("first") ? this.frameDelayFirst = t : e.includes("last") ? this.frameDelayLast = t : this.frameDelayFirst = t), this.step();
    } else if (i !== "idle") throw new Error(`Invalid sequence action: ${i}`);
  }
  step() {
    const { action: i, params: e } = this.takeStep();
    i && this.handleStep(i, e);
  }
  get sequence() {
    return this.element.getAttribute("sequence") || "";
  }
  get speed() {
    return this.element.hasAttribute("speed") ? +(this.element.getAttribute("speed") || 1) : 1;
  }
};
function V() {
  o.defineTrigger("in", w), o.defineTrigger("click", D), o.defineTrigger("hover", A), o.defineTrigger("loop", M), o.defineTrigger("loop-on-hover", P), o.defineTrigger("morph", F), o.defineTrigger("boomerang", L), o.defineTrigger("sequence", x), (!customElements.get || !customElements.get("lord-icon")) && customElements.define("lord-icon", o);
}
export {
  L as Boomerang,
  D as Click,
  o as Element,
  A as Hover,
  w as In,
  M as Loop,
  P as LoopOnHover,
  F as Morph,
  en as Player,
  x as Sequence,
  V as defineElement
};
//# sourceMappingURL=@lordicon_element.js.map
