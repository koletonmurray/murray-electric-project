import React from "react";

export default function IconButton ({ href, target, icon, logoColor, color }) {
  <a href={href} target={target} className="text-xl" style={{color: logoColor}}>
    <div className="rounded-[50%] w-10 aspect-square flex items-center justify-center" style={{backgroundColor: color}}>
      {icon}
    </div>
  </a>
}