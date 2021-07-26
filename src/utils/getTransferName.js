/**
* @description Expect that "6 transfers" is the maximum possible value
*/
export default function transfersAmountsToString (transferNumber) {
    const transfersAmountsToStringDict = { 
        0: { eng: 'zero', ru: 'Без пересадок' },
        1: { eng: 'one', ru: '1 пересадка' },
        2: { eng: 'two', ru: '2 пересадки' },
        3: { eng: 'three', ru: '3 пересадки' },
        4: { eng: 'four', ru: '4 пересадки' },
        5: { eng: 'five', ru: '5 пересадок' },
        6: { eng: 'six', ru: '6 пересадок'}
    }
    return transfersAmountsToStringDict[transferNumber]
}