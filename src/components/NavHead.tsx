import Link from 'next/link';
import { Anton, Lato } from 'next/font/google';

const anton = Anton({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap'
})

const NavHead: React.FC = () => {
  return (
    <div className=" bg-red-50/20 rounded-md p-4">
      <div className="max-w-[1536px] mx-8">
        <nav className="mx-auto flex items-center justify-between">
          <Link href="/about">
            <h4 className={`${lato.className} text-[#F9FAF9] mr-6 font-bold text-xl`}>About</h4>
          </Link>
          <Link href="/modes">
            <h4 className={`${lato.className} text-[#F9FAF9] mr-6 font-bold text-xl`}>Modes</h4>
          </Link>
          <Link href="/news">
            <h4 className={`${lato.className} text-[#F9FAF9] mr-6 font-bold text-xl`}>News</h4>
          </Link>
          <Link href="/battle-pass">
            <h4 className={`${lato.className} text-[#F9FAF9] mr-6 font-bold text-xl`}>Battle Pass</h4>
          </Link>
          <Link href="/season">
            <h4 className={`${lato.className} text-[#F9FAF9] mr-6 font-bold text-xl`}>Season</h4>
          </Link>

          <button className='nav-button flex items-center justify-between bg-[#D9D9D9] ml-auto rounded-sm p-1'>
            <div className='flex flex-col items-center justify-center'>
              <span className={`${anton.className} text-[#D43227] font-anton uppercase font-bold mb-0 mt-0`}>Download</span>
              <span className={`${anton.className} text-[#D43227] font-anton uppercase font-bold mb-0 mt-0`}>Free</span>
            </div>
              <img className='ml-2' src="/icons/download-icon.svg" alt="download" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavHead;