import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Form from "./Form";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Post from "./Post";

function Routes () {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/Home" />
            </Route>
            <Route path="/Login" exact component={Login} />
            <PrivateRoute path="/Home" component={Home} />
            <PrivateRoute path="/Post" component={Post} />
            <PrivateRoute path="/Form" component={Form} />
            <PrivateRoute path="/About" component={About} />
            <Route path="*" exact component={PageNotFound} />
        </Switch>
    )
}

export default Routes