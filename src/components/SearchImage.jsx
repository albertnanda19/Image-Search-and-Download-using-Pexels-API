// import { useState } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SearchImage = ({ onSearch }) => {
    const [ searchTerm, setSearchTerm ] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    }

    return (
        <div className=" bg-primary shadow-custom">
            <div className="flex flex-col items-center pt-20">
                <div className="pb-5 flex text-center text-white md:text-5xl text-4xl font-semibold ">
                    <h1 className="[text-shadow:_2px_5px_4px_rgb(0_0_0_/_40%)]">Search Image and Download It</h1>
                </div>
                <div className="flex w-1/2 bg-white bg-opacity-80 rounded-lg px-3 py-2 shadow-custom">
                    <FaSearch className="mt-1 mr-4 cursor-pointer" onClick={handleSearch} />
                    <input 
                        type="text"
                        placeholder="Cari Gambar"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full outline-none bg-transparent placeholder:text-black placeholder:text-opacity-60 focus:placeholder:text-opacity-30"
                    />
                </div>

                {/* Search Button */}
                <div className="flex w-1/2 justify-center my-6">
                    <button onClick={handleSearch} className="bg-quaternary px-8 py-2 rounded-lg text-white font-medium">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchImage;