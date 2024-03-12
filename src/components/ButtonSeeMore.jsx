export const ButtonSeeMore = ({ buttonSeeMore, limite, setToast }) => {
  return (
    <button
      onClick={() => buttonSeeMore()}
      className="text-lg md:text-2xl btn md:btn-wide uppercase self-center bg-[#547e85] text-black border-none hover:opacity-90 hover:scale-90  my-5"
    >
      See more
    </button>
  );
};
