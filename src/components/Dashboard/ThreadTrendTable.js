// Chakra imports
import { Box, Button, Flex, Progress, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import Loading from "components/Loading";
import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination_ from "./Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PER_PAGE = 8;

export default function ThreadTrend({ textColor, showForums, handleThreadFetch, userSearch, setUserSearch, target, datas, reset }) {
    if (!datas.length) return <Loading />;
    const [currentPage, setCurrent] = useState(1);
    const { dateRange } = useSelector((state) => state.setting);
    const [expand, setExpand] = useState(false);
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");
    let max = 0;
    //datas.forEach((c) => (max = Math.max(c.change, max)));
    const _datas = datas
        .map((data) => {
            max = Math.max(data.change, max);
            return data;
        })
        .filter((c) => showForums[c.forum] && (c.id == userSearch || c.title.toLowerCase().includes(userSearch)));

    return (
        <>
            <Flex direction="column">
                <Row justify="space-between" className="m-3">
                    <Col>
                        <Text fontSize="lg" color={textColor} fontWeight="bold">
                            Changes in {dateRange * 24} hours, Total {_datas.length}
                        </Text>
                    </Col>
                    <Col>
                        <input className="form-control w-100" type="text" placeholder={userSearch || "Search"} onChange={(e) => setUserSearch(e.target.value)} />
                    </Col>
                    <Col align="right" >
                        <Button
                            variant="primary"
                            maxH="30px"
                            onClick={() => {
                                setUserSearch("");
                            }}
                        >
                            CLEAR
                        </Button>
                        <Button variant="primary" maxH="30px" onClick={reset}>
                            RESET CHART
                        </Button>{" "}
                    </Col>
                </Row>
                <Flex align="center" justify="d-flex justify-content-center">
                    <Pagination_ currentPage={currentPage} total={Math.ceil(_datas.length / PER_PAGE)} handlePageChange={setCurrent} />
                </Flex>
            </Flex>

            <Box overflow={{ sm: "scroll", lg: "scroll" }} style={{ overflowX: "hidden" }}>
                <Table>
                    <Thead style={{ position: "sticky", top: 0 }}>
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
                            <Th color="gray.400" borderColor={borderColor}>
                                Change
                            </Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {_datas.slice((currentPage - 1) * PER_PAGE, (currentPage - 1) * PER_PAGE + PER_PAGE).map((el, index, arr) => (
                            <Tr key={el.id}>
                                <Td color={textTableColor} fontSize="sm" fontWeight="bold" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                                    <Button variant="primary" size="xs" onClick={() => handleThreadFetch(el.id)}>
                                        CHART
                                    </Button>{" "}
                                    <a href={`https://www.reddit.com/r/${el.forum}/comments/${el.id}`} target="_blank">
                                        {el.title}
                                    </a>
                                </Td>
                                <Td color={textTableColor} fontSize="sm" fontWeight="bold" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                                    {el.forum}
                                </Td>
                                <Td color={textTableColor} fontSize="sm" fontWeight="bold" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                                    {el.MAX}
                                </Td>
                                <Td color={textTableColor} fontSize="sm" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                                    <Flex align="center">
                                        +<Text color={textTableColor} fontWeight="bold" fontSize="sm" me="12px">{`${el.change}%`}</Text>
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
