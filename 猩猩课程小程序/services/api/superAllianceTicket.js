Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _SUPERALLIANCETICKET_, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _actionTypes = require("./../../store/types/index.js"), _common = require("./common.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function asyncGeneratorStep(e, r, t, n, o, a, u) {
    try {
        var c = e[a](u), i = c.value;
    } catch (e) {
        return void t(e);
    }
    c.done ? r(i) : Promise.resolve(i).then(n, o);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = c.apply(e, u);
            function o(e) {
                asyncGeneratorStep(n, r, t, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(n, r, t, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

var _default = (_defineProperty(_SUPERALLIANCETICKET_ = {}, _actionTypes.SUPERALLIANCETICKET_IDENTITY_GET, _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
    var r;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = "".concat(_common.specialBase, "/wxAct/getUserType4SupermonkeyPartnerLeague"), 
            e.prev = 1, e.next = 4, _common.http.get({
                url: r
            });

          case 4:
            return e.abrupt("return", e.sent);

          case 7:
            throw e.prev = 7, e.t0 = e.catch(1), console.log("SUPERALLIANCETICKET_IDENTITY_GET error", e.t0.rtn, e.t0.msg), 
            e.t0;

          case 11:
          case "end":
            return e.stop();
        }
    }, e, null, [ [ 1, 7 ] ]);
}))), _defineProperty(_SUPERALLIANCETICKET_, _actionTypes.SUPERALLIANCETICKET_CODE_POST, function() {
    var r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.code, n = "".concat(_common.specialBase, "/wxAct/submitLeagueActivity"), 
                e.prev = 2, o = {
                    actPlatformName: "大众点评",
                    actTicketId: t
                }, e.next = 6, _common.http.post({
                    url: n,
                    data: o
                });

              case 6:
                return e.abrupt("return", e.sent);

              case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.log("SUPERALLIANCETICKET_CODE_POST error", e.t0.rtn, e.t0.msg), 
                e.t0;

              case 13:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 9 ] ]);
    }));
    return function(e) {
        return r.apply(this, arguments);
    };
}()), _SUPERALLIANCETICKET_);

exports.default = _default;