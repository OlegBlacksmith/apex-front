import NavHead from "@/components/NavHead"
import WatchButton from "@/components/WatchButton";
import LegendCards from "@/components/LegendCards";

import { Anton, Oswald, Lato } from "next/font/google";
import BattlePassCards from "@/components/BattlePassCards";

const anton = Anton({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
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
            position: 'relative',
            width: '100vw', 
            height: '100vh',
            backgroundColor: '#F5283D' 
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
            width: '100vw', 
            height: '100vh',
            backgroundColor: '#9F9F9F'
            }}>
            {/* Title */}
            <div className="flex flex-col content-center justify-center">
              <div className="mt-36">
                <h2 className={`${anton.className} text-6xl font-bold uppercase text-[#F3F3F3]`}>
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
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#F5283D'
            }}>
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
              width: '100vw',
              height: '100vh',
              
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#F5283D'
            }}>
            <div className="flex items-center mt-10">
              <div className="mt-20 pr-4">
                <img src="/elements/rect-elem-bpass1.png" alt="rect-elem-bpass" />
              </div>
              <div className="mt-20 ml-[-15%] mr-4">
                <img src="/elements/season-logo.png" alt="season-logo" />
              </div>
              <div className="flex flex-col items-end ml-14">
                <h1 className={`${anton.className} text-7xl text-[#F3F3F3] uppercase text-right -tracking-tighter`}>
                  Buy a new <br />battlepass
                </h1>
                <h2 className={`${lato.className} uppercase text-right text-[#F3F3F3] text-4xl mt-4`}>
                  GET NEW SKINS FOR YOUR <br /> FAVORITE LEGENDS 
                </h2>
                <button className={`${anton.className} text-[#676767] uppercase text-base bg-[#E7E7E7] rounded-sm pl-6 pr-6 pt-3 pb-3 mt-4`}>
                  More Info
                </button>
              </div>
            </div>
            <div className="ml-40">
              <BattlePassCards />
            </div>
          </div>
          {/* Fourth block end */}

          {/* Fifth block start */}

          <div style={{
              backgroundImage: "url('/back-texture/octane-bg.jpg')",
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              width: '100vw',
              height: '100vh',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#F5283D'
            }}>
              <div className="ml-40">
                <h1 className={`${oswald.className} text-[#F3F3F3] text-7xl uppercase`}>
                  SIGN UP FOR <br /> APEX LEGENDS <br /> NEWS
                </h1>
                <p className={`${lato.className} mt-4 text-[#F3F3F3] leading-10 text-2xl`}>
                  Sign up today to receive the latest Apex Legends™ <br /> 
                  news, updates, behind-the-scenes content, offers, and <br /> 
                  more (including other EA news, products, events, and <br />
                  promotions) by email.
                </p>
              </div>
              <div className="flex ml-40 mt-10 gap-6">
                <input type="text" placeholder="Name" className="bg-gray-50/10 border-2 p-1 w-64 text-white placeholder-white" />
                <input type="date" className="bg-gray-50/10 border-2 p-1 w-36 text-white" min="1940-01-01" max="" />
              </div>
              <div className="ml-40 mt-5">
                <input type="text" placeholder="E-mail" className="bg-gray-50/10 border-2 p-1 w-[424px] text-white placeholder-white"/>
              </div>
            </div>

          {/* Fifth block end */}

          {/* Sixth block start */}

          <div style={{
              backgroundImage: "url('/back-texture/octane-bg.jpg')",
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              width: '100vw',
              height: '100vh',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#F5283D'
            }}></div>

          {/* Sixth block end */}
        </div>
      )
};

export default homePage;