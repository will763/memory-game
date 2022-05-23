
export const playAllCards = () => {
    const cards = document.querySelectorAll('.cards');
    for (const card of cards) {
        const el = card as HTMLDivElement;
        if (el.dataset.match !== "matched") {
            el.style.pointerEvents = "auto"
        }
    }
}

export const stopAllCards = () => {
    const cards = document.querySelectorAll('.cards');
    for (const card of cards) {
        const el = card as HTMLDivElement;
        el.style.pointerEvents = "none";
    }
}