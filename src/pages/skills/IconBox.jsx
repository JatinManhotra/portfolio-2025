const IconBox = ({ icon, color, text }) => {
  return (
    <div className="group relative h-25 sm:h-30">

      {/* container with colored shadow */}
      <div
        style={{
          filter: `drop-shadow(0 0 6px ${color})`,
        }}
        className="soft-bg-gradient dark:dark-bg-gradient flex h-18 w-18 items-center justify-center rounded-full sm:h-24 sm:w-24"
      >

        {/* Icon svg */}
        <img
          src={icon}
          alt="icon svg"
          className="w-12 scale-100 transition-transform duration-300 group-hover:scale-110 sm:w-15"
        />

      </div>

        {/* Logo Name */}
      <p className="main-text-color absolute left-[50%] mt-4 w-30 translate-x-[-50%] text-center text-sm transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-100 sm:text-base xl:mt-0 xl:w-fit xl:-translate-y-2 xl:whitespace-nowrap xl:opacity-0">
        {text}
      </p>

    </div>
  );
};

export default IconBox;
