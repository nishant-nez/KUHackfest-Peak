const MuseumCard = ({ museumImg, title, description, status }: { museumImg: any, title: string, description: string, status: string }) => {
    return (
        <div className="flex flex-col gap-2 hover:scale-110 transition duration-500 cursor-pointer">
            <img
                src={museumImg}
                className="rounded-t-full h-[310px] w-[260px] "
                alt="" />
            <p className='text-2xl font-semibold'>{title}</p>
            <p className='font-light'>{description}</p>
            <p className='font-light'>{status}</p>
        </div>
    );
}

export default MuseumCard;