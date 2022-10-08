import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
      icon: "ri-home-smile-line",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
      icon: "ri-information-line",
    },
    {
      id: 3,
      title: "Projects",
      path: "/projects",
      icon: "ri-projector-line",
    },
    {
      id: 4,
      title: "Contact",
      path: "/contact",
      icon: "ri-contacts-fill",
    },
  ];
  return (
    <div>
      {/* content */}
      <div className="pb-44 overflow-x-hidden">{children}</div>

      {/* footer */}
      <div className="fixed bottom-10 left-0 right-0 sm:bottom-0">
        <div className="flex w-full justify-center">
          {menuItems.map((item, index) => (
            <div
              className="flex flex-col justify-end items-center"
              key={item.id}
            >
              {location.pathname === item.path && (
                <div className="flex flex-col items-center">
                  <div className="h-5 w-10 bg-primary rounded-t-full"></div>
                  <div className="h-5 w-20 bg-primary rounded-t-full text-center">
                    <i className={`${item.icon} text-xl text-white`}></i>
                  </div>
                </div>
              )}
              <div
                className={`px-20 sm:px-8 bg-primary py-5 ${
                  index === 0 && "rounded-l"
                } ${
                  index === menuItems.length - 1 && "rounded-r"
                } flex items-center justify-center space-x-2`}
              >
                {location.pathname !== item.path && (
                  <i
                    onClick={() => navigate(item.path)}
                    className={`${item.icon} text-secondary text-xl`}
                  ></i>
                )}
                <Link
                  to={`${item.path}`}
                  className={`text-white text-xl ${
                    item.path !== location.pathname && "sm:hidden"
                  } `}
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
