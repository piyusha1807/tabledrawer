import React from "react";
import { Modal, Box, TextField, Button, Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserModal = (props: any) => {
  const { open, handleClose } = props;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sessionStorage.setItem("username", e.target[0].value);
    handleClose();
  };

  return (
    <>
      <Modal open={open}>
        <Box
          component="form"
          sx={style}
          noValidate
          autoComplete="off"
          onSubmit={(e: any) => handleSubmit(e)}
        >
          <Stack direction="row" spacing={2}>
            <TextField label="Enter username" />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default UserModal;
