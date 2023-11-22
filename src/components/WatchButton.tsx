'use client'
import { Anton } from "next/font/google";

const anton = Anton({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const WatchButton: React.FC = () => {
    return(
        <div className="">
            <button className="flex content-center items-center bg-[#F5F0F0] rounded-sm p-2">
                <h2 className={`${anton.className} uppercase text-[#DD4434] text-lg font-bold`}>
                    Watch Gameplay Trailer
                </h2>
                <img className="ml-2" src="/icons/play-rect.svg" alt="Play" />
            </button>
        </div>
    )
}

export default WatchButton;