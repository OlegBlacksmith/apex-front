import { Anton } from "next/font/google";

const anton = Anton({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const LegendCards = () => {
    return(
        <div className="flex items-baseline space-x-6 ml-52 mr-52">
            <div className="mt-6">
                <img src="/avatars/avatar-bh.png" alt="Avatar-bh" className="inline-block align-bottom" />
                <h2 className={`${anton.className} text-[#F3F3F3] text-center mt-2 uppercase`}>BloodHound</h2>
                <button className="">

                </button>
            </div>
            <div className="mt-6">
                <img src="/avatars/avatar-banga.png" alt="Avatar-banga" className="inline-block align-bottom" />
                <h2 className={`${anton.className} text-[#F3F3F3] text-center mt-2 uppercase`}>bangalore</h2>
            </div>
            <div className="mt-6">
                <img src="/avatars/avatar-path.png" alt="Avatar-path" className="inline-block align-bottom" />
                <h2 className={`${anton.className} text-[#F3F3F3] text-center mt-2 uppercase`}>pathfinder</h2>
            </div>
            <div className="mt-6">
                <img src="/avatars/avatar-octane.png" alt="Avatar-octane" className="inline-block align-bottom" />
                <h2 className={`${anton.className} text-[#F3F3F3] text-center mt-2 uppercase`}>octane</h2>
            </div>
            <div className="mt-6">
                <img src="/avatars/avatar-rafe.png" alt="Avatar-rafe" className="inline-block align-bottom" />
                <h2 className={`${anton.className} text-[#F3F3F3] text-center mt-2 uppercase`}>rafe</h2>
            </div>
        </div>
    )
}

export default LegendCards;