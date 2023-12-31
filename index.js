//index.js
const http = require("http");
const AppData = require("./controller");

const PORT = process.env.PORT || 5005;

const server = http.createServer(async (req, res) => {
        // / : GET 
    if (req.url === "/" && req.method === "GET") {
        // set the status code, and content-type
           res.writeHead(200, { "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*" });
           res.end(JSON.stringify({ message: "App is active! 🚀" }));
       }

           // /v1/list2022
    else if (req.url === "/v1/year2022" && req.method === "GET") {
        // get the data.
        const allData = await new AppData().getAllData2022();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(allData));
    }
    // /v1/list2023
    else if (req.url === "/v1/year2023" && req.method === "GET") {
        // get the data.
        const allData = await new AppData().getAllData2023();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(allData));
    }
    // /v1/list2024
    else if (req.url === "/v1/year2024" && req.method === "GET") {
        // get the data.
        const allData = await new AppData().getAllData2024();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(allData));
    }
    //

	    //
      // /api/v1/today : GET
      else if (req.url === "/v1/today" &&
      req.method === "GET") {
             // get today data.
            const todayData = await new AppData().getTodayData();
            // set the status code, and content-type
            res.writeHead(200, { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"  });
            // send the data
            res.end(JSON.stringify(todayData));
        }
        //
        // /api/v1/yesterday : GET
        else if (req.url === "/v1/yesterday" &&
      req.method === "GET") {
             // get yesterday data.
            const yesterdayData = await new AppData().getYesterdayData();
            // set the status code, and content-type
            res.writeHead(200, { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"  });
            // send the data
            res.end(JSON.stringify(yesterdayData));
        }
        //
        // /api/v1/tomorrow : GET
        else if (req.url === "/v1/tomorrow" &&
      req.method === "GET") {
             // get tomorrow data.
            const tomorrowData = await new AppData().getTomorrowData();
            // set the status code, and content-type
            res.writeHead(200, { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"  });
            // send the data
            res.end(JSON.stringify(tomorrowData));
        }
        //
    // /api/v1/holiday : GET
    else if (req.url === "/v1/holiday" &&
  req.method === "GET") {
         // get holiday data.
        const holidayData = await new AppData().getHolidayData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(holidayData));
    }
    // /v1 : GET 7 days Data
    else if (req.url === "/v1/7days" && req.method === "GET") {
         // get legal Holiday.
        const dataNext7days = await new AppData().get7Data();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(dataNext7days));
    }
    //
 // /v1/date/:MMDDYY : GET
 else if (req.url.match(/\/v1\/date\/([0-9]+)/) &&
 req.method === "GET") {
       try {
           // get date 10272022 from url
           const X = req.url.split("/")[3];
           // get a single data
           const singleData = await new AppData().getSingleData(X);
           // set the status code and content-type
           res.writeHead(200, { "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*"  });
           // send the data
           res.end(JSON.stringify(singleData));
       } catch (error) {
           // set the status code and content-type
           res.writeHead(404, { "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*"  });
           // send the error
           res.end(JSON.stringify({ message: error }));
       }
   }
// Add above

    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        res.end(JSON.stringify({ message: "Route not found 💣" }));
    }
});


server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});

// I will add credit or inspiration later.
// Avoid a single error from crashing the server in production.
process.on("uncaughtException", (...args) => console.error(args));
process.on("unhandledRejection", (...args) => console.error(args));