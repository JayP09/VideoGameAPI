import VideoGameAPI from "./pages/VideoGameAPI"
import LatestDeals from "./pages/LatestDeals"

function App() {
  return (
    <div className="flex flex-col justify-center items-center md:h-screen">
      <VideoGameAPI />
      <LatestDeals />
    </div>
  );
}

export default App;