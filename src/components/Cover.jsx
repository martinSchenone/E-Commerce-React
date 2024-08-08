import cover from "/newHeroFinal.png";

export const Cover = () => {
  return (
    // <div className="flex flex-col md:flex-row items-center justify-center md:justify-center border border-black min-h-screen">
    //   <div className="hidden md:flex bg-[#e2ddb4] rounded text-2xl p-6 font-semibold shadow-xl  hover:bg-[#f5eebc] hover:scale-95 transition-all absolute z-10  ">
    //     <a href="#home" className="animation-btn">
    //       SEE PRODUCTS NOW
    //     </a>
    //   </div>
    //   <div className="relative flex justify-center items-end w-full">
    //     <a
    //       href="#home"
    //       className="bg-[#e2ddb4] z-10 animation-btn absolute bottom-10 md:hidden  rounded text-2xl p-5 font-semibold shadow-xl hover:bg-[#f5eebc] hover:scale-95 transition-all"
    //     >
    //       SEE PRODUCTS
    //     </a>
    //     <img src={cover} className="object-cover" />
    //   </div>
    // </div>
    <div className="flex flex-col items-center border h-full w-full shadow-sm pt-2 pb-4 relative">
      <div className="flex flex-col items-center w-full gap-2 h-full justify-between max-w-[1024px]">
        <img src={cover} className="w-full h-full object-cover max-h-[500px]"  />
        <a
          href="#home"
          className="
          text-center
          bg-[#e2ddb4] 
          md:rounded 
          text-xl
          md:text-2xl 
          p-2
          md:p-4 
          font-semibold 
          shadow-xl 
          hover:bg-[#f5eebc] 
          hover:scale-95 
          transition-all
          w-full"
        >
          SEE PRODUCTS
        </a>
      </div>
    </div>
  );
};
