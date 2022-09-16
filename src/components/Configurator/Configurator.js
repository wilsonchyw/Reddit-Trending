// Chakra Imports
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { HSeparator } from "components/Separator/Separator";
import apiHandler from "lib/apiHandler";
import React, { useRef, useState } from "react";
import GitHubButton from "react-github-btn";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setForumData, setHeat, setLastestComment, setLastestVote, setTrendsData } from "store/rawDataSlice";
import { setDateRange, setFetchLimit, setMaxYAxis, setMinComment, setMinVote, toggleNotice } from "store/settingSlice";
import Slider from "./Range";
import Toggle from "./Toggle";

export default function Configurator(props) {
    const dispatch = useDispatch();
    const { sidebarVariant, setSidebarVariant, secondary, isOpen, onClose, fixed, ...rest } = props;
    const [switched, setSwitched] = useState(props.isChecked);

    const { colorMode, toggleColorMode } = useColorMode();

    let bgButton = useColorModeValue("linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)", "white");
    let colorButton = useColorModeValue("white", "gray.700");
    const secondaryButtonBg = useColorModeValue("white", "transparent");
    const secondaryButtonBorder = useColorModeValue("gray.700", "white");
    const secondaryButtonColor = useColorModeValue("gray.700", "white");
    const bgDrawer = useColorModeValue("white", "navy.800");
    const settingsRef = useRef();
    const { fetchLimit, minVote, minComment, maxYAxis, dateRange, cache, notice } = useSelector((state) => state.setting);

    const fetchData = () => {
        const reducers = [setTrendsData, setForumData, setLastestVote, setLastestComment, setHeat];
        reducers.forEach((reducer) => dispatch(reducer([])));
        const params = {
            limit: fetchLimit,
            minVote: minVote,
            minComment: minComment,
            cache: cache,
            dateRange: dateRange,
        };
        apiHandler({ url: "/post/trend", params }, (data) => dispatch(setTrendsData(data))); //setTrendDataRaw
        apiHandler({ url: "/public/vote", params }, (data) => dispatch(setLastestVote(data))); //setLastestVoteRaw);
        apiHandler({ url: "/public/comment", params }, (data) => dispatch(setLastestComment(data))); //setLastestCommentRaw);
        apiHandler({ url: "/count/forum", params }, (data) => dispatch(setForumData(data))); //setForumDataRaw);
        apiHandler({ url: "/post/symbols", params }, (data) => dispatch(setHeat(data))); //setHeatRaw);
    };

    return (
        <>
            <Drawer isOpen={props.isOpen} onClose={props.onClose} placement={document.documentElement.dir === "rtl" ? "left" : "right"} finalFocusRef={settingsRef} blockScrollOnMount={false}>
                <DrawerOverlay />
                <DrawerContent bg={bgDrawer}>
                    <DrawerHeader pt="24px" px="24px">
                        <DrawerCloseButton />
                        <Text fontSize="xl" fontWeight="bold" mt="16px">
                            Settings
                        </Text>

                        <HSeparator />
                    </DrawerHeader>
                    <DrawerBody w="340px" ps="24px" pe="40px">
                        <Flex flexDirection="column">
                            <Slider title="Min Vote" max={200} value={minVote} reducers={setMinVote} />
                            <Slider title="Min Comment" max={200} value={minComment} reducers={setMinComment} />
                            <Slider title="Max Chart Y Axis" max={4000} value={maxYAxis} reducers={setMaxYAxis} />
                            <Slider title="Max fetch quantity" max={4000} min={1000} value={fetchLimit} reducers={setFetchLimit} />
                            <Slider title="Max fetch date range" max={7} min={1} value={dateRange} reducers={setDateRange} />
                            <Button w="100%" mb="16px" bg={bgButton} color={colorButton} fontSize="xs" variant="no-effects" px="30px" onClick={fetchData}>
                                Refresh
                            </Button>
                            <HSeparator />
                            <Toggle title={"Notices"} content={`${notice ? "On" : "Off"}`} callback={() => dispatch(toggleNotice())} />
                            <Toggle title={"Dark/Light"} content={`Toggle ${colorMode === "light" ? "Dark" : "Light"}`} callback={toggleColorMode} />

                            <HSeparator />
                                <Flex justifyContent="center" alignItems="center" w="100%" className="my-3">
                                    <GitHubButton
                                        href="https://github.com/wilsonych/Reddit-Trending"
                                        data-icon="octicon-star"
                                        data-show-count="true"
                                        aria-label="Reddit-Trending on GitHub"
                                    >
                                        Star
                                    </GitHubButton>
                                </Flex>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
