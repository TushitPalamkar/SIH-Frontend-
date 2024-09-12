import { useEffect } from "react";

const IndiaMap2 = () => {
    useEffect(() => {
        const loadGoogleCharts = () => {
            const script = document.createElement("script");
            script.src = "https://www.google.com/jsapi";
            script.onload = () => {
                window.google.load("visualization", "1", { packages: ["geochart"] });
                window.google.setOnLoadCallback(drawVisualization);
            };
            document.body.appendChild(script);
        };

        const drawVisualization = () => {
            const data = new window.google.visualization.DataTable();
            data.addColumn("string", "State Code");
            data.addColumn("number", "");
            data.addColumn("number", "AQI PM@.5");
            data.addRows([
                ["Jammu and Kashmir", 0, 200],
                ["Haryana", 0, 300],
                ["IN-UT", 0, 208],
                ["Himachal Pradesh", 0, 107],
                ["Arunachal Pradesh", 0, 343],
                ["Punjab", 0, 300],
                ["Rajasthan", 1, 1030],
                ["Gujarat", 1, 1304],
                ["Uttar Pradesh", 1, 780],
                ["Bihar", 1, 510],
                ["Sikkim", 1, 724],
                ["West Bengal", 1, 620],
                ["Assam", 1, 280],
                ["Nagaland", 1, 201],
                ["Mizoram", 1, 423],
                ["Tripura", 1, 301],
                ["Jharkhand", 1, 290],
                ["Madhya Pradesh", 2, 700],
                ["Maharashtra", 1, 920],
                ["Chhattisgarh", 1, 330],
                ["Orissa", 1, 133],
                ["Andhra Pradesh", 3, 320],
                ["Goa", 3, 1121],
                ["Karnataka", 3, 1290],
                ["Kerala", 3, 311],
                ["Tamil Nadu", 3, 930],
                ["Delhi", 0, 231],
                ["Manipur", 1, 220],
                ["Meghalaya", 1, 210],
            ]);

            const opts = {
                region: "IN",
                domain: "IN",
                displayMode: "regions",
                resolution: "provinces",
                backgroundColor: "#81d4fa",
                padding: "50%",
                defaultColor: "#f5f5f5",
                width: "100%",
                height: 600,
                colorAxis: {
                    values: [0, 1, 2, 3],
                    colors: [
                        "#FF671F", // Orange
                        "#FFFFFF", // White
                        "#06038D", // Blue
                        "#046A38", // Green
                    ],
                },
            };

            const geochart = new window.google.visualization.GeoChart(
                document.getElementById("visualization")
            );

            const stateLinks = {
                "Jammu and Kashmir": "/aboutstate/jammu-and-kashmir",
                "Haryana": "/aboutstate/haryana",
                "Himachal Pradesh": "/aboutstate/himachal-pradesh",
                "Arunachal Pradesh": "/aboutstate/arunachal-pradesh",
                "Punjab": "/aboutstate/punjab",
                "Rajasthan": "/aboutstate/rajasthan",
                "Gujarat": "/aboutstate/gujarat",
                "Uttar Pradesh": "/aboutstate/uttar-pradesh",
                "Bihar": "/aboutstate/bihar",
                "Sikkim": "/aboutstate/sikkim",
                "West Bengal": "aboutstate/66d43d25f81ea4d55fbd1a06",
                "Assam": "/aboutstate/assam",
                "Nagaland": "/aboutstate/nagaland",
                "Mizoram": "/aboutstate/mizoram",
                "Tripura": "/aboutstate/tripura",
                "Jharkhand": "/aboutstate/jharkhand",
                "Madhya Pradesh": "/aboutstate/66d49fa719ecd32c62886922",
                "Maharashtra": "/aboutstate/66cd714ecf8bae870a3a9f49",
                "Chhattisgarh": "/aboutstate/chhattisgarh",
                "Orissa": "/aboutstate/orissa",
                "Andhra Pradesh": "/aboutstate/andhra-pradesh",
                "Goa": "/aboutstate/goa",
                "Karnataka": "aboutstate/66d44cdef81ea4d55fbd1a28",
                "Kerala": "/aboutstate/kerala",
                "Tamil Nadu": "/aboutstate/tamil-nadu",
                "IN-UT": "/aboutstate/66ced3b7eaedd9188af370a1",
                "Manipur": "/aboutstate/manipur",
                "Meghalaya": "/aboutstate/meghalaya",
            };

            window.google.visualization.events.addListener(geochart, "select", () => {
                const selection = geochart.getSelection();
                if (selection.length > 0) {
                    const stateCode = data.getValue(selection[0].row, 0);
                    const stateName = stateCode;

                    // Use the mapping to redirect
                    const url = stateLinks[stateName];
                    if (url) {
                        window.location.href = url;
                    }
                }
            });

            geochart.draw(data, opts);
        };

        loadGoogleCharts();
    }, []);

    return (
        <main id="main">
            <div align="center" style={{ width: "100%" }}>
                <div id="visualization" style={{ width: "100%" }}></div>
            </div>
        </main>
    );
};

export default IndiaMap2;