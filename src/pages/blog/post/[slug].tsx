import { useRouter } from "next/router";

export default function BlogPage() {
    const router = useRouter();
    console.log(router.query.slug);

    return (
        <div>
            <h2>Post!2: {router.query.slug}</h2>
        </div>
    )
}