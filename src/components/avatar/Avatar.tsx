import React, { useState } from 'react'

import './Avatar.sass'

interface IProps {
  size?: number
  radius?: number
  src?: string
  defaultAvatar?: string
  alt?: string
  color?: string
  text?: string
}

const Avatar = ({
  size = 40,
  radius = 10,
  src,
  defaultAvatar = 'https://gravatar.com/avatar/2a104e4dab5a3369b8737347683ef28b?s=200&d=identicon&r=x',
  alt,
  color = 'primary',
  text
}: IProps) => {
  const [imgError, setImgErrorVal] = useState(false)

  return (
    <div
      className={'DangerAvatar'}
      style={{ width: size, height: size, borderRadius: `${radius}px` }}
    >
      <img
        src={typeof src !== 'undefined' && !imgError ? src : defaultAvatar}
        alt={alt}
        onError={() => setImgErrorVal(true)}
        className={`${'DangerImage'} ${
          (!src || imgError) && text ? 'DangerHidden' : ''
        } ${(!src || imgError) && !text ? 'DangerPrimaryBackground' : ''} ${
          (!src || imgError) && !text ? 'DangerDefaultAvatar' : ''
        }`}
        style={{
          background:
            typeof src === 'undefined' || (imgError && color !== 'primary')
              ? color
              : ''
        }}
      />
      <div
        className={`${'DangerAvatarText'} ${!text ? 'DangerHidden' : ''} ${
          src && !imgError ? 'DangerHidden' : ''
        } ${
          typeof src === 'undefined' || (imgError && color === 'primary')
            ? 'DangerLightPrimaryBackground'
            : ''
        }`}
        style={{
          background:
            typeof src === 'undefined' || (imgError && color !== 'primary')
              ? color
              : ''
        }}
      >
        {text && text.substring(0, 2)}
      </div>
    </div>
  )
}

export default Avatar
