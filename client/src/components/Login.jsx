import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/login", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

  

      if (res.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

    } catch {
      setMsg("Login failed ❌");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} p={3} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5">Login</Typography>

        {msg && <Alert sx={{ mt: 2 }}>{msg}</Alert>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="Email" fullWidth margin="normal" {...register("email")} />
          <TextField label="Password" type="password" fullWidth margin="normal" {...register("password")} />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}