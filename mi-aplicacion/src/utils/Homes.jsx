const homes = [
    {
        id: "001",
        price: "870.000 €",
        location: "Negurigane, Leioa",
        type: {
            es: "Adosado",
            en: "Terraced House"
        },
        built_m2: 300,
        usable_m2: 290,
        bedrooms: 5,
        bathrooms: 4,
        terrace: true,
        balcony: true,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur", "Este"],
        garage: true,
        pool: true,
        garden: true,
        private_urbanization: true,
        chimney: true,
        txoko: true,
        laundry: true,
        attic: true,
        elevator: false,
        year_built: null,
        parcel_m2: null,
        exact_location: {
            es: "Basañese 2, Negurigane-Peruri, Leioa",
            en: "Basañese 2, Negurigane-Peruri, Leioa"
        },
        title: {
            es: "Chalet adosado en urbanización privada con piscina",
            en: "Terraced house in private urbanization with pool"
        },
        description: {
            es: "Chalet de 300 m² en urbanización cerrada, ideal para familias. 5 habitaciones, 4 baños, amplio salón con chimenea, cocina con zona de comedor y acogedor ático. Garaje cerrado para dos coches, trastero, txoko, terraza, balcón y jardín privado. Seguridad, comodidad y amplitud en un entorno excepcional.",
            en: "300 m² terraced house in a gated community, ideal for families. 5 bedrooms, 4 bathrooms, spacious living room with fireplace, kitchen with dining area, and cozy attic. Private garage for two cars, storage room, txoko, terrace, balcony, and private garden. Security, comfort, and spaciousness in an exceptional environment."
        },
        sold: false
    },
    {
        id: "002",
        price: "1.300.000 €",
        location: "Berango",
        type: {
            es: "Chalet",
            en: "Detached House"
        },
        built_m2: 600,
        usable_m2: 350,
        bedrooms: 4,
        bathrooms: 4,
        terrace: true,
        balcony: true,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur", "Este"],
        garage: true,
        pool: true,
        garden: true,
        private_urbanization: false,
        chimney: false,
        txoko: true,
        laundry: false,
        attic: false,
        elevator: false,
        year_built: 2008,
        parcel_m2: 750,
        exact_location: {
            es: null,
            en: null
        },
        title: {
            es: "Vivienda Familiar con piscina y jardín",
            en: "Family Home with Pool and Garden"
        },
        description: {
            es: "Chalet independiente de 600 m² en una de las mejores zonas de Berango. 4 habitaciones, 4 baños, cocina con isla, salón-comedor con salida al jardín, txoko equipado y piscina cubierta. Orientación excelente, mucha luz natural y ubicación privilegiada cerca de playas y servicios.",
            en: "600 m² detached house in one of the best areas of Berango. 4 bedrooms, 4 bathrooms, kitchen with island, living-dining room with access to the garden, equipped txoko, and indoor swimming pool. Excellent orientation, lots of natural light, and prime location near beaches and services."
        },
        sold: false
    },
    {
        id: "003",
        price: "550.000 €",
        location: "Las Arenas, Getxo",
        type: {
            es: "Bajo",
            en: "Ground Floor Apartment"
        },
        built_m2: 128,
        usable_m2: 119,
        bedrooms: 3,
        bathrooms: 2,
        terrace: true,
        balcony: false,
        built_in_wardrobes: true,
        storage_room: false,
        orientation: ["Norte", "Este"],
        garage: true,
        pool: false,
        garden: false,
        private_urbanization: true,
        chimney: false,
        txoko: false,
        laundry: false,
        attic: false,
        elevator: true,
        year_built: 1986,
        parcel_m2: null,
        exact_location: {
            es: "Villa de Plentzia Kalea s/n, Villa Plentzia, Las Arenas, Getxo",
            en: "Villa de Plentzia Street s/n, Villa Plentzia, Las Arenas, Getxo"
        },
        title: {
            es: "Bajo con Tres Habitaciones y Terraza en el Antiguo Golf",
            en: "Ground Floor with Three Bedrooms and Terrace in the Old Golf Area"
        },
        description: {
            es: "Magnífico bajo reformado de 128 m² en Getxo, con tres habitaciones, dos baños y amplia terraza privada. Ubicado en urbanización privada y tranquila, cerca del metro de Gobela y zonas verdes. Ideal para disfrutar de la vida en Getxo.",
            en: "Magnificent renovated 128 m² ground floor in Getxo, with three bedrooms, two bathrooms, and a large private terrace. Located in a private and quiet urbanization, close to Gobela metro station and green areas. Perfect to enjoy life in Getxo."
        },
        sold: false
    },
    {
        id: "004",
        price: "690.000 €",
        location: "Artaza",
        type: {
            es: "Ático",
            en: "Penthouse"
        },
        built_m2: 162,
        usable_m2: 159,
        bedrooms: 5,
        bathrooms: 2,
        terrace: true,
        balcony: true,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur"],
        garage: true,
        pool: false,
        garden: true,
        private_urbanization: false,
        chimney: true,
        txoko: false,
        laundry: true,
        attic: false,
        elevator: true,
        year_built: 1998,
        parcel_m2: null,
        exact_location: {
            es: "Landabarri Bidea s/n, Artatza-Pinueta-Pinosolo, Leioa",
            en: "Landabarri Bidea s/n, Artatza-Pinueta-Pinosolo, Leioa"
        },
        title: {
            es: "Ático con Terraza y Amplios Espacios para Diseñar a Tu Gusto",
            en: "Penthouse with Terrace and Spacious Areas to Customize"
        },
        description: {
            es: "Exclusivo ático de 160 m² con 5 dormitorios y 4 terrazas, muy luminoso y con amplios espacios para personalizar. Salón con techos altos, chimenea y grandes ventanales. Cocina flexible, zona de lavandería y dormitorio principal con baño en suite y terraza privada. Incluye trastero y 2 plazas de garaje.",
            en: "Exclusive 160 m² penthouse with 5 bedrooms and 4 terraces, very bright and with spacious areas to customize. Living room with high ceilings, fireplace, and large windows. Flexible kitchen, laundry area, and master bedroom with en-suite bathroom and private terrace. Includes storage room and 2 parking spaces."
        },
        sold: false
    },
    {
        id: "005",
        price: "- €",
        location: "Negurigane",
        type: {
            es: "Chalet",
            en: "Detached House"
        },
        built_m2: 300,
        usable_m2: 255,
        bedrooms: 4,
        bathrooms: 4,
        terrace: true,
        balcony: false,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur", "Este", "Oeste"],
        garage: true,
        pool: false,
        garden: true,
        private_urbanization: false,
        chimney: false,
        txoko: true,
        laundry: false,
        attic: false,
        elevator: false,
        year_built: 2000,
        parcel_m2: 120,
        exact_location: {
            es: "Calle Basañese s/n, Negurigane-Peruri, Leioa",
            en: "Calle Basañese s/n, Negurigane-Peruri, Leioa"
        },
        title: {
            es: "Chalet Pareado en Artaza",
            en: "Semi-Detached House in Artaza"
        },
        description: {
            es: "Impresionante chalet pareado de 300 m² en Artaza, con 4 plantas y una distribución funcional. Cuenta con un amplio salón, cocina luminosa, 4 habitaciones, 3 baños y un txoko con cocina completa en el sótano. Ubicado en una zona tranquila cerca de la playa y servicios, ofrece amplios espacios, armarios empotrados y vistas al jardín. Ideal para disfrutar de la comodidad y privacidad en un entorno único.",
            en: "Impressive 300 m² semi-detached house in Artaza, with 4 floors and a functional layout. Features a spacious living room, bright kitchen, 4 bedrooms, 3 bathrooms, and a txoko with a fully equipped kitchen in the basement. Located in a quiet area close to the beach and amenities, offering spacious rooms, built-in wardrobes, and garden views. Ideal for comfort and privacy in a unique setting."
        },
        sold: true
    },
    {
        id: "006",
        price: "- €",
        location: "Artaza",
        type: {
            es: "Piso",
            en: "Apartment"
        },
        built_m2: 126,
        usable_m2: 125,
        bedrooms: 3,
        bathrooms: 2,
        terrace: true,
        balcony: false,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur"],
        garage: true,
        pool: true,
        garden: false,
        private_urbanization: true,
        chimney: false,
        txoko: false,
        laundry: false,
        attic: false,
        elevator: true,
        year_built: null,
        parcel_m2: null,
        exact_location: {
            es: "Calle Zarrageta Kalea 12, Negurigane-Peruri, Leioa",
            en: "Calle Zarrageta Kalea 12, Negurigane-Peruri, Leioa"
        },
        title: {
            es: "Piso con Terraza en Urbanización con Piscina",
            en: "Apartment with Terrace in Gated Community with Pool"
        },
        description: {
            es: "Amplia y luminosa vivienda de 125 m² en el centro de Artaza, en urbanización cerrada con piscina. Consta de un salón con terraza, cocina amplia con comedor y dos terrazas. Tiene tres habitaciones con armarios empotrados, incluido un dormitorio principal con baño privado. Incluye dos plazas de garaje, trastero y piscina comunitaria.",
            en: "Spacious and bright 125 m² apartment in the center of Artaza, in a gated community with pool. It consists of a living room with terrace, a large kitchen with dining area and two terraces. It has three bedrooms with built-in wardrobes, including a master bedroom with en-suite bathroom. Includes two parking spaces, a storage room, and a communal swimming pool."
        },
        sold: true
    },
    {
        id: "007",
        price: "460.000 €",
        location: "Artaza",
        type: {
            es: "Dúplex",
            en: "Duplex Penthouse"
        },
        built_m2: 90,
        usable_m2: null,
        bedrooms: 2,
        bathrooms: 2,
        terrace: true,
        balcony: false,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur", "Oeste"],
        garage: true,
        pool: false,
        garden: false,
        private_urbanization: false,
        chimney: true,
        txoko: false,
        laundry: false,
        attic: true,
        elevator: true,
        year_built: 2000,
        parcel_m2: null,
        exact_location: {
            es: "Barrio Artatza 2, Artatza-Pinueta-Pinosolo, Leioa",
            en: "Barrio Artatza 2, Artatza-Pinueta-Pinosolo, Leioa"
        },
        title: {
            es: "Ático Dúplex en Artaza con Plaza de Garaje y Trastero",
            en: "Duplex Penthouse in Artaza with Parking Space and Storage"
        },
        description: {
            es: "Fantástico ático dúplex en Artaza, con excelente orientación sur-este, ofreciendo luz natural todo el día. La planta principal tiene un salón-comedor con chimenea, cocina independiente, un dormitorio y baño completo. En la planta superior se encuentra el dormitorio principal con zona de despacho, armarios empotrados y acceso a una terraza de 10 m², además de un segundo baño. Incluye plaza de garaje y trastero. Perfecta para renovar y aprovechar una vivienda única en zona residencial.",
            en: "Fantastic duplex penthouse in Artaza, with excellent southeast orientation, offering natural light all day. The main floor features a living-dining room with a fireplace, independent kitchen, one bedroom, and a full bathroom. The upper floor houses the master bedroom with a study area, built-in wardrobes, and access to a 10 m² terrace, as well as a second bathroom. Includes a parking space and storage room. Perfect for renovation and enjoying a unique home in a residential area."
        },
        sold: false
    },
    {
        id: "008",
        price: "495.000 €",
        location: "Centro Leioa",
        type: {
            es: "Piso",
            en: "Flat"
        },
        built_m2: 118,
        usable_m2: 108,
        bedrooms: 3,
        bathrooms: 2,
        terrace: true,
        balcony: false,
        built_in_wardrobes: false,
        storage_room: true,
        orientation: ["Sur", "Este"],
        garage: true,
        pool: false,
        garden: false,
        private_urbanization: false,
        chimney: false,
        txoko: false,
        laundry: false,
        attic: false,
        elevator: true,
        year_built: null,
        parcel_m2: null,
        exact_location: {
            es: "Calle Independencia s/n, Centro Urbano-Hirigunea, Leioa",
            en: "Calle Independencia s/n, Centro Urbano-Hirigunea, Leioa"
        },
        title: {
            es: "Vivienda Nueva en Leioa, Ideal para Entrar a Vivir",
            en: "New Home in Leioa, Ready to Move In"
        },
        description: {
            es: "Piso recién reformado en el centro de Leioa, cerca de tiendas, bares, supermercados y metro. Acabados de lujo, muebles de diseño, tres habitaciones amplias, dos baños completos, salón con acceso a terraza privada y cocina equipada. Totalmente amueblado y listo para entrar a vivir.",
            en: "Recently renovated flat in the center of Leioa, close to shops, bars, supermarkets, and metro station. Luxury finishes, designer furniture, three spacious bedrooms, two full bathrooms, living room with access to a private terrace, and equipped kitchen. Fully furnished and ready to move in."
        },
        sold: false
    },
    {
        id: "009",
        price: "625.000 €",
        location: "Negurigane",
        type: {
            es: "Bajo",
            en: "Ground Floor"
        },
        built_m2: 110,
        usable_m2: 100,
        bedrooms: 3,
        bathrooms: 2,
        terrace: true,
        balcony: false,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Este", "Oeste"],
        garage: true,
        pool: false,
        garden: true,
        private_urbanization: false,
        chimney: false,
        txoko: false,
        laundry: true,
        attic: false,
        elevator: true,
        year_built: 2014,
        parcel_m2: null,
        exact_location: {
            es: "San Bartolomé 19, Negurigane-Peruri, Leioa",
            en: "San Bartolomé 19, Negurigane-Peruri, Leioa"
        },
        title: {
            es: "Amplia Vivienda con Espacios Exteriores Privados en Artaza",
            en: "Spacious Home with Private Outdoor Areas in Artaza"
        },
        description: {
            es: "Bajo con jardín privado en zona residencial tranquila. 110 m² con salón y cocina con acceso directo al exterior, tres habitaciones, dos baños y tendedero. Ideal para disfrutar en familia con barbacoa, solárium y huerto. Incluye garaje y trastero.",
            en: "Ground floor with private garden in a quiet residential area. 110 m² with living room and kitchen with direct access to the outside, three bedrooms, two bathrooms, and laundry area. Ideal for family life with barbecue, solarium, and garden. Includes garage and storage room."
        },
        sold: false
    },
    {
        id: "010",
        price: "1.250.000 €",
        location: "Sarriena",
        type: {
            es: "Chalet",
            en: "Detached House"
        },
        built_m2: 500,
        usable_m2: 480,
        bedrooms: 7,
        bathrooms: 6,
        terrace: true,
        balcony: true,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur"],
        garage: true,
        pool: true,
        garden: true,
        private_urbanization: false,
        chimney: true,
        txoko: true,
        laundry: true,
        attic: false,
        elevator: false,
        year_built: 1983,
        parcel_m2: null,
        exact_location: {
            es: "Sarriena s/n, Aldekoena-Artatzagana-Sarriena, Leioa",
            en: "Sarriena s/n, Aldekoena-Artatzagana-Sarriena, Leioa"
        },
        title: {
            es: "Arquitectura de autor en una vivienda única con jardín y luz natural",
            en: "Author's Architecture in a Unique Home with Garden and Natural Light"
        },
        description: {
            es: "Chalet exclusivo de 500 m² diseñado por Iñigo Basáñez, ubicado en una colina con vistas panorámicas y orientación sur. Cuenta con 7 dormitorios (3 en suite), 4 baños, aseo, salón a diferentes alturas con chimenea, porche cerrado, txoko, garaje doble, piscina y jardín de 2.170 m².",
            en: "Exclusive 500 m² detached house designed by Iñigo Basáñez, located on a hill with panoramic views and south orientation. Features 7 bedrooms (3 en suite), 4 bathrooms, a guest toilet, multi-level living room with fireplace, enclosed porch, txoko, double garage, swimming pool, and a 2,170 m² garden."
        },
        sold: false
    },
    {
        id: "011",
        price: "- €",
        location: "Negurigane",
        type: {
            es: "Adosado",
            en: "Terraced House"
        },
        built_m2: 325,
        usable_m2: 300,
        bedrooms: 5,
        bathrooms: 4,
        terrace: true,
        balcony: false,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur", "Este"],
        garage: true,
        pool: false,
        garden: true,
        private_urbanization: false,
        chimney: false,
        txoko: false,
        laundry: false,
        attic: false,
        elevator: false,
        year_built: 2006,
        parcel_m2: null,
        exact_location: {
            es: "Calle Basañese Kalea 67, Negurigane-Peruri, Leioa",
            en: "Calle Basañese Kalea 67, Negurigane-Peruri, Leioa"
        },
        title: {
            es: "Vivienda recién reformada de 5 Habitaciones en Artaza",
            en: "Recently Renovated 5-Bedroom Home in Artaza"
        },
        description: {
            es: "Chalet adosado de 300 m² en Negurigane, con 5 habitaciones, 2 jardines privados y 4 plantas. Ubicado en una zona tranquila y bien comunicada, cerca de Jolaseta. La propiedad ha sido recién reformada y está lista para habitar, con una distribución funcional y espacios amplios. Ideal para quienes buscan comodidad y calidad de vida.",
            en: "300 m² terraced house in Negurigane, with 5 bedrooms, 2 private gardens, and 4 floors. Located in a quiet and well-connected area, near Jolaseta. The property has been recently renovated and is ready to move in, featuring a functional layout and spacious areas. Ideal for those seeking comfort and quality of life."
        },
        sold: true
    },
    {
        id: "012",
        price: "- €",
        location: "Las Arenas",
        type: {
            es: "Piso",
            en: "Flat"
        },
        built_m2: 112,
        usable_m2: 105,
        bedrooms: 3,
        bathrooms: 2,
        terrace: false,
        balcony: false,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Este", "Oeste"],
        garage: true,
        pool: false,
        garden: false,
        private_urbanization: false,
        chimney: false,
        txoko: false,
        laundry: false,
        attic: false,
        elevator: true,
        year_built: null,
        parcel_m2: null,
        exact_location: {
            es: "Calle Villa de Plentzia Kalea s/n, Villa Plentzia, Las Arenas, Getxo",
            en: "Calle Villa de Plentzia Kalea s/n, Villa Plentzia, Las Arenas, Getxo"
        },
        title: {
            es: "Piso en el Corazón del Antiguo Golf, Getxo",
            en: "Flat in the Heart of Antiguo Golf, Getxo"
        },
        description: {
            es: "Piso amplio y luminoso en la exclusiva zona del Antiguo Golf, Getxo, a minutos del metro de Gobela. Con 3 dormitorios, 2 baños (uno en suite), salón-comedor con chimenea y cocina equipada. El edificio cuenta con ascensores, acceso sin barreras y vigilancia nocturna. Además, tiene orientación este-oeste, plaza de garaje, trastero, ventanas de doble acristalamiento y calefacción central con contador individual. Ideal para quienes buscan comodidad y calidad de vida.",
            en: "Spacious and bright flat in the exclusive area of Antiguo Golf, Getxo, just minutes from the Gobela metro. With 3 bedrooms, 2 bathrooms (one en suite), living-dining room with fireplace, and equipped kitchen. The building features elevators, barrier-free access, and night surveillance. Additionally, it has an east-west orientation, garage space, storage room, double-glazed windows, and central heating with individual meters. Ideal for those seeking comfort and quality of life."
        },
        sold: true
    },
    {
        id: "013",
        price: "510.000 €",
        location: "Negurigane",
        type: {
            es: "Bajo",
            en: "Ground Floor"
        },
        built_m2: 110,
        usable_m2: 90,
        bedrooms: 3,
        bathrooms: 2,
        terrace: true,
        balcony: false,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur", "Oeste"],
        garage: true,
        pool: false,
        garden: true,
        private_urbanization: false,
        chimney: false,
        txoko: false,
        laundry: true,
        attic: false,
        elevator: true,
        year_built: 2012,
        parcel_m2: null,
        exact_location: {
            es: "Telleria 1, Negurigane-Peruri, Leioa",
            en: "Telleria 1, Negurigane-Peruri, Leioa"
        },
        title: {
            es: "Moderno Bajo con Jardín en zona residencial",
            en: "Modern Ground Floor with Garden in Residential Area"
        },
        description: {
            es: "Se vende bajo con jardín en Artaza, ideal para familias y teletrabajo. Reformado con diseño moderno, cuenta con salón luminoso, cocina equipada, tres dormitorios y dos baños. Jardín de bajo mantenimiento, dos trasteros y garaje. A pocos minutos de Jolaseta, metro y bus. Zona residencial tranquila y bien conectada.",
            en: "Ground floor with garden in Artaza, ideal for families and teleworking. Recently renovated with modern design, features a bright living room, equipped kitchen, three bedrooms, and two bathrooms. Low-maintenance garden, two storage rooms, and garage. Just a few minutes from Jolaseta, metro, and bus. Quiet residential area with great connections."
        },
        sold: false
    },
    {
        id: "014",
        price: "- €",
        location: "Mungia",
        type: {
            es: "Chalet",
            en: "Detached House"
        },
        built_m2: 850,
        usable_m2: 800,
        bedrooms: 6,
        bathrooms: 5,
        terrace: true,
        balcony: true,
        built_in_wardrobes: true,
        storage_room: true,
        orientation: ["Sur", "Este", "Oeste"],
        garage: true,
        pool: true,
        garden: true,
        private_urbanization: false,
        chimney: true,
        txoko: true,
        laundry: true,
        attic: false,
        elevator: false,
        year_built: 2008,
        parcel_m2: null,
        exact_location: {
            es: "Mitxelene Bidea s/n, Mungia",
            en: "Mitxelene Bidea s/n, Mungia"
        },
        title: {
            es: "Exclusivo Chalet Unifamiliar con Piscina en Entorno Rural Cerca de Bilbao",
            en: "Exclusive Detached Chalet with Pool in Rural Setting Near Bilbao"
        },
        description: {
            es: "Chalet unifamiliar a 20 minutos de Bilbao, en un entorno rural con acceso a playas, campo de golf y servicios cercanos. Con 800 m² construidos en cuatro plantas y 3,000 m² de terreno, cuenta con jardín, piscina con spa y pozo propio. La planta baja incluye garaje, salón con chimenea, comedor, cocina, dos habitaciones y dos baños. En la primera planta, dispone de dos suites con vestidor y baño, dos habitaciones adicionales, baño con hidromasaje, lavandería y despacho con terraza. La última planta tiene torreón y espacio diáfano. Materiales de alta calidad como la madera sucupira y calefacción por gasoil.",
            en: "Detached chalet 20 minutes from Bilbao, in a rural setting with access to beaches, a golf course, and nearby services. With 800 m² built over four floors and 3,000 m² of land, it features a garden, pool with spa, and its own well. The ground floor includes a garage, living room with fireplace, dining room, kitchen, two bedrooms, and two bathrooms. The first floor has two suites with dressing rooms and bathrooms, two additional bedrooms, a hydro-massage bathroom, laundry, and office with terrace. The top floor features a turret and open space. High-quality materials like sucupira wood and oil heating."
        },
        sold: true
    },
    {
        "id": "015",
        price: "- €",
        "location": "Algorta",
        "type": {
            "es": "Piso",
            "en": "Apartment"
        },
        "built_m2": 110,
        "usable_m2": 108,
        "bedrooms": 3,
        "bathrooms": 2,
        "terrace": true,
        "balcony": false,
        "built_in_wardrobes": true,
        "storage_room": true,
        "orientation": ["Sur", "Este"],
        "garage": true,
        "pool": false,
        "garden": false,
        "private_urbanization": false,
        "chimney": false,
        "txoko": false,
        "laundry": false,
        "attic": false,
        "elevator": true,
        "year_built": 0,
        "exact_location": {
            "es": "Calle Jaime Morera Kalea 6, Zona Usategui - Trinitarios, Algorta, Getxo",
            "en": "Calle Jaime Morera Kalea 6, Zona Usategui - Trinitarios, Algorta, Getxo"
        },
        "title": {
            "es": "Vivienda Reformada con Amplia Terraza en Algorta",
            "en": "Renovated Apartment with Large Terrace in Algorta"
        },
        "description": {
            "es": "Piso reformado en una de las mejores zonas de Algorta, a pocos minutos del metro de Bidezabal. Con orientación sur-este, cuenta con suelos radiantes, hilo musical y carpintería lacada en blanco. Dispone de un salón-comedor con terraza y vistas al mar, cocina equipada con electrodomésticos de alta gama, tres habitaciones con armarios empotrados y dos baños reformados. Incluye plaza de garaje, trastero con ventana y acceso directo, y un solárium con vistas panorámicas de 180 grados.",
            "en": "Renovated apartment in one of the best areas of Algorta, just a few minutes from the Bidezabal metro station. With southeast orientation, it features underfloor heating, sound system, and white lacquered carpentry. The living-dining room includes a terrace with sea views, a fully equipped kitchen with high-end appliances, three bedrooms with built-in wardrobes, and two renovated bathrooms. Includes a garage space, storage room with window and direct access, and a solarium with 180-degree panoramic views."
        },
        "sold": true
    },
    {
        "id": "016",
        "price": "770.000 €",
        "location": "Negurigane",
        "type": {
            "es": "Adosado",
            "en": "Semi-Detached House"
        },
        "built_m2": 300,
        "usable_m2": 253,
        "bedrooms": 5,
        "bathrooms": 4,
        "terrace": true,
        "balcony": false,
        "built_in_wardrobes": true,
        "storage_room": true,
        "orientation": ["Norte", "Sur"],
        "garage": true,
        "pool": false,
        "garden": true,
        "private_urbanization": false,
        "chimney": false,
        "txoko": true,
        "laundry": false,
        "attic": true,
        "elevator": true,
        "year_built": 0,
        "exact_location": {
            "es": "Calle Negurigane s/n, Negurigane-Peruri, Leioa",
            "en": "Calle Negurigane s/n, Negurigane-Peruri, Leioa"
        },
        "title": {
            "es": "Vivienda Familiar con Jardines y Amplios Espacios en Artaza",
            "en": "Family Home with Gardens and Spacious Areas in Artaza"
        },
        "description": {
            "es": "Espectacular chalet adosado en Basañese (Negurigane), a pocos minutos de Neguri y con excelente conexión a servicios. Con 253 m² distribuidos en 4 plantas, cuenta con 5 habitaciones, 4 baños y ascensor desde el sótano hasta el ático. Dispone de dos jardines, sótano con posibilidad de txoko, garaje con portón mecánico y terrazas exteriores. La planta baja incluye salón, cocina-comedor y aseo; la segunda planta tiene 3 habitaciones y 2 baños; el ático cuenta con 2 habitaciones y un baño completo. Ideal para familias.",
            "en": "Spectacular semi-detached house in Basañese (Negurigane), just minutes from Neguri with excellent access to services. With 253 m² distributed over 4 floors, it includes 5 bedrooms, 4 bathrooms, and an elevator from the basement to the attic. The house has two gardens, a basement with potential for a txoko, a garage with a mechanical gate, and outdoor terraces. The ground floor includes a living room, kitchen-dining room, and guest toilet; the second floor has 3 bedrooms and 2 bathrooms; the attic has 2 bedrooms and a full bathroom. Ideal for families."
        },
        "sold": false
    },
    {
        "id": "017",
        "price": "545.000 €",
        "location": "Centro Leioa",
        "type": {
            "es": "Ático",
            "en": "Penthouse"
        },
        "built_m2": 167,
        "usable_m2": 167,
        "bedrooms": 4,
        "bathrooms": 3,
        "terrace": true,
        "balcony": false,
        "built_in_wardrobes": true,
        "storage_room": true,
        "orientation": ["Norte", "Este"],
        "garage": true,
        "pool": false,
        "garden": false,
        "private_urbanization": false,
        "chimney": false,
        "txoko": false,
        "laundry": false,
        "attic": false,
        "elevator": true,
        "year_built": 0,
        "exact_location": {
            "es": "Calle Estartetxe Kalea s/n, Centro Urbano-Hirigunea, Leioa",
            "en": "Calle Estartetxe Kalea s/n, Centro Urbano-Hirigunea, Leioa"
        },
        "title": {
            "es": "Espectacular Vivienda con 40 m² de Terraza y Excelente Distribución",
            "en": "Spectacular Home with 40 m² Terrace and Excellent Layout"
        },
        "description": {
            "es": "Fantástico piso en zona tranquila, a pocos minutos del Colegio Inglés. Distribuido en dos plantas, la principal cuenta con cocina equipada, amplio salón-comedor, habitación versátil y baño completo. En la segunda planta se encuentra la habitación principal con vestidor y baño en suite, dos habitaciones adicionales y baño. Además, ofrece una terraza de 40 m², trastero y plaza de garaje. Perfecto para quienes valoran el espacio y la funcionalidad.",
            "en": "Fantastic apartment in a quiet area, just a few minutes from the Colegio Inglés. Distributed over two floors, the main floor includes a fully equipped kitchen, spacious living-dining room, versatile room, and a full bathroom. The second floor has the master bedroom with a dressing room and en suite bathroom, two additional bedrooms, and a bathroom. It also features a 40 m² terrace, storage room, and garage space. Perfect for those who value space and functionality."
        },
        "sold": false
    },
    {
        "id": "018",
        "price": "440.000 €",
        "location": "Artaza",
        "type": {
            "es": "Piso",
            "en": "Apartment"
        },
        "built_m2": 79,
        "usable_m2": 79,
        "bedrooms": 1,
        "bathrooms": 1,
        "terrace": false,
        "balcony": false,
        "built_in_wardrobes": true,
        "storage_room": true,
        "orientation": ["Oeste"],
        "garage": true,
        "pool": false,
        "garden": false,
        "private_urbanization": false,
        "chimney": false,
        "txoko": false,
        "laundry": false,
        "attic": false,
        "elevator": true,
        "year_built": 0,
        "exact_location": {
            "es": "Lekueder s/n, Artatza-Pinueta-Pinosolo, Leioa",
            "en": "Lekueder s/n, Artatza-Pinueta-Pinosolo, Leioa"
        },
        "title": {
            "es": "Moderno Piso en Leioa con Garaje, Trastero y Diseño Exclusivo",
            "en": "Modern Apartment in Leioa with Garage, Storage, and Exclusive Design"
        },
        "description": {
            "es": "Piso de diseño, con garaje y trastero, a pocos minutos de todos los servicios esenciales del día a día. Reformado con un amplio dormitorio principal y vestidor, con espacio adicional adaptable a gimnasio, oficina o dormitorio de invitados. El baño cuenta con doble lavabo, ducha y sanitario inwash de Roca, mientras que la cocina Santos está equipada con electrodomésticos de alta gama. El salón luminoso con grandes ventanales y un elegante hall de entrada completan esta vivienda, diseñada para maximizar el espacio.",
            "en": "Design apartment, with garage and storage, just a few minutes from all essential daily services. Renovated with a spacious master bedroom and dressing room, with additional space adaptable to a gym, office, or guest bedroom. The bathroom features double sinks, a shower, and a Roca inwash toilet, while the Santos kitchen is equipped with high-end appliances. The bright living room with large windows and an elegant entrance hall complete this home, designed to maximize space."
        },
        "sold": false
    }
];
