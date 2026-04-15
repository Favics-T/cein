const Nav = () => {
  return (
    <header className="flex justify-between items-center py-6 px-8">
      <h1 className="text-xl font-semibold">CEIN.</h1>

      <nav className="hidden md:flex gap-6 text-sm text-gray-500">
        <a href="#">All Product</a>
        <a href="#">About Us</a>
        <a href="#">FAQ</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>

      <div className="flex gap-4">
        <span>♡</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Nav;