import styled, { css } from "styled-components";

const labelStyles = css`
  font-size: 12px;
  margin-top: 5px;
`;

export const Card = styled.div<{ disabled?: boolean }>`
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 18rem;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  gap: 10px;

  .toggle_label_blocked {
    ${labelStyles}
    color:red;
  }
  .toggle_label_active {
    ${labelStyles}
    color:#00b96b;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  align-self: baseline;
  margin-top: 10px;
`;

export const CardDescription = styled.p`
  margin-top: 10px;
`;
