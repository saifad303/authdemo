import { ArrowCircleDownIcon } from "@heroicons/react/outline";
function TableHead() {
  return (
    <thead>
      <tr>
        <th className=" w-[40px]">
          <input
            type="checkbox"
            id="allData"
            name="all"
            className=" h-6 w-6 drop-shadow-md"
          />
        </th>
        <th>
          <div className="flex items-center space-x-1 h-14 justify-center">
            <div className="h-full w-2 " />
            <p>Request No</p>
            <ArrowCircleDownIcon className="h-4" />
          </div>
        </th>
        <th>
          <div className="flex items-center space-x-1 justify-center">
            <p>Area</p>
            <ArrowCircleDownIcon className="h-4" />
          </div>
        </th>
        <th>
          <div className="flex items-center space-x-1 justify-center">
            <p>Date</p>
            <ArrowCircleDownIcon className="h-4" />
          </div>
        </th>
        <th>
          <div className="flex items-center space-x-1 justify-center">
            <p>Need Date</p>
            <ArrowCircleDownIcon className="h-4" />
          </div>
        </th>
        <th>
          <div className="flex items-center space-x-1 justify-center">
            <p>Price</p>
            <ArrowCircleDownIcon className="h-4" />
          </div>
        </th>
        <th>
          <div className="flex items-center space-x-1 justify-center">
            <p>Total</p>
            <ArrowCircleDownIcon className="h-4" />
          </div>
        </th>
        <th>
          <div className="flex items-center space-x-1 justify-center">
            <p>Products</p>
            <ArrowCircleDownIcon className="h-4" />
          </div>
        </th>
        <th>
          <p>Actions</p>
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
