import PropTypes from "prop-types";

function HeroCard({ hero }) {
    return (
        <div className="heroes-gallery__card">
            <div className="heroes-gallery__card-image">
                <img src={hero.url} alt={hero.name} />
            </div>
            <h2 className="heroes-gallery__card-title">{hero.name}</h2>
            <p className="heroes-gallery__card-superpower">
                <span>Суперсила: </span>
                {hero.superpowers}
            </p>
            <p className="heroes-gallery__card-occupation">
                <span>Род занятия: </span>
                {hero.occupation}
            </p>
        </div>
    );
}

HeroCard.propTypes = {
    hero: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        superpowers: PropTypes.string.isRequired,
        occupation: PropTypes.string.isRequired,
    }).isRequired,
};

export default HeroCard;