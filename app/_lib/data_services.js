import { supabase } from "./supabase";

export async function getProjects() {
  let { data: projects, error } = await supabase.from("projects").select("*");
  if (error) {
    console.log("Error fetching projects:", error);
  }
  return projects;
}

export async function getWorkExperiences() {
  let { data: workExperiences, error } = await supabase
    .from("workExperiences")
    .select("*")
    .order("created_at", { ascending: true });
  if (error) {
    console.log("Error fetching work experiences:", error);
  }
  return workExperiences;
}
