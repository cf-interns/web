
import { useCreateAppMutation } from '../store/features/application/appApiSlice'
import {NavbarDash} from './Dashboard'
import { ErrorMessage, Field, Form, Formik, /* useField */} from "formik";
import * as Yup from 'yup';
import "../createapp.css"
import { Label, } from 'flowbite-react';
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
        <div className='basis-[88%] w-[80vw]'>
          <NavbarDash />
          
          
            <div className='container '>
              <div className=' wrapper'>
              <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                             GNS
              <h1 className='text-a'>      <span className='oranged'>Create Your </span>   <span>Application  </span> </h1>
          <Form className="form">
     
      <div className=''>
        <div className="">
          <Label className="label"  
          color='text-dark'
            htmlFor="appName"
            value="Application Name"
          />
        </div>
        <Field className="field-form"
          id="appName"
          type="text"  placeholder='A GNS application' name='appName'
        />

      </div>
      <ErrorMessage name="appName" component="div" className="text-red-500 text-xs italic"/>

      <div className=''>
        <div >
          <Label className="label" 
            color='text-dark'
            htmlFor="appdescription"
            value="Application Desc"
          />
        </div>
        <Field className="field-form"
        as='textarea'
        id="description"
        placeholder="App Description"
        name='description'
      />

      </div>
      <ErrorMessage name="description" component="div" className="text-red-500 text-xs italic" />

{/* 
      <div>
        <div className="mb-2 block">
          <Label color='text-dark' 
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          required
          type="password"
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div> */}
      <button className="btn" type="submit">
        Submit
      </button>
    </Form>
              </div>
         
            </div>
         
          
         

          {/* <div className="relative flex flex-col justify-center m">
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
          </div> */}

        </div>
      </div>
    </div>

</Formik>


return content;

 
}

export default CreateApplication;
