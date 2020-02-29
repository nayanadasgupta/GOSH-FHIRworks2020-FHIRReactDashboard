export function patientJSONtoList (rawPatients)
{
    //TODO: GET SERVER VERSION
    let patients = [];
    for (let i = 0; i < rawPatients.length; i++) {
        let patient = {};
        let rawPatientsList = rawPatients[i];
        let rawEntries = rawPatientsList['entry'];
        for (let j = 0; j < rawEntries.length; j++)
        {
            // TODO: Need to check all ks as the urls could be in different positions
            // TODO: Check: Taking Medical Record Number to be ID!!!!!
            patient['id'] = (rawEntries[j]['resource']['id']);
            if (rawEntries[j]['resource']['extension'][0]['url'] === 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race')
            {
                patient['race'] = rawEntries[j]['resource']['extension'][0]['extension'][0]['valueCoding']['display'];
            }
            if (rawEntries[j]['resource']['extension'][1]['url'] === 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity')
            {
                patient['ethnicity'] = rawEntries[j]['resource']['extension'][1]['extension'][0]['valueCoding']['display'];
            }
            if (rawEntries[j]['resource']['extension'][2]['url'] === 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName')
            {
                patient['maidenName'] = rawEntries[j]['resource']['extension'][2]['valueString'];
            }
            if (rawEntries[j]['resource']['extension'][3]['url'] === 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex')
            {
                patient['birthSex'] = rawEntries[j]['resource']['extension'][3]['valueCode'];
            }
            if (rawEntries[j]['resource']['extension'][4]['url'] === 'http://hl7.org/fhir/StructureDefinition/patient-birthPlace')
            {
                patient['birthCity'] = rawEntries[j]['resource']['extension'][4]['valueAddress']['city'];
                patient['birthState'] = rawEntries[j]['resource']['extension'][4]['valueAddress']['state'];
                patient['birthCountry'] = rawEntries[j]['resource']['extension'][4]['valueAddress']['country'];
            }
            //TODO: float values are rounded to integers!!!!!!!!!
            if (rawEntries[j]['resource']['extension'][5]['url'] === 'http://synthetichealth.github.io/synthea/disability-adjusted-life-years')
            {
                patient['disLifeYears'] = rawEntries[j]['resource']['extension'][5]['valueDecimal'];
            }
            if (rawEntries[j]['resource']['extension'][6]['url'] === 'http://synthetichealth.github.io/synthea/quality-adjusted-life-years')
            {
                patient['qualLifeYears'] = rawEntries[j]['resource']['extension'][6]['valueDecimal'];
            }
            if (rawEntries[j]['resource']['identifier'][2]['type']['text'] === 'Social Security Number')
            {
                patient['socialSecurity'] = rawEntries[j]['resource']['identifier'][2]['value'];
            }

            // TODO: Don't work - drivers licence and passport number

            // if (rawEntries[j]['resource']['identifier'][3]['type']['text'] === 'Driver\'s License')
            // {
            //     patient['drivers'] = rawEntries[j]['resource']['identifier'][3]['value'];
            // }
            // if (rawEntries[j]['resource']['identifier'][3]['type']['text'] === 'Driver\'s License')
            // {
            //     patient['driversLicence'] = rawEntries[j]['resource']['identifier'][3]['value'];
            // }
            // if (rawEntries[j]['resource']['identifier'][4]['type']['text'] === 'Passport Number')
            // {
            //     patient['passportNo'] = rawEntries[j]['resource']['identifier'][4]['value'];
            // }

            patient['familyName'] = rawEntries[j]['resource']['name'][0]['family'];
            // list of given names
            patient['givenNames'] = rawEntries[j]['resource']['name'][0]['given'];
            // list of prefixes
            patient['prefixes'] = rawEntries[j]['resource']['name'][0]['prefix'];

            patient['phone'] = rawEntries[j]['resource']['telecom'][0]['value'];

            patient['gender'] = rawEntries[j]['resource']['gender'];

            patient['birthDate'] = rawEntries[j]['resource']['birthDate'];

            patient['addressLine'] = rawEntries[j]['resource']['address'][0]['line'][0];

            patient['city'] = rawEntries[j]['resource']['address'][0]['city'];

            patient['state'] = rawEntries[j]['resource']['address'][0]['state'];

            patient['postcode'] = rawEntries[j]['resource']['address'][0]['postalCode'];

            patient['country'] = rawEntries[j]['resource']['address'][0]['country'];

            patient['martial'] = rawEntries[j]['resource']['maritalStatus']['text'];

            patient['language'] = rawEntries[j]['resource']['communication'][0]['language']['text'];

        }
        patients.push(patient)
    }
    return patients;
}

export function findRaceProportions(patientsList) {
    let raceDict = {};
    for (let i = 0; i < patientsList.length; i++)
    {
        if (typeof raceDict[patientsList[i]['race']] === "undefined")
        {
            raceDict[patientsList[i]['race']] = 1;
        }
        else
        {
            raceDict[patientsList[i]['race']] += 1;
        }
    }
    return raceDict;
}

export function findGenderProportions(patientsList) {
    let genderDict = {};
    for (let i = 0; i < patientsList.length; i++)
    {
        if (typeof genderDict[patientsList[i]['gender']] === "undefined")
        {
            genderDict[patientsList[i]['gender']] = 1;
        }
        else
        {
            genderDict[patientsList[i]['gender']] += 1;
        }
    }
    return genderDict;
}

export function findLanguageProportions(patientsList) {
    let languageDict = {};
    for (let i = 0; i < patientsList.length; i++)
    {
        if (typeof languageDict[patientsList[i]['language']] === "undefined")
        {
            languageDict[patientsList[i]['language']] = 1;
        }
        else
        {
            languageDict[patientsList[i]['language']] += 1;
        }
    }
    return languageDict;
}

export function findPatientCount(patientsList)
{
    return patientsList.length;
}

export function qualLifeGender(patientsList)
{
    let genderCountDict = findGenderProportions(patientsList);
    let sumQualLifeDict = {};
    for (let i = 0; i < patientsList.length; i++)
    {
        if (typeof sumQualLifeDict[patientsList[i]['gender']] == 'undefined')
        {
            sumQualLifeDict[patientsList[i]['gender']] = patientsList[i]['qualLifeYears']
        }
        else
        {
            sumQualLifeDict[patientsList[i]['gender']] += patientsList[i]['qualLifeYears']
        }
    }
    for (var key in sumQualLifeDict)
    {
        sumQualLifeDict[key] = sumQualLifeDict[key]/genderCountDict[key]
    }
    console.log(sumQualLifeDict);
    return sumQualLifeDict;
}

function getListOfPatientIDs(patientsList)
{
    let patientIDList = [];
    for (let i = 0; i < patientsList.length; i++)
    {
        patientIDList.push(patientsList[i]['id']);
    }
    return patientIDList;
}

const https = require("https");
const options = {
    agent: new https.Agent({
        rejectUnauthorized: false
    })
};

export function getSmokerProp(patientsList)
{
    let patientIDList = getListOfPatientIDs();
    for (let i = 0; i < patientIDList; i++)
    {
        let observationData = {};
        fetch("https://localhost:5001/api/Observation/" + patientIDList[i],options)
            .then(response => response.json())
            .then(data => observationData)
        let entry = observationData['entry']
    }

}
