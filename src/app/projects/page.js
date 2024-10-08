/* eslint-disable react/no-unescaped-entities */
// src/app/projects/page.js
import { Box, Text, Link, VStack, HStack, Container } from "@chakra-ui/react";
import NextLink from "next/link";
import Card from "../../components/projectcard";
import data from "../../projectdata";

export default function Projects() {
    return (
        <Container maxW="900px" p={8}>
            <VStack spacing={8} align="start" width="100%">
                <HStack spacing={4}>
                    <Link as={NextLink} href="/" className="link">
                        <Text as="i"> home</Text>
                    </Link>
                </HStack>
                <Box>
                    <Text fontSize="lg">some cool stuff I've done</Text>
                </Box>
                <VStack spacing={8} width="100%">
                    {data.projects.map((project, index) => (
                        <Card
                            key={index}
                            heading={project.title}
                            techs={project.techs}
                            paragraph={project.para}
                            imgUrl={project.imageSrc}
                            projectLink={project.url}
                        />
                    ))}
                </VStack>
            </VStack>
        </Container>
    );
}
