import { Link } from "react-router-dom";
import { links } from "./MyLinks";
import { useState } from "react";


const NavLinks = () => {

    const [heading, setHeading] = useState()

    return (
        <>
            {
                links.map((link) => (
                    <div key={link.name}>
                        <div className="px-3 text-left md:cursor-pointer group">
                            <h1 className="py-7" onClick={()=> 
                            heading !== link.name ? setHeading(link.name) : setHeading('')}>{link.name}</h1>
                            {link.submenu && (
                                <div>
                                    <div className="absolute top-20 hidden group-hover:md:block hover:md:block ">
                                        <div className="py-3">
                                            <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45">

                                            </div>
                                        </div>
                                        <div className="bg-white p-5 grid grid-cols-3 gap-12 rounded-lg">
                                            {
                                                link.sublinks.map((mysublinks) => (
                                                    <div key={mysublinks}>
                                                        <h1 className="text-lg font-semibold">{mysublinks.Head}
                                                        </h1>
                                                        {mysublinks.sublink.map((slink) => (
                                                            <li key={slink.name} className="text-sm text-gray-600 my-2.5">
                                                                <Link className="hover:text-primary"
                                                                    to={slink.link}>{slink.name}</Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>

                        {/* Mobile Menu */}
                        <div className={`${heading === link.name? "md:hidden" : "hidden"}`}>
                            {
                                link.sublinks.map((slinks) => (
                                    <div key={slinks}>
                                        <div>
                                            <h1 className="py-4 pl-7 font-semibold md:pr-0 pr-5">{slinks.Head}</h1>
                                            <div>
                                                {slinks.sublink.map((slink) => (
                                                    <li key={slink} className="py-3 pl-14">
                                                        <Link to={slink.link}>{slink.name}</Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default NavLinks;