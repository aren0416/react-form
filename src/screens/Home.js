import { logoutUser } from "../apollo";

export const Home = () => {
  return (
    <>
      Home
      <button onClick={() => logoutUser()}>로그아웃</button>
    </>
  );
};
