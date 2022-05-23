import { Card } from "./components/Card"
import { Main } from "./styles/Main"

import { pairOfCards } from "./utils/cardsInformation"
import { useState, useEffect } from "react"
import { playAllCards, stopAllCards } from "./utils/handleStsteCards"
import { engine } from "./utils/engineToWin"
import { EndGame, Home } from "./components/StageGame"

interface Props {
  data: string;
  imgUrl: string;
  alt: string;
}

export const App = () => {
  const [array,setArray] = useState<Array<Props>>([]);
  const [firstChoice, setFirstChoice] = useState<HTMLDivElement | null>(null);
  const [secondChoice, setSecondChoice] = useState<HTMLDivElement | null>(null);
  const [win,setWin] = useState<number | null>(null);

  function handleChoice(el: HTMLDivElement) {
     if (!firstChoice) {
       setFirstChoice(el);
       return;
     }
     setSecondChoice(el)
  }

  function startGame() {
    setWin(0);
    setArray(pairOfCards)
  }

  function clearState() {
    setFirstChoice(null);
    setSecondChoice(null);
  }
  useEffect(() => {
    if (firstChoice && secondChoice) {
      const result = engine(firstChoice, secondChoice, stopAllCards, clearState, playAllCards); 
      if (typeof(result) === "number"){setWin(win => win! + 1)} 
    }
  }, [firstChoice, secondChoice]);

  return (
    <>
      <Home startGame={startGame} win={win} />
      {win !== null 
       ?
       <Main>
         {array.map(({data,imgUrl,alt},idx) => {
            return <Card  key={idx} data={data} imgUrl={imgUrl} alt={alt} handleChoice={handleChoice} win={win}  />
         })}
       </Main> 
       : null
      } 
      <EndGame restartGame={startGame} win={win} />
    </>
  )
}

