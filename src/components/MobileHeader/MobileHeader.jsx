import { NavLink, Link } from "react-router-dom";
import { getNavLinkClass } from "../../utils/NavLink";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect} from "react";
import LogoMobile from "../LogoMobile/LogoMobile";

const MobileHeader = () => {
    const [menu, setMenu] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect (() => {
        if (menu){
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => setShouldRender(false), 500);
            return () => clearTimeout(timer);
        }

    }, [menu]) 

    const handleMenuOpen = () => {
        setMenu(prev => !prev);
    }

    return (
        <header className="flex h-[4.5rem] bg-white-lite lg:hidden items-center border-b border-borderColor sticky top-0">
            <div className="container-custom flex justify-between items-center">
                <LogoMobile />

                <div className="">
                    <button 
                      className="border border-borderColor rounded" style={{padding: "0.2rem"}}
                      onClick={handleMenuOpen}
                    >
                        
                        {menu 
                            ? 
                            <IoMdClose className="text-2xl sm:text-3xl" /> 
                            : 
                            <FiMenu className="text-2xl sm:text-3xl" />
                        }
                    </button>

                    {
                        shouldRender ? 
                        <nav 
                        className={`absolute left-0 top-0 w-[70%] max-w-[20rem] h-screen overflow-y-scroll bg-white-lite shadow-md capitalize flex flex-col gap-8 font-bold center z-50 border-r border-borderColor ${menu ? "animate-slide-forward" : "animate-slide-back"}`}

                        style={{
                            padding: "1.5rem 1.1rem",
                          }}
                        >
                            <LogoMobile />

                            <NavLink to="/" className={getNavLinkClass}>home</NavLink>

                            <Link to="#" className="font-medium opacity-80 hover:opacity-95 hover:text-prim text-base">why join</Link>

                            <Link to="#" className="font-medium opacity-80 hover:opacity-95 hover:text-prim text-base">curriculum</Link>

                            <Link to="#" className="font-medium opacity-80 hover:opacity-95 hover:text-prim text-base">pricing</Link>

                            <Link 
                                to="#" 
                                className="bg-prim font-medium text-white-lite text-center rounded-md hover:brightness-95 text-base" 
                                style={{padding: "0.5rem 0.7rem"}}
                            >
                                get started
                            </Link>
                    </nav> :
                    ""
                    }
                </div>
            </div>
        </header> 
    )
}

export default MobileHeader;