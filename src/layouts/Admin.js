// Chakra imports
import { Box, Portal, useColorMode, useDisclosure } from "@chakra-ui/react";
import bgAdmin from "assets/img/admin-background.png";
import Configurator from "components/Configurator/Configurator";
import TagCloud from "components/Cloud";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes.js";
// Custom Chakra theme
import FixedPlugin from "components/FixedPlugin/FixedPlugin";
// Custom components
import MainPanel from "components/Layout/MainPanel";
//import PanelContainer from "components/Layout/PanelContainer";
//import PanelContent from "components/Layout/PanelContent";

export default function Dashboard(props) {
    const { ...rest } = props;
    // states and functions
    const [fixed, setFixed] = useState(true);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/") {
                return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
            } else {
                return null;
            }
        });
    };
    const { isOpen, onOpen, onClose } = useDisclosure();
    document.documentElement.dir = "ltr";
    // Chakra Color Mode
    return (
        <MainPanel>
            <TagCloud />
            <Switch>{getRoutes(routes)}</Switch>
            <Portal>
                <FixedPlugin secondary={true} fixed={fixed} onOpen={onOpen} />
            </Portal>
            <Configurator
                secondary={true}
                isOpen={isOpen}
                onClose={onClose}
                isChecked={fixed}
                onSwitch={(value) => {
                    setFixed(value);
                }}
            />
        </MainPanel>
    );
}
