export const useFilter = () => useState<TagFilter>("filter", () => ({
  hideMLP: false,
  include: "",
  exclude: ""
}));

interface TagFilter {
  hideMLP: boolean
  include: string
  exclude: string
}
