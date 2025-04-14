import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import AdmissionForm from './AdmissionForm';


const AvenuesSchooling = () => {
  return (
    <div className="min-h-screen w-full relative overflow-y-auto flex justify-center">
      <div className="absolute inset-0 bg-white-100 z-0"></div>
      <div className="absolute inset-0 bg-white-100 z-0"></div>
      <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url("/Vector3.svg")',
            backgroundSize: '900px',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat'
          }}
        />
      <div className="max-w-full w-full relative z-10">
        <Navbar />
        <section id="avenuesSchooling" className="py-24 mt-16 overflow-hidden">
          <div className="container mx-auto px-4">
      
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e32020] via-[#00833e] to-[#6cb33f] bg-clip-text text-transparent mb-6">
            CISCE Curriculum
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Indian Heart and Global Mind
          </h3>
        </motion.div>
        </div>

        {/* Introduction Section */}
        <div className="p-8 mb-12">
        <div 
            className="absolute inset-0 z-0 opacity-10"/>

        <div className="bg-white rounded-xl  p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              
              <p className="text-gray-700 leading-relaxed">
                The ICSE examination is administered by the CISCE (Council for the Indian School Certificate Examination) Board and originated from the Cambridge IGCSE, which was established during British rule. It was later adopted by the Anglo Indian Board and rebranded as the Council for the Indian School Certificate Examinations. While the foundation is rooted in the early structure of the Senior Cambridge Board, it has evolved over time to incorporate influences from closer home via the NCERT (National Council of Educational Research and Training).
                Rigor at Avenues is much more expansive, as we provide our students with opportunities to explore real-world concepts and issues, challenge assumptions, think critically, and acquire skills that they will need to apply throughout their educational and future professional journeys.

We ignite young minds with an innovative approach to learning that manifests the potential in every child.
              </p>
              
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="/Pics/gettyimages-1343473005-612x612.jpg"
                alt="ICSE Education"
                className="rounded-lg shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        </div>
        

       

        {/* Key Aspects Grid */}
        <div className="relative">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: 'url("/Vector3.svg")',
              backgroundSize: '900px',
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat'
            }}
          />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative z-10">
          {/* Global Foundation Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Pics/gettyimages-1148219796-612x612.jpg"
                alt="Global Foundation"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-[#00833e] mb-4">Global Foundation</h4>
              <p className="text-gray-700 leading-relaxed">
                The ICSE examination is administered by the CISCE (Council for the Indian School Certificate Examination) Board and originated from the Cambridge IGCSE, which was established during British rule. It was later adopted by the Anglo Indian Board and rebranded as the Council for the Indian School Certificate Examinations. While the foundation is rooted in the early structure of the Senior Cambridge Board, it has evolved over time to incorporate influences from closer home via the NCERT (National Council of Educational Research and Training).
              </p>
            </div>
          </div>

          {/* Salient Features Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Pics/gettyimages-1215569684-612x612.jpg"
                alt="Salient Features"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-[#e32020] mb-4">Salient Features</h4>
              <ul className="list-none space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#e32020] rounded-full mr-3"></span>
                  Theme-based approach across curricular areas
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#e32020] rounded-full mr-3"></span>
                  Child-centredness and active participation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#e32020] rounded-full mr-3"></span>
                  Wide array of learning experiences
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#e32020] rounded-full mr-3"></span>
                  Sequential arrangement (Spiralling)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-[#e32020] rounded-full mr-3"></span>
                  Integration of values and life skills
                </li>
              </ul>
            </div>
          </div>

          {/* Strong Foundation Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Pics/group-of-happy-indian-children.jpg"
                alt="Strong Foundation"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-[#00833e] mb-4">Strong Basics and Foundation</h4>
              <p className="text-gray-700 leading-relaxed">
                A deliberate attempt to look at quality content over quantity means that students are encouraged to diversify their interests and develop a curious, questioning and analytical approach to learning. The methodology has evolved over the years to focus on an all-round, experiential and active system, rather than a one-way transfer of information as is typically expected. This has elevated the standard and the quality of education and gives students a strong foundation for whatever career option they may choose.
              </p>
            </div>
          </div>

          {/* Future Potential Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/Pics/gettyimages-2139297011-612x612.jpg"
                alt="Future Potential"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-[#e32020] mb-4">Immense Future Potential</h4>
              <p className="text-gray-700 leading-relaxed">
                A combination of a syllabus with global content, teaching methodologies that glean from systems across the world, and a focus on satisfying curious, analytical minds has helped students who want to pursue higher studies abroad, in humanities, science and technology or management studies. This ensures a good potential for a flourishing corporate career. Moreover a good base in English language is cultivated and this gives ICSE students a definite edge over other Indian students in language exams like TOEFL and IELTS.
              </p>
            </div>
          </div>
        </div>

        {/* Staff Section */}
        <div className="mb-8 p-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#e32020] via-[#00833e] to-[#6cb33f] bg-clip-text text-transparent mb-12">
            Meet Our Dedicated Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Staff Member 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-10px]">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#00833e] shadow-md">
                <img
                  src="/Pics/staff-1.jpg"
                  alt="Dr. Aisha Sharma"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#00833e] mb-2">Dr. Aisha Sharma</h3>
              <p className="text-gray-600 mb-4">Principal</p>
              <p className="text-gray-700 italic">
                "Education is not preparation for life; education is life itself. We strive to create lifelong learners who contribute meaningfully to society."
              </p>
            </div>

            {/* Staff Member 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-10px]">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#e32020] shadow-md">
                <img
                  src="/Pics/staff-2.jpg"
                  alt="Prof. Rajiv Mehta"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#e32020] mb-2">Prof. Rajiv Mehta</h3>
              <p className="text-gray-600 mb-4">Academic Dean</p>
              <p className="text-gray-700 italic">
                "Our curriculum bridges traditional wisdom with global perspectives, preparing students for a world without borders."
              </p>
            </div>

            {/* Staff Member 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-10px]">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#00833e] shadow-md">
                <img
                  src="/Pics/staff-3.jpg"
                  alt="Ms. Priya Desai"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#00833e] mb-2">Ms. Priya Desai</h3>
              <p className="text-gray-600 mb-4">Head of Sciences</p>
              <p className="text-gray-700 italic">
                "Curiosity is the engine of achievement. We nurture young minds that question, explore, and innovate."
              </p>
            </div>

            {/* Staff Member 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-10px]">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#e32020] shadow-md">
                <img
                  src="/Pics/staff-4.jpg"
                  alt="Mr. Thomas Jacob"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#e32020] mb-2">Mr. Thomas Jacob</h3>
              <p className="text-gray-600 mb-4">Humanities Coordinator</p>
              <p className="text-gray-700 italic">
                "Understanding humanity's story equips students to write their own chapters with wisdom and compassion."
              </p>
            </div>
          </div>
        </div>

        {/* Admission Form Section */}
     
      </div>
        </section>
        <Footer />
      </div>
    </div>
    
  );
};

export default AvenuesSchooling;