import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSendSMSMutation } from "../store/features/application/appApiSlice";
import * as Yup from 'yup';
import { Label } from "flowbite-react";
import { NavbarDash } from "./Dashboard";
import SidebarV2 from "./SidebarV2";
const SendSMS = () => {
    const appId = 'a819e4ab-f538-47c1-a3e8-59e043f9317e';
    const [sendSMS, {isLoading}] = useSendSMSMutation();
    const content = isLoading ? <h1>Submitting ...</h1> :

    <Formik initialValues={{
        id: appId,
        message: '',
        mobiles: '',
    }}

    validationSchema={
        Yup.object({
            message: Yup.string().required('Please enter your message'),
            mobiles: Yup.number().required('Please Enter Phone number')
        })
    }

    onSubmit={
        async values => {
            try {
                const data = await sendSMS(values).unwrap();
                return data
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
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Enter Message" name='message' sizing='lg' />
                    <ErrorMessage name="text" >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

                  </div>
                  {/* <div className="mb-4">
                    <Label color='text-dark'
                      htmlFor="subject"
                      value="Subject"
                      className='text-xl text-center p-1'
                    />
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]" id="subject" as='textarea' type="text" placeholder="Enter email subject" name='subject' sizing='lg' />
                    <ErrorMessage name="subject"  >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

                  </div> */}
                  <div className="mb-4">
                    <Label color='text-dark'
                      htmlFor="address"
                      value="Mobile Number(s)"
                      className='text-xl text-center p-1'
                    />
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]" id="mobiles" as='textarea' type="number" placeholder="Enter mobile number" name='mobiles' sizing='lg' />
                    <ErrorMessage name="mobiles"  >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

                  </div>

                  <button type="submit" style={{ backgroundColor: 'rgb(31 41 55 / 1)', }} className='self-center text-white border-black rounded-md hover:bg-green-300 p-2 hover:text-white w-full bg-gray-300'>
                    Submit
                  </button>


                </Form>

              </div>
            </div>


          </div>
        </div>
      </div>

    </Formik>

return content;
 
}

export default SendSMS