/* eslint-disable react/prop-types */
import { FaCameraRetro, FaDownload, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const LightBox = ({ lightBoxImage, lightboxTitle, lightBoxVisible, hideLightBox  }) => {
    const downloadImg = (imgUrl) =>  {
        fetch(imgUrl)
        .then((res) => res.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = new Date().getTime().toString();
            link.click();
        })
        .catch(() => 
            Swal.fire({
                icon: 'error',
                title: 'Terjadi kesalahan',
                text: 'Gagal Memuat Gambar'
            })
        )
    }

    return (
        <div className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity z-[10]  ${lightBoxVisible ? '' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white flex flex-col md:w-[40%] w-full  justify-center items-center rounded-xl shadow-custom mx-6">
                <div className="py-4 flex justify-end  w-full px-6">
                    <button className="bg-red-600 p-2 rounded-sm" onClick={hideLightBox}>
                        <FaTimes/>
                    </button>
                </div>
                <div className="flex justify-center p">
                    <img src={lightBoxImage} alt="img" className="max-w-[50%]" />
                </div>
                <div className="flex md:text-base text-sm gap-2 pt-4 font-medium">
                    <FaCameraRetro className="mt-1" />
                    <span className="text-opacity-80">{ lightboxTitle }</span>
                </div>
                <div onClick={() => downloadImg(lightBoxImage)} className="p-3 bg-quaternary rounded-lg md:w-1/4 w-[90%] flex justify-center cursor-pointer mt-2 my-8">
                    <FaDownload color="white" />
                </div>
            </div>
        </div>
    )
};

export default LightBox;
