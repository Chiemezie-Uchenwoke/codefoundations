export const getNavLinkClass = ({ isActive }) =>
    isActive 
        ? "text-prim font-medium" 
        : "font-medium opacity-80 hover:opacity-95 hover:text-prim text-base";