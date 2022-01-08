import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";

export default function CreateUser() {
    return (
      <Box>
         

          <Flex
          w="100%"
          my="6"
          maxWidth={1480}
          mx="auto"
          px="6"
          >
              

              <Box
              flex="1"
              borderRadius={8}
              bg="gray.500"
              p="8"
              >

                  <Heading
                  size="lg"
                  fontWeight="normal"
                  >

                  </Heading>

                  <Divider
                  my="6"
                  borderColor="gray.700"
                  />

                  <VStack
                  spacing="8"
                  >
                      <SimpleGrid
                      minChildWidth="240px"
                      spacing="8"
                      w="100%"
                      >
                          <Input
                          name="name" 
                          label="Nome Completo"
                          />

                          <Input
                          name="email" 
                          label="Email"
                          type="email"
                          /> 
                           
                      </SimpleGrid>

                      <SimpleGrid
                      minChildWidth="240px"
                      spacing="8"
                      w="100%"
                      >
                          <Input
                          name="password" 
                          type="password"
                          label="Senha"
                          />

                          <Input
                          name="password_confirmation" 
                          label="Confirmação da Senha"
                          type="E-mail"
                          /> 

                      </SimpleGrid>

                  </VStack>
                  
              <Flex
              mt="8"
              justify="flex-end"
              >
                  <HStack
                  spacing="4"
                  >
                      <Button
                      colorScheme="whiteAlpha"
                      >
                          Cancelar

                      </Button>

                      <Button
                      colorScheme="whiteAlpha"
                      >
                          Salvar

                      </Button>
                    
                  </HStack>

              </Flex>
              </Box>
          </Flex>
      </Box>
    );
}