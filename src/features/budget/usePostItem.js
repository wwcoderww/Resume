import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItem } from "../../services/apiBudget";

export default function () {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgetItems"] });
    },
    onError: (err) => {
      alert(`Problem adding to database`);
      console.log(err);
    },
  });
  return mutate;
}
