import { useEffect } from "react";

export const useFlipCards = (win: number | null) => {
    useEffect(() => {
        if (win === 0) {
            const cards = document.querySelectorAll(".flip");
            const id = setTimeout(() => {
                for (const card of cards) {
                    card.classList.contains("flip") && card.classList.remove('flip')
                }
            }, 3500);

            return () => clearTimeout(id);
        }
    }, [win]);
}