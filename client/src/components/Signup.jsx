import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, data);

      setMsg("Signup successful ✅");

      // store token
     localStorage.setItem("token", res.data.token);
localStorage.setItem("role", res.data.role);

      // redirect based on role
     setMsg("Signup successful ✅");
navigate("/login");

    } catch (err) {
      setMsg("Signup failed ❌");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} p={3} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5">Signup</Typography>

        {msg && <Alert sx={{ mt: 2 }}>{msg}</Alert>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email")}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register("password")}
          />

          <TextField
            select
            label="Role"
            fullWidth
            margin="normal"
            defaultValue="user"
            {...register("role")}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
}