<<<<<<< HEAD
import hero_image from "../assets/museum2.jpg";
=======
import hero_image from "../assets/images/museum2.jpg";
>>>>>>> 09f9fa9178802ff9ba6a464ba655d3a4c7825f09

export default function HeroImage() {
    return (
        <div className="h-screen relative">
            <img src={hero_image} alt="hero_image" className="h-screen w-full object-cover" />
            <p className="absolute uppercase bottom-10 left-10 w-[40%] word-wrap text-white text-3xl font-bold leading-normal">
                Delve into the hidden stories & unexpected treasures that shaped Kathmandu
            </p>
        </div>

    )
}
