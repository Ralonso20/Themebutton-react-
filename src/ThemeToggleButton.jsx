import React, { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.add('view-transition');
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.remove('view-transition');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <button onClick={switchTheme}>Toggle Theme</button>
};

export default ThemeToggleButton;
