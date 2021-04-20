"use strict";
module.exports = /** @class */ (function () {
    function CssLoaderNameGenerator(minLength, maxLength) {
        var _this = this;
        this._usedNames = [];
        this._cache = {};
        this._chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
        this._fchars = 'abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
        this.randomNaming = function () {
            var max = _this._minLength, result = '';
            do {
                if (_this._usedNames.length >= Math.pow(64, max - 1) * 52 && max >= _this._maxLength) {
                    return 'Out of range - increase max length';
                }
                if (_this._usedNames.length >= Math.pow(64, max - 1) * 52 && max < _this._maxLength) {
                    ++max;
                }
                result += _this._fchars[Math.floor(Math.random() * _this._fchars.length)];
                for (var i = max - 1; i > 0; --i) {
                    result += _this._chars[Math.floor(Math.random() * _this._chars.length)];
                }
            } while (_this._usedNames.includes(result));
            _this._usedNames.push(result);
            return result;
        };
        this.getLocalIdent = function (context, localIdentName, localName) {
            var randName = _this.randomNaming();
            if (/^i-/i.test(localName)) {
                randName = "i-" + randName;
            }
            else if (/^i_/i.test(localName)) {
                randName = 'i_';
            }
            if (typeof _this._cache[localName] == 'undefined') {
                _this._cache[localName] = randName;
            }
            return _this._cache[localName];
        };
        this._minLength = minLength;
        this._maxLength = maxLength;
    }
    return CssLoaderNameGenerator;
}());
