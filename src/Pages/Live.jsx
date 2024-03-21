import Navbar from "../Components/Navbar";
import LiveVideoPlayer from "../Components/LiveVideoPlayer";
import Footer from "../Components/Footer";

function Live({ comments, setComments }) {
    return (
        <>
            <Navbar />
            <div className="live-page">
                <LiveVideoPlayer comments={comments} setComments={setComments} url={'https://youtu.be/JGwWNGJdvx8?si=jdGa77rbmtMfcshN'} />
            </div>
            <Footer />
        </>
    )
}

export default Live;