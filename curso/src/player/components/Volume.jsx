import React from 'react';
import VolumeIcon from '../../icons/components/Volume.jsx';
import MuteIcon from '../../icons/components/Mute.jsx';
import './volume.css';
function Volume(props) {
  return (
      <button
        className="Volume"
      >
        <div onClick={props.handleVolumeToggle}>
        {/*console.log(props)*/}
        {
          props.volume ?
            <VolumeIcon
            color={'white'}
            size={25}
            />
            : <MuteIcon
              color='white'
              size={25}
            />
        }
        {/*console.log(props.volume)*/}
        </div>
        <div className="Volume-range">
          <input
            type="range"
            min={0}
            max={1}
            step={.05}
            onChange={props.handleVolumeChange}
          />
        </div>
    </button>
  );
}

export default Volume;
