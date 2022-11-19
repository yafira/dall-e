import { Configuration, OpenAIApi } from 'openai'

import { useState } from 'react'
import './App.css'

function App() {
	const [prompt, setPrompt] = useState('')
	const [result, setResult] = useState('')
	const configuration = new Configuration({
		apiKey: process.env.OPENAI_API_KEY,
	})

	const openai = new OpenAIApi(configuration)

	const generateImage = async () => {
		const res = await openai.createImage({
			prompt: prompt,
			n: 1,
			size: '512x512',
		})
		setResult(res.data.data[0].url)
	}

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
				{result.length > 0 ? (
					<img className='result-image' src={result} alt='result' />
				) : (
					<></>
				)}
			</>
			)
		</div>
	)
}

export default App
