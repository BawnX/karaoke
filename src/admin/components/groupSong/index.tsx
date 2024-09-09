import Song, { SongProps } from "../song";
import styles from './groupSong.module.css'

export default function GroupSong() {
    const songs: Array<SongProps> = [
        {
            id: "1",
            src: "https://i.scdn.co/image/ab67616d000048513c42492826b1cbcf79cbabaa",
            track: "Children in the dark",
            album: "BROKEN HEARTS",
            duration: 178842
        },
        {
            id: "1",
            src: "https://i.scdn.co/image/ab67616d000048513c42492826b1cbcf79cbabaa",
            track: "Children in the dark",
            album: "BROKEN HEARTS",
            duration: 178842
        }
    ]

    return (
        <article className={styles.songContainer}>
            <section className={styles.songTitle}>
                <strong></strong>
                <strong>Canción</strong>
                <strong>Album</strong>
                <strong>Duración</strong>
                <strong></strong>
            </section>
            {songs.map(({ id, album, duration, src, track }) => (
                <Song
                    key={id}
                    id={id}
                    album={album}
                    duration={duration}
                    src={src}
                    track={track}
                />
            ))}
        </article>
    )
}