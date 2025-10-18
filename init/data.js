const sampleListings = [
  {
    title: "Luxury Villa in Santorini",
    description: "Enjoy breathtaking sunsets from this cliffside villa overlooking the Aegean Sea.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 9200,
    location: "Santorini",
    country: "Greece",
    cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
    category: "Poolside",
    geometry: {
      type: "Point",
      coordinates: [25.461510, 36.393154] 
    },//longitude first, then latitude
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Private Pool",
      "Gym",
      "Breakfast Included",
      "TV",
      "Laundry Service",
      "24/7 Reception"
    ],
  },
  {
    title: "Countryside Farmhouse",
    description: "Relax in this rustic farmhouse surrounded by rolling hills and open fields.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 950,
    location: "Lancashire",
    country: "United Kingdom",
    cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
    category: "Rural Retreats",
    geometry: {
      type: "Point",
      coordinates: [-2.801000, 54.047001]
    },
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Gym",
      "Breakfast Included",
      "TV",
      "Laundry Service",
      "24/7 Reception"
    ],
  },
  {
    title: "Urban Studio Apartment",
    description: "Compact and modern studio in the heart of the city, ideal for solo travelers.",
    images: [
      {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602830356227-806419f5279d?q=80&w=728&auto=format&fit=crop"
      }
    ],
    price: 7000,
    location: "Berlin",
    country: "Germany",
    cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
    category: "Iconic Cities",
    geometry: {
      type: "Point",
      coordinates: [13.404954, 52.520008] 
    },
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Parking",
      "Breakfast Included",
      "TV",
      "Laundry Service",
      "24/7 Reception"
    ],
  },
  {
  title: "Lakeview Cottage",
  description: "Wake up to serene lake views in this cozy lakeside cottage.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1621983209348-7b5a63f23866?q=80&w=1170&auto=format&fit=crop"
    }
  ],
  price: 8100,
  location: "Ontario",
  country: "Canada",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [-85.00000,50.00000] 
  },
  amenities: [
    "WiFi",
    "Parking",
    "Breakfast Included",
    "TV",
    "Laundry Service",
    "Air Conditioning",
    "Heating"
  ],
},
  {
  title: "Desert Dome Retreat",
  description: "Experience off-grid living in this futuristic dome nestled in the desert.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1588310310084-6777fbeb408c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 9300,
  location: "Joshua Tree",
  country: "United States",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Mansions",
  geometry: {
    type: "Point",
    coordinates: [-115.900650,33.881866] 
  },
  amenities: [
    "WiFi",
    "Parking",
    "Breakfast Included",
    "Air Conditioning",
    "Heating",
  "Hiking Trails"
  ],
},
  {
  title: "Floating Cabin",
  description: "Stay afloat in this unique cabin built on a peaceful river.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1605848312612-bfc9e8b12d56?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 6400,
  location: "Bangkok",
  country: "Thailand",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "The Riviera",
  geometry: {
    type: "Point",
    coordinates: [100.523186, 13.736717] 
  },
  amenities: [
    "WiFi",
    "Air Conditioning",
    "Parking",
    "Breakfast Included",
    "TV",
    "Laundry Service",
    "Private Pool"
  ],
},
  {
  title: "Snowy Chalet",
  description: "Cozy up in this warm chalet surrounded by snow-covered peaks.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
    }
  ],
  price: 10500,
  location: "Matterhorn",
  country: "Switzerland",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Luxe",
  geometry: {
    type: "Point",
    coordinates: [7.641618,45.980537] 
  },
  amenities: [
    "WiFi",
    "Heating",
   "Campfire",
    "Breakfast Included",
    "Parking",
    "TV"
  ],
},
  {
  title: "Rainforest Eco Lodge",
  description: "Immerse yourself in nature at this sustainable lodge deep in the rainforest.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1630947340120-c92fe4927b6c?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 4400,
  location: "Amazon Basin",
  country: "Brazil",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Glamping",
  geometry: {
    type: "Point",
    coordinates: [-55.126648,-2.163106]
  },
  amenities: [
    "WiFi",
   "Campfire",
    "Guided Tours",
    "Breakfast Included",
    "Hiking Trails"
  ],
},
  {
  title: "Historic Stone House",
  description: "Step back in time in this beautifully preserved stone house.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1623371791021-3f07611643a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  ],
  price: 7900,
  location: "Provence",
  country: "France",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Villas",
  geometry: {
    type: "Point",
    coordinates: [5.500000,43.500000] 
  },
  amenities: [
    "WiFi",
    "Parking",
    "Breakfast Included",
    "Campfire",
    "Air Conditioning",
    "Heating"
  ],
},
{
  title: "Island Bungalow",
  description: "Enjoy private beach access and ocean breezes in this tropical bungalow.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1419454073861-6e5bccea68ae?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 3100,
  location: "Palawan",
  country: "Philippines",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Poolside",
  geometry: {
    type: "Point",
    coordinates: [118.730072,9.740696] 
  },
  amenities: [
    "WiFi",
    "Air Conditioning",
    "Breakfast Included",
    "Parking"
  ],
},
  {
  title: "Cliffside Retreat in Madeira",
  description: "Perched on volcanic cliffs, this retreat offers panoramic ocean views and lush hiking trails.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1629585285871-d0b264f712e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 2800,
  location: "Madeira",
  country: "Portugal",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Poolside",
  geometry: {
    type: "Point",
    coordinates: [-16.274998,32.371666]
  },
  amenities: [
    "WiFi",
    "Hiking Trails",
    "Breakfast Included",
    "Air Conditioning",
    "Parking"
  ],
},
 {
  title: "Nomadic Yurt in Mongolia",
  description: "Experience traditional Mongolian living in a cozy yurt surrounded by endless steppe.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1658009250465-374c761daeaa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 3600,
  location: "Khövsgöl",
  country: "Mongolia",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Glamping",
  geometry: {
    type: "Point",
    coordinates: [100.1631, 50.5886] 
  },
  amenities: [
    "WiFi",
    "Breakfast Included",
    "Heating",
    "Guided Tours",
    "Parking"
  ],
},
{
  title: "Ice Hotel in Lapland",
  description: "Sleep in sculpted ice rooms and watch the Northern Lights from your frosty doorstep.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1706622834876-20c728619685?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 9500,
  location: "Kiruna",
  country: "Sweden",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Snow Escapes",
  geometry: {
    type: "Point",
    coordinates: [20.2253, 67.8558] // [longitude, latitude] for Kiruna, Lapland
  },
  amenities: [
    "WiFi",
    "Breakfast Included",
    "Heating",
    "Restaurant",
    "Parking",
    "Guided Tours"
  ],
},
{
  title: "Tea Estate Bungalow",
  description: "Nestled in the hills of Darjeeling, this bungalow overlooks misty tea plantations.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1661586762551-b595e65388ba?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 3900,
  location: "Darjeeling",
  country: "India",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Mountains",
  geometry: {
    type: "Point",
    coordinates: [88.262672,27.036007 ] // [longitude, latitude] for Darjeeling
  },
  amenities: [
    "WiFi",
    "Breakfast Included",
    "Heating",
    "TV",
    "Kitchenette",
    "Campfire",
    "Parking",
    "Laundry Service"
  ],
},
{
  title: "Volcano View Villa",
  description: "Watch lava flows from a safe distance in this dramatic villa near Mount Etna.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1742594945212-685b8908719e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 4200,
  location: "Sicily",
  country: "Italy",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [15.090278,37.500000] 
  },
  amenities: [
    "WiFi",
    "Private Pool",
    "Air Conditioning",
    "Breakfast Included",
    "Parking"
  ],
},
{
  title: "Jungle Treehouse in Costa Rica",
  description: "Live among toucans and waterfalls in this elevated jungle escape.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1543125274-c53157f43fbf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 1600,
  location: "Monteverde",
  country: "Costa Rica",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Glamping",
  geometry: {
    type: "Point",
    coordinates: [-84.8255097,10.2749682 ] // [longitude, latitude] for Monteverde region
  },
  amenities: [
    "Breakfast Included",
    "Hiking Trails",
    "Campfire"
  ],
},
{
  title: "Cave Hotel in Cappadocia",
  description: "Sleep in ancient cave dwellings carved into soft rock, with hot air balloons overhead.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1604433125524-7c2c871fcd42?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 1400,
  location: "Göreme",
  country: "Turkey",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Villas",
  geometry: {
    type: "Point",
    coordinates: [34.8296, 38.6431] // [longitude, latitude] for Göreme, Cappadocia
  },
  amenities: [
    "WiFi",
    "Breakfast Included",
    "Heating",
    "Guided Tours",
    "Parking"
  ]
},
  {
  title: "Floating Villa in Maldives",
  description: "Step out onto turquoise waters from your private floating villa.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578978562071-bbeb61e5a8f8?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 2700,
  location: "Baa Atoll",
  country: "Maldives",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Luxe",
  geometry: {
    type: "Point",
    coordinates: [73.0733, 5.3670] 
  },
  amenities: [
    "WiFi",
    "Private Pool",
    "Air Conditioning",
    "Breakfast Included"
  ]
},
{
  title: "Safari Tent in Namibia",
  description: "Sleep under the stars in a luxury tent surrounded by desert wildlife.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559169690-131bab5594a4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 1900,
  location: "Etosha",
  country: "Namibia",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Glamping",
  geometry: {
    type: "Point",
    coordinates: [16.3190, -18.8550] // [longitude, latitude] for Etosha National Park region
  },
  amenities: [
    "WiFi",
    "Breakfast Included",
    "Guided Tours",
    "Eco-friendly Design",
    "Parking",
    "Campfire"
  ]
},
 {
  title: "Canal View Studio in Bruges",
  description: "Charming studio with cobblestone views and historic canal access.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 1300,
  location: "Bruges",
  country: "Belgium",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Iconic Cities",
  geometry: {
    type: "Point",
    coordinates: [3.2247, 51.2093] // [longitude, latitude] for Bruges
  },
  amenities: [
    "WiFi",
    "Heating",
    "Breakfast Included",
    "Kitchenette",
    "Parking",
    "TV"
  ]
},
{
  title: "Mountain Hut in Patagonia",
  description: "Remote hut with glacier views and access to world-class trekking routes.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551792343-d9c6f7255970?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 1100,
  location: "El Chaltén",
  country: "Argentina",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Mansions",
  geometry: {
    type: "Point",
    coordinates: [-72.8860, -49.3315] 
  },
  amenities: [
    "WiFi",
    "Heating",
    "Breakfast Included",
    "Hiking Trails",
    "Parking"
  ]
},
{
  title: "Zen Ryokan in Kyoto",
  description: "Traditional Japanese inn with tatami floors, futons, and serene garden views.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590414107400-14eb9dc03565?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 1700,
  location: "Kyoto",
  country: "Japan",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Trending",
  geometry: {
    type: "Point",
    coordinates: [135.7681, 35.0116] // [longitude, latitude] for Kyoto
  },
  amenities: [
    "WiFi",
    "Breakfast Included",
    "Air Conditioning",
    "Kitchenette",
    "Parking"
  ]
},
  {
  title: "Beach Shack in Zanzibar",
  description: "Rustic beach shack with white sand and crystal-clear waters.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527248647512-3a668e6dc10b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 800,
  location: "Nungwi",
  country: "Tanzania",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Poolside",
  geometry: {
    type: "Point",
    coordinates: [39.2994, -5.7266] // [longitude, latitude] for Nungwi, Zanzibar
  },
  amenities: [
    "WiFi",
    "Breakfast Included",
    "Parking"
  ]
},
  {
  title: "Alpine Chalet in Austria",
  description: "Classic wooden chalet with snowy slopes and cozy fireplaces.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1569017437456-a82e38aea5ed?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 2400,
  location: "Innsbruck",
  country: "Austria",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Mountains",
  geometry: {
    type: "Point",
    coordinates: [11.4041, 47.2692] 
  },
  amenities: [
    "WiFi",
    "Heating",
    "Breakfast Included",
    "Parking"
  ]
  },
{
  title: "Eco-Friendly Treehouse Retreat",
  description:
    "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    }
  ],
  price: 750,
  location: "Monteverde",
  country: "Costa Rica",
  cancellationPolicy:
    "Cancel within 48 hours of booking and at least 7 days before check-in for a full refund. Cancel at least 3 days before check-in for a 50% refund. No refund if canceled less than 3 days before check-in.",
  category: "The Riviera",
  geometry: {
    type: "Point",
    coordinates: [-84.8256, 10.3000] 
  },
  amenities: [
    "WiFi",
    "Private Pool",
    "Breakfast Included",
    "Hiking Trails",
    "Parking"
  ]
},
  {
  title: "Ocean Cliff Cabin in New Zealand",
  description: "Secluded cabin perched above dramatic cliffs and crashing waves.",
  images: [
    {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1579924457487-4b4ac8a9583b?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  price: 2100,
  location: "Kaikoura",
  country: "New Zealand",
  cancellationPolicy: "Cancellations made within 48 hours of booking and at least 7 days before check-in are eligible for a full refund. Cancellations made at least 3 days before check-in will receive a 50% refund. No refund will be issued for cancellations made less than 3 days before check-in.",
  category: "Villas",
  geometry: {
    type: "Point",
    coordinates: [173.6810, -42.4012] // [longitude, latitude] for Kaikoura, NZ
  },
  amenities: [
    "WiFi",
    "Breakfast Included",
    "Hiking Trails",
    "Parking"
  ],
},
];

module.exports = { data: sampleListings };