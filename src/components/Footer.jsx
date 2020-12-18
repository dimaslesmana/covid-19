import React from 'react';

const Footer = () => {
  return (
    <div className="Root">
      <div className="Footer">
        <p>
          &copy; {new Date().getFullYear()} · Kelompok Jeruk · All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;