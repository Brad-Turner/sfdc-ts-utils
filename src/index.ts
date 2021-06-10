import type { FieldName } from './types';
import { camelize } from './util';

/**
 * Converts a Salesforce API Key into an equivalent camelCase string.
 */
export function apiKeyToCamelCase<T extends string>(str: T): FieldName<T> {
  if (!str.includes('__')) return str as FieldName<T>;

  const chunks = str.split('__').reverse();
  const subject = chunks.length > 2 ? chunks[chunks.length - 2] : chunks[chunks.length - 1];

  return camelize(subject) as FieldName<T>;
}

/**
 * Maps the API keys from Salesforce object to camelCase string.
 */
export function standardise<T extends Record<string, unknown>>(record: T): { [K in keyof T as FieldName<K>]: T[K] } {
  const map = new Map();

  for (const [key, value] of Object.entries(record)) {
    const mappedKey = apiKeyToCamelCase(key);

    if (map.has(mappedKey)) {
      throw new Error('');
    }

    map.set(mappedKey, value);
  }

  return Object.fromEntries(map);
}
