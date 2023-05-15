import { useRef, useEffect } from 'react'

import { STYLES } from '@/constants/common'

interface Props {
  src: string
  srcSp?: string
  srcNoImage?: string
  alt: string
  width: string
  height: string
  loading?: 'lazy' | 'eager'
}

function Image({
  src,
  srcSp,
  srcNoImage = 'https://placehold.jp/200x200.png?text=NoImage',
  alt,
  width,
  height,
  loading = 'lazy',
}: Props) {
  const ref = useRef<HTMLImageElement>(null)
  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (ref.current != null && srcNoImage != null) {
      ref.current.src = srcNoImage
      ref.current.setAttribute('data-fallback-image', 'true')
    }
  }

  useEffect(() => {
    if (ref.current == null) return
    ref.current.removeAttribute('data-fallback-image')
  }, [src, srcSp])

  return (
    <>
      {srcSp != null ? (
        <picture ref={ref}>
          <source srcSet={srcSp} media={`(max-width: ${STYLES.breakpointSm})`} />
          <source srcSet={src} media={`(min-width: ${parseInt(STYLES.breakpointSm) + 1}px)`} />
          <img src={src} alt={alt} width={width} height={height} loading={loading} onError={onError} />
        </picture>
      ) : (
        <img ref={ref} src={src} alt={alt} width={width} height={height} loading={loading} onError={onError} />
      )}
    </>
  )
}

export default Image
