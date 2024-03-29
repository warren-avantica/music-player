import React from 'react';

const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, setSongs}) => {

  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    await setCurrentSong(selectedSong[0]);
    //ADD ACTIVE STATE
    const newSongs = songs.map((songO) => {
      if(songO.id === song.id) {
        return {
          ...songO,
          active: true
        };
      } else {
        return {
          ...songO,
          active: false
        };
      }
    });
    setSongs(newSongs);
    if(isPlaying) audioRef.current.play()
  };

  return(
    <div onClick={songSelectHandler} className={`library-song ${song.active? 'selected' : ""}`}>
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}
export default LibrarySong;