import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  console.log(router);
  return <p>Post: {router.query.slug}</p>;
}
