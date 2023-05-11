import dynamic from "next/dynamic";

export const Hero = dynamic(async function() {
  const component = await import('./Hero')
  return component.Hero
})

export const Image = dynamic(async function() {
  const component = await import('./Image')
  return component.Image
})

export const TitleOne = dynamic(async function() {
  const component = await import('./Titles/TitleOne')
  return component.TitleOne
})

export const TitleTwo = dynamic(async function() {
  const component = await import('./Titles/TitleTwo')
  return component.TitleTwo
})
