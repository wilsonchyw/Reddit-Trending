// Chakra imports
import { Box, Button, Flex, Switch, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Loading from "components/Loading";
import React from "react";

export default function Setting({ forums, target, handleForumToggle, handleTargetToggle }) {
    const textColor = useColorModeValue("gray.700", "white");
    return (
        <>
            <Flex direction="column">
                <Flex align="center" justify="space-between" p="22px">
                    <Text color={textColor} fontSize="lg" fontWeight="bold">
                        Forums
                    </Text>
                    <Button
                        variant="primary"
                        maxH="30px"
                        onClick={() => {
                            handleForumToggle((preState) => {
                                const forumObj = {};
                                for (const forum in preState) {
                                    forumObj[forum] = true;
                                }
                                return forumObj;
                            });
                        }}
                    >
                        {"All"}
                    </Button>
                </Flex>
            </Flex>

            <Box p="0px 0px 0px 22px">
                {Object.keys(forums).length ? (
                    Object.keys(forums).map((forum) => (
                        <Flex align="center" key={forum} className="my-2">
                            <Switch colorScheme="blue" me="10px" isChecked={forums[forum]} onChange={() => handleForumToggle((preState) => ({ ...preState, [forum]: !preState[forum] }))} />
                            <Text noOfLines={1} fontSize="md" color="gray.400" fontWeight="400">
                                {forum}
                            </Text>
                        </Flex>
                    ))
                ) : (
                    <Loading />
                )}
            </Box>
            <Flex direction="column" mb="40px" p="0px 0px 0px 22px" className="mb-2">
                <Text color={textColor} fontSize="lg" fontWeight="bold">
                    Target
                </Text>
            </Flex>
            <Flex align="center" p="0px 0px 22px 22px">
                <Switch colorScheme="blue" me="10px" isChecked={target == "comment"} onChange={() => handleTargetToggle((preState) => (preState == "comment" ? "vote" : "comment"))} />
                <Text noOfLines={1} fontSize="md" color="gray.400" fontWeight="400">
                    {target == "comment" ? "Comment" : "Vote"}
                </Text>
            </Flex>
        </>
    );
}
