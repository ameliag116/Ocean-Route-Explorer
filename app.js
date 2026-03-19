const { createApp, ref } = Vue; // extracting Vue functions: createApp to make the application and ref to enable reactivity
const { createVuetify } = Vuetify; // extracting Vuetify function function to initiate the UI framework 

const vuetify = createVuetify(); // initializing Vuetify

const App = { // creating a Vue component object and storing it in the 'App' variable
    setup() {

        const references = ref ([
            {
            section: "Text & Image References",
            items: [
                {
                    text: "Agbetiloye, A. (2026, March 9). From Suez to the Cape: Africa’s most important shipping routes shaping global trade. Business Insider.",
                    url: "https://africa.businessinsider.com/local/markets/from-suez-to-the-cape-africas-most-important-shipping-routes-shaping-global-trade/gzgkpsh"
                },
                {
                    text: "Bedriñana-Romano, L., Hucke-Gaete, R., Viddi, F. A., Johnson, D., Zerbini, A.N., Morales, J., Mate, B., & Palacios, D. M. (2021). Defining priority areas for blue whale conservation and investigating overlap with vessel traffic in Chilean Patagonia, using a fast-fitting movement model. Scientific Reports, 11.",
                    url: "https://doi.org/10.1038/s41598-021-82220-5"
                },
                {
                    text: "Britannica Editors (2025, December 4). Mozambique Channel. Encyclopedia Britannica.",
                    url: "https://www.britannica.com/place/Mozambique-Channel"
                },
                {
                    text: "Britannica Editors (2026a, January 20). Strait of Malacca. Encyclopedia Britannica.",
                    url: "https://www.britannica.com/place/Strait-of-Malacca"
                },
                {
                    text: "Britannica Editors (2026b, March 11). Strait of Hormuz. Encyclopedia Britannica.",
                    url: "https://www.britannica.com/place/Strait-of-Hormuz"
                },
                {
                    text: "Calambokidis, J. (Photographer). (n.d.). Whale’s fin shown with a shipping vessel in the background [Photograph]. Canadian Press via CBC News.",
                    url: "https://www.cbc.ca/news/science/light‑colour‑whales‑tan‑for‑sun‑protection‑study‑finds‑1.1362858"
                },
                {
                    text: "Casiker, C. (2018, February 20). Traversing the endless blue: The Adventurous voyages of whales. Research Matters.",
                    url: "https://researchmatters.in/news/traversing-endless-blue-adventurous-voyages-whales"
                },
                {
                    text: "Chambault, P., Fossette, S., Heide‐Jørgensen, M. P., Jouannet, D., & Vély, M. (2021). Predicting seasonal movements and distribution of the sperm whale using machine learning algorithms. Ecology and Evolution, 11(3), 1432–1445.",
                    url: "https://doi.org/10.1002/ece3.7154"
                },
                {
                    text: "Griehsel, M. (2026, March 12). The war in the Persian Gulf threatens already vulnerable marine animals and plants. Deep Sea Reporter.",
                    url: "https://www.deepseareporter.com/the-war-in-the-persian-gulf-threatens-already-vulnerable-marine-animals-and-plants/"
                },
                {
                    text: "Feingold, S., & Willige, A. (2024, February 15). These are the world’s most vital waterways for Global Trade. World Economic Forum.",
                    url: "https://www.weforum.org/stories/2024/02/worlds-busiest-ocean-shipping-routes-trade/"
                },
                {
                    text: "Gaskins, N. R. (2021). Self-Taught Engineering, Upcycling, and Speculative Design. In Techno-vernacular creativity and innovation : culturally relevant making inside and outside the classroom (pp. 15-30). The MIT Press.",
                    url: "https://doi.org/10.7551/mitpress/12379.001.0001"
                },
                {
                    text: "Gavigan, E. (2025, August 13) 20,000 Whales Are Killed by Ship Strikes Each Year. IMMP.",
                    url: "https://savedolphins.eii.org/news/20-000-whales-are-killed-by-ship-strikes-each-year"
                },
                {
                    text: "Guzman, H. (2016) Humpback Highway: Creating Traffic Separation Schemes to Protect Whales in the Eastern Pacific [project]. Smithsonian Global.",
                    url: "https://global.si.edu/projects/humpback-highway-creating-traffic-separation-schemes-protect-whales-eastern-pacific"
                },
                {
                    text: "Guzman, H. M., Capella, J. J., Valladares, C., Gibbons, J., Condit, R. (2020) Humpback whale movements in a narrow and heavily-used shipping passage, Chile. Marine Policy, 118.",
                    url: "https://doi.org/10.1016/j.marpol.2020.103990"
                },
                {
                    text: "International Union for Conservation of Nature. (2020). The IUCN Red List of Threatened Species. Western Gray Whale.",
                    url: "https://www.iucnredlist.org/species/8099/50345475"
                },
                {
                    text: "International Whaling Commission. (n.d.). Right whale. IWC Whale Watching Handbook.",
                    url: "https://wwhandbook.iwc.int/en/species/right-whale"
                },
                {
                    text: "Johnson, C., Reisinger, R., Palacios, D., Friedlaender, A., Zerbini, A., Willson, A., Lancaster, M., Battle, J., Graham, A., Cosandey-Godin, A., Jacob T., Felix, F., Grilly, E., Shahid, U., Houtman, N., Alberini, A., Montecinos, Y., Najera, E. and Kelez, S. (2022). Protecting Blue Corridors, Challenges and Solutions for Migratory Whales Navigating International and National Seas. WWF, Oregon State University, University of California, Santa Cruz, Publisher: WWF International, Switzerland.",
                    url: "https://zenodo.org/records/6196131"
                },
                {
                    text: "Johnson, C. (n.d.) Whales on the move - mapping threats and solutions for our ocean giants. WWF.",
                    url: "https://wwfwhales.org/news-stories/whales-on-the-move"
                },
                {
                    text: "Mate, B. R., Ilyashenko, V. Yu., Bradford, A. L., Vertyankin, V. V., Tsidulko, G. A., Rozhnov, V. V., & Irvine, L. M. (2015). Critically endangered western gray whales migrate to the eastern North Pacific. Biology Letters, 11(4), 20150071.",
                    url: "https://doi.org/10.1098/rsbl.2015.0071"
                },
                {
                    text: "Nanayakkara, R. P., & Herath, H. M. (2017). Report on 14 large whales that died due to ship strikes off the coast of Sri Lanka, 2010–2014. Journal of Marine Biology, 2017, 1–7.",
                    url: "https://doi.org/10.1155/2017/6235398"
                },
                {
                    text: "Nisi, A. C., Welch, H., Brodie, S., Leiphardt, C., Rhodes, R., Hazen, E. L., Redfern, J. V., Branch, T. A., Barreto, A. S., Calambokidis, J., Clavelle, T., Dares, L., de Vos, A., Gero, S., Jackson, J. A., Kenney, R. D., Kroodsma, D., Leaper, R., McCauley, D. J., … Abrahms, B. (2024). Ship collision risk threatens whales across the world’s oceans. Science, 386(6724), 870–875.",
                    url: "https://doi.org/10.1126/science.adp1950"
                },
                {
                    text: "Peel, D., Smith, J. N., & Childerhouse, S. (2018). Vessel strike of whales in Australia: The challenges of analysis of historical incident data. Frontiers in Marine Science, 5.",
                    url: "https://doi.org/10.3389/fmars.2018.00069"
                },
                {
                    text: "Pirotta, V., Grech, A., Jonsen, I. D., Laurance, W. F., & Harcourt, R. G. (2018). Consequences of global shipping traffic for marine giants. Frontiers in Ecology and the Environment, 17(1), 39–47.",
                    url: "https://doi.org/10.1002/fee.1987"
                },
                {
                    text: "Rochon, K. (2025, January 9). Sperm whale. The Canadian Encyclopedia.",
                    url: "https://www.thecanadianencyclopedia.ca/en/article/sperm-whale"
                },
                {
                    text: "Thia-Eng, C., Gorre, I. R. L., Ross, S. A., Bernad, S. R., Gervacio, B., & Ebarvia, M. C. (2000). The Malacca Straits. Marine Pollution Bulletin, 41(1–6), 160–178.",
                    url: "https://doi.org/https://doi.org/10.1016/S0025-326X(00)00108-9"
                },
                {
                    text: "Wang, B., Zhao, L., Lu, T., Li, L., Li, T., Cong, B., & Liu, S. (2025). Global hotspots of whale–ship collision risk: A multi-species framework integrating critical habitat zonation and shipping pressure for conservation prioritization. Animals, 15(14), 2144.",
                    url: "https://doi.org/10.3390/ani15142144"
                },
                {
                    text: "Western North Pacific Gray Whales. Marine Mammal Commission. (2025, January 17).",
                    url: "https://www.mmc.gov/priority-topics/species-of-concern/western-north-pacific-gray-whales/"
                },
                {
                    text: "Zaremba, H. (2026, March 11) Experts Warn of Catastrophic Environmental Fallout From Iran War. OILPRICE.com.",
                    url: "https://oilprice.com/Energy/Energy-General/Experts-Warn-of-Catastrophic-Environmental-Fallout-From-Iran-War.html"
                }
            ]
        },
        {
            section: "Data Visualization References",
            items: [
                {
                    text: "Casiker, C. (2018).",
                    url: "https://researchmatters.in/news/traversing-endless-blue-adventurous-voyages-whales"
                },
                {
                    text: "Chambault, P., Fossette, S., Heide‐Jørgensen, M. P., Jouannet, D., & Vély, M. (2021). Predicting seasonal movements and distribution of the sperm whale using machine learning algorithms. Ecology and Evolution, 11(3), 1432–1445.",
                    url: "https://doi.org/10.1002/ece3.7154"
                },
                {
                    text: "Feingold, S., & Willige, A. (2024, February 15). These are the world’s most vital waterways for Global Trade. World Economic Forum.",
                    url: "https://www.weforum.org/stories/2024/02/worlds-busiest-ocean-shipping-routes-trade/"
                },
                {
                    text: "Palacios, D., Reisinger, R., Friedlaender, A., Zerbini, A., et al. (2025). Protecting Blue Corridors Dataset - bluecorridors.org.",
                    url: "https://bluecorridors.org"
                },
                {
                    text: "Peel, D., Smith, J. N., & Childerhouse, S. (2018).",
                    url: "https://doi.org/10.3389/fmars.2018.00069"
                }
            ]
        },
        {
            section: "Suggested Citation",
            items: [
                {
                    text: "Rachel Lewars & Amelia Glaab (c), McMaster University, March 11, 2026"

                }
            ]
        }
        ])
        
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
                url: "https://roco100.github.io/3C03-Assignment/"
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

        // We are adding an array denoted by the "whalePoints" variable, to include information for each of the whale-related popups. Each button includes the following elements:
        // title = the name of the card/button
        // text = the background information regarding the associated route/whales that migrate through that area
        // image = an option to include an image in each card/button
        // cards = which hold image captions or facts about the whales impacted by shipping vessels/activities in that particular region and contains both a "text" section and "references" section (which do not have titles but allow us to separate text using space)
        // top/left = the x and y positioning of the button on the map
        // When no image or cards are present within a popup, the item is set to null, which results in nothing being coded in that space. We are using `` instead of "" for long blocks of text allows for better readability of the script; this change does not affect the final output
        
        const whalePoints = ([
        {
            activeWhalePopup: ref(false),
            title: "The North Pacific Ocean - A Humpback Whale Migratory Route",
            text: `Each year, tens of thousands of whales are killed worldwide by vessel strikes, with large species like humpbacks, 
            gray, blue, and fin whales most at risk. On the U.S. West Coast, shipping traffic near critical feeding and migration areas, 
            especially in Californian waters, has resulted in hundreds of reported collisions (Gavigan, 2025). The Gulf of Panama and 
            surrounding Pacific routes experience similar dangers, as high concentrations of breeding humpback whales intersect with heavy 
            maritime traffic transiting the Panama Canal, leading to frequent and often fatal collisions (Guzman, 2016).`,
            top: "27%",
            left: "16.10%",
            image: "humpbackWhaleMigration.jpg",
            imageCaption: 
                {
                    text: "Two humpback whales swimming along a coast.",
                    reference: "lisabskelton. (n.d.). Getty Images. https://www.thecut.com/article/two-male-humpback-whales-caught-humping.html"
                },
            cards: [
                {
                    title: null,
                    text: "Out of the 118 whale-vessel strikes reported in the U.S, 75 of them occured in Californian Waters.",
                    reference: "(Gavigan, 2025)."
                },
            ]

        }, 
        {
            activeWhalePopup: ref(false),
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
            image: "northAtlanticRightWhale.jpg",
            imageCaption: 
                {
                    text: "A north Atlantic right whale, pictured swimming along the ocean's surface.",
                    reference: "Durban, J., & Feamback, H. (n.d.). https://www.whoi.edu/ocean-learning-hub/ocean-topics/ocean-life/marine-mammals/right-whales/"
                },
            cards: null
        },
        {
            activeWhalePopup: ref(false),
            title: "Whales & Porpoises in the North Sea, Norweigan Sea, & North Atlantic Ocean",
            text: `The English Channel has recently seen an increase in sightings of several marine mammals, including harbour porpoise, 
            dolphins, killer whale (orca), sperm whale, blue whale, and humpback whale. As climate change reshapes ocean habitats, 
            many species are shifting their ranges in search of food. However, the Channel is also one of the busiest shipping corridors in the world.
            Heavy vessel traffic and fishing activity increase the risk of ship strikes and entanglement in fishing gear. Many of these whale and porpoise 
            populations cannot easily sustain these challenging pressures for long (Roe, 2024).`,
            top: "9.5%",
            left: "49.10%",
            image: "harbourPorpoise.jpg",
            imageCaption: 
                {
                    text: "A close-up image of a harbour porpoise, a small whale species",
                    reference: "AVampireTear (2008) Dan_Close_UP.PNG [Photograph].  https://commons.wikimedia.org/wiki/File:Daan_Close_Up.PNG"
                },
            cards: null
        },
        {
            activeWhalePopup: ref(false),
            title: "The Western North Pacific Gray Whales",
            text: `Up until the 1970s, the western north pacific gray whale population that once migrated along the coasts of China, Japan, Korea, and Russia was thought to be extinct (Marine Mammal Commission, n.d.). Despite recent confirmation of these animals in the North Pacific Ocean, the species remains endangered (International Union for Conservation of Nature [IUCN], 2020). The limited population of gray whales typically travel from western North America into the North Pacific Ocean in January, with some reaching waters along Asia’s east coast in June (Palacios et al., 2025).`,
            top: "19%",
            left: "90%",
            image: "grayWhale.jpg",
            imageCaption: 
                {
                    text: "A western north pacific gray whale, pictured surfacing from the ocean.",
                    reference: "The Marine Mammal Commission. (n.d.). https://www.mmc.gov/priority-topics/species-of-concern/western-north-pacific-gray-whales/"
                },
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
            activeWhalePopup: ref(false),
            title: "Blue Whale & Shipping Traffic in the South Pacific Ocean",
            text: `Studies in Northern Chilean Patagonia show that blue whale distribution overlaps with the region’s primary vessel
            traffic corridor. The area experiences intense maritime activity, particularly from aquaculture fleets, which account for 
            roughly 83% of daily vessels (and approximately 729 active boats), along with industrial fishing and cargo ships (Bedriñana-Romano, 2021).
            This overlap highlights the importance of identifying critical whale feeding and migration corridors to support conservation efforts
            and to reduce the risk of ship strikes and whale disturbances. `,
            top: "60%",
            left: "25%",
            image: "blueWhaleNearShip.jpg",
            imageCaption: 
                {
                    text: "Blue whale swimming with cargo ship in the distance.",
                    reference: "Calambokidis, J. (n.d.). Vessel Strikes [Photograph]. Cascadia Research. NOAA. https://farallones.noaa.gov/eco/whales/vessel-strikes.html   "
                },
            cards: null
        },
        {
            activeWhalePopup: ref(false),
            title: "Chilean Waters & Humpback Feeding Grounds",
            text: `Humpback whales migrate from the southern tip of South America toward warmer waters near the Panama Canal, passing through 
            shipping routes that emerge from the Strait of Magellan (Casiker, 2018). The strait is a heavily trafficked corridor with over 2,000 
            vessels transiting annually, with 80% of those vessels belonging to international fleets. This heavy boat traffic interferes with humpback whales' seasonal feeding areas near Isla Carlos III.`,
            top: "70%",
            left: "26%",
            image: "humpbackWhaleChile.jpg",
            imageCaption: 
                {
                    text: "A humpback whale jumping through the ocean's surface, off the coast of Chile.",
                    reference: "franciscobirdphoto. (n.d.). Equipo Chile Travel. https://chile.travel/en/blog/chile-a-privileged-destination-for-whale-and-dolphin-watching/"
                },
            cards: null
        },
        {
            activeWhalePopup: ref(false),
            title: "The Southern Right Whale Nursery Area",
            text: `This smaller route symbolizes the annual back-and-forth journey southern right whales make between colder feeding grounds and the warmer 
            South American coastal waters where they nurse their young. These whales feed in sub-polar waters around Antarctica and migrate to the coasts of 
            South America to calve, nurse, and breed. Although populations have been recovering at rates of roughly 7-8% per year since the end of 
            commercial whaling, they still face ongoing threats (International Whaling Commission, n.d.) from vessel traffic, overfishing, 
            and underwater noise pollution near busy shipping corridors such as those surrounding the Strait of Magellan (Bedriñana-Romano).`,
            top: "71.5%",
            left: "34.5%",
            image: "southernRightWhale.webp",
            imageCaption: 
                {
                    text: "A southern right whale swimming through clear waters.",
                    reference: "WWF Australia. (n.d.). https://wwf.org.au/what-we-do/species/southern-right-whale/"
                },
            cards: null
        },
        {
            activeWhalePopup: ref(false),
            title: "Eastern Africa and Southern Asia's Humpback & Sperm Whales",
            text: "Humpback whales commonly migrate from Sri Lanka in January, where vessels from the Malacca Strait pose collision threats. The whales then travel towards Oman, where they usually arrive in March. Following this period of migration, humpback whales tend to concentrate along the southern coast of Oman for breeding and feeding (Palacios et al., 2025). Humpback whales have also been observed migrating from South Africa in July towards the Arabian Sea, where they typically arrive in October (Palacios et al., 2025). Humpback whale movement is also common farther from the mainland coast as the mammals travel towards Madagascar (Palacios et al., 2025). These routes interact heavily with the Mozambique and Hormuz Straits, which are also located along eastern Africa and southern Asia. In addition to humpback whales in the region, sperm whale populations have also been observed travelling from the eastern coast of Madagascar towards Mauritius (Palacios et al., 2025; Chambault et al., 2021). Sperm whales following these movement patterns may be at particular risk of interacting with shipping vessels from the Mozambique Strait, especially considering the long stretches of surface time they require following deep oceanic dives (Rochon, 2025).",
            top: "46%",
            left: "64.85%",
            image: "spermWhale.jpg",
            imageCaption: 
                {
                    text: "The unique sperm whale figure shown as the animal swims through deep waters.",
                    reference: "The Marine Mammal Center. (n.d.). https://www.marinemammalcenter.org/animal-care/learn-about-marine-mammals/cetaceans/sperm-whale "
                },
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
            activeWhalePopup: ref(false),
            title: "Blue & Humpback Whales Along Australia's Coast",
            text: 'Blue whale migration patterns in this area typically begin in April as the mammals travel west along Australia’s southern coast towards the Indian Ocean (Palacios et al., 2025). Their migration typically ends north of Australia in June, in either the Timor or Philippine Sea (Palacios et al., 2025). In comparison, humpback whale migration patterns are concentrated around Australia’s western coast, where the whales travel south to north from June to August, and subsequently travel from the northern coast back down south from August to October (Palacios et al., 2025).',
            top: "60%",
            left: "78%",
            image: "blueWhaleAustralia.jpg",
            imageCaption: 
                {
                    text: "A blue whale swimming off the coast of Australia, as the sun shines brightly above.",
                    reference: "Nekrasov, A. (n.d.). Compilation video of blue whales [Photograph]. Shutterstock. BlackBoxGuild. WWF. https://wwf.org.au/what-we-do/species/blue-whale/"
                },
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

        function activateWhalePopup(point){
            if (point.activeWhalePopup.value == false) {
                point.activeWhalePopup.value = true
            } else {
                point.activeWhalePopup.value = false
            }
        }

        // We are creating a similar array, denoted by the variable shipPoints, where each popup window has the following elements: title, text, x and y positioning components, an image, and cards (which again contain both a text and reference section to allow the information to be separated using space)
        const shipPoints = ([
        {
            activeShipPopup: ref(false),
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
            imageCaption:
                {
                    text: "This heat map shows the density of ship traffic through the Panama Canal, highlighting how vessel movement extends far beyond the central channel.",
                    reference: "Marine Vessel Traffic. (n.d.). [map]. https://www.weforum.org/stories/2024/02/worlds-busiest-ocean-shipping-routes-trade/"
                } ,
            cards: null
        },
        {
            activeShipPopup: ref(false),
            title: "Magellan Strait",
            text: `The Strait of Magellan is a natural maritime passage located at the southern tip of South America, between Chilean Patagonia, 
            the island of Tierra del Fuego, and numerous smaller islands within Chilean borders. Stretching approximately 330 nautical miles 
            from Punta Dungeness in the east to the Isoletes Evangelistas in the west, it serves as one of the most important natural routes 
            connecting the Atlantic and Pacific Oceans. Today, the strait supports a wide range of vessel traffic, including large merchant ships,
            fishing vessels, tugboats, and smaller boats. It is closely monitored by the Chilean National Maritime Authority and connects widely
            used shipping routes in the Southern Oceans (Bedriñana-Romano, 2021; Guzman et al., 2020; Casiker, 2018).`,
            top: "70%",
            left: "29.10%",
            image: "magellan.jpg",
            imageCaption:
                {
                    text: "A cargo ship moving through the Magellan Strait, south of Chile.",
                    reference: "kyrylopanch. (2024). https://www.facebook.com/hapaglloydag/posts/passing-through-the-iconic-strait-of-magellan-located-at-the-southern-tip-of-sou/785517353618668/"
                },
            cards: [
                {
                    text: "Over 2000 shipping vessels and 100 migratory whales travel through the Megellan Strait annually.",
                    reference: "(Guzman et al., 2020)"
                },
                {
                    text: "Following multiple ship strikes along the strait in recent years, researchers have recommended a 10-knot vessel speed restriction during the five-month peak migration period, representing an important step towards whale life conservation.",
                    reference: "(Guzman et al., 2020)"
                }
            ]
        },
        {
            activeShipPopup: ref(false),
            title: "English Channel",
            text: `Connecting the North Sea to the Atlantic Ocean, the English Channel is one of the world's busiest shipping 
            corridors with more than 500 vessels traveling through it per day (Wilige, 2024). Spilling out into the Atlantic Ocean, the shipping 
            routes cross paths with many whale species' habitats, and migration and feeding areas, particularly affecting the endangered 
            North Atlantic Right Whale (Johnson et al., 2022).`,
            top: "19.5%",
            left: "45.60%",
            image: "english_channel.jpg",
            imageCaption:
                {
                    text: "This map depicts the dense boat traffic experienced between Southern England and Northern France, through the English Channel.",
                    reference: "Marine Vessel Traffic. (n.d.). [map]. https://www.weforum.org/stories/2024/02/worlds-busiest-ocean-shipping-routes-trade/"
                },
            cards: null
        },
        {
            activeShipPopup: ref(false),
            title: "Mozambique Channel",
            text: 'The Mozambique Channel, which passes between western Mozambique and eastern Madagascar through the Indian Ocean, is approximately 1600km long and ranges from 400 to 950km in width (Britannica Editors, 2025). The Channel serves as a major shipping route for liquefied natural gas and other energy exports but also carries container shipping, bulk cargo transport, and vessels for regional trade (Agbetiloye, 2026). The major ports of the Mozambique Channel are concentrated around southeastern Africa; however, vessels that travel to and from the more northern regions of southern Asia are also depicted by the map. The attached video provides contextual information about the Mozambique Channel and its value in creating a diverse aquatic ecosystem while supporting human life.', 
            top: "51%",
            left: "59.50%",
            image: null,
            video: "https://www.youtube.com/embed/rPvf6toJjcI?si=ZcI-T-lrJIYu8xkF",
            cards: null
        },
        {
            activeShipPopup: ref(false),
            title: "Hormuz Strait",
            text: 'The Hormuz Strait, a 55km-wide channel located between Iran and Oman, provides the Persian Gulf with its only sea passage (Britannica Editors, 2026b). The channel is known for carrying approximately 20% of the world’s liquefied natural gas and 21 million barrels of oil every year (Feingold & Willige, 2024). Although not directly implicated in reports of whale strikes, this channel contributes to dense boat traffic along the neighbouring Mozambique Strait and nearby waters (Pirotta et al., 2018). These impacts are felt by humpback whale populations as they travel towards the Strait for migration, feeding, and breeding. For visualization purposes, the Hormuz and Mozambique Straits are connected on the map although some vessel traffic may not travel through both channels.',
            top: "28.70%",
            left: "63.60%",
            image: "hormuz.jpg",
            imageCaption:
                {
                    text: "This heat map shows the extremely heavy boat traffic confined to a small area of water along the Strait of Hormuz.",
                    reference: "Marine Vessel Traffic. (n.d.). [map]. https://www.weforum.org/stories/2024/02/worlds-busiest-ocean-shipping-routes-trade/"
                },
            cards: [
                {
                    text: "As of mid-March 2026, and amid ongoing conflict in the Middle East, the Strait of Hormuz has experienced severe shipping disruptions. The Iranian regime has created these disruptions to prevent foreign countries from receiving goods and important materials, and leverages their ability to do so as a negotiating tactic in the war. As a result, many vessels have been blocked from entering the strait, major oil exports have not reached foreign countries, and gas prices have risen across the world. The conflict has also led to explosions both above and below the ocean's surface. For whales, such as the humpback whales who will soon migrate through the waters surrounding the Strait of Hormuz, the explosions can be disorienting, physically harmful, and anxiety-inducing.",
                    reference: "(Griehsel, 2026)"
                },
                {
                    text:"Although closures of the Strait of Hormuz may temporarily reduce shipping traffic, other environmental threats continue to impact ocean life. Attacks on regional energy infrastructure have released pollutants, including toxic “black rain” formed from smoke and hydrocarbons, into the air and sea. These contaminants can settle into Gulf waters and contribute to marine pollution along the coastline, further disrupting ocean ecosystems.",
                    reference: "(Zaremba, 2026)"
                }
            ]
        },
        {
            activeShipPopup: ref(false),
            title: "Malacca Strait",
            text: 'The Malacca Strait connects the Indian and Pacific Oceans through ports on the coasts of Indonesia, Malaysia, and Singapore (Thia-Eng et al., 2000). 94,000 ships travel through the Strait annually, carrying approximately 30% of all global trading goods (Feingold & Willige, 2024). The channel runs over 800km long but is only 65km wide at its most narrow point (Britannica Editors, 2026a), making it prone to ship congestion and whale-ship collisions, and posing significant risk to the gray, humpback, and blue whales that migrate through surrounding waters (Feingold & Willige, 2024; Wang et al., 2025).',
            top: "43%",
            left: "77.5%",
            image: "malacca_strait.jpg",
            imageCaption:
                {
                    text:"The Malacca Strait is depicted as a heat map, showing the density of boats which pass through the major ports along the strait.",
                    reference: "Marine Vessel Traffic. (n.d.). [map]. https://www.weforum.org/stories/2024/02/worlds-busiest-ocean-shipping-routes-trade/"
                },
            cards: null
        }
        ])

        // function to open/close the ship pop ups, based on lab 5
        function activateShipPopup(point){
            if (point.activeShipPopup.value == false) {
                point.activeShipPopup.value = true
            } else {
                point.activeShipPopup.value = false
            }
        }

        // example of animated maritime routes; we have kept these initial coding lines in this file and plan on building on this initial code/playing around with the sparkline component further to implement the lines across all the routes as long as doing so is feasible
        const maritimeRoutes = ref([
            {
                name: "North America to Europe",
                route: [10, 25, 50, 75,0],
                top: "49%",
                left: "30%",
                width: "20%",
                height: "4%",
                lineHeight: 200,
                lineWidth: 5,
                transform: "rotate(-8deg) scale(1.2,1)"
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
                route: [0, 10, -5, 15, 18],
                top: "30%",
                left: "70%",
                width: "20%",
                height: "30%",
                lineHeight: 200,
                lineWidth: 10,
                transform: "rotate(0deg)"
            }
        ])

        return {
            references,
            openDrawer,
            toggleDrawer,
            projects,
            panel,
            whalePoints,
            shipPoints,
            activateShipPopup,
            activateWhalePopup,
            maritimeRoutes, 
            findCoordinates
        }
    }
}

createApp(App).use(vuetify).mount('#app');