/* eslint-disable react/prop-types */
import { FaCamera, FaDownload } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ImageList = ({ images, onImageClick }) => {
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

    const num = 8;

    const loadingElements = [];
    for(let i = 0; i < num; i++) {
        loadingElements.push(
            <li className='flex cursor-pointer overflow-hidden relative mb-4 rounded-md group w-full px-8 '>
                <div className="img h-[27rem] w-full  rounded-xl bg-[#d9d9d9] relative overflow-hidden animate-shimmer"></div>
            </li>
        );
    }

    return (
        <div className='flex flex-col items-center bg-white'>
            <ul className='gap-2 max-w-[95%] mt-10 columns-custom list-none '>
                {images.length === 0 ?
                    (
                        <div>
                            {loadingElements}
                        </div>
                    )
                    :
                    (
                        images.map((img, index) => (
                            <li key={index} className='flex cursor-pointer overflow-hidden relative mb-4 rounded-md group w-full bg-black'>
                                <img
                                    onClick={() => onImageClick(img.photographer, img.src.large2x)}
                                    src={img.src.large2x}
                                    alt="img"
                                    className='w-full z-[2] relative '
                                />
                                {/* <div className="vignette absolute z-[5] transition-all ease-in-out h-full w-full bg-vignette opacity-0 group-hover:opacity-100 group-hover:bottom-20 bottom-[-100px] duration-500 "></div> */}
                                <div className='absolute z-[4] w-full flex bottom-[-100px] items-center py-3 border-none outline-none px-5 justify-between transition-all ease-in-out group-hover:bottom-0 duration-500 bg-gradient-to-t from-black to-vignette'>
                                    <div className=' '>
                                        <FaCamera size={32} color='white' />
                                        <span className='font-bold text-gray-100'>{img.photographer}</span>
                                    </div>
                                    <div onClick={() => downloadImg(img.src.large2x)} className='  mr-2  bg-quaternary rounded-md p-2' >
                                        <FaDownload  color='white'   />
                                    </div>
                                </div>
                            </li>
                        ))
                    )
                }

            </ul>
        </div>
    )
}

export default ImageList;
