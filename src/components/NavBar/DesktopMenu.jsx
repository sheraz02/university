import { ChevronDown } from "lucide-react";
import React from "react";

const DesktopMenu = ({menu}) => {

    const hasSubMenu = menu?.subMenu?.length > 0;
    return(
        <li>
            <span className="flex-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-amber-400">{menu.name}</span>
            {hasSubMenu && <ChevronDown className="mt-[0.6px]" />}
        </li>
    );
};

export default DesktopMenu;