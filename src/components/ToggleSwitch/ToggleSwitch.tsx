import React, { useState } from "react";
import { FiPower } from "react-icons/fi";

import * as S from "./ToggleSwitch.styles";

interface ToggleSwitchProps {
  label?: string;
  labelPosition?: "left" | "bottom";
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  labelPosition = "bottom",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <S.ToggleSwitchContainer labelposition={labelPosition}>
      {label && labelPosition === "left" && <S.Label>{label}</S.Label>}
      <S.ToggleSwitchWrapper>
        <S.ToggleSwitchInput checked={isChecked} onChange={handleChange} />
        <S.Slider>
          <S.IconWrapper isChecked={isChecked}>
            {isChecked ? <FiPower /> : <FiPower />}
          </S.IconWrapper>
        </S.Slider>
      </S.ToggleSwitchWrapper>
      {label && labelPosition === "bottom" && <S.Label>{label}</S.Label>}
    </S.ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
