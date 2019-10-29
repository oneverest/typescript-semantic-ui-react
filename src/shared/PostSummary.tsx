import * as React from "react";
import { Header, ListItem } from "semantic-ui-react";
import PropTypes from "prop-types";

interface IPostSummaryProps {
  title: string;
  created_at: string;
  content: string;
}

const PostSummary = ({ title, created_at, content }: IPostSummaryProps) => {
  return (
    <ListItem className="rnb-psl__elem">
      <Header className="large">
        <Header.Content>{title}</Header.Content>
        <Header.Subheader>{created_at}</Header.Subheader>
      </Header>
      <p>{content}</p>
    </ListItem>
  );
};

PostSummary.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired
};

export default PostSummary;
