import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowMagic from "./components/ShowMagic";
import LoggingForm from "./pages/LoggingForm";
import RegisterForm from "./pages/RegisterForm";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar}/>
      <Switch>
        <Route exact path="/" component={ShowMagic} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/userlogin" component={LoggingForm} />
        <Route exact path="/userregister" component={RegisterForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;