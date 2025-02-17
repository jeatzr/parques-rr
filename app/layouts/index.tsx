import { Outlet, NavLink, Link } from "react-router";
import Header from "~/component/Header/Header";
function Index() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Index;
