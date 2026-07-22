import { Container } from "./Container";
import { MonoLabel } from "./MonoLabel";

type Props = {
  children: React.ReactNode;
  /** Terminal section identifier, e.g. "01 · services" (Signal §6.1). */
  label?: string;
  raised?: boolean;
  className?: string;
  id?: string;
};

export function Section({ children, label, raised = false, className = "", id }: Props) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${raised ? "bg-surface-raised" : ""} ${className}`}
    >
      <Container>
        {label ? <MonoLabel className="mb-4 block">{label}</MonoLabel> : null}
        {children}
      </Container>
    </section>
  );
}
