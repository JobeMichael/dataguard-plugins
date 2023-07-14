import React, { useState } from "react";
import { FiPower } from "react-icons/fi";

import * as S from "./ToggleSwitch.styles";

interface ToggleSwitchProps {
  activeLabel?: string;
  inactiveLabel?: string;
  labelPosition?: "left" | "bottom";
  active?: boolean;
  callback: (active: boolean) => void;
  showIcon?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  activeLabel,
  inactiveLabel,
  labelPosition = "bottom",
  active = false,
  callback,
  showIcon = false,
}) => {
  const [isChecked, setIsChecked] = useState(active);

  const handleChange = () => {
    setIsChecked(!isChecked);
    callback(!isChecked);
  };

  const labelSuffix = isChecked ? "active" : "blocked";

  return (
    <S.ToggleSwitchContainer labelposition={labelPosition}>
      {labelPosition === "left" && (
        <S.Label>{isChecked ? activeLabel : inactiveLabel}</S.Label>
      )}
      <S.ToggleSwitchWrapper>
        <S.ToggleSwitchInput checked={isChecked} onChange={handleChange} />
        <S.Slider>
          <S.IconWrapper isChecked={isChecked}>
            {showIcon && <> {isChecked ? <FiPower /> : <FiPower />}</>}
          </S.IconWrapper>
        </S.Slider>
      </S.ToggleSwitchWrapper>
      {labelPosition === "bottom" && (
        <S.Label className={`toggle_label_${labelSuffix}`}>
          {isChecked ? activeLabel : inactiveLabel}
        </S.Label>
      )}
    </S.ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
