import * as React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import Home from "home/Home";
import About from "about/About";

interface IAppState {
  isLogin: boolean;
}

// const Home = React.lazy(() => import("../home/Home"));
// const About = React.lazy(() => import("../about/About"));

export class App extends React.Component<any, IAppState, any> {
  constructor(props?: any) {
    super(props);
    this.state = { isLogin: false };
  }

  componentDidMount() {
    // fetch("http://localhost:8800/posts")
    //   .then(res => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then(data => this.setState({ posts: data }))
    //   .catch(console.log);
  }

  render() {
    return (
      <div>
        <Router>
          <PageHeader></PageHeader>
          <Container id="main" className="text basic segment">
            {/* <React.Suspense fallback={<div>loading....</div>}> */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
            </Switch>
            {/* </React.Suspense> */}
          </Container>
          <PageFooter />
        </Router>
      </div>
    );
  }
}

// export default withRouter(App);
export default App;
