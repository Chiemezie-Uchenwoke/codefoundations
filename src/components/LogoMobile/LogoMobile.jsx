import logo from "../../assets/code_foundations_logo.png";
import { useNavigate } from "react-router-dom";

const LogoMobile = () => {
    const navigate = useNavigate();

    const handleHomeRedirect = () => {
        navigate("/");
    }

    return (
        <figure className="flex items-center gap-2 cursor-pointer" onClick={handleHomeRedirect}>
            <img src={logo} alt="spendwise logo" className="w-[1.5rem] sm:w-[2.2rem] h-auto" />
            <figcaption className="capitalize font-[600]">Code<span className="capitalize m-0">Foundations</span></figcaption>
        </figure>
    )
}

export default LogoMobile;