import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { loginUser } from "../apollo";
import { AuthLayout } from "../component/auth/AuthLayout";
import { Bottom } from "../component/auth/Bottom";
import { Button } from "../component/auth/Button";
import { Form } from "../component/auth/Form";
import { Input } from "../component/auth/Input";
import { Title } from "../component/auth/Title";
import { PageTitle } from "../component/PageTitle";
import { routes } from "../routes";

const LOGIN_MUTATION = gql`
  mutation ($username: String!, $password: String!) {
    # ($는 변수임)
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;
// => 1)))))))))))))          type정의 (user가 입력한 내용의 타입을 정의함)

export const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid }, //<= form의 상태를 가져올때
    setError, //<= error setting
  } = useForm({
    mode: "onChange", //<= 실시간으로 작성할때 메세지가 뜨도록 만들수 있음
  });

  const onCompleted = (data) => {
    // console.log(data);
    const {
      login: { ok, error, token },
    } = data;
    // => data : 백엔드에서 mutation결과값을 return한 값
    if (!ok) {
      setError("result", {
        message: error,
      });
    }
    if (token) {
      console.log(token);
      loginUser(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: onCompleted,
  });
  // => 2))))))))))))))            실제 사용할 것을 적어줌

  const onSubmit = () => {
    // console.log(getValues());
    // =>유저가 입력한 값을 가져올 수 있음

    if (loading) {
      return;
    }
    // => 로그인버튼 여러번 입력시 서버에 중복요청되지 않도록 loading시 return시켜줌

    const { username, password } = getValues();

    // => 3)))))))))))))))           로그인시 입력한 값을 서버에 요청함
    login({
      variables: {
        username,
        password,
      },
    });
  };

  console.log(isValid);

  return (
    <AuthLayout>
      <PageTitle title="로그인" />
      <Title>LOGIN</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다",
            minLength: {
              value: 3,
              message: "아이디는 3자리 이상 작성해 주세요",
            },
          })}
          type="text"
          placeholder="ID"
        />
        {/* {errors && errors.username.message} */}
        {errors?.username?.message}
        {/* =>error일때의 메세지를 불러옴, userForm에 정의되어있는 값을 가져옴 */}
        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해 주세요",
            },
          })}
          type="password"
          placeholder="password"
        />
        {errors?.password?.message}

        {errors?.result?.message}
        {/* => serError의 results */}

        <Button opacity={isValid ? "1" : "0.5"} text="로그인" />

        <Bottom
          text="아이디가 없나요?"
          link={routes.signup}
          linkText="회원가입"
        />
      </Form>
    </AuthLayout>
  );
};
