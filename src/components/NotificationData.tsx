
const NotificationData = () => {
  return (
		<div id="app" className="bg-gray-200 w-fit h-fit">
			<div className="w-fit mx-auto px-8 py-8 h-fit">
				<h2 className="uppercase font-bold text-gray-600 text-3xl text-center pb-8">
					Notification # 4000
				</h2>

				<div className="shadow-lg flex h-fit gap-4 justify-between">
					<div id="NotifInfo">
						<h1 className="text-2xl mb-3">Notification Data</h1>
						<div className="flex flex-col p-2">
							<label className="text-md "># ID</label>
							<p className="font-bold text-xl text-black">
								yuyhjjhvj#HJBjhjJ#JHJHVHJ
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md "> Title</label>
							<p className="font-bold text-xl text-black">GNS 1</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md  ">Body</label>
							<p className="font-bold text-xl text-black">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Reprehenderit 1
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md  ">Recipient</label>
							<p className="font-bold text-xl text-black">124587521821</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md  ">Sent at:</label>
							<p className="font-bold text-xl text-black">02/02/23 09:00P M</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md  ">Subject</label>
							<p className="font-bold text-xl text-black">GNS URGENT!</p>
						</div>
					</div>

					<div id="NotifDetail">
						<div className="flex flex-col p-2">
							<h1 className="text-2xl mb-3">Notification Status</h1>

							<label className="text-md">Status</label>
							<p className="font-bold text-xl text-green-400">ACTIVE</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md">Token</label>
							<p className="font-bold text-xl text-black">
								iujkjkdskjbkj465758856h6%$
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md">Provider</label>
							<p className="font-bold text-xl text-black">Nexah</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md">Type</label>
							<p className="font-bold text-xl text-black">SMS</p>
						</div>
					</div>
					<div id="NotifAppDetail">
						<div className="flex flex-col p-2">
							<h1 className="text-2xl mb-3">Application Data</h1>

							<label className="text-md">App Name</label>
							<p className="font-bold text-xl ">GNS TEST APP 1</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md">App Token</label>
							<p className="font-bold text-xl text-black">
								iujkjkdskjbkj465758856h6%$
							</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md">App # ID</label>
							<p className="font-bold text-xl text-black">lkjblflbeljfl</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md">App Status</label>
							<p className="font-bold text-xl text-green-400">ACTIVE</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md">Created On</label>
							<p className="font-bold text-xl text-black">02/02/23</p>
						</div>
						<div className="flex flex-col p-2">
							<label className="text-md">Decription</label>
							<p className="font-bold text-xl text-black">
								Lorem ipsum dolor sit amet consectetur adipisicing{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotificationData