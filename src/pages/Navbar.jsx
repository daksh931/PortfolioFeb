import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, Briefcase, Layers, Mail } from "lucide-react";
import Logo from "../assets/Logo.png"


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { path: "/", label: "Home", icon: <Home /> },
        { path: "/about", label: "About Us", icon: <Info /> },
        { path: "/services", label: "Our Services", icon: <Briefcase /> },
        { path: "/work", label: "Our Work", icon: <Layers /> },
        { path: "/contact", label: "Contact Us", icon: <Mail /> },
    ];
    return (
        <div className="sticky top-0 z-10">

        <nav className="shadow-sm   w-full z-10 bg-gray-200">

            <div className="container mx-auto px-6 py-3 sm:flex justify-between   ">
                <div className="container mx-auto px-6 py-3 flex justify-between align-middle self-center ">
                    <div className="">
                        <Link to="/" className="text-3xl font-bold text-gray-600">
                        {/* <img src={Logo} alt="XTech" className="max-w-25 -p-2 rounded-3xl" /> */}
                        XTech
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




                            <nav className="flex space-x-4">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.path}
                                        className="flex items-center relative group p-2 text-gray-900"
                                    >
                                        <span className="mr-2 z-10">{link.icon}</span>

                                        {/* Wrapper for text and background */}
                                        <span className="relative z-10 overflow-hidden py-1 px-2 rounded-sm">
                                            {/* Background color (placed behind text) */}
                                            <span className="absolute bottom-0 left-0 w-full h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 z-0"></span>

                                            {/* Text */}
                                            <span className="relative z-10 group-hover:text-black">
                                                {link.label}
                                            </span>
                                        </span>
                                    </Link>
                                ))}
                            </nav>


                        </div>
                    </div>
                </div>




                {/* Mobile side ------------------------------>>>> */}
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
        </div>

    );
}
