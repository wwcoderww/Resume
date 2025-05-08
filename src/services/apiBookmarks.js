import supabase from "./supabase";
// FOR SUPABASE. USEX IS FOR REACT QUERRY
// Return All BooksMarks
export async function getBookmarks() {
  // Retruve Data || Error
  const { data, error } = await supabase.from("bookmarkLinks").select("*");
  // Error Handling
  if (error) {
    console.log(error);
    return alert(`Error Retriving Bookmarks`);
  }
  return data;
}
// Add New Bookmark
export async function addBookmark(obj) {
  const { data, error } = await supabase.from("bookmarkLinks").insert([obj]);
  if (error) {
    console.log(error);
    return alert(`Error Adding Bookmar`);
  }
  return data;
}
// Delete Bookmark
export async function deleteBookmark(id) {
  const { error } = await supabase.from("bookmarkLinks").delete().eq("id", id);
  if (error) {
    console.log(error);
    return alert(`Error Adding Bookmar`);
  }
}
