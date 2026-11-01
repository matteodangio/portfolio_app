import SectionRailNav from "@/components/layout/sectionRailNav";
import { desktopNavStyle } from "@/data/navigation";

type SectionsShellProps = {
  children: React.ReactNode;
};

export default function SectionsShell({ children }: SectionsShellProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-6">
      <div
        className={`grid grid-cols-1 gap-8 md:gap-12 ${
          desktopNavStyle === "rail" ? "md:grid-cols-[72px_minmax(0,1fr)]" : ""
        }`}
      >
        <SectionRailNav />

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
