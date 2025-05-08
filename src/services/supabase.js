import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://citriujyidaoebulqimz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpdHJpdWp5aWRhb2VidWxxaW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NjgyMTgsImV4cCI6MjA2MjI0NDIxOH0.eUS9zahyMh4T1ZmKIumJACtj2opRLAGf3GxiHQ04cvw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
