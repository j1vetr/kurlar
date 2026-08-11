import type { CategoryDef, SubCategoryDef } from "./categories";

/**
 * EN category architecture — mirrors the TR categories in categories.ts.
 *
 * URLs: /en/products/submersible-pumps, /en/products/submersible-motors
 * Subcategories map 1:1 to the same real product families (same productId).
 * All technical claims match the product spec tables in data.ts — no invented
 * facts, no unverifiable superlatives. Positioning: manufacturer, not retailer.
 */

export const enProductCategories: CategoryDef[] = [
  {
    slug: "submersible-pumps",
    categoryKey: "pump",
    name: "Submersible Pumps",
    title: "Submersible Pump Manufacturer & Model Range",
    description:
      "Kurlar submersible pump series: stainless steel (KP), Noryl (KPN), cast iron (KPD) and stainless cast (KSX). Manufactured in Turkey for 4\"–10\" wells, up to 290 m³/h flow and 700 m head.",
    intro:
      "Kurlar is a submersible pump manufacturer in Turkey, producing since 1975. Our stainless steel, Noryl and cast iron submersible pump series are made at our facilities in Izmir for 4\" to 10\" well diameters, serve agricultural irrigation, drinking water supply and industrial water applications, and are exported to more than 40 countries.",
    sections: [
      {
        heading: "Material Options",
        paragraphs: [
          "Material selection for a submersible pump depends on the water quality in the well and the expected service life. KP series stainless steel submersible pumps offer long-lasting, reliable performance thanks to their corrosion-resistant construction. In the KSX series, the diffusers, impellers, suction and discharge chambers and the strainer are manufactured entirely from AISI 304 stainless cast; complete AISI 316L production is available on request.",
          "In the KPD series cast iron submersible pumps, the diffusers, impellers, suction and discharge chambers are made entirely of cast iron; on request, the pumps can be manufactured completely from bronze. In the KPN series 4\" Noryl submersible pumps, the impellers and diffusers are produced from Noryl engineering plastic for high hydraulic efficiency.",
        ],
      },
      {
        heading: "Diameter and Capacity Range",
        paragraphs: [
          "The product range covers 4\", 5\", 6\", 7\", 8\", 9\" and 10\" well diameters. The KP, KPD and KSX series deliver up to 290 m³/h flow and 700 m head, while the 4\" KPN series performs up to 24 m³/h flow and 200 m head. Correct model selection is made by evaluating well diameter, required flow rate and total dynamic head together.",
        ],
      },
      {
        heading: "Sandy and Abrasive Water",
        paragraphs: [
          "For wells containing sand, the floating impeller system of the KPN series protects the pump against sand and abrasive particles. The stainless steel strainer keeps particles above 50 g/m³ out of the pump, extending pump life.",
        ],
      },
      {
        heading: "Installation and Connection Standards",
        paragraphs: [
          "All series are suitable for both horizontal and vertical installation. Motor connections are designed to NEMA standards, and the discharge chamber accepts both BSP and NPT threads. This allows the pumps to be matched directly with NEMA-flanged Kurlar submersible motors.",
        ],
      },
      {
        heading: "Applications",
        paragraphs: [
          "Kurlar submersible pumps are used in agricultural irrigation, drinking water supply, industrial water supply, groundwater drainage and narrow-diameter wells. Contact our engineering team for series selection, or review the product catalogue.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which well diameters do you manufacture submersible pumps for?",
        answer:
          "Starting from the 4\" Noryl (KPN) series, we manufacture stainless steel (KP), cast iron (KPD) and stainless cast (KSX) series for 5\", 6\", 7\", 8\", 9\" and 10\" well diameters.",
      },
      {
        question: "Which submersible pump is suitable for sandy wells?",
        answer:
          "The KPN series 4\" Noryl submersible pumps protect against sand and abrasive particles thanks to the floating impeller system; the stainless strainer keeps particles above 50 g/m³ out of the pump.",
      },
      {
        question: "What material options are available for corrosive water?",
        answer:
          "The KSX series is AISI 304 stainless cast as standard and can be produced completely in AISI 316L on request. KPD series cast iron pumps can also be manufactured completely from bronze on request.",
      },
      {
        question: "Which motors can the pumps be used with?",
        answer:
          "Motor connections comply with NEMA standards; our pumps pair directly with Kurlar submersible motors manufactured to the same standard.",
      },
    ],
    subCategories: [
      {
        slug: "stainless-steel",
        productId: "kp",
        name: "Stainless Steel Submersible Pumps",
        title: "Stainless Steel Submersible Pump (KP Series)",
        description:
          "KP series stainless steel submersible pumps: 4\"–10\" diameters, up to 290 m³/h flow and 700 m head. Corrosion-resistant, NEMA-compatible, manufactured by Kurlar.",
        intro:
          "KP series stainless steel submersible pumps offer long-lasting, reliable performance thanks to their corrosion-resistant construction. Ideal for demanding applications such as agricultural irrigation, industrial water supply and groundwater extraction.",
        highlights: [
          "4\" | 6\" | 8\" | 10\" well diameters",
          "Up to 290 m³/h flow, up to 700 m head",
          "Corrosion-resistant stainless steel construction",
          "NEMA-standard motor connection, BSP and NPT outlet",
        ],
      },
      {
        slug: "noryl",
        productId: "kpn",
        name: "4″ Noryl Submersible Pumps",
        title: "4\" Noryl Submersible Pump (KPN Series)",
        description:
          "KPN series 4\" Noryl submersible pumps: sand-resistant floating impeller system, up to 24 m³/h flow and 200 m head. Manufactured for narrow-diameter wells.",
        intro:
          "The impellers and diffusers of the KPN series 4\" Noryl submersible pumps provide high hydraulic efficiency, and the floating impeller system protects against sand and abrasive particles. The stainless steel strainer keeps particles above 50 g/m³ out of the pump, extending its life.",
        highlights: [
          "4\" well diameter — for narrow wells",
          "Up to 24 m³/h flow, up to 200 m head",
          "Sand protection with floating impeller system",
          "Horizontal and vertical installation; NEMA, BSP and NPT compatible",
        ],
      },
      {
        slug: "cast-iron",
        productId: "kpd",
        name: "Cast Iron Submersible Pumps",
        title: "Cast Iron Submersible Pump (KPD Series)",
        description:
          "KPD series cast iron submersible pumps: 5\"–10\" diameters, up to 290 m³/h flow and 700 m head. Complete bronze production available on request.",
        intro:
          "In KPD series submersible pumps, the diffusers, impellers, suction and discharge chambers are manufactured entirely from cast iron, providing high durability and stable performance. On request, the pumps can be produced completely from bronze.",
        highlights: [
          "5\" | 6\" | 7\" | 8\" | 9\" | 10\" well diameters",
          "Up to 290 m³/h flow, up to 700 m head",
          "Complete cast iron hydraulics; bronze option on request",
          "NEMA-standard motor connection",
        ],
      },
      {
        slug: "stainless-cast",
        productId: "ksx",
        name: "Stainless Cast Submersible Pumps",
        title: "Stainless Cast Submersible Pump (KSX Series)",
        description:
          "KSX series AISI 304 stainless cast submersible pumps: 6\"–10\" diameters, up to 290 m³/h flow and 700 m head. AISI 316L production on request.",
        intro:
          "KSX series submersible pumps are manufactured entirely from AISI 304 stainless cast material; the diffusers, impellers, suction and discharge chambers and the strainer are all stainless steel. Complete AISI 316L production is available on request.",
        highlights: [
          "6\" | 8\" | 10\" well diameters",
          "Up to 290 m³/h flow, up to 700 m head",
          "Complete AISI 304 cast; AISI 316L on request",
          "Horizontal and vertical installation; NEMA-compatible connection",
        ],
      },
    ],
  },
  {
    slug: "submersible-motors",
    categoryKey: "motor",
    name: "Submersible Motors",
    title: "Submersible Motor Manufacturer & Model Range",
    description:
      "Kurlar submersible motor series: 4\" oil-filled (KM4), water-cooled HI-TEMP (KM) and S-Type (KMS). Rewindable, NEMA-compatible, up to 260 kW, manufactured in Turkey.",
    intro:
      "Kurlar is a submersible motor manufacturer in Turkey, producing since 1975. The 4\" oil-filled (KM4), water-cooled HI-TEMP (KM) and S-Type (KMS) series are built for drinking water, irrigation, industrial processes and geothermal wells, and are exported to more than 40 countries.",
    sections: [
      {
        heading: "Cooling and Lubrication Technologies",
        paragraphs: [
          "KM4 series 4\" oil-filled submersible motors are cooled and lubricated with non-toxic oil that complies with food regulations, so they can be used safely in drinking water wells, run quietly and provide long service life.",
          "The KM and KMS series use a water-cooled system. Water-lubricated, high-endurance axial and radial bearings work together with a pressure-equalizing check valve, diaphragm and sand slinger. The motors are filled with a mixture of pure water and glycerin for protection down to -15°C.",
        ],
      },
      {
        heading: "High Temperature Endurance (HI-TEMP)",
        paragraphs: [
          "While standard submersible motors typically operate in water up to 30–35°C, KM series HI-TEMP motors can operate in water at 60°C thanks to specially insulated PBN winding wires. This makes them ideal for geothermal wells and hot water sources. The KMS series additionally offers maximum temperature options of 75°C and 90°C.",
        ],
      },
      {
        heading: "Rewindable Motor Advantage",
        paragraphs: [
          "Our motors are of the rewindable type: in case of failure, the motor windings can be renewed. This extends the total life of the motor and reduces service costs.",
        ],
      },
      {
        heading: "Power, Voltage and Connection Standards",
        paragraphs: [
          "In the KMS series the power range extends up to 260 kW (350 HP); production is available for 500V, 525V, 630V and 1000V. Standard voltage is 380/415V – 50/60 Hz (±10% voltage tolerance), and the motors can be operated at the desired speed above 30 Hz with a frequency converter. All series are manufactured with NEMA-standard flange connections and are suitable for vertical and horizontal installation.",
        ],
      },
      {
        heading: "Applications",
        paragraphs: [
          "Kurlar submersible motors are used in drinking water supply, agricultural irrigation, industrial water supply and processes, geothermal wells and hot water sources. A VDE, ACS and KTW approved cable option compliant with drinking water regulations is available. Contact our engineering team for motor selection, or review the product catalogue.",
        ],
      },
    ],
    faqs: [
      {
        question: "Up to what temperature do HI-TEMP submersible motors operate?",
        answer:
          "KM series HI-TEMP motors operate in water at 60°C thanks to specially insulated PBN winding wires. The KMS series also offers maximum temperature options of 75°C and 90°C.",
      },
      {
        question: "What does a rewindable submersible motor mean?",
        answer:
          "It means the motor windings can be renewed (rewound) in case of failure. This feature extends the life of the motor and reduces service costs.",
      },
      {
        question: "Can the submersible motors be used in drinking water wells?",
        answer:
          "Yes. KM4 oil-filled motors use non-toxic oil compliant with food regulations, and a VDE, ACS and KTW approved cable option compliant with drinking water regulations is available.",
      },
      {
        question: "Can the motors be used with a frequency converter?",
        answer:
          "Yes, the motors can be operated at the desired speed above 30 Hz with a frequency converter. Standard voltage is 380/415V – 50/60 Hz with ±10% voltage tolerance.",
      },
    ],
    subCategories: [
      {
        slug: "oil-filled",
        productId: "km4",
        name: "4″ Oil-Filled Submersible Motors",
        title: "4\" Oil-Filled Submersible Motor (KM4 Series)",
        description:
          "KM4 series 4\" oil-filled submersible motors: cooled with food-grade non-toxic oil, rewindable, NEMA flange. Suitable for drinking water wells.",
        intro:
          "KM4 series 4\" oil-filled submersible motors are rewindable motors cooled with non-toxic oil that complies with food regulations. They run quietly, provide long service life, and are suitable for both horizontal and vertical operation.",
        highlights: [
          "4\" diameter — compact solution for narrow wells",
          "Food-grade, non-toxic cooling oil",
          "Rewindable motor construction",
          "NEMA-standard flange connection",
        ],
      },
      {
        slug: "high-temperature",
        productId: "km",
        name: "HI-TEMP Submersible Motors",
        title: "High Temperature Submersible Motor 60°C (KM HI-TEMP Series)",
        description:
          "KM series high temperature submersible motors: operation in 60°C water with PBN winding wire, water-cooled system, 6\"–10\" diameters. Ideal for geothermal wells.",
        intro:
          "KM series HI-TEMP (60°C) rewindable submersible motors are built for high temperature endurance with specially insulated PBN winding wire. The water-cooled system is equipped with a pressure-equalizing check valve, diaphragm, sand slinger and water-lubricated axial/radial bearings.",
        highlights: [
          "6\" | 7\" | 8\" | 10\" diameters",
          "Operation in 60°C water with PBN winding wire",
          "Ideal for geothermal wells and hot water sources",
          "Pure water + glycerin fill for protection down to -15°C",
        ],
      },
      {
        slug: "s-type",
        productId: "kms",
        name: "S-Type Submersible Motors",
        title: "S-Type Submersible Motor (KMS Series)",
        description:
          "KMS series S-Type submersible motors: up to 260 kW, 6\"–8\" diameters, 75°C/90°C temperature options, high-efficiency design focused on low operating cost.",
        intro:
          "KMS series S-Type submersible motors are designed for energy efficiency and low operating cost. They offer a power range up to 260 kW (350 HP), production suitable for 500V, 525V, 630V and 1000V, and maximum temperature options of 75°C / 90°C.",
        highlights: [
          "6\" | 7\" | 8\" diameters, up to 260 kW",
          "High-efficiency design for low operating cost",
          "Maximum temperature options of 75°C and 90°C",
          "SIC/SIC-NBR-304 mechanical seal option; NEMA connection",
        ],
      },
    ],
  },
];

/** /en/products/submersible-pumps */
export function enCategoryPath(cat: CategoryDef): string {
  return `/en/products/${cat.slug}`;
}

/** /en/products/submersible-pumps/stainless-steel */
export function enSubCategoryPath(cat: CategoryDef, sub: SubCategoryDef): string {
  return `/en/products/${cat.slug}/${sub.slug}`;
}

export function getEnCategoryBySlug(slug: string): CategoryDef | undefined {
  return enProductCategories.find((c) => c.slug === slug);
}

export function getEnSubCategory(
  categorySlug: string,
  subSlug: string,
): { category: CategoryDef; sub: SubCategoryDef } | undefined {
  const category = getEnCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const sub = category.subCategories.find((s) => s.slug === subSlug);
  return sub ? { category, sub } : undefined;
}

export function getEnCategoryByKey(key: string): CategoryDef | undefined {
  return enProductCategories.find((c) => c.categoryKey === key);
}

/** All valid EN category/subcategory paths (for SSR route resolution). */
export const enCategoryPaths: string[] = enProductCategories.flatMap((cat) => [
  enCategoryPath(cat),
  ...cat.subCategories.map((sub) => enSubCategoryPath(cat, sub)),
]);
