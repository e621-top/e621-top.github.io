export const useFilter = () => useState<TagFilter>("filter", () => ({
  hideMLP: false,
  include: "",
  exclude: "",
  limit: 500
}));

interface TagFilter {
  hideMLP: boolean
  include: string
  exclude: string
  limit: number
}
