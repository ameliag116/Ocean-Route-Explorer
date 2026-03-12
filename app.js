const { createApp, ref } = Vue; // extracting Vue functions: createApp to make the application and ref to enable reactivity
const { createVuetify } = Vuetify; // extracting Vuetify function function to initiate the UI framework 

const vuetify = createVuetify(); // initializing Vuetify

const App = { // creating a Vue component object and storing it in the 'App' variable
    setup() {

        function findCoordinates(event) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const xPercent = (event.clientX / windowWidth) * 100;
            const yPercent = (event.clientY / windowHeight) * 100;
            console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
        }
        const openDrawer = ref(false); // declaring the variable 'drawer', which represents the navigation bar defined in the index.html file, ensuring it is reactive, and setting the variable to false, ensuring it is closed by default; if the user clicks the navigation drawer icon, the variable 'drawer' should change to true 
        const panel = ref([]); // declaring the variable 'panel', which represents the expansion panel defined in the index.html file, ensuring the expansion panel is reactive and starts at a closed position (closed position is denoted by an empty []); if the user clicks the expansion panel header, the variable 'panel' should change to [1]

        function toggleDrawer() {
            if (openDrawer.value == false) {openDrawer.value = true}
            else {openDrawer.value = false}
        }

        const projects = ref ([
            {
                title: "Home",
                url: "https://artssci.github.io/Maritime-Commerce-and-Whale-Risks-Collective-App/index.html"
            },
            {
                title: "Ocean Route Explorer",
                url: "https://ameliag116.github.io/Ocean-Route-Explorer/ "
            },
            {
                title: "Temporal Tides",
                url: "https://nkkkkkkkkkkk.github.io/Temporal-Tides/ "
            },
            {
                title: "Ocean Commotion",
                url: "https://madsb04.github.io/Ocean-Commotion-/ "
            },
            {
                title: "Jeopardy: Whale Health",
                url: "https://roco100.github.io/Jeopardy-Whale-Health/ "
            },
            {
                title: "Indigenous Perspectives in Reducing Whale Harm in Shipping Practices",
                url: "https://genevawhite.github.io/genevacoding/"
            },
            {
                title: "?",
                url: "https://alipanju12.github.io/Traditional-Ecological-Knowledge-connection-to-Whales/ "
            },
            {
                title: "Dive Into the World of Whales",
                url: "safiya-fs.github.io/Whale-Anatomy-Module/"
            }
        ])

        const activeWhalePopup = ref(null); // declaring the variable needed to click on the whale-related popup buttons and access the corresponding popup window; when the button is clicked, we expect the variable to change to the index value, thus opening up the window
        const activeShipPopup = ref(null); // declaring the variable needed to click on the shipping-related popup buttons and access the corresponding popup window; clicking hte button changes the null value to an index value to affect this change


        // We are adding an array denoted by the "whalePoints" variable, to include information for each of the whale-related popups. Each button includes the following elements:
        // title = the name of the card/button
        // text = the background information regarding the associated route/whales that migrate through that area
        // image = an option to include an image in each card/button
        // cards = which hold image captions or facts about the whales impacted by shipping vessels/activities in that particular region and contains both a "text" section and "references" section (which do not have titles but allow us to separate text using space)
        // top/left = the x and y positioning of the button on the map
        // When no image or cards are present within a popup, the item is set to null, which results in nothing being coded in that space. We are using `` instead of "" for long blocks of text allows for better readability of the script; this change does not affect the final output
        const whalePoints = ref([
        {
            title: "The North Pacific Ocean - A Humpback Whale Migratory Route",
            text: `Each year, tens of thousands of whales are killed worldwide by vessel strikes, with large species like humpbacks, 
            gray, blue, and fin whales most at risk. On the U.S. West Coast, shipping traffic near critical feeding and migration areas, 
            especially in Californian waters, has resulted in hundreds of reported collisions (Gavigan, 2025). The Gulf of Panama and 
            surrounding Pacific routes experience similar dangers, as high concentrations of breeding humpback whales intersect with heavy 
            maritime traffic transiting the Panama Canal, leading to frequent and often fatal collisions (Guzman, 2016).`,
            top: "27%",
            left: "16.10%",
            image: null,
            cards: [
                {
                    title: null,
                    text: "Out of the 118 whale-vessel strikes reported in the U.S, 75 of them occured in Californian Waters.",
                    reference: "(Gavigan, 2025)."
                }
            ]

        }, 
        {
            title: "The North Atlantic Right Whale",
            text: `These waters are used by the North Atlantic right whale, one of the most endangered whale species in the world. 
            Fewer than 336 individuals remain, and the population has declined to its lowest level in more than 20 years (Johnson, et al., 2022). 
            Historically hunted almost to extinction because they were considered the “right” whales to catch, swimming slowly, staying close to shore, 
            and floating after death, the species now faces modern threats such as vessel strikes and fishing gear entanglement 
            (International Whaling Commission, n.d.). To reduce disturbance and collision risk, United States federal law requires vessels to stay at least 
            500 yards away from these whales when encountered at sea. Despite decades of protection, North Atlantic right whales remain critically vulnerable 
            along busy trans-Atlantic shipping routes connecting North America, Central America, and Europe.`,
            top: "24%",
            left: "36.10%",
            image: "northern_right.jpg",
            cards: [
                {
                    text: "Entangled Northern Right Whale.",
                    reference: "(Photo from: NOAA, NEFSC)"
                }
            ] 
        },
        {
            title: "Whales & Porpoises in the North Sea, Norweigan Sea, & North Atlantic Ocean",
            text: `The English Channel has recently seen an increase in sightings of several marine mammals, including harbour porpoise, 
            dolphins, killer whale (orca), sperm whale, blue whale, and humpback whale. As climate change reshapes ocean habitats, 
            many species are shifting their ranges in search of food. However, the Channel is also one of the busiest shipping corridors in the world.
            Heavy vessel traffic and fishing activity increase the risk of ship strikes and entanglement in fishing gear. Many of these whale and porpoise 
            populations cannot easily sustain these challenging pressures for long (Roe, 2024).`,
            top: "9.5%",
            left: "49.10%",
            image: null,
            cards: null
        },
        {
            title: "The Western North Pacific Gray Whales",
            text: `Up until the 1970s, the western north pacific gray whale population that once migrated along the coasts of China, Japan, Korea, and Russia was thought to be extinct (Marine Mammal Commission, n.d.). Despite recent confirmation of these animals in the North Pacific Ocean, the species remains endangered (International Union for Conservation of Nature [IUCN], 2020). The limited population of gray whales typically travel from western North America into the North Pacific Ocean in January, with some reaching waters along Asia’s east coast in June (Palacios et al., 2025).`,
            top: "19%",
            left: "90%",
            image: null,
            cards: [
                {
                    text: "One tagged gray whale travelled approximately 22,511km around the North Pacific Ocean (Mate et al., 2015). These long migratory journeys increase the risk of a whale encountering shipping vessels along the nearby Malacca Strait."
                },
                {
                    text: "Less than 200 Western North Pacific Gray Whales remain (Mate et al., 2015)."
                }
            ]
        },
        {
            title: "Blue Whale & Shipping Traffic in the South Pacific Ocean",
            text: `Studies in Northern Chilean Patagonia show that blue whale distribution overlaps with the region’s primary vessel
            traffic corridor. The area experiences intense maritime activity, particularly from aquaculture fleets, which account for 
            roughly 83% of daily vessels (and approximately 729 active boats), along with industrial fishing and cargo ships (Bedriñana-Romano, 2021).
            This overlap highlights the importance of identifying critical whale feeding and migration corridors to support conservation efforts
            and to reduce the risk of ship strikes and whale disturbances. `,
            top: "67%",
            left: "26%",
            image: "blueWhaleNearShip.jpg",
            cards: [
                {
                    text: "Whale swimming with cargo ship in the distance.",
                    reference: "(Photo from the Canadian Press, photographer John Calambokidis)"
                }
            ]
        },
        {
            title: "Chilean Waters & Humpback Feeding Grounds",
            text: `Humpback whales migrate from the southern tip of South America toward warmer waters near the Panama Canal, passing through 
            shipping routes that emerge from the Strait of Magellan (Casiker, 2018). The strait is a heavily trafficked corridor with over 2,000 
            vessels transiting annually, with 80% of those vessels belonging to international fleets. The channel also serves as an important seasonal feeding area near Isla Carlos III. Following multiple ship strikes in recent years, researchers have recommended a 10-knot vessel speed restriction during 
            the five-month peak migration period in a dense 28 nautical mile section of the strait, though the full passage extends roughly 330 nautical miles 
            and broader enforcement could further improve conservation outcomes (Guzman et al., 2020).`,
            top: "80%",
            left: "28%",
            image: "humpback_panama.jpg",
            cards: null
        },
        {
            title: "The Southern Right Whale Nursery Area",
            text: `This smaller route symbolizes the annual back-and-forth journey southern right whales make between colder feeding grounds and the warmer 
            South American coastal waters where they nurse their young. These whales feed in sub-polar waters around Antarctica and migrate to the coasts of 
            South America to calve, nurse, and breed. Although populations have been recovering at rates of roughly 7-8% per year since the end of 
            commercial whaling, they still face ongoing threats (International Whaling Commission, n.d.) from vessel traffic, overfishing, 
            and underwater noise pollution near busy shipping corridors such as those surrounding the Strait of Magellan (Bedriñana-Romano).`,
            top: "71.5%",
            left: "34.5%",
            image: "southern_right.jpg",
            cards: [
                {
                    text: "Southern right whale feeding in Argentina.",
                    reference: "(Photo from: IWC, photographer Chris Johnson)"
                }
            ]
        },
        {
            title: "Eastern Africa and Southern Asia's Humpback & Sperm Whales",
            text: "Humpback whales commonly migrate from Sri Lanka in January, where vessels from the Malacca Strait pose collision threats. The whales then travel towards Oman, where they usually arrive in March. Following this period of migration, humpback whales tend to concentrate along the southern coast of Oman for breeding and feeding (Palacios et al., 2025). Humpback whales have also been observed migrating from South Africa in July towards the Arabian Sea, where they typically arrive in October (Palacios et al., 2025). Humpback whale movement is also common farther from the mainland coast as the mammals travel towards Madagascar (Palacios et al., 2025). These routes interact heavily with the Mozambique and Hormuz Straits, which are also located along eastern Africa and southern Asia. In addition to humpback whales in the region, sperm whale populations have also been observed travelling from the eastern coast of Madagascar towards Mauritius (Palacios et al., 2025; Chambault et al., 2021). Sperm whales following these movement patterns may be at particular risk of interacting with shipping vessels from the Mozambique Strait, especially considering the long stretches of surface time they require following deep oceanic dives (Rochon, 2025).",
            top: "46%",
            left: "64.85%",
            image: null,
            cards: [
                {
                    text: "At least 14 fatal whale collisions occurred off the coast of Sri Lanka between 2010 and 2014, with mostly blue and sperm whales involved.",
                    reference: "(Nanayakkara & Herath, 2017)"  
                },
                {
                    text: "The number of collisions in the waters of Eastern Africa and in the Western Indian Ocean is notoriously underreported, contributing to a lack of protective measures for whales in these regions.",
                    reference: "(Nisi et al., 2024)"
                }
            ]
        },
        {
            title: "Blue & Humpback Whales Along Australia's Coast",
            text: 'Blue whale migration patterns in this area typically begin in April as the mammals travel west along Australia’s southern coast towards the Indian Ocean (Palacios et al., 2025). Their migration typically ends north of Australia in June, in either the Timor or Philippine Sea (Palacios et al., 2025). In comparison, humpback whale migration patterns are concentrated around Australia’s western coast, where the whales travel south to north from June to August, and subsequently travel from the northern coast back down south from August to October (Palacios et al., 2025).',
            top: "60%",
            left: "78%",
            image: null,
            cards: [
                {
                    text: "137 vessel-whale collision reports were identified from 1877-2015 in Australian waters.",
                    reference: "(Peel et al., 2018)"
                },
                {
                    text: "53% of collisions with known outcomes were fatal to the whale involved.",
                    reference: "(Peel et al., 2018)"
                },
                {
                    text: "59% of these collisions involved humpback whales; blue whales are not as significantly impacted by ship collisions in this coastal region.",
                    reference: "(Peel et al., 2018)"
                }
            ]
        }
        ])

        // We are creating a similar array, denoted by the variable shipPoints, where each popup window has the following elements: title, text, x and y positioning components, an image, and cards (which again contain both a text and reference section to allow the information to be separated using space)
        const shipPoints = ref([
        {
            title: "The Panama Canal",
            text: `The Panama Canal is a major artificial waterway that connects the Atlantic Ocean and the Pacific Ocean,
            allowing ships to cross the Isthmus of Panama rather than traveling the much longer route around Cape Horn at
            the southern tip of South America (Feingold & Willige, 2024). Since the canal cuts across elevated terrain, a system of locks is used to 
            lift and lower vessels as they move through the passage. Expanded over time to accommodate larger ships, the 
            canal now connects nearly 2,000 ports across 170 countries and facilitates more than 14,000 vessel transits each year,
            making it one of the most important global shipping routes. While it provides a fast and efficient 
            shortcut for maritime trade, the lock system and freshwater sections mean that marine animals cannot pass directly 
            between oceans through the canal, even as it introduces heavy vessel traffic and noise into surrounding coastal waters.`,
            top: "37%",
            left: "25.5%",
            image: "panama_canal.jpg",
            cards: null
        },
        {
            title: "Magellan Strait",
            text: `The Strait of Magellan is a natural maritime passage located at the southern tip of South America, between Chilean Patagonia, 
            the island of Tierra del Fuego, and numerous smaller islands within Chilean borders. Stretching approximately 330 nautical miles 
            from Punta Dungeness in the east to the Isoletes Evangelistas in the west, it serves as one of the most important natural routes 
            connecting the Atlantic and Pacific Oceans. Today, the strait supports a wide range of vessel traffic, including large merchant ships,
            fishing vessels, tugboats, and smaller boats. It is closely monitored by the Chilean National Maritime Authority and connects widely
            used shipping routes in the Southern Oceans (Bedriñana-Romano, 2021; Guzman et al., 2020; Casiker, 2018).`,
            top: "70%",
            left: "29.10%",
            image: null,
            cards: [
                {
                    text: "Over 2000 shipping vessels and 100 migratory whales travel through the Megellan Strait annually.",
                    reference: "(Guzman et al., 2020)"
                }
            ]
        },
        {
            title: "English Channel",
            text: `Connecting the North Sea to the Atlantic Ocean, the English Channel is one of the world's busiest shipping 
            corridors with more than 500 vessels traveling through it per day (Wilige, 2024). Spilling out into the Atlantic Ocean, the shipping 
            routes cross paths with many whale species' habitats, and migration and feeding areas, particularly affecting the endangered 
            North Atlantic Right Whale (Johnson et al., 2022).`,
            top: "16.5%",
            left: "45.60%",
            image: "english_channel.jpg",
            cards: null
        },
        {
            title: "Mozambique Channel",
            text: 'The Mozambique Channel, which passes between western Mozambique and eastern Madagascar through the Indian Ocean, is approximately 1600km long and ranges from 400 to 950km in width (Britannica Editors, 2025). The Channel serves as a major shipping route for liquefied natural gas and other energy exports but also carries container shipping, bulk cargo transport, and vessels for regional trade (Agbetiloye, 2026). The major ports of the Mozambique Channel are concentrated around southeastern Africa; however, vessels that travel to and from the more northern regions of southern Asia are also depicted by the map.', 
            top: "51%",
            left: "59.50%",
            image: null,
            video: "https://www.youtube.com/embed/rPvf6toJjcI?si=ZcI-T-lrJIYu8xkF",
            // As discussed further in comments in the html file, we are encountering some problems when trying to load this video; we will plan to attend Office Hours to troubleshoot further
            cards: null
        },
        {
            title: "Hormuz Strait",
            text: 'The Hormuz Strait, a 55km-wide channel located between Iran and Oman, provides the Persian Gulf with its only sea passage (Britannica Editors, 2026b). The channel is known for carrying approximately 20% of the world’s liquefied natural gas and 21 million barrels of oil every year (Feingold & Willige, 2024). Although not directly implicated in reports of whale strikes, this channel contributes to dense boat traffic along the neighbouring Mozambique Strait and nearby waters (Pirotta et al., 2018). These impacts are felt by humpback whale populations as they travel towards the Strait for migration, feeding, and breeding. For visualization purposes, the Hormuz and Mozambique Straits are connected on the map although some vessel traffic may not travel through both channels.',
            top: "28.70%",
            left: "63.60%",
            image: "hormuz.jpg",
            cards: null
        },
        {
            title: "Malacca Strait",
            text: 'The Malacca Strait connects the Indian and Pacific Oceans through ports on the coasts of Indonesia, Malaysia, and Singapore (Thia-Eng et al., 2000). 94,000 ships travel through the Strait annually, carrying approximately 30% of all global trading goods (Feingold & Willige, 2024). The channel runs over 800km long but is only 65km wide at its most narrow point (Britannica Editors, 2026a), making it prone to ship congestion and whale-ship collisions, and posing significant risk to the gray, humpback, and blue whales that migrate through surrounding waters (Feingold & Willige, 2024; Wang et al., 2025).',
            top: "43%",
            left: "77.5%",
            image: "malacca_strait.jpg",
            cards: null
        }
        ])

        function openEmail() {
            alert("Open email");
        }; // declaring the openEmail function which will trigger a pop-up window with relevant information when users click on the email icon; if the user clicks on the email icon, the "Open email" alert will show (this text can be replaced with an actual email address)

        function openSettings() {
            alert("Open settings");
        }; // declaring the openSettings function which will trigger a pop-up window with relevant information when users click on the settings icon; if the user clicks on the setting icon, the "Open settings" alert will show (this text can be replaced with settings/display information)

        // example of animated maritime routes; we have kept these initial coding lines in this file and plan on building on this initial code/playing around with the sparkline component further to implement the lines across all the routes as long as doing so is feasible
        const maritimeRoutes = ref([
            {
                name: "Canada to Colombia",
                route: [-40, 50, 60, 60, 50, -40],
                top: "32%",
                left: "-5%",
                width: "45%",
                height: "15%",
                lineHeight: 1000,
                lineWidth: 4,
                transform: "rotate(-120deg)"
            },
            {
                name: "Brazil to France",
                route: [-40, 50, 60, 70, 80],
                top: "20%",
                left: "8%",
                width: "40%",
                height: "30%",
                lineHeight: 1000,
                lineWidth: 4,
                transform: "rotate(0deg)"
            },
            {
                name: "Russia to Australia",
                route: [0, 10, 15, 0, -5],
                top: "15%",
                left: "70%",
                width: "20%",
                height: "45%",
                lineHeight: 150,
                lineWidth: 10,
                transform: "rotate(90deg)"
            }
        ])

        return {
            openDrawer,
            toggleDrawer,
            projects,
            panel,
            activeWhalePopup,
            activeShipPopup,
            whalePoints,
            shipPoints,
            openEmail,
            openSettings,
            maritimeRoutes, 
            findCoordinates
        }
    }
}

createApp(App).use(vuetify).mount('#app');
