export default class CssLoaderNameGenerator {
    private readonly _length;
    private readonly _limit;
    private readonly usedNames;
    private readonly cache;
    constructor(length: number, limit: number);
    private randomNaming;
    getLocalIdent: (context: object, localIdentName: string, localName: string) => string;
}
