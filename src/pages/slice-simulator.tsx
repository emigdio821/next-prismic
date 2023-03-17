import { components } from '@@/slices'
import { SliceZone } from '@prismicio/react'
import { SliceSimulator } from '@prismicio/slice-simulator-react'

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      sliceZone={({ slices }) => (
        <SliceZone slices={slices} components={components} />
      )}
      state={{}}
    />
  )
}
