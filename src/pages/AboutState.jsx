import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css';

export default function AboutState() {
    const { id } = useParams();
    console.log("AboutState rendered with ID:", id); // Check if this logs to console
    
    return (
        <div className="about-state">
            <section id="slides_parent">
                <div className="container">
                    <div className="slides">
                        <Link to={`/foods/${id}`} className="slide_1">
                            <div className="slide_info">Food!</div>
                        </Link>
                        <Link to={`/clothes/${id}`} className="slide_1 slide_3">
                            <div className="slide_info">Clothing</div>
                        </Link>
                        <Link to={`/festival/${id}`} className="slide_1 slide_4">
                            <div className="slide_info">Festivals</div>
                        </Link>
                        <Link to={`/destinations/${id}`} className="slide_1 slide_5">
                            <div className="slide_info">Tourism</div>
                        </Link>
                    </div>
                </div>
            </section>
            {id === "66cd714ecf8bae870a3a9f49" && (
                <div className="map-sect">
                    <center >
                        <h1 style={{fontSize:'40px' ,fontWeight:'bold',fontFamily:'Trebuchet MS'}}className="map-text1">Locate top heritage sites in <i>Maharashtra!</i></h1>
                        <br/>
                        <h4 className="map-text2">
                             Click on any pointer to learn more about the place and to appreciate the diversity!
                        </h4>
                    </center>
                    <br/>
                    <br/>
                    <center>
                        <iframe 
                            src="https://www.google.com/maps/d/u/0/embed?mid=1lSnY_cuihxfeAGDMjmoXLvFHZas-hf4&ehbc=2E312F" 
                            width="640" 
                            height="480"
                            title="Maharashtra Heritage Sites"
                        ></iframe>
                    </center>
                </div>
            )}
            {id === "66d43d25f81ea4d55fbd1a06" && (
                <div className="map-sect">
                    <center >
                        <h1 style={{fontSize:'40px' ,fontWeight:'bold',fontFamily:'Trebuchet MS'}}className="map-text1">Locate top heritage sites in <i>West Bengal!</i></h1>
                        <br/>
                        <h4 className="map-text2">
                             Click on any pointer to learn more about the place and to appreciate the diversity!
                        </h4>
                    </center>
                    <br/>
                    <br/>
                    <center>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1EGm3FGyQPEnNZzttLuRVoL9ynnULrjs&ehbc=2E312F" width="640" height="480"></iframe>

                    </center>
                </div>
            )}

            {id === "66d44cdef81ea4d55fbd1a28" && (
                <div className="map-sect">
                    <center >
                        <h1 style={{fontSize:'40px' ,fontWeight:'bold',fontFamily:'Trebuchet MS'}}className="map-text1">Locate top heritage sites in <i>Karnataka!</i></h1>
                        <br/>
                        <h4 className="map-text2">
                             Click on any pointer to learn more about the place and to appreciate the diversity!
                        </h4>
                    </center>
                    <br/>
                    <br/>
                    <center>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=17JHbF2WXURZLDRlWHG2FtFYzij6hcW8&ehbc=2E312F" width="640" height="480"></iframe>

                    </center>
                </div>
            )}

            {id === "66ced3b7eaedd9188af370a1" && (
                <div className="map-sect">
                    <center >
                        <h1 style={{fontSize:'40px' ,fontWeight:'bold',fontFamily:'Trebuchet MS'}}className="map-text1">Locate top heritage sites in <i>Delhi!</i></h1>
                        <br/>
                        <h4 className="map-text2">
                             Click on any pointer to learn more about the place and to appreciate the diversity!
                        </h4>
                    </center>
                    <br/>
                    <br/>
                    <center>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1tYOztpZk5GbOyR7DsvMUICO-HfNgiV8&ehbc=2E312F" width="640" height="480"></iframe>
                    </center>
                </div>
            )}

            {id === "66d49fa719ecd32c62886922" && (
                <div className="map-sect">
                    <center >
                        <h1 style={{fontSize:'40px' ,fontWeight:'bold',fontFamily:'Trebuchet MS'}}className="map-text1">Locate top heritage sites in <i>Madhya Pradesh!</i></h1>
                        <br/>
                        <h4 className="map-text2">
                             Click on any pointer to learn more about the place and to appreciate the diversity!
                        </h4>
                    </center>
                    <br/>
                    <br/>
                    <center>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=17jPGQhXrrSMJD6zO5Ewjq1rrY3dPofs&ehbc=2E312F" width="640" height="480"></iframe>

                    </center>
                </div>
            )}

            
        </div>
    );
}
