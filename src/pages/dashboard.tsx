import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
        <Header/>

        <Flex
        w="100%"
        my="40"
        maxWidth={1480} 
        mx="auto"
        px="4"
        >
            

            <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            align="flex-start"
            >
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>

                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>

                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>
                <Box
                p="14"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                    <Text fontSize="lg" mb="4">Frigobar</Text>

                </Box>

            </SimpleGrid>

        </Flex>
        </Flex>
    )
}