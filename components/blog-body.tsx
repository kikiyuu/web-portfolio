import type { ComponentType } from "react";

export function BlogBody({ Content }: { Content: ComponentType }) {
  return (
    <div className="mt-10 space-y-8 text-[0.9375rem] leading-8 text-ink">
      <Content />
    </div>
  );
}
