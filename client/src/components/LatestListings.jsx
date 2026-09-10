import Title from './Title'
import ListingCard from './ListingCard';
import { useSelector } from 'react-redux';

const LatestListings = () => {

    const { listings } = useSelector(state => state.listing)

    return (
        <div className='mt-20 mb-8'>
            <Title title="Latest Listings" description="Discover the hottest social profiles available right now." />

            <div className='flex flex-col gap-6 px-6'>
                {listings
                    .slice()
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 4)
                    .map((listing, index) => (
                        <div key={index} className='mx-auto w-full max-w-3xl rounded-xl'>
                            <ListingCard listing={listing} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default LatestListings