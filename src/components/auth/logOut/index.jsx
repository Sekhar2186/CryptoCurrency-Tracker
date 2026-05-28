import React from 'react';
import { doSignOut } from '../../../firebase/auth';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await doSignOut();
      alert('Logged out successfully!');
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to log out. Please try again.');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#2a2d35] text-[#9ca3af] hover:text-[#f94141] hover:border-[#f94141]/40 hover:bg-[#f94141]/8 transition-all duration-200 cursor-pointer bg-transparent text-sm font-semibold"
    >
      <LogoutRoundedIcon sx={{ fontSize: "1.1rem" }} />
      <span className="hidden lg:inline">Logout</span>
    </button>
  );
};

export default LogoutButton;
