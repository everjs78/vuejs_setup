interface ApiListResponseMetadata {
  page_cnt: number;
  total_cnt: number;
  links: Record<string, string>;
}

export interface ApiListResponse<ItemType = any> {
  metadata: ApiListResponseMetadata;
  entries: ItemType[];
}

type DatetimeString = string;

export type BasicType = number | string | boolean | File | null;
export interface ApiData {
  [prop: string]: BasicType | BasicType[] | ApiData[] | ApiData;
}
export interface ApiOptionalData {
  [prop: string]: BasicType | BasicType[] | ApiOptionalData[] | ApiOptionalData | undefined;
}
export type ApiOptionalQuery = ApiOptionalData;
