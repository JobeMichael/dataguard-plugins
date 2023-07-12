import React, { useState } from "react";
import { FiPower } from "react-icons/fi";
import styled from "styled-components";

interface ToggleSwitchProps {
  label?: string;
}

const ToggleSwitchWrapper = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ToggleSwitchInput = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

const IconWrapper = styled.div<{ isChecked: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ isChecked }) => (isChecked ? "4px" : "28px")};
  color: ${({ isChecked }) => (isChecked ? "#2196f3" : "#ccc")};
`;

const Label = styled.span`
  margin-left: 8px;
`;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ToggleSwitchWrapper>
      <ToggleSwitchInput checked={isChecked} onChange={handleChange} />
      <Slider>
        <IconWrapper isChecked={isChecked}>
          {isChecked ? <FiPower /> : <FiPower />}
        </IconWrapper>
      </Slider>
      {label && <Label>{label}</Label>}
    </ToggleSwitchWrapper>
  );
};

export default ToggleSwitch;
