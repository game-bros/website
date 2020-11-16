// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Document } from "@contentful/rich-text-types";
import { Asset, Entry } from "contentful";

export interface IBroFields {
  /** Name */
  name: string;

  /** alias */
  alias: string;

  /** role */
  role: "Developer" | "Artist" | "Tester";

  /** color */
  color: "red" | "blue" | "green" | "purple";

  /** avatar */
  avatar?: Asset | undefined;

  /** order */
  order?: number;
}

export interface IBro extends Entry<IBroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "bro";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IGameFields {
  /** slug */
  slug: string;

  /** title */
  title: string;

  /** short title */
  shortTitle: string;

  /** description */
  description: Document;

  /** cover image */
  coverImage: Asset;

  /** video url */
  videoUrl?: string | undefined;

  /** screenshots */
  screenshots?: Asset[] | undefined;

  /** download */
  download?: Asset | undefined;
}

export interface IGame extends Entry<IGameFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "game";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "bro" | "game";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
