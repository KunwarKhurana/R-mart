const products = [

  // ================= PICKLES =================

  {
    id: "rvk-pickle-mango",
    name: "Cut Mango Pickle",
    brand: "RVK Ventures",
    category: "pickles",
    images: [
      "mango-pickle.jpg"
    ],
    variants: [
      { label: "200g", price: 120 },
      { label: "400g", price: 220 }
    ],
    description: "A traditional cut mango pickle prepared using time-tested recipes and aromatic spices.",
    details: {
      story:
        "Carefully sourced raw mangoes are cut and blended with a perfect balance of spices, mustard, and oil to create a classic pickle that pairs beautifully with everyday meals.",
      ingredients: [
        "Mango Pieces",
        "Iodised Salt",
        "Mustard Powder",
        "Refined Rice Bran Oil",
        "Red Chilli Powder",
        "Fenugreek Powder",
        "Turmeric Powder"
      ],
      nutrition:
        "Mangoes provide natural antioxidants while mustard and fenugreek support digestion and metabolism."
    }
  },

  {
    id: "rvk-pickle-lime",
    name: "Lime Pickle",
    brand: "RVK Ventures",
    category: "pickles",
    images: [
      "lime-pickle.webp"
    ],
    variants: [
      { label: "200g", price: 110 },
      { label: "400g", price: 200 }
    ],
    description: "A tangy and flavourful lime pickle crafted using traditional curing methods.",
    details: {
      story:
        "Fresh limes are carefully cured with salt and blended with aromatic spices to create a bold, tangy pickle that enhances everyday meals.",
      ingredients: [
        "Lime Pieces",
        "Iodised Salt",
        "Refined Rice Bran Oil",
        "Red Chilli Powder",
        "Mustard Seeds",
        "Fenugreek Powder",
        "Turmeric Powder"
      ],
      nutrition:
        "Rich in Vitamin C from limes, combined with digestive benefits of mustard and fenugreek."
    }
  },

  {
    id: "rvk-pickle-green-chilli",
    name: "Green Chilli Pickle",
    brand: "RVK Ventures",
    category: "pickles",
    images: [
      "Chili-Pickle.jpg"
    ],
    variants: [
      { label: "250g", price: 140 },
      { label: "500g", price: 260 }
    ],
    description: "A fiery green chilli pickle made for true spice lovers.",
    details: {
      story:
        "Fresh green chillies are attentively sorted and blended with traditional spices to create a bold, spicy pickle with intense flavour.",
      ingredients: [
        "Green Chillies",
        "Refined Rice Bran Oil",
        "Iodised Salt",
        "Red Chilli Powder",
        "Fenugreek Powder",
        "Turmeric Powder",
        "Mixed Spices"
      ],
      nutrition:
        "Chillies are rich in antioxidants while turmeric and fenugreek provide anti-inflammatory and digestive benefits."
    }
  },

  // ================= GULKAND =================

  {
    id: "rvk-gulkand",
    name: "Traditional Gulkand",
    brand: "RVK Ventures",
    category: "gulkand",
    images: [
      "gulkand.jpg"
    ],
    variants: [
      { label: "250g", price: 220 }
    ],
    description: "A natural rose petal preserve known for its cooling and digestive benefits.",
    details: {
      story:
        "Prepared using handpicked rose petals and natural sweeteners, this gulkand follows age-old Ayurvedic practices to retain aroma, flavour, and therapeutic properties.",
      benefits: [
        "Naturally cools the body",
        "Supports digestion",
        "Helps reduce acidity and heat",
        "Traditionally used in Ayurveda"
      ],
      usage: [
        "Consume 1–2 teaspoons daily",
        "Add to milk or desserts",
        "Use as a spread or filling"
      ],
      storage:
        "Store in a cool, dry place away from direct sunlight."
    }
  },

  // ================= ROSE WATER =================

  {
    id: "rvk-rose-water",
    name: "Heritage Rose Water",
    brand: "RVK Ventures",
    category: "rosewater",
    images: [
      "rosewater.jfif"
    ],
    variants: [
      { label: "200ml", price: 180 }
    ],
    description: "Pure distilled rose water made from fresh rose petals.",
    details: {
      story:
        "Produced through steam distillation of handpicked roses, this rose water is free from alcohol and additives, retaining its natural fragrance and therapeutic properties.",
      benefits: [
        "100% alcohol-free",
        "Naturally refreshing and aromatic",
        "Suitable for culinary and cosmetic use",
        "Soothes skin and senses"
      ],
      usage: [
        "Use in desserts and beverages",
        "Apply as a natural facial toner",
        "Add to cooling summer drinks"
      ],
      storage:
        "Store in a cool place. Refrigeration recommended after opening."
    }
  },

  // ================= COMFORTERS =================

  {
    id: "rvk-comforter-dreamcloud",
    name: "DreamCloud All-Season Comforter",
    brand: "RVK Ventures",
    category: "comforters",
    images: [
      "comforter.jpg"
    ],
    variants: [
      { label: "Single", price: 1899 },
      { label: "Double", price: 2499 }
    ],
    description: "Ultra-soft, breathable comforter designed for year-round comfort.",
    details: {
      story:
        "Filled with premium hypoallergenic down-alternative fiber, this comforter provides cloud-like softness with balanced warmth for all seasons.",
      highlights: [
        "Hypoallergenic down-alternative filling",
        "Breathable microfiber shell",
        "Box-stitch design prevents shifting",
        "Machine washable",
        "Corner loops for duvet attachment"
      ]
    }
  },

  // ================= TURMERIC =================

  {
    id: "rvk-turmeric-lakadong",
    name: "Lakadong Turmeric Powder",
    brand: "RVK Ventures",
    category: "turmeric",
    images: [
      "turmeric.jpg"
    ],
    variants: [
      { label: "100g", price: 280 },
      { label: "250g", price: 620 }
    ],
    description: "Premium Lakadong turmeric with exceptionally high curcumin content.",
    details: {
      story:
        "Sourced from Meghalaya’s Jaintia Hills, Lakadong turmeric is renowned for its 6–8% curcumin content, vibrant colour, and strong aroma.",
      benefits: [
        "Naturally high curcumin (up to 8%)",
        "Powerful antioxidant properties",
        "Supports immunity and digestion",
        "Traditionally grown and sun-dried"
      ],
      usage: [
        "Golden milk",
        "Curries",
        "Smoothies",
        "Wellness drinks"
      ],
      storage:
        "Store in an airtight container away from heat, moisture, and sunlight.",
      origin: "Meghalaya, India"
    }
  },

  // ================= SAFFRON =================

  {
    id: "rvk-saffron-kashmiri",
    name: "Kashmiri Saffron (Mongra A++)",
    brand: "RVK Ventures",
    category: "saffron",
    images: [
      "saffron.jpg"
    ],
    variants: [
      { label: "0.5g", price: 550 },
      { label: "1g", price: 980 }
    ],
    description: "Authentic Mongra saffron sourced from Pampore, Kashmir.",
    details: {
      story:
        "Hand-harvested and sun-dried, this premium saffron consists exclusively of deep crimson stigmas, offering unmatched aroma, colour, and potency.",
      highlights: [
        "All-red Mongra grade",
        "High crocin and safranal content",
        "No fillers or additives",
        "Handpicked and sun-dried"
      ],
      usage: [
        "Biryani and desserts",
        "Kesar milk",
        "Herbal teas",
        "Traditional wellness preparations"
      ],
      origin: "Pampore, Kashmir"
    }
  }

];
