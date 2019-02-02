import styled from 'styled-components';

const Form = styled.form`
  padding: 30px;
  font-size: 1.5rem;
  line-height: 1.5;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1.5rem;
  }
  input,
  textarea,
  select {
    
    width: 100%;
    padding: 1rem;
    font-size: 1.3rem;
    border: 1px solid black 0.2;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    margin-top: 3rem;
    width: 100%;
    background: ${props => props.theme.green};
    color: white;
    border: 0;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 1rem 1.2rem;
  }

  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }
  p {
    padding-top: 3rem;
    font-size: 1.3rem;
    text-align: center;
    font-weight: 500;
    a { color: blue;}
  }
`;

export default Form;