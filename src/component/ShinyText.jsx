/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useEffect, useState } from 'react';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Update theme state when the theme is toggled
  useEffect(() => {
    const handleThemeChange = () => {
      const savedTheme = localStorage.getItem('theme');
      setIsDark(savedTheme === 'dark');
    };

    window.addEventListener('themeChange', handleThemeChange);
    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  const animationDuration = `${speed}s`;

  // Set gradient based on the theme
  const gradient = isDark
    ? 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)'  // Dark mode gradient
    : 'linear-gradient(120deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 60%)';  // Light mode gradient

  return (
    <div
      className={`dark:text-[#b5b5b5a4]   text-[#00000066] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
