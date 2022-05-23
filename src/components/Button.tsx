import { ButtonDisplay } from "../styles/Button";

interface Props {
    text: string
    isStart?: boolean
}

export const Button = ({text,isStart}: Props) => {
  return (
    <ButtonDisplay isStartGame={isStart}>
      <img src="/images/hat.svg" alt="luffy's hat" />
      {text}
    </ButtonDisplay>
  );
}