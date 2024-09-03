import { Navbar } from "@/admin/components/navbar";
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
        title: translations[lang].admin.title + ' - Allian',
    }
}


export default function Admin() {
    return (
        < Navbar />
    )
}