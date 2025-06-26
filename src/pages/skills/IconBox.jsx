const IconBox = ({icon, color, text}) => {
  return (
    <div className="group relative h-25">
  <div
   style={{
  filter: `drop-shadow(0 0 6px ${color})`
}}
  className="w-18 h-18 sm:w-24 sm:h-24 flex items-center justify-center rounded-full soft-bg-gradient dark:dark-bg-gradient">
    <img
      src={icon}
      alt="icon svg"
      className="w-12 sm:w-15 transition-transform duration-300 scale-100 group-hover:scale-110"
    />
  </div>

  <p className="absolute mt-4 sm:mt-0 text-sm sm:text-base w-30 text-center sm:w-fit sm:whitespace-nowrap  left-[50%] translate-x-[-50%] main-text-color transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100 sm:-translate-y-2 sm:opacity-0">
    {text}
  </p>
</div>

  );
};

export default IconBox;
