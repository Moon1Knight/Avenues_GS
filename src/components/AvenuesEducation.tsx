import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AvenuesEducation = () => {
  return (
    <div className="min-h-screen w-full relative overflow-y-auto flex justify-center"
      style={{
        backgroundImage: 'url("Books.svg")',
        backgroundRepeat: 'repeat',
        backgroundSize: '400px',
        backgroundPosition: 'center',
      }}>
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 z-0"></div>
      <div className="max-w-full w-full relative z-10">
        <Navbar />
        <section id="avenuesEducation" className="py-24 mt-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              {/* <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </Link> */}
            </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e32020] via-[#00833e] to-[#6cb33f] bg-clip-text text-transparent mb-6">
            Preparing Students for Tomorrow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src="/Pics/gettyimages-1343473005-612x612.jpg"
              alt="Students Learning"
              className="w-3/4 mx-auto h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Empowering Future Leaders
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Avenues, we believe in empowering students to define success on their own terms. 
              Through nurturing their love for learning, expanding their sense of responsibility, 
              and honing their critical thinking abilities, we prepare them for a future that's yet to be imagined.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our holistic approach to education focuses on developing well-rounded individuals who are not only academically proficient 
              but also emotionally intelligent and socially responsible. We create learning environments that foster curiosity, 
              creativity, and critical thinking skills essential for navigating an increasingly complex world.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl lg:order-2"
          >
            <img
              src="/Pics/gettyimages-1215569684-612x612.jpg"
              alt="Global Education"
              className="w-3/4 mx-auto h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:order-1"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Child-Centered Education
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our educational approach combines the robust CISCE curriculum framework with innovative 
              teaching methods that ignite passion for learning. We focus on developing global citizens 
              who understand and respect diverse perspectives.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Avenues, we believe that education should be tailored to each child's unique abilities and interests. 
              Our teachers serve as facilitators who guide students through personalized learning journeys, 
              encouraging them to take ownership of their education and develop a lifelong love for learning. 
              This approach helps students build confidence, resilience, and the ability to adapt to an ever-changing world.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e32020] via-[#00833e] to-[#6cb33f] bg-clip-text text-transparent mb-6">
            Students Thrive at Avenues
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mb-20">
          {/* Traditional Schooling Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </span>
              Traditional Schooling
            </h3>
            <div className="space-y-4">
              {[
                "Teacher-centered passive lectures",
                "Heavy reliance on textbooks and workbooks",
                "Individual seating and work",
                "Paper-based assessments",
                "Focus on memorization and rote learning"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Avenues Schooling Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Avenues Schooling
            </h3>
            <div className="space-y-4">
              {[
                "Active listening and experiential learning",
                "Diverse learning resources and methods",
                "Collaborative group activities",
                "Varied assessment approaches",
                "Critical thinking and problem-solving focus",
                "Outcome-based learning (OBL)",
                "Individual personality development"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-3 bg-green-50 rounded-lg"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Approaches to Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e32020] via-[#00833e] to-[#6cb33f] bg-clip-text text-transparent mb-6">
            Approaches to Learning
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            The Approaches to learning are lifelong learning opportunities and create a platform for understanding the world around us; creating our own thoughts, ideas, and opinions; challenging the status quo; or extending the thinking of others.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-20">
          {/* Communication Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="h-48 mb-6 overflow-hidden rounded-lg">
              <img
                src="/Pics/gettyimages-1215569684-612x612.jpg"
                alt="Communication Skills"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Communication Skills</h3>
            <ul className="space-y-3 text-gray-600">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Reading, writing, and language proficiency
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Effective information gathering
              </motion.li>
            </ul>
          </motion.div>

          {/* Research Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="h-48 mb-6 overflow-hidden rounded-lg">
              <img
                src="/Pics/gettyimages-1343473005-612x612.jpg"
                alt="Research Skills"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Research Skills</h3>
            <ul className="space-y-3 text-gray-600">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Information literacy and interpretation
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Media engagement and utilization
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="h-48 mb-6 overflow-hidden rounded-lg">
              <img
                src="/Pics/group-of-happy-indian-children.jpg"
                alt="Social Skills"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Social Skills</h3>
            <ul className="space-y-3 text-gray-600">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Effective collaboration techniques
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Interpersonal relationship building
              </motion.li>
            </ul>
          </motion.div>

          {/* Thinking Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="h-48 mb-6 overflow-hidden rounded-lg">
              <img
                src="/Pics/gettyimages-2139297011-612x612.jpg"
                alt="Thinking Skills"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Thinking Skills</h3>
            <ul className="space-y-3 text-gray-600">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Critical and creative thinking
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Knowledge transfer across contexts
              </motion.li>
            </ul>
          </motion.div>

          {/* Self-Management Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all md:col-span-2 lg:col-span-1"
          >
            <div className="h-48 mb-6 overflow-hidden rounded-lg">
              <img
                src="/Pics/Yellow-day.jpeg"
                alt="Self-Management Skills"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Self-Management Skills</h3>
            <ul className="space-y-3 text-gray-600">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Time and task management
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Emotional regulation and reflection
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Academics Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Content Side */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent"
              >
                Academics are Just One Piece of the Puzzle
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 mb-6"
              >
                While academics hold significance, solely focusing on them is akin to watering just one leaf of a plant.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700">
                  "At Avenues, we recognise that the joy and challenge of learning must extend well beyond the classroom, so we advocate for a holistic approach that encompasses the whole child."
                </blockquote>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-600 mb-6"
              >
                This means providing opportunities to support our students' social, emotional, and physical needs alongside their academic pursuits.
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Your Child is prepared to face the world
              </motion.h3>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-3"
              >
                {[
                  "Happle (Life skills program)",
                  "Essential Skills Program",
                  "FELT (Social & Emotional Education)",
                  "Express-ability Club",
                  "Creative Minds Club",
                  "Technology and Innovation Club",
                  "Impact – Outreach program",
                  "Tango Sports & Fitness Program"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Image Side */}
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="h-full"
              >
                <img
                  src="/Pics/Yellow-day.jpeg"
                  alt="Happy students jumping"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default AvenuesEducation;