import React from "react";
import { Container, VStack, Heading, Box, Text } from "@chakra-ui/react";

const JobListings = () => {
  const jobs = [
    { title: "Software Engineer", company: "Tech Corp", location: "New York, NY", description: "Develop and maintain web applications." },
    { title: "Product Manager", company: "Business Inc", location: "San Francisco, CA", description: "Oversee product development and strategy." },
  ];

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading>Job Listings</Heading>
        {jobs.map((job, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" w="100%">
            <Heading size="md">{job.title}</Heading>
            <Text>{job.company}</Text>
            <Text>{job.location}</Text>
            <Text>{job.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default JobListings;
