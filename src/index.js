/*!

=========================================================
* Argon Dashboard Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-chakra
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-chakra/blob/master/LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { ChakraProvider } from "@chakra-ui/react";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLayout from "layouts/Admin.js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
// Custom Chakra theme
import theme from "theme/theme.js";
import { store } from "./store";
import Message from "components/Message";

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider theme={theme} resetCss={false} position="relative">
            <HashRouter>
                <Switch>
                    <Route path={`/`} component={AdminLayout} />
                    <Redirect from={`/`} to="/" />
                </Switch>
            </HashRouter>
        </ChakraProvider>
    </Provider>,
    document.getElementById("root")
);
