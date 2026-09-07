import { motion } from "motion/react";
import profileImage from "../../imports/WhatsApp_Image_2026-04-05_at_6.39.03_PM.jpeg";

export function Hero() {
  return (
    <section id="about" className="relative pt-20 pb-32 -mx-6 sm:-mx-10 lg:-mx-12 px-6 sm:px-10 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
        {/* Left Column - 50% Width, Strictly Left-Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Top Label */}
          <p className="font-serif font-bold italic text-[#4B5563] text-lg">Actively seeking roles - Based in Ireland</p>

          {/* Main Heading */}
          <h1 className="font-['Playfair_Display',serif] text-[96px] font-bold text-[#111111] leading-none">
            Avinash Santhosh Kumar
          </h1>

          {/* Paragraph */}
          <p className="font-['Inter',sans-serif] text-[18px] text-[#4B5563] leading-relaxed max-w-[500px]">
            Sales Operations Manager with 4 years of experience managing end-to-end account segmentation and parenting processes, processing 45+ tickets daily across commercial and business accounts in EMEA, APAC and Americas, maintaining operational reporting for a Fortune 500 manufacturing and technology client and a major leading Irish bank.
          </p>

          {/* Profession Box */}
          <div className="relative inline-block">
            <div className="border-2 border-[#E5E7EB] px-8 py-6 relative">
              {/* Yellow corner squares */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#F4C542]"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F4C542]"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#F4C542]"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#F4C542]"></div>

              <p className="font-['Inter',sans-serif] font-bold text-[40px] text-[#111111]">
                Sales Operations Manager
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - 50% Width, Image & Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-[400px] h-[400px]">
            {/* Large circular image container */}
            <div className="relative w-full h-full rounded-[500px] border border-[#E5E7EB] overflow-hidden bg-gray-100">
              <img
                src={profileImage}
                alt="Avinash Santhosh Kumar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right Floating Dialogue Box */}
            <div
              className="absolute top-8 -right-4 bg-white border border-[#E5E7EB] rounded-lg px-6 py-3"
              style={{
                boxShadow: "4px 4px 0px 0px #E5E7EB"
              }}
            >
              <p className="font-['Inter',sans-serif] text-[#111111] font-medium">Let's Connect</p>
            </div>

            {/* Bottom Left Floating Dialogue Box */}
            <div
              className="absolute bottom-12 -left-4 bg-white border border-[#E5E7EB] rounded-lg w-48 h-auto p-4"
              style={{
                boxShadow: "4px 4px 0px 0px #E5E7EB"
              }}
            >
              <p className="font-serif italic text-[14px] text-[#4B5563] leading-relaxed">
                "Sales Operations is the air that surrounds the business eco system"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
