import { Button } from "@/common/components/button";
import styles from "./song.module.css"
import Image from "next/image";

export interface SongProps {
    id: string,
    src: string,
    track: string,
    album: string,
    duration: number,
}

export default function Song({ src, track, album, duration }: Readonly<SongProps>) {
    const time = new Date(duration).toISOString().slice(14, 19)
    return (
        <section className={styles.song}>
            <Image
                src={src}
                alt="song album"
                width={64}
                height={64}
            />
            <strong>{track}</strong>
            <strong>{album}</strong>
            <strong>{time}</strong>
            <div>
                <Button color="primary-200" hover="primary-100">Cambiar</Button>
                <Button color="accent-200" hover="accent-100">Eliminar</Button>
            </div>
        </section>

    )
}