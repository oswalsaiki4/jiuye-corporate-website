export default function Loading() {
  return (
    <div className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        {/* 简化的loading动画 */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-2 border-zinc-800 rounded-full" />
          <div className="absolute inset-0 border-2 border-transparent border-t-blue-500 rounded-full animate-spin" />
        </div>
        <p className="text-sm text-zinc-500">加载中...</p>
      </div>
    </div>
  );
}
