// Copied from https://stackoverflow.com/a/65642944/16181962
export type SnakeToCamelCase<T extends string> = T extends `${infer P}_${infer Q}`
  ? `${Lowercase<P>}${Capitalize<SnakeToCamelCase<Q>>}`
  : T;

export type ApiKeySuffix =
  | 'ChangeEvent'
  | 'DataCategorySelection'
  | 'Feed'
  | 'History'
  | 'Share'
  | 'Tag'
  | 'ViewStat'
  | 'VoteStat'
  | 'b'
  | 'c'
  | 'chn'
  | 'e'
  | 'hd'
  | 'hqr'
  | 'hst'
  | 'ka'
  | 'kav'
  | 'latitude__s'
  | 'longitude__s'
  | 'mdt'
  | 'p'
  | 'pc'
  | 'pr'
  | 'r'
  | 'x'
  | 'xo';

export type ApiKey<T = unknown> = `${T extends string ? `${T}__` : ''}${string}__${ApiKeySuffix}`;

export type FieldName<T = string> = T extends `${string}__${infer Q}__${ApiKeySuffix}`
  ? SnakeToCamelCase<Q>
  : T extends `${infer Q}__${ApiKeySuffix}`
  ? SnakeToCamelCase<Q>
  : T;
