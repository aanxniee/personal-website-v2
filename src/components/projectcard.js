import {
    Box,
    Image,
    Text,
    VStack,
    Link,
    HStack,
    Flex,
    Highlight,
} from "@chakra-ui/react";

export default function ProjectCard({
    heading,
    techs,
    date,
    paragraph,
    imgUrl,
    projectLink,
}) {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            maxW="900px"
            width="100%"
            height={{ base: "auto", md: "250px" }}
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.03)" }}
        >
            <Flex
                direction={{ base: "column", md: "row" }}
                align="flex-start"
                justify="space-between"
                height="100%"
            >
                <Image
                    src={imgUrl}
                    alt={heading}
                    width={{ base: "100%", md: "250px" }}
                    height={{ base: "auto", md: "100%" }}
                    objectFit="cover"
                    borderRadius="lg"
                    flexShrink={0}
                />
                <VStack
                    align="flex-start"
                    spacing={2}
                    p={{ base: 4, md: 6 }}
                    flex="1"
                    justifyContent="center"
                    height="auto"
                >
                    <HStack width="100%" spacing={2} alignItems="center">
                        <Link href={projectLink} isExternal>
                            <Image src="/images/github.png" alt="GitHub" boxSize="24px" />
                        </Link>
                        <Text fontSize="xl" fontWeight="bold" textAlign="left">
                            {heading}
                        </Text>
                    </HStack>
                    <Text
                        fontSize="sm"
                        fontStyle="italic"
                        color="gray.500"
                        textAlign="left"
                    >
                        {date}
                    </Text>
                    <HStack spacing={2} wrap="wrap" justifyContent="flex-start">
                        <Highlight
                            query={techs.split(" ")}
                            styles={{
                                px: "1",
                                py: "1",
                                bg: "#A2C6EA",
                                rounded: "full",
                                lineHeight: "0.5",
                            }}
                        >
                            {techs}
                        </Highlight>
                    </HStack>
                    <Text pt={2} fontSize="sm" noOfLines={3} textAlign="left">
                        {paragraph}
                    </Text>
                </VStack>
            </Flex>
        </Box>
    );
}
