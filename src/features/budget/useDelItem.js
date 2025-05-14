import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delItem } from "../../services/apiBudget";

export default function () {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: delItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgetItems"] });
    },
  });
  return mutate;
}
