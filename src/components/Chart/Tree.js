// Chakra imports
import { Box, Flex, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import Loading from "components/Loading";
export default function Tree({ data, title, subTitle, textColor, setSearchTarget }) {
    const options = {
        legend: {
            // "#63b3ed", "#4299e1", "#3182ce", "#2b6cb0", "#2c5282", "#2a4365", "#1A365D","#728fea", "#3652ba", "#1b3bbb", "#24388a", "#1b254b", "#111c44", "#0b1437"
            show: false,
        },
        chart: {
            height: 350,
            type: "treemap",
            toolbar: { show: false },
            events: {
                click(event, chartContext, config) {
                    const label = config.config.series[config.seriesIndex].data[config.dataPointIndex].x;
                    setSearchTarget(label.toLowerCase());
                    //console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
                },
            },
            
        },
        plotOptions: {
            treemap: {
                shadeIntensity: 0.5,
                radius: 10,
                useFillColorAsStroke: true,
            },
        },
    };
    //console.log({data})
    return (
        <>
            <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
                <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
                    {subTitle}
                </Text>
                <Text color={textColor} fontSize="lg" fontWeight="bold">
                    {title}
                </Text>
            </Flex>

            {data ? (
                <Box minH="300px">
                    {" "}
                    <Chart options={options} series={[{ data: data }]} type="treemap" width="100%" height="100%" />{" "}
                </Box>
            ) : (
                <Loading />
            )}
        </>
    );
}
