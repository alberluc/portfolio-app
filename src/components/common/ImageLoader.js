import React, {useEffect, useState} from "react"
import {useClassList} from "../../hooks/useClassList"
import './ImageLoader.css'

export function ImageLoader({tiny, src, alt, className, ...props}) {

  const [isLoading, setIsLoading] = useState(false)
  const classList = useClassList([className, 'ImageLoader'])

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => setIsLoading(true)
  }, [src])

  if (!isLoading) classList.add('ImageLoader-tiny')

  return !isLoading
    ? <img src={tiny} alt={alt} className={classList} {...props}/>
    : <img src={src} alt={alt} className={classList} {...props}/>
}