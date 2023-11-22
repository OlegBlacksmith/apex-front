import NavHead from "@/components/NavHead"
import WatchButton from "@/components/WatchButton";
import LegendCards from "@/components/LegendCards";

import { Anton, Oswald } from "next/font/google";

const anton = Anton({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const oswald = Oswald({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

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
            backgroundImage: "url('/back-texture/bg-second.png')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            position: 'relative',
            width: '100vw', 
            height: '100vh'}}>
            {/* Title */}
            <div className="flex flex-col content-center justify-center">
              <div className="mt-48">
                <h2 className={`${anton.className} text-6xl font-bold uppercase text-[#F3F3F3] text-center`}>
                  Choose Your fighter and become an
                </h2>
                <h2 className={`${anton.className} text-6xl font-bold uppercase text-[#F3F3F3] text-center mt-2`}>
                  apex legend
                </h2>
              </div>
            </div>
            {/* Title */}

            {/* Avatar */}
            <div>
              <LegendCards />
            </div>
            {/* Avatar */}

          </div>
          {/* Second block end */}

          {/* Third block start */}

          <div style={{
            backgroundImage: "url('/back-texture/bg-third.png')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            position: 'relative',
            width: '100vw', 
            height: '100vh'}}>
              <div className="flex flex-col justify-center h-screen ml-10">
                <p className={`${oswald.className} font-semibold text-9xl text-[#F3F3F3] uppercase`}>
                  Apex
                </p>
                <p className={`${oswald.className} font-semibold text-9xl text-[#F3F3F3] uppercase`}>
                  New season
                </p>
                <p className={`${oswald.className} font-semibold text-9xl text-[#F3F3F3] uppercase`}>
                  Event
                </p>
              </div>
          </div>

          {/* Third block end */}
        </div>
      )
};

export default homePage;