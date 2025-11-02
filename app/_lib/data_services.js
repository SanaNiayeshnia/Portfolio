import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export async function getProjects({ language = "", type = "", scale = "" }) {
  let query = supabase.from("projects").select("*");

  if (language) query = query.eq("language", language);
  if (type) query = query.eq("type", type);
  if (scale) query = query.eq("scale", scale);

  const { data: projects, error } = await query;

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

export async function getProject(id) {
  let { data: project, error } = await supabase
    .from("projects")
    .select("*, workExperiences(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(`Error fetching the project with the id of ${id}:`, error);
    notFound();
  }
  return project;
}
