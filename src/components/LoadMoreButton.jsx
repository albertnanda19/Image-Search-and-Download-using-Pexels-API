/* eslint-disable react/prop-types */
const LoadMoreButton = ({ loadMore }) => {
    return (
        <div className="w-full flex justify-center pt-10 pb-12">
            <button onClick={loadMore} className="py-3 px-6 text-white font-bold text-base rounded-md bg-secondary">Load More</button>
        </div>
    )
}

export default LoadMoreButton;