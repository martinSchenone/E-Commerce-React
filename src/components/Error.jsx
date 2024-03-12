export const Error = ({ error }) => {
  return (
    <div>
      <h1 className="text-center place-self-center text-2xl font-bold pt-10">
        {error.errorMessage}
      </h1>
    </div>
  );
};
