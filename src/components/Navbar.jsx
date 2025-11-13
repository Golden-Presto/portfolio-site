import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header>
      <div className="nav-toggle" onClick={toggleNav}>☰</div>

      <nav className="navbar"> 
        <a href="#home" onClick={closeNav}>Home</a>
        <a href="#about" onClick={closeNav}>About</a>
        <a href="#projects" onClick={closeNav}>Projects</a>
        <a href="#resume" onClick={closeNav}>Resume</a>
        <a href="#contact" onClick={closeNav}>Contact</a>
      </nav>

      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeNav}>Home</a>
        <a href="#about" onClick={closeNav}>About</a>
        <a href="#projects" onClick={closeNav}>Projects</a>
        <a href="#resume" onClick={closeNav}>Resume</a>
        <a href="#contact" onClick={closeNav}>Contact</a>
      </div>
    </header>
  );
}

export default Navbar;