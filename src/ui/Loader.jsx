function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm flex-col">
      <div className="loader"></div>
      <div className="font-semibold">Loading....</div>
    </div>
  );
}

export default Loader;
