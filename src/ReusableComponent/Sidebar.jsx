import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img
            src="src/assets/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="src/assets/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>

          <div className="form-inline"></div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <NavLink to="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Master
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/Category" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Room Category</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Room" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Room No</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/RoomService" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Room Service Head</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/PhotoId" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Photo Id </p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Profession" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Profession</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/LodgingItem" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lodging Item </p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Nationality" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Nationality</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/OnlineBooking" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Online Booking Head </p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Daily Transaction
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/RoomBooking" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Room Book Entry</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
