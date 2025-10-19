import React, { useState } from "react";

export default function InstructorPanel() {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: 0,
    lessons: [],
  });

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add lesson (video or attachment)
  const addLesson = (type, value) => {
    setForm({
      ...form,
      lessons: [...form.lessons, { type, value }],
    });
  };

  // Save course (draft or publish)
  const saveCourse = (publish = false) => {
    const newCourse = {
      ...form,
      id: editingCourse ? editingCourse.id : Date.now(),
      published: publish,
    };

    if (editingCourse) {
      setCourses(
        courses.map((c) => (c.id === editingCourse.id ? newCourse : c))
      );
    } else {
      setCourses([...courses, newCourse]);
    }

    setEditingCourse(null);
    setForm({ title: "", description: "", price: 0, lessons: [] });
  };

  // Edit existing course
  const editCourse = (course) => {
    setEditingCourse(course);
    setForm({
      title: course.title,
      description: course.description,
      price: course.price,
      lessons: course.lessons,
    });
  };

  return (
    <div className="min-h-screen p-8 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Instructor Panel</h1>

      {/* Dashboard Stats */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-800 rounded-lg text-center border border-cyan-500">
          <p className="text-3xl font-bold">{courses.length}</p>
          <p>Total Courses</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-lg text-center border border-cyan-500">
          <p className="text-3xl font-bold">
            {courses.reduce((sum, c) => sum + c.lessons.length, 0)}
          </p>
          <p>Total Lessons</p>
        </div>
        <div className="p-4 bg-slate-800 rounded-lg text-center border border-cyan-500">
          <p className="text-3xl font-bold">
            {courses.filter((c) => c.published).length}
          </p>
          <p>Published Courses</p>
        </div>
      </div>

      {/* Courses List */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
        {courses.length === 0 && <p>No courses created yet.</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`p-4 rounded-lg border ${
                course.published ? "border-green-500" : "border-cyan-500"
              } bg-slate-800`}
            >
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="mb-2">Price: ${course.price}</p>
              <p className="mb-2">
                Status: {course.published ? "Published" : "Draft"}
              </p>
              <button
                onClick={() => editCourse(course)}
                className="mr-2 px-3 py-1 bg-cyan-500 text-slate-900 rounded hover:bg-cyan-400 transition"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Course Form */}
      <div className="mb-12 p-6 bg-slate-800 rounded-lg border border-cyan-500">
        <h2 className="text-2xl font-semibold mb-4">
          {editingCourse ? "Edit Course" : "Create Course"}
        </h2>
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={form.title}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-slate-700 text-white border border-cyan-400"
        />
        <textarea
          name="description"
          placeholder="Course Description"
          value={form.description}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-slate-700 text-white border border-cyan-400"
        />
        <input
          type="number"
          name="price"
          placeholder="Price (USD)"
          value={form.price}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-slate-700 text-white border border-cyan-400"
        />

        {/* Lessons Section */}
        <div className="mb-3">
          <h3 className="font-semibold mb-2">Lessons</h3>
          {form.lessons.map((lesson, i) => (
            <div key={i} className="mb-2">
              <p className="text-sm font-semibold">{lesson.type.toUpperCase()}</p>
              {lesson.type === "video" ? (
                <video
                  src={lesson.value}
                  controls
                  className="w-full max-w-md rounded bg-black"
                />
              ) : (
                <a
                  href={lesson.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline"
                >
                  Open Attachment
                </a>
              )}
            </div>
          ))}

          {/* Add Lesson Inputs */}
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Video URL"
              className="flex-1 p-2 rounded bg-slate-700 text-white border border-cyan-400"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addLesson("video", e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <input
              type="text"
              placeholder="Attachment URL"
              className="flex-1 p-2 rounded bg-slate-700 text-white border border-cyan-400"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addLesson("attachment", e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <input
              type="file"
              accept="video/*,application/pdf"
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;
                const fileURL = URL.createObjectURL(file);
                const type = file.type.includes("video") ? "video" : "attachment";
                addLesson(type, fileURL);
              }}
              className="p-2 rounded bg-slate-700 text-white border border-cyan-400"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => saveCourse(false)}
            className="px-4 py-2 bg-slate-600 rounded hover:bg-slate-500 transition"
          >
            Save Draft
          </button>
          <button
            onClick={() => saveCourse(true)}
            className="px-4 py-2 bg-cyan-500 rounded hover:bg-cyan-400 text-slate-900 transition"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
