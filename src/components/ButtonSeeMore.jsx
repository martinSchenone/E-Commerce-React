export const ButtonSeeMore = ({ buttonSeeMore, limite }) => {
  return (
    <button
      onClick={() => buttonSeeMore()}
      className={`text-lg md:text-2xl mb-40 btn md:btn-wide uppercase self-center bg-[#1d5d68] text-slate-50 border-none hover:opacity-90 hover:scale-90  my-5 ${
        limite == 20 ? "btn-disabled" : ""
      }`}
    >
      See more
    </button>
  );
};
