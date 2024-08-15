import { Box, Flex, Text, Link, Image, VStack, HStack, Container, Highlight, ListItem, List } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Container maxW="container.xl" p={10} width={{ base: "100%", md: "85%" }} >
      <Flex
        direction="column"
        height="100%"
        justify="center"
        alignItems="center"
        className="home"
      >
        <HStack spacing={8} justify={{ base: 'center', md: 'flex-end' }} width="100%" pb={{ base: 10, md: 10 }}>
          <Link as={NextLink} href="/images/resume.pdf" passHref>
            <Text as="a">resume</Text>
          </Link>
          <Link as={NextLink} href="/projects" passHref>
            <Text as="a">projects</Text>
          </Link>
        </HStack>

        <Flex direction={{ base: 'column', md: 'row' }} p={{ base: 4, md: 10 }}>

          {/* Left Side - Text Section */}
          <VStack spacing={4} align="flex-start" flex="1" maxW="650px">
            <Text fontStyle="italic" fontSize={{ base: '4xl', md: '8xl' }} textAlign="left">
              Hey, I'm Annie
            </Text>

            <Text fontStyle="italic" fontSize={{ base: 'xl', md: '2xl' }} textAlign="left">
              I'm studying
              <Highlight
                query={["Systems Design Engineering", "University of Waterloo"]}
                styles={{ px: '2', py: '0', bg: '#A2C6EA', rounded: 'full', lineHeight: '0.5' }}
              >
                Systems Design Engineering at the University of Waterloo
              </Highlight>
            </Text>

            <VStack width="100%" pt={5} spacing={2} align="flex-start">
              <Text>currently, I'm...</Text>
              <List spacing={1} pl={4} styleType="disc">
                <ListItem>
                  seeking Winter 2025 internships!
                  <Link href="mailto:ajcai@uwaterloo.ca" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      Get in touch!
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  leading a team to develop a volunteer platform for the Humane Society with
                  <Link href="https://www.uwblueprint.org" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      UW Blueprint
                    </Text>
                  </Link>
                </ListItem>
              </List>

              <Text pt={5}>in the past, I...</Text>
              <List spacing={1} pl={4} styleType="disc">
                <ListItem>
                  architected backend services and LLM pipelines for an AI chatbot at
                  <Link href="https://www.newfront.com" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      Newfront
                    </Text>
                  </Link> in San Francisco
                </ListItem>
                <ListItem>
                  developed internal cybersecurity tools for
                  <Link href="https://www.rbc.com/cyber-security/" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      Royal Bank of Canada
                    </Text>
                  </Link> in Downtown Toronto
                </ListItem>
                <ListItem>
                  worked with
                  <Link href="https://uwaterloo.ca/women-in-engineering/" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      UW Women in Engineering
                    </Text>
                  </Link> and <Link href="https://www.techplusuw.com/" isExternal textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Text as="span" mx={1} fontWeight="bold" borderBottom="2px solid #76A2CE" color="#76A2CE">
                      UW Tech+
                    </Text>
                  </Link>, making tech more inclusive and diverse
                </ListItem>
              </List>

              <Text pt={5}>in other times, I'm...</Text>
              <List spacing={1} pl={4} styleType="disc">
                <ListItem>exploring the west coast, enjoying the warmer weather that California has to offer</ListItem>
                <ListItem>trying to find the best matcha and pastries in the city (any recs for SF?)</ListItem>
              </List>
            </VStack>
          </VStack>

          {/* Right Side - Image Stack */}
          <VStack spacing={{ base: 4, md: 4 }} justify="center" ml={{ md: 10 }} mt={{ base: 8, md: 12 }} width={{ base: "100%", md: "auto" }}>
            <Image
              borderRadius="full"
              src="/images/bay_bridge.jpg"
              alt="Bay Bridge"
              boxSize={{ base: '60px', md: '60px' }}
              objectFit="cover"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              borderRadius="full"
              src="/images/coit.jpg"
              alt="San Francisco"
              boxSize={{ base: '80px', md: '100px' }}
              objectFit="cover"
              display={{ base: 'none', md: 'block' }}
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              borderRadius="full"
              src="/images/annie.jpg"
              alt="Annie"
              boxSize={{ base: '100px', md: '150px' }}
              objectFit="cover"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              borderRadius="full"
              src="/images/toronto.jpg"
              alt="Toronto"
              boxSize={{ base: '60px', md: '100px' }}
              objectFit="cover"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              borderRadius="full"
              src="/images/ocean_beach.jpg"
              alt="Ocean Beach"
              boxSize={{ base: '60px', md: '60px' }}
              objectFit="cover"
              display={{ base: 'none', md: 'block' }}
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
          </VStack>
        </Flex>

        {/* Footer Section */}
        <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center" width="100%" pt={8}>
          <HStack spacing={4} mb={{ base: 4, md: 0 }}>
            <Link href="https://github.com/aanxniee" isExternal>
              <Image src="/images/github.png" alt="GitHub" boxSize="24px" />
            </Link>
            <Link href="https://www.linkedin.com/in/anniecai2004" isExternal>
              <Image src="/images/linkedin.png" alt="LinkedIn" boxSize="24px" />
            </Link>
            <Link href="mailto:ajcai@uwaterloo.ca" isExternal>
              <Image src="/images/mail.png" alt="Mail" boxSize="24px" />
            </Link>
          </HStack>
          <Text>© Annie Cai, 2024</Text>
        </Flex>
      </Flex>
    </Container >
  );
}
