import styled from "styled-components";

export const Card = styled.div<{ disabled?: boolean }>`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
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
`;

export const CardDescription = styled.p`
  margin-top: 10px;
`;
