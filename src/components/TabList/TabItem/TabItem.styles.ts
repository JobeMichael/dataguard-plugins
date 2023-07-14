import styled from "styled-components";

export const TabItem = styled.li<{ active?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  background-color: ${({ active }) => (active ? "#fff" : "transparent")};
  border-left: 5px solid ${({ active }) => (active ? "#f3216b" : "transparent")};

  a {
    text-decoration: none;
    color: inherit;
    padding: 15px;
    width: 100%;
  }

  span {
    margin-left: 10px;
  }
`;
