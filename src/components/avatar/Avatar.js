import React, { useState } from 'react'

import styles from './Avatar.sass'

const Avatar = ({
  size = 40,
  radius = 10,
  src,
  defaultAvatar = 'https://gravatar.com/avatar/2a104e4dab5a3369b8737347683ef28b?s=200&d=identicon&r=x',
  alt,
  color = 'primary',
  border = false,
  text
}) => {
  const [imgError, setImgErrorVal] = useState(false)

  return (
    <div
      className={styles.DangerAvatar}
      style={{ width: size, height: size, borderRadius: `${radius}px` }}
    >
      <img
        src={typeof src !== 'undefined' && !imgError ? src : defaultAvatar}
        alt={alt}
        onError={() => setImgErrorVal(true)}
        className={`${styles.DangerImage} ${
          (!src || imgError) && text ? styles.DangerHidden : ''
        } ${
          (!src || imgError) && !text ? styles.DangerPrimaryBackground : ''
        } ${(!src || imgError) && !text ? styles.DangerDefaultAvatar : ''}`}
        style={{
          background:
            typeof src === 'undefined' || (imgError && color !== 'primary')
              ? color
              : ''
        }}
      />
      <div
        className={`${styles.DangerAvatarText} ${
          !text ? styles.DangerHidden : ''
        } ${src && !imgError ? styles.DangerHidden : ''} ${
          typeof src === 'undefined' || (imgError && color === 'primary')
            ? styles.DangerLightPrimaryBackground
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
