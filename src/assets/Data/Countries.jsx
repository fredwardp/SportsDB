const countries = [
  {
    name_en: "Andorra",
  },
  {
    name_en: "United Arab Emirates",
  },
  {
    name_en: "Afghanistan",
  },
  {
    name_en: "Antigua and Barbuda",
  },
  {
    name_en: "Anguilla",
  },
  {
    name_en: "Albania",
  },
  {
    name_en: "Armenia",
  },
  {
    name_en: "Angola",
  },
  {
    name_en: "Antarctica",
  },
  {
    name_en: "Argentina",
  },
  {
    name_en: "American Samoa",
  },
  {
    name_en: "Austria",
  },
  {
    name_en: "Australia",
  },
  {
    name_en: "Aruba",
  },
  {
    name_en: "Åland Islands",
  },
  {
    name_en: "Azerbaijan",
  },
  {
    name_en: "Bosnia and Herzegovina",
  },
  {
    name_en: "Barbados",
  },
  {
    name_en: "Bangladesh",
  },
  {
    name_en: "Belgium",
  },
  {
    name_en: "Burkina Faso",
  },
  {
    name_en: "Bulgaria",
  },
  {
    name_en: "Bahrain",
  },
  {
    name_en: "Burundi",
  },
  {
    name_en: "Benin",
  },
  {
    name_en: "Saint Barthélemy",
  },
  {
    name_en: "Bermuda",
  },
  {
    name_en: "Brunei Darussalam",
  },
  {
    name_en: "Bolivia",
  },
  {
    name_en: "Caribbean Netherlands ",
  },
  {
    name_en: "Brazil",
  },
  {
    name_en: "Bahamas",
  },
  {
    name_en: "Bhutan",
  },
  {
    name_en: "Bouvet Island",
  },
  {
    name_en: "Botswana",
  },
  {
    name_en: "Belarus",
  },
  {
    name_en: "Belize",
  },
  {
    name_en: "Canada",
  },
  {
    name_en: "Cocos (Keeling) Islands",
  },
  {
    name_en: "Democratic Republic of Congo",
  },
  {
    name_en: "Central African Republic",
  },
  {
    name_en: "Congo",
  },
  {
    name_en: "Switzerland",
  },
  {
    name_en: "Ivory Coast",
  },
  {
    name_en: "Cook Islands",
  },
  {
    name_en: "Chile",
  },
  {
    name_en: "Cameroon",
  },
  {
    name_en: "China",
  },
  {
    name_en: "Colombia",
  },
  {
    name_en: "Costa Rica",
  },
  {
    name_en: "Cuba",
  },
  {
    name_en: "Cape Verde",
  },
  {
    name_en: "Curaçao",
  },
  {
    name_en: "Christmas Island",
  },
  {
    name_en: "Cyprus",
  },
  {
    name_en: "Czech Republic",
  },
  {
    name_en: "Germany",
  },
  {
    name_en: "Djibouti",
  },
  {
    name_en: "Denmark",
  },
  {
    name_en: "Dominica",
  },
  {
    name_en: "Dominican Republic",
  },
  {
    name_en: "Algeria",
  },
  {
    name_en: "Ecuador",
  },
  {
    name_en: "Estonia",
  },
  {
    name_en: "Egypt",
  },
  {
    name_en: "Western Sahara",
  },
  {
    name_en: "England",
  },
  {
    name_en: "Eritrea",
  },
  {
    name_en: "Spain",
  },
  {
    name_en: "Ethiopia",
  },
  {
    name_en: "Europe",
  },
  {
    name_en: "Finland",
  },
  {
    name_en: "Fiji",
  },
  {
    name_en: "Falkland Islands",
  },
  {
    name_en: "Micronesia, Federated States of",
  },
  {
    name_en: "Faroe Islands",
  },
  {
    name_en: "France",
  },
  {
    name_en: "Gabon",
  },
  {
    name_en: "United Kingdom",
  },
  {
    name_en: "Grenada",
  },
  {
    name_en: "Georgia",
  },
  {
    name_en: "French Guiana",
  },
  {
    name_en: "Guernsey",
  },
  {
    name_en: "Ghana",
  },
  {
    name_en: "Gibraltar",
  },
  {
    name_en: "Greenland",
  },
  {
    name_en: "Gambia",
  },
  {
    name_en: "Guinea",
  },
  {
    name_en: "Guadeloupe",
  },
  {
    name_en: "Equatorial Guinea",
  },
  {
    name_en: "Greece",
  },
  {
    name_en: "South Georgia",
  },
  {
    name_en: "Guatemala",
  },
  {
    name_en: "Guam",
  },
  {
    name_en: "Guinea-Bissau",
  },
  {
    name_en: "Guyana",
  },
  {
    name_en: "Hong Kong",
  },
  {
    name_en: "Heard and McDonald Islands",
  },
  {
    name_en: "Honduras",
  },
  {
    name_en: "Croatia",
  },
  {
    name_en: "Haiti",
  },
  {
    name_en: "Hungary",
  },
  {
    name_en: "International",
  },
  {
    name_en: "Indonesia",
  },
  {
    name_en: "Ireland",
  },
  {
    name_en: "Israel",
  },
  {
    name_en: "Isle of Man",
  },
  {
    name_en: "India",
  },
  {
    name_en: "British Indian Ocean Territory",
  },
  {
    name_en: "Iraq",
  },
  {
    name_en: "Iran",
  },
  {
    name_en: "Iceland",
  },
  {
    name_en: "Italy",
  },
  {
    name_en: "Jersey",
  },
  {
    name_en: "Jamaica",
  },
  {
    name_en: "Jordan",
  },
  {
    name_en: "Japan",
  },
  {
    name_en: "Kenya",
  },
  {
    name_en: "Kyrgyzstan",
  },
  {
    name_en: "Cambodia",
  },
  {
    name_en: "Kiribati",
  },
  {
    name_en: "Comoros",
  },
  {
    name_en: "Saint Kitts and Nevis",
  },
  {
    name_en: "North Korea",
  },
  {
    name_en: "South Korea",
  },
  {
    name_en: "Kuwait",
  },
  {
    name_en: "Cayman Islands",
  },
  {
    name_en: "Kazakhstan",
  },
  {
    name_en: "Lao People's Democratic Republic",
  },
  {
    name_en: "Lebanon",
  },
  {
    name_en: "Saint Lucia",
  },
  {
    name_en: "Liechtenstein",
  },
  {
    name_en: "Sri Lanka",
  },
  {
    name_en: "Liberia",
  },
  {
    name_en: "Lesotho",
  },
  {
    name_en: "Lithuania",
  },
  {
    name_en: "Luxembourg",
  },
  {
    name_en: "Latvia",
  },
  {
    name_en: "Libya",
  },
  {
    name_en: "Morocco",
  },
  {
    name_en: "Monaco",
  },
  {
    name_en: "Moldova",
  },
  {
    name_en: "Montenegro",
  },
  {
    name_en: "Saint-Martin (France)",
  },
  {
    name_en: "Madagascar",
  },
  {
    name_en: "Marshall Islands",
  },
  {
    name_en: "Macedonia",
  },
  {
    name_en: "Mali",
  },
  {
    name_en: "Myanmar",
  },
  {
    name_en: "Mongolia",
  },
  {
    name_en: "Macau",
  },
  {
    name_en: "Northern Mariana Islands",
  },
  {
    name_en: "Martinique",
  },
  {
    name_en: "Mauritania",
  },
  {
    name_en: "Montserrat",
  },
  {
    name_en: "Malta",
  },
  {
    name_en: "Mauritius",
  },
  {
    name_en: "Maldives",
  },
  {
    name_en: "Malawi",
  },
  {
    name_en: "Mexico",
  },
  {
    name_en: "Malaysia",
  },
  {
    name_en: "Mozambique",
  },
  {
    name_en: "Northern Ireland",
  },
  {
    name_en: "Namibia",
  },
  {
    name_en: "New Caledonia",
  },
  {
    name_en: "Niger",
  },
  {
    name_en: "Norfolk Island",
  },
  {
    name_en: "Nigeria",
  },
  {
    name_en: "Nicaragua",
  },
  {
    name_en: "The Netherlands",
  },
  {
    name_en: "Norway",
  },
  {
    name_en: "Nepal",
  },
  {
    name_en: "Nauru",
  },
  {
    name_en: "Niue",
  },
  {
    name_en: "New Zealand",
  },
  {
    name_en: "Oman",
  },
  {
    name_en: "Panama",
  },
  {
    name_en: "Peru",
  },
  {
    name_en: "French Polynesia",
  },
  {
    name_en: "Papua New Guinea",
  },
  {
    name_en: "Philippines",
  },
  {
    name_en: "Pakistan",
  },
  {
    name_en: "Poland",
  },
  {
    name_en: "St. Pierre and Miquelon",
  },
  {
    name_en: "Pitcairn",
  },
  {
    name_en: "Puerto Rico",
  },
  {
    name_en: "Palestine, State of",
  },
  {
    name_en: "Portugal",
  },
  {
    name_en: "Palau",
  },
  {
    name_en: "Paraguay",
  },
  {
    name_en: "Qatar",
  },
  {
    name_en: "Réunion",
  },
  {
    name_en: "Romania",
  },
  {
    name_en: "Serbia",
  },
  {
    name_en: "Russian Federation",
  },
  {
    name_en: "Rwanda",
  },
  {
    name_en: "Scotland",
  },
  {
    name_en: "Saudi Arabia",
  },
  {
    name_en: "Solomon Islands",
  },
  {
    name_en: "Seychelles",
  },
  {
    name_en: "Sudan",
  },
  {
    name_en: "Sweden",
  },
  {
    name_en: "Singapore",
  },
  {
    name_en: "Saint Helena",
  },
  {
    name_en: "Slovenia",
  },
  {
    name_en: "Svalbard and Jan Mayen Islands",
  },
  {
    name_en: "Slovakia",
  },
  {
    name_en: "Sierra Leone",
  },
  {
    name_en: "San Marino",
  },
  {
    name_en: "Senegal",
  },
  {
    name_en: "Somalia",
  },
  {
    name_en: "Suriname",
  },
  {
    name_en: "South Sudan",
  },
  {
    name_en: "Sao Tome and Principe",
  },
  {
    name_en: "El Salvador",
  },
  {
    name_en: "Sint Maarten (Dutch part)",
  },
  {
    name_en: "Syria",
  },
  {
    name_en: "Swaziland",
  },
  {
    name_en: "Turks and Caicos Islands",
  },
  {
    name_en: "Chad",
  },
  {
    name_en: "French Southern Territories",
  },
  {
    name_en: "Togo",
  },
  {
    name_en: "Thailand",
  },
  {
    name_en: "Tajikistan",
  },
  {
    name_en: "Tokelau",
  },
  {
    name_en: "Timor-Leste",
  },
  {
    name_en: "Turkmenistan",
  },
  {
    name_en: "Tunisia",
  },
  {
    name_en: "Tonga",
  },
  {
    name_en: "Turkey",
  },
  {
    name_en: "Trinidad and Tobago",
  },
  {
    name_en: "Tuvalu",
  },
  {
    name_en: "Taiwan",
  },
  {
    name_en: "Tanzania",
  },
  {
    name_en: "Ukraine",
  },
  {
    name_en: "Uganda",
  },
  {
    name_en: "United States Minor Outlying Islands",
  },
  {
    name_en: "United States",
  },
  {
    name_en: "Uruguay",
  },
  {
    name_en: "Uzbekistan",
  },
  {
    name_en: "Vatican",
  },
  {
    name_en: "Saint Vincent and the Grenadines",
  },
  {
    name_en: "Venezuela",
  },
  {
    name_en: "Virgin Islands (British)",
  },
  {
    name_en: "Virgin Islands (U.S.)",
  },
  {
    name_en: "Vietnam",
  },
  {
    name_en: "Vanuatu",
  },
  {
    name_en: "Worldwide",
  },
  {
    name_en: "Wales",
  },
  {
    name_en: "Wallis and Futuna Islands",
  },
  {
    name_en: "Samoa",
  },
  {
    name_en: "Kosovo",
  },
  {
    name_en: "Yemen",
  },
  {
    name_en: "Mayotte",
  },
  {
    name_en: "South Africa",
  },
  {
    name_en: "Zambia",
  },
  {
    name_en: "Zimbabwe",
  },
];
export default countries;
