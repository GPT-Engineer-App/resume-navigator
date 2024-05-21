import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md" color="white">
          ATS
        </Heading>
        <Spacer />
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
            Resume Builder
          </Link>
          <Link as={RouterLink} to="/job-listings" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
            Job Listings
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
