
import { useCreateAppMutation } from '../store/features/application/appApiSlice'
import {NavbarDash} from './Dashboard'
import { ErrorMessage, Field, Form, Formik, /* useField */} from "formik";
import * as Yup from 'yup';
import SidebarV2 from './SidebarV2';


const CreateApplication = () => {

  const [createApp, {isLoading}] = useCreateAppMutation()

const content = isLoading ? <h1>Submitting ...</h1> : 


<Formik initialValues={ {

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
        console.log(data);
        
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
        <div className='basis-[88%] border'>
          <NavbarDash />
          <h1 className='text-[#5a5c69] text-[28px] leading-[34px] ml-3 mt-3 font-normal cursor-pointer'>Create Your Application</h1>

          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-emerald-600 lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-orange-700 uppercase hover:text-emerald-600">
                Create Application
              </h1>
              <Form className="mt-6">
                <div className="mb-2">
                  <label
                    htmlFor="appName"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Application Name
                  </label>
                  <Field
                    type="text" id='appName' placeholder='Global Notification System' name='appName'
                    className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                   <ErrorMessage name="appName"  />

                </div>
                <div className="mb-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Description
                  </label>
                  <Field
                     type="text" id='description' placeholder='A GNS application' name='description'

                    className="block w-full px-4 py-2 mt-2 text-emerald-700 bg-white border rounded-md focus:border-emerald-400 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                   <ErrorMessage name="description"  />

                </div>

                <div className="mt-6">
                  <button className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-lg hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </div>

</Formik>


return content;

 
}

export default CreateApplication;
