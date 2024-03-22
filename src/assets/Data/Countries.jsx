const countries = [
  {
    data: "Andorra",
  },
  {
    data: "United Arab Emirates",
  },
  {
    data: "Afghanistan",
  },
  {
    data: "Antigua and Barbuda",
  },
  {
    data: "Anguilla",
  },
  {
    data: "Albania",
  },
  {
    data: "Armenia",
  },
  {
    data: "Angola",
  },
  {
    data: "Antarctica",
  },
  {
    data: "Argentina",
  },
  {
    data: "American Samoa",
  },
  {
    data: "Austria",
  },
  {
    data: "Australia",
  },
  {
    data: "Aruba",
  },
  {
    data: "Åland Islands",
  },
  {
    data: "Azerbaijan",
  },
  {
    data: "Bosnia and Herzegovina",
  },
  {
    data: "Barbados",
  },
  {
    data: "Bangladesh",
  },
  {
    data: "Belgium",
  },
  {
    data: "Burkina Faso",
  },
  {
    data: "Bulgaria",
  },
  {
    data: "Bahrain",
  },
  {
    data: "Burundi",
  },
  {
    data: "Benin",
  },
  {
    data: "Saint Barthélemy",
  },
  {
    data: "Bermuda",
  },
  {
    data: "Brunei Darussalam",
  },
  {
    data: "Bolivia",
  },
  {
    data: "Caribbean Netherlands ",
  },
  {
    data: "Brazil",
  },
  {
    data: "Bahamas",
  },
  {
    data: "Bhutan",
  },
  {
    data: "Bouvet Island",
  },
  {
    data: "Botswana",
  },
  {
    data: "Belarus",
  },
  {
    data: "Belize",
  },
  {
    data: "Canada",
  },
  {
    data: "Cocos (Keeling) Islands",
  },
  {
    data: "Democratic Republic of Congo",
  },
  {
    data: "Central African Republic",
  },
  {
    data: "Congo",
  },
  {
    data: "Switzerland",
  },
  {
    data: "Ivory Coast",
  },
  {
    data: "Cook Islands",
  },
  {
    data: "Chile",
  },
  {
    data: "Cameroon",
  },
  {
    data: "China",
  },
  {
    data: "Colombia",
  },
  {
    data: "Costa Rica",
  },
  {
    data: "Cuba",
  },
  {
    data: "Cape Verde",
  },
  {
    data: "Curaçao",
  },
  {
    data: "Christmas Island",
  },
  {
    data: "Cyprus",
  },
  {
    data: "Czech Republic",
  },
  {
    data: "Germany",
  },
  {
    data: "Djibouti",
  },
  {
    data: "Denmark",
  },
  {
    data: "Dominica",
  },
  {
    data: "Dominican Republic",
  },
  {
    data: "Algeria",
  },
  {
    data: "Ecuador",
  },
  {
    data: "Estonia",
  },
  {
    data: "Egypt",
  },
  {
    data: "Western Sahara",
  },
  {
    data: "England",
  },
  {
    data: "Eritrea",
  },
  {
    data: "Spain",
  },
  {
    data: "Ethiopia",
  },
  {
    data: "Europe",
  },
  {
    data: "Finland",
  },
  {
    data: "Fiji",
  },
  {
    data: "Falkland Islands",
  },
  {
    data: "Micronesia, Federated States of",
  },
  {
    data: "Faroe Islands",
  },
  {
    data: "France",
  },
  {
    data: "Gabon",
  },
  {
    data: "United Kingdom",
  },
  {
    data: "Grenada",
  },
  {
    data: "Georgia",
  },
  {
    data: "French Guiana",
  },
  {
    data: "Guernsey",
  },
  {
    data: "Ghana",
  },
  {
    data: "Gibraltar",
  },
  {
    data: "Greenland",
  },
  {
    data: "Gambia",
  },
  {
    data: "Guinea",
  },
  {
    data: "Guadeloupe",
  },
  {
    data: "Equatorial Guinea",
  },
  {
    data: "Greece",
  },
  {
    data: "South Georgia",
  },
  {
    data: "Guatemala",
  },
  {
    data: "Guam",
  },
  {
    data: "Guinea-Bissau",
  },
  {
    data: "Guyana",
  },
  {
    data: "Hong Kong",
  },
  {
    data: "Heard and McDonald Islands",
  },
  {
    data: "Honduras",
  },
  {
    data: "Croatia",
  },
  {
    data: "Haiti",
  },
  {
    data: "Hungary",
  },
  {
    data: "International",
  },
  {
    data: "Indonesia",
  },
  {
    data: "Ireland",
  },
  {
    data: "Israel",
  },
  {
    data: "Isle of Man",
  },
  {
    data: "India",
  },
  {
    data: "British Indian Ocean Territory",
  },
  {
    data: "Iraq",
  },
  {
    data: "Iran",
  },
  {
    data: "Iceland",
  },
  {
    data: "Italy",
  },
  {
    data: "Jersey",
  },
  {
    data: "Jamaica",
  },
  {
    data: "Jordan",
  },
  {
    data: "Japan",
  },
  {
    data: "Kenya",
  },
  {
    data: "Kyrgyzstan",
  },
  {
    data: "Cambodia",
  },
  {
    data: "Kiribati",
  },
  {
    data: "Comoros",
  },
  {
    data: "Saint Kitts and Nevis",
  },
  {
    data: "North Korea",
  },
  {
    data: "South Korea",
  },
  {
    data: "Kuwait",
  },
  {
    data: "Cayman Islands",
  },
  {
    data: "Kazakhstan",
  },
  {
    data: "Lao People's Democratic Republic",
  },
  {
    data: "Lebanon",
  },
  {
    data: "Saint Lucia",
  },
  {
    data: "Liechtenstein",
  },
  {
    data: "Sri Lanka",
  },
  {
    data: "Liberia",
  },
  {
    data: "Lesotho",
  },
  {
    data: "Lithuania",
  },
  {
    data: "Luxembourg",
  },
  {
    data: "Latvia",
  },
  {
    data: "Libya",
  },
  {
    data: "Morocco",
  },
  {
    data: "Monaco",
  },
  {
    data: "Moldova",
  },
  {
    data: "Montenegro",
  },
  {
    data: "Saint-Martin (France)",
  },
  {
    data: "Madagascar",
  },
  {
    data: "Marshall Islands",
  },
  {
    data: "Macedonia",
  },
  {
    data: "Mali",
  },
  {
    data: "Myanmar",
  },
  {
    data: "Mongolia",
  },
  {
    data: "Macau",
  },
  {
    data: "Northern Mariana Islands",
  },
  {
    data: "Martinique",
  },
  {
    data: "Mauritania",
  },
  {
    data: "Montserrat",
  },
  {
    data: "Malta",
  },
  {
    data: "Mauritius",
  },
  {
    data: "Maldives",
  },
  {
    data: "Malawi",
  },
  {
    data: "Mexico",
  },
  {
    data: "Malaysia",
  },
  {
    data: "Mozambique",
  },
  {
    data: "Northern Ireland",
  },
  {
    data: "Namibia",
  },
  {
    data: "New Caledonia",
  },
  {
    data: "Niger",
  },
  {
    data: "Norfolk Island",
  },
  {
    data: "Nigeria",
  },
  {
    data: "Nicaragua",
  },
  {
    data: "The Netherlands",
  },
  {
    data: "Norway",
  },
  {
    data: "Nepal",
  },
  {
    data: "Nauru",
  },
  {
    data: "Niue",
  },
  {
    data: "New Zealand",
  },
  {
    data: "Oman",
  },
  {
    data: "Panama",
  },
  {
    data: "Peru",
  },
  {
    data: "French Polynesia",
  },
  {
    data: "Papua New Guinea",
  },
  {
    data: "Philippines",
  },
  {
    data: "Pakistan",
  },
  {
    data: "Poland",
  },
  {
    data: "St. Pierre and Miquelon",
  },
  {
    data: "Pitcairn",
  },
  {
    data: "Puerto Rico",
  },
  {
    data: "Palestine, State of",
  },
  {
    data: "Portugal",
  },
  {
    data: "Palau",
  },
  {
    data: "Paraguay",
  },
  {
    data: "Qatar",
  },
  {
    data: "Réunion",
  },
  {
    data: "Romania",
  },
  {
    data: "Serbia",
  },
  {
    data: "Russian Federation",
  },
  {
    data: "Rwanda",
  },
  {
    data: "Scotland",
  },
  {
    data: "Saudi Arabia",
  },
  {
    data: "Solomon Islands",
  },
  {
    data: "Seychelles",
  },
  {
    data: "Sudan",
  },
  {
    data: "Sweden",
  },
  {
    data: "Singapore",
  },
  {
    data: "Saint Helena",
  },
  {
    data: "Slovenia",
  },
  {
    data: "Svalbard and Jan Mayen Islands",
  },
  {
    data: "Slovakia",
  },
  {
    data: "Sierra Leone",
  },
  {
    data: "San Marino",
  },
  {
    data: "Senegal",
  },
  {
    data: "Somalia",
  },
  {
    data: "Suriname",
  },
  {
    data: "South Sudan",
  },
  {
    data: "Sao Tome and Principe",
  },
  {
    data: "El Salvador",
  },
  {
    data: "Sint Maarten (Dutch part)",
  },
  {
    data: "Syria",
  },
  {
    data: "Swaziland",
  },
  {
    data: "Turks and Caicos Islands",
  },
  {
    data: "Chad",
  },
  {
    data: "French Southern Territories",
  },
  {
    data: "Togo",
  },
  {
    data: "Thailand",
  },
  {
    data: "Tajikistan",
  },
  {
    data: "Tokelau",
  },
  {
    data: "Timor-Leste",
  },
  {
    data: "Turkmenistan",
  },
  {
    data: "Tunisia",
  },
  {
    data: "Tonga",
  },
  {
    data: "Turkey",
  },
  {
    data: "Trinidad and Tobago",
  },
  {
    data: "Tuvalu",
  },
  {
    data: "Taiwan",
  },
  {
    data: "Tanzania",
  },
  {
    data: "Ukraine",
  },
  {
    data: "Uganda",
  },
  {
    data: "United States Minor Outlying Islands",
  },
  {
    data: "United States",
  },
  {
    data: "Uruguay",
  },
  {
    data: "Uzbekistan",
  },
  {
    data: "Vatican",
  },
  {
    data: "Saint Vincent and the Grenadines",
  },
  {
    data: "Venezuela",
  },
  {
    data: "Virgin Islands (British)",
  },
  {
    data: "Virgin Islands (U.S.)",
  },
  {
    data: "Vietnam",
  },
  {
    data: "Vanuatu",
  },
  {
    data: "Worldwide",
  },
  {
    data: "Wales",
  },
  {
    data: "Wallis and Futuna Islands",
  },
  {
    data: "Samoa",
  },
  {
    data: "Kosovo",
  },
  {
    data: "Yemen",
  },
  {
    data: "Mayotte",
  },
  {
    data: "South Africa",
  },
  {
    data: "Zambia",
  },
  {
    data: "Zimbabwe",
  },
];
export default countries;
