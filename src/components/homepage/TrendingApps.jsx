import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";

const TrendingApps = () => {

  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();

      console.log(data);
      setApps(data);
    };

    fetchData();

  }, []);

  console.log(apps, 'apps');

  return (
    <div className="container mx-auto my-14">

      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending Apps</h2>

        <p className="text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <h2>Total apps: {apps.length}</h2>

      <div className="grid grid-cols-3 gap-5">
        {
          apps.map((app) => {
            return (
              <div key={app.id} className="card bg-base-100 w-96 shadow-sm">

                <figure>
                  <img
                    src={app.image}
                    alt={app.title}
                  />
                </figure>

                <div className="card-body">

                  <h2 className="card-title">
                    {app.title}
                  </h2>

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
            )
          })
        }
      </div>

    </div>

    
  );
};

export default TrendingApps;