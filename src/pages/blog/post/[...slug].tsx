import { useRouter } from "next/router";

export default function BlogPage() {
    const router = useRouter();
    const segment = router.query.slug as string[];

    return (
        <div>
            <h2>Pos: {segment?.join('/')} </h2>
        </div>
    )
}