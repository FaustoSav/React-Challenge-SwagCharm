import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import { Footer } from "./templates/Footer";
import { Header } from "./templates/Header";
import Main from "./templates/Main";

function App() {
  return (
    <Container sx={{ width: "100%", marginBottom: "100px", minWidth:'100vw' }}>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
