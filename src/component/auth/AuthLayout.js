import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  padding: 50px 20px 10px 20px;
`;

export const AuthLayout = ({ children }) => {
  return (
    <Wrap>
      <Container>{children}</Container>
    </Wrap>
  );
};
