import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Bookmark, ChevronDown } from "lucide-react";

export default function HTMLTutorial() {
  const [activeSection, setActiveSection] = useState("HTML Introduction");
  const [expandedMenus, setExpandedMenus] = useState({});
  const [bookmarked, setBookmarked] = useState(() => localStorage.getItem("bookmark") || "");

  // Save current section as bookmark
  const handleBookmark = () => {
    localStorage.setItem("bookmark", activeSection);
    setBookmarked(activeSection);
  };

  // Restore bookmark on page load
  useEffect(() => {
    const saved = localStorage.getItem("bookmark");
    if (saved) setBookmarked(saved);
  }, []);

  const menuItems = [
    { title: "HTML HOME", link: true },
    { title: "HTML Introduction", link: true },
    { title: "HTML Editors", link: true },
    { title: "HTML Basic", link: true },
    { title: "HTML Elements", link: true },
    { title: "HTML Attributes", link: true },
    { title: "HTML Colors", link: true, expandable: true, subtopics: ["HTML Color Names", "HTML RGB", "HTML HEX", "HTML HSL"] },
    { title: "HTML Links", link: true, expandable: true, subtopics: ["Links - Hyperlinks", "Target Attribute", "Bookmark Links"] },
    { title: "HTML Images", link: true, expandable: true, subtopics: ["Image Tag", "Image Size", "Image Links"] },
    { title: "HTML Tables", link: true, expandable: true, subtopics: ["Table Rows", "Table Headers", "Table Borders"] },
    { title: "HTML Layout", link: true, expandable: true, subtopics: ["Semantic Elements", "Non-Semantic Elements"] },
  ];

  const toggleMenu = (title) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Dynamic tutorial content
  const contents = {
    "HTML Introduction": (
      <>
        <h1 className="text-4xl font-bold mb-4">HTML Introduction</h1>
        <p className="text-lg text-gray-700 mb-6">
          HTML is the standard markup language for creating Web pages.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML tells the browser how to display content</li>
          <li>HTML elements are represented by tags</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Example of a Simple HTML Document:
        </h2>
        <div className="bg-gray-50 border border-gray-300 rounded overflow-hidden">
          <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
            <h3 className="text-sm font-semibold text-gray-800">Example</h3>
          </div>
          <div className="p-4">
            <pre className="text-sm overflow-x-auto">
              <code>
                &lt;!DOCTYPE html&gt;{"\n"}
                &lt;html&gt;{"\n"}
                &lt;head&gt;{"\n"}
                &lt;title&gt;Page Title&lt;/title&gt;{"\n"}
                &lt;/head&gt;{"\n"}
                &lt;body&gt;{"\n"}
                &lt;h1&gt;This is a Heading&lt;/h1&gt;{"\n"}
                &lt;p&gt;This is a paragraph.&lt;/p&gt;{"\n"}
                &lt;/body&gt;{"\n"}
                &lt;/html&gt;
              </code>
            </pre>
          </div>
        </div>
      </>
    ),

    "HTML Editors": (
      <>
        <h1 className="text-4xl font-bold mb-4">HTML Editors</h1>
        <p className="text-lg text-gray-700 mb-6">
          You can use any text editor to create an HTML file. However, modern
          editors make it easier.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Windows: Notepad or Visual Studio Code</li>
          <li>Mac: TextEdit (in plain text mode)</li>
          <li>Online: CodePen, JSFiddle, or Replit</li>
        </ul>
      </>
    ),

    "HTML Basic": (
      <>
        <h1 className="text-4xl font-bold mb-4">HTML Basic</h1>
        <p className="text-lg text-gray-700 mb-6">
          Every HTML document must start with a <code>&lt;!DOCTYPE&gt;</code>{" "}
          declaration.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>The HTML document begins with &lt;html&gt; and ends with &lt;/html&gt;</li>
          <li>The visible part of the page is inside the &lt;body&gt; tag</li>
        </ul>
      </>
    ),
  };

  // Navigation logic
  const currentIndex = menuItems.findIndex((item) => item.title === activeSection);

  const goNext = () => {
    if (currentIndex < menuItems.length - 1) {
      setActiveSection(menuItems[currentIndex + 1].title);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setActiveSection(menuItems[currentIndex - 1].title);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r border-gray-300 overflow-y-auto">
        <div className="p-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold text-gray-800">HTML Tutorial</h2>
        </div>
        <nav className="py-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className={`px-4 py-2 cursor-pointer flex items-center justify-between ${
                  activeSection === item.title
                    ? "bg-emerald-500 text-white"
                    : "text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setActiveSection(item.title)}
              >
                <span className="text-sm">{item.title}</span>
                {item.expandable && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      expandedMenus[item.title] ? "rotate-180" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu(item.title);
                    }}
                  />
                )}
              </div>

              {/* Subtopics */}
              {item.expandable && expandedMenus[item.title] && (
                <div className="pl-6 bg-gray-50">
                  {item.subtopics?.map((sub, i) => (
                    <div
                      key={i}
                      className="py-1 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                      onClick={() => setActiveSection(sub)}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {activeSection}
            </h1>
            <button
              onClick={handleBookmark}
              className={`${
                bookmarked === activeSection
                  ? "text-emerald-600"
                  : "text-gray-400 hover:text-emerald-600"
              }`}
            >
              <Bookmark size={24} />
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mb-8">
            <button
              onClick={goPrevious}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded font-medium transition-colors disabled:opacity-50"
              disabled={currentIndex <= 0}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <button
              onClick={goNext}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded font-medium transition-colors disabled:opacity-50"
              disabled={currentIndex >= menuItems.length - 1}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dynamic Content */}
          <div className="text-gray-800">
            {contents[activeSection] || (
              <p className="text-gray-600">Coming soon...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
