// Chakra imports

import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Loading from "components/Loading";
import Chart from "react-apexcharts";
import { useDispatch } from "react-redux";
import { setSearch } from "store/settingSlice";
import { lineChartOptions } from "variables/charts";

export default function ThreadTrendChart({ data, target}) {
    const textColor = useColorModeValue("gray.200", "white");
    const dispatch = useDispatch();
    lineChartOptions.chart.events = {
        click(event, chartContext, config) {
            dispatch(setSearch(config.config.series[config.seriesIndex].id));
        },
    };


    return (
        <>
            <Flex direction="column" p="28px 0px 0px 22px">
                <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
                    Tread
                </Text>
                <Text color={textColor} fontSize="lg" fontWeight="bold">
                    {target}
                </Text>
            </Flex>

            {data.length ? (
                <Box minH="450px" minW="100%" className="m-0 p-0 ">
                    <Chart options={lineChartOptions} series={data} type="line" width="100%" height="100%" />
                </Box>
            ) : (
                <Box minH="450px" minW="100%" className="m-0 p-0 d-flex justify-content-center">
                    <Loading isWhite={true} style={{ minHeight: "450px", minWidth: "100%" }} />
                </Box>
            )}
        </>
    );
}
