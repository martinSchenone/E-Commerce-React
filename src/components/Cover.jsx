import cover from "../assets/fati-mohebbi-u-n7DjveEQs-unsplash.jpg";

export const Cover = () => {
  return (
    <div className="shadow-xl cover flex flex-col md:flex-row border min-h-[80dvh] flex-wrap flex-grow-1">
      <div className="flex-1">
        <img
          src={cover}
          className="md:h-full h-96 w-full  object-cover rounded-tl rounded-bl"
        />
      </div>
      <div className="p-2 py-10 flex-[2]  text-white bg-[rgb(21,27,49)] bg-[linear-gradient(180deg,rgba(21,27,49,1)_0%,rgba(30,120,129,1)_100%)] text-3xl pt-10 md:text-5xl rounded-tr rounded-br text-center flex items-center justify-center  flex-col gap-10">
        <h1 className="border-b-2 uppercase  ">fall season</h1>
        <p className="text-2xl md:text-3xl uppercase">50% off in wallets and hoodies</p>
        <a
          href="#home"
          className="text-lg md:text-2xl btn md:btn-wide uppercase bg-[#03343b] text-white border-none hover:opacity-70 hover:scale-90 hover:bg-inherit "
        >
          See now
        </a>
      </div>
    </div>
  );
};
