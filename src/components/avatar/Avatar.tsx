import classNames from 'classnames'
import React, { FC, useState } from 'react'
import { AvatarProps } from 'utils/interfaces'

import './Avatar.sass'

const Avatar: FC<AvatarProps> = ({
  size = 40,
  radius = 4,
  src,
  defaultAvatar = 'https://gravatar.com/avatar/2a104e4dab5a3369b8737347683ef28b?s=200&d=identicon&r=x',
  alt,
  color = 'primary',
  text
}) => {
  const [imgError, setImgErrorVal] = useState(false)

  const imgClasses = classNames({
    'danger-image': true,
    'danger-hidden': text && (!src || imgError),
    'danger-primary-background': !text && (!src || imgError),
    'danger-default-avatar': !text && (!src || imgError)
  })

  const textClasses = classNames({
    'danger-avatar-text': true,
    'danger-hidden': !text || (src && !imgError),
    'danger-light-primary-background':
      typeof src === 'undefined' || (imgError && color === 'primary')
  })

  return (
    <div
      className='danger-avatar'
      style={{ width: size, height: size, borderRadius: `${radius}px` }}
    >
      <img
        src={typeof src !== 'undefined' && !imgError ? src : defaultAvatar}
        alt={alt}
        onError={() => setImgErrorVal(true)}
        className={imgClasses}
        style={{
          background:
            typeof src === 'undefined' || (imgError && color !== 'primary')
              ? color
              : ''
        }}
      />
      <div
        className={textClasses}
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
