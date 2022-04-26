import { useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "../component/auth/AuthLayout";
import { Bottom } from "../component/auth/Bottom";
import { Button } from "../component/auth/Button";
import { Form } from "../component/auth/Form";
import { Input } from "../component/auth/Input";
import { Title } from "../component/auth/Title";
import { PageTitle } from "../component/PageTitle";
import { routes } from "../routes";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid }, //<= form의 상태를 가져올때
    watch,
  } = useForm({
    mode: "onChange", //<= 실시간으로 작성할때 메세지가 뜨도록 만들수 있음
  });

  const password = useRef({});
  password.current = watch("password", ""); //<= resigter에 적은 이름

  const onSubmit = (data) => {
    // console.log(getValues());
    // =>유저가 입력한 값을 가져올 수 있음
    // const { username, password } = getValues();
    // console.log(data);
  };

  console.log(isValid);

  return (
    <AuthLayout>
      <PageTitle title="회원가입" />
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName", {
            required: "성은 필수 입니다",
          })}
          type="text"
          placeholder="성"
        />
        {errors?.firstName?.message}

        <Input
          {...register("lastName", {
            required: "이름 필수 입니다",
          })}
          type="text"
          placeholder="이름"
        />
        {errors?.lastName?.message}

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
        {errors?.username?.message}

        <Input
          {...register("email", {
            required: "이메일은 필수 입니다",
          })}
          type="text"
          placeholder="이메일"
        />
        {errors?.email?.message}

        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해 주세요",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        {errors?.password?.message}

        <Input
          {...register("re_password", {
            required: "패스워드는 필수 입니다",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해 주세요",
            },
            validate: (value) =>
              value === password.current || "패스워드가 같지않습니다",
          })}
          type="password"
          placeholder="패스워드 확인"
        />
        {errors?.re_password?.message}

        <Button opacity={isValid ? "1" : "0.5"} text="회원가입" />

        <Bottom text="아이디가 있나요?" link={routes.home} linkText="로그인" />
      </Form>
    </AuthLayout>
  );
};
