import React, { useState } from "react";
import { FiPower } from "react-icons/fi";

import * as S from "./ToggleSwitch.styles";

interface ToggleSwitchProps {
  activeLabel?: string;
  inactiveLabel?: string;
  labelPosition?: "left" | "bottom";
  active?: boolean;
  showIcon?: boolean;
  disabled?: boolean;
  callback: (active: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  activeLabel,
  inactiveLabel,
  labelPosition = "bottom",
  active = false,
  showIcon = false,
  disabled = false,
  callback,
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
        <S.ToggleSwitchInput
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
        />
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
