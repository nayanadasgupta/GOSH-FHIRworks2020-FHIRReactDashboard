export function patientJSONtoList (rawPatients)
{
    let patients = [];
    for (let i = 0; i < rawPatients.length; i++) {
        let patient = {};
        let rawPatientsList = rawPatients[i];
        let rawEntries = rawPatientsList['entry'];
        for (let j = 0; j < rawEntries.length; j++)
        {
            patient['id'] = (rawEntries[j]['resource']['id']);
            if (rawEntries[j]['resource']['extension'][0]['url'] === 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race')
            {
                patient['race'] = rawEntries[j]['resource']['extension'][0]['extension'][0]['valueCoding']['display'];
            }
            else if (rawEntries[j]['resource']['extension'][1]['url'] === 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity')
            {
                patient['ethnicity'] = rawEntries[j]['resource']['extension'][1]['extension'][0]['valueCoding']['display'];
            }
            else if (rawEntries[j]['resource'][2]['url'] === 'http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName')
            {
                patient['maidenName'] = rawEntries[j]['resource'][2]['valueString'];
            }
        }
        patients.push(patient)
    }
    return patients;
}

