import styled from "styled-components";

const SButton = styled.button`
  all: unset;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: salmon;
  color: white;
  font-weight: 700;
  box-sizing: border-box;
  margin-top: 30px;
  opacity: ${(props) => props.opacity};
`;

// export const Button = (props) => {
//     => object로 불러오기때문에 중괄호 필요함
//     => spread연산자로 통채로 props값을 불러올 수 있음
//   console.log(props);
//   return <SButton {...props}>LOGIN</SButton>;
// };

export const Button = ({ opacity, text }) => {
  return <SButton opacity={opacity}>{text}</SButton>;
};
