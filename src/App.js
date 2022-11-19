import React from 'react'
import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'

function App() {
	const [userPrompt, setPrompt] = useState('')
	const [result, setResult] = useState('')
	const api_key = process.env.REACT_APP_OPENAI_API_KEY
	const configuration = new Configuration({
		apiKey: api_key,
	})
	const openai = new OpenAIApi(configuration)
	console.log(api_key)
	const generateImage = async () => {
		const imageParameters = {
			prompt: userPrompt,
			n: 1,
			size: '256x256',
		}
		const response = await openai.createImage(imageParameters)
		setResult(response.data.data[0].url)
	}

	return (
		<div className='app-main'>
			<>
				<h2>Generate an Image using Open AI API</h2>

				<textarea
					className='app-input'
					placeholder='Search Bears with Paint Brushes and the Starry Night painted by Vincent Van Gogh..'
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
		</div>
	)
}

export default App
