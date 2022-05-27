import {useNavigate, useSearchParams} from "react-router-dom";
import {Box, Button, Container, CssBaseline, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import AuthService from "../../services/AuthService";
import {toast} from "react-hot-toast";
import {AxiosError} from "axios";
import {useState} from "react";
import {IRecoverPassword} from "../../types/IRecoverPassword";
import FormTextField from "../FormTextField";
import Spinner from "../Spinner";
import errorHandling from "../../helpers/errorHandling";

const validationSchema = yup.object().shape({
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
});

const RecoverPassword = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const handleSubmit = async (values: IRecoverPassword, reset: () => void) => {
    try {
      setLoading(true);
      await AuthService.resetPassword(values.password, token);
      toast.success("You successfully changed password!")
      navigate('/login')
      reset();
    } catch (err) {
      errorHandling(err as AxiosError | Error);
    } finally {
      setLoading(false);
    }
  }

  if (isLoading) return <Spinner />
  return (<Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h6">
        Type new password
      </Typography>
      <Formik
        initialValues={{
          password: ""
        }}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(
          values: IRecoverPassword,
          {resetForm}
        ) => handleSubmit(values, resetForm)}
      >
        <Form noValidate autoComplete="off">
          <Field
            name="password"
            label="Password"
            type="password"
            margin="normal"
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
    </Box>
  </Container>)
}

export default RecoverPassword;
