import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { chatDetails } from "../services/Api";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await chatDetails(prompt);
    setResponse(res?.data?.msg);
    // console.log("res", res);
    // console.log("res", response);
  };
  return (
    <Box
      sx={{
        width: 1050,
        maxWidth: "100%",
        marginTop: 15,
        marginLeft: 30,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "530",
          marginBottom: 3,
          color: "purple",
        }}
      >
        Search Flight details here :-
      </Typography>
      <TextField
        onChange={(e) => setPrompt(e.target.value)}
        fullWidth
        value={prompt}
        label="Serach "
        id="fullWidth"
      />
      <Box>
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          color="success"
          sx={{ marginTop: 5 }}
        >
          Send
        </Button>
      </Box>
      <Box sx={{ marginTop: 5 }}>
        {response ? (
          <Typography sx={{ fontSize: "1.2rem", textAlign: "center" }}>
            {response}
          </Typography>
        ) : (
          <Typography sx={{ marginLeft: 3, fontWeight: 100 }}>
            Please Wait After Clicking Send Button......
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Chat;
