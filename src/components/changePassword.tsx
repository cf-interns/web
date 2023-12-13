import { Button } from "primereact/button"
import { useFormik } from "formik"
import { Label } from "flowbite-react"
import { useChangePasswordMutation } from "../store/features/user/usersApiSlice"
import * as Yup from "yup"
import { ToastContainer, toast } from "react-toastify"


function ChangePassword() {

	const [changePassword, { isLoading }] = useChangePasswordMutation()
	const notifySucess = () => toast.success("Password Updated Successfully")
	const notifyError = () => toast.error("Password Update Not Successful")


    const formik2 = useFormik({
		initialValues: {
			oldPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			oldPassword: Yup.string()
				// .password()
				.required("Previous Password is required!"),

			newPassword: Yup.string()
				.password()
				.required("Please enter the new password")
				.max(25)
				.min(9)
				.minUppercase(1, "Must contain atleast 1 uppercase letter")
				.minLowercase(1, "Must contain atleast 1 lowercase letter")
				.minNumbers(1, "Must cantain atleast 1 number")
				.minSymbols(1, "Must contain atleast 1 symbol"),
				confirmPassword: Yup.string()
				.password()
				.required("Please confirm password")
				.max(25)
				.min(9)
				.minUppercase(1, "Must contain atleast 1 uppercase letter")
				.minLowercase(1, "Must contain atleast 1 lowercase letter")
				.minNumbers(1, "Must cantain atleast 1 number")
				.minSymbols(1, "Must contain atleast 1 symbol"),
		}),
		onSubmit: async (values) => {
			try {
				const data = await changePassword(values).unwrap()
				notifySucess()
				console.log(data, "USER PASSWORD++++++")
				return data
			} catch (error) {
				notifyError()
				console.log(error)
			}
		},
	})


  return (
    <div><hr className="border-gray-400 border-4xl " />
    <div className=" mt-8">
        <div className="flex flex-col justify-between" id="Change Password">
            <div className="p-2 w-[25vw]">
                <h1 className="text-2xl text-gray-500">Change Password</h1>
                <p>Update your password associated with your account.</p>
            </div>

            <div id="form" className="flex flex-col gap-4">
                <div>
                    <div className="">
                        <form
                            className="flex flex-col gap-2 w-[60vw]"
                            onSubmit={formik2.handleSubmit}
                        >
                            <div className="flex flex-col gap-2 whitespace-nowrap w-80 py-2">
                                <Label
                                    htmlFor="Current Password"
                                    value="Current Password"
                                    color="text-dark"
                                    className="text-sm"
                                />
                                <input
                                    placeholder="Enter Current Password"
                                    type="password"
                                    id="oldPassword"
                                    name="oldPassword"
                                    value={formik2.values.oldPassword}
                                    onChange={formik2.handleChange}
                                    onBlur={formik2.handleBlur}
                                    className="bg-white w-[60vw] rounded-lg shadow-md"
                                />
                                {formik2.errors.oldPassword &&  <div className="text-red-700 italic">{ formik2.errors.oldPassword }</div>}
                        
                            </div>

                            <div className="flex flex-col gap-2 whitespace-nowrap w-80 py-2">
                                <Label
                                    htmlFor="New Password"
                                    value="New Password"
                                    color="text-dark"
                                    className="text-sm"
                                />
                                <input
                                    placeholder="New Password"
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={formik2.values.newPassword}
                                    onChange={formik2.handleChange}
                                    onBlur={formik2.handleBlur}
                                    className="bg-white w-[60vw] rounded-lg shadow-md"
                                />
                                {formik2.errors.newPassword &&  <div className="text-red-700 italic">{ formik2.errors.newPassword }</div>}
                            </div>

                            <div className="flex flex-col gap-2 w-80 py-2">
                                <Label
                                    htmlFor="confirmPassword"
                                    value="Confirm Password"
                                    color="text-dark"
                                    className="text-sm mr-8"
                                />
                                <input
                                    placeholder="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={formik2.values.confirmPassword}
                                    onChange={formik2.handleChange}
                                    onBlur={formik2.handleBlur}
                                    className="bg-white w-[60vw] rounded-lg shadow-md"
                                />
                                {formik2.errors.confirmPassword &&  <div className="text-red-700 italic">{ formik2.errors.confirmPassword }</div>}
                            </div>
                            <Button
                                className="w-full h-[40px] rounded-lg p-2 bg-gray-500 mt-2 text-white hover:bg-green-500 focus:ring-0"
                                disabled={isLoading}
                                label={isLoading ? "Submiting" : "Save"}
                                type="submit"
                            />
                        </form>
                        <ToastContainer/>
                                
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default ChangePassword