/* eslint-disable react/no-unescaped-entities */
import {
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Box,
  Container,
  Highlight,
  ListItem,
  List,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

function CirclePhoto({ src, alt, boxSize, display }) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="full"
      boxSize={boxSize}
      display={display}
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.1)" }}
      willChange="transform"
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 48em) 100px, 150px"
        style={{ objectFit: "cover" }}
        quality={75}
      />
    </Box>
  );
}

export default function Home() {
  return (
    <Container maxW="container.xl" p={10} width={{ base: "100%", md: "85%" }}>
      <Flex
        direction="column"
        height="100%"
        justify="center"
        alignItems="center"
        className="home"
      >
        <HStack
          spacing={8}
          justify={{ base: "center", md: "flex-end" }}
          width="100%"
          pb={{ base: 10, md: 10 }}
        >
          <Link as={NextLink} href="/images/resume.pdf" passHref>
            <Text as="a">resume</Text>
          </Link>
          <Link as={NextLink} href="/projects" passHref>
            <Text as="a">projects</Text>
          </Link>
        </HStack>

        <Flex direction={{ base: "column", md: "row" }} p={{ base: 4, md: 10 }}>
          {/* Left Side - Text Section */}
          <VStack spacing={4} align="flex-start" flex="1" maxW="650px">
            <Text
              fontStyle="italic"
              fontSize={{ base: "4xl", md: "8xl" }}
              textAlign="left"
            >
              Hey, I'm Annie
            </Text>

            <Text
              fontStyle="italic"
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="left"
            >
              I'm studying
              <Highlight
                query={["Systems Design Engineering", "University of Waterloo"]}
                styles={{
                  px: "2",
                  py: "0",
                  bg: "#A2C6EA",
                  rounded: "full",
                  lineHeight: "0.5",
                }}
              >
                Systems Design Engineering at the University of Waterloo
              </Highlight>
            </Text>

            <VStack width="100%" pt={5} spacing={2} align="flex-start">
              <Text>currently, I'm...</Text>
              <List spacing={1} pl={4} styleType="disc">
                <ListItem>
                  interning at
                  <Link
                    href="https://stripe.com/"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      Stripe
                    </Text>
                    in NYC, working on ML models and evaluation services to predict payment network costs
                  </Link>
                </ListItem>
                <ListItem>
                  researching synchronization techniques and locks at UWaterloo, under Prof. Golab
                </ListItem>
                <ListItem>
                  seeking 2027 new grad opportunities!
                  <Link
                    href="mailto:ajcai@uwaterloo.ca"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      Get in touch!
                    </Text>
                  </Link>
                </ListItem>
              </List>

              <Text pt={5}>in the past, I...</Text>
              
              <List spacing={1} pl={4} styleType="disc">
                 <ListItem>
                  spent an unforgettable 4 months studying abroad at NUS School of Computing in Singapore
                </ListItem>
                <ListItem>
                  built a load testing framework for Envoy auto-scaling and load balancing at
                  <Link
                    href="https://www.snowflake.com/en/"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      Snowflake
                    </Text>
                    
                  </Link>
                </ListItem>
                <ListItem>
                  architected distributed caching and streaming observability pipelines at
                  <Link
                    href="https://www.datadoghq.com"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      Datadog
                    </Text>
                    in NYC
                  </Link>
                </ListItem>
                <ListItem>
                  led a team of 9 to build a pet care platform for the non-profit, Humane Society, with
                  <Link
                    href="https://www.uwblueprint.org"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      UW Blueprint
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  worked with
                  <Link
                    href="https://uwaterloo.ca/women-in-engineering/"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      UW Women in Engineering
                    </Text>
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.techplusuw.com/"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      UW Tech+
                    </Text>
                  </Link>
                  to make tech more inclusive and diverse
                </ListItem>
              </List>

              <Text pt={5}>in other times, I'm...</Text>
              <List spacing={1} pl={4} styleType="disc">
                <ListItem>
                  eating because Beli grind never stops
                </ListItem>
                <ListItem>
                  finding comfort and challenge in words as I pick up reading again, any recs?
                </ListItem>
                <ListItem>
                  running through Central Park or West Side Highway
                </ListItem>

              </List>
            </VStack>
          </VStack>

          {/* Right Side - Image Stack */}
          <VStack
            spacing={{ base: 4, md: 4 }}
            justify="center"
            ml={{ md: 10 }}
            mt={{ base: 8, md: 12 }}
            width={{ base: "100%", md: "auto" }}
          >
            <CirclePhoto
              src="/images/fuji.jpg"
              alt="Mount Fuji"
              boxSize={{ base: "60px", md: "60px" }}
            />
            <CirclePhoto
              src="/images/sd.jpg"
              alt="San Diego"
              boxSize={{ base: "80px", md: "100px" }}
              display={{ base: "none", md: "block" }}
            />
            <CirclePhoto
              src="/images/shibuya.png"
              alt="Annie in Shibuya"
              boxSize={{ base: "100px", md: "150px" }}
            />
            <CirclePhoto
              src="/images/nyc.png"
              alt="New York"
              boxSize={{ base: "60px", md: "100px" }}
            />
            <CirclePhoto
              src="/images/mbs.jpg"
              alt="Singapore"
              boxSize={{ base: "60px", md: "60px" }}
              display={{ base: "none", md: "block" }}
            />
          </VStack>
        </Flex>

        {/* Footer Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          pt={8}
        >
          <HStack spacing={4} mb={{ base: 4, md: 0 }}>
            <Link href="https://github.com/aanxniee" isExternal>
              <NextImage src="/images/github.png" alt="GitHub" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/anniecai2004" isExternal>
              <NextImage src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="mailto:ajcai@uwaterloo.ca" isExternal>
              <NextImage src="/images/mail.png" alt="Mail" width={24} height={24} />
            </Link>
          </HStack>
          <Text>© Annie Cai, 2026</Text>
        </Flex>
      </Flex>
    </Container>
  );
}
