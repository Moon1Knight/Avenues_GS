import { motion } from 'framer-motion';
import { useState, useEffect, lazy, Suspense } from 'react';
import { ModalProvider, useModal } from './contexts/ModalContext';
import Modal from './components/Modal';
import LoadingAnimation from './components/LoadingAnimation';

const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const EventsSection = lazy(() => import('./components/EventsSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const Footer = lazy(() => import('./components/Footer'));
const AdmissionForm = lazy(() => import('./components/AdmissionForm'));

const AdmissionButton = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="container mx-auto px-4 text-center">
        <motion.button
          onClick={openModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#4195d1] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3784c0] transition-all duration-300"
        >
          Apply for Admission
        </motion.button>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Suspense fallback={<LoadingAnimation />}>
          <AdmissionForm />
        </Suspense>
      </Modal>
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ModalProvider>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Suspense fallback={<LoadingAnimation />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen w-full bg-white relative overflow-y-auto scrollbar-hide flex justify-center backdrop-blur-[1px]"
          >
            <div className="absolute inset-0 z-0 backdrop-blur-[5px]"></div>
            <div className="max-w-full w-full relative z-10">
              <Navbar />
              <main>
                <HeroSection />
                <EventsSection />
                <AboutSection />
                <TestimonialsSection />
                <div className="py-16 bg-gray-50">
                  <AdmissionButton />
                </div>
              </main>
              <Footer />
            </div>
          </motion.div>
        </Suspense>
      )}
    </ModalProvider>
  );
}

export default App;
