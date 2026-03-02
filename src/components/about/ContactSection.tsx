import { SectionHeader } from "@/components/ui/section-header";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "商务邮箱",
    titleEn: "Business Email",
    value: "business@jiuye.ai",
    description: "商务合作与数据服务咨询",
  },
  {
    icon: Phone,
    title: "咨询热线",
    titleEn: "Hotline",
    value: "400-888-9988",
    description: "工作日 9:00-18:00",
  },
  {
    icon: MapPin,
    title: "公司地址",
    titleEn: "Address",
    value: "深圳市",
    description: "深圳九烨数据智能科技有限公司",
  },
  {
    icon: Clock,
    title: "工作时间",
    titleEn: "Working Hours",
    value: "周一至周五",
    description: "9:00 - 18:00",
  },
];

const cooperationTypes = [
  {
    title: "数据采购",
    description: "标准数据集或定制采集服务的采购咨询",
    suitable: "科研机构、AI企业、机器人厂商",
  },
  {
    title: "战略合作",
    description: "长期数据合作与生态共建",
    suitable: "头部企业、研究机构",
  },
  {
    title: "技术合作",
    description: "技术交流与联合研发",
    suitable: "技术企业、高校院所",
  },
  {
    title: "投资者关系",
    description: "公司发展与投资机会",
    suitable: "投资机构、产业基金",
  },
];

export function ContactSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="contact">
      <div className="container-wide">
        <SectionHeader
          label="联系我们"
          title="开启合作"
          titleEn="Contact Us"
          description="无论您是寻求数据服务、探讨合作机会，还是了解更多关于九烨的信息，我们都期待与您交流。"
          align="center"
        />

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/50 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {info.title}
              </h3>
              <p className="text-xs text-zinc-600 mb-3">{info.titleEn}</p>
              <p className="text-base font-medium text-white mb-1">{info.value}</p>
              <p className="text-xs text-zinc-500">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Cooperation Types */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/50">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
              合作方式
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              我们欢迎多种形式的合作
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cooperationTypes.map((type) => (
              <div
                key={type.title}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
              >
                <h4 className="text-base font-semibold text-white mb-2">
                  {type.title}
                </h4>
                <p className="text-sm text-zinc-400 mb-4">{type.description}</p>
                <div className="pt-3 border-t border-zinc-800">
                  <p className="text-xs text-zinc-600">适合对象</p>
                  <p className="text-xs text-zinc-500">{type.suitable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Notice */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/20 text-center">
          <h4 className="text-xl font-bold text-white mb-4">
            期待与您的交流
          </h4>
          <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
            请通过上述方式与我们联系，我们的商务团队将在1-2个工作日内回复您。
            对于紧急需求，请直接拨打咨询热线。
          </p>
          <a
            href="mailto:business@jiuye.ai"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all"
          >
            发送邮件咨询
          </a>
        </div>
      </div>
    </section>
  );
}
