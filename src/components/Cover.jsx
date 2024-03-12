import cover from "../assets/fati-mohebbi-u-n7DjveEQs-unsplash.jpg";

export const Cover = () => {
  return (
    <div className="cover flex flex-col md:flex-row border min-h-[30vh] flex-wrap flex-grow-1">
      <div className="flex-1 ">
        <img
          src={cover}
          className="md:h-full h-96 w-full  object-cover rounded-tl rounded-bl"
        />
      </div>
      <div className="p-2 py-10 flex-[2]  text-white bg-slate-700 text-3xl pt-10 md:text-5xl rounded-tr rounded-br text-center flex items-center justify-center  flex-col gap-10">
        <h1 className="border-b-2 uppercase  ">fall season</h1>
        <p className="text-2xl md:text-3xl">50% off in wallets and hoodies</p>
        <a
          href="#home"
          className="text-lg md:text-2xl btn-sm btn md:btn-md bg-slate-400 border-none uppercase"
        >
          See now
        </a>
      </div>
    </div>
  );
};
