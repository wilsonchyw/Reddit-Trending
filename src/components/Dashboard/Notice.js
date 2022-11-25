import { Flex, Stat, StatLabel, StatNumber, useColorModeValue, Text } from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import Card from "components/Card/Card.js";
import formatNumber from "lib/formatNumber";
import Loading from "components/Loading";
export default function Notice({ title, content, Icon, isDate = false }) {
    const textColor = useColorModeValue("gray.700", "white");
    return (
        <Card minH="70px">
            <Flex direction="column">
                <Flex flexDirection="row" align="center" justify="center" w="100%">
                    <Stat me="auto">
                        <StatLabel fontSize="xs" color="gray.400" fontWeight="bold" textTransform="uppercase">
                            {title}
                        </StatLabel>
                        <Flex>
                            <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                                {content ? (isDate ? new Date(content).toLocaleString() : formatNumber(content)) : "Loading..."}
                            </StatNumber>
                        </Flex>
                    </Stat>
                    <IconBox borderRadius="50%" as="box" h={"45px"} w={"45px"} bg={"#4299E1"}>
                        <Icon h={"24px"} w={"24px"} color={"#EBF8FF"} />
                    </IconBox>
                </Flex>
            </Flex>
        </Card>
    );
}
