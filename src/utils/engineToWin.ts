import { delayForMatch, playAllCards, stopAllCards } from "./handleStsteCards";

export const engine = (firstChoice: HTMLDivElement, secondChoice: HTMLDivElement, clearState: () => void) => {
    stopAllCards();
    if (firstChoice?.dataset.card === secondChoice?.dataset.card) {
        delayForMatch(firstChoice, secondChoice);
        clearState();
        playAllCards();
        return 1;
    } else {
        const intervalId = setTimeout(() => {
            firstChoice.classList.add("flip");
            secondChoice.classList.add("flip");
            clearState();
            playAllCards()
        }, 1500);

        return () => clearTimeout(intervalId);
    }
}