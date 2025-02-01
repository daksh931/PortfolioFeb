import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, Briefcase, Layers, Mail } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-sm fixed w-full z-10 bg-gray-200">

            <div className="container mx-auto px-6 py-3 sm:flex justify-between   ">
                <div className="container mx-auto px-6 py-3 flex justify-between align-middle self-center ">
                    <div className="">
                        <Link to="/" className="text-2xl font-bold text-gray-800">
                            Brand
                        </Link>
                    </div>

                    <div className="sm:hidden flex items-center ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 focus:outline-none "
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center ">
                    <div className="hidden sm:block">

                        <div className="sm:flex  flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 hidden whitespace-nowrap  ">

                            <Link
                                to="/"
                                className="flex items-center z-10 text-gray-700 relative group p-2"
                            >
                                <span className="mr-2 z-100"> <Home /> </span>
                                <span className="relative z-100 group-hover:text-black transition-all duration-200">
                                    Home
                                    {/* Background color grows from bottom to top */}
                                    <span className="absolute bottom-0 left-0 w-full h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-600">
                                    </span>
                                </span>
                            </Link>

                            <Link to="/" className="flex items-center text-gray-700 hover:text-gray-900">
                                <Home className="mr-2" /> Home
                            </Link>
                            <Link to="/about" className="flex items-center text-gray-700 hover:text-gray-900">
                                <Info className="mr-2" /> About Us
                            </Link>
                            <Link to="/services" className="flex items-center text-gray-700 hover:text-gray-900">
                                <Briefcase className="mr-2" /> Our Services
                            </Link>
                            <Link to="/work" className="flex items-center text-gray-700 hover:text-gray-900">
                                <Layers className="mr-2" /> Our Work
                            </Link>
                            <Link to="/contact" className="flex items-center text-gray-700 hover:text-gray-900">
                                <Mail className="mr-2" /> Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <div className={`absolute top-16 left-0 w-full bg-white shadow-sm transition-transform transform 
                    ${isOpen ? "translate-y-0" : "-translate-y-full"} sm:hidden`}> */}
                <div className={`${isOpen ? "block" : "hidden"} flex sm:hidden items-center`}>
                    <div className="flex flex-col justify-between h-full p-6 space-y-4">
                        <Link to="/" className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full">
                            <span className="flex items-center space-x-3">
                                <span className="flex items-center justify-center w-6 h-6"><Home /></span>
                                <span>Home</span>
                            </span>
                        </Link>
                        <Link to="/about" className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full">
                            <span className="flex items-center space-x-3">
                                <span className="flex items-center justify-center w-6 h-6"><Info /></span>
                                <span>About Us</span>
                            </span>
                        </Link>
                        <Link to="/services" className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full">
                            <span className="flex items-center space-x-3">
                                <span className="flex items-center justify-center w-6 h-6"><Briefcase /></span>
                                <span>Our Services</span>
                            </span>
                        </Link>
                        <Link to="/work" className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full">
                            <span className="flex items-center space-x-3">
                                <span className="flex items-center justify-center w-6 h-6"><Layers /></span>
                                <span>Our Work</span>
                            </span>
                        </Link>
                        <Link to="/contact" className="flex justify-between items-center text-gray-700 hover:text-gray-900 text-lg w-full">
                            <span className="flex items-center space-x-3">
                                <span className="flex items-center justify-center w-6 h-6"><Mail /></span>
                                <span>Contact Us</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
