import { useForm } from "react-hook-form";
import { AuthLayout } from "../component/auth/AuthLayout";
import { Bottom } from "../component/auth/Bottom";
import { Button } from "../component/auth/Button";
import { Form } from "../component/auth/Form";
import { Input } from "../component/auth/Input";
import { Title } from "../component/auth/Title";
import { routes } from "../routes";

export const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid }, //<= form의 상태를 가져올때
  } = useForm({
    mode: "onChange", //<= 실시간으로 작성할때 메세지가 뜨도록 만들수 있음
  });

  const onSubmit = () => {
    // console.log(getValues());
    // =>유저가 입력한 값을 가져올 수 있음

    const { username, password } = getValues();
  };

  console.log(isValid);

  return (
    <AuthLayout>
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
