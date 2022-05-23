export const engine = (firstChoice: HTMLDivElement, secondChoice: HTMLDivElement, stopAllCards: () => void, clearState: () => void, playAllCards: () => void,) => {
    stopAllCards();
    if (firstChoice?.dataset.card === secondChoice?.dataset.card) {
        firstChoice.dataset.match = "matched";
        secondChoice.dataset.match = "matched";
        clearState();
        playAllCards();
        return 1;
    } else if (firstChoice.classList.contains("flip") && secondChoice.classList.contains("flip")) {
        const intervalId = setTimeout(() => {
            firstChoice.classList.remove("flip");
            secondChoice.classList.remove("flip");
            clearState();
            playAllCards()
        }, 1500);

        return () => clearTimeout(intervalId);
    }
}