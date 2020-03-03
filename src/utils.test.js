// uses example patientsTest file to test
import {
    disLifeGender, disLifeRace,
    findGenderProportions,
    findLanguageProportions,
    findPatientCount,
    findRaceProportions,
    patientJSONtoList, qualLifeGender, qualLifeRace
} from "./utils";
import patientsTest from './testfiles/patientsTest.json';

test('patient count is 1035', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(findPatientCount(patientsList)).toBe(1035);
});

test('testParserID', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['id']).toBe('8f789d0b-3145-4cf2-8504-13159edaa747');
});

test('testParserRace', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['race']).toBe('White');
});

test('testParserEthnicity', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['ethnicity']).toBe('Not Hispanic or Latino');
});

test('testParserMaiden', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['maidenName']).toBe('Tisa11 Quitzon246');
});

test('testParserBirthSex', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['birthSex']).toBe('F');
});

test('testParserBirthCity', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['birthCity']).toBe('Braintree');
});

test('testParserBirthState', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['birthState']).toBe('Massachusetts');
});

test('testParserBirthCountry', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['birthCountry']).toBe('US');
});

test('testParserDisLifeYears', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['disLifeYears']).toBe(0.0082221553734000332);
});

test('testParserQualLifeYears', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['qualLifeYears']).toBe(20.9917778446266);
});

test('testParserSocSec', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['socialSecurity']).toBe('999-58-8677');
});

test('testParserFamilyName', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['familyName']).toBe('Beatty507');
});

test('testParserFirstName', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['givenNames']).toStrictEqual(['Abby752']);
});

test('testParserPrefixes', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['prefixes']).toStrictEqual(['Ms.']);
});

test('testParserPhone', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['phone']).toBe('555-118-9003');
});

test('testParserGender', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['gender']).toBe('female');
});

test('testParserBirth', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['birthDate']).toBe('1998-08-25');
});

test('testParserAddressLine', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['addressLine']).toBe('506 Herzog Byway Apt 99');
});

test('testParserCity', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['city']).toBe('Barre');
});

test('testParserState', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['state']).toBe('Massachusetts');
});

test('testParserPostcode', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['postcode']).toBe('01005');
});

test('testParserCountry', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['country']).toBe('US');
});

test('testParserLanguage', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['language']).toBe('English');
});

test('testParserMarital', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(patientsList[0]['marital']).toBe('Never Married');
});

test('testRaceProportions', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(findRaceProportions(patientsList)).toStrictEqual({"American Indian or Alaska Native": 4, "Asian": 65,
        "Black or African American": 76, "Other": 91, "White": 799});
});

test('testGenderProportions', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(findGenderProportions(patientsList)).toStrictEqual({"female": 523, "male": 512});
});

test('testLanguageProportions', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(findLanguageProportions(patientsList)).toStrictEqual({"Chinese": 33, "English": 856, "French": 10,
        "French (France)": 8, "German (Germany)": 1,"Greek": 4, "Hindi": 7, "Italian": 9, "Portuguese": 28, "Russian (Russia)": 3,
    "Spanish": 76});
});

test('testQualLifeGenderProportions', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(qualLifeGender(patientsList)).toStrictEqual({"female": 34.86139119218188, "male": 36.62957928429578});
});

test('testDisLifeGenderProportions', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(disLifeGender(patientsList)).toStrictEqual({"female": 5.094631752368799, "male": 5.036436340704227});
});

test('testDisLifeRaceProportions', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(disLifeRace(patientsList)).toStrictEqual({"American Indian or Alaska Native": 1.3919114151660887,
        "Asian": 6.047759648281353, "Black or African American": 4.097526077779072, "Other": 6.646892533146896,
        "White": 4.916391223658222});
});

test('testQualLifeRaceProportions', () => {
    var patientsList = patientJSONtoList(patientsTest);
    expect(qualLifeRace(patientsList)).toStrictEqual({"American Indian or Alaska Native": 31.10808858483391,
        "Asian": 37.3983941978725, "Black or African American": 36.12615813274724, "Other": 39.122338236083884,
        "White": 35.201255835165334});
});










