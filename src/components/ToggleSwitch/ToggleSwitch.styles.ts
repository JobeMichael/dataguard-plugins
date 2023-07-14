import styled from "styled-components";

export const ToggleSwitchContainer = styled.div<{ labelposition: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${({ labelposition }) =>
    labelposition === "bottom" && "flex-direction: column;"};
`;

export const ToggleSwitchWrapper = styled.label`
  display: inline-block;
  position: relative;
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
  background-color: #e0282e;
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

export const ToggleSwitchInput = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${Slider} {
    background-color: #00b96b;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

export const IconWrapper = styled.div<{ isChecked: boolean }>`
  position: absolute;
  top: 54%;
  transform: translateY(-50%);
  ${({ isChecked }) => (isChecked ? "left: 35px" : "right: 35px")};
  /* right: ${({ isChecked }) => (isChecked ? "19px" : "28px")}; */
  color: ${({ isChecked }) => (isChecked ? "#00B96B" : "#E0282E")};
`;

export const Label = styled.span`
  margin-right: 8px;
`;
