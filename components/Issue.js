import IssueStyles from './../styles/IssueStyles';
import { formatDate, formatTimeAgo } from './../lib/helpers';

const Issue = props => {
  const { user, title, created_at, updated_at } = props.issue;

  return (
    <IssueStyles>
      <img src={user.avatar_url} height="40" width="40" />
      <div className="issue-details">
        <h2>{title}</h2>
        <span>{formatDate(created_at)}</span>
        <span>{formatTimeAgo(updated_at)}</span>
      </div>
    </IssueStyles>
  );
};

export default Issue;
