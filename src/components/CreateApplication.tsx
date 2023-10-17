
import { useCreateAppMutation } from '../store/features/application/appApiSlice'
import {NavbarDash} from './Dashboard'
import { ErrorMessage, Field, Form, Formik, /* useField */} from "formik";
import * as Yup from 'yup';

import { Label, } from 'flowbite-react';
import SidebarV2 from './SidebarV2';
import { Link } from 'react-router-dom';







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
          
          
          <div className="flex px-2 divide-x-2 mt-8">
							<h1 className="text-[#5a5c69] text-[28px] leading-[34px] px-4 font-normal cursor-pointer ml-6">
								Create Application
							</h1>

							<nav className="flex px-4" aria-label="Breadcrumb">
								<ol className="inline-flex items-center space-x-1 md:space-x-3">
									<li className="inline-flex items-center">
										<Link
											to="/dashboard"
											className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 dark:text-gray-400"
										>
											<svg
												className="w-3 h-3 mr-2.5"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
											</svg>
											Home
										</Link>
									</li>
									<li>
										<div className="flex items-center">
											<svg
												className="w-3 h-3 text-gray-400 mx-1"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 6 10"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="m1 9 4-4-4-4"
												/>
											</svg>
											<span className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">
												components
											</span>
										</div>
									</li>
									<li aria-current="page">
										<div className="flex items-center">
											<svg
												className="w-3 h-3 text-gray-400 mx-1"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 6 10"
											>
												<path
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="m1 9 4-4-4-4"
												/>
											</svg>
											<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
												Create Application
											</span>
										</div>
									</li>
								</ol>
							</nav>
						</div>


            <div className=' flex flex-col justify-center h-[85vh] items-center gap-4 w-[100vw]'>
              <div className='border-grey-600 border p-4 w-[60vw] bg-gray-100 flex flex-col gap-4 items-center '>
              <h1 className='text-[#5a5c69] text-[28px] leading-[34px] ml-3 mt-3 font-normal cursor-pointer'>Create Your Application</h1>
          <Form className="flex max-w-md flex-col gap-4 justify-center w-[100%] p-4">
     
      <div className='flex gap-2 items-center justify-evenly'>
        <div className="mb-2 block text-center whitespace-nowrap mr-2">
          <Label color='text-dark'
            htmlFor="appName"
            value="Application Name"
          />
        </div>
        <Field className='ml-4' style={{borderRadius: '4px'}}
          id="appName"
          sizing='lg'
          color='black'
          type="text"  placeholder='A GNS application' name='appName'
        />

      </div>
      <ErrorMessage name="appName"  />

      <div className='flex gap-2 items-center justify-evenly'>
        <div className="mb-2 block text-center whitespace-nowrap mr-12">
          <Label color='text-dark'
            htmlFor="appdescription"
            value="Application Desc"
          />
        </div>
        <Field as='textarea' className='bg-white' style={{borderRadius: '4px'}}
        id="description"
        placeholder="App Description"
        color='black'
        type='text'
        name='description'
      />

      </div>
      <ErrorMessage name="description"  />

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
      <button type="submit"  style={{width: '10rem'}} className='self-end text-black border-black rounded-md'>
        Submit
      </button>
    </Form>
              </div>
         
            </div>
         
          
         

          {/* <div className="relative flex flex-col justify-center m">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-emerald-600 lg:max-w-xl">
          <div className="md:container md:mx-auto px-96 min-h-screen overflow-hidden">
            <div className="w-full p-6 mt-12 bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-emerald-600 lg:max-w-xl">
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
