# Flutter-Weather-App
This is a basic HTML, CSS and JavaScript code that creates a simple web page with a search bar to input the name of a city and displays its current temperature, climate and location using the OpenWeatherMap API. Here is a breakdown of the code:

HTML:

The HTML code starts with the doctype declaration and the opening and closing HTML tags.

Inside the HTML tags, there is the head tag, where the meta tags for character set, IE compatibility and viewport are defined, and the title tag with the page title.

The link tag is used to import the style.css file.

The body tag contains a form element with an input field for the city name and a search button.

There is also a main container element with divs to display the location, temperature, climate and weather icon.



CSS:

The CSS code uses the universal selector to reset the box-sizing, margin and padding properties of all elements to 0.

The body background color is set to #263859.

The form element is centered on the page with margin-top: 100px.

The main container element has a fixed width and height, is centered on the page with margin-left and margin-right set to auto, and has a background color of #6b778b, a border-radius of 20px and a box-shadow.

The search button has a white background color, a border with #494949 color and a hover effect that changes the background and border colors to #ff6768 and the text color to white.

The search input field has a white bottom border with a width of 3px and a color of #ff6768.


JavaScript:

The JavaScript code starts by declaring variables to store references to the location, temperature, climate and weather icon HTML elements, as well as the input field and search button.

An event listener is added to the search button to prevent the default form submission behavior, get the city name entered by the user, call the getWeather function passing the city name as a parameter, and reset the input field.

The getWeather function is defined as an async function that makes a GET request to the OpenWeatherMap API using the city name parameter and the API key.

If the request is successful, the response data is converted to JSON format, and the location, temperature, climate and weather icon are updated with the data fetched from the API response, based on their respective properties.