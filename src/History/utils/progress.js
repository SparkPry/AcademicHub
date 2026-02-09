const STORAGE_KEY = "course-progress";
const LAST_LESSON_KEY = "last-lesson";

export const getProgress = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
};

export const markLessonComplete = (courseSlug, lessonSlug) => {
  const progress = getProgress();

  if (!progress[courseSlug]) {
    progress[courseSlug] = {};
  }

  progress[courseSlug][lessonSlug] = true;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const saveLastLesson = (courseSlug, lessonSlug) => {
  const data = JSON.parse(localStorage.getItem(LAST_LESSON_KEY)) || {};
  data[courseSlug] = lessonSlug;
  localStorage.setItem(LAST_LESSON_KEY, JSON.stringify(data));
};

export const getLastLesson = (courseSlug) => {
  const data = JSON.parse(localStorage.getItem(LAST_LESSON_KEY)) || {};
  return data[courseSlug] || null;
};
export const isLessonCompleted = (courseSlug, lessonSlug) => {
  const progress = getProgress();
  return progress[courseSlug] && progress[courseSlug][lessonSlug];
};

