import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSendPushMutation } from "../store/features/application/appApiSlice";
import * as  Yup from 'yup'
import { Label } from "flowbite-react";
import { NavbarDash } from "./Dashboard";
import SidebarV2 from "./SidebarV2";

const SendPush = () => {

    const appId = '3b6cc465-62bf-403e-a22e-24fc6727daaf';
    const [sendPush, {isLoading}] = useSendPushMutation()
    const content = isLoading ? <h1>Submitting ...</h1> : 

    <Formik initialValues={{
         id: appId,
        notification: {
            body: '',
            title:'',
            // icon: ''
        },
         token: '',
    }}

    validationSchema={
        Yup.object({
            notification: Yup.object().required(),
            token: Yup.string().required("Please recipient's token"),
        })
    }
    
    onSubmit={
        async values => {
            console.log(values, '<<<====token?');

            try {
                const data = await sendPush(values);
                console.log(data, '<<<====token?');
                
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
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="notification.body" type="text" placeholder="Enter Push Message" name='notification.body' sizing='lg' />
                    <ErrorMessage name="notification.body" >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

                  </div>
                  <div className="mb-4">
                    <Label color='text-dark'
                      htmlFor="subject"
                      value="Title"
                      className='text-xl text-center p-1'
                    />
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]" id="notification.title" as='textarea' type="text" placeholder="Enter Push Title" name='notification.title' sizing='lg' />
                    <ErrorMessage name="notification.title"  >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

                  </div>
                  <div className="mb-4">
                    <Label color='text-dark'
                      htmlFor="token"
                      value="Recipient's token"
                      className='text-xl text-center p-1'
                    />
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]" id="token" as='textarea' type="text" placeholder="Enter User token" name='token' sizing='lg' />
                    <ErrorMessage name="token"  >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

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

export default SendPush