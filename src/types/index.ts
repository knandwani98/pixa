export interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Links {
  self?: string;
  html?: string;
  photos?: string;
  likes?: string;
  portfolio?: string;
  following?: string;
  followers?: string;
  download?: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  twitter_username: string | null;
  portfolio_url: string | null;
  bio: string | null;
  location: string | null;
  links: Links;
  profile_image: ProfileImage;
  instagram_username: string | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos?: number;
  accepted_tos?: boolean;
  for_hire?: boolean;
  social?: {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string | null;
    paypal_email: string | null;
  };
}

export interface CoverPhoto {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: null;
  topic_submissions: {
    [key: string]: {
      status: string;
      approved_on: string;
    };
  };
  asset_type: string;
  premium: boolean;
  plus: boolean;
  user: User;
}

export interface Tags {
  type: string;
  title: string;
  source?: {
    ancestry: {
      type: {
        slug: string;
        pretty_slug: string;
      };
      category: {
        slug: string;
        pretty_slug: string;
      };
      subcategory: {
        slug: string;
        pretty_slug: string;
      };
    };
    title: string;
    subtitle: string;
    description: string;
    meta_title: string;
    meta_description: string;
    cover_photo: CoverPhoto;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
      small_s3: string;
    };
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: [];
    sponsorship: null;
    topic_submissions: {
      [key: string]: {
        status: string;
        approved_on: string;
      };
    };
    asset_type: string;
    premium: boolean;
    plus: boolean;
    user: User;
  };
}

export interface PhotoData {
  id: string;
  slug?: string;
  alternative_slugs?: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string | null;
  blur_hash: string | null;
  description: string | null;
  alt_description: string | null;
  breadcrumbs?: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3?: string;
  };
  links: Links;
  likes: number;
  liked_by_user?: boolean;
  current_user_collections?: [];
  sponsorship?: null;
  topic_submissions?: {};
  asset_type?: string;
  user: User;
  tags?: Tags[];
}


export type OrderBy = "editorial" | "relevant" | "latest";
