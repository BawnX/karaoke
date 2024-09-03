import { translations } from "@/common/const/translation";
import { Metadata } from "next";

type Props = {
    params: { lang: string }
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { lang } = params

    return {
        title: translations[lang].home.title + ' - Allian',
    }
}


export default function Home() {
    return (<h1>index</h1>)
}