import '../index.css';

const Loading = () => {
    const num = 4;

    const loadingElements = [];
    for(let i = 0; i < num; i++) {
        loadingElements.push(<div className="img h-[27rem] w-80 rounded-xl bg-[#d9d9d9] relative overflow-hidden animate-shimmer"></div>);
    }

    return (
        <div className="flex flex-wrap gap-4 h-screen justify-center pt-10 px-6 ">
            {loadingElements}
        </div>
    )
}

export default Loading;