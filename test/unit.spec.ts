import { apiKeyToCamelCase, standardise } from '../src';

describe('+ apiKeyToCamelCase', () => {
  const testMatrix = [
    ['Id', 'Id'],
    ['Test_Salesforce__c', 'testSalesforce'],
    ['scope__Test_Salesforce__c', 'testSalesforce'],
    ['testSalesforce__r', 'testSalesforce']
  ];

  test.each(testMatrix)(`%s should be converted to %s`, (input, output) => {
    const result = apiKeyToCamelCase(input);
    expect(result).toBe(output);
  });
});

describe('+ standardise', () => {
  test('should map Salesforce api keys to camelCase', () => {
    const input = {
      Id: 'test',
      test__salesforce__c: 'An object reference',
      abc__r: 0,
      abc__test__r: false
    };

    const result = standardise(input);

    expect(result).toStrictEqual({
      Id: 'test',
      abc: 0,
      test: false,
      salesforce: 'An object reference'
    });
  });

  test('should throw an error if two of the keys map to the same camelCase', () => {
    const input = {
      Id: 'test',
      abc__r: 0,
      test__abc__r: false
    };

    expect(() => standardise(input)).toThrowError('');
  });
});
