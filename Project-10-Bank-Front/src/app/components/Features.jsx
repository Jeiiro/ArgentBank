import PropTypes from "prop-types";

function Feature({ imgSrc, alt, title, text }) {
  return (
    <div className="flex flex-col flex-1 p-6 md:p-10">
      <img src={imgSrc} alt={alt} className="w-[100px] md:w-[152px] border-[10px] self-center border-[#00bc77] rounded-full p-4" />
      <h3 className="text-[#222] text-lg md:text-xl font-bold mt-4 md:mt-[20px] mb-2">{title}</h3>
      <p className="my-3 md:my-[16px] text-sm md:text-base">{text}</p>
    </div>
  );
}

Feature.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feature;