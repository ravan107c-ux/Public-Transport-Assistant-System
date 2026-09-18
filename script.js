/* =====================================
   TRAVELEASE JAVASCRIPT
===================================== */


/* HOME SEARCH */

function homeSearch() {

    let from =
        document.getElementById("homeFrom").value;

    let to =
        document.getElementById("homeTo").value;

    let date =
        document.getElementById("homeDate").value;


    if (from === "" || to === "") {

        alert(
            "Please enter current location and destination."
        );

        return;
    }


    saveSearch(from, to, date);

    window.location.href = "plan.html";
}



/* PLAN SEARCH */

function searchBuses() {

    let destination =
        document.getElementById("destination").value;

    let route =
        document.getElementById("route").value;


    if (destination === "" && route === "") {

        alert(
            "Please enter a destination or route."
        );

        return;
    }


    let from =
        route || "Current Location";

    let to =
        destination || "Selected Destination";


    saveSearch(from, to, "");


    alert(
        "Search saved successfully! 🔍\n\n" +
        "From: " + from +
        "\nTo: " + to
    );
}



/* SAVE SEARCH */

function saveSearch(from, to, date) {

    let searches =
        JSON.parse(
            localStorage.getItem("travelSearches")
        ) || [];


    let search = {

        from: from,

        to: to,

        date: date,

        time:
            new Date().toLocaleString()

    };


    searches.unshift(search);


    localStorage.setItem(
        "travelSearches",
        JSON.stringify(searches)
    );


    localStorage.setItem(
        "lastSearch",
        JSON.stringify(search)
    );
}



/* BUS USED */

function useBus(busName) {

    let used =
        JSON.parse(
            localStorage.getItem("usedBuses")
        ) || [];


    let bus = {

        name: busName,

        time:
            new Date().toLocaleString()

    };


    used.unshift(bus);


    localStorage.setItem(
        "usedBuses",
        JSON.stringify(used)
    );


    alert(
        busName +
        " added to your journey history! 🚌"
    );
}



/* =====================================
   AI ARRIVAL PREDICTION
===================================== */


function showPredictions() {

    let lastSearch =
        JSON.parse(
            localStorage.getItem("lastSearch")
        );


    let searchText =
        document.getElementById(
            "previousSearch"
        );


    if (lastSearch) {

        searchText.innerHTML =
            lastSearch.from +
            " → " +
            lastSearch.to;

    } else {

        searchText.innerHTML =
            "No previous search found.";

    }


    generatePredictions();
}



function generatePredictions() {

    let buses = [

        {
            name: "Tamil Nadu Express",
            normal: "7:50 PM"
        },

        {
            name: "GreenLine Travels",
            normal: "8:10 PM"
        },

        {
            name: "Royal Roadways",
            normal: "7:45 PM"
        },

        {
            name: "Southern Star",
            normal: "8:20 PM"
        },

        {
            name: "Fast Track",
            normal: "7:40 PM"
        },

        {
            name: "City Rider",
            normal: "8:30 PM"
        }

    ];


    let container =
        document.getElementById(
            "predictionGrid"
        );


    container.innerHTML = "";


    buses.forEach(function(bus) {

        let minutes =
            Math.floor(
                Math.random() * 25
            ) + 1;


        let predicted =
            "7:" +
            String(
                30 +
                Math.floor(
                    Math.random() * 25
                )
            ).padStart(2, "0") +
            " PM";


        container.innerHTML += `

            <div class="prediction-card">

                <h3>
                    🚌 ${bus.name}
                </h3>

                <p>
                    Normal time: ${bus.normal}
                </p>

                <div class="predicted-time">
                    ${predicted}
                </div>

                <p>
                    🤖 AI Predicted Arrival
                </p>

                <div class="crowd medium">
                    Prediction confidence: ${70 + Math.floor(Math.random() * 25)}%
                </div>

                <button
                    class="view-btn"
                    onclick="useBus('${bus.name}')">

                    Select Bus

                </button>

            </div>

        `;

    });

}



