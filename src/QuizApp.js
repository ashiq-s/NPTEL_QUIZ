import React, { useState, useEffect } from 'react';
import "./App.css"

const quizzes = [
    // Define your 12 quizzes here
    // Each quiz should have an array of questions
    // Each question should have a `question`, `options`, and `correctAnswer`
    // Example:
    {
        name: 'Quiz 1',
        questions: [
            {
                number: "1",
                question: 'tropical moist forests do not include',
                options: ['broadleaved forests', 'wet evergreen forests', 'semi-evergreen forests', 'moist deciduous forests'],
                correctAnswer: 'broadleaved forests',
            },
            {
                number: "2",
                question: 'which of these is not a use value?',
                options: ['direct value', 'indirect value', 'option value', 'existence value'],
                correctAnswer: 'existence value',
            },
            {
                number: "3",
                question: 'the value derived from the knowledge of use of resources by others in the current generation is called',
                options: ['altruistic value', 'bequest value', 'existence value', 'option value'],
                correctAnswer: 'altruistic value',
            },
            {
                number: "4",
                question: 'montane sub-tropical forests do not involve',
                options: ['broadleaved forests', 'pine forests', 'semi-evergreen forests', 'dry evergreen forests'],
                correctAnswer: 'semi-evergreen forests',
            },
            {
                number: "5",
                question: '\"pant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy\" is',
                options: ['silviculture definition of forests', 'FAO definition of forests', 'legal definition of forests', 'ecological definition of forests'],
                correctAnswer: 'ecological definition of forests',
            },
            {
                number: "6",
                question: 'which of these is not a consumptive value?',
                options: ['timber', 'firewood', 'non-timber forest products', 'education'],
                correctAnswer: 'education',
            },
            {
                number: "7",
                question: 'the term \'forest\' originates from',
                options: ['latin foris meaning outside', 'greek foris meaning outside', 'latin foris meaning trees', 'greek foris meaning trees'],
                correctAnswer: 'latin foris meaning outside',
            },
            {
                number: "8",
                question: 'the value of leaving use and non-use values for offspring\'s or future generation is called',
                options: ['altruistic value', 'bequest value', 'existence value', 'option value'],
                correctAnswer: 'bequest value',
            },
            {
                number: "9",
                question: 'which of these is not a forest type found in India?',
                options: ['mediterranean dry', 'tropical dry', 'montane temperate', 'alpine'],
                correctAnswer: 'mediterranean dry',
            },
            {
                number: "10",
                question: 'according to the supreme court, the term forest land includes',
                options: ['some area recorded as forest in the government record according to ownership', 'any area recorded as forest in the government record according to ownership', 'some area recorded as forest in the government record irrespective of ownership', 'any area recorded as forest in the government record irrespective of ownership'],
                correctAnswer: 'any area recorded as forest in the government record irrespective of ownership',
            },
            // Add more questions...
        ],
    },
    {
        name: 'Quiz 2',
        questions: [
            {
                number: '1',
                question: 'in the context of plant nutrition, boron is',
                options: ['macronutrient', 'micronutrient', 'primary nutrient', 'secondary nutrient'],
                correctAnswer: 'micronutrient',
            },
            {
                number: '2',
                question: 'the art and science of cultivating forest crops is called',
                options: ['foresticulture', 'monoculture', 'silviculture', 'silvics'],
                correctAnswer: 'silviculture',
            },
            {
                number: '3',
                question: 'the climax near tindi village is being controlled by disturbance by cattle. this is an example of',
                options: ['climatic climax', 'edaphic climax', 'disclimax', 'catastrophic climax'],
                correctAnswer: 'disclimax',
            },
            {
                number: '4',
                question: 'which of these is not a characteristic of pioneer species',
                options: ['ability to grow on care rocks', 'ability to tolerate extreme temperatures', 'large size', 'short life span'],
                correctAnswer: 'large size',
            },
            {
                number: '5',
                question: 'which of these depicts correctly the lithosere primary succession?',
                options: ['rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax', 'rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax', 'moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax'],
                correctAnswer: 'rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax',
            },
            {
                number: '6',
                question: 'the study of life history/ general features of forest crops with respect to environmental factors is called',
                options: ['foresticulture', 'monoculture', 'silviculture', 'silvics'],
                correctAnswer: 'silvics',
            },
            {
                number: '7',
                question: 'net primary productivity is given by',
                options: ['APAR + LUE', 'APAR X LUE', 'APAR - LUE', 'APAR / LUE'],
                correctAnswer: 'APAR X LUE',
            },
            {
                number: '8',
                question: 'a climax caused by wildfires is an example of',
                options: ['climatic climax', 'edaphic climax', 'disclimax', 'catastrophic climax'],
                correctAnswer: 'catastrophic climax',
            },
            {
                number: '9',
                question: 'practical application of scientific, technical and economic principles of forestry comes under which branch of forestry?',
                options: ['forest management', 'forest economics', 'forest mensuration', 'forest protection'],
                correctAnswer: 'forest management',
            },
            {
                number: '10',
                question: 'which of these is abiotic factor',
                options: ['vines', 'trees', 'reptiles', 'water'],
                correctAnswer: 'water',
            },
        ],
    },
    {
        name: 'Quiz 3',
        questions: [
            {
                number: '1',
                question: 'regur is a term for',
                options: ['black cotton soil', 'alluvial soil', 'saline soil', 'red and yellow soil'],
                correctAnswer: 'black cotton soil',
            },
            {
                number: '2',
                question: 'carbonation is an example of',
                options: ['chemical weathering', 'physical weathering', 'biological weathering', 'none of these'],
                correctAnswer: 'chemical weathering',
            },
            {
                number: '3',
                question: 'banger is a type of',
                options: ['black cotton soil', 'alluvial soil', 'saline soil', 'red and yellow soil'],
                correctAnswer: 'alluvial soil',
            },
            {
                number: '4',
                question: 'cryofacturing is an example of',
                options: ['chemical weathering', 'physical weathering', 'biological weathering', 'none of these'],
                correctAnswer: 'physical weathering',
            },
            {
                number: '5',
                question: 'in soil profile, C refers to',
                options: ['organic surface layer', 'topsoil layer', 'subsoil layer', 'substratum layer'],
                correctAnswer: 'substratum layer',
            },
            {
                number: '6',
                question: 'vertical arrangement of soil horizon is called',
                options: ['soil texture', 'soil structure', 'soil profile', 'soil science'],
                correctAnswer: 'soil profile',
            },
            {
                number: '7',
                question: 'thermal stresses lead to',
                options: ['chemical weathering', 'physical weathering', 'biological weathering', 'none of these'],
                correctAnswer: 'physical weathering',
            },
            {
                number: '8',
                question: 'khadar is a type of',
                options: ['black cotton soil', 'alluvial soil', 'saline soil', 'red and yellow soil'],
                correctAnswer: 'alluvial soil',
            },
            {
                number: '9',
                question: 'hydrolysis is an example of',
                options: ['chemical weathering', 'physical weathering', 'biological weathering', 'none of these'],
                correctAnswer: 'chemical weathering',
            },
            {
                number: '10',
                question: 'which of these has the highest organic matter content',
                options: ['peaty soil', 'alluvial soil', 'saline soil', 'red and yellow soil'],
                correctAnswer: 'peaty soil',
            },
        ],
    },
    {
        name: 'Quiz 4',
        questions: [
            {
                number: '1',
                question: 'measurement of height based on similar triangles comes under',
                options: ['similar measurement', 'dissimilar measurement', 'direct measurementindirect measurement', ''],
                correctAnswer: 'indirect measurement',
            },
            {
                number: '2',
                question: 'for normal form factor, the reference of the base of the cylinder is',
                options: ['base of the tree', 'breast height', '10% of tree height', '20% of tree height'],
                correctAnswer: '10% of tree height',
            },
            {
                number: '3',
                question: 'in a triangle, the angle between base and hypotenuse, theta= 60 degree and the hypotenuse c = 2cm. find the length of the base b',
                options: ['0.33', '0.5', '0.75', '1'],
                correctAnswer: '1',
            },
            {
                number: '4',
                question: '3 trees are located is a sample plot of 15m X 15m. their dbh are as under:\ndbh= 25cm, 30cm, 35cm\nfind the stand basal area in sq m per Ha',
                options: ['9.6', '14.6', '21.6', '27.6'],
                correctAnswer: '9.6',
            },
            {
                number: '5',
                question: 'consider a stand of eucalyptus, trees that are on average 30cm in diameter and spaced on a regular 3m grid. find the spacing factor',
                options: ['5', '10', '15', 'data insufficient'],
                correctAnswer: '10',
            },
            {
                number: '6',
                question: 'for a tree with dbh= 45.6cm, height= 27m and total stem volume of 1.78cum, the artificial form factor of the tree is',
                options: ['0.1', '0.2', '0.3', '0.4'],
                correctAnswer: '0.4',
            },
            {
                number: '7',
                question: 'for the absolute form factor, the reference for the base of the cylinder is',
                options: ['base of the tree', 'breast height', '10% of the height', '20% of the height'],
                correctAnswer: 'base of the tree',
            },
            {
                number: '8',
                question: 'diameter over bark (dob), diameter under bark (dub) and the bark thickness (tb) are related as',
                options: ['dob = dub + tb', 'dob = dub - tb', 'dob = dub + 2 X tb', 'dob = dub -2 X tb'],
                correctAnswer: 'dob = dub + 2 X tb',
            },
            {
                number: '9',
                question: 'choose the correct statement',
                options: ['for a non-circular section, girth tape over- estimates the sectional area', 'for a non-circular section, girth tape under- estimates the sectional area', 'for a non-circular section, girth tape correctly- estimates the sectional area', 'none of these is a correct statement'],
                correctAnswer: 'for a non-circular section, girth tape over- estimates the sectional area',
            },
            {
                number: '10',
                question: 'a tree has dbh of 25cm. find the basal area in sq m',
                options: ['.049', '.096', '.149', '.195'],
                correctAnswer: '.049',
            },
        ],
    },
    {
        name: 'Quiz 5',
        questions: [
            {
                number: '1',
                question: 'the frequency of flyovers is an indicator of',
                options: ['spatial resolution', 'temporal resolution', 'spectral resolution', 'radiometric resolution'],
                correctAnswer: 'temporal resolution',
            },
            {
                number: '2',
                question: '____ is how close the measured values are to correct value',
                options: ['accuracy', 'precision', 'bias', 'variance'],
                correctAnswer: 'accuracy',
            },
            {
                number: '3',
                question: '\"this sampling employs a simple rule of selecting every k unit starting with a number chosen at random from 1 to k as the random start.\" we are talking about',
                options: ['simple random sampling', 'systemic sampling', 'stratified sampling', 'multistage sampling'],
                correctAnswer: 'systemic sampling',
            },
            {
                number: '4',
                question: 'a list of sampling units is called a',
                options: ['frame', 'window', 'sample', 'population'],
                correctAnswer: 'frame',
            },
            {
                number: '5',
                question: 'which of these is correct?',
                options: ['plane surveying takes into account the true shape of the earth and is used for smaller areas (<250 sq km)', 'plane surveying takes into account the true shape of the earth and is used for larger areas (>250 sq km)', 'geodetic surveying takes into account the true shape of the earth and is used for smaller areas (<250 sq km)', 'geodetic surveying takes into account the true shape of the earth and is used for larger areas (>250 sq km)'],
                correctAnswer: 'geodetic surveying takes into account the true shape of the earth and is used for larger areas (>250 sq km)',
            },
            {
                number: '6',
                question: 'a sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as',
                options: ['simple random sampling', 'systematic sampling', 'stratified sampling', 'multistage sampling'],
                correctAnswer: 'simple random sampling',
            },
            {
                number: '7',
                question: 'bathymetric LiDAR uses',
                options: ['far infrared light', 'near infrared light', 'orange light', 'green light'],
                correctAnswer: 'green light',
            },
            {
                number: '8',
                question: 'IMU stands for',
                options: ['imperial meterin unit', 'inertial metering unit', 'imperial measurement unit', 'inertial measurement unit'],
                correctAnswer: 'inertial measurement unit',
            },
            {
                number: '9',
                question: '____ is how close the measured values are to each other',
                options: ['accuracy', 'precision', 'bias', 'variance'],
                correctAnswer: 'precision',
            },
            {
                number: '10',
                question: 'the time of flight of LiDAR is 0.00001 sec. find the distance of the object from the instrument',
                options: ['500m', '1000m', '1500m', '2000m'],
                correctAnswer: '1500m',
            },
        ],
    },
    {
        name: 'Quiz 6',
        questions: [
            {
                number: '1',
                question: 'a scientist uses a trap to capture a monkey. In the context of wildlife protection act 1972,',
                options: ['the trap is weapon and capturing is hunting', 'the trap is not a weapon and capturing is hunting', 'the trap is weapon and capturing is not hunting', 'the trap is not a weapon and capturing is not hunting'],
                correctAnswer: 'the trap is weapon and capturing is hunting',
            },
            {
                number: '2',
                question: 'in the formula I= PXAXT, P refers to',
                options: ['professional pressure', 'pollution pressure', 'population pressure', 'none of the above'],
                correctAnswer: 'population pressure',
            },
            {
                number: '3',
                question: 'which of these is a deterministic factor?',
                options: ['environmental variation', 'forest fire', 'death rate', 'diseases'],
                correctAnswer: 'death rate',
            },
            {
                number: '4',
                question: 'which of these is a stochastic factor?',
                options: ['birth rate', 'death rate', 'population structure', 'forest fire'],
                correctAnswer: 'forest fire',
            },
            {
                number: '5',
                question: 'in the formula I = PXAXT, T refers to',
                options: ['transference', 'time', 'technology', 'none of the above'],
                correctAnswer: 'technology',
            },
            {
                number: '6',
                question: 'which of these form fire triangle?',
                options: ['fire, air, heat', 'fire, oxygen, wood', 'fuel, air, wood', 'fuel, oxygen, heat'],
                correctAnswer: 'fuel, oxygen, heat',
            },
            {
                number: '7',
                question: 'a veterinarian uses an immobilising gun to capture a deer. In the context of wildlife protection act 1972,',
                options: ['the immobilising gun is a weapon and capturing is hunting', 'the immobilising gun is not a weapon and capturing is hunting', 'the immobilising gun is a weapon and capturing is not hunting', 'the immobilising gun is not a weapon and capturing is not hunting'],
                correctAnswer: 'the immobilising gun is a weapon and capturing is hunting',
            },
            {
                number: '8',
                question: 'invasive climbers increase the probability of which of these fire types?',
                options: ['ground fire', 'surface fire', 'ladder fire', 'firestorm'],
                correctAnswer: 'ladder fire',
            },
            {
                number: '9',
                question: 'the acronym HIPPO does not include',
                options: ['habitat loss', 'habitat enhancement', 'over- harvesting', 'human over- population'],
                correctAnswer: 'habitat enhancement',
            },
            {
                number: '10',
                question: 'the acronym HIPPO does not include',
                options: ['habitat loss', 'invasive species', 'pollination', 'pollution'],
                correctAnswer: 'pollination',
            },
        ],
    },
    {
        name: 'Quiz 7',
        questions: [
            {
                number: '1',
                question: 'a site was clear- cut. which of these methods of regeneration cannot be used in a short time- frame?',
                options: ['natural regeneration', 'artificial regeneration by direct sowing', 'artificial regeneration by planting seedlings', 'artificial regeneration by transplanting trees'],
                correctAnswer: 'natural regeneration',
            },
            {
                number: '2',
                question: 'average age at which a tree is considered mature for felling is called as',
                options: ['crop age', 'felling age', 'rotation age', 'maturity age'],
                correctAnswer: 'rotation age',
            },
            {
                number: '3',
                question: 'which of these is not a feature of natural regenration',
                options: ['low cost', 'less requirement of heavy machinery and labour', 'preservation of genetic variability', 'good quality over genetic improvement'],
                correctAnswer: 'good quality over genetic improvement',
            },
            {
                number: '4',
                question: 'ring weeding is primary a feature of',
                options: ['natural generation', 'assisted natural regeneration', 'artificial regeneration by direct sowing', 'artificial regeneration by planting seedlings'],
                correctAnswer: 'assisted natural regeneration',
            },
            {
                number: '5',
                question: 'the movement of seeds away from their place of seed production into a new area is called',
                options: ['translocation', 'migration', 'dispersal', 'drifiting'],
                correctAnswer: 'dispersal',
            },
            {
                number: '6',
                question: 'which of these is not a feature of natural regeneration',
                options: ['seed consumption by insects and seed feeders', 'little control over spacing and stand density', 'long time needed to regenerate forest', 'high requirement of heavy machinery and labour'],
                correctAnswer: 'high requirement of heavy machinery and labour',
            },
            {
                number: '7',
                question: 'which of these is the correct sequence of a silviculture system?',
                options: ['stand tending --> regeneration --> harvesting', 'harvesting --> stand tending --> regeneration', 'harvesting --> regeneration --> stand tending', 'regeneration --> harvesting --> stand tending'],
                correctAnswer: 'harvesting --> regeneration --> stand tending',
            },
            {
                number: '8',
                question: 'which of these is not advantage of clear felling system',
                options: ['simple system, easy and efficient', 'allows for establishment of a more uniform crop', 'increases soil erosion and landslides in hilly areas', 'mimics natural processes of fire and large scale insect attacks'],
                correctAnswer: 'increases soil erosion and landslides in hilly areas',
            },
            {
                number: '9',
                question: 'tending is done during',
                options: ['early stage of life', 'middle stage of life', 'late stage of life', 'any stage of life'],
                correctAnswer: 'any stage of life',
            },
            {
                number: '10',
                question: 'taungya regeneration is',
                options: ['natural regeneration', 'artificial regeneration with villagers', 'artificial regeneration with nomadic tribes', 'artificial regeneration with hunters and gatherers'],
                correctAnswer: 'artificial regeneration with villagers',
            },
        ],
    },
    {
        name: 'Quiz 8',
        questions: [
            {
                number: '1',
                question: 'trees not putting increment are removed during',
                options: ['preparatory felling', 'seeding felling', 'secondary felling', 'final felling'],
                correctAnswer: 'preparatory felling',
            },
            {
                number: '2',
                question: 'for a crop with rotation age 120 years. PB-III would have crop age',
                options: ['0-30 years', '30-60 years', '60-90 years', '90-120 years'],
                correctAnswer: '30-60 years',
            },
            {
                number: '3',
                question: 'close to nature forestry is a feature of',
                options: ['clear felling system', 'selection system', 'uniform shelterwood system', 'group shelterwood system'],
                correctAnswer: 'selection system',
            },
            {
                number: '4',
                question: 'shelterwood system results in',
                options: ['even aged stand with natural aesthetics', 'even aged stand with artificial aesthetics', 'uneven aged stand with natural aesthetics', 'uneven aged stand with artificial aesthetics'],
                correctAnswer: 'even aged stand with natural aesthetics',
            },
            {
                number: '5',
                question: 'inverse - J number diameter curves are seen in',
                options: ['clear felling system', 'selection system', 'uniform shelterwood system', 'group shelterwood system'],
                correctAnswer: 'selection system',
            },
            {
                number: '6',
                question: 'clear felling system is not used for',
                options: ['light demanding species', 'shade bearer species', 'plain areas', 'plateau areas'],
                correctAnswer: 'shade bearer species',
            },
            {
                number: '7',
                question: 'which of these is the correct sequence for shelterwood system',
                options: ['preparatory felling --> secondary felling --> seedling feeling --> final felling', 'preparatory felling --> seedling felling --> secondary felling --> final felling', 'preparatory felling --> secondary felling --> seedling felling --> final felling', 'preparatory felling --> seeding felling --> secondary felling --> final felling'],
                correctAnswer: 'preparatory felling --> seeding felling --> secondary felling --> final felling',
            },
            {
                number: '8',
                question: 'felling made with the object of opening the canopy to remove shelter and allow more light for the regenerated crop is',
                options: ['preparatory felling', 'seedling felling', 'secondary felling', 'final felling'],
                correctAnswer: 'secondary felling',
            },
            {
                number: '9',
                question: 'in group shelterwood system, the regeneration areas is increased',
                options: ['centrifugally around gaps', 'centripetally around gaps', 'parallel to gaps', 'perpendicular to gaps'],
                correctAnswer: 'centrifugally around gaps',
            },
            {
                number: '10',
                question: 'catchment areas are best suited for',
                options: ['clear felling system', 'selection system', 'uniform shelterwood system', 'group shelterwood system'],
                correctAnswer: 'selection system',
            },
        ],
    },
    {
        name: 'Quiz 9',
        questions: [
            {
                number: '1',
                question: 'moving logs from forest to landing area is known as',
                options: ['marking', 'bucking', 'skidding', 'delimbing'],
                correctAnswer: 'skidding',
            },
            {
                number: '2',
                question: 'research plots are shown in _____ marking colour',
                options: ['yellow', 'blue', 'red', 'white'],
                correctAnswer: 'white',
            },
            {
                number: '3',
                question: 'which of these gives the greatest accuracy in constructing face cuts',
                options: ['conventional face', 'humboldt face', 'open face', 'all of these'],
                correctAnswer: 'conventional face',
            },
            {
                number: '4',
                question: 'careful selection of trees for harvesting based on a forest management prescription is known as',
                options: ['surveying', 'cruising', 'marking', 'logging'],
                correctAnswer: 'marking',
            },
            {
                number: '5',
                question: 'surveying timberlands to locate and estimate the volumes and grades of standing timber meeting requirements is known as',
                options: ['surveying', 'cruising', 'marking', 'logging'],
                correctAnswer: 'cruising',
            },
            {
                number: '6',
                question: 'trees on boundary are shown in ____ marking colour',
                options: ['yellow', 'blue', 'red', 'white'],
                correctAnswer: 'red',
            },
            {
                number: '7',
                question: 'cutting of timber into logs is known as',
                options: ['marking', 'bucking', 'skidding', 'delimbing'],
                correctAnswer: 'bucking',
            },
            {
                number: '8',
                question: 'which of these gives the greatest saving of lumber',
                options: ['conventional face', 'humboldt face', 'open face', 'all of these'],
                correctAnswer: 'humboldt face',
            },
            {
                number: '9',
                question: 'trees to be retained are shown in ______ marking colour',
                options: ['yellow', 'blue', 'red', 'white'],
                correctAnswer: 'blue',
            },
            {
                number: '10',
                question: 'net growth in initial volume is given by',
                options: ['V2 - V1', 'V2 - V1 + H + I', 'V2 - V1 + H + 1 + M', 'V2 - V1 + H - 1 - M'],
                correctAnswer: 'V2 - V1 + H + I',
            },
        ],
    },
    {
        name: 'Quiz 10',
        questions: [
            {
                number: '1',
                question: 'shell cracking of seeds is used for which species',
                options: ['amla', 'mango', 'ber', 'teak'],
                correctAnswer: 'ber',
            },
            {
                number: '2',
                question: 'wet and dry treatment of seeds is used for which species',
                options: ['amla', 'mango', 'ber', 'teak'],
                correctAnswer: 'teak',
            },
            {
                number: '3',
                question: 'agave is used for',
                options: ['barbed wire fencing', 'live fencing', 'chain link fencing', 'stone wall fencing '],
                correctAnswer: 'live fencing',
            },
            {
                number: '4',
                question: 'which of these is not a laboratory method to determine best days for seed collection?',
                options: ['maximum dry weight', 'colour of fruits', 'moisture contents of fruits', 'chemical analysis of fat and nitrogen content '],
                correctAnswer: 'colour of fruits',
            },
            {
                number: '5',
                question: 'which of these characterises a refractory site',
                options: ['soil depth < 10cm', 'soil depth 10-30cm', 'soil depth > 30cm', 'none of these'],
                correctAnswer: 'soil depth < 10cm',
            },
            {
                number: '6',
                question: 'which of these is a good storage condition',
                options: ['high moisture, high temperature', 'high moisture, low temperature', 'low moisture, high temperature', 'low moisture, low temperature'],
                correctAnswer: 'low moisture, low temperature',
            },
            {
                number: '7',
                question: 'which of these prevent water logging',
                options: ['sunken bed', 'raised bed', 'flat bed', 'all of these'],
                correctAnswer: 'raised bed',
            },
            {
                number: '8',
                question: 'choice of spacing is dependent upon',
                options: ['objective of plantation', 'site- species matching', 'growth rate', 'all of these'],
                correctAnswer: 'all of these',
            },
            {
                number: '9',
                question: 'which of these conserves moisture',
                options: ['sunken bed', 'raised bed', 'flat bed', 'all of these'],
                correctAnswer: 'sunken bed',
            },
            {
                number: '10',
                question: 'number of seeds in sample that germinate upto the peak germination period expressed as % is a definition of',
                options: ['germination number', 'germination percentage', 'germination energy', 'germination power'],
                correctAnswer: 'germination energy',
            },
        ],
    },
    {
        name: 'Quiz 11',
        questions: [
            {
                number: '1',
                question: 'the tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. thus, the tiger can be called as',
                options: ['umbrella species', 'keystone species', 'flagship species', 'all of the above'],
                correctAnswer: 'all of the above',
            },
            {
                number: '2',
                question: 'zoo is an example of ',
                options: ['in- situ conservation', 'ex- situ conservation', 'in- situ preservation', 'ex- situ preservation'],
                correctAnswer: 'ex- situ conservation',
            },
            {
                number: '3',
                question: 'sustainable harvest of resources falls under the category of',
                options: ['conservation', 'preservation', 'environmentalism', 'none of the above'],
                correctAnswer: 'conservation',
            },
            {
                number: '4',
                question: 'we prefer those areas for the creation of a conservation reserve where the level of threat is',
                options: ['very high', 'medium', 'very low', 'non- existent'],
                correctAnswer: 'medium',
            },
            {
                number: '5',
                question: 'captive breeding is an example of',
                options: ['in- situ conservation', 'ex- situ conservation', 'in- situ preservation', 'ex- situ preservation'],
                correctAnswer: 'ex- situ conservation',
            },
            {
                number: '6',
                question: 'which of these is not a forest classification as per the 1894 forest policy',
                options: ['protection forest', 'production forest', 'minor forest', 'major forest'],
                correctAnswer: 'major forest',
            },
            {
                number: '7',
                question: 'in 1931, Van panchayats were constituted in areas that are now in',
                options: ['Tamil Nadu', 'Madhya Pradesh', 'West Bengal', 'Uttarakhand'],
                correctAnswer: 'Uttarakhand',
            },
            {
                number: '8',
                question: 'planting along canal banks is a part of',
                options: ['farm forestry', 'community forestry', 'extension forestry', 'agroforestry'],
                correctAnswer: 'extension forestry',
            },
            {
                number: '9',
                question: 'the fig tree bears fruits in time when animals do not have much access to food. in this context, it would be a good example of',
                options: ['least concern species', 'keystone species', 'flagship species', 'extinct species'],
                correctAnswer: 'keystone species',
            },
            {
                number: '10',
                question: 'the elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destruction feeding and people can relate to this animal which is important for conservation. given this background, the elephant can be called as',
                options: ['umbrella species', 'keystone species', 'flagship species', 'all of the above'],
                correctAnswer: 'all of the above',
            },
        ],
    },
    {
        name: 'Quiz 12',
        questions: [
            {
                number: '1',
                question: 'a tree has dbh of 35cm. find the basal area is sq m',
                options: ['.049', '.096', '.149', '.195'],
                correctAnswer: '.096',
            },
            {
                number: '2',
                question: 'in a triangle, the angle between base and hypotenuse theta = 60 degree and hypotenuse c = 4cm. find the length of the base b',
                options: ['0.66', '1', '1.5', '2'],
                correctAnswer: '2',
            },
            {
                number: '3',
                question: '\"allowing some places and some creatures to exist without significant human interference\" is a definition of',
                options: ['conservation', 'preservation', 'environmentalism', 'all of these'],
                correctAnswer: 'preservation',
            },
            {
                number: '4',
                question: 'in India the breast height is considered to be',
                options: ['1.37m', '1.47m', '1.57m', '2.47m'],
                correctAnswer: '1.37m',
            },
            {
                number: '5',
                question: 'the term laterite soil is derived from Latin later which means',
                options: ['red', 'brick', 'fertile', 'infertile'],
                correctAnswer: 'brick',
            },
            {
                number: '6',
                question: 'which of these is not a non- use value?',
                options: ['direct value', 'existence value', 'altruistic value', 'bequest value'],
                correctAnswer: 'direct value',
            },
            {
                number: '7',
                question: '\"science of a relationship between organisms and their environments\" is the definition of',
                options: ['conservation', 'preservation', 'environmentalism', 'ecology'],
                correctAnswer: 'ecology',
            },
            {
                number: '8',
                question: 'self ploughing character is seen in',
                options: ['black cotton soil', 'alluvial soil', 'saline soil', 'red and yellow soil'],
                correctAnswer: 'black cotton soil',
            },
            {
                number: '9',
                question: 'mechanical action of ocean waves is an example of',
                options: ['chemical weathering', 'physical weathering', 'biological weathering', 'none of the above'],
                correctAnswer: 'physical weathering',
            },
            {
                number: '10',
                question: 'lithosere is an example of',
                options: ['hydrosere ', 'xerosere', 'psammosere', 'halosere'],
                correctAnswer: 'xerosere',
            },
        ],
    },
];

