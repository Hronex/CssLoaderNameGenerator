module.exports = class CssLoaderNameGenerator {
	private readonly _minLength: number;
	private readonly _maxLength: number;
	private readonly _usedNames: string[] = [];
	private readonly _cache: Record<string, string> = {};
	private readonly _chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
	private readonly _fchars = 'abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';

	constructor(minLength: number, maxLength: number) {
		this._minLength = minLength;
		this._maxLength = maxLength;
	}

	private readonly randomNaming = (): string => {
		let max = this._minLength,
			result = '';

		do {
			if (this._usedNames.length >= Math.pow(64, max - 1) * 52 && max >= this._maxLength) {
				return 'Out of range - increase max length';
			}

			if (this._usedNames.length >= Math.pow(64, max - 1) * 52 && max < this._maxLength) {
				++max;
			}

			result += this._fchars[Math.floor(Math.random() * this._fchars.length)];

			for (let i = max - 1; i > 0; --i) {
				result += this._chars[Math.floor(Math.random() * this._chars.length)];
			}
		} while (this._usedNames.includes(result));

		this._usedNames.push(result);

		return result;
	};

	public readonly getLocalIdent = (
		context: Record<string, unknown>,
		localIdentName: string,
		localName: string,
	): string => {
		let randName = this.randomNaming();

		if (/^i-/i.test(localName)) {
			randName = `i-${randName}`;
		} else if (/^i_/i.test(localName)) {
			randName = 'i_';
		}

		if (typeof this._cache[localName] == 'undefined') {
			this._cache[localName] = randName;
		}

		return this._cache[localName];
	};

	public readonly getRandomName = (localName: string): string => {
		return this.getLocalIdent({}, '', localName);
	};
};
