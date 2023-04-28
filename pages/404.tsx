import { MainLayout } from "@/components/MainLayout/MainLayout";
import Link from "next/link";

function ErrorPage() {
  return (
    <MainLayout title="404 page">
      <h1>404 -Page not Found</h1>
      <p>Please <Link href={'/'}>Go home</Link> to safety</p>
    </MainLayout>
  );
}

export default ErrorPage;