const { faker } = require("@faker-js/faker");
const { Admin, Customer, Collection, Order, Product } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const customer = await Customer.create({
    firstname: "Customer",
    lastname: "Customer",
    email: "customer@customer.com",
    password: "customer",
    address: "Miguelete 1470",
    phonenumber: "123456",
  });

  const order = {
    customer: customer._id,
    products: [],
    total: 12300,
    status: "delivered",
    firstname: "Nicolas",
    lastname: "Perdigon",
    deliveryAddress: "jose h figueiras",
    city: "montevideo",
    state: "montevideo",
    zipCode: "11300",
    phonenumber: "095951571",
  };

  const luminor = new Collection({
    name: "LUMINOR",
    img: "Luminor_EN.jpg.transform.generic_header_image_1920.jpg",
    products: [],
  });
  const radiomir = new Collection({
    name: "RADIOMIR",
    img: "Radiomir_EN.jpg.transform.generic_header_image_1920.jpg",
    products: [],
  });
  const submersible = new Collection({
    name: "SUBMERSIBLE",
    img: "Submersible_EN.jpg.transform.generic_header_image_1920.jpg",
    products: [],
  });

  const products = [
    new Product({
      name: "Luminor Quaranta",
      description: {
        movement:
          "Automatic mechanical, P.900 calibre, 12 ½ lignes, 4.2 mm thick, 23 jewels, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, one barrel. 171 components",
        functions: "Hours, minutes, small seconds, date",
        case: "Diameter 40mm, AISI 316L brushed steel",
        bezel: "Polished steel",
        back: "Brushed steel",
        dial: "Black with luminous Arabic numerals and hour markers. Date at 3 o'clock and small seconds at 9 o'clock",
        waterResistance: "10 bar (~100 metres)",
        strap: "Alligator Black, Tone on tone Stitching, 22.0/20.0 Standard size",
      },
      image: "2174040.png",
      imageBack: "2174019.png",
      price: 6600.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Luminor Chrono",
      description: {
        movement:
          "Automatic mechanical, P.9200 calibre, 13 ¼ lignes, 6.9 mm thick, 41 jewels, Glucydur® balance, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 42 hours, one barrel.",
        functions: "hours, Minutes, small seconds, Chronograph",
        case: "Diameter 44mm, AISI 316L brushed steel",
        bezel: "Polished steel",
        dial: "Blue sun-brushed with luminous arabic numerals and hour markers. Hollowed chronograph minutes counter at 3 o'clock and small seconds counter at 9 o'clock. Central chronograph seconds hands. Tachymeter scale in the external Rehaut",
        waterResistance: "10 bar (~100 metres)",
        strap: "Steel Steel, Stitching, / 44 mm size",
      },
      image: "2148746.png",
      imageBack: "2148745.png",
      price: 9100.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Luminor Regatta Blu Mare",
      description: {
        movement:
          "Automatic mechanical, Panerai P.9100/R calibre, created by Panerai, 13¾ lignes, 9.55 mm thick, 37 jewels, Glucydur® balance, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, two barrels. 328 components",
        functions: "Hours, Minutes, Small Seconds, Flyback Chronograph, Countdown, Second reset",
        case: "Diameter 47mm, brushed titanium",
        bezel: "Polished Titanium",
        back: "Screw, brushed titanium",
        dial: "Blue sun-brushed with luminous Arabic numerals and hour markers. Chronograph hour counter at 3 o'clock, seconds at 9 o'clock, central chronograph seconds and minutes hands.",
        waterResistance: "10 bar (~100 metres)",
        strap: "Alligator Dark blue, Tone on tone Stitching, 26.0/22.0 Standard size",
      },
      image: "2224563.png",
      imageBack: "2224547.png",
      price: 15400.0,
      stock: 100,

      bestseller: true,
    }),
    new Product({
      name: "Luminor GMT",
      description: {
        movement:
          "Automatic mechanical, P.9010 calibre, created by Panerai, 13¾ lignes, 6.0 mm thick, 31 jewels, Glucydur® balance, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, two barrels. 200 components.",
        functions: "Hours, minutes, small seconds, date, GMT",
        case: "Diameter 44mm",
        bezel: "Polished Titanium",
        back: "black and Steel ceramic",
        waterResistance: "10 bar (~100 metres)",
        strap: "Alligator Black, Tone on tone Stitching, 24.0/22.0 Standard size",
      },
      image: "2153731.png",
      imageBack: "2153730.png",
      price: 12400.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Luminor Chrono Goldtech™ Blu",
      description: {
        movement:
          "Automatic mechanical, P.9200 calibre, 13 ¼ lignes, 6.9 mm thick, 41 jewels, Glucydur® balance, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 42 hours, one barrel.",
        functions: "hours, Minutes, small seconds, Chronograph",
        case: "Diameter 44mm",
        bezel: "Polished Goldtech™",
        dial: "Blue sun-brushed with luminous arabic numerals and hour markers. Hollowed chronograph minutes counter at 3 o'clock and small seconds counter at 9 o'clock. Central chronograph seconds hands. Tachymeter scale in the external Rehaut",
        back: "black and Steel ceramic",
        waterResistance: "5 bar (~50 metres)",
        strap: "Alligator Dark blue, Tone on tone Stitching, 24.0/22.0 Standard size",
      },
      image: "2033335.png",
      imageBack: "2033247.png",
      price: 24800.0,
      stock: 100,

      bestseller: true,
    }),
    new Product({
      name: "Luminor Quaranta Verde Militare",
      description: {
        movement:
          "Automatic mechanical, P.900 calibre, 12 ½ lignes, 4.2 mm thick, 23 jewels, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, one barrel. 171 components",
        functions: "Hours, minutes, small seconds, date",
        case: "Diameter 40mm, AISI 316L brushed steel",
        bezel: "Polished steel",
        back: "Brushed steel",
        dial: "Military green with luminous Arabic numerals and hour markers. Date at 3 o'clock and small seconds at 9 o'clock",
        waterResistance: "10 bar (~100 metres)",
        strap: "Alligator Military green, Tone on tone Stitching, 22.0/20.0 Standard size",
      },
      image: "2232820.png",
      imageBack: "2232833.png",
      price: 6600.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Radiomir 8 Days - 45mm",
      description: {
        movement:
          "Hand-wound mechanical, P.5000 calibre, created by Panerai, 15 ½ lignes, 4.5 mm thick, 21 jewels, Glucydur® balance, 21,600 alternations/hour. Incabloc Parechoc® anti-shock device. Power reserve 8 days, two barrels. 146 components.",
        functions: "Hours, Minutes, Small Seconds",
        case: "Diameter 45mm, Patina steel",
        bezel: "Patina steel",
        back: "See-through sapphire crystal",
        dial: "Black with luminous Arabic numerals and hour markers. Small seconds at 9 o'clock",
        waterResistance: "10 bar (~100 metres)",
        strap: "Calf Brown, Beige Stitching, 27.0/22.0 Standard size",
      },
      image: "1810956.png",
      imageBack: "1810955.png",
      price: 7700.0,
      stock: 100,

      bestseller: true,
    }),
    new Product({
      name: "Radiomir Base Logo - 45mm",
      description: {
        movement:
          "Hand-wound mechanical, P.6000 calibre, 15 ½ lignes, 4.5 mm thick, 19 jewels, 21,600 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, one barrel. 110 components.",
        functions: "Hours, minutes",
        case: "diameter 45mm, AISI 316L polished steel with removable wire loop strap attachments (patented)",
        bezel: "Patina steel",
        back: "See-through sapphire crystal",
        dial: "Black with luminous Arabic numerals and hour markers",
        waterResistance: "10 bar (~100 metres)",
        strap: "Calf Ponte Vecchio Dark brown, Beige Stitching, 27.0/22.0 Standard size",
      },
      image: "1690150.png",
      imageBack: "1690149.png",
      price: 4000.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Radiomir Black Seal Logo - 45mm",
      description: {
        movement:
          "Hand-wound mechanical, P.6000 calibre, 15½ lignes, 4.5mm thick, 19 jewels, 21,600 alternations/hour. Incabloc® anti-shock device. 3 Days Power Reserve, one barrel. 110 components",
        functions: "hours, minutes, small seconds",
        case: "diameter 45mm, AISI 316L polished steel with removable wire loop strap attachments (patented)",
        bezel: "Driven, steel",
        back: "See-through sapphire crystal",
        dial: "Black with luminous Arabic numerals and hour markers. Small seconds at 9 o'clock",
        waterResistance: "10 bar (~100 metres)",
        strap: "Calf Ponte Vecchio Black, Beige Stitching, 27.0/22.0 Standard size",
      },
      image: "1690266.png",
      imageBack: "1690265.png",
      price: 4600.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Radiomir Bronzo",
      description: {
        movement:
          "Hand-wound mechanical, P.3000 calibre, created by Panerai, 16½ lignes, 5.3 mm thick, 21 jewels, Glucydur® balance, 21,600 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, two barrels. 161 components",
        functions: "Hours, minutes",
        case: "Diameter 47mm, brushed bronze",
        bezel: "Driven, steel",
        back: "See-through sapphire crystal",
        dial: "Shaded green with luminous Arabic numerals and hour markers",
        waterResistance: "10 bar (~100 metres)",
        strap: "Beige Stitching, 27.0/22.0 Standard size",
      },
      image: "2153719.png",
      imageBack: "2153679.png",
      price: 15500.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Radiomir California - 47mm",
      description: {
        movement:
          "Hand-wound mechanical, P.3000 calibre, created by Panerai, 16½ lignes, 5.3 mm thick, 21 jewels, Glucydur® balance, 21,600 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, two barrels. 161 components.",
        functions: "Hours, minutes",
        case: "Diameter 47mm, Patina steel",
        bezel: "Patina steel",
        back: "See-through sapphire crystal",
        dial: "Shaded brown with luminous Arabic and Roman numerals and hour markers",
        waterResistance: "10 bar (~100 metres)",
        strap: "Calf Brown, Beige Stitching, 27.0/22.0 Standard size",
      },
      image: "1814413.png",
      imageBack: "1814412.png.transform.global_square_image_500.png",
      price: 15500.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Radiomir Eilean - 45mm",
      description: {
        movement:
          "Hand-wound mechanical, P.6000 calibre, 15 ½ lignes, 4.5 mm thick, 19 jewels, 21,600 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, one barrel. 110 components.",
        functions: "Hours, minutes",
        case: "Diameter 45mm, Engraved Patina steel",
        bezel: "Patina steel",
        back: "Engraved Patina steel",
        dial: "Brown with luminous Arabic numerals and hour markers",
        waterResistance: "10 bar (~100 metres)",
        strap: "Scamosciato Brown, Beige Stitching, 27.0/22.0 Standard size",
      },
      image: "2153781.png",
      imageBack: "2153786.png",
      price: 7200.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Submersible Azzurro - 42mm",
      description: {
        movement:
          "Automatic mechanical, P.900 calibre, 12 ½ lignes, 4.2 mm thick, 23 jewels, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, one barrel. 171 components",
        functions: "Hours, minutes, small seconds, date",
        case: "Diameter 42mm, brushed steel",
        bezel: "Steel with ceramic anti-clockwise rotating bezel with graduated scale",
        back: "Screwed, steel",
        dial: "Black with luminous hour markers and dots. Date at 3 o'clock, small seconds at 9 o'clock",
        waterResistance: "30 bar (~300 metres)",
        strap: "Caoutchouc Black, - Stitching, 22.0/20.0 Standard size",
      },
      image: "2067627.png",
      imageBack: "2067626.png",
      price: 8800.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Submersible Bianco",
      description: {
        movement:
          "Automatic mechanical, P.900 calibre, 12 ½ lignes, 4.2 mm thick, 23 jewels, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, one barrel. 171 components",
        functions: "Hours, minutes, small seconds, date",
        case: "Diameter 42mm, AISI 316L brushed steel",
        bezel: "Brushed steel anti-clockwise rotating bezel with graduated scale",
        back: "Screw, brushed steel",
        dial: "White with luminous hour markers and dots. Date at 3 o'clock, small seconds at 9 o'clock",
        waterResistance: "30 bar (~300 metres)",
        strap: "Caoutchouc Black, - Stitching, 22.0/20.0 Standard size",
      },
      image: "2151261.png",
      imageBack: "2151260.png",
      price: 8000.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Submersible Blu Notte",
      description: {
        movement:
          "Automatic mechanical, P.900 calibre, 12 ½ lignes, 4.2 mm thick, 23 jewels, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, one barrel. 171 components",
        functions: "Hours, minutes, small seconds, date",
        case: "Diameter 42mm, brushed steel",
        bezel: "Steel with ceramic anti-clockwise rotating bezel with graduated scale",
        back: "Screwed, steel",
        dial: "Blue sun-brushed with luminous hour markers and dots. Date at 3 o'clock, small seconds at 9 o'clock",
        waterResistance: "30 bar (~300 metres)",
        strap: "Steel Steel, Stitching, / 42 mm siz",
      },
      image: "2033532.png",
      imageBack: "2033531.png",
      price: 8000.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Submersible Bronzo Blu Abisso",
      description: {
        movement:
          "Automatic mechanical, P.900 calibre, 12 ½ lignes, 4.2 mm thick, 23 jewels, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, one barrel. 171 components",
        functions: "Hours, minutes, small seconds, date",
        case: "Diameter 42mm, bronze",
        bezel: "Bronze anti-clockwise rotating bezel with graduated scale",
        back: "See-through sapphire crystal",
        dial: "Blue with luminous hour markers and dots. Date at 3 o'clock, small seconds at 9 o'clock",
        waterResistance: "30 bar (~300 metres)",
        strap: "Scamosciato Blue, Ecru Stitching, 22.0/20.0 Standard size",
      },
      image: "2069992.png",
      imageBack: "2069991.png",
      price: 14700.0,
      stock: 100,

      bestseller: false,
    }),
    new Product({
      name: "Submersible Chrono Mike Horn Edition - 47mm",
      description: {
        movement:
          "Automatic mechanical, P.9100 calibre, created by Panerai, 13¾ lignes, 8.15 mm thick, 37 jewels, Glucydur® balance, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, two barrels. 302 components.",
        functions: "Hours, minutes, small seconds, chronograph flyback, seconds reset",
        bezel: "Titanium ceramic anti-clockwise rotating bezel with graduated scale",
        waterResistance: "30 bar (~300 metres)",
        strap: "Caoutchouc Dark blue, - Stitching, 26.0/22.0 Standard size",
      },
      image: "2226353.png",
      imageBack: "2226352.png",
      price: 17900.0,
      stock: 100,

      bestseller: true,
    }),
    new Product({
      name: "Submersible Amagnetic - 47mm",
      description: {
        movement:
          "Automatic mechanical, P.9100 calibre, created by Panerai, 13¾ lignes, 8.15 mm thick, 37 jewels, Glucydur® balance, 28,800 alternations/hour. Incabloc® anti-shock device. Power reserve 3 days, two barrels. 302 components.",
        functions: "Hours, minutes, small seconds.",
        bezel: "Titanium ceramic anti-clockwise rotating bezel with graduated scale",
        waterResistance: "30 bar (~300 metres)",
        strap: "Caoutchouc Dark blue, - Stitching, 26.0/22.0 Standard size",
      },
      image: "1756876.png",
      imageBack: "1445901.png",
      price: 12900.0,
      stock: 100,

      bestseller: false,
    }),
  ];

  for (let i = 0; i < 6; i++) {
    products[i].category = luminor._id;
    luminor.products.push(products[i]._id);
  }
  for (let i = 6; i < 12; i++) {
    products[i].category = radiomir._id;
    radiomir.products.push(products[i]._id);
  }
  for (let i = 12; i < 18; i++) {
    products[i].category = submersible._id;
    submersible.products.push(products[i]._id);
  }

  await luminor.save();
  await radiomir.save();
  await submersible.save();
  for (const product of products) {
    await product.save();
  }

  const admins = [
    {
      firstname: "Marcel",
      lastname: "Oramas",
      email: "marceloramas@gmail.com",
      password: "qwerty",
    },
    { firstname: "Nico", lastname: "Perdigón", email: "nicoper@gmail.com", password: "qwerty" },
    {
      firstname: "Rodrigo",
      lastname: "Moreira",
      email: "rodrimoreira@gmail.com",
      password: "qwerty",
    },
    {
      firstname: "Admin",
      lastname: "Admin",
      email: "admin@admin.com",
      password: "admin",
    },
  ];

  await Admin.create(admins);
  await Order.create(order);
};
