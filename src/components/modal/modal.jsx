import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import facebook from "./assets/facebook.png";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 3 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            maxWidth: 750,
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const ModalNav = ({ modalActive, handleCloseModal }) => {
  return (
    <>
      {" "}
      <BootstrapDialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={modalActive}
      >
        <DialogContent>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleCloseModal}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Train like <span className="under">...</span>
          </BootstrapDialogTitle>
          <Typography gutterBottom>
            <div
              style={{
                width: 400,
              }}
              className="moddiv"
            >
              <img src={facebook} />
            </div>
          </Typography>
          <Typography gutterBottom>
            <div>
              <img src={facebook} />
            </div>
          </Typography>
          <Typography gutterBottom>
            <div>
              <img src={facebook} />
            </div>
          </Typography>
          <div sx={{ display: "flex", justifyContent: "center" }}>or</div>

          <form action="http://localhost:8080/signup" method="POST">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Username"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
            <button type="submit">Submit</button>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};
