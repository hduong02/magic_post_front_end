import "./navbar.scss";

const StaffNavbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Magic Post</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>5</span>
        </div>
        <div className="user">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/343/259/small/cute-puppy-or-dog-cartoon-illustration-animal-raising-hand-wildlife-icon-design-concept-isolated-flat-face-style-free-vector.jpg" alt=""
          />
          <span>Nhân viên điểm tập kết</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default StaffNavbar;
