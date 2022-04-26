import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "TOKEN";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
// => 로그인한 다음 새로고침시 로그아웃되지않도록 작업

export const loginUser = (token) => {
  localStorage.setItem(TOKEN, token);
  //   => 검사창의 application -> local storage에 저장
  isLoggedInVar(true);
};

export const logoutUser = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
};

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
// => 백엔드와 연결
