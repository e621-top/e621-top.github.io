type Category = 'artist' | 'character';

interface Tag {
  id: number
  name: string
  post_count: number
  created_at: string
  position: number
  post_delta?: number
  local?: number
}

interface TagCount {
  name: string
  post_count: number
}

interface Data {
  updated_at: Date
  tags: Tag[]
}

interface FavoriteTags {
  artist: TagCount[]
  character: TagCount[]
}
