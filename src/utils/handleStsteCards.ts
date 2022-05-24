
export const playAllCards = (cardList?: NodeListOf<Element>) => {
    const cards = cardList ?? document.querySelectorAll('.cards');
    for (const card of cards) {
        const el = card as HTMLDivElement;
        if (el.dataset.match !== "matched") {
            el.style.pointerEvents = "auto"
        }
    }
}

export const stopAllCards = (cardList?: NodeListOf<Element>) => {
    const cards = cardList ?? document.querySelectorAll('.cards');
    for (const card of cards) {
        const el = card as HTMLDivElement;
        el.style.pointerEvents = "none";
    }
}

export const delayForMatch = (firstChoice: HTMLDivElement, secondChoice: HTMLDivElement) => {
    const idTimeout = setTimeout(() => {
        firstChoice.dataset.match = "matched";
        secondChoice.dataset.match = "matched";
    }, 500)

    return () => clearTimeout(idTimeout);
}