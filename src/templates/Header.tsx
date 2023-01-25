import { FilterBar } from "../components/Nav/FilterBar";
import { NavBar } from "../components/Nav/NavBar";
import Container from "@mui/material/Container";

export const Header = () => {
  return (
    <Container>
      <NavBar />
      <FilterBar />
    </Container>
  );
};
