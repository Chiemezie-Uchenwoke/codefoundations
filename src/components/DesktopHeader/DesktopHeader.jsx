import logo from "../../assets/code_foundations_logo.png";
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getNavLinkClass } from "../../utils/NavLink";

const DesktopHeader = () => {

    const navigate = useNavigate();

    const handleHomeRedirect = () => {
        navigate("/");
    }

    return (
        
        <header className="hidden h-[4.5rem] bg-white-lite lg:flex items-center border-b border-borderColor sticky top-0 z-50">
            <div className="container-custom flex justify-between items-center">
                <figure className="flex items-center gap-2 cursor-pointer" onClick={handleHomeRedirect}>
                    <img src={logo} alt="spendwise logo" className="w-[2.2rem] h-auto" />
                    <figcaption className="capitalize font-[600]">Code<span className="capitalize m-0">Foundations</span></figcaption>
                </figure>

                <nav className="capitalize flex gap-8 center">
                    <NavLink to="/" className={getNavLinkClass}>home</NavLink>

                    <a href="#why_join" className="font-medium opacity-80 hover:opacity-95 hover:text-prim text-base">why join</a>

                    <a href="#features" className="font-medium opacity-80 hover:opacity-95 hover:text-prim text-base">curriculum</a>

                    <a href="#pricing" className="font-medium opacity-80 hover:opacity-95 hover:text-prim text-base">pricing</a>
                </nav>

                <div className="capitalize flex items-center gap-4 font-bold">

                    <a 
                        href="#enroll" 
                        className="bg-prim font-medium text-white-lite rounded-md py-[0.5rem] px-[0.7rem] hover:brightness-95 text-base duration-300"
                    >
                        get started
                    </a>
                </div>
            </div>
        </header>  
    )
}

export default DesktopHeader;