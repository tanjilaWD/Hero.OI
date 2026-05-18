import { useLoaderData } from "react-router";
import Banner from "../../components/homepage/Banner";
import Stats from "../../components/homepage/Stats";
import TrendingApps from "../../components/homepage/TrendingApps";


const HomePage = () => {
    const data = useLoaderData();
    console.log(data, 'data from home page')
    return (
        <div>
           <Banner/>
           <Stats/>
           <TrendingApps/>
        </div>
    );
};

export default HomePage;