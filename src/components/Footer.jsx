import React from "react";
import { STUDENTAFFAIRS, POLICIES, SITELINKS, CONTACT } from "./constants/Menus";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTimes } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <FooterColumn title="Student Affairs" items={STUDENTAFFAIRS} />
                <FooterColumn title="Policies" items={POLICIES} />
                <FooterColumn title="Site Links" items={SITELINKS} />
                <FooterColumn title="Contact" items={CONTACT} isContact />
            </div>
            <div className="text-center mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <span className="font-bold text-lg">MySite</span>
                    <p>&copy; {new Date().getFullYear()} MySite. All Rights Reserved.</p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white text-xl"><SiTiktok /></a>
                    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
                    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedinIn /></a>
                    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
                    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaPinterestP /></a>
                    <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTimes /></a>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, items, isContact }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} className="text-gray-400 hover:text-white text-sm">
                            {isContact ? item.name : item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;

