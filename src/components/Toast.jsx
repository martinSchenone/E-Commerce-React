export const Toast = ({children}) => {
  return (
    <div className="toast toast-center toast-middle text-xl ">
      <div className="alert alert-success text-slate-50 font-semibold tracking-wide">
        <span>{children}</span>
      </div>
    </div>
  );
};
