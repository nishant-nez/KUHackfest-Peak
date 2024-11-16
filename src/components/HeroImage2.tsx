import museum from "../assets/images/museum4.jpg";
import "./css/styles.css";

export default function HeroImage2() {
    return <div className="flex flex-col gap-4 bg-primary pb-16 relative overflow-hidden bottom-bent">
        <img src={museum} alt="" className="w-[70%] object-cover" />
        <div className="flex flex-col gap-1 text-white w-[70%]">
            <p className="text-sm pl-10 leading-snug">Patan Art Gallery - Activity</p>
            <span className="flex justify-between">
                <p className="text-4xl pl-10">NEWA DHAWA DHINTUNA</p>
                <p className="text-xl">22 Nov - 23 Dec 2024</p>
            </span>
        </div>
    </div>
}
