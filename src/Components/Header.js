import React from 'react';

const Header = ({setSearch, setIsShowForm}) => {
    return (
        <div className="bg-blue-600 p-4">
            <div className="flex justify-between mb-4">
                <h2 className="font-bold text-2xl text-white">
                    contacts book
                </h2>
                <span className="font-bold text-2xl text-white cursor-pointer"
                      onClick={() => setIsShowForm(true)}
                >

               +
                </span>
            </div>
            <input type="text" onChange={(e) => setSearch(e.target.value)}
                   className="w-full px-2 "
                   placeholder="Search..."/>

        </div>
    );
};

export default Header;