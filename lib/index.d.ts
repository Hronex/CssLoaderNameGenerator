declare class CssLoaderNameGenerator {
    private readonly _length;
    private readonly _limit;
    private readonly usedNames;
    private readonly cache;
    constructor(length: number, limit: number);
    private readonly randomNaming;
    readonly getLocalIdent: (context: Record<string, unknown>, localIdentName: string, localName: string) => string;
}
