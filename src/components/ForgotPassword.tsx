import * as Yup from 'yup';
// import YupPassword from "yup-password";
import { Button } from 'flowbite-react';
import { Form, Formik, Field, ErrorMessage } from 'formik';

import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../store/features/auth/authApiSlice";


const ForgotPassword = () => {

    const naigate = useNavigate();
    const [forgot, {isLoading}] = useForgotPasswordMutation();

    const content = isLoading ? <h1>Sending Email</h1> : 


        <Formik
    
        initialValues={{
             email: '',
           
        }}
    
        validationSchema={Yup.object({
             email: Yup.string().email('Please Enter a valid email address'),
       
        })} 
    
        onSubmit={
          async values => {
            console.log(values, );
            
            try {
                const data = await forgot(values).unwrap();
                naigate("/check-email");
                return data
            } catch (error) {
                console.log(error);
                
            }
          }
            
        }
        
        >
    
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                GNS    
            </a>
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Forgot Password
                </h2>
                <Form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" >
                                         <div>
                                             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                             <Field type="email" id="email" placeholder="test@gns.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" name='email'/>
                                            <ErrorMessage  name="email"/>
                                         </div> 
    
                    <Button color="dark" type="submit" className="w-full text-black bg-primary-600  hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:text-white dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</Button>
                                         {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                             Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                         </p> */}
                </Form>
            </div>
        </div>
      </section>
    
        </Formik>


return content;



}

export default ForgotPassword