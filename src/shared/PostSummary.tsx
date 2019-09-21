import * as React from "react";
import { Header, ListItem } from "semantic-ui-react";
import { Post } from "global.d";

interface IPostSummaryProps {
  post: Post;
}

function PostSummary(props: IPostSummaryProps) {
  return (
    <ListItem className="rnb-psl__elem">
      <Header className="large">
        <Header.Content>{props.post.title}</Header.Content>
        <Header.Subheader>{props.post.created_at}</Header.Subheader>
      </Header>
      <p>{props.post.content}</p>
    </ListItem>
  );
}

export default PostSummary;
