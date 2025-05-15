import { createClient } from "@supabase/supabase-js";
import type { Database } from "./supabase.types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseApiKey = import.meta.env.VITE_SUPABASEKEY;

const supabase = createClient<Database>(supabaseUrl, supabaseApiKey);

export default supabase;
