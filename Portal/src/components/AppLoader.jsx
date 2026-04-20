import './AppLoader.css';

const AppLoader = () => {
  return (
    <div className="app-loader-overlay">
      <div className="app-loader">
        <div className="spinner">
          <div className="spinner-ring spinner-ring-1"></div>
          <div className="spinner-ring spinner-ring-2"></div>
          <div className="video-container">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="loader-video"
            >
              <source src="/Loader.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLoader;

