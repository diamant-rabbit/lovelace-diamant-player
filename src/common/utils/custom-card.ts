interface CardStaticInfo {
    readonly TYPE: string;
    readonly NAME: string;
    readonly DESCRIPTION: string;
}

export function registerCustomCard(params: CardStaticInfo) {
    const windowWithCards = window as unknown as Window & { customCards: unknown[]; };
    windowWithCards.customCards = windowWithCards.customCards || [];
    windowWithCards.customCards.push({
        type: params.TYPE,
        name: params.NAME,
        description: params.DESCRIPTION,
        preview: false,
    });
}