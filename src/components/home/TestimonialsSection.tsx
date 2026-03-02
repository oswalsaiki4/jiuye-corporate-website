"use client";

import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    quote: "九烨的数据让我们能够专注于算法研究，而不是数据采集。数据的质量和多样性超出预期，显著加速了我们的研究进程。",
    author: "张教授",
    role: "某顶尖高校AI实验室主任",
    institution: "清华大学",
  },
  {
    quote: "真实场景数据的多样性是我们产品能力提升的关键。九烨的数据帮助我们覆盖了此前难以获取的长尾场景。",
    author: "李总",
    role: "技术副总裁",
    institution: "某头部机器人企业",
  },
  {
    quote: "与九烨的合作非常愉快，他们的专业团队和标准化流程确保了数据交付的质量和时效性。",
    author: "王博士",
    role: "AI研究总监",
    institution: "某知名AI企业",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-zinc-950" id="testimonials">
      <div className="container-wide">
        <SectionHeader
          label="客户评价"
          title="他们选择了九烨"
          titleEn="Trusted by Industry Leaders"
          description="来自科研机构与企业客户的真实反馈"
          align="center"
        />

        {/* Testimonials Carousel */}
        <AnimatedSection delay={100}>
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <Quote className="w-5 h-5 text-blue-500" />
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-zinc-900/50 border border-zinc-800/50 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />

              <div className="relative z-10">
                <div className="min-h-[100px] sm:min-h-[120px] flex items-center justify-center mb-6 sm:mb-8 px-6 sm:px-8">
                  <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed text-center italic transition-opacity duration-500">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-white font-semibold mb-1 text-sm sm:text-base">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-xs text-blue-500 mt-1">
                    {testimonials[currentIndex].institution}
                  </p>
                </div>
              </div>

              {/* Navigation - positioned below content on mobile */}
              <div className="flex justify-center gap-4 mt-6 sm:mt-0 sm:absolute sm:left-4 sm:right-4 sm:top-1/2 sm:-translate-y-1/2 sm:justify-between sm:pointer-events-none">
                <button
                  onClick={goToPrevious}
                  className="sm:pointer-events-auto p-3 sm:p-2 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 active:bg-zinc-600 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="sm:pointer-events-auto p-3 sm:p-2 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700 active:bg-zinc-600 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-blue-500"
                      : "bg-zinc-600 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>


      </div>
    </section>
  );
}
