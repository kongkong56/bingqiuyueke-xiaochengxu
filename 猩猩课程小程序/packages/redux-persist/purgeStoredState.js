exports.__esModule = !0, exports.default = purgeStoredState;

var _constants = require("./constants.js");

function purgeStoredState(e) {
    var r = e.storage, t = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : _constants.KEY_PREFIX) + e.key;
    return r.removeItem(t, warnIfRemoveError);
}

function warnIfRemoveError(e) {
    e && console.error("redux-persist/purgeStoredState: Error purging data stored state", e);
}