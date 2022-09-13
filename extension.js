module.exports = {
        "name": "Lib Search and Links",
        "publisher": "Core Applications",
        "configuration":{
        },
        "cards": [
            {
            "type": "Search&Linking",
            "source": "./src/cards/Search&LinkingCard.jsx",
            "title": "Search and Linking Card",
            "displayCardType": "Search and Linking",
            "description":
                "This card is able to search library resources and linking library pages.",
            "configuration": {
                "client": [
                    {
                        key: "welcomeMessage",
                        label: "Library Search and Linking",
                        type: "text"
                    }
                ]
            }
        }],
    "page": {
        "source": "./src/page/router.jsx"
    }
}