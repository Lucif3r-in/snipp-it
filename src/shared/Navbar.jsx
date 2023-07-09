function Navbar() {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl text-[#cbc8c8] hover:text-[#e9e3e3]"
          href="/"
        >
          Snipp-It
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className="text-[#cbc8c8] hover:text-[#e9e3e3]"
              href="https://github.com/Lucif3r-in/snipp-it.git"
            >
              Github
            </a>
          </li>
          <li>
            <a className="text-[#cbc8c8] hover:text-[#e9e3e3]" href="/">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
