const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      name: "Coral Island",
      imgURL:
        "https://images.pexels.com/photos/1268860/pexels-photo-1268860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500ps://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "This unique 13-acre island is located in the Abaco Islands in the Bahamas and takes its name from its interesting shape and the amount of bonefish in this region. Over the past 7 years this formerly deserted island was turned into a first-class getaway with white sand beaches. Five buildings totaling 15,000 square feet were constructed of the finest materials imported from Europe and the United States. Two luxury owner’s suites and six additional suites can accommodate up to 16 people. The entire complex is hurricane-proof. The perfect getaway in the Bahamas is fully air-conditioned, and Bone Fish Cay generates its own electricity and has its own desalination plant. All communication services (telephone, fax, and internet) are provided. A newly and very solidly built jetty and several boats are included with the island. ",
      price: "8.2 Million USD",
    },
    {
      name: "Kakatoa Island",
      imgURL:
        "https://imahttps://images.pexels.com/photos/1268869/pexels-photo-1268869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500ges.unsplash.com/photo-1576594496020-534bf2437b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "An entire 55 acre private island including Key West styled development for sale in The Bahamas. After several years spent diligently gaining the necessary government approvals, duty exemptions and lanning permissions, the freehold of this pristine island is now offered for sale.",
      price: "1.7 Million USD",
    },
    {
      name: "Shell Island",
      imgURL:
        "https://images.pexels.com/photos/2227776/pexels-photo-2227776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Rarely are Private Islands offered for sale in The Bahamas, given its proximity and easy access from the US mainland. Most are kept within the family or privately traded. We are proud to offer not just one – but a grouping of select islands that assure privacy and ease of ownership with new construction and infrastructure already in place at the northern tip of the Abaco Islands.",

      price: "2.3 Million USD",
    },
    {
      name: "Crystal Cove",
      imgURL:
        "https://images.pexels.com/photos/34223/mont-saint-michel-france-normandy-europe.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "This iconic peninsula known as Big Point is located at the very western end of the settlement of Great Guana Cay, in the Abacos. With elevations over 30 feet, this 10-plus acre property forms a portion of the very popular Harbour settlement, and also features a quiet sandy beach on the protected anchorage of Fishers Bay to the north. With deep water access for large yachts, this property would best be suited as a private marina, private island estate or a small resort development.",
      price: "1.5 Million USD",
    },
    {
      name: "General Assembly Island",
      imgURL:
        "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "A haven of beauty and tranquility, this 250 acre tropical island is located at the south end of the Berry Islands chain, just 30 minutes by air from Nassau. The island is well protected on all sides by neighboring islands and sand banks. Chub Cay lies just west of Bird Cay and offers an excellent marina, a private resort club, restaurants, and a 5,000 foot airstrip with regular and chartered flights to Nassau. The privately owned island of Whale Cay to the east includes a 4,000 foot paved runway and harbour. Proximity to the Great Bahama Bank and the Tongue of the Ocean makes this an excellent fishing, sailing, and scuba-diving paradise.",
      price: "3 Million USD",
    },
    {
      name: "Isle Delfino",
      imgURL:
        "https://images.pexels.com/photos/3417784/pexels-photo-3417784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Rarely does an island with the attributes of Cave Cay become available. Stunning natural beauty, a protected and private, deep-water harbour and marina with floating cement dock system and 35 dock slips, plus a 2,800 ft. private airstrip make this the perfect private island.",
      price: "60 Million USD",
    },
    {
      name: "Yoshi Island",
      imgURL:
        "https://images.pexels.com/photos/1456289/pexels-photo-1456289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Easily accessible just 4 miles from Chub Cay which has a 5,000 ft airstrip, restaurant, marina, fuel and customs and immigration. Most suited to a private family estate, Cat Cay has a beautiful sandy beach and untouched tropical plants and foliage.",
      price: "2.8 Million USD",
    },
    {
      name: "Donkey Kong Island",
      imgURL:
        "https://images.unsplash.com/photo-1577915509669-e8daeb28b498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "An unparalleled offering of two tropical islands comprising 83+ acres located just 35 miles northwest of Nassau, and accessible by private boat or seaplane. Fringed with pristine white powder beaches and turquoise waters, these island gems offer hidden coves and pristine reefs and are a natural bird sanctuary cloaked with lush native vegetation.",
      price: "26 Million USD",
    },
    {
      name: "Wumpa Island",
      imgURL:
        "https://images.pexels.com/photos/3948080/pexels-photo-3948080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Located in the crystal-clear majestic waters of the Exumas, Lumber Cay is a 30-acre private island featuring lush native vegetation, elevations and sandy white beach. Situated a mere 700 feet from popular Staniel Cay, Lumber Cay is easily accessible via Staniel Cay’s 3,000-ft. airstrip and 18-slip marina. The cay’s proximity to a multitude of tourist attractions including Pig Beach featuring the world-famous swimming pigs; Thunderball cave grotto; Exuma Land and Sea Park; exploration of nurse sharks and iguanas makes this an ideal island for private use or for development into a one-of-a-kind resort or yoga/spa retreat.",
      price: "8.6 Milliion USD",
    },
    {
      name: "Riptide Island",
      imgURL:
        "https://images.pexels.com/photos/1450351/pexels-photo-1450351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Located in the exquisite Abaco region of The Bahamas and home to calm waters, warm breezes and panoramic beauty, this 120-mile-long chain of islands are arguably the best boating, diving, fishing and sailing paradises in the world. Jwycesska is just 122 miles from Palm Beach, 26 miles from Grand Bahama and just 20 miles from Walkers Cay, recently acquired by superyacht owner, Carl Allen.",
      price: "17.9 Million USD",
    },
    {
      name: "Ben Island",
      imgURL:
        "https://i.ibb.co/qy7f9cb/orange-and-multicolored-abstract-painting-2784948.jpg",
      description:
        "This magnificent 257-acre jewel set only 5 miles from the mainland of Great Exuma. The island is surrounded by crystal clear water and ever-changing views of sandbars, reefs, and sky. The island boasts a 2500-foot white sandy beach, two smaller beaches and fabulous fishing, diving, and boating only a stone's throw from shore. There is a 1700 sq. ft. main house, 3 guest houses, utility buildings and staff accommodation. Off-grid clean solar energy is installed. There is a protected small boat harbor. Cellular and Internet service are provided by Bahamas Telecommunications Company. ",
      price: "30 Million USD",
    },
    {
      name: "Vinny's Cove",
      imgURL:
        "https://images.pexels.com/photos/1456284/pexels-photo-1456284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Vinny's Cove is a peaceful and secluded private island located just off the southeast coast of San Salvador, and is surrounded by crystal clear turquoise waters forming a wonderful protected area between the beaches of San Salvador and High Cay – an ideal playground for water-sports including kite-boarding, sailing or jet skiing.",
      price: "24 Million USD",
    },
    {
      name: "Damion Island",
      imgURL:
        "https://images.pexels.com/photos/2880801/pexels-photo-2880801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Nestled approximately 40 miles northwest of Nassau, Bahamas, exists a very special place, called Damion Island. The spectacular island boasts beaches, coves, ponds, high ridges and bluffs. Neptune's Nest is also known as Devil's Cay. Brilliantly named to discourage pirates of days gone by from landing on the island and stealing hidden treasure.",
      price: "27.5 Million USD",
    },
  ];

  await Product.insertMany(products);
  console.log("Created Products!");
};
const run = async () => {
  await main();
  db.close();
};

run();