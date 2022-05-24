import { useEffect } from "react";
import { playAllCards, stopAllCards } from "../utils/handleStsteCards";

export const useFlipCards = (win: number | null) => {
    useEffect(() => {
        if (win === 0) {
            const cards = document.querySelectorAll(".cards");
            stopAllCards(cards);

            const id = setTimeout(() => {
                for (let card of cards) {
                    card.classList.add('flip')
                    const el = card as HTMLDivElement;
                    if (el.dataset.match === "matched") {
                        el.dataset.match = "false";
                        el.style.pointerEvents = 'auto';
                    }
                }
                playAllCards(cards);
            }, 4000);

            return () => clearTimeout(id);
        }
    }, [win]);
}