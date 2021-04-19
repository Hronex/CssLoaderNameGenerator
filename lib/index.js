"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CssLoaderNameGenerator = /** @class */ (function () {
    function CssLoaderNameGenerator(length, limit) {
        var _this = this;
        this.usedNames = [];
        this.cache = {};
        this.randomNaming = function () {
            var max = _this._limit, result = '';
            var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_', fchars = 'abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
            do {
                if (_this.usedNames.length >= Math.pow(64, max - 1) * 52 && max >= _this._length) {
                    return 'OutOfPossibility';
                }
                if (_this.usedNames.length >= Math.pow(64, max - 1) * 52 && max < _this._length) {
                    ++max;
                }
                result = '';
                result += fchars[Math.floor(Math.random() * fchars.length)];
                for (var i = max - 1; i > 0; --i) {
                    result += chars[Math.floor(Math.random() * chars.length)];
                }
            } while (_this.usedNames.includes(result));
            _this.usedNames.push(result);
            return result;
        };
        this.getLocalIdent = function (context, localIdentName, localName) {
            var randName = _this.randomNaming();
            console.log(localName, randName);
            if (/^i-/i.test(localName)) {
                randName = "i-" + randName;
            }
            else if (/^i_/i.test(localName)) {
                randName = 'i_';
            }
            if (typeof _this.cache[localName] == 'undefined') {
                _this.cache[localName] = randName;
                return _this.cache[localName];
            }
            return _this.cache[localName];
        };
        this._length = length;
        this._limit = limit;
    }
    return CssLoaderNameGenerator;
}());
exports.default = CssLoaderNameGenerator;
