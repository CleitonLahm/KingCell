import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const CardLogin = styled(Form)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 8px;
  text-align: center;
  padding: 24px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 16px; 
`;

export const FormField = styled(Field)`
  width: calc(100% - 24px); 
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 auto; 
`;

export const Button = styled.button`
  width: calc(100% - 24px);
  padding: 12px;
  background-color: #ee793b;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 auto;

  &:hover {
    background-color: #cc6826;
  }
`;

export const FormError = styled(ErrorMessage)`
  color: red;
`;
