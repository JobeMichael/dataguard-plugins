import React, { useState } from "react";
import { FiPower } from "react-icons/fi";

import * as S from "./ToggleSwitch.styles";

interface ToggleSwitchProps {
  label?: string;
  labelPosition?: "left" | "bottom";
  active?: boolean;
  callback: (active: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  labelPosition = "bottom",
  active = false,
  callback,
}) => {
  const [isChecked, setIsChecked] = useState(active);

  const handleChange = () => {
    setIsChecked(!isChecked);
    callback(!isChecked);
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
