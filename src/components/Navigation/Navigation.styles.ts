import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  flex: 0 0 250px;
  background-color: #f2f2f2;
  padding: 20px 0;
  box-sizing: border-box;
  position: relative;
`;

export const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TabItem = styled.li<{ active?: boolean }>`
  padding: 15px 10px;
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
  }

  span {
    margin-left: 10px;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const Footer = styled.div<{ active: boolean }>`
  background: linear-gradient(
    0deg,
    ${({ active }) => (active ? "rgb(120 224 156)" : "rgb(224, 120, 143)")} 0%,
    rgba(242, 242, 242, 1) 100%
  );

  width: 100%;
  height: 55px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
