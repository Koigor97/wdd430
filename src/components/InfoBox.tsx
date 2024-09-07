import { type ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

function InfoBox({ mode, severity = "low", children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside className={`infobox infobox-${mode}`}>
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-${mode} warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
