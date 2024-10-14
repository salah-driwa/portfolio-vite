import { AiFillAppstore } from "react-icons/ai";
import { FaHome, FaSun, FaMoon } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


function MobileNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const size = 20;
  const [navItems] = useState([
    { name: 'Home', icon: <FaHome size={size} />, path: '/' },
    { name: 'projects', icon: <AiFillAppstore size={size} />, path: '/projects' },
    { name: 'about', icon: <AiFillAppstore size={size} />, path: '/about' },
    { name: 'skills', icon: <AiFillAppstore size={size} />, path: '/skills' },
  ]);
  
  const [isDark, setIsDark] = useState(false);

  const handleNavigation = (path) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(path);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="fixed bottom-0 z-50 h-18 w-10/12 p-3 bg-[var(--text)] flex justify-around gap-2 items-center mb-5 mx-8 rounded-full shadow-lg">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleNavigation(item.path)}
          className={`flex flex-col p-3 rounded-full items-center ${location.pathname === item.path ? 'bg-white dark:bg-background' : 'bg-transparent'}`}
        >
          <span className={location.pathname === item.path ? 'text-text' : 'text-white dark:text-background'}>
            {item.icon}
          </span>
        </button>
      ))}
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center rounded-full w-10 h-10 ${isDark ? 'bg-white' : 'bg-black'} transition duration-300 ease-in-out transform hover:scale-110`}
      >
        {isDark ? <FaSun size={20} color="black" /> : <FaMoon size={20} color="white" />}
      </button>
    </div>
  );
}

export default MobileNavigation;
