import { Flex, Image, Button, Text, Heading } from "@chakra-ui/react";

const Content = () => {
  return (
    <Flex
      align="center"
      justify="center"
      bgColor="neutral.white"
      w="100vw"
      h="100vh"
      fontFamily="Montserrat"
      fontWeight="500"
      fontSize="14px"
    >
      <Flex
        align="center"
        justify="center"
        boxShadow="2xl"
        bgColor="primary.cream"
        w={{desktop: "1150px", mobile: '100vw'}}
        h={{desktop: "500px", mobile: '100vh'}}
      >
        <Flex align="center" justify="center" borderRadius='15px' w={{desktop: "500px", mobile: '90%'}} h={{desktop: "375px", mobile:'90%' }} bgColor="neutral.white" direction={{desktop:'row', mobile: 'column'}} >
          <Flex h='100%' w='100%' >
            <Image w='100%' src="image-product-desktop.jpg" alt="product" borderLeftRadius='15px' display={{mobile: 'none', desktop: 'block'}} />
            <Image w='100%' src="image-product-mobile.jpg" alt="product" borderTopRadius='15px' display={{mobile: 'block', desktop: 'none'}} />
          </Flex>
          <Flex h='100%' w='100%'
            p="20px"
            align="start"
            justify="center"
            direction="column"
            gap="15px"
            
          >
            <Flex letterSpacing="2px" fontSize="xs">
              PERFUME
            </Flex>
            <Heading lineHeight={1} as="h3" size="lg" fontFamily="Fraunces">
              Gabrielle Essence Eau De Parfum
            </Heading>
            <Flex fontSize="xs">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </Flex>
            <Flex align="center" justify="space-between" w="100%" gap="10px">
              <Heading
                as="h2"
                size="lg"
                fontFamily="Fraunces"
                color="primary.darkCyan"
              >
                $149.99
              </Heading>
              <Flex align="center" justify="start" w="100%">
                <Text as="del">$169.99</Text>
              </Flex>
            </Flex>
            <Flex w="100%">
              <Button bgColor="primary.darkCyan" w="100%" _hover={{
                bg: 'neutral.veryDarkBlue'
            }}>
                <Flex gap="15px" color="neutral.white">
                  <Image src="icon-cart.svg" alt="icon-cart" />
                  Add to Cart
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Content;
