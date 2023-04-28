import { MainLayout } from "@/components/MainLayout/MainLayout";

interface Props {
  aboutInfo: {
    title: string
  }
}
export default function About({ aboutInfo }: Props) {
  return (
    <MainLayout title="About Page">
      <h1>{aboutInfo.title}</h1>
    </MainLayout>
  )
}

export const getServerSideProps = async () => {
  const responce = await fetch('http://localhost:4200/about');
  const aboutInfo = await responce.json();

  return { props: { aboutInfo } }
}
