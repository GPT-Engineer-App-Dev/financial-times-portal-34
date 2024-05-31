import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box as="header" bg="rgb(243, 242, 239)" color="black" py={4} px={6}>
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
      </Box>

      {/* Navigation Bar */}
      <Flex as="nav" bg="rgb(243, 242, 239)" color="black" p={2} justifyContent="center">
        <Link href="#" p={2} _hover={{ textDecoration: "none", bg: "gray.600" }}>
          Home
        </Link>
        <Link href="#" p={2} _hover={{ textDecoration: "none", bg: "gray.600" }}>
          News
        </Link>
        <Link href="#" p={2} _hover={{ textDecoration: "none", bg: "gray.600" }}>
          Markets
        </Link>
        <Link href="#" p={2} _hover={{ textDecoration: "none", bg: "gray.600" }}>
          Opinion
        </Link>
        <Link href="#" p={2} _hover={{ textDecoration: "none", bg: "gray.600" }}>
          More
        </Link>
      </Flex>

      {/* Main Content */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={5}>
        <Box>
          <Heading as="h2" size="md" mb={4}>
            Featured Article
          </Heading>
          <Text>
            This is the featured article. It could include a summary and a link to the full article.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="md" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={2} align="stretch">
            <Link href="#">Additional Link 1</Link>
            <Link href="#">Additional Link 2</Link>
            <Link href="#">Additional Link 3</Link>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="rgb(243, 242, 239)" color="black" py={4} px={6} mt={10}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
          <Flex gap={3}>
            <Icon as={FaFacebook} boxSize={6} />
            <Icon as={FaTwitter} boxSize={6} />
            <Icon as={FaLinkedin} boxSize={6} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;