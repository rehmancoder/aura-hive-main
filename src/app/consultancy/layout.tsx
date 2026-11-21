import { Footer } from "@/components/Footer";

/** Every Consultancy Solutions page shares this footer; the header (in the root layout) follows the address. */
export default function ConsultancyLayout({ children }: LayoutProps<"/consultancy">) {
  return (
    <>
      {children}
      <Footer division="consultancy" />
    </>
  );
}
