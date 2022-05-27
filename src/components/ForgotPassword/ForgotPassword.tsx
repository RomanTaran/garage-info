import {Field, Form, Formik} from "formik";
import FormTextField from "../FormTextField";
import Button from "@mui/material/Button";
import React from "react";
import AuthService from "../../services/AuthService";
import {toast} from "react-hot-toast";
import {AxiosError} from "axios";
import * as yup from "yup";
import {IRecoverEmail} from "../../types/IRecoverEmail";
import {Dialog, DialogContent, DialogContentText} from "@mui/material";
import errorHandling from "../../helpers/errorHandling";
import {useOpenCloseDialog} from "../../hooks/useOpenCloseDialog";

const validationSchema = yup.object().shape({
  email: yup.string()
    .required('Email is required')
    .email('Email is invalid')
});

const ForgotPassword = () => {
  const {open, handleClickOpen, handleClose} = useOpenCloseDialog();

  const handleSubmit = async (values: IRecoverEmail, reset: () => void) => {
    try {
      await AuthService.forgotPassword(values.email);
      toast.success("Check your email for further actions!");
      reset();
    } catch (err) {
      errorHandling(err as AxiosError | Error)
    }
    finally {
      handleClose();
    }
  }

  return (
    <>
      <Button onClick={handleClickOpen}>
        Forgot password?
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            To recover your password enter your email
          </DialogContentText>
          <Formik
            initialValues={{
              email: ""
            }}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(
              values: IRecoverEmail,
              {resetForm}
            ) => handleSubmit(values, resetForm)}
          >
            <Form noValidate autoComplete="off">
              <Field
                name="email"
                label="Email"
                margin="normal"
                variant="standard"
                component={FormTextField}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
              >
                Send Email
              </Button>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ForgotPassword;
