import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
import useApps from "../../hooks/useApps";

const Apps = () => {
    const obj = useApps();
    console.log(obj, 'use apps hook')

  // if (loading) {
  //   return (
  //     <div className="text-center mt-10 text-lg font-semibold">
  //       Loading...
  //     </div>
  //   );
  // }

  return (
    <div>
         <div className="mb-8 text-center my-5 ">
        <h2 className="font-bold text-4xl">Our All Applications</h2>

        <p className="text-gray-600">
         Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto">
        
      {apps.map((app) => (
        <div key={app.id} className="card bg-base-100 w-96 shadow-sm">

          <figure>
            <img
              src={app.image}
              alt={app.title}
              className="h-[200px] w-[200px] object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{app.title}</h2>

            <div className="flex justify-between items-center gap-4">
              <span className="bg-green-100 text-green-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
                <FiDownload />
                {app.downloads}
              </span>

              <span className="bg-orange-100 text-orange-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
                <IoMdStar />
                {app.ratingAvg}
              </span>
            </div>

          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Apps;