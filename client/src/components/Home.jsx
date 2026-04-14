import { Container, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        mt={10}
        sx={{
          textAlign: "center",
          boxShadow: 3,
          p: 4,
          borderRadius: 2
        }}
      >
        <Typography variant="h4">Welcome 👋</Typography>

        <Button onClick={() => navigate("/login")}>
          Login
        </Button>

        <Button onClick={() => navigate("/signup")}>
          Signup
        </Button>
      </Box>
    </Container>
  );
}