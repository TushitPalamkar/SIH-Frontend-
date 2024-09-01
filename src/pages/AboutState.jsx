import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AboutState() {
    const { id } = useParams();
    console.log("AboutState rendered with ID:", id); // Check if this logs to console
    
    return (
        <div className="about-state">
            <section id="slides_parent">
                <div className="container">
                    <div className="slides">
                        <div className="slide_1">
                            <Link to={`/foods/${id}`}>
                                <div className="slide_info">Food!</div>
                            </Link>
                        </div>
                    
                        <div className="slide_1 slide_3">
                            <Link to={`/clothes/${id}`}>
                                <div className="slide_info">Clothing</div>
                            </Link>
                        </div>
                        <div className="slide_1 slide_4">
                            <Link to={`/festival/${id}`}>
                                <div className="slide_info">Festivals</div>
                            </Link>
                        </div>
                        <div className="slide_1 slide_5">
                            <Link to={`/destinations/${id}`}>
                                <div className="slide_info">Tourism</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <br/>

            {id === "66cd714ecf8bae870a3a9f49" && (
                <>
                    <center>
                        <h1>Locate top heritage sites in Maharashtra!</h1>
                    </center>
                    <br/>
                    <center>
                        <h4>
                            <br /> Click on any pointer to learn more about the place and to appreciate the diversity!
                        </h4>
                    </center>
                    <br/>
                    <center>
                        <iframe 
                            src="https://www.google.com/maps/d/u/0/embed?mid=1lSnY_cuihxfeAGDMjmoXLvFHZas-hf4&ehbc=2E312F" 
                            width="640" 
                            height="480"
                            title="Maharashtra Heritage Sites"
                        ></iframe>
                    </center>
                </>
            )}
        </div>
    );
}
