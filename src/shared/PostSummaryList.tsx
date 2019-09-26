import * as React from "react";
import { Post } from "global.d";
import PostSummary from "./PostSummary";
import "./PostSummary.css";
import { List } from "semantic-ui-react";

interface IPostSummaryListProps {
  posts: Post[];
}

function PostSummaryList(props: IPostSummaryListProps) {
  return (
    <List className="divided rnb-psl">
      {props.posts.map(post => (
        <PostSummary key={post.post_id} post={post} />
      ))}
    </List>
  );
}

export default PostSummaryList;
