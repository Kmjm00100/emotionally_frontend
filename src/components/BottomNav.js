import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollDirection from '../hooks/useScrollDirection';

export default function BottomNav(){
  const loc = useLocation();
  const visible = useScrollDirection();
  return (
    <nav className={`bottom-nav ${visible ? 'visible' : 'hidden'}`}>
      <Link to="/" className={loc.pathname==='/'? 'active':''}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <small>Home</small>
      </Link>
      <Link to="/circles" className={loc.pathname.startsWith('/circles')? 'active':''}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
        <small>Circles</small>
      </Link>
      <Link to="/write" className={loc.pathname==='/write'? 'active':''}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        <small>Write</small>
      </Link>
      <Link to="/search" className={loc.pathname==='/search'? 'active':''}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <small>Search</small>
      </Link>
      <Link to="/profile" className={loc.pathname==='/profile'? 'active':''}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <small>Profile</small>
      </Link>
    </nav>
  );
}
