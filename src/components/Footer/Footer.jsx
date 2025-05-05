const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="bg-white-lite border-t border-borderColor top-margin text-shade-of-black py-12">
            <div className="container-custom flex flex-col gap-4 items-center">
                <p className="text-sm font-semibold">CodeFoundations</p>
                <p className="capitalize font-light text-sm">© all rights reserved <span>{currentYear}</span></p>
            </div>
        </footer>
    )
}

export default Footer;