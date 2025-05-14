import supabase from "./supabase";

export async function getItems() {
  const { data, error } = await supabase.from("budget").select("*");
  if (error) {
    alert(`Error retriving Data`);
    return console.log(error);
  }
  return data;
}

export async function addItem(obj) {
  const { error } = await supabase.from("budget").insert([obj]).select();
  if (error) {
    alert(`Error retriving Data`);
    return console.log(error);
  }
}

// export async function delItem(id) {}

export async function totalBudget() {
  const { data, error } = await supabase.from("budgetTotal").select("*");
  if (error) {
    alert(`Error retriving Data`);
    return console.log(error);
  }
  return data;
}
