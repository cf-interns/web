import { useCreateAppMutation } from "../store/features/application/appApiSlice"
import { NavbarDash } from "./Dashboard"
import { ErrorMessage, Field, Form, Formik /* useField */ } from "formik"
import * as Yup from "yup"


import { Label, } from 'flowbite-react';
import SidebarV2 from './SidebarV2';







const CreateApplication = () => {

  const [createApp, { isLoading }] = useCreateAppMutation()

  const content = isLoading ? <h1>Submitting ...</h1> :


    <Formik initialValues={{

      appName: '',

      description: '',

    }}


      validationSchema={Yup.object({
        appName: Yup.string()
          .min(10, 'Name must be a minimum of 10 characters or more')
          .required('Application Name is required'),

        description: Yup.string()
          .required('A description is required!')
      })}


      onSubmit={
        async values => {
          try {
            const data = await createApp(values).unwrap();
            return data;

            //Navigate Somewhre
          } catch (error) {
            return error
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
                      htmlFor="appName"
                      value="Application Name"
                      className='text-xl text-center p-1'
                    />
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="appName" type="text" placeholder="A GNS application" name='appName' sizing='lg' />
                    <ErrorMessage name="appName" >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

                  </div>
                  <div className="mb-4">
                    <Label color='text-dark'
                      htmlFor="description"
                      value="Application Description"
                      className='text-xl text-center p-1'
                    />
                    <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-[12vh]" id="description" as='textarea' type="text" placeholder="App Description" name='description' sizing='lg' />
                    <ErrorMessage name="description"  >{msg => <div className="text-red-800 text-xs italic text-center">{msg}</div>}</ErrorMessage>

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

export default CreateApplication
