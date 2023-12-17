import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-center bg-primary-50 bg-dotted-pattern min-h-screen w-full bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
}
