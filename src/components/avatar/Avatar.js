import React, { useState } from 'react'

import styles from './Avatar.sass'
import DefaultAvatar from '../../assets/user.svg'

const Avatar = ({
  size = 40,
  radius = 10,
  src,
  alt,
  color = 'primary',
  border = false,
  text
}) => {
  const [imgError, setImgErrorVal] = useState(false)

  return (
    <div
      className={styles.ByteAvatar}
      style={{ width: size, height: size, borderRadius: `${radius}px` }}
    >
      <img
        src={typeof src !== 'undefined' && !imgError ? src : DefaultAvatar}
        alt={alt}
        onError={() => setImgErrorVal(true)}
        className={`${styles.ByteImage} ${
          (!src || imgError) && text ? styles.ByteHidden : ''
        } ${(!src || imgError) && !text ? styles.BytePrimaryBackground : ''} ${
          (!src || imgError) && !text ? styles.ByteDefaultAvatar : ''
        }`}
        style={{
          background:
            typeof src === 'undefined' || (imgError && color !== 'primary')
              ? color
              : ''
        }}
      />
      <div
        className={`${styles.ByteAvatarText} ${
          !text ? styles.ByteHidden : ''
        } ${src && !imgError ? styles.ByteHidden : ''} ${
          typeof src === 'undefined' || (imgError && color === 'primary')
            ? styles.ByteLightPrimaryBackground
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
