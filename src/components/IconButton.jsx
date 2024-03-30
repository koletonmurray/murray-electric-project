function IconButton ({ href, target, icon, logoColor, color }) {
  return (
    <a href={href} target={target} className="inline-block text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midBlue focus:ring-white">
      <div className="rounded-full w-10 h-10 flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110" style={{backgroundColor: color}}>
        <div style={{color: logoColor}}>
          {icon}
        </div>
      </div>
    </a>
  )
}

export default IconButton;