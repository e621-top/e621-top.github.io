export function tagPostsDay(tag: Tag) {
  const ms = new Date().getTime() - new Date(tag.created_at).getTime();
  return Math.round(tag.post_count / (ms / 864e5));
}
