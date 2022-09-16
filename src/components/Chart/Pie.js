// Chakra imports
import { Box, Flex, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import Loading from "components/Loading";
export default function Pie({ data, title, subTitle, textColor, header }) {
    const pieChartOptions = {
        chart: {
            width: 350,
            type: "donut",
            foreColor:textColor,
            
        },
        labels: data.labels,
        legend: {
            position: "bottom",
        },
        stroke: {
            show: false,
        }
    };
    return (
        <>
            {header ? (
                header
            ) : (
                <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
                    <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
                        {subTitle}
                    </Text>
                    <Text color={textColor} fontSize="lg" fontWeight="bold">
                        {title}
                    </Text>
                </Flex>
            )}
            {data.data.length ? (
                <Box minH="300px">
                    {" "}
                    <Chart options={pieChartOptions} series={data.data} type="donut" width="100%" height="100%" />{" "}
                </Box>
            ) : (
                <Loading />
            )}
        </>
    );
}
