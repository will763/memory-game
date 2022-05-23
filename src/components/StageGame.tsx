import { Div } from "../styles/home"
import { Start } from "../styles/start";
import { Button } from "./Button"
import { ParticlesBackgound } from "./ParticlesBackgound"

interface EndGame {
    restartGame: () => void;
    win: number | null;
}

interface StartGame {
    startGame: () => void;
    win: number | null;
}

export const EndGame = ({restartGame,win}:EndGame) => {
    return (
        <Div start={win}>
            <ParticlesBackgound />
            <h1>Congratulations!!!</h1>
            <div className="container" onClick={restartGame}>
              <Button text={"new game"} />
            </div>
        </Div>
    )
}

export const Home = ({startGame,win}:StartGame) => {
    return (
        <Start start={win}>
            <h1>Memory Game</h1>
            <div className="container" onClick={startGame}>
              <Button text={"new game"} isStart={true} />
            </div>
        </Start>
    )
}