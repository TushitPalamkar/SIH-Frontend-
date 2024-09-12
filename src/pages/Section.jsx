import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Section() {
    return (
        <div>
            <section id="welcome_Sec">
                <div className="container">
                    <h2><span>Where science meets the sacred!</span></h2>
                    <p>Witness the grand Architecture! How about taking your kids on an exploration of India's heritage this holiday season?</p>
                </div>
            </section>
            <div id="carouselExampleCaptions" className="carousel-slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../imgs2/india2.jpg')} className="d-block w-100" alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 style={{  fontWeight:'bold'}}>India is not a country, but a home to millions of hearts, each beating to the rhythm of its own unique culture.</h2>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../imgs2/india4.jpg" className="d-block w-100" alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>In India, the past and the future coexist, where ancient traditions blend seamlessly with modern advancements</h2>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../imgs2/india3.jpg" className="d-block w-100" alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>India's diversity is its greatest strength, a mosaic of languages, religions, and cultures that create a unified whole.</h2>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <img src="../imgs2/india1.png" className="d-block w-100" alt="Fourth slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2>To experience India is to journey through centuries of history, spirituality, and the ever-evolving essence of humanity.</h2>
                        </div>
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}