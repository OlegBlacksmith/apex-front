import { Lato } from "next/font/google";
import { Anton } from "next/font/google";

const lato = Lato({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})

const anton = Anton({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const BattlePassCards = () => {
    return(
        <div className="flex items-end mt-3 gap-1">
            <div className=" origin-top-left -rotate-90 -mr-20 ">
                <h3 className={`${lato.className} text-[#F3F3F3] uppercase text-2xl`}>
                    Premium
                </h3>
            </div>
            <img src="/elements/bpass-sq-tt.png" alt="tripletake" />
            <img src="/elements/bpass-sq-banga.png" alt="bangalore" />
            <img src="/elements/bpass-sq-path.png" alt="pathfinder" />
            <img src="/elements/bpass-sq-r301.png" alt="r301rifle" />
            <img src="/elements/bpass-sq-bh.png" alt="bloodhound" />
            <img src="/elements/bpass-sq-lifeline.png" alt="lifeline" />
            <button className=" bg-[#f32020e3] rounded-lg ml-20 pl-24 pr-24 pt-10 pb-10">
                <h2 className={`${anton.className} uppercase text-[#F3F3F3] text-8xl`}>
                    Buy Now
                </h2>
            </button>
        </div>
    )
}

export default BattlePassCards;