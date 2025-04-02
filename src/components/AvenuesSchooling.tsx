import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';


const AvenuesSchooling = () => {
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
    <section id="avenuesSchooling" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
             <Navbar />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e32020] via-[#00833e] to-[#6cb33f] bg-clip-text text-transparent mb-6">
            CISCE Curriculum
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Indian Heart and Global Mind
          </h3>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                The ICSE examination is administered by the CISCE (Council for the Indian School Certificate Examination) Board and originated from the Cambridge IGCSE, which was established during British rule. It was later adopted by the Anglo Indian Board and rebranded as the Council for the Indian School Certificate Examinations. While the foundation is rooted in the early structure of the Senior Cambridge Board, it has evolved over time to incorporate influences from closer home via the NCERT (National Council of Educational Research and Training).
                Rigor at Avenues is much more expansive, as we provide our students with opportunities to explore real-world concepts and issues, challenge assumptions, think critically, and acquire skills that they will need to apply throughout their educational and future professional journeys.

We ignite young minds with an innovative approach to learning that manifests the potential in every child.
              </p>
              
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <motion.img
                src="/Pics/gettyimages-1343473005-612x612.jpg"
                alt="ICSE Education"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </motion.div>

        {/* Features Grid
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800 mb-8 text-center"
          >
            Salient Features of the Curriculum
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Theme-based approach across all curricular areas",
              "Child-centredness and active participation",
              "Wide array of learning experiences",
              "Sequential arrangement (Spiralling)",
              "Integrated approach",
              "Scope for contextualization",
              "Social Constructivist approach",
              "Integration of values and life skills",
              "Practical engagement and assessment"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-[#e32020] to-[#6cb33f] rounded-full mr-3"></span>
                  <p className="text-gray-700">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Key Aspects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Global Foundation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src="/Pics/gettyimages-1148219796-612x612.jpg"
                alt="Global Foundation"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-[#00833e] mb-4">Global Foundation</h4>
              <p className="text-gray-700 leading-relaxed">
                The ICSE examination is administered by the CISCE (Council for the Indian School Certificate Examination) Board and originated from the Cambridge IGCSE, which was established during British rule. It was later adopted by the Anglo Indian Board and rebranded as the Council for the Indian School Certificate Examinations. While the foundation is rooted in the early structure of the Senior Cambridge Board, it has evolved over time to incorporate influences from closer home via the NCERT (National Council of Educational Research and Training).
              </p>
            </div>
          </motion.div>

          {/* Salient Features Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src="/Pics/gettyimages-1215569684-612x612.jpg"
                alt="Salient Features"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
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
          </motion.div>

          {/* Strong Foundation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src="/Pics/group-of-happy-indian-children.jpg"
                alt="Strong Foundation"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-[#00833e] mb-4">Strong Basics and Foundation</h4>
              <p className="text-gray-700 leading-relaxed">
                A deliberate attempt to look at quality content over quantity means that students are encouraged to diversify their interests and develop a curious, questioning and analytical approach to learning. The methodology has evolved over the years to focus on an all-round, experiential and active system, rather than a one-way transfer of information as is typically expected. This has elevated the standard and the quality of education and gives students a strong foundation for whatever career option they may choose.
              </p>
            </div>
          </motion.div>

          {/* Future Potential Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src="/Pics/gettyimages-2139297011-612x612.jpg"
                alt="Future Potential"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-[#e32020] mb-4">Immense Future Potential</h4>
              <p className="text-gray-700 leading-relaxed">
                A combination of a syllabus with global content, teaching methodologies that glean from systems across the world, and a focus on satisfying curious, analytical minds has helped students who want to pursue higher studies abroad, in humanities, science and technology or management studies. This ensures a good potential for a flourishing corporate career. Moreover a good base in English language is cultivated and this gives ICSE students a definite edge over other Indian students in language exams like TOEFL and IELTS.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Aspects */}
        {/* <div className="space-y-12">
          {[
            {
              title: "Practical Engagement and Assessment",
              content: "The structure of the ICSE syllabus requires students to look beyond textbooks, venture into their labs and gather hands on experience to get a practical insight into concepts learnt in the classroom. This makes for an enriching experience which is not limited to learning by rote alone. In addition, a heavy weightage is given to project work, research, group assignments and internal assessment, giving students opportunity to prove their mettle besides faring well in examinations."
            },
            {
              title: "Strong Basics and Foundation",
              content: "A deliberate attempt to look at quality content over quantity means that students are encouraged to diversify their interests and develop a curious, questioning and analytical approach to learning. The methodology has evolved over the years to focus on an all-round, experiential and active system, rather than a one-way transfer of information as is typically expected. This has elevated the standard and the quality of education and gives students a strong foundation for whatever career option they may choose."
            },
            {
              title: "Immense Future Potential",
              content: "A combination of a syllabus with global content, teaching methodologies that glean from systems across the world, and a focus on satisfying curious, analytical minds has helped students who want to pursue higher studies abroad, in humanities, science and technology or management studies. This ensures a good potential for a flourishing corporate career. Moreover a good base in English language is cultivated and this gives ICSE students a definite edge over other Indian students in language exams like TOEFL and IELTS."
            }
          ].map((aspect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-gray-800 mb-4 flex items-center"
                >
                  <span className="w-3 h-3 bg-gradient-to-r from-[#e32020] to-[#6cb33f] rounded-full mr-3"></span>
                  {aspect.title}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-700 leading-relaxed"
                >
                  {aspect.content}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
    <Footer />
    </div>
    </div>
    
  );
};

export default AvenuesSchooling;