import { Link } from 'react-router-dom';
import babulakterfsd from '../../assets/images/babulakterfsd.jpg';
import Search from './Search';

export default function Navbar() {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
                <Link to="/">
                    <span className="flex items-center space-x-2">
                        <img className="h-10 rounded-full" src={babulakterfsd} alt="Babul Akter" />
                        <span className="font-semibold text-sm text-blue-900">
                            Learn With Babul
                        </span>
                    </span>
                </Link>
                <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
                    <Search />
                </div>
            </div>
        </nav>
    );
}
