import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Pricing from "./Component/Pricing.jsx";
import 'antd/dist/antd.css';



class App extends Component {
    render() {
        return (

                <Switch>
                    <Route  path='/' component={Pricing}/>

                </Switch>

        );
    }
}

export default App;
