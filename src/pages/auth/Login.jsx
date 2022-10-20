import './auth.css'
import { NavLink } from 'react-router-dom'
import FormInput from '../../components/form/FormInput'
import TwitterIcon from '../../assets/icons/twitter-circled.svg'
import GoogleIcon from '../../assets/icons/google.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[90vh] lg:py-0">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                Login to your account
            </h1>
            <div className="w-full bg-gray-100 rounded-2xl shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form autoComplete='off' className="space-y-4 md:space-y-6">
                        <div>
                            <FormInput
                                label='Email'
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                            />
                        </div>
                        <div>
                            <FormInput
                                label='Password'
                                type="password"
                                name="password"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <FormInput
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="remember"
                                        className="text-gray-500 dark:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <NavLink to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Forgot password?
                            </NavLink>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="button"
                                className="w-48 text-white uppercase bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login
                            </button>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <hr className="w-32 font-bold" />
                            <span className="p-2 text-gray-400 mb-1 uppercase">Or login with</span>
                            <hr className="w-32" />
                        </div>
                        <div className="flex justify-center gap-2">
                            <img src={TwitterIcon} alt='Twitter icon' className='w-10 cursor-pointer'/>
                            <img src={FacebookIcon} alt='Twitter icon' className='w-10 cursor-pointer'/>
                            <img src={GoogleIcon} alt='Twitter icon' className='w-10 cursor-pointer'/>
                        </div>

                        <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?{" "}
                            <NavLink to="/register" className="uppercase font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Sign up
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login