import { InputText } from 'primereact/inputtext';
import React, { useEffect, useState } from 'react'
import { Password } from 'primereact/password';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../../Features/authSlice";
import PopupModal from '../../Components/Common/PopupModal';

function LoginPage() {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);
    const { user, error, message, company } = useSelector((state) => state.auth)
    const { handleSubmit, formState: { errors }, register, control } = useForm({
        mode: 'onBlur',
    });
    const [resMessage, setResMessage] = useState('')
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        if (error && isClicked) {
            setIsClicked(false);
            setResMessage(message);
            setModal(true)
        }
        if (user) {
            setIsClicked(false);
            setTimeout(() => navigate('/'), 1500)
            toast.success('Logged in successfully')
        }
    }, [user, error, message, navigate, isClicked])

    const onSubmit = async (data) => {
        setIsClicked(true);
        try {
            const newData = { ...data, company_id: company[0]?.id, user_type: "client" };
            const res = await dispatch(login(newData));
            if (res?.payload?.success === true) {
                toast.success('Logged in successfully')
                navigate('/dashboard');
            }
            setIsClicked(false);

        } catch (error) {
            setResMessage('Something went wrong. Please try again later');
            setModal(true)
            setIsClicked(false);
        }
    }
    return (
        <>
            <PopupModal message={resMessage} visible={modal} onHide={() => setModal(false)} />
            <Toaster />
            <div>
                <div className="pt-4 ps-5 ms-5">
                    <img src="/assets/icons/logoDark.png" alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="row  my-5">
                    <div className="col-md-9  mx-auto mb-5">
                        <h2 className='text-center fw-bold'>Welcome to the  <span className='txt-Secondary' > Admin Panel</span> of <span className='txt-Primary'> Oqvest LLC </span></h2>
                        <p className='text-center text-muted txt-18  '>No need to stress if you've forgotten your password. We're here to help you regain access. By initiating a password reset, you'll be back on track to managing your mortgage journey in no time.</p>
                    </div>
                    <div className="col-md-5 mx-auto mt-3">
                        <div className="row d-flex flex-wrap ">
                            <div className="col-md-12 px-4 d-flex justify-content-center flex-column">
                                <label htmlFor="username" className='fw-bold py-1'>Email</label>
                                <div className="  py-3 radius-card  box-shadow ">
                                    <span className="px-3 ">
                                        <img src="/assets/icons/mail.png" alt="Custom Icon" />
                                        <InputText {...register("email", {
                                            required: 'Email Address is required', pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Invalid Email Address',
                                            },
                                        })} className="w-75"
                                            placeholder="Enter your email"
                                            keyfilter="email" />
                                    </span>
                                </div>
                                {errors?.email && <span className='txt-sharp-red mt-2'>{errors?.email?.message}</span>}
                            </div>

                            <div className="col-md-12 px-4 d-flex justify-content-center flex-column mt-4">
                                <label htmlFor="username" className='fw-bold py-1'>Password</label>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: 'Password is required.' }}
                                    render={({ field, fieldState }) => (
                                        <div className="  py-3 radius-card  box-shadow">
                                            <span className="px-3">
                                                <img src="/assets/icons/lock.png" alt="Custom Icon" />
                                                <Password
                                                    {...field}
                                                    className="login-password"
                                                    placeholder="Enter your password"
                                                    useGrouping={false}
                                                    feedback={false}
                                                    toggleMask
                                                />
                                            </span>
                                        </div>
                                    )}
                                />
                                {errors?.password && <span className='txt-sharp-red mt-2'>{errors?.password?.message}</span>}
                                <span className='d-flex justify-content-between align-items-center gap-3'>
                                    <Link to='/forget-password' className='py-2'>Forgot Password?</Link>
                                    <Link to="/change-password">Change Password (temporary)</Link>
                                </span>
                            </div>
                            <div className="col-md-12 px-4  d-flex justify-content-center flex-column mt-4">
                                <button disabled={isClicked} className='bkg-drimary w-100 py-3 radius-card fw-semibold'>
                                    {isClicked ? <i className='pi pi-spin pi-spinner'></i> : (<>{'Login'}</>)}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage;