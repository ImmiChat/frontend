import { Home, Message, AccountCircle, Settings } from "@mui/icons-material";

const Sidebar = (props) => {
  return (
    <div className="px-5">
      <h3 className="fw-bolder" style={{ color: "#ae83f4" }}>
        Immichat
      </h3>
      <h6 className="py-3 fw-bolder">Menu</h6>
      <nav className="d-flex flex-column">
        <a href="/" className="py-3">
          <Home className="text-secondary" />
          <span className="px-3">Home</span>
        </a>
        <a href="" className="py-3">
          <Message className="text-secondary" />
          <span className="px-3">Messages</span>
        </a>
        <a href="/profile" className="py-3">
          <AccountCircle className="text-secondary" />
          <span className="px-3">Profile</span>
        </a>
        <a href="" className="py-3">
          <Settings className="text-secondary" />
          <span className="px-3">Settings</span>
        </a>
      </nav>
      <h6 className="py-3 fw-bolder">Account</h6>
      <a href="" className="py-3">
        <AccountCircle className="text-secondary" />
        <span className="px-3">Full name</span>
      </a>
    </div>
  );
};

export default Sidebar;
