import HeroCard from "./HeroCard";
import { heroes } from "../data/heroes";

const HeroGallery = () => {
    return (
        <div className="heroes-gallery__gallery-wrapper">
            <div className="heroes-gallery__gallery">
                {heroes.map((hero, index) => (
                    <HeroCard key={index} hero={hero} />
                ))}
            </div>
        </div>
    );
};

export default HeroGallery;
