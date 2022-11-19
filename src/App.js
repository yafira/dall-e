import { Config, OpenAI_API } from 'openai'

import { useState } from 'react'
import './App.css'

function App() {
	const [prompt, setPrompt] = useState('')
	const configuration = new Config({
		apiKey: import.meta.env.OpenAI_API,
	})

	const openai = new OpenAI_API(configuration)

	const generateImage = async () => {}

	return (
		<div className='app-main'>
			<>
				<h2>Generate an Image using Open AI API</h2>

				<textarea
					className='app-input'
					placeholder='Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh..'
					onChange={(e) => setPrompt(e.target.value)}
					rows='10'
					cols='40'
				/>
				<button onClick={generateImage}>Generate an Image</button>
			</>
		</div>
	)
}

export default App
