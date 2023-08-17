import { useGetPost } from "@/hooks"

export default function Header(): JSX.Element {
    const {data, isLoading} = useGetPost();


    if(isLoading)
        return <>Loading..</>
    return (
        <header>

            <h1 className="text-3xl font-bold underline">{data?.title} </h1>

            <button className="btn w-64 rounded-full">Button</button>
        </header>
    )
}