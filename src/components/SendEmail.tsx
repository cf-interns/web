import { ErrorMessage, Field, Form, Formik } from "formik"
import { useSendEmailMutation } from "../store/features/application/appApiSlice"
import * as Yup from 'yup'
import { Label } from "flowbite-react";
import { NavbarDash } from "./Dashboard";
import SidebarV2 from "./SidebarV2";

 const Email = () => {
    const appId = "2e66d10c-9137-4b89-ba03-f9a7cffb987a"
    const [sendEmail, {isLoading}] = useSendEmailMutation()
 


   return  <Formik initialValues={{
        id: appId,
        text: '',
        subject: '',
        to: '',
        from: 'no-reply@payunit.com'
    }}
    
    
    validationSchema={ Yup.object({
        text: Yup.string().required('Message is required'),

        subject: Yup.string().required('Please enter the email subjcet'),
        
        to: Yup.string().email('Invalid email address').required('Please enter an adress')
    })}
    
    onSubmit={
        async values => {
            try {
                const data = await sendEmail(values).unwrap();
                return data;
            } catch (error) {
                console.log(error);
                
            }
        }
    }
    
    >

<div>
        <div className='flex'>
          <div className='basis-[12%] h-[100vh] '>
            <SidebarV2 />
          </div>
          <div className='basis-[88%] w-[80vw]'>
            <NavbarDash />


            <div className="flex justify-center w-[90vw] ">
              <div className="w-[70vw] h-auto">
                <Form className="bg-white rounded px-8 pt-6 pb-8 mb-4 my-32 " style={{ boxShadow: '71px 38px 50px 22px rgba(0,0,0,0.1)' }}>
                  <div className="mb-4">
                    <Label color='text-dark'
                      htmlFor="text"
                      value="Message"
                      className='text-xl text-center p-1'
                    />
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Enter Message" name='text' sizing='lg' />
                    <ErrorMessage name="text" >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

                  </div>
                  <div className="mb-4">
                    <Label color='text-dark'
                      htmlFor="subject"
                      value="Subject"
                      className='text-xl text-center p-1'
                    />
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]" id="subject" as='textarea' type="text" placeholder="Enter email subject" name='subject' sizing='lg' />
                    <ErrorMessage name="subject"  >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

                  </div>
                  <div className="mb-4">
                    <Label color='text-dark'
                      htmlFor="address"
                      value="Address"
                      className='text-xl text-center p-1'
                    />
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]" id="to" as='textarea' type="text" placeholder="Enter email adress" name='to' sizing='lg' />
                    <ErrorMessage name="to"  >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

                  </div>

                  <button type="submit" style={{ backgroundColor: 'rgb(31 41 55 / 1)', }} className='self-center text-white border-black rounded-md hover:bg-green-300 p-2 hover:text-white w-full bg-gray-300'>
                    {isLoading ? 'Submitting ...': 'Submit'}
                  </button>


                </Form>

              </div>
            </div>


          </div>
        </div>
      </div>


    </Formik>

 
}

export default Email
