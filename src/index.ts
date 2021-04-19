class CssLoaderNameGenerator {
	private readonly _maxLength: number;
	private readonly _minLength: number;

	private readonly usedNames: string[] = [];
	private readonly cache: Record<string, string> = {};

	constructor(minLength: number, maxLength: number) {
		this._maxLength = maxLength;
		this._minLength = minLength;
	}

	private readonly randomNaming = (): string => {
		let max = this._minLength,
			result = '';
		const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_',
			fchars = 'abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';

		do {
			if (this.usedNames.length >= Math.pow(64, max - 1) * 52 && max >= this._maxLength) {
				return 'OutOfPossibility';
			}

			if (this.usedNames.length >= Math.pow(64, max - 1) * 52 && max < this._maxLength) {
				++max;
			}

			result = '';
			result += fchars[Math.floor(Math.random() * fchars.length)];

			for (let i = max - 1; i > 0; --i) {
				result += chars[Math.floor(Math.random() * chars.length)];
			}
		} while (this.usedNames.includes(result));

		this.usedNames.push(result);

		return result;
	};

	public readonly getLocalIdent = (context: Record<string, unknown>, localIdentName: string, localName: string): string => {
		let randName = this.randomNaming();

		if (/^i-/i.test(localName)) {
			randName = `i-${randName}`;
		} else if (/^i_/i.test(localName)) {
			randName = 'i_';
		}

		if (typeof this.cache[localName] == 'undefined') {
			this.cache[localName] = randName;

			return this.cache[localName];
		}

		return this.cache[localName];
	};
}
module.exports = CssLoaderNameGenerator;
