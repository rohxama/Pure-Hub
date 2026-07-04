import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <>
      <section className="bg-black text-white px-[clamp(24px,4vw,60px)] py-[clamp(40px,5vw,70px)]">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-16 flex-wrap">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[640px]"
          >
            <p className="text-lg mb-6 opacity-95">About us</p>
            <h2 className="font-serif text-[clamp(34px,4.5vw,56px)] font-normal leading-[1.15]">
              The Power Of Nature<br />
              For <span className="italic font-medium">Glowing Skin</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[320px] sm:pt-12"
          >
            <p className="text-[14.5px] font-light leading-[1.7] opacity-85 mb-7">
              Welcome to Miracle, where beauty meets innovation. At Miracle, we believe
              that skincare is not just about looking good—it's about feeling confident
              in your own skin. Our mission is to provide high-quality, effective
              skincare products that cater to the unique needs of every individual.
            </p>
            <button className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors duration-200">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <div className="w-full leading-none bg-black">
        <img
          src=""
          alt="Woman applying skincare product"
          className="w-full h-auto block object-cover bg-neutral-800"
        />
      </div>
    </>
  )
}
