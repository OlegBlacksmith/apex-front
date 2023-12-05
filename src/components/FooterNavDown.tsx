import Link from "next/link"

const FooterNavDown = () => {
    return(
        <div className="flex flex-col items-start gap-2 text-[#FFFFFF] justify-start ml-40">
            <div className="flex gap-10 mb-16">
                <Link href="/Legal & Privacy" className="">
                    Legal & Privacy
                </Link>
                <Link href="/UserAgreement" className="">
                    User Agreement
                </Link>
                <Link href="/CookiePolicy" className="">
                    Cookie Policy
                </Link>
                <Link href="/Support" className="">
                    Support
                </Link>
            </div>
            <div className="flex gap-10 mb-16">
                <img src="/elements/apex-logo.png" alt="apex-logo" />
                <div className="max-w-full h-auto bott">
                    <img src="/elements/respawn-logo.png" alt="respawn-logo" />
                </div>
            </div>
        </div>
    )
};

export default FooterNavDown;