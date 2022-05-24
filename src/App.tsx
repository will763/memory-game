import { useState, useEffect } from "react"
import { Card } from "./components/Card"
import { Main } from "./styles/Main"
import { EndGame, Home } from "./components/StageGame"

import { pairOfCards } from "./utils/cardsInformation"
import { engine } from "./utils/engineToWin"

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
    setArray(pairOfCards);
    setWin(0);
  }

  function clearState() {
    setFirstChoice(null);
    setSecondChoice(null);
  }

  useEffect(() => {
    if (firstChoice && secondChoice) {
      const result = engine(firstChoice, secondChoice, clearState); 
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

