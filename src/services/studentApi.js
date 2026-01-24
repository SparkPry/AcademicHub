import api from "./api";

export const getProfile = () =>
  api.get("/auth/profile");

export const getMyEnrollments = () =>
  api.get("/enrollments/my");

export const completeLesson = (lessonId) =>
  api.post(`/lessons/${lessonId}/complete`);
