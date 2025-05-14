import { useQuery } from "@tanstack/react-query";
import { getItems } from "../../services/apiBudget";

export default function () {
  const { data } = useQuery({ queryKey: ["budgetItems"], queryFn: getItems });
  return data;
}
