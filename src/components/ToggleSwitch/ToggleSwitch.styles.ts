import styled from "styled-components";

interface ToggleSwitchProps {
  label?: string;
}

export const ToggleSwitchWrapper = styled.label`
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Slider = styled.span`
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
  }
`;

export const ToggleSwitchInput = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

export const IconWrapper = styled.div<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ isChecked }) => (isChecked ? "#2196f3" : "#ccc")};
`;

export const Label = styled.span`
  margin-left: 8px;
`;
