// Chakra imports
import { Box, Button, Flex, Progress, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import Loading from "components/Loading";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function ThreadTrend({ textColor, showForums, handleThreadFetch, userSearch, setUserSearch, target, datas, reset }) {
    if (!datas.length) return <Loading />;
    const { dateRange } = useSelector((state) => state.setting);
    const [expand, setExpand] = useState(false);
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");
    let max = 0;
    datas.forEach((c) => (max = Math.max(c.change, max)));
    return (
        <>
            <Flex direction="column">
                <Flex align="center" justify="space-between" p="22px">
                    <Text fontSize="lg" color={textColor} fontWeight="bold">
                        Top{expand ? ` ${datas.length} ` : " 10 "}thread in {dateRange * 24} hours
                    </Text>
                    <input className="form-control w-25" type="text" placeholder="Search" value={userSearch} onChange={(e) => setUserSearch(e.target.value)} />
                    <div>
                        <Button variant="primary" maxH="30px" onClick={reset}>
                            RESET CHART
                        </Button>{" "}
                        <Button
                            variant="primary"
                            maxH="30px"
                            onClick={() => {
                                setExpand((preState) => !preState);
                                setUserSearch("");
                            }}
                        >
                            {expand ? "SHOW LESS" : "SHOW ALL"}
                        </Button>
                    </div>
                </Flex>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "scroll" }} style={{ overflowX: "hidden" }}>
                <Table>
                    <Thead>
                        <Tr bg={tableRowColor}>
                            <Th color="gray.400" borderColor={borderColor}>
                                Title
                            </Th>
                            <Th color="gray.400" borderColor={borderColor}>
                                Forum
                            </Th>
                            <Th color="gray.400" borderColor={borderColor}>
                                {target}
                            </Th>
                            <Th color="gray.400" borderColor={borderColor}></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {datas
                            .filter((c) => showForums[c.forum] && (c.id==userSearch || c.title.toLowerCase().includes(userSearch)))
                            .slice(0, expand ? 9999 : 10)
                            .map((el, index, arr) => (
                                <Tr key={el.id}>
                                    <Td color={textTableColor} fontSize="sm" fontWeight="bold" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                                        <Button variant="primary" size="xs" onClick={() => handleThreadFetch(el.id)}>
                                            CHART
                                        </Button>{" "}
                                        <a href={`https://www.reddit.com/r/${el.forum}/comments/${el.id}`} target="_blank">{el.title}</a>
                                    </Td>
                                    <Td color={textTableColor} fontSize="sm" fontWeight="bold" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                                        {el.forum}
                                    </Td>
                                    <Td color={textTableColor} fontSize="sm" fontWeight="bold" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                                        {el.MAX}
                                    </Td>
                                    <Td color={textTableColor} fontSize="sm" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                                        <Flex align="center">
                                            <Text color={textTableColor} fontWeight="bold" fontSize="sm" me="12px">{`${el.change}%`}</Text>
                                            <Progress size="xs" colorScheme={el.color} value={(el.change / max) * 100} minW="120px" />
                                        </Flex>
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </Box>
        </>
    );
}
