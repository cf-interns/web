import useBreadcrumbs from "use-react-router-breadcrumbs";
import { protectedRoutes } from "../router/protectedRoutes";
import { Link } from "react-router-dom";


const BreadCrumbs = () => {
    const breadcrumbs = useBreadcrumbs(protectedRoutes);

console.log(breadcrumbs, 'Crumbs');
  return (
		<nav>
			{breadcrumbs.map(({ match, breadcrumb }) => (
				<Link
					key={match.pathname}
					to={match.pathname}
					className={
						match.pathname === location.pathname
							? "text-gray-900 text-2xl mx-2 p-2 hover:bg-gray-800 rounded hover:text-white"
							: "text-gray-500 text-2xl w-full p-2 mx-2 hover:bg-gray-800 rounded hover:text-white"
					}
				>
					{breadcrumb}{" "}
					<span className="">
						<i className="pi pi-chevron-right" style={{ fontSize: "1.5rem" }}>
							{" "}
							{match.route?.icon}{" "}
						</i>
					</span>
				</Link>
			))}
		</nav>
	)
}

export default BreadCrumbs
