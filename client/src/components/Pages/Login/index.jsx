import { Formik, ErrorMessage} from "formik"
import * as yup from "yup"
import { LoginContainer, CardLogin, FormField, Button } from "./styles"

const Login = () => {
  const handleClickRegister = (values) => console.log(values)
  const handleClickLogin = (values) => console.log(values)

  const ValidationLogin = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required(),
  })

  const ValidationRegister = yup.object().shape({
    email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais")
  })


  return (
    <LoginContainer>
      <Formik
      initialValues={{}}
      onSubmit={handleClickLogin}
      validationSchema={ValidationLogin}
      >
        <CardLogin>
        <h1>Login</h1>
          <div>
            <FormField name="email" className="form-field" placeholder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            >
            </ErrorMessage>
          </div>

          <div>
            <FormField name="password" className="form-field" placeholder="Senha" />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            >
            </ErrorMessage>
          </div>
          <Button className="button" type="submit">Login</Button>
        </CardLogin>
      </Formik>

      <Formik
      initialValues={{}}
      onSubmit={handleClickRegister}
      validationSchema={ValidationRegister}
      >
        <CardLogin>
        <h1>Cadastre-se</h1>
          <div>
            <FormField name="email" className="form-field" placeholder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            >
            </ErrorMessage>
          </div>

          <div>
            <FormField name="password" className="form-field" placeholder="Senha" />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            >
            </ErrorMessage>
          </div>

          <div>
            <FormField name="confirmPassword" className="form-field" placeholder="Confirme sua senha" />
            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error"
            >
            </ErrorMessage>
          </div>
          <Button className="button" type="submit">Login</Button>
        </CardLogin>
      </Formik>
      
    </LoginContainer>
  )
}

export default Login
