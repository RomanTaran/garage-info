import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as yup from "yup";
import {Formik, Field, Form} from "formik";
import FormTextField from "../FormTextField";
import {useSetRecoilState} from "recoil";
import AuthService from "../../services/AuthService";
import {IFormData} from '../../types/IFormData'
import {authStateAtom, userStateAtom} from "../../state";
import {useNavigate} from "react-router-dom";
import Spinner from "../Spinner";
import {AxiosError} from 'axios';
import {toast} from "react-hot-toast";
import ForgotPassword from "../ForgotPassword";
import errorHandling from "../../helpers/errorHandling";
import {useMutation} from "react-query";
import $api from "../../api";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const validationSchema = yup.object().shape({
  email: yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
});

export default function SignIn() {
  const [isLoading, setLoading] = useState(false);
  const setAuth = useSetRecoilState(authStateAtom);
  const setUser = useSetRecoilState(userStateAtom);
  const navigate = useNavigate();
  const mutation = useMutation((value:IFormData) => {
    return $api.post('auth/login', value)
  }, {
    onSuccess: () => {
      console.log('OK');
    },
  });

  const handleSubmit = async (values: IFormData, reset: () => void) => {
    try {
      setLoading(true);
//      const response = await AuthService.login(values.email, values.password);
      mutation.mutate({email: values.email, password: values.password})
//      await localStorage.setItem('token', response.data.accessToken);
      setAuth(true);
//      setUser(response.data.user);
      toast.success("You successfully logged!")
      navigate('/')
      reset();
    } catch (err) {
      errorHandling(err as AxiosError | Error)
    } finally {
      setLoading(false);
    }
  }

  if (isLoading) return <Spinner />
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{m: 1, bgcolor: 'secondary.dark'}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(
            values: IFormData,
            {resetForm}
          ) => handleSubmit(values, resetForm)}
        >
          <Form noValidate autoComplete="off">
            <Field
              name="email"
              label="Email"
              margin="normal"
              component={FormTextField}
            />
            <Field
              name="password"
              label="Password"
              margin="normal"
              type="password"
              component={FormTextField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <ForgotPassword />
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
      <Copyright sx={{mt: 8, mb: 4}} />
    </Container>
  );
}
