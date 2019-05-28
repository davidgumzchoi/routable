import styled from 'styled-components';

const SidebarStyles = styled.form`
  padding: 1rem;

  label {
    display: block;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0.5rem;
    margin: 0.5rem 0;
    width: 100%;
    font-family: ${props => props.theme.fontFamily};

    &[type='submit'] {
      background: #3056ba;
      color: #fff;
      cursor: pointer;
      margin-top: 2rem;

      &:hover {
        opacity: 0.8;
      }

      &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`;

export default SidebarStyles;
