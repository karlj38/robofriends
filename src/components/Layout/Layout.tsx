import { ErrorBoundary, Header } from "#/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </>
  );
}
