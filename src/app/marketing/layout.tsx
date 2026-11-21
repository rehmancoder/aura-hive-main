import { Footer } from "@/components/Footer";

/** Every Marketing Solutions page shares this footer; the header (in the root layout) follows the address. */
export default function MarketingLayout({ children }: LayoutProps<"/marketing">) {
  return (
    <>
      {children}
      <Footer division="marketing" />
    </>
  );
}
