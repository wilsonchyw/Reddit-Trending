import { Button, Text,useColorMode } from "@chakra-ui/react";

export default function Toggle({ title, content, callback }) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div className="my-2">
            <div className="d-flex justify-content-between">
                <Text fontSize="md" fontWeight="600" mb="4px">
                    {title}
                </Text>
                <Button onClick={callback} color={colorMode === "light" ? "Dark" : "Light"}>
                    {content}
                </Button>
            </div>
        </div>
    );
}
