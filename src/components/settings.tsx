
import { NavbarDash } from "./Dashboard"
import SidebarV2 from "./SidebarV2"
import { Button, Label, TextInput } from "flowbite-react";
import thumbnail from '../assets/avatar.jpeg';
import { ErrorMessage, Field, Form, Formik, /* useField */ } from "formik";
import * as Yup from 'yup';

import { useChangePasswordMutation } from "../store/features/user/usersApiSlice";

const Settings = () => {

	const [changePassword, { isLoading }] = useChangePasswordMutation();

	const content = isLoading ? <h1>Submitting ...</h1> :

		<Formik

			initialValues={{

				oldPassword: '',
				newPassword: '',
				confirmPassword: '',
			}}

			validationSchema={Yup.object({

				oldPassword: Yup.string().password().required('Previous Password is required!'),
				newPassword: Yup.string().password().required('Please enter the new password')
					.max(25)
					.min(9)
					.minUppercase(1, 'Must contain atleast 1 uppercase letter')
					.minLowercase(1, 'Must contain atleast 1 lowercase letter')
					.minNumbers(1, 'Must cantain atleast 1 number')
					.minSymbols(1, 'Must contain atleast 1 symbol'),
				/* confirmPassword: Yup.string().password().required('Please confrim the new password')
					.max(25)
					.min(9)
					.minUppercase(1, 'Must contain atleast 1 uppercase letter')
					.minLowercase(1, 'Must contain atleast 1 lowercase letter')
					.minNumbers(1, 'Must cantain atleast 1 number')
					.minSymbols(1, 'Must contain atleast 1 symbol'),
 */

			})}

			onSubmit={
				async values => {
					try {
						const data = await changePassword(values).unwrap();
						console.log(data, 'USER PASSWORD++++++');
						return data;

					} catch (error) {
						console.log(error);

					}
				}
			}

		>
			<div>

				<div className='flex h-full overflow-hidden '>
					<div className='basis-[12%] h-[100vh] '>
						<SidebarV2 />
					</div>
					<div className='basis-[88%] border h-[100vh]'>
						<NavbarDash />
						<h1 className='text-2xl font-bold p-2 text-start ml-[54px]'>Account Settings</h1>

						<div className="flex flex-col w-[60vw] m-auto p-2 rounded">

							<div className=" h-[50%]" id="userInfo">
								<h1 className="text-md p-2">User Settings</h1>
								<div className="flex justify-evenly items-center p-2 m-auto h-[95%] gap-10 bg-white rounded-xl">
									<div className=""><img src={thumbnail} className="rounded" alt="" /></div>
									<div></div>
									<div className=""><form className="flex flex-col gap-2 w-[60vw]">

										<div className="flex flex-col gap-2 whitespace-nowrap w-80">
											<Label htmlFor="firstName" value="First Name" color='text-dark' className="text-sm" />
											<TextInput placeholder="John" sizing='sm' />
										</div>
										

										<div className="flex flex-col gap-2 whitespace-nowrap w-80">
											<Label htmlFor="firstName" value="Last Name" color='text-dark' className="text-sm" />
											<TextInput placeholder="John"  sizing='sm' />
										</div>

										<div className="flex flex-col gap-2 w-80">
											<Label htmlFor="firstName" value="Email" color='text-dark' className="text-sm mr-8" />
											<TextInput placeholder="John" sizing='sm' />
										</div>

										<Button size='sm' className="w-full rounded-md p-2 m-2 text-green-200 w-80" color="green" >
											<h6 className="text-black">Update Info</h6>
										</Button>


									</form>

									</div>
								</div>
							</div>
							
                               <br/>



							<div id="changePassword" className="h-[50%] bg-white rounded-xl">
								<h1 className="text-md p-2">Change Password</h1>
								<div className="flex justify-evenly items-center p-2 m-auto h-[95%] gap-16">
									<div className=""><img src={thumbnail} className="rounded" alt="" /></div>
									<div className="grow"><Form className="flex flex-col gap-2 w-[60vw]">

										<div className="flex flex-col gap-2 whitespace-nowrapp w-80">
											<Label htmlFor="Old Password" value="Old Password" color='text-dark' className="text-sm " />
											<Field placeholder="John" id="oldPassword" type="oldPassword" name="oldPassword" sizing='sm' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" color='black' />


										</div>
										<ErrorMessage name="oldPassword" component="div" className="text-red-500 text-xs italic"/>

										<div className="flex flex-col gap-2 whitespace-nowrapp w-80">
											<Label htmlFor="New Password" value="New Password" color='text-dark' className="text-sm " />
											<Field placeholder=".................." id='newPassword' sizing='sm' type="newPassword" name="newPassword" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" color='' />

										</div>
										<ErrorMessage name="newPassword" component="div" className="text-red-500 text-xs italic" />


								


										<Button as='button' type="submit" size='sm' className="w-full rounded-md p-2 m-2 text-green-200 w-80" color="green" >
											<h6 className="text-black">Change Password</h6>
										</Button>


									</Form>

									</div>
								</div>
							</div>



						</div>
					</div>
				</div>
			</div>

		</Formik>

	return content;

	/* 	return (
			
		) */
}

export default Settings
