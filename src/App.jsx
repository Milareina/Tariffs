import HeroGallery from "./components/HeroGallery";

const App = () => {
    return (
        <div className="heroes-gallery__content-container">
            <h1 className="heroes-gallery__title">Галерея супергероев</h1>
            <HeroGallery />
        </div>
    );
};

export default App;
