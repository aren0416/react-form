import { logoutUser } from "../apollo";

export const Home = () => {
  return (
    <>
      Home
      <button onClick={() => logoutUser()}>๋ก๊ทธ์์</button>
    </>
  );
};
