import MuseumStoryCard from "./MuseumStoryCard";
import './css/styles.css';

import museumstory1 from "../assets/images/museumstory2.jpg";
import museumstory2 from "../assets/images/museumstory.jpg";
import museumstory3 from "../assets/images/museumstory3.jpg";

export default function MuseumStoryCards() {
    return <div className="relative">
        <p className="text-3xl pl-10 uppercase mb-5"> What's on </p>

        <div className="overflow-x-scroll flex gap-4 hide-scrollbar px-10 py-6">
            <div className="absolute right-10 top-5 z-50">
                <button className="bg-black py-5 px-3 text-white hover:outline-black hover:bg-white hover:text-black transition-colors ease-in-out duration-100 hover:outline">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="bg-black py-5 px-3 text-white hover:outline-black hover:bg-white hover:text-black transition-colors ease-in-out duration-100 hover:outline">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <MuseumStoryCard
                name="Patan"
                image={museumstory1}
                title="Hello"
                date="2024 Dec 14"
                action="Talk"
                description="This is a museum story with high content"
            />
        </div>
    </div>
}
