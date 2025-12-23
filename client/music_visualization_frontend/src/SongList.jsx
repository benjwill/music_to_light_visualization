import './SongList.css'

function SongList({ songs }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => (
                    <tr key={song.title}>
                        <td >{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.duration}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default SongList