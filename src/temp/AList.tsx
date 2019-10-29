import React from "react";
import { List } from "semantic-ui-react";

interface IDataProps {
  data: IGistProps[];
}

interface IGistProps {
  id: string;
  description: string;
}

function AList({ data: gists }: IDataProps) {
  const elements = gists.map(gist => (
    <List.Item key={gist.id}>{gist.description}</List.Item>
  ));
  return <List>{elements}</List>;
}

export default AList;
