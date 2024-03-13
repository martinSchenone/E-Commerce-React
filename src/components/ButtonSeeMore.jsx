export const ButtonSeeMore = ({ buttonSeeMore, limite }) => {
  return (
    <button
      onClick={() => buttonSeeMore()}
      className={`text-lg md:text-2xl mb-40 btn md:btn-wide uppercase self-center bg-[#547e85] text-black border-none hover:opacity-90 hover:scale-90  my-5 ${
        limite == 20 ? "btn-disabled" : ""
      }`}
    >
      See more
    </button>
  );
};
