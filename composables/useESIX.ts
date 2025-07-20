const endpoint_api = 'https://e621.net';

const blacklist = new Set([
  'anon',
  'anonymous_artist',
  'conditional_dnp',
  'fan_character',
  'sound_warning',
  'third-party_edit',
  'unknown_artist',
  'unknown_character',
  'webcomic_character',
]);

async function get<T>(url: string | URL | Request) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  return await response.json() as T;
}

async function getPosts(username: string, page: number) {
  const url = new URL(`${endpoint_api}/posts.json`);
  const params = url.searchParams;
  params.append('tags', `fav:${username}`);
  params.append('page', `${page}`);
  params.append('limit', '320');
  return get<PostsJSON>(url);
}

function countTags(tags: string[], tagsCount: Record<string, number>) {
  return tags.reduce((count, tag) => {
    if (blacklist.has(tag)) return count;

    count[tag] = (count[tag] ?? 0) + 1;
    return count;
  }, tagsCount);
}

function toArray(tags: Record<string, number>): TagCount[] {
  return Object.keys(tags)
    .map<TagCount>(name => ({ name, post_count: tags[name] }))
    .toSorted((a, b) => b.post_count - a.post_count);
}

async function getFavorites(username: string, limit: number, report: (page: number) => void): Promise<FavoriteTags> {
  const artist: Record<string, number> = {};
  const character: Record<string, number> = {};

  for (let page = 1; ; page++) {
    console.info(`Fetching page: ${page}`);
    report(page);
    const { posts } = await getPosts(username, page);
    countTags(posts.flatMap(P => P.tags.artist), artist);
    countTags(posts.flatMap(P => P.tags.character), character);
    if (posts.length != 320 || page == limit) break;
  }

  return {
    artist: toArray(artist),
    character: toArray(character),
  };
}

export default function () {
  return {
    getFavorites,
  };
}

type PostsJSON = {
  posts: Post[]
};
