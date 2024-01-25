interface Post {
  id: number;
  created_at: string;
  updated_at: string;
  file: File;
  preview: Preview;
  sample: Sample;
  score: Score;
  tags: Tags;
  locked_tags: string[];
  change_seq: number;
  flags: Flags;
  rating: "s" | "q" | "e";
  fav_count: number;
  sources: string[];
  pools: number[];
  relationships: Relationships;
  approver_id: number;
  uploader_id: number;
  description: string;
  comment_count: number;
  is_favorited: boolean;
  has_notes: boolean;
  duration: null;
}

interface File {
  width: number;
  height: number;
  ext: string;
  size: number;
  md5: string;
  url: string;
}

interface Flags {
  pending: boolean;
  flagged: boolean;
  note_locked: boolean;
  status_locked: boolean;
  rating_locked: boolean;
  comment_disabled: boolean;
  deleted: boolean;
}

interface Preview {
  width: number;
  height: number;
  url: string;
}

interface Sample {
  has: boolean
  height: number
  width: number
  url: string
  alternates: {
    "720p"?: AltFile
    "480p"?: AltFile
    original?: AltFile
  }
}

interface AltFile {
  type: string;
  height: number;
  width: number;
  urls: Array<null | string>;
}

interface Relationships {
  parent_id: number | null;
  has_children: boolean;
  has_active_children: boolean;
  children: number[];
}

interface Score {
  up: number;
  down: number;
  total: number;
}

interface Tags {
  general: string[];
  species: string[];
  character: string[];
  copyright: string[];
  artist: string[];
  invalid: string[];
  lore: string[];
  meta: string[];
}
