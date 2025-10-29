import { MainNav } from "@/components/main-nav";
import LatestPosts from "@/components/home/latest-posts";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
        <LatestPosts />
        </div>
      </main>
    </Container>
  );
}
