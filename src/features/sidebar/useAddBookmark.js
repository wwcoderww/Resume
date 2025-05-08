import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookmark } from "../../services/apiBookmarks";

export function useAddBookmark() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
    onError: () => {
      console.log(`Error`);
      alert(`Error Adding BookMark!`);
    },
  });
  return mutate;
}
