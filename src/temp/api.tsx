import React, { Component } from "react";

const withData = (url: CallableFunction | string) => (AComponent: any): any => {
  return class extends Component {
    constructor(props: any) {
      super(props);

      this.state = {
        data: []
      };
    }

    componentDidMount() {
      const endpoint = typeof url === "function" ? url(this.props) : url;
      fetch(endpoint)
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

    render() {
      return <AComponent {...this.props} {...this.state} />;
    }
  };
};

// const withGists = withData('https://api.github.com/users/gaearon/gists');
interface IGistUser {
  name: string;
}

const withGists = withData((props: IGistUser) => {
  return `https://api.github.com/users/${props.name}/gists`;
});

export default withGists;
