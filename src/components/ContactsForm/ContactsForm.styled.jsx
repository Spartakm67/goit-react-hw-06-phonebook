import styled from '@emotion/styled'

import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

const Form = styled(FormikForm)`
display: flex;
gap:20px;
flex-direction: column;
width: 450px;
padding: 10px;
border: 1px solid black;
border-radius:4px;
`;
const FormField = styled.label`
gap:4px;
display: flex;
flex-direction: column;
`;

const ErrorMessage = styled(FormikError)`
color: red;
`;

const FormButton = styled.button`

  border-radius: 4px;
  font-size: 14px;
  padding: 2px 0;
  border: 1px solid gray;
    &:hover {
    background-color: #bbe4e9;
    font-weight: 700;
    color: #f95959;
  }
`;


export { Form, FormField, ErrorMessage, FormButton  };