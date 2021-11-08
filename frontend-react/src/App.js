import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar}/>
      <Switch>
        <Route exact path="/" component={ShowMagic} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;