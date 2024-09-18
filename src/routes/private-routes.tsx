// import { Navigate, Outlet } from "react-router-dom";
// import { useStore } from "@/store";

// const PrivateRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
//   const { user } = useStore((state) => ({
//     user: state.user,
//   }));

//   return user && allowedRoles.includes(user.role) ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/unauthorized" />
//   );
// };

// export default PrivateRoute;
