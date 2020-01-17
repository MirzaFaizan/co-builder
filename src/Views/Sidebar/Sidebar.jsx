import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const SideBarData = [
  {
    IconName: "fas fa-home",
    Name: "Dashboard",
    routeName: "dashboard"
  },
  {
    IconName: "fas fa-list-ul",
    Name: "Checklist",
    routeName: "checklist"
  },
  {
    IconName: "fas fa-dollar-sign",
    Name: "Budgeter",
    routeName: "budgeter"
  },
  {
    IconName: "far fa-heart",
    Name: "Pinterest Boards",
    routeName: "pinterest-board"
  },
  {
    IconName: "fas fa-users",
    Name: "Sub Contractors",
    routeName: "sub-contractors"
  },
  // {
  //   IconName: "fas fa-pencil-alt",
  //   Name: "Quotes",
  //   routeName: "qoutes"
  // },
  {
    IconName: "far fa-folder-open",
    Name: "Documents",
    routeName: "documents"
  },
  {
    IconName: "fas fa-shopping-cart",
    Name: "suppliers",
    routeName: "suppliers"
  },
  {
    IconName: "far fa-clock",
    Name: "timeline",
    routeName: "timeline"
  },
  {
    IconName: "far fa-images",
    Name: "Progress Photos",
    routeName: "progress-photos"
  },
  {
    IconName: "far fa-calendar-alt",
    Name: "Upcomming Meetings",
    routeName: "upcomming-meetings"
  }
];
export default function SideBar() {
  const [active, setActive] = React.useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const toggle = () => {
    setShowCompleted(true);
  };
  const subList = () => {
    return (
      <ul className="pt-3">
        <li className="d-flex">
          <Link to="/" className="mr-2 text-decoration-none" role="button">
            Show Completed
          </Link>
          {/* <input type="checkbox" name="checkbox" className="bootstrap-switch" data-on-label="ON" data-off-label="OFF" /> */}
          <label class="switch" onClick={toggle}>
            <input type="checkbox" checked={showCompleted} />
            <span class="slider round"></span>
          </label>
        </li>
        <li className="pb-2">
          <Link to="/" className="text-decoration-none">
            Filters:
          </Link>
        </li>
        <li className="pb-2">
          <Link to="/" className="text-decoration-none custom-active">
            All To-Dos
          </Link>
        </li>
        <li>
          <Link to="/" className="text-decoration-none">
            My Created To-Dos
          </Link>
        </li>
      </ul>
    );
  };
  // side-bar__link-active
  return (
    <section className="col-md-3 overflow-auto vh-100 col-xl-2 side-bar bg-white text-capitalize p-2">
      <ul className="list-group">
        {SideBarData.map(value => (
          <li className="my-3 ml-2">
            <NavLink
              activeClassName="side-bar__link-active"
              to={value.routeName}
              className={`d-flex side-bar__link align-items-baseline text-decoration-none`}
              onClick={() => setActive(value.routeName)}
            >
              <i className={`ml-3 ${value.IconName}`}></i>
              <span className="ml-3">{value.Name}</span>
            </NavLink>
            {value.routeName === "checklist" && active === "checklist"
              ? subList()
              : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
