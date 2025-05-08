import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookmark } from "../../services/apiBookmarks";

export default function useDeleteBookmark() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
    onError: (error) => {
      alert(`Problem Deleting Bookmark. Check console`);
      console.log(error);
    },
  });
  return mutate;
}
