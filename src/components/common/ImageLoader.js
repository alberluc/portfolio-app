import React, {useEffect, useState} from "react"
import {useClassList} from "../../hooks/useClassList"
import './ImageLoader.css'

export function ImageLoader({tiny, src, alt, className, ...props}) {

  const [isLoaded, setIsLoaded] = useState(false)
  const classList = useClassList([className, 'ImageLoader'])

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => setIsLoaded(true)
  }, [src])

  if (!isLoaded) classList.add('ImageLoader-tiny')

  return !isLoaded
    ? <img src={tiny} alt={alt} className={classList} {...props}/>
    : <img src={src} alt={alt} className={classList} {...props}/>
}