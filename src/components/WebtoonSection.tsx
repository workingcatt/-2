import { motion } from "motion/react";

export function WebtoonSection() {
  return (
    <section id="webtoon" className="py-32 bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80 z-0"></div>
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 font-serif">웹툰</h2>
          <div className="w-16 h-[3px] bg-orange-300 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-sm tracking-wide font-sans font-medium">소녀들의 이야기가 시작됩니다.</p>
        </motion.div>
        
        <div className="space-y-0 md:space-y-4">
          {[1, 2, 3, 4, 5, 6].map((panel) => (
            <motion.div 
              key={panel}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="w-full flex items-center justify-center relative overflow-hidden"
            >
              <img 
                src={`https://working-cat.org/WEBTOON/%EA%B7%B8%EB%A0%87%EB%8B%A4%20%ED%95%B4%EB%8F%84%20%EB%A7%88%EB%B2%95%EC%86%8C%EB%85%80%EB%8B%A4/${panel}.png`}
                alt={`Webtoon scene ${panel}`}
                className="w-full h-auto object-cover rounded-xl"
              />
            </motion.div>
          ))}
          <div className="text-center pt-8 md:pt-16 text-gray-500 font-serif font-bold text-lg">
            ✧ 계속 ✧
          </div>
        </div>
      </div>
    </section>
  );
}
