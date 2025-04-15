function Feature({ imgSrc, alt, title, text }) {
  return (
    <div className="flex flex-col flex-1 p-10">
      <img src={imgSrc} alt={alt} className="flex w-[152px] border-[10px] self-center border-[#00bc77] rounded-full p-4" />
      <h3 className="text-[#222] text-xl font-bold mt-[20px] mb-2 ">{title}</h3>
      <p className="my-[16px]">{text}</p>
    </div>
  );
}

export default Feature;