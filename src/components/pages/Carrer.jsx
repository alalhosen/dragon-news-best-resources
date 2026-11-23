const Carrer = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <h1>Contact with us</h1>
        <h2>Mobile No: 017777777777</h2>
      </div>
      <div className="avatar-group -space-x-6">
        <div className="avatar">
          <div className="w-12">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
            />
          </div>
        </div>
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-12">
            <span>+99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrer;
