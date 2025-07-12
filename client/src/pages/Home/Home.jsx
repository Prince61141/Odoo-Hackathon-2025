
import "./Home.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "../../actions/question";


const Home = ({ slideIn }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;