import museum1 from '../assets/museums/museum1.webp';
import museum2 from '../assets/museums/museum2.webp';
import museum3 from '../assets/museums/museum3.webp';
import museum4 from '../assets/museums/museum4.webp';
import MuseumCard from './MuseumCard';

const ExploreMuseum = () => {
    return (
        <div className="min-h-[60vh] bg-[#f6f6f6] w-full pt-20 items-center">
            <div className="flex gap-4 items-center justify-evenly flex-wrap my-6">
                <MuseumCard museumImg={museum1} title='Patan Museum' description='Located at Patan, lalitpur' status='Currently Open' />
                <MuseumCard museumImg={museum2} title='Bhaktapur Museum' description='Located at Durbar Square, Bhaktapur' status='Currently Open' />
                <MuseumCard museumImg={museum3} title='Kathmandu Museum' description='Located at Kathmandu' status='Currently Open' />
                <MuseumCard museumImg={museum4} title='Narayanhiti Museum' description='Located at Narayanhiti, Kathmandu' status='Currently Open' />
            </div>
        </div>
    );
}

export default ExploreMuseum;