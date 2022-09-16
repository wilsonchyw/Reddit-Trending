// Chakra imports
import { Box, Flex, Text } from "@chakra-ui/react";
import Loading from "components/Loading";
import Chart from "react-apexcharts";
export default function Forums({ data, title, subTitle, textColor }) {
    const option = {
        chart: {
            type: "bar",
            height: 350,
            foreColor:textColor
        },
        toolbar: { show: false },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {},
    };
    option.xaxis.categories = data.labels; //<BarChart chartData={[{ data: [15022, 13663, 10992, 5462, 5371, 1622, 668, 61] }]} chartOptions={barChartOptions} />
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
            {data.data.length ? (
                <Box minH="300px" minW="100%" className="m-0 p-0">
                    <Chart
                        options={option}
                        series={[
                            {
                                data: data.data,
                            },
                        ]}
                        type="bar"
                        width="100%"
                        height="100%"
                    />
                </Box>
            ) : (
                <Loading />
            )}
        </>
    );
}