function QuizApp() {
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [remainingQuestions, setRemainingQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);

    const startQuiz = (quizIndex) => {
        setCurrentQuiz(quizzes[quizIndex]);
        setRemainingQuestions([...quizzes[quizIndex].questions]);
        setCurrentQuestion(0);
        setAnswers([]);
        setSelectedOption(null);
        setCorrectOption(null);
    };

    const handleAnswer = (selectedOption) => {
        const correctAnswer = remainingQuestions[currentQuestion].correctAnswer;
        setAnswers(prevAnswers => [...prevAnswers, { question: remainingQuestions[currentQuestion].question, selectedOption }]);
        setShowAnswer(true);

        setSelectedOption(selectedOption);
        setCorrectOption(correctAnswer);
        setTimeout(() => {
            setSelectedOption(null); // Remove highlight after delay
            setCorrectOption(null);
            if (selectedOption === correctAnswer) {
                if (remainingQuestions.length === 1) {
                    setCurrentQuiz(null); // Return to homepage
                }
                else {
                    const updatedQuestions = [...remainingQuestions];
                    updatedQuestions.shift();
                    setRemainingQuestions(updatedQuestions);
                }
            }
            else {
                const updatedQuestions = [...remainingQuestions];
                const firstQuestion = updatedQuestions[0];
                updatedQuestions.shift();
                updatedQuestions.push(firstQuestion);
                setRemainingQuestions(updatedQuestions);
            }
        }, 800); // Delay before moving to the next question
    };

    useEffect(() => {
        setShowAnswer(false);
    }, [currentQuestion]);

    return (
        <div className="quiz-app">
            <h1>NPTEL - FORESTS AND THEIR MANAGEMENT</h1>
            {currentQuiz ? (
                <div className="quiz">
                    <h2>{currentQuiz.name}</h2>
                    <p className='questionNo'>Question {remainingQuestions[currentQuestion].number}</p>
                    <p className='question'>{remainingQuestions.length > 0 && remainingQuestions[currentQuestion] && remainingQuestions[currentQuestion].question}</p>
                    <ul>
                        {remainingQuestions.length > 0 && remainingQuestions[currentQuestion] && remainingQuestions[currentQuestion].options.map((option, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleAnswer(option)}
                                    className={option === selectedOption ? (option === remainingQuestions[currentQuestion].correctAnswer ? "correct" : "incorrect") : (option === correctOption) ? "correct" : ""}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="home">
                    <h1>Select Quiz</h1>
                    <ul>
                        {quizzes.map((quiz, index) => (
                            <li key={index}>
                                <button onClick={() => startQuiz(index)}>{quiz.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default QuizApp;
