import { useQuery } from "@tanstack/react-query";
import { totalBudget } from "../../services/apiBudget";

export default function () {
  const { data } = useQuery({
    queryKey: ["totalBudget"],
    queryFn: totalBudget,
  });
  return data;
}
