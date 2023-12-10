import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/LeaderBigChartBox";
import ChartBox from "../../components/chartBox/LeaderChartBox";
import PieChartBox from "../../components/pieCartBox/LeaderPieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data/leaderData";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* <div className="box box1">
        <TopBox />
      </div> */}
      {/* hàng nhận */}
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>

      {/* hàng giao */}
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>

      {/* tỉ lệ loại hàng */}
      <div className="box box4">
        <PieChartBox />
      </div>

      {/* <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div> */}

      {/* Tổng doanh thu */}
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>

      {/* Hàng nhận tuần này */}
      <div className="box box7">
        <BigChartBox />
      </div>

      {/* <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div> */}

      {/* Doanh thu tuần này */}
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
