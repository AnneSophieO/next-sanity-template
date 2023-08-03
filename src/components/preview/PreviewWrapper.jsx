import { Slot } from '@radix-ui/react-slot'
import PreviewData from './PreviewData'
import PreviewProvider from './PreviewProvider'

export default function PreviewWrapper(props) {
  const { preview = false, query = null, params = {}, initialData, ...rest } = props

  if (!preview || !query) {
    const nonPreviewProps = { ...rest, data: initialData }
    return <Slot {...nonPreviewProps} />
  }

  return (
    <PreviewProvider token={props.preview}>
      <PreviewData initialData={props.initialData} query={query} params={params}>
        {props.children}
      </PreviewData>
    </PreviewProvider>
  )
}