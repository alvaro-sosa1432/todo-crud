import type { ITodo } from "../components/Todo.types";
import supabase from "./supabase.service";

export const getTodos = async (): Promise<ITodo[]> => {
  const { data, error } = await supabase.from("Todo").select();
  if (error) throw error;
  return data;
};
