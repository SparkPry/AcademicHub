import { useState } from 'react';
import { BookOpen, Video, Users, Award, TrendingUp, Zap, Brain, Globe, ChevronRight, Play, Star } from 'lucide-react';

export default function FutureLearning() {
  const [activeTab, setActiveTab] = useState('courses');
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const courses = [
    { id: 1, title: 'AI & Machine Learning', instructor: 'Dr. Sarah Chen', students: '2.4k', rating: 4.9, progress: 0, image: '🤖', color: 'from-purple-500 to-pink-500' },
    { id: 2, title: 'Quantum Computing', instructor: 'Prof. James Wilson', students: '1.8k', rating: 4.8, progress: 0, image: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { id: 3, title: 'Blockchain Development', instructor: 'Alex Martinez', students: '3.2k', rating: 4.7, progress: 0, image: '🔗', color: 'from-green-500 to-emerald-500' },
    { id: 4, title: 'Neural Interface Design', instructor: 'Dr. Emily Park', students: '1.5k', rating: 4.9, progress: 0, image: '🧠', color: 'from-orange-500 to-red-500' },
  ];

  const stats = [
    { icon: BookOpen, label: 'Courses', value: '500+', color: 'text-purple-400' },
    { icon: Users, label: 'Students', value: '50K+', color: 'text-blue-400' },
    { icon: Award, label: 'Certificates', value: '30K+', color: 'text-green-400' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%', color: 'text-orange-400' },
  ];

  const features = [
    { icon: Brain, title: 'AI-Powered Learning', desc: 'Personalized curriculum adapted to your pace' },
    { icon: Video, title: 'Immersive Content', desc: 'VR/AR enabled interactive experiences' },
    { icon: Globe, title: 'Global Community', desc: 'Connect with learners worldwide' },
    { icon: Zap, title: 'Instant Feedback', desc: 'Real-time assessment and guidance' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FutureLearn</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Explore', 'My Learning', 'Community', 'About'].map(item => (
              <button key={item} className="hover:text-purple-400 transition-colors">{item}</button>
            ))}
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Learn the{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Future
            </span>
            <br />Today
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience next-generation education with AI-powered personalization, immersive content, and global collaboration
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform flex items-center space-x-2">
              <span>Start Learning</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/5 transition-colors flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Courses */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">Featured Courses</h2>
          <button className="text-purple-400 hover:text-purple-300 flex items-center space-x-1">
            <span>View All</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all cursor-pointer group"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div className={`h-40 bg-gradient-to-br ${course.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                {course.image}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${hoveredCourse === course.id ? 'opacity-100' : 'opacity-0'}`}>
                  <Play className="w-12 h-12" />
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-lg">{course.title}</h3>
                <p className="text-sm text-gray-400">{course.instructor}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose FutureLearn</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 mb-20">
        <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners already shaping tomorrow with cutting-edge skills
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}


//json-server --watch db.json --port 5000