import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 40, className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Robot Logo - Using user's original PNG file */}
      <div
        className="flex items-center justify-center rounded-lg overflow-hidden"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo.png"
          alt="九烨 Logo"
          width={size}
          height={size}
          className="object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white tracking-tight">
            九烨
          </span>
          <span className="text-[10px] text-zinc-500 tracking-widest uppercase">
            JIUYE DATA
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoIcon({ size = 40, className = "" }: Omit<LogoProps, 'showText'>) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logo.png"
        alt="九烨 Logo"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
}
