import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ReplayVideoPlayer from "../Components/ReplayVideoPlayer";

function Replay({ comments }) {
    return (
        <>
            <Navbar />
            <div className="replay-page">
                <ReplayVideoPlayer comments={comments} url={'https://youtu.be/JGwWNGJdvx8?si=jdGa77rbmtMfcshN'} />
            </div>
            <Footer />
        </>
    )
}

export default Replay;