// Navigation.tsx
import { Anton } from 'next/font/google';
import Link from 'next/link';

const NavHead: React.FC = () => {
  return (
    <div className="bg-red-50/50 rounded-md p-4">
      <div className="max-w-[1536px] mx-auto">
        <nav className="mx-auto flex items-center justify-between">
          <Link href="/about">
            <h4 className="text-white mr-6">About</h4>
          </Link>
          <Link href="/modes">
            <h4 className="text-white mr-6">Modes</h4>
          </Link>
          <Link href="/news">
            <h4 className="text-white mr-6">News</h4>
          </Link>
          <Link href="/battle-pass">
            <h4 className="text-white mr-6">Battle Pass</h4>
          </Link>
          <Link href="/season">
            <h4 className="text-white">Season</h4>
          </Link>
          <button className='nav-button flex items-center justify-between bg-[#D9D9D9] ml-auto rounded-sm p-1'>
            <div className='flex flex-col items-center justify-center'>
              <span className='text-[#D43227] font-anton uppercase font-bold mb-0'>Download</span>
              <span className='text-[#D43227] font-anton uppercase font-bold mb-0'>Free</span>
            </div>
              <img className='ml-2' src="/icons/download-icon.svg" alt="download" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavHead;