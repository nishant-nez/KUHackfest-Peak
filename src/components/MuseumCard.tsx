const MuseumCard = ({ museumImg, title, description, status }: { museumImg: any, title: string, description: string, status: string }) => {
    return (
        <div className="flex flex-col gap-2 hover:scale-110 w-64 transition duration-500 cursor-pointer">
            <img
                src={museumImg}
                className="rounded-t-full h-[250px] w-[190px] "
                alt="" />
            <p className='text-2xl font-semibold mt-4 w-full word-wrap'>{title}</p>
            <p className='font-light w-full word-wrap'>{description}</p>
            <p className='font-light'>{status}</p>
        </div>
    );
}

export default MuseumCard;
