import { Radio } from '@nextui-org/react'

// FIXME:

const Radios = () => (
	<Radio.Group label="Options" defaultValue="A">
		<Radio value="A">Option A</Radio>
		<Radio value="B">Option B</Radio>
		<Radio value="C">Option C</Radio>
		<Radio value="D">Option D</Radio>
	</Radio.Group>
)

export { Radios }
