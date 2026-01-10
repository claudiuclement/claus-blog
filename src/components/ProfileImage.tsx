"use client";

import Image from "next/image";
import { useState } from "react";

const funnyMessages = [
  "Nice try! This face is not for download.",
  "Looking for a profile pic? Try LinkedIn instead!",
  "Error 418: I'm a teapot, not a photo booth.",
  "This image is protected by advanced laziness.",
  "You wouldn't download a car... or would you?",
];

export default function ProfileImage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <Image
        src="/profile.jpg"
        alt="Claudiu Clement"
        width={150}
        height={150}
        className="profile-image"
        onContextMenu={handleContextMenu}
        draggable={false}
      />
      {showPopup && (
        <div className="profile-popup">
          {funnyMessages[Math.floor(Math.random() * funnyMessages.length)]}
        </div>
      )}
    </>
  );
}
