import GroupSong from "@/admin/components/groupSong";
import MainContent from "@/admin/components/main";
import { Navbar } from "@/admin/components/navbar";
import Card from "@/common/components/card";
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
        <>
            < Navbar />
            <MainContent>
                <GroupSong />
            </MainContent>
        </>
    )
}