import styled from "styled-components";

export const ToggleSwitchContainer = styled.div<{
  labelposition: string;
}>`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${({ labelposition }) =>
    labelposition === "bottom" && "flex-direction: column;"};
`;

export const ToggleSwitchWrapper = styled.label`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 24px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e0282e;
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ToggleSwitchInput = styled.input.attrs({ type: "checkbox" })<{
  disabled: boolean;
}>`
  display: none;
  ${({ disabled }) => disabled && "opacity: 0.3; cursor: not-allowed;"}

  &:checked + ${Slider} {
    background-color: #00b96b;
  }

  &:checked + ${Slider}:before {
    transform: translateX(16px);
  }
`;

export const IconWrapper = styled.div<{ isChecked: boolean }>`
  position: absolute;
  top: 56%;
  transform: translateY(-50%);
  ${({ isChecked }) => (isChecked ? "left: 20px" : "right: 20px")};
  color: ${({ isChecked }) => (isChecked ? "#00B96B" : "#E0282E")};
`;

export const Label = styled.span`
  margin-right: 8px;
`;
