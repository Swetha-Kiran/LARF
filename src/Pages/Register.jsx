import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import UnderConstruction from '../Components/UnderConstruction';
import NavBar from '../Components/HomePageComponents/NavBar';
import Glogo from '../Assets/gpay.png';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    birthMonth: '',
    birthYear: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [errorMsg, setErrorMsg] = useState({
    birthDateMsg: '',
    birthMonthMsg: '',
    birthYearMsg: '',
    emailMsg: '',
    passwordMsg: '',
    confirmPasswordMsg: '',
  });

  const [validation, setValidation] = useState({
    checkBirthDate: false,
    checkBirthMonth: false,
    checkBirthYear: false,
    checkEmail: false,
    checkPassword: false,
    checkConfirmPassword: false,
  });
  const handleDateValidation = () => {
    if (
      formData.birthDate !== '' &&
      (parseInt(formData.birthDate, 10) > 31 ||
        parseInt(formData.birthDate, 10) < 1)
    ) {
      setValidation({ ...validation, checkBirthDate: true });
      setErrorMsg({ ...errorMsg, birthDateMsg: 'Invalid Date!' });
    } else {
      setValidation({ ...validation, checkBirthDate: false });
      setErrorMsg({ ...errorMsg, birthDateMsg: '' });
    }
  };
  const handleMonthValidation = () => {
    if (
      formData.birthMonth !== '' &&
      (parseInt(formData.birthMonth) > 12 || parseInt(formData.birthMonth) < 1)
    ) {
      setValidation({ ...validation, checkBirthMonth: true });
      setErrorMsg({ ...errorMsg, birthMonthMsg: 'Invalid Month!' });
    } else {
      setValidation({ ...validation, checkBirthMonth: false });
      setErrorMsg({ ...errorMsg, birthMonthMsg: '' });
    }
  };
  const handleYearValidation = () => {
    if (
      formData.birthYear !== '' &&
      (parseInt(formData.birthYear) > 2023 ||
        parseInt(formData.birthYear) < 1900)
    ) {
      setValidation({ ...validation, checkBirthYear: true });
      setErrorMsg({ ...errorMsg, birthYearMsg: 'Invalid Year!' });
    } else {
      setValidation({ ...validation, checkBirthYear: false });
      setErrorMsg({ ...errorMsg, birthYearMsg: '' });
    }
  };
  const handleEmailValidation = () => {
    if (formData.email !== '' && !formData.email.includes('@')) {
      setValidation({ ...validation, checkEmail: true });
      setErrorMsg({ ...errorMsg, emailMsg: 'Invalid Email!' });
    } else {
      setValidation({ ...validation, checkEmail: false });
      setErrorMsg({ ...errorMsg, emailMsg: '' });
    }
  };
  const handlePasswordValidation = () => {
    if (formData.password !== '' && formData.password.length < 8) {
      setValidation({ ...validation, checkPassword: true });
      setErrorMsg({ ...errorMsg, passwordMsg: 'Invalid Password!' });
    } else {
      setValidation({ ...validation, checkPassword: false });
      setErrorMsg({ ...errorMsg, passwordMsg: '' });
    }
  };
  const handleConfirmPasswordValidation = () => {
    if (
      formData.confirmPassword !== '' &&
      formData.password !== formData.confirmPassword
    ) {
      setValidation({ ...validation, checkConfirmPassword: true });
      setErrorMsg({
        ...errorMsg,
        confirmPasswordMsg: 'Password doesnot match!',
      });
    } else {
      setValidation({ ...validation, checkConfirmPassword: false });
      setErrorMsg({ ...errorMsg, confirmPasswordMsg: '' });
    }
  };

  useEffect(() => {
    if (formData.email) {
      handleEmailValidation();
    }
  }, [formData.email]);

  useEffect(() => {
    if (formData.confirmPassword) {
      handleConfirmPasswordValidation();
    }
  }, [formData.confirmPassword]);

  useEffect(() => {
    if (formData.password) {
      handlePasswordValidation();
    }
  }, [formData.password]);

  useEffect(() => {
    if (formData.birthDate) {
      handleDateValidation();
    }
  }, [formData.birthDate]);

  useEffect(() => {
    if (formData.birthMonth) {
      handleMonthValidation();
    }
  }, [formData.birthMonth]);

  useEffect(() => {
    if (formData.birthYear) {
      handleYearValidation();
    }
  }, [formData.birthYear]);

  // useEffect(() => {
  //   console.log(formData, validation, errorMsg);
  // }, [formData]);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const google = () => {
    window.open('https://qaapis.largestagroresearch.org/auth/google', '_self');
  };
  const handleSubmit = async (e) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://qaapis.largestagroresearch.org/user/register',
        formData
      );

      console.log(response);

      if (response.status === 201) {
        const data = response.data;
        console.log('Successfully posted', data);

        if (data.message === 'Registration successful') {
          showSuccessMessage();
        } else {
          showFailedMessage();
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const showSuccessMessage = () => {
    toast.success('Successfully registered!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showFailedMessage = () => {
    toast.error('User already exists or invalid credentials!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_BASE_URL}/auth/google/callback`,
      '_self'
    );
  };
  return (
    <div>
      <NavBar />
      <div className='flex min-h-[90vh] flex-col justify-start px-6 lg:px-8 mt-2 lg:mt-0 overflow-hidden bg-gray-100 w-full'>
        <div className='bg-white h-auto mx-auto py-6 px-10 rounded-xl mt-10 shadow-2xl sm:w-[30rem] w-[100%] flex flex-col items-center'>
          <img src={logo} alt='logo' className='w-[8rem] ' />
          <Button
            onClick={googleAuth}
            color='white'
            className='mt-10 w-full h-[8vh] border-[1px] border-solid border-[#c2c8d0] text-black rounded-md text-left pl-4 hover:bg-[#85b968] flex items-center justify-start gap-6'
          >
            <img src={Glogo} alt='' className='w-10' />
            Continue with Google
          </Button>
          <div className='flex justify-between items-center mt-4 w-full mb-4'>
            <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
            <span className='text-base text-[#9a9a9a]'>OR</span>
            <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
          </div>
          <Typography variant='h3' color='gray'>
            Create Account
          </Typography>
          <div className='mt-6 w-full'>
            <form className='flex flex-col justify-center gap-2'>
              <div className='flex justify-between items-center mt-1 gap-4'>
                <input
                  id='firstName'
                  type='text'
                  placeholder='First name'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className='block w-full h-12 rounded-md border-0 px-4 py-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                />
                <input
                  id='LastName'
                  type='text'
                  placeholder='Last name'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className='block w-full h-12 rounded-md border-0 px-4 py-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                />
              </div>

              <div className='flex items-start justify-between mt-1 gap-2'>
                <div className='flex flex-col w-full'>
                  <input
                    id='date'
                    type='text'
                    placeholder='Birthdate'
                    name='birthDate'
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className='block w-full h-8 rounded-md border-0 px-4 py-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                  />
                  {validation.checkBirthDate && errorMsg.birthDateMsg && (
                    <p className='text-[12px] text-red-400 -mt-1'>
                      {errorMsg.birthDateMsg}
                    </p>
                  )}
                </div>
                <div className='flex flex-col w-full'>
                  <input
                    id='month'
                    type='text'
                    placeholder='Month'
                    name='birthMonth'
                    value={formData.birthMonth}
                    onChange={handleChange}
                    required
                    className='block w-full h-8 rounded-md border-0 px-4 py-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                  />
                  {validation.checkBirthMonth && errorMsg.birthMonthMsg && (
                    <p className='text-[12px] text-red-400 -mt-1'>
                      {errorMsg.birthMonthMsg}
                    </p>
                  )}
                </div>
                <div className='flex flex-col w-full'>
                  <input
                    id='year'
                    type='text'
                    placeholder='Year'
                    name='birthYear'
                    value={formData.birthYear}
                    onChange={handleChange}
                    required
                    className='block w-full h-8 rounded-md border-0 px-4 py-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                  />
                  {validation.checkBirthYear && errorMsg.birthYearMsg && (
                    <p className='text-[12px] text-red-400 -mt-1'>
                      {errorMsg.birthYearMsg}
                    </p>
                  )}
                </div>
              </div>

              <div className='mt-1 flex flex-col items-start'>
                <input
                  id='email'
                  type='text'
                  placeholder='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='block w-full h-12 rounded-md border-0 px-4 py-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                />
                {validation.checkEmail && errorMsg.emailMsg && (
                  <p className='text-[12px] text-red-400 -mt-1'>
                    {errorMsg.emailMsg}
                  </p>
                )}
              </div>
              <div className='mt-1 flex flex-col items-start'>
                <input
                  id='phone'
                  type='number'
                  placeholder='Phone No'
                  name='phone'
                  // value={formData.email}
                  // onChange={handleChange}
                  // required
                  className='block w-full h-12 rounded-md border-0 px-4 py-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                />
                {validation.checkEmail && errorMsg.emailMsg && (
                  <p className='text-[12px] text-red-400 -mt-1'>
                    {errorMsg.emailMsg}
                  </p>
                )}
              </div>

              <div className='mt-1 flex flex-col items-start'>
                <input
                  id='password'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className='block w-full h-12 rounded-md border-0 px-4 py-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                />
                {validation.checkPassword && errorMsg.passwordMsg && (
                  <p className='text-[12px] text-red-400 -mt-1'>
                    {errorMsg.passwordMsg}
                  </p>
                )}
              </div>
              <div className='mt-1 flex flex-col items-start'>
                <input
                  id='cnfpassword'
                  type='password'
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className='block w-full h-12 rounded-md border-0 px-4 py-2 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-green-600 sm:text-md sm:leading-6 outline-none'
                />
                {validation.checkConfirmPassword &&
                  errorMsg.confirmPasswordMsg && (
                    <p className='text-[12px] text-red-400 -mt-1'>
                      {errorMsg.confirmPasswordMsg}
                    </p>
                  )}
              </div>
              <div className='flex justify-between items-center mt-4'>
                <div className='space-x-2 flex items-center'>
                  <input
                    type='checkbox'
                    onChange={handleCheckboxChange}
                    checked={isCheckboxChecked}
                  />

                  <span className=' text-xs text-[#9a9a9a]'>I accept</span>
                  <div className='text-xs font-semibold text-[#66a246] cursor-pointer'>
                    Terms & Conditions
                  </div>
                </div>
              </div>

              <Button
                type='button'
                onClick={handleSubmit}
                className={`mt-4 flex w-full justify-center px-4 py-2 items-center rounded-md bg-[#85b968] text-base h-12 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#66a246] mb-4 ${
                  isCheckboxChecked ? '' : 'opacity-50 pointer-events-none'
                }`}
              >
                Create Account
              </Button>
              <ToastContainer />
              <p className='text-sm text-[#9a9a9a] text-center mb-4'>
                Already have an account?
                <Link to='/login' className='text-[#66a246] underline'>
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
        <p className='mt-4 text-center text-md text-gray-500 mb-8'>
          Terms of use
          <span className='inline-block mx-2 h-4 w-[1px] bg-gray-500 relative top-[4px]'></span>
          Privacy policy
        </p>
      </div>
    </div>
  );
};

export default Register;
