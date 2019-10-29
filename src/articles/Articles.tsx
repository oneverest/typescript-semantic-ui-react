import React from "react";
import withGists from "temp/api";
import AList from "temp/AList";
import FontSize from "temp/FontSize";

const AListWithGists = withGists(AList);

function Articles() {
  return (
    <FontSize />
    // <AListWithGists name={"gaearon"}/>
  );
}

export default Articles;
