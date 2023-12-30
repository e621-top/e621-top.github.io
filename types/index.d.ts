export type Category = "artist" | "character"

export interface Tag {
  id: number
  name: string
  post_count: number
  created_at: string
  position: number
  post_delta?: number
}

export interface Data {
  updated_at: Date
  tags: Tag[]
}
