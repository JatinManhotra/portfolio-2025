import { FaArrowRightLong } from "react-icons/fa6";

const CertificatesCard = ({item}) => {
  return (
    <div className="soft-bg-gradient card-shadow dark:dark-bg-gradient card-border flex flex-col items-start justify-between rounded-lg p-4 text-justify sm:p-6">
    
          <div>   
            {/* project image */}
            <div className="group overflow-hidden rounded-lg">
              <img
                className="scale-100 group-hover:scale-[1.02]"
                src={item.img}
                alt={item.name}
              />
            </div>
    
            {/* project title and description */}
            <h1 className="mt-4 text-lg font-bold sm:text-xl">{item.name}</h1>
            <h2 className="italic text-base lg:text-lg orange-text">{item.date}</h2>
            <h3 className="subtext-color mt-4 h-fit text-sm sm:text-base">
              {item.description}
            </h3>
    
          </div>
    
          <div className="mt-4 flex items-center justify-between gap-4">
    
            {/* live demo button */}
            {item?.url && (
              <a className="group" target="_blank" href={item.url}>
                <button
                  aria-label="Certificate Link"
                  className="custom-btn dark-btn dark:light-btn"
                >
                  Certificate Link{" "}
                  <FaArrowRightLong className="group-hover:translate-x-2" />
                </button>
              </a>
            )}    
          </div>
        </div>
  )
}

export default CertificatesCard