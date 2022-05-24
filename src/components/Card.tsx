import { useEffect } from "react";
import { useFlipCards } from "../hooks/useFlipCards"
import { BackFace } from "../styles/BackFace"
import { Div } from "../styles/Div"
import { FrontFace } from "../styles/FrontFace"

interface Props {
    data: string,
    imgUrl: string,
    alt: string,
    handleChoice: (el: HTMLDivElement) => void;
    win: number | null;
}

export const Card = ({ data, imgUrl, alt, handleChoice, win }: Props) => {


    useFlipCards(win);

    // useEffect(()=> {
    //     if (win === 6) {
    //     const cards = document.querySelectorAll('.cards');
    //     for (const card of cards) {
    //       const el = card as HTMLDivElement;
    //         if (el.dataset.match === "matched") {
    //             el.dataset.match = "false";
    //             el.style.pointerEvents = 'auto';
    //         }
    //     }
    //   }
    // },[win]);

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const el = e.target as HTMLDivElement;
        el.classList.remove('flip');
        el.style.pointerEvents = 'none';
        handleChoice(el);
    }

    return (
        <Div className="cards" data-card={data} data-match={false} onClick={handleClick} >
            <FrontFace src={imgUrl} alt={alt} />
            <BackFace src="/images/front-face.jpeg" alt="front of the card" />
        </Div>
    )
}