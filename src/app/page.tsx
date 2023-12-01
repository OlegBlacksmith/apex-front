import NavHead from "@/components/NavHead"
import WatchButton from "@/components/WatchButton";
import LegendCards from "@/components/LegendCards";

import { Anton, Oswald } from "next/font/google";
import BattlePassCards from "@/components/BattlePassCards";

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
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100vw', 
            height: '100vh' 
            }}>
            <div className="pt-2">
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
              <div className="mt-36">
                <h2 className={`${anton.className} text-6xl font-bold uppercase text-[#F3F3F3] text-center`}>
                  Choose Your fighter and become an <span className="block">apex legend</span>
                </h2>
              </div>
            </div>
            {/* Title end */}
            <div>
              <LegendCards />
            </div>
          </div>
          {/* Second block end */}

          {/* Third block start */}

          <div style={{
            backgroundImage: "url('/back-texture/bg-third.png')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            position: 'relative',
            width: '100vw', 
            height: '100vh',
            backgroundRepeat: 'no-repeat'}}>
              <div className="flex flex-col justify-center h-screen ml-56 w-[648px] mb-[616px]">
                <h1 className={`${oswald.className} font-semibold text-9xl text-[#F3F3F3] uppercase text-center`}>
                  Apex <span className="block">new season</span> event
                </h1>
                <div>
                  <img src="/elements/bloodhound-table.png" alt="bh-table" className="mt-6" />
                </div>
                <button className={`${anton.className} bg-[#E7E7E7] text-[#952115] uppercase p-3 rounded-sm mt-6 min-w-[150px] text-xl mx-auto`}>
                    show more
                </button>
              </div>
          </div>
          {/* Third block end */}

          {/* Fourth block start */}

          <div style={{
              backgroundImage: "url('/back-texture/bg-fourth.png')",
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              backgroundRepeat: 'no-repeat',
            }}>
            <div className="flex items-center">
              <div className="mt-20 pr-4">
                <img src="/elements/rect-elem-bpass1.png" alt="rect-elem-bpass" />
              </div>
              <div className="mt-20 ml-[-15%] mr-4">
                <img src="/elements/season-logo.png" alt="season-logo" />
              </div>
              <h1 className={`${anton.className} text-7xl text-[#F3F3F3]`}>
                Buy a new battlepass
              </h1>
            </div>
            <div className="ml-40">
              <BattlePassCards />
            </div>
          </div>
          {/* Fourth block end */}
        </div>
      )
};

export default homePage;