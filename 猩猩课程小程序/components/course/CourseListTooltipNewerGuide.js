var _core = _interopRequireDefault(require("./../../tmp/index.js")), _reduxPlugin = require("./../../plugins/redux/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(r, e) {
    var t = Object.keys(r);
    return Object.getOwnPropertySymbols && t.push.apply(t, Object.getOwnPropertySymbols(r)), 
    e && (t = t.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), t;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(t, !0).forEach(function(e) {
            _defineProperty(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

_core.default.component({
    name: "CourseListTooltipNewerGuide",
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isSatisfyShowRefresh: function(e) {
            return this.$store.selectors.isSatisfyShowTooltip(e, "refresh");
        }
    }))
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});