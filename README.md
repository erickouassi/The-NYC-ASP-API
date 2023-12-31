# The-NYC-ASP-API
Get JSON Alternate Side Parking (ASP) data


ASP & Meter Data
----------------

**Disclaimer:**  
The data, information, and utility presented on this site will be used at risk. Results should be double-checked before being relied upon.

_Default time zone (America/New\_York)

For the benefit of developers, the API provides numerous endpoints. Keep in mind that all endpoints return JSON and support both HTTP and HTTPS.

Not all endpoints are made publicly accessible. Please feel free to reach out to me if you have any questions, suggestions, or feature requests.

The API is very straightforward. No authentication is required. Make Get requests to:  
[https://the-nyc-asp-api.vercel.app/{endpoint}](https://the-nyc-asp-api.vercel.app)

| Endpoint      | Description | Link     |
| :---        |    :----:   |          ---: |
| /v1/today      | Will return today data 📝.      | [View](https://the-nyc-asp-api.vercel.app/v1/today)   |
| /v1/yesterday   | Will return yesterday data 📝.       | [View](https://the-nyc-asp-api.vercel.app/v1/yesterday)     |
| /v1/tomorrow     | Will return tomorrow data 📝.      | [View](https://the-nyc-asp-api.vercel.app/v1/tomorrow)   |
| /v1/date/:MMDDYY   | Will return single data based on the date. 📝       | [View](https://the-nyc-asp-api.vercel.app/v1/date/123124)     |
| /v1/holiday      | Will return all the holidays of the year. 📝       | [View](https://the-nyc-asp-api.vercel.app/v1/holiday)  |
| /v1/7days   | Will return the next 7 days data. 📝       | [View](https://the-nyc-asp-api.vercel.app/v1/7days)      |


About This Api
--------------

I make no promises about the continued existence of this API. By utilizing this API, you consent to promptly update your app to reflect any changes that are implemented.