/* REFRESH AI PREDICTIONS */

function refreshPredictions() {

    generatePredictions();

}



/* =====================================
   CHATBOT
===================================== */


function sendMessage() {

    let input =
        document.getElementById(
            "chatInput"
        );


    let message =
        input.value.trim();


    if (message === "") {

        return;

    }


    addUserMessage(message);


    input.value = "";


    setTimeout(function() {

        let response =
            chatbotResponse(message);


        addBotMessage(response);

    }, 500);

}



function addUserMessage(message) {

    let chat =
        document.getElementById(
            "chatMessages"
        );


    chat.innerHTML += `

        <div class="user-message">

            ${message}

        </div>

    `;


    chat.scrollTop =
        chat.scrollHeight;

}



function addBotMessage(message) {

    let chat =
        document.getElementById(
            "chatMessages"
        );


    chat.innerHTML += `

        <div class="bot-message">

            ${message}

        </div>

    `;


    chat.scrollTop =
        chat.scrollHeight;

}



function chatbotResponse(message) {

    let text =
        message.toLowerCase();


    if (
        text.includes("tamil") ||
        text.includes("express")
    ) {

        return `
            🚌 Tamil Nadu Express<br><br>

            Route: Periyar → Chennai<br>
            Duration: 7h 30m<br>
            Fare: ₹650<br>
            Crowd: Low<br>
            Seats: 32<br>
            Comfort Score: 92
        `;

    }


    if (
        text.includes("greenline")
    ) {

        return `
            🚌 GreenLine Travels<br><br>

            Duration: 8h 10m<br>
            Fare: ₹520<br>
            Crowd: Medium<br>
            Seats: 18<br>
            Comfort Score: 86
        `;

    }


    if (
        text.includes("seat") ||
        text.includes("crowd")
    ) {

        return `
            💺 Seat availability can be
            checked from the Seat Availability
            page.<br><br>

            The page shows available seats
            and predicted crowd levels.
        `;

    }


    if (
        text.includes("comfort") ||
        text.includes("score")
    ) {

        return `
            ⭐ Comfort Score considers:<br><br>

            🕐 Travel Duration<br>
            💰 Expense<br>
            💺 Seat Availability<br>
            👥 Crowd Prediction<br>
            🛣️ Route Quality
        `;

    }


    if (
        text.includes("hello") ||
        text.includes("hi")
    ) {

        return `
            Hello! 👋<br><br>
            How can I help you with your journey?
        `;

    }


    return `
        🤖 I can help you with:<br><br>

        🚌 Bus details<br>
        💺 Seat availability<br>
        👥 Crowd prediction<br>
        ⭐ Comfort score<br>
        🕐 Arrival prediction<br>
        💰 Bus fare
    `;

}



/* =====================================
   HISTORY
===================================== */


function showHistory() {

    let searches =
        JSON.parse(
            localStorage.getItem(
                "travelSearches"
            )
        ) || [];


    let used =
        JSON.parse(
            localStorage.getItem(
                "usedBuses"
            )
        ) || [];


    let searchContainer =
        document.getElementById(
            "searchHistory"
        );


    let usedContainer =
        document.getElementById(
            "usedHistory"
        );


    if (searches.length > 0) {

        searchContainer.innerHTML = "";


        searches.forEach(function(search) {

            searchContainer.innerHTML += `

                <div class="history-item">

                    🔍
                    <strong>
                        ${search.from}
                        →
                        ${search.to}
                    </strong>

                    <br>

                    <small>
                        ${search.time}
                    </small>

                </div>

            `;

        });

    }


    if (used.length > 0) {

        usedContainer.innerHTML = "";


        used.forEach(function(bus) {

            usedContainer.innerHTML += `

                <div class="history-item">

                    🚌
                    <strong>
                        ${bus.name}
                    </strong>

                    <br>

                    <small>
                        Used on ${bus.time}
                    </small>

                </div>

            `;

        });

    }

}