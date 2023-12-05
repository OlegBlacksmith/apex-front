import Link from 'next/link';
import { Lato, Antonio } from 'next/font/google';

const lato = Lato({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})

const antonio = Antonio({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
  })

const FooterNavUp = () => {
    return(
        <div className={`${lato.className} flex gap-10 text-[#FFFFFF] justify-start ml-40 mt-12 mb-10`}>
            <Link href="/home" className="">
                Home
            </Link>
            <Link href="/about" className="">
                About
            </Link>
            <Link href="/legends" className="">
                Legends
            </Link>
            <Link href="/FAQ" className="">
                FAQ
            </Link>
            <Link href="/news" className="">
                News
            </Link>
            <Link href="/media" className="">
                Media
            </Link>
            <Link href="/pcspecs" className="">
                Home
            </Link>
            <div className={`${antonio.className} ml-[746px]`}>
                <Link href="/joing" className="ml-16">
                    Joing The Conversation
                </Link>
                <img src="/elements/footer-logo-table.png" alt="logo-table" className='mt-4'/>
            </div>
        </div>
    )
}

export default FooterNavUp;