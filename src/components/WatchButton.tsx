'use client'

const WatchButton: React.FC = () => {
    return(
        <div className="">
            <button className="flex content-center items-center bg-[#D9D9D9] rounded-sm p-2">
                <span className="text-[#DD4434] font-anton text-lg font-bold">
                    Watch Gameplay Trailer
                </span>
                <img className="ml-2" src="/icons/play-rect.svg" alt="Play" />
            </button>
        </div>
    )
}

export default WatchButton;