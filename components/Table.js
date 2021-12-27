import TableBody from "./TableBody";
import TableHead from "./TableHead";
function Table() {
  return (
    <div className="overflow-x-auto h-full mt-4">
      <table className=" relative text-sm w-[1000px] h-full lg:w-full text-center border-collapse lg:table-fixed">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
