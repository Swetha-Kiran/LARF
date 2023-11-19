import React, { useEffect, useState } from 'react';
import logo from '../Assets/logo.png';
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Select,
  Option,
  IconButton,
} from '@material-tailwind/react';
import { BsCart4 } from 'react-icons/bs';

import { Link, useNavigate } from 'react-router-dom';
import { useContextValue } from '../Context';

const SignupModel = ({ setMembership }) => {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContextValue();
  const [isdiasbled, setisDisabled] = useState(false);
  const [isTermsChecked, setisTermsChecked] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setMembership();
    setOpen((cur) => !cur);
  };
  const handleClick = () => {
    setOpen((cur) => !cur);
    setTimeout(() => {
      navigate('application');
    }, 1000);
  };

  const handleAddressSkip = () => {
    dispatch({
      type: 'SET_ADDRESS',
      address: !state.isaddressChecked,
    });
  };

  const handleTerms = () => {
    setisTermsChecked((prev) => !prev);
  };
  useEffect(() => {
    if (isTermsChecked) {
      setisDisabled(false);
    } else {
      setisDisabled(true);
    }
  }, [isTermsChecked]);

  const handlemembership = (value) => {};

  // useEffect(() => {
  //   if (memberShip !== '') {
  //     setisDisabled(false);
  //   }
  // }, [memberShip]);

  return (
    <>
      <Button
        onClick={handleOpen}
        className='flex justify-center px-8 py-3 items-center rounded-md bg-[#85b968] text-sm  text-white shadow-sm hover:bg-[#66a246]'
      >
        <BsCart4 className='text-lg mr-2' />
        Buy now
      </Button>
      <Dialog
        size='lg'
        open={open}
        handler={handleOpen}
        className='bg-transparent shadow-none'
      >
        <Card className='mx-auto w-full max-w-[30rem] '>
          <CardHeader variant='' color='' className='mt-8 shadow-none'>
            <div className='flex items-center justify-between'>
              <img src={logo} alt='logo' className='w-40 ' />{' '}
              <IconButton
                color='green'
                className='w-8 h-8 flex items-center justify-center rounded-full text-[1rem] relative -left-4'
                onClick={() => setOpen(false)}
              >
                X
              </IconButton>
            </div>
            <div className='h-[1px] bg-gray-300 w-[100%] mt-4'></div>
            <Typography variant='h4' color='black' className='pl-4 mt-6'>
              Create an LARF Membership Account
            </Typography>
          </CardHeader>

          <CardBody className='flex flex-col gap-2'>
            <div className='flex items-center justify- gap-2'>
              <Input label={<>Name</>} size='lg' value={state.user} />
              <Input label={<>Email</>} size='lg' value={state.mail} />
            </div>

            <div className='flex items-center justify-center gap-2'>
              {' '}
              <Select label={<>Student Type</>} size='lg' value={state.student}>
                <Option value='college'>College Membership</Option>
                <Option value='school'>School Membership</Option>
              </Select>
              <Select
                label={
                  <>
                    Type of Membership <span className='text-red-400'>*</span>
                  </>
                }
                size='lg'
                onChange={handlemembership}
                value={state.membership}
              >
                <Option value='Student'>Student Membership</Option>
                <Option value='Professional'>Professional Membership</Option>
                <Option value='Lifetime'>Lifetime Membership</Option>
                <Option value='Faculty'>Faculty Membership</Option>
              </Select>
            </div>
            <div className='flex flex-col'>
              <Checkbox
                label='Do you want to disburse certificate now?'
                onClick={handleAddressSkip}
              />
              <Checkbox
                label='I have read and accept LARF Privacy Policy'
                onClick={handleTerms}
              />
            </div>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button
              variant='gradient'
              color='green'
              disabled={isdiasbled}
              onClick={handleClick}
              fullWidth
            >
              Continue Joining
            </Button>
            <Typography variant='small' className='mt-6 flex justify-center'>
              Already have an LARF account?
              <Link to='/login'>
                {' '}
                <Typography
                  variant='small'
                  color='green'
                  className='ml-1 font-bold'
                  onClick={handleOpen}
                >
                  Sign In
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};
export default SignupModel;
