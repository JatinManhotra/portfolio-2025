const IconBox = ({icon, color, text}) => {
  return (
    <div className="group relative">
  <div
   style={{
  filter: `drop-shadow(0 0 6px ${color})`
}}
  className="w-24 h-24 flex items-center justify-center rounded-full soft-bg-gradient dark:dark-bg-gradient">
    <img
      src={icon}
      alt="icon svg"
      className="w-15 transition-transform duration-300 scale-100 group-hover:scale-110"
    />
  </div>

  <p className="absolute whitespace-nowrap left-[50%] translate-x-[-50%] main-text-color transition-all duration-300 transform group-hover:translate-y-2 group-hover:opacity-100 -translate-y-2 opacity-0">
    {text}
  </p>
</div>

  );
};

export default IconBox;
