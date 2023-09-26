import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'
import YupPassword from "yup-password"
import axios from "axios"
import { Button } from 'flowbite-react'


YupPassword(Yup)

const Signin = () => {

    const url = 'http://localhost:5000/api/auth/sign_in'


    return (

        <Formik initialValues={{
            email: '',
            password: ''
        }}

            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Email Required'),
                password: Yup.string().required()
            })}


            onSubmit={
                values => {
                    console.log(values)
                    axios({
                        method: 'POST',
                        url: url,
                        data: values,
                        withCredentials: true
                    })
                        .then(
                            function (res) { console.log(res.data, 'User Data') }
                        )
                        .catch(function (error) {
                            if (error.response) {
                                console.log(error.response.data);

                            }
                        })
                }
            }
        >
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        GNS
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <Form className="space-y-4 md:space-y-6" action="#">

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <Field type="email" id="email" placeholder="test@gns.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" name='email' />
                                    <ErrorMessage name="email" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <Field type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" name='password' />
                                    <ErrorMessage name="password" />
                                    <ErrorMessage name="password" />
                                </div>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    <Button color="dark" type="submit" className="w-full text-black bg-primary-600  hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</Button>
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot Password ?</a>
                                </p>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

        </Formik>
    )
}

export default Signin