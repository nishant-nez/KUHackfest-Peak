import museumstory from "../assets/images/museumstory.jpg";

export default function MuseumStoryCard() {
    return <div className="">
        <div className="flex gap-2 items-center">
            <p>London Museum Docklands </p>
            <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="relative w-96 flex flex-col gap-2">
            <img src={museumstory} alt="Museum Story" className="w-full object-cover" />
            <p className="bg-white p-2 text-sm absolute top-4 left-4">Free</p>

            <p className="w-full word-wrap">The Story of Rememberance of Story UK</p>
            <p className="text-gray-600">14 Dec 2024</p>
            <p>Talk</p>
            <p>Marking 30 Years of American Independence Day</p>
        </div>
    </div>
}
