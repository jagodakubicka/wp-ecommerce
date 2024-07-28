export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${wpUri}/wp-json/wp/v2/${endpoint}`);
  };

  // get all posts
  const getPosts = async <T>(
    categories?: number,
    page: number = 1,
    perPage: number = 9
  ) => {
    let query = `posts?_embed&per_page=${perPage}&page=${page}`;
    if (categories) {
      query += `&categories=${categories}`;
    }
    return get<T>(query);
  };

  // get a single post

  const getPost = async <T>(slug: string) =>
    get<T>(`posts?slug=${slug}&_embed`);

  //get all categories

  const getCategories = async <T>() => get<T>('categories');

  //get single category

  const getCategory = async <T>(slug: string) =>
    get<T>(`categories?slug=${slug}`);

  return { get, getPosts, getPost, getCategories, getCategory };
};
