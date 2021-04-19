class CssLoaderNameGenerator {
	private readonly _length: number;
	private readonly _limit: number;

	private readonly usedNames: string[] = [];
	private readonly cache: Record<string, string> = {};

	constructor(length: number, limit: number) {
		this._length = length;
		this._limit = limit;
	}

	private readonly randomNaming = (): string => {
		let max = this._limit,
			result = '';
		const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_',
			fchars = 'abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';

		do {
			if (this.usedNames.length >= Math.pow(64, max - 1) * 52 && max >= this._length) {
				return 'OutOfPossibility';
			}

			if (this.usedNames.length >= Math.pow(64, max - 1) * 52 && max < this._length) {
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
		console.log(localName, randName);

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
