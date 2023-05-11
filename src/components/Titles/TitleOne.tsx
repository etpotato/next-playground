export type TitleOneProps = {
  children?: React.ReactNode
}

export function TitleOne({ children = 'Title One' }: TitleOneProps) {
  console.log('title_one_code')
  return <h1>{children}</h1>
}
