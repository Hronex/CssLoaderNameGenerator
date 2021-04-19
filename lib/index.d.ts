declare class CssLoaderNameGenerator {
    private readonly _maxLength;
    private readonly _minLength;
    private readonly usedNames;
    private readonly cache;
    constructor(minLength: number, maxLength: number);
    private readonly randomNaming;
    readonly getLocalIdent: (context: Record<string, unknown>, localIdentName: string, localName: string) => string;
}
