

import { ErrorMessage, Field, Form, Formik, /* useField */} from "formik";
import * as Yup from 'yup';
import YupPassword from "yup-password";
import { Button } from 'flowbite-react';
import axios from "axios";



YupPassword(Yup)


/* type InputProps = {
    label: string;
    name: string;
    validate?: (value: unknown) => undefined | string | Promise<unknown>;
    type?: string;
    multiple?: boolean;
    value?: string;
}
const MyTextInput = ({label, ...props}: InputProps) => {

    const [field, meta] = useField(props);

    return (
        <>
           <label htmlFor={props.id || props.name}>{label}</label>
           <input className="" {...field} {...props}  />
           {meta.touched && meta.error ? (
            <div>{meta.error}</div>
           ): null}      
        </>
    )
} */

const Signup = () => {





    const url =  'http://localhost:5000/api/auth/sign_up';
     

    return (
        <Formik
        
        initialValues={ {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }}

        validationSchema={Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Firstname required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Lastname required'),
            email: Yup.string().email('Invalid email address')
                .required('Email Required'),
            password: Yup.string().password()
                 .max(25)
                 .min(9)
                 .minUppercase(1, 'Must contain atleast 1 uppercase letter')
                 .minLowercase(1, 'Must contain atleast 1 lowercase letter')    
                 .minNumbers(1, 'Must cantain atleast 1 number')
                 .minSymbols(1, 'Must contain atleast 1 symbol')   
        })}
        onSubmit={
            
            values => {
                // console.log(values);

                axios({
                    method: 'POST',
                    url: url,
                    data: values
                })
                .then(
                    function(res) {
                      console.log(res.data, 'User Data');
                      
                    }
                )
                .catch(function (error) {
                    if (error.response) {
                      // The request was made and the server responded with a status code
                      // that falls out of the range of 2xx
                      console.log(error.response.data, 'Failed REsponse');
                 /*      console.log(error.response.status);
                      console.log(error.response.headers); */
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
                                     Create and account
                                 </h1>
                                 <Form className="space-y-4 md:space-y-6">
                                 <div>
                                         <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FirstName</label>
                                         <Field  type="text"  id="firtsName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"  name='firstName'/>
                                         <ErrorMessage name="firstName"  />
                                     </div>
                                     <div>
                                         <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LastName</label>
                                         <Field type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" name='lastName' />
                                         <ErrorMessage name="lastName" />
                                     </div>  
                                     <div>
                                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                         <Field type="email" id="email" placeholder="test@gns.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" name='email'/>
                                        <ErrorMessage  name="email"/>
                                     </div>
                                     <div>
                                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                         <Field type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" name='password' />
                                         <ErrorMessage  name="password"  />
                                     </div>
                                     <div className="flex items-start">
                                         <div className="flex items-center h-5">
                                             <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                                         </div>
                                         <div className="ml-3 text-sm">
                                             <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                         </div>
                                     </div>
                                     <Button color="dark" type="submit" className="w-full text-black bg-primary-600  hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</Button>
                                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                         Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                     </p>
                                 </Form>
                                 
                                 
                             </div>
                         </div>
                     </div>
                 </section>
            
        
        </Formik>
       
    )
}

export default Signup