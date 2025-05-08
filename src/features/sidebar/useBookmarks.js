import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "../../services/apiBookmarks";
// FOR REACT QUERY. API IS FOR SUPPPPPABASE
export function useBookmarks() {
  const { isLoading, data, error } = useQuery({
    queryKey: [`bookmarks`],
    queryFn: getBookmarks,
  });
  return { isLoading, data, error };
}
