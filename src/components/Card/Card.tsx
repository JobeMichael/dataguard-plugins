import ToggleSwitch from "components/ToggleSwitch/ToggleSwitch";
import * as S from "./Card.styles";

const Card = () => {
  return (
    <S.Card>
      <S.CardHeader>
        <S.CardTitle>Card Title 1</S.CardTitle>
        <ToggleSwitch label="Active" />
      </S.CardHeader>
      <S.CardDescription>This is the description for Card 1.</S.CardDescription>
    </S.Card>
  );
};

export default Card;
