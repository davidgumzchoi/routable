import styled from 'styled-components';

const IssueStyles = styled.li`
  display: flex;
  align-items: center;

  .issue-details {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    overflow: hidden;

    h2 {
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export default IssueStyles;
