import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";



export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
        <Header/>

        <Flex
        w="100%"
        mt="8"
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
                <Flex></Flex>
                <Box
                display="flex"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                  
                    <Image
                      pt="2"
                      pl="5"
                      
                       boxSize='60px'
                       objectFit='cover'
                       src="https://www.webcontinental.com.br/file/general/best-price-tag.svg"
                       alt="Frigobar"
                    />
                   
                    <Box
                    mt="5"
            
                    
                    >
                    <Image
                    boxSize='140px'
                    objectFit='cover'
                    src="https://www.webcontinental.com.br/ccstore/v1/images/?source=/file/v3484140081265363126/products/bra08bga-frigobar-brastemp-vermelho-marsala-retro-1000.jpg"
                    alt="Frigobar"
                    />

                   <Flex
                    justify="space-between"
                    align="center"
                   >

                       <Flex>
                
                    <Box
                    
                    alignItems="center"
                    justifyContent="center"
                    w="25px"
                    h="15px"
                    mr="5px"
                    borderRadius="2"
                    backgroundColor="rgba(255, 135, 0, 1)"
                    >
                        <Text
                        fontSize="x-small"
                        ml="2px"
                        
                        color="#fff"
                        >
                            -22%
                        </Text>

                        

                    </Box>


                    <Box
                    alignItems="center"
                    justifyContent="center"
                    w="103px"
                    h="15px"
                    borderRadius="2"
                    backgroundColor="rgba(50, 156, 255, 1)"
                    >
                        <Text
                        fontSize="x-small"
                        ml="1"
                        color="#fff"
                        >
                            Frete Grátis Nordeste
                        </Text>

                        

                    </Box>
                    </Flex>

                    </Flex>
                    </Box>
                    
                  

                </Box>

                <Box
                display="flex"
                bg="gray.800"
                borderRadius={8}
                h="190"
                //pb="4"
                >
                  
                    <Image
                      pt="2"
                      pl="1"
                      
                       boxSize='60px'
                       objectFit='cover'
                       src="https://www.webcontinental.com.br/file/general/best-price-tag.svg"
                       alt="Frigobar"
                    />
                   
                    <Box
                    mt="5"
                    
                    >
                    <Image
                    boxSize='140px'
                    objectFit='cover'
                    src="https://www.webcontinental.com.br/ccstore/v1/images/?source=/file/v3484140081265363126/products/bra08bga-frigobar-brastemp-vermelho-marsala-retro-1000.jpg"
                    alt="Frigobar"
                    />
                    </Box>

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