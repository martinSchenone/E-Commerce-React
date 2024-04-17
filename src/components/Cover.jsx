import cover from "../assets/fati-mohebbi-u-n7DjveEQs-unsplash.jpg";
import "../App.css";
export const Cover = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between ">
      <div className="relative flex justify-center items-end w-full h-[70dvh] md:h-[90dvh] md:w-2/4  ">
        <a
          href="#home"
          className="bg-[#e2ddb4] z-10  xd absolute bottom-10 md:hidden xd rounded text-2xl p-5 font-semibold shadow-xl hover:bg-[#f5eebc] hover:scale-95 transition-all"
        >
          SEE PRODUCTS
        </a>
        <img src={cover} className="img w-full object-cover h-full  " />
      </div>
      <div className="hidden md:flex w-2/4 items-center justify-center h-full relative bgCover  md:h-[90dvh] ">
        <a
          href="#home"
          className="bg-[#e2ddb4] rounded text-2xl p-6 font-semibold shadow-xl hover:bg-[#f5eebc] hover:scale-95 transition-all "
        >
          SEE PRODUCTS NOW
        </a>
      </div>
    </div>
  );
};
