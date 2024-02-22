import { ErrorMessage, Field, Form } from "formik"
import styled from "styled-components"

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
`
export const CardLogin = styled(Form)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);  
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 8px;
  text-align: center;
  padding: 24px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  gap: 8px;
`

export const FormField = styled(Field)`
  width: 100%;
  padding: 8px;
`

export const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
`

const FormError = styled(ErrorMessage)`
  color: red;
`