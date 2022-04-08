import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../core/Forms/Form";
import Field from "../../core/Forms/Field";
import { InputPassword, InputText } from "../../core/Forms/Input";
export default function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const onFinish = async (values) => {
    // const { email, password } = values;
    console.log("values :>> ", values);
    // const data = await getToken(email, password);
    // toast.success({});
    // if (data?.accessToken) {
    navigate("/");
    //   window.location.reload();
    // }
  };

  return (
    <div className="w-full flex h-screen items-center justify-center align-middle bg-gray-200">
      <div className="w-4/12 h-auto p-8 rounded-lg bg-white flex flex-col gap-5">
        <div>
          <h1
            className="text-3xl font-extrabold text-center w-full text-gray-800"
            data-testid="login__header"
          >
            Welcome back
          </h1>
          <h2
            className="text-sm font-medium text-center mt-2 w-full text-gray-500"
            data-testid="login__subHeader"
          >
            Login to your account
          </h2>
        </div>
        <Form initialValues={initialValues} onFinish={onFinish}>
          <div className="flex flex-col gap-3">
            <Field
              name="email"
              label="Adresse Mail"
              rules={[
                {
                  required: true,
                  message: " Email est obligatoire!",
                },
                {
                  type: "email",
                  message: " Entrer un Email SVP!",
                },
              ]}
            >
              <InputText
                type="email"
                placeholder="Entrer ton adresse Mail..."
              />
            </Field>
            <Field
              name="password"
              label="Mot de passe"
              rules={[
                {
                  required: true,
                  message: " Mot de passe est obligatoire!",
                },
                {
                  min: 8,
                  message: " Mot de passe doit etre superieur a 8!",
                },
              ]}
            >
              <InputPassword placeholder="Entrer Ton Mot de passe" />
            </Field>
            <div>
              <button
                type="submit"
                data-testid="login__button"
                className={`text-white w-full mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 `}
              >
                Login
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
