const Pagination = () => {
  return (
    <div className="p-[10px] flex justify-between">
      <button
        disabled
        className="px-[10px] py-[5px] cursor-pointer disabled:cursor-not-allowed border border-solid rounded-[5px] text-[12px] transition-all hover:bg-white hover:text-black disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-dashed disabled:hover:text-opacity-60"
      >
        Previous
      </button>
      <button className="px-[10px] py-[5px] cursor-pointer disabled:cursor-not-allowed border border-solid rounded-[5px] text-[12px] transition-all hover:bg-white hover:text-black disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-dashed disabled:hover:text-opacity-60">
        Next
      </button>
    </div>
  );
};

export default Pagination;
