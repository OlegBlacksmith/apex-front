import NavHead from "@/components/NavHead"
import WatchButton from "@/components/WatchButton";
import LegendCards from "@/components/LegendCards";
import FooterNavUp from "@/components/FooterNavUp";
import FooterNavDown from "@/components/FooterNavDown";

import Link from 'next/link';

import { Anton, Oswald, Lato, Antonio, Anybody } from "next/font/google";
import BattlePassCards from "@/components/BattlePassCards";

const anybody = Anybody({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

const antonio = Antonio({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

const anton = Anton({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
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
            <div className="flex flex-col items-center justify-center text-center">
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
            <div className="flex items-center">
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
              backgroundColor: '#F5283D',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <div className="ml-40 mt-36">
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

          {/* Prefooter block start */}

          <div style={{
              backgroundImage: "url('/back-texture/bg-prefooter.png')",
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#F5283D',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Link href="/about" className=" mt-16">
                <img src="/elements/pfooter-logo-table.png" alt="pfooter-logo" />
              </Link>
              <h1 className={`${antonio.className} uppercase text-5xl text-[#F3F3F3] mt-7`}>
                PLAY FOR FREE* ON ALL OF PLATFORMS!
              </h1>
              <h3 className={`${lato.className} text-[#F3F3F3] text-3xl leading-10 mt-7`}>
                On PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch, and PC via EA App and Steam
              </h3>
              <button className={`${anybody.className} text-lg text-center uppercase text-[#FFFFFF] bg-[#B02C2F] rounded-sm pl-4 pr-4 pt-2 pb-2 mt-7 mb-28`}>
                Play for Free*
              </button>
            </div>

          {/* Prefooter block end */}

          {/* Footer block start */}

          <div style={{
              backgroundImage: "url('/back-texture/bg-footer.png')",
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#F5283D',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <FooterNavUp />
              <hr className=" border-0 bg-white h-8" />
              <div>
                <FooterNavDown />
              </div>
            </div>

          {/* Footer block end */}
        </div>
      )
};

export default homePage;