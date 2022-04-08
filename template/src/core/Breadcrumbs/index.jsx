import { ChevronRight } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RouteContext from "../../contexts/route";
import useBreadcrumb from "../../hooks/use-breadcrumbs";

const Breadcrumb = () => {
  const route = useContext(RouteContext);
  const elements = useBreadcrumb();
  return (
    <div className="flex justify-center items-center gap-0">
      {elements.map((el, idx) => (
        <div
          key={idx.toString()}
          className={` p-1 text-sm flex justify-start items-center font-semibold gap-2 text-gray-500`}
        >
          <Link
            to={el.path}
            className="flex items-baseline gap-1 hover:text-blue-600"
          >
            {<el.icon className="w-4 h-4" />}
            {el.name}
          </Link>
          {idx < elements.length && (
            <span>
              <ChevronRight className="w-4 h-4" />
            </span>
          )}
        </div>
      ))}
      <span className="p-1 text-sm font-semibold text-blue-700 italic">
        {route?.name}
      </span>
    </div>
  );
};
export default Breadcrumb;
