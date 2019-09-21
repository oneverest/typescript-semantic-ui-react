import * as React from "react";
import { Message, Container } from "semantic-ui-react";

function PageFooter(props: any) {
  return (
    <Container id="page-footer" className="text">
      <Message className="visible">
        There are 173 articles in the archive, why not check them out?
      </Message>
    </Container>
  );
}

export default PageFooter;
