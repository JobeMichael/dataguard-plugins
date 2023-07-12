import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;
