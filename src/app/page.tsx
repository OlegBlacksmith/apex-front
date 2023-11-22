import NavHead from "@/components/NavHead"
import WatchButton from "@/components/WatchButton";

const homePage = () => {
      return (
        <div>
          {/* first block start */}
          <div style={{
            backgroundImage: "url('/back-texture/header-pic-1.jpg')", 
            backgroundSize: 'cover', backgroundPosition: 'center',
            width: '100vw', 
            height: '100vh' 
            }}>
            <div>
              <NavHead />
            </div>
            <div className="flex content-center justify-center mt-[650px]">
              <WatchButton />
            </div>
          </div>
          {/* first block end */}
          
          {/* Second block start */}
          <div style={{
            backgroundImage: "url('/back-texture/header-pic-1.jpg')", 
            backgroundSize: 'cover', backgroundPosition: 'center',
            width: '100vw', 
            height: '100vh'
            }}>
            <div className="flex flex-col content-center justify-center">
              <div className="mt-64">
                <h2 className="font-anton text-6xl font-bold uppercase text-[#F3F3F3] text-center">
                  Choose Your fighter and become an
                </h2>
                <h2 className="font-anton text-6xl font-bold uppercase text-[#F3F3F3] text-center">
                  apex legend
                </h2>
              </div>
            </div>
          </div>
          {/* Second block end */}
        </div>
      )
};

export default homePage;