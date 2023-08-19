import { useGetPost } from "@/hooks"; 

export default function Home(): JSX.Element {
    const getP = useGetPost();
    console.log(getP)
    
    return (
        <>
            صفحه اصلی
        </>
    )
}